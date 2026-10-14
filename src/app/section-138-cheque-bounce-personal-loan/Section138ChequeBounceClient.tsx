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

export default function Section138ChequeBounceClient() {
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
    { id: 'what-is-section-138', label: '1. Anatomy of Section 138 NI Act' },
    { id: 'can-you-go-to-jail-bail-rights', label: '2. Bail Rights & Criminal Reality' },
    { id: 'supreme-court-security-cheque-precedents', label: '3. Supreme Court Precedents' },
    { id: 'legal-forum-comparison-table', label: '4. Legal Forum Comparison' },
    { id: 'financial-risk-section-143a', label: '5. Section 143A & Penalty Math' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'step-by-step-defense-sop', label: '6. 6-Stage Defense & Bail SOP' },
    { id: 'substantive-legal-defense-strategy', label: '7. Substantive Defense Framework' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Court & Escalation Matrix' },
    { id: 'chronological-resolution-milestones', label: '9. Chronological Court Milestones' },
    { id: 'specialized-loan-scenarios', label: '10. NACH, Fintech & Guarantors' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a Section 138 cheque bounce case for a personal loan?',
      a: 'A Section 138 case under the Negotiable Instruments Act. 1881 is a quasi-penal legal steps initiated by a lending bank or NBFC when a cheque issued by a clients for loan payment or security is dishonored due to insufficient funds or account closed. Before filing a complaint in court. The lender must serve a mandatory 30-day legal legal notice demanding payment within 15 days of notice receipt.'
    },
    {
      q: 'Can I go to jail for a personal loan cheque bounce in India?',
      a: 'While Section 138 carries a legal maximum fine of up to 2 years imprisonment. Fine up to twice the cheque amount. Both. Cheque bounce is fundamentally a bailable and compoundable offense. clients are entitled to regular bail as a matter of right upon appearing before the Judicial Magistrate or Metropolitan Magistrate. Jail is only awarded if a clients fully absconds. Ignores court warrants. is convicted after a full trial without settling.'
    },
    {
      q: 'How can I get bail in a Section 138 cheque bounce case?',
      a: 'Getting bail in a Section 138 matter is a standard. Prompt legal procedure. Upon receiving a court summons. You must engage an counsel to file a Regular Bail Application under Section 436 of the Code of penal Procedure (Section 478 BNSS) along with a own bail bond and a local surety (or cash bail). Bail is routinely granted on the very same day of appearance.'
    },
    {
      q: 'What should I do if a bank filed a Section 138 case for a blank security cheque?',
      a: 'Blank security cheques collected at the time of loan disbursement cannot be unilaterally filled with inflated penal amounts and deposited once the loan defaults. Under the Supreme Court ruling in Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022). Presenting a cheque for an amount greater than the by law enforceable debt without endorsing prior part-payments under Section 56 renders the Section 138 complaint by law defective and liable for dismissal.'
    },
    {
      q: 'What is the 15-day statutory cure period after receiving a legal notice?',
      a: 'Under Section 138(c) of the NI Act. The drawer of the dishonored cheque has exactly 15 calendar days from the date of receiving the legal demand notice to pay the demanded amount. No penal cause of action arises until this 15-day cure period expires. If the clients settles the amount or agrees on an OTS during this window. No court complaint can be filed.'
    },
    {
      q: 'What is Section 143A interim compensation and can it be challenged?',
      a: 'Section 143A of the NI Act empowers a Magistrate to order the accused clients to deposit interim compensation up to 20% of the cheque amount during trial. Yet. The Supreme Court in Rakesh Ranjan Shrivastava v. State of Jharkhand (2024) ruled that Section 143A is discretionary. Not mandatory. Your counsel can successfully challenge interim compensation by demonstrating money distress. Prima facie defenses. dispute over the actual by law enforceable risk.'
    },
    {
      q: 'How is the presumption under Section 139 of the NI Act rebutted?',
      a: 'Section 139 presumes that a cheque was issued for the discharge of a by law enforceable debt. Yet. This presumption is rebuttable on a "preponderance of probabilities" rather than proof beyond reasonable doubt (Basalingappa v. Mudibasappa, 2019). The clients can rebut it by cross-examining the bank\'s witness, showing mismatch between the loan statement ledger and cheque amount, or proving that uncredited EMI payments were ignored.'
    },
    {
      q: 'Can a Section 138 case be settled out of court through Lok Adalat or One-Time Settlement (OTS)?',
      a: 'Yes. Under Section 147 of the Negotiable Instruments Act. Cheque bounce offenses are explicitly compoundable at any stage of litigation. Including during trial or appeal. Banks routinely prefer settling through National Lok Adalats or bilateral One-Time closures (OTS) with 40% to 70% waivers on penal rates. Resulting in full withdrawal of the penal complaint and formal acquittal.'
    },
    {
      q: 'What happens if I ignore the Magistrate court summons in a Section 138 case?',
      a: 'Ignoring a court summons is dangerous. If you fail to appear on the scheduled hearing date. The Magistrate will issue a Bailable Warrant (BW). Followed by a Non-Bailable Warrant (NBW). Continued non-appearance can result in police arrest. Proclamation as a proclaimed offender under Section 82 CrPC (Section 84 BNSS). attachment of own bank accounts and homes under Section 83 CrPC.'
    },
    {
      q: 'What is the difference between Section 138 NI Act and Section 25 PSS Act for NACH bounce?',
      a: 'Section 138 of the NI Act governs real paper cheques. Whereas Section 25 of the Payment and closure Systems (PSS) Act. 2007 governs online mandate (NACH / ECS / e-NACH) auto-debit bounces. Both carry similar quasi-penal fines (up to 2 years imprisonment and double fine) and require identical 30-day demand notices. Bailable procedures. growing rules.'
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
            Section 138 Cheque Bounce Case for Personal Loans
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed"> Is your bank threatening jail time under Section 138 for a bounced security cheque? Learn how to secure same-day bail. Rebut legal presumptions. Challenge Section 143A interim compensation. settle the debt out of court. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Section 138 Case Filed? Speak to an Advocate</span>
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
                  <span>Statutory Criminal Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Governed by the Negotiable Instruments Act 1881. CrPC/BNSS &amp. Supreme Court Precedents. </p>
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
                <span>EXECUTIVE BRIEF: SECTION 138 PERSONAL LOAN CHEQUE BOUNCE DEFENSE</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" /> <div> <strong className="text-slate-900 font-bold">Bailable Offense with Mandatory Bail Right:</strong> A cheque bounce case under Section 138 of the Negotiable Instruments Act is a quasi-penal. Bailable offense. You cannot be summarily arrested by police. You are by law entitled to regular bail as a matter of right under Section 436 CrPC (Section 478 BNSS) on the day of appearance before the Magistrate. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" /> <div> <strong className="text-slate-900 font-bold">Security Cheques Cannot Exceed by law Enforceable Debt:</strong> Under the Supreme Court landmark ruling in <em>Dashrathbhai Trikambhai Patel (2022)</em>Presenting a blank post-dated security cheque for the full original loan amount without endorsing prior EMI part-payments under Section 56 invalidates the penal complaint fully. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" /> <div> <strong className="text-slate-900 font-bold">Crucial 15-Day legal Cure Period:</strong> The cause of action for Section 138 only arises after the expiry of 15 days from the date of receiving the bank&apos. s demand notice. Replying strategically within this 15-day window can halt premature litigation or lay an unassailable foundation for acquittal. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" /> <div> <strong className="text-slate-900 font-bold">Section 143A Interim Compensation is Discretionary:</strong> Following the Supreme Court&apos. s 2024 verdict in <em>Rakesh Ranjan Shrivastava</em>Courts cannot mechanically order a 20% interim deposit. Disputing the debt ledger and showing money hardship protects you against coercive interim deposits. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" /> <div> <strong className="text-slate-900 font-bold">100% Compoundable Under Section 147 via Lok Adalat:</strong> Cheque bounce offenses are explicitly compoundable at any stage of steps. CredSettle legal negotiators routinely leverage procedural defects to settle own loan cases in National Lok Adalats with 40% to 70% waivers. Resulting in complete case withdrawal and formal acquittal. </div> </li>
              </ul>
            </div>

            {/* SECTION 1: Anatomy of Section 138 NI Act for Personal Loans */}
            <section id="what-is-section-138" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Anatomy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Anatomy of a Section 138 Cheque Bounce Case for Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When clients avail clean own loans from trade banks or Non-Banking money Companies (NBFCs). Lenders routinely collect signed blank post-dated cheques (PDCs) or security cheques under the guise of loan security. If the clients suffers severe money distress. Medical emergencies. Job loss and misses running Equated Monthly Installments (EMIs). Lenders often fill in arbitrary amounts on these cheques and present them for clearing. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When the cheque returns dishonored with bank memo remarks such as <em>&quot. Funds Insufficient&quot. </em>, <em>&quot. Account Closed&quot. </em>. <em>&quot. Refer to Drawer&quot. </em>The lender triggers penal machinery under <strong>Section 138 of the Negotiable Instruments Act. 1881</strong>. </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#1886ff] font-bold text-xs">
                    01
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Mandatory 30-Day Demand Notice</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Within 30 days of receiving the bank dishonor memo. The lender must dispatch a formal written legal demand notice demanding payment of the exact cheque amount. </p>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#1886ff] font-bold text-xs">
                    02
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">15-Day legal Cure Window</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Under Section 138(c). The clients has exactly 15 calendar days from the date of receipt of the legal notice to pay the demanded amount or propose an OTS. </p>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#1886ff] font-bold text-xs">
                    03
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">30-Day Court Filing Limitation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> If payment is not made within 15 days. The bank has a strict 30-day limitation period under Section 142(1)(b) to institute a penal complaint before the Judicial Magistrate. </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p> <strong>Why Banks Use Section 138:</strong> Lenders prefer Section 138 over traditional civil claims suits because penal summons exert tremendous mental pressure on clients. Compelling them to settle quickly to avoid appearing in a penal courtroom. </p>
              </div>
            </section>

            {/* SECTION 2: Can You Go to Jail for Cheque Bounce? Bail Rights & Criminal Reality */}
            <section id="can-you-go-to-jail-bail-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Civil vs. Criminal Realities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Can You Go to Jail for a Cheque Bounce? Bail Rights & Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> The single most common fear among clients facing loan default is that the local police will arrive at their doorstep with handcuffs to arrest them for a bounced own loan cheque. Harsh claims telecallers routinely exploit this anxiety by sending forged arrest notices. Fake police station summons. fabricated warrant threats on WhatsApp. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Let us establish the definitive legal reality under Indian penal law: </p>

              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Section 138 is a Bailable, Quasi-Criminal Offense by Law</span>
                </div>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed"> Under the Code of penal Procedure. 1973 (and the Bharatiya Nagarik Suraksha Sanhita. 2023 - BNSS). An offense under Section 138 of the Negotiable Instruments Act is categorized as <strong>non-cognizable, bailable. compoundable</strong>. The police have absolutely zero authority to register an FIR. Conduct an arrest without a judicial warrant. summon you to a police station for a simple cheque bounce. </p>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed font-semibold"> When you receive a court summons from a Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM). You are entitled to Regular Bail as a matter of legal right under Section 436 of CrPC (Section 478 BNSS). Bail is granted on the same day upon furnishing a own bail bond and a local surety. </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <AlertCircle className="w-4 h-4 text-amber-600" /> When Does Jail Actually Become a Risk? </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Imprisonment in a Section 138 case occurs exclusively under two distinct procedural hardship: </p>
                <div className="space-y-2 text-xs md:text-sm text-slate-600 pl-2">
                  <p> <strong>1. Wilful Absconding &amp. Ignoring Court Summons:</strong> If you ignore repeated court summons. The Magistrate will issue a Bailable Warrant (BW). Followed by a Non-Bailable Warrant (NBW). If you remain absent. The court will declare you a Proclaimed Offender under Section 82 CrPC (Section 84 BNSS). Empowering police to execute an arrest to secure your court presence. </p>
                  <p> <strong>2. Final Conviction Post Full Trial:</strong> If the trial concludes without closure. The court finds you guilty beyond reasonable doubt. Sentences you under Section 138 (up to 2 years imprisonment). You may face custody if you fail to appeal before the Sessions Court within 30 days and obtain a suspension of sentence under Section 389 CrPC. </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: Supreme Court Precedents on Security Cheques */}
            <section id="supreme-court-security-cheque-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Supreme Court Rulings on Security Cheques & Section 139
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> The Supreme Court of India has established authoritative legal principles governing blank security cheques. Unendorsed part-payments. the legal presumption of debt under Section 139 of the Negotiable Instruments Act. These landmark precedents form the core artillery of your legal defense: </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Landmark Precedent 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022) 7 SCC 694</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Mandatory Section 56 Endorsement for Part-Payments </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> The Supreme Court held that where a clients has paid part of the loan risk through prior EMIs. The lender cannot present a security cheque for the entire original face value without formally endorsing the part-payments on the cheque under Section 56 of the Act. Presenting a cheque for an amount greater than the actual subsisting by law enforceable debt at the date of presentation renders Section 138 inapplicable and mandates acquittal. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Landmark Precedent 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Basalingappa v. Mudibasappa (2019) 5 SCC 418</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Section 139 Presumption Rebuttal on Preponderance of Probabilities </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> The Supreme Court clarified that the legal presumption under Section 139 (that the cheque was issued for discharge of a debt) does not require the accused clients to prove their defense beyond reasonable doubt. The accused only needs to raise a probable defense based on a &quot. preponderance of probabilities&quot. by highlighting inconsistencies in the bank&apos. s loan ledger or cross-examining the bank&apos. s authorized representative. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Landmark Precedent 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Rakesh Ranjan Shrivastava v. State of Jharkhand (2024) 4 SCC 714</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Section 143A Interim Compensation is Strictly Discretionary </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> The Supreme Court held that the power of a Magistrate to award interim compensation up to 20% of the cheque value under Section 143A is directory and discretionary. Not mandatory. The court must evaluate the prima facie case. The merits of the defense. The money capability of the accused. whether directing an interim deposit would result in grave hardship. </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p className="text-amber-900"> <strong>Why These Judgments Matter to You:</strong> When lenders deposit pre-signed security cheques after you have already paid 12 or 24 EMIs. They almost never endorse the paid EMIs on the cheque. Under <em>Dashrathbhai Trikambhai Patel</em>This failure constitutes a fatal legal flaw in the bank&apos. s prosecution. </p>
              </div>
            </section>

            {/* SECTION 4: 4-Sided Bordered Status Comparison Table */}
            <section id="legal-forum-comparison-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Legal Forum Comparison: Personal Loan Default Recovery Mechanisms
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When a clients defaults on a own loan. Banks possess several claims channels. The comparative matrix below outlines how Section 138 compares to online mandate bounces. Civil summary suits. Arbitration. Lok Adalat growing: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr>
                      <th className="p-3.5 font-bold border-r border-slate-200/80">Legal Forum / Statute</th>
                      <th className="p-3.5 font-bold border-r border-slate-200/80">Nature of Action</th>
                      <th className="p-3.5 font-bold border-r border-slate-200/80">Power to Jail / Arrest</th>
                      <th className="p-3.5 font-bold border-r border-slate-200/80">Bail Requirement</th>
                      <th className="p-3.5 font-bold border-r border-slate-200/80">Typical Duration</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Resolution Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Section 138 (NI Act. 1881)</td>
                      <td className="p-3.5 border-r border-slate-200/80">Quasi-penal Complaint</td>
                      <td className="p-3.5 text-amber-700 font-semibold border-r border-slate-200/80">Yes (Post-Conviction / NBW Only)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border-r border-slate-200/80">Yes (Sec 436 CrPC Mandatory Bail)</td>
                      <td className="p-3.5 border-r border-slate-200/80">12 to 36 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Rebut Sec 139. Challenge Sec 143A &amp. Settle via Sec 147 growing</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Section 25 (PSS Act. 2007 - NACH)</td>
                      <td className="p-3.5 border-r border-slate-200/80">Quasi-penal Complaint</td>
                      <td className="p-3.5 text-amber-700 font-semibold border-r border-slate-200/80">Yes (Same as Sec 138)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border-r border-slate-200/80">Yes (Mandatory Bail)</td>
                      <td className="p-3.5 border-r border-slate-200/80">12 to 24 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Consolidate multiple bounce notices &amp. settle structured OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Summary Civil Suit (Order 37 CPC)</td>
                      <td className="p-3.5 border-r border-slate-200/80">Civil Money claims</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border-r border-slate-200/80">NO (Pure Civil)</td>
                      <td className="p-3.5 text-slate-500 border-r border-slate-200/80">Not Applicable</td>
                      <td className="p-3.5 border-r border-slate-200/80">18 to 36 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">File Leave to Defend citing dispute on exorbitant penal rates</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Arbitration court (1996 Act)</td>
                      <td className="p-3.5 border-r border-slate-200/80">Private Civil Adjudication</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border-r border-slate-200/80">NO (Zero Power)</td>
                      <td className="p-3.5 text-slate-500 border-r border-slate-200/80">Not Applicable</td>
                      <td className="p-3.5 border-r border-slate-200/80">4 to 8 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Challenge Sec 12(5) Unilateral Appointment &amp. Perkins Eastman Precedent</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">National Lok Adalat</td>
                      <td className="p-3.5 border-r border-slate-200/80">Judicial Conciliation</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border-r border-slate-200/80">NO (deal Forum)</td>
                      <td className="p-3.5 text-slate-500 border-r border-slate-200/80">Not Applicable</td>
                      <td className="p-3.5 border-r border-slate-200/80">1 Day (Single Sitting)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Execute Final deal Award with full acquittal and 50%+ waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Technical Financial Risk & Scoring Penalty Analytics */}
            <section id="financial-risk-section-143a" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial &amp; Scoring Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Section 143A Interim Compensation & Legal Penalties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> A Section 138 prosecution carries both legal judicial money exposure and severe credit desk impairment across TransUnion CIBIL. Experian. CRIF High Mark. Equifax: </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <DollarSign className="w-4 h-4 text-[#1886ff]" /> legal Court fines &amp. Interim Deposits </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Maximum Statutory Imprisonment:</span>
                      <span className="font-bold text-slate-900">Up to 2 Years (Section 138)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Maximum Court Fine:</span>
                      <span className="font-bold text-red-600">Up to 2x Cheque Amount</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Section 143A Interim Compensation:</span>
                      <span className="font-bold text-amber-600">Up to 20% of Cheque Amount</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Section 148 Appellate Deposit:</span>
                      <span className="font-bold text-amber-600">Minimum 20% on Appeal</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Compounding Remedy (Section 147):</span>
                      <span className="text-emerald-700">100% Fine &amp; Jail Waived</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <TrendingUp className="w-4 h-4 text-red-600" /> Credit Score Destruction &amp. desk Reporting </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>90+ DPD Classification:</span>
                      <span className="font-bold text-amber-600">NPA / Written Off</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Cheque Bounce Return Flag:</span>
                      <span className="font-bold text-red-600">-60 to -110 Score Drop</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>&quot;Suit Filed / Wilful Default&quot; Remark:</span>
                      <span className="font-bold text-red-700">Instant Underwriting Freeze</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Negative History Retention:</span>
                      <span className="font-bold text-slate-900">7 Years (84 Months)</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Resolution via Compromise NDC:</span>
                      <span className="text-emerald-700">Converts to &quot;Closed&quot; Status</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6-Step Section 138 Defense & Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Refer to this high-relief visual roadmap outlining the strategic 6-stage workflow to defend against own loan cheque bounce cases. Secure same-day bail. Assert legal objections. achieve out-of-court growing: </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/section-138-cheque-bounce-personal-loan.jpg"
                    alt="Section 138 Cheque Bounce Defense and Settlement Workflow India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Negotiable Instruments Act 1881</span>
                  <a
                    href="/images/infographics/section-138-cheque-bounce-personal-loan.jpg"
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
                6. 6-Stage SOP for Section 138 Cheque Bounce Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Follow this sequential. Bank procedure to navigate a Section 138 cheque bounce case from the receipt of the first legal notice to full judicial acquittal and debt closure: </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–15 of Legal Notice</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> legal Notice Audit &amp. 15-Day Cure Window Response </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> check the exact date of receipt of the bank&apos. s demand notice. Audit whether the notice was served within 30 days of cheque dishonor. Dispatch a thorough reply denying risk for unadjusted penal amounts. Stating that the cheque was a blank security instrument. reserving rights under <em>Dashrathbhai Trikambhai Patel</em> while offering to settle an amicable deal. </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: On First Court Hearing</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Court Appearance &amp. fast Regular Bail under Section 436 CrPC </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Upon receiving the court summons from the Magistrate. Engage an counsel fast. On the scheduled date. Appear before the court and move a Regular Bail Application under Section 436 CrPC (Section 478 BNSS) along with a own bond and surety. Bail is granted fast. Securing complete safety against arrest warrants. </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Notice Framing Stage</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Section 251 Notice Plea &amp. Section 143A Interim Compensation Challenge </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> When the court frames notice under Section 251 CrPC (Section 274 BNSS). Plead <em>&quot. Not Guilty&quot. </em> and claim trial. If the bank files an application under Section 143A seeking a 20% interim deposit. File a detailed written objection citing <em>Rakesh Ranjan Shrivastava (2024)</em> demonstrating money insolvency. Medical records. prima facie defects in the bank&apos. s ledger. </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Evidence Stage</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Bank Witness Cross-Examination &amp. Presumption Rebuttal </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Cross-examine the bank&apos. s Authorized Representative (AR) under Section 145(2) of the Act. Demand the production of the signed statement of account under the Bankers&apos. Books Evidence Act. Expose uncredited EMI payments. Illegal rates capitalization. the absence of Section 56 part-payment endorsements to successfully rebut the Section 139 presumption. </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Mediation &amp; Settlement Stage</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> National Lok Adalat Referral &amp. Section 147 growing </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Because active litigation burdens lenders with legal expenses and claims delays. Leverage your strong defense to refer the matter to the National Lok Adalat or court mediation cell. settle a One-Time closure with a 40% to 70% waiver on accumulated penal charges. Execute a deal deed and compound the offense under Section 147 of the NI Act. </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Post-Settlement</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Judicial Acquittal Order &amp. CIBIL desk Restoration </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Upon payment of the agreed payout sum. The Magistrate records the deal and passes a formal order of acquittal under Section 320(8) CrPC. Obtain a signed copy of the acquittal order and the bank&apos. S unconditional No Dues letter (NDC). Making sure your CIBIL record is updated from &quot. Suit Filed&quot. to &quot. Closed&quot. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Substantive Legal Defense Strategy & Section 139 Presumption Rebuttal (PARAGRAPH FORMAT - NO points / NO letter draft) */}
            <section id="substantive-legal-defense-strategy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Substantive Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Defense Strategy & Section 139 Presumption Rebuttal
              </h2>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5 text-slate-700 leading-relaxed text-sm md:text-base">
                <p> Establishing an unassailable legal defense in a Section 138 own loan cheque bounce prosecution demands a rigorous. Multi-pronged legal strategy that systematically dismantles the proof foundations of the complainant institution. The Negotiable Instruments Act. 1881 incorporates strong legal presumptions under Section 118(a) and Section 139. which assume that every negotiable instrument was drawn for consideration and handed over in discharge of a by law enforceable debt or risk. Yet. This presumption is not irrebuttable. under the established law of the Supreme Court in <em>Basalingappa v. Mudibasappa</em>The accused clients is not obligated to mount a defense proven beyond all reasonable doubt. is merely required to establish a credible doubt based on the standard of preponderance of probabilities. </p>
                <p> The foundational pillar of the defense centers on proving the misuse of blank pre-signed security cheques collected prior to loan payout. In standard retail lending operations. Banks and non-banking money companies mandate the submission of multiple undated security cheques as an bank condition precedent for loan sanctioning. When default occurs. Claims departments unilaterally write the aggregate unpaid claim onto the cheque without the clients&apos. s exact consent. Under the doctrine articulated in <em>Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel</em>. If the clients has made interim payments through prior monthly installments. The subsisting legal debt at the time of presentation is invariably less than the original loan amount. Presenting a cheque for the total undiscounted amount without making a formal legal endorsement under Section 56 of the Act extinguishes the offense under Section 138. Rendering the penal complaint inherently defective and liable for dismissal. </p>
                <p> The second key line of defense requires a meticulous forensic audit of the legal demand notice and limitation periods. Under Section 138 clause (b) and (c) read with Section 142(1)(b) of the Act. Strict procedural timelines govern the life cycle of a cheque bounce complaint. The demand notice must be dispatched within thirty days of receiving the return memo. Must explicitly demand the exact cheque amount rather than an ambiguous. Omnibus claim comprising unverified penal rates. Foreclosure charges. agents fees. Furthermore. The complaint must be filed within thirty days following the expiration of the fifteen-day cure window. Any procedural irregularity. Delay in dispatch. Absence of postal tracking proof. failure to establish valid service of notice breaks the chain of causation and deprives the Magistrate of lawful cognizance. </p>
                <p> On the accounting and transactional merits. The defense must challenge the complainant bank&apos. s statement of account under Section 4 of the Bankers&apos. Books Evidence Act. 1891 and Section 65B of the Indian Evidence Act (Section 63 of Bharatiya Sakshya Adhiniyam. 2023). By demonstrating that the bank improperly capitalized penal rates. Levied compound rates during distress moratoriums in contravention of Reserve Bank of India Master Directions. Failed to credit checked digital transfers. The defense demonstrates that the claimed sum does not represent a crystallized. By law enforceable debt. This proof exposure strips the complainant of its legal leverage. Compelling the bank lender to abandon adversarial prosecution and execute an out-of-court growing closure under Section 147 of the Negotiable Instruments Act. </p>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix & Magistrate Court Defense */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Court &amp; Grievance Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Judicial &amp; Regulatory Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When facing Section 138 litigation coupled with harsh claims threats. Navigate your defense and grievance redressal through this structured 3-tier matrix: </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Magistrate Court (MM / JMFC)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Stage: Appearance &amp; Trial</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Bail Application. Defense Cross-Examination &amp. Section 147 growing </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Secure fast bail under Section 436 CrPC on first appearance. Contest Section 143A interim compensation applications. Move a joint growing application under Section 147 of the NI Act once OTS terms are agreed upon. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Sessions Court &amp; High Court (Section 482 / Revision)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Stage: Judicial Quashing &amp; Appeal</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Petition for Quashing Summoning Order &amp. Suspension of Sentence </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If the complaint is barred by limitation. Lacks a valid cause of action. Involves an unendorsed security cheque. File a Quashing Petition under Section 482 CrPC (Section 528 BNSS) before the High Court. If convicted by a trial court. File a penal Appeal before the Sessions Court within 30 days. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Stage: Regulatory Redressal</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Complaint for Coercive Cheque Presentation &amp. agents Abuse </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If the lender presents security cheques repeatedly without prior notice. Dispatches illegal agents to your home or workplace. Threatens unlawful arrest. Lodge an fast complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> under the Fair Practices Code. </p>
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
                9. Chronological Milestone Resolution Timeline (Day 0 to Acquittal)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> grasp legal timelines enables you to coordinate legal defense. Prevent non-bailable warrants. plan closure talks: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr>
                      <th className="p-3.5 font-bold border-r border-slate-200/80">Milestone Phase</th>
                      <th className="p-3.5 font-bold border-r border-slate-200/80">Key Procedural Event</th>
                      <th className="p-3.5 font-bold border-r border-slate-200/80">Statutory Limitation</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Day 0</td>
                      <td className="p-3.5 border-r border-slate-200/80">Cheque Dishonor &amp. Return Memo Issued</td>
                      <td className="p-3.5 border-r border-slate-200/80">Cheque valid for 3 months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Review bank account statement and loan payment ledger</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 1. 30</td>
                      <td className="p-3.5 border-r border-slate-200/80">Service of legal Demand Notice</td>
                      <td className="p-3.5 border-r border-slate-200/80">Within 30 days of dishonor memo</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Audit notice validity &amp. reply within 15-day cure period</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 45. 75</td>
                      <td className="p-3.5 border-r border-slate-200/80">Filing of penal Complaint &amp. Pre-Summoning</td>
                      <td className="p-3.5 border-r border-slate-200/80">Within 30 days of cure window expiry</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Monitor e-Courts portal for complaint filing</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 3. 5</td>
                      <td className="p-3.5 border-r border-slate-200/80">Court Summons Issued &amp. Appearance</td>
                      <td className="p-3.5 border-r border-slate-200/80">Date fixed by Magistrate</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Engage counsel. Appear in court. secure same-day bail</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 6. 9</td>
                      <td className="p-3.5 border-r border-slate-200/80">Section 143A Hearing &amp. Lok Adalat Referral</td>
                      <td className="p-3.5 border-r border-slate-200/80">During trial stage</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Argue 143A objection and initiate One-Time talks</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 10. 12</td>
                      <td className="p-3.5 border-r border-slate-200/80">Growing Order. Acquittal &amp. NDC</td>
                      <td className="p-3.5 border-r border-slate-200/80">Upon final closure payment</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Obtain signed court acquittal order and update CIBIL to Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Scenarios: NACH Bounces, Fintech Apps & Guarantors
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Cheque bounce and digital mandate defaults involve nuanced legal dynamics across various retail credit products: </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <Sparkles className="w-4 h-4 text-[#1886ff]" /> Section 25 Payment &amp. closure Systems (PSS) Act: NACH / e-Mandates </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Modern own loans primarily use online NACH auto-debits rather than real paper cheques. When an online mandate fails due to insufficient balance. Lenders file complaints under Section 25 of the PSS Act. 2007. The legal rules. Bailable rights. 15-day cure notice rules. growing rules under Section 25 mirror Section 138 almost identically. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <CreditCard className="w-4 h-4 text-[#1886ff]" /> Fintech Loan Apps &amp. harsh Automated Cheque Notices </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Instant loan apps often generate automated WhatsApp notices threatening fast police action under Section 138. Many of these notices are unsigned. Lack proper legal demand language. relate to loans where no real cheque was ever drawn. A formal legal reply calling out their non-compliance with Section 138 rules stops automated threats instantly. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <Building2 className="w-4 h-4 text-[#1886ff]" /> Cheques Deposited Post-NPA and Post-closure </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> In several instances. Bank claims departments mistakenly deposit archived security cheques even after the loan has been classified as an NPA or while closure talks are actively underway. Depositing a cheque during an ongoing closure constitutes bad faith. the court can quash such complaints with heavy costs on the bank. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <UserCheck className="w-4 h-4 text-[#1886ff]" /> Co-clients, Guarantors &amp. Signatory risk </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Under Section 138. Penal risk attaches strictly to the <strong>drawer of the cheque</strong> (the person who signed the instrument on their bank account). Co-clients or family members who did not sign the exact bounced cheque cannot be prosecuted under Section 138. Even if they are co-signers on the underlying loan pacts. </p>
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
                Frequently Asked Questions on Section 138 Personal Loan Cases
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
                <li> <strong>Negotiable Instruments Act. 1881:</strong> Sections 56. 118. 138. 139. 142. 143A. 145. 147. Ministry of Law and Justice. Government of India. </li>
                <li> <strong>Supreme Court of India:</strong> <em>Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022) 7 SCC 694</em> (Mandatory Section 56 Endorsement for Part-Payments on Cheques). </li>
                <li> <strong>Supreme Court of India:</strong> <em>Rakesh Ranjan Shrivastava v. State of Jharkhand (2024) 4 SCC 714</em> (Discretionary Nature of Section 143A Interim Compensation). </li>
                <li> <strong>Supreme Court of India:</strong> <em>Basalingappa v. Mudibasappa (2019) 5 SCC 418</em> (Standard of Preponderance of Probabilities for Section 139 Presumption Rebuttal). </li>
                <li> <strong>Payment and closure Systems Act. 2007:</strong> Section 25 (Dishonour of online Funds Transfer / NACH Mandates). Reserve Bank of India. </li>
              </ul>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Loan Settlement
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
              <p className="text-xs text-slate-600 leading-relaxed"> Specialized in Section 138 NI Act defense strategy. Banking compliance. Bailable court procedures. Loan dispute relief. NPA closure talks with deep expertise in rebutting legal debt presumptions across Indian Magistrate courts. </p>
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
                <p className="text-lg md:text-xl font-bold text-white leading-snug"> Section 138 Case Filed? </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal"> Our counsel panel secures your bail on the same day. Challenges Section 143A interim compensation. Stops claims threats. negotiates a 40% to 70% loan waiver. </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Section 138 Case Filed? Speak to an Advocate
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
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Arbitration Notice for Loan Default </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Unilateral arbitrator challenge blueprint &rarr;</span>
                </Link>

                <Link
                  href="/lok-adalat-personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Lok Adalat own Loan closure </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">One-day compromise compounding guide &rarr;</span>
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
