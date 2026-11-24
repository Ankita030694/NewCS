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
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function EdtechCoachingLoanCancellationClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'statutory-framework', label: '1. RBI & Consumer Law Framework' },
    { id: 'tripartite-trap', label: '2. Zero-Cost EMI & NBFC Loan Traps' },
    { id: 'refund-exit-matrix', label: '3. Course Loan Exit & Refund Math' },
    { id: 'direct-disbursal-kfs', label: '4. KFS, Cooling-Off & Disbursal Rules' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Stop EMIs After Shutdown SOP' },
    { id: 'borrower-rights', label: '7. Joint Liability & Court Rulings' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Shutdown to Clean CIBIL Timeline' },
    { id: 'specialized-scenarios', label: '10. NCLT, Co-Signers & ISA Traps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Do I still have to pay NBFC EMIs if my coaching institute shuts down?',
      a: 'NBFCs often claim your loan is separate from the coaching contract. However, you can challenge this when the NBFC paid the institute directly under a sales tie-up. Send a joint legal notice to both parties and file a consumer case on e-Jagriti to seek loan closure and a stay on EMIs.'
    },
    {
      q: 'Can I cancel my EdTech personal loan during the RBI cooling-off period?',
      a: 'Yes. Under RBI Digital Lending Directions 2025, every digital lender must offer a clear cooling-off window of at least one day. You can exit the loan with zero penalty by paying back the principal and daily interest for the days used. Send your exit request in writing right away.'
    },
    {
      q: 'Are No Refund clauses in coaching agreements legally valid in India?',
      a: 'No. Indian consumer courts and the NCDRC have ruled that blanket No Refund terms are unfair and void when classes stop or services fail. Under the Ministry of Education 2024 guidelines, coaching centres must pay a pro-rata refund for unused months within 10 days.'
    },
    {
      q: 'Should I stop my e-NACH or UPI AutoPay mandate right away?',
      a: 'Do not block your mandate silently without a paper trail. First email a formal dispute notice to both the institute and the NBFC. Once your dispute is on record, you can revoke auto-debit through your bank while filing on NCH, RBI CMS, or e-Jagriti to stop extra losses.'
    },
    {
      q: 'What if the sales agent took a personal loan in my name without a KFS?',
      a: 'Under RBI Circular DOR.STR.REC.13 (effective October 1, 2024), NBFCs must give a signed Key Facts Statement before loan disbursal. If an EdTech agent hid the loan terms or skipped the KFS, file a breach complaint with the NBFC Nodal Officer and the RBI Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'Can an NBFC ruin my CIBIL score during an active EdTech loan dispute?',
      a: 'NBFCs often report missed EMIs to CIBIL unless stopped by a settlement, cancellation, or court stay order. Ask the District Consumer Commission for an interim stay on negative CIBIL reporting under Section 38(8) of the Consumer Protection Act, 2019. If wrong data stays past 30 days after dispute, claim ₹100 per day under RBI rules.'
    },
    {
      q: 'What happens if the EdTech company enters NCLT insolvency or CIRP?',
      a: 'If the EdTech firm is under IBC insolvency, fresh court cases against that company may pause under a Section 14 moratorium. You can submit your refund claim to the Interim Resolution Professional (IRP) and also pursue an RBI Ombudsman dispute or direct OTS settlement with the solvent NBFC.'
    },
    {
      q: 'Can NBFC recovery agents call my college, friends, or boss for a course loan?',
      a: 'No. Under RBI Fair Practices and Digital Lending rules, recovery agents cannot shame you, call your contacts, or threaten police arrest for a civil loan dispute. Save call logs and screenshots, and report harassment to the NBFC Principal Nodal Officer and the RBI Ombudsman.'
    },
    {
      q: 'How do I file a joint case against both the coaching centre and NBFC online?',
      a: 'You can file online through the official e-Jagriti portal at e-jagriti.gov.in, which replaced e-Daakhil in January 2025. Name both the institute and the NBFC as Opposite Parties. There is zero court fee for claims up to ₹5 Lakh, and hearings can happen online.'
    },
    {
      q: 'How does CredSettle help borrowers exit trapped EdTech and coaching loans?',
      a: 'CredSettle audits your KFS, disbursal trail, and loan papers for RBI Digital Lending breaches. Our legal team sends joint notices to the institute and NBFC, handles RBI Ombudsman filings, negotiates principal-waiver OTS exits when needed, and ensures clean NOC and CIBIL updates.'
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
            <span>RBI Digital Lending Directions 2025 &amp; CCPA Coaching Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Stop Course Loan EMIs When Coaching Institute Defaults
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your EdTech app or coaching centre shut down while an NBFC still takes EMIs? Learn how to use RBI Digital Lending rules, CCPA refund orders, and consumer law to cancel the loan and protect your CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute My Course Loan</span>
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
                  <span>Student &amp; Parent Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI Digital Lending Directions 2025, CCPA Norms, and Consumer Protection Act 2019.
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
                <span>EXECUTIVE BRIEF: EDTECH &amp; COACHING NBFC LOAN EXIT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Hidden Personal Loan Trap:</strong> Most &quot;Zero-Cost Course EMIs&quot; are real third-party NBFC personal loans. They show up on your CIBIL report right away even if classes stop.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">10-Day Pro-Rata Refund Rule:</strong> Under Ministry of Education 2024 rules and CCPA norms, &quot;No Refund&quot; clauses are void. Coaching centres must refund unused course fees within 10 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI KFS &amp; Cooling-Off Shield:</strong> Under RBI Digital Lending Directions 2025, every lender must give a signed Key Facts Statement (KFS) and a penalty-free cooling-off window to exit.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Joint Liability in Consumer Court:</strong> When an NBFC wires money straight to a coaching firm under a tie-up, consumer courts can hold both jointly liable under Section 65 of the Contract Act.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Safe Auto-Debit Exit:</strong> Never stop e-NACH silently without proof. Put both the institute and NBFC on written dispute notice first to guard your CIBIL and avoid Section 25 bounce trouble.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI & Consumer Rules for Course Loans */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Directions &amp; Consumer Protection Statutes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI &amp; Consumer Rules for Course Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Across India, thousands of students and parents sign up for test prep, coding bootcamps, and EdTech apps every month. Many pay through instant NBFC loans pitched as easy monthly plans. Trouble starts when the coaching centre shuts down, teachers leave, or the promised classes never happen.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even after the institute locks its doors, the partner NBFC keeps taking monthly EMIs from your bank account. The lender often tells you that your loan contract is separate from your coaching course. However, Indian banking rules and consumer laws give you strong ways to fight back.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the Reserve Bank of India issued the Digital Lending Directions, 2025 (RBI/2025-26/36) and the Key Facts Statement Circular (DOR.STR.REC.13). These rules bind every bank and NBFC that sells loans through EdTech apps or coaching desks. Lenders must be honest about costs, loan agents, and exit rights.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the Consumer Protection Act, 2019 works alongside the Ministry of Education 2024 Coaching Guidelines and CCPA 2024 rules. Together, they treat sudden centre shutdowns and &quot;no refund&quot; traps as unfair trade practices. You can claim refunds, cancel linked loans, and stop unfair recovery calls.
              </p>
            </section>

            {/* SECTION 2: How EdTech Zero-Cost EMI & NBFC Loan Traps Work */}
            <section id="tripartite-trap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Anatomy of Mis-Sold Zero-Cost Course EMIs</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How EdTech Zero-Cost EMI &amp; NBFC Loan Traps Work
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most borrowers never realize they are taking a formal personal loan during course admission. Sales reps call it a &quot;monthly tuition plan,&quot; &quot;scholarship EMI,&quot; or &quot;15-day risk-free trial.&quot; They rush you to share your PAN, Aadhaar OTP, selfie, and bank e-NACH on their tablet or link.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In legal terms, that sales desk acts as a Lending Service Provider (LSP) for a partner NBFC. Within minutes, the NBFC opens an unsecured personal loan in your or your parent&apos;s name. Instead of paying you, the NBFC wires the entire 1-year or 2-year course fee straight to the institute&apos;s bank account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                How does the NBFC offer &quot;Zero-Cost EMI&quot;? Behind the scenes, the EdTech company gives the NBFC an upfront discount called subvention. For example, on a ₹1,20,000 course loan, the NBFC may wire only ₹1,08,000 to the institute and pocket ₹12,000 upfront as its interest margin.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This hidden setup hurts you the moment classes fail. Because the institute already took the full cash up front, its support team stops replying to refund emails. Meanwhile, the NBFC demands all ₹1,20,000 from you and threatens to spoil your CIBIL score if a single EMI bounces.
              </p>
            </section>

            {/* SECTION 3: Course Loan Exit Matrix: Refund, Cancel & OTS Math */}
            <section id="refund-exit-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Exit Pathways &amp; Financial Recovery Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Course Loan Exit Matrix: Refund, Cancel &amp; OTS Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The right way to exit an EdTech or coaching NBFC loan depends on what went wrong and when you act. A fresh loan inside the look-up window needs a very different plan than a loan tied to a bankrupt coaching brand.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Use the comparison table below to match your exact case to the strongest legal remedy, target payoff outcome, and CIBIL impact.
              </p>

              {/* Representative Exit Matrix Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">EdTech &amp; Coaching NBFC Loan Exit Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">5 Legal Relief Pathways</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Dispute Scenario</th>
                        <th className="p-3">Primary Legal Shield</th>
                        <th className="p-3">Target Loan Outcome</th>
                        <th className="p-3 text-right">CIBIL &amp; Cost Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Within Cooling-Off Window</td>
                        <td className="p-3 font-mono text-xs">RBI Directions 2025</td>
                        <td className="p-3 text-emerald-700 font-semibold">Zero-penalty loan cancellation</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Closed (₹0 Penalty)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Mid-Course Exit / Poor Classes</td>
                        <td className="p-3 font-mono text-xs">MoE 10-Day &amp; CCPA 2024</td>
                        <td className="p-3 text-blue-700 font-semibold">Pro-rata fee refund to NBFC</td>
                        <td className="p-3 text-right font-bold text-blue-700">Clean Closure on Refund</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Coaching Institute Shut Down</td>
                        <td className="p-3 font-mono text-xs">Sec 65 Contract &amp; CPA</td>
                        <td className="p-3 text-amber-700 font-semibold">Joint liability &amp; EMI refund</td>
                        <td className="p-3 text-right font-bold text-amber-700">Cancelled + CIBIL Cleared</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">No KFS / Forged Consent</td>
                        <td className="p-3 font-mono text-xs">RBI KFS Circular 2024</td>
                        <td className="p-3 text-rose-700 font-semibold">RBI Ombudsman full reversal</td>
                        <td className="p-3 text-right font-bold text-rose-700">Deleted + ₹100/Day Claim</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">EdTech in NCLT Insolvency</td>
                        <td className="p-3 font-mono text-xs text-[#1886ff]">IBC Claim + NBFC OTS</td>
                        <td className="p-3 text-[#1886ff]">40% to 65% principal waiver</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm font-mono">Negotiated Exit + NOC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: RBI KFS, Cooling-Off & Direct Disbursal Breaches */}
            <section id="direct-disbursal-kfs" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Binding RBI Digital Lending Violations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. RBI KFS, Cooling-Off &amp; Direct Disbursal Breaches
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if a coaching centre vanishes, you have a direct weapon against the NBFC. Many EdTech loans break strict Reserve Bank of India compliance rules during signup. Spotting even one RBI breach gives you strong power before the RBI Ombudsman.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>1. Missing Key Facts Statement (KFS):</strong> Under RBI Circular DOR.STR.REC.13 (mandatory from October 1, 2024), the NBFC must send you a clear KFS before disbursing a retail loan. The KFS must show the true Annual Percentage Rate (APR), processing fees, penal charges, and recovery agent details. Any fee missing from your KFS cannot be charged to you.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>2. Blocked Cooling-Off Exit:</strong> Under RBI Digital Lending Directions 2025, every digital loan must carry a clear look-up period of at least one day (often three days under NBFC policy). During this period, you can cancel the loan with zero penalty by paying only principal and daily interest. If an EdTech counselor stalled your email until the window expired, the NBFC is responsible for its partner&apos;s delay.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>3. Direct Disbursal &amp; LSP Accountability:</strong> RBI rules mandate that digital loan money must go straight to the borrower&apos;s own bank account. Paying a merchant directly is only allowed under narrow end-use rules with clear, informed borrower consent. Also, under RBI rules, the NBFC bears full legal blame for any false claims or forced KYC done by its EdTech sales agent.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>4. Illegal Penal Interest Compounding:</strong> Under RBI Circular DoR.MCS.REC.28 (effective April 1, 2024), lenders cannot charge extra penal interest on unpaid EMIs. They cannot charge interest on late fees either. Any flat penal fee must be fair and printed upfront in your KFS.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: EdTech Loan Cancellation &amp; Exit Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart sums up the core legal shields that protect students and parents against trapped EdTech and coaching NBFC loans in India. Use it to verify your refund rights and RBI Digital Lending defenses.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/edtech-coaching-course-nbfc-personal-loan-cancellation.jpg"
                    alt="EdTech and Coaching NBFC Personal Loan Dispute and Exit Legal Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle EdTech &amp; Coaching NBFC Loan Shield • RBI &amp; CCPA Compliant</span>
                  <a
                    href="/images/infographics/edtech-coaching-course-nbfc-personal-loan-cancellation.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Stopping EMIs After Institute Shutdown */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Stopping EMIs After Institute Shutdown
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your coaching centre closed down or your EdTech course turned out to be a scam, do not panic or ignore NBFC calls. Follow these six legal steps in exact order to build an airtight case.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Freeze Proof of Shutdown and Mis-Selling
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Collect photos of locked coaching branches, cancelled class emails, dead app screens, and WhatsApp chats with sales agents. Save your fee receipt, brochure promises, and bank statement showing EMIs paid so far.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Demand Your Signed KFS, Loan Copy, and UTR Trail
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the NBFC Grievance Officer right away. Demand a free copy of your signed loan agreement, Key Facts Statement (KFS), LSP partner details, and bank UTR proof showing who got your loan money.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Serve a Joint Legal Notice to EdTech and NBFC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send one formal legal notice to both the coaching institute and the NBFC. Cite Section 65 of the Indian Contract Act, Ministry of Education 10-day pro-rata refund rules, and RBI Digital Lending compliance breaches.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Revoke Auto-Debit Only After Putting Dispute on Record
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never let your e-NACH or UPI AutoPay bounce quietly without written notice. After serving your dispute notice, instruct your bank to pause or cancel the mandate so further funds do not drain while your case runs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File on NCH, RBI CMS Portal, and e-Jagriti
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log a grievance on National Consumer Helpline (1915) first. Escalate NBFC breaches on cms.rbi.org.in after 30 days, and file a joint petition on e-jagriti.gov.in asking for an interim stay on EMIs and CIBIL hits.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Collect Official NOC and Audit All Four Credit Bureaus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the loan is cancelled, refunded, or settled via OTS, get a signed No Dues Certificate (NOC). Check CIBIL, Experian, CRIF, and Equifax within 15 to 30 days to ensure zero overdue remarks remain.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Rights: Joint Liability & Consumer Court Rulings */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Consumer Protection Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Rights: Joint Liability &amp; Consumer Court Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Coaching brands and NBFCs rely on two standard excuses: &quot;Fees are non-refundable&quot; and &quot;The loan is a separate contract.&quot; Indian consumer commissions have rejected both excuses in major cases across the country.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 2(46) and Section 2(47) of the Consumer Protection Act, 2019, one-sided &quot;no refund&quot; clauses are unfair contracts. When an institute shuts down, the core purpose of the contract fails under Section 65 of the Indian Contract Act.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>NCDRC: FIITJEE Ltd. v. Dr. Minathi Rath</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The National Commission ruled that taking multi-year lump-sum fees with blanket &quot;no refund&quot; terms is an unfair trade practice. Coaching institutes cannot keep unearned money for unrendered classes and must pay a pro-rata refund.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Nuance Rule: FIITJEE Ltd. v. Harish Soni</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a student drops out on their own and the seat stays empty, courts check actual cost loss. However, if the coaching centre itself stops classes or shuts down, full pro-rata refund and compensation apply without exception.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Joint Liability of EdTech &amp; Partner NBFC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When an NBFC ties up with an institute, uses its sales staff for KYC, and wires fees straight to the institute, both act together. Consumer courts can hold both jointly and severally liable to refund EMIs and close the loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Interim EMI Stay &amp; Harassment Ban</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 38(8) of CPA 2019, District Commissions can pass an interim stay blocking EMI recovery and CIBIL hits during trial. Under RBI rules, NBFC agents cannot threaten arrest or contact your college, family, or boss.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: NBFC GRO to RBI & e-Jagriti */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: NBFC GRO to RBI &amp; e-Jagriti
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If customer care agents keep passing the blame between the EdTech app and the NBFC, move up this formal three-tier redressal ladder.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO Desk</td>
                      <td className="p-3">NBFC GRO &amp; Institute Refund Officer</td>
                      <td className="p-3 font-mono">7 to 15 Days</td>
                      <td className="p-3">Audits missing KFS, cooling-off logs, and triggers merchant clawback from escrow.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: NCH &amp; PNO</td>
                      <td className="p-3">National Consumer Helpline &amp; NBFC PNO</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Registers official docket on consumerhelpline.gov.in (1915) and forces Head Office review.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI &amp; Court</td>
                      <td className="p-3">RBI Ombudsman &amp; e-Jagriti Commission</td>
                      <td className="p-3 font-mono">30+ Days</td>
                      <td className="p-3">Files RBI Digital Lending breach at cms.rbi.org.in and joint refund suit on e-jagriti.gov.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Course Default to Clean CIBIL */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Course Default to Clean CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Timing matters in EdTech loan disputes. Acting in the first 10 to 30 days stops extra EMI losses and helps you secure RBI and consumer law relief faster.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Legal Phase</th>
                      <th className="p-3">Lender &amp; Institute Duty</th>
                      <th className="p-3">Borrower Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3 font-mono text-[11px]">Cooling-Off Window</td>
                      <td className="p-3">NBFC must allow penalty-free loan exit under RBI look-up rules.</td>
                      <td className="p-3">Email written loan cancellation right away to both NBFC and EdTech.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to 10</td>
                      <td className="p-3 font-mono text-[11px]">10-Day Refund Window</td>
                      <td className="p-3">Institute must release pro-rata refund under Ministry of Education rules.</td>
                      <td className="p-3">Save shutdown proof, demand KFS and UTR trail, and log NCH ticket.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 11 to 30</td>
                      <td className="p-3 font-mono text-[11px]">Formal Legal Notice</td>
                      <td className="p-3">NBFC GRO must reply to KFS, agent mis-selling, and refund claims.</td>
                      <td className="p-3">Serve joint legal notice and revoke auto-debit safely after notice.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31 to 45</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">RBI &amp; Court Filing</td>
                      <td className="p-3">NBFC faces RBI Ombudsman probe and Consumer Commission notice.</td>
                      <td className="p-3 font-bold text-amber-800">File on cms.rbi.org.in and e-jagriti.gov.in seeking interim EMI stay.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 46 to 90</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Resolution / OTS</td>
                      <td className="p-3">Negotiates merchant clawback, loan cancellation, or waiver OTS.</td>
                      <td className="p-3 font-bold text-slate-900">Verify formal cancellation letter or verified OTS letter before paying.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Closure (15-30d)</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">CIBIL Clean-Up</td>
                      <td className="p-3">Must report zero dues on 15-day cycle or pay ₹100/day dispute penalty.</td>
                      <td className="p-3">Secure NOC and audit CIBIL, Experian, CRIF, and Equifax reports.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: NCLT Insolvency, Co-Signers & Apps */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: NCLT Insolvency, Co-Signers &amp; Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many EdTech loan cases involve extra legal twists like corporate insolvency, parent co-signers, or bounce notices. Here is how Indian law handles these four real-world cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    EdTech Company in NCLT Insolvency (CIRP)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the EdTech firm enters IBC insolvency, new court cases against it pause under a Section 14 moratorium. File your fee claim with the Interim Resolution Professional (IRP). Meanwhile, challenge RBI breaches or negotiate a 40% to 65% OTS waiver directly with the solvent NBFC.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Parent Co-Borrowers &amp; Salaried Guarantors
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Because most students lack income, coaching loans are booked in a parent&apos;s name. Every unpaid EMI hits the parent&apos;s CIBIL score too. Always include both student and parent names on the legal notice and e-Jagriti complaint.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    Section 25 PSSA e-NACH Bounce Notices
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    After you stop auto-debit, an NBFC may send a notice under Section 25 of the Payment and Settlement Systems Act, 2007. Never ignore it. Reply within 15 days through an advocate citing failure of consideration and your active consumer dispute.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-amber-600" />
                    &quot;Pay After Placement&quot; &amp; Fake ISA Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some job-guarantee bootcamps pitch an Income Share Agreement (ISA) that secretly activates an NBFC personal loan on day one. Under CCPA 2024 rules and RBI KFS norms, hidden job guarantees and undisclosed APR loans can be legally disputed.
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
                Frequently Asked Questions: EdTech &amp; Coaching NBFC Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Plain, clear answers to key questions on stopping coaching EMIs, RBI cooling-off exits, joint consumer court claims, and protecting your CIBIL score.
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
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India (Digital Lending) Directions, 2025:</strong> RBI/2025-26/36 (DOR.STR.REC.19/21.07.001/2025-26), dated May 8, 2025, governing direct disbursal, LSP liability, and cooling-off periods.
                </li>
                <li>
                  <strong>RBI Key Facts Statement (KFS) Circular:</strong> DOR.STR.REC.13/13.03.00/2024-25, dated April 15, 2024 (mandatory from October 1, 2024) for all retail and NBFC term loans.
                </li>
                <li>
                  <strong>RBI Credit Information Compensation Circular:</strong> RBI/2023-24/72 (DoR.FIN.REC.48/20.16.003/2023-24), prescribing ₹100 per day compensation for credit bureau delays past 30 days.
                </li>
                <li>
                  <strong>Ministry of Education Coaching Guidelines (2024):</strong> Guidelines for Registration and Regulation of Coaching Center, mandating 10-day pro-rata fee refunds upon mid-course exit.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019 &amp; CCPA Coaching Guidelines (2024):</strong> Sections 2(11), 2(46), 2(47), and 38(8), prohibiting misleading claims, unfair non-refundable clauses, and enabling interim stays.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872 &amp; NCDRC Precedents:</strong> Sections 56 and 65 (Failure of Consideration), FIITJEE Ltd. v. Dr. Minathi Rath (NCDRC, 2011), and FIITJEE Ltd. v. Harish Soni (NCDRC, 2015).
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
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-Jagriti Consumer Court Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.education.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Education India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Missing KFS Hidden Fees Refund
                  </Link>
                  <Link href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pause vs Revoke UPI AutoPay
                  </Link>
                  <Link href="/nbfc-presenting-mandate-multiple-times-month-bounce-fee" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Multiple NBFC Mandate Bounces
                  </Link>
                  <Link href="/dpdp-act-2023-data-erasure-digital-personal-loan-apps" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DPDP Act Loan App Data Erasure
                  </Link>
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat Rate vs Reducing APR Trap
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Legal Notice Reply
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
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
                Specialist in NBFC digital lending disputes, RBI Key Facts Statement audits, consumer court filings, and personal loan exits helping students and parents escape trapped coaching debt.
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
                  COURSE LOAN DISPUTE HELP
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Coaching Shut Down But NBFC Still Charging EMIs?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits your KFS and disbursal trail, sends joint notices to the institute and NBFC, stops harassment, and protects your CIBIL score.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Dispute My EdTech Loan Now
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
                  <span>RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI KFS &amp; LSP Audit:</strong> Pinpoints illegal direct disbursal and hidden fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Joint Legal Notices:</strong> Holds both coaching firm and NBFC accountable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Shield:</strong> Stops unlawful NBFC recovery calls to parents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean NOC &amp; CIBIL Fix:</strong> Tracks full bureau cleanup within 30 days.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Fees Missing in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI refund mandate &rarr;</span>
                </Link>

                <Link
                  href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Pause vs Revoke UPI AutoPay EMI
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Safe mandate stop rules &rarr;</span>
                </Link>

                <Link
                  href="/stop-recovery-agent-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop NBFC Recovery Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI legal defense guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
