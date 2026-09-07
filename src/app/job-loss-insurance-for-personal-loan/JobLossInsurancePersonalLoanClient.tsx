'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
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
  Phone,
  AlertCircle,
  Briefcase,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Scale,
  ExternalLink,
  ChevronDown,
  Landmark,
  BadgeAlert,
  FileSearch,
  Check
} from 'lucide-react';

export default function JobLossInsurancePersonalLoanClient() {
  const [activeId, setActiveId] = useState<string>('executive-summary');
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
    { id: 'executive-summary', label: 'Executive Summary & Key Takeaways' },
    { id: 'credit-shield-fundamentals', label: '1. Credit Shield Fundamentals & Loan Cover' },
    { id: 'financial-breakdown-math', label: '2. Financial Math & Settlement Calculations' },
    { id: 'relief-pathways-comparison', label: '3. Debt Relief Pathways Comparison Matrix' },
    { id: 'cibil-score-trajectory', label: '4. CIBIL Algorithm & Scoring Impact' },
    { id: 'visual-claim-blueprint', label: 'Visual Blueprint: Claim Protocol' },
    { id: 'step-by-step-claim-sop', label: '5. 6-Stage Claim & Defense SOP' },
    { id: 'statutory-rights-defense', label: '6. Statutory Rights & Legal Protections' },
    { id: 'three-tier-grievance-matrix', label: '7. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-procedural-timeline', label: '8. Procedural Timeline: Default to Relief' },
    { id: 'specialized-layoff-scenarios', label: '9. Specialized Real-World Scenarios' },
    { id: 'company-profile-section', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources-authorities', label: '10. Citations & Regulatory Authorities' }
  ];

  const faqs = [
    {
      q: 'What is credit shield or job loss insurance on a personal loan?',
      a: 'Credit shield is an insurance policy bundled with personal loans that covers loan repayments during unforeseen events. The job loss component specifically pays 3 consecutive monthly EMIs if the borrower experiences involuntary termination or retrenchment from salaried employment.'
    },
    {
      q: 'How do I check if my existing personal loan has job loss insurance?',
      a: 'Review your original loan sanction letter, Key Fact Statement (KFS), or loan account schedule for line items like Loan Protect, Group Credit Shield, or Insurance Premium deductions. You can also request your Certificate of Insurance (COI) from the lending bank.'
    },
    {
      q: 'Does credit shield cover voluntary resignation or career breaks?',
      a: 'No. Credit shield insurance strictly excludes voluntary resignation, retirement, mutual separation, career sabbaticals, or termination arising from employee misconduct, probation failure, or fraudulent activities. It only triggers on documented involuntary redundancy or corporate downsizing.'
    },
    {
      q: 'How many EMIs does job loss insurance pay in India?',
      a: 'Most standard Indian credit shield policies cover up to 3 consecutive EMIs, subject to an initial waiting period of 30 to 90 days from loan disbursement. After 3 EMIs are disbursed, the policy terminates, and remaining dues become the borrower\'s responsibility.'
    },
    {
      q: 'What documents are required to file a job loss insurance claim?',
      a: 'You must submit the official termination or retrenchment letter from your employer specifying company restructuring, salary slips for the preceding 3 months, bank statements, Form 16, relieving letter, and the completed insurer claim form with loan account details.'
    },
    {
      q: 'What happens if the insurer delays or rejects my job loss claim?',
      a: 'If an insurer delays or unfairly rejects your claim, you can file a formal complaint with the insurer\'s Grievance Redressal Officer, escalate to the IRDAI Bima Bharosa portal, approach the Insurance Ombudsman, or instruct your bank to hold recovery actions pending investigation.'
    },
    {
      q: 'Does filing an insurance claim stop bank recovery calls and NACH debits?',
      a: 'Filing a claim does not automatically freeze automated NACH debits. You must formally submit your claim acknowledgment docket to your bank branch and loan officer in writing, requesting a temporary hold on NACH presentations and recovery enforcement while the claim processes.'
    },
    {
      q: 'Can a bank file a criminal case under Section 25 PSSA if I lose my job?',
      a: 'While banks may issue Section 25 PSSA or Section 138 NI Act notices for bounced EMIs, involuntary unemployment constitutes a genuine lack of criminal fraudulent intent (mens rea). Proving documented job loss and insurance claim status establishes a valid civil defense.'
    },
    {
      q: 'What should I do if my job loss insurance cover expires before I get a job?',
      a: 'If your 3-month cover lapses and you remain unemployed, immediately contact your lender to request a formal loan restructuring or engage CredSettle to negotiate a structured One-Time Settlement (OTS) to waive penal charges and resolve the balance amicably.'
    },
    {
      q: 'How does a job loss credit shield claim impact my CIBIL credit score?',
      a: 'If your insurance claim is approved and the insurer pays your EMIs on time, the bank reports your loan as regular, preserving your CIBIL score. However, if payments are delayed before approval, your score may dip until retrospective credit bureau updates are filed.'
    }
  ];

  return (
    <div className="w-full bg-[#FDFDFD] text-slate-800 antialiased">
      {/* Hero Section */}
      <header className="relative bg-[#2452ae] text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-blue-100 mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Credit Shield &amp; Loan Insurance Advisory</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              How to Claim Credit Shield Loan Insurance on Job Loss
            </h1>
            <p className="text-base md:text-lg text-blue-100 font-normal leading-relaxed">
              Discover whether your personal loan includes hidden credit shield protection. Learn how to invoke involuntary unemployment clauses, secure 3-month EMI payouts, and halt aggressive debt recovery legally.
            </p>
          </div>
        </div>
      </header>

      {/* Stats Strip */}
      <StatsStrip />

      {/* Main 3-Column Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 font-bold text-slate-900 text-sm">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>On This Page</span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                      activeId === link.id
                        ? 'bg-[#F4F8FE] text-[#1886ff] font-bold border-l-2 border-[#1886ff]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Center Column: Deep Editorial Content */}
          <main className="w-full space-y-10 min-w-0">
            {/* Executive Summary Box */}
            <section
              id="executive-summary"
              className="scroll-target p-6 md:p-8 rounded-2xl bg-[#F4F8FE] border-l-[5px] border-l-[#1886ff] border border-blue-100 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileSearch className="w-4 h-4" />
                <span>Executive Summary &amp; Strategic Brief</span>
              </div>
              <p className="text-sm md:text-base font-semibold text-slate-800 leading-relaxed">
                When sudden corporate layoffs or restructuring trigger severe cash-flow distress, many Indian borrowers remain unaware that their personal loan or credit line carries an active Credit Shield policy. Here is the operational summary:
              </p>
              <div className="grid grid-cols-1 gap-2.5 pt-1 text-xs md:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong>Hidden Loan Cover:</strong> Most personal loans bundle credit shield insurance paying up to 3 EMIs.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong>Involuntary Layoffs Only:</strong> Covers corporate redundancy and restructuring (excludes voluntary exits).</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong>30-Day Claim Window:</strong> Lodge formal claim dossiers with the underwriter within 30 days of termination.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong>Legal Protection:</strong> Involuntary job loss negates criminal liability under Section 25 PSSA and NI Act.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong>Post-Cover OTS:</strong> CredSettle secures 40% to 55% settlement waivers if unemployment exceeds 90 days.</span>
                </div>
              </div>
            </section>

            {/* SECTION 1: Debt Economics & Job Loss Loan Cover */}
            <section id="credit-shield-fundamentals" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>1. Institutional Debt Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Credit Shield Fundamentals: Understanding Job Loss Loan Cover
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In India, retail unsecured lending has expanded rapidly over the past decade. To mitigate systemic default risks on high-margin personal loans, commercial banks and Non-Banking Financial Companies (NBFCs) routinely partner with general insurance providers such as HDFC ERGO, ICICI Lombard, SBI General, and Bajaj Allianz. During loan disbursement, lenders frequently bundle a single-premium group insurance product, widely referred to as Credit Shield, Loan Suraksha, or Payment Protection Insurance (PPI).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While borrowers often perceive this deduction as a mandatory processing surcharge, it actually constitutes a binding tripartite insurance contract. The policy is specifically structured to absorb repayment shocks caused by critical illness, accidental disability, or involuntary loss of employment. Under the job loss rider, the underwriting insurer assumes the contractual liability to service up to three consecutive monthly loan instalments on behalf of the salaried borrower.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The economic rationale behind this mechanism lies in preventing the loan from slipping into Special Mention Account (SMA) delinquency. When an employee is laid off due to corporate downsizing, factory restructuring, or macroeconomic cost reductions, the 90-day liquidity buffer provided by the credit shield prevents the loan asset from decaying into a non-performing asset (NPA). This shields the bank from mandatory Tier-1 capital provisioning requirements under Reserve Bank of India prudential norms while providing the distressed employee vital breathing space to secure alternative employment.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>2. Financial Engineering &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Math: EMI Waivers vs Accumulated Default Liabilities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the numerical mechanics of job loss insurance demonstrates how substantial savings are achieved compared to an unmanaged default. When an EMI bounces without active insurance intervention, commercial lenders levy severe compound penalties. A standard personal loan with a monthly instalment of ₹25,000 subjected to three consecutive bounces quickly accumulates ₹1,500 to ₹3,000 in NACH bounce fees, 24% to 36% annual penal interest on overdue principal, and immediate credit bureau downgrade notices.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Conversely, invoking an active Credit Shield policy completely pauses the accrual of punitive levies. The insurer disburses three full EMIs (totaling ₹75,000 in this scenario) directly to the lending institution. This direct capital infusion maintains the loan account in Standard status across CIBIL and Experian databases, eliminating financial hemorrhaging while the borrower refocuses on professional re-employment.
              </p>

              {/* Calculation Breakdown Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-sm space-y-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                  <span>Representative 180-Day Financial Trajectory: Personal Loan of ₹8,00,000</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/60 space-y-2">
                    <span className="font-bold text-red-900 block">Scenario A: Unmanaged Delinquency (No Cover)</span>
                    <p className="text-slate-700">Monthly EMI: ₹26,500 over 6 months of joblessness</p>
                    <p className="text-slate-700">Accumulated Overdue EMIs: ₹1,59,000</p>
                    <p className="text-slate-700">Penal Interest (30% p.a.) &amp; Bounce Fees: ₹38,400</p>
                    <p className="font-bold text-red-700 pt-1 border-t border-red-200">Total Immediate Claim Demand: ₹1,97,400 (NPA Status)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/60 space-y-2">
                    <span className="font-bold text-emerald-900 block">Scenario B: Credit Shield + CredSettle OTS</span>
                    <p className="text-slate-700">Insurer 3-Month EMI Disbursal: -₹79,500 (Covered)</p>
                    <p className="text-slate-700">Protected Period: 90 Days Zero Penalty &amp; Regular CIBIL</p>
                    <p className="text-slate-700">Subsequent CredSettle OTS Settlement on Balance: 48% Principal Waiver</p>
                    <p className="font-bold text-emerald-700 pt-1 border-t border-emerald-200">Total Net Borrower Outflow: ₹3,15,000 vs ₹7,20,500 Due</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic">
                  Note: Settlement figures reflect historical averages across private commercial banks in India. Actual compromise terms depend on bank credit committee approvals and documented income impairment.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="relief-pathways-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>3. Strategic Options Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Debt Relief Pathways: Credit Shield vs Moratorium vs Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When career disruption eliminates your primary income stream, evaluating all available debt relief avenues prevents costly procedural missteps. The table below contrasts credit shield claims against alternative institutional resolution mechanisms available under Indian banking regulations:
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-sm bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Relief Pathway</th>
                      <th className="p-3.5 md:p-4">Trigger Condition</th>
                      <th className="p-3.5 md:p-4">Relief Window</th>
                      <th className="p-3.5 md:p-4">CIBIL Score Impact</th>
                      <th className="p-3.5 md:p-4">Final Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Credit Shield Claim</td>
                      <td className="p-3.5 md:p-4">Involuntary redundancy or layoff</td>
                      <td className="p-3.5 md:p-4">3 Monthly EMIs paid by insurer</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-semibold">100% Protected (Standard)</td>
                      <td className="p-3.5 md:p-4">Loan remains active without arrears</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Bank Restructuring</td>
                      <td className="p-3.5 md:p-4">Documented temporary income drop</td>
                      <td className="p-3.5 md:p-4">Tenure extension / lower EMI</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-semibold">Marked as Restructured</td>
                      <td className="p-3.5 md:p-4">Higher total interest over time</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">One-Time Settlement</td>
                      <td className="p-3.5 md:p-4">Prolonged unemployment &gt;90 days</td>
                      <td className="p-3.5 md:p-4">Single or 3-tranche compromise</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-semibold">Marked as Settled</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Permanent debt closure + NDC</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Lok Adalat Referral</td>
                      <td className="p-3.5 md:p-4">Pre-litigation conciliation</td>
                      <td className="p-3.5 md:p-4">Mutually agreed concession</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-semibold">Reflects Compromised status</td>
                      <td className="p-3.5 md:p-4">Decree passed with court seal</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 bg-red-50/30">
                      <td className="p-3.5 md:p-4 font-semibold text-red-900">Unmanaged Inaction</td>
                      <td className="p-3.5 md:p-4">Ignored default &amp; bounced EMIs</td>
                      <td className="p-3.5 md:p-4">Zero relief; penal interest compounds</td>
                      <td className="p-3.5 md:p-4 text-red-600 font-semibold">Severe Drop (-150 Points)</td>
                      <td className="p-3.5 md:p-4 text-red-700">Legal notices &amp; recovery visits</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-score-trajectory" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>4. Credit Bureau Bureaucracy &amp; Scoring</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Trajectory: Credit Scoring Impact During Job Loss
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit information companies in India, including TransUnion CIBIL, Experian, CRIF High Mark, and Equifax, compute your three-digit credit score based on five core mathematical parameters: payment history (35%), credit exposure and utilization (30%), credit duration (15%), credit type mix (10%), and recent inquiries (10%). During sudden unemployment, the payment history component faces immediate exposure to severe degradation.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a valid Credit Shield claim is processed seamlessly, the underwriting insurance company remits the exact instalment amount prior to the monthly billing closure date. As a consequence, the lending bank transmits a clean "000" Days Past Due (DPD) record to the credit bureau, preserving your baseline score in the 750 to 800 range. This ensures your financial reputation remains unblemished during your job transition period.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, if the claim is delayed due to incomplete documentation or procedural bottlenecks at the Third-Party Administrator (TPA) level, the bank automated reporting engine may mistakenly log 30-day or 60-day DPD entries. In such instances, borrowers possess a statutory right under Section 21 of the Credit Information Companies (Regulation) Act (CICRA), 2005 to mandate retrospective rectification. Upon presenting the final insurance claim approval and disbursal voucher, the lender is legally required to submit an updated Member Credit Information file to purge erroneous delinquency tags.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-claim-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Claim Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: Step-by-Step Credit Shield Claim Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual workflow outlines the sequential stages required to verify policy coverage, assemble an indisputable hardship dossier, and secure complete EMI relief or structured settlement:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/job-loss-insurance-for-personal-loan.jpg"
                    alt="Credit Shield and Job Loss Loan Insurance Claim and Debt Resolution Process Diagram"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Regulatory Architecture • IRDAI Policyholder Protection &amp; RBI Guidelines</span>
                  <a
                    href="/images/infographics/job-loss-insurance-for-personal-loan.jpg"
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
            <section id="step-by-step-claim-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure: 6 Steps to Claim Job Loss Cover
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To navigate the insurance claiming mechanism successfully without triggering avoidable rejection clauses, follow this rigorous six-stage procedural roadmap developed by CredSettle debt resolution professionals:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <h3>Stage 1: Document Discovery &amp; Policy Certificate Verification</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8">
                    Locate your initial loan sanction letter, Key Fact Statement (KFS), and loan amortization schedule. Identify specific deductions labeled as "Insurance Premium", "Loan Protect", or "Credit Shield". Contact your lending branch to request your unique Certificate of Insurance (COI) containing the master policy number and underwriter details.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <h3>Stage 2: Hardship Evidence Dossier Compilation</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8">
                    Assemble comprehensive documentary proof establishing involuntary retrenchment. This includes your official termination or redundancy letter on corporate letterhead, three months of preceding salary slips, Form 16, relieving documentation, and written verification confirming no ongoing disciplinary investigations or fraudulent misconduct.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <h3>Stage 3: Formal Claim Intimation within Statutory Window</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8">
                    Lodge the formal claim with the general insurance underwriter via registered email and their official web portal within 15 to 30 calendar days of termination. Attach the completed claim intimation form alongside your compiled hardship dossier to generate a verified claim docket tracking number.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <h3>Stage 4: Bank Branch Notification &amp; NACH Presentation Moratorium</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8">
                    Submit a formal written representation to your bank loan operations desk and Branch Manager referencing the active insurance claim docket. Explicitly request an interim freeze on automated NACH mandate presentations to avoid recursive bounce fees and prevent automated debt collector assignment.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">5</span>
                    <h3>Stage 5: Claim Adjudication &amp; Direct EMI Disbursal Tracking</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8">
                    Under IRDAI regulations, the insurer must process complete claims within 30 days. Monitor claim disbursal confirmations to ensure the three monthly EMI tranches are credited directly into your loan account, eliminating penal interest and maintaining uninterrupted loan servicing.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">6</span>
                    <h3>Stage 6: Post-Cover Strategy &amp; Structured Debt Resolution</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8">
                    If professional re-employment is secured within 90 days, regular EMI payments resume smoothly. However, if joblessness persists beyond the three-month insurance payout window, engage CredSettle debt resolution specialists to structure an amicable One-Time Settlement (OTS) to permanently extinguish remaining liabilities.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Rights & Legal Protections */}
            <section id="statutory-rights-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>6. Legal Safeguards &amp; Consumer Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Rights: IRDAI Guidelines &amp; Loan Insurance Bundling
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers dealing with unexpected employment loss often endure severe collection pressure and aggressive legal notices. Indian law provides extensive statutory protections to safeguard honest individuals navigating genuine financial hardship:
              </p>

              {/* 4-Card Analytical Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <h4>IRDAI Policyholder Protection</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The IRDAI (Protection of Policyholders' Interests) Regulations mandate that general insurers decide on claims within 30 days of receiving the final survey report. Unreasonable rejections or delays attract statutory penal interest at 2% above prevailing bank rate.
                  </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                    <h4>Section 25 PSSA &amp; NI Act Defense</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Bounced NACH mandates during active insurance processing do not constitute criminal fraud. Involuntary job loss and active claim filing establish a complete lack of criminal intention (mens rea), providing a solid legal defense before Magistrate Courts.
                  </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h4>RBI Fair Practices Code Protections</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under RBI Master Directions, recovery agents are strictly prohibited from visiting borrowers outside 8:00 AM to 7:00 PM, calling references or employers, or engaging in public humiliation. Violations permit immediate police FIRs and RBI Ombudsman complaints.
                  </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <h4>Consumer Protection Act Remedies</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under the Consumer Protection Act, 2019, arbitrary repudiation of a valid credit shield claim constitutes actionable "Deficiency of Service" and "Unfair Trade Practice", allowing borrowers to claim full compensation and emotional distress damages.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Redressal Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>7. Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Grievance Matrix: Insurer to IRDAI Bima Bharosa
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the underwriting insurance firm or lending bank rejects your legitimate job loss claim or engages in bureaucratic stalling, follow this structured three-tier statutory escalation pathway:
              </p>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-xs md:text-sm mb-1">
                    <span className="text-[#1886ff]">Level 1: Internal Grievance Redressal Officer (GRO)</span>
                    <span className="text-slate-500 font-medium">Turnaround: 7 - 14 Days</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600">
                    File a formal representation to the appointed Grievance Officer of the insurance company and the Principal Nodal Officer (PNO) of the lending bank attaching your complete claim file and termination evidence.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-xs md:text-sm mb-1">
                    <span className="text-[#1886ff]">Level 2: IRDAI Bima Bharosa &amp; RBI CMS Portal</span>
                    <span className="text-slate-500 font-medium">Turnaround: 15 - 30 Days</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600">
                    If unresolved, register an online complaint on the IRDAI Bima Bharosa portal (bimabharosa.irdai.gov.in) and cross-file on the RBI Complaint Management System (cms.rbi.org.in) against the partner lending institution.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-xs md:text-sm mb-1">
                    <span className="text-[#1886ff]">Level 3: Insurance Ombudsman &amp; Consumer Commission</span>
                    <span className="text-slate-500 font-medium">Statutory Binding Award</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600">
                    Approach the territorial Insurance Ombudsman under the Redressal of Public Grievances Rules, 1998 for free, legally binding quasi-judicial adjudication with zero court fees, or file a petition before the District Consumer Disputes Redressal Commission.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>8. Resolution Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Procedural Timeline: Job Termination to Claim Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating the aftermath of job loss requires strict adherence to statutory and operational milestones. The timeline below illustrates the sequential progression from the date of layoff to final debt resolution:
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-sm bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Timeframe</th>
                      <th className="p-3.5 md:p-4">Operational Milestone</th>
                      <th className="p-3.5 md:p-4">Required Borrower Action</th>
                      <th className="p-3.5 md:p-4">Banking / Legal Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 1 - 7</td>
                      <td className="p-3.5 md:p-4">Termination Notice Received</td>
                      <td className="p-3.5 md:p-4">Retrieve Sanction Letter, KFS, and COI</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-medium">Standard (SMA-0)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 8 - 25</td>
                      <td className="p-3.5 md:p-4">Claim Filing &amp; Bank Hold</td>
                      <td className="p-3.5 md:p-4">Lodge claim dossier; submit NACH hold request</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-medium">Claim Under Review</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 30 - 90</td>
                      <td className="p-3.5 md:p-4">3-Month Insurance Disbursals</td>
                      <td className="p-3.5 md:p-4">Verify monthly EMI credits with lender</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-semibold">100% Regular Servicing</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 91 - 120</td>
                      <td className="p-3.5 md:p-4">Coverage Transition Window</td>
                      <td className="p-3.5 md:p-4">Resume salary EMIs or initiate settlement dialogue</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-medium">SMA-1 Classification</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Month 5 - 6</td>
                      <td className="p-3.5 md:p-4">Compromise Settlement (OTS)</td>
                      <td className="p-3.5 md:p-4">CredSettle negotiates 40% - 55% principal waiver</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-bold">Closed with NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-layoff-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>9. Complex Situational Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Tech Layoffs &amp; Contract Workers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Employment contracts and loan architectures vary substantially across sectors. Here is how credit shield policies and legal defenses operate across four distinct real-world scenarios:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">Corporate Restructuring &amp; IT Layoffs</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Tech professionals impacted by mass global or domestic downsizing easily qualify for credit shield payouts provided the severance letter explicitly states organizational redundancy rather than voluntary separation or performance termination.
                  </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">Probationary &amp; Contractual Staff</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Fixed-term contract completions or probation non-confirmations are often excluded under standard general insurance riders. In such instances, CredSettle directly engages the bank credit committee to structure an immediate One-Time Settlement.
                  </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">Multiple Loans with Partial Insurance</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Borrowers holding personal loans across multiple banks where only one carries insurance require a dual strategy: claiming EMIs on the insured account while proactively negotiating moratoriums or OTS on uninsured lines.
                  </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">Loans Assigned to ARCs</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If an unpaid loan has already been sold to an Asset Reconstruction Company (ARC), past insurance claims can no longer be triggered. However, ARCs purchase portfolios at deep discounts, enabling CredSettle to negotiate substantial 50% to 70% waivers.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <section id="company-profile-section" className="scroll-target pt-2">
              <CompanySection />
            </section>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Job Loss Loan Insurance &amp; Claims
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Find clear, authoritative answers to the most common questions regarding loan protection insurance, eligibility requirements, and debt resolution:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden transition-all duration-150 shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm md:text-base hover:bg-slate-50/70 transition-colors"
                      aria-expanded={openFaq === index}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4 md:px-5 md:pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FDFDFD]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources-authorities" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>10. Regulatory References</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Statutory Citations &amp; Outbound Regulatory Authorities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle adheres strictly to Indian statutory frameworks and regulatory directives. You can verify official guidelines directly from governing bodies:
              </p>

              {/* Outbound Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <a
                  href="https://www.irdai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700"
                >
                  <span>IRDAI Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://bimabharosa.irdai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700"
                >
                  <span>Bima Bharosa</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700"
                >
                  <span>RBI Ombudsman</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700"
                >
                  <span>CIBIL India</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700"
                >
                  <span>India Code Laws</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700"
                >
                  <span>Cyber Crime Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Internal Related Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                  Related CredSettle Legal &amp; Debt Resolution Guides:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/arbitration-notice-personal-loan-default"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F4F8FE] hover:text-[#1886ff] text-slate-700 font-medium transition-colors"
                  >
                    Personal Loan Arbitration Defense
                  </Link>
                  <Link
                    href="/bank-sent-legal-notice-for-loan-what-to-do"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F4F8FE] hover:text-[#1886ff] text-slate-700 font-medium transition-colors"
                  >
                    Bank Legal Notice Reply Protocol
                  </Link>
                  <Link
                    href="/ecs-nach-bounce-legal-notice-section-25"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F4F8FE] hover:text-[#1886ff] text-slate-700 font-medium transition-colors"
                  >
                    Section 25 NACH Bounce Defense
                  </Link>
                  <Link
                    href="/bank-recovery-harassment-complaint"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F4F8FE] hover:text-[#1886ff] text-slate-700 font-medium transition-colors"
                  >
                    Stop Recovery Agent Harassment
                  </Link>
                  <Link
                    href="/cibil-score-kaise-badhaye-after-settlement"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F4F8FE] hover:text-[#1886ff] text-slate-700 font-medium transition-colors"
                  >
                    CIBIL Score Repair After OTS
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* Right Column: Sticky Sidebar */}
          <aside className="sticky top-6 space-y-6">
            <div className="space-y-6">
              {/* Emergency CTA Box */}
              <div className="p-5 md:p-6 rounded-2xl bg-[#2452ae] text-white shadow-md space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Confidential Assessment</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold leading-snug">
                  Struggling with Loan EMIs After Job Loss?
                </h3>
                <p className="text-xs md:text-sm text-blue-100 leading-relaxed">
                  Let CredSettle legal and debt specialists audit your loan policy, file your insurance claim, or negotiate an official compromise settlement.
                </p>
                <a
                  href="tel:+918800226635"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-[#2452ae] font-extrabold text-sm hover:bg-blue-50 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#1886ff]" />
                  <span>Check Your Loan Insurance Eligibility</span>
                </a>
                <div className="flex items-center justify-center gap-1 text-[11px] text-blue-200">
                  <span>Direct Helpline:</span>
                  <span className="font-bold text-white">+91-8800226635</span>
                </div>
              </div>

              {/* Author Bio Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-[#1886ff] flex-shrink-0">
                    <Image
                      src="/default-avatar.jpg"
                      alt="Ashish Jhangra"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Ashish Jhangra</h4>
                    <p className="text-xs text-slate-500 font-medium">Legal &amp; Debt Resolution Professional</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specializing in banking regulatory disputes, IRDAI insurance claims, and structured credit compromise settlements for retail borrowers across India.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>CredSettle Advisory</span>
                  <Link href="/author/ashish-jhangra" className="text-[#1886ff] font-bold hover:underline">
                    View Profile
                  </Link>
                </div>
              </div>

              {/* CredSettle Trust Badges */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400">
                  CredSettle Trust Metrics
                </h4>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>5,400+ Verified Resolutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>4.8 / 5 Verified Client Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>100% Legal &amp; IRDAI Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Strict Anti-Harassment Shield</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
