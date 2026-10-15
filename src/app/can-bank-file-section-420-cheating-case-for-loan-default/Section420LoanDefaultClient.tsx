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

export default function Section420LoanDefaultClient() {
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
    { id: 'civil-vs-criminal', label: '1. Civil Dispute vs Criminal Cheating' },
    { id: 'supreme-court-precedents', label: '2. Supreme Court Landmark Precedents' },
    { id: 'mens-rea-inception', label: '3. Fraudulent Mens Rea Inception Test' },
    { id: 'when-can-bank-file-420', label: '4. When Can a Bank Legally File Section 420' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-defense-sop', label: '6. 6-Stage False FIR Defense Protocol' },
    { id: 'quashing-fir-remedies', label: '7. Quashing False 420 FIR in High Court' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '10. Complex Scenarios: OTS & Guarantees' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank legally file a Section 420 IPC cheating case for loan default?',
      a: 'No. Under Indian law, mere non-payment or default on a bank loan is strictly a civil dispute (breach of contract). The Supreme Court has repeatedly ruled that a civil debt cannot be given a criminal cloak under Section 420 IPC or Section 318 BNS unless fraudulent intent existed right at the inception of the loan.'
    },
    {
      q: 'Under what circumstances can a bank file a criminal cheating FIR against a borrower?',
      a: 'A bank can only file a criminal cheating case under Section 420 IPC (or Section 318 BNS) if there is concrete proof of fraud at the inception, such as forged salary slips, fake identity documents, multiple mortgages on the same asset, ghost entities, or immediate diversion of borrowed funds without paying a single EMI.'
    },
    {
      q: 'What did the Supreme Court rule in Hriday Ranjan Prasad Verma regarding loan default and cheating?',
      a: 'In Hriday Ranjan Prasad Verma v. State of Bihar (2000), the Supreme Court established that for cheating under Section 420, dishonest intention must exist right at the inception of the transaction. A mere failure to fulfill a subsequent contractual promise due to financial distress does not constitute criminal cheating.'
    },
    {
      q: 'Can police arrest me immediately if a bank or collection agency files a Section 420 complaint?',
      a: 'No. Under the Supreme Court landmark judgment in Arnesh Kumar v. State of Bihar and Section 35(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS), police cannot mechanically arrest for offences carrying punishment up to 7 years. Police must first issue a formal notice of appearance and conduct a preliminary inquiry.'
    },
    {
      q: 'What should I do if a recovery agent sends a fake Section 420 arrest warrant on WhatsApp?',
      a: 'Do not panic. Warrants can only be issued by judicial magistrates, never by recovery agencies or advocates on WhatsApp. Threatening borrowers with fake arrest notices constitutes criminal intimidation under Section 351 BNS and extortion under Section 308 BNS. Preserve the screenshots and file an immediate police complaint.'
    },
    {
      q: 'How does Bharatiya Nyaya Sanhita (BNS) treat loan default compared to Section 420 IPC?',
      a: 'Under the Bharatiya Nyaya Sanhita, 2023, the provisions of cheating previously under Section 420 IPC are now codified under Section 318(4) BNS. The fundamental jurisprudence remains identical: dishonest inducement at inception is a mandatory prerequisite, and ordinary civil loan defaults do not constitute an offence.'
    },
    {
      q: 'Can a bank file both a Section 138 cheque bounce case and a Section 420 cheating case?',
      a: 'Banks often attempt to file both, but courts discourage parallel criminal proceedings for the same debt. While Section 138 of the Negotiable Instruments Act deals with cheque dishonour, a Section 420 case requires proof of fraudulent intent from day one. If no fraud is established, High Courts quash the Section 420 component.'
    },
    {
      q: 'How can I quash a false Section 420 FIR filed by a bank in the High Court?',
      a: 'You can file a petition under Section 482 of the Code of Criminal Procedure (or Section 528 BNSS) before the High Court. High Courts routinely quash criminal complaints where the dispute is civil in nature, no fraudulent inducement is shown at inception, and past EMI payments demonstrate bona fide repayment intent.'
    },
    {
      q: 'Can a loan guarantor or co-borrower be charged under Section 420 if the primary borrower defaults?',
      a: 'No. Criminal liability is strictly personal and cannot be vicariously imputed to a guarantor or family member. Unless the guarantor actively forged documents or participated in a fraudulent conspiracy, their liability remains strictly civil under Section 128 of the Indian Contract Act.'
    },
    {
      q: 'Can I settle a defaulted loan through OTS if the bank has threatened criminal legal action?',
      a: 'Yes. In fact, banks often issue aggressive legal notices precisely to compel settlement negotiations. Borrowers can engage CredSettle to de-escalate criminal threats, establish the civil nature of the debt, and negotiate a formal One-Time Settlement (OTS) with 50% to 75% waivers and clean No Dues Certificates.'
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
            <span>Criminal Law &amp; Banking Debt Defense Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank File Section 420 Cheating Case for Loan Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            An authoritative legal breakdown of Section 420 IPC and Section 318 BNS. Understand why simple loan default is strictly a civil dispute, how Supreme Court rulings shield borrowers, and how to stop illegal criminal threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Defend Against False FIR Threats</span>
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
                  <span>Civil Dispute Statutory Immunity</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Supreme Court rulings: Loan default is not a crime without proof of fraud at inception.
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
                <span>EXECUTIVE BRIEF: SECTION 420 CHEATING CASE ON LOAN DEFAULT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Pure Civil Dispute:</strong> Defaulting on an unsecured personal loan, credit card, or business EMI is a breach of contract under civil law, not a criminal offence under Section 420 IPC or Section 318 BNS.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Inception Test:</strong> The Supreme Court has conclusively held that for cheating to apply, dishonest intention (mens rea) must exist at the exact moment of loan sanction. Subsequent financial distress does not constitute cheating.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Past EMI Payments Proof:</strong> If you paid even a few initial EMIs, Indian courts treat this as decisive proof of honest intent, eliminating the possibility of Section 420 criminal charges.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Arnesh Kumar Protection:</strong> Police cannot mechanically register an FIR or make an arrest. Section 35(3) BNSS and Section 41A CrPC mandate a preliminary inquiry and formal notice of appearance.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">High Court Quashing Remedy:</strong> If a bank maliciously lodges a Section 420 FIR for debt recovery, the High Court will quash it under Section 482 CrPC (Section 528 BNSS) with costs on the lender.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Civil Dispute vs Criminal Cheating */}
            <section id="civil-vs-criminal" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Civil Dispute vs Criminal Cheating: Core Legal Distinction
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a bank loan in India, the collection machinery frequently threatens criminal prosecution. Borrowers receive intimidating phone calls and fake WhatsApp notices alleging that an FIR has been registered under Section 420 of the Indian Penal Code (IPC), or under its new avatar, Section 318 of the Bharatiya Nyaya Sanhita (BNS), 2023. These threats are designed to exploit fear of imprisonment to bypass standard civil recovery mechanisms.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Indian legal system, the boundary between a civil wrong and a criminal offence is bright and immutable. A bank loan is a contractual relationship governed by the Indian Contract Act, 1872. When a borrower fails to pay monthly installments due to unforeseen insolvency, business failure, job termination, or medical crises, the failure constitutes a simple breach of contract under Section 73 of the Contract Act. The statutory remedy for the creditor bank is strictly civil: filing a summary recovery suit under Order 37 of the Code of Civil Procedure (CPC), approaching the Debt Recovery Tribunal (DRT) under the RDB Act, or initiating arbitration under the Arbitration and Conciliation Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Conversely, Section 420 of the IPC (now Section 318(4) of the BNS) penalizes cheating and dishonestly inducing delivery of property. To satisfy the statutory ingredients of cheating, the complainant bank must prove beyond reasonable doubt that the borrower made false representations right at the inception of the contract, induced the bank to disburse the funds, and harbored a fraudulent design to never repay. Where the borrower provided genuine identity documents, submitted verifiable income proofs, and intended to repay when availing the credit facility, the essential element of cheating is entirely absent.
              </p>
            </section>

            {/* SECTION 2: Supreme Court Precedents */}
            <section id="supreme-court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Apex Rulings</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Supreme Court Precedents on Loan Default Cheating Cases
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has consistently condemned the growing practice among financial institutions and private lenders of dressing up purely commercial debt disputes in the garb of criminal offences. Multiple constitutional bench and division bench decisions have firmly established the legal immunity of honest defaulters from criminal prosecution.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the landmark ruling of <strong>Hriday Ranjan Prasad Verma v. State of Bihar (2000) 4 SCC 168</strong>, the Supreme Court articulated the decisive legal test distinguishing civil breach from cheating. The Court held that in a breach of contract, the failure to keep a promise happens at a later stage, whereas in cheating, dishonest intention must exist at the very inception of the transaction. If there is no proof of deceptive intent at the time of agreement, no criminal case under Section 420 can be sustained.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This doctrine was strongly reaffirmed in <strong>Vesa Holdings P. Ltd. v. State of Kerala (2015) 8 SCC 293</strong>, where the Supreme Court observed that every breach of contract cannot give rise to an offence of cheating. It held that criminal law cannot be used as an engine of oppression to force a debtor to pay up. Similarly, in <strong>Satishchandra Ratanlal Shah v. State of Gujarat (2019) 9 SCC 148</strong>, the Apex Court quashed criminal proceedings against a borrower, ruling that mere failure to pay back borrowed money does not constitute the offence of cheating unless dishonest inducement at inception is explicitly established.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, in <strong>Indian Oil Corporation v. NEPC India Ltd. (2006) 6 SCC 736</strong>, the Court issued a stern warning against the tendency to invoke the criminal justice system to settle civil accounts, noting that criminal courts must not become debt recovery collection agencies for aggressive creditors.
              </p>
            </section>

            {/* SECTION 3: Legal Test: Mens Rea at Inception */}
            <section id="mens-rea-inception" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Legal Tests</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Test: Fraudulent Mens Rea at Inception of Loan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In criminal jurisprudence, <em>mens rea</em> (guilty mind) is the indispensable cornerstone of liability. For a magistrate or police investigator to entertain a Section 420 cheating complaint, the bank must provide concrete evidence that the borrower had a criminal intention before the loan funds were disbursed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A critical legal fact overlooked by collection agencies is the evidentiary significance of past EMI repayments. When a borrower receives a ₹15 Lakh unsecured personal loan and pays the first 6, 12, or 24 EMIs without fail, this banking track record conclusively rebuts the allegation of fraudulent intent at inception. The subsequent default, triggered by involuntary distress like unemployment or illness, is a supervening commercial failure, completely devoid of criminal mens rea.
              </p>

              {/* Representative Loan Ledger & Legal Classification Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit &amp; Legal Classification</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹15 Lakh Unsecured Personal Loan</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Borrower Repayment Status</th>
                        <th className="p-3">Financial Fact Pattern</th>
                        <th className="p-3">Section 420 IPC / 318 BNS Applicability</th>
                        <th className="p-3 text-right">Governing Legal Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Regular EMIs Paid (12 Months)</td>
                        <td className="p-3">Disbursed ₹15L; paid ₹4.8L in EMIs; lost job in month 13</td>
                        <td className="p-3 text-emerald-600 font-semibold">0% Criminal Cheating (Civil Breach Only)</td>
                        <td className="p-3 text-right font-bold text-slate-900">Civil Court / OTS Settlement</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Partial Payments Made</td>
                        <td className="p-3">Business turnover dropped; borrower paid ad-hoc sums</td>
                        <td className="p-3 text-emerald-600 font-semibold">Absence of Mens Rea; No Cheating Made Out</td>
                        <td className="p-3 text-right font-bold text-slate-900">DRT / Bank Stressed Asset Desk</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Zero EMIs Paid (Genuine Hardship)</td>
                        <td className="p-3">Disbursed; sudden catastrophic accident before first EMI</td>
                        <td className="p-3 text-amber-600 font-semibold">Civil Default unless Bank Proves Document Forgery</td>
                        <td className="p-3 text-right font-bold text-slate-900">Insurance Claim / Civil Recovery</td>
                      </tr>
                      <tr className="bg-rose-50/70 font-bold text-slate-900">
                        <td className="p-3 text-rose-700">Forged Income &amp; Phantom Entity</td>
                        <td className="p-3 text-rose-800">Fake salary slips, forged Form 16, immediate disappearance</td>
                        <td className="p-3 text-rose-600 font-semibold">Cognizable Cheating &amp; Forgery (Sec 420 &amp; 467)</td>
                        <td className="p-3 text-right text-rose-700 font-mono">Criminal Court / Police FIR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: When Can a Bank Legally File Section 420 */}
            <section id="when-can-bank-file-420" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Exceptions &amp; Criminal Thresholds</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. When Can a Bank Legally File Section 420 Cheating FIR?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While ordinary loan default is never a crime, the law provides full authority to banks to prosecute borrowers who engage in deliberate fraud. A bank can legally lodge an FIR under Section 420 of the IPC (or Section 318 BNS) only under specific, egregious circumstances involving active deception:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Scenario / Conduct</th>
                      <th className="p-3">Specific Criminal Act</th>
                      <th className="p-3">Statutory Provisions Invoked</th>
                      <th className="p-3">Legal Consequences</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Forged Documentation</td>
                      <td className="p-3">Fabricating fake bank statements, counterfeit Form 16, or bogus ITRs.</td>
                      <td className="p-3 text-rose-600 font-semibold">IPC 420, 467, 468, 471 (BNS 318, 336)</td>
                      <td className="p-3">Legitimate criminal FIR; non-bailable forgery charges.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Multiple Collateral Pledging</td>
                      <td className="p-3">Mortgaging the same property or hypothecating vehicle to 2+ banks.</td>
                      <td className="p-3 text-rose-600 font-semibold">IPC 420 &amp; 415 (BNS 318)</td>
                      <td className="p-3">Criminal prosecution for fraudulent inducement and theft.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Identity Impersonation</td>
                      <td className="p-3">Availing loan using someone else’s Aadhaar/PAN without knowledge.</td>
                      <td className="p-3 text-rose-600 font-semibold">IPC 419, 420 (BNS 319, 318)</td>
                      <td className="p-3">Severe criminal offence of cheating by personation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Asset Siphoning Post-Sanction</td>
                      <td className="p-3">Diverting loan funds to shell entities without deploying in business.</td>
                      <td className="p-3 text-rose-600 font-semibold">IPC 406, 420 (BNS 316, 318)</td>
                      <td className="p-3">Wilful default classification; CBI / EOW scrutiny.</td>
                    </tr>
                    <tr className="bg-emerald-50/40">
                      <td className="p-3 font-bold text-slate-900">Genuine EMI Default</td>
                      <td className="p-3">Submitted true papers, paid past EMIs, defaulted due to hardship.</td>
                      <td className="p-3 text-emerald-600 font-semibold">NO Criminal Sections Apply</td>
                      <td className="p-3 font-bold text-emerald-700">100% Protected from Criminal FIR; Civil OTS Only.</td>
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
                5. Visual Blueprint: Civil Default vs Criminal Cheating
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive infographic illustrates the core legal boundary between a genuine civil loan default and criminal cheating under Section 420 IPC / Section 318 BNS, detailing how statutory protections safeguard honest borrowers against false police action.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-file-section-420-cheating-case-for-loan-default.jpg"
                    alt="Section 420 Cheating Case Loan Default Legal Defense Law"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Criminal Defense Framework • Supreme Court Precedent Compliant</span>
                  <a
                    href="/images/infographics/can-bank-file-section-420-cheating-case-for-loan-default.jpg"
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

            {/* SECTION 6: 6-Stage Defense Protocol */}
            <section id="step-by-step-defense-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. 6-Stage Defense Protocol Against False Section 420 FIR
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender, collection agency, or advocate issues notices threatening Section 420 criminal prosecution, executing this systematic six-stage legal protocol guarantees total protection against arrest and prepares the ground for debt resolution.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Verify and Authenticate the Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check whether the communication is an actual police notice issued under Section 35(3) BNSS / Section 41A CrPC or a forged collection agency memo. Authentic police notices bear an official FIR number, police station seal, and officer dispatch details. Over 95% of WhatsApp criminal notices are fake threats sent by rogue recovery agents.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Collate Documentary Proof of Bona Fide Intent
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compile your entire paper trail demonstrating honest intentions: bank statements showing previous EMI debits, salary pay-slips submitted at sanction, medical discharge summaries, termination letters, or audited P&amp;L accounts proving financial distress. This completely destroys any claim of deceptive intent at inception.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Dispatch Formal Advocate Reply to Bank &amp; Police
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Through legal counsel, send a detailed reply to the bank legal department and the concerned Station House Officer (SHO). Cite the Supreme Court rulings in <em>Hriday Ranjan Prasad Verma</em> and <em>Satishchandra Ratanlal Shah</em>, stating clearly that the dispute is civil and warning that malicious prosecution will invite civil damages.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File High Court Quashing Petition under Section 482
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If an overzealous police officer or magistrate entertains a criminal complaint under Section 420 IPC / 318 BNS, approach the High Court immediately under Section 482 of the CrPC (Section 528 BNSS). High Courts routinely stay proceedings and quash FIRs that attempt to convert civil contract disputes into criminal offences.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File Police Counter-Complaint for Criminal Intimidation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When recovery agents threaten you with arrest, fabricate legal summons, or abuse your family members, lodge a formal police complaint under Section 351 BNS (Criminal Intimidation) and Section 308 BNS (Extortion) against the recovery agency and the bank nodal officer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate One-Time Settlement (OTS) for Complete Closure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With criminal threats legally neutralized, initiate structured debt settlement discussions directly with the bank credit committee. CredSettle negotiates a 50% to 75% waiver on interest and penal charges, securing an official bank sanction letter and a formal No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Quashing False 420 FIR in High Court */}
            <section id="quashing-fir-remedies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Judicial Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Quashing False 420 FIR: High Court Section 482 CrPC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Indian Code of Criminal Procedure, 1973 (and its successor, the Bharatiya Nagarik Suraksha Sanhita, 2023) equips borrowers with formidable constitutional and statutory remedies to strike down malicious criminal proceedings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 482 CrPC / Section 528 BNSS</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High Courts possess inherent power to quash an FIR or criminal complaint to prevent abuse of the process of any court and to secure the ends of justice where allegations do not disclose a cognizable criminal offence.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <UserCheck className="w-4 h-4" />
                    <span>Section 438 CrPC / 482 BNSS (Anticipatory Bail)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an FIR is registered, borrowers can obtain anticipatory bail from the Sessions Court or High Court. Courts readily grant pre-arrest protection upon seeing evidence of genuine civil default and past repayments.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Arnesh Kumar Mandatory Guidelines</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court mandate in <em>Arnesh Kumar</em> strictly prohibits automatic arrest for offences carrying sentences up to 7 years. Investigating officers who arrest without recording exceptional necessity face contempt of court.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Lalita Kumari Preliminary Inquiry Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the <em>Lalita Kumari v. Govt of UP</em> ruling, police must conduct a preliminary inquiry before registering an FIR in commercial and financial disputes to ascertain whether the offence is civil or criminal.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Grievance Matrix: Escalating Harassment to RBI
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If branch managers or collection agencies threaten criminal cases under Section 420 or send unlawful recovery agents to your doorstep, utilize the Reserve Bank of India statutory grievance escalation framework.
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
                      <td className="p-3">Stops illegal agent intimidation, withdraws unauthorized police threats, and logs formal hardship petition.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits recovery agency misconduct, halts illegal legal notices, and directs account towards formal OTS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Enforces RBI Master Directions on Recovery Agents via cms.rbi.org.in, penalizes lender, and mandates debt resolution.</td>
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
                9. Procedural Timeline: Default Stages to Account Safety
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the delinquency lifecycle of an unsecured personal loan or credit card empowers you to anticipate collection tactics and prevent unlawful criminal escalation at each stage.
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
                      <td className="p-3">Automated SMS, reminder emails, and soft telephone calls.</td>
                      <td className="p-3">Notify bank in writing regarding involuntary financial hardship.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Persistent calls and formal overdue warning letters.</td>
                      <td className="p-3">Preserve all banking records, salary slips, and loan contracts.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Third-party collection agencies assigned; aggressive intimidation.</td>
                      <td className="p-3">Record harassment calls; warn agents against illegal Section 420 threats.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Loan classified Non-Performing Asset; legal notices dispatched.</td>
                      <td className="p-3">Send advocate reply refuting criminal cheating and establishing civil dispute.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Lender open to compromise; Section 138 or arbitration notices sent.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate 50% to 75% OTS waiver through CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset / ARC</td>
                      <td className="p-3">Debt assigned to Asset Reconstruction Company or written off.</td>
                      <td className="p-3">Finalize one-time settlement payment and obtain official bank NDC.</td>
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
                10. Complex Scenarios: Loan Restructuring, OTS &amp; Bail
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In complex debt defaults, banks often deploy multiple overlapping legal strategies. Here is how criminal cheating allegations intersect with real-world banking disputes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    Section 138 NI Act vs Section 420 IPC Parallel Suits
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often file a Section 138 cheque bounce case alongside an allegation of Section 420 cheating. The Supreme Court has clarified that while Section 138 is a strict statutory offence, Section 420 requires independent proof of fraud at inception. In the absence of fraudulent inducement, the Section 420 charge is struck down.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Guarantors &amp; Co-Borrower Criminal Immunity
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Collection agents routinely threaten guarantors with criminal prosecution under Section 420. Under criminal law, liability cannot be vicariously imputed. A guarantor’s obligation is strictly civil under Section 128 of the Contract Act unless they were personally complicit in forging documents.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-indigo-600" />
                    Credit Card Outstanding &amp; Minimum Due Delinquencies
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Defaulting on credit card debt is 100% civil. Banks cannot file a Section 420 FIR for card defaults unless the cardholder fraudulently maxed out the credit limit immediately before leaving the country or used a card knowing it had already been cancelled.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Vehicle Hypothecation &amp; Section 406 Criminal Breach
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In car or two-wheeler loans, selling the hypothecated vehicle to a third party without bank NOC can attract Section 406 (Criminal Breach of Trust) alongside Section 420. Borrowers must never transfer hypothecated assets before securing a formal settlement and NOC.
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
                Frequently Asked Questions: Section 420 Loan Cases
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding bank criminal complaints, Section 420 cheating allegations, police powers, and borrower protection under Indian law.
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
                Statutory Citations: Criminal Law &amp; Banking Regulations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Penal Code, 1860:</strong> Section 415 (Definition of Cheating) and Section 420 (Cheating and Dishonestly Inducing Delivery of Property).
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita, 2023:</strong> Section 318(1) (Definition of Cheating) and Section 318(4) (Punishment for Cheating).
                </li>
                <li>
                  <strong>Code of Criminal Procedure, 1973:</strong> Section 482 (Inherent Powers of High Court to Quash FIR) and Section 41A (Notice of Appearance).
                </li>
                <li>
                  <strong>Bharatiya Nagarik Suraksha Sanhita, 2023:</strong> Section 528 (High Court Inherent Powers) and Section 35(3) (Mandatory Notice Before Arrest).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 73 (Breach of Contract and Compensation for Loss).
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Hriday Ranjan Prasad Verma v. State of Bihar (2000), Vesa Holdings v. State of Kerala (2015), and Satishchandra Ratanlal Shah v. State of Gujarat (2019).
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
                  <Link href="/bank-filed-fir-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Filed FIR for Loan Default
                  </Link>
                  <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Jail for Loan Default in India
                  </Link>
                  <Link href="/cheque-bounce-case-defense-section-138" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Cheque Bounce Defense
                  </Link>
                  <Link href="/police-complaint-against-bank-recovery-agent" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Complaint Against Agent
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Protection
                  </Link>
                  <Link href="/can-bank-file-case-for-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Bank File Case for Loan
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
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
                Expert in criminal debt defense, Section 420 jurisprudence, banking compliance, and NPA compromise settlements with extensive experience defending borrowers against unlawful police complaints and recovery harassment.
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
                  Bank Threatening Police or 420 FIR?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists stop unlawful recovery intimidation, assert civil dispute immunity under Supreme Court law, and negotiate up to 75% loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Defend Your Rights Now
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
                  <span>Statutory Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminal Liability:</strong> 100% civil dispute immunity defense.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Police Harassment Block:</strong> Legal replies to halt rogue FIR threats.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Direct escalation against unlawful lenders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bank-filed-fir-for-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Filed FIR for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">FIR defense &amp; legal rights &rarr;</span>
                </Link>

                <Link
                  href="/can-i-go-to-jail-for-loan-default-in-india"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can I Go to Jail for Loan Default?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Arrest immunity guidelines &rarr;</span>
                </Link>

                <Link
                  href="/cheque-bounce-case-defense-section-138"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 138 Cheque Bounce Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Defend cheque bounce summons &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
