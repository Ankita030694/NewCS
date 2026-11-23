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
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function UnknownNbfcCkycFraudClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Quick Answer' },
    { id: 'why-nbfc-downloaded-ckyc', label: '1. Why an Unknown NBFC Pulled CKYC' },
    { id: 'legal-framework-ckyc', label: '2. RBI KYC, PMLA & DPDP Laws' },
    { id: 'ckyc-lock-myth-vs-reality', label: '3. Can You Lock CKYC? OTP vs Aadhaar' },
    { id: 'spot-fake-loan-misuse', label: '4. CKYC Pulls vs CIBIL Inquiries' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 72-Hour Fraud Defense SOP' },
    { id: 'court-precedents-rights', label: '7. Court Rulings & Zero Liability' },
    { id: 'escalation-matrix', label: '8. 4-Tier Escalation Matrix' },
    { id: 'timelines-penalties', label: '9. Timelines & Rs 100/Day Rule' },
    { id: 'common-mistakes-scenarios', label: '10. Common Traps & Partner NBFCs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Official Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'Why did I get an SMS that an unknown NBFC downloaded my CKYC record?',
      a: 'CERSAI sends an SMS alert each time a bank or NBFC fetches your Central KYC profile. This can happen when you sign up on a fintech or Pay Later app backed by a partner NBFC, when a lender makes a data entry mistake, or when a scammer misuses your PAN or KYC details.'
    },
    {
      q: 'Can an NBFC legally download my CKYC record without my consent?',
      a: 'No. Under the RBI Master Direction on KYC (RBI/DBR/2015-16/18) and the DPDP Act 2023, an NBFC must get your explicit consent before downloading your CKYC record. Pulling records without valid consent breaks RBI and CERSAI rules.'
    },
    {
      q: 'Does a CKYC download mean a fake personal loan is already active in my name?',
      a: 'Not always. A CKYC pull is an identity check step, not a final loan approval. Still, you should check your CIBIL, Experian, Equifax, and CRIF High Mark reports right away to rule out new loan inquiries or fake accounts.'
    },
    {
      q: 'Can I directly lock or freeze my CKYC record on the CERSAI portal?',
      a: 'No. Individuals do not get a manual freeze button on ckycindia.in. Instead, CERSAI uses an OTP-based consent gate to block silent downloads. For extra safety, lock your Aadhaar biometrics and Aadhaar number on the UIDAI mAadhaar app.'
    },
    {
      q: 'How can I find my 14-digit CKYC number and inspect my CKYC card?',
      a: 'Give a missed call to 7799022129 from your registered mobile number to get your 14-digit CKYC Identifier by SMS. You can also view or download your CKYC card on ckycindia.in or DigiLocker after OTP verification.'
    },
    {
      q: 'Does an unauthorized CKYC download lower my CIBIL credit score?',
      a: 'A CKYC fetch alone does not drop your CIBIL score. However, if the NBFC also runs a hard credit check or opens a fake loan account using your PAN, your CIBIL score can fall sharply.'
    },
    {
      q: 'How do I report an unknown NBFC to CERSAI and the RBI?',
      a: 'First email the NBFC Nodal Officer listed on ckycindia.in and ask for consent proof. If they do not reply clearly, email helpdesk@ckycindia.in with your SMS screenshot, and escalate to the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'What if I find a fake personal loan on my CIBIL report after the CKYC alert?',
      a: 'File an online complaint at cybercrime.gov.in or call 1930 immediately. Next, send the complaint receipt to the NBFC and raise a fraud dispute with all four credit bureaus. Do not pay any EMI on a loan you never took.'
    },
    {
      q: 'Can I claim Rs 100 per day compensation if the NBFC delays removing a fake loan?',
      a: 'Yes. Under RBI Circular RBI/2023-24/72 dated October 26, 2023, banks, NBFCs, and credit bureaus must resolve credit report disputes within 30 calendar days. If they miss this deadline, they must pay you Rs 100 per day of delay.'
    },
    {
      q: 'How does CredSettle help victims of unauthorized CKYC pulls and loan fraud?',
      a: 'CredSettle drafts formal legal notices to the NBFC Nodal Officer, audits credit bureau reports, files RBI Ombudsman escalations, halts recovery calls, and helps remove fake loans or settle disputed balances safely.'
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
            <span>RBI Master Direction on KYC &amp; CERSAI CKYCRR Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Audit &amp; Lock CKYC Alerts From Unfamiliar Lending Apps
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Got an SMS saying an unknown NBFC downloaded your CKYC record? Check your credit report fast, demand consent logs under RBI rules, lock Aadhaar biometrics, and stop fake personal loans before they hurt your CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Unauthorized Loan Misuse</span>
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
                  <span>Statutory Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI KYC Master Direction, PML Rules 2005, DPDP Act 2023, and BNS 2023.
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
                <span>EXECUTIVE BRIEF: UNKNOWN NBFC CKYC DOWNLOAD ALERT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Explicit Consent Is Mandatory:</strong> Under RBI KYC rules and the DPDP Act 2023, no NBFC may pull your CKYC file without clear, logged consent.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">First Check Partner Apps:</strong> Many unknown NBFC alerts come from backend lenders inside UPI, Pay Later, wallet, or shopping EMI apps.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Direct CKYC Freeze Button:</strong> CERSAI blocks silent pulls using OTP consent gates, while UIDAI lets you lock Aadhaar biometrics and your Aadhaar number.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Act Fast Within 72 Hours:</strong> Pull your CIBIL report, email the NBFC Nodal Officer for consent logs, and report fraud at 1930 or cybercrime.gov.in.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Rs 100/Day Delay Penalty:</strong> If a fake loan appears on CIBIL and is not fixed within 30 days, RBI rules mandate Rs 100 per day compensation.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="why-nbfc-downloaded-ckyc" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Understanding CERSAI SMS Notifications</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Did an Unknown NBFC Download Your CKYC Record?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CKYC stands for Central Know Your Customer. CERSAI runs this central record store for banks, NBFCs, insurers, and mutual funds across India. Once you finish KYC at one bank, you get a 14-digit CKYC Identifier (KIN).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Whenever any bank or NBFC fetches your CKYC file, CERSAI sends an SMS alert to your phone. Seeing a strange company name in that alert feels scary. Yet not every unknown alert means a scammer stole your identity.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Often, a consumer app hides its real lending partner in fine print. For example, a shopping app, Buy Now Pay Later wallet, or quick credit check may link to a backend NBFC you never heard of. Checking a &quot;pre-approved&quot; loan banner or EMI offer can also trigger a KYC pull.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At other times, the alert points to real danger. A scammer may have your leaked PAN and date of birth from a fake job site or rogue app. A shady loan agent may also reuse your old forms to apply for loans without asking you.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="legal-framework-ckyc" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Legal Framework: RBI KYC, PMLA &amp; DPDP Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law places strict walls around your KYC data. Lenders cannot browse or store your CKYC profile just to market loans. Five core laws protect you when an unknown NBFC touches your record.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Master Direction on KYC (2016)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Circular RBI/DBR/2015-16/18 sets the core rule for banks and NBFCs. A lender can fetch your CKYC file only when you share your KIN with explicit consent. Pulling data with zero consent breaches RBI rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>PML Rules 2005 (Rule 9 &amp; Rule 9A)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rule 9A creates the Central KYC Records Registry under CERSAI. Rule 9(1F) bars lenders from using fetched KYC files for any goal outside identity checks. Section 12 of PMLA also demands strict secrecy.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Digital Lending Directions, 2025</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued on May 8, 2025 (RBI/DOR/2025-26/136), these rules cover all NBFC loan apps. Apps must log clear user consent with an audit trail. Borrowers also hold the right to cancel consent and delete app data.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Lock className="w-4 h-4" />
                    <span>DPDP Act 2023, IT Act &amp; BNS 2023</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 6 of the DPDP Act demands clear consent, and Section 12 gives you data erasure rights. If someone steals your ID for a fake loan, IT Act Sections 66C and 66D and BNS Sections 318 and 319 apply.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="ckyc-lock-myth-vs-reality" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Lock className="w-4 h-4 text-[#1886ff]" />
                <span>Technical Controls &amp; Real Protection Layers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Can You Lock CKYC? OTP Consent vs Aadhaar Lock
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many online posts tell users to click a &quot;Lock CKYC&quot; button on the CERSAI site. In reality, CERSAI does not offer a manual freeze switch for citizens on ckycindia.in. Only regulated entities can upload or update records.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                So how do you stop silent downloads? CERSAI enforces an OTP-based consent gate for individual CKYC fetches. When a lender tries to pull your record, CKYCRR sends an OTP to your phone. Without that OTP, a fresh download should fail.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You should pair this with real locks that you control directly. Lock your Aadhaar biometrics and Aadhaar number via UIDAI, and cancel old data consents on your{' '}
                <Link
                  href="/revoke-account-aggregator-consent-personal-loan-default"
                  className="text-[#1886ff] font-semibold hover:underline"
                >
                  Account Aggregator app
                </Link>
                . The table below compares each defense tool.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Identity &amp; KYC Defense Controls in India</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Verified Protection Layers</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Protection Layer</th>
                        <th className="p-3">Direct User Lock?</th>
                        <th className="p-3">How It Stops Misuse</th>
                        <th className="p-3">Where to Control It</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">CERSAI CKYCRR Record</td>
                        <td className="p-3 font-bold text-amber-600">No Manual Switch</td>
                        <td className="p-3">Uses OTP consent gate and SMS alerts on every fetch.</td>
                        <td className="p-3">ckycindia.in / Missed call 7799022129</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">UIDAI Aadhaar Biometrics</td>
                        <td className="p-3 font-bold text-emerald-600">Yes (Instant Lock)</td>
                        <td className="p-3">Blocks fingerprint and iris e-KYC checks by fraudsters.</td>
                        <td className="p-3">myaadhaar.uidai.gov.in / mAadhaar</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">UIDAI Aadhaar Number</td>
                        <td className="p-3 font-bold text-emerald-600">Yes (Use VID)</td>
                        <td className="p-3">Stops Aadhaar OTP and demographic e-KYC using your 12-digit ID.</td>
                        <td className="p-3">mAadhaar App (16-digit Virtual ID)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Account Aggregator (AA)</td>
                        <td className="p-3 font-bold text-emerald-600">Yes (Revoke Any Time)</td>
                        <td className="p-3">Cuts off live bank statement sharing with loan apps.</td>
                        <td className="p-3">OneMoney, Finvu, Anumati, Setu apps</td>
                      </tr>
                      <tr className="bg-blue-50/50">
                        <td className="p-3 font-bold text-slate-900">Credit Bureau Alerts</td>
                        <td className="p-3 font-bold text-[#1886ff]">Monitoring &amp; Dispute</td>
                        <td className="p-3">Flags new hard inquiries and fake personal loans fast.</td>
                        <td className="p-3">CIBIL, Experian, Equifax, CRIF</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="spot-fake-loan-misuse" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Report Audit &amp; Early Warning Signs</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Spot Loan Fraud: CKYC vs CIBIL Hard Inquiries
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A CKYC download SMS does not automatically mean someone took a loan in your name. Still, you must never ignore it. Fraudsters often test your KYC details first, then push a personal loan application through a fast digital app.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You cannot see a full backend CKYC download log on the public CERSAI site. Those server logs stay restricted to reporting entities and regulators. Your best forensic tool is your credit report across all four Indian credit bureaus: CIBIL, Experian, Equifax, and CRIF High Mark.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI rules, each credit bureau must give you one free full credit report every calendar year. Pull your reports and check two tabs right away: the &quot;Enquiry Information&quot; list and the &quot;Account Information&quot; list.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Signal Type</th>
                      <th className="p-3">Risk Level</th>
                      <th className="p-3">Impact on CIBIL Score</th>
                      <th className="p-3">Immediate Action Needed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">CKYC SMS Only (No Bureau Pull)</td>
                      <td className="p-3 font-semibold text-amber-600">Low to Medium</td>
                      <td className="p-3">Zero direct score drop</td>
                      <td className="p-3">Email NBFC Nodal Officer to ask why they pulled CKYC.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">CKYC SMS + Hard Credit Inquiry</td>
                      <td className="p-3 font-semibold text-rose-600">High Warning</td>
                      <td className="p-3">Minor drop (5 to 15 points)</td>
                      <td className="p-3">Demand inquiry removal and block pending loan processing.</td>
                    </tr>
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-bold text-slate-900">CKYC SMS + Unknown Loan Account</td>
                      <td className="p-3 font-semibold text-rose-700">Active Fraud</td>
                      <td className="p-3">Severe drop if EMI defaults</td>
                      <td className="p-3">File Cyber Crime report (1930), send legal notice, dispute bureaus.</td>
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
                5. Visual Blueprint: CKYC Audit &amp; Fraud Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual overview captures the core defense pillars when an unfamiliar lender accesses your Central KYC file. Keep your SMS proof, check CIBIL early, enforce consent rules, and protect your credit profile.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/unknown-nbfc-downloaded-ckyc-record-prevent-loan-fraud.jpg"
                    alt="CKYC Record Shield: Stop Loan Fraud When an Unknown NBFC Downloads Your CKYC"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>CredSettle CKYC Consent &amp; Identity Fraud Defense Framework • RBI KYC Compliant</span>
                  <a
                    href="/images/infographics/unknown-nbfc-downloaded-ckyc-record-prevent-loan-fraud.jpg"
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

            {/* SECTION 6: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Stop Misuse Within 72 Hours
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Fast action keeps your liability at zero if a fraudster is misusing your KYC profile. Follow these six steps within 72 hours of receiving an unknown CKYC download alert.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Save the SMS Alert and Fetch Your CKYC Card
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Take a clear screenshot of the CKYCRR SMS showing the NBFC name, date, and sender ID. Give a missed call to 7799022129 from your linked phone or visit ckycindia.in to check your 14-digit CKYC number and registered phone details.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit All 4 Credit Reports and RBI DLA Directory
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your credit reports from CIBIL, Experian, Equifax, and CRIF High Mark to spot new inquiries or fake loans. Also check the RBI public Digital Lending Apps (DLA) Directory on rbi.org.in to see if the NBFC is legally registered.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Email the NBFC Nodal Officer for Consent Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Look up the NBFC Nodal Officer email in the Reporting Entities list on ckycindia.in. State clearly that you never applied for credit and never gave consent. Demand their timestamped consent log, IP address, app name, and written confirmation that your profile is deleted.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Lock Aadhaar Biometrics and Revoke App Consents
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open the mAadhaar app or myaadhaar.uidai.gov.in and lock your Aadhaar biometrics right away. Next, exercise your{' '}
                    <Link
                      href="/dpdp-act-2023-data-erasure-digital-personal-loan-apps"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      DPDP Act 2023 data erasure rights
                    </Link>{' '}
                    on unused loan apps so they cannot reuse your PAN or phone profile.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File a Cyber Crime Report If Fraud Appears
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you find an unknown loan, unknown disbursal, or forged application, file a complaint on cybercrime.gov.in or dial 1930 at once. Save the NCRP complaint number. Ask the police to invoke IT Act Sections 66C and 66D and BNS Sections 318 and 319.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Dispute Credit Bureaus and Escalate to CERSAI &amp; RBI
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log a fraud dispute on CIBIL and the other bureaus, attaching your cybercrime receipt and NBFC email. If the NBFC fails to answer within 3 to 5 working days, report the CKYC breach to helpdesk@ckycindia.in and escalate to cms.rbi.org.in.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Court Precedents & Borrower Rights */}
            <section id="court-precedents-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Burden of Proof</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Court Judgments &amp; Zero-Liability Borrower Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts strongly protect citizens when lenders mishandle KYC data or approve loans without careful checks. Crucially, the legal burden of proving customer negligence rests on the lender, not on you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>K.S. Puttaswamy v. Union of India (2017)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A 9-judge Supreme Court bench held that informational privacy is a core right under Article 21. KYC data shared with a bank carries strict purpose limits and cannot be scraped or leaked freely.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>SBI v. Pallabh Bhowmick (SC, 2025)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court upheld Gauhati High Court orders granting zero liability to a fraud victim who reported fast. The court ruled that banks carry the burden of proving customer fault.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Tony Enterprises v. RBI (Kerala HC, 2019)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Kerala High Court made clear that banks cannot blame customers for complex cyber fraud or system gaps without solid technical proof of customer fault.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>SBI v. P.V. George &amp; Consumer Courts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Kerala High Court ruled that merely sending SMS alerts does not clear a lender from its duty of care. Consumer Commissions also award CIBIL cleanup and damages under the Consumer Protection Act, 2019.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Keep one vital caution in mind. In State Bank of India v. Hare Ram Singh, the Delhi High Court noted that sharing OTPs or clicking unsafe links can complicate a zero-liability claim. Report alerts fast and never hand over any OTP to callers.
              </p>
            </section>

            {/* SECTION 8: 4-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 4-Tier Escalation: NBFC, CERSAI, RBI &amp; Cyber Cell
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Per CERSAI grievance procedures and RBI norms, start with the NBFC that pulled your CKYC record. Move up to the next tier below if the lender stalls or denies responsibility.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Authority &amp; Contact</th>
                      <th className="p-3">Expected Timeline</th>
                      <th className="p-3">Action &amp; Legal Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: NBFC GRO / PNO</td>
                      <td className="p-3">Nodal Officer via ckycindia.in directory</td>
                      <td className="p-3 font-mono">3 to 15 Working Days</td>
                      <td className="p-3">Shares consent audit trail, cancels fake loan, deletes profile.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: CERSAI CKYCRR</td>
                      <td className="p-3">helpdesk@ckycindia.in (022-61102592)</td>
                      <td className="p-3 font-mono">7 to 14 Working Days</td>
                      <td className="p-3">Flags unauthorized download by the Reporting Entity with SMS proof.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: RBI Ombudsman</td>
                      <td className="p-3">cms.rbi.org.in (or sachet.rbi.org.in)</td>
                      <td className="p-3 font-mono">30 Days Post-NBFC</td>
                      <td className="p-3">Orders NBFC to drop fake dues, fix CIBIL, and pay delay penalty.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 4: Cyber Cell &amp; Court</td>
                      <td className="p-3">cybercrime.gov.in (1930) &amp; Consumer Forum</td>
                      <td className="p-3 font-mono">Immediate FIR Filing</td>
                      <td className="p-3">Traces fraud mule bank account and awards damages for harassment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Timelines, Deadlines & Penalties */}
            <section id="timelines-penalties" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Deadlines &amp; Compensation Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Legal Timelines, Penalties &amp; Rs 100/Day Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing exact legal deadlines helps you press lenders hard. Under RBI Circular RBI/2023-24/72 (October 26, 2023), banks, NBFCs, and credit bureaus face automatic daily fines if they drag out credit disputes past 30 days. Learn more in our{' '}
                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="text-[#1886ff] font-semibold hover:underline"
                >
                  RBI Rs 100/day CIBIL compensation guide
                </Link>
                .
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Statutory Rule / Law</th>
                      <th className="p-3">Strict Deadline</th>
                      <th className="p-3">Penalty or Legal Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">RBI Fraud Reporting Window</td>
                      <td className="p-3 font-mono text-emerald-700 font-bold">Within 3 Working Days</td>
                      <td className="p-3">Protects zero customer liability for third-party electronic fraud.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">PML Rule 9(1A) CKYC Upload</td>
                      <td className="p-3 font-mono">Within 10 Days</td>
                      <td className="p-3">Reporting entities must upload verified KYC records after onboarding.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">RBI CIC Dispute Rule (RBI/2023-24/72)</td>
                      <td className="p-3 font-mono text-amber-700 font-bold">30 Days (21 NBFC + 9 CIC)</td>
                      <td className="p-3 font-semibold text-slate-900">Rs 100 per calendar day paid to you within 5 working days of fix.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">RBI Integrated Ombudsman</td>
                      <td className="p-3 font-mono">After 30 Days No Reply</td>
                      <td className="p-3">Binding RBI order against regulated NBFCs and credit bureaus.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">IT Act Sec 66C &amp; 66D / BNS 318 &amp; 319</td>
                      <td className="p-3 font-mono">Criminal Prosecution</td>
                      <td className="p-3">Up to 3 years + Rs 1 lakh fine (IT Act); up to 5 to 7 years jail (BNS).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Mistakes & Partner NBFC Scenarios */}
            <section id="common-mistakes-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Traps &amp; Borrower Precautions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Mistakes &amp; Fintech Partner NBFC Cases
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers make panic mistakes right after seeing an unfamiliar NBFC alert. Avoid these four costly errors so you stay safe and keep your legal claim airtight.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Hidden BNPL &amp; Pay Later Partner NBFCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Activating Amazon Pay Later, Flipkart Pay Later, or instant checkout EMI often pulls CKYC under a partner NBFC name. Read our{' '}
                    <Link
                      href="/bnpl-pay-later-shadow-nbfc-loan-entries-cibil-closure"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      BNPL shadow NBFC closure guide
                    </Link>{' '}
                    to close unused credit lines cleanly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Sharing &quot;Cancellation&quot; OTPs With Callers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Scammers sometimes call right after a CKYC alert, claiming they can cancel the loan if you read back an OTP. Never share any OTP. That OTP often approves the fake loan disbursal itself.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    Multi-Lender Aggregators &amp; DSA Forms
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entering your PAN on a loan comparison portal or handing copies to a broker can trigger CKYC pulls from five or more NBFCs at once. Always check who receives your data before ticking consent boxes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    Paying EMIs on a Fake Loan Out of Fear
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some victims pay one EMI just to stop recovery calls and save their CIBIL score. Do not pay even Rs 1 on a fraudulent loan. Paying can be twisted by lenders as proof that you accepted the loan.
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
                Frequently Asked Questions: Unknown NBFC CKYC Alerts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Plain-English answers to common questions on CERSAI CKYC SMS alerts, explicit consent rules, Aadhaar locks, fake loans on CIBIL, and RBI Ombudsman filings.
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
                Official Regulatory Citations &amp; Legal Authorities
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction on KYC (2016, updated):</strong> Reference RBI/DBR/2015-16/18 mandating explicit customer consent before downloading CKYCR records using a KYC Identifier.
                </li>
                <li>
                  <strong>Prevention of Money-Laundering (Maintenance of Records) Rules, 2005:</strong> Rule 9(1A) to 9(1F) and Rule 9A governing CERSAI CKYCRR operations, purpose limits, and client confidentiality.
                </li>
                <li>
                  <strong>Reserve Bank of India (Digital Lending) Directions, 2025:</strong> Master Direction RBI/DOR/2025-26/136 (May 8, 2025) requiring explicit data consent audit trails and the public DLA Directory.
                </li>
                <li>
                  <strong>RBI CIC Compensation Circular (2023):</strong> RBI/2023-24/72 (DoR.FIN.REC.48/20.16.003/2023-24, Oct 26, 2023) establishing the 30-day credit dispute deadline and Rs 100/day delay compensation.
                </li>
                <li>
                  <strong>Digital Personal Data Protection Act, 2023 &amp; Criminal Statutes:</strong> DPDP Act Sections 6, 8, and 12; IT Act, 2000 Sections 66C and 66D; Bharatiya Nyaya Sanhita, 2023 Sections 318 and 319.
                </li>
                <li>
                  <strong>Judicial Precedents:</strong> Justice K.S. Puttaswamy v. Union of India (2017) 10 SCC 1; State Bank of India v. Pallabh Bhowmick (SC, 2025); Tony Enterprises v. RBI (Kerala HC, 2019); State Bank of India v. P.V. George (Kerala HC).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.ckycindia.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CERSAI CKYC India Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>UIDAI myAadhaar Lock Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Sachet Fraud Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/dpdp-act-2023-data-erasure-digital-personal-loan-apps" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DPDP Act Data Erasure Rights
                  </Link>
                  <Link href="/revoke-account-aggregator-consent-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Revoke Account Aggregator Consent
                  </Link>
                  <Link href="/bnpl-pay-later-shadow-nbfc-loan-entries-cibil-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    BNPL Shadow NBFC CIBIL Closure
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Rs 100/Day CIBIL Penalty
                  </Link>
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CIBIL Wrong Overdue Dispute
                  </Link>
                  <Link href="/fake-loan-app-harassment-cyber-crime" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Fake Loan App Cyber Crime Help
                  </Link>
                  <Link href="/sim-swap-phishing-credit-card-debt-rbi-zero-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Zero-Liability Fraud Rules
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement Services
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Agent Harassment
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply Guide
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
                Specialist in RBI KYC compliance, digital lending privacy disputes, CIBIL credit rectification, and personal loan legal defense across India.
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
                  CKYC &amp; LOAN FRAUD DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Spotted an Unknown NBFC Loan or CKYC Pull?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team serves formal notices to NBFC Nodal Officers, files RBI Ombudsman disputes, stops recovery harassment, and helps clear fake CIBIL entries.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free CKYC &amp; CIBIL Audit
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
                  <span>RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NBFC Consent Audit Notice:</strong> Formal demand to Nodal Officers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fake Loan CIBIL Cleanup:</strong> Dispute across all 4 credit bureaus.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> Enforce Rs 100/day delay compensation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop unlawful calls and loan threats.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/dpdp-act-2023-data-erasure-digital-personal-loan-apps"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    DPDP Act Data Erasure Against Loan Apps
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Delete contacts &amp; revoke consent &rarr;</span>
                </Link>

                <Link
                  href="/bnpl-pay-later-shadow-nbfc-loan-entries-cibil-closure"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Close Shadow NBFC BNPL Entries on CIBIL
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Remove Pay Later accounts &rarr;</span>
                </Link>

                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Claim RBI Rs 100/Day CIBIL Delay Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">30-day rectification rule &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
