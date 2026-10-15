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
  Home,
  ShieldAlert
} from 'lucide-react';

export default function SarfaesiSection14Client() {
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
    { id: 'dm-cmm-jurisdiction', label: '1. DM & CMM Section 14 Jurisdiction' },
    { id: 'mandatory-affidavit', label: '2. Mandatory 9-Point Affidavit Requirements' },
    { id: 'advocate-commissioner', label: '3. Advocate Commissioner & Police Aid' },
    { id: 'symbolic-vs-physical', label: '4. Symbolic vs Physical Possession Rights' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'challenge-grounds', label: '6. Legal Grounds to Challenge DM Order' },
    { id: 'drt-remedies', label: '7. Section 17 DRT Stay & High Court Writs' },
    { id: 'step-by-step-sop', label: '8. 6-Stage Physical Stay & OTS Protocol' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'tenant-protections', label: '10. Tenant Rights & Third-Party Protection' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a Section 14 SARFAESI physical possession order by DM or CMM?',
      a: 'A Section 14 order is an executive directive issued by the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) assisting a secured creditor (bank or NBFC) to take actual physical possession of a mortgaged property, often deploying an Advocate Commissioner and police force.'
    },
    {
      q: 'Can the DM or CMM issue a physical possession order without giving prior notice to the borrower?',
      a: 'Yes. The Supreme Court in Standard Chartered Bank v. V. Noble Kumar held that Section 14 does not contemplate a regular adjudicatory trial or notice to the borrower by the Magistrate. However, the Magistrate must verify the mandatory 9-point affidavit submitted by the bank before passing the order.'
    },
    {
      q: 'What is the mandatory 9-point affidavit required under Section 14?',
      a: 'Under the proviso to Section 14(1) inserted by Act 1 of 2013, the bank Authorised Officer must affirm 9 specific statutory declarations, including service of the Section 13(2) notice, disposal of Section 13(3A) objections with reasons within 15 days, aggregate default, and lawful entitlement to physical possession.'
    },
    {
      q: 'Can I challenge a Section 14 possession order directly before the High Court under Article 226?',
      a: 'Generally, no. As ruled in United Bank of India v. Satyawati Tondon and PHR Invent v. UCO Bank, borrowers must approach the Debts Recovery Tribunal (DRT) under Section 17. A High Court writ under Article 226 is maintainable only under exceptional circumstances, such as total lack of jurisdiction or procedural nullity.'
    },
    {
      q: 'How do I get an urgent stay order against a Section 14 physical possession order in the DRT?',
      a: 'You must immediately file a Securitisation Application (SA) under Section 17(1) of the SARFAESI Act before the jurisdictional DRT along with an urgent Interlocutory Application (IA) for stay, demonstrating procedural violations such as flawed affidavits, defective demand notices, or non-consideration of representations.'
    },
    {
      q: 'How much advance notice does an Advocate Commissioner give before taking physical possession?',
      a: 'An Advocate Commissioner appointed by the CMM or DM typically serves an advance notice of 7 to 15 days on the occupants of the premises, specifying the exact date and time when physical locks will be broken and possession will be transferred to the bank.'
    },
    {
      q: 'Can a bank take physical possession of agricultural land under Section 14?',
      a: 'No. Under Section 31(i) of the SARFAESI Act, the entire Act does not apply to any security interest created in agricultural land. If the mortgaged property is revenue-classified agricultural land, a Section 14 possession order is completely void ab initio.'
    },
    {
      q: 'What rights do tenants have if the mortgaged property faces a Section 14 possession order?',
      a: 'Under the landmark Supreme Court ruling in Harshad Govardhan Sondagar v. International Assets Reconstruction Co., a bona fide tenant holding a registered lease executed prior to the creation of the mortgage cannot be evicted arbitrarily under Section 14 until the lawful lease period expires.'
    },
    {
      q: 'What happens to personal belongings and movable household goods inside the property?',
      a: 'The Advocate Commissioner is legally required to draw an exhaustive Panchnama and inventory list of all movable articles inside the property. Movable items cannot be seized for the mortgage debt and must be handed over to the borrower or stored safely under official seal.'
    },
    {
      q: 'Can I still negotiate a One-Time Settlement (OTS) after a Section 14 possession order is passed?',
      a: 'Yes. Even after a Section 14 order is passed, you retain the statutory right of redemption under Section 13(8) before the auction notice is published. CredSettle regularly negotiates compromise settlements (OTS) with bank credit committees, staying possession while structuring substantial interest and penalty waivers.'
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
            <span>SARFAESI Act 2002 • Secured Asset Defense &amp; Stay Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            SARFAESI Section 14 DM &amp; CMM Physical Possession Order
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            An authoritative, comprehensive legal defense guide for property owners and borrowers facing physical eviction by District Magistrates or Chief Metropolitan Magistrates. Understand your statutory stay remedies under Section 17 DRT, defective 9-point affidavits, tenant rights, and how to stop coercive dispossession.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Urgent Stay &amp; Legal Shield</span>
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
                  <span>Statutory Possession Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 17 SARFAESI Act, 2002 and Supreme Court Precedents.
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
                <span>EXECUTIVE BRIEF: SARFAESI SECTION 14 PHYSICAL POSSESSION ORDERS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Executive Assistance Mechanism:</strong> Under Section 14 of the SARFAESI Act, banks cannot forcibly evict borrowers directly. They must approach the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) to take physical possession with police assistance.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory 9-Point Affidavit:</strong> The 2013 amendment mandates that the bank Authorised Officer file a verified 9-point affidavit. Any factual distortion, inflated claim, or omission makes the magistrate order legally vulnerable.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Section 17 DRT Stay Remedy:</strong> The primary statutory remedy against a Section 14 order is filing a Securitisation Application (SA) before the Debts Recovery Tribunal (DRT) within 45 days, seeking an interim stay on dispossession.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Absolute Exemption for Agricultural Land:</strong> Under Section 31(i) of the SARFAESI Act, security interests over agricultural land cannot be enforced. A Section 14 order covering agricultural land is void ab initio.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right of Redemption &amp; OTS:</strong> Under Section 13(8), borrowers retain the legal right to redeem their property or negotiate a One-Time Settlement (OTS) before auction notices are published, preserving home equity.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DM & CMM Jurisdiction & Scope */}
            <section id="dm-cmm-jurisdiction" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Executive Powers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 14 SARFAESI: DM &amp; CMM Jurisdiction &amp; Scope
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a secured loan such as a home loan, loan against property (LAP), or commercial credit facility, the secured creditor initiates recovery measures under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While Section 13(4) allows banks to take symbolic or constructive possession of a mortgaged property, lenders cannot enter the premises by force or deploy private recovery bouncers to evict occupants. Indian law strictly prohibits private forceful dispossessions.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To obtain physical control of the asset, Section 14(1) mandates that the secured creditor must request the Chief Metropolitan Magistrate (CMM) in metropolitan areas or the District Magistrate (DM) in non-metropolitan districts to take possession of the secured asset and documents, and forward them to the secured creditor.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The role of the DM or CMM under Section 14 is non-adjudicatory and purely ministerial. The Supreme Court of India in landmark decisions such as <em>Balkrishna Rama Tarle v. Phoenix ARC Pvt. Ltd. (2022)</em> and <em>NKGSB Cooperative Bank Ltd. v. Subir Chakravarty (2022)</em> reaffirmed that the Magistrate does not adjudicate legal disputes between the bank and the borrower. The Magistrate is not a civil court and cannot determine title disputes, evaluate counter-claims, or adjudicate mortgage validity. Instead, the Magistrate performs an executive verification of the statutory affidavit and facilitates peaceful physical takeover through police assistance.
              </p>
            </section>

            {/* SECTION 2: Mandatory 9-Point Affidavit Requirements */}
            <section id="mandatory-affidavit" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Compliance &amp; Proviso Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Mandatory 9-Point Affidavit: Legal Requirements
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To prevent lenders from abusing executive powers and dispossessing citizens arbitrarily, the Indian Parliament enacted Act 1 of 2013, inserting an indispensable proviso into Section 14(1). Under this proviso, an application by a secured creditor must be accompanied by an affidavit affirmed by the bank Authorised Officer declaring 9 specific statutory compliance points.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The District Magistrate or Chief Metropolitan Magistrate is legally mandated to examine the factual veracity of this 9-point affidavit before issuing an assistance order. If any of the 9 assertions are missing, factually misleading, or defective, the resulting possession order is legally flawed and subject to stay by the DRT.
              </p>

              {/* 9-Point Breakdown Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs">1</span>
                    <span>Aggregate Debt &amp; Default</span>
                  </div>
                  <p className="text-xs text-slate-600">Declaration of total loan sanctioned, outstanding liability, and date of default classification.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs">2</span>
                    <span>NPA Account Tagging</span>
                  </div>
                  <p className="text-xs text-slate-600">Confirmation that the borrower account was tagged as Non-Performing Asset under RBI prudential norms.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs">3</span>
                    <span>Section 13(2) Notice Service</span>
                  </div>
                  <p className="text-xs text-slate-600">Proof that a statutory 60-day demand notice under Section 13(2) was duly served upon the borrower.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs">4</span>
                    <span>Section 13(3A) Objection Reply</span>
                  </div>
                  <p className="text-xs text-slate-600">Affirmation that borrower objections were considered and a reasoned rejection was communicated within 15 days.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs">5</span>
                    <span>Non-Discharge of Dues</span>
                  </div>
                  <p className="text-xs text-slate-600">Confirmation that the borrower failed to pay the demanded sum within the statutory 60-day notice window.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs">6</span>
                    <span>Section 13(4) Entitlement</span>
                  </div>
                  <p className="text-xs text-slate-600">Declaration that the secured creditor is legally entitled to proceed under Section 13(4) measures.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs">7</span>
                    <span>Territorial Jurisdiction</span>
                  </div>
                  <p className="text-xs text-slate-600">Proof that the mortgaged property falls strictly within the local territorial bounds of the DM or CMM.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs">8</span>
                    <span>Non-Agricultural Asset</span>
                  </div>
                  <p className="text-xs text-slate-600">Affirmation that the secured asset is not exempt agricultural land under Section 31(i) of the Act.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs">9</span>
                    <span>Statutory Limitation &amp; Dues</span>
                  </div>
                  <p className="text-xs text-slate-600">Confirmation that enforcement is within limitation and the outstanding claim exceeds statutory thresholds.</p>
                </div>
              </div>

              {/* Representative Ledger Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs mt-4">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit: Inflated Claims vs Real Liability</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹1.40 Crore Secured Property</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Claim &amp; Asset Parameter</th>
                        <th className="p-3">Bank Section 14 Demand</th>
                        <th className="p-3">Statutory Legal Reality</th>
                        <th className="p-3 text-right">Negotiated Resolution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Principal Home Loan Dues</td>
                        <td className="p-3">₹54,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Verified Contractual Balance</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹54,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Penal Interest &amp; Compound Fines</td>
                        <td className="p-3 text-rose-600 font-bold">₹22,50,000</td>
                        <td className="p-3 text-rose-600 font-semibold">Violates RBI Penal Charges Circular</td>
                        <td className="p-3 text-right font-bold text-emerald-600">100% Waived (₹0)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Legal &amp; Commissioner Charges</td>
                        <td className="p-3">₹4,80,000</td>
                        <td className="p-3 text-amber-600">Disproportionate Recovery Fees</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹1,20,000 (Adjusted)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Payable for Asset Release</td>
                        <td className="p-3 text-rose-700 font-bold">₹81,30,000 Total Claim</td>
                        <td className="p-3 text-emerald-700">Stay Secured • Dispossession Halted</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹55,20,000 (Saved ₹26.1L)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Role of Advocate Commissioner & Police Assistance */}
            <section id="advocate-commissioner" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Execution Framework &amp; Administrative Machinery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Role of Advocate Commissioner &amp; Police Assistance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a Magistrate passes an order under Section 14, the DM or CMM typically does not visit the mortgaged site personally. Under Section 14(1A) and Section 14(2), the Magistrate is legally empowered to depute an officer subordinate to them or appoint an Advocate Commissioner (or Court Commissioner) to execute the warrant of physical possession.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In metropolitan centers like Mumbai, Delhi, Bengaluru, and Chennai, CMMs routinely appoint practicing advocates as Advocate Commissioners. The Supreme Court in <em>NKGSB Cooperative Bank Ltd. v. Subir Chakravarty (2022)</em> upheld the legality of appointing Advocate Commissioners to take physical possession of secured properties.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Upon appointment, the Advocate Commissioner issues a formal possession notice to the occupants, typically providing between 7 and 15 days to voluntarily vacate the premises. On the scheduled date, the Commissioner arrives with the bank Authorised Officer and local police personnel provided under Section 14(2).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the occupants refuse to hand over keys or the premises are locked, the Commissioner has the statutory authority to break open locks. Crucially, the Commissioner is legally required to conduct a thorough videography of the premises, prepare a Panchnama signed by independent witnesses, and draw an exhaustive inventory of all movable goods. Movable property cannot be confiscated for the secured real estate debt; it must either be handed over to the borrower or safely locked and sealed for subsequent handover.
              </p>
            </section>

            {/* SECTION 4: Comparison: Symbolic vs Physical Possession Rights */}
            <section id="symbolic-vs-physical" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Comparison: Symbolic vs Physical Possession Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often confuse symbolic possession under Section 13(4) with actual physical possession under Section 14. Understanding the clear legal distinction between these two enforcement stages is critical to mounting an effective defense.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Legal Parameter</th>
                      <th className="p-3">Section 13(4) Symbolic Possession</th>
                      <th className="p-3">Section 14 Physical Possession</th>
                      <th className="p-3">Borrower Defensive Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Enforcing Authority</td>
                      <td className="p-3">Bank Authorised Officer unilaterally.</td>
                      <td className="p-3 text-slate-900 font-medium">District Magistrate or CMM order.</td>
                      <td className="p-3">Scrutinize the 9-point affidavit for defects.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Occupancy &amp; Residence</td>
                      <td className="p-3 text-emerald-700 font-medium">Borrower continues residing in home.</td>
                      <td className="p-3 text-rose-700 font-bold">Borrower is physically evicted.</td>
                      <td className="p-3">File urgent Section 17 stay before DRT.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Notice Requirements</td>
                      <td className="p-3">Possession notice published in 2 newspapers.</td>
                      <td className="p-3">Advocate Commissioner serves 7 to 15-day notice.</td>
                      <td className="p-3">Move DRT during the commissioner notice window.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Police Assistance</td>
                      <td className="p-3 text-slate-600">No police involvement permitted.</td>
                      <td className="p-3 text-slate-900 font-medium">Police force deployed under Sec 14(2).</td>
                      <td className="p-3">Verify presence of female officers if women reside.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Auction Feasibility</td>
                      <td className="p-3">Difficult; buyers demand vacant possession.</td>
                      <td className="p-3 text-rose-700 font-semibold">Immediate e-auction conducted by bank.</td>
                      <td className="p-3">Negotiate OTS under Section 13(8) redemption.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tribunal Remedy</td>
                      <td className="p-3">Section 17 SA within 45 days.</td>
                      <td className="p-3">Section 17 SA with urgent stay application.</td>
                      <td className="p-3">Challenge procedural lapses and valuation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Section 14 Possession Process
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual guide illustrates the procedural journey of a Section 14 physical possession enforcement, from statutory demand notice to DM order execution, highlight stay intervention points.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/sarfaesi-section-14-physical-possession-order-dm-cmm.jpg"
                    alt="SARFAESI Section 14 Physical Possession Order Legal Process Infographic"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle SARFAESI Defense Framework • Section 14 &amp; 17 Compliant</span>
                  <a
                    href="/images/infographics/sarfaesi-section-14-physical-possession-order-dm-cmm.jpg"
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

            {/* SECTION 6: Legal Grounds to Challenge DM & CMM Possession Order */}
            <section id="challenge-grounds" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Substantive Legal Grounds</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Legal Grounds to Challenge DM &amp; CMM Possession Order
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Although the DM or CMM operates in an executive capacity, the law binds the secured creditor to strict procedural conditions. A breach of any mandatory statutory condition invalidates the physical possession order. Here are the 6 most potent legal grounds to stay or quash an order.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                    <span>1. Non-Disposal of Section 13(3A) Objections</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 13(3A), if a borrower submits an objection to the 13(2) notice, the bank must consider it and communicate a reasoned reply within 15 days. If the bank ignored your representation, the entire Section 14 proceeding is tainted and liable to stay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>2. Flawed or Perjurious 9-Point Affidavit</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the Authorised Officer made incorrect declarations regarding the outstanding balance, service of notices, or property description, the affidavit violates the mandatory proviso to Section 14(1). The DRT routinely stays possession on affidavit defects.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Landmark className="w-4 h-4 text-amber-600" />
                    <span>3. Agricultural Land Exemption (Section 31(i))</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 31(i) explicitly exempts any security interest created in agricultural land from the SARFAESI Act. If the mortgaged land has revenue classification as agricultural property, the DM order is completely without jurisdiction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    <span>4. Small Dues Exemption (Section 31(j))</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 31(j), SARFAESI does not apply where the remaining unpaid debt is less than 20% of the principal and interest originally secured, or if the total outstanding balance is under ₹1 Lakh. Section 14 cannot be invoked for such debts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Clock className="w-4 h-4 text-rose-600" />
                    <span>5. Limitation Act Expiry (Section 36)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 36 provides that no secured creditor can initiate recovery after the period of limitation prescribed under the Limitation Act, 1963. If the mortgage debt was not acknowledged or litigated within the 12-year limitation window, the action is time-barred.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Home className="w-4 h-4 text-purple-600" />
                    <span>6. Pre-Existing Lawful Tenancy</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    As confirmed by the Supreme Court in Harshad Govardhan Sondagar, lawful tenants whose leases were created prior to the mortgage cannot be evicted under Section 14 until their lease period lawfully expires.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Section 17 DRT Appeal & High Court Writ Remedies */}
            <section id="drt-remedies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Tribunal Jurisdiction &amp; Judicial Review</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Section 17 DRT Appeal &amp; High Court Writ Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an order under Section 14 is passed or an Advocate Commissioner issues a possession warrant, the borrower must act swiftly. The statutory remedy provided under the SARFAESI framework is filing a Securitisation Application (SA) before the jurisdictional Debts Recovery Tribunal (DRT) under Section 17(1).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The application must be filed within 45 days from the date on which the Section 14 measure was taken or communicated. Crucially, at the Section 17 DRT stage, there is NO mandatory statutory pre-deposit requirement (unlike Section 18 DRAT appeals, which require a 25% to 50% deposit). The DRT has the legal power to examine whether the bank complied with the Act and Rules, and can grant an interim injunction staying the Advocate Commissioner from taking physical possession.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Can you approach the High Court under Article 226 of the Constitution? The Supreme Court in <em>United Bank of India v. Satyawati Tondon (2010)</em> and recently in <em>PHR Invent Educational Society v. UCO Bank (2024)</em> held that High Courts should not ordinarily entertain writ petitions against SARFAESI measures when an efficacious alternative remedy is available before the DRT under Section 17.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, a Writ Petition under Article 226 remains maintainable in rare, exceptional circumstances: where the Magistrate acted without any territorial jurisdiction, where there is an egregious breach of the principles of natural justice, where the DRT bench is completely non-functional (vacant Presiding Officer), or where the action is a patent nullity (such as enforcement on exempt agricultural land).
              </p>
            </section>

            {/* SECTION 8: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Stay Order &amp; Debt Resolution Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you have received an Advocate Commissioner notice or learned of a pending Section 14 application before the DM or CMM, executing this 6-stage protocol safeguards your property and paves the way for an affordable settlement.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Procure Certified Copies of Application &amp; Affidavit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Apply immediately through your advocate for certified copies of the bank Section 14 application, the 9-point affidavit, and the DM or CMM order. Scrutinize the dates, postal tracking records, and property boundaries for procedural defects.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: File Urgent Securitisation Application (SA) in DRT
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Draft a comprehensive Securitisation Application under Section 17(1) of the SARFAESI Act before the jurisdictional DRT, specifically challenging the validity of the Section 14 order, flawed affidavits, and unreasoned Section 13(3A) rejections.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Move Urgent Interlocutory Application (IA) for Stay
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File an urgent IA for interim stay on physical possession. Mention the matter before the Presiding Officer on an emergency basis prior to the possession date indicated in the Advocate Commissioner notice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Serve Caveat &amp; Intimation on Advocate Commissioner
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Serve a formal written intimation alongside a copy of the registered DRT SA and stay application on the Advocate Commissioner, the local police station, and the bank Authorised Officer, putting them on notice against hasty dispossession.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Secure Conditional Stay Order &amp; Protect Possession
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    DRTs often grant an interim stay of physical possession, sometimes conditioned on a reasonable installment deposit (such as 10% to 15% of the undisputed dues). This immediately halts the Advocate Commissioner from entering or sealing the property.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate One-Time Settlement (OTS) with Bank Committee
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With physical possession legally insulated, initiate direct negotiations with the bank Zonal Stressed Assets Resolution Branch (SARB) for an OTS. Eliminate arbitrary penal interest and finalize an affordable compromise closure with No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Section 13(2) to Eviction Notice
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the chronological enforcement milestones under the SARFAESI Act empowers borrowers to intervene before coercive possession is carried out.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Milestone</th>
                      <th className="p-3">Statutory SARFAESI Stage</th>
                      <th className="p-3">Lender Enforcement Action</th>
                      <th className="p-3">Borrower Legal Countermeasure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 90</td>
                      <td className="p-3 font-mono text-[11px]">NPA Tagging</td>
                      <td className="p-3">Account tagged Non-Performing Asset after 90 days default.</td>
                      <td className="p-3">Request account restructuring or formal OTS discussion.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(2) Notice</td>
                      <td className="p-3">Bank serves formal 60-day demand notice under Section 13(2).</td>
                      <td className="p-3">Submit detailed objection under Section 13(3A) within 60 days.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 121 to 150</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(3A) Reply</td>
                      <td className="p-3">Bank must consider objections and send reasoned reply in 15 days.</td>
                      <td className="p-3">Record non-compliance if bank fails to send a reasoned reply.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 151 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Section 13(4) Measures</td>
                      <td className="p-3">Symbolic possession taken; possession notice published in news.</td>
                      <td className="p-3">Limitation of 45 days starts to challenge measures in DRT.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Month 7 to 9</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Section 14 Application</td>
                      <td className="p-3">Bank files application with 9-point affidavit before DM or CMM.</td>
                      <td className="p-3">File caveat before DM and prepare DRT stay petition.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 9 to 12</td>
                      <td className="p-3 font-mono text-[11px]">Magistrate Order</td>
                      <td className="p-3">DM/CMM appoints Advocate Commissioner to take possession.</td>
                      <td className="p-3">Move DRT for urgent stay on receipt of commissioner notice.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Final 15 Days</td>
                      <td className="p-3 font-mono text-[11px]">Possession Execution</td>
                      <td className="p-3">Advocate Commissioner serves 7 to 15-day notice to vacate.</td>
                      <td className="p-3">Obtain interim injunction from DRT or execute OTS payment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Tenant Rights & Third-Party Protection under Law */}
            <section id="tenant-protections" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <UserCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Third-Party &amp; Tenant Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Tenant Rights &amp; Third-Party Protection under Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A common real-world crisis arises when a landlord defaults on their mortgage, and the bank obtains a Section 14 order to dispossess innocent tenants residing in the building.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court settled this issue in the landmark judgment of <em>Harshad Govardhan Sondagar v. International Assets Reconstruction Co. Ltd. (2014) 6 SCC 1</em>. The Apex Court ruled that lawful tenants cannot be evicted by the DM or CMM under Section 14 until the lawful term of their tenancy expires, provided the lease was created prior to the mortgage or created with the express consent of the mortgagee bank under Section 65A of the Transfer of Property Act, 1882.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, in <em>Vishal N. Kalsaria v. Bank of India (2016) 3 SCC 762</em>, the Supreme Court ruled that state rent control legislation protects statutory tenants from summary eviction under the SARFAESI Act, ensuring that banks cannot arbitrarily bypass tenancy laws.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Registered Lease Executed Prior to Mortgage
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tenants holding registered lease deeds executed before the mortgage cannot be dispossessed under Section 14. The tenant must place their lease deed on record before the DM or CMM or approach the DRT under Section 17(4A).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Unregistered Leases &amp; Month-to-Month Tenancy
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the tenancy is unregistered or month-to-month under Section 106 of the Transfer of Property Act, the DM must determine whether the lease was created lawfully. Tenants can seek protective time extensions from the DRT to relocate safely.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Co-Owners with Undivided Property Shares
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where a borrower mortgages only an undivided share of an ancestral or joint property without the consent of non-borrowing co-owners, the bank cannot take physical possession of the entire premises under Section 14 without a formal partition suit.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-amber-600" />
                    Bona Fide Third-Party Buyers with Sale Agreement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Buyers who paid consideration under registered agreements to sell or possession letters before the mortgage can assert equitable rights under Section 53A of the Transfer of Property Act before the DRT to resist illegal bank seizure.
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
                Frequently Asked Questions: Section 14 Possession Orders
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal answers addressing critical concerns regarding DM and CMM physical possession orders, Advocate Commissioner notices, DRT stay petitions, and borrower legal defenses.
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
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002:</strong> Section 14, Chief Metropolitan Magistrate or District Magistrate to assist secured creditor in taking possession of secured asset.
                </li>
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 13(2), Demand Notice; Section 13(3A), Consideration of Borrower Representation; Section 13(4), Possession Measures; Section 13(8), Right of Redemption before Auction.
                </li>
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 17, Application against measures to recover secured debts before Debts Recovery Tribunal (DRT).
                </li>
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 31, Provisions not applicable to agricultural land (Clause i) and small balance debts (Clause j).
                </li>
                <li>
                  <strong>Security Interest (Enforcement) Rules, 2002:</strong> Rule 8, Sale of immovable secured assets and possession protocols.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Balkrishna Rama Tarle v. Phoenix ARC (2022), NKGSB Cooperative Bank v. Subir Chakravarty (2022), Standard Chartered Bank v. V. Noble Kumar (2013), and Harshad Govardhan Sondagar v. International Assets Reconstruction Co. (2014).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Judicial &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debts Recovery Tribunal Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-Courts District Court Services</span>
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
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/home-loan-default-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Home Loan Default SARFAESI
                  </Link>
                  <Link href="/how-to-reply-sarfaesi-notice" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    How to Reply SARFAESI Notice
                  </Link>
                  <Link href="/sarfaesi-act-section-13-2-notice-stop-auction" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(2) Notice Defense
                  </Link>
                  <Link href="/agricultural-loan-default-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Agricultural Loan Immunity
                  </Link>
                  <Link href="/drt-notice-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRT Notice Defense
                  </Link>
                  <Link href="/file-caveat-petition-against-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Caveat Petition Against Bank
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Defense
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Loan Settlement Circular
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Protection
                  </Link>
                  <Link href="/can-recovery-agents-seize-property" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Recovery Agents Seize Property
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
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
                Specialist in SARFAESI Act defense, DRT securitisation litigation, Section 14 magistrate stay proceedings, and mortgage debt compromise settlements with comprehensive experience protecting secured residential and commercial properties.
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
                  URGENT DISPOSSESSION SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Section 14 Eviction by Bank?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior SARFAESI defense advocates file urgent stay applications before the DRT, challenge flawed 9-point affidavits, halt Advocate Commissioner evictions, and negotiate up to 60% mortgage OTS waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Urgent Stay Assistance
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
                  <span>Confidential • Pan-India DRT Representation</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Physical Stay:</strong> Urgent DRT Section 17 filing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Affidavit Scrutiny:</strong> Expose 9-point affidavit falsehoods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Tenant &amp; Co-Owner Protection:</strong> Enforce lawful occupancy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Compromise OTS Closure:</strong> Settle debt and redeem property.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/home-loan-default-sarfaesi-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Home Loan Default SARFAESI Act
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop property auction proceedings &rarr;</span>
                </Link>

                <Link
                  href="/how-to-reply-sarfaesi-notice"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    How to Reply SARFAESI Notice
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 13(2) &amp; 13(3A) defense &rarr;</span>
                </Link>

                <Link
                  href="/file-caveat-petition-against-bank"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    File Caveat Petition Against Bank
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Prevent ex-parte court orders &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
