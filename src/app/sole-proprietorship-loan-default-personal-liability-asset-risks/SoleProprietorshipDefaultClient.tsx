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
  Home,
  Users
} from 'lucide-react';

export default function SoleProprietorshipDefaultClient() {
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
    { id: 'legal-entity-doctrine', label: '1. Legal Entity Doctrine: Unlimited Liability' },
    { id: 'financial-forensics', label: '2. Financial Forensics: Business vs Personal' },
    { id: 'asset-risk-matrix', label: '3. Asset Risk Matrix: Seizure Breakdown' },
    { id: 'sarfaesi-drt-enforcement', label: '4. SARFAESI & DRT Legal Enforcement' },
    { id: 'section-60-cpc-exemptions', label: '5. Section 60 CPC: Exempted Assets' },
    { id: 'visual-blueprint', label: '6. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '7. 6-Stage Business Debt Shield Protocol' },
    { id: 'personal-insolvency-ibc', label: '8. Personal Insolvency under IBC Section 94' },
    { id: 'escalation-matrix', label: '9. 3-Tier Grievance Redressal Matrix' },
    { id: 'procedural-timeline', label: '10. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '11. Specialized Scenarios: MSME & Family' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Is a sole proprietor personally liable for business loan defaults?',
      a: 'Yes. In Indian law, a sole proprietorship does not possess a separate legal identity from its proprietor. The proprietor and the business are legally one entity, meaning the owner has unlimited personal liability for all commercial loans, overdrafts, and credit facilities.'
    },
    {
      q: 'Can a bank seize my personal home or savings account for a proprietorship loan default?',
      a: 'If the loan was secured by a mortgage on your home, the bank can initiate physical possession under the SARFAESI Act. For unsecured business loans, banks cannot immediately seize property without obtaining a court decree or DRT order. Furthermore, Section 60 of the Code of Civil Procedure (CPC) provides statutory exemptions for essential belongings, tools of trade, and pensions.'
    },
    {
      q: 'Can a creditor bank attach my spouse or family members assets for my business default?',
      a: 'No. Family members, including your spouse, parents, and children, are not legally liable for your sole proprietorship business debts unless they signed as formal co-borrowers or personal guarantors. A spouses self-acquired property, salary, and Stridhan cannot be attached by the bank.'
    },
    {
      q: 'Can a bank attach ancestral property if a sole proprietor defaults on a loan?',
      a: 'A bank can only claim or attach the specific undivided coparcenary share belonging to the defaulting proprietor in Hindu Undivided Family (HUF) property. The independent legal shares belonging to parents, siblings, or other coparceners cannot be attached for the proprietors personal business debt.'
    },
    {
      q: 'What personal assets are legally protected under Section 60 CPC?',
      a: 'Section 60(1) of the CPC protects essential assets from court attachment, including necessary wearing apparel, cooking vessels, bedding, tools of artisans, agricultural implements, statutory pensions, gratuities, EPF balances, and Public Provident Fund (PPF) deposits.'
    },
    {
      q: 'Does an MSME Udyam Registration protect a sole proprietor from asset seizure?',
      a: 'While Udyam Registration does not eliminate unlimited personal liability, it entitles the enterprise to mandatory RBI restructuring protocols under the Framework for Revival and Rehabilitation of MSMEs before the bank can classify the account as a willful defaulter or initiate aggressive recovery.'
    },
    {
      q: 'How does filing for personal insolvency under Section 94 of IBC protect a proprietor?',
      a: 'When a sole proprietor files a personal insolvency application under Section 94 of the Insolvency and Bankruptcy Code (IBC) before the DRT, Section 96 triggers an immediate statutory interim moratorium. This automatically stays all ongoing civil suits, recovery proceedings, and legal actions by creditors nationwide.'
    },
    {
      q: 'Can recovery agents harass a sole proprietor at their personal residence?',
      a: 'No. RBI Fair Practices Code strictly prohibits recovery agents from abusive conduct, visiting before 8 AM or after 7 PM, harassing family members, or making public threats. Violations can be prosecuted as criminal intimidation under Section 351 and 352 of Bharatiya Nyaya Sanhita (BNS) 2023.'
    },
    {
      q: 'Can an unsecured business loan default lead to arrest or criminal imprisonment?',
      a: 'No. Pure loan default is a civil dispute. Under Article 21 of the Constitution and Supreme Court precedents, a borrower cannot be imprisoned for genuine business failure or financial inability to pay. Criminal action arises only if there is intentional fraud, forged loan documents, or bounced cheques under Section 138 of the NI Act.'
    },
    {
      q: 'How can CredSettle help a defaulting sole proprietor protect assets and settle debt?',
      a: 'CredSettle shields proprietors from unlawful recovery harassment, challenges flawed SARFAESI or arbitration notices, audits inflated penal interest charges, and negotiates a structured One-Time Settlement (OTS) with bank credit committees for a 40% to 75% waiver with a formal No Dues Certificate.'
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
            <Building2 className="w-3.5 h-3.5" />
            <span>MSME &amp; Sole Proprietor Legal Debt Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Sole Proprietorship Loan Default: Personal Liability Guide
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide on unlimited personal liability, asset seizure risks, Section 60 CPC exemptions, SARFAESI defense, and debt settlement options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Personal Assets</span>
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
                  <span>Proprietor Asset Protection Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 60 CPC, SARFAESI defense norms, and Section 94 IBC interim moratorium.
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
                <span>EXECUTIVE BRIEF: SOLE PROPRIETORSHIP LOAN DEFAULT &amp; ASSET RISKS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Corporate Veil:</strong> In Indian law, a sole proprietorship is not a separate legal entity. The owner and the firm are one. This means you have unlimited personal liability for business debt.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Secured vs Unsecured Debt:</strong> Mortgaged property faces recovery under the SARFAESI Act. Unsecured loans need a court order or DRT decree before any asset attachment can occur.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Section 60 CPC Asset Shield:</strong> The law protects your basic needs. Tools of trade, clothes, beds, pensions, and PF funds cannot be seized by any court.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Family Asset Safety:</strong> Property and savings owned by your spouse or parents are safe. Banks cannot touch them unless they signed as co-borrowers or guarantors.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">One-Time Settlement (OTS):</strong> You can settle defaulted business debt under RBI rules. Settle for 40% to 75% less and get a full No Dues Certificate.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Entity Doctrine: Unlimited Personal Liability */}
            <section id="legal-entity-doctrine" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Enactments &amp; Court Doctrine</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Entity Doctrine: Unlimited Personal Liability
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many small business owners in India choose a sole proprietorship. It is easy to start and has few filing rules. But it carries a major financial risk. The law does not see the business as a separate person.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A private limited company or LLP has its own legal identity. In contrast, a sole proprietorship firm is only a trade name. The Supreme Court confirmed this in <em>Ashok Transport Agency v. Awadhesh Kumar (1998 AIR SC 2961)</em>. The court ruled that the owner and the business are one and the same person.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule creates unlimited personal liability. If your firm defaults on a loan, cash credit, or overdraft, the bank is not limited to shop goods. The lender can pursue your personal savings, land, and house to recover its money.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even with unlimited liability, the bank cannot take your assets overnight. Indian banking laws and court rules give you clear legal defenses. You can protect your essential assets and settle your debt safely.
              </p>
            </section>

            {/* SECTION 2: Financial Forensics: Business vs Personal Assets */}
            <section id="financial-forensics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Account Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Forensics: Business vs Personal Assets
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks track both business and personal accounts during a default. Your business GSTIN uses your personal PAN card. Because of this, credit bureaus like CIBIL link business defaults directly to your individual credit score.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders also use Section 171 of the Indian Contract Act, 1872. This law gives banks a general lien. If you default on a business loan, the bank may freeze your personal savings account in that same bank. They can deduct your savings without asking you first.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stay safe, check all your assets early. Separate pledged assets from free assets. Move your personal cash to a neutral bank where you have no loans. This gives you strong ground to negotiate a fair settlement.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample Ledger Audit: Cash Credit Default &amp; Asset Protection Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹25 Lakh Gross Ledger Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Asset / Debt Claim Component</th>
                        <th className="p-3">Claim / Asset Value</th>
                        <th className="p-3">Legal Status &amp; Defense Shield</th>
                        <th className="p-3 text-right">Protected Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Commercial Shop Stock &amp; Receivables</td>
                        <td className="p-3">₹4,50,000</td>
                        <td className="p-3 text-rose-600 font-semibold">Hypothecated: Open to Seizure under Contract</td>
                        <td className="p-3 text-right font-bold text-rose-700">₹0 (At Risk)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Self-Acquired Residential Flat (Unpledged)</td>
                        <td className="p-3">₹45,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Unsecured: Needs Court or DRT Decree First</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹45,00,000 (Protected)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Spouse Home &amp; Stridhan Jewellery</td>
                        <td className="p-3">₹35,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Family Immunity under Law</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹35,00,000 (Fully Safe)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Overdue CC Loan &amp; Penal Charge Claim</td>
                        <td className="p-3 text-rose-600 font-bold">₹25,00,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Commercial Debt: Settle with RBI OTS Haircut</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹9,50,000 (Agreed OTS)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Wealth Saved</td>
                        <td className="p-3 text-slate-900">₹80,00,000 Saved</td>
                        <td className="p-3 text-emerald-700">62% Loan Debt Waiver via Settlement</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">100% Personal Assets Safe</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Asset Risk Matrix: Seizure Vulnerability Breakdown */}
            <section id="asset-risk-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Asset Vulnerability &amp; Risk Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Asset Risk Matrix: Seizure Vulnerability Breakdown
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a sole proprietorship defaults on debt, each asset faces a different risk level. Knowing these rules helps you protect your property and avoid panic.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Pledged assets face swift action from lenders. Unpledged personal assets require long court cases before a bank can touch them. The table below outlines how each asset is treated under Indian law.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Asset Classification</th>
                      <th className="p-3">Governing Law</th>
                      <th className="p-3">Risk Level</th>
                      <th className="p-3">Legal Rules for Seizure</th>
                      <th className="p-3">Defense Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-rose-50/30">
                      <td className="p-3 font-bold text-slate-900">Mortgaged Property (Home / Land)</td>
                      <td className="p-3">SARFAESI Act (Sec 13)</td>
                      <td className="p-3 text-rose-600 font-bold">High Risk</td>
                      <td className="p-3">60-day demand notice followed by Section 14 order.</td>
                      <td className="p-3">File Securitisation Application in DRT; enter OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Unpledged Residential Home</td>
                      <td className="p-3">Civil Procedure Code, 1908</td>
                      <td className="p-3 text-amber-600 font-semibold">Low / Delayed</td>
                      <td className="p-3">Final decree from Civil Court or DRT order needed.</td>
                      <td className="p-3">Defend case in court; resolve via compromise settlement.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Pledged Stock &amp; Machinery</td>
                      <td className="p-3">Contract Act &amp; SARFAESI</td>
                      <td className="p-3 text-rose-600 font-semibold">Moderate</td>
                      <td className="p-3">Notice issued under loan hypothecation agreement.</td>
                      <td className="p-3">Submit MSME revival plan; challenge plant valuation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Savings Account in Loan Bank</td>
                      <td className="p-3">Contract Act (Sec 171)</td>
                      <td className="p-3 text-rose-600 font-semibold">Fast Risk</td>
                      <td className="p-3">Bank exercises general lien without court order.</td>
                      <td className="p-3">Move liquid funds to a separate bank promptly.</td>
                    </tr>
                    <tr className="bg-emerald-50/30">
                      <td className="p-3 font-medium text-slate-900">Public Provident Fund &amp; EPF</td>
                      <td className="p-3">PPF Act / EPF Act Sec 10</td>
                      <td className="p-3 text-emerald-600 font-bold">Zero Risk</td>
                      <td className="p-3">Full protection by law against all court orders.</td>
                      <td className="p-3">Cite Section 60(1)(k) CPC and Section 10 EPF Act.</td>
                    </tr>
                    <tr className="bg-emerald-50/30">
                      <td className="p-3 font-medium text-slate-900">Spouse Self-Earned Property</td>
                      <td className="p-3">Transfer of Property Act</td>
                      <td className="p-3 text-emerald-600 font-bold">Zero Risk</td>
                      <td className="p-3">Immune unless spouse signed as loan guarantor.</td>
                      <td className="p-3">Provide title deed proving spouse independent funds.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Agricultural Farmland</td>
                      <td className="p-3">SARFAESI Act (Sec 31(i))</td>
                      <td className="p-3 text-emerald-600 font-semibold">Full Bar</td>
                      <td className="p-3">Section 31(i) strictly bans agricultural land seizure.</td>
                      <td className="p-3">Show revenue records such as 7/12 or Khasra papers.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: SARFAESI & DRT Legal Enforcement: Bank Powers */}
            <section id="sarfaesi-drt-enforcement" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Recovery Powers &amp; Tribunals</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. SARFAESI &amp; DRT Legal Enforcement: Bank Powers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks use different legal paths for secured and unsecured business loans. The rules depend on whether you pledged collateral.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For secured loans, banks use the SARFAESI Act, 2002. The bank first sends a 60-day demand notice under Section 13(2). You have the right to reply under Section 13(3A) within 15 days. If unresolved, the bank issues a possession notice under Section 13(4) and seeks a magistrate order under Section 14.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For unsecured business loans, the bank cannot use SARFAESI. If the unpaid debt is ₹20 Lakhs or more, the bank must file a claim in the Debt Recovery Tribunal (DRT). For smaller sums, it must file a civil suit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In DRT or civil court, the bank cannot seize your personal assets right away. It must first win the case and get a recovery order. This legal process takes months or years. It gives you time to challenge inflated interest and negotiate an affordable settlement.
              </p>
            </section>

            {/* SECTION 5: Section 60 CPC: Assets Exempted from Attachment */}
            <section id="section-60-cpc-exemptions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Exemptions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Section 60 CPC: Assets Exempted from Attachment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if a bank wins a court decree, it cannot take everything you own. Section 60 of the Code of Civil Procedure (CPC), 1908 protects basic living assets from attachment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>Tools of Artisans &amp; Trade Implements</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(b) CPC, tools of trade, artisan tools, cattle, and seeds needed for your livelihood cannot be attached or auctioned.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Home className="w-4 h-4" />
                    <span>Essential Personal &amp; Domestic Items</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(a) CPC, clothes, cooking pots, beds, and bedding for you and your family are totally safe from attachment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Provident Funds &amp; Social Security Balances</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(k) CPC, EPF and Public Provident Fund (PPF) deposits are fully shielded from creditor claims and court attachment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Award className="w-4 h-4" />
                    <span>Statutory Pensions &amp; Gratuity Funds</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(g) CPC, pensions and gratuity cannot be attached by any civil or bank order, protecting your future safety.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Visual Blueprint: Proprietor Asset Defense Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This diagram shows how business loans, personal liability, and legal asset shields interact under Indian law. It also highlights the path to a clean debt settlement.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/sole-proprietorship-loan-default-personal-liability-asset-risks.jpg"
                    alt="Sole Proprietorship Loan Default Personal Liability and Asset Risks Legal Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Sole Proprietorship Debt Resolution Framework • Section 60 CPC Compliant</span>
                  <a
                    href="/images/infographics/sole-proprietorship-loan-default-personal-liability-asset-risks.jpg"
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

            {/* SECTION 7: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: 6-Stage Business Debt Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your proprietorship faces debt trouble, follow this six-step plan. It protects your personal wealth and gives you the leverage to reach a deep compromise settlement.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Open a Neutral Bank Account Promptly
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open an account in a bank where you have zero loans. Route your client income here. This stops your loan bank from debiting your personal savings without notice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit Loan Ledger and Hidden Charges
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask your bank for a full statement of account. Check for illegal penal charges and compound interest added after default. Verify what assets were pledged.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Reply to All Bank Notices Legally
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never ignore notices. File strong replies to SARFAESI Section 13(2) notices within 15 days. For cheque bounce notices, send a formal legal reply through counsel.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Stop Agent Harassment under RBI Rules
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Recovery agents must follow RBI rules. They cannot visit at odd hours or threaten your family. Record any harassment and file an RBI Ombudsman complaint.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Negotiate an OTS with Bank Credit Committee
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Talk directly to senior bank managers instead of collection agents. Present proof of genuine business losses to seek a 40% to 75% waiver on total dues.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Verify Sanction Letter and Secure NDC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check the settlement letter on official bank letterhead. Pay the agreed amount via RTGS. Ensure the bank returns your property deeds and issues a No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Personal Insolvency under IBC: Section 94 Shield */}
            <section id="personal-insolvency-ibc" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Insolvency &amp; Bankruptcy Code Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Personal Insolvency under IBC: Section 94 Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a sole proprietor faces heavy debt from many lenders, the Insolvency and Bankruptcy Code (IBC), 2016 offers a strong legal shield under Part III.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 94 of the IBC, an individual debtor can apply for personal insolvency before the DRT. Section 96 of the IBC then triggers an instant interim moratorium.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The moment you file, all pending recovery cases, civil suits, and cheque bounce actions are paused across India. Lenders cannot take your assets or file new suits while the moratorium stays in place.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This pause lets you prepare a realistic debt repayment plan with a Resolution Professional. Once approved, the DRT issues a discharge order that wipes out past debts, protecting your personal life.
              </p>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Grievance Redressal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender breaks RBI guidelines, uses abusive recovery agents, or denies fair MSME restructuring, follow the official three-tier grievance framework.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Officer</th>
                      <th className="p-3">Response Time</th>
                      <th className="p-3">Relief and Action Offered</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Days</td>
                      <td className="p-3">Stops branch overreach, lifts unlawful liens, and logs your hardship plea.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer at Head Office</td>
                      <td className="p-3 font-mono">14 to 21 Days</td>
                      <td className="p-3">Checks agent misconduct, reviews penal interest, and aids OTS talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in to penalize rogue lenders and reverse debits.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Procedural Timeline: Default Stages to Safety
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the stages of loan delinquency helps you plan your defense early. You can protect your personal assets before collection pressure builds up.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Overdue Window</th>
                      <th className="p-3">Asset Loan Status</th>
                      <th className="p-3">Bank Action &amp; Risk</th>
                      <th className="p-3">Recommended Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Payment reminders by SMS and soft phone calls from the branch.</td>
                      <td className="p-3">Move your personal cash to a neutral bank with no loans.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Reminder letters sent and penal charges start to add up.</td>
                      <td className="p-3">Submit an MSME hardship letter asking for loan restructuring.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA notice sent; field collection agents are assigned.</td>
                      <td className="p-3">Audit your loan ledger; warn agents against home harassment.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Tagging</td>
                      <td className="p-3">Account tagged as NPA; bank prepares SARFAESI 13(2) notice.</td>
                      <td className="p-3">File a Section 13(3A) objection; demand removal of penal fees.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Period</td>
                      <td className="p-3">Bank files DRT claim or cheque bounce case under NI Act.</td>
                      <td className="p-3 font-bold text-slate-900">Engage CredSettle to negotiate a 40% to 75% OTS waiver.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Later</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset / ARC</td>
                      <td className="p-3">Loan sold to ARC or marked for technical write-off.</td>
                      <td className="p-3">Pay the agreed settlement, release deeds, and collect your NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Users className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Specialized Scenarios: MSME, Family &amp; Guarantors
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sole proprietorship defaults often create fear about family property. Here is how Indian law handles these common situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Udyam Registered MSME Units
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sole proprietors with Udyam Registration receive protection under RBI rules. Banks must review stressed MSME units for restructuring before starting harsh recovery.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Home className="w-4 h-4 text-emerald-600" />
                    Ancestral Property &amp; Family Shares
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank cannot seize an entire ancestral home. It can only claim your own undivided share. The shares of your parents and siblings remain fully protected.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Spouse Property &amp; Personal Income
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Marriage does not make a spouse liable for your business loans. A spouse self-earned home, jewellery, and salary cannot be touched unless they co-signed the loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Third-Party Personal Guarantors
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 128 of the Contract Act, a guarantor shares equal liability with the borrower. Settle the debt through OTS to release your guarantor from risk.
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
                Frequently Asked Questions: Proprietorship Loan Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding unlimited personal liability, asset seizure risks, Section 60 CPC exemptions, and debt settlement options under Indian law.
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
                  <strong>Supreme Court of India Ruling:</strong> Ashok Transport Agency v. Awadhesh Kumar (1998 AIR SC 2961), establishing the absence of separate legal entity in sole proprietorships.
                </li>
                <li>
                  <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI):</strong> Sections 13(2), 13(4), and 14 regarding enforcement of security interests.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1), Provisos (a) to (p), detailing non-attachable properties in execution of money decrees.
                </li>
                <li>
                  <strong>Insolvency and Bankruptcy Code, 2016 (IBC):</strong> Sections 94, 95, and 96 on personal insolvency and automatic interim moratorium.
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Compromise Settlements and Technical Write-offs Framework (Circular dated June 8, 2023) and Framework for Revival and Rehabilitation of MSMEs.
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita, 2023 (BNS):</strong> Sections 351 and 352 penalizing criminal intimidation and unlawful harassment by recovery agents.
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
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://samadhaan.msme.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>MSME Samadhaan Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Insolvency &amp; Bankruptcy Board</span>
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
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/overdraft-cash-credit-od-cc-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    OD CC Default Settlement
                  </Link>
                  <Link href="/msme-loan-default-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MSME Loan Legal Action
                  </Link>
                  <Link href="/personal-insolvency-section-94-ibc-interim-moratorium" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 94 IBC Moratorium
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exemptions
                  </Link>
                  <Link href="/sarfaesi-section-14-physical-possession-order-dm-cmm" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Section 14 Defense
                  </Link>
                  <Link href="/can-bank-seize-ancestral-property-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Ancestral Property Attachment
                  </Link>
                  <Link href="/guarantor-liability-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Guarantor Liability Rules
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Set-Off Rules
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Defense
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
                Expert in commercial debt restructuring, SARFAESI defense litigation, DRT recovery proceedings, and MSME compromise settlements with extensive experience protecting business owners against unlawful lender recovery.
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
                  Bank Threatening Your Personal Property?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists stop unlawful recovery visits, defend against aggressive SARFAESI notices, and negotiate up to 75% business debt waivers with bank credit committees.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Assets Now
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
                  <span><strong>Zero Illegal Asset Seizure:</strong> Section 60 CPC protection enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>SARFAESI Defense:</strong> Section 13(3A) objections &amp; DRT representation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Direct escalation against abusive agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean Bank Resolution:</strong> Guaranteed No Dues Certificate &amp; deed return.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Business Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/services/business-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Business Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Commercial debt relief &rarr;</span>
                </Link>

                <Link
                  href="/overdraft-cash-credit-od-cc-default-settlement-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    OD CC Default Settlement Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Working capital resolution &rarr;</span>
                </Link>

                <Link
                  href="/section-60-cpc-assets-property-exempt-from-bank-attachment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 60 CPC Exempt Assets
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Shield assets from court attachment &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
