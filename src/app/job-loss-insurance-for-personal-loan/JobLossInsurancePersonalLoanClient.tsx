'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ShieldCheck, CheckCircle2, AlertTriangle, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, DollarSign, Phone, AlertCircle, Briefcase, ArrowRight, Clock, UserCheck, Sparkles, Scale, ExternalLink, ChevronDown, Landmark, BadgeAlert, FileSearch, Check } from 'lucide-react';
export default function JobLossInsurancePersonalLoanClient() {
    const [activeId, setActiveId] = useState<string>('executive-summary');
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: '-100px 0px -40% 0px',
            threshold: 0.05
        });
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
            a: 'Credit shield is an cover policy bundled with private loans that covers loan payments during unforeseen events. The job loss component mainly pays 3 running monthly EMIs if the client experiences forced end or retrenchment from salaried jobs.'
        },
        {
            q: 'How do I check if my existing personal loan has job loss insurance?',
            a: "Review your original loan sanction letter. Key Fact record (KFS). Loan account schedule for line items like Loan Protect. Group Credit Shield. Or cover Premium deductions. You can also request your letter of cover (COI) from the lending bank."
        },
        {
            q: 'Does credit shield cover voluntary resignation or career breaks?',
            a: "No. Credit shield cover strictly excludes voluntary resignation. Retirement. Mutual separation. Career sabbaticals. end arising from staff misconduct. Probation failure. fraudulent activities. It only triggers on documented forced redundancy or firm downsizing."
        },
        {
            q: 'How many EMIs does job loss insurance pay in India?',
            a: "Most standard Indian credit shield policies cover up to 3 running EMIs. Subject to an initial waiting period of 30 to 90 days from loan disbursement. After 3 EMIs are released. The policy terminates. And remaining dues become the client's responsibility."
        },
        {
            q: 'What documents are required to file a job loss insurance claim?',
            a: "You must submit the formal end or retrenchment letter from your employer specifying firm restructuring. Salary slips for the preceding 3 months. Bank records. Form 16. Relieving letter. The completed firm claim form with loan account details."
        },
        {
            q: 'What happens if the insurer delays or rejects my job loss claim?',
            a: "If an firm delays or unfairly rejects your claim. You can file a formal reports with the firm's Grievance Redressal staff. Escalate to the IRDAI Bima Bharosa portal. Approach the cover staff. Instruct your bank to hold claims steps pending investigation."
        },
        {
            q: 'Does filing an insurance claim stop bank recovery calls and NACH debits?',
            a: 'Filing a claim does not automatically freeze automated NACH debits. You must formally submit your claim acknowledgment docket to your bank branch and loan staff in writing. Requesting a temporary hold on NACH presentations and claims enforcement while the claim processes.'
        },
        {
            q: 'Can a bank file a criminal case under Section 25 PSSA if I lose my job?',
            a: 'While banks may issue Section 25 PSSA or Section 138 NI Act notices for bounced EMIs. forced job loss constitutes a genuine lack of penal fraudulent intent (mens rea). Proving documented job loss and cover claim status establishes a valid civil defense.'
        },
        {
            q: 'What should I do if my job loss insurance cover expires before I get a job?',
            a: "If your 3-month cover lapses and you remain unemployed. Promptly contact your lender to request a formal loan restructuring or engage CredSettle to settle a structured One-Time closure (OTS) to waive penalty charges and resolve the balance amicably."
        },
        {
            q: 'How does a job loss credit shield claim impact my CIBIL credit score?',
            a: 'If your cover claim is approved and the firm pays your EMIs on time. The bank reports your loan as regular. Preserving your CIBIL score. However. If payments are delayed before approval. Your score may dip until retrospective CIBIL desk updates are filed.'
        }
    ];
    return (<div className="w-full bg-[#FDFDFD] text-slate-800 antialiased">
      {/* Hero Section */}
      <header className="relative bg-[#2452ae] text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"/>
        <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-blue-100 mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-300"/>
              <span>Credit Shield &amp. Loan cover Advisory.</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              How to Claim Credit Shield Loan Insurance on Job Loss
            </h1>
            <p className="text-base md:text-lg text-blue-100 font-normal leading-relaxed"> Discover whether your private loans includes hidden credit shield safety. Learn how to invoke forced job loss clauses. Secure 3-month EMI payouts. And halt harsh debt claims by law. </p>
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
                <BookOpen className="w-4 h-4 text-[#1886ff]"/>
                <span>On This Page</span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs font-medium">
                {navLinks.map((link) => (<a key={link.id} href={`#${link.id}`} className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${activeId === link.id
                ? 'bg-[#F4F8FE] text-[#1886ff] font-bold border-l-2 border-[#1886ff]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>
                    {link.label}
                  </a>))}
              </nav>
            </div>
          </aside>

          {/* Center Column: Deep Editorial Content */}
          <main className="w-full space-y-10 min-w-0">
            {/* Executive Summary Box */}
            <section id="executive-summary" className="scroll-target p-6 md:p-8 rounded-2xl bg-[#F4F8FE] border-l-[5px] border-l-[#1886ff] border border-blue-100 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileSearch className="w-4 h-4"/>
                <span>Executive Summary &amp. Strategic Brief.</span>
              </div>
              <p className="text-sm md:text-base font-semibold text-slate-800 leading-relaxed"> When sudden firm layoffs or restructuring trigger severe cash-flow distress. Many Indian clients remain unaware that their private loans or credit line carries an active Credit Shield policy. Here is the daily work summary: </p>
              <div className="grid grid-cols-1 gap-2.5 pt-1 text-xs md:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span><strong>Hidden Loan Cover:</strong> Most own loans bundle credit shield cover paying up to 3 EMIs.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span><strong>Involuntary Layoffs Only:</strong> Covers firm redundancy and restructuring (excludes voluntary exits).</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span><strong>30-Day Claim Window:</strong> Lodge formal claim dossiers with the underwriter within 30 days of termination.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span><strong>Legal Protection:</strong> Involuntary job loss negates criminal risk under Section 25 PSSA and NI Act.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span><strong>Post-Cover OTS:</strong> CredSettle secures 40% to 55% closure waivers if unemployment exceeds 90 days.</span>
                </div>
              </div>
            </section>

            {/* SECTION 1: Debt Economics & Job Loss Loan Cover */}
            <section id="credit-shield-fundamentals" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]"/>
                <span>1. Institutional Debt Framework.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Credit Shield Fundamentals: Understanding Job Loss Loan Cover
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> In India. Retail no-pledge lending has expanded rapidly over the past decade. To reduce systemic default risks on high-margin private loans. Banks and Non-Banking money firms (NBFCs) routinely partner with general cover providers such as HDFC ERGO. ICICI Lombard. SBI General. Bajaj Allianz. During loan disbursement. Lenders often bundle a single-premium group cover product. Widely referred to as Credit Shield. Loan Suraksha. Payment safety cover (PPI). </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> While clients often perceive this deduction as a strict processing surcharge. It actually constitutes a binding tripartite cover contract. The policy is mainly structured to absorb payment shocks caused by key illness. Accidental disability. forced loss of jobs. Under the job loss rider. The underwriting firm assumes the contractual debt risk to service up to three running monthly loan EMIs on behalf of the salaried client. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> The economic rationale behind this mechanism lies in preventing the loan from slipping into Special Mention Account (SMA) default. When an staff is laid off due to firm downsizing. Factory restructuring. Macroeconomic cost reductions. The 90-day liquidity buffer provided by the credit shield prevents the loan asset from decaying into a non-performing asset (NPA). This shields the bank from strict Tier-1 cash bank reserves requirements under Reserve Bank of India prudential norms while providing the distressed staff vital breathing space to secure alternative jobs. </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]"/>
                <span>2. money Engineering &amp. closure Math.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Math: EMI Waivers vs Accumulated Default Liabilities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> grasp the numerical workings of job loss cover shows how large savings are achieved compared to an unmanaged default. When an EMI bounces without active cover action. Trade lenders levy severe compound penalties. A standard private loans with a monthly EMIs of ₹25,000 subjected to three running bounces quickly grows ₹1,500 to ₹3,000 in NACH bounce fees. 24% to 36% annual extra fees on late main loan. fast CIBIL desk downgrade notices. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Conversely. Invoking an active Credit Shield policy fully pauses the accrual of punitive levies. The firm disburses three full EMIs (totaling ₹75,000 in this scenario) straight to the lending institution. This direct cash infusion maintains the loan account in Standard status across CIBIL and Experian databases. Eliminating money hemorrhaging while the client refocuses on expert re-jobs. </p>

              {/* Calculation Breakdown Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-sm space-y-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <TrendingUp className="w-4 h-4 text-[#1886ff]"/> <span>Staff 180-Day money Trajectory: own Loan of ₹8,00,000.</span> </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/60 space-y-2">
                    <span className="font-bold text-red-900 block">Scenario A: Unmanaged default (No Cover).</span>
                    <p className="text-slate-700">Monthly EMI: ₹26,500 over 6 months of joblessness.</p>
                    <p className="text-slate-700">Total late EMIs: ₹1,59,000.</p>
                    <p className="text-slate-700">extra fees (30% p.a.) &amp. Bounce Fees: ₹38,400.</p>
                    <p className="font-bold text-red-700 pt-1 border-t border-red-200">Total fast Claim Demand: ₹1,97,400 (NPA Status).</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/60 space-y-2">
                    <span className="font-bold text-emerald-900 block">Scenario B: Credit Shield + CredSettle OTS.</span>
                    <p className="text-slate-700">Firm 3-Month EMI payout: -₹79,500 (Covered).</p>
                    <p className="text-slate-700">Protected Period: 90 Days Zero Penalty &amp. Regular CIBIL.</p>
                    <p className="text-slate-700">Subsequent CredSettle OTS closure on Balance: 48% loan cut.</p>
                    <p className="font-bold text-emerald-700 pt-1 border-t border-emerald-200">Total Net client Outflow: ₹3,15,000 vs ₹7,20,500 Due.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic"> Note: closure figures reflect historical averages across private banks in India. Actual OTS deal terms depend on bank credit boards approvals and documented income impairment. </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="relief-pathways-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]"/>
                <span>3. Strategic Options Analysis.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Debt Relief Pathways: Credit Shield vs Moratorium vs Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When career breaks eliminates your primary income stream. Evaluating all available debt relief avenues prevents costly procedural missteps. The table below contrasts credit shield claims against alternative bank relief options available under Indian banking rules: </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-sm bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Relief Pathway</th>
                      <th className="p-3.5 md:p-4">Trigger Condition.</th>
                      <th className="p-3.5 md:p-4">Relief Window</th>
                      <th className="p-3.5 md:p-4">CIBIL Score Impact.</th>
                      <th className="p-3.5 md:p-4">Final Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Credit Shield Claim.</td>
                      <td className="p-3.5 md:p-4">forced redundancy or layoff.</td>
                      <td className="p-3.5 md:p-4">3 Monthly EMIs paid by firm.</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-semibold">100% Protected (Standard).</td>
                      <td className="p-3.5 md:p-4">Loan remains active without arrears.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Bank Restructuring.</td>
                      <td className="p-3.5 md:p-4">Documented temporary income drop.</td>
                      <td className="p-3.5 md:p-4">Tenure extension / lower EMI.</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-semibold">Marked as Restructured.</td>
                      <td className="p-3.5 md:p-4">Higher total rates over time.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">One-Time closure.</td>
                      <td className="p-3.5 md:p-4">Prolonged job loss &gt. 90 days.</td>
                      <td className="p-3.5 md:p-4">Single or 3-tranche OTS deal.</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-semibold">Marked as Settled.</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Permanent debt closure + NDC.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Lok Adalat Referral.</td>
                      <td className="p-3.5 md:p-4">Pre-lawsuits talks.</td>
                      <td className="p-3.5 md:p-4">Mutually agreed concession.</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-semibold">Reflects Compromised status.</td>
                      <td className="p-3.5 md:p-4">Decree passed with court seal.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 bg-red-50/30">
                      <td className="p-3.5 md:p-4 font-semibold text-red-900">Unmanaged Inaction.</td>
                      <td className="p-3.5 md:p-4">Ignored default &amp. bounced EMIs.</td>
                      <td className="p-3.5 md:p-4">Zero relief. extra fees compounds.</td>
                      <td className="p-3.5 md:p-4 text-red-600 font-semibold">Severe Drop (-150 Points).</td>
                      <td className="p-3.5 md:p-4 text-red-700">Legal notices &amp. claims visits.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-score-trajectory" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                <span>4. Credit Bureau Bureaucracy &amp. Scoring.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Trajectory: Credit Scoring Impact During Job Loss
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Credit information firms in India. This includes transUnion CIBIL. Experian. CRIF High Mark. Equifax. Compute your three-digit credit score based on five core mathematical parameters: payment history (35%). Credit exposure and use (30%). Credit duration (15%). Credit type mix (10%). Recent inquiries (10%). During sudden job loss. The payment history component faces fast exposure to severe degradation. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When a valid Credit Shield claim is processed seamlessly. The underwriting cover firm remits the exact EMIs amount before the monthly billing closure date. As a result. The lending bank transmits a clean "000" Days Past Due (DPD) record to the CIBIL desk. Preserving your baseline score in the 750 to 800 range. This ensures your money reputation remains unblemished during your job transition period. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> However. If the claim is delayed due to incomplete papers or procedural bottlenecks at the Third-Party Administrator (TPA) level. The bank automated reporting engine may mistakenly log 30-day or 60-day DPD entries. In such instances. Clients possess a legal right under Section 21 of the Credit Information firms (rule) Act (CICRA). 2005 to mandate retrospective rectification. Upon presenting the final cover claim approval and payout voucher. The lender is by law required to submit an updated Member Credit Information file to purge erroneous default tags. </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-claim-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]"/>
                <span>Visual Claim Roadmap.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: Step-by-Step Credit Shield Claim Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> This full visual workflow outlines the sequential stages required to verify policy coverage. Assemble an indisputable hardship dossier. Secure complete EMI relief or structured closure: </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image src="/images/infographics/job-loss-insurance-for-personal-loan.jpg" alt="Credit Shield and Job Loss Loan Insurance Claim and Debt Resolution Process Diagram" fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw" priority/>
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Regulatory Architecture • IRDAI Policyholder Protection &amp. RBI Guidelines.</span>
                  <a href="/images/infographics/job-loss-insurance-for-personal-loan.jpg" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold flex items-center gap-1">
                    <span>View High-Resolution Blueprint.</span>
                    <ExternalLink className="w-3.5 h-3.5"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-claim-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]"/>
                <span>Standard Operating Procedure.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure: 6 Steps to Claim Job Loss Cover
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> To navigate the cover claiming mechanism successfully without triggering avoidable rejection clauses. Follow this rigorous six-stage procedural roadmap developed by CredSettle debt relief workers: </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <h3>Stage 1: papers Discovery &amp. Policy Certificate Verification</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8"> Locate your initial loan sanction letter. Key Fact record (KFS). And loan amortization schedule. Identify local deductions labeled as "cover Premium". "Loan Protect". "Credit Shield". Contact your lending branch to request your unique letter of cover (COI) containing the master policy number and underwriter details. </p>
                </div>

                {/* Stage 2 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <h3>Stage 2: Hardship Evidence Dossier Compilation</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8"> Assemble full documentary proof establishing forced retrenchment. This includes your formal end or redundancy letter on firm letterhead. Three months of preceding salary slips. Form 16. Relieving papers. Written check confirming no ongoing disciplinary investigations or fraudulent misconduct. </p>
                </div>

                {/* Stage 3 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <h3>Stage 3: Formal Claim Intimation within Statutory Window</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8"> Lodge the formal claim with the general cover underwriter via registered email and their formal web portal within 15 to 30 calendar days of end. Attach the completed claim intimation form alongside your compiled hardship dossier to generate a checked claim docket tracking number. </p>
                </div>

                {/* Stage 4 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <h3>Stage 4: Bank Branch Notification &amp. NACH Presentation Moratorium</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8"> Submit a formal written legal help to your bank loan work desk and Branch Manager referencing the active cover claim docket. Explicitly request an interim freeze on automated NACH mandate presentations to avoid recursive bounce fees and prevent automated debt collector assignment. </p>
                </div>

                {/* Stage 5 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">5</span>
                    <h3>Stage 5: Claim Adjudication &amp. Direct EMI Disbursal Tracking</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8"> Under IRDAI rules. The firm must steps complete claims within 30 days. Monitor claim payout confirmations to ensure the three monthly EMI tranches are credited straight into your loan account. Eliminating extra fees and maintaining uninterrupted loan servicing. </p>
                </div>

                {/* Stage 6 */}
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">6</span>
                    <h3>Stage 6: Post-Cover Strategy &amp. Structured Debt Resolution</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8"> If expert re-jobs is secured within 90 days. Regular EMI payments resume smoothly. However. If joblessness persists beyond the three-month cover payout window. Engage CredSettle debt relief specialists to structure an amicable One-Time closure (OTS) to permanently extinguish remaining debts. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Rights & Legal Protections */}
            <section id="statutory-rights-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]"/>
                <span>6. Legal Safeguards &amp. Consumer Rights.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Rights: IRDAI Guidelines &amp; Loan Insurance Bundling
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> clients dealing with unexpected jobs loss often endure severe claims pressure and harsh legal notices. Indian law provides extensive legal protections to safeguard honest people navigating genuine hardship: </p>

              {/* 4-Card Analytical Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Landmark className="w-4 h-4 text-[#1886ff]"/>
                    <h3>IRDAI Policyholder Protection</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> The IRDAI (safety of Policyholders' Interests) rules mandate that general firms decide on claims within 30 days of receiving the final survey report. Unreasonable rejections or delays attract legal extra fees at 2% above prevailing bank rate. </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <BadgeAlert className="w-4 h-4 text-[#1886ff]"/>
                    <h3>Section 25 PSSA &amp. NI Act Defense</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Bounced NACH mandates during active cover processing do not constitute penal fraud. forced job loss and active claim filing establish a complete lack of penal intention (mens rea). This provides a solid legal defense before Magistrate Courts. </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Scale className="w-4 h-4 text-[#1886ff]"/>
                    <h3>RBI Fair Practices Code Protections</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Under RBI Master Directions. Claims staff are strictly prohibited from visiting clients outside 8:00 AM to 7:00 PM. Calling references or employers. Engaging in public humiliation. Violations permit fast police FIRs and RBI staff reports. </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <FileText className="w-4 h-4 text-[#1886ff]"/>
                    <h3>Consumer Protection Act Remedies</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Under the clients safety Act. 2019. Arbitrary repudiation of a valid credit shield claim constitutes actionable "Deficiency of Service" and "Unfair Trade Practice". This allows clients to claim full payout and emotional distress damages. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Redressal Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]"/>
                <span>7. Escalation Framework.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Grievance Matrix: Insurer to IRDAI Bima Bharosa
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> If the underwriting cover firm or lending bank rejects your legitimate job loss claim or engages in bureaucratic stalling. Follow this structured three-tier legal reports pathway: </p>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-xs md:text-sm mb-1">
                    <span className="text-[#1886ff]">Level 1: Internal Grievance Redressal Officer (GRO).</span>
                    <span className="text-slate-500 font-medium">Turnaround: 7 - 14 Days.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600"> File a formal legal help to the appointed Grievance staff of the cover firm and the main loan Nodal staff (PNO) of the lending bank attaching your complete claim file and end proof. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-xs md:text-sm mb-1">
                    <span className="text-[#1886ff]">Level 2: IRDAI Bima Bharosa &amp. RBI CMS Portal.</span>
                    <span className="text-slate-500 font-medium">Turnaround: 15 - 30 Days.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600"> If unresolved. Register an online reports on the IRDAI Bima Bharosa portal (bimabharosa.irdai.gov.in) and cross-file on the RBI reports handling System (cms.rbi.org.in) against the partner lending institution. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-xs md:text-sm mb-1">
                    <span className="text-[#1886ff]">Level 3: cover Ombudsman &amp. Consumer Commission.</span>
                    <span className="text-slate-500 font-medium">Statutory Binding Award.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600"> Approach the territorial cover staff under the Redressal of Public Grievances Rules. 1998 for free. by law binding quasi-court adjudication with zero court fees. File a petition before the areas clients claims Redressal Commission. </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]"/>
                <span>8. Resolution Milestones.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Procedural Timeline: Job Termination to Claim Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Navigating the aftermath of job loss requires strict adherence to legal and daily work milestones. The timeline below illustrates the sequential progression from the date of layoff to final debt relief: </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-sm bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Timeframe</th>
                      <th className="p-3.5 md:p-4">Operational Milestone.</th>
                      <th className="p-3.5 md:p-4">Required Borrower Action.</th>
                      <th className="p-3.5 md:p-4">Banking / Legal Status.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 1 - 7</td>
                      <td className="p-3.5 md:p-4">end Notice Received.</td>
                      <td className="p-3.5 md:p-4">Retrieve Sanction Letter. KFS. COI.</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-medium">Standard (SMA-0).</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 8 - 25</td>
                      <td className="p-3.5 md:p-4">Claim Filing &amp. Bank Hold.</td>
                      <td className="p-3.5 md:p-4">Lodge claim dossier. submit NACH hold request.</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-medium">Claim Under Review.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 30 - 90</td>
                      <td className="p-3.5 md:p-4">3-Month cover Disbursals.</td>
                      <td className="p-3.5 md:p-4">Verify monthly EMI credits with lender.</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-semibold">100% Regular Servicing.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 91 - 120</td>
                      <td className="p-3.5 md:p-4">Coverage Transition Window.</td>
                      <td className="p-3.5 md:p-4">Resume salary EMIs or initiate closure dialogue.</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-medium">SMA-1 Classification.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Month 5 - 6</td>
                      <td className="p-3.5 md:p-4">OTS deals (OTS).</td>
                      <td className="p-3.5 md:p-4">CredSettle negotiates 40% - 55% loan cut.</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-bold">Closed with NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-layoff-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]"/>
                <span>9. Complex Situational Dynamics.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Tech Layoffs &amp; Contract Workers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> jobs contracts and loan architectures vary largely across sectors. Here is how credit shield policies and legal defenses operate across four distinct real-world scenarios: </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">firm Restructuring &amp. IT Layoffs</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Tech workers impacted by mass global or domestic downsizing easily qualify for credit shield payouts provided the severance letter explicitly states organizational redundancy rather than voluntary separation or performance end. </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Probationary &amp. Contractual Staff</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Fixed-term contract completions or probation non-confirmations are often excluded under standard general cover riders. In such instances. CredSettle straight engages the bank credit boards to structure an fast One-Time closure. </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Multiple Loans with Partial cover</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> clients holding private loans across multiple banks where only one carries cover require a dual plan: claiming EMIs on the insured account while proactively settling moratoriums or OTS on uninsured lines. </p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Loans Assigned to ARCs</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If an unpaid loan has already been sold to an Asset Reconstruction firm (ARC). Past cover claims can no longer be triggered. However. ARCs purchase portfolios at deep discounts. This lets CredSettle to settle large 50% to 70% waivers. </p>
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
                <HelpCircle className="w-4 h-4 text-[#1886ff]"/>
                <span>Frequently Asked Questions.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Job Loss Loan Insurance &amp; Claims
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Find clear. Authoritative answers to the most common questions regarding loan safety cover. Eligibility requirements. debt relief: </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => (<div key={index} className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden transition-all duration-150 shadow-sm">
                    <button type="button" onClick={() => toggleFaq(index)} className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm md:text-base hover:bg-slate-50/70 transition-colors" aria-expanded={openFaq === index}>
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}/>
                    </button>
                    {openFaq === index && (<div className="px-4 pb-4 md:px-5 md:pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FDFDFD]">
                        {faq.a}
                      </div>)}
                  </div>))}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources-authorities" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]"/>
                <span>10. Regulatory References.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Statutory Citations &amp; Outbound Regulatory Authorities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> CredSettle adheres strictly to Indian legal rules and RBI directives. You can verify formal rules straight from governing bodies: </p>

              {/* Outbound Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <a href="https://www.irdai.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700">
                  <span>IRDAI Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400"/>
                </a>
                <a href="https://bimabharosa.irdai.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700">
                  <span>Bima Bharosa</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400"/>
                </a>
                <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700">
                  <span>RBI Ombudsman</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400"/>
                </a>
                <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700">
                  <span>CIBIL India</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400"/>
                </a>
                <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700">
                  <span>India Code Laws</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400"/>
                </a>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between font-semibold text-slate-700">
                  <span>online Crime Portal.</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400"/>
                </a>
              </div>

              {/* Internal Related Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3"> Related CredSettle Legal &amp. Debt Resolution Guides: </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link href="/arbitration-notice-personal-loan-default" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F4F8FE] hover:text-[#1886ff] text-slate-700 font-medium transition-colors">
                    Personal Loan Arbitration Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F4F8FE] hover:text-[#1886ff] text-slate-700 font-medium transition-colors">
                    Bank Legal Notice Reply Protocol
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F4F8FE] hover:text-[#1886ff] text-slate-700 font-medium transition-colors">
                    Section 25 NACH Bounce Defense
                  </Link>
                  <Link href="/bank-recovery-harassment-complaint" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F4F8FE] hover:text-[#1886ff] text-slate-700 font-medium transition-colors">
                    Stop Recovery Agent Harassment
                  </Link>
                  <Link href="/cibil-score-kaise-badhaye-after-settlement" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F4F8FE] hover:text-[#1886ff] text-slate-700 font-medium transition-colors">
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
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300"/>
                  <span>Confidential Assessment.</span>
                </div>
                <p className="text-lg md:text-xl font-bold leading-snug"> Struggling with Loan EMIs After Job Loss? </p>
                <p className="text-xs md:text-sm text-blue-100 leading-relaxed"> Let CredSettle legal and debt specialists audit your loan policy. File your cover claim. settle an formal OTS deals. </p>
                <a href="tel:+918800226635" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-[#2452ae] font-extrabold text-sm hover:bg-blue-50 transition-colors shadow-sm">
                  <Phone className="w-4 h-4 text-[#1886ff]"/>
                  <span>Check Your Loan cover Eligibility.</span>
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
                    <Image src="/default-avatar.jpg" alt="Ashish Jhangra" fill className="object-cover"/>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Ashish Jhangra</p>
                    <p className="text-xs text-slate-500 font-medium">Legal &amp. Debt relief expert.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed"> Specializing in banking RBI claims. IRDAI cover claims. And structured credit OTS deals for retail clients across India. </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>CredSettle Advisory.</span>
                  <Link href="/author/ashish-jhangra" className="text-[#1886ff] font-bold hover:underline">
                    View Profile
                  </Link>
                </div>
              </div>

              {/* CredSettle Trust Badges */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <p className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400"> CredSettle Trust Metrics. </p>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0"/>
                    <span>5,400+ Verified Resolutions.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0"/>
                    <span>4.8 / 5 Verified Client Rating.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0"/>
                    <span>100% Legal &amp. IRDAI Compliant.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0"/>
                    <span>Strict Anti-threats Shield.</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>);
}
