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
  Coins
} from 'lucide-react';

export default function GoldLoanDefaultAuctionClient() {
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
    { id: 'gold-loan-economics-npa', label: '1. Pawn Pledge & NPA Dynamics' },
    { id: 'financial-math-breakdown', label: '2. Interest Inflation & Settlement Math' },
    { id: 'resolution-comparison-matrix', label: '3. Gold Resolution Comparison Table' },
    { id: 'cibil-scoring-impact', label: '4. CIBIL Scoring & Credit Impact' },
    { id: 'infographic-overview', label: 'Visual Defense Infographic' },
    { id: 'step-by-step-defense-sop', label: '5. 6-Stage Defense & Retrieval SOP' },
    { id: 'statutory-notice-defense', label: '6. Section 176 Legal Defense Rights' },
    { id: 'three-tier-grievance-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'chronological-timeline-table', label: '8. Procedural Milestone Timelines' },
    { id: 'specialized-loan-scenarios', label: '9. Muthoot, Manappuram & Agri Loans' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank auction my gold immediately after an EMI default?',
      a: 'No. Lenders cannot sell pledged ornaments upon a single default. Accounts must first turn NPA past 90 days, followed by a mandatory 30-day statutory notice under Section 176 Contract Act.'
    },
    {
      q: 'What is the statutory notice period required before a gold auction?',
      a: 'Section 176 mandates reasonable notice of sale, interpreted under RBI directives as at least thirty days of registered written notice specifying total debt, auction date, time, and reserve price.'
    },
    {
      q: 'Can I stay an auction if the bank undervalued my jewelry?',
      a: 'Yes. If a lender attempts a distress sale below market value without certified assayer reports or newspaper ads, borrowers can obtain an urgent civil court stay under Order 39 CPC.'
    },
    {
      q: 'What happens to surplus money if gold sells for more than total debt?',
      a: 'Under RBI guidelines and Section 176, any excess auction proceeds above legitimate principal, simple interest, and verifiable sale expenses must be refunded to the borrower within thirty days.'
    },
    {
      q: 'Can I negotiate an OTS or interest waiver on a defaulted gold loan?',
      a: 'Yes. Defaulted gold loans accrue heavy penal compounding. Presenting a verified financial hardship dossier allows negotiating a 30% to 60% penal interest waiver to redeem ornaments.'
    },
    {
      q: 'How does gold loan default affect my credit bureau score?',
      a: 'Overdue gold accounts are reported as NPA tradelines, causing a 50 to 120-point CIBIL drop. Executing an OTS and obtaining an NDC mandates updating bureau records to Closed.'
    },
    {
      q: 'Are NBFCs allowed to conduct private or internal auctions?',
      a: 'No. The RBI strictly prohibits private auctions. NBFCs must conduct public auctions through board-approved auctioneers with public newspaper notices in the local branch district.'
    },
    {
      q: 'What if the bank claims pledged gold had lesser purity or weight?',
      a: 'The bank is bound by the original pawn ticket issued at sanction. Unilateral purity downgrades without contemporaneous forensic proof constitute unfair trade practices under consumer laws.'
    },
    {
      q: 'Can the bank recover deficits if auction proceeds fall short of dues?',
      a: 'The lender may file a civil suit for the shortfall under Section 176. However, banks cannot seize unpledged household assets or initiate criminal action for civil debt defaults.'
    },
    {
      q: 'How can I retrieve family gold if I cannot pay the full balance?',
      a: 'Borrowers can negotiate a structured compromise settlement, request partial ornament release against partial payments, or execute a loan takeover balance transfer to an alternate lender.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-3">
            <Coins className="w-3.5 h-3.5 text-yellow-300" />
            <span>Borrower Statutory Protection &amp; Ornament Redemption</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Gold Loan Default: Can Bank Auction My Gold?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Facing default on your gold loan? Understand your legal rights under Section 176 of the Indian Contract Act, mandatory 30-day statutory auction notices, surplus refund compliance, and how to negotiate interest waivers to retrieve your pledged family ornaments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Unfair Auction &amp; Retrieve Gold</span>
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
                  <span>Statutory Pawn Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Indian Contract Act 1872 &amp; RBI Fair Practices Code for Gold Lending.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: BORROWER RIGHTS IN GOLD LOAN AUCTIONS</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Section 176 Notice:</strong> Lenders cannot auction pledged ornaments without serving a formal 30-day registered statutory notice.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Ban on Secret Auctions:</strong> RBI Master Directions prohibit private in-house auctions, requiring transparent public proceedings.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Surplus Refund:</strong> Excess proceeds above legitimate dues must be credited to the borrower within thirty days.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Court Stay Remedies:</strong> Borrowers can obtain injunctions under Order 39 CPC against undervalued distress jewelry sales.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">30% to 60% Penal Waiver:</strong> Hardship representations eliminate compounded penal interest to facilitate principal settlement.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">SARFAESI Collateral Exemption:</strong> Gold loans represent movable pawn pledges rather than SARFAESI mortgage properties.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Priority Crop Protection:</strong> Agricultural gold advances benefit from statutory moratoriums during notified crop losses.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Credit Bureau Updation:</strong> Settling dues mandates issuance of a No Dues Certificate and updating CIBIL to Closed.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="gold-loan-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory &amp; Economic Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Gold Loan Economics, Pawn Pledge Law &amp; NPA Classification
              </h2>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Gold loans represent a pawn pledge governed by Sections 172 through 179 of the Indian Contract Act, 1872, where special possession transfers to the lender while ownership remains with the borrower. Lenders advance funds against a 75% LTV limit under RBI directions. When hardship causes defaults past 90 days, the facility becomes a Non-Performing Asset (NPA).
                </p>
                <p>
                  Unlike real estate loans, gold advances are expressly exempt from SARFAESI possession actions. Instead, recovery is strictly confined to Section 176 of the Contract Act. The lender acquires no automatic property ownership; it possesses only a regulated power of sale conditioned upon serving reasonable notice. Because lenders face Tier-1 capital provisioning pressure on bad assets, borrowers hold significant commercial leverage to negotiate a compromise One-Time Settlement (OTS) and redeem ancestral ornaments.
                </p>
              </div>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-math-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Penal Interest Inflation &amp; Settlement Math Breakdown
              </h2>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  When gold loans enter default, lenders apply compounding penal rates between 24% and 30% per annum, adding auction fees, assayer levies, and storage charges. These additions artificially inflate outstanding balances and trigger distress margin calls. By conducting a forensic ledger audit, our professionals challenge these predatory fee layers under RBI Fair Practices Code to negotiate significant interest concessions.
                </p>
                <p>
                  Representative 180-Day NPA Case Study: Pledged Asset: 150g 22K Gold Ornaments. Lender Demand: Principal ₹6,00,000; Contractual Interest ₹72,000; Penal Charges (28% p.a.) ₹1,18,000; Auction Fees ₹35,000; Total Demand ₹8,25,000. CredSettle Negotiated OTS: Verified Principal ₹6,00,000; Simple Interest ₹45,000; Penal Waiver -₹1,53,000; Final Settlement ₹6,45,000. Net Savings: ₹1,80,000 (100% of gold ornaments safely redeemed with official NDC).
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Gold Loan Resolution Options Comparison Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluating available gold loan resolution strategies across financial cost, ornament custody, credit score, and speed:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-800">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Resolution Route</th>
                      <th className="p-3.5 font-bold">Financial Cost</th>
                      <th className="p-3.5 font-bold">Ornament Custody</th>
                      <th className="p-3.5 font-bold">Credit Impact</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Speed &amp; Complexity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Distress Public Auction</td>
                      <td className="p-3.5 text-red-600 font-semibold">Severe distress markdown</td>
                      <td className="p-3.5 text-red-600">Forfeiture of ornaments</td>
                      <td className="p-3.5">Loss NPA tag</td>
                      <td className="p-3.5">High deficit risk</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50 bg-blue-50/30">
                      <td className="p-3.5 font-bold text-[#1886ff]">Compromise OTS Settlement</td>
                      <td className="p-3.5 text-emerald-700 font-bold">30%–60% penal waiver</td>
                      <td className="p-3.5 text-emerald-700 font-bold">100% ornament release</td>
                      <td className="p-3.5">Closed with NDC</td>
                      <td className="p-3.5 font-semibold text-[#1886ff]">Fast 15–30 days</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructure / Rollover</td>
                      <td className="p-3.5">High capitalized interest</td>
                      <td className="p-3.5">Vault retention</td>
                      <td className="p-3.5">Restructured tag</td>
                      <td className="p-3.5">Requires upfront interest</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Gold Takeover Refinancing</td>
                      <td className="p-3.5">Balance transfer fees</td>
                      <td className="p-3.5">New institutional vault</td>
                      <td className="p-3.5">New tradeline opened</td>
                      <td className="p-3.5">Tripartite vault transfer</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Civil Injunction Stay</td>
                      <td className="p-3.5">Court &amp; legal fees</td>
                      <td className="p-3.5">Judicial freeze on sale</td>
                      <td className="p-3.5">Account in dispute</td>
                      <td className="p-3.5">Order 39 CPC suit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-scoring-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Scoring Algorithms &amp; Gold Loan Default Remediation
              </h2>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Gold loan performance directly impacts credit scores under standard bureau algorithms across TransUnion CIBIL, Experian, CRIF High Mark, and Equifax. Scoring models allocate 35% weight to repayment track, 30% to outstanding balance, 15% to credit history duration, 10% to credit mix, and 10% to recent loan queries. Defaulting past 90 days causes an immediate 50 to 120-point drop as lenders report Sub-Standard or Doubtful NPA status.
                </p>
                <p>
                  If a bank executes an un-contested auction and writes off residual deficits, this negative mark persists for seven years. However, resolving the account through a structured One-Time Settlement allows borrowers to demand statutory compliance under Section 21 of the CICRA Act. Lenders are legally bound to submit updated records within thirty days of settlement clearance, transitioning the tradeline to Closed status and enabling credit score recovery back to 750+.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: Gold Loan Default &amp; Auction Defense Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Our infographic illustrates the 4-step framework to halt premature gold auctions, invoke Section 176 statutory rights, secure penal waivers, and safely redeem family ornaments under RBI directives.
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200/80 bg-white p-3 md:p-4 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/infographics/gold-loan-default-auction.jpg"
                    alt="Gold Loan Default and Section 176 Auction Defense Visual Blueprint"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 850px"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 px-1 text-xs text-slate-500">
                  <span>Authorized CredSettle Statutory Defense Framework</span>
                  <a
                    href="/images/infographics/gold-loan-default-auction.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>View Full-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Sequential Resolution SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure (SOP): 6 Stages of Gold Loan Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this sequential standard operating procedure to halt gold auctions and redeem pledged family ornaments:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–5</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Forensic Pledge &amp; Ledger Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Examine the pawn ticket and purity certificate. Audit the loan statement to isolate illegal compounding penal interest and storage fees.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 6–12</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Statutory Notice &amp; Hardship Dossier
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Verify Section 176 notice compliance and compile proof of medical emergency or income distress to support your settlement petition.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 13–20</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Section 176 Challenge &amp; Stay Notice
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Serve written objections upon the lender and auctioneer challenging notice defects, missing advertisements, and distress undervaluation.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 21–35</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Bilateral OTS &amp; Waiver Negotiations
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Represent the case before the bank Principal Nodal Officer, negotiating a 30% to 60% penal interest waiver in a settlement letter.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 36–45</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Remittance &amp; Physical Vault Verification
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Deposit the settlement sum directly into the loan account. Inspect, weigh, and verify ornament purity at the vault before taking possession.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 46–60</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    NDC Issuance &amp; Credit Updation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Collect the No Dues Certificate confirming zero residual liability and ensure the lender transmits updated trade data to credit bureaus to mark the account Closed.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Rights &amp; Judicial Commentary</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense Architecture &amp; Borrower Legal Rights
              </h2>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Borrowers facing auction notices possess robust legal protections under Indian law. Section 176 of the Indian Contract Act, 1872 strictly requires the pawnee to serve reasonable notice of sale before disposing of pledged goods. In established judicial precedent, reasonable notice constitutes a mandatory statutory condition precedent requiring at least thirty days of clear written notice detailing quantified dues, pledged item descriptions, auction date, time, and specific public venue.
                </p>
                <p>
                  Under RBI Master Directions, lenders cannot conduct private auctions. Sales must be conducted publicly through board-approved auctioneers with advertisements in two newspapers and reserve prices tied to market gold rates. Lenders cannot sell jewelry below fair market value. If violated, borrowers can apply under Order 39 CPC for an interim stay, or petition the Consumer Commission under Section 35 of the Consumer Protection Act, 2019.
                </p>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Grievance Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Grievance Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Escalate unaddressed notice defects and recovery grievances through this structured regulatory framework:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Manager &amp; Grievance Officer (GRO, 7–10 Days)
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit written objections contesting notice defects and arbitrary penal fees, demanding an immediate pause on auction proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Principal Nodal Officer &amp; Credit Head (PNO, 14–21 Days)
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Escalate to the Principal Nodal Officer to recalculate dues under simple interest and sanction an amicable compromise OTS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal, 30 Days)
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    File a complaint on <strong>cms.rbi.org.in</strong> under the Integrated Ombudsman Scheme for violations of gold auction norms.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Resolution Timeline (Day 1 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Key institutional and legal milestones in a gold loan default resolution lifecycle:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-800">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline</th>
                      <th className="p-3.5 font-bold">Lender Milestone</th>
                      <th className="p-3.5 font-bold">Statutory Base</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 1–30</td>
                      <td className="p-3.5">SMA-0 on missed payment</td>
                      <td className="p-3.5">RBI Prudential Norms</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Verify pawn ticket &amp; grace terms</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 31–90</td>
                      <td className="p-3.5">SMA-1/2 overdue penalties</td>
                      <td className="p-3.5">Fair Practices Code</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Audit ledger &amp; compile hardship</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 91–120</td>
                      <td className="p-3.5">NPA &amp; Section 176 notice</td>
                      <td className="p-3.5">Section 176 Contract Act</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Issue stay objection &amp; OTS</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Months 4–5</td>
                      <td className="p-3.5">Public auction ad window</td>
                      <td className="p-3.5">RBI Auction Directives</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Finalize compromise letter</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Month 6</td>
                      <td className="p-3.5">Vault release, NDC &amp; closure</td>
                      <td className="p-3.5">CICRA Act Section 21</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Inspect gold &amp; verify Closed status</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: NBFCs, Agri Loans &amp; Surplus Claims
              </h2>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Resolution strategies across varied gold financing categories and institutional frameworks:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#1886ff]" />
                      NBFC Gold Loans (Muthoot &amp; Manappuram)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      NBFCs follow automated auction cycles. Serving formal Section 176 objections regarding notice compliance compels legal desks to pause sales and approve compromise settlements.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-[#1886ff]" />
                      Agricultural &amp; Priority Gold Advances
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Agricultural gold loans carry statutory protections against distress sales during natural calamities, entitling farmers to debt restructuring under SLBC directives.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Coins className="w-4 h-4 text-[#1886ff]" />
                      Purity &amp; Assayer Discrepancy Disputes
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      The lender is bound by original pawn receipts; unilateral purity downgrades without contemporaneous forensic proof constitute unfair trade practices.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#1886ff]" />
                      Recovery of Unclaimed Auction Surplus Funds
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      When auctions generate excess funds above legitimate dues, lenders must proactively refund the surplus within thirty days under RBI rules. Unreturned surplus can be recovered with statutory interest.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Gold Loan Default &amp; Bank Auctions
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to explore authoritative legal answers verified by our banking and debt resolution professionals:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
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
                Official Regulatory References &amp; Authorities
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Sections 172 to 179 (Pledge of Pawnee and Mandatory Notice under Section 176).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Fair Practices Code for Gold Loans and Public Auction Guidelines (RBI/2012-13/462).
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 35 (Deficiency in Banking Service and Unfair Trade Practices).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005:</strong> Section 21 (Duty to Furnish Accurate Trade Data).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 flex flex-wrap gap-2">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-blue-50 hover:text-[#1886ff] border border-slate-200 transition-colors"
                >
                  <span>rbi.org.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-blue-50 hover:text-[#1886ff] border border-slate-200 transition-colors"
                >
                  <span>cms.rbi.org.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-blue-50 hover:text-[#1886ff] border border-slate-200 transition-colors"
                >
                  <span>cibil.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-blue-50 hover:text-[#1886ff] border border-slate-200 transition-colors"
                >
                  <span>indiacode.nic.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-blue-50 hover:text-[#1886ff] border border-slate-200 transition-colors"
                >
                  <span>nalsa.gov.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-blue-50 hover:text-[#1886ff] border border-slate-200 transition-colors"
                >
                  <span>cybercrime.gov.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
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
                Specialized in banking compliance, pledge law under the Indian Contract Act, NBFC gold loan resolution, and NPA compromise settlements across Indian banking jurisdictions.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Threatening Gold Auction?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts challenge premature auctions, stop distress sales, waive penal charges, and help retrieve your pledged family jewelry safely.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Stop Gold Auction &amp; Get Legal Help
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
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 176 Compliance:</strong> 100% lawful statutory defense.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated banking advocates.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan Default
                  </p>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Loan Default
                  </p>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                </Link>
              </div>
            </div></aside>
        </div>
      </div>
    </main>
  );
}
