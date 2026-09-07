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
  FileText,
  TrendingUp,
  BookOpen,
  Check,
  Phone,
  ArrowRight,
  Clock,
  UserCheck,
  Gavel,
  BadgeAlert,
  Landmark,
  AlertCircle,
  Briefcase,
  HelpCircle
} from 'lucide-react';

export default function NonBailableWarrantChequeBounceLoanClient() {
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
    { id: 'debt-economics-and-nbw-issuance', label: '1. Debt Economics & NBW Rationale' },
    { id: 'financial-breakdown-and-settlement-math', label: '2. Penalty vs Settlement Math' },
    { id: 'nbw-recall-vs-alternative-pathways', label: '3. Legal Remedies Comparison' },
    { id: 'cibil-impact-and-credit-score-restoration', label: '4. CIBIL Damage & Credit Repair' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Defense Blueprint' },
    { id: 'step-by-step-nbw-recall-sop', label: '5. 6-Stage Recall & Bail SOP' },
    { id: 'statutory-notice-defense-and-legal-rights', label: '6. Statutory Notice Defenses' },
    { id: 'three-tier-escalation-and-quashing-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'chronological-procedural-timeline', label: '8. Chronological Timeline' },
    { id: 'specialized-outstation-and-commercial-scenarios', label: '9. Specialized Default Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a Non-Bailable Warrant (NBW) in a Section 138 cheque bounce case?',
      a: 'A Non-Bailable Warrant (NBW) is a judicial arrest order issued by a Magistrate under Section 70 of the Code of Criminal Procedure (Section 72 BNSS). It directs police to arrest the accused borrower and produce them in court after repeated non-appearance following summons and bailable warrants in a Section 138 Negotiable Instruments Act proceeding.'
    },
    {
      q: 'Can the police arrest me immediately once an NBW is issued for a cheque bounce?',
      a: 'Yes, an active NBW authorizes police officers to take you into custody anywhere in India and present you before the issuing Magistrate. Unlike a bailable warrant, the police cannot grant station bail on an NBW. However, you can prevent arrest by immediately filing an urgent Section 70(2) recall petition or surrendering through counsel before the Magistrate.'
    },
    {
      q: 'How do I cancel or recall a Non-Bailable Warrant without going to jail?',
      a: 'To recall an NBW, your legal counsel must file an urgent application under Section 70(2) CrPC before the issuing trial court. The application must cite bona fide grounds for prior non-appearance, such as unserved summons, wrong address records, hospitalization, or outstation relocation, accompanied by a formal undertaking to attend all future hearings and furnish personal bail bonds.'
    },
    {
      q: 'Can a Magistrate issue an NBW without first serving summons or a bailable warrant?',
      a: 'Under Supreme Court directives in Inder Mohan Goswami (2007) and Raghuvansh Dewanchand (2012), Magistrates should not issue an NBW on the first instance in commercial cheque bounce disputes. The court must first exhaust summons and bailable warrants. If an NBW is issued without proof of valid summons service, it constitutes a procedural illegality curable through recall or Section 482 High Court quashing.'
    },
    {
      q: 'What is the procedure for surrendering in court to recall an NBW?',
      a: 'Surrendering involves appearing before the issuing Judicial Magistrate alongside your advocate during morning court hours. Your counsel moves an application under Section 70(2) CrPC along with a regular bail petition under Section 436 or 437 CrPC, accompanied by a personal appearance bond and a local solvent surety. In commercial loan disputes, trial courts routinely cancel the NBW on the same day.'
    },
    {
      q: 'Can I get an interim stay on an NBW from the High Court?',
      a: 'Yes. If the trial Magistrate refuses to recall the warrant, or if there is imminent threat of arrest in a distant outstation jurisdiction, you can file a criminal petition under Section 482 CrPC (Section 528 BNSS) before the High Court. The High Court can stay police execution of the NBW and direct you to appear before the trial court within a protected window.'
    },
    {
      q: 'What happens if I continue to ignore a Non-Bailable Warrant?',
      a: 'If an NBW remains unexecuted due to evasion, the Magistrate can initiate proclamation proceedings under Section 82 CrPC, declaring you a proclaimed person. If non-appearance persists, the court can order attachment and auction of your movable and immovable assets under Section 83 CrPC, alongside issuing Look-Out Circulars (LOC) that restrict international travel.'
    },
    {
      q: 'Can a cheque bounce case and NBW be closed through a bank settlement?',
      a: 'Yes. Section 138 offenses are compoundable under Section 147 of the Negotiable Instruments Act. Borrowers can negotiate a One-Time Settlement (OTS) with the lender to pay a mutually compromised sum. Once the bank receives payment and issues a No Dues Certificate, a joint compounding application is filed in court to quash the NBW and dismiss the criminal complaint.'
    },
    {
      q: 'What documents are required to file an NBW recall application and secure bail?',
      a: 'Required documents include certified copies of the complaint and warrant order sheets, proof of identity and local residence (Aadhaar, PAN, Passport), evidence substantiating prior absence (medical certificates, employer relocation letters, speed post tracking records showing non-delivery), and local surety documents such as property tax receipts, salary slips, or vehicle RC.'
    },
    {
      q: 'Does an NBW in a cheque bounce case affect my CIBIL score and passport renewal?',
      a: 'The warrant itself is a judicial order and is not directly uploaded to CIBIL. However, the underlying loan default will reflect as Suit Filed or Written-Off, dropping your score below 600. Furthermore, an active uncancelled NBW reported in police databases can block passport issuance or trigger immigration alerts at airports under Section 6(2)(f) of the Passports Act, 1967.'
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
            <span>Magistrate Court Procedure &amp; Warrant Recall Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Non-Bailable Warrant (NBW) in Cheque Bounce: Legal Defense Guide
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Has a Judicial Magistrate issued a Non-Bailable Warrant against you in a Section 138 cheque bounce or personal loan dispute? Learn how to file an emergency recall petition under Section 70(2) CrPC, secure regular court bail without custodial arrest, and negotiate a full compromise settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Cancel Your NBW Immediately</span>
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
                  Executive Brief: Non-Bailable Warrants in Cheque Bounce
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Issued under Section 70 CrPC / Section 72 BNSS after missed appearances.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Direct arrest authority granted to police across all Indian jurisdictions.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Immediate remedy via Section 70(2) Recall Application before Magistrate.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Supreme Court ruling in Inder Mohan Goswami bars mechanical arrest.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Court surrender with personal bond and local surety grants same-day bail.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Section 482 CrPC High Court petition provides emergency stay on arrest.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Full case compounding and warrant cancellation under Section 147 NI Act.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>Commercial One-Time Settlement (OTS) achieves 40% to 55% debt waivers.</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & LEGAL RATIONALE BEHIND NBW ISSUANCE */}
            <section id="debt-economics-and-nbw-issuance" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  1. Debt Economics &amp; Legal Rationale Behind NBW Issuance
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Defaulting on a personal loan or credit card is fundamentally a civil contract breach under the Indian Contract Act, 1872. However, commercial banks routinely convert unsecured debts into quasi-criminal disputes by depositing post-dated security cheques or presenting electronic NACH mandates collected during disbursement. Following an EMI bounce, lenders issue a statutory demand notice under Section 138(b) of the Negotiable Instruments Act, 1881, followed by a criminal complaint under Section 200 CrPC.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Banks favor criminal complaints over civil suits due to RBI prudential norms. Once an overdue account breaches 90 Days Past Due, it becomes a Non-Performing Asset (NPA), requiring mandatory Tier-1 capital provisioning. Because civil suits take years, lenders use Section 138 trials to exert personal liberty pressure. When postal summons fail to reach borrowers due to changed addresses or flawed process service, Magistrates presume willful evasion and escalate from summons to Non-Bailable Warrants under Section 70 CrPC (Section 72 BNSS).
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The Supreme Court of India in <em>Inder Mohan Goswami v. State of U.P. (2007)</em> and <em>Raghuvansh Dewanchand Bhasin (2012)</em> established that courts must protect personal liberty under Article 21. Non-Bailable Warrants must never be issued mechanically in commercial money disputes without proof of deliberate evasion.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-and-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  2. Financial Breakdown: Penalty Stacking vs Settlement Math
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                During criminal cheque bounce litigation, lender claim statements are heavily inflated. Banks stack overdue interest, bounce fees, monthly penal interest at 24% to 36%, 18% GST, and legal expenses. Consequently, a borrowed principal of ₹6,50,000 frequently doubles into an inflated demand of ₹12,00,000 within 180 days of default.
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-bold text-slate-900 text-sm">Representative NPA Settlement Breakdown (₹12 Lakh Total Claim)</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">55% Total Relief</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-slate-500 block mb-1">Inflated Bank Demand</span>
                    <span className="text-base font-extrabold text-rose-600">₹12,00,000</span>
                    <span className="text-[11px] text-slate-500 block mt-1">Includes ₹5.5L penal fees</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-slate-500 block mb-1">True Principal Core</span>
                    <span className="text-base font-extrabold text-slate-800">₹6,50,000</span>
                    <span className="text-[11px] text-slate-500 block mt-1">Actual borrowed baseline</span>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200/60">
                    <span className="text-blue-700 block mb-1">Target OTS Compromise</span>
                    <span className="text-base font-extrabold text-[#1886ff]">₹5,40,000</span>
                    <span className="text-[11px] text-blue-600 block mt-1">Full penalty waiver + discount</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  Once counsel recalls the NBW and secures bail, the bank loses coercive leverage. This enables bilateral One-Time Settlement (OTS) negotiations to waive penal charges and close the dispute at 40% to 55% of the total claim.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="nbw-recall-vs-alternative-pathways" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  3. Legal Remedy Comparison: NBW Recall vs Alternative Paths
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Evaluating available legal remedies against an active NBW ensures immediate protection from custodial detention while progressing toward debt resolution.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <th className="p-3.5 sm:p-4">Resolution Pathway</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200">Legal Forum</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200">Custodial Risk</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200">Timeline</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200">Case Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Section 70(2) Recall Petition</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Issuing Magistrate Court</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200 text-emerald-600 font-bold">Zero Risk with Surety</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">24 to 48 Hours</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Warrant cancelled; regular bail granted.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">High Court Sec 482 Quashing</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">State High Court</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200 text-blue-600 font-bold">Stay on Police Arrest</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">7 to 15 Days</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Warrant stayed; trial quashed if notice invalid.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Surrender &amp; Bail Application</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Judicial Magistrate / MM</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200 text-emerald-600 font-bold">Released on Bond</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Same Day Hearing</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Bail granted on personal bond &amp; local surety.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">National Lok Adalat OTS</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">NALSA Lok Adalat Bench</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200 text-emerald-600 font-bold">Zero Arrest Risk</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">1 to 3 Weeks</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Full compounding under Sec 147 NI &amp; case closure.</td>
                    </tr>
                    <tr className="hover:bg-rose-50/40 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-rose-700">Ignoring Active NBW</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Police &amp; Criminal Court</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200 text-rose-600 font-bold">Imminent Jail Arrest</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Indefinite Risk</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Sec 82 proclamation &amp; Sec 83 property attachment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-impact-and-credit-score-restoration" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  4. CIBIL Impact: Credit Score Damage and Restoration Plan
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                While an arrest warrant is not directly published to credit bureau feeds, underlying loan defaults severely damage your CIBIL score. CIBIL computes scores based on five core factors: 35% Payment History, 30% Utilization Ratio, 15% History Length, 10% Credit Mix, and 10% Inquiries. Delinquency tags like &quot;Suit Filed&quot; or &quot;Written-Off&quot; drop credit scores from 750+ down to distress ranges (520 to 580).
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Restoring credit requires securing an unconditional No Dues Certificate (NDC) post-settlement. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), submitting the NDC mandates the bureau to update the status to &quot;Closed&quot; or &quot;Settled&quot;. Combined with secured credit builder products, your score can recover to 750+ within 18 to 24 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Infographic: 6-Stage Non-Bailable Warrant Defense Protocol
                </h2>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-slate-950">
                  <Image
                    src="/images/infographics/non-bailable-warrant-cheque-bounce-loan.jpg"
                    alt="Non-Bailable Warrant in Cheque Bounce Defense Roadmap"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 900px"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Authoritative 6-stage protocol covering Section 70(2) recall, surrender bail, and Section 147 compounding.</span>
                  <a
                    href="/images/infographics/non-bailable-warrant-cheque-bounce-loan.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-nbw-recall-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileText className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  5. Step-by-Step SOP: Protocol to Recall NBW and Avoid Arrest
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                CredSettle executes a structured six-stage protocol before Magistrate Courts across India to neutralize arrest risks and achieve legal case dismissal.
              </p>

              <div className="space-y-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">01</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 1: Forensic Docket &amp; Warrant Audit</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    Counsel audits the e-Courts CNR docket, extracts certified order sheets, and verifies whether postal summons were returned unserved or delivered to an outdated address, establishing procedural non-service.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">02</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 2: Hardship Dossier &amp; Solvent Surety Preparation</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    We compile documentation substantiating non-appearance (medical certificates or job transfer records) while arranging local solvent surety proofs and personal bail bonds to fulfill court bail conditions.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">03</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 3: Urgent Section 70(2) Recall Petition Filing</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    Counsel drafts and files an urgent Section 70(2) CrPC recall application with an affidavit, establishing absence was non-willful and citing Supreme Court guidelines in <em>Inder Mohan Goswami</em>.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">04</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 4: Court Appearance, Surrender &amp; Bail Grant</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    Our advocate appears before the Magistrate, surrenders the borrower to court jurisdiction, furnishes bail bonds, and secures an immediate order cancelling the NBW, with copies sent to the local police station.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">05</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 5: Bilateral OTS Negotiations with Bank</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    With arrest risks resolved, CredSettle negotiates directly with the bank Credit Committee to strip unearned penal charges and secure a formal OTS sanction letter offering a 40% to 55% waiver.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">06</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 6: Section 147 Compounding &amp; No Dues Certificate</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    Upon remitting settlement funds, a compounding application under Section 147 NI Act is filed. The court dismisses the complaint, acquits the borrower, and the bank issues a final No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense-and-legal-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <BadgeAlert className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  6. Statutory Notice Defense: Legal Shield Against Section 138
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Borrowers possess strong statutory defenses against defective cheque bounce proceedings. Criminal courts cannot sustain prosecution if the lender failed to meet mandatory legal preconditions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>1. Section 138(b) 30-Day Notice Flaw</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demand notices must be issued within 30 days of cheque dishonor. Failure to serve notice at the valid address or premature filing before the 15-day cure period invalidates prosecution.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>2. Section 25 PSSA Electronic Mandate Limits</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NACH/ECS bounce complaints under Section 25 PSSA must strictly follow statutory notice windows. Repeated presentations without fresh notices violate settled procedure.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span>3. Arbitration Section 21 &amp; Perkins Bar</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the <em>Perkins Eastman</em> ruling, lenders cannot unilaterally appoint sole arbitrators for parallel recovery. Such awards are null, void, and legally unenforceable.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>4. DRT Sec 19 &amp; RBI Harassment Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unsecured loans cannot face property attachment without adjudication. RBI Fair Practices Code strictly prohibits recovery contact before 8:00 AM, after 7:00 PM, or to relatives.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Establishing procedural defects enables your counsel to seek immediate discharge or petition the High Court under Section 482 CrPC to quash the warrant and complaint.
              </p>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-and-quashing-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  7. 3-Tier Escalation Matrix: Trial Court to High Court Quash
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                CredSettle deploys a three-tier legal strategy based on the procedural stage of the warrant and lender cooperation.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 1: Trial Magistrate Section 70(2) Recall Petition</span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 text-[#1886ff] font-bold text-xs">Immediate (24 to 48 Hours)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We appear before the issuing Magistrate, present bona fide grounds for prior non-appearance, furnish personal appearance bonds, and secure same-day recall of the Non-Bailable Warrant.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 2: Sessions Court Revision &amp; Lok Adalat Conciliation</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 font-bold text-xs">Mid-Stage (14 to 30 Days)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    If onerous bail terms are imposed, we file a Criminal Revision under Section 397 CrPC while referring the dispute to the National Lok Adalat for an institutional compromise settlement.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 3: High Court Section 482 Quashing &amp; Stay Petition</span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-bold text-xs">High Court Level (7 to 15 Days)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Where prosecution is time-barred or lacks statutory notice service, we petition the High Court under Section 482 CrPC (Section 528 BNSS) to obtain an interim stay and quash the complaint.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  8. Procedural Timeline: Default to Compounding Milestones
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Understanding Section 138 procedural milestones enables timely legal interventions before coercive warrants are executed.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <th className="p-3.5 sm:p-4">Timeline Milestone</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200">Governing Law</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200">Bank Action</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200">Borrower Protection Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Day 1 to 30: EMI Dishonor</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Sec 138(b) NI Act</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Lender dispatches 30-day legal notice</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Send detailed legal reply explaining hardship.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Day 45 to 60: Court Filing</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Sec 142 NI / Sec 200 CrPC</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Private complaint filed in trial court</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Engage counsel to track CNR docket on e-Courts.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Month 3 to 4: Court Summons</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Sec 61 to 69 CrPC</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Magistrate issues physical summons</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Appear through advocate; seek Section 205 exemption.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Month 5 to 6: Warrant Escalation</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Sec 70 &amp; 71 CrPC</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Bailable warrant followed by NBW order</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">File Section 70(2) recall with local solvent surety.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Month 6+: Resolution &amp; NDC</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Sec 147 NI Act</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Compromise OTS sanctioned by bank</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200">Joint compounding petition filed; complaint dismissed.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-outstation-and-commercial-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <AlertCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  9. Specialized Scenarios: Outstation &amp; Commercial Defaults
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                NBW defense requires specialized tactics when complicated by interstate jurisdictions, corporate roles, or third-party debt assignments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>Outstation Court Jurisdiction Warrants</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    National lenders often file cases in metro hubs. Our local panel advocates file recall petitions and Section 205 appearance exemptions, eliminating interstate travel burdens.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span>Executive Layoffs &amp; Medical Crisis</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For defaults caused by job loss or medical crises, we present verified hardship evidence. Courts routinely recall warrants and grant time for OTS compromise.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Briefcase className="w-4 h-4 text-emerald-600" />
                    <span>MSME Proprietorship &amp; Director Liability</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 141 NI Act, non-executive directors are often wrongly impleaded. We establish non-involvement in daily management to recall warrants against uninvolved partners.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Asset Reconstruction (ARC) Assignments</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When debts are assigned to ARCs, assignees must properly substitute themselves on court records. We challenge defective substitutions to negotiate 50% to 70% OTS waivers.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY SECTION */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Non-Bailable Warrant Defense
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:text-[#1886ff] transition-colors"
                      >
                        <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <BookOpen className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Statutory Citations and Outbound Authority References
                </h2>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                CredSettle legal guidance is rooted in statutory codes, Reserve Bank of India Master Directions, and binding Supreme Court of India precedents:
              </p>

              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p>• <strong>Negotiable Instruments Act, 1881:</strong> Sections 138, 141, 142, 143A &amp; 147 (Compounding of Offenses).</p>
                <p>• <strong>Code of Criminal Procedure, 1973:</strong> Sections 70(2) (Recall of Warrant), 71, 82, 83, 205, 397 &amp; 482 (Inherent Powers of High Court).</p>
                <p>• <strong>Bharatiya Nagarik Suraksha Sanhita, 2023:</strong> Sections 72, 73 &amp; 528 (Modernized Criminal Procedural Code).</p>
                <p>• <strong>Supreme Court Precedents:</strong> <em>Inder Mohan Goswami v. State of U.P. (2007)</em>; <em>Raghuvansh Dewanchand Bhasin v. State of Maharashtra (2012)</em>; <em>Damodar S. Prabhu v. Sayed Babalal H. (2010)</em>.</p>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Official Legislative &amp; Redressal Portals:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
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
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span className="font-semibold truncate">National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Related Legal Guides on CredSettle:</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { title: 'Bailable Warrant for Loan', href: '/bailable-warrant-for-loan-default' },
                    { title: 'Section 138 Cheque Bounce', href: '/cheque-bounce-case-defense-section-138' },
                    { title: 'ECS & NACH Bounce Notice', href: '/ecs-nach-bounce-legal-notice-section-25' },
                    { title: 'Arbitration Notice Defense', href: '/arbitration-notice-personal-loan-default' },
                    { title: 'Can You Go to Jail for Debt', href: '/can-i-go-to-jail-for-loan-default-in-india' },
                    { title: 'Stop Recovery Harassment', href: '/how-to-stop-recovery-agent-harassment' },
                    { title: 'Personal Loan Settlement', href: '/personal-loan-settlement' },
                    { title: 'Lok Adalat Loan Settlement', href: '/lok-adalat-personal-loan-settlement' },
                    { title: 'Credit Card Settlement Process', href: '/credit-card-settlement-process' },
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
                Non-Bailable Warrant Issued by Court?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Connect immediately with CredSettle counsel for emergency Section 70(2) CrPC recall representation and same-day court surrender bail protection.
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
                <span>100% Confidential Legal Defense Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Pan-India Magistrate Court Representation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Section 70(2) Same-Day Warrant Recall</span>
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
