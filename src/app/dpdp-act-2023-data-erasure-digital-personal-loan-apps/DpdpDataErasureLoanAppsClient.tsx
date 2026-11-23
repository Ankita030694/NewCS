'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Gavel,
  Landmark,
  Calendar,
  Percent,
  BadgeAlert,
  Trash2,
  Smartphone,
  EyeOff,
  UserX,
  FileSpreadsheet
} from 'lucide-react';

export default function DpdpDataErasureLoanAppsClient() {
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
    { id: 'statutory-framework', label: '1. DPDP Act 2023 Foundation' },
    { id: 'data-erasure-rights', label: '2. Section 12 Data Erasure Right' },
    { id: 'rbi-digital-lending', label: '3. RBI Digital Lending Rules' },
    { id: 'illegal-data-harvesting', label: '4. Prohibited App Permissions' },
    { id: 'court-precedents', label: '5. Privacy Court Judgments' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step SOP for Deletion' },
    { id: 'statutory-exceptions', label: '7. Legal Exceptions & KYC Rules' },
    { id: 'penalties-redressal', label: '8. 4-Tier Redressal & Board' },
    { id: 'loan-settlement-relief', label: '9. Loan Settlement & Clean Exit' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'What is the right to data erasure under Section 12 of the DPDP Act 2023?',
      a: 'Section 12 of the Digital Personal Data Protection Act, 2023 grants every borrower the statutory right to request erasure of their personal data from digital lending apps and NBFCs once consent is withdrawn or the lending purpose is complete.'
    },
    {
      q: 'Can digital loan apps access or store my phone contact list and photo gallery?',
      a: 'No. Under Clause 10.1 of the RBI Digital Lending Guidelines, lending apps cannot access mobile contacts, call logs, media, or galleries. Doing so violates both RBI instructions and data protection statutes.'
    },
    {
      q: 'Can a loan app refuse to erase my data if I have an active or defaulted loan?',
      a: 'Lenders may only retain statutory records such as KYC documents and loan agreements under PMLA rules. They have zero legal right to hold scraped contacts, personal photos, or device location logs.'
    },
    {
      q: 'How do I withdraw consent given to a digital loan app under DPDP Section 6(4)?',
      a: 'Section 6(4) of the DPDP Act gives you the right to withdraw consent as easily as you gave it. You can do this in the app settings or by sending a written notice to the lender Data Protection Officer.'
    },
    {
      q: 'What happens to my data after I settle or close my personal loan?',
      a: 'After loan settlement and issuance of a No Dues Certificate, the lender must delete all non-mandatory data under Section 8(7). Core accounting and KYC files are archived securely under statutory retention mandates.'
    },
    {
      q: 'What are the penalties for loan apps that violate data privacy under DPDP Act 2023?',
      a: 'The Data Protection Board of India can impose fines up to ₹250 crore for failure to secure personal data and up to ₹50 crore for ignoring lawful data erasure or consent withdrawal requests.'
    },
    {
      q: 'Can recovery agents call people from my phone contacts to recover loan dues?',
      a: 'No. Calling third parties, relatives, or colleagues who are not loan co-borrowers or guarantors is illegal under RBI rules and constitutes criminal harassment under the Bharatiya Nyaya Sanhita.'
    },
    {
      q: 'Where can I file a complaint if a loan app refuses to delete my personal data?',
      a: 'You can file a formal complaint with the lender Data Protection Officer. If they fail to act within 30 days, file an online dispute with the RBI Integrated Ombudsman and the Data Protection Board of India.'
    },
    {
      q: 'Does deleting the loan app from my mobile phone automatically erase my data?',
      a: 'No. Removing the app only stops new tracking on your mobile device. You must submit a formal erasure request to ensure that the lender deletes your personal files from their remote cloud servers.'
    },
    {
      q: 'How does CredSettle assist borrowers facing loan app harassment and data privacy breaches?',
      a: 'CredSettle drafts formal legal notices under DPDP Act 2023 and RBI guidelines, halts illegal contact harassment, files complaints with regulators, and negotiates formal debt settlements with complete No Dues Certificates.'
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
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>DPDP Act 2023 &amp; RBI Digital Lending Data Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Delete Personal Data From Fintech Loan Apps Under DPDP
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Protect your privacy against predatory personal loan apps. Learn how Section 12 of the DPDP Act and RBI rules empower you to revoke consent, delete phone contacts, and stop recovery harassment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Enforce Data Erasure Rights</span>
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
                  <Lock className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Statutory Privacy Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 12 of the DPDP Act, 2023 and RBI Digital Lending Guidelines Clause 10.3.
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
                <span>EXECUTIVE BRIEF: DPDP ACT DATA ERASURE FROM LOAN APPS</span>
              </div>

              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Executive Brief: DPDP Act Data Erasure from Loan Apps
              </h2>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Absolute Right to Erasure:</strong> Under Section 12 of the DPDP Act, 2023, you have the legal right to demand complete deletion of your personal data from fintech apps once your loan purpose ends or consent is revoked.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Ban on Harvesting Contacts:</strong> The RBI Digital Lending Guidelines strictly forbid loan apps from accessing phone books, photo galleries, call records, and media files.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Easy Consent Revocation:</strong> Section 6(4) of the DPDP Act guarantees that withdrawing consent must be as simple as granting it. Lenders must offer an in-app data deletion option.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Heavy Fines for Non-Compliance:</strong> The Data Protection Board of India can penalize non-compliant lending fiduciaries with fines reaching up to ₹250 crore.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework of DPDP Act 2023 */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Section 1: Data Privacy Architecture</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. DPDP Act 2023: Legal Foundation of Data Privacy
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The Digital Personal Data Protection Act, 2023 (DPDP Act) transformed how financial institutions and mobile applications handle borrower information. For years, predatory digital lending applications exploited legal loopholes. They harvested personal contact directories, tracked real-time mobile locations, and scraped private photo libraries to blackmail borrowers during loan defaults.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Under the DPDP Act, the legal landscape has shifted completely. The borrower is designated as the <strong>Data Principal</strong>, while the lending institution, non-banking financial company (NBFC), or digital lending platform operates as the <strong>Data Fiduciary</strong>. The law establishes that personal data belongs exclusively to the borrower and can only be processed for specific, lawful purposes with explicit consent.
              </p>

              {/* Core Legal Definitions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1886ff] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Data Principal (Borrower)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The individual to whom the personal data relates. Under Section 2(j), you retain statutory rights over your personal identity and digital footprint.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1886ff] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Data Fiduciary (Lender)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Any entity determining the purpose and means of data processing under Section 2(i). This includes commercial banks, NBFCs, and partner fintechs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1886ff] flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Consent Manager</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A registered interoperable platform under Section 6(7) through which you can give, manage, review, or withdraw data consent seamlessly.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: Section 12 DPDP Data Erasure & Consent Withdrawal */}
            <section id="data-erasure-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Trash2 className="w-4 h-4 text-[#1886ff]" />
                <span>Section 2: Statutory Deletion Rights</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Section 12 DPDP: Right to Data Erasure &amp; Consent
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Section 12 of the DPDP Act is the most powerful weapon for borrowers against digital loan platforms. It gives you the legal entitlement to compel lenders to correct inaccurate information, update obsolete profiles, and completely erase personal data from all active databases and secondary backup servers.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1886ff]" />
                  <span>Statutory Command of Section 12(3) DPDP Act</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  &ldquo;A Data Principal may make a request to the Data Fiduciary for erasure of her personal data, and upon receipt of such request, the Data Fiduciary shall erase the personal data, unless retention is necessary for the specified purpose or for compliance with any law for the time being in force.&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  This provision establishes an affirmative legal duty. Once you withdraw consent or your loan account is closed, the lender cannot retain your personal records on an indefinite basis. They must erase the data unless a specific legal statute requires continued preservation.
                </p>
              </div>

              {/* Consent Withdrawal Mechanism */}
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#1886ff]" />
                  <span>Right to Withdraw Consent under Section 6(4)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Section 6(4) guarantees that you may withdraw your consent at any point during or after a lending relationship. The statute strictly requires that withdrawing consent must be as effortless as giving consent. If an app enabled data access with a single tap, it cannot force you to visit physical branches or jump through complicated hoops to revoke it.
                </p>
              </div>
            </section>

            {/* SECTION 3: RBI Digital Lending Rules & Ban on Accessing Contacts */}
            <section id="rbi-digital-lending" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Smartphone className="w-4 h-4 text-[#1886ff]" />
                <span>Section 3: Central Bank Directives</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. RBI Digital Lending Rules: Ban on Accessing Contacts
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The DPDP Act operates in tandem with the Reserve Bank of India Guidelines on Digital Lending (Circular RBI/2022-23/111). These regulatory directives apply to all Scheduled Commercial Banks, Non-Banking Financial Companies, and their third-party Lending Service Providers (LSPs) operating digital personal loan applications.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Under Clause 10 of these guidelines, the RBI imposed an absolute prohibition on invasive mobile device permissions. The central bank recognized that lending apps routinely harvested sensitive personal data under the guise of credit underwriting.
              </p>

              {/* RBI Clause 10 Protection Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-600">
                    <BadgeAlert className="w-4 h-4" />
                    <span>Clause 10.1: Resource Access Ban</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Digital lending apps cannot access mobile phone resources such as file systems, media galleries, contact lists, call logs, or telephony functions. Only one-time access to camera, microphone, or location is allowed solely for KYC onboarding.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Clause 10.3: Mandatory Forget Data Feature</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Regulated lenders must provide borrowers with a clear, accessible option to restrict data sharing, revoke existing consents, and instruct the application to permanently delete and forget their personal information.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: Prohibited Data Collection by Rogue Fintechs */}
            <section id="illegal-data-harvesting" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <EyeOff className="w-4 h-4 text-[#1886ff]" />
                <span>Section 4: Data Minimization Mandate</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Prohibited Data: Contacts, Photos &amp; Live Location
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Data minimization is a core statutory mandate under Section 6 of the DPDP Act and RBI directives. Lenders can only collect data directly necessary for processing credit. The table below outlines what personal loan apps are legally permitted to collect versus what is strictly illegal.
              </p>

              {/* Data Legality Comparison Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3.5 sm:p-4">Data Category</th>
                      <th className="p-3.5 sm:p-4">Legal Status</th>
                      <th className="p-3.5 sm:p-4">Statutory Basis</th>
                      <th className="p-3.5 sm:p-4">Borrower Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Phone Contact List</td>
                      <td className="p-3.5 sm:p-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                          Strictly Illegal
                        </span>
                      </td>
                      <td className="p-3.5 sm:p-4 text-xs">RBI DLG Clause 10.1</td>
                      <td className="p-3.5 sm:p-4 text-xs">Immediate Erasure Notice</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Gallery &amp; Media Files</td>
                      <td className="p-3.5 sm:p-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                          Strictly Illegal
                        </span>
                      </td>
                      <td className="p-3.5 sm:p-4 text-xs">DPDP Act Section 6(1)</td>
                      <td className="p-3.5 sm:p-4 text-xs">Cyber Crime Portal FIR</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Call Logs &amp; SMS Scrapes</td>
                      <td className="p-3.5 sm:p-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                          Strictly Illegal
                        </span>
                      </td>
                      <td className="p-3.5 sm:p-4 text-xs">RBI DLG Clause 10.1</td>
                      <td className="p-3.5 sm:p-4 text-xs">RBI Ombudsman Filing</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Live GPS Location Logs</td>
                      <td className="p-3.5 sm:p-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                          One-Time Only
                        </span>
                      </td>
                      <td className="p-3.5 sm:p-4 text-xs">Permitted Solely at Onboarding</td>
                      <td className="p-3.5 sm:p-4 text-xs">Revoke OS Permission</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">KYC &amp; Bank Statements</td>
                      <td className="p-3.5 sm:p-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                          Statutory
                        </span>
                      </td>
                      <td className="p-3.5 sm:p-4 text-xs">PMLA Section 12 &amp; RBI KYC</td>
                      <td className="p-3.5 sm:p-4 text-xs">Archived After Loan Payoff</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Supreme Court Precedents & Right to be Forgotten */}
            <section id="court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Section 5: Landmark Judicial Decisions</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Supreme Court Precedents: Privacy &amp; Data Protection
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The enforcement of data erasure rights against predatory financial lenders draws powerful constitutional backing from landmark Supreme Court and High Court judgments in India.
              </p>

              {/* Case Law Cards */}
              <div className="space-y-3">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] uppercase">Supreme Court Landmark Ruling</span>
                    <span className="text-[11px] text-slate-400">9-Judge Constitutional Bench</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The Supreme Court declared that privacy is a fundamental right under Article 21 of the Constitution. The court recognized informational privacy and the &ldquo;Right to be Forgotten.&rdquo; The bench ruled that citizens retain personal autonomy over their digital information. Financial corporations cannot retain or monetize private borrower records without continuous, valid consent.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600 uppercase">High Court Data Erasure Ruling</span>
                    <span className="text-[11px] text-slate-400">Delhi High Court Precedent</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Subhranshu Rout v. State of Odisha (2020) &amp; X v. Union of India (2021)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The courts affirmed that an individual has an enforceable legal right to have personal digital records removed from public platforms and corporate servers. The court recognized that using personal digital data to defame or intimidate individuals violates constitutional privacy and constitutes criminal extortion.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP to Enforce Data Deletion */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>Section 6: Practical Legal Protocol</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Step-by-Step SOP: How to Force Apps to Delete Data
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Follow this proven 5-step standard operating procedure to enforce your data erasure rights and remove your personal information from lending app servers.
              </p>

              {/* 5-Step SOP Timeline */}
              <div className="space-y-3">
                <div className="flex gap-3 sm:gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Revoke Operating System Permissions on Your Device
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Go to your smartphone Settings &gt; Apps &gt; Loan App &gt; Permissions. Immediately disable access to Contacts, Storage/Files, Location, Camera, Microphone, and SMS. This cuts off ongoing telemetry collection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Trigger the In-App Forget Data or Consent Revocation Option
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under RBI Clause 10.3, regulated apps must provide an in-app option to delete data. Locate the privacy settings within the app profile and submit the revocation request. Take a dated screenshot for evidence.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Issue a Formal Legal Notice to the Data Protection Officer (DPO)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Send a registered email and formal letter to the lender designated DPO and Grievance Officer. Cite Section 12(3) of the DPDP Act 2023 and RBI Digital Lending Guidelines Clause 10. Demand written confirmation of server-side data deletion within 7 working days.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Escalate Non-Compliance to the RBI Integrated Ombudsman
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the lending institution fails to confirm data erasure within 30 days or continues to access third-party contacts, lodge a complaint online at cms.rbi.org.in. Attach your consent withdrawal proof and app screenshots.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      File a Formal Complaint with the Data Protection Board of India
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Petition the Data Protection Board of India (DPBI) under Section 13 of the DPDP Act. Demand statutory penalties against the lending entity for illegal personal data retention and harassment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Exceptions: PMLA, KYC & CICRA Reporting Rules */}
            <section id="statutory-exceptions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <FileSpreadsheet className="w-4 h-4 text-[#1886ff]" />
                <span>Section 7: Statutory Retention Limits</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Legal Exceptions: KYC, PMLA &amp; Credit Reporting Rules
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Borrowers must understand the distinction between operational app data and statutory banking records. While the DPDP Act empowers you to purge private device records, lenders are legally mandated by other central statutes to retain specific records for compliance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <h3 className="text-xs sm:text-sm font-bold text-emerald-900 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Data That Must Be Erased Immediately</span>
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Scraped mobile contact directories and call records</li>
                    <li>Device photo albums, files, and downloaded media</li>
                    <li>GPS location history and device tracking logs</li>
                    <li>Advertising identifiers, marketing profiles, and cookies</li>
                    <li>WhatsApp chat scrapes and automated SMS extracts</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 space-y-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-slate-700" />
                    <span>Statutory Records Lenders Must Retain</span>
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>KYC records (PAN, Aadhaar record) for 5 years under PMLA</li>
                    <li>Loan agreement contracts and disbursement audit trails</li>
                    <li>Repayment ledger and default history reported to CICs</li>
                    <li>Tax transaction entries required under the Companies Act</li>
                    <li>Court filings and arbitration notices in active disputes</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Even for retained statutory records, the lender must store them in an encrypted, restricted vault. They cannot use retained KYC files to contact your acquaintances or engage recovery agencies.
              </p>
            </section>

            {/* SECTION 8: 4-Tier Redressal: DPO, RBI CMS, DPBI & Cyber Crime */}
            <section id="penalties-redressal" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Section 8: Institutional Escalation</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                8. 4-Tier Redressal: DPO, RBI CMS, DPBI &amp; Cyber Crime
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When a fintech loan platform ignores your data erasure demand or misuses your personal data, you have access to a structured 4-tier institutional escalation framework.
              </p>

              {/* 4-Tier Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1886ff] block">
                    Tier 1: Internal Grievance Desk
                  </span>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Lender DPO &amp; Nodal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 13 DPDP Act, every lender must provide accessible grievance redressal. The DPO must investigate and respond to data deletion requests within 30 days.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1886ff] block">
                    Tier 2: Central Banking Authority
                  </span>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">RBI Integrated Ombudsman (CMS)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lodge a complaint on cms.rbi.org.in for breaches of RBI Digital Lending Guidelines. The Ombudsman can award up to ₹1,00,000 for mental distress and time lost.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-rose-600 block">
                    Tier 3: Statutory Board
                  </span>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Data Protection Board of India</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The DPBI investigates systemic privacy violations and non-compliance with data erasure orders. It wields statutory power to levy severe corporate penalties up to ₹250 crore.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-rose-600 block">
                    Tier 4: Law Enforcement
                  </span>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">National Cyber Crime Portal</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If recovery agents threaten to leak private photos, contact relatives, or extort money, report immediately to cybercrime.gov.in or call 1930 for criminal FIR registration under BNS.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Debt Settlement Protocol: End Harassment with NOC */}
            <section id="loan-settlement-relief" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Section 9: Complete Debt Resolution</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                9. Debt Settlement Protocol: End Harassment with NOC
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Many borrowers face aggressive privacy violations because they are struggling with debt default. Rogue lending platforms use unauthorized contact access as leverage to force repayments with illegal penal interest.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The most effective long-term solution is combining statutory privacy enforcement with professional debt settlement. CredSettle negotiates directly with bank and NBFC legal management to secure substantial one-time settlement (OTS) waivers ranging from 50% to 75% on overdue balances.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-sm font-bold text-slate-900">
                  How CredSettle Delivers Complete Legal Protection
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                    <span><strong>Formal Cease &amp; Desist:</strong> Halts recovery agent calls to family and colleagues immediately.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                    <span><strong>DPDP Erasure Notice:</strong> Enforces complete deletion of harvested phone records and permissions.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                    <span><strong>OTS Negotiation:</strong> Secures deep financial waivers on accumulated penalties and interest.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                    <span><strong>Verified No Dues Certificate:</strong> Ensures clean loan closure and accurate credit bureau updates.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: Company Section */}
            <section id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </section>

            {/* SECTION 11: Frequently Asked Questions */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Frequently Asked Questions: DPDP Loan App Data Erasure
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all shadow-xs"
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

            {/* SECTION 12: Statutory Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Statutory Citations: Data Privacy &amp; Lending Laws
              </h2>

              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Digital Personal Data Protection Act, 2023:</strong> Act No. 22 of 2023, Sections 2, 6, 8, 12, 13, and Schedule specifying data erasure obligations and penalties.
                </li>
                <li>
                  <strong>RBI Digital Lending Guidelines (2022):</strong> Circular RBI/2022-23/111 DOR.CRE.REC.66/21.07.001/2022-23 mandating access bans on phone contacts and photos.
                </li>
                <li>
                  <strong>Prevention of Money Laundering Act, 2002:</strong> Section 12 governing statutory KYC record retention periods for regulated financial entities.
                </li>
                <li>
                  <strong>Constitution of India (Article 21):</strong> Fundamental right to privacy affirmed in K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal mechanism for fair practices code violations and unlawful loan recovery conduct.
                </li>
              </ul>

              {/* Verified Authority Portals */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.meity.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Electronics &amp; IT (MeitY)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Commission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/7-day-loan-app-harassment-morphed-photos" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    7-Day Loan App Harassment Defense
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement Services
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Agent Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Guidelines
                  </Link>
                  <Link href="/bank-recovery-harassment-complaint" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    File Bank Harassment Complaint
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Hidden Fees Refund
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice for Loan Default
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI CIBIL Delay Compensation
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate (NOC) Guide
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
                Specialist in digital lending regulations, DPDP Act compliance, borrower privacy protections, and negotiated personal loan debt settlements.
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
                  DATA PRIVACY &amp; LOAN APP RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Loan Apps Harassing Your Contacts?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team serves formal DPDP erasure notices, stops illegal phone contact calls, and negotiates massive waivers on delinquent loans.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Free Privacy &amp; Debt Audit
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
                  <span>DPDP Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>DPDP Legal Notices:</strong> Enforce data deletion &amp; consent withdrawal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Harassment Cease:</strong> Block illegal contact book calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>50% to 75% OTS Waivers:</strong> Settle delinquent loans affordably.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official No Dues Certificate:</strong> Legally close debt with bank proof.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/7-day-loan-app-harassment-morphed-photos"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    7-Day Loan App Harassment Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop photo blackmail &amp; FIR &rarr;</span>
                </Link>

                <Link
                  href="/services/personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Settlement Services
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal debt relief &amp; NOC &rarr;</span>
                </Link>

                <Link
                  href="/stop-recovery-agent-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Recovery Agent Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI guidelines &amp; police defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
