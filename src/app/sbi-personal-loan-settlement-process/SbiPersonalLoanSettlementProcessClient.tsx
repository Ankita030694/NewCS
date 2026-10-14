'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { Scale, ExternalLink, ShieldCheck, CheckCircle2, AlertTriangle, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, DollarSign, Lock, Phone, AlertCircle, Briefcase, Bookmark, ArrowRight, Clock, UserCheck, Sparkles, Gavel, Landmark, ShieldAlert, ChevronDown } from 'lucide-react';
export default function SbiPersonalLoanSettlementProcessClient() {
    const [activeId, setActiveId] = useState<string>('quick-crux');
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
        { id: 'quick-crux', label: 'Executive Brief & Crux' },
        { id: 'debt-economics', label: '1. SBI NPA & SARB Dynamics' },
        { id: 'settlement-math', label: '2. Ledger Math & Settlement Calculation' },
        { id: 'comparison-matrix', label: '3. Resolution Comparison Matrix' },
        { id: 'cibil-dynamics', label: '4. CIBIL Algorithm & Section 21 CICRA' },
        { id: 'infographic-overview', label: '5. Visual 6-Stage Process Blueprint' },
        { id: 'six-stage-sop', label: '6. 6-Stage Institutional Settlement SOP' },
        { id: 'statutory-defense', label: '7. Statutory Notice Defense & Rights' },
        { id: 'grievance-matrix', label: '8. 3-Tier Escalation Architecture' },
        { id: 'chronological-milestones', label: '9. Procedural Timeline & Milestones' },
        { id: 'specialized-scenarios', label: '10. Real-World SBI Scenarios' },
        { id: 'company-profile', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
        { id: 'regulatory-citations', label: 'Statutory Citations & Authorities' }
    ];
    const faqs = [
        {
            q: 'What is the SBI personal loan settlement process and when does State Bank of India agree to an OTS?',
            a: "The SBI private loans settlement process is an bank OTS deal mechanism governed by SBI Stressed Assets relief Policy and RBI rules. SBI considers a One-Time settlement (OTS) when an no-pledge private loans (such as Xpress Credit or Quick private loans) has been classified as a Non-Performing Asset (NPA) past 90 days. The client establishes genuine. Verifiable hardship such as job loss. Severe health crisis. trade bankruptcy."
        },
        {
            q: 'What is an SBI Stressed Assets Recovery Branch (SARB) and why was my loan transferred there?',
            a: "A Stressed Assets claims Branch (SARB) or Stressed Assets relief Centre (SARC) is a specialized SBI branch dedicated only to recovering and resolving non-performing accounts. When a private loans remains in default for over 120 to 180 days (reaching SMA-2 or Doubtful-1 status). The home branch transfers the claims ledger to SARB. SARB officers. Led by Assistant General Managers (AGMs) or Chief Managers. Possess dedicated special formal to evaluate and approve OTS deals proposals."
        },
        {
            q: 'What is the SBI Rinn Samadhan scheme and how does it benefit personal loan borrowers?',
            a: "The SBI Rinn Samadhan Scheme is a recurring. Non-special One-Time settlement (OTS) rules periodically rolled out by State Bank of India to resolve legacy retail NPAs. Under Rinn Samadhan. Eligible clients receive a 100% waiver of total penal interest. Overdue compounding charges. Legal expenses. Alongside large pre-approved concessions of 30% to 50% on the unpaid real base loan."
        },
        {
            q: 'How much waiver or discount can I negotiate on an SBI personal loan settlement?',
            a: "Clients typically secure a 100% complete waiver on all total penal interest. Bounce fees. accrued late charges. On the core base loan. SBI settlement discounts typically range from 40% to 60%. Depending on the age of the NPA classification. The absence of attachable assets. The strength of the documented hardship dossier submitted to the Credit boards."
        },
        {
            q: 'Can SBI file a criminal case under Section 138 or Section 25 for personal loan default?',
            a: "Pure loan default is strictly a civil claims. However. If post-dated pledge cheques or NACH auto-debit mandates bounce due to insufficient funds. SBI panel lawyers often issue legal legal notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and settlement Systems Act. clients must reply through a legal expert within 15 days to place genuine hardship on record and prevent magistrate court summons."
        },
        {
            q: 'Can SBI attach my salary account or seize property for an unsecured personal loan?',
            a: "No-pledge private loans like SBI Xpress Credit do not carry a mortgage or hypothecated pledge. Meaning SBI cannot invoke the SARFAESI Act to seize residential property without a court order. However. If you maintain an active savings or salary account within SBI. The bank may exercise its common law Banker's Right of Lien and Set-Off to debit funds. This is why money advisors recommend managing daily work liquidity appropriately during claims relief."
        },
        {
            q: 'How does settling an SBI personal loan through National Lok Adalat work?',
            a: 'State Bank of India regularly refers chronic retail defaults to National Lok Adalat benches organized by DLSA/NALSA. In Lok Adalat. An authorized SBI claims formal negotiates straight before a judicial conciliator. Once a mutually agreeable discounted figure is reached. The bench passes a formal Consent Award under Section 21 of the Legal Services officials Act. 1987. This operates as a final. Non-appealable civil court decree.'
        },
        {
            q: 'How does an SBI personal loan settlement affect my CIBIL score and credit report?',
            a: 'Upon settlement remittance. SBI updates the credit bureaus (CIBIL. Experian. Equifax. CRIF High Mark) reporting the account as "Settled" or "Post-Write-off Settled" with a zero balance. While this remark initially depresses the score. It halts escalating Days Past Due (DPD) counts. clients can gradually rehabilitate their credit score back to 750+ over 18 to 24 months using secured credit builder instruments.'
        },
        {
            q: 'What is an official SBI No Dues Certificate (NDC) and how do I verify its authenticity?',
            a: "An authentic SBI No Dues letter (NDC) is an formal discharge paper issued on State Bank of India letterhead. Bearing the branch seal. Unique reference number. Signature of the authorized Chief Manager or AGM. It explicitly declares that the local loan account has been closed under OTS with zero unpaid debt risk. clients must verify that the loan account number and zero balance reflect in SBI Core Banking Solutions (CBS)."
        },
        {
            q: 'How long does the entire SBI personal loan settlement process take from start to finish?',
            a: "The complete bank process typically spans 45 to 90 days. The timeline encompasses account audits (7-10 days). Hardship dossier preparation and submission to SARB or AGM (10-15 days). Credit boards evaluation and bilateral talks (15-30 days). Sanction letter vetting, payment remittance. Final CBS closure along with NDC issuance (15-20 days)."
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-xs font-semibold mb-4 tracking-wide uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200"/>
            <span>Official SBI Debt Resolution Directive 2026.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            SBI Personal Loan Settlement Process
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed"> Navigating an overdue State Bank of India private loans requires understanding bank hierarchies. Internal credit mandates. legal protections. Learn how to transition from aggressive claims firm calls to formal Stressed Assets claims Branch talks. Secure 40% to 60% main loan waivers through SBI Rinn Samadhan or Lok Adalat schemes. Obtain a legally binding No Dues letter. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Facing SBI Recovery or Notice? Speak to a Settlement Expert.</span>
              <ArrowRight className="w-4 h-4"/>
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
                <BookOpen className="w-4 h-4 text-[#1886ff]"/>
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents.
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (<a key={link.id} href={`#${link.id}`} className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${isActive
                    ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'}`}>
                      {link.label}
                    </a>);
        })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                  <span>Institutional Resolution.</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Structured under SBI Stressed Assets Policy and RBI Prudential Norms. </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box */}
            <div id="quick-crux" className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800">
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]"/>
                <span>EXECUTIVE BRIEF: SBI PERSONAL LOAN SETTLEMENT CRUX.</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-normal">
                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0"/> <div> <strong className="text-slate-900 font-bold">bank SARB Escalation:</strong> Chronic defaults (90+ days) transfer from retail branches to SARB for OTS deal review. </div> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0"/> <div> <strong className="text-slate-900 font-bold">100% Penal Interest Waiver:</strong> formal OTS approvals completely eliminate all penal interest. Bounce charges. late fees. </div> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0"/> <div> <strong className="text-slate-900 font-bold">40% to 60% main loan Haircut:</strong> Hardship dossiers enable distressed clients to settle the core balance at a 40% to 60% discount. </div> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0"/> <div> <strong className="text-slate-900 font-bold">SBI Rinn Samadhan Windows:</strong> SBI periodic OTS circulars deliver pre-approved settlement concessions for retail NPAs. </div> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0"/> <div> <strong className="text-slate-900 font-bold">National Lok Adalat Decrees:</strong> Quarterly talks benches issue binding. Non-appealable civil awards under Section 21. </div> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0"/> <div> <strong className="text-slate-900 font-bold">Criminal Threat Defense:</strong> Legal replies to Section 138 and Section 25 notices promptly stop coercive claims threats. </div> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0"/> <div> <strong className="text-slate-900 font-bold">Banker&apos. s Lien safety:</strong> Isolating daily work accounts prevents SBI from debiting funds under common law set-off. </div> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0"/> <div> <strong className="text-slate-900 font-bold">formal CBS No Dues letter:</strong> Legal closure requires an authorized AGM sanction letter and zero CBS balance. </div> </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]"/>
                <span>Institutional Credit Framework.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; SBI Stressed Assets Architecture
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> State Bank of India operates India&apos. S largest retail credit book. With private loans products like SBI Xpress Credit. Pension Loans. Quick private loans serving millions of salaried executives and pensioners. However. When sudden life breaks strike. Examples include catastrophic healthcare events. Sudden company downsizing. Trade liquidation. Clients face an bank claims machine that escalates rapidly. Under the Reserve Bank of India Master Circular on Prudential Norms on Advances. An unpaid loan advances through Special Mention Account stages: SMA-0 (1 to 30 days overdue). SMA-1 (31 to 60 days overdue). SMA-2 (61 to 90 days overdue). </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Upon crossing 90 days of steady non-servicing. The account is classified as a Non-Performing Asset (NPA). For SBI. An no-pledge NPA triggers large Tier-1 cash provisioning requirements. Compelling the bank to set aside 15% to 25% of the exposure against its balance sheet reserves. Because no-pledge private loans lack mortgageable pledge enforceable under the SARFAESI Act. SBI&apos. s legal options are limited to lengthy civil lawsuits. As a result. Transferring chronic defaults to the Stressed Assets claims Branch (SARB) or Stressed Assets relief Centre (SARC) creates a powerful trade incentive for the bank to accept an amicable One-Time settlement rather than carry dead asset weight. </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]"/>
                <span>Financial Analysis &amp; Math.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown &amp; Representative Settlement Ledger Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When an SBI private loans defaults. The bank&apos. S automated Core Banking Solution (CBS) begins compounding uncollected interest. Levying penalty charges at 2% per month. Tacking on claims office costs. Within 12 to 18 months. An original base loan of ₹10,00,000 routinely inflates into a nominal claim exceeding ₹14,50,000. This artificial ledger inflation creates acute client panic. Yet it represents the key leverage point during expert bilateral talks. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> During formal OTS deal deliberations. settlement counsel isolates the core unpaid main loan from ledger penalties. SBI internal claims circulars empower competent officials. Ranging from Assistant General Managers (AGMs) to Deputy General Managers (DGMs). To sacrifice 100% of total penalty charges and concede a 40% to 55% haircut on the real main loan. The breakdown below shows how a agent ₹10 Lakhs SBI default is resolved in practice: </p>

              {/* Representative Calculation Card */}
              <div className="bg-white rounded-2xl border border-blue-200/80 p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                    agent SBI Personal Loan Settlement Baseline.
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 text-[#1886ff]">
                    180-Day NPA Example.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-xs">Original Principal Balance.</span>
                    <strong className="text-base text-slate-900 font-extrabold">₹10,00,000</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-xs">penalty charges &amp; Interest.</span>
                    <strong className="text-base text-rose-600 font-extrabold">+₹4,50,000</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-xs">Nominal Claimed Balance.</span>
                    <strong className="text-base text-slate-900 font-extrabold">₹14,50,000</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="text-emerald-700 block text-xs font-medium">Penal Waiver (100%).</span>
                    <strong className="text-base text-emerald-700 font-extrabold">-₹4,50,000</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="text-emerald-700 block text-xs font-medium">Principal Haircut (50%).</span>
                    <strong className="text-base text-emerald-700 font-extrabold">-₹5,00,000</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                    <span className="text-[#1886ff] block text-xs font-bold">Final Approved OTS Figure.</span>
                    <strong className="text-base text-[#1886ff] font-black">₹5,00,000</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100 gap-2">
                  <span>Net Savings Achieved: <strong className="text-emerald-600 font-bold">₹9,50,000 (65.5% Total Relief).</strong></span>
                  <span>Payment Schedule: <strong className="text-slate-800 font-semibold">1 to 3 Manageable Tranches.</strong></span>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]"/>
                <span>Comparative Strategic Evaluation.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Institutional Dispute Resolution Pathways Compared
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> clients facing severe distress on SBI no-pledge credit often weigh multiple legal and daily work pathways. The table below outlines how an formal One-Time settlement stacks up against loan restructuring. Formal court lawsuits. National Lok Adalat talks. Prolonged inaction across cost, finality. Credit bureau impact. procedural timelines. </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4 min-w-[140px]">Resolution Option.</th>
                      <th className="p-3.5 md:p-4 min-w-[150px]">Financial debt.</th>
                      <th className="p-3.5 md:p-4 min-w-[150px]">Legal Finality</th>
                      <th className="p-3.5 md:p-4 min-w-[150px]">Credit Score Impact.</th>
                      <th className="p-3.5 md:p-4 min-w-[110px]">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-blue-50/40 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50"> SBI One-Time settlement (OTS). </td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-semibold"> 40% to 60% loan cut + 100% penal interest cut. </td>
                      <td className="p-3.5 md:p-4"> Complete legal discharge with formal SBI No Dues letter. </td>
                      <td className="p-3.5 md:p-4"> Reported as Settled. halts DPD. rebuildable within 18-24 months. </td>
                      <td className="p-3.5 md:p-4 font-medium text-slate-800"> 45 to 75 days </td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50"> Loan Restructuring. </td>
                      <td className="p-3.5 md:p-4"> 100% main loan repaid plus re-amortized compounding interest. </td>
                      <td className="p-3.5 md:p-4"> Contractual modification. full debt debt risk remains active. </td>
                      <td className="p-3.5 md:p-4"> Flagged as Restructured. elevated risk of secondary default. </td>
                      <td className="p-3.5 md:p-4 font-medium text-slate-800"> 30 to 60 days </td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50"> Civil Suit / DRT Section 19. </td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-semibold"> 100% claim plus court interest and lawyers claims expenses. </td>
                      <td className="p-3.5 md:p-4"> Contested adversarial decree with potential bank account attachment. </td>
                      <td className="p-3.5 md:p-4"> Suit Filed remark. severe long-term bank credit exclusion. </td>
                      <td className="p-3.5 md:p-4 font-medium text-slate-800"> 3 to 7 years </td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50"> National Lok Adalat Concession. </td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-semibold"> 40% to 55% loan cut + 100% penal interest cut. </td>
                      <td className="p-3.5 md:p-4"> Non-appealable Consent Award under Section 21 of LSA Act. 1987. </td>
                      <td className="p-3.5 md:p-4"> Reported as Settled with permanent immunity against civil lawsuits. </td>
                      <td className="p-3.5 md:p-4 font-medium text-slate-800"> 1 to 2 sessions </td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50"> Inaction &amp. Default Neglect. </td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-semibold"> Rapidly compounding penalties. 24% APR. And claims vendor costs. </td>
                      <td className="p-3.5 md:p-4"> Persistent Section 138 NI Act and Section 25 PSSA legal notices. </td>
                      <td className="p-3.5 md:p-4"> steady DPD degradation dropping score below 550 indefinitely. </td>
                      <td className="p-3.5 md:p-4 font-medium text-slate-800"> Unresolved </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                <span>Credit Bureau Dynamics.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Algorithm Scoring Math &amp; Section 21 CICRA Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Understanding the credit bureau reporting mechanics following an SBI settlement is crucial for long-term money claims. Credit Information Companies (TransUnion CIBIL. Equifax. Experian. CRIF High Mark) calculate scores based on five core mathematical weighting pillars: Payment History (35%). Credit Exposure and use (30%). Credit History Length (15%). Credit Mix (10%). Recent Inquiries (10%). </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When SBI closes a loan under OTS. It transmits a trade code update reporting the account status as &quot. Settled&quot. Or &quot. Post-Write-off Settled&quot. with a current balance of zero. While this reporting stops the compounding accumulation of Days Past Due (DPD) that crushes credit scores month after month. The settled notation typically causes an fast drop of 60 to 110 points. However. Under Section 21 of the Credit Information Companies (Regulation) Act (CICRA). 2005. Clients retain the legal right to ensure that their zero balance is accurately updated within 30 days. clients can then rehabilitate their credit score back to 750+ within 18 to 24 months by using disciplined secured credit cards and asset-backed micro-facilities. </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]"/>
                <span>Visual Process Blueprint.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual 6-Stage Institutional Settlement Blueprint
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> This full infographic illustrates the sequential journey through SBI&apos. S bank claims hierarchy. From initial RACPC record audit to SARB branch talks and final Core Banking Solution closure. </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 shadow-sm space-y-3">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950">
                  <Image src="/images/infographics/sbi-personal-loan-settlement-process.jpg" alt="SBI Personal Loan Settlement Process 6-Stage Blueprint" fill className="object-contain" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"/>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-xs text-slate-500">
                  <span>Official CredSettle Institutional Debt Settlement Blueprint.</span>
                  <a href="/images/infographics/sbi-personal-loan-settlement-process.jpg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#1886ff] font-semibold hover:underline">
                    <span>View High-Resolution Image.</span>
                    <ExternalLink className="w-3.5 h-3.5"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="six-stage-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]"/>
                <span>Standard Operating Procedure.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Navigating SBI Settlement in 6 Stages
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Executing a OTS deals with India&apos. s largest public sector bank requires meticulous adherence to office protocol. Our structured 6-stage SOP ensures legal defense. Audit baseline accuracy. And authoritative Credit boards approvals. </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 1: Forensic RACPC Ledger Audit.
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 1 to 10
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed"> Specialists audit the SBI Retail Assets Central Processing Centre (RACPC) loan ledger to separate the core released main loan from compounded penalty charges. Uncollected interest. Unwarranted claims levies. Establishing the definitive non-inflated settlement baseline. </p>
                </div>

                {/* Stage 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 2: Comprehensive Hardship Dossier Compilation.
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 11 to 20
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed"> A legally sound hardship memo is prepared. Aggregating concrete documentary proof such as health discharge summaries. Termination letters, salary reduction slips. trade bankruptcy records to prove that default was involuntary and genuine. </p>
                </div>

                {/* Stage 3 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 3: SARB Institutional Representation.
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 21 to 35
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed"> The file is formally presented straight to the Chief Manager or Assistant General Manager (AGM) of the assigned Stressed Assets claims Branch. Effectively bypassing third-party claims firms and placing the matter before competent credit officials. </p>
                </div>

                {/* Stage 4 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 4: Strategic Bilateral &amp; OTS Negotiation.
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 36 to 55
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed"> relief counsel negotiates across bilateral sessions or National Lok Adalat benches under SBI Rinn Samadhan circulars. Systematically securing a 100% waiver of penal components and driving main loan haircut concessions into the 40% to 60% bracket. </p>
                </div>

                {/* Stage 5 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 5: Sanction Letter Forensic Vetting.
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 56 to 65
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed"> The formal SBI OTS deal offer is scrutinized on formal bank letterhead to verify branch approval. Explicit account numbers. Confirmed payment tranches. Clear clauses stipulating the fast withdrawal of pending legal steps upon payment. </p>
                </div>

                {/* Stage 6 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 6: Remittance, CBS Zeroing &amp; NDC Issuance.
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 66 to 75
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed"> settlement funds are remitted straight into the dedicated SBI loan account. Counsel verifies the internal ledger write-off in Core Banking Solutions and secures the formal stamped No Dues letter alongside credit bureau updates. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]"/>
                <span>Statutory Protections.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense &amp; Legal Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When an SBI private loans enters chronic default. Panel lawyers deploy legal legal notices to exert psychological pressure. Understanding your legal rights under Indian banking laws ensures you respond proactively and halt aggressive vendor tactics. </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0"/>
                    <span>Section 25 PSSA (NACH Bounce Defense).</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> When NACH auto-debit mandates fail due to money destitution. SBI panel lawyers often issue Section 25 notices. Legal counsel responds formally within 15 days showing involuntary debt stress. Proving absence of fraudulent mens rea. Converting the confrontation into OTS deal dialogue. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                    <span>Section 138 Negotiable Instruments Act.</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> For bounced undated pledge cheques collected at loan disbursement. Section 138 notices demand fast strategic legal intervention. Timely replies challenge the misuse of pledge cheques for indeterminate future debts and stay coercive criminal court filings while settlement is finalized. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-purple-600 flex-shrink-0"/>
                    <span>Arbitration Neutralization (Perkins &amp; TRF Ltd.).</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> SBI hearing notices invoking unilateral appointments are legally defective under Supreme Court rulings in TRF Ltd. and Perkins Eastman. Legal counsel challenges the unilateral arbitrator&apos. S police area under Section 12 and Section 21 of the hearing Act. Directing the bank back to bilateral talks. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4 text-emerald-600 flex-shrink-0"/>
                    <span>RBI Fair Practices &amp; SARFAESI Exemption.</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Under RBI Master Directions. Claims agents are strictly prohibited from calling before 8:00 AM or after 7:00 PM. Visiting workplaces without consent. Harassing relatives. Also. No-pledge private loans are statutorily exempt from summary property attachment under the SARFAESI Act. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]"/>
                <span>Grievance Redressal Mechanism.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Grievance &amp; Institutional Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> If SBI branch staff or assigned claims firms violate RBI Fair Practice codes or refuse to process legitimate hardship petitions. Clients must escalate through State Bank of India&apos. s legal three-tier grievance rules. </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                    Level 1: Branch &amp; GRO.
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Branch Manager &amp; Circle GRO</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Direct legal help to the home branch manager and Circle Grievance Redressal Officer to log formal claims tokens regarding incorrect ledger calculations or claims abuse. With a legal turnaround time of 7 to 10 working days. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                    Level 2: Principal Nodal Officer.
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">PNO &amp; SARB AGM</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Escalation to the State Bank of India Local Head Office (LHO) main loan Nodal Officer and SARB Assistant General Manager for unresolved grievances or deadlock in talks. Requiring response within 14 to 21 days. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                    Level 3: Regulatory Ombudsman.
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Filing a formal reports on the RBI CMS portal (cms.rbi.org.in) under the Reserve Bank - Integrated Ombudsman Scheme. 2021 if the bank fails to resolve reports or violates fair claims practices within 30 days. </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]"/>
                <span>Default Trajectory.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Procedural Milestones (Day 1 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Navigating an SBI private loans default requires understanding the procedural timeline from initial payment bounce to SARB transfer and ultimate OTS relief. The milestone matrix below details bank actions and recommended legal responses. </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4 min-w-[110px]">Timeline</th>
                      <th className="p-3.5 md:p-4 min-w-[130px]">Classification</th>
                      <th className="p-3.5 md:p-4 min-w-[200px]">SBI Institutional Action.</th>
                      <th className="p-3.5 md:p-4 min-w-[200px]">Strategic Borrower Response.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">Day 1 - 30</td>
                      <td className="p-3.5 md:p-4 font-semibold text-amber-600">SMA-0 Status</td>
                      <td className="p-3.5 md:p-4">Automated SMS alerts and soft tele-reminders from branch.</td>
                      <td className="p-3.5 md:p-4">Audit cash flows and assess whether hardship is temporary or systemic.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">Day 31 - 90</td>
                      <td className="p-3.5 md:p-4 font-semibold text-orange-600">SMA-1 &amp. SMA-2.</td>
                      <td className="p-3.5 md:p-4">Loan recall notices issued. NACH bounce re-presentment charges.</td>
                      <td className="p-3.5 md:p-4">Consolidate health. Employment. Or trade hardship paperwork.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">Day 91 - 120</td>
                      <td className="p-3.5 md:p-4 font-semibold text-rose-600">NPA Classification.</td>
                      <td className="p-3.5 md:p-4">Account declared Sub-Standard. external claims firm assigned.</td>
                      <td className="p-3.5 md:p-4">Issue formal cease-and-desist legal help against firm abuse.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">Day 121 - 180</td>
                      <td className="p-3.5 md:p-4 font-semibold text-purple-600">SARB Transfer</td>
                      <td className="p-3.5 md:p-4">Ledger shifted to Stressed Assets claims Branch under AGM mandate.</td>
                      <td className="p-3.5 md:p-4">Submit structured OTS deals proposal straight to SARB desk.</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">Month 6+</td>
                      <td className="p-3.5 md:p-4 font-semibold text-emerald-700">OTS Window</td>
                      <td className="p-3.5 md:p-4">Rinn Samadhan scheme concessions or National Lok Adalat referral.</td>
                      <td className="p-3.5 md:p-4">Finalize 40% to 60% haircut. Pay payment. secure formal NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]"/>
                <span>Case Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Real-World SBI Settlement Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Different categories of clients face unique bank pressures when settling an no-pledge debt with State Bank of India. Here is how specialized situation are handled: </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    SBI Xpress Credit for Government &amp; Defence Personnel
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> state staff and defence personnel facing salary freezes. Departmental inquiries. Post-retirement income shocks can leverage service hardship paperwork to secure structured OTS approvals without risking service record complications. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Severe Healthcare Crises &amp; Permanent Disability
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Catastrophic health diagnoses involving prolonged hospitalization or permanent earning impairment represent the strongest legal basis for maximum main loan waivers. Often qualifying for the highest concession tier under SBI benevolent settlement rules. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Proprietary Business Collapse &amp; Working Capital Stress
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Small firms owners who utilized private loans for working cash during trade downturns can establish trade bankruptcy through audited balance sheets and GST cancellation filings to achieve aggressive debt haircuts. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Asset Reconstruction Company (ARC) Debt Assignments
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> If SBI assigns chronic retail portfolios to ARCs like Phoenix or Assets Care. Relief dynamics shift advantageously. As ARCs acquire debt at deep discounts and show higher trade flexibility for fast one-time deals. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
            <div id="company-profile" className="scroll-target pt-4">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]"/>
                <span>Direct Legal &amp; Financial Answers.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions About SBI Personal Loan Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Explore definitive. Legally validated answers to the most common questions regarding State Bank of India private loans settlement steps. SARB escalations. Waiver math. Credit score rehabilitation. </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (<div key={idx} className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-all">
                      <button onClick={() => toggleFaq(idx)} className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors">
                        <span className="text-xs sm:text-sm md:text-base pr-2">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'transform rotate-180 text-[#1886ff]' : ''}`}/>
                      </button>

                      {isOpen && (<div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                          <p className="pt-3">{faq.a}</p>
                        </div>)}
                    </div>);
        })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-5 pt-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]"/>
                <span>Statutory Authority &amp; Resources.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Statutory Citations &amp; Regulatory Authorities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Every legal principle, settlement rates. clients safety mandate outlined in this guide is derived from Indian legal law and RBI rules issued by the Reserve Bank of India. </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Governing Acts and Regulatory Frameworks:
                </span>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>Reserve Bank of India Act. 1934 and RBI Master Direction on Prudential Norms on Advances.</li>
                  <li>State Bank of India Act. 1955 and SBI Policy on OTS deals of Stressed Assets.</li>
                  <li>Legal Services officials Act. 1987 (Section 19. Section 20. And Section 21 Consent Decrees).</li>
                  <li>Credit Information Companies (Regulation) Act. 2005 (Section 21 Bureau Correction Mandates).</li>
                  <li>Negotiable Instruments Act. 1881 (Section 138 Dishonour of Cheques Defense).</li>
                  <li>Payment and settlement Systems Act. 2007 (Section 25 Electronic Clearing Discharges).</li>
                </ul>
              </div>

              {/* Outbound Badges */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Official Statutory Outbound Resources:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
            { name: 'rbi.org.in', url: 'https://www.rbi.org.in' },
            { name: 'cms.rbi.org.in', url: 'https://cms.rbi.org.in' },
            { name: 'cibil.com', url: 'https://www.cibil.com' },
            { name: 'indiacode.nic.in', url: 'https://www.indiacode.nic.in' },
            { name: 'nalsa.gov.in', url: 'https://nalsa.gov.in' },
            { name: 'cybercrime.gov.in', url: 'https://cybercrime.gov.in' }
        ].map((site) => (<a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-xs font-medium text-slate-700 inline-flex items-center gap-1.5 shadow-2xs transition-colors">
                      <span>{site.name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400"/>
                    </a>))}
                </div>
              </div>

              {/* Internal Resource Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Related CredSettle Debt Resolution Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
            { label: 'Lok Adalat Loan Settlement', href: '/lok-adalat-personal-loan-settlement' },
            { label: 'Credit Card Settlement Calculator', href: '/credit-card-settlement-calculator' },
            { label: 'How to Write a Hardship Letter', href: '/how-to-write-a-hardship-letter-for-loan-settlement' },
            { label: 'Verify Loan Settlement Letter', href: '/verify-loan-settlement-letter' },
            { label: 'Get NOC After Loan Settlement', href: '/get-noc-after-loan-settlement' },
            { label: 'Improve CIBIL After Settlement', href: '/improve-cibil-after-loan-settlement' },
            { label: 'What Happens if I Default on Settlement', href: '/what-happens-if-i-default-on-settlement-agreement' },
            { label: 'Business Loan Settlement Process', href: '/business-loan-settlement-process' },
            { label: 'Two Wheeler Bike Loan Settlement', href: '/two-wheeler-bike-loan-settlement' },
            { label: 'Education Loan Settlement', href: '/education-loan-settlement' }
        ].map((guide) => (<Link key={guide.label} href={guide.href} className="px-3 py-1.5 rounded-lg bg-blue-50/60 hover:bg-blue-100/70 text-[#1886ff] hover:text-blue-800 text-xs font-semibold shadow-2xs transition-colors">
                      {guide.label}
                    </Link>))}
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="sticky top-6 space-y-5">
            {/* Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-[#1886ff] flex items-center justify-center text-white font-black text-base shadow-sm">
                  AJ
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900 leading-tight">Ashish Jhangra</p>
                  <p className="text-[11px] text-slate-500 font-medium"> Legal &amp. Debt relief expert. </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed"> Expert in banking claims relief. SARB claims talks. legal clients safety across Indian public and private sector lenders. </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Publisher: CredSettle.</span>
                <span className="text-emerald-600 font-semibold">Verified Author</span>
              </div>
            </div>

            {/* Emergency CTA Card (#2452ae) */}
            <div className="rounded-2xl p-5 text-white shadow-md space-y-3.5 relative overflow-hidden" style={{ backgroundColor: '#2452ae' }}>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-200">
                <Phone className="w-4 h-4 text-blue-200"/>
                <span>Urgent Recovery Help.</span>
              </div>
              <p className="text-base font-extrabold leading-snug"> Facing abuse or Notices from SBI? </p>
              <p className="text-xs text-blue-100/90 leading-relaxed"> Connect straight with our legal and relief team to stop illegal claims calls and settle pre-approved OTS terms. </p>
              <a href="tel:+918800226635" className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-black text-xs sm:text-sm text-center block transition-all shadow-xs hover:shadow-md">
                Call Helpline: +91-8800226635.
              </a>
            </div>

            {/* Trust Badges Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 block">
                CredSettle Trust Metrics.
              </span>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2"> <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/> <span>5,000+ Cases Amicably Resolved.</span> </li>
                <li className="flex items-center gap-2"> <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/> <span>₹120+ Crores in Total Debt Settled.</span> </li>
                <li className="flex items-center gap-2"> <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/> <span>100% Legal safety from abuse.</span> </li>
                <li className="flex items-center gap-2"> <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/> <span>RBI-Compliant relief Protocols.</span> </li>
              </ul>
            </div>

            {/* Quick Related Guides */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 block">
                Related Resources.
              </span>
              <div className="space-y-2 text-xs">
                <Link href="/lok-adalat-personal-loan-settlement" className="block text-slate-700 hover:text-[#1886ff] font-medium transition-colors">
                  Lok Adalat Personal Loan Settlement &rarr;
                </Link>
                <Link href="/how-to-write-a-hardship-letter-for-loan-settlement" className="block text-slate-700 hover:text-[#1886ff] font-medium transition-colors">
                  Hardship Letter for Loan Settlement &rarr;
                </Link>
                <Link href="/verify-loan-settlement-letter" className="block text-slate-700 hover:text-[#1886ff] font-medium transition-colors">
                  How to Verify Settlement Letters &rarr;
                </Link>
                <Link href="/improve-cibil-after-loan-settlement" className="block text-slate-700 hover:text-[#1886ff] font-medium transition-colors">
                  Rebuild CIBIL Score After Settlement &rarr;
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>);
}
