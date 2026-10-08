'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import BanksGrid from '@/components/BanksGrid';

export default function CarLoanSettlementPageClient() {
  const [activeId, setActiveId] = useState<string>('intro-car-loan-settlement');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  const [showFloatingNav, setShowFloatingNav] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [tocSearch, setTocSearch] = useState<string>('');
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Interactive Car Loan Settlement & Deficiency Calculator State
  const [calcPrincipal, setCalcPrincipal] = useState<number>(800000);
  const [calcOverdueMonths, setCalcOverdueMonths] = useState<number>(6);
  const [calcVehicleStatus, setCalcVehicleStatus] = useState<string>('with_borrower');
  const [calcLegalStatus, setCalcLegalStatus] = useState<string>('pre_repossession');

  // Interactive Auto OTS Calculation Logic
  const autoOtsAnalysis = useMemo(() => {
    let waiverPct = 40;
    let strategy = 'Pre-repossession bilateral OTS under RBI Fair Practices Code.';
    let legalShield = 'Section 138 NI Act & Section 25 PSSA defense via counsel representation.';

    if (calcVehicleStatus === 'with_borrower') {
      waiverPct = calcOverdueMonths >= 12 ? 55 : calcOverdueMonths >= 6 ? 45 : 35;
      strategy = 'Retain vehicle OTS; compromise based on current market distress resale value.';
      legalShield = 'Stay against unauthorized street repossession under ICICI v. Prakash Kaur precedent.';
    } else if (calcVehicleStatus === 'repossessed_in_yard') {
      waiverPct = calcOverdueMonths >= 12 ? 65 : calcOverdueMonths >= 6 ? 55 : 45;
      strategy = 'Pre-auction redemption OTS or consensual surrender with full debt extinguishment.';
      legalShield = 'Mandatory 14-day post-repossession valuation challenge and auction notice audit.';
    } else if (calcVehicleStatus === 'auctioned_deficiency') {
      waiverPct = calcOverdueMonths >= 12 ? 80 : calcOverdueMonths >= 6 ? 70 : 60;
      strategy = 'Deficiency balance unsecured compromise; clean waiver of post-auction ledger shortfall.';
      legalShield = 'Commercial dispute settlement; complete closure of Section 138 / Section 25 proceedings.';
    }

    if (calcLegalStatus === 'sec_138_cheque') {
      legalShield = 'Criminal compounding under Section 147 NI Act upon execution of settlement agreement.';
    } else if (calcLegalStatus === 'arbitration') {
      legalShield = 'Section 9 interim relief / Section 16 jurisdiction objection before Arbitral Tribunal.';
    } else if (calcLegalStatus === 'recovery_harassment') {
      legalShield = 'Formal police complaint under Sec 351/308 BNS & RBI Ombudsman complaint against agency.';
    }

    const estimatedSettlement = Math.round(calcPrincipal * (1 - waiverPct / 100));
    const estimatedSavings = calcPrincipal - estimatedSettlement;

    return {
      waiverPct,
      estimatedSettlement,
      estimatedSavings,
      strategy,
      legalShield
    };
  }, [calcPrincipal, calcOverdueMonths, calcVehicleStatus, calcLegalStatus]);

  // Master 10-Module Navigation Structure (84 Sections)
  const navModules = useMemo(() => [
    {
      moduleTitle: "Module 1: Foundations & Core Concepts",
      links: [
        { id: "intro-car-loan-settlement", label: "1. Introduction to Car Loan Settlement" },
        { id: "what-is-car-loan-settlement", label: "2. What Is Car Loan Settlement?" },
        { id: "easy-meaning-of-car-loan-settlement", label: "3. Easy Meaning of Settlement" },
        { id: "how-does-car-loan-settlement-work", label: "4. How Does Settlement Work?" },
        { id: "how-to-settle-car-loan", label: "5. How to Settle a Car Loan?" },
        { id: "car-loan-settlement-process-step-by-step", label: "6. Step-by-Step Settlement Process" },
        { id: "when-should-you-consider-car-loan-settlement", label: "7. When Should You Consider Settlement?" },
        { id: "who-is-eligible-for-car-loan-settlement", label: "8. Who Is Eligible?" },
        { id: "which-car-loans-can-be-settled", label: "9. Which Car Loans Can Be Settled?" },
        { id: "secured-vs-unsecured-loan-settlement", label: "10. Secured vs Unsecured Settlement" },
      ]
    },
    {
      moduleTitle: "Module 2: Calculations, Alternatives & Financial Impact",
      links: [
        { id: "how-much-can-a-car-loan-be-settled-for", label: "11. How Much Can Loan Be Settled For?" },
        { id: "car-loan-settlement-amount-calculation-and-examples", label: "12. Settlement Calculation & Examples" },
        { id: "factors-that-affect-car-loan-settlement-amount", label: "13. Factors Affecting Settlement" },
        { id: "car-loan-settlement-vs-full-repayment", label: "14. Settlement vs Full Repayment" },
        { id: "car-loan-settlement-vs-loan-restructuring", label: "15. Settlement vs Restructuring" },
        { id: "car-loan-settlement-vs-loan-waiver", label: "16. Settlement vs Loan Waiver" },
        { id: "car-loan-settlement-vs-car-loan-foreclosure", label: "17. Settlement vs Foreclosure" },
        { id: "advantages-of-car-loan-settlement", label: "18. Advantages of Settlement" },
        { id: "disadvantages-and-risks-of-car-loan-settlement", label: "19. Disadvantages & Risks" },
      ]
    },
    {
      moduleTitle: "Module 3: CIBIL Score & Credit Bureau Impact",
      links: [
        { id: "impact-of-car-loan-settlement-on-cibil-score", label: "20. Impact on CIBIL Score" },
        { id: "car-loan-settlement-and-credit-bureau-reporting", label: "21. Credit Bureau Reporting" },
        { id: "how-long-does-car-loan-settlement-affect-cibil", label: "22. Duration on CIBIL Record" },
        { id: "how-to-rebuild-cibil-score-after-car-loan-settlement", label: "23. Rebuilding Credit Post-Settlement" },
      ]
    },
    {
      moduleTitle: "Module 4: Vehicle Repossession & Borrower Rights",
      links: [
        { id: "can-bank-seize-repossess-car-for-non-payment", label: "24. Can Bank Seize Your Car?" },
        { id: "rbi-rules-for-car-loan-repossession", label: "25. RBI Rules on Repossession" },
        { id: "supreme-court-rulings-on-vehicle-repossession", label: "26. Supreme Court Landmark Rulings" },
        { id: "borrowers-rights-during-car-repossession", label: "27. Borrower Rights During Repossession" },
        { id: "what-recovery-agents-cannot-do-during-repossession", label: "28. What Agents Cannot Legally Do" },
      ]
    },
    {
      moduleTitle: "Module 5: Repossession Prevention & Valuation",
      links: [
        { id: "how-to-stop-prevent-car-repossession", label: "29. How to Stop Repossession" },
        { id: "what-happens-after-car-is-repossessed", label: "30. What Happens After Repossession?" },
        { id: "how-to-get-repossessed-car-back", label: "31. Getting Repossessed Car Back" },
        { id: "car-auction-process-after-repossession", label: "32. Public Auction Process" },
        { id: "deficiency-balance-after-car-auction", label: "33. Shortfall & Deficiency Balance" },
        { id: "settling-deficiency-balance-after-repossession", label: "34. Settling the Shortfall Balance" },
        { id: "voluntary-surrender-of-car-vs-repossession", label: "35. Voluntary Surrender vs Seizure" },
        { id: "how-to-surrender-car-to-bank", label: "36. How to Surrender Car Legally" },
        { id: "car-loan-ots-calculator", label: "⚡ Auto OTS Calculator" },
        { id: "can-you-settle-car-loan-and-keep-car", label: "37. Settle & Keep the Car" },
        { id: "can-you-settle-car-loan-after-repossession", label: "38. Settle Post-Repossession" },
      ]
    },
    {
      moduleTitle: "Module 6: RTO Hypothecation & Legal Notices",
      links: [
        { id: "car-loan-settlement-and-hypothecation-removal", label: "39. Hypothecation Removal (Form 35)" },
        { id: "documents-required-for-car-loan-settlement", label: "40. Documents Required for Settlement" },
        { id: "financial-hardship-reasons-for-car-loan-settlement", label: "41. Financial Hardship Evidence" },
        { id: "how-to-negotiate-car-loan-settlement-with-bank", label: "42. Negotiating With Lenders" },
        { id: "how-to-draft-car-loan-settlement-proposal-letter", label: "43. Drafting an OTS Proposal" },
        { id: "settlement-after-receiving-legal-notice", label: "44. Settlement After Legal Notice" },
        { id: "car-loan-settlement-during-arbitration", label: "45. Settlement in Arbitration" },
        { id: "car-loan-settlement-during-court-cases", label: "46. Settlement During Court Proceedings" },
      ]
    },
    {
      moduleTitle: "Module 7: Vehicle Segments & Financing Models",
      links: [
        { id: "settlement-for-used-second-hand-car-loans", label: "47. Used & Pre-Owned Car Loans" },
        { id: "settlement-for-commercial-vehicle-loans", label: "48. Commercial Vehicles (Taxis/Trucks)" },
        { id: "settlement-for-electric-vehicle-ev-loans", label: "49. Electric Vehicle (EV) Loans" },
        { id: "settlement-for-luxury-high-end-car-loans", label: "50. Luxury & High-End Auto Loans" },
        { id: "settlement-when-car-is-total-loss-or-accidental", label: "51. Total Loss & Accidental Insurance" },
        { id: "car-loan-settlement-after-theft-of-car", label: "52. Vehicle Theft & Claim Settlement" },
        { id: "settlement-for-joint-car-loans", label: "53. Joint Car Loan Liability" },
        { id: "guarantor-rights-in-car-loan-settlement", label: "54. Guarantor Protection & Rights" },
        { id: "settlement-after-death-of-car-loan-borrower", label: "55. Borrower Demise & Heir Rights" },
        { id: "settlement-for-salaried-individuals", label: "56. Salaried Borrowers & Job Loss" },
      ]
    },
    {
      moduleTitle: "Module 8: Tax, Legal Shields & Harassment Defense",
      links: [
        { id: "settlement-for-self-employed-business-owners", label: "57. Self-Employed & MSME Borrowers" },
        { id: "tax-implications-of-car-loan-settlement", label: "58. Income Tax & Section 41(1) Rules" },
        { id: "can-bank-reject-car-loan-settlement-request", label: "59. Rejection Contingencies" },
        { id: "what-to-do-if-bank-rejects-settlement", label: "60. Steps If Bank Rejects Settlement" },
        { id: "how-to-reopen-rejected-settlement-request", label: "61. Reopening Closed Negotiations" },
        { id: "settlement-and-recovery-agent-harassment", label: "62. Recovery Agent Harassment Defense" },
        { id: "how-to-complain-against-recovery-agents", label: "63. Lodging Police & Ombudsman Complaints" },
        { id: "role-of-banking-ombudsman-in-car-loan-disputes", label: "64. RBI Ombudsman Recourse" },
        { id: "police-complaint-for-illegal-car-repossession", label: "65. Police FIR for Illegal Seizure" },
        { id: "consumer-court-case-for-illegal-repossession", label: "66. Consumer Court Compensation" },
      ]
    },
    {
      moduleTitle: "Module 9: Institutional Bank Settlement Policies",
      links: [
        { id: "car-loan-settlement-with-sbi", label: "67. SBI Car Loan Settlement" },
        { id: "car-loan-settlement-with-hdfc-bank", label: "68. HDFC Bank Auto Loan Settlement" },
        { id: "car-loan-settlement-with-icici-bank", label: "69. ICICI Bank Vehicle Settlement" },
        { id: "car-loan-settlement-with-axis-bank", label: "70. Axis Bank Car Loan Settlement" },
        { id: "car-loan-settlement-with-kotak-mahindra-bank", label: "71. Kotak Mahindra Auto Settlement" },
        { id: "car-loan-settlement-with-bank-of-baroda", label: "72. Bank of Baroda Car Settlement" },
        { id: "car-loan-settlement-with-punjab-national-bank", label: "73. PNB Vehicle Compromise" },
        { id: "car-loan-settlement-with-nbfcs", label: "74. NBFC Auto Settlements (Bajaj/Tata)" },
        { id: "car-loan-settlement-in-lok-adalat", label: "75. National Lok Adalat Settlements" },
        { id: "car-loan-settlement-via-debt-settlement-companies", label: "76. Professional Debt Settlement Firms" },
        { id: "how-to-verify-genuine-car-loan-settlement-letter", label: "77. Verifying Authentic Sanction Letters" },
      ]
    },
    {
      moduleTitle: "Module 10: Master Action Plan & Closure Checklist",
      links: [
        { id: "what-is-no-dues-certificate-car-loan", label: "78. No Dues Certificate & RTO NOC" },
        { id: "how-to-get-noc-and-form-35-after-settlement", label: "79. Obtaining Form 35 & NOC" },
        { id: "timeline-for-car-loan-settlement-process", label: "80. Settlement Lifecycle Timeline" },
        { id: "common-mistakes-to-avoid-in-car-loan-settlement", label: "81. Critical Traps & Pitfalls" },
        { id: "why-choose-credsettle-for-car-loan-settlement", label: "82. Why Choose CredSettle" },
        { id: "complete-car-loan-settlement-checklist", label: "83. Master 7-Step Settlement Checklist" },
        { id: "conclusion-understanding-your-rights", label: "84. Conclusion: Know Your Rights" },
      ]
    }
  ], []);

  const allNavLinks = useMemo(() => navModules.flatMap((m) => m.links), [navModules]);

  const currentChapter = useMemo(() => {
    return allNavLinks.find(link => link.id === activeId) || allNavLinks[0];
  }, [allNavLinks, activeId]);

  // Active section observer
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

    const headings = document.querySelectorAll('section[id].scroll-section');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingNav(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile TOC is open
  useEffect(() => {
    if (isMobileTocOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileTocOpen]);

  const handleLinkClick = (id: string) => {
    setIsMobileTocOpen(false);
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  const filteredLinks = useMemo(() => {
    if (!tocSearch.trim()) return allNavLinks;
    const q = tocSearch.toLowerCase().trim();
    return allNavLinks.filter((l) => l.label.toLowerCase().includes(q));
  }, [allNavLinks, tocSearch]);

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <Navbar />

      {/* Hero Section - Matching /loan-settlement Compact Radial Gradient Style */}
      <section
        className="relative text-white pt-20 pb-6 sm:pt-24 sm:pb-8 px-3 sm:px-6 md:px-8 border-b border-blue-900/40"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1E40AF 0%, #030D22 100%)',
          minHeight: '28vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10 py-1 sm:py-2 w-full">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-[11px] sm:text-xs font-medium mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            RBI Compromise Framework &amp; Auto Loan Legal Defense 2026
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words">
            Car Loan Settlement in India<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">
              The Complete Legal, Repossession &amp; OTS Master Guide
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            Resolve vehicle defaults, stop aggressive repossession agents, settle auction deficiency balances, remove RTO hypothecation, and protect your vehicle under Supreme Court directives.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md active:scale-98 text-center"
            >
              Get Free Auto Debt Assessment
            </Link>
            <a
              href="#car-loan-ots-calculator"
              className="px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm text-white bg-blue-600/40 hover:bg-blue-600/60 border border-blue-400/40 transition-all backdrop-blur-sm active:scale-98 text-center"
            >
              Calculate Auto OTS Haircut ⚡
            </a>
          </div>
          <div className="mt-3.5 sm:mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-blue-200/80">
            <span>✓ Supreme Court Anti-Seizure Shield</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ RTO Form 35 &amp; Clean NDC</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Deficiency Balance Waiver</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ 100% Confidential Legal Advisory</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
          <Breadcrumbs
            align="left"
            className="mb-0"
            items={[
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'Car Loan Settlement', url: '/services/car-loan-settlement' }
            ]}
          />
        </div>
      </div>

      {/* Trust & E-E-A-T Signal Banner */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-3 sm:px-4 border-b border-slate-800 text-[11px] sm:text-xs md:text-sm">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-600 text-white font-semibold px-2 py-0.5 rounded text-[10px] sm:text-xs">SECURED AUTO ADVISORY</span>
            <span className="leading-tight">Reviewed by Senior Banking Law Advocates &amp; Vehicle Finance Specialists</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400 text-[10px] sm:text-xs">
            <span>Last Updated: October 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>Supreme Court ICICI v. Prakash Kaur Ruling &amp; RBI Fair Practices</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN 3-COLUMN EDITORIAL CONTENT LAYOUT (15% - 70% - 15%)                  */}
      {/* ========================================================================= */}
      <div className="w-full max-w-[1600px] xl:max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8">

        {/* Mobile Sticky Chapter Indicator & Dropdown Action Bar */}
        <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs -mx-3 sm:-mx-4 px-3 sm:px-4 py-2 mb-4 sm:mb-6">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => setIsMobileTocOpen(true)}
              className="flex-1 flex items-center justify-between bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-950 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors active:scale-98 min-w-0"
              aria-label="Table of Contents Drawer"
            >
              <span className="truncate pr-1 text-[11px] sm:text-xs">
                <span className="text-blue-600 font-bold mr-1">TOC:</span>
                {currentChapter.label}
              </span>
              <span className="text-blue-600 text-xs flex-shrink-0">Menu ▾</span>
            </button>

            <a
              href="#car-loan-ots-calculator"
              className="flex-shrink-0 bg-slate-900 hover:bg-slate-800 text-white px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center gap-1 shadow-xs"
            >
              <span>⚡</span>
              <span className="hidden sm:inline">Calculator</span>
            </a>

            <Link
              href="/contact"
              className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-colors shadow-xs"
            >
              Get Defense
            </Link>
          </div>

          {/* Swipeable Module Filter Pills on Mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 pb-0.5 text-[10px]">
            <button
              onClick={() => setSelectedModule(null)}
              className={`px-2.5 py-0.5 rounded-full whitespace-nowrap font-medium transition-colors ${
                selectedModule === null
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              All 84
            </button>
            {navModules.map((m, mIdx) => (
              <button
                key={mIdx}
                onClick={() => setSelectedModule(selectedModule === mIdx ? null : mIdx)}
                className={`px-2 py-0.5 rounded-full whitespace-nowrap font-medium transition-colors ${
                  selectedModule === mIdx
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                M${mIdx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Slide-over Mobile Chapter Drawer */}
        {isMobileTocOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
              onClick={() => setIsMobileTocOpen(false)}
            />
            <div
              ref={mobileNavRef}
              className="fixed inset-y-0 right-0 max-w-full flex pl-10 z-10"
            >
              <div className="w-screen max-w-sm bg-white shadow-2xl flex flex-col">
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm">Table of Contents</h3>
                    <p className="text-[10px] text-slate-300">84 Master Sections • Car Loan Settlement</p>
                  </div>
                  <button
                    onClick={() => setIsMobileTocOpen(false)}
                    className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                    aria-label="Close Drawer"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-3 border-b border-gray-100 bg-gray-50">
                  <input
                    type="text"
                    placeholder="Search chapters or topics..."
                    value={tocSearch}
                    onChange={(e) => setTocSearch(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>

                <div className="flex-1 overflow-y-auto p-3 space-y-4">
                  {navModules.map((module, mIdx) => {
                    const filteredInModule = module.links.filter(l =>
                      !tocSearch.trim() || l.label.toLowerCase().includes(tocSearch.toLowerCase().trim())
                    );
                    if (filteredInModule.length === 0) return null;
                    return (
                      <div key={mIdx} className="space-y-1">
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-black px-2">
                          {module.moduleTitle}
                        </p>
                        <div className="space-y-0.5">
                          {filteredInModule.map((link) => (
                            <button
                              key={link.id}
                              onClick={() => {
                                handleLinkClick(link.id);
                                setIsMobileTocOpen(false);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                                activeId === link.id
                                  ? 'bg-blue-600 text-white font-bold'
                                  : 'text-black hover:bg-gray-100'
                              }`}
                            >
                              <span className="truncate">{link.label}</span>
                              {activeId === link.id && <span className="text-[10px]">●</span>}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 bg-gray-50 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block text-center bg-blue-600 text-white text-xs font-bold py-2.5 rounded-xl shadow hover:bg-blue-700"
                  >
                    Consult Vehicle Finance Advocate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3 Column Flex Container: 15% - 70% - 15% */}
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 items-start relative">

          {/* ===================================================================== */}
          {/* LEFT COLUMN: DESKTOP STICKY TABLE OF CONTENTS (15% Width)             */}
          {/* ===================================================================== */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-24 h-[calc(100vh-7rem)] max-h-[calc(100vh-7rem)] flex flex-col space-y-2.5 overflow-hidden z-10">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 flex-1 min-h-0 flex flex-col overflow-hidden max-h-full">
              <div className="flex items-center justify-between border-b pb-2 mb-2 flex-shrink-0">
                <h3 className="font-bold text-black text-xs">Table of Contents</h3>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">84</span>
              </div>

              {/* Module Filter Pills */}
              <div className="flex flex-wrap gap-1 mb-2 pb-1.5 border-b border-gray-100 flex-shrink-0">
                <button
                  onClick={() => setSelectedModule(null)}
                  className={`text-[9px] px-1.5 py-0.5 rounded font-medium transition-all ${selectedModule === null ? 'bg-blue-600 text-white font-bold' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                >
                  All
                </button>
                {navModules.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedModule(selectedModule === idx ? null : idx)}
                    className={`text-[9px] px-1.5 py-0.5 rounded font-medium transition-all ${selectedModule === idx ? 'bg-blue-600 text-white font-bold' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                  >
                    M${idx + 1}
                  </button>
                ))}
              </div>

              {/* Search Bar in Left Column */}
              <div className="mb-2 flex-shrink-0">
                <input
                  type="text"
                  placeholder="Filter 84 topics..."
                  value={tocSearch}
                  onChange={(e) => setTocSearch(e.target.value)}
                  className="w-full text-[11px] px-2 py-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50 text-black placeholder:text-gray-400"
                />
              </div>

              {/* Scrollable Links Container */}
              <div className="space-y-2.5 flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar max-h-full">
                {navModules.map((module, mIdx) => {
                  if (selectedModule !== null && selectedModule !== mIdx) return null;
                  return (
                    <div key={mIdx} className="space-y-0.5">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-black px-1 py-0.5">
                        {module.moduleTitle.replace('Module ', 'M')}
                      </p>
                      <nav className="space-y-0.5">
                        {module.links.map((link) => {
                          const isActive = activeId === link.id;
                          return (
                            <a
                              key={link.id}
                              href={`#${link.id}`}
                              className={`block text-[11px] transition-all duration-150 px-2 py-1 rounded-md leading-tight ${
                                isActive
                                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                                  : 'text-black hover:text-blue-700 hover:bg-blue-50'
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(link.id);
                              }}
                            >
                              {link.label}
                            </a>
                          );
                        })}
                      </nav>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Legal Help Banner in Sidebar */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-2.5 sm:p-3 rounded-xl text-white shadow-sm text-center flex-shrink-0">
              <div className="flex items-center justify-center gap-1.5 mb-1 text-blue-300 text-xs">
                <span>🚗</span>
                <h4 className="font-bold text-xs text-white">Car Seizure Threat?</h4>
              </div>
              <p className="text-[10px] text-blue-200 mb-2 leading-snug">
                Immediate legal injunction against unauthorized recovery agents &amp; illegal street repossession.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-blue-500 hover:bg-blue-400 text-white font-bold text-[11px] py-1.5 px-2 rounded-lg transition-colors shadow"
              >
                Protect Vehicle
              </Link>
            </div>
          </aside>

          {/* ===================================================================== */}
          {/* MIDDLE COLUMN: MASTER 84-SECTION EDITORIAL CONTENT (70% Width)        */}
          {/* ===================================================================== */}
          <div className="lg:w-[70%] flex-1 min-w-0">
            <article className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-sm border border-gray-200/90 space-y-8 sm:space-y-12 overflow-hidden text-black">


              {/* =================================================================== */}
              {/* MODULE 1: FOUNDATIONS, MEANING & CORE CONCEPTS (1–10)               */}
              {/* =================================================================== */}

              {/* Section 1 */}
              <section id="intro-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 1
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  1. Introduction to Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Auto loans and vehicle financing facilities constitute one of the fastest-growing retail credit segments across Indian public banks, private commercial lenders, and Non-Banking Financial Companies (NBFCs). However, sudden life emergencies—such as unanticipated corporate downsizing, severe business losses, debilitating medical treatments, or inflationary family budget crises—can severely disrupt a borrower&apos;s financial stability, making ongoing Equated Monthly Installment (EMI) servicing unmanageable.
                </p>
                <p>
                  Unlike unsecured personal loans or credit cards, a car loan represents a secured credit agreement where the financed automobile is formally hypothecated to the lending institution under Section 51 of the Motor Vehicles Act, 1988. When defaults occur, lenders quickly deploy aggressive third-party collection agencies that threaten street interception, vehicle towing, and forced auction, plunging honest borrowers into acute psychological panic.
                </p>
                <p>
                  Car loan settlement offers a structured, legally sanctioned exit mechanism. Under Reserve Bank of India (RBI) compromise guidelines and judicial rulings from the Supreme Court of India, borrowers experiencing genuine financial hardship can negotiate an amicable One-Time Settlement (OTS). This allows them to either resolve the loan at a significant discount while retaining the vehicle, or surrender the car cleanly and settle the residual deficiency balance with full legal protection.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl text-xs text-blue-950 space-y-1">
                  <p className="font-bold text-blue-900">Key Legal Reality:</p>
                  <p className="font-medium text-black">
                    A vehicle loan default is strictly a civil breach of contract. Recovery agents and bank officials have zero legal authority to snatch vehicles by force on public roads, use muscular intimidation, or summon the police. Every borrower is entitled to constitutional protection and due judicial process under Article 21.
                  </p>
                </div>
                </div>
              </section>

              {/* Interactive Assessment Funnel - Blended inside Middle Container Above Chapter 2 */}
              <div className="not-prose my-6 sm:my-8 p-3 sm:p-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-slate-50 rounded-2xl border border-blue-100 shadow-xs">
                <InteractiveLeadFunnel className="!bg-transparent !p-0 !py-0 !px-0" />
              </div>

              {/* Section 2 */}
              <section id="what-is-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 2
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  2. What Is Car Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Car loan settlement—formally recognized in the banking sector as a One-Time Settlement (OTS) or Compromise Closure—is a legally binding bilateral agreement between a vehicle loan borrower and the lending institution. Under this contractual resolution, the creditor agrees to accept a discounted lump-sum payment (or structured installments) that is substantially lower than the total ledger claim as full, final, and irreversible discharge of the debt obligation.
                </p>
                <p>
                  In a vehicle loan compromise, the bank waives 100% of accumulated penal interest, cancels exorbitant late payment charges, absorbs a negotiated haircut on the remaining core principal balance, terminates all ongoing litigation, and issues an official No Dues Certificate (NDC). Most critically, the settlement mandates the issuance of RTO Form 35 to cancel the hypothecation endorsement on the Registration Certificate (RC), transferring unencumbered legal ownership to the borrower.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Retain Vehicle Compromise
                    </h4>
                    <p className="text-black font-normal">
                      The borrower pays a negotiated discounted lump-sum equivalent to the vehicle&apos;s distressed liquidation value, clears the loan, retains the car, and removes the bank hypothecation.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Post-Surrender Deficiency Settlement
                    </h4>
                    <p className="text-black font-normal">
                      If the car has already been surrendered or repossessed and auctioned below the loan balance, the remaining shortfall (deficiency debt) is settled with a 60%–80% waiver.
                    </p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="easy-meaning-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 3
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  3. Easy Meaning of Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In plain everyday terms, car loan settlement means legally closing your auto loan by paying significantly less than what the bank claims you owe. For example, suppose you purchased a car with a ₹10 Lakhs loan. After servicing EMIs for two years, unexpected job loss causes you to default. The bank adds compounded interest, penal charges, and legal fees, demanding ₹7.5 Lakhs to close the account.
                </p>
                <p>
                  However, the actual current market value of your used car has depreciated to ₹4.5 Lakhs. If the bank repossesses and auctions the car, towing fees, yard storage costs, and auction discounts mean the bank might only net ₹3.2 Lakhs after months of delay. Through structured settlement representation, the bank agrees to accept ₹3.5 Lakhs to ₹4 Lakhs in cash as full settlement. You save ₹3.5+ Lakhs, keep the car (or close the file permanently), and receive an official No Dues Certificate.
                </p>
                <p>
                  The bank agrees to this compromise because immediate cash recovery eliminates repossession friction, auction risks, yard maintenance expenses, and lengthy court proceedings under Section 138 NI Act or arbitration.
                </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="how-does-car-loan-settlement-work" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 4
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  4. How Does Car Loan Settlement Work?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The car loan settlement mechanism operates through four interconnected administrative and legal stages within the creditor&apos;s recovery division:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-black font-normal">
                  <li><strong>NPA Classification &amp; Provisioning:</strong> Once vehicle EMIs remain unpaid for 90 days, the loan is classified as a Sub-Standard Non-Performing Asset (NPA) under RBI prudential norms, forcing the bank to lock away capital reserves against potential loan loss.</li>
                  <li><strong>LTV Deficit &amp; Valuation Audit:</strong> Advocates assess the vehicle&apos;s Loan-to-Value (LTV) deficit by comparing the outstanding unamortized principal against the vehicle&apos;s depreciated IDV (Insured Declared Value) and wholesale auction liquidation value.</li>
                  <li><strong>Hardship Docket &amp; Legal Shield:</strong> The borrower submits verifiable economic distress proof (pink slips, medical records, or business closure filings), while advocates serve legal notices barring third-party recovery harassment and street seizure.</li>
                  <li><strong>Compromise Sanction &amp; Document Release:</strong> The bank&apos;s Stressed Asset Committee sanctions the OTS, issues a formal Settlement Letter, and upon payment remittance, releases the No Dues Certificate and RTO Form 35.</li>
                </ol>
                </div>
              </section>

              {/* Section 5 */}
              <section id="how-to-settle-car-loan" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 5
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  5. How to Settle a Car Loan?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Successfully settling an auto loan requires assertive legal positioning combined with realistic financial modeling. Unassisted borrowers who walk into auto loan branches are routinely subjected to aggressive intimidation, coerced into signing vehicle surrender letters under duress, or tricked into paying token amounts that reset the legal limitation period without granting any debt relief.
                </p>
                <p>
                  The proper method begins with shielding yourself from unlawful street repossession by securing legal representation. Next, obtain an official Statement of Account and audit all accrued penal interest and bounce charges. Formulate a data-backed OTS proposal demonstrating that the proposed settlement sum represents greater financial recovery for the bank than forced auction liquidation, and insist that all terms be delivered on official bank letterhead before releasing any funds.
                </p>
                <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 text-xs space-y-2 text-black">
                  <h4 className="font-bold text-black text-sm">Vital Rules for Vehicle Borrowers:</h4>
                  <ul className="list-disc pl-4 space-y-1 font-normal">
                    <li>Never hand over your car keys or sign blank inventory sheets to recovery agents without legal consultation.</li>
                    <li>Always insist on an official written Settlement Sanction Letter issued by an authorized bank manager.</li>
                    <li>Ensure the settlement explicitly includes the issuance of RTO Form 35 and cancellation of hypothecation.</li>
                  </ul>
                </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="car-loan-settlement-process-step-by-step" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 6
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  6. Car Loan Settlement Process – Step by Step
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A professional car loan settlement follows a disciplined 6-phase legal roadmap spanning 3 to 6 weeks, guaranteeing permanent debt closure and complete title liberation:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 1: Loan &amp; Collateral Valuation Audit (Days 1–5)</span>
                    <p className="text-black font-normal">Analysis of total ledger claims, unamortized principal balance, vehicle depreciation, current market value, and penal charges.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 2: Legal Representation &amp; Anti-Seizure Shield (Days 6–10)</span>
                    <p className="text-black font-normal">Advocates serve formal notices under the Advocates Act, 1961, directing all communication to legal counsel and warning against unlawful vehicle repossession.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 3: Hardship Docket &amp; OTS Filing (Days 11–18)</span>
                    <p className="text-black font-normal">Submission of a formal settlement petition supported by income loss proofs, medical summaries, and comparative distress valuation reports.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 4: High-Power Committee Negotiation (Days 19–30)</span>
                    <p className="text-black font-normal">Direct negotiation with the bank&apos;s Zonal Stressed Assets Division to waive 100% penal interest and secure 30% to 60% principal haircuts.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 5: Sanction Letter Vetting &amp; Direct Remittance (Days 31–38)</span>
                    <p className="text-black font-normal">Vetting the settlement sanction letter for hypothecation release clauses, followed by direct RTGS payment to the loan account.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 6: NDC, Form 35 &amp; RTO Hypothecation Removal (Days 39–50)</span>
                    <p className="text-black font-normal">Receipt of the No Dues Certificate, two signed copies of RTO Form 35, and formal cancellation of the bank hypothecation on the Parivahan portal.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="when-should-you-consider-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 7
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  7. When Should You Consider Car Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Car loan settlement is indicated when debt servicing costs permanently outstrip your monthly household surplus, forcing you to deplete essential emergency funds or take high-interest personal loans to pay car EMIs. Continuing to service a depreciating asset when your primary income has suffered a structural collapse is economically counterproductive.
                </p>
                <p>
                  Critical indicators for settlement include: (1) Default exceeding 60 to 90 days with aggressive calls from recovery agents, (2) Receipt of loan recall notices or Section 138 NI Act cheque dishonor notices, (3) Threats of imminent street repossession or vehicle tracking, (4) Inability to clear overdue arrears in a single lump-sum, and (5) Situations where the vehicle has already been repossessed and the bank is threatening to auction it at a fraction of its true value.
                </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="who-is-eligible-for-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 8
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  8. Who Is Eligible for Car Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under the RBI Framework for Compromise Settlements and Technical Write-offs (June 8, 2023), all regulated commercial banks, cooperative banks, and NBFCs are mandated to offer compromise settlement mechanisms to stressed retail borrowers who demonstrate non-wilful inability to repay.
                </p>
                <p>
                  Eligible borrowers include salaried professionals who have suffered layoffs or salary cuts, self-employed business owners experiencing revenue contraction, commercial taxi operators facing fleet losses, and individuals afflicted by severe medical crises. The core eligibility criterion is demonstrating that the default is genuine and bona fide rather than an intentional evasion of contractual liabilities.
                </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="which-car-loans-can-be-settled" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 9
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  9. Which Car Loans Can Be Settled?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Virtually all categories of retail and commercial automobile financing facilities extended by Indian financial institutions can be legally resolved through an OTS:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">New Car Retail Loans</span>
                    <p className="text-black font-normal">Standard retail auto loans for personal passenger vehicles from public and private banks.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Used / Pre-Owned Car Loans</span>
                    <p className="text-black font-normal">High-interest financing lines extended by NBFCs and fintech lenders for second-hand vehicles.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Commercial Vehicle &amp; Taxi Loans</span>
                    <p className="text-black font-normal">Financing for commercial cabs, fleet sedans, tourist buses, and light commercial transport vehicles.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Loan Against Car (Top-Up)</span>
                    <p className="text-black font-normal">Liquidity top-up facilities where a paid-off vehicle was re-hypothecated as loan security.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Luxury Vehicle Leases</span>
                    <p className="text-black font-normal">High-value corporate vehicle financing and luxury sedan leases with high balloon payments.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Post-Auction Deficiency Shortfalls</span>
                    <p className="text-black font-normal">Unsecured residual claims remaining after the bank has already seized and auctioned the car.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 10 */}
              <section id="secured-vs-unsecured-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 10
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  10. Secured vs Unsecured Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Understanding the structural contrast between secured car loans and unsecured personal credit is essential for formulating an effective legal settlement strategy:
                </p>
                <div className="overflow-x-auto text-xs">
                  <table className="w-full border-collapse border border-gray-200 rounded-lg text-left">
                    <thead>
                      <tr className="bg-slate-100 text-black font-bold">
                        <th className="p-2.5 border border-gray-200">Parameter</th>
                        <th className="p-2.5 border border-gray-200">Secured Car Loan</th>
                        <th className="p-2.5 border border-gray-200">Unsecured Personal Loan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-black font-normal">
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Collateral Hypothecation</td>
                        <td className="p-2.5 border border-gray-200">Vehicle registered with RTO under Section 51 MV Act</td>
                        <td className="p-2.5 border border-gray-200">Zero physical asset or collateral security</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Repossession Risk</td>
                        <td className="p-2.5 border border-gray-200">Lender can repossess vehicle following due process</td>
                        <td className="p-2.5 border border-gray-200">Zero repossession right; purely civil recovery</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Typical Waiver Range</td>
                        <td className="p-2.5 border border-gray-200">30% to 55% (pegged to car depreciated value)</td>
                        <td className="p-2.5 border border-gray-200">45% to 70% of total ledger demand</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Critical Closure Document</td>
                        <td className="p-2.5 border border-gray-200">No Dues Certificate + RTO Form 35 for RC cleanup</td>
                        <td className="p-2.5 border border-gray-200">No Dues Certificate only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 2: CALCULATIONS, WAIVERS & FINANCIAL COMPARISONS (11–19)     */}
              {/* =================================================================== */}

              {/* Section 11 */}
              <section id="how-much-can-a-car-loan-be-settled-for" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 11
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  11. How Much Can a Car Loan Be Settled For?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In automotive retail banking practice, the achievable settlement percentage on a car loan is determined by the vehicle&apos;s <strong>depreciated liquidation value</strong> relative to the remaining unamortized principal. Because cars are rapidly depreciating assets that lose 15% to 20% of their market value annually, a vehicle that secured an ₹8 Lakhs loan three years ago might only fetch ₹3.5 Lakhs at a public auction today.
                </p>
                <p>
                  When a borrower retains possession of the vehicle, compromise settlements typically range between <strong>40% and 60% of the total ledger balance</strong>, with 100% of penal interest and late charges completely waived. If the vehicle has already been repossessed and auctioned, the residual shortfall (deficiency debt) is legally treated as unsecured credit, where negotiated haircuts frequently reach <strong>60% to 80%</strong> of the remaining claim.
                </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="car-loan-settlement-amount-calculation-and-examples" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 12
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  12. Car Loan Settlement Amount – Calculation and Examples
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  To illustrate the exact financial mechanics of a car loan settlement, examine this real-world case of an auto loan default resolved by CredSettle:
                </p>
                <div className="overflow-x-auto text-xs my-3">
                  <table className="w-full border-collapse border border-gray-200 rounded-lg text-left">
                    <thead>
                      <tr className="bg-slate-100 text-black font-bold">
                        <th className="p-2.5 border border-gray-200">Component</th>
                        <th className="p-2.5 border border-gray-200">Bank Ledger Demand</th>
                        <th className="p-2.5 border border-gray-200">Compromise Treatment</th>
                        <th className="p-2.5 border border-gray-200">Settlement Amount Payable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-black font-normal">
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Principal Balance Outstanding</td>
                        <td className="p-2.5 border border-gray-200">₹ 5,80,000</td>
                        <td className="p-2.5 border border-gray-200">45% Principal Haircut</td>
                        <td className="p-2.5 border border-gray-200">₹ 3,19,000</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Accrued Unpaid Interest</td>
                        <td className="p-2.5 border border-gray-200">₹ 1,45,000</td>
                        <td className="p-2.5 border border-gray-200">80% Interest Waiver</td>
                        <td className="p-2.5 border border-gray-200">₹ 29,000</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Penal Interest &amp; Overdue Surcharges</td>
                        <td className="p-2.5 border border-gray-200">₹ 85,000</td>
                        <td className="p-2.5 border border-gray-200">100% Full Waiver</td>
                        <td className="p-2.5 border border-gray-200">₹ 0</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Cheque / NACH Bounce Charges</td>
                        <td className="p-2.5 border border-gray-200">₹ 28,000</td>
                        <td className="p-2.5 border border-gray-200">100% Full Waiver</td>
                        <td className="p-2.5 border border-gray-200">₹ 0</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Legal &amp; Notice Fees</td>
                        <td className="p-2.5 border border-gray-200">₹ 18,000</td>
                        <td className="p-2.5 border border-gray-200">100% Full Waiver</td>
                        <td className="p-2.5 border border-gray-200">₹ 0</td>
                      </tr>
                      <tr className="bg-emerald-50/60 font-bold text-black">
                        <td className="p-2.5 border border-gray-200">TOTAL CLAIM / OTS SUM</td>
                        <td className="p-2.5 border border-gray-200 text-red-600 line-through">₹ 8,56,000</td>
                        <td className="p-2.5 border border-gray-200 text-emerald-700">Total Waiver: ₹ 5,08,000 (59.3%)</td>
                        <td className="p-2.5 border border-gray-200 text-emerald-800">₹ 3,48,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  In this representative scenario, a claimed debt of ₹8.56 Lakhs was settled in full for ₹3.48 Lakhs in a single cash tranche. The borrower saved ₹5.08 Lakhs (59.3% total reduction), retained possession of the car, and received the official No Dues Certificate along with RTO Form 35 to delete the bank lien from the vehicle RC.
                </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="factors-that-affect-car-loan-settlement-amount" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 13
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  13. Factors That Affect Car Loan Settlement Amount
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The compromise sanction figure approved by a bank&apos;s auto loan credit committee depends on five decisive variables:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">1. Physical Vehicle Condition &amp; Mileage</span>
                    <p className="text-black font-normal">High odometer mileage, accidental history, or body damage depress auction realization values, motivating the bank to accept a lower settlement offer.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">2. Delinquency Vintage &amp; Provisioning Hits</span>
                    <p className="text-black font-normal">Accounts overdue beyond 180 to 365 days (Doubtful NPA stage) have absorbed heavy capital provisioning on the bank&apos;s books, unlocking maximum waiver authority.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">3. Possession Status (Borrower vs Yard)</span>
                    <p className="text-black font-normal">If the car is with the borrower, the bank avoids seizure costs. If the car is in a yard accumulating daily parking fees, the bank is desperate to liquidate before it rusts.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">4. Verifiable Financial Hardship Proof</span>
                    <p className="text-black font-normal">Documented layoffs, medical treatments, or income collapse convince the committee that default was non-wilful, qualifying the borrower for deep relief.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 14 */}
              <section id="car-loan-settlement-vs-full-repayment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 14
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  14. Car Loan Settlement vs Full Repayment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Full repayment is unquestionably the ideal pathway if a borrower has recovered their financial footing and possesses the liquidity to clear all arrears. Full repayment preserves a pristine CIBIL score, marks the loan as &quot;Closed&quot; on credit reports, and maintains unrestricted access to future premium banking credit lines.
                </p>
                <p>
                  However, when severe economic distress makes full repayment mathematically unfeasible, attempting to service an unaffordable car loan by taking out predatory personal loans or skipping home rent is disastrous. Settlement provides an honorable, legally sanctioned resolution that halts compounding debt, prevents vehicle auction at throwaway prices, and allows the borrower to salvage family liquidity.
                </p>
                </div>
              </section>

              {/* Section 15 */}
              <section id="car-loan-settlement-vs-loan-restructuring" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 15
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  15. Car Loan Settlement vs Loan Restructuring
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Loan restructuring modifies the repayment terms of an active car loan without forgiving any portion of the principal. Restructuring solutions typically include extending the loan tenure from 4 years to 7 years to lower monthly EMIs, or granting a short 3-month moratorium during a temporary career transition.
                </p>
                <p>
                  Restructuring is sensible only if you have predictable, guaranteed future cash flows that can comfortably sustain smaller installments. Because cars are rapidly depreciating assets, extending auto loan tenure often leads to &quot;negative equity&quot;—where you owe more on the loan than the car is worth on the used market. Settlement, by contrast, permanently eliminates the debt through an immediate discounted buyout.
                </p>
                </div>
              </section>

              {/* Section 16 */}
              <section id="car-loan-settlement-vs-loan-waiver" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 16
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  16. Car Loan Settlement vs Loan Waiver
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  It is crucial not to confuse a commercial car loan settlement with a statutory loan waiver. A <strong>loan waiver</strong> is a sovereign or policy-driven cancellation of debt (such as state-sponsored agricultural farm loan waivers), where the government pays banks on behalf of borrowers from public exchequers. Retail automobile loans are never eligible for sovereign government waivers.
                </p>
                <p>
                  A <strong>settlement</strong>, on the other hand, is a bilateral commercial contract between you and your lending bank. The bank absorbs an accounting write-off based on commercial prudence, requiring you to pay an agreed discounted cash consideration in exchange for issuing an official release deed and RTO Form 35.
                </p>
                </div>
              </section>

              {/* Section 17 */}
              <section id="car-loan-settlement-vs-car-loan-foreclosure" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 17
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  17. Car Loan Settlement vs Car Loan Foreclosure
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Car loan foreclosure (pre-closure) occurs when a borrower pays off the <strong>100% full outstanding principal balance</strong> ahead of the contractual tenure, plus applicable foreclosure charges and GST. Foreclosure reflects pristine credit behavior and results in a &quot;Closed - Pre-Closed&quot; status on your CIBIL report, boosting your credit score.
                </p>
                <p>
                  Settlement occurs only when default has already set in, and the borrower cannot pay the full principal balance. The bank agrees to accept a significantly reduced compromise amount, absorbs a financial loss, and reports the account as &quot;Settled&quot; to credit bureaus. While foreclosure is a planned prepayment of solvent debt, settlement is an emergency rescue mechanism for distressed debt.
                </p>
                </div>
              </section>

              {/* Section 18 */}
              <section id="advantages-of-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 18
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  18. Advantages of Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Executing a legally binding car loan settlement delivers immediate financial and legal benefits to distressed vehicle owners:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-black font-normal">
                  <li><strong>Substantial Financial Relief:</strong> Forgives 40% to 60% of total ledger debt and eliminates 100% of penal interest and late fees.</li>
                  <li><strong>Vehicle Protection:</strong> Negotiate to keep your automobile and remove the hypothecation, preventing distress street seizure.</li>
                  <li><strong>Immediate Cessation of Harassment:</strong> Service of legal notices halts abusive collection phone calls and home/workplace visits.</li>
                  <li><strong>Court &amp; Police Immunity:</strong> Quashes ongoing Section 138 NI Act cheque bounce complaints, arbitration claims, and recovery suits.</li>
                  <li><strong>Official RTO Form 35:</strong> Mandates the delivery of signed Form 35 documents to delete the bank endorsement from the vehicle RC.</li>
                </ul>
                </div>
              </section>

              {/* Section 19 */}
              <section id="disadvantages-and-risks-of-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 19
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  19. Disadvantages and Risks of Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  While settlement resolves overwhelming debt, transparent legal counsel requires evaluating its inherent consequences. The primary disadvantage is the credit bureau remark: the bank will report the trade line as &quot;Settled&quot; or &quot;Post-Write-Off Settled,&quot; triggering a credit score drop of 60 to 100 points.
                </p>
                <p>
                  Furthermore, under RBI compromise regulations, regulated lenders observe a mandatory 12-month cooling-off window before extending fresh credit facilities. Additionally, if you fail to remit the sanctioned settlement payment strictly within the agreed timeline, the bank can revoke the OTS sanction, forfeit deposited token sums, and revive the entire original ledger balance.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 3: CIBIL SCORE, CREDIT REPORTING & REBUILDING (20–23)       */}
              {/* =================================================================== */}

              {/* Section 20 */}
              <section id="impact-of-car-loan-settlement-on-cibil-score" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 20
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  20. Impact of Car Loan Settlement on CIBIL Score
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When you settle a car loan for less than the full contractually owed amount, the lending institution updates your credit record across TransUnion CIBIL, Equifax, Experian, and CRIF High Mark by marking the trade line as <strong>&quot;Settled&quot;</strong> rather than &quot;Closed.&quot; This status notation indicates that the lender absorbed a financial loss or haircut to close the account, typically inducing an immediate score dip of 60 to 110 points.
                </p>
                <p>
                  However, maintaining an active, delinquent car loan is far more damaging. An unsettled auto loan generates continuous 90+, 180+, and 360+ Days Past Due (DPD) entries each month, compounding overdue interest and signaling ongoing default to all financial institutions. Settlement freezes the damage, resets the current balance and overdue balance to strictly ₹0, and establishes a stable foundation from which your credit rating can steadily recover.
                </p>
                </div>
              </section>

              {/* Section 21 */}
              <section id="car-loan-settlement-and-credit-bureau-reporting" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 21
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  21. Car Loan Settlement and Credit Bureau Reporting
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under the Credit Information Companies (Regulation) Act (CICRA), 2005 and RBI Master Directions, all banks and NBFCs are legally mandated to upload updated credit files on a monthly cycle. Following the clearance of your car loan settlement payment, the bank must reflect the following exact parameter changes on your bureau file:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black font-normal">
                  <li><strong>Account Status:</strong> Updated from &quot;Default / Repossessed / Suit Filed&quot; to &quot;Settled&quot; or &quot;Post-Write-Off Settled.&quot;</li>
                  <li><strong>Current Balance:</strong> Must strictly display ₹0.</li>
                  <li><strong>Amount Overdue:</strong> Must strictly display ₹0.</li>
                  <li><strong>Asset Classification:</strong> Closed under compromise; no ongoing monthly DPD delinquency markers.</li>
                </ul>
                </div>
              </section>

              {/* Section 22 */}
              <section id="how-long-does-car-loan-settlement-affect-cibil" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 22
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  22. How Long Does Car Loan Settlement Affect CIBIL?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In Indian credit bureau databases, settled loan records remain visible in your historical credit report for up to 7 years. However, credit scoring algorithms heavily prioritize your most recent 24 to 36 months of repayment behavior over older historical resolutions.
                </p>
                <p>
                  During Months 1 to 12 post-settlement, borrowing from major banks will be restricted due to the mandatory RBI cooling-off period. Between Months 13 and 24, as you demonstrate flawless repayment on newly opened credit facilities, your score begins a steady upward trajectory. By Months 25 to 36, borrowers who follow structured credit rebuilding protocols frequently achieve credit scores of 750+, qualifying for competitive retail personal and home loans.
                </p>
                </div>
              </section>

              {/* Section 23 */}
              <section id="how-to-rebuild-cibil-score-after-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 23
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  23. How to Rebuild CIBIL Score After Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Rebuilding your credit score after an auto loan settlement requires a disciplined 4-step financial restoration roadmap:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 1: Open a Fixed Deposit (FD) Backed Credit Card</span>
                    <p className="text-black font-normal">Apply for a secured credit card backed by a small fixed deposit (₹25,000 to ₹50,000). Use 20% to 30% of the limit monthly and pay the bill in full 5 days before the due date.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 2: Maintain Flawless Banking Discipline</span>
                    <p className="text-black font-normal">Ensure zero cheque bounces, zero inward NACH auto-debit return charges, and healthy average monthly balances in your savings accounts for at least 12 consecutive months.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 3: Keep Credit Utilization Below 30%</span>
                    <p className="text-black font-normal">Avoid maxing out credit limits on any remaining credit cards, which signals credit hunger to automated bureau algorithms.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 4: Conduct Quarterly Bureau Audits</span>
                    <p className="text-black font-normal">Download your CIBIL report every 3 months to confirm that the settled auto loan displays ₹0 balance and that no residual late fees continue to be erroneously reported.</p>
                  </div>
                </div>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 4: RBI GUIDELINES, DEFAULT & LEGAL REALITIES (24–28)         */}
              {/* =================================================================== */}

              {/* Section 24 */}
              <section id="rbi-guidelines-for-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 24
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  24. RBI Guidelines for Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The Reserve Bank of India has established a clear, binding regulatory architecture governing debt compromises via circular DOR.STR.REC.20/21.04.048/2023-24 titled <em>Framework for Compromise Settlements and Technical Write-offs</em> (June 8, 2023). Under this landmark directive, all scheduled commercial banks, urban cooperative banks, and NBFCs are legally required to put in place board-approved compromise settlement policies.
                </p>
                <p>
                  The RBI guidelines explicitly direct lenders to: (1) Provide structured settlement mechanisms for retail borrowers facing genuine economic hardship, (2) Ensure transparent delegation of financial powers so settlements are sanctioned objectively by designated committees rather than arbitrary branch staff, (3) Institute a mandatory 12-month cooling-off period before extending fresh credit, and (4) Mandate that all original security documents and hypothecation deeds be returned within 30 days of full settlement payment.
                </p>
                </div>
              </section>

              {/* Section 25 */}
              <section id="rbi-guidelines-for-loan-recovery-agents" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 25
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  25. RBI Guidelines for Loan Recovery Agents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Through its Master Circular on Recovery Agents and operational circular RBI/2022-23/108 (August 12, 2022), the Reserve Bank of India has established strict behavioral boundaries for recovery personnel pursuing vehicle loan defaults:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black font-normal">
                  <li><strong>Permitted Contact Hours:</strong> Agents are strictly prohibited from calling or visiting borrowers before <strong>08:00 AM or after 07:00 PM</strong>.</li>
                  <li><strong>Prohibition on Street Interception:</strong> Recovery agents cannot intercept vehicles in traffic, block driveways, or snatch vehicle keys on public roads.</li>
                  <li><strong>Respect for Privacy:</strong> Agents cannot contact neighbors, office colleagues, employers, or third-party family members to disclose the auto loan default.</li>
                  <li><strong>Mandatory Identification:</strong> Field agents must produce an official identity card issued by the agency and a certified Letter of Authority issued by the bank naming your specific loan account.</li>
                </ul>
                </div>
              </section>

              {/* Section 26 */}
              <section id="car-loan-default-what-happens-if-you-stop-paying" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 26
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  26. Car Loan Default – What Happens If You Stop Paying?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When you stop paying your car loan installments, the lending institution initiates a standardized, multi-phase recovery and legal escalation workflow:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Days 1–30 (SMA-0):</span> Automated payment reminder SMS alerts, gentle customer care tele-calls, and bounce charges levied for unpaid ECS/NACH mandates.
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Days 31–60 (SMA-1):</span> Escalation to internal collection teams, persistent daily phone calls, and initial field visits to your registered residential address.
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Days 61–90 (SMA-2):</span> Assignment to outsourced third-party recovery agencies, threats of vehicle repossession, and issuance of formal Loan Recall Notices.
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Day 91+ (NPA Stage):</span> Account classified as Non-Performing Asset. Penal compounding begins, pre-repossession notices are issued, and legal suits under Section 138 NI Act or arbitration are filed.
                  </div>
                </div>
                </div>
              </section>

              {/* Section 27 */}
              <section id="legal-consequences-of-car-loan-default" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 27
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  27. Legal Consequences of Car Loan Default
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Defaulting on a vehicle loan triggers specific civil and quasi-criminal legal consequences across several Indian statutes. The bank can invoke the hypothecation clause under the loan agreement to initiate vehicle repossession proceedings following mandatory statutory notice periods.
                </p>
                <p>
                  If security cheques or electronic NACH mandates bounce, lenders routinely initiate criminal complaints under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007. Additionally, lenders may invoke the arbitration clause in the loan contract under the Arbitration and Conciliation Act, 1996, seeking an interim order for repossession under Section 9 or a monetary award under Section 31.
                </p>
                </div>
              </section>

              {/* Section 28 */}
              <section id="can-a-bank-take-legal-action-for-car-loan-default" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 28
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  28. Can a Bank Take Legal Action for Car Loan Default?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Yes, commercial banks and NBFCs possess legal authority to initiate recovery proceedings through designated civil courts, arbitral tribunals, and criminal magistrate courts (for bounced cheques). However, lenders must strictly comply with mandatory statutory notice periods, due process safeguards, and natural justice principles.
                </p>
                <p>
                  Crucially, <strong>loan default is not a crime under the Bharatiya Nyaya Sanhita (BNS)</strong>. Police officers have no statutory jurisdiction over bank defaults and cannot summon, detain, or arrest a borrower for an auto loan default. Lenders must rely entirely on civil recovery channels, where an assertive, advocate-led legal defense can stall litigation and create massive leverage to force an affordable settlement.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 5: REPOSSESSION RULES, SEIZURE DEFENSE & RIGHTS (29–38)      */}
              {/* =================================================================== */}

              {/* Section 29 */}
              <section id="can-the-bank-repossess-your-car" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 29
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  29. Can the Bank Repossess Your Car?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Yes, lending institutions hold a contractual right under the hypothecation agreement to repossess a financed vehicle when a borrower commits a continuous default on loan installments. Because the vehicle is legally hypothecated to the bank under Section 51 of the Motor Vehicles Act, 1988, the lender maintains an equitable charge over the asset until the debt is fully cleared.
                </p>
                <p>
                  However, <strong>the right to repossess is strictly conditioned upon due process of law</strong>. A bank cannot arbitrarily dispatch recovery musclemen to seize a car from your driveway or intercept you on a highway. The Supreme Court of India has repeatedly ruled that repossession must adhere strictly to fair procedure, mandatory prior written notices, and non-violent protocols. Any seizure conducted outside these statutory parameters is legally void and constitutes an actionable criminal offense.
                </p>
                </div>
              </section>

              {/* Section 30 */}
              <section id="car-repossession-rules-in-india" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 30
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  30. Car Repossession Rules in India
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Vehicle repossession jurisprudence in India has been shaped by landmark Supreme Court judgments, including <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> and <em>Citicorp Maruti Finance Ltd. v. Vijayalaxmi (2012)</em>. The apex court explicitly held that banks cannot employ goons, musclemen, or recovery agents to take forcible possession of vehicles from defaulting borrowers.
                </p>
                <p>
                  Under the Indian Banks&apos; Association (IBA) Model Code and judicial rulings, lawful repossession mandates: (1) Service of a formal Pre-Repossession Notice giving the borrower an opportunity to cure the default, (2) Advance intimation to the local police station before initiating repossession, (3) Preparation of an itemized inventory sheet detailing all personal belongings inside the vehicle, signed by the borrower or independent witnesses, and (4) Service of a Post-Repossession Notice giving the borrower a minimum of 7 to 14 days to redeem the car before auctioning.
                </p>
                </div>
              </section>

              {/* Section 31 */}
              <section id="rbi-rules-on-vehicle-repossession" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 31
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  31. RBI Rules on Vehicle Repossession
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The Reserve Bank of India has incorporated detailed vehicle repossession safeguards into its Fair Practices Code for commercial banks and NBFCs. Lenders must maintain a transparent, board-approved repossession policy that is clearly disclosed to borrowers in the loan agreement.
                </p>
                <p>
                  The RBI directives stipulate that: (1) The repossession process must be non-violent and respectful of borrower dignity, (2) Lenders are strictly liable for the actions of their outsourced recovery agencies, (3) The vehicle cannot be sold without giving the borrower a fair chance to settle the account, and (4) The auction must be conducted transparently with public advertisement, with any surplus realization refunded to the borrower.
                </p>
                </div>
              </section>

              {/* Section 32 */}
              <section id="notice-before-car-repossession" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 32
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  32. Notice Before Car Repossession
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under statutory banking regulations, a lender must serve a formal <strong>Pre-Repossession Notice</strong> before taking custody of a financed vehicle. This written notice—typically sent via registered post or tracked speed post to your registered address—must grant a minimum notice period (usually 7 to 15 days) specifying the exact overdue amount and warning that failure to cure the default will trigger repossession.
                </p>
                <p>
                  If recovery agents attempt to seize your vehicle without proof of this prior written notice, the repossession is procedurally illegal. You have the immediate right to refuse surrender, document the violation, and lodge an urgent police complaint against the agents for wrongful restraint and criminal intimidation.
                </p>
                </div>
              </section>

              {/* Section 33 */}
              <section id="can-recovery-agents-take-your-car-by-force" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 33
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  33. Can Recovery Agents Take Your Car by Force?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  <strong>NO. Absolutely not.</strong> Under Indian criminal jurisprudence, taking a vehicle by force, intimidation, or physical coercion—regardless of default status—constitutes cognizable criminal offenses under the Bharatiya Nyaya Sanhita (BNS), including <strong>Wrongful Restraint (Section 126 BNS)</strong>, <strong>Criminal Intimidation (Section 351 BNS)</strong>, and <strong>Extortion / Robbery (Section 308 &amp; 309 BNS)</strong>.
                </p>
                <p>
                  The Supreme Court in <em>Manager, ICICI Bank Ltd. v. Prakash Kaur</em> delivered a scathing verdict against banks that deploy musclemen, stating unequivocally: <em>&quot;We are governed by a rule of law in this country. The recovery of loans or the seizure of vehicles could be done only through legal means. Banks cannot employ goondas to take possession by force.&quot;</em> If agents use force, dial 112 immediately and lodge an FIR against the agency and the bank.
                </p>
                </div>
              </section>

              {/* Section 34 */}
              <section id="rights-of-borrowers-during-car-repossession" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 34
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  34. Rights of Borrowers During Car Repossession
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  If your vehicle faces imminent repossession, you possess enforceable legal rights protected under Indian central banking guidelines and contract law:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">1. Right to Inspect Written Authority</span>
                    <p className="text-black font-normal">You have the legal right to demand the agents&apos; official IIBF DRA certification and an authenticated Letter of Authority from the bank before speaking to them.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">2. Right to Remove Personal Belongings</span>
                    <p className="text-black font-normal">The bank has hypothecation rights over the vehicle only—NOT your personal items. You have the absolute right to remove laptops, cash, files, and personal accessories.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">3. Right to Detailed Inventory Sheet</span>
                    <p className="text-black font-normal">Agents must record an accurate inventory noting fuel level, tire condition, odometer reading, and scratches, providing you with a signed duplicate copy.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">4. Right to Redeem Before Auction</span>
                    <p className="text-black font-normal">You hold the statutory right to settle the account and reclaim your vehicle at any point before the public auction is legally executed.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 35 */}
              <section id="car-loan-settlement-after-repossession" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 35
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  35. Car Loan Settlement After Repossession
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  If the bank has already taken custody of your car and moved it to a storage yard, your window for action is urgent but highly favorable for an OTS. Under RBI fair practice guidelines, the lender must issue a <strong>Post-Repossession Notice</strong> granting 7 to 14 days to pay overdue arrears or negotiate an amicable settlement before sending the vehicle to auction.
                </p>
                <p>
                  During this post-repossession window, banks are keenly aware of the high holding costs: yard storage fees (₹300 to ₹600 daily), valuation surveyor fees, towing costs, and auction commission (5% to 10%). CredSettle immediately intervenes with the bank&apos;s Stressed Asset team, offering an expedited lump-sum settlement that nets the bank more than an auction while securing the release of your vehicle from the yard.
                </p>
                </div>
              </section>

              {/* Section 36 */}
              <section id="car-loan-settlement-before-repossession" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 36
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  36. Car Loan Settlement Before Repossession
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Settling your auto loan <em>before</em> the bank takes possession of the vehicle is the most advantageous scenario for the borrower. When the automobile remains safely in your custody, you maintain maximum negotiation leverage: the bank has not incurred repossession expenses, has not paid towing fees, and faces the prospect of protracted legal recovery.
                </p>
                <p>
                  By engaging CredSettle before repossession occurs, our advocates serve representation notices that legally freeze repossession action. We present an audited financial hardship proposal offering an immediate compromise payment, enabling you to settle the debt at a deep discount, retain the car without interruption, and obtain RTO Form 35 to delete the hypothecation.
                </p>
                </div>
              </section>

              {/* Section 37 */}
              <section id="car-loan-settlement-after-the-car-has-been-sold" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 37
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  37. Car Loan Settlement After the Car Has Been Sold
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A common misconception is that once the bank repossesses and auctions your car, your debt obligation is over. In reality, bank auto auctions frequently sell vehicles at massive distress discounts—often 40% to 60% below fair market value. The auction proceeds are first credited against towing charges, yard storage fees, and legal costs, leaving a substantial <strong>Deficiency Balance</strong> on the loan principal.
                </p>
                <p>
                  Following the auction, the bank issues a legal demand notice demanding that you pay this residual deficiency shortfall. Because the bank no longer holds any collateral security, this remaining claim becomes an <strong>unsecured bad debt</strong>. CredSettle challenges improper auction procedures and low-valuation sales, negotiating deep waivers of <strong>70% to 85%</strong> on the deficiency balance to permanently close the account.
                </p>
                </div>
              </section>

              {/* Section 38 */}
              <section id="what-happens-if-the-sale-of-the-car-does-not-cover-the-loan" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 38
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  38. What Happens if the Sale of the Car Does Not Cover the Loan?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When auction proceeds fail to cover the total outstanding loan balance, the resulting shortfall is legally designated as a <em>deficiency balance</em>. Under the Indian Contract Act, the borrower remains contractually liable to pay this difference. If ignored, the bank can file a civil recovery suit or initiate arbitration proceedings to attach your salary or bank accounts.
                </p>
                <p>
                  However, recovering an unsecured deficiency shortfall through Indian courts takes years and costs the bank heavy advocate retainers. Furthermore, if the bank failed to give proper statutory notice before auctioning the vehicle, courts routinely dismiss deficiency claims. We leverage these legal vulnerabilities to settle the deficiency balance for a nominal token settlement, obtaining a final No Dues Certificate.
                </p>
                </div>
              </section>

              {/* =================================================================== */}
              {/* MIDPOINT INTERACTIVE TOOL: CAR LOAN SETTLEMENT & DEFICIENCY CALCULATOR*/}
              {/* =================================================================== */}
              <div id="car-loan-settlement-calculator" className="my-8 sm:my-10 p-4 sm:p-6 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-2xl text-white shadow-xl border border-blue-800/60 not-prose">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-800/80 pb-3 mb-5">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full inline-block mb-1">
                      Interactive Vehicle Debt Diagnostic Tool
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>⚡</span> Car Loan Settlement &amp; Deficiency Calculator
                    </h3>
                  </div>
                  <span className="text-xs text-blue-200 bg-blue-900/60 px-2.5 py-1 rounded-lg border border-blue-700/50 self-start sm:self-auto">
                    RBI &amp; RTO Form 35 Ready
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Sliders & Selectors */}
                  <div className="lg:col-span-7 space-y-4 text-xs">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="font-semibold text-slate-200">Total Outstanding Loan Balance (₹)</label>
                        <span className="text-sm font-bold text-blue-300">₹ {calcPrincipal.toLocaleString('en-IN')}</span>
                      </div>
                      <input
                        type="range"
                        min="100000"
                        max="3000000"
                        step="25000"
                        value={calcPrincipal}
                        onChange={(e) => setCalcPrincipal(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>₹ 1 Lakh</span>
                        <span>₹ 15 Lakhs</span>
                        <span>₹ 30 Lakhs</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="font-semibold text-slate-200">Default Age (Months Overdue)</label>
                        <span className="text-sm font-bold text-blue-300">{calcOverdueMonths} Months</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="24"
                        step="1"
                        value={calcOverdueMonths}
                        onChange={(e) => setCalcOverdueMonths(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>1 Mo (SMA-0)</span>
                        <span>6 Mos (NPA)</span>
                        <span>12+ Mos (Doubtful)</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block font-semibold text-slate-200 mb-1">Vehicle Possession Status</label>
                        <select
                          value={calcVehicleStatus}
                          onChange={(e) => setCalcVehicleStatus(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500 text-xs"
                        >
                          <option value="with_borrower">Car in My Possession (Retain Vehicle)</option>
                          <option value="repossessed_in_yard">Car Repossessed (In Bank Yard)</option>
                          <option value="auctioned_deficiency">Car Sold at Auction (Deficiency Shortfall)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-200 mb-1">Current Legal Escalation</label>
                        <select
                          value={calcLegalStatus}
                          onChange={(e) => setCalcLegalStatus(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500 text-xs"
                        >
                          <option value="pre_repossession">Pre-Repossession Notice Received</option>
                          <option value="recovery_harassment">Aggressive Field Agent Harassment</option>
                          <option value="sec_138_cheque">Sec 138 NI Act Cheque Summons</option>
                          <option value="arbitration">Arbitration Notice / Award</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Output Summary Card */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-blue-900/60 to-slate-800/80 p-4 rounded-xl border border-blue-700/60 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block mb-1">
                        Estimated Auto OTS Resolution Target
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                          ₹ {autoOtsAnalysis.estimatedSettlement.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-300">payable</span>
                      </div>
                      <p className="text-[11px] text-emerald-300 font-semibold mt-1">
                        Estimated Waiver: ₹ {autoOtsAnalysis.estimatedSavings.toLocaleString('en-IN')} ({autoOtsAnalysis.waiverPct}% Haircut)
                      </p>
                    </div>

                    <div className="space-y-1.5 text-[11px] border-t border-blue-800/60 pt-2.5">
                      <div className="flex items-start gap-1.5">
                        <span className="text-blue-400 shrink-0 font-bold">Strategy:</span>
                        <span className="text-slate-200">{autoOtsAnalysis.strategy}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-emerald-400 shrink-0 font-bold">Legal Shield:</span>
                        <span className="text-slate-200">{autoOtsAnalysis.legalShield}</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="block w-full py-2 bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs rounded-lg text-center transition-colors shadow-md"
                    >
                      Lock In This Vehicle OTS Target
                    </Link>
                  </div>
                </div>
              </div>


              {/* =================================================================== */}
              {/* MODULE 6: NOTICES, ARBITRATION, HARASSMENT & NEGOTIATION (39–46)    */}
              {/* =================================================================== */}

              {/* Section 39 */}
              <section id="car-loan-settlement-after-receiving-a-legal-notice" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 39
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  39. Car Loan Settlement After Receiving a Legal Notice
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Receiving a formal legal notice—whether a Loan Recall Notice from a bank advocate, a Pre-Repossession Notice, or a Section 138 NI Act statutory demand notice—is not a reason to panic. Lenders issue legal notices to apply psychological pressure, but bank legal departments recognize that actual contested litigation in Indian courts is slow, expensive, and uncertain.
                </p>
                <p>
                  CredSettle&apos;s banking advocates immediately draft and file a comprehensive, point-by-point Legal Reply within the statutory deadline. Our reply challenges unlawful penal compounding, highlights violations of RBI Fair Practice Codes, establishes genuine borrower financial hardship, and proposes a formal One-Time Settlement, shifting the dispute from adversarial court litigation to the settlement table.
                </p>
                </div>
              </section>

              {/* Section 40 */}
              <section id="car-loan-settlement-during-arbitration-or-legal-proceedings" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 40
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  40. Car Loan Settlement During Arbitration or Legal Proceedings
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A car loan can be legally settled at <strong>any stage of active litigation</strong>—including during ongoing arbitration proceedings under the Arbitration and Conciliation Act, 1996, during Section 9 interim repossession applications, during civil summary suits (Order 37 CPC), and during Section 138 NI Act criminal proceedings.
                </p>
                <p>
                  When a settlement is finalized mid-litigation, both parties file formal Joint Compromise Terms or an Application for Consent Award. The judicial forum (Arbitrator, Civil Judge, or Magistrate) records the settlement, dismisses the case as settled out of court, and ensures complete discharge, guaranteeing that the borrower emerges completely free of all pending court liabilities.
                </p>
                </div>
              </section>

              {/* Section 41 */}
              <section id="car-loan-settlement-and-recovery-agent-harassment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 41
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  41. Car Loan Settlement and Recovery Agent Harassment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Auto loan recovery frequently descends into aggressive, unlawful harassment because third-party recovery agencies earn lucrative success commissions for physically seizing vehicles or extracting immediate payments. Rogue recovery agents routinely ambush borrowers outside their homes, call relentlessly at late hours, threaten family members, and track vehicle movements.
                </p>
                <p>
                  Such coercive actions are not lawful debt collection; they constitute actionable torts and cognizable criminal offenses under the Bharatiya Nyaya Sanhita (BNS), including criminal intimidation (Section 351 BNS) and extortion (Section 308 BNS). Immediate legal intervention shuts down harassment and forces the bank back into lawful compromise discussions.
                </p>
                </div>
              </section>

              {/* Section 42 */}
              <section id="borrowers-rights-against-recovery-agent-harassment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 42
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  42. Borrower&apos;s Rights Against Recovery Agent Harassment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Auto loan borrowers enjoy fundamental constitutional and statutory protections under Indian law and RBI directives:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">1. Right to Dignity &amp; Privacy (Article 21)</span>
                    <p className="text-black font-normal">Supreme Court rulings guarantee that inability to service a debt cannot strip a citizen of their constitutional right to personal dignity and privacy.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">2. Right to Legal Representation</span>
                    <p className="text-black font-normal">Borrowers have the statutory right under the Advocates Act, 1961 to retain advocates, requiring lenders to direct all future communication in writing to legal counsel.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">3. Right Against Third-Party Disclosure</span>
                    <p className="text-black font-normal">Absolute prohibition against agents disclosing vehicle debt details to employers, colleagues, neighbors, or third-party family members.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">4. Right to Regulatory Compensation</span>
                    <p className="text-black font-normal">The RBI Integrated Ombudsman can penalize lending banks directly and award financial compensation up to ₹1,00,000 for mental harassment.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 43 */}
              <section id="how-to-negotiate-car-loan-settlement-with-a-bank-or-nbfc" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 43
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  43. How to Negotiate Car Loan Settlement With a Bank or NBFC
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Negotiating an auto loan settlement requires analytical financial presentation rather than emotional appeals. Bank credit committees evaluate compromise proposals on cold financial metrics: the <em>Net Present Value (NPV)</em> of accepting a cash settlement today versus the heavily discounted recovery yield of auctioning a depreciating used car minus yard and legal costs.
                </p>
                <p>
                  To negotiate effectively, bypass branch staff and recovery agents, directing your petition to the bank&apos;s Zonal Stressed Assets Management Branch. Present a realistic valuation report showing the car&apos;s current used market value and propose a cash settlement that offers the bank slightly more than their net auction realization, while demanding 100% penal interest waiver and the prompt delivery of RTO Form 35.
                </p>
                </div>
              </section>

              {/* Section 44 */}
              <section id="how-to-make-a-car-loan-settlement-proposal" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 44
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  44. How to Make a Car Loan Settlement Proposal
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A car loan settlement proposal must be structured as a formal legal-financial petition submitted on advocate letterhead to the Zonal Head / Authorized Officer of the lending institution. Informal oral discussions hold zero evidentiary value in bank credit committee reviews.
                </p>
                <p>
                  A comprehensive OTS proposal prepared by CredSettle contains five mandatory components: (1) <strong>Chronological Loan History</strong> detailing flawless prior repayments, (2) <strong>Verifiable Hardship Statement</strong> documenting specific job loss, medical distress, or business failure, (3) <strong>Forensic Valuation Audit</strong> contrasting the vehicle&apos;s depreciated value with net auction costs, (4) <strong>The Firm Compromise Offer</strong> specifying the payable sum and payment timeline, and (5) <strong>Reciprocal Covenants</strong> requiring the release of Form 35, NDC issuance, and court petition withdrawal.
                </p>
                </div>
              </section>

              {/* Section 45 */}
              <section id="documents-required-for-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 45
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  45. Documents Required for Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  To satisfy bank audit scrutiny and comply with RBI compromise guidelines, a borrower must substantiate their settlement proposal with comprehensive documentation:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Loan &amp; Vehicle Records</span>
                    <ul className="text-black space-y-0.5 list-disc pl-4 font-normal">
                      <li>Original Loan Sanction Letter and detailed Statement of Account</li>
                      <li>Copy of Vehicle Registration Certificate (RC) showing hypothecation</li>
                      <li>Comprehensive vehicle insurance policy copy (showing current IDV)</li>
                      <li>Current vehicle odometer photograph and fitness certificate</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Financial Hardship Proofs</span>
                    <ul className="text-black space-y-0.5 list-disc pl-4 font-normal">
                      <li>Official corporate termination letter, severance slip, or layoff notice</li>
                      <li>Last 6 to 12 months bank statements of all active accounts</li>
                      <li>Income Tax Returns (ITR) or Form 16 showing income drop</li>
                      <li>Medical discharge summaries or hospital billing receipts for medical distress</li>
                    </ul>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 46 */}
              <section id="financial-hardship-and-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 46
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  46. Financial Hardship and Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under central banking regulations, lenders must distinguish between <em>Wilful Defaulters</em> (borrowers who possess adequate financial means but deliberately refuse to repay) and <em>Bona Fide Stressed Borrowers</em> (individuals whose defaults are caused by genuine economic distress beyond their control).
                </p>
                <p>
                  Demonstrating genuine financial hardship is the legal cornerstone of securing deep principal waivers. Our advocates construct an irrefutable Hardship Docket establishing that your default occurred despite your best intentions. By documenting verifiable income contraction, our legal team ensures the credit committee classifies your account as non-wilful, qualifying you for maximum compromise write-offs.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 7: HARDSHIP SCENARIOS, MULTIPLE LOANS & LENDERS (47–56)      */}
              {/* =================================================================== */}

              {/* Section 47 */}
              <section id="car-loan-settlement-after-job-loss" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 47
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  47. Car Loan Settlement After Job Loss
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Sudden corporate layoffs, IT sector restructuring, and unexpected employment termination are among the most frequent causes of vehicle loan default in urban India. When monthly salary credits stop abruptly, a salaried professional who comfortably serviced a ₹18,000 monthly car EMI is suddenly forced to prioritize basic groceries and rent over auto loan payments.
                </p>
                <p>
                  In job loss scenarios, CredSettle presents certified pink slips, corporate severance agreements, and zero-salary bank statements to the lender. We demonstrate that continuing standard loan servicing is mathematically impossible, using the verified unemployment hardship to negotiate a deep lump-sum settlement funded through severance payouts or family assistance, allowing the borrower to keep their automobile or exit the loan with zero lingering debt.
                </p>
                </div>
              </section>

              {/* Section 48 */}
              <section id="car-loan-settlement-after-business-or-income-loss" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 48
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  48. Car Loan Settlement After Business or Income Loss
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Small business owners, retail traders, and commercial taxi operators frequently purchase vehicles to support commercial enterprise or executive mobility. When macroeconomic shocks, supply-chain failures, client payment defaults, or fuel price spikes destroy operating margins, servicing auto loans from business revenue becomes unviable.
                </p>
                <p>
                  For self-employed borrowers, we establish operational distress through audited P&amp;L accounts, GST turnover contraction filings, and commercial fleet aging reports. Demonstrating that the enterprise is operating at a cash deficit motivates credit committees to approve compromise settlements, write off uncollectible interest, and release the vehicle hypothecation.
                </p>
                </div>
              </section>

              {/* Section 49 */}
              <section id="car-loan-settlement-due-to-medical-or-family-emergency" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 49
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  49. Car Loan Settlement Due to Medical or Family Emergency
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Catastrophic medical diagnoses—such as oncology treatments, organ surgeries, or prolonged intensive care hospitalizations—routinely wipe out household financial reserves. When families are forced to divert all liquid funds toward life-saving healthcare, auto loan payments inevitably fall into default.
                </p>
                <p>
                  Under the RBI Charter of Customer Rights, lenders must treat borrowers afflicted by severe health crises with utmost humanitarian empathy. Our legal team compiles hospital discharge summaries, surgical invoices, and medical prognosis reports, compelling the bank&apos;s settlement committee to waive 100% of accumulated penal charges and sanction substantial principal write-offs on compassionate grounds.
                </p>
                </div>
              </section>

              {/* Section 50 */}
              <section id="car-loan-settlement-for-multiple-vehicle-loans" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 50
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  50. Car Loan Settlement for Multiple Vehicle Loans
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Commercial transport operators, logistics firms, and multi-vehicle households frequently hold 2 to 10 simultaneous vehicle loans across multiple banking institutions. When operational distress strikes, uncoordinated defaults lead to chaotic repossession actions, with competing recovery agencies attempting to seize vehicles simultaneously.
                </p>
                <p>
                  CredSettle designs consolidated Multi-Vehicle Settlement Roadmaps. We evaluate the depreciation, commercial earning potential, and loan-to-value status of each vehicle in the fleet. By prioritizing high-value commercial assets and negotiating phased bilateral settlements across all lenders, we protect core revenue-generating vehicles while cleanly settling non-viable units.
                </p>
                </div>
              </section>

              {/* Section 51 */}
              <section id="car-loan-settlement-with-banks" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 51
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  51. Car Loan Settlement With Banks
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Scheduled commercial banks (including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, and Punjab National Bank) operate under strict internal Delegation of Financial Powers (DOFP) matrices. Auto loan compromise requests are evaluated by specialized Retail Asset Settlement Committees (RASC) located at Zonal or Regional Offices.
                </p>
                <p>
                  Public sector banks follow standardized, non-discretionary OTS formulas to insulate executives from audit scrutiny by the Central Vigilance Commission (CVC), while private banks prioritize immediate cash realization speed. CredSettle tailors every settlement petition to match the specific audit requirements of the respective bank, accelerating committee approvals and maximizing principal haircuts.
                </p>
                </div>
              </section>

              {/* Section 52 */}
              <section id="car-loan-settlement-with-nbfcs" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 52
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  52. Car Loan Settlement With NBFCs
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Major NBFCs (including Mahindra Finance, Cholamandalam, Sundaram Finance, Shriram Finance, Tata Capital, and Bajaj Finserv) finance a vast share of commercial and pre-owned vehicle loans in India. While NBFCs operate with shorter decision hierarchies than public banks, they frequently employ aggressive field recovery networks and fast-track arbitration clauses.
                </p>
                <p>
                  Our legal team counters unilateral arbitrator appointments, challenges ex-parte Section 9 repossession applications, and halts field agent harassment. We open direct negotiations with the NBFC&apos;s Central Stressed Asset division, securing comprehensive compromise settlements with full Form 35 issuance within 15 to 30 days.
                </p>
                </div>
              </section>

              {/* Section 53 */}
              <section id="car-loan-settlement-with-fintech-and-digital-lenders" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 53
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  53. Car Loan Settlement With Fintech and Digital Lenders
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Digital auto loan aggregators, used-car marketplace financiers (such as Cars24 Financial Services, CarDekho / Rupyy, and Kuwy), and app-based vehicle lenders extend instant vehicle loans featuring high interest rates and aggressive automated electronic NACH mandates.
                </p>
                <p>
                  When defaults occur, digital lenders rely heavily on automated calling dialers and aggressive WhatsApp messaging. We intervene by serving formal legal notices to their partner NBFCs, stopping unlawful telephonic harassment under RBI Digital Lending Guidelines (2022), canceling recurring auto-debit mandates, and negotiating 45% to 65% principal haircuts to cleanly discharge the loan.
                </p>
                </div>
              </section>

              {/* Section 54 */}
              <section id="car-loan-settlement-company-vs-direct-bank-negotiation" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 54
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  54. Car Loan Settlement Company vs Direct Bank Negotiation
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Borrowers frequently contemplate negotiating directly with their bank branch rather than hiring professional legal counsel. In practice, unrepresented borrowers face acute structural disadvantages:
                </p>
                <div className="overflow-x-auto text-xs my-2">
                  <table className="w-full border-collapse border border-gray-200 rounded-lg text-left">
                    <thead>
                      <tr className="bg-slate-100 text-black font-bold">
                        <th className="p-2 border border-gray-200">Aspect</th>
                        <th className="p-2 border border-gray-200">Direct Bank Negotiation</th>
                        <th className="p-2 border border-gray-200">CredSettle Legal Representation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-black font-normal">
                      <tr>
                        <td className="p-2 font-bold border border-gray-200">Repossession Threat</td>
                        <td className="p-2 border border-gray-200">Borrower is vulnerable to sudden street seizure by agents</td>
                        <td className="p-2 border border-gray-200">Advocate notice provides legal shield against unlawful repossession</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-gray-200">Waiver Percentage</td>
                        <td className="p-2 border border-gray-200">Modest (10%–20% interest waiver only; full principal demanded)</td>
                        <td className="p-2 border border-gray-200">Deep Haircuts (40%–60% reduction based on vehicle valuation)</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-gray-200">RTO Form 35 Delivery</td>
                        <td className="p-2 border border-gray-200">Often delayed for months due to internal administrative lag</td>
                        <td className="p-2 border border-gray-200">Strict contractual timeline guaranteed in settlement terms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              </section>

              {/* Section 55 */}
              <section id="how-to-choose-a-car-loan-settlement-company" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 55
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  55. How to Choose a Car Loan Settlement Company
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Selecting a debt resolution partner for an auto loan requires thorough due diligence. The market contains reputable advocate-led firms as well as fraudulent telemarketing agencies that promise 90% debt cancellation while pocketing upfront fees without providing any legal representation.
                </p>
                <p>
                  Insist on four mandatory criteria: (1) <strong>Advocate-Led Practice:</strong> Verify that representation notices are issued by licensed High Court advocates under the Advocates Act, 1961, (2) <strong>Physical Registered Office:</strong> Never engage with entities operating solely through WhatsApp, (3) <strong>Track Record in Vehicle Debt:</strong> Confirm proven experience resolving hypothecations and securing RTO Form 35, and (4) <strong>Direct Payment Protocol:</strong> Ensure all settlement payments are made directly to the bank&apos;s official loan account—never to a third-party intermediary.
                </p>
                </div>
              </section>

              {/* Section 56 */}
              <section id="car-loan-settlement-fees-and-charges" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 56
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  56. Car Loan Settlement Fees and Charges
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Professional auto loan settlement operates under transparent, contractually documented fee structures. CredSettle works on a milestone-based model: an initial legal retainer covering advocate representation notices, forensic ledger audits, and anti-repossession protection, followed by a success fee tied directly to the actual monetary waiver achieved on your auto debt.
                </p>
                <p>
                  We never handle client settlement funds directly. All settlement payments must be remitted strictly via direct RTGS/NEFT to your official loan account with the lending bank, ensuring complete safety, zero fraud risk, and full tax-compliant GST invoicing.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 8: CLOSURE DOCUMENTS, RTO FORM 35 & BUREAU AUDIT (57–66)     */}
              {/* =================================================================== */}

              {/* Section 57 */}
              <section id="what-happens-after-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 57
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  57. What Happens After Car Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Remitting the final sanctioned settlement payment marks the start of the post-settlement administrative and statutory closure process. Within 15 to 30 days of payment clearance, the lending bank or NBFC must update its Core Banking System (CBS), zero out the loan ledger, and permanently cancel all automated electronic clearing mandates (ECS/NACH).
                </p>
                <p>
                  Simultaneously, the bank&apos;s legal panel is instructed to withdraw all pending court litigation—including filing compounding applications for Section 138 NI Act cheque complaints and closing arbitration proceedings. The lender then executes an official No Dues Certificate (NDC), delivers two signed copies of RTO Form 35, and uploads updated &quot;Settled&quot; status records to TransUnion CIBIL, Equifax, Experian, and CRIF High Mark.
                </p>
                </div>
              </section>

              {/* Section 58 */}
              <section id="settlement-letter-no-dues-certificate-and-other-documents" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 58
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  58. Settlement Letter, No-Dues Certificate and Other Documents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A car loan settlement is not legally complete until the borrower receives and archives four critical legal instruments issued under official bank seal:
                </p>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">1. Settlement Sanction Letter</span>
                    <p className="text-black font-normal">The original signed document on bank letterhead specifying the net sanctioned compromise amount, tranche deadlines, account numbers, and complete waiver clauses.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">2. No Dues Certificate (NDC) / Loan Closure Deed</span>
                    <p className="text-black font-normal">The definitive legal instrument confirming that all claims against the primary borrower and co-borrowers have been fully satisfied with zero balance remaining.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">3. RTO Form 35 (Two Signed Copies)</span>
                    <p className="text-black font-normal">Official statutory notice of termination of hypothecation agreement under Section 51 of the Motor Vehicles Act, 1988, duly signed and stamped by the bank.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">4. Original Document Handover Receipt</span>
                    <p className="text-black font-normal">Return of original vehicle invoice, spare key (if held by the lender), and personal guarantee cancellation deeds.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 59 */}
              <section id="how-to-remove-hypothecation-after-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 59
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  59. How to Remove Hypothecation After Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Removing the bank&apos;s hypothecation (HP Termination) is the vital final step that restores unencumbered legal ownership of your vehicle. Even after receiving an NDC, your Registration Certificate (RC) remains legally encumbered on the government Vahan database until formal HP deletion is processed at the Regional Transport Office (RTO).
                </p>
                <p>
                  To remove hypothecation, compile: (1) Original Registration Certificate (RC), (2) Two original copies of Form 35 signed and stamped by the bank, (3) Original No Dues Certificate, (4) Valid Vehicle Insurance certificate, (5) Valid Pollution Under Control (PUC) certificate, and (6) Address proof. Submit these via the Ministry of Road Transport and Highways (MoRTH) Parivahan Sewa portal or physically at your registering RTO.
                </p>
                </div>
              </section>

              {/* Section 60 */}
              <section id="rto-process-after-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 60
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  60. RTO Process After Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The statutory RTO hypothecation cancellation follows a standardized 4-step administrative process:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-black font-normal">
                  <li><strong>Parivahan Portal Application:</strong> Log on to parivahan.gov.in, select &quot;Vehicle Related Services,&quot; enter your vehicle registration number and chassis number, and select <em>&quot;Hypothecation Termination (HPT)&quot;</em>.</li>
                  <li><strong>Fee Payment &amp; Slot Booking:</strong> Pay the statutory RTO fee (typically ₹100 to ₹300 depending on the state) and download the e-receipt and Form 35 application summary.</li>
                  <li><strong>Document Submission:</strong> Submit the physical file (original RC, bank Form 35, NDC, insurance, PUC, fee receipt) to your local RTO counter or via registered post if state faceless services apply.</li>
                  <li><strong>RC Dispatch:</strong> The RTO verifies the bank credentials against the online Vahan portal, cancels the hypothecation endorsement, and issues an updated smart card RC showing zero financial liens.</li>
                </ol>
                </div>
              </section>

              {/* Section 61 */}
              <section id="how-to-obtain-form-35-after-loan-closure-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 61
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  61. How to Obtain Form 35 After Loan Closure/Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under the Reserve Bank of India Circular dated September 13, 2023 (<em>Release of Movable / Immovable Property Documents on Repayment / Settlement of Loans</em>), lenders are statutorily required to <strong>issue all closure documents and RTO Form 35 within 30 days</strong> of receiving full settlement payment.
                </p>
                <p>
                  If a bank fails to deliver Form 35 within 30 days, the RBI directive mandates that the lender must compensate the borrower at the rate of <strong>₹5,000 for each day of delay</strong>. CredSettle enforces this regulatory provision during settlement drafting, ensuring the bank issues valid, non-expired Form 35 documents (which carry a statutory validity of 90 days from the date of bank signing).
                </p>
                </div>
              </section>

              {/* Section 62 */}
              <section id="how-to-update-the-rc-after-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 62
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  62. How to Update the RC After Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Once your Hypothecation Termination application is approved by the RTO, the Vahan centralized database is updated immediately. You can verify this online by downloading your virtual RC via the mParivahan mobile application or DigiLocker.
                </p>
                <p>
                  Under the &quot;Financier / Hypothecation&quot; field, the status will now display &quot;NONE&quot; or &quot;N/A.&quot; The physical smart card RC will be dispatched via India Post Speed Post to your registered address. Holding an unencumbered RC is essential: without it, you cannot legally sell the car, transfer ownership, claim insurance total loss payouts, or relocate the vehicle to another state under an NOC.
                </p>
                </div>
              </section>

              {/* Section 63 */}
              <section id="how-to-check-car-loan-settlement-status-on-your-credit-report" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 63
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  63. How to Check Car Loan Settlement Status on Your Credit Report
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Approximately 45 to 60 days following settlement payment, you must pull your comprehensive credit report from TransUnion CIBIL, Equifax, Experian, or CRIF High Mark.
                </p>
                <p>
                  Examine your auto loan trade line carefully for three vital parameters: (1) The <strong>Current Balance</strong> must strictly read ₹0, (2) The <strong>Amount Overdue</strong> must strictly read ₹0, and (3) The <strong>Status</strong> should be marked &quot;Settled&quot; or &quot;Post-Write-Off Settled.&quot; If the report continues to display an active overdue balance or ongoing DPD delinquency, the bank has committed an administrative reporting error requiring legal escalation.
                </p>
                </div>
              </section>

              {/* Section 64 */}
              <section id="how-to-correct-incorrect-credit-bureau-reporting-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 64
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  64. How to Correct Incorrect Credit Bureau Reporting After Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Lenders frequently suffer from operational lag, with central credit reporting teams failing to update settlement records sent by regional recovery branches. If your credit report continues to reflect active default after receiving an NDC, follow this 3-tier correction protocol:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Tier 1: Online Bureau Dispute:</span> File an official dispute on the CIBIL / Experian portal attaching certified copies of your Settlement Sanction Letter, payment UTR receipt, and No Dues Certificate.
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Tier 2: Principal Nodal Officer (PNO) Notice:</span> Serve a formal legal notice on the bank&apos;s Principal Nodal Officer under Section 21 of CICRA 2005, giving them 30 days to rectify the erroneous delinquency reporting.
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Tier 3: RBI Ombudsman Complaint:</span> If uncorrected after 30 days, lodge a complaint on the RBI CMS portal (cms.rbi.org.in). The Ombudsman can penalize the bank ₹100 per day of default and award compensation for credit damage.
                  </div>
                </div>
                </div>
              </section>

              {/* Section 65 */}
              <section id="common-mistakes-to-avoid-during-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 65
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  65. Common Mistakes to Avoid During Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In auto loan settlements, minor procedural mistakes can lead to severe financial and legal losses. Avoid these four fatal traps:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black font-normal">
                  <li><strong>Paying Based on Oral Promises:</strong> Never transfer funds based on verbal assurances from recovery agents. Without an official stamped Settlement Sanction Letter, the bank treats your payment as a standard recovery against penal interest, leaving your principal untouched.</li>
                  <li><strong>Missing Payment Tranche Deadlines:</strong> OTS letters contain strict default clauses. Missing a payment deadline by even 24 hours can automatically revoke the settlement, with the bank forfeiting deposited funds and reviving the full original debt.</li>
                  <li><strong>Forgetting to Demand Form 35:</strong> Settling the loan without securing RTO Form 35 leaves the bank lien active on your RC, preventing you from ever selling or transferring the car.</li>
                  <li><strong>Ignoring Court Summons:</strong> Failing to require the bank to formally withdraw pending Section 138 NI Act cheque cases or arbitration claims allows court proceedings to continue unmonitored.</li>
                </ul>
                </div>
              </section>

              {/* Section 66 */}
              <section id="car-loan-settlement-scams-and-fraud-how-to-stay-safe" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 66
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  66. Car Loan Settlement Scams and Fraud – How to Stay Safe
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The auto loan settlement sector has witnessed fraudulent recovery operations where fake agencies issue forged settlement letters on cloned bank stationery or demand cash payments to &quot;release&quot; repossessed vehicles from private yards.
                </p>
                <p>
                  Protect yourself by adhering to three absolute security rules: (1) <strong>Verify the Sanction Letter:</strong> Always cross-verify the OTS Sanction Letter directly with the bank&apos;s Zonal Stressed Assets branch before releasing funds, (2) <strong>Direct Account Payment Only:</strong> All settlement payments must be made strictly via RTGS/NEFT directly into your official auto loan account number with the lending bank—never to any individual or agency account, and (3) <strong>Insist on Official Stamped Receipts:</strong> Obtain immediate stamped bank deposit acknowledgements for every tranche remitted.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 9: SALE, TRANSFER, INSURANCE & GUARANTEES (67–77)            */}
              {/* =================================================================== */}

              {/* Section 67 */}
              <section id="can-you-sell-a-car-with-an-outstanding-loan" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 67
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  67. Can You Sell a Car With an Outstanding Loan?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under Section 51 of the Motor Vehicles Act, 1988, selling a vehicle with an active, unpaid hypothecation endorsement without the express written consent of the lending bank is legally void and can expose the seller to criminal charges of breach of trust (Section 316 BNS). The RTO will not process ownership transfer (Form 29 &amp; 30) without an official No Objection Certificate (NOC) and Form 35 from the financier.
                </p>
                <p>
                  However, you can legally execute a <strong>tripartite sale-cum-settlement</strong>. In this structure, a prospective used-car buyer or dealership agrees to purchase the car by directly remitting the sanctioned settlement amount into your loan account with the bank. The bank receives its agreed compromise funds, issues Form 35 and the NDC, and the vehicle ownership is cleanly transferred to the buyer at the RTO, with any surplus sale proceeds paid directly to you.
                </p>
                </div>
              </section>

              {/* Section 68 */}
              <section id="can-you-transfer-a-car-loan-to-another-person" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 68
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  68. Can You Transfer a Car Loan to Another Person?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Transferring an auto loan to a third party (known legally as <em>novation</em> under Section 62 of the Indian Contract Act) requires the explicit approval of the lending institution. The prospective new buyer must undergo the bank&apos;s complete underwriting process, submit KYC records, demonstrate adequate credit score (CIBIL 750+), and prove regular income.
                </p>
                <p>
                  If the loan is already in active default or NPA status, banks rarely approve loan transfer novations. Instead, lenders prefer a clean compromise settlement where the outstanding liability is resolved through a lump-sum payment, allowing the original borrower to be permanently discharged and the vehicle hypothecation to be vacated.
                </p>
                </div>
              </section>

              {/* Section 69 */}
              <section id="can-you-get-another-vehicle-loan-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 69
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  69. Can You Get Another Vehicle Loan After Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Yes, securing vehicle financing in the future is achievable following an auto loan settlement, although financing terms will depend on your post-settlement credit rehabilitation. Mainstream commercial banks enforce the mandatory 12-month RBI cooling-off period during which new auto loans will not be sanctioned.
                </p>
                <p>
                  After 12 to 24 months, as you rebuild your CIBIL score through secured credit cards and clean banking records, specialized NBFCs and pre-owned car financiers will consider new auto loan applications. You may be required to provide a slightly higher down payment (25% to 35% instead of 10% to 15%) or pay a modest interest premium until your score crosses 750+.
                </p>
                </div>
              </section>

              {/* Section 70 */}
              <section id="can-you-get-a-home-loan-after-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 70
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  70. Can You Get a Home Loan After Car Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Yes. Home loans are secured by high-value immovable residential property and carry substantially lower risk for lenders than unsecured personal credit. While a settled car loan will temporarily lower your score, mortgage underwriters evaluate the total loan-to-value (LTV) ratio of the property and your current debt-to-income (DTI) ratio.
                </p>
                <p>
                  Settling a defaulted car loan actually eliminates a toxic, open delinquency from your monthly obligations, reducing your DTI ratio. Once the 12-month cooling-off period elapses and you present your No Dues Certificate along with stable salary slips or business returns, housing finance companies (HFCs) and banks routinely sanction home loans.
                </p>
                </div>
              </section>

              {/* Section 71 */}
              <section id="tax-and-financial-implications-of-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 71
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  71. Tax and Financial Implications of Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  For individual retail borrowers who availed a personal car loan for domestic household use, the waiver of loan principal or interest does <strong>not</strong> constitute taxable income under the Income Tax Act, 1961. The debt reduction represents a capital concession rather than revenue earnings, and no Section 194R TDS applies pursuant to CBDT Circular No. 18/2022.
                </p>
                <p>
                  For commercial enterprises or self-employed individuals who claimed commercial vehicle depreciation under Section 32 of the Income Tax Act, the waived principal amount must be adjusted against the Written Down Value (WDV) of the vehicle block under Section 43(6). Consulting a chartered accountant ensures proper balance sheet disclosure and prevents audit queries.
                </p>
                </div>
              </section>

              {/* Section 72 */}
              <section id="car-loan-settlement-and-insurance" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 72
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  72. Car Loan Settlement and Insurance
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  During an active car loan, the vehicle insurance policy contains an &quot;IMT-7 Endorsement&quot; (Hypothecation Clause) naming the bank as the primary loss payee. If the vehicle is involved in a severe accident or stolen, the insurance company will remit total loss claim proceeds directly to the lending bank rather than to the borrower.
                </p>
                <p>
                  Following a successful settlement, you must submit your No Dues Certificate and Form 35 to the motor insurance company. The insurer deletes the hypothecation endorsement, ensuring that all future insurance claims, renewals, and no-claim bonuses (NCB) accrue solely to you as the sole beneficiary.
                </p>
                </div>
              </section>

              {/* Section 73 */}
              <section id="car-loan-settlement-and-vehicle-ownership" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 73
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  73. Car Loan Settlement and Vehicle Ownership
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Throughout the tenure of an active auto loan, vehicle ownership is split: you are the <em>registered owner</em> in possession of the car, while the bank holds an <em>equitable hypothecation charge</em>. If you default, the bank&apos;s security interest empowers them to enforce repossession.
                </p>
                <p>
                  Executing a settlement and completing RTO hypothecation removal restores <strong>absolute, unencumbered ownership</strong>. Once the bank&apos;s lien is struck off the Vahan database, the lender loses all legal claim over the automobile, granting you complete liberty to drive, modify, lease, or sell the car without requiring financier permission.
                </p>
                </div>
              </section>

              {/* Section 74 */}
              <section id="car-loan-settlement-and-guarantors-co-borrowers" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 74
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  74. Car Loan Settlement and Guarantors/Co-Borrowers
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Auto loans frequently require a spouse, parent, or business partner to sign as a joint co-borrower or third-party guarantor. When default occurs, recovery agents aggressively target these co-obligants, threatening their credit scores and calling their workplaces.
                </p>
                <p>
                  CredSettle ensures that every settlement agreement encompasses all co-borrowers and guarantors within the settlement umbrella. We require the bank to explicitly discharge all co-obligants in the No Dues Certificate, extinguishing their legal liability under Sections 133–135 of the Indian Contract Act and updating their credit bureau profiles to clear default remarks.
                </p>
                </div>
              </section>

              {/* Section 75 */}
              <section id="car-loan-settlement-and-personal-guarantees" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 75
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  75. Car Loan Settlement and Personal Guarantees
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under Section 128 of the Indian Contract Act, 1872, the liability of a personal guarantor is co-extensive with that of the primary borrower. If a personal guarantee was executed for a high-value commercial vehicle loan or fleet financing line, the bank can legally proceed against the guarantor&apos;s personal bank accounts and residential properties.
                </p>
                <p>
                  Our banking advocates draft non-negotiable indemnity and release covenants in the Settlement Sanction Letter. We mandate that the lender cancel the original personal guarantee deeds, deliver them back to the guarantor, and waive all rights to pursue personal recovery proceedings under civil law.
                </p>
                </div>
              </section>

              {/* Section 76 */}
              <section id="car-loan-settlement-and-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 76
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  76. Car Loan Settlement and Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  During auto loan disbursement, lenders routinely collect undated security cheques or electronic NACH mandates from borrowers. Following EMI default, lenders deposit these cheques; upon dishonor for &quot;insufficient funds,&quot; the bank issues a 15-day statutory demand notice followed by criminal complaints before Metropolitan Magistrate courts.
                </p>
                <p>
                  Our legal defense establishes that security cheques were collected as advance collateral rather than against a crystallized debt on the date of issue. More importantly, we use structured settlement negotiations to ensure that criminal complaints are formally withdrawn upon settlement.
                </p>
                </div>
              </section>

              {/* Section 77 */}
              <section id="car-loan-settlement-and-section-138-ni-act" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 77
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  77. Car Loan Settlement and Section 138 NI Act
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Offenses under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007 (for bounced e-NACH auto-debits) are <strong>fully compoundable offenses</strong> under Section 147 of the NI Act and Section 320 of the CrPC.
                </p>
                <p>
                  In <em>Damodar S. Prabhu v. Sayed Babalal H. (2010)</em> and <em>M/s Meters and Instruments Pvt. Ltd. v. Kanchan Mehta (2018)</em>, the Supreme Court ruled that Section 138 is essentially a civil debt recovery mechanism in criminal form. Once a compromise settlement is executed and the agreed amount is paid, the bank is legally obligated to file an application for compounding or withdrawal before the court, resulting in the immediate dismissal of the case and total acquittal of the borrower.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 10: SCENARIOS, RULES, FAQS & PROFESSIONAL SHIELD (78–84)     */}
              {/* =================================================================== */}

              {/* Section 78 */}
              <section id="common-car-loan-settlement-scenarios-and-solutions" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 78
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  78. Common Car Loan Settlement Scenarios and Solutions
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In automotive debt practice, vehicle loan distress typically falls into four real-world commercial scenarios, each requiring a tailored legal resolution strategy:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario A: The Laid-Off Professional Wanting to Keep the Family Car</span>
                    <p className="text-black font-normal"><strong>Situation:</strong> A software engineer facing corporate layoff defaults on a ₹7 Lakhs auto loan balance. The car is essential for family transport.<br /><strong>Solution:</strong> We present the layoff severance letter, audit the car&apos;s depreciated valuation, and negotiate a 45% principal haircut. The borrower settles for ₹3.8 Lakhs using severance savings, keeps the car, and receives Form 35.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario B: Vehicle Illegally Seized by Street Recovery Agents</span>
                    <p className="text-black font-normal"><strong>Situation:</strong> Recovery agents intercept a borrower&apos;s vehicle in traffic, take the keys by force, and move it to a private yard without prior notice.<br /><strong>Solution:</strong> We serve an urgent legal notice citing the Supreme Court&apos;s <em>Prakash Kaur</em> judgment and file a police complaint. The bank immediately halts auction, waives towing/yard fees, and sanctions an amicable OTS.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario C: Car Auctioned at a Throwaway Price with Heavy Deficiency Shortfall</span>
                    <p className="text-black font-normal"><strong>Situation:</strong> The bank auctions a ₹9 Lakhs car for ₹3.5 Lakhs and serves a legal notice demanding ₹5.5 Lakhs as residual deficiency balance.<br /><strong>Solution:</strong> We challenge improper valuation and procedural notice flaws, legally treating the deficiency as unsecured bad debt, settling the ₹5.5 Lakhs claim for ₹95,000.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario D: Commercial Taxi Fleet Facing Multiple Defaults</span>
                    <p className="text-black font-normal"><strong>Situation:</strong> A fleet operator with 5 cabs defaults due to driver strikes and fuel inflation, facing multiple arbitration suits.<br /><strong>Solution:</strong> We structure a consolidated fleet settlement, selling two unviable cars under tripartite agreements to settle debts on the remaining three cabs with full hypothecation release.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 79 */}
              <section id="dos-and-donts-during-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 79
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  79. Do&apos;s and Don&apos;ts During Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-emerald-50/50 border border-emerald-300 rounded-xl space-y-2">
                    <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      CRITICAL DO&apos;S
                    </h4>
                    <ul className="text-black space-y-1.5 list-disc pl-4 font-normal">
                      <li>Channel all communications through enrolled legal counsel via formal representation notices.</li>
                      <li>Maintain rigorous documentation of your financial distress (pink slips, medical bills, bank statements).</li>
                      <li>Demand an official written Settlement Sanction Letter issued on bank letterhead before paying.</li>
                      <li>Verify that the sanction letter explicitly mandates the delivery of RTO Form 35 and NDC.</li>
                      <li>Remit all payments strictly via direct RTGS/NEFT to your official auto loan account number.</li>
                    </ul>
                  </div>
                  <div className="p-3.5 bg-red-50/50 border border-red-300 rounded-xl space-y-2">
                    <h4 className="font-bold text-red-950 text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span>
                      DANGEROUS DON&apos;TS
                    </h4>
                    <ul className="text-black space-y-1.5 list-disc pl-4 font-normal">
                      <li>Never hand over car keys or sign blank vehicle surrender forms to recovery agents on the street.</li>
                      <li>Never pay cash or transfer funds into third-party personal accounts or recovery agent accounts.</li>
                      <li>Never pay token sums without written confirmation that they form part of a sanctioned OTS.</li>
                      <li>Never ignore statutory court summons under Section 138 NI Act or arbitration notices.</li>
                      <li>Never miss an agreed settlement tranche payment deadline, which automatically revokes the OTS.</li>
                    </ul>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 80 */}
              <section id="frequently-asked-questions-about-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 80
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  80. Frequently Asked Questions About Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">Can I settle my car loan and still keep my car?</p>
                    <p className="text-black font-normal">Yes. In a large majority of our car loan settlements, borrowers pay a negotiated discounted lump-sum equivalent to the vehicle&apos;s realistic auction value, keep the car, and receive RTO Form 35 to delete the bank hypothecation.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">Is it legal for recovery agents to seize my car from my workplace or the street?</p>
                    <p className="text-black font-normal">No. The Supreme Court in <em>ICICI Bank v. Prakash Kaur</em> ruled that banks cannot use muscle power or street force to seize vehicles. Repossession requires mandatory prior written notice and due civil process.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">What happens if the car was already auctioned and the money was not enough?</p>
                    <p className="text-black font-normal">The remaining shortfall is an unsecured deficiency balance. CredSettle negotiates deep waivers of 70% to 85% on this deficiency balance, closing the loan permanently with an official No Dues Certificate.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">How do I remove the bank name from my car Registration Certificate (RC)?</p>
                    <p className="text-black font-normal">After settlement payment, the bank delivers two signed copies of RTO Form 35 and an NDC. Submit these on parivahan.gov.in under Hypothecation Termination to receive a clean, unencumbered RC.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">Can the police arrest me for defaulting on my car loan EMIs?</p>
                    <p className="text-black font-normal">No. Vehicle loan default is strictly a civil breach of contract. Police officers have no legal power to arrest you for unpaid bank loans. Threatening police arrest is an offense under Section 351 BNS.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 81 */}
              <section id="professional-car-loan-settlement-assistance" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 81
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  81. Professional Car Loan Settlement Assistance
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Resolving defaulted auto loans requires specialized institutional advocacy at the intersection of banking regulations, motor vehicles law, and debt recovery jurisprudence. When facing aggressive recovery apparatuses and repossession squads, individual borrowers lack the procedural leverage to negotiate fair terms on their own.
                </p>
                <p>
                  CredSettle deploys senior banking advocates who level the playing field. We immediately halt unlawful recovery harassment under the Advocates Act, 1961, audit your loan ledger to eliminate illegal penal charges, and negotiate directly with the bank&apos;s Zonal Stressed Assets division to secure maximum principal haircuts while safeguarding your vehicle title.
                </p>
                </div>
              </section>

              {/* Section 82 */}
              <section id="why-choose-professional-car-loan-settlement-services" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 82
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  82. Why Choose Professional Car Loan Settlement Services?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Over 8,500+ borrowers and vehicle owners across India have entrusted their debt resolution to CredSettle for five defining institutional capabilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Senior Banking Advocates</span>
                    <p className="text-black font-normal">Dedicated legal representation under the Advocates Act, 1961 providing an immediate shield against coercive repossession.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Maximum Principal Waivers</span>
                    <p className="text-black font-normal">Proven track record achieving 40% to 60% total debt reduction across public banks, private lenders, and NBFCs.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Court &amp; Cheque Defense</span>
                    <p className="text-black font-normal">Comprehensive defense across Section 138 NI Act cheque cases, Section 25 PSSA, and ex-parte arbitration claims.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Guaranteed Form 35 Delivery</span>
                    <p className="text-black font-normal">Strict contractual covenants guaranteeing the delivery of RTO Form 35 and NDC within 30 days under RBI circulars.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Deficiency Balance Settlement</span>
                    <p className="text-black font-normal">Deep 70% to 85% waivers on post-auction residual debt, stopping lawsuits and wage attachment.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">100% Confidentiality</span>
                    <p className="text-black font-normal">Strict enterprise data security protecting your personal reputation, employer relations, and family dignity.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 83 */}
              <section id="car-loan-settlement-complete-step-by-step-guide" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 83
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  83. Car Loan Settlement – Complete Step-by-Step Guide
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  To achieve an optimal vehicle settlement that resolves your debt while safeguarding your rights, follow this comprehensive 5-step operational protocol:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 1: Comprehensive Loan &amp; Asset Valuation Audit</span>
                    <p className="text-black font-normal">Obtain an official Statement of Account to calculate total unamortized principal vs accrued penal interest, and establish the car&apos;s current used market valuation.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 2: Formal Legal Representation Notice</span>
                    <p className="text-black font-normal">Serve notice under the Advocates Act, 1961 directing all communication to your legal desk, immediately halting unauthorized recovery calls and street seizure attempts.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 3: Compilation of the Financial Hardship Docket</span>
                    <p className="text-black font-normal">Document income contraction through pink slips, bank statements, or medical invoices to substantiate that default was non-wilful and caused by genuine economic distress.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 4: Zonal Committee Compromise Advocacy</span>
                    <p className="text-black font-normal">Submit the formal OTS proposal to the bank&apos;s executive Stressed Asset division, negotiating maximum principal haircuts and securing a written Compromise Sanction Letter.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 5: Direct Remittance, Form 35 &amp; RTO Deletion</span>
                    <p className="text-black font-normal">Remit the sanctioned settlement payment directly to the bank via RTGS, receive the No Dues Certificate and RTO Form 35, and complete hypothecation removal on the Vahan portal.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 84 */}
              <section id="conclusion-understanding-car-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 84
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  84. Conclusion – Understanding Car Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In modern financial life, unexpected economic distress is an acknowledged reality, not a moral failure. When sudden career disruptions, business contractions, or health crises make servicing vehicle loan EMIs impossible, draining family emergency reserves to service compounding bank interest on a depreciating car is neither necessary nor financially sound.
                </p>
                <p>
                  Car loan settlement under the Reserve Bank of India&apos;s compromise framework provides an honorable, legally sanctioned, and definitive exit. It allows you to legally write off unmanageable debt, shield your family from recovery agent intimidation, prevent street vehicle seizure, and secure RTO Form 35 to liberate your vehicle title.
                </p>
                <p>
                  With seasoned legal representation from CredSettle, you do not have to face aggressive recovery agencies or institutional bank committees alone. Take decisive control of your auto loan today, assert your constitutional rights, and build a clean foundation for your family&apos;s financial future.
                </p>
                <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-xl text-white text-center space-y-2 mt-4 shadow-md">
                  <h4 className="text-base font-bold text-white">Resolve Your Car Loan Debt Today</h4>
                  <p className="text-xs text-blue-200 max-w-xl mx-auto">
                    Speak directly with a senior banking litigation advocate. We audit your auto loan, halt recovery harassment and repossession threats within 24 hours, and negotiate maximum RBI-compliant OTS waivers.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs py-2.5 px-6 rounded-lg transition-all shadow"
                    >
                      Book Free Advocate Case Consultation
                    </Link>
                  </div>
                </div>
                </div>
              </section>


              {/* Bank Partners Grid */}
              <div className="my-8 pt-6 border-t border-gray-200">
                <BanksGrid serviceType="car-loan-settlement" servicePath="/services/car-loan-settlement" />
              </div>

              {/* Conclusion Callout Box Matching loan-settlement */}
              <div className="border-t border-gray-200 pt-6 sm:pt-8 space-y-4">
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-xl font-bold">Defend Your Rights &amp; Settle Your Car Loan Today</h3>
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                    Facing vehicle repossession threats or struggling with an unaffordable auto EMI? Speak directly with CredSettle’s banking defense advocates to negotiate a structured One-Time Settlement, halt harassment, and obtain RTO Form 35.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto inline-block text-center bg-white text-blue-950 font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-xs sm:text-sm active:scale-98"
                    >
                      Book a Free Confidential Auto Debt Evaluation
                    </Link>
                  </div>
                </div>
              </div>

            </article>
          </div>

          {/* ===================================================================== */}
          {/* RIGHT COLUMN: STICKY CONVERSION & REPOSSESSION DEFENSE CARD (15%)    */}
          {/* ===================================================================== */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-20 space-y-4">
            <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-blue-200 text-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center text-sm mb-2">
                🛡️
              </span>
              <h4 className="font-bold text-xs text-black mb-1">Stop Car Seizure</h4>
              <p className="text-[10px] text-black mb-3 leading-tight">
                Supreme Court rulings prohibit forcible vehicle towing without a civil court warrant.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-blue-600 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-[11px]"
              >
                Protect My Vehicle
              </Link>
              <div className="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-black space-y-1 text-left">
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% Confidential</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> Supreme Court Precedent</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> RTO Hypothecation NOC</p>
              </div>
            </div>

            {/* Diagnostic Calculator Quick Jump */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-black">
              <span className="font-bold text-black block text-[11px]">Auto OTS Calculator</span>
              <p className="text-[10px] text-black leading-tight">Estimate settlement haircut &amp; deficiency balance waiver.</p>
              <a href="#car-loan-ots-calculator" className="text-[10px] text-blue-600 font-semibold block pt-1 hover:underline">Calculate Waiver ↓</a>
            </div>

            {/* Official Portals */}
            <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200 text-blue-950 text-xs space-y-1.5">
              <strong className="block text-[11px] font-bold text-blue-900">Official Complaint Links</strong>
              <a
                href="https://cms.rbi.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] text-blue-700 hover:underline"
              >
                🔗 RBI CMS Portal (cms.rbi.org.in)
              </a>
              <a
                href="https://parivahan.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] text-blue-700 hover:underline"
              >
                🔗 Parivahan RTO Portal
              </a>
            </div>
          </aside>

        </div>
      </div>

      {/* Floating Mobile Action Pill (Visible on scroll) */}
      <div className={`fixed bottom-4 right-3 z-40 lg:hidden flex items-center gap-2 transition-all duration-300 ${
        showFloatingNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        <button
          onClick={() => setIsMobileTocOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-full shadow-xl flex items-center gap-1.5 active:scale-95 transition-transform"
          aria-label="Open Table of Contents"
        >
          <span>📑</span>
          <span>Chapters</span>
          <span className="bg-blue-800 text-[10px] px-1.5 py-0.5 rounded-full">84</span>
        </button>

        <a
          href="#car-loan-ots-calculator"
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold p-2.5 rounded-full shadow-xl active:scale-95 transition-transform flex items-center justify-center w-10 h-10"
          aria-label="Jump to Calculator"
        >
          <span>⚡</span>
        </a>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white/90 hover:bg-white text-black border border-slate-200 text-xs font-bold p-2.5 rounded-full shadow-md active:scale-95 transition-transform flex items-center justify-center w-10 h-10"
          aria-label="Scroll to Top"
        >
          <span>↑</span>
        </button>
      </div>

      {/* Footer */}
      <div className="relative z-20 mt-12 sm:mt-16 bg-white">
        <Footer hideFunnel />
      </div>
    </div>
  );
}
