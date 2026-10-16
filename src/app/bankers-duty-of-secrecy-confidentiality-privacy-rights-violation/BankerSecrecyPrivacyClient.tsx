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
  Landmark,
  ShieldAlert,
  EyeOff,
  UserX
} from 'lucide-react';

export default function BankerSecrecyPrivacyClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Key Principles' },
    { id: 'legal-foundation', label: '1. Legal Foundation & Statutory Duty' },
    { id: 'tournier-rule', label: '2. Tournier Rule: Four Strict Exceptions' },
    { id: 'privacy-violations', label: '3. Common Recovery Agent Privacy Violations' },
    { id: 'comparative-matrix', label: '4. Permissible vs Unlawful Acts Matrix' },
    { id: 'statutory-shields', label: '5. Statutory Shields: DPDP, IT Act & BNS' },
    { id: 'supreme-court-precedents', label: '6. Supreme Court Privacy Precedents' },
    { id: 'visual-blueprint', label: '7. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '8. 6-Stage Borrower Response Protocol' },
    { id: 'regulatory-escalation', label: '9. RBI Ombudsman & Redressal Matrix' },
    { id: 'ots-negotiations', label: '10. Strategic OTS Debt Settlement Leverage' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a banker duty of secrecy and confidentiality under Indian law?',
      a: 'The banker duty of secrecy is an implied contractual and statutory obligation requiring banks to maintain total confidentiality regarding customer account details, loan status, transactions, and personal information. Governed by common law Tournier principles, Section 13 of the Banking Companies Act, Section 44 of the SBI Act, and Article 21 of the Constitution, banks cannot disclose customer details to unauthorized third parties.'
    },
    {
      q: 'Can a bank or recovery agent call my employer or HR about my loan default?',
      a: 'No. Contacting an employer, HR department, or workplace colleagues to disclose personal debt or demand salary deductions without a court attachment order is strictly prohibited under the RBI Charter of Customer Rights and Fair Practices Code. Such disclosures violate privacy rights and constitute criminal defamation under Section 356 of BNS 2023.'
    },
    {
      q: 'What are the four lawful exceptions to the banker duty of secrecy?',
      a: 'Under the landmark Tournier doctrine recognized by Indian courts, banks may disclose customer details only under four strict exceptions: (1) compulsion of law (formal court orders, tax summons), (2) duty to the public (national security, fraud prevention), (3) the bank own interests (filing legal recovery suits in court), and (4) express written consent of the customer.'
    },
    {
      q: 'Is it illegal for recovery agents to create WhatsApp groups with my contacts?',
      a: 'Yes. Scraping phone contacts and creating social messaging groups to humiliate or coerce a borrower is a direct criminal offense under Section 72A of the Information Technology Act, 2000, Section 351 and 356 of BNS 2023, and violates RBI Digital Lending Guidelines.'
    },
    {
      q: 'Can a bank publish a defaulting borrower photograph in newspapers?',
      a: 'No, unless the borrower has been officially declared a Wilful Defaulter after following the mandatory Identification and Review Committee process under RBI Master Directions. The Madras High Court and Calcutta High Court have ruled that publishing photographs of ordinary personal or business borrowers violates their constitutional right to privacy and human dignity.'
    },
    {
      q: 'What penalties apply to banks for violating customer data privacy under the DPDP Act 2023?',
      a: 'Under the Digital Personal Data Protection Act, 2023, banks act as Data Fiduciaries. Unauthorized disclosures, illegal sharing with third-party telemarketers, or failure to secure borrower financial data can attract financial penalties up to ₹250 Crores imposed by the Data Protection Board of India.'
    },
    {
      q: 'Can I file a police FIR against bank recovery agents for privacy breaches?',
      a: 'Yes. If collection agents leak your financial distress to neighbors, harass your family, or send abusive messages, you can lodge a police complaint under Section 356 (Criminal Defamation), Section 351 (Criminal Intimidation), and Section 79 of Bharatiya Nyaya Sanhita, 2023, along with Section 72A of the IT Act.'
    },
    {
      q: 'How do I file an RBI Ombudsman complaint for a privacy violation by a bank?',
      a: 'Submit a formal written complaint to the bank Principal Nodal Officer (PNO). If the bank fails to resolve the violation within 30 days, file an online petition before the RBI Integrated Ombudsman at cms.rbi.org.in. The Ombudsman can award compensation up to ₹20 Lakhs for actual losses plus ₹1 Lakh for mental harassment.'
    },
    {
      q: 'Can a customer use bank privacy violations to negotiate a One-Time Settlement (OTS)?',
      a: 'Yes. When a bank or its contracted recovery agency violates statutory secrecy rules and faces regulatory liability, borrowers gain significant legal leverage. CredSettle uses documented privacy breaches to halt harassment and negotiate favorable One-Time Settlements (OTS) with waivers between 50% and 75% on outstanding unsecured loans.'
    },
    {
      q: 'Does the banker duty of secrecy continue after an account is closed or defaulted?',
      a: 'Yes. The duty of secrecy continues indefinitely even after the banker-customer contract ends, the account is closed, or the loan becomes a Non-Performing Asset (NPA). Confidentiality survives account termination and binds the bank perpetually.'
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
            <Lock className="w-3.5 h-3.5" />
            <span>Customer Privacy Shield &amp; Statutory Secrecy Law</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Banker Duty of Secrecy &amp; Customer Privacy Violation Law
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            An authoritative legal guide for Indian borrowers facing unlawful debt exposure. Learn how the Tournier doctrine, Banking Companies Act, DPDP Act 2023, and RBI guidelines protect your financial confidentiality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Privacy Rights</span>
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
                  <span>Statutory Secrecy Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Enforcing Tournier rules, Section 13 Banking Companies Act, and Article 21 Privacy Rights.
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
                <span>EXECUTIVE BRIEF: BANKER SECRECY &amp; BORROWER PRIVACY RIGHTS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Implied Contractual &amp; Statutory Duty:</strong> Banks owe an absolute duty of confidentiality regarding all account balances, credit transactions, and personal details under Indian banking laws.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Only Four Strict Exceptions:</strong> Under the Tournier doctrine, disclosure is permitted only under compulsion of law, public duty, the bank own court actions, or express customer consent.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Third-Party Leaks are Illegal:</strong> Calling employers, creating WhatsApp shame groups, or disclosing debts to relatives violates Section 72A of the IT Act and constitutes criminal defamation under BNS Section 356.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Constitutional Right to Privacy:</strong> The Supreme Court in Puttaswamy and Canara Bank confirmed financial privacy is an integral fundamental right under Article 21.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Powerful OTS Settlement Leverage:</strong> Documented privacy violations create major legal liability for banks, empowering borrowers to negotiate 50% to 75% debt waivers through CredSettle.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Foundation */}
            <section id="legal-foundation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Banking Principles</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Foundation: Banker Duty of Confidentiality
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When opening a savings or loan account, customers place high trust in their financial institution. Under Indian law, the relationship between a banker and customer is contractual, fiduciary, and confidential. The bank promises to keep all financial information secret from external parties.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This duty of secrecy is not merely an ethical guideline. It is a binding legal obligation codified in central banking legislation. Section 13 of the Banking Companies (Acquisition and Transfer of Undertakings) Act, 1970 and 1980 mandates that nationalized banks must observe practices customary among bankers. In particular, banks must not divulge customer affairs except under lawful circumstances.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Similarly, Section 44 of the State Bank of India Act, 1955 imposes an obligation of fidelity and secrecy on SBI employees. The Reserve Bank of India (RBI) reinforces this duty through its Charter of Customer Rights. The Charter establishes the Right to Privacy as one of five core consumer protections, stating personal information must remain confidential unless disclosure is required by law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Importantly, this confidentiality obligation does not terminate when an account defaults or closes. Even if a loan enters Non-Performing Asset (NPA) status, the banker duty of secrecy remains perpetual. Banks and their outsourced collection partners cannot broadcast loan delinquency to coerce repayments.
              </p>
            </section>

            {/* SECTION 2: The Tournier Rule */}
            <section id="tournier-rule" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Tournier Doctrine</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The Tournier Rule: Four Strict Legal Exceptions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The common law origin of banker secrecy stems from the historic English ruling in Tournier v. National Provincial and Union Bank of England [1924] 1 KB 461. Indian courts universally apply the Tournier doctrine to assess whether an account disclosure is lawful or actionable.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the Tournier case, the Court of Appeal established that a bank owes an implied contractual duty of confidentiality to its constituents. However, the court recognized four narrow exceptions where disclosure is legally justified:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Compulsion of Law
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Disclosure is permissible when ordered by a court or statutory authority under specific legal provisions. Examples include Section 91 of Bharatiya Nagarik Suraksha Sanhita (BNSS), Section 131 of the Income Tax Act, or court subpoenas. Informal requests from local police without formal warrants do not qualify.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Duty to the Public
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A bank may disclose customer information when higher public interests require it. This applies to investigating treason, terror financing, or major financial frauds investigated under the Prevention of Money Laundering Act (PMLA). It never justifies disclosing ordinary consumer loan defaults.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Bank Own Interest
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A bank may reveal account facts only to the extent necessary to enforce its own legal rights. This includes stating loan balances in formal court pleadings, summary suits under Order 37 CPC, or Debt Recovery Tribunal (DRT) claims. It does not permit public shaming or third-party intimidation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Express Customer Consent
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Disclosure is lawful when the customer provides clear, informed, and written consent. While loan agreements include standard data-sharing clauses for credit rating bureaus like CIBIL, they do not grant banks permission to broadcast debts to employers, friends, or social contacts.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: Common Recovery Agent Privacy Violations */}
            <section id="privacy-violations" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Unlawful Practices &amp; Misconduct</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Common Privacy Violations by Recovery Agents
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers default on personal loans or credit cards, recovery agents often resort to unlawful collection methods. Instead of using statutory judicial channels, collection agencies intentionally leak borrower debts to destroy privacy and create unbearable social pressure.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The most frequent secrecy breaches encountered by Indian borrowers include:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <UserX className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Workplace &amp; Employer Intimidation</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Agents call human resources desks, office switchboards, or senior managers to disclose overdue loan balances. They may demand illegal salary deductions without an attachment order. This directly breaches RBI outsourcing guidelines and harms the borrower professional standing.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <EyeOff className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Social Media &amp; WhatsApp Harassment Groups</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Digital loan recovery agents scrape contact lists and create WhatsApp or Telegram groups adding family, friends, and colleagues. They circulate loan statements and photos, committing cyber harassment under Section 72A of the IT Act.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Neighbor &amp; Housing Society Shaming</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Recovery personnel visit residential societies and speak loudly to security guards or neighbors about unpaid dues. Some paste debt notices on doors or society notice boards. These acts constitute criminal defamation under Section 356 of BNS 2023.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Unauthorized Public Newspaper Notices</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Some financial institutions publish defaulter names and photographs in local newspapers without formal wilful defaulter adjudication. High Courts have repeatedly held this practice unconstitutional for non-wilful consumer borrowers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: Comparative Matrix */}
            <section id="comparative-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Compliance Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Comparative Matrix: Permissible vs Illegal Acts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The boundary between lawful debt recovery and illegal privacy violation is clearly defined by regulatory standards. The comparative matrix below highlights permissible bank actions versus unlawful disclosures.
              </p>

              <div className="overflow-x-auto w-full -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-4">Recovery Action</th>
                      <th className="p-3 sm:p-4">Legal Status</th>
                      <th className="p-3 sm:p-4">Statutory Basis</th>
                      <th className="p-3 sm:p-4">Borrower Legal Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="bg-blue-50/20">
                      <td className="p-3 font-semibold text-slate-900">Reporting default to CIBIL or Experian</td>
                      <td className="p-3 text-emerald-600 font-bold">Permissible</td>
                      <td className="p-3">CICRA Act, 2005 (Sec 20)</td>
                      <td className="p-3">Verify accuracy or settle for updated record.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Filing recovery suit in Civil Court or DRT</td>
                      <td className="p-3 text-emerald-600 font-bold">Permissible</td>
                      <td className="p-3">Order 37 CPC / RDDBFI Act</td>
                      <td className="p-3">File Leave to Defend or OTS petition.</td>
                    </tr>
                    <tr className="bg-rose-50/30">
                      <td className="p-3 font-semibold text-slate-900">Calling employer or HR to demand salary cuts</td>
                      <td className="p-3 text-rose-600 font-bold">Strictly Illegal</td>
                      <td className="p-3">RBI Outsourcing Circulars</td>
                      <td className="p-3">Issue Legal Cease &amp; Desist Notice immediately.</td>
                    </tr>
                    <tr className="bg-rose-50/30">
                      <td className="p-3 font-semibold text-slate-900">Creating WhatsApp groups with contacts</td>
                      <td className="p-3 text-rose-600 font-bold">Criminal Offense</td>
                      <td className="p-3">IT Act (Sec 72A) &amp; BNS 356</td>
                      <td className="p-3">File Cyber Crime FIR and RBI complaint.</td>
                    </tr>
                    <tr className="bg-rose-50/30">
                      <td className="p-3 font-semibold text-slate-900">Pasting default notices on residence doors</td>
                      <td className="p-3 text-rose-600 font-bold">Strictly Illegal</td>
                      <td className="p-3">BNS Section 356 (Defamation)</td>
                      <td className="p-3">Lodge police complaint and claim damages.</td>
                    </tr>
                    <tr className="bg-rose-50/30">
                      <td className="p-3 font-semibold text-slate-900">Publishing photo in local newspapers</td>
                      <td className="p-3 text-rose-600 font-bold">Unlawful</td>
                      <td className="p-3">Madras HC Doraisamy Ruling</td>
                      <td className="p-3">Approach High Court for writ or injunction.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Statutory Shields */}
            <section id="statutory-shields" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Penal Codes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Statutory Shields: DPDP Act, IT Act &amp; BNS Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law arms consumers with robust legislative shields against unauthorized financial disclosure. Borrowers can hold both banks and their collection agencies criminally and financially liable.
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1886ff]" />
                    Digital Personal Data Protection Act, 2023 (DPDP Act)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under the DPDP Act 2023, banks are classified as Data Fiduciaries. They are legally mandated to process personal data strictly for authorized purposes. Sharing borrower financial data with unauthorized third parties or telemarketing agencies without lawful consent is a serious violation. The Data Protection Board of India can impose civil penalties up to ₹250 Crores for significant data breaches.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1886ff]" />
                    Section 72A of the Information Technology Act, 2000
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Section 72A prescribes criminal punishment for intentional disclosure of personal information in breach of a lawful contract. Any bank official or collection contractor who discloses customer financial records without consent faces imprisonment up to three years, fines up to ₹5 Lakhs, or both.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1886ff]" />
                    Bharatiya Nyaya Sanhita, 2023 (BNS): Defamation &amp; Intimidation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When recovery agents publicize a borrower debt to neighbors, employers, or social media groups, they commit criminal defamation under Section 356 of BNS 2023. Furthermore, threatening to ruin a borrower career or reputation constitutes criminal intimidation under Section 351 of BNS 2023, punishable with simple imprisonment up to two years.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Supreme Court Precedents */}
            <section id="supreme-court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Constitutional Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Supreme Court Precedents on Financial Privacy
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The constitutional validity of customer financial privacy has been repeatedly affirmed by the Supreme Court of India. Landmark decisions protect banking records against arbitrary inspection and public disclosure.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In District Registrar and Collector, Hyderabad v. Canara Bank (2005) 1 SCC 496, the Supreme Court struck down statutory provisions permitting arbitrary searches of banking records. The court declared that banking documents and account ledgers remain private property protected under Article 21 of the Constitution. The court held that customer privacy extends to documents stored in institutional custody.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This principle was elevated in Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1. A unanimous nine-judge Constitution Bench ruled that informational privacy is an inalienable fundamental right under Article 21. Financial details, spending patterns, and personal credit records fall squarely within the zone of personal privacy.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Regarding public naming, the Madras High Court in K.J. Doraisamy v. Assistant General Manager, State Bank of India (2006) ruled that banks cannot routinely publish customer photographs in print media without due process. The court distinguished between ordinary civil debtors and wilful defaulters who have exhausted statutory appeals. Arbitrary public exposure violates human dignity and constitutional privacy.
              </p>
            </section>

            {/* SECTION 7: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Visual Blueprint: Customer Privacy Shield SOP
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap details the statutory legal shield protecting Indian bank constituents against unauthorized debt disclosures, collection agent harassment, and privacy violations.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation.jpg"
                    alt="Banker Duty of Secrecy and Customer Privacy Rights Legal Blueprint"
                    width={1200}
                    height={675}
                    priority
                    className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Privacy Rights Defense Framework • DPDP Act &amp; RBI Compliant</span>
                  <a
                    href="/images/infographics/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation.jpg"
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

            {/* SECTION 8: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Responding to Privacy Breaches
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank or collection agency leaks your financial delinquency to third parties, execute this systematic six-stage defense protocol to enforce your legal rights.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Preserve Digital &amp; Documentary Evidence
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Record all calls with recovery personnel. Take date-stamped screenshots of WhatsApp groups, SMS threats, call logs, or emails sent to your employer. If notices are pasted on doors, take clear photographs before removing them.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Issue Legal Cease &amp; Desist Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Engage legal counsel to issue a formal notice to the bank Managing Director and Collection Head. Cite the Tournier rule, Section 13 of the Banking Companies Act, Section 72A of the IT Act, and RBI Master Directions on Outsourcing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: File Formal Grievance with Principal Nodal Officer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a detailed written complaint to the bank Principal Nodal Officer (PNO). Demand an immediate internal audit, identification of the rogue agency, and an official written apology with written assurance of non-repetition.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Lodge Cyber Crime &amp; Police Complaint
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For WhatsApp shaming groups, illegal contact scraping, or workplace harassment, register an online complaint at cybercrime.gov.in. File a written police report under Section 356 (Defamation) and Section 351 (Criminal Intimidation) of BNS 2023.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to resolve the grievance satisfactorily within 30 days, submit a petition to the RBI Integrated Ombudsman via the Complaint Management System (cms.rbi.org.in) seeking compensation for mental agony and loss of reputation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate One-Time Settlement (OTS) Waiver
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use documented regulatory non-compliance as strategic leverage. CredSettle steps in to represent the borrower, negotiating deep debt waivers up to 75% and securing an unconditional No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Regulatory Escalation */}
            <section id="regulatory-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Remedies &amp; Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Regulatory Escalation: RBI Ombudsman Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing persistent privacy violations should utilize the 3-Tier Grievance Escalation Matrix. The Reserve Bank of India has zero tolerance for banks that breach customer confidentiality through outsourced collection agencies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider">Tier 1: Internal</div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Branch &amp; Nodal Desk</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written complaint to the branch manager and grievance cell. The bank has a statutory 30-day window to investigate and provide written resolution.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider">Tier 2: Apex Bank</div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Principal Nodal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to the bank apex Principal Nodal Officer (PNO) with incident logs and evidence. Request disengagement of the recovery agency and retraction of defamatory claims.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider">Tier 3: Statutory</div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File online at cms.rbi.org.in under the Integrated Ombudsman Scheme, 2021. The Ombudsman can award compensation up to ₹20 Lakhs for actual loss and ₹1 Lakh for mental harassment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Strategic OTS Negotiations */}
            <section id="ots-negotiations" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Resolution &amp; Debt Waivers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Strategic OTS Negotiations After Secrecy Breach
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank collection contractor breaches statutory secrecy norms, the legal position shifts dramatically in favor of the borrower. Financial institutions face severe regulatory penalties, reputational damage, and civil liability if privacy violations are adjudicated.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle leverages these compliance failures to shift negotiations from aggressive recovery to a structured compromise settlement. Senior bank credit committees prefer closing disputed files through a One-Time Settlement (OTS) rather than defending regulatory show-cause notices.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Through professional legal representation, borrowers can secure substantial waivers:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">50% to 75% Principal &amp; Interest Waivers</span>
                </div>
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Complete Waiver of Penal Charges &amp; Overdue Fees</span>
                </div>
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Immediate Cessation of All Third-Party Contacts</span>
                </div>
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">Official Bank No Dues Certificate (NDC) Issued</span>
                </div>
              </div>
            </section>

            {/* COMPANY SECTION COMPONENT */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* FAQ SECTION */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Banker Secrecy Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, concise answers to the most common legal questions about banking confidentiality, privacy violations, and borrower protections.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* STATUTORY CITATIONS & REGULATORY REFERENCES */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Statutory Citations &amp; Regulatory References
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our legal advisory team relies on established statutory enactments and judicial precedents to defend borrowers against privacy violations:
              </p>
              
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                <li>Tournier v. National Provincial and Union Bank of England [1924] 1 KB 461 (Foundational common law secrecy doctrine).</li>
                <li>Banking Companies (Acquisition and Transfer of Undertakings) Act, 1970 &amp; 1980, Section 13 (Statutory duty of secrecy).</li>
                <li>State Bank of India Act, 1955, Section 44 (Obligation as to fidelity and secrecy).</li>
                <li>District Registrar and Collector, Hyderabad v. Canara Bank (2005) 1 SCC 496 (Article 21 privacy in bank customer records).</li>
                <li>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1 (Fundamental right to informational privacy).</li>
                <li>Digital Personal Data Protection Act, 2023, Sections 4 to 8 (Obligations of Data Fiduciaries).</li>
                <li>Information Technology Act, 2000, Section 72A (Criminal penalty for breach of confidentiality).</li>
                <li>Bharatiya Nyaya Sanhita, 2023, Section 356 (Defamation) and Section 351 (Criminal Intimidation).</li>
                <li>Reserve Bank of India Master Directions on Managing Risks and Code of Conduct in Outsourcing of Financial Services.</li>
                <li>Reserve Bank of India Charter of Customer Rights (Right to Privacy &amp; Fair Treatment).</li>
              </ul>

              <div className="pt-4 flex flex-wrap gap-2">
                <Link href="/social-media-defamation-by-recovery-agents-legal-action-under-bns" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                  Social Media Defamation Defense
                </Link>
                <Link href="/rbi-digital-lending-rules-ban-on-accessing-contacts-photo-gallery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                  RBI Digital Lending Privacy Rules
                </Link>
                <Link href="/police-complaint-against-bank-recovery-agent" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                  Police Complaint Against Recovery Agents
                </Link>
                <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                  RBI Guidelines for Recovery Agents
                </Link>
                <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                  Banker Right of Set-Off Defense
                </Link>
                <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                  No Dues Certificate (NDC)
                </Link>
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
                Specialist in Indian banking compliance, financial data privacy, consumer protection laws, and debt compromise settlements with extensive experience defending borrowers against unlawful collection practices.
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
                  CONFIDENTIAL LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Leaking Your Debt or Harassing HR?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists issue instant cease-and-desist notices, stop employer intimidation under RBI rules, and negotiate up to 75% debt settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Privacy Now
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
                  <span>Statutory Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Third-Party Leaks:</strong> Immediate legal defense shield.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace Protection:</strong> Legal notices to halt employer contact.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Direct escalation against rogue agencies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Privacy Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/social-media-defamation-by-recovery-agents-legal-action-under-bns"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Social Media Defamation by Agents
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">BNS 356 legal action guide &rarr;</span>
                </Link>

                <Link
                  href="/rbi-digital-lending-rules-ban-on-accessing-contacts-photo-gallery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Digital Lending Privacy Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Ban on accessing contacts &rarr;</span>
                </Link>

                <Link
                  href="/police-complaint-against-bank-recovery-agent"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Police Complaint Against Agents
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Filing FIR for harassment &rarr;</span>
                </Link>

                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Banker Right of Set-Off Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 171 Contract Act &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
