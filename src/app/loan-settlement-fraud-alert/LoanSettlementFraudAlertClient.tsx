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
  Sparkles,
  Gavel,
  Landmark,
  ShieldAlert,
  FileCheck
} from 'lucide-react';

export default function LoanSettlementFraudAlertClient() {
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
    { id: 'quick-crux', label: 'Executive Anti-Scam Crux' },
    { id: 'debt-economics-fraud-landscape', label: '1. NPA Dynamics & Fraud Ecosystem' },
    { id: 'financial-settlement-math', label: '2. Settlement Math: Scam vs. OTS' },
    { id: 'comparative-forum-matrix', label: '3. Comparative Resolution Matrix' },
    { id: 'cibil-algorithm-scoring', label: '4. CIBIL Algorithm & Fake Fixes' },
    { id: 'infographic-overview', label: 'Visual Anti-Scam Roadmap' },
    { id: 'step-by-step-verification-sop', label: '6. 6-Stage Anti-Fraud SOP' },
    { id: 'statutory-notice-defense-grid', label: '7. Statutory Notice Defense' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Grievance & Cyber Portal' },
    { id: 'chronological-resolution-milestones', label: '9. Chronological Timelines' },
    { id: 'specialized-fraud-scenarios', label: '10. Fintech, Layoffs & ARC Scams' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'How do fake loan settlement agencies trap borrowers?',
      a: 'Fraudulent agencies promise 100% debt waivers, demand upfront fees into personal UPI accounts, and falsely claim RBI approvals to steal money from distressed borrowers.'
    },
    {
      q: 'Can any agency guarantee a 100% loan waiver?',
      a: 'No legitimate agency can guarantee total debt forgiveness. Lawful bank settlements compromise between 40% to 55% of principal balance based on verified insolvency.'
    },
    {
      q: 'What are the primary red flags of a fake debt agency?',
      a: 'Key red flags include upfront cash demands, personal UPI transfers, instant CIBIL erasure promises, and settlement letters sent via WhatsApp without official bank emails.'
    },
    {
      q: 'Is it safe to pay settlement fees into personal UPI accounts?',
      a: 'No. Settlement payments must be deposited directly into your official bank loan account via NEFT, RTGS, or branch counters. Never transfer money to intermediaries.'
    },
    {
      q: 'How can I verify if a bank settlement letter is genuine?',
      a: 'Verify that the letter has official bank letterhead, unique reference numbers, branch seals, authorized signatory, and confirmation sent from the bank corporate email domain.'
    },
    {
      q: 'Does the RBI license private loan settlement companies?',
      a: 'No. The RBI does not license or endorse private settlement agencies. Legal debt resolution is provided by legal professionals operating under the Advocates Act.'
    },
    {
      q: 'What should I do if I am scammed by a fake agency?',
      a: 'Report the fraud to the National Cyber Crime Portal at cybercrime.gov.in or dial 1930. File an IPC Section 420 complaint and alert your bank fraud cell.'
    },
    {
      q: 'Can a fake agency remove default status from CIBIL?',
      a: 'No. Tampering with credit bureau data is illegal. Credit scores can only be repaired lawfully by obtaining a bank No Dues Certificate and filing a Section 21 dispute.'
    },
    {
      q: 'How does CredSettle provide authentic settlement assistance?',
      a: 'CredSettle provides legal representation, audits predatory interest charges, stops recovery harassment, negotiates formal OTS terms with bank committees, and ensures direct bank payments.'
    },
    {
      q: 'What criminal charges apply to fake settlement extortionists?',
      a: 'Victims can file criminal complaints under Section 420 (Cheating), Section 468 (Forgery), Section 384 (Extortion) of IPC, and Section 66D of the IT Act for impersonation.'
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
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 mb-3 md:mb-4">
            <ShieldAlert className="w-3.5 h-3.5 text-red-300" />
            <span>CRITICAL ANTI-SCAM ADVISORY: AGENCY VERIFICATION</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Loan Settlement Fraud Alert: How to Identify Fake Agencies
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn how to spot fake debt relief agencies, unmask advance fee traps, identify forged bank NOCs, and secure legally binding loan settlements directly through authorized banking channels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Spot Loan Settlement Fraud? Get Legal Protection</span>
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
                  <span>Statutory Anti-Scam Guide</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Fair Practices Code, IPC Section 420, and the Advocates Act 1961.
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
                <span>EXECUTIVE BRIEF: ANTI-SCAM ADVISORY</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero 100% Waiver Feasibility:</strong> No legitimate agency can guarantee total debt forgiveness; authentic bank settlements compromise between 40% to 55% of principal.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Advance Fee Scam Trap:</strong> Never transfer upfront settlement charges or compromise amounts into personal UPI IDs or private company accounts.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Direct Bank Remittance:</strong> Lawful settlement payments are deposited strictly into your designated bank loan account via NEFT, RTGS, or branch counters.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Forged Settlement Letters:</strong> Fake agencies circulate counterfeit PDF letters with low-resolution logos, invalid branch codes, and fictitious bank officer signatures.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">No RBI-Approved Settlement Firms:</strong> The RBI does not license private debt settlement agencies; legitimate advisory operates under contract law and the Advocates Act.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Credit Repair Myths:</strong> Erasing default records unlawfully is impossible under CICRA 2005; credit rebuilding requires authentic bank No Dues Certificates.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Immediate Cyber Reporting:</strong> Report financial scams to the National Cyber Crime Portal at cybercrime.gov.in or dial the 1930 national helpline.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Defense Rights:</strong> Borrowers possess enforceable legal protections under RBI Fair Practices Code and Section 12(5) Arbitration Act against harassment.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-fraud-landscape" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>NPA Dynamics &amp; Scam Origins</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics, NPA Provisioning &amp; The Rise of Fake Settlement Syndicates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The massive expansion of unsecured credit cards and digital personal loans in India has led to a sharp increase in non-performing assets (NPAs). When a borrower experiences severe income loss or medical distress and misses three consecutive monthly EMIs (90 days past due), the loan transitions into NPA status under Reserve Bank of India prudential norms. This classification obligates lending institutions to allocate 15% to 100% Tier-1 capital provisioning against the defaulted account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because unsecured debts lack collateral under SARFAESI rules, lenders frequently evaluate commercial One-Time Settlements (OTS) to recover core principal capital. However, this distressed environment has spawned an unregulated grey market of fraudulent consultants. Operating via deceptive online ads and cold calls, these unauthorized syndicates impersonate bank officials, promise complete debt waivers, pocket upfront cash fees into private UPI accounts, and leave borrowers exposed to continued recovery harassment and legal default notices.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown &amp; Settlement Math: Scam Promises vs. Authentic OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluating whether a settlement offer is legitimate requires understanding the mathematical anatomy of loan defaults. When an account defaults, lenders add compounding penal interest (24% to 36% p.a.), cheque bounce penalties, and administrative charges, inflating the demand substantially. Fake agencies manipulate these figures, promising an impossible 90% to 100% total waiver while extracting upfront fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In contrast, an authentic bank OTS negotiated by certified legal professionals eliminates 100% of accumulated penal interest and charges, while establishing a realistic 40% to 55% compromise on the core principal balance based on verified insolvency:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-red-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-xs">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Fake Agency Scam Model</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Claimed Default:</span>
                      <span className="font-bold text-slate-900">₹6,00,000 (with charges)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Scam Promise:</span>
                      <span className="font-bold text-red-600">100% Total Loan Waiver</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Upfront Fee Stolen:</span>
                      <span className="font-bold text-red-600">₹60,000 in Personal UPI</span>
                    </div>
                    <div className="flex justify-between py-1 pt-1 font-bold text-slate-900">
                      <span>Outcome:</span>
                      <span className="text-red-700">Financial Loss + Unresolved Default</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Authentic CredSettle OTS Math</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Core Principal:</span>
                      <span className="font-bold text-slate-900">₹4,00,000 (Base Debt)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Penal Charges Waived:</span>
                      <span className="font-bold text-emerald-700">100% Waived (₹2,00,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Settlement Amount:</span>
                      <span className="font-bold text-emerald-700">₹1,80,000 (45% Principal)</span>
                    </div>
                    <div className="flex justify-between py-1 pt-1 font-bold text-slate-900">
                      <span>Outcome:</span>
                      <span className="text-emerald-700">Official NDC &amp; CIBIL Updated</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparative-forum-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Matrix: Verified Legal OTS vs. Fraudulent Agencies vs. Inaction
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Compare legitimate debt resolution against fraudulent agencies, bank restructuring, Lok Adalats, and borrower inaction:
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-x-auto">
                <table className="w-full text-left text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Option</th>
                      <th className="p-3 font-bold">Legal Basis</th>
                      <th className="p-3 font-bold">Payment Recipient</th>
                      <th className="p-3 font-bold">Upfront Risk</th>
                      <th className="p-3 font-bold">CIBIL Result</th>
                      <th className="p-3 font-bold text-[#1886ff]">Legal Protection</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3 font-bold text-slate-900">Verified Legal OTS</td>
                      <td className="p-3">RBI Master Directions</td>
                      <td className="p-3 text-emerald-700 font-semibold">Bank Loan A/C Only</td>
                      <td className="p-3 text-emerald-700 font-semibold">Zero Risk</td>
                      <td className="p-3">Updated to Closed</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Advocacy &amp; 40%-55% waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3 font-bold text-red-600">Fraudulent Agency</td>
                      <td className="p-3 text-red-600">None (Extortion)</td>
                      <td className="p-3 text-red-600 font-semibold">Personal UPI / Agency</td>
                      <td className="p-3 text-red-600 font-semibold">100% Capital Loss</td>
                      <td className="p-3 text-red-600">Remains Defaulted</td>
                      <td className="p-3 text-red-600">Zero standing, forged papers</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3 font-bold text-slate-900">Bank Restructuring</td>
                      <td className="p-3">Internal Credit Policy</td>
                      <td className="p-3">Bank Loan A/C</td>
                      <td className="p-3 text-emerald-700">Low Risk</td>
                      <td className="p-3">Restructured Flag</td>
                      <td className="p-3">Tenure extension increases interest</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-3">NALSA Act 1987</td>
                      <td className="p-3">Bank / Court Registry</td>
                      <td className="p-3 text-emerald-700">Zero Risk</td>
                      <td className="p-3">Closed via Award</td>
                      <td className="p-3">Final non-appealable decree</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3 font-bold text-slate-900">Borrower Inaction</td>
                      <td className="p-3">Recovery Statutes</td>
                      <td className="p-3">N/A</td>
                      <td className="p-3 text-amber-700">Penal Escalation</td>
                      <td className="p-3 text-red-600">Severe Drop (&lt;550)</td>
                      <td className="p-3 text-red-600">Section 138 suits &amp; arbitration</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-scoring" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>CIBIL Mechanics &amp; Scams</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Scoring Mechanics &amp; Fake Credit Repair Scams Debunked
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A frequent scam involves agencies promising to delete default remarks or boost CIBIL scores to 750+ within 48 hours for upfront cash. TransUnion CIBIL and credit bureaus calculate scores using a strict 5-factor model: Payment History (35%), Credit Exposure (30%), Credit Mix (15%), Credit History Length (10%), and Recent Enquiries (10%). Under the Credit Information Companies (Regulation) Act 2005, modifying bureau records without encrypted bank authorization is illegal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Any unauthorized alteration violates Section 66 of the IT Act. The only lawful method to rebuild credit is completing a formal bank OTS, obtaining a genuine No Dues Certificate, and submitting a Section 21 dispute to transition status to Closed, steadily restoring credit health over 18 to 24 months.
              </p>
            </section>

            {/* SECTION 5: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Anti-Scam Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Anti-Scam Roadmap: Forensic Verification Blueprint
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review this visual blueprint highlighting core scam red flags and the authentic 6-stage debt resolution protocol:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/loan-settlement-fraud-alert.jpg"
                    alt="Loan Settlement Fraud Alert and Anti-Scam Verification Blueprint India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Anti-Scam Architecture • RBI Fair Practices Code &amp; Contract Act</span>
                  <a
                    href="/images/infographics/loan-settlement-fraud-alert.jpg"
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

            {/* SECTION 6: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-verification-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>6-Stage Anti-Fraud SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6 Stages of Verified Debt Resolution &amp; Anti-Fraud Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this sequential standard operating procedure to verify legitimate debt advisory and negotiate an authorized bank compromise:
              </p>

              <div className="space-y-3 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 1-5</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Forensic Loan Audit &amp; Statement Reconciliation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Retrieve official bank statements directly from NetBanking or branch desks. Audit the loan ledger to identify illegal compounding penal interest and determine the pure core principal owed.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 6-15</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Financial Hardship Dossier Preparation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compile verified documentary evidence substantiating involuntary default, including job termination letters, income loss proofs, medical summaries, or business balance sheets required for bank OTS approval.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 16-25</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Credit Committee Representation &amp; Anti-Harassment Notice
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serve formal legal representations upon the bank Zonal Credit Committee. Concurrently issue cease-and-desist notices to unauthorized collection agencies under RBI Fair Practices Code, curbing harassment.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 26-45</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Bilateral Bank Negotiations &amp; Penal Waiver Bargaining
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Conduct structured bilateral negotiations with bank legal recovery officers. Secure a 100% waiver of accumulated penal interest and negotiate an affordable 40% to 55% settlement on core principal.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 46-60</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Forensic Settlement Sanction Letter Verification
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify the official OTS sanction letter before releasing funds. Confirm the document is printed on official bank letterhead with branch seals and confirmation from the bank corporate email domain.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 61-90</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Direct-to-Bank Remittance &amp; NDC Authentication
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Remit settlement payments directly into your official bank loan account number via RTGS, NEFT, or branch counters. Obtain official receipts followed by an authenticated No Dues Certificate within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense-grid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Legal Protections &amp; Bank Notice Defense Grid
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Fraudulent agencies use fake court summons to panic borrowers. Understand the authentic statutory frameworks governing loan default notices in India:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs">
                    <FileCheck className="w-4 h-4" />
                    <span>Section 25 PSSA (NACH Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Triggered upon electronic auto-debit bounce under Payment and Settlement Systems Act. Quasi-criminal but bailable; settled via legal counsel appearance and loan compromise without arrest risk.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 NI Act (Cheque Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applies to dishonored security cheques. Legal defense requires checking 30-day notice validity, contesting liability quantum, and seeking compounding before Judicial Magistrate courts.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                    <Landmark className="w-4 h-4" />
                    <span>Section 21 Arbitration Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court rulings in TRF Ltd. and Perkins Eastman, unilateral sole arbitrator appointments by banks are disqualified de jure under Section 12(5), rendering proceedings invalid.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>DRT &amp; RBI Fair Practices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    DRT handles claims strictly exceeding ₹20 Lakhs. Concurrently, RBI Fair Practices Code strictly prohibits recovery agent abuse, contact outside 8:00 AM to 7:00 PM, and third-party shaming.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance & Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Grievance &amp; Cybercrime Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you encounter fraudulent debt settlement agencies or illegal recovery threats, escalate through this structured 3-tier matrix:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded-md">
                      Level 1: Grievance Redressal Officer
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">7-10 Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a written complaint with the bank GRO to report unauthorized collection contact and clarify disputed penalty levies.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                      Level 2: Principal Nodal Officer
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">14-21 Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to bank PNO requesting formal referral of your loan to the compromise committee while halting agent field visits.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-red-200 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md">
                      Level 3: RBI Ombudsman &amp; Cyber 1930
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Immediate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lodge complaints on RBI CMS (cms.rbi.org.in). For fake NOCs or advance fee scams, register a cyber FIR on cybercrime.gov.in or call 1930.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Procedural Milestones Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Procedural Milestones: From Default to Clean Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding institutional recovery timelines protects borrowers from artificial urgency created by scammers:
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-x-auto">
                <table className="w-full text-left text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-2.5 font-bold">Phase</th>
                      <th className="p-2.5 font-bold">Asset Status</th>
                      <th className="p-2.5 font-bold">Scam Risk</th>
                      <th className="p-2.5 font-bold text-[#1886ff]">Borrower Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-2.5 font-bold text-slate-900">Days 1-30</td>
                      <td className="p-2.5">SMA-0: First EMI bounce</td>
                      <td className="p-2.5 text-slate-500">Low</td>
                      <td className="p-2.5 text-[#1886ff] font-semibold">Notify bank of financial hardship</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-2.5 font-bold text-slate-900">Days 31-89</td>
                      <td className="p-2.5">SMA-1/2: Agent escalation</td>
                      <td className="p-2.5 text-amber-600 font-semibold">High</td>
                      <td className="p-2.5 text-[#1886ff] font-semibold">Block fake calls &amp; seek counsel</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-2.5 font-bold text-slate-900">Day 90+</td>
                      <td className="p-2.5">NPA: 15% provisioning</td>
                      <td className="p-2.5 text-red-600 font-semibold">Critical</td>
                      <td className="p-2.5 text-[#1886ff] font-semibold">Submit hardship dossier to bank</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-2.5 font-bold text-slate-900">Months 4-5</td>
                      <td className="p-2.5">Bank Credit Committee OTS</td>
                      <td className="p-2.5 text-amber-600 font-semibold">Moderate</td>
                      <td className="p-2.5 text-[#1886ff] font-semibold">Negotiate 40%-55% OTS waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-2.5 font-bold text-slate-900">Month 6</td>
                      <td className="p-2.5">Direct Remittance &amp; NDC</td>
                      <td className="p-2.5 text-emerald-700 font-semibold">Zero</td>
                      <td className="p-2.5 text-[#1886ff] font-semibold">Obtain NDC &amp; update CIBIL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-fraud-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Fraud Scenarios: Fintech Apps, Layoffs, Business Debt &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Fraud schemes manifest across multiple credit channels and borrower profiles:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-xs md:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    Multi-Lender Consolidation Scam Traps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers holding multiple credit cards are targeted with fake debt consolidation loan promises with zero CIBIL checks, demanding 10% upfront processing fees before disappearing.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-xs md:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1886ff]" />
                    Executive Layoffs &amp; Fintech Loan App Frauds
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Salaried executives facing corporate layoffs turn to instant digital apps that harvest phone contacts and issue forged notices threatening defamation; legal notices stop harassment immediately.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-xs md:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Business Proprietorship Working Capital Scams
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Small business owners are approached by fake consultants promising government MSME debt write-offs; authentic business debt resolution requires bilateral restructuring with bank zonal heads.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-xs md:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    ARC Debt Assignments &amp; Counterfeit Notices
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When loans are assigned to Asset Reconstruction Companies under SARFAESI Section 5, rogue agents issue fake notices; borrowers must demand verified Assignment Agreements directly from the ARC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
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
                Frequently Asked Questions on Loan Settlement Frauds &amp; Agency Verification
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

            {/* SECTION 13: Regulatory Sources & Authorities */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; References
              </h2>
              <ul className="space-y-1 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Directions:</strong> Fair Practices Code for Lenders &amp; Grievance Redressal (2026).
                </li>
                <li>
                  <strong>RBI Integrated Ombudsman:</strong> Scheme 2021 for Unfair Recovery Practices Redressal.
                </li>
                <li>
                  <strong>Indian Penal Code:</strong> Sections 420 (Cheating), 468 (Forgery), 384 (Extortion).
                </li>
                <li>
                  <strong>IT Act 2000:</strong> Section 66D for Cheating by Personation using Computer Resources.
                </li>
                <li>
                  <strong>CICRA 2005:</strong> Section 21 for Statutory Credit Bureau Dispute Settlement.
                </li>
                <li>
                  <strong>Arbitration Act 1996:</strong> Section 12(5) Perkins Eastman Supreme Court Precedent.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>rbi.org.in</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>cms.rbi.org.in</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>cybercrime.gov.in</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>cibil.com</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>indiacode.nic.in</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>nalsa.gov.in</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-xs hover:bg-blue-200 transition-colors flex-shrink-0"
                  title="View Ashish Jhangra Profile"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-xs font-bold text-slate-900 hover:text-[#1886ff] transition-colors block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[10px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Specialized in banking compliance, anti-scam debt forensics, and NPA settlement negotiations.
              </p>
              <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Author Profile</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-2.5 h-2.5" /> Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-5 text-white text-center space-y-3 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                  100% CONFIDENTIAL DEFENSE
                </span>
                <h3 className="text-base font-bold text-white leading-snug">
                  Suspicious Settlement Offer?
                </h3>
                <p className="text-blue-100 text-xs mt-1 leading-relaxed font-normal">
                  Authenticate bank settlement letters, stop recovery harassment, and negotiate legitimate 40% to 55% waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-3 rounded-full font-bold text-xs hover:bg-slate-50 transition-all shadow-md"
              >
                Spot Fraud? Get Protection
              </Link>
              <div className="pt-1 flex flex-col items-center justify-center gap-0.5 text-[10px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-2.5 h-2.5 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    +91-8800226635
                  </a>
                </div>
                <span className="text-[9px] text-blue-300">Direct Bank Settlement • RBI Compliant</span>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">The CredSettle Advantage</h4>
              <ul className="space-y-1.5 text-slate-600 text-[11px]">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Direct bank remittance.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Advocates:</strong> Registered counsel.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Compliance:</strong> Fair Practices adherence.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Genuine No Dues:</strong> Authentic NDC issuance.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">Related Guides</h4>
              <div className="space-y-1.5">
                <Link
                  href="/verify-loan-settlement-letter"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 text-[11px] group-hover:text-[#1886ff] transition-colors leading-snug">
                    Verify Settlement Letter
                  </p>
                  <span className="text-[9px] text-slate-400 block">Checklist &amp; red flags &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 text-[11px] group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice
                  </p>
                  <span className="text-[9px] text-slate-400 block">Reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 text-[11px] group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled to Closed
                  </p>
                  <span className="text-[9px] text-slate-400 block">Credit report guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
