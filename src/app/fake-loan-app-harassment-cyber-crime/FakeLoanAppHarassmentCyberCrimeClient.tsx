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
  RefreshCw,
  Zap,
  FileSpreadsheet,
  Smartphone,
  ShieldAlert,
  Users,
  Radio,
  EyeOff,
  FileCheck
} from 'lucide-react';

export default function FakeLoanAppHarassmentCyberCrimeClient() {
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
    { id: 'anatomy-of-fake-loan-apps', label: '1. Anatomy of Fake Loan Apps' },
    { id: 'contact-scraping-and-morphing', label: '2. Contact Scraping & Morphing' },
    { id: 'statutory-criminal-enactments', label: '3. IT Act & BNS Legal Sections' },
    { id: 'grid-comparison-legitimate-vs-illegal', label: '4. Legal vs. Illegal App Matrix' },
    { id: 'extortion-mathematics-analytics', label: '5. Extortion Risk & Scoring Math' },
    { id: 'infographic-defense-workflow', label: 'Visual 6-Step Cyber Defense' },
    { id: 'step-by-step-defense-sop', label: '6. 6-Stage Defense SOP' },
    { id: 'cyber-complaint-framework', label: '7. Cyber FIR & Legal Architecture' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'chronological-resolution-milestones', label: '9. Chronological Timelines' },
    { id: 'specialized-extortion-scenarios', label: '10. Real-World Extortion Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'How do fake loan apps steal contacts and personal photos from my phone?',
      a: 'Fake loan apps trick users during installation by demanding mandatory Android permissions for Read Contacts (READ_CONTACTS), Gallery/Media Access (READ_EXTERNAL_STORAGE), and Camera. Once granted, malicious background scripts automatically exfiltrate your entire address book, call logs, and private photos to overseas servers operated by cyber extortion syndicates.'
    },
    {
      q: 'What immediate steps should I take if an illegal loan app is blackmailing me with morphed photos?',
      a: 'Immediately take screenshots of the extortion chats, morphed images, and sender numbers. Do not delete WhatsApp chats. Do not transfer any money under blackmail. Immediately revoke all app permissions and uninstall the application. Next, broadcast a preemptive alert to your family and contacts warning them that your device was hacked by a scam syndicate, and file an instant cyber crime complaint on cybercrime.gov.in or helpline 1930.'
    },
    {
      q: 'Which sections of the IT Act and Bharatiya Nyaya Sanhita (BNS) penalize fake loan app extortion?',
      a: 'Fake loan app harassment attracts severe criminal penalties under Sections 66C (Identity Theft), 66E (Privacy Violation), 67, and 67A (Transmitting Sexually Explicit/Obscene Material) of the Information Technology Act, 2000. Under the Bharatiya Nyaya Sanhita, 2023 (BNS), it constitutes criminal extortion under Section 308, criminal intimidation under Section 351(2), and defamation under Section 356(2).'
    },
    {
      q: 'Will paying the extortion demand stop the recovery agents from harassing my family?',
      a: 'No. Paying extortion money never stops the harassment; it only accelerates it. When scammers receive money, they identify the victim as vulnerable and financially capable, prompting secondary and tertiary demands from alternate numbers for the same fake loan. Total financial disengagement combined with police reporting is the only proven method to stop the syndicate.'
    },
    {
      q: 'How do I file an online FIR on the National Cyber Crime Reporting Portal (cybercrime.gov.in)?',
      a: 'Visit cybercrime.gov.in and select \'Report Crime Related to Women/Children\' or \'Report Other Cyber Crime\'. Register with your mobile number, enter the incident details under \'Financial Fraud & Cyber Blackmail / Sextortion\', upload timestamped WhatsApp screenshots, transaction IDs, UPI VPA handles, APK download links, and caller phone numbers. You will receive an official Cyber Crime Acknowledgement Number for tracking.'
    },
    {
      q: 'Can illegal or Chinese loan apps report defaults to CIBIL, Experian, or CRIF High Mark?',
      a: 'No. Only RBI-regulated entities (Scheduled Commercial Banks and registered NBFCs) possess statutory membership in Credit Information Companies (CICs) under the CICRA Act, 2005. Unregistered 7-day loan apps have zero regulatory access to credit bureaus and cannot report defaults or damage your official CIBIL score.'
    },
    {
      q: 'Can police arrest me if a fake loan app sends a fabricated arrest warrant or legal notice?',
      a: 'No. Fake loan apps frequently forge court notices, RBI seal documents, and police arrest warrants using template editing software. The Indian police do not execute civil debt collections, and genuine legal summons are never issued via WhatsApp with immediate UPI payment demands. Forging government logos is itself a cognizable felony under Sections 336 and 340 of BNS 2023.'
    },
    {
      q: 'How can I remove an illegal loan app\'s spyware access from my Android or iOS device?',
      a: 'Go to your phone Settings > Apps & Permissions > Permission Manager. Revoke Contacts, Storage, Photos, Camera, and Microphone access for the suspect application. Force stop and uninstall the APK. For comprehensive security, clear cache partitions or perform a factory data reset after backing up uninfected documents, and reset your Google Advertising ID.'
    },
    {
      q: 'How does CredSettle assist victims trapped in illegal loan app extortion syndicates?',
      a: 'CredSettle provides institutional legal protection, digital forensic documentation, formal cyber complaint structuring under the IT Act and BNS, escalation to the RBI Sachet portal, and strategic communication protocols that insulate victims and their families from illegal recovery harassment.'
    },
    {
      q: 'What are the RBI Digital Lending Guidelines regarding loan recovery and contact access?',
      a: 'Under RBI\'s Digital Lending Guidelines, lending apps are strictly prohibited from accessing a borrower\'s mobile contacts, phone media files, call logs, or biometric data. Furthermore, loans must be disbursed and serviced directly through the bank account of the regulated entity without any pass-through or third-party pool accounts.'
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Fake Loan App Harassment &amp; Cyber Crime
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Are illegal loan apps morphing your photos and harassing your contacts? Learn how to file a cyber crime FIR, invoke statutory protections under the IT Act and BNS, and permanently stop digital blackmail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Digital Harassment: File a Complaint</span>
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
                  <span>Cyber Crime Legal Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under IT Act 2000, BNS 2023 &amp; RBI Digital Lending Directions.
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
                <span>EXECUTIVE BRIEF: FAKE LOAN APP EXTORTION &amp; CYBER REMEDIES</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Unregulated Cross-Border Extortion Syndicates:</strong> Predatory 7-day loan applications operate without Reserve Bank of India (RBI) registration or Non-Banking Financial Company (NBFC) licensing. They use deceptive APK side-loading and unverified digital payment gateways to distribute micro-advances with 50% to 120% upfront deductions.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Cognizable Cyber Felonies under IT Act &amp; BNS:</strong> Scraping mobile contacts, creating deepfake synthetic media, and circulating morphed pornographic imagery constitute severe criminal offenses under Sections 66C, 66E, 67, and 67A of the Information Technology Act, 2000, alongside Sections 308 (Extortion), 351(2) (Criminal Intimidation), and 356(2) (Defamation) of the Bharatiya Nyaya Sanhita, 2023.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Legitimate Credit Bureau Footprint:</strong> Illegal Chinese loan apps have no statutory access to Credit Information Companies (CICs) like CIBIL, Experian, Equifax, or CRIF High Mark under CICRA 2005. Threats of ruining credit scores or generating civil recovery warrants are entirely fabricated.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">The Cardinal Rule of Extortion Disengagement:</strong> Paying extortion money never stops the harassment; it establishes financial solvency and invites multi-origin blackmail. Complete communication cut-off, preemptive contact broadcasting, National Cyber Crime Portal (1930) reporting, and legal containment are the only verified solutions.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Anatomy of Predatory 7-Day Loan Apps */}
            <section id="anatomy-of-fake-loan-apps" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Smartphone className="w-4 h-4 text-[#1886ff]" />
                <span>Syndicate Infrastructure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Anatomy of Predatory 7-Day Loan Apps &amp; Chinese Extortion Syndicates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The rapid expansion of instant micro-credit in India has spawned a sprawling shadow industry of illegal loan applications—commonly known as <strong>7-day Chinese loan apps</strong>. These entities are not legitimate lending platforms; they are structured digital extortion rackets operated by international cyber syndicates using shell corporate entities, untraceable cloud servers, and local mule bank accounts.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unlike legitimate financial institutions governed by the <strong>Reserve Bank of India (RBI) Digital Lending Guidelines (DLG)</strong>, these rogue apps operate through side-loaded Android Package Kits (APKs), spoofed social media advertisements, and short-lived web portals. They lure financially stressed borrowers with advertisements promising <em>instant no-document cash</em> of ₹3,000 to ₹10,000 disbursed in 60 seconds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Zap className="w-4 h-4" />
                    <span>Usurious Advance Deductions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A sanctioned loan of ₹5,000 results in only ₹2,800 to ₹3,200 disbursed into the borrower&apos;s account, with ₹1,800 to ₹2,200 deducted upfront as bogus &quot;processing&quot; or &quot;technology&quot; fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-indigo-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Hyper-Compressed Tenures</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    While advertised as 90-day loans, the application resets repayment to exactly 6 or 7 days, demanding 100% principal repayment plus compounding penal interest of 300% to 1,000% annualized.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-rose-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Mule Payment Gateways</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Repayment collections are routed through hundreds of revolving UPI Virtual Payment Addresses (VPAs) and rented bank accounts to evade cyber tracking and launder funds out of jurisdiction.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Regulatory Non-Compliance:</strong> These applications fail every statutory mandate outlined in the RBI Master Directions on Digital Lending. They operate without a named Regulated Entity (RE), provide no Key Fact Statement (KFS), lack a Grievance Redressal Officer (GRO), and do not maintain statutory registration under Section 45-IA of the RBI Act, 1934.
                </p>
              </div>
            </section>

            {/* SECTION 2: Contact Scraping, Image Morphing & Synthetic Blackmail Tactics */}
            <section id="contact-scraping-and-morphing" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <EyeOff className="w-4 h-4 text-[#1886ff]" />
                <span>Attack Vectors &amp; Cyber Weaponry</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Contact Scraping, Image Morphing &amp; Synthetic Deepfake Extortion
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The primary weapon of fake loan apps is not civil litigation or judicial recovery; it is <strong>digital extortion and psychological terror</strong>. During the installation phase, the malicious APK executes automated permissions exploits designed to harvest sensitive personal data from the victim&apos;s smartphone:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#1886ff]" />
                    Total Contact Book Exfiltration
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    By mandating the <code>READ_CONTACTS</code> and <code>READ_CALL_LOG</code> Android permissions, the app uploads the borrower&apos;s complete address book—including parents, spouses, siblings, employers, and social acquaintances—directly to command-and-control servers. The syndicate identifies high-value social relations (such as contacts labeled &quot;Dad&quot;, &quot;Boss&quot;, or &quot;Wife&quot;) for targeted harassment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Radio className="w-4 h-4 text-purple-600" />
                    Private Gallery Scraping &amp; AI Image Morphing
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Through <code>READ_EXTERNAL_STORAGE</code> and live selfie KYC requirements, the scammers obtain high-resolution facial images of the victim and their family members. Using automated face-swapping software and generative AI models, the syndicate splices the victim&apos;s face onto obscene, pornographic, or compromising visual media.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <BadgeAlert className="w-4 h-4 text-rose-600" />
                    WhatsApp Defamation Groups &amp; Social Sabotage
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    On Day 5 or 6 (often prior to any real due date), recovery callers initiate aggressive WhatsApp messaging. They create group chats titled &quot;Fraud Defaulter Alert&quot; containing the victim&apos;s colleagues and relatives, threatening to broadcast the morphed pornographic media unless a ransom payment is made via an unverified UPI handle within 15 minutes.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: Statutory Criminal Enactments */}
            <section id="statutory-criminal-enactments" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Criminal Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Statutory Criminal Enactments: IT Act, 2000 &amp; Bharatiya Nyaya Sanhita (BNS), 2023
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                It is crucial for victims to recognize that the actions of fake loan app operators are not commercial civil disputes; they are <strong>serious criminal felonies</strong> punishable with rigorous imprisonment under Indian cyber and criminal statutes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-[#1886ff] flex items-center gap-2">
                    <Gavel className="w-4 h-4" />
                    Information Technology Act, 2000
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <li className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="text-slate-900">Section 66C (Identity Theft):</strong> Fraudulent or dishonest use of electronic signatures, passwords, or personal data. Up to 3 years imprisonment and fine.
                    </li>
                    <li className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="text-slate-900">Section 66E (Privacy Violation):</strong> Capturing, publishing, or transmitting images of private areas without consent. Up to 3 years imprisonment or ₹2 Lakh fine.
                    </li>
                    <li className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="text-slate-900">Section 67 (Publishing Obscene Material):</strong> Transmitting obscene material electronically. First conviction: up to 3 years; repeat: up to 5 years.
                    </li>
                    <li className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="text-slate-900">Section 67A (Sexually Explicit Acts):</strong> Transmitting sexually explicit material electronically. Non-bailable, up to 5 years imprisonment for first offense.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-indigo-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-indigo-700 flex items-center gap-2">
                    <Gavel className="w-4 h-4" />
                    Bharatiya Nyaya Sanhita, 2023 (BNS)
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <li className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="text-slate-900">Section 308 (Extortion):</strong> Intentionally putting any person in fear of injury to extort property or valuable security. Rigorous imprisonment up to 3 years.
                    </li>
                    <li className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="text-slate-900">Section 351(2) (Criminal Intimidation):</strong> Threatening injury to reputation or property. Up to 2 years imprisonment, fine, or both.
                    </li>
                    <li className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="text-slate-900">Section 356(2) (Defamation):</strong> Publishing defamatory statements with intent to harm reputation. Up to 2 years imprisonment with fine.
                    </li>
                    <li className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="text-slate-900">Sections 336 &amp; 340 (Forgery &amp; Fraudulent Seals):</strong> Forging government notices or court warrants. Cognizable offense up to 7 years.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 4: Grid Comparison Table */}
            <section id="grid-comparison-legitimate-vs-illegal" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileSpreadsheet className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Comparative Legal Grid: Legitimate RBI-Registered NBFCs vs. Rogue Loan Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Distinguish the operational, legal, and regulatory parameters governing genuine digital lenders versus illegal extortion apps:
              </p>

              {/* TABLE WITH BOTH VERTICAL AND HORIZONTAL LINES (GRID) */}
              <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800 border-b border-slate-300">
                    <tr>
                      <th className="p-3.5 font-bold border-r border-b border-slate-300">Feature / Regulatory Parameter</th>
                      <th className="p-3.5 font-bold border-r border-b border-slate-300 text-emerald-800">RBI-Registered Bank / NBFC</th>
                      <th className="p-3.5 font-bold border-b border-slate-300 text-rose-800">Illegal 7-Day / Chinese Loan App</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-b border-slate-300">Statutory Licensing</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border-r border-b border-slate-300">Mandatory RBI Certificate of Registration (CoR)</td>
                      <td className="p-3.5 text-rose-700 font-semibold border-b border-slate-300">Zero RBI registration; unverified overseas shell entity</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-b border-slate-300">Mobile Phone Permissions</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Strictly no contact list, gallery, or call log access (RBI DLG)</td>
                      <td className="p-3.5 text-rose-700 border-b border-slate-300">Enforces full contact scraping, media, and camera access</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-b border-slate-300">Repayment Tenure &amp; APR</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Minimum 3 months to several years; transparent APR in KFS</td>
                      <td className="p-3.5 text-rose-700 border-b border-slate-300">6 to 7 days tenure; 300% to 1,200% annualized interest</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-b border-slate-300">Disbursement &amp; Repayment Mechanism</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Directly via borrower&apos;s bank account (NACH / e-NACH)</td>
                      <td className="p-3.5 text-rose-700 border-b border-slate-300">Dispersed personal UPI VPAs, mule accounts, and crypto links</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-b border-slate-300">CIBIL / Credit Bureau Reporting</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border-r border-b border-slate-300">Statutory monthly reporting to 4 CICs under CICRA 2005</td>
                      <td className="p-3.5 text-rose-700 font-semibold border-b border-slate-300">Zero access to CIBIL / Experian; cannot report default</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-300">Recovery &amp; Grievance Redressal</td>
                      <td className="p-3.5 border-r border-slate-300">Governed by RBI Fair Practices Code &amp; RBI Ombudsman</td>
                      <td className="p-3.5 text-rose-700 font-bold">Unlawful extortion, morphed pornography, and social blackmail</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Extortion Mathematics & Data Exposure Risk Analytics */}
            <section id="extortion-mathematics-analytics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Extortion Risk Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Extortion Risk Analytics: Why Paying Blackmail Accelerates Harassment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many victims erroneously assume that paying off the demanded sum (e.g., ₹5,000 to ₹10,000) will permanently resolve the issue and delete their contact records. In cyber extortion operations, <strong>payment is interpreted as high compliance and panic</strong>, triggering automated escalation algorithms across partner syndicates:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-rose-600" />
                    The Extortion Multiplier Cycle (Paying Ransom)
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Initial Advance Disbursed:</span>
                      <span className="font-bold text-slate-900">₹3,200 (₹1,800 cut)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Day 6 Ransom Paid under Fear:</span>
                      <span className="font-bold text-slate-900">₹5,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Day 7 &quot;Unclosed File Fee&quot; Demand:</span>
                      <span className="font-bold text-rose-600">₹8,500</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Automated Micro-Deposit from Clone App:</span>
                      <span className="font-bold text-rose-600">₹2,000 (Unsolicited)</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Total Loss in 30 Days (Compliant Victim):</span>
                      <span className="text-rose-700">₹45,000 – ₹1,20,000+</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    The Disengagement &amp; Legal Shield Model
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Total Additional Ransom Paid:</span>
                      <span className="font-bold text-emerald-700">₹0.00 (Zero Rupee Policy)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Preemptive Contact Alert Broadcast:</span>
                      <span className="font-bold text-slate-900">Neutralizes 95% Social Leverage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>National Cyber Crime FIR Acknowledgement:</span>
                      <span className="font-bold text-emerald-700">Official Statutory Defense Record</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Call Volume Drop-Off (Total Disengagement):</span>
                      <span className="font-bold text-slate-900">Ceases within 72 to 120 Hours</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Permanent Credit Bureau Impact:</span>
                      <span className="text-emerald-700">0.00 Points (Zero Bureau Access)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: Embedded 16:9 Infographic Banner */}
            <section id="infographic-defense-workflow" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Step Cyber Harassment Defense Blueprint
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Refer to this structured 6-stage procedural roadmap designed by cyber law and debt resolution professionals to neutralize extortion, preserve digital evidence, and file statutory complaints:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/fake-loan-app-harassment-cyber-crime.jpg"
                    alt="Stop Fake Loan App Harassment 6-Step Cyber Defense Blueprint Infographic"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Information Technology Act &amp; BNS 2023</span>
                  <a
                    href="/images/infographics/fake-loan-app-harassment-cyber-crime.jpg"
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

            {/* SECTION 7: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Defense SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Standard Operating Procedure (SOP): 6 Stages to Neutralize Fake Loan App Extortion
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this battle-tested, sequential protocol immediately upon facing threats or contact harassment from illegal lending apps:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Immediate: Hours 0–2</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Forensic Evidence Preservation &amp; Screenshot Capture
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Capture full-screen, timestamped screenshots of every WhatsApp message, SMS threat, call log, UPI payment request, and morphed image. Ensure the caller&apos;s full international or virtual mobile number is clearly visible on the screen. Export and backup the WhatsApp chat archive before blocking the number. Note down bank account transaction IDs (UTR numbers) of the initial disbursement.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Hours 2–4</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Device Quarantine &amp; Spyware Permission Revocation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Open your smartphone settings: <code>Settings &gt; Apps &gt; Permission Manager</code>. Revoke Contacts, Camera, Storage/Media, Location, and SMS permissions for all suspicious or recently downloaded applications. Force-stop and uninstall the APK. Reset your Google Advertising ID. For complete safety, perform a clean factory data reset after backing up personal documents.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Hours 4–8</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Preemptive Social &amp; Contact Shield Warning Broadcast
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Take away the scammer&apos;s primary leverage—fear of social embarrassment—by proactively warning your contacts. Post a WhatsApp status and broadcast message stating: <em>&quot;Important Security Alert: My mobile phone contacts and gallery were recently compromised by a cyber malware application. Cyber extortionists are sending fake, morphed images and defamatory messages from unknown numbers. Please block and report any such calls immediately. An official police cyber complaint has been registered.&quot;</em>
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Hours 8–24</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    National Cyber Crime Reporting Portal (1930) FIR Lodgment
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Dial the National Cyber Financial Helpline <strong>1930</strong> immediately. Log on to <strong>cybercrime.gov.in</strong> and lodge a formal complaint under &quot;Report Cyber Crime Related to Women/Children&quot; (for morphed explicit media) or &quot;Report Other Cyber Crime&quot;. Attach all preserved screenshots, UPI VPA IDs, APK file hashes, and sender phone numbers. Obtain your official Acknowledgement Number.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 2–3</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    RBI Sachet Portal &amp; Banking Ombudsman Escalation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    File an institutional complaint on the <strong>RBI Sachet Portal (sachet.rbi.org.in)</strong> against the unauthorized digital lending entity. If the scammer used a legitimate Indian bank or payment gateway merchant account to collect payments, report those mule bank accounts to the respective bank&apos;s Principal Nodal Officer (PNO) to trigger account freezing under anti-money laundering regulations.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 3–7</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Total Financial Disengagement &amp; Communication Blackout
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Adopt complete, uncompromising disengagement. Do not answer calls from unknown numbers, do not negotiate settlement amounts, and never transfer a single rupee. Enable spam blocking on your smartphone (e.g., Truecaller / Google Phone spam protection). Once scammers realize you are legally fortified, unresponsive, and have warned your contact circle, they abandon the file within 3 to 5 days to target vulnerable victims.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Cyber Crime Complaint Architecture & Evidentiary Preservation */}
            <section id="cyber-complaint-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Complaint Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Cyber Crime Complaint Architecture &amp; Evidentiary Preservation Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The institutional mechanism for prosecuting fake loan app syndicates requires strict compliance with evidentiary protocols under the Bharatiya Sakshya Adhiniyam, 2023 (BSA), formerly Section 65B of the Indian Evidence Act. When a victim approaches the cyber police or lodges an electronic petition on the National Cyber Crime Reporting Portal (cybercrime.gov.in), the administrative viability of the complaint depends on the precision of digital forensic logging. The complainant must methodically archive every transaction log, unedited chat export, network timestamp, and APK manifest rather than submitting fragmented or cropped images.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A legally sound cyber crime petition establishes the jurisdictional elements of digital extortion under Section 308 of the Bharatiya Nyaya Sanhita, 2023, while simultaneously invoking Section 66E for privacy infringement and Section 67A of the Information Technology Act for the circulation of sexually explicit content. By articulating that the transaction originated from an unauthorized non-banking entity operating in violation of the RBI Master Direction on Digital Lending (RBI/2022-23/111), the complaint legally categorizes the demanded payment not as a civil contractual obligation, but as extortionate proceeds of crime under the Prevention of Money Laundering Act (PMLA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, the complainant should formally request the Cyber Cell investigating officer to issue urgent notices under Section 91 of the Code of Criminal Procedure (Section 94 of BNSS) to the associated payment aggregators and telecom service providers. This statutory directive compels the immediate preservation of IP address logs, Virtual Payment Address (VPA) transaction histories, and Call Detail Records (CDR) of the extortionist caller pool. Once an official Cyber Crime Acknowledgement Number is generated, it serves as an immutable legal shield against any fraudulent legal notices or synthetic arrest threats issued by the recovery operators.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In instances where malicious recovery personnel have initiated contact with third-party acquaintances, providing a certified copy of the cyber police acknowledgement to concerned family members immediately restores reputational integrity. Law enforcement authorities across multiple states—including Telangana, Maharashtra, Karnataka, and Delhi Cyber Cells—have established dedicated special task forces to dismantle these multi-tier call center operations and initiate frozen asset recovery for affected citizens.
              </p>
            </section>

            {/* SECTION 9: 3-Tier Institutional Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Escalation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Escalation Matrix: From App Stores to RBI &amp; Cyber Police
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Execute a structured, multi-tier escalation across technical, policing, and central banking authorities to dismantle the syndicate:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Tier 1: Device, Platform &amp; App Store Takedown
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Immediate Technical Layer</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Google Play Protect, Apple App Store &amp; MeitY Takedown Notices
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit an abuse report on the Google Play Store or Apple App Store flagging the app for malware, predatory lending, and privacy violations. If the app was installed via a third-party website, submit a URL takedown request to the Ministry of Electronics and Information Technology (MeitY) via <strong>cert-in.org.in</strong>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Tier 2: State Cyber Police &amp; National Cyber Portal
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Law Enforcement Layer</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Helpline 1930 &amp; cybercrime.gov.in Online Police FIR
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Lodge a formal electronic FIR on the National Cyber Crime Reporting Portal. Provide complete digital forensic evidence (call logs, UPI VPAs, WhatsApp screenshots). Contact your District Cyber Police Station or Cyber Crime Cell to request immediate freezing of the extortionists&apos; mule accounts under Section 102 CrPC (Section 107 BNSS).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Tier 3: Reserve Bank of India &amp; Financial Intelligence Unit
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Central Banking Layer</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    RBI Sachet Portal &amp; Integrated Banking Ombudsman (cms.rbi.org.in)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Escalate unauthorized lending entities to the <strong>RBI Sachet Portal (sachet.rbi.org.in)</strong>. If a regulated NBFC is found leasing its license or co-lending arrangement to an illegal entity in violation of RBI DLG, file a complaint on the RBI CMS portal for license cancellation and punitive sanctions.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Chronological Extortion Resolution Milestones */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Resolution Milestones: What to Expect in 30 Days
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understand the institutional timeline following total disengagement, preemptive contact broadcasting, and cyber crime lodgment:
              </p>

              {/* TABLE WITH BOTH VERTICAL AND HORIZONTAL LINES (GRID) */}
              <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800 border-b border-slate-300">
                    <tr>
                      <th className="p-3.5 font-bold border-r border-b border-slate-300">Timeframe</th>
                      <th className="p-3.5 font-bold border-r border-b border-slate-300">Harassment &amp; Extortion Activity</th>
                      <th className="p-3.5 font-bold border-r border-b border-slate-300">Victim Action Protocol</th>
                      <th className="p-3.5 font-bold border-b border-slate-300 text-[#1886ff]">Legal &amp; Institutional Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-b border-slate-300">Day 0 (Initial Threat)</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Aggressive WhatsApp threats, fake police warrants, morphed photo previews</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Capture screenshots, do not pay, revoke permissions, uninstall app</td>
                      <td className="p-3.5 border-b border-slate-300">Evidence locked; zero payment made</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-b border-slate-300">Days 1–2 (Peak Pressure)</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Calls from 10–20 virtual numbers; possible WhatsApp group attempts</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Broadcast warning to contacts; lodge 1930 &amp; cybercrime.gov.in FIR</td>
                      <td className="p-3.5 border-b border-slate-300">Official Cyber Acknowledgement generated; social leverage broken</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-b border-slate-300">Days 3–5 (De-escalation)</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Call frequency drops by 80%; discount offers (&quot;Pay ₹1,000 and close&quot;)</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Maintain 100% blackout; do not respond to discount offers</td>
                      <td className="p-3.5 border-b border-slate-300">Scammers classify file as unrecoverable / hardened</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-b border-slate-300">Days 7–14 (Cessation)</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Occasional sporadic automated SMS or automated robocalls</td>
                      <td className="p-3.5 border-r border-b border-slate-300">Keep spam filters active; ignore all unsolicited micro-credits</td>
                      <td className="p-3.5 border-b border-slate-300">Syndicate closes tracking on borrower</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-300">Days 30+ (Resolution)</td>
                      <td className="p-3.5 border-r border-slate-300">Zero contact; complete cessation of harassment</td>
                      <td className="p-3.5 border-r border-slate-300">Check official CIBIL report (verify zero impact); resume normalcy</td>
                      <td className="p-3.5 text-emerald-700 font-bold">100% Harassment-Free; credit score completely intact</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-extortion-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Extortion Scenarios &amp; Strategic Solutions
              </h2>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    Scenario A: Morphed Obscene Photos Sent to Family Contacts
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    <strong>Challenge:</strong> The extortionist shares a sexually explicit morphed image of the borrower with their spouse, parents, or colleagues on WhatsApp.
                  </p>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold">
                    <strong>Solution:</strong> File an immediate complaint under Section 67A of the IT Act (non-bailable offense) on cybercrime.gov.in. Provide your family with the FIR acknowledgement. WhatsApp allows immediate reporting of the offending number for child exploitation/nudity violations, triggering automated device bans by Meta.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    Scenario B: Fake Police Warrants, CBI Notices &amp; Court Summons
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    <strong>Challenge:</strong> Scammers send high-resolution PDF documents bearing the Indian National Emblem, Supreme Court seals, or Delhi Police letterheads demanding immediate payment to avoid arrest.
                  </p>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold">
                    <strong>Solution:</strong> Indian police and judicial courts never serve legal summons via WhatsApp demanding UPI transfers. Forging government emblems is a cognizable felony under the State Emblem of India (Prohibition of Improper Use) Act, 2005 and Section 336 BNS. Report the forgery directly to the cyber cell.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-purple-600" />
                    Scenario C: Unsolicited Micro-Credits Credited Without Consent
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    <strong>Challenge:</strong> After uninstalling the app, an unknown account deposits ₹1,500 or ₹2,000 into your bank account and demands ₹4,000 seven days later.
                  </p>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold">
                    <strong>Solution:</strong> Immediately notify your bank in writing that an unsolicited credit was deposited by an unknown party and request them to place the funds in a suspense account or return to remitter. File a cyber complaint stating forced micro-crediting. Never pay the demanded penalty.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#1886ff]" />
                    Scenario D: Multi-App Entrapment Loop (Overlapping 7-Day Apps)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    <strong>Challenge:</strong> The borrower downloaded 8 to 15 different apps to repay previous apps, leading to ₹2 Lakhs in rolling daily extortion demands.
                  </p>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold">
                    <strong>Solution:</strong> Stop the chain immediately. Do not borrow from App B to pay App A. Execute an across-the-board total financial disengagement, broadcast your security warning, and file a consolidated cyber petition listing all app names, APKs, and UPI VPA IDs.
                  </p>
                </div>
              </div>
            </section>

            {/* COMPANY SECTION */}
            <CompanySection />

            {/* SECTION 12: Collapsible Interactive FAQ Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Fake Loan App Cyber Defense
              </h2>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors text-xs sm:text-sm md:text-base"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Regulatory Citations & Outbound Authority Links */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority &amp; Government Citations</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Official Cyber Crime &amp; Regulatory Resource Directory
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Official government portals, statutory reporting databases, and central banking complaint channels:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1 text-xs">
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">
                      National Cyber Crime Portal
                    </strong>
                    <span className="text-slate-500 text-[11px]">cybercrime.gov.in (MHA Online FIR)</span>
                  </div>
                </a>

                <a
                  href="https://sachet.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">
                      RBI Sachet Portal
                    </strong>
                    <span className="text-slate-500 text-[11px]">sachet.rbi.org.in (Illegal Lenders)</span>
                  </div>
                </a>

                <a
                  href="https://www.meity.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">
                      MeitY Cyber Laws
                    </strong>
                    <span className="text-slate-500 text-[11px]">meity.gov.in (IT Act 2000 &amp; Rules)</span>
                  </div>
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">
                      RBI Integrated Ombudsman
                    </strong>
                    <span className="text-slate-500 text-[11px]">cms.rbi.org.in (Digital Lending DLG)</span>
                  </div>
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">
                      TransUnion CIBIL India
                    </strong>
                    <span className="text-slate-500 text-[11px]">cibil.com (CICRA 2005 Compliance)</span>
                  </div>
                </a>
              </div>
            </section>

            {/* SECTION 14: 10 Internal Topic Badges */}
            <section className="pt-2 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                Related Legal Defense &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <Link
                  href="/7-day-loan-app-harassment-morphed-photos"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                >
                  7 Day Loan App Morphed Photos
                </Link>
                <Link
                  href="/recovery-agent-sending-morphed-images"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                >
                  Morphed Image Legal Action
                </Link>
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                >
                  RBI Recovery Agent Guidelines
                </Link>
                <Link
                  href="/stop-recovery-agent-harassment"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                >
                  Stop Recovery Harassment
                </Link>
                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                >
                  Section 25 NACH Bounce Notice
                </Link>
                <Link
                  href="/section-138-cheque-bounce-personal-loan"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/lok-adalat-personal-loan-settlement"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                >
                  Lok Adalat Debt Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                >
                  Personal Loan Settlement
                </Link>
                <Link
                  href="/convert-settled-status-to-closed"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                >
                  Convert Settled to Closed Status
                </Link>
                <Link
                  href="/dispute-wrong-settled-status-cibil"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                >
                  Dispute Wrong CIBIL Entry
                </Link>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#1886ff] font-extrabold text-lg flex-shrink-0">
                  AJ
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Ashish Jhangra</h3>
                  <p className="text-xs text-slate-500 font-medium">Legal &amp; Debt Resolution Professional</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Specialist in cyber debt harassment defense, statutory digital lending compliance, and RBI Ombudsman resolution frameworks across India.
              </p>
            </div>

            {/* Card 2: Emergency CTA Card */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white p-5 sm:p-6 shadow-md space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase">
                <Lock className="w-3 h-3 text-white" />
                <span>100% Confidential Support</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black leading-tight">
                Facing Fake Loan App Blackmail?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Do not pay extortion money. Get instant institutional legal protection, cyber FIR filing assistance, and stop harassment calls permanently.
              </p>
              <Link
                href="/contact"
                className="w-full py-3 bg-white text-blue-900 hover:text-[#1886ff] hover:bg-slate-50 rounded-xl font-extrabold text-xs sm:text-sm text-center block transition-all shadow-sm"
              >
                Stop Digital Harassment: File a Complaint
              </Link>
              <div className="pt-2 border-t border-white/15 text-center">
                <a
                  href="tel:+918800226635"
                  className="text-xs font-bold text-white/90 hover:text-white inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Commitments */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs text-slate-600">
              <h4 className="font-bold text-slate-900 text-sm">CredSettle Trust Commitments</h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> 100% transparent legal advisory and protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> No mediator accounts; 100% legitimate settlement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> Direct enforcement of central banking norms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/7-day-loan-app-harassment-morphed-photos"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    7 Day Loan App Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Morphed photos &amp; cyber defense &rarr;</span>
                </Link>

                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Rules for Recovery Agents
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal timing &amp; harassment bounds &rarr;</span>
                </Link>

                <Link
                  href="/stop-recovery-agent-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Recovery Agent Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Complete protection protocol &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
