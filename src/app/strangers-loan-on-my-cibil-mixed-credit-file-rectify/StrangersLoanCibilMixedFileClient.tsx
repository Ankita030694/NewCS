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

export default function StrangersLoanCibilMixedFileClient() {
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
    { id: 'statutory-framework', label: '1. Statutory RBI Mixed File Rules' },
    { id: 'mixed-file-vs-fraud', label: '2. Mixed File vs Identity Theft' },
    { id: 'calculation-matrix', label: '3. RBI ₹100/Day Penalty Math' },
    { id: 'root-causes', label: '4. How Bureau Matching Merges Files' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. SOP: Remove Stranger Loan' },
    { id: 'borrower-rights', label: '7. Consumer Court & DPDP Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Discovery to Clean CIBIL' },
    { id: 'specialized-scenarios', label: '10. Shared Names & Old Numbers' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: "Why is a stranger's defaulted personal loan showing on my CIBIL report?",
      a: "A stranger's loan appears on your CIBIL report due to a mixed credit file or identity theft. Most often, bureau software merges two people with the same name, birth date, phone number, or address. Sometimes a bank staff member types the wrong PAN while uploading loan records."
    },
    {
      q: 'How do I tell a mixed credit file apart from loan identity theft?',
      a: "Check the Personal Info and Address parts of your report first. A stranger's address, phone, or second PAN points to a mixed file. If the loan uses only your exact PAN and KYC, treat it as fraud and file a cybercrime report."
    },
    {
      q: "What is the RBI time limit to remove a stranger's loan from CIBIL?",
      a: 'Under Section 21(3) of CICRA 2005 and RBI circular RBI/2023-24/72, the total fix limit is 30 days. The bank gets 21 days to check KYC and send clean data. The bureau gets 9 days to fix your report.'
    },
    {
      q: 'Can I claim ₹100 per day if CIBIL or the bank delays fixing my mixed file?',
      a: 'Yes. Under RBI circular RBI/2023-24/72, any delay past 30 days earns ₹100 per day. This rule took effect on April 26, 2024. The late bank or bureau must pay you within 5 working days of fixing the error.'
    },
    {
      q: "Can TransUnion CIBIL delete a stranger's loan without the bank's approval?",
      a: 'No. Under CICRA 2005, CIBIL cannot erase a loan entry on its own. CIBIL sends your claim to the bank or NBFC for KYC checks. Once the bank confirms the mismatch, CIBIL splits the file and drops the loan.'
    },
    {
      q: 'What is a CIBIL Control Number and why do I need it for a mixed file dispute?',
      a: 'A Control Number is a 9-digit code at the top right of your CIBIL report. It marks the exact report copy that shows the wrong loan. You need it to file an Ownership dispute on the MyCIBIL site.'
    },
    {
      q: 'Will a mixed credit file appear on Experian, Equifax, and CRIF High Mark too?',
      a: 'Often yes. Banks send loan files to all four credit bureaus in India. A bank PAN typo can show up on CIBIL, CRIF, Equifax, and Experian. Pull your Free Full Credit Report from all four bureaus and dispute each bad file.'
    },
    {
      q: 'Can I complain against TransUnion CIBIL directly to the RBI Ombudsman?',
      a: 'Yes. Since September 1, 2022, all four bureaus come under the RBI Integrated Ombudsman Scheme. If CIBIL or the bank fails to fix your file in 30 days, file a free case on cms.rbi.org.in.'
    },
    {
      q: 'Can I claim extra compensation in Consumer Court if a mixed file ruined my loan approval?',
      a: "Yes. Under the Consumer Protection Act, 2019, tagging a stranger's loan to you is poor service. Consumer courts have paid ₹50,000 or more for stress, loan loss, and legal fees on top of RBI fines."
    },
    {
      q: 'How does CredSettle help fix a mixed credit file and restore my CIBIL score?',
      a: 'CredSettle checks all four credit reports and gathers your KYC proof. We file disputes with every bureau and bank Nodal Officer. Our team also takes stuck cases to the RBI Ombudsman and claims your ₹100 daily payout.'
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
            <span>CICRA 2005 &amp; RBI Circular DoR.FIN.REC.48 Credit Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Rectify Name-Collision Mixed Credit Bureau Files in India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Found a stranger&apos;s defaulted personal loan on your CIBIL report? Learn how RBI mixed-file rules force banks and bureaus to unlink alien loans in 30 days or pay you ₹100 per day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Fix Mixed CIBIL File Now</span>
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
                  <span>Statutory Credit Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under CICRA 2005 Section 21, RBI Circulars 72 &amp; 73, and RB-IOS 2021.
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
                <span>EXECUTIVE BRIEF: MIXED CREDIT FILE FIX &amp; RBI RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict 30-Day Fix Rule:</strong> Under CICRA 2005 Section 21(3) and RBI Circular RBI/2023-24/72, the full fix limit is 30 days. Banks get 21 days and bureaus get 9 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Automatic ₹100 Daily Fine:</strong> Any delay past 30 days triggers ₹100 per day. The guilty bank or bureau must pay this straight to your bank account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Match Logic Checks:</strong> RBI Circular RBI/2023-24/73 directs CIBIL, CRIF, Equifax, and Experian to check their match logic. This stops bad file merges.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Direct RBI Ombudsman Cover:</strong> All four bureaus came under the RBI Ombudsman Scheme on September 1, 2022. You can file one case against both the bank and CIBIL.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Four-Bureau Verification:</strong> One bank typo can hit every credit bureau. Always pull your free report from CIBIL, CRIF, Equifax, and Experian.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI Mixed Credit File Rules */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Mixed Credit File Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many honest borrowers in India get a shock when a bank rejects their loan. They check their CIBIL report and spot a bad personal loan they never took. Often, that loan belongs to a stranger.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This error is a mixed credit file. It occurs when a bureau blends two people into one credit file. It also happens when a bank clerk types your PAN into another person&apos;s loan record.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law gives you strong rights to fix this fast. Section 19 of the Credit Information Companies (Regulation) Act, 2005 (CICRA) requires banks and bureaus to keep data accurate. Under Section 21(3) of CICRA, they must fix a valid claim within 30 days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On October 26, 2023, the RBI issued two key rules to back borrowers. Circular RBI/2023-24/72 sets a ₹100 per day fine for late fixes. Circular RBI/2023-24/73 orders bureaus to test their Search and Match rules so files stop colliding.
              </p>
            </section>

            {/* SECTION 2: Mixed Credit File vs Identity Theft Loan Fraud */}
            <section id="mixed-file-vs-fraud" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Diagnostic Audit &amp; Forensic Clues</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Mixed Credit File vs Identity Theft Loan Fraud
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before you file a complaint, check why the unknown personal loan sits on your report. A mixed credit file and identity theft need two very different legal steps. A quick audit of your Credit Information Report (CIR) tells you which problem you face.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a mixed credit file, no crime happened. The bureau&apos;s matching engine blended your record with someone who shares your name, birth date, or old phone number. In identity theft, a fraudster stole your actual PAN or Aadhaar to open a fake loan in your name.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Report Clue</th>
                      <th className="p-3">Mixed Credit File (Name Collision)</th>
                      <th className="p-3">Identity Theft (Fraudulent Loan)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Personal Info Section</td>
                      <td className="p-3">Shows a slight name variant, second birth date, or another person&apos;s Voter ID or Passport.</td>
                      <td className="p-3">Shows only your exact name, exact birth date, and your genuine PAN number.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Addresses &amp; Phones</td>
                      <td className="p-3">Lists unfamiliar cities, stranger addresses, or old mobile numbers you never used.</td>
                      <td className="p-3">Uses your real address or a single fake address added right before the loan opened.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Hard Inquiries</td>
                      <td className="p-3">Old inquiries from towns you never visited, often spread across several years.</td>
                      <td className="p-3">Sudden cluster of fresh loan app or NBFC inquiries within a few days.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Loan Age &amp; Pattern</td>
                      <td className="p-3">Often includes older paid loans plus one recent defaulted personal loan in another city.</td>
                      <td className="p-3">Usually a new instant personal loan or BNPL account that went straight into default.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Primary Fix Path</td>
                      <td className="p-3 font-semibold text-[#1886ff]">CIBIL Profile Split, Ownership Dispute, and Bank KYC Mismatch Notice.</td>
                      <td className="p-3 font-semibold text-rose-700">Cybercrime Portal FIR, Police Complaint, Bank Fraud Wing, and Bureau Block.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also check the Ownership Indicator next to the alien loan. If it says Guarantor or Joint, you may have signed as a co-applicant years ago. If it says Individual and you never took that loan, start the mixed-file unlinking process right away.
              </p>
            </section>

            {/* SECTION 3: Calculation Matrix: RBI ₹100 Daily Delay Penalty */}
            <section id="calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Penalty Formulas &amp; Accrual Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Calculation Matrix: RBI ₹100 Daily Delay Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks and bureaus used to drag mixed credit file complaints for six months or more. To end these delays, RBI Circular RBI/2023-24/72 (DoR.FIN.REC.48) created an automatic compensation rule. This rule took full effect on April 26, 2024.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The law gives both parties a strict combined window of 30 calendar days from your first complaint date. The reporting bank or NBFC gets 21 days to verify KYC records and send corrected data. The credit bureau gets 9 days to unlink the loan and update your report.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your report stays wrong past Day 30, you earn ₹100 for every single day of delay. The party that broke its time limit must pay you straight into your bank account within 5 working days of fixing the dispute. If both delayed, they split the payout based on their extra days.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Mixed File Delay Penalty Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹100 Flat Daily Accrual (Per Bureau)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Timeline Post-Dispute</th>
                        <th className="p-3">Delay Past Day 30</th>
                        <th className="p-3">Who Pays Under RBI Rule</th>
                        <th className="p-3 text-right">Compensation Owed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 1 to Day 30</td>
                        <td className="p-3 font-mono">0 Days</td>
                        <td className="p-3 text-emerald-600 font-semibold">Statutory Window (21d CI + 9d CIC)</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹0 (Allowed Window)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 45 (15 Days Late)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">15 Days Delay</td>
                        <td className="p-3 text-amber-600 font-semibold">Faulty Bank or Bureau Pays</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹1,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 60 (30 Days Late)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">30 Days Delay</td>
                        <td className="p-3 text-rose-600 font-semibold">RBI Ombudsman Escalation Triggered</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹3,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 90 (60 Days Late)</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">60 Days Delay</td>
                        <td className="p-3 text-rose-700 font-semibold">Joint Bank &amp; CIC Liability</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">₹6,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Day 120 (90 Days Late)</td>
                        <td className="p-3 font-mono text-[#1886ff]">90 Days Delay</td>
                        <td className="p-3 text-[#1886ff]">Per Bureau + Consumer Court Damages</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹9,000 + Tort Claim</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Keep one key point in mind. This ₹100 daily penalty applies separately to each credit bureau where you filed a formal dispute. If both CIBIL and CRIF High Mark stay late past 30 days, each late dispute earns its own ₹100 daily payout.
              </p>
            </section>

            {/* SECTION 4: Root Causes: How Bureau Matching Merges Profiles */}
            <section id="root-causes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Bureau Match Logic &amp; KYC Errors</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Root Causes: How Bureau Matching Merges Profiles
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian credit bureaus store data for crores of people. They do not match files by PAN alone. Older loans and small NBFC files often used a Voter ID, Passport, or phone number instead of PAN.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To link loans, bureaus run fuzzy Search and Match software. Two people may share a common Indian name, birth date, and city. When that happens, the software can merge both files into one report.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Bank data entry typos are the second big cause. A clerk types one wrong digit in a defaulter&apos;s PAN, and it matches yours. Banks now send data four times a month on the 9th, 16th, 23rd, and month-end. So the bad loan keeps coming back until the bank drops your PAN at its source.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A plain balance dispute often fails for a mixed file. Ask the bureau for a full Profile Split and Ownership Unlink. At the same time, tell the bank to wipe your PAN from the stranger&apos;s CIF and CKYC file.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Mixed File Unlinking Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart sums up your core rights across all four Indian credit bureaus. It shows the 30-day RBI fix rule and the ₹100 per day fine for delays.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/strangers-loan-on-my-cibil-mixed-credit-file-rectify.jpg"
                    alt="Stranger's Loan on Your CIBIL Mixed Credit File Fix Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Mixed Credit File Rectification Guide • RBI Circular Compliant</span>
                  <a
                    href="/images/infographics/strangers-loan-on-my-cibil-mixed-credit-file-rectify.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Remove a Stranger's CIBIL Loan */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Remove a Stranger&apos;s CIBIL Loan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six simple steps to remove a stranger&apos;s loan. They clean all four credit reports and lock in your ₹100 daily fine if a bank stalls.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Download All 4 Free Full Credit Reports (FFCR)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    RBI Circular RBI/2023-24/73 gives you one free full report each year from all four bureaus. Pull CIBIL, Experian, Equifax, and CRIF High Mark. Save each PDF and note the 9-digit CIBIL Control Number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Highlight Every Alien Loan and Stranger KYC Clue
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Mark the bank name, masked loan number, open date, and overdue sum. Circle any strange address, unknown phone, or extra ID inside Personal Info.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Raise Ownership and Mixed-Profile Disputes Online
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log into MyCIBIL Dispute Center and mark the loan under Ownership (Account Does Not Belong to Me). Also dispute each alien address and phone so CIBIL splits the file. Add your bank or UPI details for RBI penalty payouts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Email the Reporting Bank&apos;s Nodal Officer in Parallel
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not wait on CIBIL alone. Email the bank Grievance Officer with your PAN, masked Aadhaar, Dispute ID, and report copy. Ask them to check the borrower&apos;s photo and KYC, confirm the mismatch, and tell all four bureaus to unlink the loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Issue Day-31 RBI Penalty Notice and Escalate to CMS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the loan stays past Day 30, send a written notice citing RBI Circular RBI/2023-24/72. File a joint case against both the bank and the bureau on cms.rbi.org.in. Claim deletion plus your ₹100 daily payout.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Verify Clean Reports and Permanent Source Suppression
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your free updated report within 5 working days after closure. Confirm that the stranger&apos;s loan, address, and hard inquiries are gone. Pull a fresh check 30 days later so no new batch upload adds the loan back.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Legal Rights: Consumer Court & DPDP Act */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Data Privacy Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Legal Rights: Consumer Court &amp; DPDP Act
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The ₹100 daily RBI fine is only your base relief. A stranger&apos;s bad loan can cause home loan rejections, higher interest rates, and deep stress. Indian courts let you claim much larger sums for real loss.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Courts treat wrong PAN tagging and mixed reports as poor service. Consumer forums and India&apos;s data privacy law both protect honest citizens.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019 Relief</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Sections 2(11) and 39, linking a stranger&apos;s default to you is gross fault. District Consumer Forums have ordered lenders to clean CIBIL files and pay ₹50,000 plus ₹25,000 in legal costs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Higher Court Reputation Precedents</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In cases like Central Bank of India v. M/s Ad Bureau Advertising, higher forums backed strong payouts. Banks pay damages when careless CIBIL reports hurt a borrower&apos;s good name and loan access.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>DPDP Act 2023 Section 12 Erasure</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 12 of the DPDP Act, 2023 gives you the right to fix or erase wrong personal data. Use this law to wipe alien phones, addresses, and KYC tags from bank systems.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Cybercrime &amp; Identity Fraud Action</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank finds real fraud using fake KYC, act fast. File a report on cybercrime.gov.in and seek a police FIR under BNS cheating and IT Act Section 66C. This blocks recovery calls.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Nodal Officer to RBI */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Nodal Officer to RBI
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many mixed-file cases get stuck when the bank blames CIBIL and CIBIL blames the bank. Break that loop using the RBI three-tier complaint ladder.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Dispute Desk</td>
                      <td className="p-3">Bank GRO &amp; CIC Dispute Portal</td>
                      <td className="p-3 font-mono">Day 1 to Day 14</td>
                      <td className="p-3">Logs official Dispute ID, flags loan Under Dispute, and starts KYC check.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Nodal &amp; IO</td>
                      <td className="p-3">Bank PNO &amp; CIC Internal Ombudsman</td>
                      <td className="p-3 font-mono">Day 15 to Day 30</td>
                      <td className="p-3">Checks rejected claims, confirms KYC mismatch, and orders a profile split.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">After Day 30</td>
                      <td className="p-3">Issues binding order on cms.rbi.org.in to delete the loan and pay ₹100/day.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Since April 1, 2023, every credit bureau must keep an independent Internal Ombudsman (IO). Before CIBIL or any bureau rejects your claim, its IO must check the case.
              </p>
            </section>

            {/* SECTION 9: Procedural Milestones: Discovery to Clean Report */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Discovery to Clean Report
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Track each date from the day you spot the alien loan. Clear logs stop banks and bureaus from missing their RBI limits.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Bank / CIC Duty</th>
                      <th className="p-3">Borrower Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Mixed File Discovery</td>
                      <td className="p-3">Gives Free Full Credit Report and 9-digit Control Number.</td>
                      <td className="p-3">Check all 4 reports and save PAN, Aadhaar, and error proof.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1</td>
                      <td className="p-3 font-mono text-[11px]">Dual Filing Start</td>
                      <td className="p-3">Bureau marks the bad loan Under Dispute and alerts the bank.</td>
                      <td className="p-3">File bureau Ownership + Split claim and email the Bank GRO.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 2 to 21</td>
                      <td className="p-3 font-mono text-[11px]">Bank KYC Audit</td>
                      <td className="p-3">Bank checks KYC, proves mismatch, and sends fix to the bureau.</td>
                      <td className="p-3">Write to Bank PNO on Day 14 if no reply arrives.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 22 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Bureau Update Window</td>
                      <td className="p-3">Bureau splits the file, drops the loan, and fixes your score.</td>
                      <td className="p-3 font-bold text-amber-800">Track Dispute ID and demand written reasons if denied.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 Onwards</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">₹100/Day Penalty Live</td>
                      <td className="p-3">Late Bank or Bureau owes ₹100 per day under RBI rules.</td>
                      <td className="p-3 font-bold text-slate-900">File RBI CMS case against both bank and credit bureau.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Fix (+5 to 30d)</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Closure &amp; Audit</td>
                      <td className="p-3">Emails free clean report and pays fine within 5 working days.</td>
                      <td className="p-3">Check again next month to confirm the loan stays gone.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Cases: Shared Names & Old Numbers */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Cases: Shared Names &amp; Old Numbers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not every mixed file looks the same. Common family and phone habits in India can cause repeat merges unless you fix the root cause.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Father-Son &amp; Twin Name Collisions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kin who share one home address and close names often face file merges. Identical twins face this too. Send both PAN cards together so CIBIL keeps two distinct Control Numbers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Recycled SIM &amp; Mobile Number Merges
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Indian telecom firms reuse dead mobile numbers after 90 days. If the old user missed EMIs, bureaus may link that debt to you. Send your SIM receipt and ask to unlink the phone.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Digital Loan Apps &amp; NBFC PAN Typos
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fast loan apps use agents who often enter wrong KYC fields. Even if the app closes, find its RBI-backed NBFC on your CIBIL report. Send your legal notice straight to that NBFC Nodal Officer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Urgent Home Loan or Job Background Checks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Have a home loan or job check due before Day 30? Ask the bank for a signed Non-Ownership Letter on bank letterhead. Most loan teams accept it with your CIBIL Dispute ID.
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
                Frequently Asked Questions: Mixed Credit File Fix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Get clear answers on removing a stranger&apos;s loan from CIBIL. Learn how to split mixed files, claim ₹100 per day, and protect your credit score.
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
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 19 (Accuracy and Security of Credit Information) and Section 21(3) (Mandatory 30-Day Rectification of Credit Data).
                </li>
                <li>
                  <strong>Reserve Bank of India Circular RBI/2023-24/72:</strong> DoR.FIN.REC.48/20.16.003/2023-24 dated October 26, 2023 (Framework for Compensation of ₹100/Day for Delayed Updation or Rectification of Credit Information, effective April 26, 2024).
                </li>
                <li>
                  <strong>Reserve Bank of India Circular RBI/2023-24/73:</strong> DoR.FIN.REC.49/20.16.003/2023-24 dated October 26, 2023 (Strengthening of Customer Service Rendered by CICs and CIs: Search &amp; Match Logic Review, SMS/Email Alerts, and Annual FFCR).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS):</strong> RBI Notification CEPD.PRD.No.S544/13.01.001/2022-23 dated August 5, 2022 (Inclusion of all Credit Information Companies effective September 1, 2022).
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019 &amp; DPDP Act, 2023:</strong> Section 2(11) &amp; Section 39 (Deficiency in Service &amp; Damages) and Section 12 of the DPDP Act (Right to Correction and Erasure of Personal Data).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Center</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cybercrime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Penalty
                  </Link>
                  <Link href="/personal-loan-settled-cibil-still-overdue-crif-equifax" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Sync All 4 Credit Bureaus
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day Bureau Reporting
                  </Link>
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Wrong Overdue CIBIL Dispute
                  </Link>
                  <Link href="/remove-unauthorized-multiple-cibil-hard-inquiries-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Unauthorized Hard Inquiries
                  </Link>
                  <Link href="/unknown-nbfc-downloaded-ckyc-record-prevent-loan-fraud" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unknown NBFC CKYC Alert
                  </Link>
                  <Link href="/dpdp-act-2023-data-erasure-digital-personal-loan-apps" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DPDP Act Data Erasure Rights
                  </Link>
                  <Link href="/post-write-off-settled-pwos-meaning-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    PWOS Status Meaning
                  </Link>
                  <Link href="/how-to-improve-cibil-score" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score Fast
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
                Specialist in credit bureau rectification, CICRA 2005 compliance, RBI statutory guidelines, and personal loan debt resolution with deep experience fixing mixed credit files across all four Indian bureaus.
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
                  CIBIL RECTIFICATION DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stranger&apos;s Loan Ruining Your CIBIL Score?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking legal team audits all four credit reports, serves KYC mismatch notices under CICRA Section 21, forces profile splitting, and recovers your ₹100 per day RBI delay penalty.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Unlink Stranger Loan Now
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
                  <span><strong>4-Bureau Forensic Audit:</strong> Full review of CIBIL, CRIF, Equifax, and Experian.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Parallel Nodal Escalation:</strong> Simultaneous legal demand to Bank PNO and CIC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>₹100/Day Penalty Recovery:</strong> Automatic RBI delay claim past Day 30.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Representation:</strong> End-to-end CMS filing and tracking.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Claim RBI ₹100/Day CIBIL Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Delayed dispute payout guide &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-settled-cibil-still-overdue-crif-equifax"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Sync All 4 Credit Bureaus in India
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Fix CRIF &amp; Equifax mismatch &rarr;</span>
                </Link>

                <Link
                  href="/unknown-nbfc-downloaded-ckyc-record-prevent-loan-fraud"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unknown NBFC CKYC Download Alert
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop personal loan fraud fast &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
