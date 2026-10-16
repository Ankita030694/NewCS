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
  Share2,
  Smartphone,
  EyeOff,
  UserX,
  ShieldAlert
} from 'lucide-react';

export default function SocialMediaDefamationBnsClient() {
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

    const headings = document.querySelectorAll(
      'section[id], div[id].scroll-target'
    );
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
    { id: 'bns-defamation-offence', label: '1. Social Media Defamation Under BNS 356' },
    { id: 'bns-vs-ipc-framework', label: '2. Legal Framework: BNS 2023 vs IPC Codes' },
    { id: 'statutory-penalties', label: '3. Offence Matrix: BNS Penalties & Jail' },
    { id: 'digital-evidence-forensics', label: '4. Digital Forensics: Section 63 BSA Protocol' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Legal Action SOP Against Agents' },
    { id: 'rbi-digital-lending-rules', label: '7. RBI Fair Practices: Harassment Ban' },
    { id: 'escalation-matrix', label: '8. 3-Tier Redressal: Cyber Cell to Courts' },
    { id: 'procedural-timeline', label: '9. Procedural Timeline: Cyber FIR to Relief' },
    { id: 'specialized-scenarios', label: '10. WhatsApp Groups & Workplace Shaming' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can recovery agents post my photo or debt details on social media?',
      a: 'No. Posting borrower photos, debt notices, or morphed images on WhatsApp, Facebook, Instagram, or LinkedIn is strictly illegal. It violates Section 356 of BNS 2023 for criminal defamation, Section 66E of the IT Act for privacy breach, and RBI Fair Practices directives.'
    },
    {
      q: 'Which sections of Bharatiya Nyaya Sanhita (BNS) apply to recovery agent defamation?',
      a: 'The primary BNS sections include Section 356 (Defamation), Section 351 (Criminal Intimidation), Section 308 (Extortion), Section 79 (Word, gesture or act intended to insult the modesty of a woman), and Section 61 (Criminal Conspiracy).'
    },
    {
      q: 'How do I file a police complaint against recovery agents for cyber defamation?',
      a: 'You can register an online complaint at cybercrime.gov.in or visit your local cyber police station to file an FIR under Section 173 BNSS. Provide screenshots, URL links, phone numbers, and call recordings certified under Section 63 of Bharatiya Sakshya Adhiniyam.'
    },
    {
      q: 'Is the bank or NBFC held legally liable for actions of its recovery agents?',
      a: 'Yes. Under the doctrine of vicarious liability and RBI master circulars, regulated entities are directly accountable for the conduct of third-party recovery agents. Lenders face regulatory penalties, license suspensions, and civil liability for damages.'
    },
    {
      q: 'What should I do if recovery agents create a WhatsApp group with my contacts?',
      a: 'Immediately take screenshots of the group participants, messages, and admin phone numbers. Export the chat history. File an emergency complaint with the National Cyber Crime Reporting Portal and issue a legal notice to the lender through counsel.'
    },
    {
      q: 'Can I sue the recovery agency and bank for civil damages and compensation?',
      a: 'Yes. You can file a civil defamation suit in a competent civil court seeking substantial financial damages for loss of reputation, mental agony, and emotional distress. You can also seek an ex-parte temporary injunction under Order 39 of the CPC.'
    },
    {
      q: 'What constitutes valid digital evidence under Section 63 of BSA 2023?',
      a: 'Digital evidence requires original unedited screenshots, screen recordings, exported chat archives, server timestamps, and an electronic certificate under Section 63 BSA signed by the owner of the capturing mobile device or computer.'
    },
    {
      q: 'Can recovery agents contact my employer or colleagues on LinkedIn?',
      a: 'No. RBI explicitly prohibits lenders and recovery agents from contacting employers, colleagues, or professional networks on LinkedIn or email. Doing so violates workplace privacy and triggers criminal defamation and tortious interference.'
    },
    {
      q: 'How does the RBI Integrated Ombudsman penalize lenders for social media harassment?',
      a: 'The RBI Ombudsman can award compensation up to ₹20 Lakhs for financial losses and an additional ₹1 Lakh for mental harassment. The Ombudsman can also direct the lender to stop recovery efforts and reverse wrongful penalty charges.'
    },
    {
      q: 'How does CredSettle help borrowers facing recovery agent defamation?',
      a: 'CredSettle issues immediate statutory cease-and-desist notices to lenders, files cyber crime and police complaints, secures social media content takedowns, and negotiates formal debt settlements with waivers up to 75% without compromising your dignity.'
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
            <span>Cyber Defamation Defense &amp; Borrower Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Social Media Defamation by Recovery Agents: BNS Legal Action
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Stop recovery agents from circulating debt notices, creating defamatory WhatsApp groups, or posting on Facebook, Instagram, and LinkedIn. Discover strict criminal penalties under Bharatiya Nyaya Sanhita (BNS) 2023, cyber FIR procedures, and legal debt relief.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Recovery Defamation</span>
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
                  <span>BNS 2023 Criminal Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Actionable defense under Section 356 BNS, Section 66E IT Act, and RBI Digital Lending Regulations.
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
                <span>EXECUTIVE BRIEF: SOCIAL MEDIA DEFAMATION BY RECOVERY AGENTS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict BNS Criminal Liability:</strong> Posting debt notices or morphed pictures on social media is a non-cognizable or cognizable cyber offence under Section 356 (Defamation) and Section 351 (Criminal Intimidation) of Bharatiya Nyaya Sanhita, 2023.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Extortion &amp; Modesty Violations:</strong> Threatening social shaming to force debt payment constitutes Extortion under Section 308 BNS (up to 7 years imprisonment) and insults to female modesty under Section 79 BNS.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">IT Act &amp; Privacy Protections:</strong> Sharing private phone contacts or circulating unauthorized media violates Section 66E and Section 67 of the Information Technology Act, punishable with heavy fines and prison time.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict RBI Vicarious Liability:</strong> Banks and NBFCs are strictly responsible for collection agents. The RBI Integrated Ombudsman can grant damages up to ₹20 Lakhs for mental trauma and unlawful harassment.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Comprehensive CredSettle Relief:</strong> We file immediate cease-and-desist notices, lodge cyber FIRs under Section 173 BNSS, halt public shaming, and negotiate deep loan settlement discounts.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Social Media Defamation Offence Under Section 356 BNS */}
            <section id="bns-defamation-offence" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Criminal Codification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Social Media Defamation Offence Under Section 356 BNS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on a bank loan, credit card, or digital lending app is purely a civil contractual dispute under Indian jurisprudence. However, rogue debt recovery agencies frequently escalate debt recovery into criminal public shaming. When agents post defamatory statements on WhatsApp statuses, create WhatsApp groups with your phone contacts, comment on Instagram or Facebook posts, or tag your employer on LinkedIn, they cross from civil debt collection into serious criminal conduct.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                With the enactment of the Bharatiya Nyaya Sanhita (BNS), 2023, replacing the archaic Indian Penal Code (IPC), 1860, criminal defamation is explicitly codified under Section 356 of BNS. Under Section 356(1) BNS, whoever, by words either spoken or intended to be read, or by signs or by visible representations, makes or publishes any imputation concerning any person intending to harm, or knowing or having reason to believe that such imputation will harm, the reputation of such person, is said to defame that person.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When recovery agents publish debt claims to third parties (such as friends, family members, office colleagues, or public followers on social networks), the legal threshold of publication is met. The Indian Supreme Court has consistently held that a borrower’s right to dignity under Article 21 of the Constitution cannot be extinguished merely because a financial default occurred.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 356(2) BNS, whoever defames another person shall be punished with simple imprisonment for a term which may extend to two years, or with fine, or with both, or with community service. Furthermore, when combined with online extortion and cyber harassment, multiple non-bailable offences are triggered under BNS and the IT Act.
              </p>
            </section>

            {/* SECTION 2: Legal Framework: BNS 2023 vs IPC Criminal Provisions */}
            <section id="bns-vs-ipc-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Transition: Old IPC vs New BNS 2023</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Legal Framework: BNS 2023 vs IPC Criminal Provisions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The modernization of India criminal laws through Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA) has streamlined cyber crime prosecutions and provided enhanced protection against predatory digital collection methods.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The table below illustrates how traditional IPC offences map to modern BNS sections and how they specifically apply to recovery agent social media abuses:
              </p>

              {/* BNS vs IPC Mapping Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Specific Recovery Agent Violation</th>
                      <th className="p-3">Old IPC Section</th>
                      <th className="p-3">New BNS 2023 Section</th>
                      <th className="p-3">Maximum Legal Penalty</th>
                      <th className="p-3">Procedural Nature</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Publishing Defamatory Posts / Statuses</td>
                      <td className="p-3 font-mono">IPC 499 &amp; 500</td>
                      <td className="p-3 font-bold text-blue-700 font-mono">BNS Section 356</td>
                      <td className="p-3">2 Years Jail, Fine, Community Service</td>
                      <td className="p-3 text-slate-700">Non-Cognizable / Bailable</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Threatening Social Shaming or Ruin</td>
                      <td className="p-3 font-mono">IPC 503 &amp; 506</td>
                      <td className="p-3 font-bold text-blue-700 font-mono">BNS Section 351</td>
                      <td className="p-3">2 to 7 Years Imprisonment</td>
                      <td className="p-3 text-rose-600 font-semibold">Cognizable (if threat severe)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Extorting Money via Online Humiliation</td>
                      <td className="p-3 font-mono">IPC 383 &amp; 384</td>
                      <td className="p-3 font-bold text-blue-700 font-mono">BNS Section 308</td>
                      <td className="p-3 text-rose-700 font-bold">Up to 7 Years Imprisonment</td>
                      <td className="p-3 text-rose-600 font-semibold">Cognizable &amp; Non-Bailable</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Harassing Female Borrowers or Relatives</td>
                      <td className="p-3 font-mono">IPC 509</td>
                      <td className="p-3 font-bold text-blue-700 font-mono">BNS Section 79</td>
                      <td className="p-3">Up to 3 Years Imprisonment</td>
                      <td className="p-3 text-rose-600 font-semibold">Cognizable &amp; Bailable</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Agency &amp; Bank Joint Collusion</td>
                      <td className="p-3 font-mono">IPC 120B</td>
                      <td className="p-3 font-bold text-blue-700 font-mono">BNS Section 61</td>
                      <td className="p-3">Equal Punishment as Principal Offence</td>
                      <td className="p-3 text-slate-700">Dependent on Offence</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Intentionally Provoking Breach of Peace</td>
                      <td className="p-3 font-mono">IPC 504</td>
                      <td className="p-3 font-bold text-blue-700 font-mono">BNS Section 352</td>
                      <td className="p-3">Up to 2 Years Imprisonment or Fine</td>
                      <td className="p-3 text-slate-700">Non-Cognizable / Bailable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Criminal Offence Matrix: BNS Penalties & Jail Terms */}
            <section id="statutory-penalties" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Offence Matrix &amp; Judicial Sanctions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Criminal Offence Matrix: BNS Penalties &amp; Jail Terms
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When filing an FIR or private criminal complaint against rogue collection agents and their managing banks, knowing the exact statutory classifications empowers your advocate to seek immediate non-bailable warrants and coercive police action.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Statutory Offence</th>
                      <th className="p-3">Primary Enactment</th>
                      <th className="p-3">Cognizable vs Non-Cognizable</th>
                      <th className="p-3">Bailable Status</th>
                      <th className="p-3">Court Jurisdiction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Defamation via Digital Media</td>
                      <td className="p-3">Section 356 BNS</td>
                      <td className="p-3 text-amber-700">Non-Cognizable (Direct Complaint / BNSS 175)</td>
                      <td className="p-3 text-emerald-700">Bailable</td>
                      <td className="p-3">Judicial Magistrate First Class</td>
                    </tr>
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-bold text-slate-900">Extortion by Digital Blackmail</td>
                      <td className="p-3">Section 308(2) BNS</td>
                      <td className="p-3 text-rose-700 font-bold">Cognizable (Immediate Police FIR)</td>
                      <td className="p-3 text-rose-700 font-bold">Non-Bailable</td>
                      <td className="p-3">Court of Session / JMFC</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Capturing &amp; Sharing Private Images</td>
                      <td className="p-3">Section 66E IT Act</td>
                      <td className="p-3 text-rose-700 font-bold">Cognizable</td>
                      <td className="p-3 text-emerald-700">Bailable</td>
                      <td className="p-3">Cyber Crime Designated Court</td>
                    </tr>
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-bold text-slate-900">Publishing Obscene Content Online</td>
                      <td className="p-3">Section 67 IT Act</td>
                      <td className="p-3 text-rose-700 font-bold">Cognizable</td>
                      <td className="p-3 text-rose-700 font-bold">Non-Bailable (Second Conviction)</td>
                      <td className="p-3">Cyber Crime Designated Court</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Criminal Intimidation with Threat</td>
                      <td className="p-3">Section 351(3) BNS</td>
                      <td className="p-3 text-rose-700 font-bold">Cognizable</td>
                      <td className="p-3 text-rose-700 font-bold">Non-Bailable in many states</td>
                      <td className="p-3">Judicial Magistrate First Class</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Digital Forensics: Section 63 BSA Evidence Protocol */}
            <section id="digital-evidence-forensics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Forensic Standards &amp; Admissibility Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Digital Forensics: Section 63 BSA Evidence Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In cyber crime and social media defamation cases, police investigations and judicial trials succeed or fail based on digital evidence admissibility. Under the Bharatiya Sakshya Adhiniyam (BSA), 2023, electronic records are governed by Section 63 (which replaces Section 65B of the repealed Indian Evidence Act, 1872).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple printouts or unverified screenshots are routinely challenged in court as unauthenticated or potentially manipulated. To ensure that defamatory WhatsApp chats, social media comments, and threatening voice recordings are admissible as primary electronic evidence, borrowers must strictly execute the 4-point BSA protocol:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Smartphone className="w-4 h-4" />
                    <span>1. Screen Recording with Visible System URL &amp; Timestamps</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Capture continuous video recordings of your phone or desktop screen opening the social media post or chat, showing profile handles, verified phone numbers, and live network timestamps.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>2. Complete Raw Chat Export (.txt with Media Attachments)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Export unedited WhatsApp chat logs including media attachments directly to a secure cloud drive. Never delete messages or leave group chats before completing an export.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Bookmark className="w-4 h-4" />
                    <span>3. Web Archive Preservation (Wayback &amp; Hash Check)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If defamation occurred on public URLs like LinkedIn, Facebook, or Twitter, archive the web page via digital preservation tools and compute SHA-256 cryptographic hashes for court filing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>4. Mandatory Certificate Under Section 63 BSA 2023</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Draft a formal affidavit certifying device custody, operating parameters, and unaltered transmission under Section 63 BSA, signed by the device custodian for police submission.
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
                5. Visual Blueprint: Cyber Harassment Defense Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap illustrates the legal defense shield against online defamation and cyber harassment by debt recovery agents, highlighting digital evidence preservation, statutory BNS actions, and structured debt resolution.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/social-media-defamation-by-recovery-agents-legal-action-under-bns.jpg"
                    alt="Legal Action for Social Media Defamation by Recovery Agents Under BNS"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cyber Defamation Shield • Section 356 BNS &amp; Section 63 BSA Compliant</span>
                  <a
                    href="/images/infographics/social-media-defamation-by-recovery-agents-legal-action-under-bns.jpg"
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
                6. Step-by-Step SOP: 6-Stage Legal Action Against Agents
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When recovery agents launch an illegal social media smear campaign, panic is your worst enemy. Executing this systematic six-stage legal protocol immediately halts harassment and forces lenders to negotiate on honorable terms.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Forensic Evidence Capture &amp; BSA 63 Certification
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Immediately take unedited screenshots, record screen videos displaying mobile numbers and timestamps, and export complete WhatsApp chat databases. Prepare your electronic certificate under Section 63 of Bharatiya Sakshya Adhiniyam.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Issue Statutory Cease-and-Desist Notice to Bank
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Through legal counsel, dispatch an urgent statutory legal notice to the bank Managing Director, Principal Nodal Officer, and collection agency, citing Section 356 BNS, Section 308 BNS, and vicarious liability under RBI regulations.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: File Cyber Crime Complaint &amp; Police FIR Under BNSS 173
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Lodge an immediate complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) and register an FIR under Section 173 of Bharatiya Nagarik Suraksha Sanhita (BNSS) at your local cyber police station.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Escalate to the RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File a formal complaint on the RBI CMS portal (cms.rbi.org.in) highlighting blatant violations of the RBI Fair Practices Code, seeking monetary compensation for mental trauma and disciplinary penalties against the lender.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File Civil Injunction Suit Under Order 39 CPC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If public shaming continues, file a civil suit for defamation and damages in a competent civil court and obtain an urgent ex-parte temporary injunction under Order 39 Rules 1 and 2 of the Code of Civil Procedure restraining further posts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate a Formal OTS Debt Settlement with CredSettle
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Leverage your overwhelming criminal and regulatory counter-claims to negotiate a comprehensive debt waiver (50% to 75% discount) directly with bank zonal credit committees, securing an absolute No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: RBI Fair Practices Code: Digital Harassment Ban */}
            <section id="rbi-digital-lending-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Reserve Bank of India Directives &amp; Compliance</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. RBI Fair Practices Code: Digital Harassment Ban
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India has repeatedly clamped down on predatory loan recovery tactics. Under the RBI Guidelines on Digital Lending and Master Directions on Fair Practices Code, commercial banks, cooperative institutions, and NBFCs are subject to stringent operational restrictions:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">RBI Regulatory Prohibitions &amp; Violations Summary</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Master Circular 2022-2026</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">RBI Regulatory Requirement</th>
                        <th className="p-3">Prohibited Agent Practice</th>
                        <th className="p-3">Borrower Legal Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Total Ban on Accessing Phone Contacts</td>
                        <td className="p-3 text-rose-600 font-semibold">Harvesting contacts, calling relatives, or WhatsApp groups</td>
                        <td className="p-3">Report to RBI CMS and Cyber Cell for IT Act violation.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Strict Contact Calling Hours (8 AM to 7 PM)</td>
                        <td className="p-3 text-rose-600 font-semibold">Late-night calls, early-morning messaging, continuous pinging</td>
                        <td className="p-3">Maintain call logs and submit to Bank PNO and Ombudsman.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Prohibition on Third-Party Disclosure</td>
                        <td className="p-3 text-rose-600 font-semibold">Informing employers, neighbours, friends, or LinkedIn contacts</td>
                        <td className="p-3">File BNS 356 Defamation suit and claim civil damages.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Mandatory Agent Verification Details</td>
                        <td className="p-3 text-rose-600 font-semibold">Calling from anonymous VOIP numbers without bank ID</td>
                        <td className="p-3">Demand authorization letter; report unregistered agencies.</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Vicarious Institutional Liability</td>
                        <td className="p-3 text-slate-900">Bank claiming third-party recovery agency acts independently</td>
                        <td className="p-3 text-[#1886ff]">Bank remains 100% legally liable for all agency penalties.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Redressal Matrix: Cyber Cell to High Court
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If lenders fail to take immediate corrective action against rogue collection agencies, utilize the multi-tier legal grievance escalation framework available under Indian law:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Redressal Tier</th>
                      <th className="p-3">Designated Legal Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Cyber Police &amp; PNO</td>
                      <td className="p-3">National Cyber Crime Portal &amp; Bank PNO</td>
                      <td className="p-3 font-mono">24 to 72 Hours</td>
                      <td className="p-3">Freezes abusive numbers, issues group takedown notices, and suspends agency access.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman Scheme</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Awards compensation up to ₹20 Lakhs, forces penalty reversals, and disciplines lender.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: Judicial Magistrate</td>
                      <td className="p-3">JMFC Court (Section 175(3) BNSS) &amp; Civil Court</td>
                      <td className="p-3 font-mono">1 to 2 Weeks (Injunction)</td>
                      <td className="p-3">Issues non-bailable arrest warrants, summons bank directors, and grants ex-parte stay.</td>
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
                9. Procedural Timeline: Cyber Crime FIR to Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the legal and investigative timeline gives you strategic control, transforming a frightening harassment incident into an unassailable negotiation position.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Milestone</th>
                      <th className="p-3">Procedural Phase</th>
                      <th className="p-3">Action by Enforcement / Bank</th>
                      <th className="p-3">Strategic Action by CredSettle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Hour 1 to 24</td>
                      <td className="p-3 font-mono text-[11px]">Immediate Crisis</td>
                      <td className="p-3">Defamatory post uploaded or abusive WhatsApp group formed.</td>
                      <td className="p-3">Preserve digital evidence under BSA 63; file cyber portal alert.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 2 to 5</td>
                      <td className="p-3 font-mono text-[11px]">Legal Interception</td>
                      <td className="p-3">Bank receives formal statutory cease-and-desist notice.</td>
                      <td className="p-3">Serve criminal warning under BNS 356; lodge cyber cell FIR.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 6 to 14</td>
                      <td className="p-3 font-mono text-[11px]">Enforcement Impact</td>
                      <td className="p-3">Police summons issued to recovery agency; bank internal audit.</td>
                      <td className="p-3">Escalate to RBI Ombudsman; file civil injunction application.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 15 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Harassment Terminated</td>
                      <td className="p-3">Lender disowns rogue agency; posts deleted; apology tendered.</td>
                      <td className="p-3">Shift leverage to formal loan settlement and debt restructuring.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Resolution &amp; OTS</td>
                      <td className="p-3">Bank credit committee sanctions deep principal haircut.</td>
                      <td className="p-3 font-bold text-slate-900">Execute settlement payment and secure clean No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: WhatsApp Groups & Workplace */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: WhatsApp Groups &amp; Workplace
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Recovery agencies invent devious online harassment techniques. Here is the exact legal remedy for the four most common predatory scenarios:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserX className="w-4 h-4 text-rose-600" />
                    Defamatory WhatsApp Groups with Friends &amp; Family
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents create groups titled Defaulter Alert adding your contacts. This constitutes direct criminal defamation under Section 356 BNS and criminal intimidation under Section 351 BNS. Export chat immediately and file a cyber cell FIR.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-600" />
                    LinkedIn &amp; Workplace Email Smear Attacks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tagging company CEOs or messaging HR departments violates professional privacy and constitutes tortious interference with employment. Issue an immediate advocate notice holding the bank vicariously liable for corporate damage.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <EyeOff className="w-4 h-4 text-purple-600" />
                    Morphed Photos &amp; Deepfake Intimidation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Predatory instant loan apps frequently morph borrower gallery images. This is a severe non-bailable cyber crime under IT Act Section 66E, Section 67, and BNS Section 308 (Extortion). Cyber police arrest perpetrators rapidly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-amber-600" />
                    Public Instagram &amp; Facebook Comment Flooding
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spamming public comment sections on your social media posts is actionable under Section 356 BNS. Take forensic screen recordings, report comments for harassment, and initiate cyber crime takedown orders.
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
                Frequently Asked Questions: BNS Defamation Action
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding recovery agent defamation, Bharatiya Nyaya Sanhita criminal provisions, cyber police complaints, and borrower rights in India.
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
                  <strong>Bharatiya Nyaya Sanhita (BNS), 2023:</strong> Section 356 (Defamation), Section 351 (Criminal Intimidation), Section 308 (Extortion), Section 79 (Insulting Modesty of Women), Section 61 (Criminal Conspiracy).
                </li>
                <li>
                  <strong>Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023:</strong> Section 173 (Procedure for Registration of FIRs &amp; e-FIRs), Section 175 (Magisterial Powers for Cyber Investigations).
                </li>
                <li>
                  <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023:</strong> Section 63, Mandatory Admissibility Protocols and Certification for Electronic Evidence.
                </li>
                <li>
                  <strong>Information Technology Act, 2000:</strong> Section 66E (Privacy Violations), Section 67 (Publishing Obscene Content Online), Section 43A (Data Protection).
                </li>
                <li>
                  <strong>Reserve Bank of India Directives:</strong> Master Directions on Fair Practices Code for Regulated Entities &amp; RBI Guidelines on Digital Lending (2022).
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Subramanian Swamy v. Union of India (Defamation), K.S. Puttaswamy v. Union of India (Right to Privacy under Article 21).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Reporting Portal</span>
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
                  <a href="https://www.meity.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Electronics &amp; IT</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/rbi-digital-lending-rules-ban-on-accessing-contacts-photo-gallery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Digital Lending Rules
                  </Link>
                  <Link href="/sue-bank-recovery-agent-for-defamation-india" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Defamation Suit Guide
                  </Link>
                  <Link href="/police-summons-for-loan-default-rights-against-illegal-interference" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Summons Rights
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Legal Notice Reply
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/app-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan App Settlement
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Defense
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Protection
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
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
                Expert in cyber law jurisprudence, BNS criminal defenses, RBI Fair Practices Code enforcement, and loan compromise settlements with extensive experience defending borrowers against unlawful digital harassment.
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
                  Facing Social Media Shaming by Agents?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our cyber lawyers and resolution specialists issue immediate criminal cease-and-desist notices under Section 356 BNS, file cyber police complaints, and negotiate up to 75% debt settlement relief.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Dignity Now
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
                  <span><strong>Zero Tolerance for Shaming:</strong> Immediate cyber and criminal notices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace &amp; Family Shield:</strong> Halts contacts on LinkedIn and WhatsApp.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Escalation:</strong> Claims damages for mental agony.</span>
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
                  href="/rbi-digital-lending-rules-ban-on-accessing-contacts-photo-gallery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Digital Lending Rules: Contact Ban
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Phone contact &amp; photo gallery protection &rarr;</span>
                </Link>

                <Link
                  href="/sue-bank-recovery-agent-for-defamation-india"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Sue Bank Recovery Agent for Defamation
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil damages &amp; legal compensation &rarr;</span>
                </Link>

                <Link
                  href="/stop-recovery-agent-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Recovery Agent Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI rules &amp; borrower legal rights &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
