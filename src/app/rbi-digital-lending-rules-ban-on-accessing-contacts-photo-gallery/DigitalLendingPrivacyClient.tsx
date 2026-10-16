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
  Check,
  Lock,
  Phone,
  Bookmark,
  ArrowRight,
  Sparkles,
  Gavel,
  Smartphone,
  EyeOff,
  Database,
  ShieldAlert
} from 'lucide-react';

export default function DigitalLendingPrivacyClient() {
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
    { id: 'regulatory-mandate', label: '1. Executive Brief: RBI Privacy Mandates' },
    { id: 'scope-applicability', label: '2. Scope: Commercial Banks, NBFCs & DLAs' },
    { id: 'mobile-resources-ban', label: '3. Explicit Ban: Contacts, Media & Logs' },
    { id: 'permissible-permissions', label: '4. Permissible Permissions: Onboarding Rules' },
    { id: 'consent-architecture', label: '5. Consent & Right to be Forgotten' },
    { id: 'permission-matrix', label: '6. Matrix: Permitted vs Banned Access' },
    { id: 'cyber-extortion-defense', label: '7. Cyber Extortion: Contacts & Morphed Photos' },
    { id: 'criminal-penalties', label: '8. Penalties: BNS, IT Act & DPDP Act' },
    { id: 'visual-blueprint', label: '9. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '10. Step-by-Step SOP: 6-Stage Action Plan' },
    { id: 'escalation-matrix', label: '11. 4-Tier Escalation Hierarchy' },
    { id: 'app-store-standards', label: '12. Google Play Store Compliance' },
    { id: 'debt-resolution-ots', label: '13. Debt Resolution: OTS vs Rogue Threats' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Does the RBI ban digital loan apps from accessing phone contacts?',
      a: 'Yes. Under Clause 6.1 and 6.2 of the RBI Guidelines on Digital Lending (September 2022), Digital Lending Apps (DLAs) are strictly prohibited from accessing mobile phone resources such as contact lists, directory books, call logs, and telephony functions.'
    },
    {
      q: 'Can a lending app legally demand access to my photo gallery or media storage?',
      a: 'No. The RBI explicitly prohibits lending apps from accessing device file storage, photo galleries, or media folders. Any digital lending app demanding gallery or file storage permission directly violates RBI regulatory directions.'
    },
    {
      q: 'What mobile permissions are legally allowed under RBI digital lending guidelines?',
      a: 'DLAs may only request one-time access to the camera, microphone, and location solely for completing mandatory onboarding and KYC verification, subject to explicit and prior borrower consent. Storing biometric data is strictly prohibited.'
    },
    {
      q: 'What should I do if a recovery agent threatens to message my contacts?',
      a: 'Do not pay extortionate charges. Immediately take screenshots and call recordings. File a criminal cyber complaint at cybercrime.gov.in (Helpline 1930) and lodge an official grievance with the NBFC Grievance Officer and the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'Can recovery agents legally circulate morphed pictures of defaulted borrowers?',
      a: 'No. Circulating morphed or defamatory images constitutes non-bailable criminal extortion under Section 308 of BNS 2023, criminal intimidation under Section 351 of BNS, and violation of privacy and cyber obscenity under Sections 66E and 67 of the IT Act, 2000.'
    },
    {
      q: 'Can a borrower revoke consent previously given to a digital lending app?',
      a: 'Yes. The RBI guidelines mandate purpose-specific consent architecture. Borrowers have the absolute right to revoke consent, restrict data sharing with third parties, and demand the deletion of their personal data from the servers of the app and lending partners.'
    },
    {
      q: 'Are Google Play Store and Apple App Store required to enforce RBI rules?',
      a: 'Yes. Google updated its Financial Services Policy for India prohibiting personal loan apps from accessing external storage, photos, videos, contacts, precise location, and call logs. Apps violating these requirements are permanently removed.'
    },
    {
      q: 'How do I identify if a digital lending app is illegal or unregulated?',
      a: 'Legitimate digital lending apps must disclose the name of their partnering RBI-regulated bank or NBFC upfront on the app and website. Unregulated predatory apps offer short 7-day or 15-day loans with no Key Fact Statement (KFS) and demand contact access.'
    },
    {
      q: 'Where can I report illegal digital lending apps in India?',
      a: 'Report illegal apps on the RBI Sachet portal at sachet.rbi.org.in, the National Cyber Crime Reporting Portal at cybercrime.gov.in, and file a formal written complaint with the local police cyber cell under BNS and IT Act provisions.'
    },
    {
      q: 'How does CredSettle help borrowers facing digital loan harassment?',
      a: 'CredSettle issues immediate formal legal notices to halt unlawful harassment, files cyber crime reports against abusive recovery agencies, protects borrower personal data under RBI guidelines, and negotiates legitimate debt settlements directly with licensed lenders.'
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
            <Smartphone className="w-3.5 h-3.5" />
            <span>RBI Guidelines on Digital Lending &bull; Borrower Privacy Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI Rules on Digital Lending: Contacts &amp; Gallery Ban
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            An authoritative legal guide on the Reserve Bank of India mandate barring loan apps from accessing phone contacts, photo galleries, and device media. Protect your digital privacy, stop cyber harassment, and assert your statutory rights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Digital Loan Harassment</span>
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
                  <span>Borrower Data Privacy Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Digital Lending Guidelines 2022 and IT Act 2000.
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
                <span>EXECUTIVE BRIEF: RBI DIGITAL LENDING PRIVACY RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Total Blanket Ban:</strong> Under Clause 6.1 of the RBI Digital Lending Guidelines, lending apps cannot access phone contact lists, call logs, or photo galleries.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strictly Limited Access:</strong> Apps can only ask for one-time camera, microphone, or location access solely to complete onboarding and KYC verification.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Biometric Storage:</strong> Storing biometric data by digital apps or loan partners is completely illegal under RBI rules.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Data Privacy Rights:</strong> Borrowers have the legal right to revoke app permissions, stop third-party data sharing, and demand data deletion.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Criminal Charges for Threats:</strong> Calling contacts and morphing photos are crimes under BNS Section 308 for extortion and IT Act Section 66E.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Executive Brief: RBI Digital Lending Privacy Mandates */}
            <section id="regulatory-mandate" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Directions &amp; Central Bank Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Executive Brief: RBI Digital Lending Privacy Mandates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The growth of mobile loan apps in India created serious risks for borrowers. Many rogue digital lenders stole private data from mobile phones. Recovery agents used this data to harass, bully, and shame innocent citizens.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop these abusive practices, the Reserve Bank of India issued digital lending guidelines on September 2, 2022. The circular number is DOR.CRE.REC.66/21.07.001/2022-23. These rules set strict standards for customer data safety, borrower consent, and debt recovery.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At the heart of these rules is a total ban on accessing sensitive mobile files. The RBI made it clear that customer privacy comes first. Lenders and their digital apps cannot read your contacts, look at your photo gallery, or track your call history.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Any loan app that asks to see your contacts or photos breaks RBI rules. These illegal apps face app store removal, license cancellation, and police action.
              </p>
            </section>

            {/* SECTION 2: Scope & Applicability: Commercial Banks, NBFCs & DLAs */}
            <section id="scope-applicability" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Scope &amp; Regulated Entities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Scope &amp; Applicability: Commercial Banks, NBFCs &amp; DLAs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI rules apply to all lending firms in India. They cover three main groups.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the rules cover Regulated Entities. These include commercial banks, urban cooperative banks, state cooperative banks, and non-banking financial companies.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the rules cover Lending Service Providers. These are tech firms hired by banks to find customers, verify records, or collect debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, the rules cover Digital Lending Apps. These are mobile apps or web tools that give loans to borrowers. The bank or NBFC is legally responsible for any privacy breach done by its app or recovery agent.
              </p>
            </section>

            {/* SECTION 3: Explicit Ban on Mobile Resources: Contacts, Media & Logs */}
            <section id="mobile-resources-ban" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <EyeOff className="w-4 h-4 text-[#1886ff]" />
                <span>Clause 6 Regulatory Restriction</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Explicit Ban on Mobile Resources: Contacts, Media &amp; Logs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clause 6 of the RBI guidelines sets clear technology and data limits. Clause 6.1 says all data collection must be need-based and transparent. The lender must clearly show why it needs each data point to process the loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clause 6.2 creates the explicit ban. Regulated lenders must ensure that lending apps do not access mobile resources like media files, contact lists, call logs, and phone functions.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule creates four clear protections for borrowers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>Ban on Contact List Scraping</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lending apps cannot read, copy, or save your phone address book. Calling your family, boss, or friends to demand loan payment is strictly illegal.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>Ban on Photo Gallery &amp; Media Files</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Apps cannot open your photo gallery, storage folders, pictures, or videos. Reading personal pictures is an outright privacy violation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>Ban on Call Logs &amp; Telephony</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Apps cannot look at your call history. Lenders cannot track who you call to judge your ability to repay debt.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>Ban on SMS Inbox Scraping</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Apps cannot read your personal text messages. An app can only use a one-time OTP prompt to verify your identity.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: Permissible Permissions: One-Time Onboarding & KYC Rules */}
            <section id="permissible-permissions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Permissible Access &amp; Compliance Standards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Permissible Permissions: One-Time Onboarding &amp; KYC Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders still need some basic data to confirm your identity. They must follow anti-money laundering laws. The RBI permits limited access only for onboarding and verification.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lending apps may ask for one-time access to the camera, microphone, and location. This access must follow three strict rules:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed pl-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict Purpose:</strong> Camera and microphone access is allowed only for video KYC or capturing a live selfie.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>One-Time Permission:</strong> Access cannot be permanent. Once KYC is complete, the app must stop using the camera or microphone.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No Storing Biometric Data:</strong> Apps and loan agents cannot store your fingerprint or iris data. Doing so is a direct legal violation.
                  </span>
                </li>
              </ul>
            </section>

            {/* SECTION 5: Consent Architecture: Revocation & Right to be Forgotten */}
            <section id="consent-architecture" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Database className="w-4 h-4 text-[#1886ff]" />
                <span>Borrower Consent Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Consent Architecture: Revocation &amp; Right to be Forgotten
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the past, loan apps forced users to accept long terms with pre-ticked boxes. The RBI stopped this practice. Now, lenders must follow a clear consent process.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders must ask for your explicit approval at each step. You keep full control over your private information during the loan:
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-blue-50/60 rounded-xl space-y-1">
                    <p className="text-xs font-bold text-[#1886ff] uppercase">Step-by-Step Consent</p>
                    <p className="text-xs text-slate-600">The app must explain why it needs each permission before you approve it.</p>
                  </div>
                  <div className="p-3 bg-blue-50/60 rounded-xl space-y-1">
                    <p className="text-xs font-bold text-[#1886ff] uppercase">Right to Revoke</p>
                    <p className="text-xs text-slate-600">You can cancel any permission at any time directly in your phone settings.</p>
                  </div>
                  <div className="p-3 bg-blue-50/60 rounded-xl space-y-1">
                    <p className="text-xs font-bold text-[#1886ff] uppercase">Right to Data Deletion</p>
                    <p className="text-xs text-slate-600">You can demand that the app delete all your data once the loan is closed.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 pt-1 text-center">
                  All customer data must be stored safely on servers located inside India.
                </p>
              </div>
            </section>

            {/* SECTION 6: Comparative Matrix: Permitted vs Strictly Banned Access */}
            <section id="permission-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Permission Audit &amp; Legal Thresholds</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Comparative Matrix: Permitted vs Strictly Banned Access
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This table shows what digital lending apps can and cannot do under RBI guidelines.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Phone Feature</th>
                      <th className="p-3">RBI Legal Status</th>
                      <th className="p-3">Permitted Use Case</th>
                      <th className="p-3">Risk of Misuse</th>
                      <th className="p-3">Governing Law</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-bold text-slate-900">Contact List &amp; Address Book</td>
                      <td className="p-3 text-rose-600 font-semibold">Strictly Banned</td>
                      <td className="p-3">No permitted use</td>
                      <td className="p-3 text-rose-600">Calling family &amp; employers</td>
                      <td className="p-3">Clause 6.2 RBI Guidelines</td>
                    </tr>
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-bold text-slate-900">Photo Gallery &amp; Files</td>
                      <td className="p-3 text-rose-600 font-semibold">Strictly Banned</td>
                      <td className="p-3">No permitted use</td>
                      <td className="p-3 text-rose-600">Morphed photos &amp; blackmail</td>
                      <td className="p-3">IT Act Sec 66E &amp; BNS Sec 308</td>
                    </tr>
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-bold text-slate-900">Call History &amp; Logs</td>
                      <td className="p-3 text-rose-600 font-semibold">Strictly Banned</td>
                      <td className="p-3">No permitted use</td>
                      <td className="p-3 text-rose-600">Tracking personal callers</td>
                      <td className="p-3">Clause 6.2 RBI Guidelines</td>
                    </tr>
                    <tr className="bg-emerald-50/30">
                      <td className="p-3 font-medium text-slate-900">Camera</td>
                      <td className="p-3 text-emerald-600 font-semibold">One-Time Only</td>
                      <td className="p-3">Live selfie for video KYC</td>
                      <td className="p-3">Low with user consent</td>
                      <td className="p-3">RBI KYC Directions 2016</td>
                    </tr>
                    <tr className="bg-emerald-50/30">
                      <td className="p-3 font-medium text-slate-900">Microphone</td>
                      <td className="p-3 text-emerald-600 font-semibold">One-Time Only</td>
                      <td className="p-3">Audio confirmation during KYC</td>
                      <td className="p-3">Low with user consent</td>
                      <td className="p-3">RBI KYC Directions 2016</td>
                    </tr>
                    <tr className="bg-emerald-50/30">
                      <td className="p-3 font-medium text-slate-900">GPS Location</td>
                      <td className="p-3 text-emerald-600 font-semibold">One-Time Only</td>
                      <td className="p-3">Fraud check during application</td>
                      <td className="p-3">Medium if tracked 24/7</td>
                      <td className="p-3">DPDP Act 2023 Sec 6</td>
                    </tr>
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-bold text-slate-900">Biometric Records</td>
                      <td className="p-3 text-rose-600 font-semibold">Strictly Banned</td>
                      <td className="p-3">No storage allowed</td>
                      <td className="p-3 text-rose-600">Identity theft &amp; cloning</td>
                      <td className="p-3">Clause 6.3 RBI Guidelines</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 7: Cyber-Extortion Architecture: Contact Shaming & Morphed Photos */}
            <section id="cyber-extortion-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Forensic Modus Operandi &amp; Cyber Extortion</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Cyber-Extortion Architecture: Contact Shaming &amp; Morphed Photos
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To fight digital loan harassment, you must know how illegal lenders operate. Predatory loan apps often offer 7-day instant cash. They use stolen mobile data to blackmail borrowers.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you install these apps, they secretly copy your contacts and photos. If an EMI is late, recovery agents use these three illegal tactics:
              </p>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-1.5">
                  <p className="text-xs font-bold text-slate-900">Mass WhatsApp Messages to Contacts</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents send threatening messages to your parents, friends, and coworkers. They lie that your contacts are loan guarantors and demand money from them.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-1.5">
                  <p className="text-xs font-bold text-slate-900">Morphed Photos and Social Shaming</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Extortionists edit your face onto obscene pictures or create fake posters calling you a thief. They send these images to your family to cause extreme shame.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-1.5">
                  <p className="text-xs font-bold text-slate-900">Fake Police Calls and Court Notices</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Call centers use fake caller IDs to pose as police officers or judges. They threaten arrest warrants to force instant UPI payments.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Criminal Penalties: BNS 2023, IT Act 2000 & DPDP Act 2023 */}
            <section id="criminal-penalties" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Penal Codes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Criminal Penalties: BNS 2023, IT Act 2000 &amp; DPDP Act 2023
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stealing phone contacts and sharing morphed photos are criminal acts. They are not civil debt matters. Victims can invoke three powerful laws against recovery agents:
              </p>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 space-y-2">
                  <span className="text-xs font-bold text-[#1886ff] block">Bharatiya Nyaya Sanhita, 2023 (BNS):</span>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-5">
                    <li>
                      <strong>Section 308 BNS (Extortion):</strong> Demanding money through threats carries jail time up to 3 years or a heavy fine.
                    </li>
                    <li>
                      <strong>Section 351 BNS (Criminal Intimidation):</strong> Threatening a person or their family carries up to 2 years imprisonment.
                    </li>
                    <li>
                      <strong>Section 356 BNS (Defamation):</strong> Spreading false claims to damage your reputation is a punishable criminal offence.
                    </li>
                    <li>
                      <strong>Section 79 BNS (Insult to Modesty):</strong> Threatening female borrowers carries rigorous jail time up to 3 years.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 space-y-2">
                  <span className="text-xs font-bold text-[#1886ff] block">Information Technology Act, 2000 (IT Act):</span>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-5">
                    <li>
                      <strong>Section 66E IT Act (Violation of Privacy):</strong> Sharing private pictures without consent carries up to 3 years jail and a ₹2 Lakh fine.
                    </li>
                    <li>
                      <strong>Section 67 IT Act (Obscene Material):</strong> Sending obscene content online carries rigorous imprisonment up to 5 years.
                    </li>
                    <li>
                      <strong>Section 43A IT Act (Data Failure):</strong> Firms that fail to protect user data must pay direct financial compensation.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 space-y-2">
                  <span className="text-xs font-bold text-[#1886ff] block">Digital Personal Data Protection Act, 2023 (DPDP Act):</span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Under Sections 6 and 8 of the DPDP Act, companies must get clear consent and protect customer data. The Data Protection Board can fine companies up to ₹250 Crores for data breaches.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Visual Blueprint: Borrower Device Privacy Protection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This infographic explains the mobile privacy rules set by the Reserve Bank of India. It shows prohibited permissions versus lawful KYC onboarding steps.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/rbi-digital-lending-rules-ban-on-accessing-contacts-photo-gallery.jpg"
                    alt="RBI Digital Lending Guidelines Ban on Contacts and Photo Gallery"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Digital Lending Privacy Blueprint &bull; RBI Circular Compliant</span>
                  <a
                    href="/images/infographics/rbi-digital-lending-rules-ban-on-accessing-contacts-photo-gallery.jpg"
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

            {/* SECTION 10: Step-by-Step SOP: 6-Stage Action Plan for Victims */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Step-by-Step SOP: 6-Stage Action Plan for Victims
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a loan app threatens to message your contacts or leak personal photos, take these six steps immediately:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    1
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900">Never Pay Extortion Demands</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Do not pay fake penalty fees or blackmail money. Paying once will only cause recovery agents to demand more cash.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    2
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900">Save All Digital Evidence</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Take clear screenshots of WhatsApp messages, phone numbers, threat texts, permission prompts, and payment slips.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    3
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900">Revoke Permissions and Uninstall the App</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Go to phone Settings &gt; Apps &gt; Permissions. Turn off camera, microphone, storage, and location access, then remove the app.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    4
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900">Warn Your Friends and Family</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Send a quick message to your contacts. Explain that a rogue app stole your address book and ask them to block unknown callers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    5
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900">File a Cyber Complaint (Dial 1930)</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Report the crime at cybercrime.gov.in or call helpline 1930. Keep your complaint number safe for legal records.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    6
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900">Get Legal Support from CredSettle</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      CredSettle sends a legal notice to the lending firm, halts recovery harassment, and negotiates a fair debt closure.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 11: 4-Tier Escalation Matrix: Institutional Redressal Hierarchy */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Dispute Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. 4-Tier Escalation Matrix: Institutional Redressal Hierarchy
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender violates RBI privacy rules, you have four official avenues to seek justice.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Redressal Tier</th>
                      <th className="p-3">Official Authority</th>
                      <th className="p-3">Response Time</th>
                      <th className="p-3">Action Taken</th>
                      <th className="p-3">Official Portal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: Internal Grievance</td>
                      <td className="p-3">Bank or NBFC Grievance Officer</td>
                      <td className="p-3">30 Days Maximum</td>
                      <td className="p-3">Internal review of agent conduct</td>
                      <td className="p-3">Official bank email or portal</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman</td>
                      <td className="p-3">After 30-Day Delay</td>
                      <td className="p-3">Penalties and user compensation</td>
                      <td className="p-3">cms.rbi.org.in</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 3: Sachet Portal</td>
                      <td className="p-3">RBI Sachet Repository</td>
                      <td className="p-3">Immediate Flagging</td>
                      <td className="p-3">Reporting unregistered fraud apps</td>
                      <td className="p-3">sachet.rbi.org.in</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 4: Cyber Police</td>
                      <td className="p-3">National Cyber Crime Cell</td>
                      <td className="p-3">Immediate Action</td>
                      <td className="p-3">Police FIR for blackmail and extortion</td>
                      <td className="p-3">cybercrime.gov.in / Dial 1930</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 12: Google Play Store & App Store Compliance Standards */}
            <section id="app-store-standards" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Smartphone className="w-4 h-4 text-[#1886ff]" />
                <span>Operating System &amp; App Ecosystem Policy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                12. Google Play Store &amp; App Store Compliance Standards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Google and Apple updated their app store rules in India to support the RBI mandate.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In April 2023, Google updated its Financial Services Policy. Under these rules, personal loan apps cannot ask for dangerous permissions:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Device Storage:</strong> Loan apps cannot read internal phone memory or downloaded files.
                </li>
                <li>
                  <strong>Photos and Videos:</strong> Apps cannot open personal photo albums or videos.
                </li>
                <li>
                  <strong>Phone Contacts:</strong> Contact access is blocked completely at the system level.
                </li>
                <li>
                  <strong>Location Tracking:</strong> Apps cannot track your precise GPS location 24/7.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-1">
                Apps that fail to prove an active license with an RBI-registered lender are permanently banned. Google has removed over 3,500 abusive loan apps from its store in India.
              </p>
            </section>

            {/* SECTION 13: Legitimate Debt Resolution: OTS vs Rogue Recovery Threats */}
            <section id="debt-resolution-ots" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Freedom &amp; One-Time Settlement</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                13. Legitimate Debt Resolution: OTS vs Rogue Recovery Threats
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers struggle with digital loan repayments due to medical issues, business loss, or job cuts. Shaming borrowers is not a legal way to recover loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI rules, every licensed bank and NBFC can offer a compromise settlement. This is called a One-Time Settlement (OTS). Borrowers in genuine financial distress can settle their dues with major waivers on interest and penalty fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle helps you resolve unpaid loans safely. Our legal team stops recovery harassment, challenges unlawful charges, and negotiates formal debt settlements directly with senior lender committees. You get an official No Dues Certificate and complete peace of mind.
              </p>
            </section>

            {/* COMPANY SECTION COMPONENT */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* FREQUENTLY ASKED QUESTIONS SECTION */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Knowledge Base &amp; Consumer Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Digital Lending Privacy Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions regarding RBI digital lending restrictions, borrower mobile privacy protections, and legal remedies against abusive recovery agents.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                          openFaq === idx ? 'rotate-180 text-[#1886ff]' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* REGULATORY CITATIONS & OUTBOUND AUTHORITIES */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory References &amp; Authoritative Citations</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Statutory Citations: Digital Lending Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India Guidelines on Digital Lending (2022):</strong> Circular DOR.CRE.REC.66/21.07.001/2022-23, Clause 6 (Technology and Data Requirements).
                </li>
                <li>
                  <strong>Information Technology Act, 2000:</strong> Section 66E (Privacy Violations) and Section 67 (Transmitting Obscene Material Electronically).
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita, 2023:</strong> Section 308 (Extortion), Section 351 (Criminal Intimidation), and Section 356 (Defamation).
                </li>
                <li>
                  <strong>Digital Personal Data Protection Act, 2023:</strong> Section 6 (Consent Architecture) and Section 8 (Obligations of Data Fiduciaries).
                </li>
                <li>
                  <strong>RBI Master Direction on Know Your Customer (KYC):</strong> Direction DBR.AML.BC.No.81/14.01.001/2015-16, Video Customer Identification Process (V-CIP).
                </li>
              </ul>

              {/* Verified Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Sachet Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal Related Guides */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/7-day-loan-app-harassment-morphed-photos" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    7-Day Loan App Harassment
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Rules
                  </Link>
                  <Link href="/police-complaint-against-bank-recovery-agent" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Complaint Against Agent
                  </Link>
                  <Link href="/police-summons-for-loan-default-rights-against-illegal-interference" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Summons for Loan Default
                  </Link>
                  <Link href="/is-it-legal-to-record-recovery-agent-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Record Recovery Calls Legal Rules
                  </Link>
                  <Link href="/services/app-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    App Loan Settlement Services
                  </Link>
                  <Link href="/how-do-digital-lending-companies-handle-loan-settlement-requests" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Digital Lending Settlement Process
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
                Senior debt resolution professional specializing in RBI compliance, digital lending regulation, cyber extortion defense, and consumer rights protection across India.
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
                  Loan App Harassing Your Contacts?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior advocates issue formal cease-and-desist notices to rogue lenders, file immediate cyber crime complaints, and stop illegal photo harassment.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Stop Harassment Now
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
                  <span>Statutory Privacy Shield &bull; 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Contact Calling:</strong> Immediate legal containment of recovery agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cyber Crime FIR Filing:</strong> Enforcement under IT Act Section 66E.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Formal reporting of regulatory breaches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Debt Closure:</strong> Direct negotiation with licensed NBFCs.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/7-day-loan-app-harassment-morphed-photos"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    7-Day Loan App Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop photo morphing and threats &rarr;</span>
                </Link>

                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Rules for Recovery Agents
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal timing and calling rules &rarr;</span>
                </Link>

                <Link
                  href="/services/app-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    App Loan Settlement Services
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official OTS with registered NBFCs &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
