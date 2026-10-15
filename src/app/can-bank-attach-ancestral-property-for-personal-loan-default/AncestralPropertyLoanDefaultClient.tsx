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
  Landmark
} from 'lucide-react';

export default function AncestralPropertyLoanDefaultClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

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
    { id: 'legal-rules-seizure', label: '1. Legal Rules on Ancestral Property' },
    { id: 'coparcenary-share-math', label: '2. Coparcenary Share vs Whole Property' },
    { id: 'property-protection-matrix', label: '3. Property Attachment Matrix' },
    { id: 'section-60-cpc-rulings', label: '4. Section 60 CPC & Court Rulings' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Family Property Shield' },
    { id: 'statutory-defense', label: '7. Stop Recovery Agent Harassment' },
    { id: 'escalation-matrix', label: '8. 3-Tier Banking Grievance Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '10. Guarantors, HUF & Legal Heirs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank directly seize or auction ancestral property for a personal loan default?',
      a: 'No. A personal loan has no home mortgage. Banks cannot use the SARFAESI Act to lock or sell your ancestral house. A bank must first file a civil suit, win a court order, and apply under Section 60 of the CPC.'
    },
    {
      q: 'Can the bank attach the entire ancestral house for one family member’s loan default?',
      a: 'No. Under Section 60 of the CPC and the Hindu Succession Act, a court can only target the borrower’s own small share. The shares of your parents, brothers, sisters, spouse, and kids stay 100% safe.'
    },
    {
      q: 'Are parents or siblings liable to pay an adult borrower’s defaulted personal loan?',
      a: 'No. Unless a parent or sibling signed the loan paper as a co-borrower or guarantor, they owe nothing. Agents who harass your parents or threaten to lock the family house break RBI rules.'
    },
    {
      q: 'Does the SARFAESI Act apply to unsecured personal loans or credit card defaults?',
      a: 'No. Section 13 of the SARFAESI Act, 2002 applies only to secured loans where title deeds were pledged to the bank. Sending a SARFAESI threat for a personal loan is an illegal agent trick.'
    },
    {
      q: 'How can other family members stop wrongful court attachment of ancestral property?',
      a: 'Your family members (coparceners) can file a formal claim objection in court under Order 21 Rule 58 of the CPC. The judge will stay the sale and protect their rightful family shares.'
    },
    {
      q: 'Are sons or daughters liable for their father’s personal loan under pious obligation?',
      a: 'No. Section 6(4) of the Hindu Succession (Amendment) Act, 2005 ended the old rule of pious obligation for loans taken after December 20, 2004. Heirs only pay up to the value of assets they actually inherit.'
    },
    {
      q: 'Is the main residential house of a borrower exempt from court attachment?',
      a: 'Yes. Under Section 60(1)(c) of the CPC, houses of farmers and workers cannot be attached. Also, in Delhi, Punjab, Haryana, and Chandigarh, Section 60(1)(ccc) protects one main family home from unsecured debt decrees.'
    },
    {
      q: 'Can a bank obtain Attachment Before Judgment on ancestral property under Order 38 Rule 5?',
      a: 'Courts rarely grant Attachment Before Judgment under Order 38 Rule 5 CPC for personal loans. In Raman Tech & Process Engg. Co. v. Solanki Traders, the Supreme Court held that banks must prove active fraud first.'
    },
    {
      q: 'What happens if a family member signed as a guarantor for the personal loan?',
      a: 'Under Section 128 of the Indian Contract Act, a guarantor has the same liability as the main borrower. If a parent signed as a guarantor, the bank can claim against both the borrower’s and guarantor’s shares in court.'
    },
    {
      q: 'How can I permanently protect my ancestral property from personal loan litigation?',
      a: 'The best way is to close the loan through a One-Time Settlement (OTS) before a civil court case ends. CredSettle helps you settle personal loans with 50% to 75% waivers and get a No Dues Certificate.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-12 pb-10 sm:pt-14 sm:pb-12 md:pt-18 md:pb-14 px-4 sm:px-6 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-[11px] sm:text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Family Property Rights &amp; Unsecured Debt Legal Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs break-words">
            Can Bank Attach Ancestral Property for Personal Loan Default?
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed px-1">
            A clear legal guide for borrowers and families facing personal loan default in India. Learn Section 60 CPC rules, coparcenary share limits, why SARFAESI does not apply, and how to stop agent threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs sm:text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Family Property</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT (Fully Mobile & Tablet Responsive) */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-5 md:px-8 py-6 sm:py-8 md:py-12">
        
        {/* MOBILE & TABLET COLLAPSIBLE TOC (Visible on <lg screens) */}
        <div className="lg:hidden mb-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full flex items-center justify-between p-4 text-left bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer"
              aria-expanded={mobileTocOpen}
            >
              <span className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800">
                <BookOpen className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Quick Navigation &amp; Table of Contents</span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                  mobileTocOpen ? 'rotate-180 text-[#1886ff]' : ''
                }`}
              />
            </button>
            {mobileTocOpen && (
              <nav className="p-3 sm:p-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs bg-white">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => setMobileTocOpen(false)}
                      className={`block py-2 px-3 rounded-lg transition-all duration-150 leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC (Desktop) ================= */}
          <aside className="sticky top-6 self-start hidden lg:block">
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
                  <span>Ancestral Property Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 60 CPC 1908 and Hindu Succession Act 1956.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-7 sm:space-y-8 md:space-y-10 min-w-0 w-full">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-4 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>EXECUTIVE BRIEF: ANCESTRAL PROPERTY RULES ON PERSONAL LOAN DEFAULT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Direct Seizure Under SARFAESI:</strong> Personal loans have no collateral. Banks cannot use the SARFAESI Act to lock or sell your ancestral home.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Family Shares Stay 100% Safe:</strong> A bank can never take the whole family house. Only the borrower’s own small share can ever face a court claim.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Civil Court Order Needed:</strong> To touch even your small share, a bank must file a civil suit, win a decree, and apply under Section 60 of the CPC.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Order 21 Rule 58 CPC Shield:</strong> Parents, brothers, sisters, and kids can file a claim in court to stop any wrong attachment of the family home.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Pious Duty for Family:</strong> Under Section 6(4) of the Hindu Succession Act, parents and kids do not have to pay another member’s personal loan.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Rules: Can Banks Seize Ancestral Property? */}
            <section id="legal-rules-seizure" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Unsecured Debt Law &amp; Property Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Rules: Can Banks Seize Ancestral Property?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you miss EMIs on a personal loan or credit card, agents often visit your home. They may threaten to seal your ancestral house or sell your family land in a few days. These threats are fake and break Indian law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A personal loan is an unsecured loan. You did not pledge any house, gold, or land to get the money. Because you gave no property papers to the bank, the lender has no direct right over your family home.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many agents try to scare families by naming the SARFAESI Act, 2002. Under Section 13 of the SARFAESI Act, a bank can only seize property that was mortgaged for a secured loan, like a home loan. A bank can never use SARFAESI for a personal loan default.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What can a bank actually do? It must go to a civil court or the Debt Recovery Tribunal (DRT) if the debt is above ₹20 Lakhs. The bank must fight a full trial and win a money decree from the judge. Only then can it ask the court to attach your personal share under Section 60 of the Code of Civil Procedure (CPC), 1908.
              </p>
            </section>

            {/* SECTION 2: Coparcenary Share vs Whole Family Property Rights */}
            <section id="coparcenary-share-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Hindu Succession Act &amp; Share Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Coparcenary Share vs Whole Family Property Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What is ancestral property in India? It is family land or a house passed down through four generations of a Hindu Undivided Family (HUF) without being split. Under the Hindu Succession Act, 1956 (amended in 2005), every son and daughter is a joint owner by birth. In law, each joint owner is called a coparcener.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 60(1) of the CPC, a court can only attach property that belongs to the borrower alone. You do not own the whole ancestral house. You only hold a small, undivided share in that property along with your family.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule protects your family. Even if a bank wins a civil case after many years, the court cannot attach the whole house. The shares of your father, mother, brothers, sisters, and kids stay 100% untouched. Also, no buyer wants to buy a tiny unsplit share in a family home, so banks prefer to settle the loan instead.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span className="font-bold text-xs sm:text-sm">Ancestral Property Share vs Personal Loan Settlement Math</span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-blue-300 font-mono">₹1.20 Crore Joint Family House (4 Co-Owners)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[520px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-2.5 sm:p-3">Property / Debt Part</th>
                        <th className="p-2.5 sm:p-3">Value / Bank Claim</th>
                        <th className="p-2.5 sm:p-3">Legal Status</th>
                        <th className="p-2.5 sm:p-3 text-right">Safe Family Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-2.5 sm:p-3 font-medium text-slate-900">Parents &amp; Siblings Share (3/4th Share)</td>
                        <td className="p-2.5 sm:p-3">₹90,00,000</td>
                        <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">100% Safe (Order 21 Rule 58 CPC).</td>
                        <td className="p-2.5 sm:p-3 text-right font-bold text-emerald-700">₹90,00,000 (Safe).</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 sm:p-3 font-medium text-slate-900">Borrower Unsplit Share (1/4th Share)</td>
                        <td className="p-2.5 sm:p-3">₹30,00,000</td>
                        <td className="p-2.5 sm:p-3 text-amber-600 font-semibold">Needs Civil Suit, Decree &amp; Partition.</td>
                        <td className="p-2.5 sm:p-3 text-right font-bold text-emerald-700">₹30,00,000 (Saved via OTS).</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 sm:p-3 font-medium text-slate-900">Unsecured Personal Loan Claim</td>
                        <td className="p-2.5 sm:p-3 text-rose-600 font-bold">₹10,50,000</td>
                        <td className="p-2.5 sm:p-3 text-blue-600 font-semibold">Civil Debt: Settled under RBI OTS Rules.</td>
                        <td className="p-2.5 sm:p-3 text-right font-bold text-slate-900">₹3,40,000 (Paid in OTS).</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-2.5 sm:p-3">Total Family Home Saved</td>
                        <td className="p-2.5 sm:p-3 text-slate-900">₹1,20,00,000 Intact</td>
                        <td className="p-2.5 sm:p-3 text-emerald-700">67% Loan Waiver &amp; Zero Home Loss.</td>
                        <td className="p-2.5 sm:p-3 text-right text-[#1886ff] text-xs sm:text-sm">100% House Safe.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Property Vulnerability: Attachment Comparison Matrix */}
            <section id="property-protection-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Property Classification &amp; Legal Vulnerability</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Property Vulnerability: Attachment Comparison Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Can a court attach a house or land? It depends on who owns the title deed and whether Section 60 of the CPC protects that asset.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check the table below to see how Indian courts treat ancestral property, parents’ self-bought houses, farm land, and main family homes during loan recovery.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-2.5 sm:p-3">Property Type</th>
                      <th className="p-2.5 sm:p-3">Law</th>
                      <th className="p-2.5 sm:p-3">SARFAESI Action</th>
                      <th className="p-2.5 sm:p-3">Civil Court Attachment</th>
                      <th className="p-2.5 sm:p-3">Best Legal Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-2.5 sm:p-3 font-bold text-slate-900">Parents’ Self-Bought House</td>
                      <td className="p-2.5 sm:p-3">Transfer of Property Act</td>
                      <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">Not Allowed.</td>
                      <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">100% Safe (Zero Borrower Right).</td>
                      <td className="p-2.5 sm:p-3">Send legal warning to stop visits.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 sm:p-3 font-medium text-slate-900">Family Members’ Ancestral Shares</td>
                      <td className="p-2.5 sm:p-3">Hindu Succession Act, 1956</td>
                      <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">Not Allowed.</td>
                      <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">100% Safe from Borrower Debt.</td>
                      <td className="p-2.5 sm:p-3">File claim under Order 21 Rule 58 CPC.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 sm:p-3 font-medium text-slate-900">Farmer’s House &amp; Farm Tools</td>
                      <td className="p-2.5 sm:p-3">CPC Sec 60(1)(b) &amp; (c)</td>
                      <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">Not Allowed.</td>
                      <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">Fully Exempt by Law.</td>
                      <td className="p-2.5 sm:p-3">Show land records in civil court.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 sm:p-3 font-medium text-slate-900">Main Family Home (Delhi/PB/HR)</td>
                      <td className="p-2.5 sm:p-3">CPC Section 60(1)(ccc)</td>
                      <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">Not Allowed.</td>
                      <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">Exempt for Unsecured Loans.</td>
                      <td className="p-2.5 sm:p-3">Claim main home shield in court.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 sm:p-3 font-medium text-slate-900">Borrower’s Unsplit Ancestral Share</td>
                      <td className="p-2.5 sm:p-3">CPC Section 60(1)</td>
                      <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">Not Allowed.</td>
                      <td className="p-2.5 sm:p-3 text-amber-600 font-semibold">Only After Decree &amp; Partition.</td>
                      <td className="p-2.5 sm:p-3">Settle loan via OTS before decree.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 sm:p-3 font-medium text-slate-900">Borrower’s Own Commercial Plot</td>
                      <td className="p-2.5 sm:p-3">Order 21 Rule 54 CPC</td>
                      <td className="p-2.5 sm:p-3 text-emerald-600 font-semibold">No (If Unpledged).</td>
                      <td className="p-2.5 sm:p-3 text-rose-600 font-semibold">Can Be Attached After Decree.</td>
                      <td className="p-2.5 sm:p-3">Close debt early through OTS deal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Section 60 CPC & Supreme Court Rulings on Attachment */}
            <section id="section-60-cpc-rulings" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Statutory Exemptions &amp; Supreme Court Rulings</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Section 60 CPC &amp; Supreme Court Rulings on Attachment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law gives strong shields so that an unpaid personal loan does not put a family on the street. These rules are set in the Code of Civil Procedure, 1908, and the Hindu Succession Act, 1956.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, Section 6(4) of the Hindu Succession (Amendment) Act, 2005 ended the old rule of pious obligation. For any debt taken after December 20, 2004, no court can force a son, daughter, or grandson to pay a father’s unsecured loan out of religious duty.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, banks sometimes ask a court to freeze property before the trial ends under Order 38 Rule 5 of the CPC (Attachment Before Judgment). In Raman Tech &amp; Process Engg. Co. v. Solanki Traders (2008) 2 SCC 302, the Supreme Court ruled that a judge cannot attach property just because a loan is unpaid. The bank must prove that the borrower is secretly selling the house to cheat creditors.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, Section 60(1)(c) of the CPC protects houses occupied by farmers and workers. Also, under Section 60(1)(ccc) in Delhi, Punjab, Haryana, and Chandigarh, one main residential house of a borrower is fully exempt from attachment for unsecured loans, as held in Sikandar Singh v. Harjit Pal Singh.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Ancestral Property Defense Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart shows the four legal walls that guard your ancestral home and family shares against personal loan recovery in India.
              </p>

              <div className="bg-white p-3.5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-attach-ancestral-property-for-personal-loan-default.jpg"
                    alt="Ancestral Property Protection Against Personal Loan Default Recovery"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Family Property Defense Framework • Section 60 CPC &amp; HSA Compliant</span>
                  <a
                    href="/images/infographics/can-bank-attach-ancestral-property-for-personal-loan-default.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6-Stage Family Property Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If recovery agents or bank letters threaten to seize your ancestral house or your parents’ home, follow these six simple steps to protect your family and settle your loan.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">1</span>
                    <span>Stage 1: Check Your Title Deeds &amp; Loan Papers</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Make sure your personal loan is unsecured and that no parent signed as a guarantor. Keep your land records or parents’ sale deed ready to show that you do not own the house alone.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">2</span>
                    <span>Stage 2: Ignore Fake SARFAESI &amp; Sealing Threats</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If agents send fake house auction messages on WhatsApp or threaten to lock your gate, save the proof. No agent or bank officer can enter or seal an unpledged home without a civil court order.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">3</span>
                    <span>Stage 3: Send a Legal Reply to the Bank</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a formal lawyer reply citing Section 60 of the CPC, Section 6(4) of the Hindu Succession Act, and RBI rules. Warn the bank that harassing your parents or co-owners will lead to an RBI complaint.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">4</span>
                    <span>Stage 4: File Order 21 Rule 58 Claim (If Suit Filed)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If a bank wins a civil decree and lists the family home for attachment, your parents or siblings can file an objection under Order 21 Rule 58 CPC. The court will protect their shares right away.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">5</span>
                    <span>Stage 5: Negotiate a One-Time Settlement (OTS)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Banks know that splitting an ancestral share in civil court takes 5 to 10 years. You can use this leverage to negotiate a One-Time Settlement (OTS) and cut 50% to 75% off your loan dues.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">6</span>
                    <span>Stage 6: Get Your No Dues Certificate</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check the official bank OTS letter before paying the settlement amount. Once paid, collect your No Dues Certificate (NDC) to close the loan forever and keep your family home safe.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Defense: Stop Recovery Agent Harassment */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Criminal &amp; Civil Protections for Families</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defense: Stop Recovery Agent Harassment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Agents who shout outside your family home, paste notices on your gate, or threaten your parents commit serious crimes in India. You and your family can use four strong laws to stop them at once.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4 flex-shrink-0" />
                    <span>BNS Section 351 &amp; 329 (Intimidation &amp; Trespass)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stepping into your home compound without consent or threatening parents with fake house seizure is criminal trespass (Section 329) and intimidation (Section 351) under the Bharatiya Nyaya Sanhita, 2023.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4 flex-shrink-0" />
                    <span>RBI Master Circular on Recovery Agents</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI rules strictly ban agents from calling or visiting family members, calling before 8:00 AM or after 7:00 PM, or shaming borrowers in front of neighbours.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4 flex-shrink-0" />
                    <span>Order 21 Rule 58 CPC Third-Party Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a bank wrongly lists a joint family house in a court execution case, any family member can file a claim under Order 21 Rule 58 CPC. This stops the sale right away.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>Article 300A Constitutional Property Right</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Article 300A of the Constitution of India, no one can take your home without a valid court order. Private recovery agents have zero power to lock any house.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Banking Grievance Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If agents bother your parents at your ancestral home or send fake court notices, file a complaint through this three-step RBI banking channel.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[540px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-2.5 sm:p-3">Grievance Tier</th>
                      <th className="p-2.5 sm:p-3">Banking Authority</th>
                      <th className="p-2.5 sm:p-3">Time Limit</th>
                      <th className="p-2.5 sm:p-3">Action &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-2.5 sm:p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-2.5 sm:p-3">Bank Grievance Officer</td>
                      <td className="p-2.5 sm:p-3 font-mono">7 to 10 Working Days.</td>
                      <td className="p-2.5 sm:p-3">Stops agent visits to your parents’ home and notes your hardship.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 sm:p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-2.5 sm:p-3">Principal Nodal Officer</td>
                      <td className="p-2.5 sm:p-3 font-mono">14 to 21 Working Days.</td>
                      <td className="p-2.5 sm:p-3">Removes rogue agencies, stops fake notices, and starts OTS talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-2.5 sm:p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-2.5 sm:p-3">RBI Integrated Ombudsman</td>
                      <td className="p-2.5 sm:p-3 font-mono">30 Days Post-PNO.</td>
                      <td className="p-2.5 sm:p-3">Fines the bank via cms.rbi.org.in for harassing your family.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default Stages to Court Action
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the exact timeline from the first missed EMI to a civil suit helps you tell fake agent threats apart from real court steps.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[540px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-2.5 sm:p-3">Time Window</th>
                      <th className="p-2.5 sm:p-3">Loan Status</th>
                      <th className="p-2.5 sm:p-3">Real Bank Power Over Property</th>
                      <th className="p-2.5 sm:p-3">Smart Borrower Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-2.5 sm:p-3 font-bold text-slate-900">Day 1 to 90</td>
                      <td className="p-2.5 sm:p-3 font-mono text-[11px]">SMA-0 to SMA-2.</td>
                      <td className="p-2.5 sm:p-3">Calls and visits; zero legal power over your home.</td>
                      <td className="p-2.5 sm:p-3">Tell family that agents cannot inspect or photo the house.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-2.5 sm:p-3 font-bold text-slate-900">Day 91 to 180</td>
                      <td className="p-2.5 sm:p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Stage.</td>
                      <td className="p-2.5 sm:p-3">Loan marked NPA; bank sends demand or arbitration letter.</td>
                      <td className="p-2.5 sm:p-3">Send lawyer reply and challenge high penal interest.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-2.5 sm:p-3 font-bold text-slate-900">Month 6 to 12</td>
                      <td className="p-2.5 sm:p-3 font-mono text-[11px] text-[#1886ff] font-bold">Best OTS Window.</td>
                      <td className="p-2.5 sm:p-3">Lok Adalat invite sent; still zero house attachment.</td>
                      <td className="p-2.5 sm:p-3 font-bold text-slate-900">Settle the loan with a 50% to 75% waiver via CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 sm:p-3 font-bold text-slate-900">Year 1 to 3</td>
                      <td className="p-2.5 sm:p-3 font-mono text-[11px]">Civil Suit.</td>
                      <td className="p-2.5 sm:p-3">Bank may file a civil money suit if the loan amount is large.</td>
                      <td className="p-2.5 sm:p-3">Defend the suit or sign a court settlement deal.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 sm:p-3 font-bold text-slate-900">Year 3 and Beyond</td>
                      <td className="p-2.5 sm:p-3 font-mono text-[11px]">Order 21 Stage.</td>
                      <td className="p-2.5 sm:p-3">Only after a final decree can bank target your small share.</td>
                      <td className="p-2.5 sm:p-3">Family files Order 21 Rule 58 claim; you settle the decree.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Guarantors, HUF & Legal Heirs */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Guarantors, HUF &amp; Legal Heirs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Special legal rules apply when a parent signed as a guarantor, when a borrower passes away, or when the house is in your father’s own name.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Parents’ Own House vs Ancestral Home</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your father or mother bought the house with their own money, it is their self-acquired home. While they are alive, you have zero legal share in it. No court or bank can ever touch it for your loan.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>When a Family Member Signed as Guarantor</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 128 of the Indian Contract Act, 1872, a guarantor is just as liable as the borrower. If your parent signed as a guarantor, their share can also face a civil claim unless you settle via OTS.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span>Death of Borrower &amp; Legal Heir Rules</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a borrower dies, banks cannot force the spouse or kids to pay from their own salary. Under Section 50 CPC, heirs are liable only up to the value of property they actually inherit from the deceased.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Gifting Your Share After Default (Sec 53 TPA)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some borrowers try to gift their ancestral share to a sibling after missing EMIs. Under Section 53 of the Transfer of Property Act, 1882, a court can cancel transfers made to block creditors. An OTS is much safer.
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
                <HelpCircle className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Ancestral Property Attachment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal answers to common questions on ancestral property protection, coparcenary shares, Section 60 CPC rules, and personal loan settlement in India.
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
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1), Proviso Clauses (c) and (ccc), and Order 21 Rule 58 on family objections to attachment.
                </li>
                <li>
                  <strong>Hindu Succession Act, 1956 (Amended 2005):</strong> Section 6 on coparcenary birth rights and Section 6(4) ending pious obligation for post-2005 debts.
                </li>
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 13 and Section 31, barring direct seizure for unsecured personal loans and farm lands.
                </li>
                <li>
                  <strong>Transfer of Property Act, 1882 &amp; Contract Act, 1872:</strong> Section 53 TPA on property transfers and Section 128 Contract Act on guarantor liability.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Raman Tech &amp; Process Engg. Co. v. Solanki Traders (2008) 2 SCC 302 on Order 38 Rule 5 CPC attachment rules.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://ecourts.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>eCourts Services India</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://drt.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debt Recovery Tribunal Portal</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Seizure Rules
                  </Link>
                  <Link href="/sarfaesi-act-section-13-2-notice-stop-auction" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Section 13(2) Defense
                  </Link>
                  <Link href="/drt-jurisdiction-minimum-limit-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRT Minimum Limit ₹20 Lakhs
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Loan Default Rules
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/punishment-for-non-payment-of-personal-loan-in-india" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Default Law
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/loan-recall-notice-from-bank-legal-defense-reply-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Recall Notice Guide
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6 self-start w-full">
            
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
                Expert in banking rules, civil debt defense, Section 60 CPC home protections, and NPA settlements. He helps Indian families stop illegal recovery actions and settle loans safely.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Author Profile</span>
                  <ArrowRight className="w-3 h-3 flex-shrink-0" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 flex-shrink-0" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae background) */}
            <div
              className="rounded-3xl p-5 sm:p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  FAMILY PROPERTY SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Agents Threatening Your Ancestral Home?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal experts stop illegal home visits, protect your parents’ and family shares under Section 60 CPC, and get up to 75% waivers on personal loans.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Property Now
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200 flex-shrink-0" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3 flex-shrink-0" />
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
                  <span><strong>Family Share Shield:</strong> 100% safety for co-owners &amp; parents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stop Home Visits:</strong> Fast legal notice against rogue agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>50% to 75% OTS Waiver:</strong> Settle loans before any court decree.</span>
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
                  href="/can-bank-seize-epf-provident-fund-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Seize EPF or Gratuity for Loan Recovery?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 10 EPF Act shield &rarr;</span>
                </Link>

                <Link
                  href="/sarfaesi-act-section-13-2-notice-stop-auction"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Act Section 13(2) Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop property auction legally &rarr;</span>
                </Link>

                <Link
                  href="/drt-jurisdiction-minimum-limit-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    DRT Jurisdiction Minimum Limit ₹20 Lakhs
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Tribunal pecuniary rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
