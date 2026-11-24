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

export default function HomeRenovationPersonalLoanClient() {
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
    { id: 'statutory-framework', label: '1. Zero Mortgage Lien Law' },
    { id: 'unsecured-vs-secured', label: '2. Unsecured vs Secured Loan Rules' },
    { id: 'legal-risk-matrix', label: '3. Legal Risk Comparison Matrix' },
    { id: 'cpc-house-protection', label: '4. Civil Suits & Section 60 CPC' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Protect Your House & Settle' },
    { id: 'borrower-rights', label: '7. Bank Lien, Harassment & Court Law' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Missed EMI to OTS Closure' },
    { id: 'specialized-scenarios', label: '10. Same-Bank, Joint & Tax Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank seize my house if I default on an unsecured home renovation personal loan?',
      a: 'No. A personal loan taken for home repairs puts no mortgage or lien on your house. Since you did not hand over your title deeds for this loan, the bank cannot lock or seize your home.'
    },
    {
      q: 'Does the SARFAESI Act apply to a personal loan used for home repairs?',
      a: 'No. The SARFAESI Act of 2002 applies only to secured loans backed by a mortgage filed on CERSAI. A bank or NBFC cannot send a Section 13(2) or 13(4) auction notice for a personal loan.'
    },
    {
      q: 'Does spending loan money on painting or interiors create an automatic lien on my house?',
      a: 'No. Under Section 58 and Section 100 of the Transfer of Property Act, 1882, spending cash on home repairs does not create a mortgage or charge. Even if you picked home repair as the loan goal, the debt stays unsecured.'
    },
    {
      q: 'How do I check if my renovation loan is unsecured or a secured home loan?',
      a: 'Open your Key Facts Statement (KFS) and check the collateral row. Also check if you gave your registry deeds to the bank. You can search cersai.org.in to confirm no charge sits on your house.'
    },
    {
      q: 'Can a civil court freeze or attach my house before deciding the bank suit?',
      a: 'Not easily. In Raman Tech & Process Engg. Co. v. Solanki Traders (2008), the Supreme Court limited Order 38 Rule 5 CPC. Courts cannot turn an unsecured loan into a secured debt. The bank must prove you are secretly selling assets to dodge a court decree.'
    },
    {
      q: 'Does Section 60 CPC protect my main house from attachment after a court decree?',
      a: 'Yes, in key cases. Section 60(1)(c) CPC shields houses of farmers, labourers, and domestic staff across India. In Delhi, Punjab, and Haryana, Section 60(1)(ccc) CPC shields one main self-occupied house of a living debtor from attachment in a money decree.'
    },
    {
      q: 'What if the same bank holds my regular home loan and my renovation personal loan?',
      a: 'Keep paying your home loan EMIs on time. The bank cannot use SARFAESI on your house for a personal loan default. Once your home loan ends, High Courts bar the bank from holding your deeds under Section 171 Contract Act. RBI rules also mandate a ₹5,000 daily fine past 30 days.'
    },
    {
      q: 'Can a bank attach a house owned by my spouse or parents for my personal loan?',
      a: 'No. A personal loan binds only the person who signed it. A bank cannot touch a house owned solely by your spouse or parents unless they signed as a co-borrower or guarantor.'
    },
    {
      q: 'What should I do if recovery agents visit my home and threaten to seal it?',
      a: 'Keep your gate closed and ask for their ID card and bank letter. Record every threat on your phone. Under RBI rules, agents can visit only from 8:00 AM to 7:00 PM. Call Dial 112 for house trespass under Section 329 BNS and alert the Bank Nodal Officer.'
    },
    {
      q: 'How does CredSettle help settle a home renovation personal loan safely?',
      a: 'CredSettle checks your KFS and proves zero mortgage lien on your house. Our legal team sends notices to stop agent threats and replies to court claims. We then negotiate a written One-Time Settlement (OTS) so you close the debt and get your No Dues Certificate.'
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
            <span>Transfer of Property Act, Section 60 CPC &amp; RBI Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Why Unsecured Renovation Loans Carry Zero Mortgage Lien
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Missed EMIs on a personal loan taken for home repairs? Your house stays safe from bank seizure and SARFAESI sale. Learn your rights under Indian property law, Section 60 CPC, and RBI rules to stop threats and settle cleanly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your House &amp; Settle Now</span>
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
                  Protected under Section 58 TPA, Section 60 CPC, and RBI Circular DOR.ORG.REC.65.
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
                <span>EXECUTIVE BRIEF: HOME RENOVATION PERSONAL LOAN HOUSE SAFETY</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Mortgage or Lien:</strong> Spending loan cash on paint, tiles, or a kitchen does not give the bank a lien on your home.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No SARFAESI Sale:</strong> Banks and NBFCs cannot send Section 13(2) notices or lock your home for an unsecured loan.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Court Decree Needed First:</strong> A bank cannot touch your assets unless it files a civil suit and wins a final court decree.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Section 60 CPC Shield:</strong> Indian law shields key homes from court sale. In Delhi, Punjab, and Haryana, one main house stays safe.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Hostage Title Deeds:</strong> Even if the same bank holds your paid home loan deeds, courts bar it from keeping them for a personal loan.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Law: Why Your House Has Zero Mortgage Lien */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Indian Property Law &amp; Loan Type</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Law: Why Your House Has Zero Mortgage Lien
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian families take a personal loan to paint rooms, fix leaks, or redo a kitchen. Banks often sell these loans as Home Renovation Personal Loans. When a job loss or health crisis stops your EMIs, agents may threaten to seal or sell your house.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Those threats have no force under Indian law. Under Section 58 of the Transfer of Property Act, 1882, a valid mortgage needs strict proof. You must sign a registered mortgage deed or hand over your title deeds to back that exact loan. If your registry papers stayed at home, the bank holds zero mortgage.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Using loan cash for home repairs never creates a lien on its own. Under Section 100 of the Transfer of Property Act, a house charge needs a clear deed or a direct rule of law. Even if you chose home repair on the app or gave a bill, the loan stays 100% unsecured.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI rules back this clear shield. Under RBI Key Facts Statement Circular RBI/2024-25/18 (dated April 15, 2024), lenders must mark clearly in your KFS whether a loan is unsecured. Without a valid mortgage and a CERSAI entry under Section 26D of the SARFAESI Act, the bank holds zero direct right over your home.
              </p>
            </section>

            {/* SECTION 2: Unsecured Renovation Loan vs Secured Home Loan Rules */}
            <section id="unsecured-vs-secured" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Loan Type Audit &amp; CERSAI Check</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Unsecured Renovation Loan vs Secured Home Loan Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers mix up two very different loans. A Home Renovation Personal Loan is an unsecured cash loan based only on your salary and credit score. A Home Improvement Loan is a secured housing loan backed by your house title deeds.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check three quick clues to know which loan you took. First, did you hand over your original house sale deed to the bank? Second, did the bank check your house value and run a title check? Third, check your interest rate. Personal loans charge 11% to 18%, while secured home loans charge near 8.5% to 10.5%.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you kept your sale deed and paid no mortgage stamp duty, your loan is unsecured. For an unsecured loan, the SARFAESI Act of 2002 does not apply. The bank cannot lock your front door, seek a Magistrate order, or print an auction notice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Watch out for one trap: a Home Loan Top-Up from your main housing bank. A top-up loan often shares the mortgage you signed for your main home loan. Always read your KFS and run a free check on the CERSAI portal before you answer any bank notice.
              </p>
            </section>

            {/* SECTION 3: Legal Risk Comparison: Unsecured vs Secured Default */}
            <section id="legal-risk-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Security Interest &amp; Recovery Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Risk Comparison: Unsecured vs Secured Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your home stays safe when the bank holds no mortgage on it. A bank with zero collateral has far less power than a home loan lender.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check the table below to see the real risk. It shows how Indian law treats a personal loan for repairs versus a secured home loan after a 90-day default.
              </p>

              {/* Representative Comparison Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Home Renovation Loan Legal Risk Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Unsecured Personal vs Secured Mortgage</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Legal Parameter</th>
                        <th className="p-3">Unsecured Renovation Loan</th>
                        <th className="p-3">Secured Home Improvement Loan</th>
                        <th className="p-3 text-right">Impact on Your House</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Title Deeds &amp; Collateral</td>
                        <td className="p-3 text-emerald-700 font-semibold">Zero deeds pledged; no mortgage</td>
                        <td className="p-3">Original sale deed held via MODT</td>
                        <td className="p-3 text-right font-bold text-emerald-700">100% Free of Lien</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">CERSAI Registry Filing</td>
                        <td className="p-3 text-emerald-700 font-semibold">No charge can be filed</td>
                        <td className="p-3">Mandatory CERSAI security entry</td>
                        <td className="p-3 text-right font-bold text-slate-700">Check Zero Lien Online</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">SARFAESI Act Auction</td>
                        <td className="p-3 text-emerald-700 font-semibold">Strictly barred by law</td>
                        <td className="p-3 text-rose-600 font-semibold">Allowed after 90-day NPA mark</td>
                        <td className="p-3 text-right font-bold text-emerald-700">No Direct Bank Seizure</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Bank Legal Recovery Path</td>
                        <td className="p-3">Civil suit or DRT (₹20 Lakh+)</td>
                        <td className="p-3">Section 13(4) &amp; DM Section 14 order</td>
                        <td className="p-3 text-right font-bold text-amber-700">Slow Court Process</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">One-Time Settlement (OTS)</td>
                        <td className="p-3 text-[#1886ff]">Strong waiver leverage (40% to 65%)</td>
                        <td className="p-3">Low waiver due to house equity</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Clean Legal Debt Exit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Civil Suits & Section 60 CPC House Protection Law */}
            <section id="cpc-house-protection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Civil Procedure &amp; Court Limits</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Civil Suits &amp; Section 60 CPC House Protection Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Since a bank cannot use SARFAESI here, it must go to a court or tribunal. For dues under ₹20 Lakh, it can file a civil money suit (often under Order 37 CPC) or start arbitration. For dues of ₹20 Lakh or more, a bank can go to the Debt Recovery Tribunal (DRT) under the RDB Act, 1993.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a pending suit, a bank may try to freeze your house under Order 38 Rule 5 CPC. This rule covers attachment before final judgment. In Raman Tech &amp; Process Engg. Co. v. Solanki Traders (2008), the Supreme Court put strict bars on this power. Courts cannot turn an unsecured loan into a secured debt. The bank must show clear proof that you are secretly selling assets to dodge a court order.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A bank can ask to attach assets only after it wins a final decree and files under Order 21 CPC. Even then, Section 60 of the Code of Civil Procedure, 1908 shields vital assets. Across India, Section 60(1)(c) CPC guards houses owned and used by farmers, labourers, and domestic staff.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Delhi, Punjab, and Haryana, state law Section 60(1)(ccc) CPC gives urban borrowers an even stronger shield. It blocks court sale of one main self-occupied house of a debtor in a money decree. Keep two clear rules in mind. First, rented or shop parts of the house lose this shield. Second, in Sheela Gehlot v. Mohini Hardayal Singh, the Supreme Court held this right is personal to the living debtor and does not pass to heirs.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Renovation Loan House Safety Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This chart shows why a personal loan for home repairs puts zero lien on your house. It maps your SARFAESI shield, Section 60 CPC rights, and clean OTS debt exit.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/home-renovation-personal-loan-default-house-immunity.jpg"
                    alt="Unsecured Home Renovation Personal Loan Default House Safety and Zero Mortgage Lien Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle House Immunity Framework • Transfer of Property Act &amp; CPC Compliant</span>
                  <a
                    href="/images/infographics/home-renovation-personal-loan-default-house-immunity.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Protect Your House & Settle Debt */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Protect Your House &amp; Settle Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Have you missed EMIs on a home repair personal loan and faced threats about your house? Follow these six clear steps to keep your home safe and close the debt cleanly.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Your Loan Agreement &amp; Key Facts Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your sanction letter and Key Facts Statement (KFS) from the bank app. Check that the loan type says Unsecured Personal Loan and lists Nil under collateral.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Run a Public Asset Check on CERSAI
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open the CERSAI site at cersai.org.in and search your house address or plot number. Make sure your personal loan lender did not file any wrong lien on your home.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Check Agent IDs &amp; Record Illegal Threats
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Keep your gate locked if agents arrive without notice. Ask for their ID card and bank letter. Record any seizure threat and email proof to the bank Nodal Officer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Reply on Time to Every Legal or Court Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never ignore a court summons, cheque bounce notice, or arbitration letter. Ask a lawyer to send a timely reply so the bank cannot win a one-sided order.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Challenge Extra Penal Interest Under RBI Rules
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI Circular DoR.MCS.REC.28 (effective April 1, 2024), banks cannot add interest on late fees. Ask for a clean sheet showing true principal before you offer a figure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Close Debt via a Written One-Time Settlement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once your loan crosses 90 days past due, offer a fair lump sum under RBI OTS rules. Check the written OTS letter with the branch first. Then pay via bank transfer and collect your No Dues letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Rights: Bank Lien, Harassment & Court Law */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Court Rulings &amp; Criminal Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Rights: Bank Lien, Harassment &amp; Court Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts and the RBI guard unsecured borrowers from false property threats. Both civil court rulings and criminal laws back your right to stay safe in your home.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Use these four core legal shields if a bank or recovery agency crosses the line.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: Raman Tech v. Solanki Traders (2008)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court ruled that Order 38 Rule 5 CPC cannot turn an unsecured loan into a secured debt. Courts reject freeze requests filed just to scare a borrower.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Bombay HC: Sunil v. Union Bank of India (2022)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The High Court held that a bank cannot use Section 171 general lien to hold home loan deeds once that home loan is paid, even if a personal loan is past due.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>House Trespass &amp; Threats Under BNS 2023</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stepping inside your home without consent is House Trespass under Section 329 BNS. Threats to your family breach Section 351 BNS. Shouting at your gate to shame you is Defamation under Section 356 BNS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Recovery Agent Circular (Aug 2022)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular RBI/2022-23/108 (DOR.ORG.REC.65), agents can call or visit only from 8:00 AM to 7:00 PM. Banks face RBI fines when agents make fake seizure threats.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Act fast if agents threaten to seal your house or if a bank holds your paid-off deeds. Dial 112 for quick police help during house trespass, and use the three-tier RBI ladder below.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
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
                      <td className="p-3">Logs your complaint, recalls harsh agents, and confirms unsecured loan status in writing.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Cuts unlawful penal charges, stops cross-lien abuse, and sends files for OTS review.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Passes binding orders on cms.rbi.org.in for harassment, unfair fees, or held deeds.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Default Timeline: Missed EMI to Legal OTS Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default Timeline: Missed EMI to Legal OTS Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing each step of the bank cycle stops fear. See how your house stays free from SARFAESI at every single stage of a missed personal loan.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Account Stage</th>
                      <th className="p-3">Lender Action (No House Seizure)</th>
                      <th className="p-3">Borrower Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 Overdue</td>
                      <td className="p-3">SMS alerts, emails, and soft reminder calls from the bank desk.</td>
                      <td className="p-3">Email the bank about your hardship and ask for short-term relief.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1 Delinquent</td>
                      <td className="p-3">Tele-calling teams follow up; late fees show up on your account.</td>
                      <td className="p-3">Check your KFS and keep proof of job loss or medical bills.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2 Pre-NPA</td>
                      <td className="p-3">Field staff may visit; bank sends a formal loan recall warning.</td>
                      <td className="p-3">Enforce RBI 8 AM to 7 PM rules and record any false seizure threats.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91+</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Loan turns NPA. No SARFAESI allowed; bank checks notice or OTS path.</td>
                      <td className="p-3 font-bold text-amber-800">Start OTS talks once the file shifts to the bank recovery desk.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Month 4 to 9</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Legal &amp; Lok Adalat</td>
                      <td className="p-3">Bank may send arbitration, Section 138, or Lok Adalat notices.</td>
                      <td className="p-3 font-bold text-slate-900">Reply through a lawyer and seek a strong cut on interest and fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 to 12</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">OTS &amp; NOC Closure</td>
                      <td className="p-3">Bank issues a written OTS letter and closes recovery after payment.</td>
                      <td className="p-3">Verify letter at branch, pay via bank transfer, and collect NOC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Same-Bank Home Loan, Joint & Tax */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Same-Bank Home Loan, Joint &amp; Tax
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Family home loans often overlap with repair loans. Here is how Indian law handles four real-life cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Same Bank Holds Home Loan &amp; Renovation Loan
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Keep paying your regular home loan EMIs on time. The bank cannot use SARFAESI for a personal loan default. Once your home loan ends, RBI Circular DoR.MCS.REC.38 mandates deed return in 30 days or a ₹5,000 daily fine.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    House Registered in Spouse or Parents Name
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A personal loan binds only the signer. A bank cannot touch a flat owned solely by your spouse or parents unless they signed as a co-borrower or guarantor.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Claimed Section 24(b) Tax Benefit or Gave Bills
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Claiming up to ₹30,000 repair interest tax relief under Section 24(b) of the Income Tax Act never creates a mortgage. Sharing repair bills gives the bank zero rights on your house.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Ancestral Homes &amp; Co-Owned Family Property
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank cannot seize a shared family home for one member&apos;s personal loan. Even with a final court decree, the lender can only claim the debtor&apos;s own share. Other family owners stay fully safe.
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
                Frequently Asked Questions: Renovation Loan House Safety
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Get clear answers on your rights after a home repair loan default. Learn how Indian courts, Section 60 CPC, and RBI rules keep your house safe.
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
                  <strong>Transfer of Property Act, 1882:</strong> Section 58(f) (Mortgage by Deposit of Title Deeds), Section 59 (Registered Mortgage), and Section 100 (Creation of Charges).
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908:</strong> Section 60(1)(c), Section 60(1)(ccc) (Delhi, Punjab &amp; Haryana Residential Exemption), Order 21 (Execution), and Order 38 Rule 5 (Attachment Before Judgment).
                </li>
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 2(1)(zf) (Security Interest Definition), Section 13 (Enforcement of Security), and Section 26D (Mandatory CERSAI Registration).
                </li>
                <li>
                  <strong>Reserve Bank of India Circulars:</strong> RBI/2022-23/108 (DOR.ORG.REC.65 on Recovery Agents), RBI/2023-24/60 (DoR.MCS.REC.38 on 30-Day Document Release), and RBI/2024-25/18 (DOR.STR.REC.13 on Key Facts Statement).
                </li>
                <li>
                  <strong>Landmark Judicial Precedents:</strong> Raman Tech &amp; Process Engg. Co. v. Solanki Traders (2008) 2 SCC 302 (SC), Sheela Gehlot v. Mohini Hardayal Singh (SC), and Sunil v. Union Bank of India (Bombay HC, 2022).
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
                  <a href="https://cersai.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CERSAI Asset Registry</span>
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
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/can-bank-attach-ancestral-property-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Ancestral Property Protection
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹5,000/Day Deed Penalty
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/civil-suit-for-recovery-of-money-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Civil Recovery Suit Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/can-recovery-agents-seize-property" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Agents Seize Property?
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
                Specialist in unsecured debt defense, Indian property law, Section 60 CPC shields, and RBI Fair Practices rules helping borrowers protect their homes and settle loans legally.
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
                  HOUSE PROTECTION &amp; OTS SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Agents Threatening to Seize Your House?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Stop false SARFAESI or home lock threats on unsecured repair loans. Our legal panel shields your house, answers bank notices, and arranges a clean One-Time Settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect My Home &amp; Settle Now
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
                  <span><strong>Loan &amp; CERSAI Audit:</strong> Confirm zero mortgage charge on your home.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop illegal home visits under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Civil &amp; Notice Defense:</strong> Clear replies to arbitration and CPC suits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified OTS &amp; NOC:</strong> Close unsecured debt with deep legal waivers.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/section-60-cpc-assets-property-exempt-from-bank-attachment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 60 CPC Exempt Assets
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Property protected from courts &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-attach-ancestral-property-for-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Ancestral Property &amp; Personal Loans
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Family home immunity rules &rarr;</span>
                </Link>

                <Link
                  href="/rbi-5000-per-day-delay-compensation-property-documents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹5,000/Day Deed Compensation
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">30-day title deed return rule &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
