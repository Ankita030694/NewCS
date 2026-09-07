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

export default function BailableWarrantForLoanDefaultClient() {
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
    { id: 'debt-defaults-and-warrants', label: '1. Defaults & Bailable Warrants' },
    { id: 'legal-mechanics-summons-to-warrant', label: '2. Summons to Warrant Mechanics' },
    { id: 'bailable-vs-non-bailable-warrant', label: '3. Bailable vs Non-Bailable Matrix' },
    { id: 'crpc-section-71-and-bnss-bail', label: '4. Section 71 Bail & CIBIL Rules' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Defense Blueprint' },
    { id: 'step-by-step-warrant-recall-sop', label: '5. 6-Stage Recall SOP' },
    { id: 'police-visit-protocol-and-rights', label: '6. Police Protocol & Home Rights' },
    { id: 'three-tier-legal-defense-matrix', label: '7. 3-Tier Defense & Quashing Matrix' },
    { id: 'chronological-warrant-timeline', label: '8. Chronological Resolution Milestones' },
    { id: 'specialized-warrant-scenarios', label: '9. NACH & Outstation Warrants' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a bailable warrant for loan default in India?',
      a: 'A bailable warrant for loan default is a judicial order issued by a Magistrate under Section 71 of the Code of Criminal Procedure (CrPC) or Section 73 of the Bharatiya Nagarik Suraksha Sanhita (BNSS). It is issued when a borrower fails to appear in court following summons in quasi-criminal debt matters, such as Section 138 cheque bounce or Section 25 NACH mandate dishonor. It directs the police to secure the borrower\'s appearance while granting immediate release upon executing a bail bond.'
    },
    {
      q: 'Can police arrest me at my home for a bailable warrant?',
      a: 'Under Section 71 CrPC and Section 73 BNSS, an officer executing a bailable warrant cannot take you into custodial jail if you furnish the endorsed bail bond and local surety. The warrant contains a specific judicial endorsement directing the police officer to accept your personal bond and surety at your residence or local police station and release you immediately with an undertaking to appear in court on the next hearing date.'
    },
    {
      q: 'What is the difference between a bailable and non-bailable warrant?',
      a: 'A bailable warrant grants the borrower a statutory right to immediate release upon providing the specified bond amount and surety, either before the executing police officer or the court. In contrast, a Non-Bailable Warrant (NBW) under Section 70 CrPC directs police to take the person into custody and produce them physically before the Magistrate, where bail is at the sole discretion of the presiding judge.'
    },
    {
      q: 'How can I cancel or recall a bailable warrant without going to jail?',
      a: 'You can recall a bailable warrant by filing an urgent Recall Application under Section 70(2) CrPC before the issuing Judicial Magistrate through a legal counsel. The application must cite bona fide reasons for non-appearance, such as unserved summons, wrong address, serious medical emergency, or outstation employment, accompanied by an undertaking to attend future proceedings. The court routinely recalls the warrant and grants regular bail on furnishing bonds.'
    },
    {
      q: 'Why do banks file criminal cases instead of civil suits for loan defaults?',
      a: 'Unsecured personal loans, business loans, and credit cards are civil debt contracts. However, banks routinely obtain post-dated security cheques or electronic NACH auto-debit mandates during loan disbursement. When an EMI bounces, lenders invoke Section 138 of the Negotiable Instruments Act or Section 25 of the Payments and Settlement Systems Act to exert quasi-criminal pressure and compel an expedited debt settlement.'
    },
    {
      q: 'What happens if I ignore a bailable warrant?',
      a: 'If you ignore a bailable warrant and fail to appear on the scheduled hearing date, the Magistrate will cancel the bailable status and issue a Non-Bailable Warrant (NBW) under Section 70 CrPC. Continued evasion can lead the court to initiate proclamation proceedings under Section 82 CrPC and property attachment under Section 83 CrPC, declaring the borrower an absconder.'
    },
    {
      q: 'Can a bailable warrant be issued if I never received the initial court summons?',
      a: 'Yes, in practice, process servers often file faulty or false service reports claiming summons were delivered or refused. When the court record indicates service without borrower appearance, the Magistrate routinely issues a bailable warrant. Establishing non-receipt of summons via tracking records, outdated addresses, or lack of signature is a primary legal ground to have the warrant recalled immediately.'
    },
    {
      q: 'Can I travel abroad or renew my passport if a bailable warrant is active?',
      a: 'An active, pending warrant registered in police or immigration databases can trigger alerts during passport renewal or airport immigration checks under the Passports Act, 1967. It is vital to file an immediate recall petition, obtain a certified copy of the court recall order, and ensure the police station updates its execution register before traveling internationally.'
    },
    {
      q: 'Can I settle my loan and close the criminal case after a warrant is issued?',
      a: 'Yes. Section 138 NI Act and Section 25 PSSA offenses are compoundable under Section 147 of the Negotiable Instruments Act. Borrowers can negotiate a One-Time Settlement (OTS) with the bank legal desk. Once the agreed settlement amount is paid and the bank issues a No Dues Certificate (NDC), a joint compounding petition is filed in court to quash the warrant and dismiss the complaint permanently.'
    },
    {
      q: 'What documents are required to secure bail and recall a bailable warrant?',
      a: 'To recall the warrant and secure bail, you need a certified copy of the complaint and warrant order, identity and address proofs (Aadhaar, PAN, Passport), proof of residential address within court jurisdiction or a local solvent surety, surety solvency documents (such as vehicle RC, property tax receipt, or bank statement), and a formal recall petition supported by an affidavit explaining past non-appearance.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
            <Gavel className="w-3.5 h-3.5 text-blue-200" />
            <span>Magistrate Court Procedure &amp; Bail Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Bailable Warrant Issued for Loan Default: Immediate Legal Steps
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Has a Magistrate Court issued a bailable warrant following missed hearings in a cheque bounce or NACH dispute? Understand your statutory right to station bail under Section 71 CrPC, recall the warrant, and negotiate a full compromise settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Warrant Issued? Get Immediate Legal Help</span>
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
                      className={`group flex items-center justify-between px-3 py-2 rounded-xl transition-all font-medium leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold shadow-2xs'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="truncate mr-2">{link.label}</span>
                      <ChevronDown
                        className={`w-3 h-3 flex-shrink-0 transition-transform ${
                          isActive ? '-rotate-90 text-[#1886ff]' : 'opacity-0 group-hover:opacity-40'
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <article className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl p-5 md:p-6 bg-[#F4F8FE] border-l-[5px] border-l-[#1886ff] border border-blue-100/80 shadow-xs"
            >
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-blue-100">
                <ShieldCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Executive Brief: Bailable Warrants in Loan Default
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Mandatory station bail upon furnishing personal bond (Sec 71 CrPC).</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Zero police lockup or custody when local surety is provided.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Stemming from Sec 138 cheque or Sec 25 NACH e-mandate bounce.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Direct warrant recall via Sec 70(2) petition in trial court.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Full case compounding &amp; dismissal under Sec 147 NI Act.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>40% to 60% compromise relief via structured Lok Adalat OTS.</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: DEBT DEFAULTS & WHY BAILABLE WARRANTS ARE ISSUED */}
            <section id="debt-defaults-and-warrants" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  1. Debt Defaults &amp; Why Bailable Warrants Are Issued
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                In India, defaulting on a personal loan, credit card balance, or unsecured business facility does not constitute an inherent criminal offense under the Bharatiya Nyaya Sanhita (BNS) or the erstwhile Indian Penal Code. The borrowing relationship is governed by the Indian Contract Act, 1872. However, lending institutions systematically integrate quasi-criminal instruments into loan disbursement paperwork to create legal leverage. When you sign a loan agreement, lenders collect post-dated cheques (PDCs) or mandate electronic National Automated Clearing House (NACH) debits.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                When financial hardship causes an Equated Monthly Installment (EMI) to bounce, the bank initiates proceedings under Section 138 of the Negotiable Instruments Act, 1881, or Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA). These statutes criminalize the dishonor of negotiable instruments and electronic clearing mandates. Because these matters are tried before Judicial Magistrates as summary trials, the court issues formal summons to the borrower.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                When postal summons are returned unserved, delivered to an outdated tenancy address, or ignored by the borrower out of fear, the presiding Magistrate presumes intentional absence. Under the Code of Criminal Procedure (CrPC), the court escalates process from a summons to a bailable warrant to compel physical attendance. The Supreme Court of India in the landmark ruling <em>Inder Mohan Goswami &amp; Anr. v. State of Uttar Pradesh (2007)</em> observed that courts must exercise immense caution and prefer summons or bailable warrants over coercive incarceration in disputes arising from commercial transactions.
              </p>
            </section>

            {/* SECTION 2: LEGAL MECHANICS: SUMMONS TO BAILABLE WARRANT */}
            <section id="legal-mechanics-summons-to-warrant" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileText className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  2. Legal Mechanics: Summons to Bailable Warrant
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The issuance of a bailable warrant follows a defined statutory sequence governed by Section 61 through Section 71 of the CrPC (now mirrored under Section 63 to Section 73 of the Bharatiya Nagarik Suraksha Sanhita, 2023). The process begins when the lending bank files a private complaint under Section 200 CrPC. The Magistrate takes cognizance, examines pre-summoning evidence on affidavit, and issues court summons under Section 61 CrPC directing the borrower to appear on a specific date.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                In a significant percentage of loan default disputes, borrowers never receive the physical summons. Process servers often leave notices with building security, paste them at old rented residences, or return service reports marked &quot;unclaimed&quot; or &quot;refused&quot;. When the Magistrate examines the docket and finds that the accused borrower is unrepresented despite a positive service report, the court issues a Bailable Warrant under Section 71 CrPC.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Section 71 explicitly empowers the Magistrate to make an endorsement on the warrant itself. This judicial endorsement specifies a fixed personal bond amount (commonly ₹10,000 to ₹50,000) and requires one local surety. It mandates that if the borrower executes the bond and furnishes the surety, the police officer executing the warrant must release the person immediately without custodial detention, fixing the next date for trial appearance.
              </p>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="bailable-vs-non-bailable-warrant" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  3. Bailable Warrant vs Non-Bailable Warrant Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Borrowers frequently conflate bailable warrants with immediate arrest and incarceration. Evaluating the structural legal distinctions between procedural notices, bailable warrants, non-bailable warrants, and proclamation proceedings clarifies your defense options.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="px-3.5 py-3 font-extrabold text-[#0C2756]">Legal Stage / Notice</th>
                      <th className="px-3.5 py-3">Governing Section</th>
                      <th className="px-3.5 py-3">Police Power to Arrest</th>
                      <th className="px-3.5 py-3">Bail Availability</th>
                      <th className="px-3.5 py-3">Borrower Action Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700 font-normal">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Court Summons</td>
                      <td className="px-3.5 py-2.5">Sec 61 CrPC / Sec 63 BNSS</td>
                      <td className="px-3.5 py-2.5 text-emerald-700 font-semibold">Zero arrest powers</td>
                      <td className="px-3.5 py-2.5">Not applicable (No custody)</td>
                      <td className="px-3.5 py-2.5">Enter appearance through counsel</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30 hover:bg-blue-50/50">
                      <td className="px-3.5 py-2.5 font-bold text-[#1886ff]">Bailable Warrant (BW)</td>
                      <td className="px-3.5 py-2.5">Sec 71 CrPC / Sec 73 BNSS</td>
                      <td className="px-3.5 py-2.5 text-amber-700 font-semibold">Arrest stayed upon bond</td>
                      <td className="px-3.5 py-2.5 text-emerald-700 font-bold">Mandatory statutory right</td>
                      <td className="px-3.5 py-2.5">Execute bond &amp; file recall petition</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-rose-700">Non-Bailable Warrant (NBW)</td>
                      <td className="px-3.5 py-2.5">Sec 70 CrPC / Sec 72 BNSS</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-semibold">Full custodial arrest power</td>
                      <td className="px-3.5 py-2.5 text-amber-700 font-semibold">Judicial discretion of Magistrate</td>
                      <td className="px-3.5 py-2.5">Urgent surrender &amp; recall application</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-purple-900">Proclamation &amp; Attachment</td>
                      <td className="px-3.5 py-2.5">Sec 82 &amp; 83 CrPC</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-semibold">Absconder arrest mandate</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-semibold">Requires High Court stay</td>
                      <td className="px-3.5 py-2.5">File Section 482 quashing petition</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-emerald-800">Compromise OTS Settlement</td>
                      <td className="px-3.5 py-2.5">Sec 147 NI Act / Lok Adalat</td>
                      <td className="px-3.5 py-2.5 text-emerald-700 font-semibold">All warrants nullified</td>
                      <td className="px-3.5 py-2.5 text-emerald-700 font-bold">Complete case withdrawal</td>
                      <td className="px-3.5 py-2.5">Pay agreed sum &amp; compound matter</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                As demonstrated in the matrix, a bailable warrant is an intermediate judicial measure. It guarantees bail upon providing surety, ensuring you remain completely free while legal counsel prepares your defense or negotiates a settlement.
              </p>
            </section>

            {/* SECTION 4: SECTION 71 CrPC & BNSS PROVISIONS ON COURT BAIL */}
            <section id="crpc-section-71-and-bnss-bail" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  4. Section 71 CrPC &amp; BNSS Provisions on Court Bail
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The statutory guarantee under Section 71 of the Code of Criminal Procedure (and its corresponding Section 73 under the Bharatiya Nagarik Suraksha Sanhita, 2023) is designed to protect personal liberty while securing court appearance. Under this framework, bail in bailable warrant matters is an absolute legal entitlement rather than a judicial favor. When a police official executes the warrant, the officer acts as a ministerial agent of the court and is bound by the Magistrate&apos;s written endorsement.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The endorsement specifies three statutory elements: the number of sureties required (normally one solvent surety), the monetary amount of the bond, and the date on which the borrower must present themselves before the trial court. Once the borrower signs the personal bond and the surety signs the surety bond with supporting documentation (such as an Aadhaar card, electricity bill, or vehicle registration copy), the police officer is legally obliged to accept the bond and conclude the visit.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                From a credit bureau perspective, receiving a bailable warrant does not automatically create a criminal record on CIBIL or Experian reports. However, the lending bank will classify the loan ledger under &quot;Suit Filed&quot; or &quot;Wilful Default&quot; flags in bureau submissions. Once the warrant is recalled and the loan is resolved via a One-Time Settlement (OTS), CredSettle invokes Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA) to update bureau records to &quot;Closed&quot; status with an unconditional No Dues Certificate.
              </p>
            </section>

            {/* SECTION 5: INFOGRAPHIC CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Sparkles className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Infographic: 6-Stage Warrant Recall &amp; Bail Protocol
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The visual defense blueprint below illustrates the six sequential stages required to audit the court docket, secure station or court bail, cancel the active bailable warrant, negotiate compromise terms, and achieve permanent case dismissal.
              </p>

              <div className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-900 shadow-md">
                <div className="relative aspect-video w-full bg-slate-950">
                  <Image
                    src="/images/infographics/bailable-warrant-for-loan-default.jpg"
                    alt="Bailable Warrant for Loan Default Defense and Bail Blueprint"
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3.5 bg-slate-900 text-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span>Figure 1: CredSettle 6-Stage Bailable Warrant Defense &amp; Compounding Protocol</span>
                  <a
                    href="/images/infographics/bailable-warrant-for-loan-default.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-warrant-recall-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Award className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  5. Step-by-Step SOP: Warrant Recall &amp; Court Surrender
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Navigating a bailable warrant demands systematic procedural execution to eliminate arrest risk and resolve the underlying financial liability. Our legal panel executes the following six-stage Standard Operating Procedure (SOP).
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">01</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 1: Forensic Case &amp; Docket Audit</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    Our advocates access the e-Courts portal and trial court registry to obtain certified copies of the complaint, the order sheets, and the summons service report. We verify whether the bank followed statutory notice requirements under Section 138(b) of the NI Act and assess any jurisdictional defects.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">02</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 2: Local Surety &amp; Bond Documentation</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    We prepare the personal appearance bond and arrange solvent local surety documentation in compliance with the Magistrate&apos;s endorsement. Ensuring verified residential proofs and identity records eliminates administrative objections during bail furnishing.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">03</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 3: Drafting Section 70(2) Recall Application</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    An urgent application under Section 70(2) CrPC is drafted and filed before the issuing Judicial Magistrate. The petition establishes genuine reasons for non-appearance, such as unserved summons, change of residence, severe medical ailment, or professional relocation, backed by an affidavit.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">04</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 4: Court Appearance &amp; Bail Confirmation</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    Counsel appears before the Magistrate to argue the recall application, furnish the bail bonds, and obtain a formal court order cancelling the warrant. A certified copy of the recall order is transmitted to the local police station to update their execution logbook.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">05</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 5: Bilateral OTS Negotiations with Bank</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    With criminal arrest risk neutralized, CredSettle engages the bank&apos;s Credit Committee and legal counsel to negotiate a One-Time Settlement (OTS). We strip away compound interest, penal levies, and legal expenses to secure a 40% to 60% principal waiver.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">06</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 6: Section 147 Compounding &amp; No Dues Certificate</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    Upon remitting the agreed settlement sum directly to the loan account, a joint application under Section 147 of the NI Act is filed. The court records the compromise, dismisses the criminal complaint, acquits the borrower, and the bank issues a final No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: POLICE PROTOCOL: WHEN OFFICERS VISIT YOUR RESIDENCE */}
            <section id="police-visit-protocol-and-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <BadgeAlert className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  6. Police Protocol: When Officers Visit Your Residence
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                When a local police officer visits your home to execute a bailable warrant, understanding your constitutional and statutory rights prevents panic and unlawful intimidation. Police personnel are executing a judicial order, but their authority in bailable matters is strictly confined to verifying identity and collecting the endorsed bail bond.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>1. Right to Inspect Original Warrant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You have the legal right under Section 75 CrPC to inspect the physical warrant, verify the court seal, check the judicial signature, and confirm the Section 71 bailable endorsement amount before taking any action.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>2. Immediate Station Bail Release</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you execute the personal bond and furnish the required surety, the officer cannot arrest or detain you in police lockup. Refusing bail when offered constitutes wrongful confinement under Section 342 IPC / BNS.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span>3. Protection of Family &amp; Elders</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Police officers cannot interrogate, threaten, or demand payment from family members, parents, or spouses. A loan dispute is personal to the borrower and third-party coercion violates RBI Fair Practices guidelines.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>4. Permissible Execution Hours</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Warrant execution should occur during reasonable daytime hours. Recovery agents accompanying police officers is strictly illegal under RBI Master Directives and should be documented immediately.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                If police personnel arrive unexpectedly, politely inform them that you are ready to furnish the endorsed bond under Section 71 CrPC. Contact your legal counsel immediately to transmit the surety documents or accompany you to the police station for formal bond registration.
              </p>
            </section>

            {/* SECTION 8: 3-TIER LEGAL DEFENSE & ESCALATION MATRIX */}
            <section id="three-tier-legal-defense-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  7. 3-Tier Legal Defense &amp; Quashing Options in High Court
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                CredSettle implements a structured three-tier institutional defense mechanism depending on the posture of the litigation and the bank&apos;s willingness to engage in commercial compromise.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 1: Trial Magistrate Court Recall Petition</span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 text-[#1886ff] font-bold text-xs">Immediate (24 to 48 Hours)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We file an urgent Section 70(2) application before the presiding Judicial Magistrate. By establishing unserved summons, genuine medical exigencies, or address transitions, we secure immediate cancellation of the warrant and obtain regular court bail.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 2: Compounding Petition &amp; Lok Adalat Conciliation</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 font-bold text-xs">Mid-Stage (14 to 30 Days)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Once bail is recorded, we petition the court to refer the matter to the National Lok Adalat under Section 21 of the Legal Services Authorities Act, 1987. We negotiate a compromise settlement with the bank legal team, leading to case compounding under Section 147 NI Act.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 3: High Court Quashing Petition (Section 482 CrPC)</span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-bold text-xs">Complex / High Court Stage</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    If the bank initiated malicious proceedings without statutory notice under Section 138(b), or if the debt is demonstrably time-barred under the Limitation Act, 1963, we file a Criminal Miscellaneous Petition before the High Court under Section 482 CrPC (Section 528 BNSS) to quash the warrant and entire complaint.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-warrant-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  8. Chronological Timeline: Default to Complete Recall
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Understanding the procedural milestones from initial EMI default to final compounding allows borrowers to anticipate legal steps and take timely action before warrants escalate into non-bailable status.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="px-3.5 py-3 font-extrabold text-[#0C2756]">Timeline</th>
                      <th className="px-3.5 py-3">Procedural Phase</th>
                      <th className="px-3.5 py-3">Court / Bank Action</th>
                      <th className="px-3.5 py-3">CredSettle Intervention</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700 font-normal">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="px-3.5 py-2.5">Cheque / NACH Dishonor</td>
                      <td className="px-3.5 py-2.5">Bank sends Section 138 demand notice</td>
                      <td className="px-3.5 py-2.5">Draft comprehensive legal reply challenging claims</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Day 45 to 60</td>
                      <td className="px-3.5 py-2.5">Criminal Complaint Filing</td>
                      <td className="px-3.5 py-2.5">Bank files Section 200 complaint in Magistrate Court</td>
                      <td className="px-3.5 py-2.5">Docket tracking &amp; early appearance preparation</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Day 60 to 90</td>
                      <td className="px-3.5 py-2.5">Summons Issuance</td>
                      <td className="px-3.5 py-2.5">Court issues physical summons under Section 61</td>
                      <td className="px-3.5 py-2.5">File memo of appearance via local counsel</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30 hover:bg-blue-50/50">
                      <td className="px-3.5 py-2.5 font-bold text-[#1886ff]">Day 90 to 120</td>
                      <td className="px-3.5 py-2.5">Bailable Warrant Issuance</td>
                      <td className="px-3.5 py-2.5">Magistrate issues Section 71 CrPC bailable warrant</td>
                      <td className="px-3.5 py-2.5 font-semibold text-blue-900">Immediate Section 70(2) recall application &amp; bail bond</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-emerald-800">Day 120 to 180</td>
                      <td className="px-3.5 py-2.5">Compromise OTS &amp; Compounding</td>
                      <td className="px-3.5 py-2.5">Bank agrees to OTS; court records settlement</td>
                      <td className="px-3.5 py-2.5 font-semibold text-emerald-800">Section 147 compounding order &amp; No Dues Certificate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-warrant-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Briefcase className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  9. Real-World Scenarios: Out-of-State &amp; NACH Warrants
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Loan default litigation presents unique jurisdictional challenges depending on loan types, lending institutions, and geographic factors. Below are four common real-world scenarios handled by CredSettle.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    <span>Out-of-State Jurisdictional Warrants</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    National banks frequently file Section 138 complaints in Delhi, Mumbai, or Chennai courts regardless of the borrower&apos;s residence. CredSettle deploys verified local counsel in the issuing city to argue recall petitions without requiring the borrower to undertake interstate travel.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CreditCard className="w-4 h-4 text-emerald-600" />
                    <span>Electronic NACH Mandate Warrants (PSSA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fintech lenders increasingly initiate Section 25 PSSA complaints for bounced e-mandates. We contest improper mandate presentation, verify user cancellation notices, and secure court bail while negotiating digital settlement waivers.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <UserCheck className="w-4 h-4 text-purple-600" />
                    <span>Co-Borrower &amp; Guarantor Warrants</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders often name spouses or family guarantors in Section 138 complaints despite them not signing the dishonored cheque. We file preliminary discharge applications establishing lack of signature privity under Supreme Court precedents.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Landmark className="w-4 h-4 text-amber-600" />
                    <span>ARC Debt Assignment Transfers</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When loans are assigned to Asset Reconstruction Companies (ARCs), existing court complaints often suffer from substitution defects under Section 256 CrPC. We exploit these procedural flaws to negotiate deep settlement haircuts of 50% to 70%.
                  </p>
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
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Loan Default Warrants
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Find clear, authoritative answers to the most urgent questions regarding bailable warrants, police visits, court bail, and debt settlement in India.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors text-xs sm:text-sm"
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Bookmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Statutory Citations &amp; Outbound Authority References
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3 text-xs sm:text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Key Governing Statutes &amp; Judicial Authorities Cited:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                  <li><strong>Section 71 &amp; 70(2), Code of Criminal Procedure, 1973:</strong> Power to direct security to be taken and warrant recall mechanism.</li>
                  <li><strong>Section 73, Bharatiya Nagarik Suraksha Sanhita, 2023:</strong> Contemporary statutory provisions on bailable warrant endorsements.</li>
                  <li><strong>Section 138, 141 &amp; 147, Negotiable Instruments Act, 1881:</strong> Dishonor of cheques, vicarious liability, and compounding of offenses.</li>
                  <li><strong>Section 25, Payment and Settlement Systems Act, 2007:</strong> Dishonor of electronic funds transfer instructions and NACH mandates.</li>
                  <li><strong>Inder Mohan Goswami v. State of UP (2007) 12 SCC 1:</strong> Supreme Court guidelines against arbitrary arrest warrants in civil transactions.</li>
                  <li><strong>Section 21, Credit Information Companies (Regulation) Act, 2005:</strong> Statutory credit score dispute rectification rights.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Official Government &amp; Judicial Portals:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span className="font-semibold truncate">Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>
                  <a
                    href="https://services.ecourts.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span className="font-semibold truncate">e-Courts Services Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span className="font-semibold truncate">India Code Legislative Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span className="font-semibold truncate">National Legal Services (NALSA)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span className="font-semibold truncate">RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span className="font-semibold truncate">TransUnion CIBIL India</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Related Legal Guides on CredSettle:</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { title: 'Arbitration Notice Defense', href: '/arbitration-notice-personal-loan-default' },
                    { title: 'Section 138 Cheque Bounce', href: '/cheque-bounce-case-defense-section-138' },
                    { title: 'ECS & NACH Bounce Notice', href: '/ecs-nach-bounce-legal-notice-section-25' },
                    { title: 'Can You Go to Jail for Loan', href: '/can-i-go-to-jail-for-loan-default-in-india' },
                    { title: 'Stop Recovery Harassment', href: '/how-to-stop-recovery-agent-harassment' },
                    { title: 'Personal Loan Settlement', href: '/personal-loan-settlement' },
                    { title: 'Lok Adalat Loan Settlement', href: '/lok-adalat-personal-loan-settlement' },
                    { title: 'Convert Settled to Closed', href: '/convert-settled-status-to-closed' }
                  ].map((guide, idx) => (
                    <Link
                      key={idx}
                      href={guide.href}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-medium border border-slate-200/80 transition-all"
                    >
                      {guide.title}
                    </Link>
                  ))}
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
                  <h3 className="font-bold text-slate-900 text-sm">Ashish Jhangra</h3>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                  <p className="text-[10px] text-slate-500">CredSettle Research Head</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                Specialist in Indian banking dispute defense, Section 138 NI Act litigation strategy, and institutional compromise settlements under RBI Prudential Frameworks.
              </p>
            </div>

            {/* EMERGENCY CTA CARD (#2452ae) */}
            <div
              className="rounded-2xl p-4 sm:p-5 text-white shadow-md space-y-3"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="flex items-center gap-2">
                <BadgeAlert className="w-5 h-5 text-amber-300 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-blue-100">
                  Urgent Legal Defense
                </span>
              </div>
              <h3 className="text-base font-extrabold leading-snug">
                Police at Your Door with a Warrant?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Connect immediately with CredSettle counsel for emergency Section 71 CrPC station bail guidance and trial court warrant recall representation.
              </p>
              <div className="pt-1 space-y-2">
                <a
                  href="tel:+918800226635"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1886ff]" />
                  <span>Call: +91-8800226635</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full py-2 px-4 rounded-xl bg-blue-600/40 hover:bg-blue-600/60 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-white/20"
                >
                  <span>Request Urgent Callback</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* TRUST BADGES */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-slate-900 font-bold pb-1.5 border-b border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CredSettle Protection Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>100% Confidential Legal Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Pan-India Court Appearance Network</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>RBI Fair Practices Code Enforcement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Unconditional No Dues Guarantee</span>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
