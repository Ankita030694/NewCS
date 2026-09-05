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
  Plane,
  Globe,
  FileCheck2,
  ShieldAlert
} from 'lucide-react';

export default function CanLoanDefaulterGoAbroadClient() {
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
    { id: 'constitutional-rights-civil-debt', label: '1. Constitutional Rights & Civil Debt' },
    { id: 'airport-immigration-checks', label: '2. Airport Immigration Reality' },
    { id: 'debt-category-travel-table', label: '3. Debt Categories & Travel Restrictions' },
    { id: 'lookout-circular-loc-rules', label: '4. MHA Guidelines & High Court LOC Rulings' },
    { id: 'infographic-overview', label: 'Visual Travel Rights Infographic' },
    { id: 'step-by-step-overseas-sop', label: '5. 6-Stage Remote Settlement SOP' },
    { id: 'statutory-notice-defense', label: '6. Statutory Notice Defense & Court Rules' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Escalation & Redressal Matrix' },
    { id: 'chronological-resolution-milestones', label: '8. Chronological Resolution Timeline' },
    { id: 'specialized-overseas-scenarios', label: '9. Specialized Overseas Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a loan defaulter travel abroad or relocate from India?',
      a: 'Yes, a loan defaulter can legally travel abroad or relocate. Defaulting on an unsecured personal loan or credit card is strictly a civil dispute. Under Article 21 of the Constitution of India, the right to travel abroad is a fundamental right that cannot be curtailed solely due to civil financial liabilities or unpaid bank dues.'
    },
    {
      q: 'Can airport immigration stop a borrower for an unpaid personal loan or credit card?',
      a: 'No, airport immigration officers cannot stop or detain you for unpaid personal loans or credit cards. Immigration authorities check passports and visas against law enforcement watchlists and court-ordered Lookout Circulars (LOCs). Commercial banks and recovery agencies have zero legal authority to flag your passport at airport departure counters.'
    },
    {
      q: 'What is a Lookout Circular (LOC) and can banks issue one for personal loan default?',
      a: 'A Lookout Circular (LOC) is an official border control directive issued through the Ministry of Home Affairs to track or detain individuals involved in cognizable criminal offenses or major economic fraud. Public and private sector banks cannot issue an LOC for ordinary commercial personal loan defaults, as affirmed by landmark High Court rulings.'
    },
    {
      q: 'Does an active loan default or low CIBIL score affect overseas visa approval?',
      a: 'No. Foreign embassies, consulates, and international immigration departments do not access domestic Indian credit bureaus like CIBIL, Experian, or CRIF High Mark. Visa applications require proof of funds, sponsorship, and clean criminal background verification (PCC), which remain completely unaffected by domestic civil loan defaults.'
    },
    {
      q: 'What happens if a Section 138 cheque bounce or Section 25 NACH case is pending when traveling abroad?',
      a: 'A pending Section 138 NI Act or Section 25 PSSA case is a bailable quasi-criminal proceeding that does not automatically bar overseas travel. However, you must engage legal counsel to file an application for personal exemption or appearance through advocate under Section 205 CrPC (or BNSS equivalent) to prevent non-bailable warrants.'
    },
    {
      q: 'Can recovery agents contact or harass me while I am working overseas?',
      a: 'Recovery agents cannot legally harass you abroad or intimidate family members residing in India. Under the RBI Master Direction on Fair Practices Code, harassing calls at odd hours, threatening airport arrest, contacting overseas employers, or sharing private debt details violates banking regulations and attracts penal action via the RBI Banking Ombudsman.'
    },
    {
      q: 'Can a Debts Recovery Tribunal (DRT) impound a defaulter passport?',
      a: 'A Debts Recovery Tribunal (DRT) only handles claims exceeding 20 Lakh Rupees and cannot directly seize a passport. Under Section 19(12) of the Recovery of Debts and Bankruptcy Act, a DRT Presiding Officer may require a borrower to surrender their passport only upon concrete evidence of deliberate absconding or intentional asset dissipation.'
    },
    {
      q: 'How can an NRI or borrower living abroad settle unpaid Indian bank loans?',
      a: 'An NRI or borrower living overseas can settle Indian bank loans remotely through a bilateral One-Time Settlement (OTS). By engaging a specialized debt resolution company, you can negotiate substantial penal interest waivers (40% to 70%), verify formal sanction letters, remit funds directly to the bank account, and secure an official No Dues Certificate.'
    },
    {
      q: 'Is a Power of Attorney (PoA) required for settling debt from outside India?',
      a: 'Executing a Special Power of Attorney (PoA) is highly recommended for overseas borrowers. An attested Special PoA authorizes a trusted family member or debt resolution representative in India to inspect loan records, attend bank committee meetings, sign compromise documentation, and collect original title documents or No Dues Certificates on your behalf.'
    },
    {
      q: 'How is a settled loan updated in CIBIL after remote settlement from abroad?',
      a: 'Following complete remittance of the agreed settlement sum, the lending institution updates the loan status with credit bureaus (CIBIL, Experian, Equifax, CRIF) to Settled or Post-Settlement Closed within 30 to 45 days. You can also file a formal dispute under Section 21 of CICRA 2005 to ensure accurate closure reporting.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-semibold mb-4 backdrop-blur-xs">
            <Globe className="w-3.5 h-3.5 text-blue-200" />
            <span>International Travel Rights &amp; Cross-Border Debt Resolution</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can a Loan Defaulter Go Abroad? Airport Immigration and LOC Rules
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Unpack the legal reality of traveling overseas with unpaid personal loans or credit cards. Learn why airport arrest threats are unlawful, how Lookout Circulars work under Ministry of Home Affairs guidelines, and how to execute a remote settlement from abroad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Traveling Abroad with Outstanding Debt? Get Legal Protection</span>
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
                      className={`block py-1.5 px-2.5 rounded-lg transition-all leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-2 border-[#1886ff]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with #1886ff left border) */}
            <div
              id="quick-crux"
              className="scroll-target p-6 rounded-2xl border border-blue-100 shadow-xs space-y-4"
              style={{ backgroundColor: '#F4F8FE', borderLeft: '5px solid #1886ff' }}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Executive Summary: Can a Loan Defaulter Travel or Relocate Abroad?
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Thousands of Indian professionals and students face aggressive recovery agent intimidation claiming that unpaid personal loans or credit cards will result in airport arrest or passport confiscation. Indian jurisprudence and immigration protocols establish unambiguous safeguards for cross-border travelers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Fundamental Right to Travel:</strong> Article 21 guarantees overseas travel, which cannot be restricted purely over civil banking defaults.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Airport Powers for Banks:</strong> Lenders and recovery collection agencies hold zero authority to issue airport stop orders or detain flyers.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Narrow LOC Thresholds:</strong> Lookout Circulars are restricted to cognizable economic crimes and deliberate fraud under MHA directives.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>High Court Safeguards:</strong> Landmark judicial rulings have repeatedly struck down arbitrary LOC requests filed by public sector banks.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Embassy Visa Independence:</strong> Foreign visa consulates review PCC and financial proofs, never accessing domestic Indian CIBIL records.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 205 CrPC Protection:</strong> Pending cheque bounce cases can be handled through an advocate without requiring physical court presence.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Remote Settlement Mechanism:</strong> Borrowers can execute a Power of Attorney to negotiate a 40% to 70% One-Time Settlement from overseas.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Code Enforcement:</strong> Threatening airport arrest or calling international workplaces is an actionable offense under RBI Fair Practices Code.</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: Debt Economics, Constitutional Rights & Civil Nature of Default */}
            <section id="constitutional-rights-civil-debt" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Constitutional Travel Safeguards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics, Fundamental Rights &amp; Civil Law Realities
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When financial distress strikes due to job loss, medical emergencies, or business volatility, unsecured personal loans and credit cards often turn into Non-Performing Assets (NPAs) after 90 days of continuous non-payment. During this vulnerable phase, borrowers frequently receive alarming communications from collection agencies asserting that defaulting on bank debt automatically revokes their right to travel outside India. Under Indian jurisprudence, these assertions are entirely baseless and legally unfounded.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India in the historic seven-judge bench ruling in <em>Maneka Gandhi v. Union of India (1978)</em> established that the right to travel abroad is an integral component of personal liberty guaranteed under Article 21 of the Constitution of India. This fundamental right cannot be curtailed through administrative overreach or private commercial disputes. A commercial loan default between a borrower and a regulated lending institution is strictly a civil dispute arising from a breach of contract under the Indian Contract Act, 1872. Commercial banks, Non-Banking Financial Companies (NBFCs), and recovery third parties possess zero sovereign policing authority and cannot restrict personal mobility.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders have the statutory right to institute civil recovery suits, file summary suits under Order XXXVII of the Code of Civil Procedure (CPC), initiate private arbitration under Section 21 of the Arbitration and Conciliation Act, 1996, or approach the Debts Recovery Tribunal (DRT) for claims exceeding 20 Lakh Rupees. However, civil money recovery actions do not convert genuine financial inability into a cognizable criminal offense. Unless a borrower has engaged in deliberate criminal fraud, forgery, or money laundering, non-payment of an unsecured debt does not justify any international travel embargo.
              </p>
            </section>

            {/* SECTION 2: Airport Immigration Reality & Bureau of Immigration Protocols */}
            <section id="airport-immigration-checks" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Plane className="w-4 h-4 text-[#1886ff]" />
                <span>Airport Immigration Operations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Airport Immigration Reality: How Bureau of Immigration (BOI) Actually Operates
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A common scare tactic employed by aggressive collection agents involves fabricating stories of immigration officers detaining borrowers at international departure terminals in Delhi, Mumbai, Bengaluru, or Hyderabad. To understand why this is a legal impossibility, one must examine how the Bureau of Immigration (BOI), functioning under the Ministry of Home Affairs, processes passenger clearances at international borders.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Immigration authorities at airport checkpoints scan your passport to cross-reference travel documents against centralized government security databases, international INTERPOL red notices, active criminal warrants issued by judicial magistrates, and official Lookout Circulars (LOCs). The Bureau of Immigration does not connect to credit information bureaus like CIBIL, Experian, or Equifax, nor does it maintain records of outstanding credit cards, personal loans, vehicle loans, or overdue EMIs. Immigration officers are civil service border control professionals whose statutory mandate is national security, immigration compliance, and judicial warrant execution, not private bank debt collection.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, foreign visa issuing authorities, including consulates for the United States (USCIS), United Kingdom (UKVI), European Schengen zone, Canada (IRCC), and Gulf Cooperation Council (GCC) nations, evaluate applicants on visa-specific criteria. Consular officers verify the validity of your passport, biometric records, clean Police Clearance Certificate (PCC) certifying the absence of pending criminal convictions, and adequate funds for the intended stay. Foreign consulates have neither the jurisdiction nor the technical infrastructure to pull domestic Indian credit reports, ensuring that personal debt defaults have zero impact on overseas visa adjudication.
              </p>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="debt-category-travel-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck2 className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Debt Categories &amp; International Travel Restrictions Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legal repercussions on foreign travel vary substantially depending on the nature of the debt, the judicial forum handling the dispute, and whether criminal procedures have been invoked:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse divide-x divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 sm:p-4">Debt / Dispute Category</th>
                      <th className="p-3.5 sm:p-4">Legal Classification</th>
                      <th className="p-3.5 sm:p-4">Airport Immigration Impact</th>
                      <th className="p-3.5 sm:p-4">Passports Act Restraint</th>
                      <th className="p-3.5 sm:p-4">Recommended Legal Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Unsecured Personal Loans</td>
                      <td className="p-3.5 sm:p-4">Pure Civil Breach of Contract</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Zero Impact (Unrestricted Exit)</td>
                      <td className="p-3.5 sm:p-4">No Statutory Grounds for Impoundment</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-medium">Bilateral One-Time Settlement (OTS)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Defaulted Credit Card Dues</td>
                      <td className="p-3.5 sm:p-4">Unsecured Revolving Credit Default</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Zero Impact (Unrestricted Exit)</td>
                      <td className="p-3.5 sm:p-4">No Statutory Grounds for Impoundment</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-medium">Waiver of Penal Charges via Bank PNO</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Section 138 NI Act (Cheque Bounce)</td>
                      <td className="p-3.5 sm:p-4">Quasi-Criminal Bailable Offense</td>
                      <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">Clear unless NBW is actively issued</td>
                      <td className="p-3.5 sm:p-4">Section 6(2)(f) applies if court prohibits</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-medium">File Section 205 CrPC Exemption via Advocate</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">DRT Proceedings (&gt; ₹20 Lakhs)</td>
                      <td className="p-3.5 sm:p-4">Statutory Civil Debt Recovery</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Clear unless DRT passes Sec 19(12) Order</td>
                      <td className="p-3.5 sm:p-4">Surrender only on specific tribunal decree</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-medium">Appear through counsel &amp; seek Lok Adalat OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Major Economic Fraud / SFIO / CBI</td>
                      <td className="p-3.5 sm:p-4">Cognizable Criminal Economic Offense</td>
                      <td className="p-3.5 sm:p-4 text-red-700 font-semibold">High Risk (Active LOC &amp; Detention)</td>
                      <td className="p-3.5 sm:p-4">Passport Impounded under Section 10(3)</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-medium">High Court Writ Petition under Article 226</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical Legal MHA Guidelines & High Court LOC Rulings */}
            <section id="lookout-circular-loc-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; LOC Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Ministry of Home Affairs (MHA) Guidelines &amp; High Court LOC Precedents
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A frequent source of anxiety among borrowers involves the concept of a Lookout Circular (LOC). Historically, the Ministry of Home Affairs issued an Office Memorandum in 2018 enabling Chairman and Managing Directors of Public Sector Banks (PSBs) to request LOCs against individuals whose departure was perceived to be detrimental to the economic interests of India. However, this power was repeatedly abused by banks attempting to use border control machinery as a recovery arm for ordinary commercial loans.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The constitutional validity of this practice was decisively challenged before constitutional courts. In the landmark judgment of <em>Viraj Chetan Shah v. Union of India (2024)</em>, the Division Bench of the High Court of Bombay quashed the clause empowering public sector bank chairmen to issue LOCs, declaring it unconstitutional and violative of Articles 14 and 21. The Court unequivocally held that commercial banks cannot curtail a citizen fundamental right to travel abroad simply to recover contractual debts in the absence of a registered cognizable criminal investigation or statutory court order.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under current MHA guidelines and established judicial precedents, an LOC can only be legitimately generated by law enforcement agencies (such as CBI, ED, SFIO, or State Police) when a First Information Report (FIR) has been registered for severe criminal breach of trust (Section 406 IPC / Section 316 BNS), cheating (Section 420 IPC / Section 318 BNS), or large-scale financial fraud involving national public interest. Standard unsecured personal loan defaults and credit card balances do not satisfy these statutory thresholds.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Regarding the Passports Act, 1967, Section 6(2)(f) and Section 10(3)(e) empower Passport Authorities to refuse or impound a passport only when formal criminal proceedings are pending before a criminal court in India, or when a non-bailable arrest warrant or summons for appearance has been issued. A standard civil notice, loan demand notice, or bank arbitration proceeding does not confer any legal right upon the Regional Passport Office (RPO) to impound or cancel a borrower travel documents.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Guide: Travel Rights &amp; Cross-Border Debt Architecture
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This infographic synthesizes constitutional travel rights, the clear demarcation between civil debt default and criminal economic offenses, MHA Lookout Circular boundaries, and the remote debt resolution framework:
              </p>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 sm:p-6 overflow-hidden space-y-4">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                  <Image
                    src="/images/infographics/can-loan-defaulter-go-abroad.jpg"
                    alt="Can a Loan Defaulter Go Abroad from India Legal Rights and Immigration Architecture"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-slate-500">
                  <span>Figure 1.0: Comprehensive overview of international departure safeguards, legal thresholds, and remote settlement pathways.</span>
                  <a
                    href="/images/infographics/can-loan-defaulter-go-abroad.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>View High-Resolution</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-overseas-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Overseas Travel &amp; Remote Debt Settlement Architecture
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you are planning to relocate overseas or are already living outside India with unresolved banking liabilities, adhering to a structured six-stage resolution roadmap safeguards your legal standing and financial future:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-extrabold text-xs">
                      01
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Stage 1: Comprehensive Loan &amp; Judicial Warrant Audit
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prior to overseas travel, conduct a thorough forensic audit of all active loan accounts, credit cards, and pending judicial notices. Verify whether any lender has instituted proceedings under Section 138 of the Negotiable Instruments Act or Section 25 of the Payments and Settlement Systems Act in local magistrate courts. Ensure no non-bailable warrants exist on judicial dockets.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-extrabold text-xs">
                      02
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Stage 2: Execution of Special Power of Attorney (PoA)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Draft and execute a legally validated Special Power of Attorney under the Powers of Attorney Act, 1882. Appoint a trusted relative, legal counsel, or authorized debt resolution professional in India. If executed abroad, get the document attested by the Indian Embassy or Consulate and adjudicated before the District Sub-Registrar in India within statutory timelines.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-extrabold text-xs">
                      03
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Stage 3: Legal Representation &amp; Personal Exemption Filings
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If bailable quasi-criminal summons under Section 138 or Section 25 are active, instruct your appointed advocate to file a vakalatnama along with an application under Section 205 CrPC (or Bharatiya Nagarik Suraksha Sanhita equivalent). This formally requests personal exemption from physical court appearances, ensuring proceedings continue seamlessly through legal counsel without warrant escalations.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-extrabold text-xs">
                      04
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Stage 4: Bilateral One-Time Settlement (OTS) Negotiations
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Your debt resolution professionals present a verifiable financial hardship dossier to the bank Settlement Advisory Committee and Principal Nodal Officer. Negotiations strip away inflated penal interest, compounded late fees, and overdue charges, establishing a realistic compromise settlement figure typically between 40% and 60% of the legitimate principal outstanding.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-extrabold text-xs">
                      05
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Stage 5: Forensic Verification of Formal Bank Sanction Letter
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never transfer settlement funds based on verbal promises or unverified emails from collection agents. Demand an official, system-generated compromise settlement sanction letter issued on the bank official letterhead. The document must explicitly stipulate the agreed settlement sum, structured payment schedule, waiver breakdown, and commitment to withdraw all pending legal notices.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-extrabold text-xs">
                      06
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Stage 6: Direct Remittance, No Dues Certificate &amp; CIBIL Rectification
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Remit the agreed settlement amount directly from your NRE/NRO bank account or domestic Indian account into the designated loan account. Within 30 days of final remittance, obtain an official No Dues Certificate (NDC) or No Objection Certificate (NOC). Ensure the bank files formal withdrawal memos in judicial forums and updates credit bureaus to Closed or Settled status.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense, Quasi-Criminal Procedures &amp; Legal Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When managing debt disputes from overseas, understanding the specific statutory mechanisms invoked by Indian financial institutions is vital for maintaining legal compliance:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                    Section 138 Negotiable Instruments Act (Cheque Bounce)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If an undated security cheque submitted during loan onboarding is presented and dishonored, lenders may issue a statutory notice under Section 138 of the NI Act within 30 days of receipt of the bank return memo. This is a bailable quasi-criminal proceeding. An advocate can appear under Section 205 CrPC to defend the case or refer the matter to National Lok Adalat for a compromise settlement without requiring your personal presence.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    Section 25 Payments &amp; Settlement Systems Act (NACH Bounce)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Dishonor of an electronic National Automated Clearing House (NACH) mandate or e-mandate attracts proceedings under Section 25 of the PSSA, 2007, which parallels the legal framework of Section 138. Receiving a Section 25 notice does not trigger airport immigration alerts or border stops. You have 15 days from notice receipt to reply, dispute unauthorized presentations, or seek an amicable settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    Debts Recovery Tribunal (DRT) Section 19 Powers
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    For debt exposures exceeding 20 Lakh Rupees, banks can file an Original Application (OA) before the DRT under Section 19 of the Recovery of Debts and Bankruptcy Act, 1993. Under Section 19(12), a DRT Presiding Officer can direct passport surrender only when the bank conclusively demonstrates that the defendant is attempting to transfer assets or abscond to defeat decree execution.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    RBI Fair Practices Code Against Cross-Border Intimidation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The RBI Master Direction on Fair Practices Code strictly prohibits lenders and recovery agents from calling borrowers before 8:00 AM or after 7:00 PM, making threatening international calls, contacting foreign employers or colleagues, or intimidating aged parents and relatives in India. Violations can be escalated directly to the RBI Banking Ombudsman for immediate regulatory censure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix Against Recovery Harassment &amp; Illegal Travel Threats
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If collection agencies subject you or your family to illegal airport arrest threats or abusive communications, initiate formal grievance escalation through regulated statutory channels:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider">Tier 1: Internal</div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Grievance Redressal Officer (GRO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written complaint detailing call recordings, harassment timestamps, and agent agent IDs. Under RBI mandates, the bank GRO must investigate and provide a formal written resolution within 7 to 10 working days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider">Tier 2: Institutional</div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Principal Nodal Officer (PNO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the GRO fails to resolve unlawful travel intimidation, escalate the matter to the bank Principal Nodal Officer. The PNO has executive authority to suspend third-party recovery agencies and initiate formal One-Time Settlement discussions within 14 to 21 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider">Tier 3: Regulatory</div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">RBI Integrated Ombudsman (CMS)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank remains unresponsive after 30 days, file an online complaint at cms.rbi.org.in under the Reserve Bank - Integrated Ombudsman Scheme, 2021. The Ombudsman can award compensation up to 20 Lakh Rupees for severe mental harassment and unfair debt collection practices.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timeline: From Default to Remote Overseas Debt Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The lifecycle of an unresolved debt transitioning into a successful remote settlement follows structured procedural milestones:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse divide-x divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 sm:p-4">Timeline Period</th>
                      <th className="p-3.5 sm:p-4">Loan Account Classification</th>
                      <th className="p-3.5 sm:p-4">Bank Operational Action</th>
                      <th className="p-3.5 sm:p-4">Strategic Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Days 1 – 30</td>
                      <td className="p-3.5 sm:p-4">SMA-0 (Special Mention Account)</td>
                      <td className="p-3.5 sm:p-4">Automated SMS, emails, and gentle payment reminders</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-semibold">Communicate financial hardship in writing</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Days 31 – 90</td>
                      <td className="p-3.5 sm:p-4">SMA-1 &amp; SMA-2 Classification</td>
                      <td className="p-3.5 sm:p-4">Collection agent outbound calling and field visits</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-semibold">Execute Special Power of Attorney (PoA)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Day 90+</td>
                      <td className="p-3.5 sm:p-4">Non-Performing Asset (NPA)</td>
                      <td className="p-3.5 sm:p-4">100% provisioning allocation; legal notices issued</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-semibold">Engage debt resolution professionals for OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Months 4 – 5</td>
                      <td className="p-3.5 sm:p-4">Active Bilateral Negotiation Window</td>
                      <td className="p-3.5 sm:p-4">Credit Committee reviews compromise settlement proposals</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-semibold">Secure official settlement sanction letter with 40%–70% waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Month 6</td>
                      <td className="p-3.5 sm:p-4">Full Closure &amp; No Dues Issuance</td>
                      <td className="p-3.5 sm:p-4">Issuance of NDC and withdrawal of court/tribunal memos</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-semibold">Obtain NDC and verify CIBIL status updated to Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-overseas-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Students, GCC Job Seekers, Remote PoA &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cross-border debt resolution involves distinct institutional and operational nuances across different borrower profiles:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#1886ff]" />
                    Students Traveling Overseas on F-1, UK Student or Study Permits
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Students who hold defaulted credit cards or consumer loans taken before receiving an international university admit can travel without immigration hurdles. Foreign universities and embassy visa desks verify academic credentials, tuition funding, and police records, not domestic personal loan statuses.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#1886ff]" />
                    Professionals Relocating to UAE, Saudi Arabia, Singapore or Europe
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Professionals relocating for employment frequently worry that bank notices will reach their overseas employers. Indian banks have zero extraterritorial jurisdiction and cannot deduct salaries abroad. Executing a remote settlement clears Indian financial obligations while building savings overseas.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Loans Assigned to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When Indian banks sell defaulted retail portfolios to ARCs (such as Phoenix ARC, Invent ARC, or CFM ARC), the ARC acquires the debt at steep portfolio discounts (often 20% to 30% of face value). ARCs are commercially driven entities and readily approve deep compromise settlements for overseas borrowers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Remote Settlement via Embassy Attested Power of Attorney
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Non-Resident Indians (NRIs) and expatriates can easily settle Indian loans without visiting India. By executing a Special PoA attested at the local Indian Consulate, an authorized representative in India conducts negotiations, verifies settlement letters, and collects the physical No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Loan Defaults &amp; Going Abroad
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal answers verified by our legal and debt resolution professionals:
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

            {/* SECTION 13: Regulatory Sources & Authorities */}
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
                  <strong>Constitution of India:</strong> Article 21 (Protection of Life and Personal Liberty - Right to Travel Abroad as upheld in <em>Maneka Gandhi v. Union of India, 1978 AIR 597</em>).
                </li>
                <li>
                  <strong>High Court of Bombay:</strong> <em>Viraj Chetan Shah v. Union of India (2024)</em> (Quashing powers of Public Sector Bank Chairmen to issue arbitrary Lookout Circulars).
                </li>
                <li>
                  <strong>Passports Act, 1967:</strong> Sections 6(2) and 10(3), Ministry of External Affairs, Government of India.
                </li>
                <li>
                  <strong>Negotiable Instruments Act, 1881 &amp; PSSA 2007:</strong> Section 138 and Section 25 (Bailable statutory provisions for financial instrument dishonor).
                </li>
                <li>
                  <strong>Reserve Bank of India:</strong> Master Direction on Fair Practices Code for Lenders and Reserve Bank - Integrated Ombudsman Scheme, 2021.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 flex flex-wrap gap-2">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>rbi.org.in</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>cms.rbi.org.in</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>cibil.com</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>indiacode.nic.in</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>nalsa.gov.in</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>cybercrime.gov.in</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

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
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
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
                Specialized in cross-border debt resolution, banking compliance, international borrower protection, and NPA settlement negotiations across Indian financial and judicial forums.
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

            {/* Card 2: Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Traveling Abroad with Active Debt?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts protect your travel rights, stop recovery harassment, represent your case in India, and negotiate a 40% to 70% loan waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Traveling Abroad with Outstanding Debt? Get Legal Protection
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
                  <span><strong>Pan-India &amp; NRI Representation:</strong> Dedicated debt resolution specialists.</span>
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
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step notice defense blueprint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral appointments &rarr;</span>
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
