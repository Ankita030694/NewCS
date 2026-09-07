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
  ShieldAlert
} from 'lucide-react';

export default function ConsumerCourtAgainstBankHarassmentClient() {
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
    { id: 'banking-deficiency', label: '1. Banking Deficiency & CPA 2019' },
    { id: 'damages-calculation', label: '2. Financial Damages & Settlement Math' },
    { id: 'redressal-comparison', label: '3. Redressal Forum Comparison' },
    { id: 'cibil-rectification', label: '4. CIBIL Rectification & CICRA' },
    { id: 'infographic-blueprint', label: '5. Visual Legal Roadmap' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Litigation SOP' },
    { id: 'statutory-legal-rights', label: '7. Statutory Protections & Jurisprudence' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Chronological Milestones' },
    { id: 'specialized-scenarios', label: '10. Specialized Case Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I file a consumer court case against a bank for loan recovery harassment?',
      a: 'Yes. Under Section 2(11) and Section 2(47) of the Consumer Protection Act, 2019, abusive debt collection, unannounced home visits at odd hours, threatening phone calls, and privacy breaches constitute deficiency of service and unfair trade practices, making banks legally liable for damages.'
    },
    {
      q: 'What compensation can I claim from a bank in Consumer Court?',
      a: 'You can claim monetary compensation for mental agony, emotional distress, physical harassment, loss of reputation, refund of illegal penal charges or excessive interest, and reimbursement of all litigation and legal defense expenses under Section 39 of the Act.'
    },
    {
      q: 'Do I need an advocate to file a complaint in Consumer Court?',
      a: 'No. Under the Consumer Protection Act, 2019, a complainant can represent themselves in person or through an authorized representative. However, working with a professional debt resolution team ensures robust petition drafting, statutory compliance, and maximum settlement or compensation outcomes.'
    },
    {
      q: 'What is e-Daakhil and how is it used to sue a bank?',
      a: 'e-Daakhil (edaakhil.nic.in) is the official online filing portal developed by the National Consumer Disputes Redressal Commission (NCDRC). It enables consumers to file digital complaints, upload evidentiary exhibits, pay court fees online, and track hearings without physical registry visits.'
    },
    {
      q: 'Which Consumer Court has the jurisdiction to hear my bank dispute?',
      a: 'Pecuniary jurisdiction under CPA 2019 is determined by the value of goods or services paid: District Commissions handle claims up to ₹50 Lakhs, State Commissions adjudicate claims between ₹50 Lakhs and ₹2 Crores, and the National Commission (NCDRC) hears matters exceeding ₹2 Crores.'
    },
    {
      q: 'Can the bank initiate loan recovery while a consumer case is pending?',
      a: 'While banks may attempt recovery, filing a consumer complaint puts substantial legal pressure on the lender. You can seek interim relief or restraining orders from the Consumer Commission under Section 38(8) to prevent coercive recovery actions during the pendency of the dispute.'
    },
    {
      q: 'How does Consumer Court handle wrongful CIBIL credit reporting by banks?',
      a: 'Consumer Commissions routinely hold banks liable for gross deficiency in service if they report incorrect default statuses, fail to update settled accounts to closed within 30 days under CICRA Section 21, or ruin a credit score due to unauthorized disputed charges.'
    },
    {
      q: 'What evidence is required to prove bank harassment in Consumer Forum?',
      a: 'Essential evidence includes audio recordings of abusive recovery calls, dated call logs with timestamps, CCTV footage of home or office visits, written letters, SMS or WhatsApp threat messages, police complaints, and medical certificates establishing mental agony or health deterioration.'
    },
    {
      q: 'How long does a Consumer Court case against a bank take in India?',
      a: 'Under Section 38(7) of the Consumer Protection Act, 2019, consumer complaints are statutorily mandated to be decided within 3 to 5 months. In practice, proceedings typically conclude within 6 to 12 months, often prompting early compromise settlements from banks.'
    },
    {
      q: 'Can I approach Consumer Court if I have already filed an RBI Ombudsman complaint?',
      a: 'Yes. The remedy under the Consumer Protection Act, 2019 is in addition to, and not in derogation of, any other statutory laws. If the RBI Ombudsman rejects your grievance or awards inadequate compensation, you can approach the Consumer Forum for full adjudication and higher damages.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
            <Scale className="w-3.5 h-3.5 text-blue-200" />
            <span>Consumer Protection Act 2019 Banking Redressal</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Sue Your Bank in Consumer Court for Harassment
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Borrowers across India possess enforceable statutory rights against unlawful debt collection, unauthorized charges, and privacy breaches. Learn how to petition the Consumer Commission, secure substantial damages for mental agony, and enforce comprehensive debt resolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>File a Consumer Court Lawsuit</span>
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
                  <span>CPA 2019 Verified Jurisprudence</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Enforcing Section 2(11) Deficiency of Service &amp; Supreme Court Protections.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: CONSUMER FORUM LITIGATION AGAINST BANK HARASSMENT</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate">
                    <strong className="text-slate-900 font-bold">Statutory Consumer Rights:</strong> Borrowers and cardholders are protected under CPA 2019 Section 2(7).
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate">
                    <strong className="text-slate-900 font-bold">Deficiency of Service:</strong> Coercive calls, workplace visits, and abuse violate Section 2(11).
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate">
                    <strong className="text-slate-900 font-bold">Compensation for Agony:</strong> Commissions award monetary damages for harassment under Section 39.
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate">
                    <strong className="text-slate-900 font-bold">Digital e-Daakhil Filing:</strong> Cases can be filed online via edaakhil.nic.in with zero physical visits.
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate">
                    <strong className="text-slate-900 font-bold">OTS Settlement Leverage:</strong> Formal notices prompt bank committees to offer 40% to 65% waivers.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & Consumer Protection Dynamics */}
            <section id="banking-deficiency" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Banking Deficiency: Consumer Protection Act 2019
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower experiences genuine financial distress due to enterprise slowdown, severe illness, or unforeseen job loss, commercial lenders often deploy aggressive third-party collection agencies rather than engaging in constructive debt restructuring. In the Indian legal landscape, banking services are explicitly covered under the Consumer Protection Act, 2019. Any failure by a bank to maintain professional standards, protect consumer privacy, or adhere to the Reserve Bank of India Fair Practices Code directly constitutes a deficiency of service under Section 2(11) of the Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has established that lending institutions cannot treat defaulted borrowers as persons stripped of fundamental dignity. Deploying muscular recovery agents, calling borrowers before 8:00 AM or after 7:00 PM, using intimidatory language, contacting family members or employers, and public shaming represent egregious breaches of service obligations. Such actions empower the borrower to institute formal legal proceedings before the Consumer Disputes Redressal Commission seeking heavy monetary compensation, punitive damages, and permanent injunctions against coercive recovery tactics.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Damages Calculation Math */}
            <section id="damages-calculation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Damages: Compensation Calculation Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When filing a consumer complaint against a lending institution, complainants are entitled to claim multiple distinct heads of monetary relief. Banks frequently inflate delinquent accounts by levying exorbitant penal interest, compound bounce penalties, and arbitrary collection overheads. Under Section 39 of the Consumer Protection Act, 2019, the Consumer Forum possesses wide statutory powers to order a complete refund of unfair financial levies, award direct restitution, and grant substantial punitive damages for mental agony and reputational harm.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a typical consumer petition involving an unsecured loan or credit card debt where unlawful harassment has occurred, the total monetary compensation awarded by the Commission regularly exceeds the outstanding contested penal balance, creating substantial economic leverage for an affordable compromise resolution.
              </p>

              {/* Representative Calculation Card */}
              <div className="bg-white p-6 rounded-2xl border border-blue-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                    <span className="font-bold text-slate-900 text-sm md:text-base">
                      Representative Compensation &amp; Settlement Target Math
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-bold">
                    Case Evaluation Model
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                    <p className="text-slate-500 font-medium">Bank Claimed Outstanding</p>
                    <p className="text-base md:text-lg font-extrabold text-slate-900 mt-1">₹8,50,000</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Includes ₹3.2L penal interest &amp; fees</p>
                  </div>

                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200/60">
                    <p className="text-blue-700 font-medium">True Contractual Principal</p>
                    <p className="text-base md:text-lg font-extrabold text-blue-900 mt-1">₹5,30,000</p>
                    <p className="text-[11px] text-blue-600 mt-0.5">Base net disbursement balance</p>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/60">
                    <p className="text-emerald-700 font-medium">Claimed Damages in Forum</p>
                    <p className="text-base md:text-lg font-extrabold text-emerald-900 mt-1">₹3,00,000</p>
                    <p className="text-[11px] text-emerald-600 mt-0.5">Mental agony + illegal charge refund</p>
                  </div>

                  <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200/60">
                    <p className="text-indigo-700 font-medium">Effective OTS Target (40-55%)</p>
                    <p className="text-base md:text-lg font-extrabold text-indigo-900 mt-1">₹2,40,000 - ₹2,90,000</p>
                    <p className="text-[11px] text-indigo-600 mt-0.5">Full &amp; final closure with clean NOC</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="redressal-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Forum Evaluation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Redressal Comparison: Consumer Court vs Other Forums
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Selecting the correct legal forum is vital when confronting aggressive banking practices. While the RBI Ombudsman provides administrative relief and police complaints handle physical intimidation, the Consumer Commission remains the most potent civil tribunal for securing substantial monetary compensation and binding court injunctions against lender malpractice.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5 md:p-4">Resolution Pathway</th>
                      <th className="p-3.5 md:p-4 border-l border-slate-200">Governing Statute</th>
                      <th className="p-3.5 md:p-4 border-l border-slate-200">Damages Authority</th>
                      <th className="p-3.5 md:p-4 border-l border-slate-200">Average Duration</th>
                      <th className="p-3.5 md:p-4 border-l border-slate-200">Settlement Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Consumer Court (DCDRC / SCDRC)</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Consumer Protection Act, 2019</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200 text-emerald-700 font-semibold">High (Unlimited pecuniary damages)</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">6 to 12 Months</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200 text-[#1886ff] font-bold">Exceptional OTS Leverage</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">RBI Ombudsman (CMS Portal)</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">RBI Integrated Scheme 2021</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200 text-slate-600">Capped at ₹1 Lakh for mental agony</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">30 to 60 Days</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Moderate Administrative Pressure</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Civil Court Suit</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Code of Civil Procedure, 1908</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200 text-slate-600">Full damages subject to high court fees</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">3 to 7 Years</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Slow &amp; Expensive Process</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Legal Services Authorities Act, 1987</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200 text-slate-600">Zero damages (Consensual waiver only)</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Single Day Hearing</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Immediate Non-Appealable Consent</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-rose-700">Inaction / Non-Response</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Default &amp; NPA Guidelines</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200 text-rose-600 font-bold">Zero (Escalating penal interest)</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Continuous Harassment</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200 text-rose-700 font-bold">Severe CIBIL Damage &amp; Legal Suits</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Remedy */}
            <section id="cibil-rectification" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Compliance</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Rectification: Enforcing Credit Bureau Updates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit scores maintained by TransUnion CIBIL, Experian, CRIF High Mark, and Equifax are calculated using advanced proprietary algorithms heavily weighted across five core dimensions: repayment history (35%), credit utilization ratio (30%), credit mix duration (15%), new credit inquiries (10%), and total debt exposure (10%). When a bank wrongfully reports a disputed account as willful default or delays reporting an agreed settlement, the consumer credit score experiences an immediate collapse of 120 to 250 points.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), credit institutions are statutorily obligated to update accurate account data within 30 days of resolution. When banks fail to do so, Consumer Commissions regularly issue binding directives ordering immediate credit bureau data rectification, deletion of derogatory remarks, and monetary compensation of ₹100 per day of delay under RBI guidelines.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Infographic: Bank Harassment Consumer Court Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The visual framework below summarizes the end-to-end procedural trajectory from evidence locking to filing on e-Daakhil and securing enforceable compensation orders against banking malpractice.
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs overflow-hidden">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60">
                  <Image
                    src="/images/infographics/consumer-court-against-bank-harassment-v2.jpg"
                    alt="Consumer Court Against Bank Harassment & Deficiency in Service Legal Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 gap-2">
                  <span>Official CredSettle Consumer Litigation &amp; Dispute Resolution Framework</span>
                  <a
                    href="/images/infographics/consumer-court-against-bank-harassment-v2.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Image</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6 Stages to File and Win in Court
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Filing an effective consumer court complaint requires methodical legal execution. Following this standardized six-stage litigation protocol guarantees evidentiary integrity, procedural compliance, and maximum settlement leverage.
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-extrabold">1</span>
                    <span>Stage 1: Forensic Audit &amp; Evidence Preservation</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
                    Compile unedited audio recordings of abusive calls, timestamped call logs, CCTV footage of unlawful visits, written demands, and certified loan statements. Categorize every violation under the RBI Fair Practices Code.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-extrabold">2</span>
                    <span>Stage 2: Pre-Litigation Legal Notice &amp; Hardship Dossier</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
                    Serve a formal legal notice upon the bank Managing Director and Principal Nodal Officer giving 15 days to halt harassment, correct wrongful charges, and provide a fair resolution roadmap before court action.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-extrabold">3</span>
                    <span>Stage 3: Drafting the Consumer Complaint Petition</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
                    Draft the comprehensive complaint setting out facts, establishing consumer status under Section 2(7), detailing specific deficiencies under Section 2(11), and enumerating itemized claims for compensation under Section 39.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-extrabold">4</span>
                    <span>Stage 4: e-Daakhil Online Filing &amp; Verification</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
                    Submit the indexed petition along with supporting affidavits and evidence on edaakhil.nic.in, remitting the requisite nominal court fee based on the pecuniary jurisdiction of the District or State Commission.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-extrabold">5</span>
                    <span>Stage 5: Court Admission, Interim Relief &amp; Rejoinder</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
                    Argue preliminary admission, obtain an interim stay order against collection agent contact under Section 38(8), receive the bank written statement, and submit a rejoinder dismantling frivolous lender defenses.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-extrabold">6</span>
                    <span>Stage 6: Final Adjudication, Award &amp; Compromise Closure</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
                    Present final arguments to secure an enforceable compensation award or leverage the strong litigation position to conclude a 40% to 60% One-Time Settlement with a formal No Dues Certificate and clean CIBIL reporting.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Consumer Rights Grid */}
            <section id="statutory-legal-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Legal Rights: Consumer Protection Standards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian consumer jurisprudence provides strong statutory safeguards to shield citizens from corporate banking malpractice. Understanding these core legal provisions ensures your defense is rooted in binding statutory authority.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    <span>Pecuniary Jurisdiction (Sections 35, 47 &amp; 58)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Complaints with consideration paid up to ₹50 Lakhs lie before the District Commission. Claims between ₹50 Lakhs and ₹2 Crores are heard by the State Commission, while disputes exceeding ₹2 Crores reach the National Commission (NCDRC).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    <span>Deficiency of Service (Section 2(11))</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Covers any fault, imperfection, shortcoming, or inadequacy in banking quality or manner of performance. Unwarranted calls, privacy breaches, and unverified penal levies automatically constitute actionable deficiency.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    <span>RBI Master Direction on Recovery Agents</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mandates that agents must be police-verified, carry ID cards, contact borrowers only between 8:00 AM and 7:00 PM, maintain call recordings, and strictly refrain from intimidating or threatening actions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Supreme Court Precedent: Shanti Devi Sharma</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In ICICI Bank v. Shanti Devi Sharma (2008), the Supreme Court ruled that banks cannot employ musclemen to recover loans and affirmed vicarious liability of senior banking management for agent misbehavior.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation: Redressal from Bank to Commission
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An orderly escalation strategy establishes undeniable procedural diligence, ensuring that when your petition reaches the Consumer Forum, the bank cannot claim lack of notice or internal opportunity to resolve the grievance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                    Tier 1: Internal Redressal
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">Bank GRO &amp; PNO</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal grievance to the bank Grievance Redressal Officer (7 to 10 days) and escalate to the Principal Nodal Officer (14 to 21 days) demanding immediate stoppage of collection misconduct.
                  </p>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800">
                    Tier 2: Regulatory Portal
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">RBI Ombudsman (CMS)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lodge a digital complaint on cms.rbi.org.in if the bank fails to resolve the dispute within 30 days, invoking the Integrated Ombudsman Scheme 2021 for institutional accountability.
                  </p>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                    Tier 3: Judicial Redressal
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">Consumer Court (e-Daakhil)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a formal civil complaint under the Consumer Protection Act, 2019 claiming monetary compensation, refund of illegal penal interest, and permanent restraining orders against recovery agencies.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Litigation Schedule</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Timeline: Filing to Compensation Order
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Consumer litigation follows a structured judicial timeline designed for swift dispute adjudication, moving systematically through distinct evidentiary and argumentative stages.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5 md:p-4">Timeline Milestone</th>
                      <th className="p-3.5 md:p-4 border-l border-slate-200">Action Required</th>
                      <th className="p-3.5 md:p-4 border-l border-slate-200">Expected Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 1 to 15</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Evidence Audit &amp; Legal Notice</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Establishes formal statutory record and 15-day lender cure period</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 16 to 30</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Petition Drafting &amp; e-Daakhil Filing</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Formal registration of consumer case and allotment of case number</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Month 2 to 3</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Admission Hearing &amp; Bank Summons</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Court issues notice to bank and grants interim anti-harassment stay</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Month 4 to 6</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Bank Reply, Rejoinder &amp; Evidence</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Submission of sworn affidavits, call transcripts, and expert audits</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Month 7 to 12</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Final Arguments &amp; Award Execution</td>
                      <td className="p-3.5 md:p-4 border-l border-slate-200">Judicial decree awarding damages or conclusion of bilateral OTS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Case Types</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Unauthorized Calls &amp; Errors
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Consumer court litigation addresses a wide spectrum of specialized banking violations, providing targeted legal remedies tailored to distinct factual circumstances.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">Workplace &amp; Third-Party Harassment</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents contacting employers, colleagues, or distant relatives violates constitutional privacy rights under the Puttaswamy verdict, creating immediate liability for substantial reputational damages in Consumer Court.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">Unauthorized Credit Card Levies</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unilateral billing of unsolicited insurance premiums, annual maintenance charges on inactive cards, and hidden forex conversion fees are routinely struck down as unfair trade practices with full interest refunds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">Wrongful Post-Settlement CIBIL Status</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a bank accepts an OTS payment but continues reporting the account as written-off or active overdue, consumer commissions impose daily compliance penalties until credit bureau records are cleaned.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">ARC Debt Assignment Coercion</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Asset Reconstruction Companies purchasing NPA portfolios must adhere strictly to RBI debt collection guidelines. Failing to provide formal assignment deeds while deploying collection agencies constitutes severe service deficiency.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircleIcon className="w-4 h-4 text-[#1886ff]" />
                <span>Expert Q&amp;A</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Consumer Court Bank Cases
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, authoritative answers to essential questions regarding consumer forum procedures, damages calculation, and legal defenses against bank recovery misconduct.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-slate-900 text-xs sm:text-sm md:text-base leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/30 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Statutory Citations: Legal Authorities &amp; Outbound Links
              </h2>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                All legal interpretations and procedural frameworks detailed on this page are grounded in statutory enactments, binding Reserve Bank of India Master Directions, and landmark Supreme Court of India precedents.
              </p>

              {/* 6 Outbound Authority Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-xs text-slate-800 font-semibold"
                >
                  <span>Reserve Bank of India</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-xs text-slate-800 font-semibold"
                >
                  <span>RBI CMS Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://edaakhil.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-xs text-slate-800 font-semibold"
                >
                  <span>e-Daakhil Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://consumeraffairs.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-xs text-slate-800 font-semibold"
                >
                  <span>Dept of Consumer Affairs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-xs text-slate-800 font-semibold"
                >
                  <span>India Code Legislative Acts</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-xs text-slate-800 font-semibold"
                >
                  <span>NALSA Legal Services</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                  Related Debt Resolution &amp; Banking Guides
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-recovery-harassment-complaint" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Recovery Harassment Complaint
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice Reply
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed Status
                  </Link>
                  <Link href="/can-recovery-agents-visit-my-office" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Recovery Agents Office Visit Rules
                  </Link>
                  <Link href="/can-bank-call-relatives-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Calls to Relatives Harassment
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate After Settlement
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score Post-Settlement
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
                Specialized in consumer protection litigation, banking regulatory compliance, anti-harassment injunctions, and debt settlement negotiations across Indian consumer forums.
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

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Bank Harassment?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our consumer law experts file deficiency of service lawsuits, halt recovery harassment, claim damages, and negotiate 40% to 65% loan waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                File a Consumer Court Lawsuit
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
                  <span>Direct Bank Settlement • CPA 2019 Compliant</span>
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
                  <span><strong>RBI &amp; CPA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated consumer debt specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Consumer Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Recovery Harassment Complaint Guide
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Police FIR &amp; RBI Ombudsman steps &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral appointments &rarr;</span>
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

function HelpCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}
