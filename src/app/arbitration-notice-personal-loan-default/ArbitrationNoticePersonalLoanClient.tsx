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

export default function ArbitrationNoticePersonalLoanClient() {
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
    { id: 'what-is-arbitration-notice', label: '1. What is an Arbitration Notice (Sec 21)' },
    { id: 'is-notice-legally-binding', label: '2. Legal Enforceability & Civil Dispute' },
    { id: 'supreme-court-unilateral-arbitrator', label: '3. Supreme Court Unilateral Rulings' },
    { id: 'legal-forum-comparison-table', label: '4. Legal Forum Comparison Table' },
    { id: 'financial-risk-matrix', label: '5. Financial Penalties & Risk Analysis' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'step-by-step-arbitration-sop', label: '6. 6-Stage Defense SOP' },
    { id: 'formal-legal-reply-strategy', label: '7. Formal Reply & Legal Strategy' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Grievance & High Court Matrix' },
    { id: 'chronological-resolution-milestones', label: '9. Chronological Timelines & Milestones' },
    { id: 'specialized-loan-scenarios', label: '10. ODR, Credit Cards & ARCs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is an arbitration notice for a personal loan default?',
      a: 'An arbitration notice for a personal loan default is a formal legal communication issued under Section 21 of the Arbitration and Conciliation Act, 1996. It informs the borrower that the lending bank or NBFC has invoked the arbitration clause in the loan agreement to refer the outstanding debt dispute to a sole arbitrator for legal adjudication rather than filing a standard civil suit.'
    },
    {
      q: 'Is an arbitration notice legally binding in India?',
      a: 'Yes, an arbitration notice invoked pursuant to a valid arbitration clause in a loan agreement is legally binding. However, the appointment of the arbitrator must strictly conform to Section 12(5) of the Arbitration Act. Unilateral appointments made solely by banks without mutual borrower consent or court approval under Section 11 are invalid under Supreme Court rulings.'
    },
    {
      q: 'Can you be arrested or sent to jail for an arbitration notice?',
      a: 'No. An unsecured personal loan default is strictly a civil dispute. An arbitrator is a private dispute adjudicator and has zero criminal jurisdiction, which means they cannot issue arrest warrants, summon police, or order imprisonment. Threatening arrest during arbitration is an illegal recovery practice punishable under RBI Fair Practices Code.'
    },
    {
      q: 'What is the significance of a Section 21 notice under the Arbitration Act?',
      a: 'Under Section 21 of the Arbitration and Conciliation Act, 1996, arbitral proceedings formally commence on the date the borrower receives the notice requesting the dispute to be referred to arbitration. Receiving this notice triggers statutory limitation timelines and gives the borrower 30 days to file a formal reply, raise jurisdictional objections, or challenge the arbitrator.'
    },
    {
      q: 'Can a bank unilaterally appoint an arbitrator without borrower consent?',
      a: 'No. The Supreme Court of India in landmark judgments including TRF Ltd. (2017) and Perkins Eastman Architects (2019) ruled that an interested party, such as a lending bank or NBFC, cannot unilaterally appoint a sole arbitrator. Any arbitrator appointed unilaterally without mutual written agreement or High Court appointment under Section 11 is ineligible (de jure disqualified) under Section 12(5).'
    },
    {
      q: 'How should I reply to a personal loan arbitration notice?',
      a: 'You should reply within 30 days by sending a comprehensive legal response to both the bank and the nominated arbitrator. The reply must challenge the unilateral appointment under Section 12(5), object to the seat or venue if inconvenient under Section 20, contest arbitrary compound interest or penalties, and demand an audited loan statement of account while reserving the right to seek conciliation or One-Time Settlement (OTS).'
    },
    {
      q: 'What happens if I ignore an arbitration notice and miss hearings?',
      a: 'If you ignore the notice and do not submit a Statement of Defense, the arbitrator will proceed ex-parte under Section 25 of the Act and pass an ex-parte Arbitral Award in favor of the bank. Once passed, this award becomes enforceable as a civil court decree under Section 36, allowing the bank to execute bank account attachments or salary attachments through a District Civil Court.'
    },
    {
      q: 'How can an Arbitral Award be challenged in court?',
      a: 'An Arbitral Award can be challenged under Section 34 of the Arbitration and Conciliation Act, 1996 by filing a petition before the Principal District Civil Court or High Court within 90 days (extendable by 30 days on sufficient cause). Valid grounds include unilateral appointment of the arbitrator, lack of proper notice, violation of natural justice, or conflict with public policy of India.'
    },
    {
      q: 'Can I settle my personal loan after receiving an arbitration notice?',
      a: 'Yes. Receiving an arbitration notice is often the most strategic stage to negotiate a One-Time Settlement (OTS). Raising valid legal objections under Section 12(5) and Section 16 exposes the lender to procedural delays, motivating the bank legal desk and Principal Nodal Officer to offer a 40% to 70% waiver on accumulated penal interest and accept a compromise settlement.'
    },
    {
      q: 'What is the difference between arbitration, DRT, and Section 138 cheque bounce proceedings?',
      a: 'Arbitration is a private dispute resolution mechanism under the 1996 Act for civil monetary recovery. The Debt Recovery Tribunal (DRT) handles recovery claims strictly exceeding ₹20 Lakhs under the SARFAESI and RDBFI Acts. Section 138 of the Negotiable Instruments Act and Section 25 of the Payments and Settlement Systems Act are quasi-criminal proceedings specifically for bounced cheques or dishonored NACH auto-debit mandates.'
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
            Arbitration Notice for Personal Loan
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your bank send an Arbitration Notice for a personal loan default? Learn your legal rights, how to challenge unilateral arbitrator appointments under Perkins Eastman, and how to negotiate a final compromise settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Received an Arbitration Notice? Get Legal Defense</span>
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
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by the Arbitration and Conciliation Act 1996 &amp; Supreme Court Precedents.
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
                <span>EXECUTIVE BRIEF: PERSONAL LOAN ARBITRATION DEFENSE</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Nature with Zero Arrest Powers:</strong> An arbitration notice for personal loan default is strictly a civil debt adjudication mechanism under the Arbitration and Conciliation Act, 1996. An arbitrator is not a criminal judge and has zero legal authority to issue arrest warrants, summon police, or order imprisonment.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Unilateral Arbitrators are Disqualified:</strong> Under landmark Supreme Court rulings (TRF Ltd. and Perkins Eastman), banks and NBFCs cannot unilaterally appoint a sole arbitrator. Any arbitrator appointed without mutual consent is de jure ineligible under Section 12(5), rendering their proceedings legally voidable.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Critical 30-Day Section 21 Response Window:</strong> The receipt of a Section 21 notice formally triggers arbitration. Ignoring this notice risks an ex-parte Arbitral Award under Section 25, which can be executed as a civil court decree under Section 36 for asset or salary attachment.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strategic Leverage for 40% to 70% OTS Waiver:</strong> Filing formal jurisdictional objections under Section 16 and challenging arbitrator independence forces the lender into costly procedural delays, creating ideal leverage to negotiate a compromise One-Time Settlement (OTS).
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 34 Setting Aside Safeguards:</strong> If an ex-parte award is improperly passed, borrowers can file an application to set aside the award under Section 34 within 90 days before the Principal Civil Court on grounds of bias, lack of notice, or violation of public policy.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: What is a Personal Loan Arbitration Notice? */}
            <section id="what-is-arbitration-notice" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. What is a Personal Loan Arbitration Notice? (Section 21 Framework)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an individual defaults on unsecured personal loan EMIs due to acute financial hardship, job loss, or medical emergencies, commercial banks and Non-Banking Financial Companies (NBFCs) often initiate private dispute resolution rather than filing lengthy civil suits in regular courts. The primary legal vehicle used for this purpose is an <strong>Arbitration Notice</strong> issued under <strong>Section 21 of the Arbitration and Conciliation Act, 1996</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Standard personal loan agreements in India contain a standard boilerplate clause termed the <em>Arbitration Clause</em>. This clause stipulates that in the event of any contractual breach, payment default, or monetary dispute, either party may refer the matter to private arbitration instead of initiating conventional litigation before a civil judge. Section 21 of the Act establishes that the arbitral proceedings in respect of a particular dispute commence on the date on which a request for that dispute to be referred to arbitration is received by the respondent borrower.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Section 21 Invocation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Formally triggers arbitral jurisdiction and establishes the legal timeline. The notice outlines the bank&apos;s total claim, alleged default dates, and names the nominated sole arbitrator.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-indigo-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Speedy Adjudication Goal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unlike civil courts that may take years, arbitration is designed as an expedited, private quasi-judicial process governed by strict statutory timelines under Section 29A of the Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Enforceable Award Decree</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The final outcome of arbitration is an Arbitral Award. Under Section 36 of the Act, an un-objected arbitral award is legally enforceable exactly like a decree of a Civil Court.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Why Lenders Prefer Arbitration:</strong> Commercial banks choose arbitration because it allows them to bypass crowded civil courts, conduct virtual hearings, and secure an ex-parte monetary award if the borrower fails to appear or submit a formal Statement of Defense.
                </p>
              </div>
            </section>

            {/* SECTION 2: Is an Arbitration Notice Legally Binding & Can You Go to Jail? */}
            <section id="is-notice-legally-binding" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Civil vs. Criminal Realities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Is an Arbitration Notice Legally Binding? (Debunking Arrest &amp; Jail Threats)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                One of the most widespread tactics employed by unethical third-party debt recovery agencies is fabricating threats of immediate police intervention, arrest warrants, and criminal detention upon the issuance of an arbitration notice. Borrowers receiving these intimidating communications often experience severe distress.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Let us establish the definitive legal position under Indian statutory jurisprudence:
              </p>

              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Personal Loan Default is Purely a Civil Breach of Contract</span>
                </div>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed">
                  Under the Indian Contract Act, 1872 and the Arbitration and Conciliation Act, 1996, the non-payment of an unsecured personal loan is strictly a civil dispute arising from contractual insolvency. An arbitrator is a private dispute adjudicator appointed to determine monetary liability. <strong>An arbitrator possesses zero criminal jurisdiction, cannot issue Non-Bailable Warrants (NBW), cannot direct the police to arrest you, and cannot sentence any borrower to prison.</strong>
                </p>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed font-semibold">
                  Any recovery agent or legal notice asserting that an arbitration proceeding will result in criminal imprisonment violates the Reserve Bank of India (RBI) Fair Practices Code and constitutes extortion under Section 383 of the Indian Penal Code (Section 308 BNS).
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  The Real Danger: Ex-Parte Arbitral Awards and Section 36 Execution
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  While you cannot go to jail, an arbitration notice is legally binding in terms of civil financial liability. If you choose to ignore the notice and do not participate in the proceedings, the arbitrator will mark you ex-parte under Section 25(b) of the Act. The tribunal will then pass an <strong>Ex-Parte Arbitral Award</strong> granting the bank 100% of their claimed principal, compounding penal interest rates (often 24% to 36% per annum), and exorbitant legal fees.
                </p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Once the statutory 90-day challenge period under Section 34 expires, the bank can file an <strong>Execution Petition under Section 36</strong> before a Principal District Civil Court. The executing court holds the statutory power to attach your savings accounts, garnish your salaried income, or attach unencumbered movable and immovable assets to satisfy the arbitral decree.
                </p>
              </div>
            </section>

            {/* SECTION 3: Supreme Court Landmark Rulings on Unilateral Arbitrators */}
            <section id="supreme-court-unilateral-arbitrator" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. The Supreme Court Rulings on Unilateral Arbitrator Appointments
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a vast majority of personal loan arbitration cases in India, banks and NBFCs unilaterally appoint their own empaneled sole arbitrator without seeking prior written concurrence or consent from the borrower. The Supreme Court of India has categorically declared such unilateral appointments illegal, null, and void ab initio.
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Landmark Precedent 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">TRF Ltd. v. Energo Engg. Projects Ltd. (2017) 8 SCC 377</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    The Rule of Inherent Ineligibility
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The Hon&apos;ble Supreme Court established the principle that once an authority or person becomes ineligible by operation of law (Section 12(5) read with Seventh Schedule) to act as an arbitrator due to interest in the outcome, that person cannot nominate or appoint another individual to act as the sole arbitrator. What cannot be done directly cannot be done indirectly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Landmark Precedent 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020) 20 SCC 760</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Prohibition of Unilateral Appointment by Interested Parties
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The Supreme Court expanded the doctrine, holding that a party having an interest in the dispute (e.g., the lending bank or NBFC) cannot have the exclusive right to appoint a sole arbitrator. Such an appointment creates justifiable doubts regarding independence and impartiality, rendering the sole arbitrator disqualified de jure from entering upon reference.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Constitutional Bench Ruling
                    </span>
                    <span className="text-xs font-semibold text-slate-500">5-Judge Bench in Central Organisation for Railway Electrification (2024)</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Affirmation of Equality and Institutional Neutrality
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The Constitution Bench reinforced that the principle of equality of arms is fundamental to Indian arbitration law. Unilateral appointment clauses in standard adhesion contracts (like bank loan sanction letters) violate public policy unless both parties mutually agree on the arbitrator in writing after the dispute has arisen or the appointment is made by the High Court under Section 11(6).
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p className="text-amber-900">
                  <strong>Why This is Your Strongest Defense:</strong> Because over 90% of bank personal loan arbitration notices involve unilateral appointments, borrowers possess an absolute statutory ground to challenge the arbitrator&apos;s jurisdiction under Section 12(5) and Section 16, halting aggressive proceedings in their tracks.
                </p>
              </div>
            </section>

            {/* SECTION 4: 4-Sided Bordered Status Comparison Table */}
            <section id="legal-forum-comparison-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Legal Forum Comparison: Personal Loan Default Recovery Options
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a personal loan, lenders evaluate multiple recovery routes. Compare how arbitration compares against summary civil suits, DRT proceedings, criminal cheque bounce actions, and Lok Adalats:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr>
                      <th className="p-3.5 font-bold">Legal Forum</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Power to Jail / Arrest</th>
                      <th className="p-3.5 font-bold">Enforceability &amp; Appeal Route</th>
                      <th className="p-3.5 font-bold">Typical Timelines</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Arbitration Tribunal</td>
                      <td className="p-3.5">Arbitration Act 1996</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Zero Power)</td>
                      <td className="p-3.5">Award = Civil Decree (Sec 36); Challenge under Sec 34</td>
                      <td className="p-3.5">4 to 8 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Challenge Sec 12(5) Unilateral Appointment &amp; Negotiate OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Summary Civil Suit (Order 37 CPC)</td>
                      <td className="p-3.5">Code of Civil Procedure, 1908</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Civil Recovery)</td>
                      <td className="p-3.5">Civil Court Money Decree; First Appeal to High Court</td>
                      <td className="p-3.5">18 to 36 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">File Leave to Defend citing triable issues &amp; interest disputes</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Debt Recovery Tribunal (DRT)</td>
                      <td className="p-3.5">RDBFI Act, 1993 (SARFAESI)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Strictly &gt;₹20 Lakhs)</td>
                      <td className="p-3.5">Recovery Certificate; Appeal to DRAT with 50% pre-deposit</td>
                      <td className="p-3.5">12 to 24 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Contest Statement of Account &amp; seek structured restructuring</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Cheque Bounce (Sec 138 NI Act / Sec 25 PSS)</td>
                      <td className="p-3.5">Negotiable Instruments Act / PSS Act 2007</td>
                      <td className="p-3.5 text-red-700 font-semibold">YES (Bailable Offense, up to 2 yrs)</td>
                      <td className="p-3.5">Magistrate Criminal Judgment; Criminal Appeal to Sessions Court</td>
                      <td className="p-3.5">12 to 30 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Appear with Counsel, secure immediate bail, settle via compounding</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3.5">Legal Services Authorities Act, 1987</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Pure Conciliation)</td>
                      <td className="p-3.5">Final Consent Award (Non-appealable under Sec 21)</td>
                      <td className="p-3.5">1 Day (Single Sitting)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Execute formal One-Time Settlement with maximum waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Technical Financial Risk & Scoring Penalty Analytics */}
            <section id="financial-risk-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Technical Financial Risk Analytics &amp; CIBIL Scoring Penalties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Failing to respond to an arbitration notice triggers both compounded legal financial exposure and catastrophic credit bureau rating degradation. The following mathematical model illustrates how a default scales unchecked:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Compounding Penal Interest &amp; Cost Inflation
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Base Contractual Interest:</span>
                      <span className="font-bold text-slate-900">12.00% – 18.00% p.a.</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Compounded Penal Surcharge:</span>
                      <span className="font-bold text-red-600">+2.00% monthly (24% p.a.)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Arbitrator Sitting &amp; Admin Fees:</span>
                      <span className="font-bold text-slate-900">₹25,000 – ₹75,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Bank Legal &amp; Counsel Expenses:</span>
                      <span className="font-bold text-slate-900">₹30,000 – ₹50,000</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Total Claim Multiplier (12 Months):</span>
                      <span className="text-red-700">140% to 180% of Principal</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                    Credit Score Destruction &amp; DPD Tracking
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>90+ DPD Classification:</span>
                      <span className="font-bold text-amber-600">NPA / Sub-Standard Asset</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Immediate Score Reduction:</span>
                      <span className="font-bold text-red-600">-80 to -140 Points</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Suit Filed / Arbitration Remark:</span>
                      <span className="font-bold text-red-700">Hard Reject Flag Across LOS</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Credit Information Retention:</span>
                      <span className="font-bold text-slate-900">Up to 7 Years (84 Months)</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Remedy via Structured Settlement:</span>
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
                Visual Defense Blueprint: 6-Step Arbitration Defense Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Refer to this visual roadmap outlining the strategic 6-stage procedural sequence to challenge unilateral arbitrator appointments, assert statutory objections, and negotiate an amicable debt resolution:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/arbitration-notice-personal-loan-default.jpg"
                    alt="Personal Loan Arbitration Defense Workflow Diagram India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Arbitration &amp; Conciliation Act 1996</span>
                  <a
                    href="/images/infographics/arbitration-notice-personal-loan-default.jpg"
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
            <section id="step-by-step-arbitration-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Defense SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Standard Operating Procedure (SOP): 6 Stages of Arbitration Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this sequential, battle-tested standard operating procedure to safeguard your rights upon receiving an arbitration notice for an unpaid personal loan:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–5</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Comprehensive Receipt, Claim &amp; Agreement Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Verify the exact date of receipt of the Section 21 notice. Examine the underlying loan agreement to inspect the specific wording of the arbitration clause. Cross-examine the claimed outstanding balance against your actual bank account bank statements and loan disbursement records to identify predatory penal charges, insurance mis-selling deductions, and unsubstantiated collection fees.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 6–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Section 12(5) Challenge on Unilateral Appointment &amp; Bias
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Serve a formal written objection upon both the lending institution and the nominated sole arbitrator citing the Supreme Court precedents in <em>Perkins Eastman</em> and <em>TRF Ltd.</em> Object that the unilateral appointment violates Section 12(5) read with the Seventh Schedule of the 1996 Act. Demand that the nominated arbitrator immediately recuse themselves from entering upon the reference.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 16–25</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Jurisdictional Objection under Section 16 &amp; Venue Inconvenience
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the arbitrator proceeds to fix a preliminary hearing, file a formal Application under Section 16 of the Act challenging the competence and jurisdiction of the arbitral tribunal. Raise objections regarding improper territorial seat (e.g., proceedings held in Delhi or Mumbai when the loan was sanctioned and disbursed in Bangalore or Hyderabad) under Section 20 of the Act.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 26–40</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Filing Substantive Statement of Defense (SOD) &amp; Financial Evidence
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Without waiving your jurisdictional objections, submit a detailed Statement of Defense. Document bona fide reasons for default (such as medical records, salary cut letters, or business closure notices). Challenge inflated compounding interest calculations, submit proof of all historical repayments, and pray for the dismissal or substantial scaling down of the bank&apos;s claim.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 41–60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Leveraging Legal Impasse to Transition into Compromise OTS
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Filing strong Section 12(5) and Section 16 objections creates significant litigation risk for the bank, as any award obtained would be vulnerable to being set aside. Use this procedural stalemate to initiate bilateral settlement discussions with the bank&apos;s Legal Recovery Desk, securing a 40% to 70% waiver on accumulated penal interest and closing the loan under a formal One-Time Settlement.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 61–90</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Section 34 Petition to Set Aside Award (If Award Passed)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the arbitrator improperly passes an ex-parte or unilateral award despite your objections, file an application under Section 34 of the Act before the Principal District Civil Court or High Court within 90 days. Concurrently file for an unconditional stay of execution under Section 36(2) and 36(3) citing patent illegality and bias.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Formal Legal Reply Architecture & Response Strategy (Comprehensive Paragraphs - NO Points / NO Letter Draft) */}
            <section id="formal-legal-reply-strategy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Substantive Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Formal Reply Architecture &amp; Substantive Legal Defense Strategy
              </h2>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Crafting a legally sound and authoritative response to an arbitration notice requires a multi-layered statutory strategy that addresses procedural invalidity, jurisdictional deficiencies, and substantive financial discrepancies. When served with a notice invoking arbitration under Section 21 of the Arbitration and Conciliation Act, 1996, the response must be dispatched via registered speed post with acknowledgment due and registered email within thirty days of receipt, addressing both the institutional claimant and the designated sole arbitrator.
                </p>
                <p>
                  The foremost pillar of the reply must dismantle the legitimacy of the arbitrator nomination itself by invoking Section 12(5) read in conjunction with the Seventh Schedule of the Act. Citing the binding constitutional authority of the Supreme Court in <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd.</em> and <em>TRF Ltd. v. Energo Engineering Projects Ltd.</em>, the reply should formally record that a lender cannot unilaterally select an adjudicator from its private panel without prior mutual written consent executed after the dispute has matured. The communication must place the nominee on notice that proceeding with hearings under a tainted, unilateral appointment renders them de jure disqualified from acting as an arbitral tribunal, exposing any subsequent award to automatic invalidation under Section 34(2)(a)(v) of the statute.
                </p>
                <p>
                  The second layer of the defense must target territorial jurisdiction and forum convenience under Section 20 of the Act. Many digital lending NBFCs and national private banks routinely schedule arbitral sittings in remote metropolitan centers such as New Delhi or Mumbai, even when the borrower resides in a distant state and the loan was sanctioned through a localized branch or digital application. The formal reply must register strong objections against such forum shopping, demonstrating that forcing a financially distressed borrower to defend proceedings at an inconvenient seat violates principles of natural justice under Section 18 of the Act, which guarantees equal treatment and full opportunity to present one&apos;s case.
                </p>
                <p>
                  On the financial and accounting merits, the response must rigorously challenge the quantum of the bank&apos;s monetary claim by demanding a certified, audited loan account ledger under the Bankers&apos; Books Evidence Act, 1891. Lenders frequently inflate personal loan claims by capitalizing compounding penal interest, levying arbitrary cheque bounce fees, and attaching unapproved legal recovery charges that contravene Reserve Bank of India Master Directions on Fair Practices Code. The reply should formally repudiate these unconscionable penalties, establish the borrower&apos;s genuine willingness to clear legitimate principal obligations under restructured terms, and invite the institutional claimant to participate in an amicable compromise One-Time Settlement (OTS) before any adversarial steps are taken.
                </p>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix & Regulatory Grievance Mechanisms */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Escalation Matrix &amp; Judicial Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lending bank or its recovery agents persist with unlawful recovery harassment or refuse to acknowledge legitimate Section 12(5) objections, escalate through this structured 3-tier regulatory and judicial matrix:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Arbitral Tribunal &amp; Bank Legal Desk
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–14 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Filing Formal Section 16 &amp; Section 12 Objections
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit written applications directly to the arbitral tribunal contesting jurisdiction, unilateral nomination, and excessive penal interest. Simultaneously serve a copy upon the Bank Principal Nodal Officer (PNO) requesting formal referral to the bank&apos;s OTS compromise committee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: High Court Section 11 &amp; Section 14 Petitions
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30–60 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Judicial Termination of Arbitrator Mandate
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the sole arbitrator refuses to recuse themselves despite Section 12(5) ineligibility, file an application under Section 14 and Section 15 of the 1996 Act before the High Court for termination of the arbitrator&apos;s mandate. Pray for the appointment of an independent arbitrator under Section 11(6).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Regulatory Complaint for Predatory Recovery &amp; Harassment
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the bank combines arbitration with abusive phone calls, workplace visits, or third-party agent threats, file an immediate complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021 for violation of the Fair Practices Code.
                  </p>
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
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding institutional and legal milestones allows borrowers to plan defense maneuvers and settlement negotiations strategically:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr>
                      <th className="p-3.5 font-bold">Milestone Phase</th>
                      <th className="p-3.5 font-bold">Key Legal Event</th>
                      <th className="p-3.5 font-bold">Statutory Limitation</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Day 0</td>
                      <td className="p-3.5">Receipt of Section 21 Arbitration Notice</td>
                      <td className="p-3.5">Clock starts for 30-day response</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Audit loan ledger &amp; seek legal debt assessment</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 15–30</td>
                      <td className="p-3.5">Service of Formal Defense &amp; Objection Reply</td>
                      <td className="p-3.5">Within 30 days of notice receipt</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Dispatch Section 12(5) challenge &amp; dispute penal costs</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 45–75</td>
                      <td className="p-3.5">Preliminary Arbitral Hearing / Section 16 Hearing</td>
                      <td className="p-3.5">Prior to filing Statement of Defense</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Appear virtually/in-person through counsel to argue bias</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Months 3–4</td>
                      <td className="p-3.5">Compromise OTS Negotiation Window</td>
                      <td className="p-3.5">Bilateral negotiation period</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Secure written OTS letter with 40%–70% waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Months 5–6</td>
                      <td className="p-3.5">Full Closure &amp; No Dues Certificate Issuance</td>
                      <td className="p-3.5">Within 30 days of OTS remittance</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Obtain official NDC and update CIBIL status to Closed</td>
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
                10. Special Scenarios: Fintech Apps, Credit Cards &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Arbitration mechanics vary across different credit products and institutional structures:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1886ff]" />
                    Fintech NBFC Loan Apps &amp; Online Dispute Resolution (ODR)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Digital loan apps frequently use automated Online Dispute Resolution (ODR) platforms to send automated WhatsApp and email arbitration notices. Many of these platforms operate with automated algorithms and empaneled arbitrators who pass awards in bulk. You must send a formal written response challenging the digital consent mechanisms and unilateral arbitrator assignment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Dues vs. Personal Loans in Arbitration
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Credit card agreements frequently incorporate unilateral arbitration clauses. Because credit card claims often include 40%+ revolving annualized finance charges and GST on penalties, filing an arbitration defense focusing on unconscionable finance charges consistently yields significant compromise settlement discounts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Debt Assigned to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If your personal loan was sold to an ARC (such as Phoenix ARC, CFM ARC, or ARCIL), the ARC steps into the shoes of the original lender under Section 5 of the SARFAESI Act. ARCs actively invoke arbitration to secure enforceable awards. However, ARCs acquire bad loan portfolios at deep discounts (often 20% to 30% of face value), making them highly receptive to fast One-Time Settlements.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Co-Borrowers and Legal Heirs in Arbitration
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    In joint personal loans, arbitration notices are served on all co-signers and guarantors simultaneously. In the unfortunate event of a deceased borrower, legal heirs are liable only to the extent of the value of any inherited estate and cannot be held personally liable for the remaining debt.
                  </p>
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
                Frequently Asked Questions on Personal Loan Arbitration Notices
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal answers verified by our debt resolution professionals:
              </p>

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
                <li>
                  <strong>Arbitration and Conciliation Act, 1996:</strong> Sections 11, 12(5), 16, 21, 25, 34, and 36, Ministry of Law and Justice, Government of India.
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020) 20 SCC 760</em> (Disqualification of Unilateral Arbitrator Appointments).
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>TRF Ltd. v. Energo Engineering Projects Ltd. (2017) 8 SCC 377</em> (Ineligibility of Interested Parties to Nominate Sole Arbitrators).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders and Grievance Redressal Mechanism (Updated 2026).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal of Unfair Recovery Practices and Arbitrary Interest Capitalization.
                </li>
              </ul>

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
                Specialized in banking compliance, arbitral defense strategies, loan dispute resolution, and NPA settlement negotiations with deep expertise challenging unilateral arbitral appointments across Indian banking forums.
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

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Received an Arbitration Notice?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts challenge unilateral arbitrator appointments, represent your defense, stop harassment, and negotiate a 40% to 70% loan waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Received an Arbitration Notice? Get Legal Defense
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
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
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
                  href="/bank-recovery-case-in-court"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Filed Recovery Case in Civil Court
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil suit defense &amp; summons guide &rarr;</span>
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
