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
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Plane,
  Globe,
  FileCheck,
  Bookmark
} from 'lucide-react';

export default function PassportRenewalLocClient() {
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
    { id: 'statutory-law', label: '1. Passports Act & Bank Powers' },
    { id: 'look-out-circulars', label: '2. Look Out Circulars & High Court Limits' },
    { id: 'debt-comparison-matrix', label: '3. Debt Types vs Travel Impact Matrix' },
    { id: 'passport-renewal-rules', label: '4. Renewal During Section 138 Cases' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Travel Defense Protocol' },
    { id: 'recovery-harassment', label: '7. Airport Threats & Police Protection' },
    { id: 'escalation-matrix', label: '8. 3-Tier LOC Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. Dispute Lifecycle to Court Relief' },
    { id: 'special-scenarios', label: '10. NRI Borrowers, OCI & Job Visas' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank or lender stop my passport renewal because of an unpaid loan?',
      a: 'No. Banks have no power to stop passport renewal. Under the Passports Act, 1967, only the passport office can refuse renewal. A civil loan default or low credit score is never a legal ground to stop passport renewal.'
    },
    {
      q: 'Can a public sector bank issue a Look Out Circular (LOC) against a loan defaulter?',
      a: 'In April 2024, the Bombay High Court quashed the government rule that allowed public sector bank heads to request LOCs. The court held that banks cannot restrict citizen travel abroad for simple debt recovery.'
    },
    {
      q: 'Can private banks like HDFC, ICICI, or Axis Bank issue an LOC?',
      a: 'No. Private banks and NBFCs have never had the legal power to request Look Out Circulars. Any threat from private bank agents claiming they will issue an LOC is completely false and unlawful.'
    },
    {
      q: 'Will a pending Section 138 cheque bounce case stop my passport renewal?',
      a: 'A pending criminal complaint can delay renewal if police report it. However, you can apply to the trial magistrate for a No Objection Certificate under MEA rule GSR 570(E). The passport office then renews your passport.'
    },
    {
      q: 'Does the Debt Recovery Tribunal (DRT) have the power to impound my passport?',
      a: 'No. In Suresh Nanda v. CBI, the Supreme Court confirmed that neither the DRT nor police can impound a passport. Only the Passport Authority under Section 10(3) of the Passports Act holds this power.'
    },
    {
      q: 'Can recovery agents or collection agencies stop me at the airport?',
      a: 'No. Recovery agents have zero access to immigration checkpoints or airport officers. Threatening airport detention is a criminal offense under Section 351 of the Bharatiya Nyaya Sanhita, 2023.'
    },
    {
      q: 'What should I do if an illegal LOC has been opened against my name?',
      a: 'You can file a Writ Petition under Article 226 in the High Court. High Courts routinely grant interim travel permission. They also quash LOCs issued merely for commercial loan defaults.'
    },
    {
      q: 'Can an NRI travel to India and return abroad safely if they defaulted on a loan?',
      a: 'Yes. Simple loan default is a civil matter that does not bar travel. Unless a court has issued a non-bailable warrant or proclaimed offender order, immigration officers cannot detain you for personal debt.'
    },
    {
      q: 'How does a One-Time Settlement (OTS) resolve travel or passport concerns?',
      a: 'An OTS resolves all loan dues through a formal agreement and No Dues Certificate. Once settled, the bank withdraws all legal recovery notices, DRT cases, and any pending circular requests.'
    },
    {
      q: 'How does CredSettle assist borrowers facing passport and LOC harassment?',
      a: 'CredSettle defends borrowers against unlawful threats. We help file High Court LOC quashing petitions, secure court NOCs under GSR 570(E), and negotiate deep debt waivers directly with bank committees.'
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
            <Plane className="w-3.5 h-3.5" />
            <span>Constitutional Travel Rights &amp; Banking Jurisprudence Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Stop Passport Renewal or Issue LOC for Loan Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A clear legal guide on borrower travel rights in India. Learn why banks cannot stop passport renewal, recent High Court rulings on Look Out Circulars, and how to protect your travel freedom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Travel Rights</span>
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
                  <span>Article 21 Travel Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Supreme Court Maneka Gandhi precedent and Bombay High Court 2024 LOC ruling.
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
                <span>EXECUTIVE BRIEF: PASSPORT RENEWAL &amp; LOC RULES FOR LOAN DEFAULT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Banks Cannot Refuse Passports:</strong> Under the Passports Act, 1967, only the passport office can refuse or renew passports. Lenders have zero power over your travel documents.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Bombay High Court Quashed Bank LOCs:</strong> In April 2024, the Bombay High Court struck down the rule that gave public sector banks the power to request Look Out Circulars for debt recovery.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Private Banks Have Zero LOC Power:</strong> Private lenders like HDFC, ICICI, and Axis Bank have never had the power to request Look Out Circulars against borrowers.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Court NOC for Section 138 Cheque Cases:</strong> If a cheque bounce case is pending in court, you can get a court No Objection Certificate under MEA rule GSR 570(E) to renew your passport.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Airport Arrest Threats Are Illegal:</strong> Recovery agents who threaten airport detention commit a criminal offense under Section 351 of the Bharatiya Nyaya Sanhita, 2023.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Law: Can Banks Impound or Cancel Passports? */}
            <section id="statutory-law" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Sovereign Authority</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Law: Can Banks Impound or Cancel Passports?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a loan in India, recovery agents often use fear. They claim the bank will block passport renewal or stop the borrower at the airport. These claims are completely false under Indian law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In India, only the Passports Act, 1967 controls passport issuance and renewal. A bank is merely a commercial lender. It has no government power. A bank cannot seize, cancel, or hold your passport.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 10(3) of the Passports Act, 1967, only the Regional Passport Officer can impound a passport. The Supreme Court settled this in Suresh Nanda v. CBI. The court ruled that even police officers cannot seize a passport. If police cannot take your passport, a private bank certainly cannot touch it.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In addition, a loan default is a civil dispute. It is not a crime. Defaulting on a debt does not give the passport office any legal ground to reject your renewal. The passport office does not check your CIBIL score.
              </p>
            </section>

            {/* SECTION 2: Look Out Circulars: High Court Limits on Bank Requests */}
            <section id="look-out-circulars" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>High Court Jurisprudence &amp; Immigration Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Look Out Circulars: High Court Limits on Bank Requests
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A Look Out Circular (LOC) is an official notice issued by immigration authorities. Its real goal is to track people accused of serious crimes or major economic offenses.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In 2018, the Central Government allowed heads of public sector banks to request LOCs. This led to misuse. Banks began asking for LOCs against ordinary business owners and loan guarantors to force loan recovery.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In April 2024, the Bombay High Court ruled on this in Viraj Chetan Shah v. Union of India. The court struck down the rule that gave public sector banks this power. The court stated that banks cannot stop citizen travel for money recovery. Doing so violates Articles 14 and 21 of the Indian Constitution.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Delhi High Court took the same stand in Sumer Singh Salkan and Prateek Chitkara. The court confirmed that banks cannot use an LOC as a debt recovery weapon. An LOC is only valid if a person&apos;s travel threatens the economic safety of India.
              </p>
            </section>

            {/* SECTION 3: Legal Comparison Matrix: Loan Types vs Travel Freedom */}
            <section id="debt-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Globe className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Classification &amp; Travel Rights Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Comparison Matrix: Loan Types vs Travel Freedom
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers under financial stress need to know how different loan types affect their travel. Most loan defaults carry zero travel restrictions.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This table compares normal civil debt defaults with cheque cases and serious fraud cases.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Loan or Dispute Category</th>
                      <th className="p-3">Governing Law</th>
                      <th className="p-3">Passport Renewal Impact</th>
                      <th className="p-3">LOC Risk</th>
                      <th className="p-3">Best Borrower Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Personal Loans and Cards.</td>
                      <td className="p-3">Indian Contract Act, 1872.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero impact. Safe.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero LOC power.</td>
                      <td className="p-3">Ignore false threats. Settle via OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Home Loans and Mortgages.</td>
                      <td className="p-3">SARFAESI Act, 2002.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero impact on passport.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero LOC power.</td>
                      <td className="p-3">Bank can only claim mortgaged property.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Cheque Bounce (Sec 138).</td>
                      <td className="p-3">NI Act, 1881.</td>
                      <td className="p-3 text-amber-600 font-semibold">Court NOC needed.</td>
                      <td className="p-3 text-emerald-600 font-semibold">No LOC if appearing.</td>
                      <td className="p-3">Get court NOC under rule GSR 570(E).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">DRT Recovery Case.</td>
                      <td className="p-3">RDB Act, 1993.</td>
                      <td className="p-3 text-emerald-600 font-semibold">DRT cannot take passport.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Quashed by High Court.</td>
                      <td className="p-3">File High Court writ against any LOC.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Willful Defaulter Tag.</td>
                      <td className="p-3">RBI Master Circular.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Passport remains valid.</td>
                      <td className="p-3 text-amber-600 font-semibold">Quashed by courts.</td>
                      <td className="p-3">Challenge the bank committee notice.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">CBI or ED Fraud Case.</td>
                      <td className="p-3">Fugitive Offenders Act.</td>
                      <td className="p-3 text-rose-600 font-semibold">Renewal blocked by RPO.</td>
                      <td className="p-3 text-rose-600 font-semibold">Active valid LOC.</td>
                      <td className="p-3">Seek bail and court travel leave.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Passport Renewal Rules: Pending Section 138 Complaints */}
            <section id="passport-renewal-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Compliance &amp; Magistrate NOC</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Passport Renewal Rules: Pending Section 138 Complaints
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple civil loan defaults do not appear on police records. But things change if the lender has filed a cheque bounce case under Section 138 of the Negotiable Instruments Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you apply for passport renewal, the police check asks about pending court cases. This question comes from Section 6(2)(f) of the Passports Act, 1967.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A cheque bounce complaint is tried in a magistrate court. Answering &quot;Yes&quot; without court papers can cause the passport office to hold your file. But the law offers an easy solution through MEA Notification GSR 570(E).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under GSR 570(E), you can ask the trial magistrate for a No Objection Certificate (NOC). The court grants this when your advocate confirms you will attend trial hearings. With this NOC, the passport office must renew your passport.
              </p>

              {/* Representative Case Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Debt Resolution &amp; Travel Shield Audit</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹28 Lakh Commercial Liability</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Claim or Case Item</th>
                        <th className="p-3">Lender Action or Claim</th>
                        <th className="p-3">Travel and Passport Status</th>
                        <th className="p-3 text-right">Defense Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unsecured Business Loan.</td>
                        <td className="p-3">₹18,50,000 ledger claim.</td>
                        <td className="p-3 text-emerald-600 font-semibold">Civil debt. Zero travel bar.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Settled for ₹6,20,000.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Two Bounced Cheques.</td>
                        <td className="p-3">Section 138 case filed.</td>
                        <td className="p-3 text-amber-600 font-semibold">GSR 570(E) petition filed.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Magistrate NOC granted.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Bank Threat of Travel Ban.</td>
                        <td className="p-3 text-rose-600 font-bold">Threat of airport detention.</td>
                        <td className="p-3 text-blue-600 font-semibold">Bombay HC ruling served.</td>
                        <td className="p-3 text-right font-bold text-slate-900">Threat withdrawn by bank.</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Travel and Debt Shield.</td>
                        <td className="p-3 text-slate-900">₹28 Lakh total exposure.</td>
                        <td className="p-3 text-emerald-700">Passport renewed for full term.</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">100% Free Travel.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Passport Defense &amp; LOC Shield Guide
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart explains your travel rights under Indian law. It shows how the law separates civil loan disputes from passport renewal and immigration rules.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default.jpg"
                    alt="Passport Renewal and Look Out Circular Rights for Loan Default"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Travel Rights Defense Architecture • Passports Act &amp; Article 21 Compliant</span>
                  <a
                    href="/images/infographics/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default.jpg"
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
                6. Step-by-Step SOP: 6-Stage Action Plan Against Travel Bans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender or collection agent threatens your passport or travel, follow these six steps. This process protects your rights and prepares you for a fair debt settlement.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Court Summons and Warrants
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check the e-Courts portal online. Make sure no non-bailable warrants exist in cheque cases. Hire a lawyer to represent you in court.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Get Court NOC Under Rule GSR 570(E)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If a cheque bounce case is active, apply for a court NOC under MEA rule GSR 570(E). The magistrate allows passport renewal upon your undertaking.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Apply for Passport Reissue Online
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit your renewal form at Passport Seva. Attach a copy of the court order and advocate letter. This avoids negative police reports.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File High Court Petition to Quash Bank LOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If a public bank requested an LOC, file a Writ Petition under Article 226 in the High Court. Use the Bombay High Court ruling to quash it.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Send Warning Notice to Recovery Agents
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a formal legal reply to recovery agencies under Section 351 of BNS. Warn them that threats of airport arrest are illegal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate One-Time Settlement (OTS)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once your travel rights are safe, negotiate an OTS with the bank. Clear your loan with a deep discount and get your No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Recovery Harassment: False Airport Arrest Threats & BNS */}
            <section id="recovery-harassment" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Borrower Legal Protections &amp; Penal Safeguards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Recovery Harassment: False Airport Arrest Threats &amp; BNS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collection agents often send fake notices on WhatsApp. They use titles like &quot;Airport Warning&quot; or &quot;Immigration Hold&quot; to scare borrowers. You have strong legal protections against these practices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 351 BNS (Criminal Intimidation)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening a borrower with arrest or travel bans is a crime under Bharatiya Nyaya Sanhita. It leads to jail time and fines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Fair Practices Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI rules ban agents from misleading borrowers. Agents cannot pose as police or airport officers. They cannot harass your family.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Civil Injunction Under Order 39 CPC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If lenders contact your office or embassy, you can get a court order. A civil judge will order agents to stop all harassment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Article 21 Right to Travel</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In Maneka Gandhi v. Union of India, the Supreme Court ruled that foreign travel is a fundamental right. Private debts cannot strip this right.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Quashing an Illegal Bank LOC */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation &amp; Judicial Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Quashing an Illegal Bank LOC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a public bank has asked for an LOC against you for a loan default, use this three-tier process to get it removed.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Target Authority</th>
                      <th className="p-3">Response Time</th>
                      <th className="p-3">Action and Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: Bank Legal Cell.</td>
                      <td className="p-3">Bank Managing Director.</td>
                      <td className="p-3 font-mono">7 to 10 days.</td>
                      <td className="p-3">Demand recall of LOC under Bombay HC ruling.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: Immigration Bureau.</td>
                      <td className="p-3">Bureau of Immigration.</td>
                      <td className="p-3 font-mono">10 to 14 days.</td>
                      <td className="p-3">Send legal letter to cancel wrongful bank record.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: High Court Writ.</td>
                      <td className="p-3">High Court (Article 226).</td>
                      <td className="p-3 font-mono">3 to 7 days.</td>
                      <td className="p-3">Get urgent order to travel and quash the circular.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: From Bank Notice to Court Relief */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: From Bank Notice to Court Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the stages of loan default helps you protect your travel rights before recovery pressure builds up.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Default Timeline</th>
                      <th className="p-3">Loan Status</th>
                      <th className="p-3">Typical Bank Action</th>
                      <th className="p-3">Your Action for Safe Travel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30.</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0.</td>
                      <td className="p-3">Automated payment reminders.</td>
                      <td className="p-3">Check your passport expiry date early.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60.</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1.</td>
                      <td className="p-3">Loan overdue warning letters.</td>
                      <td className="p-3">Confirm that no court notices exist.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90.</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2.</td>
                      <td className="p-3">Recovery agents begin calls.</td>
                      <td className="p-3">Reply firmly against any false airport threats.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120.</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Tag.</td>
                      <td className="p-3">Loan classified as an NPA.</td>
                      <td className="p-3">If cheque bounced, hire a lawyer for court.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180.</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Legal Stage.</td>
                      <td className="p-3">Bank files DRT or court case.</td>
                      <td className="p-3 font-bold text-slate-900">Apply for court NOC under GSR 570(E).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 Onward.</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset.</td>
                      <td className="p-3">Bank sells loan to ARC.</td>
                      <td className="p-3">Settle via OTS and get No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Scenarios: NRI Borrowers, OCI & Job Visas */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Globe className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Situations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Scenarios: NRI Borrowers, OCI &amp; Job Visas
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers work abroad or plan to relocate. Here is how Indian travel laws apply in common international situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    NRI Borrowers Visiting India on Vacation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NRIs visiting family in India cannot be stopped at immigration for card or personal loan defaults. Civil debt creates no border alert.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    New Work Visas and Overseas Relocation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you get a job in Dubai, the UK, or Canada, unpaid loans will not block your visa. Foreign embassies do not check domestic loans.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Overseas Citizens of India (OCI) Cardholders
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    OCI cardholders enjoy lifelong entry into India. Banks have no power to cancel or touch foreign passports or OCI cards.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-amber-600" />
                    Guarantors of Defaulted Corporate Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Company guarantors sometimes face illegal bank circulars. After the 2024 Bombay HC ruling, courts promptly cancel such notices.
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
                Frequently Asked Questions: Passport &amp; LOC Loan Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to key questions about passport renewal, Look Out Circulars, airport checks, and your legal travel rights.
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
                  <strong>Passports Act, 1967:</strong> Section 10(3), Exclusive Powers of Regional Passport Officers to Impound or Revoke Passports.
                </li>
                <li>
                  <strong>Passports Act, 1967:</strong> Section 6(2)(f), Provisions Regarding Pending Criminal Court Proceedings and Reissue Eligibility.
                </li>
                <li>
                  <strong>Ministry of External Affairs Notification GSR 570(E):</strong> Statutory Guidelines for Issuing Passports to Citizens Facing Pending Criminal Cases with Magistrate Permission.
                </li>
                <li>
                  <strong>Bombay High Court Landmark Judgment (April 2024):</strong> Viraj Chetan Shah v. Union of India, Striking Down Public Sector Bank Authority to Request Look Out Circulars.
                </li>
                <li>
                  <strong>Supreme Court of India Precedent:</strong> Suresh Nanda v. Central Bureau of Investigation (2008), Restricting Passport Impoundment Exclusively to Passport Authorities.
                </li>
                <li>
                  <strong>Supreme Court of India Landmark Precedent:</strong> Maneka Gandhi v. Union of India (1978), Enforcing the Right to Travel as a Fundamental Right under Article 21.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Passport Seva Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://bombayhighcourt.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Bombay High Court Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://delhihighcourt.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Delhi High Court Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://boi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Bureau of Immigration India</span>
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
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Delhi High Court LOC Ruling
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Cheating Defense
                  </Link>
                  <Link href="/cheque-bounce-case-defense-section-138" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Cheque Bounce Defense
                  </Link>
                  <Link href="/can-bank-send-you-to-civil-prison-for-loan-default-order-21-rule-37-cpc" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Civil Prison Order 21 Rule 37
                  </Link>
                  <Link href="/police-summons-for-loan-default-rights-against-illegal-interference" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Summons Loan Rights
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Rules
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Defense
                  </Link>
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank No Dues Certificate
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
                Expert in banking compliance, constitutional travel rights, Look Out Circular quashing jurisprudence, and debt resolution defense under the Indian legal framework.
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
                  Bank Threatening Passport or Travel Ban?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team protects your fundamental right to travel. We assist with High Court LOC quashing petitions and negotiate deep loan waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Travel Freedom
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
                  <span>Constitutional Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Airport Offloading:</strong> Full constitutional travel protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>High Court LOC Quashing:</strong> Fast Article 226 judicial relief.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Magistrate NOC Assistance:</strong> GSR 570(E) court permission.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Travel &amp; Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Delhi High Court LOC Ruling
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Travel rights against bank LOCs &rarr;</span>
                </Link>

                <Link
                  href="/cheque-bounce-case-defense-section-138"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 138 Cheque Bounce Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Defend magistrate summons &rarr;</span>
                </Link>

                <Link
                  href="/police-summons-for-loan-default-rights-against-illegal-interference"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Police Summons Loan Rights
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop illegal police recovery &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
