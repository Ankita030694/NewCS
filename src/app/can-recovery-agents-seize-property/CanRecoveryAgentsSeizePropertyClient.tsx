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
  Home,
  ShieldAlert,
  FileCheck,
  XCircle,
  Shield
} from 'lucide-react';

export default function CanRecoveryAgentsSeizePropertyClient() {
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
    { id: 'can-agents-seize-property', label: '1. Recovery Agent Powers & Limits' },
    { id: 'sarfaesi-act-unsecured-debt', label: '2. SARFAESI Act vs. Unsecured Debt' },
    { id: 'section-60-cpc-exemptions', label: '3. Section 60 CPC Asset Shield' },
    { id: 'secured-vs-unsecured-table', label: '4. Asset Attachment Comparison Grid' },
    { id: 'financial-feasibility-analytics', label: '5. Financial Risk & Feasibility Math' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'step-by-step-defense-sop', label: '6. 6-Stage Asset Protection SOP' },
    { id: 'formal-legal-notice-draft', label: '7. Cease & Desist Legal Terminal' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-resolution-milestones', label: '9. Chronological Resolution Timelines' },
    { id: 'specialized-loan-scenarios', label: '10. Credit Cards, ARCs & Fake Bailiffs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: "Can recovery agents legally seize my property or household items for an unsecured personal loan?",
      a: "No. Recovery agents have zero legal authority or statutory power to seize, attach, or confiscate any movable or immovable property for an unsecured personal loan. Any agent attempting to forcefully enter your home or confiscate items commits criminal trespass (Section 441 IPC / Section 329 BNS), extortion (Section 383 IPC / Section 308 BNS), and criminal intimidation (Section 506 IPC), violating the RBI Fair Practices Code."
    },
    {
      q: "Does the SARFAESI Act apply to unsecured personal loans or credit card debts?",
      a: "No. Under Section 31(i) of the SARFAESI Act, 2002, the law applies exclusively to secured creditors holding a registered mortgage, hypothecation, or pledge. Unsecured personal loans and credit cards do not create any security interest or lien over your assets. Therefore, banks cannot issue SARFAESI Section 13(2) demand notices or Section 13(4) possession notices for unsecured debts."
    },
    {
      q: "Can a bank auction or sell my house if I default on a personal loan?",
      a: "A bank cannot directly auction or sell your house for an unsecured personal loan default. To reach any property, the bank must first file a civil suit or arbitration claim, obtain a monetary decree or arbitral award, and subsequently file an Execution Petition under Order 21 of the Code of Civil Procedure (CPC). Furthermore, Section 60 of the CPC protects primary residential dwellings, essential household items, and livelihood tools from execution attachment."
    },
    {
      q: "What property is exempt from court attachment under Section 60 of the CPC?",
      a: "Under Section 60(1) of the Code of Civil Procedure, 1908, the law strictly exempts essential personal assets from attachment: necessary wearing apparel, cooking vessels, beds, and bedding; tools of artisans and agricultural implements; books of accounts; pensions, gratuity, and Employee Provident Fund (EPF/PPF) deposits; life insurance policy proceeds; and statutory exemptions on basic salaried earnings."
    },
    {
      q: "What should I do if a recovery agent threatens to bring a seizure team or police to my house?",
      a: "Immediately demand the agent's official ID card, bank authorization letter, and DRS (Debt Recovery System) registration. Inform them clearly that personal loan default is a civil dispute and that unauthorized seizure threats violate RBI Master Directions. Record the interaction via audio or video, notify the local police station of criminal intimidation if they refuse to leave, and submit a formal complaint to the bank's Principal Nodal Officer (PNO) and the RBI Ombudsman."
    },
    {
      q: "Can a bank freeze or attach my salary account for a personal loan default?",
      a: "A bank cannot freeze your salary account on its own without a specific attachment order from a competent Civil Court or a banker's right of set-off on an account held within the same banking institution. Under Section 60(1)(i) of the CPC, any court attachment on salary is strictly capped—the first ₹1,000 plus two-thirds of the remainder of the monthly salary is completely exempt from attachment."
    },
    {
      q: "What is the difference between an Asset Reconstruction Company (ARC) and a recovery agent?",
      a: "An Asset Reconstruction Company (ARC) is an RBI-registered financial institution that buys bad loan portfolios (NPAs) from banks under Section 5 of the SARFAESI Act. An ARC steps into the legal shoes of the original lender. However, for unsecured loans, ARCs inherit the exact same unsecured legal status and cannot seize property without a court decree, being bound by the identical RBI recovery guidelines."
    },
    {
      q: "How can I identify fake court notices or forged property attachment warrants?",
      a: "Real court summons and execution orders are issued under the seal of a District Civil Court and contain a unique 16-digit CNR (Case Number Record) that can be verified online on the official eCourts Services portal (ecourts.gov.in). Fake notices sent by collection agencies often lack a valid CNR, use generic threatening language, demand direct UPI transfers to private accounts, or are sent over WhatsApp without official court registry dispatch numbers."
    },
    {
      q: "Can I negotiate a One-Time Settlement (OTS) to permanently protect my assets?",
      a: "Yes. Negotiating a formal One-Time Settlement (OTS) with the bank's authorized settlement desk or Principal Nodal Officer allows you to settle the outstanding debt with a 40% to 75% waiver on accumulated penal interest and charges. Once settled and paid through official banking channels, the bank issues an unconditional No Dues Certificate (NDC), permanently extinguishing all legal claims and eliminating any risk of future litigation or asset attachment."
    },
    {
      q: "What legal remedies exist against abusive recovery agents under Indian law?",
      a: "Borrowers have multi-tier legal remedies: (1) Filing a formal harassment complaint with the bank's Principal Nodal Officer (PNO), (2) Escalating to the RBI Integrated Ombudsman (cms.rbi.org.in) for statutory penalties against the bank, (3) Filing an FIR under Sections 329, 308, and 351 of the Bharatiya Nyaya Sanhita (BNS) / Sections 441, 383, and 506 of the IPC for criminal intimidation and extortion, and (4) Filing a civil injunction suit or Consumer Protection complaint for damages."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. COMPACT HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Recovery Agents Seize Property?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Worried that recovery agents will seize your house or assets for an unsecured personal loan? Understand your legal protections under Section 60 CPC, SARFAESI Act restrictions, and what banks are actually allowed to do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Assets: Know Your Legal Rights</span>
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
                      href={'#' + link.id}
                      className={
                        isActive
                          ? 'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Asset Protection Law</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by CPC 1908 Section 60, SARFAESI Act 2002 &amp; RBI Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: PROPERTY SEIZURE &amp; RECOVERY AGENT REALITIES</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Direct Seizure Authority:</strong> Recovery agents and collection agencies have absolutely zero legal authority to enter your premises, confiscate household items, or seize movable or immovable property. Any forceful entry or physical seizure constitutes criminal trespass and extortion under the Bharatiya Nyaya Sanhita (BNS) and IPC.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">SARFAESI Act Does NOT Apply to Unsecured Debts:</strong> Under Section 31(i) of the SARFAESI Act, 2002, the summary property attachment powers without court intervention apply strictly to secured loans (such as home mortgages). Unsecured personal loans and credit cards do not create any legal charge or mortgage over your property.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 60 CPC Statutory Protections:</strong> Even if a lender obtains a formal civil money decree, Section 60 of the Code of Civil Procedure (CPC), 1908 exempts essential items, primary residential houses (under state amendments), wearing apparel, cooking utensils, tools of livelihood, pensions, EPF, and gratuity from execution attachment.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Supreme Court Strict Anti-Musclemen Precedents:</strong> In landmark judgments including <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> and <em>CBI v. Bank of India</em>, the Supreme Court ruled that banks cannot use recovery agents to forcefully seize property or intimidate borrowers, establishing civil liability and criminal action for violations.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Permanent Remedy via One-Time Settlement (OTS):</strong> Resolving an unsecured loan default through a structured compromise One-Time Settlement (OTS) eliminates all legal litigation risk, secures an unconditional No Dues Certificate (NDC), and protects your personal assets permanently.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Recovery Agent Powers & Limitations */}
            <section id="can-agents-seize-property" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. What Powers Do Debt Recovery Agents Actually Have? (Debunking Seizure Myths)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers experience genuine financial distress due to medical emergencies, business downturns, or sudden job loss and default on unsecured personal loan Equated Monthly Installments (EMIs), third-party debt recovery agencies often resort to aggressive, intimidating tactics. One of the most terrifying threats used by these agents is claiming that they will arrive with a &quot;seizure squad&quot;, confiscate your vehicle, take away household furniture and electronics, or seal your residential premises.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Indian banking jurisprudence, commercial statutes, and Reserve Bank of India (RBI) regulations, let us state the law unambiguously: <strong>A recovery agent has ZERO legal authority to seize, attach, impound, confiscate, or take possession of any property whatsoever.</strong>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <UserCheck className="w-4 h-4" />
                    <span>Pure Facilitation Role</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents are third-party service contractors hired solely to communicate and facilitate voluntary repayment. They hold no judicial or executive enforcement powers under Indian law.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-red-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Criminal Liabilities</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Any agent attempting forceful home entry or physical asset confiscation commits Criminal Trespass (Sec 329 BNS / Sec 441 IPC) and Extortion (Sec 308 BNS / Sec 383 IPC).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Court Order Mandatory</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Only an authorized Bailiff or Court Amin executing a valid Civil Court decree under Order 21 CPC can legally attach assets, never a private recovery agency.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Supreme Court Precedent: ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711</span>
                </div>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed">
                  The Hon&apos;ble Supreme Court of India held in unequivocal terms that banks cannot deploy musclemen or private recovery agents to take forceful possession of property. The Court declared: <em>&quot;We are governed by a rule of law in the country, and the recovery of loans must be done only through legal procedure. The practice of using musclemen to take possession of property from defaulting borrowers is completely illegal and unconstitutional.&quot;</em>
                </p>
              </div>
            </section>

            {/* SECTION 2: SARFAESI Act vs Unsecured Personal Loans */}
            <section id="sarfaesi-act-unsecured-debt" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>SARFAESI Act Demystified</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The SARFAESI Act Myth: Why Section 13 Possession Does NOT Apply to Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A common scare tactic used by unethical collection agencies is sending notices bearing threatening legal jargon such as &quot;Notice under Section 13(2) of SARFAESI Act&quot; or &quot;Imminent Auction of Residential House under SARFAESI Rules&quot;. Many borrowers panic because they know the SARFAESI Act enables banks to seize mortgaged properties without going through a civil court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, applying the SARFAESI Act to an unsecured personal loan or credit card is legally impossible and constitutes a gross misrepresentation of statutory law. Here is the exact legal reality:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Statutory Provision
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Section 31(i) of SARFAESI Act, 2002</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Express Exemption of Unsecured Loans &amp; General Debts
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Section 31(i) of the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 explicitly mandates that the provisions of this Act <strong>shall not apply to any security interest created in agricultural land, or any case in which no security interest is created</strong>. Because an unsecured personal loan contains no mortgage deed, no hypothecation, and no pledge of assets, SARFAESI powers are completely unavailable to the lender.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Secured vs. Unsecured Legal Distinction
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Contractual Charge Creation</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Why Mortgage Rights Cannot Be Assumed
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When you take a home loan, you execute a registered Memorandum of Deposit of Title Deeds (MODTD), giving the bank an equitable mortgage over the property. In stark contrast, when you take an unsecured personal loan, the bank prices in higher interest rates precisely because they have no collateral backup. They cannot later claim rights over your house as if it were a mortgage.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p className="text-amber-900">
                  <strong>How to Respond to Fake SARFAESI Notices:</strong> If a collection agency serves a SARFAESI demand notice for a personal loan or credit card, it is legally invalid. A prompt formal legal rebuttal drafted to the bank&apos;s Principal Nodal Officer pointing out the violation of Section 31(i) will immediately compel the bank to retract the notice and discipline the errant collection agency.
                </p>
              </div>
            </section>

            {/* SECTION 3: Section 60 CPC Statutory Asset Shield */}
            <section id="section-60-cpc-exemptions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Shield className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Civil Shield</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. The Section 60 CPC Shield: What Assets the Law Protects From Court Attachment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To understand the limits of what a bank can do even if they decide to litigate in a regular civil court, one must examine the <strong>Code of Civil Procedure, 1908 (CPC)</strong>. If a bank files a civil money suit (or arbitration) and after years of litigation wins a money decree, it must file an <em>Execution Petition under Order 21 of the CPC</em> to attach the judgment-debtor&apos;s property.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, Parliament incorporated rigorous socio-economic safeguards under <strong>Section 60 of the CPC</strong>. Section 60 explicitly exempts vital personal, domestic, and livelihood assets from any form of court attachment or sale:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#1886ff]" />
                    Domestic Necessities &amp; Primary Shelter
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc list-inside">
                    <li><strong>Necessary Wearing Apparel &amp; Bedding:</strong> All clothing, cooking vessels, kitchen utensils, beds, and bedding of the borrower and family are 100% exempt from attachment under Section 60(1)(a).</li>
                    <li><strong>Livelihood Tools of Artisans:</strong> Tools of artisans, agricultural implements, and cattle necessary to earn a basic living cannot be attached under Section 60(1)(b).</li>
                    <li><strong>Primary Residential Dwellings:</strong> Under various State Amendments to Section 60 (e.g., Delhi, Maharashtra, Punjab, Karnataka), the sole residential house of a judgment-debtor cannot be attached or sold to satisfy an unsecured money decree.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    Salary, Pension &amp; Retirement Protections
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc list-inside">
                    <li><strong>Salary Attachment Cap (Section 60(1)(i)):</strong> In civil execution, the first ₹1,000 plus two-thirds of the remainder of monthly salary is completely exempt from attachment. The remaining one-third can only be attached for a maximum continuous period of 24 months.</li>
                    <li><strong>EPF and PPF Immunity:</strong> Monies standing in Employee Provident Fund (EPF) and Public Provident Fund (PPF) are statutorily protected from court attachment under the Provident Funds Act, 1925.</li>
                    <li><strong>Pensions and Gratuity:</strong> Government pensions and statutory gratuity payable under the Payment of Gratuity Act, 1972 are immune under Section 60(1)(g).</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Summary of Legal Protections:</strong> Even with a full Civil Court decree, a lender cannot render a borrower homeless, cannot take away daily domestic necessities, cannot touch retirement PF funds, and cannot seize salary beyond a strictly capped fractional limit.
                </p>
              </div>
            </section>

            {/* SECTION 4: 4-Sided Bordered Grid Comparison Table */}
            <section id="secured-vs-unsecured-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Asset Attachment Comparison Grid: Secured vs. Unsecured Loan Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the vast statutory distinction between secured collateral and unsecured personal debt is crucial for evaluating your exposure. This comparative grid details how property rights and recovery powers differ across loan categories in India:
              </p>

              {/* TABLE WITH BOTH VERTICAL AND HORIZONTAL GRID LINES */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Loan / Debt Category</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Collateral / Security Created</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">SARFAESI Act Applicable?</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Can Agents Directly Seize?</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Court Decree Required?</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300 text-[#1886ff]">Strategic Legal Defense</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Home Loan / LAP</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Equitable Mortgage on Immovable Property</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">YES (Sec 13(2) &amp; 13(4))</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700 font-semibold">Only Authorized Officer with DM Order</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-600">NO (Direct SARFAESI Enforcement)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">File Section 17 Securitisation Application before DRT</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Auto / Vehicle Loan</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Hypothecation of Specific Vehicle</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">YES (Moveable Asset Securitisation)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700 font-semibold">Strict RBI notice required before repossession</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-600">NO (Subject to Fair Practices Code)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Challenge repossession without prior notice under Prakash Kaur</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Personal Loan (Bank / NBFC)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NONE (100% Unsecured)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Exempt under Sec 31(i))</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Zero Authority)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-900 font-semibold">YES (Civil Suit / Arbitration Decree)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Assert Sec 60 CPC Shield &amp; Negotiate Compromise OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Credit Card Debt</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NONE (Revolving Line of Credit)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Exempt under Sec 31(i))</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Zero Authority)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-900 font-semibold">YES (Civil Money Suit / Lok Adalat)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Dispute inflated finance charges &amp; execute final OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Digital Fintech Loan Apps</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NONE (Digital Unsecured Advance)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Exempt under Sec 31(i))</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Illegal Harassment Prohibited)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-900 font-semibold">YES (Rarely pursued in court)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">File Cyber Crime &amp; RBI Sachet complaint for data privacy breach</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Technical Financial Risk & Cost-Benefit Analytics */}
            <section id="financial-feasibility-analytics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial &amp; Legal Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Technical Financial Risk Analytics: Why Banks Rarely Attach Property for Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often wonder: <em>&quot;If banks technically have the right to file a civil suit and seek execution, why do recovery agents make empty seizure threats instead of filing cases immediately?&quot;</em> The answer lies in the rigorous cost-benefit mathematics of institutional litigation in India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    The Economics of Civil Money Suits (Order 37 / Execution)
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Ad-Valorem Court Fees (State Dependent):</span>
                      <span className="font-bold text-slate-900">5.0% – 10.0% of Claim</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Senior Advocate &amp; Litigation Retainer:</span>
                      <span className="font-bold text-slate-900">₹40,000 – ₹1,20,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Average Civil Trial Duration in India:</span>
                      <span className="font-bold text-red-600">3 to 6 Years</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Order 21 Execution Petition Timeline:</span>
                      <span className="font-bold text-red-600">2 to 4 Additional Years</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Total Litigation Cost Ratio (&lt;₹10 Lakhs):</span>
                      <span className="text-red-700">35% to 60% of Outstanding</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    NPA Provisioning &amp; RBI Haircut Incentives
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>90 DPD Classification:</span>
                      <span className="font-bold text-amber-600">Non-Performing Asset (NPA)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Mandatory Bank Capital Provisioning:</span>
                      <span className="font-bold text-red-600">15% to 100% of Asset</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Asset Write-Off Timeline:</span>
                      <span className="font-bold text-slate-900">12 to 24 Months</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Recovery Desk Recovery KPI Target:</span>
                      <span className="font-bold text-emerald-700">25% to 45% Recovery</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Borrower Settlement Advantage:</span>
                      <span className="text-emerald-700">40% to 75% Waiver on Penalties</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100/90 border border-slate-200 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Strategic Takeaway for Borrowers:</strong> For personal loans under ₹15 to ₹20 Lakhs, executing property attachment through civil court costs banks more in court fees, legal costs, and multi-year delays than the recoverable sum. This is why banks prefer offering a <strong>One-Time Settlement (OTS)</strong> to clean their balance sheet rather than litigating.
                </p>
              </div>
            </section>

            {/* SECTION 6: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Step Asset Protection Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review this high-level visual roadmap illustrating how Indian statutory law protects your personal assets, how to handle unlawful recovery harassment, and how to reach an amicable compromise settlement:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/can-recovery-agents-seize-property.jpg"
                    alt="Can Recovery Agents Seize Property Legal Process Infographic India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Blueprint • Section 60 CPC &amp; SARFAESI Protections</span>
                  <a
                    href="/images/infographics/can-recovery-agents-seize-property.jpg"
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
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. 6-Stage SOP for Borrowers Facing Property Seizure Threats
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If recovery agents contact you or visit your home making threats of asset confiscation, follow this structured, legally backed 6-stage Standard Operating Procedure to protect your rights:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      01
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 1: Credential Verification &amp; Audio/Video Documentation
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Demand the recovery agent&apos;s official Employee ID card, the bank&apos;s direct letter of authorization, and their Debt Recovery Agency (DRA) accreditation details. Record all telephonic conversations and home visits. Do not sign any handwritten undertakings or voluntary surrender slips under duress.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      02
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 2: Rebuttal on SARFAESI &amp; Section 60 CPC Immunity
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Inform the agent in writing or verbally that an unsecured personal loan contains no mortgage lien, making SARFAESI Act inapplicable under Section 31(i). Remind them that primary residences and basic household assets are statutorily protected from execution under Section 60 of the CPC.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      03
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 3: Cease &amp; Desist Notice to Bank Principal Nodal Officer (PNO)
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Issue a formal legal Cease &amp; Desist notice addressed to the bank&apos;s Principal Nodal Officer and Managing Director. Cite specific instances of agent intimidation, time-stamp violations (calling outside 8 AM to 7 PM), and illegal seizure threats in violation of RBI Master Directions.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      04
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 4: Police Complaint for Extortion and Criminal Intimidation
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    If agents threaten physical force, attempt to enter your home without consent, or threaten your family, lodge an immediate written complaint / FIR at the local police station under Section 329 (Criminal Trespass), Section 308 (Extortion), and Section 351 (Criminal Intimidation) of the Bharatiya Nyaya Sanhita (BNS).
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      05
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 5: Escalation to RBI Integrated Ombudsman (cms.rbi.org.in)
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    If the bank fails to resolve your grievance within 30 days, file an online complaint through the RBI Complaint Management System (CMS). The RBI Ombudsman holds statutory authority to penalize banks, award compensation for mental agony, and enforce compliance with Fair Practices Codes.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      06
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 6: Negotiating a Compromise OTS &amp; Securing No Dues Certificate
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Once abusive recovery tactics are halted through legal intervention, initiate professional One-Time Settlement (OTS) negotiations with the bank&apos;s senior settlement committee. Secure a formal settlement letter with 40% to 75% waiver, pay directly to the bank loan account, and collect your unconditional No Dues Certificate (NDC).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Formal Legal Notice Monospace Terminal Draft */}
            <section id="formal-legal-notice-draft" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Rebuttal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Formal Cease &amp; Desist Legal Notice Draft
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Below is a formal legal response template engineered to stop unlawful property seizure threats and assert your statutory protections under Section 60 CPC, SARFAESI Section 31(i), and RBI Recovery Master Directions:
              </p>

              {/* DARK MONOSPACE TERMINAL DRAFT */}
              <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs shadow-md border border-slate-800 space-y-3 overflow-x-auto leading-relaxed">
                <div className="text-emerald-400 font-bold border-b border-slate-800 pb-2 flex justify-between">
                  <span>LEGAL NOTICE: CEASE &amp; DESIST AGAINST UNLAWFUL PROPERTY SEIZURE THREATS</span>
                  <span className="text-slate-500 text-[10px]">SPEED POST / EMAIL WITH AD</span>
                </div>
                <div className="text-slate-300 space-y-2">
                  <p><strong>TO:</strong> The Principal Nodal Officer / Grievance Redressal Desk</p>
                  <p><strong>LENDER:</strong> [Name of Commercial Bank / NBFC Institution]</p>
                  <p><strong>LOAN ACCOUNT NUMBER:</strong> [Enter Unsecured Personal Loan No.]</p>
                  <p><strong>SUBJECT:</strong> Notice of Criminal Intimidation, Unlawful Property Seizure Threats &amp; Gross Violation of RBI Fair Practices Code by Authorized Collection Agents</p>
                  <p className="pt-2">Sir / Madam,</p>
                  <p>
                    1. The undersigned borrower availed an unsecured personal loan bearing account number referenced above. Due to unforeseen financial hardship [brief reason: job loss / medical emergency], monthly installments suffered default.
                  </p>
                  <p>
                    2. Take notice that on [Date] at [Time], third-party recovery agents claiming representation on behalf of your institution visited the undersigned&apos;s residential premises and issued severe threats of forceful entry, auction of residential premises, and confiscation of domestic furniture and vehicles.
                  </p>
                  <p>
                    3. You are explicitly reminded that the subject debt is entirely UNSECURED. Under Section 31(i) of the SARFAESI Act, 2002, your institution holds zero security interest, mortgage, or hypothecation over the undersigned&apos;s assets. Direct seizure of assets without a decree is an act of Criminal Trespass (Sec 329 BNS / Sec 441 IPC) and Extortion (Sec 308 BNS / Sec 383 IPC).
                  </p>
                  <p>
                    4. Furthermore, under Section 60 of the Code of Civil Procedure, 1908, essential personal effects, wearing apparel, cooking utensils, tools of trade, and primary residential houses are statutorily immune from civil execution.
                  </p>
                  <p>
                    5. You are hereby called upon to immediately CEASE AND DESIST all unauthorized home visits, abusive communications, and unlawful seizure threats. Direct your authorized settlement committee to provide an audited Statement of Account to explore an amicable One-Time Settlement (OTS) in accordance with RBI guidelines.
                  </p>
                </div>
                <div className="text-slate-500 text-[10px] pt-2 border-t border-slate-800 flex justify-between">
                  <span>Advocate Panel / Borrower Legal Defense Wing</span>
                  <span>Governed by RBI Master Direction DOR.ORG.REC.65/21.04.158/2022-23</span>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Hierarchy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Grievance Redressal &amp; Institutional Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When dealing with abusive recovery agents, escalate systematically through the statutory grievance redressal mechanism established by the Reserve Bank of India:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* Tier 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        Tier 1 (Internal)
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Max 30 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Branch Manager &amp; Bank Customer Service
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Submit a formal written complaint via registered email or speed post to the Branch Head and Head of Customer Care detailing recovery agent harassment. Obtain a formal Complaint Ticket Number.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-[#1886ff] pt-2 border-t border-slate-100">
                    Step: Establish Formal Paper Trail
                  </div>
                </div>

                {/* Tier 2 */}
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                        Tier 2 (Appellate)
                      </span>
                      <span className="text-xs font-semibold text-slate-500">30-Day Window</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Principal Nodal Officer (PNO)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If Tier 1 fails to resolve the harassment within 30 days or rejects the dispute, escalate to the bank&apos;s Principal Nodal Officer (PNO) and Internal Ombudsman, who have direct authority to recall recovery files.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-[#1886ff] pt-2 border-t border-slate-100">
                    Step: Direct Settlement Negotiation
                  </div>
                </div>

                {/* Tier 3 */}
                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Tier 3 (Statutory)
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Final Authority</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      RBI Integrated Ombudsman &amp; Courts
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File a complaint on the RBI CMS Portal (<code>cms.rbi.org.in</code>) under the Reserve Bank - Integrated Ombudsman Scheme, 2021. For criminal harassment, lodge an FIR with local police or Cyber Crime Cell.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-700 pt-2 border-t border-slate-100">
                    Step: Regulatory Sanctions &amp; Penalty
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: Chronological Milestone Resolution Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Resolution Timelines &amp; Settlement Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The journey from loan default and recovery threats to complete debt resolution follows a predictable statutory and banking lifecycle. Here is the realistic milestone roadmap:
              </p>

              {/* TABLE WITH BOTH VERTICAL AND HORIZONTAL GRID LINES */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Timeline Stage</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Default &amp; Bank Action</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Recovery Tactics Encountered</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Borrower Protection Strategy</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300 text-[#1886ff]">Credit &amp; Legal Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 1 – 30</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Special Mention Account (SMA-0)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Automated SMS, reminder IVR calls</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Communicate financial hardship in writing</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Late fee applied; minor score drop (-15 pts)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 31 – 60</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">SMA-1 Classification</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Collection call center outreach</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Request loan restructuring or moratorium</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">30+ DPD reported to CIBIL / Experian</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 61 – 90</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">SMA-2 Classification</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Third-party agency assignment, home visits</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Demand agent ID; verify credentials; record visits</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">60+ DPD flag; credit freeze across bureaus</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 91 – 120</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700 font-bold">NPA (Non-Performing Asset)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700">Legal demand notices, property seizure threats</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Issue Cease &amp; Desist Notice citing Sec 60 CPC &amp; SARFAESI</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">NPA status reported; bank creates capital provision</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 121 – 180</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Loss Asset / Hard Recovery</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Arbitration notices or Lok Adalat referrals</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Initiate formal One-Time Settlement (OTS) negotiations</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-semibold">Waiver of 40% to 75% on penal charges offered</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Post-Settlement</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Debt Extinguished</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700">Zero recovery activity; all harassment halted</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Obtain unconditional No Dues Certificate (NDC)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Account marked &quot;Closed&quot; / &quot;Settled&quot;; permanent asset safety</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Credit Cards, ARCs &amp; Fake Court Bailiffs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different lending institutions and recovery channels employ distinct tactics. Here is how to navigate complex real-world situations:
              </p>

              <div className="space-y-4 pt-2">
                {/* Scenario 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                      Scenario 01: Credit Card Debt &amp; WhatsApp Seizure Letters
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Unsecured Revolving Credit</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Forged &quot;Court Orders&quot; Sent via Instant Messaging
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Credit card recovery agencies frequently send forged documents marked &quot;Notice of Attachment of Moveable Property&quot; over WhatsApp, demanding immediate UPI payments. Authentic court processes are NEVER served via unofficial WhatsApp numbers without an official eCourts CNR number. Verify any case number on <code>ecourts.gov.in</code> to expose the forgery.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Scenario 02: Asset Reconstruction Companies (ARCs)
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Phoenix, ARCIL, CFM, Edelweiss</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    When Your Bad Loan is Sold to an ARC
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When banks write off defaulted personal loans, they bundle and assign the portfolio to Asset Reconstruction Companies under Section 5 of the SARFAESI Act. ARCs purchase these loans at a steep discount (often 15% to 30% of face value). ARCs inherit only the rights of the original lender; they cannot magically convert an unsecured loan into a secured property attachment. ARCs are prime candidates for lucrative OTS compromise settlements.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md">
                      Scenario 03: Fake Bailiffs &amp; Police Impersonators
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Criminal Impersonation</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Agents Claiming to be Court Bailiffs or Police Sub-Inspectors
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If an individual arrives at your home claiming to be a police officer or court bailiff to &quot;seize property&quot; for a personal loan, immediately ask for their official government ID and badge number, and dial 112 (Emergency Police Control Room). Impersonating a public servant is a non-bailable cognizable offense under Section 204 of the Bharatiya Nyaya Sanhita (BNS) / Section 170 IPC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: About CredSettle Component */}
            <section id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </section>

            {/* SECTION 13: Collapsible Interactive FAQ Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions About Property Seizure &amp; Recovery Agents
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review exhaustive legal answers to the most common questions regarding loan default, recovery agent boundaries, and statutory asset protection under Indian banking law:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors gap-3"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-[#1886ff] font-extrabold text-xs bg-blue-50 px-2 py-0.5 rounded">
                            Q{idx + 1}
                          </span>
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={
                            'w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ' +
                            (isOpen ? 'transform rotate-180 text-[#1886ff]' : '')
                          }
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 14: Regulatory Citations & Outbound Authority Links */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Authorities</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Official Statutory &amp; Regulatory Citations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The legal frameworks, statutory exemptions, and precedents referenced in this guide are anchored directly in official Indian legislation and regulatory master directions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>RBI Master Directions (Recovery Agents)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 60 CPC 1908 (India Code)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#1886ff]" />
                    <span>SARFAESI Act 2002 (Sec 31(i))</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>RBI Integrated Ombudsman (CMS)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>National Cyber Crime Reporting Portal</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#1886ff]" />
                    <span>TransUnion CIBIL Dispute Portal</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* SECTION 15: 10 Internal Topic Badges */}
            <section className="pt-2 border-t border-slate-200/80 space-y-3">
              <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                Related Legal Debt Defense Guides:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Arbitration Notice for Personal Loan
                </Link>
                <Link
                  href="/section-138-cheque-bounce-personal-loan"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  NACH / ECS Bounce Section 25
                </Link>
                <Link
                  href="/lok-adalat-personal-loan-settlement"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Lok Adalat Loan Settlement
                </Link>
                <Link
                  href="/convert-settled-status-to-closed"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Convert Settled Status to Closed
                </Link>
                <Link
                  href="/dispute-wrong-settled-status-cibil"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Dispute Wrong Settled Status in CIBIL
                </Link>
                <Link
                  href="/fake-loan-app-harassment-cyber-crime"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Fake Loan App Cyber Complaint
                </Link>
                <Link
                  href="/get-noc-after-loan-settlement"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Get NOC After Loan Settlement
                </Link>
                <Link
                  href="/full-and-final-settlement-meaning"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Full and Final Settlement Meaning
                </Link>
                <Link
                  href="/documents-needed-for-loan-settlement"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Documents Needed for Settlement
                </Link>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBARS ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* 1. Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-base flex items-center justify-center flex-shrink-0 hover:bg-blue-200 transition-colors shadow-2xs"
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
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                Specialist in civil debt dispute resolution, Section 60 CPC asset protection, and RBI regulatory enforcement with over a decade of experience safeguarding Indian borrowers.
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
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CredSettle Panel</span>
                </span>
              </div>
            </div>

            {/* 2. Emergency CTA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-5 shadow-md space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white">
                <Lock className="w-3 h-3" />
                <span>100% CONFIDENTIAL</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold tracking-tight leading-snug">
                  Facing Property Seizure Threats?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Stop illegal recovery agent harassment and protect your family. Get direct representation before the bank&apos;s settlement committee.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs sm:text-sm text-center block transition-all shadow-sm hover:bg-slate-50"
                >
                  Protect Your Assets: Know Your Legal Rights
                </Link>
                
                <a
                  href="tel:+918800226635"
                  className="w-full py-2 px-3 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-xs text-center flex items-center justify-center gap-2 transition-all border border-blue-500/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* 3. CredSettle Trust Commitments Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CredSettle Trust Commitments</span>
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Performance &amp; success-fee aligned engagement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> 100% of settlement funds paid directly to bank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> Strict adherence to statutory fair recovery rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Protecting clients across all 28 states &amp; UTs.</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
