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
  Percent,
  Calculator,
  RefreshCcw,
  ShieldAlert
} from 'lucide-react';

export default function CreditCardDefaultAfter5YearsClient() {
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
    { id: 'quick-crux', label: 'Executive Summary & Key Takeaways' },
    { id: 'debt-economics-aged-npa', label: '1. Aged Default Economics & ARC Debt Sales' },
    { id: 'settlement-math-breakdown', label: '2. Limitation Math vs Inflated Claims' },
    { id: 'resolution-comparison-matrix', label: '3. Debt Relief Options Comparison' },
    { id: 'cibil-algorithm-impact', label: '4. CIBIL Scoring & CICRA Rectification' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Resolution Framework' },
    { id: 'step-by-step-ots-sop', label: '5. Step-by-Step 6-Stage Settlement SOP' },
    { id: 'statutory-legal-defense', label: '6. Statutory Notice Defense & Borrower Rights' },
    { id: 'three-tier-grievance-matrix', label: '7. 3-Tier Grievance & Ombudsman Matrix' },
    { id: 'chronological-procedural-timeline', label: '8. Chronological Timeline to Resolution' },
    { id: 'real-world-debt-scenarios', label: '9. Specialized Real-World Case Studies' },
    { id: 'company-profile', label: 'About CredSettle Legal Defense' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Legal Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank sue for credit card default after 5 years?',
      a: 'Under the Limitation Act 1963, civil recovery is barred after 3 years from default. Without debt acknowledgment, suits filed after 5 years are dismissed under Section 3.'
    },
    {
      q: 'What is zombie debt in credit card collections?',
      a: 'Zombie debt is aged, time-barred debt written off by banks and sold to third-party collection agencies or ARCs, which attempt to revive expired claims.'
    },
    {
      q: 'Does making a token payment restart limitation?',
      a: 'Yes. Under Section 18 and Section 19 of the Limitation Act, partial payments or signed letters reset the 3-year clock, making expired debt legally enforceable again.'
    },
    {
      q: 'Can recovery agents arrest me for a 5-year-old default?',
      a: 'No. Unsecured card default is purely a civil matter. Recovery agents have zero police powers, and the Supreme Court prohibits criminalizing civil loan defaults.'
    },
    {
      q: 'Can banks seize property for aged credit card debt?',
      a: 'No. Credit cards are unsecured loans. Lenders cannot initiate SARFAESI property attachments without registered mortgage security and an enforceable court decree.'
    },
    {
      q: 'Why do banks sell 5-year-old defaults to ARCs?',
      a: 'Banks maintain 100% loss provisioning on aged NPAs and execute technical write-offs. They sell delinquent accounts to ARCs at 2% to 6% value to recover capital.'
    },
    {
      q: 'Will a 5-year-old default disappear from CIBIL?',
      a: 'No. The Limitation Act bars civil litigation but does not erase credit records. The account remains Written-Off until resolved through an OTS and official NDC.'
    },
    {
      q: 'How much waiver can I get on a 5-year-old card default?',
      a: 'Because aged debts are time-barred and 100% provisioned, banks and ARCs accept settlements at 75% to 90% discounts, resolving debts for a fraction of principal.'
    },
    {
      q: 'What is the risk of ignoring legal notices for aged debt?',
      a: 'Ignoring notices risks lenders obtaining ex parte arbitration awards. Serving a formal statutory reply asserting the Limitation Act bar prevents fraudulent legal claims.'
    },
    {
      q: 'How does CredSettle resolve 5-year-old card defaults?',
      a: 'CredSettle audits limitation dates, halts recovery harassment, serves statutory legal replies asserting the Limitation Act, and negotiates deep OTS closures with official NDCs.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>Credit Card Debt Defense Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Credit Card Default After 5 Years: Limitation Act &amp; Legal Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand how the Limitation Act 1963 bars civil recovery after 3 years, how banks assign aged accounts to ARCs, and how to settle zombie debts with official No Dues Certificates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve 5-Year Default - Settle Legally</span>
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
                  <span>Statutory Limitation Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by the Limitation Act 1963, Section 21 CICRA, and RBI Master Directions on Recovery Agents.
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
                <span>EXECUTIVE SUMMARY: 5-YEAR CREDIT CARD DEFAULTS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div><strong>3-Year Limitation Bar:</strong> Articles 19 and 25 bar civil court recovery after 3 years.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div><strong>Zero Court Enforceability:</strong> Without written acknowledgment, 5-year defaults cannot be decreed.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div><strong>Section 18 Traps:</strong> Token payments or acknowledgment letters restart the 3-year clock.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div><strong>Technical Write-Offs:</strong> Banks provision 100% loss and sell pools to ARCs at 2% to 6% value.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div><strong>Zombie Debt Recovery:</strong> Collection agencies use aggressive calls to revive expired claims.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div><strong>Zero Asset Attachment:</strong> Unsecured card debt carries zero SARFAESI property seizure rights.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div><strong>75% to 90% OTS Discounts:</strong> Aged accounts qualify for deep compromise settlements.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div><strong>CIBIL Resolution:</strong> Formal settlements secure an NDC, updating credit records under CICRA.</div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & Aged NPA Dynamics */}
            <section id="debt-economics-aged-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Percent className="w-4 h-4 text-[#1886ff]" />
                <span>1. Debt Economics &amp; NPA Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Aged Credit Card Portfolios and ARC Debt Assignments
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on an unsecured credit card in India, the debt undergoes a structured transition under Reserve Bank of India guidelines. Over the initial 90 days of non-payment, the card moves through Special Mention Account stages before classification as a Non-Performing Asset (NPA). Because credit cards represent uncollateralized lending, banking regulations require lenders to maintain aggressive provisioning against credit losses.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After an NPA remains overdue for more than 180 days, commercial banks allocate 100% loss provisioning and execute a technical write-off to clean balance sheets. Following years of unsuccessful collection, banks bundle aged delinquent accounts and sell them to Asset Reconstruction Companies (ARCs) for 2% to 6% of face value. This secondary debt sale creates substantial leverage for cardholders to negotiate deep compromise settlements.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="settlement-math-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>2. Financial Breakdown &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Statutory Limitation Economics vs. Inflated Zombie Debt Claims
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Over five years of default, credit card balances inflate drastically due to monthly finance charges of 3.5% to 3.99% (42% to 48% APR), late penalties, and 18% GST. A cardholder defaulting on a ₹2,00,000 spend often faces demands exceeding ₹7,50,000. Over 70% of this demand comprises uncollected interest additions lacking judicial enforceability.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because the debt is time-barred under the Limitation Act 1963 and the ARC acquired the portfolio at a deep discount, realistic settlement amounts diverge sharply from the gross claim. Credit committees routinely approve complete fee waivers and substantial principal discounts, allowing 5-year defaults to be settled at 10% to 25% of the ledger balance.
              </p>

              {/* Representative Calculation Card */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Representative 5-Year Card Default Settlement (₹2 Lakh Principal)
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    75%–90% Relief
                  </span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500">Original Principal</p>
                    <p className="text-base font-bold text-slate-900 mt-1">₹2,00,000</p>
                  </div>
                  <div className="p-3 rounded-xl bg-red-50/60 border border-red-100">
                    <p className="text-xs text-red-600">5-Yr Inflated Claim</p>
                    <p className="text-base font-bold text-red-700 mt-1">₹7,80,000</p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                    <p className="text-xs text-[#1886ff]">ARC Buy Base</p>
                    <p className="text-base font-bold text-[#1886ff] mt-1">₹15,000 – ₹35,000</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <p className="text-xs text-emerald-700">Final Compromise OTS</p>
                    <p className="text-base font-bold text-emerald-700 mt-1">₹65,000 – ₹90,000</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>3. Debt Relief Options Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Strategic Pathways for 5-Year Credit Card Defaults
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers facing aged card defaults can pursue several resolution options, each carrying distinct legal and credit implications. Evaluating these pathways ensures informed decision-making while avoiding deceptive recovery traps.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-xs md:text-sm text-left border-collapse">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200/80">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-2.5 px-3">Pathway</th>
                      <th className="py-2.5 px-3">Legal Standing</th>
                      <th className="py-2.5 px-3">Cost Target</th>
                      <th className="py-2.5 px-3">CIBIL Impact</th>
                      <th className="py-2.5 px-3">Harassment Shield</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Compromise OTS</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-semibold">Full Legal Discharge with NDC</td>
                      <td className="py-2.5 px-3 font-bold text-emerald-700">10% to 25% of Ledger Balance</td>
                      <td className="py-2.5 px-3">Marked Settled; Path to 750+</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-semibold">Immediate Cease &amp; Desist</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Term Loan Restructure</td>
                      <td className="py-2.5 px-3">Fresh Enforceable Contract</td>
                      <td className="py-2.5 px-3">100% Principal + Fresh Interest</td>
                      <td className="py-2.5 px-3">Marked Restructured; Extended Drag</td>
                      <td className="py-2.5 px-3">Resumes upon Missed EMI</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Civil Court Defense</td>
                      <td className="py-2.5 px-3 text-red-600 font-semibold">Barred by Limitation Act 1963</td>
                      <td className="py-2.5 px-3">High Advocate Defense Fees</td>
                      <td className="py-2.5 px-3">Remains Written-Off</td>
                      <td className="py-2.5 px-3">Subject to Court Timelines</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="py-2.5 px-3 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="py-2.5 px-3">Binding Decree (Section 21 LSA)</td>
                      <td className="py-2.5 px-3">35% to 55% of Principal</td>
                      <td className="py-2.5 px-3">Settled via Judicial Award</td>
                      <td className="py-2.5 px-3">Ceases upon Mutual Order</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Prolonged Inaction</td>
                      <td className="py-2.5 px-3 text-amber-700 font-semibold">Time-Barred but Unresolved</td>
                      <td className="py-2.5 px-3">Zero Payment (Inflating Ledger)</td>
                      <td className="py-2.5 px-3 text-red-600 font-semibold">Perpetual Credit Impairment</td>
                      <td className="py-2.5 px-3 text-red-600 font-semibold">Persistent Collection Calls</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>4. Technical CIBIL Scoring &amp; CICRA Rectification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                CIBIL Scoring: 5-Year Default Decay &amp; CICRA Remedies
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Credit scoring engines evaluate borrower profiles across five weighted pillars: Payment History (35%), Credit Utilization (30%), Credit History Length (15%), Credit Mix (10%), and Recent Inquiries (10%). Upon default, the 35% payment history component sustains substantial damage, pulling credit scores down from prime bands above 750 into subprime brackets between 520 and 580 within four billing cycles.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Over five years, default scoring impact stabilizes through recency decay, but the account remains indefinitely listed as Written Off. The Limitation Act bars civil litigation but does not automatically clear bureau files. To remove this impairment, cardholders must complete a structured One-Time Settlement. Under Section 21 of CICRA 2005, lenders must update credit bureaus within 30 days to reflect the Settled status, facilitating score recovery back to 750+ over 12 to 18 months.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Architecture &amp; Legal Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Strategic 6-Stage Resolution Framework for 5-Year Credit Card Defaults
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This infographic outlines the forensic limitation review, statutory anti-harassment protections under RBI rules, and settlement execution stages required to secure an official No Dues Certificate.
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-xs overflow-hidden">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/infographics/credit-card-default-after-5-years.jpg"
                    alt="Credit Card Default After 5 Years Limitation Act &amp; Legal Defense Roadmap"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
                <div className="flex items-center justify-between pt-2.5 px-1 text-xs text-slate-500">
                  <span>Figure 1.1: Official CredSettle 6-Stage Statutory Debt Resolution Architecture.</span>
                  <a
                    href="/images/infographics/credit-card-default-after-5-years.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-ots-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>5. Step-by-Step SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                6-Stage SOP for Resolving 5-Year-Old Credit Card Debts
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Resolving an aged card default requires a disciplined legal protocol to preserve statutory defenses under the Limitation Act while securing maximum commercial waivers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Stage 01: Audit</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Forensic Limitation Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    CredSettle audits statements to verify default dates and confirm no Section 18 acknowledgment occurred, establishing time-barred status.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Stage 02: Dossier</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Limitation &amp; Hardship Dossier</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our team compiles documentary proof of the 5-year timeline and legitimate hardship, proving inability to pay inflated demands.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Stage 03: Shield</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Statutory Harassment Shield</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We serve formal notices under RBI rules, halting abusive calls, workplace visits, and unauthorized third-party harassment.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Stage 04: Terms</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Bilateral OTS Negotiations</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Leveraging 100% loss provisioning and low ARC acquisition costs, negotiators secure 75% to 90% waivers on gross ledger claims.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Stage 05: Vetting</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Sanction Letter Vetting</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal counsel inspects the settlement letter for full-and-final release terms, authentic letterheads, and future resale bans.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Stage 06: NDC</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Direct Remittance &amp; NDC</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Payment is made directly to the bank or ARC. We obtain the formal No Dues Certificate and trigger CIBIL updates under CICRA.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-legal-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>6. Statutory Notice Defense &amp; Borrower Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Statutory Defense Against Aged Debt Claims &amp; Notices
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Third-party agencies frequently send aggressive notices to intimidate cardholders into reviving expired liabilities. Understanding statutory protections enables borrowers to defend their rights effectively without succumbing to pressure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="rounded-2xl bg-white border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    <span>Limitation Act 1963 (Articles 19 &amp; 25)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Imposes a 3-year limitation on unsecured recovery. Section 3 mandates that civil courts dismiss time-barred recovery suits even if limitation is not explicitly pleaded.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Section 18 &amp; 19 Acknowledgment Traps</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Written acknowledgments or partial payments restart the 3-year limitation clock from that date. Borrowers should never sign informal acknowledgment forms without legal review.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 25 PSSA &amp; Section 138 NI Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Electronic mandate or cheque dishonor provisions apply solely to legally enforceable debts. Time-barred claims cannot sustain valid criminal proceedings under the law.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <BadgeAlert className="w-4 h-4 text-red-600" />
                    <span>Arbitration &amp; Supreme Court Precedents</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Supreme Court rulings in Perkins Eastman prohibit unilateral arbitrator appointments. RBI guidelines strictly bar verbal abuse, family intimidation, and calls outside 8 AM to 7 PM.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance & Escalation Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>7. 3-Tier Grievance &amp; Ombudsman Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Statutory Escalation: Stopping Unlawful Harassment
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When recovery agencies violate RBI guidelines on time-barred accounts, cardholders can trigger a structured 3-tier regulatory escalation to enforce compliance and halt harassment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Tier 1: Internal Desk</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Grievance Officer (GRO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a formal complaint to the bank GRO citing harassment on time-barred debt. Response turnaround is 7 to 10 days.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Tier 2: Executive Desk</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Principal Nodal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate unresolved complaints to the PNO with call recordings and statutory notices. Turnaround is 14 to 21 days.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Tier 3: Regulatory Desk</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">RBI Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a statutory complaint on cms.rbi.org.in under the Integrated Ombudsman Scheme 2021 for binding directions.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>8. Chronological Timeline to Resolution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Procedural Lifecycle: Default to Year 5+ Resolution
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding default milestones highlights how legal remedies evolve over time, showing why year 5 offers an optimal window for high-discount compromise settlements.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-xs md:text-sm text-left border-collapse">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200/80">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-2.5 px-3">Timeline Milestone</th>
                      <th className="py-2.5 px-3">Account Status</th>
                      <th className="py-2.5 px-3">Bank Accounting Action</th>
                      <th className="py-2.5 px-3">Legal &amp; Settlement Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Days 1 to 90</td>
                      <td className="py-2.5 px-3">SMA-0 to SMA-2</td>
                      <td className="py-2.5 px-3">Late fees, interest, card blocked</td>
                      <td className="py-2.5 px-3">Full civil liability; active recovery</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Days 91 to 180</td>
                      <td className="py-2.5 px-3 text-amber-700 font-semibold">NPA Classification</td>
                      <td className="py-2.5 px-3">Mandatory capital provisioning</td>
                      <td className="py-2.5 px-3">Early OTS window (40% to 55% waiver)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Months 6 to 36</td>
                      <td className="py-2.5 px-3 text-red-600 font-semibold">Written-Off NPA</td>
                      <td className="py-2.5 px-3">100% loss provisioning applied</td>
                      <td className="py-2.5 px-3">Civil suit permissible until Day 1095</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Years 3 to 5+</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-semibold">Time-Barred Zombie Debt</td>
                      <td className="py-2.5 px-3">Assigned to ARCs at 2% to 6% value</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-semibold">Civil suits barred; Deep OTS (75%–90%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="real-world-debt-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>9. Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Case Study Profiles: Resolving Aged Credit Card Debts
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Aged defaults usually result from unforeseen financial disruption rather than willful evasion. Below are four common case scenarios resolved through statutory defenses and structured settlements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    <span>Multi-Card Consolidation (5+ Years)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers with multiple aged accounts. CredSettle audits limitation timelines and settles all cards simultaneously.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    <span>Layoffs &amp; Medical Hardship</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Salaried workers facing income loss. Hardship dossiers submitted to committees secure deep fee and principal waivers.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    <span>Small Business Working Capital</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Founders who funded businesses with personal cards. We separate entity debts to achieve individual OTS discharges.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 space-y-1 shadow-xs">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>ARC Zombie Debt Harassment</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debts pursued years after write-off. Cease-and-desist notices stop harassment and convert demands to OTS terms.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Frequently Asked Questions: 5-Year Card Defaults
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Authoritative legal and financial answers regarding aged credit card defaults, statutory limitation rules, recovery agent conduct, and compromise settlements.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left py-4 px-5 sm:px-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors"
                      >
                        <span className="text-sm sm:text-base">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-4 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.a}
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
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Statutory References &amp; Regulatory Documentation
              </h2>

              <ul className="text-xs sm:text-sm text-slate-600 space-y-1 list-disc pl-5 leading-relaxed">
                <li>Limitation Act 1963 - Articles 19 &amp; 25 (3-Year Limitation for Unsecured Debt Recovery).</li>
                <li>Limitation Act 1963 - Section 3 (Mandatory Dismissal) and Section 18 (Debt Acknowledgment).</li>
                <li>Credit Information Companies (Regulation) Act 2005 (CICRA) - Section 21 (Data Accuracy).</li>
                <li>RBI Master Direction - Recovery Agents and Fair Practices Code (August 2022).</li>
                <li>Supreme Court of India - Perkins Eastman Architects DPC v. HSCC (India) Ltd.</li>
                <li>Payment and Settlement Systems Act 2007 - Section 25 (Dishonour of Electronic Transfer).</li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-1">
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:text-[#1886ff] text-slate-700 transition-colors shadow-2xs font-medium">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:text-[#1886ff] text-slate-700 transition-colors shadow-2xs font-medium">
                    <span>RBI Ombudsman (CMS)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:text-[#1886ff] text-slate-700 transition-colors shadow-2xs font-medium">
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:text-[#1886ff] text-slate-700 transition-colors shadow-2xs font-medium">
                    <span>India Code (Limitation Act)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:text-[#1886ff] text-slate-700 transition-colors shadow-2xs font-medium">
                    <span>NALSA Lok Adalat</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:text-[#1886ff] text-slate-700 transition-colors shadow-2xs font-medium">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-1">
                <div className="flex flex-wrap gap-1.5">
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">Credit Card Minimum Due Trap</Link>
                  <Link href="/personal-loan-defaulter-for-10-years" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">Personal Loan Defaulter 10 Years</Link>
                  <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">Can You Go to Jail for Credit Card Debt</Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">Section 25 PSSA Notice Defense</Link>
                  <Link href="/settle-multiple-credit-cards" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">Settle Multiple Credit Cards</Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">Rebuild CIBIL Score After Settlement</Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">Convert Settled to Closed in CIBIL</Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">Get No Dues Certificate</Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">Verify Settlement Sanction Letter</Link>
                  <Link href="/nri-credit-card-debt-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">NRI Credit Card Settlement</Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-4 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0"
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
                Specialized in banking compliance, aged credit card default defense, Limitation Act remedies, and OTS negotiations.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Bio</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-3xl p-5 text-white text-center space-y-3 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                  100% CONFIDENTIAL DEBT RELIEF
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Harassed for a 5-Year Card Default?
                </h3>
                <p className="text-blue-100 text-xs mt-1 leading-relaxed font-normal">
                  Settle time-barred debt at up to 90% discount with legal protection and official NDC.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Resolve 5-Year Default
              </Link>
              <div className="pt-1 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>Direct Bank / ARC Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">The CredSettle Assurance</h4>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Defense:</strong> Limitation Act protections.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Advance Risk:</strong> Success-linked terms.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Remittance:</strong> Paid directly to bank or ARC.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official NDC:</strong> Complete legal discharge.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Related Legal Guides</h4>
              <div className="space-y-2">
                <Link
                  href="/personal-loan-defaulter-for-10-years"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Defaulter 10 Years
                  </p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Limitation Act &amp; zombie debt &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Escape Minimum Due Trap
                  </p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">42% APR compounding analysis &rarr;</span>
                </Link>

                <Link
                  href="/can-i-go-to-jail-for-credit-card-debt"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can You Go to Jail for Debt?
                  </p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Civil vs criminal law rights &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
