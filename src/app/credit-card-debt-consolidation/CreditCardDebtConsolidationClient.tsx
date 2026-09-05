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
  FileText,
  HelpCircle,
  TrendingUp,
  Award,
  BookOpen,
  Building2,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  Gavel,
  BadgeAlert,
  Landmark,
  Percent,
  Calculator,
  ShieldAlert
} from 'lucide-react';

export default function CreditCardDebtConsolidationClient() {
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
    { id: 'quick-crux', label: 'Executive Summary' },
    { id: 'debt-economics-consolidation', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'consolidation-math-breakdown', label: '2. Financial Math & Settlement Comparison' },
    { id: 'resolution-comparison-matrix', label: '3. Relief Options Comparison Matrix' },
    { id: 'cibil-algorithm-trajectory', label: '4. CIBIL Scoring & CICRA Rectification' },
    { id: 'infographic-overview', label: '5. Visual 6-Stage Resolution Blueprint' },
    { id: 'step-by-step-consolidation-sop', label: '6. 6-Stage Settlement SOP' },
    { id: 'statutory-legal-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-grievance-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
    { id: 'chronological-timeline-milestones', label: '9. Chronological Resolution Timeline' },
    { id: 'real-world-debt-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is credit card debt consolidation in India?',
      a: 'It combines multiple card dues into one structured channel via personal loans, balance transfers, or legal settlement to stop compounding 42% APR interest.'
    },
    {
      q: 'When should I choose a personal loan over a balance transfer?',
      a: 'A personal loan is ideal with a 720+ CIBIL score, replacing 42% card APR with a fixed 11.5%-16% reducing interest rate.'
    },
    {
      q: 'What are the risks of credit card balance transfers in India?',
      a: 'Promotional 0%-3% rates last 3-6 months. Unpaid balances revert to 42% APR plus 1%-2.5% non-refundable processing fees.'
    },
    {
      q: 'How does legal debt settlement differ from loan consolidation?',
      a: 'Consolidation borrows new funds, whereas legal settlement (OTS) negotiates formal waivers, reducing principal balances by 40%-60% without new loans.'
    },
    {
      q: 'Does a debt consolidation loan improve my CIBIL score?',
      a: 'After a minor inquiry dip, clearing maxed-out cards drops credit utilization below 30%, boosting CIBIL scores within 6-12 months.'
    },
    {
      q: 'Can I consolidate credit card debt with a CIBIL score below 600?',
      a: 'Banks reject consolidation loans below 650 CIBIL. Distressed cardholders resolve debt through structured One-Time Settlements without fresh borrowing.'
    },
    {
      q: 'Can banks file criminal cases for credit card consolidation defaults?',
      a: 'Credit card debt is an unsecured civil liability. Lenders cannot arrest borrowers, but can issue Section 25 PSSA notices for bounced auto-debits.'
    },
    {
      q: 'What are RBI rules regarding recovery agent conduct for credit cards?',
      a: 'The RBI Fair Practices Code strictly bans calls before 8:00 AM or after 7:00 PM, contacting employers, and intimidation tactics.'
    },
    {
      q: 'How can I stop auto-debits from deducting my salary for credit cards?',
      a: 'Under RBI guidelines, cardholders can submit a formal NACH cancellation notice to their bank branch, halting automatic salary deductions.'
    },
    {
      q: 'How does CredSettle assist cardholders trapped in credit card debt?',
      a: 'CredSettle audits statements, halts harassment, and negotiates One-Time Settlements with bank committees, securing unconditional No Dues Certificates.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) ~55 words */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>Institutional Credit Card Debt Relief</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Credit Card Debt Consolidation: Loans vs Transfers vs Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            An objective comparative analysis evaluating personal consolidation loans, balance transfers, and structured legal debt settlement under Reserve Bank of India frameworks to eliminate compounding interest and regain financial control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Explore Debt Relief Options - Free Strategy Session</span>
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
                      href={'#' + link.id}
                      className={'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ' + (
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Statutory Borrower Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Master Direction on Credit Card Operations 2022 and Section 25 PSSA protections.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with border-l-[5px] border-l-[#1886ff]) ~99 words */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-3 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: CREDIT CARD DEBT CONSOLIDATION IN INDIA</span>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Multi-Card Trap:</strong> Revolving cards incur 42%-52% APR plus 18% GST compounding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Personal Loans:</strong> Refinancing lowers interest to 11.5%-16% for 720+ CIBIL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Balance Transfers:</strong> 0%-3% teaser rates provide short relief, reverting if unpaid.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Legal Settlement:</strong> Compromise secures 40%-60% principal waivers in insolvency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Property Risk:</strong> Unsecured cards cannot lead to SARFAESI property attachment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandate Revocation:</strong> RBI rules allow revoking NACH auto-debits on salary accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Fair Practices Code bans recovery calls outside 8 AM-7 PM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Repair:</strong> Section 21 CICRA filings restore CIBIL in 18-24 months.</span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics ~168 words */}
            <section id="debt-economics-consolidation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Percent className="w-4 h-4 text-[#1886ff]" />
                <span>1. Debt Economics &amp; NPA Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Economics of Multi-Card Delinquency and NPA Reserves
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Credit card debt represents the most expensive unsecured consumer credit in India. Revolving card balances attract monthly finance charges of 3.5% to 4.2%, translating into an effective Annual Percentage Rate (APR) of 42% to 52%. Coupled with an 18% GST levy on all finance fees and late penalties, over 80% of minimum payments service non-principal charges. This predatory compounding drains monthly household cash flows and drives distressed cardholders into severe structural insolvency.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the RBI Prudential Framework, delinquent credit cards transition through Special Mention Account buckets: SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days). On the 91st day of continuous default, the facility is classified as a Non-Performing Asset (NPA). Because credit cards lack collateral, lenders cannot initiate summary property attachment under the SARFAESI Act 2002. Instead, banks must allocate 15% to 100% Tier-1 capital provisioning, motivating credit committees to accept One-Time Settlements (OTS) rather than pursuing multi-year civil litigation.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math ~178 words */}
            <section id="consolidation-math-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>2. Financial Math &amp; Settlement Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Comparison: Revolving Dues vs Loan vs Settlement
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Choosing the right relief path requires evaluating total interest, tenure, and eligibility. On a ₹5,00,000 multi-card balance at 45% APR, paying minimum dues takes over 18 years and ₹12,40,000 in total payments. An unsecured personal loan at 13.5% reducing APR slashes payout to ₹6,48,000 across 48 months, but requires a 720+ CIBIL score. Balance transfer cards offer short-term 0%-3% monthly rates for 3-6 months, but unliquidated amounts revert to 42% APR.
              </p>

              {/* Representative Calculation Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Representative Financial Comparison (₹5,00,000 Multi-Card Debt)
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    54% Direct Haircut via OTS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 font-semibold mb-1">Revolving Minimum Dues</p>
                    <p className="text-base sm:text-lg font-bold text-red-600">₹12,40,000</p>
                    <p className="text-[11px] text-slate-400 mt-1">18+ yrs at 45% APR</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 font-semibold mb-1">Personal Loan (13.5%)</p>
                    <p className="text-base sm:text-lg font-bold text-blue-600">₹6,48,000</p>
                    <p className="text-[11px] text-slate-400 mt-1">48 months EMI plan</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 font-semibold mb-1">Balance Transfer (180 D)</p>
                    <p className="text-base sm:text-lg font-bold text-amber-600">₹5,25,000</p>
                    <p className="text-[11px] text-slate-400 mt-1">Short teaser window</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100">
                    <p className="text-xs text-[#1886ff] font-semibold mb-1">CredSettle Legal OTS</p>
                    <p className="text-base sm:text-lg font-bold text-[#1886ff]">₹2,30,000</p>
                    <p className="text-[11px] text-blue-600 font-medium mt-1">Full discharge &amp; NDC</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  For distressed borrowers facing insolvency, CredSettle negotiates a One-Time Settlement (OTS), waiving 100% of accumulated penal charges and reducing principal to achieve complete debt discharge.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix ~120 words */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>3. Relief Options Comparison Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Strategic Comparison of Credit Card Debt Relief Pathways in India
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Distressed cardholders must evaluate relief options based on total financial liability, monthly cash flow relief, eligibility thresholds, and credit bureau consequences.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3">Relief Pathway</th>
                      <th className="p-3">Interest Rates</th>
                      <th className="p-3">Cash Flow Relief</th>
                      <th className="p-3">Eligibility</th>
                      <th className="p-3">CIBIL Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Personal Loan</td>
                      <td className="p-3 text-blue-600 font-semibold">11.5% to 16% APR</td>
                      <td className="p-3">Fixed 2-5 yr EMIs</td>
                      <td className="p-3">CIBIL 720+</td>
                      <td className="p-3 text-emerald-600 font-medium">Improves score via low CUR</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Balance Transfer</td>
                      <td className="p-3 text-amber-600">0%-3% for 3-6 mos</td>
                      <td className="p-3">Temporary pause</td>
                      <td className="p-3">CIBIL 700+</td>
                      <td className="p-3">High utilization on card</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Legal Settlement</td>
                      <td className="p-3 text-emerald-600 font-bold">40%-60% Haircut</td>
                      <td className="p-3 text-[#1886ff] font-bold">Closed in 90 days</td>
                      <td className="p-3 text-emerald-600">Distress / 90+ DPD</td>
                      <td className="p-3">Marked Settled; rebuildable</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Bank Restructure</td>
                      <td className="p-3">18% to 24% APR</td>
                      <td className="p-3">Lower 36-mo EMIs</td>
                      <td className="p-3">Bank discretion</td>
                      <td className="p-3 text-amber-600">Marked Restructured</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Minimum Dues</td>
                      <td className="p-3 text-red-600 font-bold">42%-52% APR + GST</td>
                      <td className="p-3 text-red-600">Perpetual debt trap</td>
                      <td className="p-3">No qualifications</td>
                      <td className="p-3 text-red-600 font-bold">Depressed via 95%+ CUR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math ~142 words */}
            <section id="cibil-algorithm-trajectory" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>4. CIBIL Scoring &amp; CICRA Rectification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                CIBIL Scoring Algorithms, DTI Remediation, and Credit Rehabilitation
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian credit bureaus (CIBIL, Experian, CRIF High Mark, Equifax) compute credit scores using five weighted parameters: Payment History (35%), Credit Utilization Ratio (30%), Credit History Length (15%), Credit Mix (10%), and Inquiries (10%). Maintaining maxed-out cards keeps utilization above 90%, depressing CIBIL scores even when paying minimum dues on time.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consolidating with a personal loan triggers an initial 5 to 15-point inquiry drop, but reduces revolving utilization to near zero, increasing scores by 60 to 100 points within 9 months. Executing a One-Time Settlement marks the card Settled, causing a temporary 75 to 110-point decline. However, cardholders can invoke Section 21 of the Credit Information Companies (Regulation) Act (CICRA) 2005 to record zero balance, systematically rebuilding credit back to 750+ within 18 to 24 months using secured credit cards.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card ~29 words */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Visual 6-Stage Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                The CredSettle Strategic Credit Card Resolution Blueprint
              </h2>

              <div className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white shadow-xs">
                <div className="relative aspect-video w-full bg-slate-900">
                  <Image
                    src="/images/infographics/credit-card-debt-consolidation.jpg"
                    alt="Credit Card Debt Consolidation in India Infographic Blueprint"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
                  <span>
                    <strong>Figure 1.1:</strong> 6-Stage SOP for Multi-Card Forensic Audit, Mandate Revocation, and Principal-Only Debt Closure.
                  </span>
                  <a
                    href="/images/infographics/credit-card-debt-consolidation.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) ~252 words */}
            <section id="step-by-step-consolidation-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>5. Step-by-Step 6-Stage Settlement SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Standard Operating Procedure: 6 Stages to Complete Debt Discharge
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Resolving multi-card debt requires a structured, legally supported process to isolate principal from compounding 42% APR charges and secure binding discharge.
              </p>

              <div className="space-y-3.5">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0">01</span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 1: Forensic Portfolio Audit &amp; DTI Reconciliation</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    Financial analysts audit all card statements to separate transacted principal from compounding 42% APR charges and 18% GST. We evaluate Debt-to-Income ratios to determine consolidation versus settlement viability.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0">02</span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 2: Bona Fide Hardship Dossier Compilation</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    We compile verifiable documentation of financial distress, including medical emergency records, salary reduction letters, or business loss statements. This hardship dossier establishes structural inability to service high interest.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0">03</span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 3: Auto-Debit Mandate Revocation &amp; Shield</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    Counsel issues statutory revocation notices for electronic NACH auto-debits under RBI guidelines. This halts automatic sweeps on salary accounts, protecting essential household liquidity while bilateral negotiations commence.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0">04</span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 4: Credit Committee Bilateral Negotiations</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    CredSettle advocates negotiate directly with bank Stressed Asset Desks. Leveraging NPA capital provisioning timelines, we secure 100% waivers on penal interest and a 40% to 60% compromise on verified principal.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0">05</span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 5: Settlement Sanction Letter Vetting</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    Legal counsel examines the bank settlement letter to confirm official letterhead, authorized signatory credentials, explicit waiver terms, specified payment schedules, and permanent exclusion of residual debt sale to ARCs.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center flex-shrink-0">06</span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 6: Direct Remittance &amp; No Dues Certificate</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    You remit the agreed settlement amount directly into your official bank loan account. Upon payment verification, we secure an unconditional No Dues Certificate (NDC) and initiate credit bureau record updates.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights ~161 words */}
            <section id="statutory-legal-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>6. Statutory Notice Defense &amp; Cardholder Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Statutory Notice Defense Framework &amp; Legal Rights of Borrowers
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When credit card default occurs, banks issue formal statutory communications. Understanding your statutory defenses ensures effective legal protection without panic.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <BadgeAlert className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <h4>Section 25 PSSA (Electronic Mandate Dishonour)</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 25 PSSA 2007, auto-debit bounces carry quasi-criminal liability. Serving a formal legal reply establishing financial distress and prior mandate revocation refutes fraudulent intent.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <h4>Section 138 NI Act (Cheque Dishonour Notice)</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If banks present undated security cheques collected at card issuance, our defense establishes that blank security cheques cannot enforce arbitrary compounding interest without ledger reconciliation.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <h4>Unilateral Arbitration &amp; Perkins Precedent</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court precedents in <em>TRF Limited</em> and <em>Perkins Eastman</em>, lenders cannot unilaterally appoint sole arbitrators, rendering unilateral proceedings voidable under Section 12(5).
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <h4>DRT Jurisdiction &amp; Fair Practices Code</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    DRT claims apply strictly to debts exceeding ₹20 Lakhs. The RBI Fair Practices Code strictly prohibits calls outside 8:00 AM to 7:00 PM, contacting employers, or abusive recovery conduct.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix ~97 words */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>7. 3-Tier Grievance &amp; Escalation Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                3-Tier Institutional Grievance Redressal and Ombudsman Escalation
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When bank recovery departments engage in unfair billing practices or recovery harassment, cardholders can escalate complaints through three regulatory tiers.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-900 font-bold block text-sm">Level 1: Grievance Redressal Officer (GRO)</strong>
                    <span className="text-slate-600">Submit a formal written petition contesting predatory fee compounding or agent misconduct.</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] font-bold text-xs flex-shrink-0">7–10 Days</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-900 font-bold block text-sm">Level 2: Principal Nodal Officer (PNO)</strong>
                    <span className="text-slate-600">Escalate deadlocked disputes to senior bank executives holding settlement authorization.</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] font-bold text-xs flex-shrink-0">14–21 Days</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-900 font-bold block text-sm">Level 3: RBI Integrated Ombudsman Scheme</strong>
                    <span className="text-slate-600">File a statutory complaint on cms.rbi.org.in for Fair Practices Code violations or documentation delays.</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex-shrink-0">30 Days</span>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table ~85 words */}
            <section id="chronological-timeline-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>8. Chronological Resolution Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Chronological Milestones: From Multi-Card Default to Clean Discharge
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The lifecycle of delinquent credit card debt follows defined regulatory stages from first payment delinquency to final legal settlement and credit rehabilitation.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3">Timeline</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Bank Action</th>
                      <th className="p-3">Borrower Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Day 1-30</td>
                      <td className="p-3">SMA-0</td>
                      <td className="p-3">Late fees &amp; alerts</td>
                      <td className="p-3">Revoke auto-debits; audit dues</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Day 31-60</td>
                      <td className="p-3">SMA-1</td>
                      <td className="p-3">Card block &amp; calls</td>
                      <td className="p-3">Submit hardship petition to GRO</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Day 61-90</td>
                      <td className="p-3">SMA-2</td>
                      <td className="p-3">Agency collection</td>
                      <td className="p-3">Enforce RBI Fair Practices Code</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900 text-red-600">Day 91-180</td>
                      <td className="p-3 text-red-600 font-semibold">NPA</td>
                      <td className="p-3">100% provisioning</td>
                      <td className="p-3 text-emerald-600 font-bold">Prime OTS window (40%-60% off)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Month 6+</td>
                      <td className="p-3">Write-Off</td>
                      <td className="p-3">ARC / Lok Adalat</td>
                      <td className="p-3 text-[#1886ff] font-bold">Execute OTS sanction &amp; get NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios ~148 words */}
            <section id="real-world-debt-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>9. Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Case Analysis: Card Consolidation &amp; Default Scenarios
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Different financial crises require customized resolution strategies to maximize debt waivers while maintaining legal compliance across multiple lending institutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Multiple Maxed-Out Credit Cards</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers rotating minimum dues across 4 to 7 credit cards face severe interest stacking. CredSettle halts compounding and coordinates structured multi-bank settlements aligned with cash flow.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Corporate &amp; Tech Executive Layoffs</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Salaried corporate professionals experiencing sudden job termination cannot service 42% APR card debt. We submit severance documentation to substantiate hardship, securing fast-track 50%+ principal waivers.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Proprietorship Working Capital Swipes</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Business owners who used personal credit cards for commercial operations face personal liability. We decouple business stress from personal assets, negotiating structured compromise settlements.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">ARC Portfolio Debt Assignments</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When banks assign written-off card portfolios to Asset Reconstruction Companies (ARCs), collection pressure spikes. We audit assignment validity under SARFAESI Section 5, securing deep 60%+ discounts.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs ~250 words */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5 pt-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Frequently Asked Questions on Credit Card Debt Consolidation in India
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors gap-3"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={'w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ' + (
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          )}
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

            {/* SECTION 13: Citations & Outbound Authority Grid ~115 words */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory Frameworks
              </h2>

              <ul className="space-y-1 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li><strong>Reserve Bank of India:</strong> Master Direction - Credit Card Issuance Directions, 2022.</li>
                <li><strong>Payment &amp; Settlement Systems Act, 2007:</strong> Section 25 (Auto-Debit Defenses).</li>
                <li><strong>Negotiable Instruments Act, 1881:</strong> Section 138 (Cheque Dishonour for Debt).</li>
                <li><strong>Arbitration Act, 1996:</strong> Sections 12(5) &amp; 21 (Arbitrator Impartiality Rulings).</li>
                <li><strong>Credit Information Companies Act, 2005:</strong> Section 21 Dispute Rectification.</li>
                <li><strong>RBI Integrated Ombudsman Scheme, 2021:</strong> Grievance Redressal Framework.</li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 block mb-2">Official Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>rbi.org.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>cms.rbi.org.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>cibil.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>indiacode.nic.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>nalsa.gov.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>cybercrime.gov.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/settle-multiple-credit-cards" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle Multiple Credit Cards
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can You Go to Jail for Credit Card Debt
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 25 NACH Bounce Defense
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score After Settlement
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled Status to Closed
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Sanction Letter
                  </Link>
                  <Link href="/nri-credit-card-debt-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NRI Credit Card Settlement
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ~80 words ================= */}
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
                Specialist in credit card dispute defense, banking compliance, and institutional OTS negotiations.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Author Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Panel Expert
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Trapped in Multi-Card Debt?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Settle credit card debt at 40%-60% principal discount with zero harassment.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Free Strategy Consultation
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Assurance</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Advance Risk:</strong> Success-linked terms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Remittance:</strong> Paid to bank accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Compliance:</strong> Fair Practices protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official NDC:</strong> Clean discharge certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Debt Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Minimum Due Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Compounding interest analysis &rarr;</span>
                </Link>

                <Link
                  href="/settle-multiple-credit-cards"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Settle Multiple Credit Cards
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Multi-bank resolution strategy &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 25 NACH Bounce Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal defense &amp; reply strategy &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
