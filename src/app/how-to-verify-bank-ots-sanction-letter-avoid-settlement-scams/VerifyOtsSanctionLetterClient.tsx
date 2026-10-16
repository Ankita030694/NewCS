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
  Eye,
  XCircle,
  SearchCheck,
  QrCode
} from 'lucide-react';

export default function VerifyOtsSanctionLetterClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Scam Shield' },
    { id: 'anatomy-authentic-letter', label: '1. Anatomy of an Authentic Bank OTS Letter' },
    { id: 'security-checkpoints', label: '2. 6 Critical Security Checkpoints' },
    { id: 'modus-operandi', label: '3. Modus Operandi: Recovery Agent Scams' },
    { id: 'financial-comparison', label: '4. Financial Comparison: Real vs Scam' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Verification SOP' },
    { id: 'beneficiary-protocols', label: '7. Safe Remittance Account Protocols' },
    { id: 'legal-recourse', label: '8. Legal Recourse Against Fraud' },
    { id: 'escalation-matrix', label: '9. 3-Tier Bank Grievance & RBI Redressal' },
    { id: 'procedural-timeline', label: '10. Procedural Timeline to NDC' },
    { id: 'specialized-scenarios', label: '11. Specialized Scenarios: ARCs & Portals' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a bank OTS sanction letter, and why is it legally necessary?',
      a: 'A bank OTS sanction letter is an official written paper from your lender. It proves that the bank agreed to waive part of your loan dues. It states the exact final amount you must pay. Without this letter, any payment you make is treated as partial interest. Your loan will stay open and active.'
    },
    {
      q: 'How can I tell if a bank OTS sanction letter received on WhatsApp is fake?',
      a: 'Real banks do not send settlement letters only on WhatsApp. A real letter has an official Core Banking dispatch number. It also has the branch stamp and the officer employee ID. It always tells you to pay directly into your own loan account. Letters that ask for UPI or private account transfers are fake.'
    },
    {
      q: 'Can third-party recovery agents issue a valid loan settlement letter?',
      a: 'No. Third-party collection agents have no power to grant loan waivers. Under RBI rules, only the bank internal credit committee or branch head can approve a settlement letter.'
    },
    {
      q: 'Where should I deposit money once I receive an authentic OTS sanction letter?',
      a: 'You must deposit the money directly into your own loan account number. You can also pay into the official bank pool account via RTGS, NEFT, or a bank draft. Never pay cash to an agent. Never transfer funds to any personal UPI or agency account.'
    },
    {
      q: 'How do I physically verify a settlement sanction letter with my bank branch?',
      a: 'Take a printed copy of the letter to your home branch. Meet the Branch Manager or recovery officer. Ask them to verify the approval reference on their core banking screen before you pay.'
    },
    {
      q: 'Can a bank cancel or revoke an OTS sanction letter after it has been issued?',
      a: 'Yes. Every sanction letter has a clear payment deadline. This is usually 7 to 30 days. If you do not pay on time, the letter becomes void. The bank will then demand the full original balance plus interest.'
    },
    {
      q: 'What should I do if I paid money to a fake settlement agent?',
      a: 'Call the National Cyber Crime Helpline at 1930 right away. File a report on cybercrime.gov.in within 24 hours to freeze the fraud account. File a police complaint for cheating under BNS Section 318(4). Also, report the incident to the bank Principal Nodal Officer.'
    },
    {
      q: 'Does a genuine OTS sanction letter guarantee a clean CIBIL score?',
      a: 'No. A real settlement updates your CIBIL record to Settled. Any agent who promises to clean your score within 24 hours is lying. Credit reporting follows strict RBI rules.'
    },
    {
      q: 'How long after paying the OTS amount will I receive my No Dues Certificate?',
      a: 'Under RBI rules, banks must issue an official No Dues Certificate within 15 to 30 days. This happens once your payment clears and the bank updates your balance to zero.'
    },
    {
      q: 'How does CredSettle protect borrowers from fake settlement scams?',
      a: 'CredSettle talks directly with bank zonal credit teams on your behalf. We check every detail of your sanction letter. We confirm its core banking reference and ensure your money goes straight into your loan account.'
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
            <SearchCheck className="w-3.5 h-3.5" />
            <span>Banking Compliance &amp; Borrower Protection Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Verify Bank OTS Sanction Letter &amp; Avoid Fake Scams
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Protect your money from loan settlement fraud. Learn how to verify official bank OTS sanction letters, check CBS reference numbers, and spot fake recovery agent claims.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Verify Your OTS Letter Now</span>
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
                  <span>RBI Settlement Compliance</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Follows official Reserve Bank of India compromise settlement guidelines.
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
                <span>EXECUTIVE BRIEF: BANK OTS LETTER VERIFICATION &amp; SCAM SHIELD</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Bank CBS Reference:</strong> A valid OTS sanction letter must come from the bank Core Banking System. It carries a unique dispatch number.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The Golden Rule of Payment:</strong> Never pay settlement money to an agent or private company. Payments must go directly into your own loan account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">WhatsApp &amp; Email Red Flags:</strong> Real banks never send letters from free Gmail or Yahoo accounts. They only use verified corporate email domains.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Competent Approving Authority:</strong> Collection agents cannot approve debt waivers. Approvals require formal sign-off by the bank credit committee.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Guaranteed Closure Protocol:</strong> An authentic settlement letter guarantees a formal No Dues Certificate within 15 to 30 days.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Anatomy of an Authentic Bank OTS Sanction Letter */}
            <section id="anatomy-authentic-letter" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Document Architecture &amp; Security Standards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Anatomy of an Authentic Bank OTS Sanction Letter
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A loan settlement is an official compromise deal. The lender agrees to accept a discounted sum to close an overdue loan account. The bank issues a formal sanction letter as legal proof of this agreement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers fall for fake letters made by rogue recovery agents. You must know how to spot real bank papers. Every genuine bank OTS letter in India has strict security markers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Official Bank Letterhead &amp; Branch Identifiers</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The document features the bank official logo. It shows the zonal office address, branch IFSC code, and branch phone numbers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <SearchCheck className="w-4 h-4" />
                    <span>Unique CBS Reference &amp; Approval Number</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A distinct dispatch reference number is generated on the Core Banking System. Any branch officer across India can check this number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>Clear Financial Breakdown</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter lists the total debt. It shows the overdue sum, waived interest, and the agreed final payment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Authorized Officer Signature &amp; Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter carries the signature of an authorized officer. It also displays the officer employee code and official bank stamp.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: 6 Critical Security Checkpoints to Spot Fake Letters */}
            <section id="security-checkpoints" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Eye className="w-4 h-4 text-[#1886ff]" />
                <span>Forensic Fraud Detection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. 6 Critical Security Checkpoints to Spot Fake Letters
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Fake settlement letters can look real at first glance. However, scammers make clear mistakes when forging papers. Check these six points to spot a fake letter right away.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Beneficiary Account Details (The Big Red Flag)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check where the letter tells you to pay. If it asks for payment to a private agency, an individual name, or a UPI ID, it is a scam. Real settlements require payment straight into your own loan account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Missing Core Banking System (CBS) Approval Number
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Every real settlement is logged in the bank core software. If a letter has no CBS reference number, it is not genuine.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Informal Delivery via WhatsApp or Free Webmail
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Official letters arrive by registered post or from verified bank email domains. Reject any letter sent from a free Gmail or Yahoo account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Blurry Logos, Spelling Errors, and Bad Layout
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Look closely at the document layout. Fake letters often have blurry logos, spelling mistakes, and bad font alignment. Real bank letters use clean corporate formats.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    False Promises to Clean Your CIBIL Score Fast
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Scammers often promise to wipe your CIBIL record clean in 48 hours. Under RBI rules, settled loans are marked as Settled. An instant clean score promise is a scam.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    False Urgency &amp; High-Pressure Threats
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Scammers create false panic. They claim the offer ends in two hours or threaten police action. Real bank letters give you 7 to 30 days to pay.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: Modus Operandi: How Recovery Agent Settlement Scams Work */}
            <section id="modus-operandi" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Criminal Patterns &amp; Case Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Modus Operandi: How Recovery Agent Settlement Scams Work
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Rogue recovery agents steal delinquent borrower lists. They look for people who are stressed about debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The agent calls the borrower pretending to be from the bank legal desk. They offer an easy deal to clear the debt for a small sum.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The agent creates a fake letter using computer software. They share a personal QR code or ask for cash. Once you pay, the agent disappears.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Weeks later, the real bank sends a new notice. You learn that your money was stolen. The loan default is still active.
              </p>
            </section>

            {/* SECTION 4: Financial Comparison: Real Bank Settlement vs Fake Scam */}
            <section id="financial-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Verification Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Financial Comparison: Real Bank Settlement vs Fake Scam
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Use this simple comparison table to check any settlement letter. It shows the clear differences between real bank papers and fake scam letters.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Check Item</th>
                      <th className="p-3">Real Bank OTS Sanction Letter</th>
                      <th className="p-3">Fake Settlement Scam Letter</th>
                      <th className="p-3">Safety Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Approving Officer</td>
                      <td className="p-3 text-emerald-700 font-medium">Bank Credit Committee or Branch Head</td>
                      <td className="p-3 text-rose-600 font-medium">Collection Agent or Unknown Broker</td>
                      <td className="p-3 text-emerald-700 font-bold">100% Genuine Authority</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">CBS Reference Code</td>
                      <td className="p-3 text-emerald-700 font-medium">Trackable on Bank Core Computer System</td>
                      <td className="p-3 text-rose-600 font-medium">Missing, blank, or fake number</td>
                      <td className="p-3 text-slate-700">Can be verified at branch</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Payment Account</td>
                      <td className="p-3 text-emerald-700 font-medium">Borrower Own Loan Account Number</td>
                      <td className="p-3 text-rose-600 font-medium">Private company account or UPI ID</td>
                      <td className="p-3 text-rose-600 font-bold">Scam Alert if not loan account</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Delivery Channel</td>
                      <td className="p-3 text-slate-700">Official bank email or registered post</td>
                      <td className="p-3 text-rose-600">WhatsApp chat or free Gmail address</td>
                      <td className="p-3 text-slate-700">Must be official domain</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Time to Pay</td>
                      <td className="p-3 text-slate-700">Standard 7 to 30 days window</td>
                      <td className="p-3 text-rose-600">High pressure (pay within 2 hours)</td>
                      <td className="p-3 text-slate-700">Gives time to check facts</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">No Dues Certificate</td>
                      <td className="p-3 text-emerald-700 font-medium">Guaranteed NDC within 15 to 30 days</td>
                      <td className="p-3 text-rose-600 font-medium">No official NDC; loan stays active</td>
                      <td className="p-3 text-emerald-700 font-bold">Permanent debt freedom</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">CIBIL Bureau Status</td>
                      <td className="p-3 text-slate-700">Reported as Settled under RBI rules</td>
                      <td className="p-3 text-rose-600">Fake promise of clean score in 24 hours</td>
                      <td className="p-3 text-slate-700">Meets official credit rules</td>
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
                5. Visual Blueprint: Bank OTS Verification Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This image shows the step-by-step verification plan. Follow this visual guide to check your settlement letter and stay safe from scams.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams.jpg"
                    alt="How to Verify Bank OTS Sanction Letter and Avoid Fake Settlement Scams"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Document Verification Guide • RBI Compliant</span>
                  <a
                    href="/images/infographics/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: How to Verify OTS Sanction Letter */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: How to Verify OTS Sanction Letter
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this simple six-step process before paying any money toward a settlement. These basic steps protect your funds and your legal rights.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Step 1: Pause Payment &amp; Ask for a Written Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not pay money over phone calls. Ask for a formal written OTS letter on bank letterhead before paying.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Step 2: Check Details on the Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check the dispatch number, branch code, and officer details. Make sure your name and loan number match bank records.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Step 3: Visit the Bank Branch in Person
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Take the paper letter to your home branch. Ask the branch manager to verify the approval on their system screen.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Step 4: Get Email Confirmation from Bank Domain
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask for written confirmation from the bank official email domain. Verify the email address before you send any money.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Step 5: Pay Directly into Your Own Loan Account
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay using RTGS, NEFT, or a crossed bank draft directly to your loan account. Save the transaction UTR number as receipt proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Step 6: Collect Your No Dues Certificate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit your payment UTR to the branch. Request your formal No Dues Certificate within 30 days. Check your CIBIL report after 45 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Beneficiary Account Verification: Safe Payment Protocols */}
            <section id="beneficiary-protocols" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Payment Security Guidelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Beneficiary Account Verification: Safe Payment Protocols
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The safest way to avoid scams is knowing how to make your payment. Real banks follow simple, direct payment methods.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Direct Personal Loan Payments</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Transfer the compromise sum directly into your own loan account number. This credits the funds straight to your loan balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Credit Card Settlement Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For credit cards, pay via NEFT or RTGS. Use your 16-digit card number as the beneficiary account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Crossed Demand Draft (DD)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Make a crossed Demand Draft in favor of the lender. Write your loan number on the back and get a stamped receipt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-rose-200/80 bg-rose-50/20 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <XCircle className="w-4 h-4" />
                    <span>Payment Methods to Avoid</span>
                  </div>
                  <p className="text-xs text-rose-700 leading-relaxed">
                    Never hand cash to collection agents. Never transfer funds to private company accounts or UPI handles.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Legal Recourse: What to Do If Trapped in a Settlement Scam */}
            <section id="legal-recourse" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Remedies &amp; Police Action</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Legal Recourse: What to Do If Trapped in a Settlement Scam
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you already sent money to a fake recovery agent, you must act fast. Fast action can freeze the fraudster account and hold the bank responsible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Phone className="w-4 h-4" />
                    <span>Call Cyber Crime Helpline (1930)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Call 1930 or report at cybercrime.gov.in within 24 hours. Quick action can freeze the fraudster account before they withdraw cash.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>File Police FIR for Fraud</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a police complaint for cheating under BNS Section 318(4) and forgery under Section 336.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Bank Liability under RBI Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI rules, banks are legally responsible for wrongful acts by their recovery agents. File a formal complaint holding the bank accountable.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Court Injunction</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Approach the Consumer Commission to stop the bank from adding more penal interest during the inquiry.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Bank Grievance to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank Grievance to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the branch ignores your complaint or agents continue to threaten you, use the official RBI grievance escalation system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Level</th>
                      <th className="p-3">Official Authority</th>
                      <th className="p-3">Response Time</th>
                      <th className="p-3">Action and Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Stops rogue agent calls, audits the ledger, and reviews fake letters.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Investigates agent fraud and approves genuine settlement terms.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in to penalize lenders and adjust stolen funds.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Procedural Timeline: Sanction to NDC Issuance */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Procedural Timeline: Sanction to NDC Issuance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Closing a loan through a settlement follows a clear schedule. Understanding this timeline helps you track your progress from verification to your final closure letter.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Days</th>
                      <th className="p-3">Main Action</th>
                      <th className="p-3">Check Point</th>
                      <th className="p-3">Result for Borrower</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3">Receive OTS Sanction Letter</td>
                      <td className="p-3">Check letterhead, officer code, and CBS reference.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Stops fake offers early</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to 7</td>
                      <td className="p-3">Branch System Check</td>
                      <td className="p-3">Branch manager confirms the approval on their system.</td>
                      <td className="p-3 text-emerald-700 font-semibold">100% verified approval</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 8 to 15</td>
                      <td className="p-3">Execute Payment</td>
                      <td className="p-3">Pay directly into your loan account via RTGS/NEFT.</td>
                      <td className="p-3 text-slate-700">Bank creates payment UTR</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 16 to 30</td>
                      <td className="p-3">Account Balance Zeroed</td>
                      <td className="p-3">Credit committee writes off remaining waived sum.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Loan balance shows zero</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 45</td>
                      <td className="p-3">No Dues Certificate Issued</td>
                      <td className="p-3">Bank delivers official closure letter.</td>
                      <td className="p-3 text-emerald-700 font-bold">Full legal freedom from debt</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 46 to 60</td>
                      <td className="p-3">CIBIL Report Updated</td>
                      <td className="p-3">Bank marks the loan as Settled on credit bureaus.</td>
                      <td className="p-3 text-slate-700">Clean legal record updated</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Scenarios: ARC Transfers & Digital Portals */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Complex Scenarios &amp; Special Situations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Specialized Scenarios: ARC Transfers &amp; Digital Portals
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some loan settlements involve extra legal steps. Here is how to handle complex loan cases safely.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Asset Reconstruction Company (ARC) Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your bank sold your bad loan to an ARC, your original bank cannot settle it. The settlement letter must come directly from the authorized trust of the ARC.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-600" />
                    Digital App &amp; Fintech Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you used a mobile lending app, check the registered NBFC partner. The settlement letter must come from the licensed NBFC, not from the mobile app brand.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Co-Borrower &amp; Guarantor Discharge
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure the settlement letter clearly states that all co-borrowers and guarantors are freed from debt under Section 135 of the Contract Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    Installment-Based Settlements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you agree to pay in two or three parts, ensure the letter lists exact payment dates and includes a fair grace period for banking holidays.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 13: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Bank OTS Letter Verification
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions about checking settlement letters, avoiding fraud, and securing an official No Dues Certificate.
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

            {/* SECTION 14: Citations & Outbound Authority Grid */}
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
                  <strong>Reserve Bank of India Master Directions:</strong> RBI Guidelines on Compromise Settlements and Technical Write-offs (RBI/2023-24/40).
                </li>
                <li>
                  <strong>Reserve Bank of India Guidelines on Managing Risks in Outsourcing:</strong> RBI/2022-23/96, Mandating Vicarious Lender Liability for Agent Misconduct.
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita, 2023 (BNS):</strong> Section 318(4) (Cheating) and Sections 336/338 (Forgery of Valuable Security and Official Documents).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 135, Discharge of Personal Guarantors upon Composition with Principal Debtor.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Rules Governing Accurate Settlement Status Reporting to CIBIL and CRIF.
                </li>
              </ul>

              {/* Outbound Authority Badges */}
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
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Bureau</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Circular on OTS Settlement
                  </Link>
                  <Link href="/fake-legal-notice-from-advocate-whatsapp" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Fake WhatsApp Legal Notices
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply Guide
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Loan Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Agent Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Rules
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Debt Settlement
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Cheating Defense
                  </Link>
                  <Link href="/does-loan-settlement-discharge-guarantor-section-135-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Guarantor Discharge Rules
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Seizure Protection
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Notice Defense
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
                Specialist in banking compliance, loan settlement fraud prevention, RBI Fair Practices Code enforcement, and borrower protection against counterfeit compromise agreements.
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
                  FREE DOCUMENT AUDIT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Unsure If Your OTS Letter Is Real?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal verification specialists cross-check your sanction letter with bank records, spot forged recovery agent stamps, and ensure 100% safe loan closure.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Verify Settlement Letter Free
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
                  <span>Confidential • Legal Protection Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Scam Risk:</strong> CBS bank approval verification before you pay.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Safe Account Remittance:</strong> Payments routed solely to your loan account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Direct escalation against fraudulent agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues Certificate within 30 days.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-circular-on-loan-settlement-ots"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Official RBI Circular on Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Compromise settlement rules &rarr;</span>
                </Link>

                <Link
                  href="/fake-legal-notice-from-advocate-whatsapp"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Fake WhatsApp Legal Notices
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">How to verify &amp; reply &rarr;</span>
                </Link>

                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get NOC After Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Ensure formal bank debt closure &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
