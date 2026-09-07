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
  ShieldAlert,
  Users,
  CheckCircle
} from 'lucide-react';

export default function LegalNoticeToBankForMentalHarassmentClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Summary' },
    { id: 'debt-economics-recovery-roots', label: '1. Bank Liability & Recovery Roots' },
    { id: 'financial-damages-settlement-math', label: '2. Damages & Financial Breakdown' },
    { id: 'legal-forum-comparison', label: '3. Legal Redressal Comparison Matrix' },
    { id: 'cibil-algorithm-dispute-repair', label: '4. CIBIL Scoring & Dispute Repair' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Notice Blueprint' },
    { id: 'step-by-step-notice-sop', label: '5. 6-Stage Legal Notice SOP' },
    { id: 'statutory-notice-defense', label: '6. Statutory Rights & Criminal Defense' },
    { id: 'three-tier-escalation', label: '7. 3-Tier Grievance & Ombudsman' },
    { id: 'chronological-milestones', label: '8. Procedural Timeline & Milestones' },
    { id: 'specialized-harassment-scenarios', label: '9. Specialized Harassment Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I send a legal notice to my bank for recovery agent harassment?',
      a: 'Yes. You can issue a formal legal notice to the bank Managing Director and Principal Nodal Officer under the Consumer Protection Act, 2019, Law of Torts, and RBI Master Directions. The notice highlights vicarious liability for agent misconduct, demands an immediate cessation of harassment, and claims monetary compensation for mental trauma.'
    },
    {
      q: 'What laws protect borrowers in India against abusive recovery agents?',
      a: 'Borrowers are protected under RBI Master Directions on Fair Practices Code, Section 308 (Extortion) and Section 351 (Criminal Intimidation) of the Bharatiya Nyaya Sanhita (BNS), 2023, Section 39 of the Consumer Protection Act, 2019, and Article 21 of the Indian Constitution ensuring the right to live with dignity.'
    },
    {
      q: 'What is the Supreme Court ruling on bank recovery agent harassment?',
      a: 'In ICICI Bank Ltd. v. Prakash Kaur (2007) and Shanti Devi Sharma (2008), the Supreme Court of India ruled that banks cannot employ musclemen or recovery agents who resort to intimidation, violence, or unlawful coercion. Lenders are vicariously liable for the illegal acts of their contracted recovery agencies.'
    },
    {
      q: 'Can recovery agents call my relatives, friends, or workplace?',
      a: 'No. RBI guidelines strictly prohibit recovery agents from contacting family members, friends, or employers whose contact details were not provided as official co-borrowers or guarantors. Reaching out to third parties or creating a public scene constitutes criminal defamation and a severe privacy violation.'
    },
    {
      q: 'What permitted hours are recovery agents allowed to call or visit?',
      a: 'According to RBI Master Directions, debt recovery agents and bank representatives are strictly permitted to call or visit borrowers only between 8:00 AM and 7:00 PM. Calls or home visits before 8:00 AM or after 7:00 PM are illegal and form solid grounds for punitive legal notices.'
    },
    {
      q: 'How much financial compensation can I claim for mental harassment by a bank?',
      a: 'Borrowers can claim compensation ranging from ₹50,000 to ₹20 Lakhs or more through Consumer Disputes Redressal Commissions or Civil Courts, depending on the severity of the trauma, reputational harm, loss of employment, or medical impact caused by unlawful debt recovery practices.'
    },
    {
      q: 'How does the RBI Integrated Ombudsman handle bank harassment complaints?',
      a: 'Under the Reserve Bank - Integrated Ombudsman Scheme, 2021, if the bank fails to resolve your grievance within 30 days of a legal notice, the Ombudsman can award up to ₹20 Lakhs in compensation for financial loss and up to ₹1 Lakh specifically for mental agony and harassment.'
    },
    {
      q: 'Can sending a legal notice to the bank stop recovery calls immediately?',
      a: 'Yes. Once a formal legal notice is served on the bank MD and Principal Nodal Officer, the matter moves from aggressive third-party collection agencies to the bank internal legal compliance department. This typically halts informal agent calls immediately pending formal legal reply or settlement talks.'
    },
    {
      q: 'Does issuing a legal notice for harassment affect my loan settlement options?',
      a: 'Issuing a legal notice significantly strengthens your negotiation posture. Exposing the bank regulatory non-compliance and potential vicarious liability motivates the credit committee to waive inflated penal charges and agree to a favorable One-Time Settlement (OTS) with a formal No Dues Certificate.'
    },
    {
      q: 'What evidence is required before serving a legal notice for bank harassment?',
      a: 'Essential evidence includes call recordings with date and time stamps, screenshots of abusive WhatsApp messages or SMS, CCTV footage of unlawful home visits, formal police GD or complaint numbers, and medical records demonstrating acute mental stress or anxiety caused by the harassment.'
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
            <ShieldCheck className="w-4 h-4 text-blue-200" />
            <span>100% Confidential Legal Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Legal Notice to Bank for Mental Harassment
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Facing abusive recovery agents, unlawful home visits, or workplace defamation? Learn how to serve an authoritative legal notice, hold bank leadership vicariously liable, and claim statutory damages while securing debt relief.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Send a Legal Notice to the Bank</span>
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
                  <span>Statutory Anti-Harassment Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Enforced under RBI Master Directions, Consumer Protection Act 2019 &amp; BNS 2023.
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
                <span>EXECUTIVE SUMMARY: LEGAL NOTICE FOR BANK HARASSMENT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate sm:whitespace-normal">
                    <strong className="text-slate-900 font-bold">Vicarious Liability:</strong> Banks are legally accountable for threats and abuse by recovery agents.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate sm:whitespace-normal">
                    <strong className="text-slate-900 font-bold">Strict Calling Hours:</strong> Recovery calls and visits are permitted strictly between 8:00 AM and 7:00 PM.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate sm:whitespace-normal">
                    <strong className="text-slate-900 font-bold">Third-Party Ban:</strong> Calling relatives, employers, or friends is strictly illegal under RBI rules.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate sm:whitespace-normal">
                    <strong className="text-slate-900 font-bold">Notice to Bank MD:</strong> Advocate notice halts agent harassment and transfers your file to bank legal.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate sm:whitespace-normal">
                    <strong className="text-slate-900 font-bold">OTS Settlement:</strong> Documented agent abuse provides leverage to negotiate a 40% to 55% waiver.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & Recovery Harassment Roots */}
            <section id="debt-economics-recovery-roots" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Mechanics &amp; Recovery Pressures</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Basis: Bank Liability for Recovery Abuse
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an individual encounters genuine economic distress such as corporate downsizing, severe medical emergencies, or enterprise liquidity crises, unsecured personal loans and credit cards rapidly transition through delinquency stages. Under RBI prudential norms, an account past due for 30 days becomes Special Mention Account 1 (SMA-1), advances to SMA-2 at 60 days, and is classified as a Non-Performing Asset (NPA) upon crossing the 90-day threshold. This regulatory reclassification mandates 15% to 100% Tier-1 capital provisioning by the lending institution, creating intense internal pressure on credit risk divisions to recover capital at any cost.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To bypass operational constraints and avoid costly litigation in civil courts, commercial banks and Non-Banking Financial Companies (NBFCs) routinely outsource overdue loan portfolios to third-party recovery agencies. These agencies operate on high-incentive contingency commission models, often earning 15% to 30% of every rupee extracted from delinquent borrowers. Because collection agents have no direct employment ties with the bank and work under cutthroat monthly targets, they systematically resort to coercive tactics, continuous abusive telephone calling, unannounced home invasions, and unlawful contact with employers.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has firmly established that banks cannot insulate themselves behind outsourced collection contracts. Under the established doctrine of vicarious liability, a principal is legally accountable for wrongful acts executed by its authorized agents during the course of debt recovery. Issuing a formal legal notice directly to the Managing Director and Principal Nodal Officer pierces this corporate veil, exposing systemic non-compliance with the Reserve Bank of India Fair Practices Code and creating undeniable institutional accountability.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Damages Math / Settlement Economics */}
            <section id="financial-damages-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Compensation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Compensation: Calculating Mental Damages
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers default, lenders routinely inflate outstanding balances by loading compounding penal interest rates (often 24% to 36% per annum), bounce charges, collection visit fees, and arbitrary legal administrative levies onto the ledger. A principal debt of ₹5,00,000 can rapidly snowball into a claimed balance exceeding ₹8,20,000 within twelve months of delinquency. This inflated figure is then used by recovery agents as psychological leverage to intimidate borrowers into desperate, unsustainable refinancings.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Indian tort jurisprudence and consumer law, unlawful recovery practices generate enforceable financial claims against the bank. Under Section 39 of the Consumer Protection Act, 2019, Consumer Disputes Redressal Commissions are empowered to award substantial punitive damages for mental agony, physical trauma, harassment, and loss of professional reputation caused by deficiency in banking services. Concurrently, serving a structured legal notice that quantifies documented harassment allows borrowers to neutralize inflated penal charges and negotiate a clean One-Time Settlement (OTS) calculated purely against the unbundled principal balance.
              </p>

              {/* Financial Calculation Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Representative 180-Day Default: Ledger Inflation vs. Legal OTS Target
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Case Study: Unsecured Personal Loan with ₹5,00,000 Disbursed Principal
                    </p>
                  </div>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    52% Realized Relief
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="bg-rose-50/70 border border-rose-100 p-3.5 rounded-xl space-y-1.5">
                    <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider">
                      Bank Claimed Dues (Inflated)
                    </span>
                    <div className="text-xl font-extrabold text-rose-950">₹8,45,000</div>
                    <p className="text-[11px] text-rose-800 leading-snug">
                      Includes ₹3,45,000 in compound penal charges, late fees, GST levies, and third-party recovery commissions.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Unbundled True Principal
                    </span>
                    <div className="text-xl font-extrabold text-slate-900">₹4,20,000</div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Net actual principal outstanding after deducting previously serviced EMIs from the original disbursement.
                    </p>
                  </div>

                  <div className="bg-emerald-50/80 border border-emerald-200 p-3.5 rounded-xl space-y-1.5">
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                      Compromise OTS Target Range
                    </span>
                    <div className="text-xl font-extrabold text-emerald-950">₹2,10,000 - ₹2,60,000</div>
                    <p className="text-[11px] text-emerald-800 leading-snug">
                      Realistic 40% to 50% settlement window secured by CredSettle through legal notice and harassment defense.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  <strong>Strategic Insight:</strong> Serving a statutory notice shifts the discussion from raw numbers to institutional liability. When faced with documented evidence of agent misconduct, bank legal officers readily eliminate accumulated penal interest and accept a compromise settlement to avert regulatory audits and consumer court penalties.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="legal-forum-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Forum Evaluation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Forum Matrix: Comparing Redressal Routes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When confronting relentless recovery harassment, borrowers have several legal avenues available under Indian law. Choosing the correct sequence of actions determines whether harassment stops immediately and whether you obtain financial relief or remain entangled in protracted disputes:
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">Redressal Avenue</th>
                      <th className="p-3.5">Governing Authority &amp; Law</th>
                      <th className="p-3.5">Immediate Harassment Halt</th>
                      <th className="p-3.5">Damages &amp; Compensation</th>
                      <th className="p-3.5">Timeline to Result</th>
                      <th className="p-3.5 text-[#1886ff]">Settlement Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Advocate Legal Notice to Bank</td>
                      <td className="p-3.5">Law of Torts &amp; RBI Master Directions</td>
                      <td className="p-3.5 font-semibold text-emerald-700">Immediate (48 to 72 Hours)</td>
                      <td className="p-3.5">Demands up to ₹20 Lakhs in notice</td>
                      <td className="p-3.5">15 to 30 Days</td>
                      <td className="p-3.5 font-bold text-emerald-600">Maximum OTS Leverage (40%-55%)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">RBI Integrated Ombudsman</td>
                      <td className="p-3.5">RBI Ombudsman Scheme 2021</td>
                      <td className="p-3.5">High (upon notice admission)</td>
                      <td className="p-3.5">Up to ₹1 Lakh mental agony + ₹20L loss</td>
                      <td className="p-3.5">30 to 60 Days</td>
                      <td className="p-3.5">High (regulator scrutiny forces waiver)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Police FIR / GD Entry</td>
                      <td className="p-3.5">BNS Sections 308, 351, 79</td>
                      <td className="p-3.5">Moderate (halts physical visits)</td>
                      <td className="p-3.5">Zero (Criminal court penalty only)</td>
                      <td className="p-3.5">Variable (police discretion)</td>
                      <td className="p-3.5">Moderate (criminal pressure on agents)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Consumer Forum Complaint</td>
                      <td className="p-3.5">Consumer Protection Act 2019</td>
                      <td className="p-3.5">Moderate (subject to stay application)</td>
                      <td className="p-3.5 font-semibold text-emerald-700">Unlimited (statutory compensation)</td>
                      <td className="p-3.5">6 to 18 Months</td>
                      <td className="p-3.5">High (settled via Lok Adalat/mediation)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100 bg-rose-50/30">
                      <td className="p-3.5 font-bold text-rose-950">Passive Inaction &amp; Silence</td>
                      <td className="p-3.5">None (Unrepresented Default)</td>
                      <td className="p-3.5 text-rose-700 font-semibold">Zero (harassment escalates)</td>
                      <td className="p-3.5 text-rose-700">Zero (forfeits all rights)</td>
                      <td className="p-3.5">Indefinite distress</td>
                      <td className="p-3.5 text-rose-700 font-bold">Zero (ex-parte legal actions)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-dispute-repair" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Algorithms &amp; Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Impact: Dispute Tagging and Credit Repair
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit Information Bureau (India) Limited (CIBIL) and peer bureaus (Experian, Equifax, CRIF High Mark) calculate your three-digit credit score based on five strict algorithmic parameters: Payment History (35% weight), Credit Utilization Ratio (30% weight), Credit History Duration (15% weight), Credit Mix (10% weight), and New Credit Inquiries (10% weight). When an account defaults, 30-plus DPD (Days Past Due) and subsequent NPA tags decimate your score by 120 to 250 points, locking you out of formal banking channels.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Crucially, when a bank engages in unlawful harassment or misreports disputed amounts, borrowers can invoke statutory remedies under Section 21 of the Credit Information Companies (Regulation) Act (CICRA), 2005. Under CICRA rules, credit institutions are legally obligated to ensure data accuracy and must log an active &quot;Disputed&quot; tag within 30 days of receiving a formal grievance. Once your legal notice prompts an internal inquiry and an agreed compromise settlement, the lender must report the account as settled or closed and update the balance to zero within 45 days.
              </p>
              <div className="bg-blue-50/70 border border-blue-200/80 p-4 rounded-xl text-xs md:text-sm text-slate-800 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                  <span>The Section 21 CICRA Correction Timeline</span>
                </div>
                <p className="leading-relaxed">
                  Following settlement remittance and issuance of the No Dues Certificate, borrowers can submit the settlement proof directly through the CIBIL online dispute resolution portal. By combining your bank NOC with the legal notice resolution dossier, your CIBIL record is updated to a clean status, allowing your credit score to steadily recover to 750+ over a 12 to 18-month credit rebuilding trajectory.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: 6-Stage Harassment Notice SOP
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review the end-to-end procedural workflow engineered by CredSettle to stop recovery abuse, serve a formal statutory notice on bank leadership, and achieve a legally binding compromise settlement:
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/infographics/legal-notice-to-bank-for-mental-harassment.jpg"
                    alt="6-Stage Legal Notice to Bank for Mental Harassment SOP Blueprint"
                    fill
                    sizes="(max-width: 1200px) 100vw, 850px"
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-1 pt-1 text-xs text-slate-500">
                  <span>Figure 1: CredSettle 6-Stage Legal Notice &amp; Anti-Harassment Defense SOP</span>
                  <a
                    href="/images/infographics/legal-notice-to-bank-for-mental-harassment.jpg"
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
            <section id="step-by-step-notice-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Sending a Legal Notice to Bank
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Serving a legal notice is not merely sending a complaint letter; it is a strategic judicial prerequisite governed by statutory rules of evidence and civil procedure. CredSettle executes a disciplined six-stage standard operating procedure to guarantee maximum legal impact:
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      01
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 1: Forensic Evidence Collation &amp; Call Logging
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-9">
                    Before issuing notice, compile an unassailable evidentiary trail under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023. Record all incoming harassment calls capturing exact timestamps, abusive language, or background noise. Archive WhatsApp chat screenshots, fake legal notice PDFs, SMS logs, CCTV footage of home visits, and secure medical certificates documenting acute stress or anxiety induced by recovery agents.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      02
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 2: Compiling the Comprehensive Hardship Dossier
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-9">
                    A persuasive defense demonstrates that default was bona fide and caused by involuntary circumstances rather than willful intent. Gather termination letters, salary reduction slips, hospital discharge summaries, or business balance sheets. This financial distress dossier proves non-willful delinquency while establishing that the borrower attempted to communicate in good faith before being subjected to agent abuse.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      03
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 3: Drafting &amp; Formal Service via Speed Post AD
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-9">
                    A qualified debt resolution advocate drafts the formal legal notice on authentic legal letterhead. The notice is addressed to the bank Managing Director, Chief Risk Officer, and Principal Nodal Officer. It details statutory violations under RBI Master Directions, tortious damages, and demands an immediate cessation of harassment, served via Registered Speed Post with Acknowledgment Due (AD) and secure email.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      04
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 4: Statutory 15 to 30-Day Investigation &amp; Reply Window
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-9">
                    Upon postal delivery, the bank internal compliance and legal grievance cell is legally obligated to register the matter. The bank must initiate an internal inquiry into the contracted recovery agency and restrain collection teams from contacting the borrower. If the bank fails to issue a formal reply within 30 days, their silence strengthens subsequent escalations before the RBI Ombudsman.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      05
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 5: Bilateral Compromise &amp; Settlement Negotiations
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-9">
                    With the harassment halted and institutional risk established, CredSettle negotiators engage directly with the bank Credit Committee or Zonal Nodal Officer. Leveraging the evidence dossier, our team negotiates a 100% waiver of penal interest and late fees, arriving at an affordable lump-sum or structured installment compromise settlement discounted by 40% to 55%.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      06
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 6: Settlement Remittance, No Dues Certificate &amp; CIBIL Update
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-9">
                    Before making any payment, our legal team thoroughly vets the bank official Settlement Letter to verify loan account numbers, agreed waiver amounts, and payment deadlines. The borrower remits the settlement sum directly into the bank designated loan account. Within 21 to 30 days, the bank issues an authentic No Dues Certificate (NDC) and updates the CIBIL bureau record.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Penal Codes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Rights: RBI Guidelines and Legal Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian jurisprudence provides robust criminal and civil safeguards shielding borrowers from predatory collection tactics. Understanding these statutory protections empowers you to counter abusive threats effectively:
              </p>

              {/* 4-Card Analytical Defense Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md">
                      BNS Criminal Sanctions
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Sections 308, 351, 79</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Extortion &amp; Criminal Intimidation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under the Bharatiya Nyaya Sanhita (BNS), 2023, recovery agents threatening bodily harm, wrongful confinement, property damage, or using vulgar language commit cognizable offenses. Section 308 (Extortion) and Section 351 (Criminal Intimidation) carry severe imprisonment terms of up to 3 to 7 years.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Supreme Court Mandate
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Shanti Devi Sharma Ruling</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Prohibition of Musclemen &amp; Force
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    In ICICI Bank Ltd. v. Prakash Kaur and Shanti Devi Sharma, the Supreme Court ruled that banks cannot employ musclemen to recover loans through force or intimidation. The court emphasized that default is a civil matter and lenders must adhere strictly to established legal recovery frameworks.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      RBI Regulatory Mandate
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Fair Practices Code</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Permitted Calling Hours &amp; Privacy
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The RBI Master Directions strictly bar agents from calling before 8:00 AM or after 7:00 PM. Agents must carry authorized identity cards, maintain call recording logs, respect borrower privacy, and are completely prohibited from contacting family members, neighbors, or workplace associates.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Consumer Protection 2019
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Section 39 Redressal</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Deficiency in Banking Services
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Harassment by recovery agents constitutes an actionable deficiency in banking services under the Consumer Protection Act, 2019. District and State Consumer Commissions possess wide statutory jurisdiction to award monetary compensation and legal costs against offending commercial banks.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Hierarchy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation: Ombudsman and Consumer Courts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the bank fails to resolve your grievance or halt recovery abuse within statutory timelines, Indian banking and consumer law provides a clear 3-tier escalation pathway:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    L1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Tier 1: Bank Principal Nodal Officer &amp; Internal Ombudsman (7 - 14 Days)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Serve your formal legal notice and grievance dossier to the bank designated Principal Nodal Officer (PNO) and Internal Ombudsman. The bank compliance team is required to investigate agency misconduct, preserve call logs, and issue a written resolution.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    L2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Tier 2: RBI Integrated Ombudsman (cms.rbi.org.in - 30 Days)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      If the bank does not resolve the issue within 30 days or rejects your notice, file a complaint on the RBI CMS portal. The Ombudsman possesses the authority to penalize the bank, order an immediate stay on recovery, award compensation up to ₹20 Lakhs for losses, and award up to ₹1 Lakh for mental trauma.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    L3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Tier 3: Consumer Disputes Commission or High Court Writ (60+ Days)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      For severe harassment involving public defamation or physical assault, file a formal complaint before the District/State Consumer Commission or an Article 226 Writ Petition before the High Court for violation of Article 21 fundamental rights to privacy and dignity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timeline: Notice to Final Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Track the timeline of events from the first incident of recovery agent harassment to the complete closure of your disputed loan account:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">Timeline Phase</th>
                      <th className="p-3.5">Key Events &amp; Harassment Triggers</th>
                      <th className="p-3.5">CredSettle Defense Actions</th>
                      <th className="p-3.5 text-[#1886ff]">Expected Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 1 - 3</td>
                      <td className="p-3.5">Abusive calls, WhatsApp threats, home visits</td>
                      <td className="p-3.5">Evidence collation, call logging, medical documentation</td>
                      <td className="p-3.5">Comprehensive forensic dossier assembled</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 4 - 7</td>
                      <td className="p-3.5">Notice drafted &amp; served on Bank MD &amp; PNO</td>
                      <td className="p-3.5">Speed Post AD dispatch &amp; formal email service</td>
                      <td className="p-3.5">Matter escalated to bank legal department</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 8 - 21</td>
                      <td className="p-3.5">Statutory 14-day bank investigation window</td>
                      <td className="p-3.5">Monitoring compliance; police complaint if breached</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Harassment calls cease immediately</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 22 - 45</td>
                      <td className="p-3.5">Bilateral settlement talks with Credit Committee</td>
                      <td className="p-3.5">Negotiating 100% penal interest waiver &amp; OTS</td>
                      <td className="p-3.5 font-semibold text-emerald-700">Formal Settlement Letter issued</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Month 2 - 3</td>
                      <td className="p-3.5">Settlement remittance &amp; account closure</td>
                      <td className="p-3.5">Direct bank payment verification &amp; NDC retrieval</td>
                      <td className="p-3.5 font-bold text-emerald-600">No Dues Certificate issued; CIBIL updated</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-harassment-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Users className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Situations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Workplace Visits &amp; Family
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collection agencies frequently deploy specialized high-pressure tactics tailored to different borrower profiles. Here is how CredSettle neutralizes these predatory scenarios:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Workplace Intrusion &amp; HR Harassment
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When recovery agents visit your office or call your HR manager, they commit actionable civil defamation and tortious interference with employment. Our legal notice serves an immediate cease-and-desist to the bank, warning of personal damages claims under the Law of Torts and criminal defamation under Section 356 of BNS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-700" />
                    Harassment of Elderly Parents &amp; Relatives
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under RBI Fair Practices Code, calling relatives or references who did not sign as guarantors is strictly illegal. Our legal notice cites the Maintenance and Welfare of Parents and Senior Citizens Act, 2007, along with RBI privacy regulations, triggering instant internal disciplinary action against the agency.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Illegal Digital Loan Apps &amp; Morphed Photos
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Predatory instant loan apps harvesting contacts and threatening to circulate morphed photos commit severe cyber crimes. CredSettle combines urgent legal notices to the NBFC sponsor with immediate filings on the National Cyber Crime Reporting Portal (cybercrime.gov.in) and CERT-In.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-emerald-700" />
                    Asset Reconstruction Company (ARC) Recovery
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When loans are sold to ARCs under SARFAESI Act, recovery teams often falsely claim SARFAESI attachment rights on unsecured personal debts. Our legal defense demonstrates that personal loans lack underlying collateral, neutralizing attachment threats and securing an aggressive OTS.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Bank Harassment Notices
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Explore expert answers to the most critical legal, regulatory, and procedural questions regarding serving a legal notice to banks for recovery agent harassment:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors text-xs sm:text-sm md:text-base"
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
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 mt-1 leading-relaxed bg-slate-50/50">
                          <p className="pt-3">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-5 pt-2">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority &amp; Citations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Statutory Citations: Banking Law and Authorities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legal analyses and procedural frameworks outlined on this page are governed by Indian statutory legislation, Reserve Bank of India regulatory master directions, and binding Supreme Court precedents:
              </p>

              {/* Statutory Citations List */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs sm:text-sm text-slate-700">
                <p>• <strong>Reserve Bank of India Master Direction:</strong> Fair Practices Code for Lenders, Master Circular on Recovery Agents (RBI/2022-23/108 DOR.ORG.REC.65/21.04.158/2022-23).</p>
                <p>• <strong>Reserve Bank of India:</strong> Integrated Ombudsman Scheme, 2021 (Grievance Redressal and Compensation Powers).</p>
                <p>• <strong>Consumer Protection Act, 2019 (Act No. 35 of 2019):</strong> Section 39 (Relief and Compensation for Deficiency in Banking Services).</p>
                <p>• <strong>Bharatiya Nyaya Sanhita (BNS), 2023:</strong> Section 308 (Extortion), Section 351 (Criminal Intimidation), Section 356 (Defamation).</p>
                <p>• <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21 (Dispute Resolution and Data Accuracy Mandates).</p>
                <p>• <strong>Supreme Court Precedents:</strong> ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711; ICICI Bank v. Shanti Devi Sharma (2008) 7 SCC 532.</p>
              </div>

              {/* 6 Outbound Authority Badges */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Official Regulatory &amp; Judicial Portals
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-bold text-slate-800 group"
                  >
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>

                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-bold text-slate-800 group"
                  >
                    <span>RBI CMS Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>

                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-bold text-slate-800 group"
                  >
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>

                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-bold text-slate-800 group"
                  >
                    <span>India Code Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>

                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-bold text-slate-800 group"
                  >
                    <span>NALSA Legal Services</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>

                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-bold text-slate-800 group"
                  >
                    <span>National Cyber Crime</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                  </a>
                </div>
              </div>

              {/* 10 Internal CredSettle Topic Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Related Debt Resolution Topics
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-recovery-harassment-complaint" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Recovery Harassment Complaint
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice for Loan
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Recovery Court Case
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
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
                Specialized in banking compliance, borrower harassment defense, NPA dispute negotiations, and consumer forum litigations with deep experience defending borrowers across Indian financial forums.
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
                  Facing Bank Harassment?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution advocates serve statutory legal notices, hold banks vicariously liable, halt recovery abuse, and negotiate 40% to 55% debt settlements.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Send a Legal Notice to the Bank
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
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman escrow holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; BNS Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Legal Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Recovery Agent Harassment Complaint
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">How to file &amp; win RBI complaint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral arbitrator &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
