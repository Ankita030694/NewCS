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
  Landmark,
  Car,
  ShieldAlert
} from 'lucide-react';

export default function VehicleRepossessionClient() {
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
    { id: 'supreme-court-rulings', label: '1. Supreme Court Rulings & Ban on Bouncers' },
    { id: 'rbi-repossession-guidelines', label: '2. RBI Repossession Guidelines & Fair Practices' },
    { id: 'repossession-vs-robbery', label: '3. Repossession vs Robbery: Legal Line' },
    { id: 'fir-filing-protocol', label: '4. Step-by-Step SOP: File Police FIR on Bouncers' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'judicial-remedies', label: '6. Judicial Remedies: Section 156(3) & Superdari' },
    { id: 'lender-liability-matrix', label: '7. Lender Liability Matrix & Penalties' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Highway & Night Seizure' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank or NBFC hire bouncers or musclemen to seize my vehicle?',
      a: 'No. The Supreme Court of India in ICICI Bank v. Prakash Kaur strictly prohibited the deployment of musclemen or bouncers for vehicle recovery. The court affirmed that banks must follow due process of law and cannot resort to physical force or intimidation.'
    },
    {
      q: 'Can recovery agents stop my car on the road and snatch the keys forcibly?',
      a: 'No. Stopping a vehicle in transit and forcibly seizing keys constitutes criminal offences under the Bharatiya Nyaya Sanhita (BNS), including wrongful restraint, criminal force, extortion, and robbery. Such acts are strictly unlawful regardless of loan default.'
    },
    {
      q: 'What did the Supreme Court rule in Citicorp Maruti Finance v. S. Vijayalaxmi?',
      a: 'The Supreme Court ruled that hire-purchase or hypothecation agreements do not give financiers the right to use physical force to take back vehicles. Repossession must be conducted through legal procedures with proper advance written notice.'
    },
    {
      q: 'What mandatory notice must a lender give before repossessing a vehicle?',
      a: 'Under RBI guidelines, lenders must issue a formal written default notice giving the borrower a reasonable cure period of 7 to 15 days. Post-repossession, a pre-sale notice must also be given before the vehicle can be auctioned.'
    },
    {
      q: 'Under which sections of BNS or IPC can I file an FIR against bouncers?',
      a: 'You can file an FIR under Section 126 (wrongful restraint), Section 131 (assault or criminal force), Section 308 (extortion), Section 309 (robbery), and Section 351 (criminal intimidation) of the Bharatiya Nyaya Sanhita, 2023.'
    },
    {
      q: 'What should I do if the local police station refuses to register my FIR?',
      a: 'Submit a written complaint to the Superintendent of Police or Deputy Commissioner of Police under Section 173(4) BNSS. If inaction persists, file an application before the Judicial Magistrate under Section 175(3) BNSS for a court directive.'
    },
    {
      q: 'Can I get my unlawfully seized vehicle back through court custody?',
      a: 'Yes. You can file an application for Superdari under Section 451 or 457 of CrPC (Section 497 or 503 BNSS) before the local criminal court to seek interim custody and release of your vehicle from the police or recovery yard.'
    },
    {
      q: 'Is the bank liable for illegal actions committed by its recovery agency?',
      a: 'Yes. Under RBI Master Directions and the doctrine of vicarious liability, banks and NBFCs are held directly responsible for unlawful acts, physical intimidation, and regulatory violations committed by their appointed recovery agents.'
    },
    {
      q: 'Can I settle my defaulted car loan via One-Time Settlement (OTS)?',
      a: 'Yes. Borrowers facing severe financial hardship can negotiate an OTS with the lender. This allows you to settle the debt with substantial waivers on overdue interest and penal charges, and obtain an official No Objection Certificate.'
    },
    {
      q: 'How does CredSettle assist borrowers facing illegal vehicle repossession?',
      a: 'CredSettle issues urgent legal notices to stop bouncer intimidation, assists in filing police complaints and RBI Ombudsman escalations, petitions courts for vehicle release, and negotiates favorable loan settlements directly with bank credit committees.'
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
            <Car className="w-3.5 h-3.5" />
            <span>Borrower Rights &amp; Vehicle Repossession Legal Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Vehicle Repossession by Bouncers: Legal Rulings and FIR
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide on Supreme Court rulings against musclemen, RBI recovery circulars, and police FIR procedures for unlawful car and bike repossession.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Illegal Vehicle Repossession</span>
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
                  <span>Supreme Court Precedent Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under ICICI Bank v. Prakash Kaur (2007) and Citicorp v. S. Vijayalaxmi (2012).
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
                <span>EXECUTIVE BRIEF: VEHICLE REPOSSESSION &amp; SUPREME COURT MANDATES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Ban on Bouncers:</strong> The Supreme Court has ruled that banks cannot deploy musclemen or recovery bouncers to seize vehicles.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Advance Written Notice:</strong> Financiers must issue a written default notice giving a 7 to 15 day cure period before repossession.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Highway Snatching is Robbery:</strong> Intercepting vehicles on public roads and grabbing keys forcibly constitutes robbery and extortion under BNS.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Criminal FIR Rights:</strong> Borrowers can file an immediate police FIR under Bharatiya Nyaya Sanhita Sections 126, 308, and 309.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Interim Custody via Superdari:</strong> Courts can order the release of seized vehicles back to borrowers under Section 451/457 CrPC.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Supreme Court Rulings & Ban on Bouncers */}
            <section id="supreme-court-rulings" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Constitutional &amp; Apex Court Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Supreme Court Rulings: Ban on Repossession Bouncers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on car loan EMIs, financial institutions often hire external collection agencies. These agencies frequently send private musclemen or bouncers to intercept cars on public roads and seize keys by force. The Supreme Court of India has unequivocally condemned and banned this practice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the landmark judgment of <em>Manager, ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711</em>, the Supreme Court held that India is governed by the rule of law. The court ruled that banks cannot employ goondas, bouncers, or physical musclemen to forcibly repossess hypothecated vehicles. Banks must follow legal recovery procedures rather than taking the law into their own hands.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This legal principle was reinforced in <em>Citicorp Maruti Finance Ltd. v. S. Vijayalaxmi (2012) 1 SCC 1</em>. A three-judge bench of the Supreme Court held that a hire-purchase or hypothecation agreement does not permit lenders to use physical force. Even when a contract permits repossession upon loan default, the lender must follow due process of law. Seizing a vehicle through extra-judicial muscle power is illegal and unconstitutional.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Similarly, in <em>Magma Fincorp Ltd. v. Rajesh Kumar Tiwari (2020) 10 SCC 399</em>, the Supreme Court held that advance written notice is an indispensable condition precedent before repossession. In 2023, the Patna High Court in <em>Dhananjay Kumar v. State of Bihar</em> imposed heavy penalties on finance companies for seizing commercial vehicles with musclemen, observing that forcible vehicle interception on highways amounts to dacoity and extortion.
              </p>
            </section>

            {/* SECTION 2: RBI Repossession Guidelines & Fair Practices Protocol */}
            <section id="rbi-repossession-guidelines" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Architecture &amp; Fair Practices</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Repossession Guidelines &amp; Fair Practices Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India has issued comprehensive guidelines governing vehicle repossession under the Fair Practices Code for banks and Non-Banking Financial Companies (NBFCs). These guidelines establish strict procedural guardrails that lenders must satisfy before touching any hypothecated asset.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every bank and NBFC must maintain a Board-approved vehicle repossession policy. The terms of repossession, including notice periods, valuation procedures, and sale protocols, must be clearly communicated to the borrower in the loan agreement. Unannounced or stealth seizures are strict regulatory violations.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Regulatory Audit: Lawful vs Illegal Repossession Protocol</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI Master Direction Mandates</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Procedural Stage</th>
                        <th className="p-3">Mandatory Lawful Process</th>
                        <th className="p-3">Illegal Practice by Bouncers</th>
                        <th className="p-3 text-right">Legal Protection Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Pre-Repossession Notice</td>
                        <td className="p-3">Written notice with 7 to 15 days cure window.</td>
                        <td className="p-3 text-rose-600">Zero notice; sudden road interception.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Violation of Due Process</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Agent Credentials</td>
                        <td className="p-3">Certified DRA agents with ID and bank letter.</td>
                        <td className="p-3 text-rose-600">Unidentified bouncers in private clothes.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Breach of RBI DRA Rules</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Time &amp; Location of Seizure</td>
                        <td className="p-3">08:00 AM to 07:00 PM at registered address.</td>
                        <td className="p-3 text-rose-600">Night raids, highway ambush, office parking.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Illegal Harassment Bar</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Inventory &amp; Handover</td>
                        <td className="p-3">Formal surrender sheet and inventory of goods.</td>
                        <td className="p-3 text-rose-600">Keys snatched; vehicle towed with valuables.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Theft &amp; Criminal Misappropriation</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Pre-Sale Redemption</td>
                        <td className="p-3">Pre-sale notice allowing vehicle redemption.</td>
                        <td className="p-3 text-rose-600">Distress yard auction without intimation.</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Right to Settle / Redeem</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Repossession vs Robbery: Legal Line Under Penal Law */}
            <section id="repossession-vs-robbery" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Penal Law Distinctions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Repossession vs Robbery: Legal Line Under Penal Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often ask whether a financier has the right to repossess a vehicle because the registration certificate (RC) contains a hypothecation endorsement. It is vital to understand the boundary between civil repossession rights and criminal offences under Indian law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A hypothecation agreement creates a charge over the vehicle in favor of the lender. However, it does not transfer ownership or physical possession to the bank. Until a court or an authorized legal forum passes an order, lawful physical possession remains with the registered owner.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When recovery agents stop a driver on the road, block the car, threaten bodily injury, and snatch the keys, their actions cross from civil debt collection into serious criminal conduct. Under the Bharatiya Nyaya Sanhita, 2023 (and earlier Indian Penal Code), this conduct satisfies the statutory ingredients of multiple cognizable offences.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x border-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Offence Category</th>
                      <th className="p-3">IPC Section</th>
                      <th className="p-3">BNS 2023 Section</th>
                      <th className="p-3">Offence Definition</th>
                      <th className="p-3">Punishment &amp; Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Wrongful Restraint</td>
                      <td className="p-3 font-mono">Sec 339 / 341</td>
                      <td className="p-3 font-mono text-blue-700 font-bold">Sec 126</td>
                      <td className="p-3">Blocking a vehicle or driver on a public road.</td>
                      <td className="p-3">Imprisonment up to 1 month and fine.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Criminal Force &amp; Assault</td>
                      <td className="p-3 font-mono">Sec 350 / 352</td>
                      <td className="p-3 font-mono text-blue-700 font-bold">Sec 130 / 131</td>
                      <td className="p-3">Pushing, grabbing the driver, or pulling them out.</td>
                      <td className="p-3">Imprisonment up to 3 months and fine.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Extortion</td>
                      <td className="p-3 font-mono">Sec 383 / 384</td>
                      <td className="p-3 font-mono text-blue-700 font-bold">Sec 308</td>
                      <td className="p-3">Demanding money or car keys under threat of injury.</td>
                      <td className="p-3">Imprisonment up to 3 years and fine.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Robbery</td>
                      <td className="p-3 font-mono">Sec 390 / 392</td>
                      <td className="p-3 font-mono text-blue-700 font-bold">Sec 309</td>
                      <td className="p-3">Forcibly taking the vehicle causing fear of hurt.</td>
                      <td className="p-3 text-rose-600 font-bold">Rigorous imprisonment up to 10 years.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Theft</td>
                      <td className="p-3 font-mono">Sec 378 / 379</td>
                      <td className="p-3 font-mono text-blue-700 font-bold">Sec 303</td>
                      <td className="p-3">Towing vehicle without consent or signed surrender.</td>
                      <td className="p-3">Imprisonment up to 3 years or fine.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Criminal Intimidation</td>
                      <td className="p-3 font-mono">Sec 503 / 506</td>
                      <td className="p-3 font-mono text-blue-700 font-bold">Sec 351</td>
                      <td className="p-3">Threatening life, limb, or family reputation.</td>
                      <td className="p-3">Imprisonment up to 2 to 7 years.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Step-by-Step SOP: How to File a Police FIR on Bouncers */}
            <section id="fir-filing-protocol" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Step-by-Step SOP: How to File a Police FIR on Bouncers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If recovery bouncers attempt or execute an illegal vehicle repossession, follow this exact standard operating procedure to register a formal police First Information Report (FIR) and hold the offenders accountable.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Dial 112 Immediately from the Spot
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The moment bouncers block your car or demand your keys, dial emergency 112. Inform the police control room that unidentified individuals are attempting to snatch your vehicle on the road. Request immediate dispatch of a PCR van.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Record Video Evidence &amp; Vehicle Numbers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Capture continuous video on your smartphone. Record the faces of the bouncers, their vehicle registration numbers, and any physical threats. Note the exact GPS location, time, and date of the interception.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Refuse to Sign Forced Surrender Sheets
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Recovery agents often carry pre-printed voluntary surrender forms and pressure borrowers to sign. Never sign any document under duress. Signing a voluntary surrender form allows the agency to falsely claim you handed over the car willingly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Submit Written Complaint to the Local SHO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Visit the jurisdiction police station immediately. Submit a detailed written complaint addressed to the Station House Officer (SHO). Specifically invoke Sections 126, 308, 309, and 351 of BNS 2023 along with the Supreme Court Prakash Kaur precedent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to SP or DCP if Police Delay
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the local police station claims it is a civil matter and refuses to register an FIR, dispatch the complaint via registered post with acknowledgment due (RPAD) to the Superintendent of Police (SP) or DCP under Section 173(4) BNSS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Serve Legal Warning Notice to Bank Headquarters
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Have your legal counsel serve an urgent notice to the bank Managing Director and Principal Nodal Officer. Demand immediate preservation of the vehicle, unconditional return, and initiation of internal disciplinary action against the agency.
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
                5. Visual Blueprint: Vehicle Repossession Defense SOP
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual guide illustrates borrower protections against illegal vehicle repossession, highlighting Supreme Court precedents, criminal FIR triggers, and lawful recovery standards.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/vehicle-repossession-by-bouncers-supreme-court-rulings-fir.jpg"
                    alt="Vehicle Repossession by Bouncers Supreme Court Rulings and FIR"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Automobile Defense Framework • Supreme Court Compliant</span>
                  <a
                    href="/images/infographics/vehicle-repossession-by-bouncers-supreme-court-rulings-fir.jpg"
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

            {/* SECTION 6: Judicial Remedies: Section 156(3) & Superdari Custody */}
            <section id="judicial-remedies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Remedies &amp; Court Powers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Judicial Remedies: Section 156(3) &amp; Superdari Custody
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When police officers hesitate to register an FIR due to lender influence, the Indian judicial system provides powerful remedies before the criminal and civil courts to restore your rights.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Application Under Section 175(3) BNSS</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 175(3) of Bharatiya Nagarik Suraksha Sanhita (formerly Section 156(3) CrPC), the Judicial Magistrate can order the police station to register an FIR and submit an investigation report within a fixed timeframe.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Car className="w-4 h-4" />
                    <span>Superdari Application for Vehicle Release</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 503 BNSS (formerly Section 451/457 CrPC), a borrower can apply for interim custody of the vehicle. The court orders the police to seize the vehicle from the recovery yard and return it to the owner on personal bond.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Commission Injunction &amp; Damages</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers can approach the District Consumer Disputes Redressal Commission. Consumer courts regularly award heavy compensation of ₹2 to ₹10 Lakhs against banks for high-handed repossession and mental agony.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>High Court Writ Petition (Article 226)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In cases of commercial vehicle snatching where livelihoods are jeopardized, borrowers can file a writ petition before the High Court seeking vehicle release, quashing of illegal auction, and strict police prosecution.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Lender Liability Matrix & Vicarious Penalty */}
            <section id="lender-liability-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Vicarious Liability &amp; Accountability</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Lender Liability Matrix: Vicarious Liability &amp; Penalties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks and NBFCs frequently claim that bouncers are independent contractors and that the lender carries no responsibility for their criminal acts. The Supreme Court and Reserve Bank of India have firmly rejected this argument.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the legal doctrine of vicarious liability, a principal is strictly liable for wrongful acts committed by its agents during the course of employment. RBI regulations explicitly state that banks are responsible for all collection agency actions.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x border-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Regulatory Violation</th>
                      <th className="p-3">Statutory Framework</th>
                      <th className="p-3">Direct Lender Consequence</th>
                      <th className="p-3">Borrower Relief Available</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Use of Musclemen / Bouncers</td>
                      <td className="p-3">RBI Master Circular on Recovery</td>
                      <td className="p-3 text-rose-600 font-semibold">RBI monetary fines &amp; blacklisting of agency.</td>
                      <td className="p-3">Criminal complaint &amp; immediate vehicle return.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Missing Advance Notice</td>
                      <td className="p-3">SC Citicorp Maruti Ruling</td>
                      <td className="p-3 text-rose-600 font-semibold">Seizure declared void ab initio.</td>
                      <td className="p-3">Waiver of all towing and yard storage fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Physical Intimidation &amp; Threats</td>
                      <td className="p-3">BNS Section 351 / Section 61</td>
                      <td className="p-3 text-rose-600 font-semibold">Senior bank managers named as co-accused.</td>
                      <td className="p-3">Police FIR and criminal trial summons.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Undervalued Vehicle Auction</td>
                      <td className="p-3">Consumer Protection Act 2019</td>
                      <td className="p-3 text-rose-600 font-semibold">Punitive damages up to full vehicle market value.</td>
                      <td className="p-3 text-emerald-700 font-bold">100% debt write-off &amp; surplus refund.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Grievance Redressal Steps */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: PNO to RBI Ombudsman Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When facing vehicle repossession threats or unlawful seizure, follow the Reserve Bank of India statutory grievance escalation framework to secure immediate institutional intervention.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Halts repossession orders, recalls rogue collection bouncers, and verifies ledger accounts.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Investigates regulatory misconduct, cancels wrongful repossession fees, and initiates OTS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding directions via cms.rbi.org.in to return vehicle, impose penalties, and award damages.</td>
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
                9. Procedural Timeline: Default Stages to Vehicle Release
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the delinquency lifecycle of a vehicle loan empowers you to recognize warning signs and protect your automobile before unlawful collection squads are dispatched.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Regulatory Asset Status</th>
                      <th className="p-3">Lender Collection Actions</th>
                      <th className="p-3">Strategic Borrower Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated payment reminder SMS and soft tele-calling.</td>
                      <td className="p-3">Review finances and prepare a formal restructuring request.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Persistent calls and reminder letters via post or email.</td>
                      <td className="p-3">Issue written reply citing temporary financial hardship.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA warnings and deployment of external recovery agencies.</td>
                      <td className="p-3">Issue legal warning regarding Supreme Court bouncer rulings.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Loan tagged Non-Performing Asset; formal recall notice issued.</td>
                      <td className="p-3">Challenge inflated penal charges and demand audit sheet.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Repossession attempts or pre-sale notices sent.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate an OTS settlement with CredSettle for 40% to 65% waiver.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset / Write-off</td>
                      <td className="p-3">Vehicle auction or referral to civil recovery mechanisms.</td>
                      <td className="p-3">Complete settlement payment, obtain NOC and Form 35 for RTO.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Highway Seizure & Night Raids */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Situations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Highway Seizure &amp; Night Raids
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers face diverse challenges when collection squads operate across state lines, late at night, or with family members inside the vehicle. Here is how statutory protections apply across real-world situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Family or Children Present in the Vehicle
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stopping a vehicle with female passengers or children violates basic human rights and RBI codes. In <em>ICICI Bank v. Shanti Devi</em>, courts awarded severe damages for humiliating borrowers before family.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Commercial Vehicles &amp; Highway Interceptions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Commercial trucks and tourist taxis intercepted on national highways can cause severe cargo spoilage and life risks. Patna High Court held that highway seizure without court orders constitutes highway robbery.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Towing Parked Vehicles at Night
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Towing a car from residential premises between 07:00 PM and 08:00 AM constitutes criminal trespass under BNS Section 329. Lenders cannot tow vehicles without serving an advance notice and executing an inventory sheet.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Valuables Inside Seized Automobiles
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Laptops, cash, or business documents inside a seized vehicle must be immediately returned. Seizing a car with valuable cargo without an inventory sheet constitutes criminal misappropriation under BNS Section 316.
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
                Frequently Asked Questions: Vehicle Repossession &amp; FIR
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding vehicle repossession by bouncers, Supreme Court rulings, police complaints, and borrower rights under Indian law.
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
                  <strong>Supreme Court Precedent:</strong> Manager, ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711, Prohibition on Musclemen and Bouncers for Loan Recovery.
                </li>
                <li>
                  <strong>Supreme Court Precedent:</strong> Citicorp Maruti Finance Ltd. v. S. Vijayalaxmi (2012) 1 SCC 1, Due Process Mandate in Vehicle Repossession.
                </li>
                <li>
                  <strong>Supreme Court Precedent:</strong> Magma Fincorp Ltd. v. Rajesh Kumar Tiwari (2020) 10 SCC 399, Advance Notice as Condition Precedent.
                </li>
                <li>
                  <strong>Reserve Bank of India Master Direction:</strong> Fair Practices Code for Applicable NBFCs and Commercial Banks, Guidelines on Recovery Agents.
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita, 2023 (BNS):</strong> Sections 126 (Wrongful Restraint), 308 (Extortion), 309 (Robbery), and 351 (Criminal Intimidation).
                </li>
                <li>
                  <strong>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS):</strong> Sections 173 (Information in Cognizable Cases), 175 (Magistrate Power to Direct FIR), and 503 (Superdari Custody).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
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
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Disputes Redressal Commission</span>
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
                  <Link href="/services/car-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Car Loan Settlement
                  </Link>
                  <Link href="/two-wheeler-bike-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bike Loan Settlement
                  </Link>
                  <Link href="/car-loan-default-vehicle-seizure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Car Loan Vehicle Seizure
                  </Link>
                  <Link href="/voluntary-surrender-vehicle-car-loan-shortfall" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Voluntary Surrender Shortfall
                  </Link>
                  <Link href="/police-complaint-against-bank-recovery-agent" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Complaint Against Agent
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/mental-harassment-by-recovery-agents-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Recovery Agent Harassment Action
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
                  </Link>
                  <Link href="/loan-recall-notice-from-bank-legal-defense-reply-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Recall Notice Defense
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Loan Default Rules
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
                Expert in banking compliance, consumer debt protection, vehicle repossession defense, and NPA compromise settlements with extensive experience defending borrowers against illegal recovery squads.
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
                  Bouncers Threatening to Seize Your Vehicle?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists stop unlawful recovery agent intimidation, enforce Supreme Court mandates, and negotiate up to 65% car loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Vehicle Now
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
                  <span>Supreme Court Shield • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Bouncer Seizure:</strong> Immediate enforcement of Supreme Court bans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Police FIR Assistance:</strong> Drafting complaints under BNS Sections 126 &amp; 309.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Court Superdari Custody:</strong> Applications for interim vehicle release.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Objection Certificate and Form 35.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/services/car-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Car Loan Settlement Services
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Settle auto loans legally &rarr;</span>
                </Link>

                <Link
                  href="/car-loan-default-vehicle-seizure"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Car Loan Default Vehicle Seizure
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Vehicle seizure defense guide &rarr;</span>
                </Link>

                <Link
                  href="/voluntary-surrender-vehicle-car-loan-shortfall"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Voluntary Surrender Shortfall
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Settle post-auction shortfall &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
