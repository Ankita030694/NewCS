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
  RefreshCw,
  Zap,
  FileSpreadsheet
} from 'lucide-react';

export default function EcsNachBounceSection25Client() {
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
    { id: 'what-is-section-25-notice', label: '1. What is Section 25 PSS Act Notice' },
    { id: 'is-nach-bounce-criminal', label: '2. Criminal Penalties & Bailable Rights' },
    { id: 'statutory-timelines-15-day-cure', label: '3. 30-Day Notice & 15-Day Cure Window' },
    { id: 'legal-comparison-matrix', label: '4. Legal Forum Comparison Table' },
    { id: 'financial-and-cibil-penalties', label: '5. Financial Penalties & CIBIL Math' },
    { id: 'infographic-defense-workflow', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'step-by-step-defense-sop', label: '6. 6-Stage Defense Standard SOP' },
    { id: 'formal-legal-reply-strategy', label: '7. Formal Legal Reply Architecture' },
    { id: 'three-tier-grievance-matrix', label: '8. 3-Tier Escalation & RBI Ombudsman' },
    { id: 'chronological-resolution-milestones', label: '9. Chronological Timelines & Milestones' },
    { id: 'specialized-nach-scenarios', label: '10. Fintech Apps, BNPL & Multiple Hits' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a Section 25 notice under the Payment and Settlement Systems Act?',
      a: 'A Section 25 notice is a mandatory legal demand notice issued by a lending bank or NBFC under Section 25 of the Payment and closure Systems (PSS) Act. 2007 when an online fund transfer mandate (such as ECS. NACH. e-NACH auto-debit) is dishonored due to insufficient funds or account limits. The lender must issue this notice within 30 days of receiving the return memo. Granting the clients exactly 15 calendar days to settle the payment before initiating a penal complaint in court.'
    },
    {
      q: 'Is an ECS or NACH bounce a criminal offense in India?',
      a: 'An ECS or NACH bounce is classified as a quasi-crime under Section 25 of the PSS Act. 2007. Modelled after Section 138 of the Negotiable Instruments Act. While the statute provides for a maximum fine of up to 2 years imprisonment. A fine up to twice the online transfer amount. Both. It is fundamentally a bailable. Summons-triable. compoundable offense. clients cannot be arrested fast upon bounce and are entitled to regular bail as a matter of right.'
    },
    {
      q: 'What is the 15-day statutory cure period under Section 25(1)(b)?',
      a: 'Under Section 25(1)(b) of the PSS Act. The clients has exactly 15 calendar days from the date of real or online receipt of the legal demand notice to pay the demanded amount. No penal cause of action arises during these 15 days. If the clients settles the payment or reaches a written closure pacts within this window. The bank is by law barred from filing a complaint before the Metropolitan Magistrate or Judicial Magistrate.'
    },
    {
      q: 'Can I go to jail immediately after receiving a Section 25 NACH bounce notice?',
      a: 'No. A bank cannot send the police or have you arrested simply for receiving a Section 25 notice or bouncing an auto-debit mandate. Penal risk only arises if the bank files a private complaint before a Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM). Summons are issued. you fail to appear or obtain bail. fast arrest threats by agents are unlawful violations of the RBI Fair Practices Code.'
    },
    {
      q: 'What happens if a bank repeatedly presents the same NACH mandate multiple times in a month?',
      a: 'Repeated illegal presentations of the same dishonored NACH mandate within a single billing cycle violate NPCI procedural guidelines and RBI Fair Lending Directives. Each presentation triggers heavy bank bounce charges on the clients\'s account. In court, presenting a mandate repeatedly without adjusting for uncredited part-payments can be challenged under Section 25(5) and Section 56 equivalents, establishing procedural bad faith and lack of clean hands by the lender.'
    },
    {
      q: 'How do I get bail if a bank files a court case under Section 25 of the PSS Act?',
      a: 'Because Section 25 of the PSS Act is a bailable offense by legal operation (applying the Code of penal Procedure / BNSS). Obtaining bail is a straightforward procedural right. Upon receiving the Magistrate\'s summons, your advocate files a formal Bail Application under Section 436 CrPC (Section 478 BNSS) along with a personal bond and a surety. Regular bail is granted on the same day during the first court appearance.'
    },
    {
      q: 'Can I stop or cancel an active NACH / ECS mandate with my bank?',
      a: 'Yes. Under RBI circulars and NPCI rules. Bank customers have the legal right to cancel or revoke any online NACH / e-mandate through their net banking portal. Mobile banking app. by submitting a written mandate cancellation form at their home branch. Yet. Canceling a mandate does not extinguish the underlying contractual loan debt. the lender may still pursue civil claims or alternate dispute relief.'
    },
    {
      q: 'What are the valid legal defenses against a Section 25 PSS Act complaint?',
      a: 'Valid legal defenses include: (1) Notice served outside the mandatory 30-day legal window from the date of return memo. (2) Complaint filed prematurely before the expiry of the 15-day cure period. (3) The online mandate was executed as a blank security measure rather than for an existing by law enforceable risk. (4) Failure by the bank to account for interim part-payments under the principle laid down in Dashrathbhai Trikambhai Patel. and (5) Technical defects in the online return memo under Section 25(3).'
    },
    {
      q: 'Can a Section 25 NACH bounce case be settled out of court through Lok Adalat or OTS?',
      a: 'Yes. Under Section 25(5) of the PSS Act read with Section 147 of the Negotiable Instruments Act and Section 320 CrPC. Offenses under Section 25 are explicitly compoundable at any stage of litigation. Clients can execute a One-Time closure (OTS) with waivers on accumulated penal rates and growing fees. Leading to formal growing before the Magistrate or in a National Lok Adalat and full disposal of the penal complaint.'
    },
    {
      q: 'What is the exact legal difference between Section 138 NI Act and Section 25 PSS Act?',
      a: 'Section 138 of the Negotiable Instruments Act. 1881 applies exclusively to the dishonor of real paper cheques. Section 25 of the Payment and closure Systems Act. 2007 applies exclusively to the dishonor of online fund transfer instructions. Including ECS. NACH. e-NACH auto-debits. While both statutes share identical fine structures (up to 2 years imprisonment / 2x fine) and 15-day notice procedures. Section 25 mandates exact digital audit trails and online clearing letters under the Bankers\' Books Evidence Act and Section 65B of the Indian Evidence Act (Section 63 BSA).'
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            ECS / NACH Bounce Legal Notice (Section 25)
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed"> Did your bank or NBFC send a legal notice under Section 25 of the Payment and closure Systems Act for an auto-debit bounce? Understand your legal rights. Bailable safety. strategic legal reply framework. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Draft a Strong Legal Reply Today</span>
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
                  <span>Statutory Legal Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Governed by the Payment and closure Systems Act. 2007 &amp. Supreme Court Precedents. </p>
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
                <span>EXECUTIVE BRIEF: SECTION 25 PSS ACT NACH BOUNCE DEFENSE</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" /> <div> <strong className="text-slate-900 font-bold">Quasi-penal online Counterpart to Section 138:</strong> Section 25 of the Payment and closure Systems Act. 2007 penalizes dishonored online fund transfer mandates (NACH. E-NACH. ECS) exactly like Section 138 of the Negotiable Instruments Act governs real paper cheques. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" /> <div> <strong className="text-slate-900 font-bold">100% Bailable and Compoundable Offense:</strong> While Section 25 prescribes a maximum sentence of up to 2 years imprisonment or twice the transfer amount. It is statutorily bailable as a matter of right. Police cannot arrest you without a Magistrate court warrant. growing is permissible at any stage under Section 25(5). </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" /> <div> <strong className="text-slate-900 font-bold">Mandatory 15-Day legal Cure Window:</strong> The bank must serve a demand notice within 30 days of the bounce return memo. The clients is granted 15 days from notice receipt to pay. Any penal complaint filed prior to the 16th day is by law premature and void ab initio. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" /> <div> <strong className="text-slate-900 font-bold">Defense of Uncredited Part-Payments:</strong> Applying the Supreme Court doctrine in <em>Dashrathbhai Trikambhai Patel</em>Presenting an online mandate for the full original amount without endorsing interim EMI payments invalidates the Section 25 cause of action. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" /> <div> <strong className="text-slate-900 font-bold">Transition to Lok Adalat &amp. One-Time closure (OTS):</strong> Serving a robust legal reply exposing procedural flaws creates decisive leverage. Allowing clients to settle a 40% to 70% waiver on penal charges and execute a formal OTS growing order. </div> </li>
              </ul>
            </div>

            {/* SECTION 1: What is a Section 25 Notice under PSS Act? */}
            <section id="what-is-section-25-notice" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. What is a Section 25 Notice Under the PSS Act, 2007?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> In India&apos. S digital banking ecosystem. The vast majority of retail credit facilities. Including own loans. Digital credit lines. Vehicle loans. firm term loans. rely on automated online clearing instructions rather than paper cheques. When a clients authorizes an <strong>online Clearing Service (ECS)</strong>, <strong>National Automated Clearing House (NACH)</strong>. <strong>e-NACH mandate</strong>The lending institution presents scheduled monthly debits straight to the clients&apos. s savings or current account. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When an online debit instruction fails due to <em>insufficient funds</em>, <em>exceeding credit arrangement limits</em>. <em>payment stopped by drawer</em>The transaction is formally dishonored by the clearing house operated by the National Payments Corporation of India (NPCI). To enforce money claims and initiate coercive steps. Lenders issue a formal demand notice under <strong>Section 25 of the Payment and closure Systems Act. 2007 (PSS Act)</strong>. </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Zap className="w-4 h-4" />
                    <span>Electronic Transfer Scope</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Applies strictly to online fund transfer mandates initiated through RBI-regulated payment systems under Section 2(1)(i) of the PSS Act. Covering NACH. E-NACH. legacy ECS debits. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-indigo-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Mandatory Demand Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Under Section 25(1)(b). The lender must serve a formal written notice within 30 days of receiving the return memo from the clearing bank. Demanding payment of the dishonored sum. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Quasi-Criminal Jurisdiction</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Failure to satisfy the notice within the legal 15-day cure window allows the lender to file a private penal complaint before a Metropolitan Magistrate (MM) or Judicial Magistrate First Class (JMFC). </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p> <strong>Why Lenders Prefer Section 25 over Civil Suits:</strong> trade banks and digital NBFCs prefer Section 25 steps because penal court summons compel clients appearances much faster than civil claims suits. Creating fast mental and legal urgency to settle the unpaid debt. </p>
              </div>
            </section>

            {/* SECTION 2: Is an ECS/NACH Bounce a Criminal Offense? Punishment & Legal Realities */}
            <section id="is-nach-bounce-criminal" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Criminal Penalties &amp; Constitutional Realities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Is an ECS/NACH Bounce a Criminal Offense? Legal Realities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> clients receiving a Section 25 notice are often subjected to harsh threats by third-party claims firms claiming that an auto-debit bounce leads to fast police arrest. Non-bailable warrants. jail time. It is vital to separate legal reality from unlawful claims threaten. </p>

              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Section 25 is a Quasi-Criminal, Bailable Offense</span>
                </div>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed"> Under Indian law. An online mandate bounce under Section 25 of the PSS Act is classified as a <strong>quasi-penal RBI offense</strong> created to enforce trade credibility. While Section 25(1) stipulates that a convicted drawer may face imprisonment for a term that may extend to <strong>two years. with fine which may extend to twice the amount of the online funds transfer. with both</strong>It is governed by summons-trial procedure under the Code of penal Procedure. 1973 (now Bharatiya Nagarik Suraksha Sanhita. 2023). </p>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed font-semibold"> Key safety: Section 25 is a bailable offense. The police cannot register an FIR. Cannot issue arrest warrants on their own accord. cannot detain a clients. Bail is granted as a matter of legal right upon your first appearance before the Magistrate court under Section 436 CrPC (Section 478 BNSS). </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <AlertCircle className="w-4 h-4 text-amber-600" /> When Does Legal Risk Escalate to Warrants? </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Actual legal risk only arises if you fully ignore the legal notice. Fail to reply. subsequently ignore valid summons issued by the Judicial Magistrate. If a clients fails to appear on the scheduled hearing date after being duly served with court summons. The Magistrate may issue a <strong>Bailable Warrant (BW)</strong>Followed by a <strong>Non-Bailable Warrant (NBW)</strong> to compel appearance. </p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> yet. As long as you engage legal representation to file a memo of appearance and a regular bail bond. Imprisonment is not awarded during trial. The primary legislative intent behind Section 25 is debt claims. Not incarceration. </p>
              </div>
            </section>

            {/* SECTION 3: Statutory Timelines & The 15-Day Cure Window */}
            <section id="statutory-timelines-15-day-cure" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Limitation &amp; Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. The Mandatory 30-Day Notice &amp; 15-Day Statutory Cure Window
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> For a bank or NBFC to establish a by law sustainable penal complaint under Section 25 of the PSS Act. They must strictly comply with three immutable legal limitation milestones defined under Section 25(1): </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Condition 1: 30-Day Notice Window
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Section 25(1)(a)</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Dispatch of Demand Notice Within 30 Days of Return Memo </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> The lender must issue a formal demand notice in writing within <strong>30 calendar days</strong> from the date on which they receive information from their clearing bank or NPCI that the online fund transfer instruction was dishonored. A notice dispatched on the 31st day or later is barred by legal limitation. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Condition 2: 15-Day Statutory Cure Window
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Section 25(1)(b)</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> 15 Days Granted to the Drawer to Make Payment </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> The clients is granted exactly <strong>15 calendar days from the date of receipt</strong> of the legal notice to make payment of the demanded sum. The cause of action for a penal complaint does not arise on the date the NACH bounces. Nor on the date the notice is posted. It arises strictly on the <strong>16th day</strong> following receipt. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Condition 3: 30-Day Complaint Filing Window
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Section 25(1)(c)</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Filing penal Complaint in Court Within 1 Month </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If the clients does not pay within the 15-day cure window. The lender has exactly <strong>30 days</strong> from the expiry of that 15-day period to file a formal private penal complaint before the Metropolitan Magistrate or Judicial Magistrate First Class having territorial jurisdiction. </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p className="text-amber-900"> <strong>Premature Complaint Defense:</strong> If a bank files a court complaint before the completion of your full 15-day cure period. The complaint is defective in law. The Magistrate cannot take cognizance. the steps are liable to be quashed under Section 482 CrPC (Section 528 BNSS). </p>
              </div>
            </section>

            {/* SECTION 4: 4-Sided Bordered Status Comparison Table */}
            <section id="legal-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Section 25 PSS Act vs Section 138 NI Act Comparison
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Understand how a Section 25 NACH bounce notice compares against real cheque bounce cases. Private arbitration. Civil suits. Lok Adalat closures: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Legal Mechanism</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Instruments Covered</th>
                      <th className="p-3.5 font-bold">Bail / Jail Nature</th>
                      <th className="p-3.5 font-bold">Adjudication Forum</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Resolution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Section 25 Notice &amp. Case</td>
                      <td className="p-3.5">PSS Act, 2007</td>
                      <td className="p-3.5">NACH. E-NACH. ECS auto-debits</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">100% Bailable. up to 2 yrs fine/jail</td>
                      <td className="p-3.5">MM / JMFC Court</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Challenge Section 56 part-payments &amp. compound via OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Section 138 Cheque Bounce</td>
                      <td className="p-3.5">NI Act, 1881</td>
                      <td className="p-3.5">real paper cheques</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">100% Bailable. up to 2 yrs fine/jail</td>
                      <td className="p-3.5">MM / JMFC Court</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Rebut Section 139 presumption &amp. settle under Section 147</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Arbitration court</td>
                      <td className="p-3.5">Arbitration Act, 1996</td>
                      <td className="p-3.5">Contractual debt disputes</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero arrest/jail powers (Civil)</td>
                      <td className="p-3.5">Sole Arbitrator</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Challenge Section 12(5) unilateral appointment</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Summary Civil Suit (Order 37)</td>
                      <td className="p-3.5">CPC, 1908</td>
                      <td className="p-3.5">Liquidated monetary debts</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero arrest/jail powers (Civil)</td>
                      <td className="p-3.5">Civil Judge / District Court</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">File Leave to Defend citing accounting disputes</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3.5">LSA Act, 1987</td>
                      <td className="p-3.5">Compoundable disputes</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Pure Conciliation (No Jail)</td>
                      <td className="p-3.5">Lok Adalat Bench</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Execute formal OTS with maximum waiver &amp. case dismissal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Technical Financial Risk & Scoring Penalty Analytics */}
            <section id="financial-and-cibil-penalties" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Technical Financial Risk Analytics &amp; CIBIL Scoring Penalties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When an online mandate bounces. The money damage extends far beyond the unpaid EMI itself. Banks and credit bureaus impose multi-tiered digital fines that compound monthly: </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <DollarSign className="w-4 h-4 text-[#1886ff]" /> growing Bounce Charges &amp. Penal Surcharges </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Lender NACH Bounce Surcharge:</span>
                      <span className="font-bold text-slate-900">₹450 – ₹900 per instance</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Drawee Bank Inward Return Fee:</span>
                      <span className="font-bold text-slate-900">₹250 – ₹590 + GST</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Compounded Penal Interest Rate:</span>
                      <span className="font-bold text-red-600">+24.00% to +36.00% p.a.</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Legal Notice &amp; Advocate Drafting Fees:</span>
                      <span className="font-bold text-slate-900">₹2,500 – ₹5,000 billed to loan</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Unchecked Debt Multiplier (12 Months):</span>
                      <span className="text-red-700">145% to 190% of Principal</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <TrendingUp className="w-4 h-4 text-red-600" /> Credit Score (CIBIL / Experian) Damage </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>First Auto-Debit Bounce (30 DPD):</span>
                      <span className="font-bold text-amber-600">-35 to -50 Points</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>90+ DPD (NPA Classification):</span>
                      <span className="font-bold text-red-600">-70 to -120 Points</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>&quot;Section 25 / Suit Filed&quot; Bureau Flag:</span>
                      <span className="font-bold text-red-700">Automated LOS Underwriting Reject</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Negative History Retention Period:</span>
                      <span className="font-bold text-slate-900">Up to 7 Years (84 Months)</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Remedy via Compromise Settlement:</span>
                      <span className="text-emerald-700">Converts to &quot;Closed&quot; Status</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: Embedded 16:9 Infographic Banner */}
            <section id="infographic-defense-workflow" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Step Section 25 Defense Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Refer to this visual roadmap outlining the strategic 6-stage procedural sequence to challenge Section 25 notices. Prevent unlawful claims threats. Secure bail. execute a formal deal closure: </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/ecs-nach-bounce-legal-notice-section-25.jpg"
                    alt="ECS NACH Bounce Legal Notice Section 25 Defense Workflow Diagram"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Payment and Settlement Systems Act, 2007</span>
                  <a
                    href="/images/infographics/ecs-nach-bounce-legal-notice-section-25.jpg"
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

            {/* SECTION 7: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Defense SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. 6-Stage Defense Process for Section 25 PSS Act Notices
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Follow this battle-tested. Sequential protocol to defend your rights upon receiving a Section 25 legal notice: </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–3</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Notice Receipt. Return Memo &amp. Mandate Audit </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> check the exact date of receipt of the legal notice (preserve the postal speed post envelope with tracking barcode or email header). Review the underlying loan sanction letter and original NACH mandate form. Compare the demanded amount against your bank statement to identify whether the lender debited illegal penal surcharges. Cover additions. unverified calls fees. </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 4–14</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Drafting &amp. Dispatching 15-Day legal Legal Reply </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Within the mandatory 15-day cure window. Dispatch a thorough legal response to the lender&apos. s counsel via Registered Speed Post AD and email. Dispute the inflated risk. Demonstrate lack of mens rea (genuine money hardship rather than fraudulent intent). Cite uncredited part-payments. formally propose a structured One-Time closure. </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 15–30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Revoking e-Mandate &amp. Halting Multiple Presentation Loops </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If the lender continues to repeatedly hit your bank account with recurring NACH presentations causing multiple bounce charges. Submit an valid Mandate Cancellation Request through your bank branch and online portal. File an objection under RBI Fair Lending Guidelines against predatory multiple debit attempts. </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Month 2–3</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Magistrate Court Appearance &amp. Same-Day Regular Bail </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If the bank proceeds to file a complaint before the Judicial Magistrate or Metropolitan Magistrate. Do not panic when summons arrive. Engage an counsel to file a formal appearance and Bail Application under Section 436 CrPC (Section 478 BNSS). Submit a own bond and local surety to obtain fast same-day regular bail. </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Month 3–4</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Cross-Examination &amp. Rebutting legal Presumptions </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Examine the complainant&apos. s online evidence. Demand compliance with Section 65B of the Indian Evidence Act (Section 63 BSA) and Bankers&apos. Books Evidence Act for digital clearing memos. Rebut the legal presumption of by law enforceable debt on a preponderance of probabilities by proving uncredited payments or inflated penal rates. </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Month 4–6</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> growing Offense in Lok Adalat &amp. Full Loan Closure </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Leverage your legal defense to settle an out-of-court One-Time closure (OTS) with a 40% to 70% waiver on accumulated penal rates. Execute a formal growing application before the Magistrate or in a National Lok Adalat under Section 25(5). Leading to complete withdrawal of the penal complaint and issuance of a clean No Dues letter. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Formal Legal Reply Architecture & Substantive Legal Strategy (Continuous Paragraphs - NO Letter Draft / NO Points) */}
            <section id="formal-legal-reply-strategy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Substantive Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Formal Reply Architecture &amp; Substantive Legal Defense Strategy
              </h2>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5 text-slate-700 leading-relaxed text-sm md:text-base">
                <p> Formulating an authoritative and by law impenetrable response to a Section 25 demand notice requires a multi-tiered legal defense addressing procedural compliance. Proof admissibility. substantive accounting discrepancies. When served with a notice invoking Section 25 of the Payment and closure Systems Act. 2007. The drawer must dispatch their reply within the mandatory fifteen-day cure period via Registered Speed Post with Acknowledgment Due and registered email. Making sure service upon both the bank lender and its issuing legal counsel. This timely contact establishes the clients&apos. s bona fide intent and lays an essential proof foundation that will protect against adverse inferences should the matter proceed to court. </p>
                <p> The first pillar of the defense must rigorously examine the strict limitation parameters established under Section 25(1)(a) of the statute. The reply must demand signed documentary proof demonstrating the exact date on which the complainant bank received the online return memo from the clearing house. Verifying whether the demand notice was dispatched within the unextendable thirty-day legal window. If the notice was posted beyond thirty days from the return advice. The entire penal steps is rendered by law invalid and unsustainable before any Judicial Magistrate. Furthermore. The response should check whether the online mandate was registered under valid authorization parameters or whether the lender altered debit caps and dates without the clients&apos. s explicit written consent. </p>
                <p> The second layer of the defense must deploy the binding law established by the Supreme Court of India in <em>Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022)</em>. which holds that presenting an instrument for the full face value without endorsing interim part-payments renders the legal demand notice by law defective. Lending banks and digital NBFCs routinely demand the gross defaulted balance in Section 25 notices while neglecting to credit partial EMI payments. Rates subventions. cover premium refunds made by the clients. The formal response must papers every historical wire transfer with transaction reference numbers. Demonstrating that the demanded sum does not represent the exact by law enforceable debt existing on the date of presentation. Thereby destroying the foundational premise required for penal prosecution. </p>
                <p> On accounting and RBI grounds. The reply must challenge the capitalization of exorbitant penal surcharges. Multiple bounce presentation fees. illegal calls costs that contravene Reserve Bank of India Master Directions on Fair Practices Code and Guidelines on Penal Charges in Loan Accounts. The contact should formally demand a complete. Signed statement of account under the Bankers&apos. Books Evidence Act. 1891. Accompanied by mandatory online letters under Section 65B of the Indian Evidence Act. 1872 (Section 63 of the Bharatiya Sakshya Adhiniyam. 2023). By placing the bank claimant on notice regarding these proof hurdles. The reply effectively shifts the litigation risk back onto the lender. Opening a strategic pathway to transition adversarial litigation into an amicable One-Time closure (OTS) with substantial rates waivers. </p>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix & Regulatory Grievance Mechanisms */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Escalation Matrix &amp; Regulatory Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> If the lending bank or its agents combine Section 25 notices with abusive phone calls. Family threats. Repeated illegal NACH presentations. Escalate through this structured 3-tier RBI framework: </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Grievance Redressal Officer (GRO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–14 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Formal Dispute of Bounce fines &amp. Loan Ledger </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Submit a written grievance to the lender&apos. S Branch Manager and Grievance Redressal head disputing multiple bounce surcharges. Requesting mandate suspension. applying for an internal OTS deal review. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Principal Nodal Officer (PNO) &amp; Legal Head
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 15–30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Escalation of threats &amp. legal Reply Tracking </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If the GRO fails to resolve the dispute. Escalate to the bank&apos. s main sum Nodal head. Attach call recordings or WhatsApp threats from agents violating the RBI Fair Practices Code. Demanding an fast freeze on coercive actions. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> legal Complaint on cms.rbi.org.in </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If 30 days elapse without relief from the PNO. File a complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> under the Reserve Bank - Integrated RBI officer Scheme. 2021 for unfair debt claims practices. Predatory auto-debit loops. non-compliance with digital lending guidelines. </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Chronological Milestone Resolution Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Milestone Resolution Timeline (Day 0 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Understand the complete lifecycle of a Section 25 legal matter from the moment an auto-debit bounces to final debt growing: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Milestone Phase</th>
                      <th className="p-3.5 font-bold">Key Event &amp; Trigger</th>
                      <th className="p-3.5 font-bold">Statutory Limitation</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Defense Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 0</td>
                      <td className="p-3.5">NACH Mandate Auto-Debit Bounces</td>
                      <td className="p-3.5">NPCI return memo generated</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Review account balance &amp. check bounce reason</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 1. 30</td>
                      <td className="p-3.5">Bank Dispatches Section 25 Legal Notice</td>
                      <td className="p-3.5">Must be sent within 30 days of memo</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Record exact postal delivery date &amp. audit claim</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 30. 45</td>
                      <td className="p-3.5">Mandatory 15-Day legal Cure Period</td>
                      <td className="p-3.5">15 days from notice receipt</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Dispatch formal legal reply disputing uncredited payments</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 45. 75</td>
                      <td className="p-3.5">Bank Files Complaint in Magistrate Court</td>
                      <td className="p-3.5">Within 30 days of cure window expiry</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Track court e-filing via e-Courts services portal</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 3. 4</td>
                      <td className="p-3.5">Magistrate Summons &amp. First Appearance</td>
                      <td className="p-3.5">As per court calendar date</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Appear with counsel &amp. secure same-day regular bail</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 5. 6</td>
                      <td className="p-3.5">Lok Adalat growing &amp. Full closure</td>
                      <td className="p-3.5">Section 25(5) growing</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Pay settle OTS. Dispose case &amp. get NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-nach-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Scenarios: Fintech Apps, BNPL &amp; Multiple Debit Loops
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Different digital credit products utilize NACH mandates in distinct operational ways: </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <Sparkles className="w-4 h-4 text-[#1886ff]" /> Fintech NBFC Loan Apps &amp. Instant e-Mandates </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Digital lending apps register e-mandates via Netbanking or Debit Card authentication with daily debit limits up to ₹1,00,000. When default occurs. Automated algorithms trigger automated Section 25 notices via WhatsApp and email. You must ensure you respond formally via registered post as digital notices require strict proof of delivery under the Information Technology Act. 2000. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <CreditCard className="w-4 h-4 text-[#1886ff]" /> Buy Now Pay Later (BNPL) &amp. Micro-Credit Defaults </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> BNPL providers split small ticket purchases into online monthly installments. Issuing Section 25 notices for minor amounts (e.g. ₹2,000 to ₹10,000) is common practice to threaten young clients. Because litigation costs exceed claim value. Serving a firm legal reply citing RBI Digital Lending Guidelines consistently leads to swift OTS closure. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <RefreshCw className="w-4 h-4 text-[#1886ff]" /> Multiple Simultaneous Presentations in a Single Month </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Certain lenders present the same NACH mandate 3 to 5 times within a 10-day period. Depleting the clients&apos. s account through cumulative bounce fees. NPCI operating circulars restrict excessive recurring presentations. Expose this abusive practice in your legal reply and lodge a grievance with the RBI RBI officer. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <UserCheck className="w-4 h-4 text-[#1886ff]" /> Co-clients. Joint Accounts &amp. Primary Mandate Drawers </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Under Section 25. Penal risk attaches strictly to the <strong>drawer of the online account</strong> from which the fund transfer was authorized. If a co-clients did not sign or digitally authenticate the exact bank account mandate. They cannot be prosecuted under Section 25. although civil contractual risk remains joint. </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 13: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on ECS &amp; NACH Bounce Legal Notices
              </h2>
              <p className="text-xs md:text-sm text-slate-600"> Click on any question below to view detailed legal answers checked by our debt relief experts: </p>

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

            {/* SECTION 14: Regulatory Sources & Authorities */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li> <strong>Payment and closure Systems Act. 2007:</strong> Section 25 (Dishonour of online funds transfer for insufficiency. Etc. Of funds in the account). Ministry of Law and Justice. Government of India. </li>
                <li> <strong>Supreme Court of India:</strong> <em>Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022) 10 SCC 594</em> (Mandatory endorsement of part-payments and invalidity of inflated demand notices). </li>
                <li> <strong>Supreme Court of India:</strong> <em>Kaushalya Devi Massand v. Roopkishore Khore (2011) 4 SCC 593</em> (Quasi-penal nature of dishonor offenses aimed primarily at debt claims rather than incarceration). </li>
                <li> <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders and Guidelines on Reset of Floating rates Rates / Penal Charges (Updated 2024. 2026). </li>
                <li> <strong>National Payments Corporation of India (NPCI):</strong> Procedural Guidelines on NACH Debit Mandate handling &amp. e-Mandate Revocation Architecture. </li>
              </ul>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Cheque Bounce
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
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
                  <p className="text-[11px] font-semibold text-[#1886ff]"> Legal &amp. Debt relief experts </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed"> Specialized in banking compliance. Section 25 PSS Act online mandate dispute defense. Quasi-penal loan litigation strategies. NPA deal closures across Indian money institutions. </p>
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
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug"> Received a Section 25 Notice? </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal"> Our debt relief experts draft authoritative legal replies within the 15-day cure window. Stop claims threats. Secure bail. settle a 40% to 70% loan waiver. </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Draft a Strong Legal Reply Today
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
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Zero Upfront Risk:</strong> Success-linked closure fees.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Direct Bank wire transfer:</strong> Zero middleman fund holding.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>RBI &amp. CICRA Compliance:</strong> 100% lawful dispute handling.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Pan-India Representation:</strong> Dedicated debt relief specialists.</span> </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/section-138-cheque-bounce-personal-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Section 138 Cheque Bounce Defense </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Quasi-criminal trial &amp; bail guide &rarr;</span>
                </Link>

                <Link
                  href="/lok-adalat-personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Lok Adalat Loan closure </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Compounding &amp; waiver blueprint &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Convert Settled Loan to Closed Status </p>
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
