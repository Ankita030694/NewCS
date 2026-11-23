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
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  ShieldAlert,
  EyeOff,
  Copy
} from 'lucide-react';

export default function RevokeAAConsentClient() {
  const [activeId, setActiveId] = useState<string>('executive-summary');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

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

  const handleCopyNotice = () => {
    const noticeText = `To,
The Grievance Redressal Officer & Principal Nodal Officer,
[Lender Name / NBFC Name]
[Address / Registered Email]

Subject: Formal Revocation of Account Aggregator Consent under RBI Master Direction & DPDP Act 2023 - Loan Account No: [Your Loan Account Number]

Sir/Madam,

I am writing with reference to my personal loan account number [Your Loan Account Number]. 

1. STATUTORY CONSENT REVOCATION:
Under Clause 6.3 of the RBI Master Direction - Non-Banking Financial Company - Account Aggregator (Reserve Bank) Directions, 2016 and Section 6(4) of the Digital Personal Data Protection Act, 2023 (DPDP Act 2023), I hereby formally revoke and withdraw all consents granted to your institution (as Financial Information User - FIU) to access, fetch, or monitor my bank statements, account balances, or financial records via the Account Aggregator framework.

2. IMMEDIATE CESSATION OF DATA FETCHES:
You are instructed to immediately stop initiating automated balance queries, periodic statement pulls, or early warning data fetches on all my linked bank accounts through any Account Aggregator (including Sahamati network partners).

3. PROHIBITION OF PRIVACY VIOLATIONS & COERCIVE RECOVERY:
Any ongoing balance monitoring, sharing of my private financial data with third-party recovery agencies, or citing of my live bank balances during recovery communications violates the Banker's Duty of Secrecy, the Supreme Court ruling in K.S. Puttaswamy v Union of India, and RBI Fair Practices Code. Such actions will be immediately reported to the RBI Integrated Ombudsman and the Data Protection Board of India.

4. CONTINUED DEBT RESOLUTION COMMUNICATION:
This notice does not waive legitimate debt discussions. I remain open to resolving this account through a formal, structured One-Time Settlement (OTS) via lawful written communication.

Please confirm receipt and acknowledge the cancellation of all active consent artifacts within 48 hours.

Yours sincerely,
[Your Full Name]
[Registered Mobile Number]
[Registered Email Address]
Date: [Current Date]`;

    navigator.clipboard.writeText(noticeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const navLinks = [
    { id: 'executive-summary', label: 'Executive Summary: Stopping Loan Monitoring' },
    { id: 'statutory-framework', label: '1. Statutory Framework: RBI AA Rules' },
    { id: 'lender-exploitation', label: '2. How Lenders Exploit Ongoing AA Consent' },
    { id: 'right-to-revoke', label: '3. Absolute Right to Revoke Under RBI & DPDP' },
    { id: 'step-by-step-sop', label: '4. Step-by-Step SOP: Revoke AA Online' },
    { id: 'loan-acceleration', label: '5. Can Lenders Accelerate Loans on Revocation?' },
    { id: 'nach-and-snooping', label: '6. Preventing NACH Debits & Bank Snooping' },
    { id: 'legal-notice-template', label: '7. Legal Notice Template to Halt Inquiries' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation: GRO to RBI Ombudsman' },
    { id: 'resolving-personal-loan', label: '9. Reclaiming Privacy & Settling Debt' },
    { id: 'company-profile', label: 'About CredSettle Legal Defense' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I legally revoke Account Aggregator consent during a loan default?',
      a: 'Yes. Under the RBI Master Direction on NBFC-Account Aggregators and Section 6(4) of the DPDP Act 2023, you have an absolute statutory right to revoke consent at any time. Lenders cannot force you into continuous electronic surveillance merely because an EMI is unpaid.'
    },
    {
      q: 'Why do fintech lenders track my bank account via Account Aggregator?',
      a: 'Lenders exploit recurring AA consent to monitor live account balances, spot salary or family deposits, time automated NACH debit sweeps, and dispatch aggressive recovery agents when money enters your account.'
    },
    {
      q: 'Does revoking Account Aggregator consent cancel my loan liability?',
      a: 'No. Revoking consent stops intrusive data tracking, but your legal loan obligation remains. The lender can still demand repayment through lawful channels, while you retain the right to negotiate a structured One-Time Settlement (OTS).'
    },
    {
      q: 'Can a lender declare an immediate default solely because I revoked consent?',
      a: 'Contract clauses claiming consent cannot be revoked or penalizing revocation are void under Section 23 of the Indian Contract Act. Statutory privacy rights override standard lender contracts. If the loan is already overdue, the lender cannot add extra penalties for revoking consent.'
    },
    {
      q: 'How do I revoke consent on my Account Aggregator app?',
      a: 'Open the AA app you used (such as OneMoney, Finvu, Anumati, Setu, or Protean), log in with your registered phone number, navigate to the Active Consents tab, select the lender, tap Revoke Consent, and confirm with an OTP.'
    },
    {
      q: 'How quickly does the revocation take effect at my bank?',
      a: 'Under RBI directions, the Account Aggregator must immediately generate an updated consent artifact and transmit it to your bank (Financial Information Provider). This instantly stops further data sharing with the lender.'
    },
    {
      q: 'What should I do if recovery agents cite my live bank balance?',
      a: 'Citing private bank balances violates the Banker Duty of Secrecy, RBI Fair Practices Code, and constitutes criminal intimidation under Section 351 of Bharatiya Nyaya Sanhita. File complaints with the bank Grievance Officer, the RBI Ombudsman, and local police.'
    },
    {
      q: 'Can revoking AA consent stop NACH auto-debits?',
      a: 'No. AA consent controls financial data sharing, while NACH mandates are separate payment instructions. To stop predatory auto-debits, you must issue a written stop-payment or mandate cancellation instruction directly to your bank under Section 25 of the PSS Act.'
    },
    {
      q: 'Will revoking Account Aggregator consent hurt my CIBIL credit score?',
      a: 'No. Account Aggregator consent revocation is a privacy action and is not reported to credit bureaus. Your CIBIL score is affected only by missed EMI payments or settlement status, never by exercising data privacy rights.'
    },
    {
      q: 'How can CredSettle help if lenders harass me over unpaid personal loans?',
      a: 'CredSettle issues formal legal notices to stop recovery harassment and data violations, acts as your authorized legal representative, and negotiates an affordable One-Time Settlement (OTS) with substantial interest waivers and closure certificates.'
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
            <span>RBI AA Master Directions &amp; DPDP Act 2023 Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Stop Lenders Tracking Bank Balances via AA Consent
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Are fintech lenders monitoring your bank balance after a personal loan default? Learn how to revoke Account Aggregator consent legally under RBI rules, halt predatory auto-debits, and settle debt on your terms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Balance Snooping &amp; Settle Debt</span>
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
                  <span>Borrower Privacy Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI NBFC-AA Master Directions 2016 and DPDP Act 2023 Section 6(4).
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="executive-summary"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <h2 className="text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff] m-0 p-0 border-none inline">
                  Executive Summary: Stopping Intrusive Loan Monitoring
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Absolute Right to Revoke:</strong> Under RBI Master Direction for NBFC-AAs and Section 6(4) of the DPDP Act 2023, you can revoke Account Aggregator consent at any time without lender permission.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Halting Live Balance Snooping:</strong> Fintech lenders misuse periodic consent to track salary credits and emergency funds in real time during loan default. Revocation cuts this data stream instantly.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Stopping Predatory Debit Sweeps:</strong> When lenders know your live balance, they schedule automated NACH hits the moment funds arrive. Revoking consent eliminates this unfair advantage.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Adhesion Contracts Are Void:</strong> Loan contract clauses that declare consent irrevocable or treat revocation as an automatic fraud event are legally invalid under Section 23 of the Indian Contract Act.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Path to Debt Resolution:</strong> Stopping electronic snooping lets you regain financial stability and negotiate a legitimate One-Time Settlement (OTS) through CredSettle with up to 50% to 75% waiver.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: STATUTORY FRAMEWORK */}
            <section id="statutory-framework" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <Landmark className="w-4 h-4" />
                <span>Regulatory Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Statutory Framework: RBI Account Aggregator Rules
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Account Aggregator (AA) framework was introduced by the Reserve Bank of India to give citizens full control over their financial data. It allows users to share financial information securely between financial institutions through regulated entities known as NBFC-Account Aggregators.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Three distinct parties operate inside this digital architecture under the supervision of the Reserve Bank of India:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>FIP (Information Provider)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your primary bank holding your savings or salary account. The bank holds your data and releases it only upon receiving a digitally signed consent artifact.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Account Aggregator (AA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An RBI-regulated consent manager (such as OneMoney, Finvu, Anumati, or Setu). The AA acts as a blind data pipe and cannot read, store, or sell your financial data.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>FIU (Information User)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The personal loan lender, fintech company, or NBFC requesting your bank statements to underwrite credit or monitor repayments.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p className="font-semibold text-slate-900">
                  Key Legal Principle: Consent Must Be Granular and Revocable
                </p>
                <p>
                  Clause 6.3 of the RBI Master Direction on NBFC-Account Aggregators mandates that consent cannot be permanent or unconditional. Every consent artifact must explicitly define the exact data requested, access frequency, and duration. Crucially, the customer retains the statutory right to withdraw this consent at any time.
                </p>
              </div>
            </section>

            {/* SECTION 2: HOW LENDERS EXPLOIT AA CONSENT */}
            <section id="lender-exploitation" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Coercive Loan Surveillance</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. How Default Lenders Exploit Ongoing AA Consent
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you apply for a personal loan online, fintech apps often bundle periodic Account Aggregator consent deep within their application terms. While framed as credit monitoring, this ongoing access is frequently weaponized when a borrower defaults on an EMI.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Live Balance Snooping</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Lenders ping the Account Aggregator daily or weekly to check your exact account balance. They see incoming salary credits, UPI transfers from relatives, or medical emergency funds before you can use them.
                    </p>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Precision Timing of NACH Auto-Debits</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Armed with live balance information, aggressive lenders trigger automated e-mandate and NACH debit presentations the moment your balance crosses the EMI amount. This drains money needed for food or medical care, and repeatedly triggers bounce penalties if funds are partial.
                    </p>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Psychological Recovery Agent Harassment</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Recovery agents call borrowers and confront them with private financial details. Hearing an agent say, "We know you received Rs 35,000 this morning in your HDFC account, pay your EMI right now," causes severe mental distress and violates core banking confidentiality.
                    </p>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Breach of Banker Duty of Secrecy</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under established Indian banking jurisprudence and the landmark Supreme Court ruling in <em>District Registrar and Collector v Canara Bank</em>, a customer bank balance is confidential. Misusing digital pipes for coercive recovery breaches this sacred legal duty.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: ABSOLUTE RIGHT TO REVOKE */}
            <section id="right-to-revoke" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Statutory Empowerment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Absolute Right to Revoke Under RBI and DPDP Act
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many distressed borrowers believe they cannot stop their lender from inspecting their bank accounts. Lenders often claim that consent was a mandatory condition of the loan and cannot be canceled. This claim is legally false.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Statutory Provision</th>
                      <th className="p-3">Legal Mandate</th>
                      <th className="p-3">Impact on Borrowers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        RBI NBFC-AA Master Direction (Clause 6.3)
                      </td>
                      <td className="p-3">
                        The consent obtained by an Account Aggregator shall be capable of being revoked at any time by the customer.
                      </td>
                      <td className="p-3 text-emerald-700 font-medium">
                        You can cancel access instantly inside your AA app without asking the lender.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        DPDP Act 2023 (Section 6, Clause 4)
                      </td>
                      <td className="p-3">
                        The Data Principal has the right to withdraw consent at any time. The process must be as easy as giving consent.
                      </td>
                      <td className="p-3 text-emerald-700 font-medium">
                        Lenders must stop data processing and delete stored statement records upon notice.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        RBI Digital Lending Guidelines (Sept 2022)
                      </td>
                      <td className="p-3">
                        Borrowers must be provided the option to give or deny consent, restrict disclosures, and revoke consent already granted.
                      </td>
                      <td className="p-3 text-emerald-700 font-medium">
                        Fintech apps cannot penalize borrowers for exercising regulatory privacy rights.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        Indian Contract Act 1872 (Section 23)
                      </td>
                      <td className="p-3">
                        Agreements that defeat the provisions of any law or oppose public policy are void ab initio.
                      </td>
                      <td className="p-3 text-emerald-700 font-medium">
                        Clauses claiming consent is irrevocable have zero legal enforceability in court.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <p className="font-bold flex items-center gap-1.5 text-amber-950">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  Legal Reality: Loan Debt vs Electronic Snooping
                </p>
                <p className="mt-1">
                  Revoking Account Aggregator consent does not cancel your obligation to repay your loan. The lender still holds a valid debt claim. However, default does not strip away your fundamental constitutional right to privacy. A lender must recover money through legal civil channels, not through unconsented digital surveillance.
                </p>
              </div>
            </section>

            {/* SECTION 4: STEP-BY-STEP SOP */}
            <section id="step-by-step-sop" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Action Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Step-by-Step SOP: How to Revoke AA Consent Online
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Revoking consent does not require phone calls to aggressive customer care executives. The entire revocation process can be executed directly through the Account Aggregator platform in under five minutes.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Identify Your Account Aggregator</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Check your SMS and emails received during the loan application. Common RBI-licensed Account Aggregators include OneMoney, Finvu, Anumati, Setu, Protean, Saafe, and CAMS Finser. Look for messages referencing Sahamati consent.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Log In to the Account Aggregator Portal</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Download the AA app or open its web consent portal. Enter your registered mobile number and authenticate using the one-time password (OTP).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Locate Active Consents</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Navigate to the "Consents" or "Active Consents" tab. You will see a list of all Financial Information Users (lenders, NBFCs, or credit apps) currently authorized to pull your banking data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Execute Revocation and Verify via OTP</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Select the specific loan provider and click "Revoke Consent" (or "Pause Consent"). Enter the verification OTP to confirm. Take a screenshot or download the revocation confirmation artifact for your records.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Instant Downstream Block at Bank</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under RBI rules, the AA generates a fresh consent artifact reflecting revocation and shares it immediately with your bank. Your bank will instantly block any further automated data requests from that lender.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: CAN LENDERS ACCELERATE LOANS? */}
            <section id="loan-acceleration" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <Gavel className="w-4 h-4" />
                <span>Contractual Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Can Lenders Accelerate Loans if You Revoke Consent?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common worry among borrowers is whether revoking consent will trigger legal penalties or cause the lender to accelerate the entire loan balance. Understanding the legal difference between loan default and privacy rights is essential.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Loan Default Covenants vs Statutory Rights
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Loan contracts drafted by fintech companies often include boilerplate clauses stating: <em>"Revoking data access or account aggregator consent shall constitute an Event of Default."</em>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    However, under Indian contract law, statutory rights created by Parliament and the Reserve Bank of India supersede standard-form contracts. A lender cannot force a borrower to waive a statutory privacy right as a condition of borrowing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    What Happens if Your Loan is Already Delinquent?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If you have already missed EMIs, your loan is already classified as overdue or a Special Mention Account (SMA/NPA). The lender already possesses the contractual right to send recall notices or initiate standard legal recovery. Revoking consent does not give them any new legal weapon.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    What revoking consent actually does is level the playing field. It takes away the lender ability to spy on your daily cash flows and execute surprise debits while you organize your finances for settlement.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: PREVENTING NACH DEBITS & SNOOPING */}
            <section id="nach-and-snooping" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <EyeOff className="w-4 h-4" />
                <span>Financial Defense Strategy</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Preventing Predatory NACH Debits and Bank Snooping
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Revoking Account Aggregator consent is step one of financial protection. However, many borrowers confuse Account Aggregator consent with automated NACH or e-mandate debits. Understanding how both work together is crucial to stop predatory deductions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <Scale className="w-4 h-4 text-blue-700" />
                    <span>Account Aggregator Consent</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Governed by RBI NBFC-AA Master Directions.</li>
                    <li>• Controls reading of financial statements and balances.</li>
                    <li>• Cannot deduct money from your bank account.</li>
                    <li>• Revoking stops lenders from seeing your live balance.</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <DollarSign className="w-4 h-4 text-emerald-700" />
                    <span>NACH / e-Mandate Instructions</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Governed by Payment and Settlement Systems Act 2007.</li>
                    <li>• Authorizes direct auto-debits for scheduled EMIs.</li>
                    <li>• Operates independently through NPCI payment rails.</li>
                    <li>• Must be canceled separately with your bank.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p className="font-bold text-slate-900">
                  Comprehensive 2-Step Financial Defense Plan:
                </p>
                <ol className="list-decimal pl-4 space-y-1 text-slate-700">
                  <li>
                    <strong>Revoke Account Aggregator Consent:</strong> Stop the lender from knowing when money enters your account.
                  </li>
                  <li>
                    <strong>Cancel or Suspend NACH Mandates:</strong> Submit a written instruction to your bank branch or net banking portal to stop payment or cancel the NACH mandate for the disputed lender under Section 25 of the PSS Act.
                  </li>
                </ol>
              </div>
            </section>

            {/* SECTION 7: LEGAL NOTICE TEMPLATE */}
            <section id="legal-notice-template" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Ready-to-Use Legal Notice</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Legal Notice Template to Halt Lender Data Inquiries
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After revoking consent in the AA app, serve a formal written notice to the lender Grievance Redressal Officer (GRO) and Nodal Officer. This creates a documented paper trail for the RBI Ombudsman if the lender continues unlawful data fetches.
              </p>

              <div className="relative bg-slate-900 text-slate-100 rounded-xl p-5 text-xs font-mono leading-relaxed overflow-x-auto shadow-inner">
                <button
                  onClick={handleCopyNotice}
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Notice Text'}</span>
                </button>

                <pre className="whitespace-pre-wrap font-mono text-[11px] sm:text-xs">
{`To,
The Grievance Redressal Officer & Principal Nodal Officer,
[Lender Name / NBFC Name]
[Address / Registered Email]

Subject: Formal Revocation of Account Aggregator Consent under RBI Master Direction & DPDP Act 2023 - Loan Account No: [Your Loan Account Number]

Sir/Madam,

I am writing with reference to my personal loan account number [Your Loan Account Number]. 

1. STATUTORY CONSENT REVOCATION:
Under Clause 6.3 of the RBI Master Direction - Non-Banking Financial Company - Account Aggregator (Reserve Bank) Directions, 2016 and Section 6(4) of the Digital Personal Data Protection Act, 2023 (DPDP Act 2023), I hereby formally revoke and withdraw all consents granted to your institution (as Financial Information User - FIU) to access, fetch, or monitor my bank statements, account balances, or financial records via the Account Aggregator framework.

2. IMMEDIATE CESSATION OF DATA FETCHES:
You are instructed to immediately stop initiating automated balance queries, periodic statement pulls, or early warning data fetches on all my linked bank accounts through any Account Aggregator (including Sahamati network partners).

3. PROHIBITION OF PRIVACY VIOLATIONS & COERCIVE RECOVERY:
Any ongoing balance monitoring, sharing of my private financial data with third-party recovery agencies, or citing of my live bank balances during recovery communications violates the Banker's Duty of Secrecy, the Supreme Court ruling in K.S. Puttaswamy v Union of India, and RBI Fair Practices Code. Such actions will be immediately reported to the RBI Integrated Ombudsman and the Data Protection Board of India.

4. CONTINUED DEBT RESOLUTION COMMUNICATION:
This notice does not waive legitimate debt discussions. I remain open to resolving this account through a formal, structured One-Time Settlement (OTS) via lawful written communication.

Please confirm receipt and acknowledge the cancellation of all active consent artifacts within 48 hours.

Yours sincerely,
[Your Full Name]
[Registered Mobile Number]
[Registered Email Address]
Date: [Current Date]`}
                </pre>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="escalation-matrix" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>Statutory Dispute Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                8. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If a lender ignores your consent revocation, continues pulling your financial statements, or allows collection agents to threaten you based on leaked balances, follow this institutional escalation pathway.
              </p>

              <div className="space-y-4 pt-2">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                      Tier 1: Internal Grievance Cell
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response Time: 7 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Lender Grievance Redressal Officer (GRO)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit the formal revocation notice to the GRO via email. Attach screenshots of the revoked consent artifact from your AA app. Under RBI rules, the lender must acknowledge within 48 hours.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
                      Tier 2: Principal Nodal Officer (PNO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response Time: 14 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Senior Management &amp; PNO Escalation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the GRO fails to confirm consent revocation within seven days or if data fetches persist, escalate directly to the Principal Nodal Officer. Cite the RBI Master Direction on Account Aggregators and warn of regulatory escalation.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Tier 3: Statutory Regulator
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Online Resolution</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    RBI Integrated Ombudsman Scheme (RB-IOS 2021)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender fails to resolve the violation within 30 days, file an online complaint at <strong>cms.rbi.org.in</strong>. The RBI Ombudsman can penalize the lender, mandate data deletion, and award compensation for harassment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: RECLAIMING PRIVACY & RESOLVING DEBT */}
            <section id="resolving-personal-loan" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Long-Term Debt Resolution</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                9. Reclaiming Privacy and Resolving Personal Loan Debt
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Revoking Account Aggregator consent shields your daily survival funds from unexpected debits. However, leaving an overdue personal loan unresolved leads to accumulating penal interest and worsening credit scores. The sustainable solution is a legal One-Time Settlement (OTS).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">The Default Trap Without Settlement</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Unpaid loans accumulate 24% to 36% penal interest and GST charges. Lenders sell delinquent debt to aggressive Asset Reconstruction Companies (ARCs) or send repeated legal demand notices under Section 138 or arbitration.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">The CredSettle Settlement Advantage</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    CredSettle negotiates directly with bank credit committees on your behalf. We waive illegal penal charges, establish genuine financial hardship, and settle the loan for a manageable fraction of total dues with a valid No Due Certificate.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <p className="text-sm font-bold text-slate-900">Need Professional Legal Defense &amp; Debt Relief?</p>
                  <p className="text-xs text-slate-600">Our legal advocates handle lender calls, stop harassment, and negotiate optimal waivers.</p>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full bg-[#1886ff] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex-shrink-0"
                >
                  Schedule Free Case Assessment
                </Link>
              </div>
            </section>

            {/* COMPANY SECTION (REUSED COMPONENT) */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* FAQ SECTION */}
            <section id="frequently-asked-questions" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Consumer Guidance</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Frequently Asked Questions: Revoking AA Consent
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Find clear answers to common questions about revoking Account Aggregator consent during personal loan defaults in India.
              </p>

              <div className="divide-y divide-slate-200 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} className="py-3.5 first:pt-0 last:pb-0">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left flex items-center justify-between gap-3 text-slate-900 font-bold text-sm sm:text-base hover:text-[#1886ff] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* REGULATORY SOURCES SECTION */}
            <section id="regulatory-sources" className="scroll-target bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                <Landmark className="w-4 h-4" />
                <span>Statutory Authority &amp; Citations</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Regulatory Authorities &amp; Statutory References
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All legal rights, procedures, and consent architecture explained on this page are grounded in official Indian statutes, RBI circulars, and judicial precedents:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <p className="font-bold text-slate-900">RBI Master Direction: NBFC-AA 2016</p>
                  <p className="text-slate-500">DoR.AUT.REC.No.27/23.08.001/2016-17 (Section 6.3 - Consent Architecture &amp; Mandatory Revocation)</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <p className="font-bold text-slate-900">Digital Personal Data Protection Act 2023</p>
                  <p className="text-slate-500">Act No. 22 of 2023 (Section 6(4) - Statutory Right to Withdraw Consent &amp; Data Erasure)</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <p className="font-bold text-slate-900">RBI Guidelines on Digital Lending 2022</p>
                  <p className="text-slate-500">DOR.CRE.REC.66/21.07.001/2022-23 (Paragraph 4 - Data Privacy, Storage &amp; Right to Revoke)</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <p className="font-bold text-slate-900">Supreme Court of India: Privacy Precedents</p>
                  <p className="text-slate-500">K.S. Puttaswamy v Union of India (2017) 10 SCC 1 &amp; District Registrar v Canara Bank (2005) 1 SCC 496</p>
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
                Specialist in digital lending compliance, banking disputes, consumer data rights, and borrower protection with deep expertise enforcing RBI regulations against coercive debt recovery.
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
                  STOP LENDER HARASSMENT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Trapped in Personal Loan Debt?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  CredSettle stops predatory bank balance snooping, puts an end to recovery agent harassment, and negotiates legal One-Time Settlements with up to 50% to 75% waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Settlement Consultation
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
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 pb-2 border-b border-slate-100">
                CredSettle Legal Safeguards
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Stop Recovery Calls &amp; Home Visits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Formal Legal Representation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>50% to 75% Principal Waivers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Official Bank No Dues Certificate</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/services/personal-loan-settlement"
                  className="text-xs text-[#1886ff] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Explore Personal Loan Settlement</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
