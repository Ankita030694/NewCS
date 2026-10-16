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

export default function FakeArbitrationChallengeClient() {
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
    { id: 'fake-orders-anatomy', label: '1. Fake Orders: Recovery Rackets' },
    { id: 'unilateral-appointments', label: '2. Unilateral Arbitrator Appointments' },
    { id: 'genuine-vs-fake-matrix', label: '3. Genuine vs Fake Arbitration Matrix' },
    { id: 'grounds-section-34', label: '4. Grounds to Challenge Under Section 34' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Quashing Protocol' },
    { id: 'stay-of-execution', label: '7. Stay of Execution & Fraud Exceptions' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Legal Matrix' },
    { id: 'procedural-timeline', label: '9. Strict Limitation Milestones' },
    { id: 'specialized-scenarios', label: '10. Specialized Digital Loan Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'How do I know if an arbitration order or notice is fake?',
      a: 'Fake arbitration notices usually arrive on WhatsApp or unverified emails. They threaten immediate police arrest, home raids, or property seizure within 24 hours. Genuine arbitral tribunals never issue arrest warrants or police orders. A genuine notice arrives by registered post with clear details of the arbitrator, arbitration agreement, and claims.'
    },
    {
      q: 'Can an arbitrator issue an arrest warrant or send police to my house?',
      a: 'No. An arbitrator is a private dispute resolver appointed under civil law. Arbitrators have zero criminal jurisdiction. They cannot issue warrants, summon police, or order arrests. Any message threatening arrest under arbitration is a criminal offense of extortion and intimidation under Bharatiya Nyaya Sanhita.'
    },
    {
      q: 'Can a bank appoint an arbitrator unilaterally without my consent?',
      a: 'No. In Perkins Eastman Architects DPC v. HSCC (India) Ltd., the Supreme Court held that a party interested in the dispute cannot appoint a sole arbitrator unilaterally. Unless you give express written consent after the dispute arises, a unilateral appointment is void from the beginning.'
    },
    {
      q: 'What is an ex-parte arbitral award?',
      a: 'An ex-parte arbitral award is a decision passed by an arbitrator when the borrower does not participate in the proceedings. In many loan default cases, lenders intentionally send notices to outdated addresses or fail to serve statutory notice, leading to an unfair ex-parte award.'
    },
    {
      q: 'What are the main grounds to challenge an ex-parte award under Section 34?',
      a: 'Under Section 34(2) of the Arbitration and Conciliation Act, you can challenge an award for lack of proper notice of appointment, denial of opportunity to present your case, unilateral arbitrator appointment violating Section 12(5), patent illegality, and conflict with Indian public policy.'
    },
    {
      q: 'What is the time limit to file a Section 34 petition in court?',
      a: 'Section 34(3) sets a strict limitation period of three months (90 days) from the date you receive the signed arbitral award. The court may condone a delay of up to 30 additional days if sufficient cause is shown. However, if the award was never legally served, the limitation clock has not started.'
    },
    {
      q: 'Does filing Section 34 automatically stay execution of the award?',
      a: 'No. Following the 2015 amendment, filing a Section 34 petition does not grant an automatic stay. You must file a separate application under Section 36(2) seeking a stay of execution. Under Section 36(3), the court can grant an unconditional stay if the award was induced by fraud or corruption.'
    },
    {
      q: 'What should I do if a recovery agent sends a fake Lok Adalat or arbitration notice?',
      a: 'Do not panic or pay under fear. Save screenshots and PDF copies of the notice. Verify whether any case is registered on eCourts. Send a formal legal reply challenging the validity. File a criminal complaint for forgery and extortion under BNS Sections 318 and 351, and report to the RBI Ombudsman.'
    },
    {
      q: 'Can I settle my loan after an ex-parte arbitration award is passed?',
      a: 'Yes. Even after an ex-parte award, banks prefer avoiding long court litigation under Section 34 and Section 36 execution. You can negotiate a One-Time Settlement (OTS) with significant interest waivers. Once settled, the bank issues a No Dues Certificate and withdraws all execution proceedings.'
    },
    {
      q: 'How does CredSettle help borrowers facing fake arbitration orders?',
      a: 'CredSettle verifies the authenticity of notices, drafts legal replies, and files Section 34 petitions with stay applications in competent courts. Our legal team stops recovery harassment and negotiates affordable compromise settlements directly with bank credit committees.'
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
            <span>Arbitration Act 1996 &amp; Borrower Protection Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Fake Arbitration Order &amp; Ex-Parte Award Challenge (Sec 34)
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A complete legal defense guide for personal loan and credit card borrowers. Learn how to spot fake arbitration threats. Challenge unilateral arbitrator appointments under Perkins Eastman. Set aside illegal ex-parte awards under Section 34 with CredSettle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Challenge Your Arbitration Order</span>
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
                  <span>Statutory Legal Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 34 of the Arbitration and Conciliation Act, 1996 and landmark Supreme Court precedents.
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
                <span>EXECUTIVE BRIEF: FAKE ARBITRATION ORDERS &amp; SECTION 34 CHALLENGE</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Arbitrators Cannot Order Arrest:</strong> Arbitrators only resolve civil contract disputes. They have zero criminal powers to issue arrest warrants, summon police, or seize your home.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Unilateral Appointments Are Void:</strong> In Perkins Eastman, the Supreme Court ruled that banks cannot pick their own private judge alone. Such awards are void from day one.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Set Aside Under Section 34:</strong> You can file a court petition to cancel an unfair ex-parte award for lack of notice, denial of natural justice, or legal errors.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Unconditional Stay Under Section 36(3):</strong> Where an award or agreement is tainted by fraud or fake notices, courts must grant an unconditional stay without demanding cash deposits.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Compromise Settlement Option:</strong> An invalid arbitral award can be settled safely. CredSettle helps you negotiate up to 75% interest waivers and secure a formal No Dues Certificate.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Fake Arbitration Orders */}
            <section id="fake-orders-anatomy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Rogue Collection Tactics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Fake Arbitration Orders: How Rogue Recovery Rackets Operate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Rogue recovery agents often send fake arbitration orders on WhatsApp. They do this to scare borrowers into paying immediately. These fake papers use forged court seals and fake case numbers. They threaten police visits, property seizure, or quick arrest. These threats are completely illegal under Indian law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An arbitrator is only a private dispute solver under civil law. Arbitrators have zero criminal powers. They cannot issue arrest warrants. They cannot send police to your home. They cannot freeze your bank account directly. Only a regular civil court judge has the power to enforce an order under Section 36.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sending fake legal papers is a serious crime. The new criminal law penalizes forgery, cheating, and extortion under the Bharatiya Nyaya Sanhita. Never make panic payments before checking if a notice is genuine.
              </p>
            </section>

            {/* SECTION 2: Unilateral Arbitrator Appointments */}
            <section id="unilateral-appointments" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Unilateral Arbitrator Appointments: The Perkins Eastman Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks and NBFCs often make a serious legal mistake. They pick an arbitrator from their private panel without your consent. Under Indian law, this choice is completely invalid.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court decided this in Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020). The court ruled that an interested party cannot appoint a sole arbitrator alone. An earlier ruling in TRF Ltd. v. Energo Engineering also confirmed this rule.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 12(5) of the Act, an arbitrator chosen only by the lender has zero legal authority. This defect cannot be waived unless you sign a written agreement after the dispute starts.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Any arbitral award passed by such an arbitrator is void from day one. You can challenge and quash it before a civil court judge.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit: Inflated Claim vs Settlement Relief</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹8.5 Lakh Disputed Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Claim Component</th>
                        <th className="p-3">Unilateral Arbitral Award</th>
                        <th className="p-3">Section 34 Legal Challenge Status</th>
                        <th className="p-3 text-right">Negotiated OTS Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Principal Loan Balance</td>
                        <td className="p-3">₹4,20,000</td>
                        <td className="p-3 text-slate-700 font-semibold">Admitted base borrowing amount</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹2,50,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Compound &amp; Penal Interest</td>
                        <td className="p-3 text-rose-600">₹3,40,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Challenged: Violates RBI Fair Practice Code</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Waived)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Arbitration Fees &amp; Legal Costs</td>
                        <td className="p-3 text-rose-600">₹90,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Challenged: Unilateral forum expenses void</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Waived)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Financial Liability</td>
                        <td className="p-3 text-rose-700">₹8,50,000 Claimed</td>
                        <td className="p-3 text-blue-700">Section 34 Petition Filed with Stay</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹2,50,000 (70% Net Relief)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Genuine vs Fake Arbitration Orders Matrix */}
            <section id="genuine-vs-fake-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Document Verification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Genuine vs Fake Arbitration Orders: Comparative Legal Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers must know the difference between a real legal case and an extortion attempt. Both can be challenged, but the legal steps are different.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This matrix helps you spot fake papers quickly. It also guides your next legal moves.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Verification Parameter</th>
                      <th className="p-3">Genuine Arbitral Proceeding</th>
                      <th className="p-3">Fabricated Recovery Notice</th>
                      <th className="p-3">Legal Assessment &amp; Defense SOP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Delivery Channel</td>
                      <td className="p-3">Registered Post, Speed Post, or official email.</td>
                      <td className="p-3 text-rose-600 font-semibold">Informal WhatsApp messages or anonymous SMS.</td>
                      <td className="p-3">Real tribunals never rely solely on messaging apps.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Mandatory Prior Notice</td>
                      <td className="p-3">Section 21 invocation notice served in advance.</td>
                      <td className="p-3 text-rose-600 font-semibold">Zero invocation notice; sudden direct order.</td>
                      <td className="p-3">Missing Section 21 notice invalidates arbitration.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Threat of Police Arrest</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly absent; purely civil determination.</td>
                      <td className="p-3 text-rose-600 font-bold">Threatens arrest, police escort, or jail.</td>
                      <td className="p-3">Clear proof of extortion and criminal forgery.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Arbitrator Credentials</td>
                      <td className="p-3">Identifiable advocate or retired judicial officer.</td>
                      <td className="p-3 text-rose-600 font-semibold">Fictitious forum or recovery agency staff.</td>
                      <td className="p-3">Verify advocate enrollment on Bar Council portal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Enforcement Procedure</td>
                      <td className="p-3">Civil execution under Section 36 in District Court.</td>
                      <td className="p-3 text-rose-600 font-semibold">Threats of immediate doorstep property raids.</td>
                      <td className="p-3">Only civil judges possess execution powers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Primary Legal Defense</td>
                      <td className="p-3">Section 34 petition &amp; Section 36 stay application.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Police FIR under BNS 318/351 &amp; RBI complaint.</td>
                      <td className="p-3">CredSettle issues legal reply and quashes claims.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Grounds to Challenge Under Section 34 */}
            <section id="grounds-section-34" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Grounds for Quashing</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Grounds to Challenge Ex-Parte Awards Under Section 34
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 34 gives you the legal right to cancel an unfair arbitral award in court. If a lender got an ex-parte award behind your back, you have strong grounds to overturn it.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Courts strictly protect your right to a fair hearing. A judge will cancel an award if any statutory rule was broken.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#1886ff]" />
                    Lack of Proper Notice: Section 34(2)(a)(iii)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You were not given proper notice of the arbitrator appointment or hearings. Notices sent to old addresses do not count as valid service.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Invalid Arbitrator Choice: Section 34(2)(a)(v)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank appointed the arbitrator without your written consent. This breaks Section 12(5) and the Perkins Eastman ruling.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    Against Public Policy: Section 34(2)(b)(ii)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The award breaks basic notions of justice. In Associate Builders v. DDA, the Supreme Court confirmed that unfair awards must be set aside.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-rose-600" />
                    Clear Legal Errors: Section 34(2A)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The order shows patent illegality on its face. For example, adding unfair penalties that violate Reserve Bank of India rules makes the award illegal.
                  </p>
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
                5. Visual Blueprint: Section 34 Arbitration Defense Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual roadmap shows how to defend your rights. It guides you from spotting fake notices to winning a court stay and settling your debt.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/fake-arbitration-order-ex-parte-award-challenge-under-section-34.jpg"
                    alt="Fake Arbitration Order &amp; Ex-Parte Award Challenge Under Section 34"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Arbitration Defense Framework • Section 34 Compliant</span>
                  <a
                    href="/images/infographics/fake-arbitration-order-ex-parte-award-challenge-under-section-34.jpg"
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
                6. Step-by-Step SOP: 6-Stage Protocol to Quash Illegal Awards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you receive an arbitration notice, act calmly. Follow this six-stage protocol to protect your assets and resolve your debt.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Verify the Notice and Delivery
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check how the paper was sent. Look up the speed post tracking number. Verify the arbitrator name on the state Bar Council website.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Raise Section 16 Jurisdiction Objections
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If hearings are still active, file an objection under Section 16. State that the arbitrator has no jurisdiction under Perkins Eastman.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Request the Official Signed Award
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If an ex-parte award was already passed, ask for a signed copy under Section 31(5). Your court filing deadline starts only after you receive it.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File Section 34 in Commercial Court
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File your petition in the local District Court or Commercial Court. Highlight the lack of notice and the invalid arbitrator appointment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Secure an Urgent Stay Under Section 36
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File an interim stay request under Section 36. Ask for an unconditional stay because the award was obtained through fake service or fraud.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settle the Loan via Formal OTS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use your court stay as strong leverage. Settle your debt directly with the bank credit team. Secure big waivers and get an official No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Stay of Execution & Fraud Exceptions */}
            <section id="stay-of-execution" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Enforcement Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Stay of Execution: Section 36 Defenses &amp; Fraud Exceptions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers think filing Section 34 stops bank action automatically. That is no longer true under the 2015 amendment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop bank freezes or salary attachments, you must file a separate stay request under Section 36(2). Usually, courts may ask for a cash deposit before granting a stay.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, a major legal exception protects victims of fake orders. Under the 2021 amendment to Section 36(3), courts must grant an unconditional stay if the award was obtained by fraud.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a recovery agency used fake seals, bogus summons, or sham service, you do not have to deposit money. The court must pause the entire execution process immediately.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 36(2) Interim Stay Application</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must be filed alongside the Section 34 petition. It requests the court to halt all recovery and attachment proceedings while the main challenge is heard.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 36(3) Mandatory Unconditional Stay</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where fraud, forgery, or sham service is proven, the court is legally required to grant an unconditional stay without cash deposit conditions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>BNS Section 318 &amp; 351 Criminal Sanctions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rogue recovery agents creating fake court decrees face prosecution for cheating, document forgery, and criminal intimidation under new criminal laws.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Order XXI Civil Procedure Code Execution Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Only an executing court can order asset attachments. You have the right to file objections under Section 47 of CPC against an invalid arbitral decree.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance & Legal Counter-Action Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Grievance &amp; Legal Counter-Action Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You can fight back against illegal threats across three institutional levels. Taking formal action stops recovery agent calls quickly.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Statutory Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Redressal &amp; Enforcement Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Law Enforcement</td>
                      <td className="p-3">Police Station / Cyber Crime Cell</td>
                      <td className="p-3 font-mono">Immediate / 48 Hours</td>
                      <td className="p-3">Registers FIR for forgery and extortion under BNS Sections 318 and 351, tracking down rogue call centers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Lender Redressal</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Cancels unauthorized agency contracts, recalls rogue legal notices, and initiates formal settlement talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: Regulatory &amp; Court</td>
                      <td className="p-3">RBI Ombudsman &amp; Commercial Court</td>
                      <td className="p-3 font-mono">30 Days / Court Calendar</td>
                      <td className="p-3">Issues binding directions via cms.rbi.org.in, penalizes non-compliant lenders, and stays arbitral execution.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Strict Limitation Milestones */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Limitation Deadlines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Strict Limitation Milestones: Section 34(3) Deadlines &amp; Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Act quickly once you discover an arbitral award. The law sets strict time limits to file your challenge in court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Simplex Infrastructure v. NHAI (2019), the Supreme Court ruled that courts cannot extend deadlines beyond one hundred and twenty days total.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Limitation Stage</th>
                      <th className="p-3">Statutory Time Window</th>
                      <th className="p-3">Legal Status &amp; Court Discretion</th>
                      <th className="p-3">Strategic Action Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Standard Filing Window</td>
                      <td className="p-3 font-mono">Day 1 to Day 90</td>
                      <td className="p-3 text-emerald-600 font-semibold">Absolute statutory right to file petition.</td>
                      <td className="p-3">File Section 34 petition and Section 36 stay without delay.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Condonation Grace Period</td>
                      <td className="p-3 font-mono">Day 91 to Day 120</td>
                      <td className="p-3 text-amber-600 font-semibold">Allowed only upon proving sufficient cause.</td>
                      <td className="p-3">File condonation application explaining medical or delivery hurdles.</td>
                    </tr>
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-bold text-slate-900">Absolute Bar Window</td>
                      <td className="p-3 font-mono text-rose-700 font-bold">Day 121 Onwards</td>
                      <td className="p-3 text-rose-600 font-bold">Total limitation bar; court cannot condone delay.</td>
                      <td className="p-3">Challenge must focus on lack of Section 31(5) signed delivery.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Sham Service Exception</td>
                      <td className="p-3 font-mono text-[#1886ff] font-bold">Clock Not Started</td>
                      <td className="p-3 font-semibold text-slate-800">Dakshin Haryana Bijli ruling applies.</td>
                      <td className="p-3 font-bold text-slate-900">Prove award was never delivered; limitation starts on actual receipt.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Digital Loan Apps &amp; Lok Adalat Traps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Arbitration misuse occurs across various loan formats. Here is how borrowers can navigate specific challenging scenarios with legal clarity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Instant Digital Loan App Scams
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Illegal loan apps often send fake arbitration orders on WhatsApp. These documents are completely fake. Report them on the National Cyber Crime portal right away.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Fake Lok Adalat Summons Threats
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents send papers titled Lok Adalat Summons. Lok Adalat is purely voluntary. It cannot pass any order unless both sides agree willingly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Asset Reconstruction Company (ARC) Claims
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When banks sell debt to ARCs, the ARC often starts arbitration without proper notice. CredSettle challenges these defects and negotiates deep settlements.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Vehicle Repossession via Sham Orders
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders cannot use fake arbitration papers to seize your car or bike with bouncers. The Supreme Court has ruled that violent repossession is a crime.
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
                Frequently Asked Questions: Fake Arbitration &amp; Section 34
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding fake arbitration orders, unilateral arbitrator appointments, Section 34 petitions, and borrower rights in India.
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
                  <strong>Arbitration and Conciliation Act, 1996:</strong> Section 34, Application for Setting Aside Arbitral Award; Section 36, Enforcement and Mandatory Stay Provisions; Section 12(5), Ineligibility of Unilaterally Appointed Arbitrators.
                </li>
                <li>
                  <strong>Supreme Court Landmark Rulings:</strong> Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020), TRF Ltd. v. Energo Engineering Projects Ltd. (2017), and Bharat Broadband Network Ltd. v. United Telecoms Ltd. (2019).
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita, 2023 (BNS):</strong> Section 318(4), Cheating and Dishonestly Inducing Delivery of Property; Section 336, Forgery; Section 351, Criminal Intimidation by Recovery Agents.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 47 and Order XXI, Executing Court Powers; Section 60, Properties Exempt from Attachment.
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Fair Practices Code for Lenders and Regulatory Directives on Third-Party Recovery Agency Conduct.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Legal Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
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
                  <a href="https://services.ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>eCourts Services India</span>
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
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice for Loan Default
                  </Link>
                  <Link href="/bank-arbitration-notice-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Arbitration Notice Defense
                  </Link>
                  <Link href="/fake-legal-notice-from-advocate-whatsapp" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Fake WhatsApp Legal Notices
                  </Link>
                  <Link href="/fake-loan-app-harassment-cyber-crime" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Fake Loan App Harassment
                  </Link>
                  <Link href="/lok-adalat-notice-kya-hota-hai" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Notice Guide
                  </Link>
                  <Link href="/summons-from-court-for-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Court Summons for Loan Default
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply SOP
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Guidelines
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Cheating Case Rules
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate (NOC)
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
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
                Specialist in civil arbitration defense, quashing illegal ex-parte awards under Section 34, stopping recovery harassment, and negotiating structured compromise settlements for distressed borrowers.
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
                  Received a Fake Arbitration Notice?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists challenge unilateral arbitrator appointments, file urgent stay applications under Section 36(3), and negotiate up to 75% loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Legal Rights Now
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
                  <span>Section 34 Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Extortion Policy:</strong> Immediate legal counter-action on fake notices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Court Stay Advocacy:</strong> Urgent Section 36 stay applications in court.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Perkins Eastman Defense:</strong> Voiding unilateral appointments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed bank No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal rights &amp; reply strategy &rarr;</span>
                </Link>

                <Link
                  href="/fake-legal-notice-from-advocate-whatsapp"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Fake Legal Notice from Advocate on WhatsApp
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">How to verify advocate notices &rarr;</span>
                </Link>

                <Link
                  href="/lok-adalat-notice-kya-hota-hai"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Lok Adalat Notice Kya Hota Hai
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Voluntary settlement rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
