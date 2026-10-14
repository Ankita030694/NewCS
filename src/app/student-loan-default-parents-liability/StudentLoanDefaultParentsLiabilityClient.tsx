'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ChevronDown, Scale, ExternalLink, ShieldCheck, CheckCircle2, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, Check, Phone, CreditCard, Briefcase, Bookmark, ArrowRight, Clock, UserCheck, Sparkles, Gavel, BadgeAlert, Landmark, Home, GraduationCap } from 'lucide-react';
export default function StudentLoanDefaultParentsLiabilityClient() {
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
        { id: 'education-loan-parent-liability', label: '1. Why Parents Bear Liability' },
        { id: 'financial-exposure-and-collateral', label: '2. Financial Tiers & Math' },
        { id: 'resolution-options-matrix', label: '3. Relief Pathways Matrix' },
        { id: 'overseas-student-loan-defaults', label: '4. Overseas Student Defaults' },
        { id: 'infographic-overview', label: 'Visual Defense Blueprint' },
        { id: 'step-by-step-parent-settlement-sop', label: '5. 6-Stage Settlement SOP' },
        { id: 'statutory-notice-defense-rights', label: '6. Statutory Notice Defense' },
        { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
        { id: 'chronological-default-timeline', label: '8. Chronological Timeline' },
        { id: 'specialized-parent-scenarios', label: '9. Real-World Case Scenarios' },
        { id: 'company-profile', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
        { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
    ];
    const faqs = [
        {
            q: 'Are parents automatically legally liable when a student defaults on an education loan in India?',
            a: 'In India. Parents are legally liable if they signed the loan pacts as a co-client. Co-applicant. Or guarantor. Under Section 128 of the Indian Contract Act. 1872. The debt risk of a surety or co-client is co-extensive with that of the main loan debtor. This allows the bank to initiate claims straight against the parents.'
        },
        {
            q: 'What happens if the education loan was below ₹4 Lakhs without collateral?',
            a: 'For education loans up to ₹4 Lakhs sanctioned under the Indian Banks\' Association (IBA) Model Scheme, banks cannot demand tangible collateral or third-party guarantors. However, parents are almost always made co-applicants. While banks cannot seize property under SARFAESI for unsecured loans, they can initiate civil recovery suits or compound cheque/NACH bounce notices.'
        },
        {
            q: 'Can the bank seize parents\' residential house if the student defaults?',
            a: 'If the loan exceeds ₹7.5 Lakhs and parents pledged their residential property or ancestral land as security via an equitable mortgage. The bank can enforce security interests under the SARFAESI Act. 2002. The bank can issue Section 13(2) demand notices and Section 13(4) takeover notices to auction the property unless stayed by DRT or resolved through OTS.'
        },
        {
            q: 'What happens if the student moves abroad and stops paying the loan?',
            a: "When a student relocates abroad (e.g. US. UK. Canada) and ceases EMI payments. Indian banks rarely pursue cross-border lawsuits due to jurisdictional complexity and prohibitive legal costs. Instead. Lenders enforce claims against resident Indian co-applicants. Freezing parents' bank accounts. Issuing legal notices. Pursuing mortgaged domestic security."
        },
        {
            q: 'Can parents be sent to jail for an education loan default?',
            a: "No. Defaulting on a civil loan is not a criminal offense under Indian law. Parents cannot be jailed simply for failing to pay loan EMIs. However. If post-dated security cheques bounce under Section 138 of the Negotiable Instruments Act or NACH auto-debits dishonor under Section 25 PSSA. Lenders may initiate quasi-criminal proceedings. This can be defended, bailed. Compounded through settlement."
        },
        {
            q: 'Does an education loan default damage the parents\' CIBIL score?',
            a: "Yes. Because parents are registered as primary co-applicants or guarantors in bureau records. Any missed EMI, SMA classification. NPA default reflects simultaneously on both the student's and parents' CIBIL reports. This lowers the parents' credit score by 100 to 250 points and freezes their access to credit facilities until resolved."
        },
        {
            q: 'What is the Credit Guarantee Fund Scheme for Education Loans (CGFSEL)?',
            a: "CGFSEL is a government credit guarantee scheme managed by NCGTC covering education loans between \u20B94 Lakhs and \u20B97.5 Lakhs released without tangible security or third-party guarantee. When a client defaults. The lending bank can claim up to 75% of the defaulted amount from the guarantee fund after following prescribed claims protocols."
        },
        {
            q: 'Can parents negotiate a One-Time Settlement (OTS) for an education loan?',
            a: 'Yes. When an education loan turns into a Non-Performing Asset (NPA) due to prolonged unemployment or genuine hardship. Banks are authorized under RBI Prudential rules to consider OTS proposals. Parents can settle a trade OTS deal. Typically waiving 40% to 60% of penal interest and total charges to close the loan permanently.'
        },
        {
            q: 'How can parents stop recovery agent harassment at their residence?',
            a: "Parents are protected by the RBI Master Circular on Fair Practices Code. claims agents cannot use abusive language. Make calls before 8:00 AM or after 7:00 PM. Intimidate elderly parents. Enter homes without authorized identity cards. Coercive abuse can be escalated to the Bank's main loan Nodal Officer. The RBI Ombudsman. Or local police officials."
        },
        {
            q: 'How do parents retrieve property title deeds after settling the education loan?',
            a: "Upon paying the agreed OTS payout sum to the designated loan account. The bank issues a formal No Dues letter (NDC). Under RBI directives on release of movable and immovable property papers. The lender is legally required to return all original title deeds and release the charge registered on CERSAI within 30 days of loan closure."
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
            <GraduationCap className="w-3.5 h-3.5 text-blue-200"/>
            <span>Student Debt &amp; Co-Applicant Legal Protection.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Are Parents Legally Liable for Education Loan Defaults?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed"> Has your child defaulted on an education loan? Learn co-applicant debt risk under Indian law. Defend mortgaged family property from SARFAESI auction. settle a structured OTS deals. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Settle Your Education Loan Today.</span>
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
            return (<a key={link.id} href={`#${link.id}`} className={`group flex items-center justify-between px-3 py-2 rounded-xl transition-all font-medium leading-snug ${isActive
                    ? 'bg-blue-50 text-[#1886ff] font-bold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                      <span className="truncate mr-2">{link.label}</span>
                      <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform ${isActive ? '-rotate-90 text-[#1886ff]' : 'opacity-0 group-hover:opacity-40'}`}/>
                    </a>);
        })}
              </nav>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <article className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX */}
            <div id="quick-crux" className="scroll-target rounded-2xl p-5 md:p-6 bg-[#F4F8FE] border-l-[5px] border-l-[#1886ff] border border-blue-100/80 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-blue-100">
                <ShieldCheck className="w-5 h-5 text-[#1886ff]"/>
                <p className="text-base sm:text-lg font-bold text-slate-900"> Executive Summary: Education Loan Default &amp. Parent debt risk. </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Parents are jointly and severally liable under Section 128 Indian Contract Act.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Loans under ₹4 Lakhs carry zero collateral under IBA Model Scheme guidelines.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Loans between ₹4L and ₹7.5L are backed by CGFSEL credit guarantee protection.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Collateral loans above ₹7.5L expose mortgaged residential homes to SARFAESI.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Overseas student defaults force Indian banks to target resident co-applicants.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Bounced NACH or cheques trigger quasi-criminal notices (Sec 25 PSSA / Sec 138 NI).</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>40% to 60% compromise waiver achievable via structured One-Time Settlement (OTS).</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Mandatory return of original property title deeds within 30 days under RBI rules.</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & WHY PARENTS BEAR LIABILITY */}
            <section id="education-loan-parent-liability" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  1. Education Loan Defaults: Why Parents Bear Legal Liability
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> In India. Education loan pacts mandatorily require parents or guardians to sign as co-clients or private guarantors under the Indian Banks Association (IBA) Model Scheme. Because students entering university lack prior credit scores and stable earnings. Banks secure parental co-debt before disbursing funds. </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Under Section 128 of the Indian Contract Act. 1872. The debt risk of a co-client or surety is co-extensive with that of the main loan debtor. The Supreme Court has repeatedly confirmed that lenders can proceed straight against parents without first exhausting legal remedies against the student. When an EMI remains unpaid for 90 days. The account is classified as a Non-Performing Asset (NPA). Triggering claims actions against the parents. </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Whether signed as joint co-clients or guarantors. Parents are legally exposed to demands for the entire unpaid main loan. Compound interest. Penal fees. </p>
            </section>

            {/* SECTION 2: FINANCIAL EXPOSURE & COLLATERAL TIERS */}
            <section id="financial-exposure-and-collateral" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  2. Financial Exposure &amp; Collateral Tiers in Education Loans
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Parental exposure depends straight on the loan size and pledged security. Categorized under three RBI tiers: </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> <strong>Tier 1 (Up to ₹4 Lakhs):</strong> Clean, no-pledge loans. Banks cannot demand property security or third-party guarantors under IBA norms. While property seizure under SARFAESI is not permitted. Lenders may pursue civil claims suits. </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> <strong>Tier 2 (₹4 Lakhs to ₹7.5 Lakhs):</strong> Secured by parent guarantee and covered by the Credit Guarantee Fund Scheme for Education Loans (CGFSEL) via NCGTC. This allows banks to claim up to 75% of defaulted balances post claims attempts. </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> <strong>Tier 3 (Above ₹7.5 Lakhs):</strong> Requires tangible security. Such as mortgaged residential homes or land. Defaults expose parents to fast property auction under the SARFAESI Act. 2002. </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-bold text-slate-900 text-sm">agent NPA Balance &amp; Settlement Target Math.</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs">Case Study Analysis.</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <p className="text-slate-500 text-xs">Original main loan released.</p>
                    <p className="text-base font-bold text-slate-900">₹25,00,000</p>
                    <p className="text-[11px] text-slate-500">Overseas MS Program.</p>
                  </div>
                  <div className="p-3 bg-rose-50 rounded-xl">
                    <p className="text-rose-600 text-xs">Inflated Bank Demand (NPA).</p>
                    <p className="text-base font-bold text-rose-700">₹39,80,000</p>
                    <p className="text-[11px] text-rose-600">Compound + Penal Dues.</p>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl">
                    <p className="text-emerald-600 text-xs">Target OTS OTS deal.</p>
                    <p className="text-base font-bold text-emerald-700">₹16,50,000</p>
                    <p className="text-[11px] text-emerald-600">45% to 58% Real Relief.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1"> When an education loan stays unpaid. Banks capitalize penal interest and legal costs. CredSettle negotiates under RBI OTS deals rules to waive penal interest and settle close to the core main loan value. </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED RESOLUTION MATRIX */}
            <section id="resolution-options-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  3. Resolution Matrix: Settlement vs Restructuring &amp; SARFAESI
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Choosing the appropriate legal plan preserves family property and eliminates debt distress: </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="px-3.5 py-3 font-extrabold text-[#0C2756]">Resolution Pathway.</th>
                      <th className="px-3.5 py-3">Legal Mechanism</th>
                      <th className="px-3.5 py-3">Risk to Mortgaged Home.</th>
                      <th className="px-3.5 py-3">CIBIL Impact on Parents.</th>
                      <th className="px-3.5 py-3">Recommended Situations.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700 font-normal">
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30 hover:bg-blue-50/50">
                      <td className="px-3.5 py-2.5 font-bold text-[#1886ff]">One-Time Settlement (OTS).</td>
                      <td className="px-3.5 py-2.5">RBI OTS deal Policy / Lok Adalat.</td>
                      <td className="px-3.5 py-2.5 text-emerald-700 font-bold">100% Protected (Deed returned).</td>
                      <td className="px-3.5 py-2.5 text-amber-700">Marked &quot. Settled&quot. (Can be closed).</td>
                      <td className="px-3.5 py-2.5">Chronic unemployment or permanent inability to service EMIs.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Tenure Restructuring.</td>
                      <td className="px-3.5 py-2.5">RBI Prudential rules extension.</td>
                      <td className="px-3.5 py-2.5 text-blue-700 font-semibold">Mortgage stays active with bank.</td>
                      <td className="px-3.5 py-2.5 text-blue-700 font-semibold">Standard / Restructured account.</td>
                      <td className="px-3.5 py-2.5">Temporary cash crunch with confirmed upcoming employment.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-rose-700">SARFAESI Property Auction.</td>
                      <td className="px-3.5 py-2.5">Section 13(2) &amp. 13(4) enforcement.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-extrabold">High Risk of eviction &amp. distress sale.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-extrabold">Severe default / Written off.</td>
                      <td className="px-3.5 py-2.5">Lender proceeds unilaterally if notices are ignored.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-purple-900">DRT Court lawsuits.</td>
                      <td className="px-3.5 py-2.5">Section 19 claims Suit / Sec 17 SA.</td>
                      <td className="px-3.5 py-2.5 text-amber-700 font-semibold">Requires stay order deposit (25%-50%).</td>
                      <td className="px-3.5 py-2.5 text-rose-700">Suit Filed flag in bureau.</td>
                      <td className="px-3.5 py-2.5">Disputing inflated accounts or procedural bank violations.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-600">Prolonged Inaction.</td>
                      <td className="px-3.5 py-2.5">Unilateral claims &amp. ARC sale.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-extrabold">Guaranteed forfeiture of security.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-extrabold">CIBIL ruined. frozen bank accounts.</td>
                      <td className="px-3.5 py-2.5">Never recommended under any hardship.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: OVERSEAS STUDENT DEFAULTS */}
            <section id="overseas-student-loan-defaults" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Briefcase className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  4. Overseas Student Defaults: Legal Consequences for Parents
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> When a student relocates abroad (US. UK. Canada. Australia) and defaults due to visa expiration or job loss. Parents wonder if cross-border claims is possible. </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Civil loan default is non-extraditable under international law. Foreign immigration firms do not monitor Indian civil debts. Because filing overseas claims lawsuits is cost-prohibitive. Indian banks focus their entire claims apparatus onto resident Indian parents. </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Lenders freeze domestic parent bank accounts using the Right of General Lien (Section 171 Indian Contract Act) and enforce SARFAESI on mortgaged property. Defaults also damage parents&apos. CIBIL scores by 100 to 250 points. Freezing their credit access. </p>
            </section>

            {/* SECTION 5: INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Sparkles className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Visual Blueprint: Education Loan Default &amp; Parent Resolution
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> The visual rules illustrates the three security tiers and CredSettle&apos. s verified 6-stage protocol for OTS deals and deed release. </p>

              <div className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-900 shadow-md">
                <div className="relative aspect-video w-full bg-slate-950">
                  <Image src="/images/infographics/student-loan-default-parents-liability.jpg" alt="Education Loan Default Parents Legal Liability and Settlement Framework" fill priority sizes="(max-width: 1200px) 100vw, 900px" className="object-cover"/>
                </div>
                <div className="p-3.5 bg-slate-900 text-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span>Figure 1: CredSettle 6-Stage Education Loan Parent Settlement Protocol.</span>
                  <a href="/images/infographics/student-loan-default-parents-liability.jpg" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-semibold inline-flex items-center gap-1">
                    <span>View High-Res Infographic.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-parent-settlement-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Award className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  5. Step-by-Step SOP: Settling Education Loans for Parents
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> CredSettle executes a tested six-stage Standard Operating Procedure to protect parents. Stop abuse. And secure maximum debt waivers: </p>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">01</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 1: Forensic Loan Document &amp; Moratorium Audit</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> We audit sanction letters and account records to verify moratorium compliance (Course Duration plus 1 Year) and identify illegal penal interest capitalization. </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">02</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 2: Comprehensive Hardship Dossier</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> We compile verifiable hardship proofs. This includes visa terminations, medical records. And parent pension proofs to prove inability to pay. </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">03</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 3: Legal Representation &amp; Cease-and-Desist</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> We submit formal objections under Section 13(3A) SARFAESI and enforce the RBI Fair Practices Code to stop claims agent visits and home abuse. </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">04</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 4: Direct OTS Bilateral Negotiations</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> We settle straight with bank zonal settlement boards to secure a 40% to 60% OTS deal waiver benchmarked against actual claims potential. </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">05</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 5: OTS Sanction Letter Vetting</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> Our legal counsel verifies the sanction letter to ensure clear full-and-final settlement terms. Case withdrawal commitments. Deed release guarantees. </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">06</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 6: Settlement Remittance &amp; Deed Release</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> After paying payment to the bank account. We retrieve original title deeds within 30 days under RBI rules and obtain an full No Dues letter. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & PARENTS' RIGHTS */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <BadgeAlert className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  6. Statutory Notice Defense: Protecting Parents &amp; Property
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Understanding legal notices empowers parents to assert legal rights and prevent panic: </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Home className="w-4 h-4 text-[#1886ff]"/>
                    <span>SARFAESI Demand Notice (Section 13(2)).</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Provides 60 days to respond. Parents have the legal right under Section 13(3A) to file written objections. This the bank must examine within 15 days before taking takeover. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CreditCard className="w-4 h-4 text-emerald-600"/>
                    <span>NACH E-Mandate Dishonor (Section 25 PSSA).</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> When auto-debits bounce. Lenders issue Section 25 notices. While quasi-criminal. These offenses are compoundable through bail and trade settlement. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <FileText className="w-4 h-4 text-purple-600"/>
                    <span>Security Cheque Bounce (Section 138 NI Act).</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Parents who did not sign the local security cheque cannot be prosecuted under Section 138. As criminal debt risk attaches strictly to the signatory. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Landmark className="w-4 h-4 text-amber-600"/>
                    <span>Debt Recovery Tribunal (Section 19 DRT).</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> For claims above ₹20 Lakhs in DRT. Parents can challenge excessive interest calculations and request referral to Lok Adalat for an expedited settlement. </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Under the RBI Fair Practices Code. Agents cannot make abusive calls. Visit before 8:00 AM or after 7:00 PM. Intimidate family members. Violations allow filing police complaints and reporting to the RBI Ombudsman. </p>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  7. 3-Tier Escalation Matrix: Institutional Redressal Steps
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 1: Grievance Redressal Officer (GRO).</span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 text-[#1886ff] font-bold text-xs">7 to 10 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Submit a formal legal help detailing student unemployment and requesting penal interest waiver and referral to the OTS boards. </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 2: Principal Nodal Officer (PNO).</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 font-bold text-xs">14 to 21 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Escalate to the bank&apos. S head office if branch abuse persists. Citing RBI Fair Practices violations to halt coercive actions. </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 3: RBI Ombudsman &amp; Lok Adalat.</span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-bold text-xs">Statutory Redressal.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> File complaints on the RBI CMS portal (cms.rbi.org.in) or seek talks before the National Lok Adalat for binding OTS deal decrees. </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL DEFAULT TIMELINE */}
            <section id="chronological-default-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  8. Chronological Timeline: From Moratorium to Full Release
                </h2>
              </div>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="px-3.5 py-3 font-extrabold text-[#0C2756]">Timeline</th>
                      <th className="px-3.5 py-3">default Phase.</th>
                      <th className="px-3.5 py-3">Bank Action Against Parents.</th>
                      <th className="px-3.5 py-3">CredSettle Strategic Intervention.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700 font-normal">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Month 1 to 6 post-study.</td>
                      <td className="px-3.5 py-2.5">Moratorium Period.</td>
                      <td className="px-3.5 py-2.5">payment holiday. simple interest accrual.</td>
                      <td className="px-3.5 py-2.5">Request payment tenure extension if unplaced.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Day 1 to 90 overdue.</td>
                      <td className="px-3.5 py-2.5">SMA-0, SMA-1, SMA-2.</td>
                      <td className="px-3.5 py-2.5">Automated reminder SMS and claims calls.</td>
                      <td className="px-3.5 py-2.5">Submit formal hardship notice to prevent NPA.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30 hover:bg-blue-50/50">
                      <td className="px-3.5 py-2.5 font-bold text-[#1886ff]">Day 90+ overdue</td>
                      <td className="px-3.5 py-2.5">NPA Classification.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-semibold">Account transferred to Stressed Asset Branch (SARB).</td>
                      <td className="px-3.5 py-2.5 font-semibold text-blue-900">Initiate bilateral One-Time Settlement (OTS) proposal.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-purple-900">Month 4 to 8</td>
                      <td className="px-3.5 py-2.5">legal SARFAESI Notices.</td>
                      <td className="px-3.5 py-2.5">Section 13(2) 60-day demand notice issued.</td>
                      <td className="px-3.5 py-2.5">File Section 13(3A) legal help &amp. stay auction.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-emerald-800">Month 6 to 12</td>
                      <td className="px-3.5 py-2.5">OTS deal Closure.</td>
                      <td className="px-3.5 py-2.5">Bank sanctions OTS. all claims cases stayed.</td>
                      <td className="px-3.5 py-2.5 font-semibold text-emerald-800">Pay settlement. Secure NDC. And recover original deeds.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: REAL-WORLD SCENARIOS */}
            <section id="specialized-parent-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Building2 className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  9. Real-World Scenarios: Overseas Job Loss &amp; Ancestral Land
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Briefcase className="w-4 h-4 text-[#1886ff]"/>
                    <span>Foreign Tech Layoffs &amp; Visa Expiration.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> For graduates returning to India after layoffs. We submit proof of involuntary termination to secure deep main loan waivers and rupee-denominated settlements. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <UserCheck className="w-4 h-4 text-emerald-600"/>
                    <span>Demise or Disability of Student Borrower.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Most education loans include term life cover. We enforce cover policy claim settlements to extinguish loan debt risk without burdening parents. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Home className="w-4 h-4 text-purple-600"/>
                    <span>Joint Ancestral Property Mortgaged.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> When ancestral land is mortgaged. We challenge defective mortgage creations in DRT while executing swift OTS OTS deal pacts to prevent family disputes. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Landmark className="w-4 h-4 text-amber-600"/>
                    <span>Education Loans Sold to ARCs.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> When sticky education NPAs are sold to ARCs at steep discounts. We leverage their low acquisition costs to settle 50% to 70% settlement waivers. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Parent Education Loan Liability
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600"> Find clear answers to questions regarding education loan defaults. Co-applicant debt risk, property mortgage defense. Debt settlement in India. </p>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (<div key={idx} className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all">
                      <button onClick={() => toggleFaq(idx)} className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors text-xs sm:text-sm">
                        <span className="leading-snug">{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}/>
                      </button>
                      {isOpen && (<div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                          <p>{faq.a}</p>
                        </div>)}
                    </div>);
        })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Bookmark className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Statutory Citations &amp; Outbound Authority References
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3 text-xs sm:text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Key Governing Statutes &amp. RBI Directives Cited:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                  <li><strong>Section 128, Indian Contract Act, 1872:</strong> Co-extensive debt risk of surety and co-client in credit pacts.</li>
                  <li><strong>IBA Model Educational Loan Scheme:</strong> Standard security and guarantee norms for higher education loans in India.</li>
                  <li><strong>Section 13(2), 13(3A) &amp. 13(4), SARFAESI Act, 2002:</strong> Enforcement of security interest. Client objection rights. And takeover rules.</li>
                  <li><strong>Section 25. Payment and Settlement Systems Act. 2007 (PSSA):</strong> Dishonor of electronic fund transfer auto-debits and NACH mandates.</li>
                  <li><strong>Section 138 &amp. 147, Negotiable Instruments Act, 1881:</strong> Dishonor of cheques and legal compounding provisions.</li>
                  <li><strong>Section 19. Claims of Debts and Bankruptcy Act. 1993 (RDBA):</strong> Debt claims Tribunal police area and original application process.</li>
                  <li><strong>RBI Master Circular on Fair Practices Code for Lenders:</strong> Standards governing claims agent conduct and customer protection.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">formal Government &amp. RBI Portals:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">Reserve Bank of India.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">RBI Integrated Ombudsman.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">TransUnion CIBIL India.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">India Code Portal.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">National Legal Services.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">National Cyber Crime.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Related Legal &amp. Settlement Guides on CredSettle:</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
            { title: 'Education Loan Settlement', href: '/education-loan-settlement' },
            { title: 'Can Loan Defaulter Go Abroad', href: '/can-loan-defaulter-go-abroad' },
            { title: 'Can Bank Call Relatives', href: '/can-bank-call-relatives-for-loan-recovery' },
            { title: 'SARFAESI Auction Settlement', href: '/auction-settlement-process-loan-recovery-explained' },
            { title: 'Stop Recovery Harassment', href: '/how-to-stop-recovery-agent-harassment' },
            { title: 'NACH Bounce Legal Notice', href: '/ecs-nach-bounce-legal-notice-section-25' },
            { title: 'Lok Adalat Loan Settlement', href: '/lok-adalat-personal-loan-settlement' },
            { title: 'Convert Settled to Closed', href: '/convert-settled-status-to-closed' },
            { title: 'Personal Loan Settlement', href: '/personal-loan-settlement' },
            { title: 'Can You Go to Jail for Debt', href: '/can-i-go-to-jail-for-credit-card-debt' }
        ].map((guide, idx) => (<Link key={idx} href={guide.href} className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-medium border border-slate-200/80 transition-all">
                      {guide.title}
                    </Link>))}
                </div>
              </div>
            </section>
          </article>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* AUTHOR BIO CARD */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 sm:p-5 space-y-3 text-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-[#1886ff] text-white font-extrabold flex items-center justify-center text-base border-2 border-blue-200 flex-shrink-0 shadow-2xs">
                  AJ
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Ashish Jhangra</p>
                  <p className="text-[11px] font-semibold text-[#1886ff]"> Legal &amp. Debt relief expert. </p>
                  <p className="text-[10px] text-slate-500">CredSettle Research Head.</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5"> Specialist in Indian banking dispute defense. Education loan dispute relief. SARFAESI property protection. bank OTS deals under RBI Prudential rules. </p>
            </div>

            {/* EMERGENCY CTA CARD (#2452ae) */}
            <div className="rounded-2xl p-4 sm:p-5 text-white shadow-md space-y-3" style={{ backgroundColor: '#2452ae' }}>
              <div className="flex items-center gap-2">
                <BadgeAlert className="w-5 h-5 text-amber-300 animate-pulse"/>
                <span className="text-xs font-black uppercase tracking-wider text-blue-100">
                  Urgent Legal Defense.
                </span>
              </div>
              <p className="text-base font-extrabold leading-snug"> Bank Demanding Education Loan Dues from Parents? </p>
              <p className="text-xs text-white/90 leading-relaxed"> Speak straight with CredSettle legal workers to stop claims agent abuse. Defend mortgaged family property. settle a 40% to 60% OTS deal waiver. </p>
              <div className="pt-1 space-y-2">
                <a href="tel:+918800226635" className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-xs">
                  <Phone className="w-3.5 h-3.5 text-[#1886ff]"/>
                  <span>Call: +91-8800226635.</span>
                </a>
                <Link href="/contact" className="w-full py-2 px-4 rounded-xl bg-blue-600/40 hover:bg-blue-600/60 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-white/20">
                  <span>Request Urgent Callback.</span>
                  <ArrowRight className="w-3 h-3"/>
                </Link>
              </div>
            </div>

            {/* TRUST BADGES */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-slate-900 font-bold pb-1.5 border-b border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600"/>
                <span>CredSettle Protection Standards.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                <span>100% Confidential Legal Advisory.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                <span>SARFAESI Property Defense Pan-India.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                <span>RBI Fair Practices Code Enforcement.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                <span>Guaranteed Title Deed Release Support.</span>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>);
}
