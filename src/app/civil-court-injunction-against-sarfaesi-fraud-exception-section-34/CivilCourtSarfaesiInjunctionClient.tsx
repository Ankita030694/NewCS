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
  Landmark
} from 'lucide-react';

export default function CivilCourtSarfaesiInjunctionClient() {
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
    { id: 'section-34-bar', label: '1. Section 34 Jurisdiction Bar' },
    { id: 'mardia-chemicals-doctrine', label: '2. Mardia Chemicals Fraud Doctrine' },
    { id: 'maintainability-matrix', label: '3. Civil Court vs DRT Powers' },
    { id: 'order-6-rule-4-pleadings', label: '4. Order VI Rule 4 Specific Pleadings' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Civil Injunction Protocol' },
    { id: 'order-7-rule-11-defense', label: '7. Order VII Rule 11 Plaint Defense' },
    { id: 'escalation-matrix', label: '8. 3-Tier Defensive Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Timeline to Stay' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Title Fraud' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a civil court grant an injunction against SARFAESI proceedings?',
      a: 'Yes, but only under narrow legal exceptions. While Section 34 of the SARFAESI Act bars civil courts from entertaining suits against secured creditors, the Supreme Court in Mardia Chemicals Ltd. v. Union of India established that a civil court can intervene and grant an injunction where the lender action is fraudulent or their claim is completely absurd and untenable.'
    },
    {
      q: 'What constitutes fraud to bypass the Section 34 jurisdiction bar?',
      a: 'Fraud includes forged title deeds, fabricated mortgage agreements, impersonation of property owners, collusive auction sales between bank officers and buyers, or mortgaging third-party property without consent. In Electrosteel Castings, the Supreme Court confirmed that specific particulars of fraud must be pleaded under Order VI Rule 4 CPC.'
    },
    {
      q: 'Why cannot the Debt Recovery Tribunal (DRT) adjudicate title fraud?',
      a: 'The DRT is a statutory tribunal with summary powers under Section 17 of SARFAESI. It lacks plenary civil court powers to declare title, partition ancestral property, or cancel registered forged deeds under Section 31 of the Specific Relief Act, 1963. Such substantive civil remedies lie exclusively with civil courts.'
    },
    {
      q: 'What should a plaintiff plead under Order VI Rule 4 CPC in a fraud suit?',
      a: 'The plaint must set out precise dates, specific misrepresentations, details of forged signatures, forensic examination reports, or police FIR records. General or vague allegations of fraud without particulars will lead to rejection of the plaint under Order VII Rule 11 CPC.'
    },
    {
      q: 'How does a civil court evaluate an Order 39 injunction application against SARFAESI?',
      a: 'The civil court applies the three classic tests: a strong prima facie case of fraud or void mortgage, balance of convenience favoring the preservation of immovable property, and irreparable injury that cannot be compensated in monetary damages if an illegal auction proceeds.'
    },
    {
      q: 'How do you defeat a bank application under Order VII Rule 11 CPC?',
      a: 'Under Order VII Rule 11(d), the court considers only the averments made in the plaint. By establishing that the suit seeks declaration of title, cancellation of forged documents, and pleads specific particulars of fraud falling within the Mardia Chemicals doctrine, the suit survives rejection.'
    },
    {
      q: 'Can a third-party bona fide owner file a civil suit against a bank SARFAESI action?',
      a: 'Yes. If a fraudster mortgaged property belonging to a third-party owner or builder fraudulently mortgaged sold flats, the genuine owner can file a civil suit for declaration of ownership and an injunction restraining bank possession under Order 39 Rules 1 and 2.'
    },
    {
      q: 'Does filing a civil suit require a 50 percent pre-deposit like DRAT appeals?',
      a: 'No. Unlike appeals before the Debt Recovery Appellate Tribunal (DRAT) under Section 18 of SARFAESI which mandate a 25% to 50% pre-deposit, a civil suit filed under the fraud exception requires only standard court fees based on state valuation rules.'
    },
    {
      q: 'What happens if a bank files a caveat in civil court under Section 148A CPC?',
      a: 'When a caveat is filed, the court cannot grant an ex-parte injunction without hearing the bank. Your counsel must serve advance copies of the plaint and injunction application to the caveator bank and argue for urgent interim protection on Day 1.'
    },
    {
      q: 'How does CredSettle assist borrowers and property owners facing fraudulent SARFAESI actions?',
      a: 'CredSettle drafts watertight civil plaints complying with Order VI Rule 4 CPC, engages experienced high court advocates to secure Order 39 injunctions, defends against Order VII Rule 11 applications, and negotiates clean compromise settlements or title rectifications with lenders.'
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
            <Gavel className="w-3.5 h-3.5" />
            <span>SARFAESI Property Defense &amp; Civil Jurisprudence</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Civil Court Injunction Against SARFAESI: Fraud Exception Guide
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand how the fraud exception established in Mardia Chemicals allows property owners and borrowers to secure civil court injunctions under Order 39 CPC against fraudulent SARFAESI auctions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stay Fraudulent Bank Action</span>
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
                  <span>Fraud Exception Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Supreme Court precedent in Mardia Chemicals and Order 39 CPC.
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
                <h2 className="text-xs md:text-sm font-black text-[#1886ff]">
                  Executive Brief: Section 34 SARFAESI Civil Court Bar
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The Section 34 Statutory Bar:</strong> Section 34 of the SARFAESI Act bars civil courts from entertaining suits or granting injunctions in matters falling under DRT jurisdiction.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The Mardia Chemicals Exception:</strong> The Supreme Court established that where the lender action is fraudulent or their claim is absurd and untenable, civil courts retain jurisdiction.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Order VI Rule 4 CPC Mandate:</strong> In Electrosteel Castings, the apex court ruled that mere boilerplate allegations of fraud fail. Specific dates, documents, and fraudulent particulars are mandatory.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">DRT Cannot Cancel Deeds:</strong> The DRT cannot declare title or cancel registered deeds under Section 31 of the Specific Relief Act. These remedies belong solely to civil courts.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Pre-Deposit Burden:</strong> Unlike a DRAT appeal under Section 18 requiring up to 50% pre-deposit, a civil suit offers immediate equitable injunctions without pre-deposit.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Section 34 Jurisdiction Bar: Scope & Principles */}
            <section id="section-34-bar" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 34 Jurisdiction Bar: Scope &amp; Principles
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act) was enacted to empower banks and financial institutions to recover non-performing assets without judicial intervention. A cornerstone of this framework is Section 34, which creates an express statutory bar on civil courts.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 34 states that no civil court shall have jurisdiction to entertain any suit or proceeding in respect of any matter which a Debts Recovery Tribunal (DRT) or the Appellate Tribunal (DRAT) is empowered to determine. The section further commands that no injunction shall be granted by any court in respect of any action taken or to be taken under the Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legislative intent was to eliminate dilatory tactics by defaulting borrowers who previously filed frivolous civil suits to stall bank recovery. Under ordinary circumstances, any grievance regarding loan notices issued under Section 13(2), possession measures under Section 13(4), or administrative assistance under Section 14 must be challenged exclusively before the DRT under Section 17.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, Section 34 is not an absolute shield for illegal or corrupt conduct. The Indian legal system operates on the fundamental maxim that fraud vitiates all solemn acts. When a transaction is conceived in fraud, statutory protections cannot be used to defeat justice.
              </p>
            </section>

            {/* SECTION 2: Mardia Chemicals Fraud Exception: Legal Doctrine */}
            <section id="mardia-chemicals-doctrine" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Exception Doctrine</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Mardia Chemicals Fraud Exception: Legal Doctrine
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The constitutional validity of the SARFAESI Act was challenged in the landmark Supreme Court decision of Mardia Chemicals Ltd. v. Union of India (2004) 4 SCC 311. While upholding the Act, the Supreme Court recognized that total exclusion of civil court jurisdiction could result in grave injustice where transactions are tainted by fraud.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In paragraph 51 of the judgment, the Supreme Court established a narrow exception to Section 34. The court held that civil courts retain jurisdiction where the action of the secured creditor is alleged to be fraudulent, or where the creditor claim is so absurd and untenable that it requires no probe. The court also recognized civil court competence in English mortgage disputes.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This ruling affirmed Section 9 of the Code of Civil Procedure (CPC), 1908, which gives civil courts inherent jurisdiction to try all civil suits unless barred. The court held that statutory bars cannot protect acts rooted in fraud. The legal principle of fraus et jus nunquam cohabitant ensures that courts of equity can always intervene to prevent fraud.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Subsequent rulings, including Authorized Officer, Indian Overseas Bank v. Ashok Saw Mill (2009) and the Bombay High Court Full Bench decision in Bank of Baroda v. Gopal Shriram Panda (2021), reaffirmed this doctrine. When a plaintiff seeks declaration of title or cancellation of a forged mortgage deed, the civil court is the proper legal forum.
              </p>

              {/* Representative Ledger / Dispute Math Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs mt-4">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Dispute Economics: Civil Court vs DRT Pre-Deposit Burden</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹2.4 Crore Fraudulent Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Litigation Pathway</th>
                        <th className="p-3">Statutory Pre-Deposit Required</th>
                        <th className="p-3">Jurisdiction to Cancel Forged Deed</th>
                        <th className="p-3 text-right">Injunction Feasibility</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">DRT Section 17 Appeal</td>
                        <td className="p-3">Nil at DRT, but limited summary powers</td>
                        <td className="p-3 text-rose-600 font-semibold">No Power to Cancel Registered Deeds</td>
                        <td className="p-3 text-right text-slate-700">Limited to procedural violations</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">DRAT Section 18 Appeal</td>
                        <td className="p-3 text-rose-600 font-bold">50% Mandate (₹1.20 Crore Upfront)</td>
                        <td className="p-3 text-rose-600 font-semibold">Appellate summary forum only</td>
                        <td className="p-3 text-right text-rose-600 font-bold">Conditional on heavy deposit</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Civil Suit (Fraud Exception)</td>
                        <td className="p-3 text-emerald-700 font-bold">Zero Pre-Deposit (Standard Court Fees)</td>
                        <td className="p-3 text-emerald-700 font-bold">Full Powers Under Sec 31 Specific Relief Act</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Order 39 Interim Injunction</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Maintainability Matrix: Civil Court vs DRT Powers */}
            <section id="maintainability-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Jurisdictional Boundaries</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Maintainability Matrix: Civil Court vs DRT Powers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Choosing the correct legal forum is the difference between getting an urgent injunction and having your case dismissed. The Debts Recovery Tribunal is a creature of statute with specialized summary jurisdiction. It cannot grant plenary civil remedies.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The table below contrasts the powers of the Civil Court with those of the DRT to show where each forum has exclusive jurisdiction.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Legal Issue / Dispute Type</th>
                      <th className="p-3">Appropriate Forum</th>
                      <th className="p-3">Governing Statute</th>
                      <th className="p-3">Scope of Available Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Forged Title Deed or Impersonation</td>
                      <td className="p-3 text-emerald-700 font-bold">Civil Court</td>
                      <td className="p-3">Specific Relief Act, Sec 31 &amp; CPC Sec 9</td>
                      <td className="p-3">Cancellation of deed and permanent injunction.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Third-Party Ownership &amp; Title Declaration</td>
                      <td className="p-3 text-emerald-700 font-bold">Civil Court</td>
                      <td className="p-3">Specific Relief Act, Sec 34</td>
                      <td className="p-3">Declaration of true title and peaceful possession.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Partition of Undivided Joint Hindu Property</td>
                      <td className="p-3 text-emerald-700 font-bold">Civil Court</td>
                      <td className="p-3">Code of Civil Procedure, 1908</td>
                      <td className="p-3">Preliminary and final partition decree.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Procedural Breach in 13(2) Notice</td>
                      <td className="p-3 text-blue-700 font-semibold">DRT (Sec 17)</td>
                      <td className="p-3">SARFAESI Act, 2002</td>
                      <td className="p-3">Quashing notice; directing re-issuance.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Undervaluation of Auction Reserve Price</td>
                      <td className="p-3 text-blue-700 font-semibold">DRT (Sec 17)</td>
                      <td className="p-3">Security Interest Enforcement Rules</td>
                      <td className="p-3">Stay on auction pending fresh valuation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Collusive Auction / Bid-Rigging Fraud</td>
                      <td className="p-3 text-purple-700 font-bold">Both (Civil &amp; DRT)</td>
                      <td className="p-3">Mardia Chemicals Doctrine</td>
                      <td className="p-3">Civil suit for fraud or Sec 17 challenge in DRT.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Specific Pleadings Under Order VI Rule 4 CPC */}
            <section id="order-6-rule-4-pleadings" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Pleading Requirements</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Specific Pleadings Under Order VI Rule 4 CPC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Filing a civil suit against a bank recovery action requires strict adherence to procedural rules. In Electrosteel Castings Ltd. v. UV Asset Reconstruction Company Ltd. (2022) 2 SCC 573, the Supreme Court delivered a decisive ruling on how fraud must be pleaded.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The apex court held that merely using the word "fraud" in a plaint does not open the doors of the civil court. If the pleadings are vague or general, the suit will be dismissed as an abuse of process designed to circumvent Section 34.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Order VI Rule 4 of the Code of Civil Procedure, where a party relies on fraud, misrepresentation, or breach of trust, full particulars must be stated in the plaint. This includes:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Exact Chronology and Dates:</strong> When the alleged fraud was conceived, executed, and discovered by the plaintiff.
                </li>
                <li>
                  <strong>Specific Misrepresentations:</strong> The exact false statements made by the borrower, third parties, or bank officials.
                </li>
                <li>
                  <strong>Documentary Evidence of Forgery:</strong> Reports from certified forensic document examiners showing forged signatures or manipulated stamp papers.
                </li>
                <li>
                  <strong>Police Complaints and FIRs:</strong> Details of criminal complaints lodged under relevant sections of the Bharatiya Nyaya Sanhita (BNS) for cheating and forgery.
                </li>
                <li>
                  <strong>Establishment of Independent Title:</strong> Chain of title documents proving that the plaintiff held unencumbered ownership before the fraudulent mortgage.
                </li>
              </ul>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Civil Injunction Legal Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap illustrates the step-by-step litigation path for obtaining a civil court injunction against fraudulent SARFAESI actions under the Mardia Chemicals doctrine.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/civil-court-injunction-against-sarfaesi-fraud-exception-section-34.jpg"
                    alt="Civil Court Injunction Against SARFAESI Section 34 Fraud Exception"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>CredSettle SARFAESI Property Defense Framework • Order 39 CPC Injunction Protocol</span>
                  <a
                    href="/images/infographics/civil-court-injunction-against-sarfaesi-fraud-exception-section-34.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Filing for Order 39 Injunction
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Securing a stay against a bank property auction demands immediate legal precision. Follow this six-stage protocol to file a maintainable civil suit under the fraud exception.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Forensic Document Audit &amp; Title Verification
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Obtain certified copies of the mortgage deed, loan sanction letter, and title chain from the sub-registrar office. Engage a certified forensic expert to verify forged signatures and discrepancies.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Lodge Police FIR for Cheating &amp; Forgery
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Register a formal criminal complaint under relevant BNS provisions for forgery, criminal breach of trust, and cheating. The police complaint serves as vital corroborative evidence in the civil plaint.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Draft Plaint Compliant with Order VI Rule 4
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Draft a civil plaint incorporating specific particulars of fraud. Pray for declaration of title, cancellation of the forged mortgage instrument under Section 31 of the Specific Relief Act, and an injunction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File Application for Order 39 Injunction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File an interlocutory application under Order 39 Rules 1 and 2 CPC. Prove a prima facie case, balance of convenience, and irreparable injury to restrain the bank from taking physical possession or auctioning.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Defeat Bank Caveat &amp; Order VII Rule 11 Motion
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Serve notice to caveator banks under Section 148A CPC. Argue against the bank Order VII Rule 11 application by demonstrating that the fraud exception of Mardia Chemicals applies exclusively to your pleadings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Secure Ad-Interim Stay &amp; Direct Negotiations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Obtain an ad-interim stay order from the civil judge restraining all SARFAESI enforcement. With legal immunity secured, negotiate a title clearance or structured compromise settlement with the bank.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Overcoming Bank's Order VII Rule 11 Application */}
            <section id="order-7-rule-11-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Overcoming Bank's Order VII Rule 11 Application
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Whenever a borrower or third party files a civil suit regarding mortgaged property, the secured creditor will immediately file an application under Order VII Rule 11(d) of the CPC. The bank will argue that the suit is barred by law under Section 34 of the SARFAESI Act and must be rejected at the threshold.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To successfully defend against this application, plaintiffs must utilize established procedural principles:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Plaint Averments Alone Are Evaluated</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under settled Supreme Court law, when deciding an Order VII Rule 11 application, the court must look only at the averments in the plaint. The defense of the bank cannot be considered at this preliminary stage.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Substantive Declaratory Relief Sought</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Show that the plaint seeks declaration of title or cancellation of forged instruments under the Specific Relief Act, which fall outside the statutory authority of the DRT under Section 17.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Mardia Chemicals Precedent Invocation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rely on paragraph 51 of Mardia Chemicals and Bombay High Court full-bench ruling in Gopal Shriram Panda to establish that fraud exceptions directly save the suit from statutory rejection.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Mixed Question of Fact and Law</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Argue that whether fraud occurred is a mixed question of fact and law requiring oral and documentary evidence, which can only be determined after a full trial, not dismissed summarily.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Defensive Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Pathways</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Defensive Matrix: Court Redressal Pathways
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When defending your real estate against unlawful bank foreclosure, deploying an integrated multi-tier legal strategy ensures maximum protection and leverage.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Defense Tier</th>
                      <th className="p-3">Judicial / Administrative Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Strategic Action &amp; Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: Civil Court</td>
                      <td className="p-3">Civil Judge (Senior Division) / District Court</td>
                      <td className="p-3 font-mono">1 to 3 Days (Ad-Interim)</td>
                      <td className="p-3">File suit for declaration of title, cancellation of forged deed, and Order 39 stay on SARFAESI auction.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: High Court</td>
                      <td className="p-3">High Court (Article 226 / 227 Writ)</td>
                      <td className="p-3 font-mono">3 to 7 Days</td>
                      <td className="p-3">Invoke extraordinary constitutional jurisdiction where DRT is non-functional or bank actions violate fundamental rights.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: DRT / OTS</td>
                      <td className="p-3">DRT Presiding Officer &amp; Bank Zonal Office</td>
                      <td className="p-3 font-mono">15 to 45 Days</td>
                      <td className="p-3">File Sec 17 securitisation application while simultaneously negotiating a structured OTS settlement.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Civil Plaint to Auction Stay
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Time is of the essence when a lender initiates SARFAESI enforcement. Understanding the timeline from statutory notice to physical auction helps you deploy legal remedies before possession is lost.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Enforcement Stage</th>
                      <th className="p-3">SARFAESI Statutory Step</th>
                      <th className="p-3">Bank Action Window</th>
                      <th className="p-3">Defensive Civil Legal Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Demand Notice</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(2)</td>
                      <td className="p-3">60-day statutory cure period.</td>
                      <td className="p-3">File Section 13(3A) objection pointing out fraudulent mortgage details.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Symbolic Possession</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(4)</td>
                      <td className="p-3">Notice pasted on property and published in news.</td>
                      <td className="p-3">Gather certified title documents and lodge police FIR for forged mortgage.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">DM / CMM Application</td>
                      <td className="p-3 font-mono text-[11px]">Section 14</td>
                      <td className="p-3">Bank files 9-point affidavit before Magistrate.</td>
                      <td className="p-3">File civil suit with Order VI Rule 4 pleadings; pray for Order 39 stay.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Auction Notice</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Rule 8(6) &amp; 9(1)</td>
                      <td className="p-3">30-day (or 15-day subsequent) public auction notice.</td>
                      <td className="p-3">Serve court notice on caveator bank; argue urgent stay before Civil Judge.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Ad-Interim Stay Order</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Order 39 CPC</td>
                      <td className="p-3">Bank auction halted by judicial order.</td>
                      <td className="p-3 font-bold text-slate-900">Serve certified stay order on Authorized Officer and District Magistrate.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Stay Resolution</td>
                      <td className="p-3 font-mono text-[11px]">Civil Trial / OTS</td>
                      <td className="p-3">Status quo maintained pending trial.</td>
                      <td className="p-3">Enter structured settlement talks to clear title and secure bank No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Third-Party &amp; Title Fraud
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Fraud cases under SARFAESI typically arise in distinct commercial and family contexts. Here is how civil court remedies apply across key scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Homebuyers vs Builder Project Mortgages
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Builders frequently take construction loans and mortgage property without informing buyers who have paid full consideration. Homebuyers can file civil suits for declaration of ownership and obtain injunctions restraining bank possession.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Forged Equitable Mortgages by Tenants or Strangers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an unauthorized party creates a fake title deed and mortgages an owner property to a bank, the genuine owner can institute a civil suit for cancellation under Section 31 of Specific Relief Act and stay the auction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Undivided Coparcenary Hindu Family Property
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When one family member mortgages entire joint property without consent of other coparceners, non-consenting heirs can file a partition suit and restrain the bank from auctioning undivided shares.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Collusive Auctions &amp; Undervalued Bid-Rigging
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where bank officials actively collude with predetermined buyers to sell property far below market rate without statutory publication, affected borrowers can establish fraud and nullify the auction in civil court.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: SARFAESI Fraud Exception
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding civil court jurisdiction, Section 34 bars, fraud exceptions, and property owner rights under Indian law.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all duration-200"
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

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Statutory Citations: SARFAESI &amp; Civil Procedure Laws
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 34, Civil Court Bar on Jurisdiction; Section 13(4), Possession Measures; Section 17, Application Against Measures.
                </li>
                <li>
                  <strong>Supreme Court Precedent:</strong> Mardia Chemicals Ltd. v. Union of India (2004) 4 SCC 311, Paragraph 51 Fraud Exception Doctrine.
                </li>
                <li>
                  <strong>Supreme Court Precedent:</strong> Electrosteel Castings Ltd. v. UV Asset Reconstruction Co. Ltd. (2022) 2 SCC 573, Order VI Rule 4 CPC Pleading Threshold.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 9, Courts to Try All Civil Suits; Order VI Rule 4, Particulars of Fraud; Order VII Rule 11, Rejection of Plaint; Order XXXIX Rules 1 &amp; 2, Temporary Injunctions.
                </li>
                <li>
                  <strong>Specific Relief Act, 1963:</strong> Section 31, When Cancellation May Be Ordered; Section 34, Discretion of Court as to Declaration of Status or Right.
                </li>
                <li>
                  <strong>High Court Landmark Precedent:</strong> Bombay High Court Full Bench in Bank of Baroda v. Gopal Shriram Panda (2021 SCC OnLine Bom 466).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Judicial Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debts Recovery Tribunal Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>eCourts Services India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/sarfaesi-12-year-limitation-period-article-62-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI 12-Year Limitation
                  </Link>
                  <Link href="/challenging-undervalued-sarfaesi-property-auction-reserve-price-drt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Challenge Auction Reserve Price
                  </Link>
                  <Link href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI 13(4) Notice Defense
                  </Link>
                  <Link href="/sarfaesi-section-14-physical-possession-order-dm-cmm" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 14 DM Possession
                  </Link>
                  <Link href="/section-13-8-sarfaesi-act-right-of-mortgage-redemption-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(8) Redemption Rights
                  </Link>
                  <Link href="/surplus-sale-proceeds-after-bank-auction-section-13-7-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Surplus Sale Proceeds
                  </Link>
                  <Link href="/drat-appeal-pre-deposit-waiver-under-section-18-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRAT Pre-Deposit Waiver
                  </Link>
                  <Link href="/order-37-cpc-summary-suit-loan-recovery-leave-to-defend" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Order 37 CPC Summary Suit
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Savings Account Freeze
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Defense
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
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
                Specialist in SARFAESI Act litigation, civil property injunctions, mortgage fraud defense, and banking dispute resolution with extensive experience defending property owners in High Courts and Civil Courts across India.
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
                  URGENT PROPERTY DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Fraudulently Mortgaged Your Property?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our experienced legal advocates invoke the Mardia Chemicals fraud exception to secure urgent Order 39 civil injunctions, halt illegal auctions, and protect your title.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Urgent Injunction Help
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
                  <span>Confidential • Senior High Court Panel</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Pre-Deposit Filing:</strong> Civil suits without 50% DRAT deposit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Forensic Document Audit:</strong> Certified expert forgery reports.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Order 39 Interim Injunctions:</strong> Immediate property auction stay.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Order VII Rule 11 Defense:</strong> Proven track record defeating bank motions.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/sarfaesi-12-year-limitation-period-article-62-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI 12-Year Limitation Period
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Article 62 limitation rules &rarr;</span>
                </Link>

                <Link
                  href="/challenging-undervalued-sarfaesi-property-auction-reserve-price-drt"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Challenge SARFAESI Reserve Price
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">DRT valuation defense &rarr;</span>
                </Link>

                <Link
                  href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 13(4) Notice
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">30-day auction sale challenge &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
