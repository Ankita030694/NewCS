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
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  ShieldAlert
} from 'lucide-react';

export default function PoliceSummonsLoanDefaultClient() {
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
    { id: 'civil-dispute-nature', label: '1. Civil Nature of Loan Default' },
    { id: 'fake-summons-tactics', label: '2. Fake Police Summons & Agent Fraud' },
    { id: 'statutory-rights', label: '3. Statutory Rights When Summoned' },
    { id: 'judicial-precedents', label: '4. Supreme Court Rulings & Precedents' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Police Defense Protocol' },
    { id: 'legal-remedies', label: '7. Legal Remedies & High Court Help' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Cyber Cells' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can police summon or arrest me for an unpaid loan or credit card debt?',
      a: 'No. Loan default is strictly a civil dispute under the Indian Contract Act. The Supreme Court has repeatedly held that police officers cannot act as debt collectors or arrest borrowers for failing to pay EMIs.'
    },
    {
      q: 'What should I do if a police officer calls me asking to visit the police station for loan recovery?',
      a: 'Ask for the formal FIR or GD entry number, the caller name, and their rank. Request a formal written notice under Section 35(3) BNSS. Do not visit alone; have your legal counsel submit a formal written response.'
    },
    {
      q: 'How can I identify if a police notice sent on WhatsApp is fake or forged?',
      a: 'Check for an official FIR number, police station seal, and signatures. Real police notices are served in person or via registered post, not informally through WhatsApp. Forging police summons is a serious criminal offence.'
    },
    {
      q: 'Can a bank file an FIR under Section 318(4) BNS or Section 420 IPC for loan default?',
      a: 'Banks often try, but the Supreme Court has ruled that mere inability to repay a loan is not cheating. Cheating requires fraudulent intention at the inception of the loan. Genuine business or personal distress is not a crime.'
    },
    {
      q: 'What are my rights if I am summoned under Section 35(3) of BNSS?',
      a: 'You have the right to legal representation under Article 22(1) of the Constitution. If you comply with the notice and cooperate with the inquiry, police cannot arrest you without special written permission from a magistrate.'
    },
    {
      q: 'Can women, senior citizens, or minors be called to a police station for loan inquiries?',
      a: 'No. Under the proviso to Section 179 of BNSS, women, children under fifteen years, and senior citizens above sixty cannot be called to a police station. Any required inquiry must be conducted at their residence.'
    },
    {
      q: 'What legal steps can I take if police officers harass me on behalf of a bank?',
      a: 'You can submit a written complaint to the Police Commissioner or Superintendent of Police. You can also file a petition before the State Police Complaints Authority or approach the High Court under Section 528 of BNSS.'
    },
    {
      q: 'Can recovery agents face criminal charges for posing as police officers?',
      a: 'Yes. Impersonating a public servant is punishable under Section 204 of BNS. Sending forged legal notices and threatening borrowers constitutes forgery and criminal intimidation under Sections 336 and 351 of BNS.'
    },
    {
      q: 'Can I resolve my loan through a One-Time Settlement if a police complaint is filed?',
      a: 'Yes. CredSettle helps you halt illegal police intimidation, challenge false complaints, and negotiate an official compromise settlement directly with the bank credit committee with up to 50% to 75% waivers.'
    },
    {
      q: 'How does CredSettle protect borrowers against unlawful police interference?',
      a: 'CredSettle issues strong legal replies to police authorities, files complaints against rogue recovery agencies with the RBI Ombudsman, protects your constitutional rights, and secures clean No Dues Certificates.'
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
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Borrower Rights &amp; Legal Protection Under BNSS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Police Summons for Loan Default: Rights Against Interference
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide for borrowers facing police calls, fake summons, or station visits for unpaid bank loans. Learn your statutory rights, Supreme Court precedents, and how to stop unlawful interference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Illegal Police Interference</span>
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
                  <span>Constitutional Immunity Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Article 22(1) Constitution &amp; Section 35(3) BNSS 2023.
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
                <span>EXECUTIVE BRIEF: BORROWER RIGHTS AGAINST POLICE INTERFERENCE</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Pure Civil Dispute:</strong> A loan default is a breach of contract under Section 73 of the Contract Act. Police have no power to collect bank debts.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Supreme Court Rulings:</strong> Top court rulings in Bhajan Lal and Lalita Kumari bar criminal cases for civil debt. Missing EMI payments is never a crime.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fake Notice Racket:</strong> Recovery agents often send fake police notices on WhatsApp. Making fake legal notices is a serious crime under Section 336 BNS.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Section 35(3) BNSS Shield:</strong> Police cannot arrest you without a written notice. If you reply and cooperate, the law bars arrest.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Shield for Women &amp; Seniors:</strong> Under Section 179 BNSS, women, minors under 15, and seniors above 60 cannot be called to a police station.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Civil Nature of Loan Default */}
            <section id="civil-dispute-nature" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Civil Law Framework &amp; Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Civil Nature of Loan Default: Why Police Cannot Intervene
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Missing loan EMIs or credit card dues is stressful. Banks often use pressure tactics to recover money. Collection agents may threaten to send police to your home. Some callers even claim to be police sub-inspectors. You must know that an unpaid loan is a civil matter. It is not a crime.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Indian law, a loan default is a breach of contract under Section 73 of the Contract Act. The tie between a bank and a borrower is purely a business deal. The bank checks credit, sets interest, and issues funds. If you default, the bank has civil legal options. The lender can file a suit in civil court. It can start arbitration. It can also approach a debt tribunal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Police officers exist to maintain public peace. They investigate crimes and protect citizens. Police have no legal role in recovering bank loans. They cannot force you to sign cheques, surrender car keys, or hand over cash. An officer who summons you solely to force loan payments acts outside the law.
              </p>
            </section>

            {/* SECTION 2: Fake Police Summons & Agent Fraud */}
            <section id="fake-summons-tactics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Detection of Deceptive Collection Tactics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Fake Police Summons: Uncovering Recovery Agent Fraud
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In India, over seventy percent of so-called police notices received by borrowers are fake. Unregulated recovery agencies make fake documents to scare people. They hope fear will make you borrow money or sell assets to pay the bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                These fake notices often show fake police logos or stamps. They use scary names like Crime Branch Task Force or Cyber Crime Cell. Agents send them as PDF files or photos on WhatsApp. Often, the agent sends an angry voice note pretending to be a police officer.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Real police notices are never sent informally on WhatsApp. Under the law, real notices are served by an officer in person. They can also arrive by registered post. Real notices cite a genuine FIR number. The table below helps you spot fake notices right away.
              </p>

              {/* Forensic Differentiation Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Notice Check: Real Police Summons vs Fake Agent Notice</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Safety Guide</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Feature</th>
                        <th className="p-3">Real Police Summons (BNSS)</th>
                        <th className="p-3">Fake Agent Notice</th>
                        <th className="p-3 text-right">What You Should Do</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">How It Arrives</td>
                        <td className="p-3 text-slate-800">Delivered in person by police or sent by post.</td>
                        <td className="p-3 text-rose-600 font-semibold">Sent on WhatsApp or via casual email.</td>
                        <td className="p-3 text-right font-bold text-slate-900">Save the message as proof.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">FIR or Case Number</td>
                        <td className="p-3 text-slate-800">Shows a real FIR number and police station name.</td>
                        <td className="p-3 text-rose-600 font-semibold">Shows only a loan number or fake case code.</td>
                        <td className="p-3 text-right font-bold text-slate-900">Check online on the police site.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Legal Section</td>
                        <td className="p-3 text-slate-800">Issued under Section 35(3) or Section 179 BNSS.</td>
                        <td className="p-3 text-rose-600 font-semibold">Uses vague threats of immediate arrest.</td>
                        <td className="p-3 text-right font-bold text-slate-900">Report fake notice under BNS 336.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Official Stamp</td>
                        <td className="p-3 text-slate-800">Signed by hand with an official ink stamp.</td>
                        <td className="p-3 text-rose-600 font-semibold">Uses low-quality copy-pasted logos.</td>
                        <td className="p-3 text-right font-bold text-slate-900">Reject the fake document.</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Demand Made</td>
                        <td className="p-3 text-slate-800">Asks for facts about a crime investigation.</td>
                        <td className="p-3 text-rose-700">Demands immediate cash or bank transfer.</td>
                        <td className="p-3 text-right text-[#1886ff]">Report extortion to police chiefs.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Statutory Rights When Summoned */}
            <section id="statutory-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Constitutional &amp; Procedural Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Statutory Rights When Summoned by a Police Station
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If police contact you about a loan complaint, you have strong rights. The Constitution of India and criminal procedure laws protect you from abuse.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, you have the right to know the reason for any call under Article 22(1) of the Constitution. You can ask if an FIR exists. You can ask for the case number and the officer name. You do not have to visit a police station based on a phone call.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, you have the right to a lawyer under Section 35(2) of BNSS. You can speak to an advocate before you reply. Your lawyer can go with you to the police station. Your lawyer can also send a written reply for you.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, Section 35(3) of BNSS protects you from quick arrest. For cases with jail time under seven years, police cannot arrest you if you reply to the notice. Under Section 179 BNSS, women, children under 15, and seniors above 60 cannot be called to a police station. Police must meet them at home.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Your Legal Right</th>
                      <th className="p-3">Law Section</th>
                      <th className="p-3">What the Law Gives You</th>
                      <th className="p-3">How to Use Your Right</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Right to Written Notice</td>
                      <td className="p-3">Section 35(3) BNSS</td>
                      <td className="p-3">Police must give a formal written notice with an officer signature.</td>
                      <td className="p-3">Ask for a written notice; do not go on phone calls.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Right to Legal Help</td>
                      <td className="p-3">Article 22(1) &amp; Sec 35(2) BNSS</td>
                      <td className="p-3">You can consult an advocate and have them present.</td>
                      <td className="p-3">Have your lawyer send an official reply letter.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Shield for Women &amp; Seniors</td>
                      <td className="p-3">Section 179 BNSS</td>
                      <td className="p-3">Women and seniors cannot be called to a police station.</td>
                      <td className="p-3">Tell the police any meeting must be at home.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Safety from Unlawful Arrest</td>
                      <td className="p-3">Arnesh Kumar &amp; Sec 35 BNSS</td>
                      <td className="p-3">Police cannot arrest you if you respond and cooperate.</td>
                      <td className="p-3">Send a written reply explaining civil debt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Safety from Extortion</td>
                      <td className="p-3">Section 308 &amp; 351 BNS</td>
                      <td className="p-3">Demanding debt money by threatening arrest is extortion.</td>
                      <td className="p-3">Record all calls and file a police chief complaint.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Judicial Precedents */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court Rulings &amp; Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Supreme Court Rulings Against Police Debt Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has ruled many times that banks cannot use police to collect debts. These top court rulings protect every borrower in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In <em>Lalita Kumari v. Government of U.P.</em> (2014), the Supreme Court ruled that police must do a preliminary inquiry before filing an FIR in commercial matters. Police cannot file an FIR right away just because a bank complained.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In <em>Satishchandra Ratanlal Shah v. State of Gujarat</em> (2019), the Supreme Court held that failing to pay a loan is not cheating. Cheating requires bad intentions from the very first day. If you took a loan honestly and defaulted due to hard times, it is not a crime.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In <em>ICICI Bank v. Shanti Devi Sharma</em> (2008), the Supreme Court warned banks against using force or recovery agents. The court held that lenders cannot use strong-arm tactics. These rulings make it clear that police cannot help banks recover loans.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Police Summons Defense Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart shows the six steps to defend yourself against illegal police summons, recovery agent threats, and false arrest warnings.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/police-summons-for-loan-default-rights-against-illegal-interference.jpg"
                    alt="Police Summons for Loan Default Rights and Legal Protection Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Police Interference Defense Framework • Section 35(3) BNSS Compliant</span>
                  <a
                    href="/images/infographics/police-summons-for-loan-default-rights-against-illegal-interference.jpg"
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
                6. Step-by-Step SOP: 6-Stage Police Summons Action Plan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you get a call or letter from a police station about a bank loan, take these six steps to stay safe.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Verify Notice Details and Case Number
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask the caller for the FIR number or diary entry. Note down the caller name and rank. Check the case details online on your state police portal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: State That the Loan is a Civil Dispute
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Politely tell the officer that loan default is a civil contract issue. State that no cheating occurred. Request a written notice under Section 35(3) BNSS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Send a Written Legal Reply Through Counsel
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Have your advocate draft a formal reply. Mention Supreme Court rulings in Lalita Kumari and Satishchandra Shah. Show evidence of genuine financial hardship.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Escalate Harassment to Higher Police Chiefs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If police officers keep threatening arrest, send a complaint to the Police Commissioner. You can also file a case with the State Police Complaints Authority.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Seek High Court Relief Under Section 528 BNSS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If an FIR is filed under cheating laws, file a petition in High Court under Section 528 BNSS. The High Court can quash false cases and stop arrest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settle the Loan with Bank and Get NDC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once police threats stop, talk directly to the bank settlement team. CredSettle helps you get up to 75% loan waivers and secures your official No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Remedies: High Court Quashing & Ombudsman Help */}
            <section id="legal-remedies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Remedies &amp; Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Remedies: High Court Quashing &amp; Ombudsman Help
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you face illegal police pressure, you have clear legal options. Knowing where to complain will stop the harassment quickly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>High Court Quashing (Section 528 BNSS)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 528 BNSS, High Courts can stop misuse of criminal law. The court can cancel fake police cases aimed at forcing loan repayments.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Integrated Ombudsman Scheme</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks cannot hire agents who pretend to be police officers. You can file a formal complaint at cms.rbi.org.in for quick action against the bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>State Police Complaints Authority (PCA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Set up under Supreme Court orders, the PCA probes police officers who abuse their power, threaten borrowers, or act as debt recovery agents.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Private Criminal Complaint (Section 223 BNSS)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You can file a court case against recovery agents for criminal threats under Section 351 BNS and impersonating officers under Section 204 BNS.
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
                8. 3-Tier Escalation Matrix: Police Misconduct Redressal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When facing police pressure, follow these three steps to protect yourself and make rogue officials stop.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Step</th>
                      <th className="p-3">Authority to Approach</th>
                      <th className="p-3">Time Needed</th>
                      <th className="p-3">What They Can Do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Police Chief</td>
                      <td className="p-3">Superintendent of Police / Police Commissioner</td>
                      <td className="p-3 font-mono">7 to 14 Working Days</td>
                      <td className="p-3">Orders local police stations to stop interfering in civil bank loan defaults.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Police Watchdog</td>
                      <td className="p-3">State Police Complaints Authority (PCA)</td>
                      <td className="p-3 font-mono">30 Working Days</td>
                      <td className="p-3">Opens inquiry against errant police officers for threats and misuse of uniform.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: High Court</td>
                      <td className="p-3">High Court (Article 226 / Sec 528 BNSS)</td>
                      <td className="p-3 font-mono">Urgent Hearing</td>
                      <td className="p-3">Issues court orders barring police interference and cancels false criminal cases.</td>
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
                9. Procedural Timeline: Default Stages to Police Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing how debt collection unfolds over time helps you know when agent actions cross into illegal territory.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Days Past Due</th>
                      <th className="p-3">Loan Stage</th>
                      <th className="p-3">Bank &amp; Agent Actions</th>
                      <th className="p-3">What You Should Do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Payment reminder SMS and regular bank phone calls.</td>
                      <td className="p-3">Check your budget and plan your monthly finances.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Frequent agent calls and verbal warnings of legal steps.</td>
                      <td className="p-3">Save call records and ask for written statements.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Fake police notices on WhatsApp or spoofed phone calls.</td>
                      <td className="p-3">Verify caller ID and issue a legal warning letter.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Stage</td>
                      <td className="p-3">Bank may file a false police complaint alleging cheating.</td>
                      <td className="p-3">Send a formal legal reply under Section 35(3) BNSS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS Window</td>
                      <td className="p-3">Police close matter as civil debt; bank offers settlement.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate a 50% to 75% loan waiver with CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset</td>
                      <td className="p-3">Debt assigned to ARC or marked for formal write-off.</td>
                      <td className="p-3">Pay the agreed sum and get your No Dues Certificate.</td>
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
                10. Specialized Scenarios: Cyber Cell &amp; Multi-State Calls
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often face tricky digital threats or calls from other states. Here is how your legal rights work in these special cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Cyber Crime Cell Calls for Mobile App Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Instant loan apps often claim they filed cyber crime cases. A real cyber cell investigates hacking and fraud, not personal loan defaults.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Calls from Police Stations in Other States
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers often get calls from distant state police. Under Section 179 BNSS, out-of-state police cannot force you to travel for loan issues.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Police Visits to Your Workplace or Family
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Police visiting your office or alarming family members over loan debts violates RBI rules and your privacy under the Puttaswamy ruling.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Cheque Bounce Cases Under Section 138 NI Act
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cheque bounce cases are court trials held by magistrates. Police have no role in cheque cases unless a magistrate issues a court warrant.
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
                Frequently Asked Questions: Police Summons for Loan Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal answers to essential questions regarding police notices, borrower rights, illegal debt recovery tactics, and settlement procedures under Indian law.
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
                  <strong>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS):</strong> Section 35(3) Notice of Appearance, Section 179 Police Power to Require Attendance, and Section 528 High Court Inherent Powers.
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita, 2023 (BNS):</strong> Section 204 Impersonating Public Servant, Section 308 Extortion, Section 318(4) Cheating, and Section 351 Criminal Intimidation.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 73 Compensation for Loss or Damage Caused by Breach of Contract.
                </li>
                <li>
                  <strong>Constitution of India:</strong> Article 21 Protection of Life and Personal Liberty, and Article 22(1) Protection Against Arrest and Right to Legal Counsel.
                </li>
                <li>
                  <strong>Supreme Court of India Landmark Precedents:</strong> Lalita Kumari v. Govt. of U.P. (2014), Satishchandra Ratanlal Shah v. State of Gujarat (2019), and Arnesh Kumar v. State of Bihar (2014).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Legal Repositories:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.mha.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Home Affairs</span>
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
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Loan Default Rules
                  </Link>
                  <Link href="/bailable-warrant-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bailable Warrant Rules
                  </Link>
                  <Link href="/police-case-for-credit-card-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Case for Credit Cards
                  </Link>
                  <Link href="/police-complaint-against-bank-recovery-agent" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Complaint Against Agents
                  </Link>
                  <Link href="/bank-filed-fir-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Filed FIR Defense
                  </Link>
                  <Link href="/bank-employee-threatening-arrest-on-call" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Threats of Arrest
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Rules
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF Seizure Rules
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
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
                Specialist in banking compliance, criminal procedure defense, constitutional rights under BNSS, and negotiated NPA loan settlements with extensive experience defending borrowers against unlawful police harassment.
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
                  Police Calling for Loan Default?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists stop unlawful police calls, issue formal notices citing Supreme Court precedents, and negotiate up to 75% loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Rights Now
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
                  <span><strong>Zero Police Harassment:</strong> Supreme Court precedent defense.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fake Notice Shield:</strong> Immediate detection of fraudulent summons.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Direct escalation against rogue agencies.</span>
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
                  href="/can-bank-file-section-420-cheating-case-for-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 420 Cheating Case Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil dispute protection &rarr;</span>
                </Link>

                <Link
                  href="/bailable-warrant-for-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bailable Warrant for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Court summons &amp; bail rules &rarr;</span>
                </Link>

                <Link
                  href="/police-complaint-against-bank-recovery-agent"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    File Complaint Against Recovery Agent
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop agent harassment &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
