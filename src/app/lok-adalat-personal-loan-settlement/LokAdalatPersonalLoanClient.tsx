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
  ShieldAlert,
  Users
} from 'lucide-react';

export default function LokAdalatPersonalLoanClient() {
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
    { id: 'what-is-lok-adalat', label: '1. Statutory Framework (NALSA Act 1987)' },
    { id: 'is-notice-mandatory', label: '2. Is Lok Adalat Notice Mandatory?' },
    { id: 'waiver-percentage-math', label: '3. Discount Percentages & Waiver Math' },
    { id: 'legal-forum-comparison', label: '4. Legal Forum Comparison Table' },
    { id: 'cibil-financial-analytics', label: '5. Financial Risk & CIBIL Scoring' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Settlement SOP' },
    { id: 'formal-legal-strategy', label: '7. Legal Strategy & Representation' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Grievance & Escalation Matrix' },
    { id: 'chronological-milestones', label: '9. Chronological Timelines & Milestones' },
    { id: 'specialized-scenarios', label: '10. Fintech Apps, Cards & ARCs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a Lok Adalat personal loan notice and why did my bank send it?',
      a: 'A Lok Adalat personal loan notice is a formal pre-litigation communication issued under Section 19 and Section 20 of the Legal Services Authorities Act, 1987. Commercial banks and NBFCs refer defaulted personal loans to National Lok Adalat benches to explore an amicable, mutual compromise settlement before initiating formal civil recovery suits or arbitration proceedings.'
    },
    {
      q: 'Is attending a Lok Adalat session mandatory for a personal loan default?',
      a: 'No. Appearing before a Lok Adalat is completely voluntary. Lok Adalat is an alternative dispute resolution (ADR) conciliation forum, not a regular trial court. Non-appearance does not result in contempt of court, police action, or immediate penalties. However, attending strategically provides the best legal platform to negotiate substantial loan waivers.'
    },
    {
      q: 'Can I be arrested, sent to jail, or issued a warrant for ignoring a Lok Adalat notice?',
      a: 'No. An unsecured personal loan default is strictly a civil contractual breach. Lok Adalat benches do not possess criminal jurisdiction and have zero authority to issue arrest warrants, summons through police, or order imprisonment. Any threat of arrest by recovery agents citing a Lok Adalat notice is illegal under RBI regulations.'
    },
    {
      q: 'What discount percentage or waiver can I get on a personal loan in Lok Adalat?',
      a: 'In Lok Adalat hearings, borrowers typically receive a 100% waiver on accumulated penal interest, overdue compounding charges, and legal expenses. Furthermore, banks frequently concede a 30% to 70% waiver on the outstanding principal balance depending on the age of the default, NPA classification stage, and documented financial distress.'
    },
    {
      q: 'How does the settlement process work during a Lok Adalat hearing?',
      a: 'During the session, the Lok Adalat bench (comprising a sitting or retired judicial officer and an advocate or social worker) mediates between you and the bank’s authorized legal representative. Once both parties agree on a mutually acceptable discounted settlement figure, a joint compromise memorandum is signed and the bench passes a formal Consent Award.'
    },
    {
      q: 'Is a Lok Adalat settlement award legally binding and can the bank sue me again later?',
      a: 'Yes. Under Section 21 of the Legal Services Authorities Act, 1987, an award passed by a Lok Adalat is deemed to be a decree of a Civil Court and is final and binding on all parties. Once you fulfill the payment terms stipulated in the award, the debt is completely extinguished and the bank is legally barred from filing any future civil or recovery claims.'
    },
    {
      q: 'Can I appeal against a Lok Adalat settlement award in a higher court?',
      a: 'No appeal lies to any court against an award of a Lok Adalat under Section 21(2) of the Act, because it is passed upon mutual consent. However, in extremely rare cases where a settlement was obtained through proven fraud, misrepresentation, or coercion, a writ petition under Article 226 or 227 of the Constitution can be filed before the High Court.'
    },
    {
      q: 'How does a Lok Adalat personal loan settlement impact my CIBIL score?',
      a: 'Upon completing the settlement, the bank reports the loan account status to credit bureaus (CIBIL, Experian, CRIF High Mark) as "Settled" or "Post-Write-off Settled" with a zero balance. While a settled remark impacts scores initially, it stops ongoing negative Days Past Due (DPD) accumulation. Borrowers can subsequently convert this status to "Closed" by paying the remaining differential later or rebuilding credit through secured instruments.'
    },
    {
      q: 'What documents do I need to carry to a Lok Adalat personal loan settlement session?',
      a: 'You should carry the official Lok Adalat notice, government-issued photo ID (Aadhaar / PAN), loan sanction letter and account statements, proof of historical repayments, and comprehensive financial hardship documentation such as medical discharge summaries, salary reduction letters, termination notices, or audited business loss ledgers.'
    },
    {
      q: 'What is the difference between Lok Adalat, Debt Recovery Tribunal (DRT), and Court Mediation?',
      a: 'Lok Adalat handles pre-litigation and pending matters through immediate, cost-free conciliation resulting in a final non-appealable decree. DRT is a specialized statutory tribunal exclusively for bank claims exceeding ₹20 Lakhs under the SARFAESI/RDBFI Acts with formal adversarial litigation. Court mediation is a court-referred process where mediators facilitate compromise, but the agreement must be returned to the trial judge for a formal decree.'
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
            Lok Adalat Personal Loan Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Received a Lok Adalat summons from your bank? Discover how to use Lok Adalat to negotiate up to a 70% waiver on your unsecured personal loan safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Lok Adalat Summons? Let Us Negotiate for You</span>
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
                  <span>Statutory Dispute Forum</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Organized under Legal Services Authorities Act, 1987 &amp; NALSA Master Guidelines.
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
                <span>EXECUTIVE BRIEF: LOK ADALAT PERSONAL LOAN SETTLEMENT CRUX</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Voluntary Conciliation with Zero Arrest Powers:</strong> A Lok Adalat notice for personal loan default is a statutory invitation for pre-litigation conciliation under the Legal Services Authorities Act, 1987. A Lok Adalat bench has zero criminal jurisdiction, cannot issue arrest warrants or police summons, and cannot send any borrower to jail for defaulting on an unsecured loan.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Exceptional 50% to 70% Debt Reduction Window:</strong> National Lok Adalats represent the most powerful platform to negotiate substantial loan waivers. Commercial banks and NBFCs possess pre-approved mandates during Lok Adalat sessions to grant a 100% waiver on compounding penal interest, overdue charges, and a 30% to 70% discount on the net principal balance.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Final &amp; Non-Appealable Decree (Section 21 Award):</strong> A settlement formalized in Lok Adalat results in a Consent Award under Section 21 of the 1987 Act. This award operates as a final decree of a Civil Court against which no appeal lies in any court, permanently extinguishing the lender&apos;s right to file future civil recovery suits.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Court Fees &amp; Immediate Cost Savings:</strong> Lok Adalat proceedings involve zero court fees, zero process charges, and zero hidden administrative costs. If a pending civil suit is referred to Lok Adalat and settled, any court fees already paid by the parties are fully refunded under Section 21(1) of the Act.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strategic Legal Representation Advantage:</strong> Entering a Lok Adalat session without structured financial hardship documentation or professional representation risks pressured agreements. Engaging debt resolution professionals ensures an audited baseline, maximum possible waivers, and a flawless No Dues Certificate (NDC).
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: What is Lok Adalat & Statutory Framework */}
            <section id="what-is-lok-adalat" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Dispute Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. What is a Lok Adalat Personal Loan Notice? (Legal Services Authorities Act, 1987)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an individual defaults on unsecured personal loan Equated Monthly Installments (EMIs) due to involuntary financial distress—such as acute medical emergencies, business loss, or sudden unemployment—scheduled commercial banks, cooperative banks, and Non-Banking Financial Companies (NBFCs) frequently issue notices referring the matter to a <strong>Lok Adalat</strong> (People&apos;s Court).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lok Adalats are established under the <strong>Legal Services Authorities Act, 1987</strong> and organized under the aegis of the <strong>National Legal Services Authority (NALSA)</strong>, State Legal Services Authorities (SLSA), District Legal Services Authorities (DLSA), and Taluk Legal Services Committees. The statutory purpose of a Lok Adalat is to provide an accessible, informal, and speedy Alternative Dispute Resolution (ADR) mechanism for settling compound civil and financial disputes through mutual consensus and conciliation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Pre-Litigation Conciliation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 19(5) and Section 20(2) of the 1987 Act, disputes that have not yet been filed in a regular civil court can be referred to Lok Adalat at the pre-litigation stage to avoid protracted and expensive litigation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-indigo-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Users className="w-4 h-4" />
                    <span>Neutral Conciliatory Bench</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Each Lok Adalat bench comprises a sitting or retired Judicial Officer acting as Presiding Officer, alongside an experienced advocate and an eminent social worker acting as neutral conciliators.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 21 Consent Decree</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The final outcome of a successful negotiation is a Lok Adalat Award. Under Section 21 of the Act, every award is deemed to be a decree of a Civil Court, binding on both the bank and the borrower.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Why Banks Prefer Lok Adalat for Personal Loans:</strong> Financial institutions manage massive Non-Performing Asset (NPA) portfolios. Filing civil recovery suits requires substantial ad-valorem court fees (often 5% to 8% of the claim), lawyer fees, and takes 3 to 7 years in civil courts. National Lok Adalat events allow banks to recover substantial liquid capital in a single day while extending attractive discount waivers to borrowers.
                </p>
              </div>
            </section>

            {/* SECTION 2: Is Lok Adalat Notice Mandatory? Debunking Myths */}
            <section id="is-notice-mandatory" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Rights &amp; Civil Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Is a Lok Adalat Notice Mandatory? (Debunking Arrest, Warrant &amp; Police Myths)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Receiving an official-looking notice stamped with &quot;District Legal Services Authority&quot; or &quot;Pre-Litigation Case Summons&quot; often induces extreme panic among borrowers. Aggressive recovery agencies frequently exploit this confusion by falsely claiming that ignoring the notice will lead to non-bailable arrest warrants, police detention, or immediate home attachment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Let us establish the absolute statutory and legal facts governed by Indian jurisprudence:
              </p>

              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Lok Adalat Appearance is 100% Voluntary under Indian Law</span>
                </div>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed">
                  Under Section 20 of the Legal Services Authorities Act, 1987, a Lok Adalat is strictly a conciliation and settlement forum. It is not an adjudicatory criminal court. <strong>The bench has zero authority to issue arrest warrants, summon police forces, initiate contempt proceedings, or impose punitive fines for non-attendance.</strong> If you choose not to attend, the Lok Adalat bench simply closes the pre-litigation file and returns the matter to the bank with the remark &quot;Not Settled / Returned Unsettled&quot;.
                </p>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed font-semibold">
                  Any debt recovery agent or tele-caller threatening criminal arrest, FIR registration, or police visits citing a Lok Adalat notice commits a severe violation of the Reserve Bank of India (RBI) Fair Practices Code and Section 383 IPC / Section 308 BNS (Extortion).
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Why Ignoring a Lok Adalat Notice is a Major Missed Opportunity
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Although attending is not legally mandatory, deliberately ignoring a Lok Adalat notice is almost always a tactical error for borrowers dealing with unmanageable personal loan debt. When a matter is returned unsettled, the bank may proceed with formal legal actions, such as initiating private arbitration, filing a summary civil suit under Order 37 of the Code of Civil Procedure (CPC), or filing a criminal complaint under Section 25 of the Payments and Settlement Systems Act (PSS Act) / Section 138 Negotiable Instruments Act for bounced NACH mandates.
                </p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Conversely, attending Lok Adalat provides you with institutional protection where bank representatives cannot intimidate you, and where bank recovery officers have express internal authority to sanction substantial one-time waivers that are never offered through standard branch channels.
                </p>
              </div>
            </section>

            {/* SECTION 3: Lok Adalat Discount Percentage & Waiver Math */}
            <section id="waiver-percentage-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Settlement Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Lok Adalat Discount Percentage &amp; Settlement Waiver Mathematics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A central question for every borrower is: <em>How much discount can I actually negotiate in Lok Adalat for an unsecured personal loan?</em> The settlement quantum in Lok Adalat is governed by structured NPA provisioning guidelines, the age of default, and documented borrower financial distress.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#1886ff]" />
                    Components of Total Debt Waiver in Lok Adalat
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Penal Interest &amp; Overdue Charges:</span>
                      <span className="font-bold text-emerald-600">100% Complete Waiver</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Late Payment &amp; NACH Bounce Fees:</span>
                      <span className="font-bold text-emerald-600">100% Complete Waiver</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Bank Legal &amp; Administrative Expenses:</span>
                      <span className="font-bold text-emerald-600">100% Complete Waiver</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Unaccrued / Future Interest:</span>
                      <span className="font-bold text-emerald-600">100% Extinguished</span>
                    </div>
                    <div className="flex justify-between py-1.5 pt-2 font-bold text-slate-900">
                      <span>Principal Balance Haircut:</span>
                      <span className="text-[#1886ff]">30% to 70% Discount</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    Real-World Case Example: ₹8,00,000 Default
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Original Disbursed Principal:</span>
                      <span className="font-semibold text-slate-800">₹8,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Repaid Prior to Hardship:</span>
                      <span className="font-semibold text-slate-800">₹3,50,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Net Unpaid Principal Balance:</span>
                      <span className="font-bold text-slate-900">₹4,50,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Bank Claim with Penalties (36 mos):</span>
                      <span className="font-bold text-red-600">₹9,80,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 pt-2 font-bold text-slate-900 bg-emerald-50/70 p-2 rounded-lg">
                      <span>Final Lok Adalat Settlement:</span>
                      <span className="text-emerald-700 text-sm">₹1,80,000 (81.6% Total Waiver)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs mt-4">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">NPA Vintage / Stage</th>
                      <th className="p-3.5 font-bold">Days Past Due (DPD)</th>
                      <th className="p-3.5 font-bold">Bank Provisioning Level</th>
                      <th className="p-3.5 font-bold">Typical Principal Haircut</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Expected Total Settlement %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Sub-Standard NPA</td>
                      <td className="p-3.5">91 to 180 Days</td>
                      <td className="p-3.5">15% Provisioned</td>
                      <td className="p-3.5">15% – 30% Haircut</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">70% – 85% of Net Principal</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Doubtful Asset (D1)</td>
                      <td className="p-3.5">181 to 365 Days</td>
                      <td className="p-3.5">25% – 40% Provisioned</td>
                      <td className="p-3.5">35% – 50% Haircut</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">50% – 65% of Net Principal</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Doubtful Asset (D2/D3)</td>
                      <td className="p-3.5">1 to 3 Years</td>
                      <td className="p-3.5">100% Provisioned</td>
                      <td className="p-3.5">50% – 70% Haircut</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">30% – 50% of Net Principal</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Loss Asset / Written-Off</td>
                      <td className="p-3.5">3+ Years / ARC Assigned</td>
                      <td className="p-3.5">100% Written-Off</td>
                      <td className="p-3.5">65% – 80% Haircut</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">20% – 35% of Net Principal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: 4-Sided Bordered Status Comparison Table */}
            <section id="legal-forum-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Legal Forum Comparison: Lok Adalat vs. Other Debt Recovery Routes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluate how Lok Adalat compares across critical parameters against other debt recovery and dispute resolution mechanisms in India:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Recovery Forum</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Nature of Proceeding</th>
                      <th className="p-3.5 font-bold">Arrest / Criminal Power</th>
                      <th className="p-3.5 font-bold">Final Award Status</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 bg-blue-50/30 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#1886ff]" />
                        National Lok Adalat
                      </td>
                      <td className="p-3.5">Legal Services Authorities Act 1987</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">100% Conciliation &amp; ADR</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Zero Power)</td>
                      <td className="p-3.5 font-semibold text-slate-900">Civil Decree (Non-Appealable)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Execute OTS with up to 70% waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Summary Civil Suit (Order 37)</td>
                      <td className="p-3.5">Code of Civil Procedure, 1908</td>
                      <td className="p-3.5">Adversarial Judicial Trial</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Civil Claim)</td>
                      <td className="p-3.5">Civil Money Decree (Appealable)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">File Leave to Defend on triable issues</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Arbitration Tribunal</td>
                      <td className="p-3.5">Arbitration &amp; Conciliation Act 1996</td>
                      <td className="p-3.5">Private Adjudication</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Civil Claim)</td>
                      <td className="p-3.5">Arbitral Award (Sec 34 Challenge)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Challenge Sec 12(5) Unilateral Appt</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Debt Recovery Tribunal (DRT)</td>
                      <td className="p-3.5">RDBFI Act, 1993 / SARFAESI</td>
                      <td className="p-3.5">Specialized Tribunal (&gt;₹20 Lakhs)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Civil / Recovery)</td>
                      <td className="p-3.5">Recovery Certificate (Appeal DRAT)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Contest Statement of Account ledger</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Cheque / NACH Bounce Case</td>
                      <td className="p-3.5">Sec 138 NI Act / Sec 25 PSS Act</td>
                      <td className="p-3.5 text-red-600 font-semibold">Quasi-Criminal Trial</td>
                      <td className="p-3.5 text-red-600 font-semibold">YES (Bailable, up to 2 yrs)</td>
                      <td className="p-3.5">Criminal Judgment / Fine / Appeal</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Secure bail &amp; compound via settlement</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Direct Bank OTS Scheme</td>
                      <td className="p-3.5">RBI Master Directions on NPAs</td>
                      <td className="p-3.5">Bilateral Commercial Deal</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Voluntary)</td>
                      <td className="p-3.5">Bank Settlement Sanction Letter</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Liaison with Principal Nodal Officer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Technical Financial Risk Analytics & CIBIL Scoring Penalties */}
            <section id="cibil-financial-analytics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Scoring Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Credit Bureau Analytics &amp; CIBIL Scoring Dynamics Post-Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding how personal loan defaults and subsequent Lok Adalat settlements reflect across credit information companies (TransUnion CIBIL, Experian, Equifax, and CRIF High Mark) is essential for long-term financial rehabilitation:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Unresolved Default Impact</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An ongoing default generates consecutive monthly 30, 60, 90, and 180+ DPD (Days Past Due) flags. Payment history accounts for <strong>35% of your total credit score</strong>, causing an immediate drop of 100 to 180 points and triggering automatic hard rejections across all Loan Origination Systems (LOS).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Post-Settlement &quot;Settled&quot; Remark</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a loan is settled via Lok Adalat, the bank reports the account as <em>&quot;Settled&quot;</em> or <em>&quot;Post-Write-off Settled&quot;</em> with a ₹0 balance. This stops further bleeding of your credit score, permanently halts DPD tracking, and closes the active liability on your credit profile.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Conversion to &quot;Closed&quot; Status</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers who require clean future credit access for home loans or prime credit cards can subsequently negotiate with the lender to remit the waived principal differential, converting the CIBIL remark from <em>&quot;Settled&quot;</em> to a pristine <em>&quot;Closed&quot;</em> status with an updated NOC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Process Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: 6-Stage Lok Adalat Personal Loan Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Examine this structured visual workflow detailing the complete procedural trajectory from receiving a pre-litigation notice to executing the Section 21 consent decree and obtaining the official No Dues Certificate:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/lok-adalat-personal-loan-settlement.jpg"
                    alt="Lok Adalat Personal Loan Settlement Process and Waivers Blueprint India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Legal Services Authorities Act 1987</span>
                  <a
                    href="/images/infographics/lok-adalat-personal-loan-settlement.jpg"
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
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Standard Operating Procedure (SOP): 6 Stages of Lok Adalat Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Execute this rigorous, institutional step-by-step operating procedure to navigate the Lok Adalat settlement process and secure optimal financial waivers:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–7</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Notice Authentication &amp; Loan Ledger Forensic Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Verify the authenticity of the Lok Adalat notice by checking the official seal and signature of the District Legal Services Authority (DLSA) or Taluk Committee. Obtain a certified, updated statement of accounts from your bank under the Bankers&apos; Books Evidence Act. Dissect the outstanding balance to isolate the true unpaid principal from capitalized penal interest, late payment fines, GST surcharges, and illegitimate collection agency expenses.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 8–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Comprehensive Hardship Portfolio &amp; Dossier Assembly
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Banks require verifiable evidentiary justification to approve substantial principal write-offs during Lok Adalat sessions. Compile a comprehensive financial hardship dossier containing salary reduction letters, pink slips, medical hospitalization discharge summaries, GST return downturn reports, or family dependency proof. Calculate your exact maximum lump-sum or structured payment capability.
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
                    Pre-Lok Adalat Strategic Bank Liaison &amp; Pre-Counseling
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Avoid walking into the Lok Adalat session unprepared. Initiate pre-counseling contact with the bank&apos;s Senior NPA Recovery Manager, Legal Desk, or Principal Nodal Officer at the designated pre-conciliation desk. Present your audited baseline and hardship dossier in advance. This pre-aligns the bank&apos;s internal approval grid, ensuring the bank representative brings pre-authorized approval for your target settlement figure on the day of the sitting.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Lok Adalat Session Day</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Lok Adalat Bench Appearance &amp; Conciliated Negotiation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Attend the scheduled session before the designated Lok Adalat bench (in person or via National e-Lok Adalat virtual portal). The Presiding Judicial Officer and Conciliator will invite both parties to present their terms. Respectfully explain your genuine financial incapacity while expressing unambiguous willingness to close the debt immediately under fair terms. The bench facilitates an amicable compromise without allowing the bank to exert undue coercion.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Immediate Post-Agreement</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Execution of Compromise Memo &amp; Section 21 Consent Award
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Once terms are agreed upon, verify that the written Settlement Memorandum explicitly lists the agreed compromise amount, the exact payment due dates, and unconditional clauses stating that upon payment, all civil, criminal, and recovery claims stand fully extinguished. Both parties sign the memo, and the Lok Adalat bench passes a formal <strong>Consent Award under Section 21</strong> of the Act.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 30–60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Direct Bank Remittance, NDC Retrieval &amp; Bureau Updation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Remit the agreed settlement funds directly to your designated bank loan account via RTGS, NEFT, or demand draft—never pay cash or third-party intermediaries. Obtain a stamped, dated receipt. Within 15 to 30 days, collect your unconditional <strong>No Dues Certificate (NDC)</strong> and verify that the bank submits the updated closure data to TransUnion CIBIL, Equifax, and Experian.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Formal Legal Reply Architecture & Legal Strategy (Paragraphs - NO Points / NO Letter Draft) */}
            <section id="formal-legal-strategy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Substantive Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Formal Reply Architecture &amp; Substantive Legal Strategy
              </h2>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Responding effectively to a pre-litigation Lok Adalat notice requires a well-orchestrated legal strategy that establishes bona fide financial hardship while dismantling the predatory interest calculations frequently advanced by institutional lenders. Under the statutory framework established by the Legal Services Authorities Act, 1987, a formal written response sent to both the Secretary of the District Legal Services Authority and the lending bank&apos;s authorized representative establishes your legal standing as a cooperative yet legally protected borrower. This communication should formally acknowledge receipt of the pre-litigation notice, affirm your complete respect for the statutory conciliatory process, and set forth the material economic conditions that caused the involuntary disruption of loan repayments.
                </p>
                <p>
                  A critical objective of this legal posture is challenging the quantum of the bank&apos;s aggregate demand before entering the conciliatory room. Commercial lenders often present inflated claim figures that include compounded penal interest, arbitrary late payment surcharges, processing penalties, and speculative recovery expenses that violate Reserve Bank of India Master Directions on Fair Practices Code. The formal representation must demand a certified and audited statement of account under the Bankers&apos; Books Evidence Act, 1891, specifically demanding the segregation of genuine principal liability from unapproved punitive levies. By placing this forensic discrepancy on record with the Legal Services Authority, the borrower effectively deprives the lender of using inflated numbers as the baseline for negotiations.
                </p>
                <p>
                  Furthermore, the substantive defense must articulate the definitive civil nature of the transaction and proactively safeguard the borrower against unlawful intimidation. Lending institutions frequently attempt to use the formal appearance of a Lok Adalat summons to exert undue pressure or threaten coercive legal remedies. The written response serves as an evidentiary shield by formally placing on record that the underlying obligation represents an unsecured commercial personal loan governed purely by civil contract law, where no criminal mens rea or penal liability exists. Citing pertinent judicial precedents on debtor protections, the reply emphasizes that any ongoing third-party recovery harassment violates the borrower&apos;s constitutional right to dignity under Article 21 and the binding guidelines issued by the Reserve Bank of India.
                </p>
                <p>
                  Finally, the strategic positioning must formally propose a viable compromise One-Time Settlement structure supported by documentary exhibits. Rather than entering the Lok Adalat session with vague verbal pleas, presenting an organized financial hardship dossier containing income tax returns, salary reduction documentation, termination letters, or medical ledgers transforms the dynamic into a credible, solution-oriented resolution. This proactive framework enables the Lok Adalat bench to fulfill its statutory mandate of facilitating an equitable settlement, compelling the institutional claimant to accept realistic terms that align with the borrower&apos;s verified economic capacity.
                </p>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Grievance &amp; Escalation Matrix for Loan Disputes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lending bank refuses fair conciliation, reneges on agreed terms, or uses coercive collection tactics alongside the Lok Adalat process, escalate through this structured 3-tier regulatory and institutional mechanism:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Lok Adalat Bench &amp; Bank Principal Nodal Officer (PNO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–14 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Pre-Litigation Objection &amp; Grievance Submission
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a formal written objection directly to the Presiding Officer of the Lok Adalat bench detailing predatory charges and unauthorized recovery harassment. Concurrently submit a formal grievance to the bank&apos;s Principal Nodal Officer under the internal grievance redressal mechanism.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: District Legal Services Authority (DLSA) Secretary
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 15–30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Administrative Intervention for Unfair Banking Practices
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    File a representation before the Full-Time Secretary of the DLSA (a Senior Civil Judge rank officer). The DLSA has administrative powers to summon bank branch managers and direct them to adhere strictly to fair conciliation principles without intimidating borrowers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal: cms.rbi.org.in)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Statutory Regulatory Redressal for Coercive Recovery
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the bank combines Lok Adalat notices with illegal recovery tactics, offensive phone calls, or refuses to issue a No Dues Certificate post-settlement, lodge a complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Chronological Milestone Resolution Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Milestone Resolution Timeline (Day 0 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A clear roadmap of chronological milestones from receipt of notice to credit bureau rehabilitation:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Milestone Phase</th>
                      <th className="p-3.5 font-bold">Key Institutional Event</th>
                      <th className="p-3.5 font-bold">Statutory Timeframe</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Action Checklist</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 0</td>
                      <td className="p-3.5">Receipt of Pre-Litigation Lok Adalat Notice</td>
                      <td className="p-3.5">Typically 15–30 days prior to sitting</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Authenticate DLSA case number &amp; audit account ledger</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 5–15</td>
                      <td className="p-3.5">Pre-Counseling Sitting / Bank Outreach</td>
                      <td className="p-3.5">Pre-conciliation period</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Submit hardship dossier &amp; pre-negotiate waiver band</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat Day</td>
                      <td className="p-3.5">Appearance before Bench &amp; Consent Award</td>
                      <td className="p-3.5">Single-day conclusive disposal</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Sign joint compromise memo &amp; obtain Section 21 decree</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 15–45 Post-Award</td>
                      <td className="p-3.5">Remittance of Agreed Settlement Amount</td>
                      <td className="p-3.5">Stipulated in Consent Award</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Direct bank RTGS transfer &amp; obtain stamped deposit slip</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 2–3</td>
                      <td className="p-3.5">No Dues Certificate (NDC) Retrieval</td>
                      <td className="p-3.5">Within 30 days of final payment</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Collect original stamped NDC &amp; verify loan account closure</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 4–6</td>
                      <td className="p-3.5">CIBIL / Credit Bureau Status Updation</td>
                      <td className="p-3.5">45–90 days bureau reporting cycle</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Download CIBIL report; initiate bureau dispute if un-updated</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Scenarios: Fintech NBFC Apps, Credit Cards &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Nuances across various lending institutions in Lok Adalat proceedings:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1886ff]" />
                    Fintech NBFC Loan Apps &amp; Automated Pre-Litigation Notices
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Digital personal loan applications often dispatch automated WhatsApp notices referencing Lok Adalat hearings. Ensure you verify whether an actual pre-litigation case number has been registered with the local DLSA or if it is merely an informal conciliation invitation. In genuine e-Lok Adalats, fintech NBFCs are known to offer dramatic 60% to 75% settlements due to high default provisioning.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Outstanding Dues in Lok Adalat
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Credit card claims referred to Lok Adalat typically feature exorbitant revolving finance charges (often 42% to 48% annualized) and compounding GST penalties. Lok Adalat benches routinely direct credit card issuers to strip away all interest accumulations and settle exclusively around the baseline uncollateralized spend, resulting in massive savings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Asset Reconstruction Companies (ARCs) at Lok Adalat
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When loans are sold to ARCs (such as Phoenix ARC, ARCIL, or CFM ARC) under Section 5 of the SARFAESI Act, ARCs actively utilize National Lok Adalats to liquidate sticky portfolios. Since ARCs purchase distressed loan pools at steep discounts (often 20% to 30% of book value), they possess extraordinary commercial flexibility to accept deep compromise settlements.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Co-Borrowers, Guarantors &amp; Legal Heirs in Lok Adalat
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    In co-borrower loans, any consent award passed in Lok Adalat must expressly include all co-signers and guarantors to release them from joint and several liability under Section 128 of the Indian Contract Act. In cases involving deceased borrowers, legal heirs are protected under Section 50 of the CPC and are only liable to the extent of inherited estate assets.
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
                Frequently Asked Questions on Lok Adalat Personal Loan Settlement
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
                Official Regulatory Citations &amp; Legal References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Legal Services Authorities Act, 1987:</strong> Sections 19, 20, 21, and 22, National Legal Services Authority (NALSA), Ministry of Law and Justice, Government of India.
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>State of Punjab v. Jalour Singh (2008) 2 SCC 660</em> (Finality and Non-Appealability of Lok Adalat Awards under Section 21).
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>K.N. Govindan Kutty Menon v. C.D. Shaji (2012) 2 SCC 51</em> (Deemed Civil Court Decree status for Lok Adalat settlements).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders and Prudential Framework for Resolution of Stressed Assets (Updated 2026).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal of Unfair Recovery Practices, Harassment and Credit Reporting Errors.
                </li>
              </ul>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice for Loan
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
                Specialized in banking compliance, Lok Adalat representations, loan dispute resolution, and NPA settlement negotiations with deep expertise navigating pre-litigation conciliation across Indian judicial forums.
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
                  Lok Adalat Summons?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts represent your case before the Lok Adalat bench, eliminate penal interest, stop recovery harassment, and negotiate up to a 70% loan waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Lok Adalat Summons? Let Us Negotiate for You
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
                  <span>Direct Bank Settlement • NALSA Compliant</span>
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
                  <span><strong>RBI &amp; NALSA Compliance:</strong> 100% lawful dispute handling.</span>
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
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral arbitrator guide &rarr;</span>
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
