'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import BanksGrid from '@/components/BanksGrid';

export default function BusinessLoanSettlementPageClient() {
  const [activeId, setActiveId] = useState<string>('intro-business-loan-settlement');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  const [showFloatingNav, setShowFloatingNav] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [tocSearch, setTocSearch] = useState<string>('');
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Interactive Business Loan Settlement / OTS Calculator State
  const [calcPrincipal, setCalcPrincipal] = useState<number>(2500000);
  const [calcOverdueMonths, setCalcOverdueMonths] = useState<number>(6);
  const [calcBusinessType, setCalcBusinessType] = useState<string>('msme_unsecured');
  const [calcLegalStatus, setCalcLegalStatus] = useState<string>('demand_notice');

  // Interactive OTS Calculation Logic
  const otsAnalysis = useMemo(() => {
    let waiverPct = 50;
    let strategy = 'Pre-litigation bilateral compromise under RBI Prudential Framework.';
    let legalShield = 'Section 138 NI Act & Section 25 PSSA defense via counsel representation.';

    if (calcBusinessType === 'proprietorship_unsecured') {
      waiverPct = calcOverdueMonths >= 12 ? 65 : calcOverdueMonths >= 6 ? 55 : 45;
      strategy = 'Personal balance sheet segregation and cash-flow insolvency proof.';
      legalShield = 'Protection of personal assets from arbitrary seizure; moratorium via legal reply.';
    } else if (calcBusinessType === 'msme_unsecured') {
      waiverPct = calcOverdueMonths >= 12 ? 70 : calcOverdueMonths >= 6 ? 60 : 50;
      strategy = 'Submission of MSME restructuring package under RBI MSME Framework.';
      legalShield = 'Protection under MSMED Act 2006; stay against coercive third-party collection.';
    } else if (calcBusinessType === 'pvt_ltd_unsecured') {
      waiverPct = calcOverdueMonths >= 12 ? 65 : calcOverdueMonths >= 6 ? 55 : 45;
      strategy = 'Corporate debt compromise without corporate insolvency (IBC) initiation.';
      legalShield = 'Limitation of director personal liability where no personal guarantee is invoked.';
    } else if (calcBusinessType === 'secured_business_loan') {
      waiverPct = calcOverdueMonths >= 12 ? 40 : calcOverdueMonths >= 6 ? 30 : 20;
      strategy = 'Collateral-linked OTS; negotiation based on distress sale valuation vs real market value.';
      legalShield = 'SARFAESI Section 13(2) statutory objection and Section 13(4) DRT Securitisation Application.';
    }

    if (calcLegalStatus === 'sarfaesi_notice') {
      waiverPct = Math.max(waiverPct - 10, 20);
      legalShield = 'Urgent DRT Caveat & statutory representation under Section 13(3A) SARFAESI Act.';
    } else if (calcLegalStatus === 'sec_138_cheque') {
      legalShield = 'Criminal compounding under Section 147 NI Act upon execution of settlement agreement.';
    } else if (calcLegalStatus === 'arbitration') {
      legalShield = 'Section 9 interim relief / Section 16 objection before the Arbitral Tribunal.';
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
  }, [calcPrincipal, calcOverdueMonths, calcBusinessType, calcLegalStatus]);

  // Master 10-Module Navigation Structure (84 Sections)
  const navModules = useMemo(() => [
    {
      moduleTitle: "Module 1: Foundations & Core Concepts",
      links: [
        { id: "intro-business-loan-settlement", label: "1. Introduction to Business Loan Settlement" },
        { id: "what-is-business-loan-settlement", label: "2. What Is Business Loan Settlement?" },
        { id: "easy-meaning-business-loan-settlement", label: "3. Easy Meaning of Settlement" },
        { id: "how-does-business-loan-settlement-work", label: "4. How Does Settlement Work?" },
        { id: "how-to-settle-business-loan", label: "5. How to Settle a Business Loan?" },
        { id: "settlement-process-step-by-step", label: "6. Step-by-Step Settlement Process" },
        { id: "when-to-consider-business-loan-settlement", label: "7. When to Consider Settlement" },
        { id: "who-is-eligible-for-business-loan-settlement", label: "8. Who Is Eligible?" },
        { id: "which-business-loans-can-be-settled", label: "9. Which Business Loans Can Be Settled?" },
        { id: "secured-vs-unsecured-business-loans", label: "10. Secured vs Unsecured Settlement" },
      ]
    },
    {
      moduleTitle: "Module 2: Business Entities & Structures",
      links: [
        { id: "settlement-for-msmes", label: "11. Settlement for MSMEs" },
        { id: "settlement-for-small-businesses", label: "12. Settlement for Small Businesses" },
        { id: "settlement-for-startups", label: "13. Settlement for Startups" },
        { id: "settlement-for-self-employed", label: "14. Self-Employed Borrowers" },
        { id: "settlement-for-sole-proprietorships", label: "15. Sole Proprietorships" },
        { id: "settlement-for-partnerships", label: "16. Partnership Firms" },
        { id: "settlement-for-pvt-ltd-companies", label: "17. Private Limited Companies" },
        { id: "settlement-for-directors-promoters", label: "18. Directors & Promoters" },
        { id: "settlement-for-guarantors-coborrowers", label: "19. Guarantors & Co-Borrowers" },
      ]
    },
    {
      moduleTitle: "Module 3: Calculations, Waivers & Comparisons",
      links: [
        { id: "how-much-business-loan-settled-for", label: "20. How Much Can Be Settled For?" },
        { id: "settlement-amount-calculation-examples", label: "21. Amount Calculation & Examples" },
        { id: "factors-affecting-settlement-amount", label: "22. Factors Affecting Settlement Amount" },
        { id: "settlement-vs-full-repayment", label: "23. Settlement vs Full Repayment" },
        { id: "settlement-vs-loan-restructuring", label: "24. Settlement vs Restructuring" },
        { id: "settlement-vs-one-time-settlement-ots", label: "25. Settlement vs One-Time Settlement (OTS)" },
        { id: "settlement-vs-loan-waiver", label: "26. Settlement vs Loan Waiver" },
        { id: "advantages-of-business-loan-settlement", label: "27. Advantages of Settlement" },
        { id: "disadvantages-risks-business-loan-settlement", label: "28. Disadvantages & Risks" },
      ]
    },
    {
      moduleTitle: "Module 4: CIBIL, Credit Bureau & Credit Rebuilding",
      links: [
        { id: "impact-on-cibil-score", label: "29. Impact on CIBIL Score" },
        { id: "impact-on-business-credit-score", label: "30. Impact on Business Credit Score" },
        { id: "impact-on-company-director-profiles", label: "31. Company & Director Credit Profiles" },
        { id: "credit-bureau-reporting-commercial", label: "32. Credit Bureau Reporting" },
        { id: "how-long-settlement-affects-credit", label: "33. How Long It Affects Credit" },
        { id: "how-to-rebuild-credit-after-settlement", label: "34. How to Rebuild Credit" },
      ]
    },
    {
      moduleTitle: "Module 5: RBI Guidelines, Legal Defenses & Harassment",
      links: [
        { id: "rbi-guidelines-business-loan-settlement", label: "35. RBI Guidelines for Settlement" },
        { id: "rbi-guidelines-one-time-settlement-ots", label: "36. RBI Guidelines for OTS" },
        { id: "rbi-rules-recovery-agents", label: "37. RBI Rules for Recovery Agents" },
        { id: "business-loan-default-consequences", label: "38. Default: What Happens If You Stop Paying?" },
        { id: "legal-consequences-business-loan-default", label: "39. Legal Consequences of Default" },
        { id: "can-bank-take-legal-action", label: "40. Can Bank Take Legal Action?" },
        { id: "settlement-after-legal-notice", label: "41. Settlement After Legal Notice" },
        { id: "settlement-during-arbitration-court", label: "42. Settlement During Arbitration/Court" },
        { id: "business-loan-ots-calculator", label: "⚡ Interactive OTS Calculator" },
        { id: "settlement-and-recovery-harassment", label: "43. Settlement & Recovery Harassment" },
        { id: "borrowers-rights-against-harassment", label: "44. Borrower Rights Against Harassment" },
      ]
    },
    {
      moduleTitle: "Module 6: Negotiation Tactics & Financial Hardship",
      links: [
        { id: "how-to-negotiate-settlement", label: "45. How to Negotiate With Bank/NBFC" },
        { id: "how-to-make-settlement-proposal", label: "46. How to Make an OTS Proposal" },
        { id: "documents-required-business-settlement", label: "47. Documents Required" },
        { id: "financial-hardship-justification", label: "48. Financial Hardship Justification" },
        { id: "settlement-loss-making-businesses", label: "49. Loss-Making Businesses" },
        { id: "settlement-after-business-closure", label: "50. After Business Closure" },
        { id: "settlement-after-business-failure", label: "51. After Business Failure" },
        { id: "settlement-due-to-market-conditions", label: "52. Adverse Market Conditions" },
      ]
    },
    {
      moduleTitle: "Module 7: Loan Categories & Institutional Policies",
      links: [
        { id: "settlement-of-unsecured-business-loans", label: "53. Unsecured Business Loans" },
        { id: "settlement-of-secured-business-loans", label: "54. Secured Business Loans" },
        { id: "settlement-of-working-capital-loans", label: "55. Working Capital Facilities" },
        { id: "settlement-of-term-loans", label: "56. Commercial Term Loans" },
        { id: "settlement-of-overdraft-od-limits", label: "57. Overdraft (OD) & Cash Credit (CC)" },
        { id: "settlement-of-machinery-equipment-loans", label: "58. Machinery & Equipment Loans" },
        { id: "settlement-of-mudra-loans", label: "59. MUDRA Loan Settlement" },
        { id: "settlement-of-cgtsme-covered-loans", label: "60. CGTMSE Covered Loans" },
      ]
    },
    {
      moduleTitle: "Module 8: Insolvency, SARFAESI & Institutional Lenders",
      links: [
        { id: "settlement-with-public-sector-banks", label: "61. Public Sector Banks (SBI/PNB/BOB)" },
        { id: "settlement-with-private-banks", label: "62. Private Banks (HDFC/ICICI/Axis)" },
        { id: "settlement-with-nbfcs-fintech-lenders", label: "63. NBFCs & Fintech Lenders" },
        { id: "settlement-when-loan-assigned-to-arc", label: "64. Asset Reconstruction Companies (ARCs)" },
        { id: "business-loan-settlement-under-sarfaesi-act", label: "65. SARFAESI Act Defenses (13(2)/13(4))" },
        { id: "business-loan-settlement-in-drt", label: "66. Debt Recovery Tribunal (DRT)" },
        { id: "business-loan-settlement-vs-ibc-nclt", label: "67. Settlement vs IBC Insolvency (NCLT)" },
        { id: "business-loan-settlement-in-lok-adalat", label: "68. National Lok Adalat Settlements" },
        { id: "settlement-through-mediation", label: "69. Commercial Mediation" },
        { id: "tax-implications-business-loan-settlement", label: "70. Tax Implications & Section 41(1)" },
      ]
    },
    {
      moduleTitle: "Module 9: Approvals, Rejections & Authentic Documents",
      links: [
        { id: "can-bank-reject-business-settlement", label: "71. Can Bank Reject Settlement?" },
        { id: "what-to-do-if-bank-rejects-settlement", label: "72. What to Do If Rejected" },
        { id: "how-to-reopen-rejected-settlement", label: "73. Reopening Rejected OTS Proposals" },
        { id: "role-of-settlement-committee-in-banks", label: "74. Bank Settlement Committee Role" },
        { id: "settlement-sanction-letter-verification", label: "75. Verifying Sanction Letters" },
        { id: "no-dues-certificate-ndc-business-loans", label: "76. No Dues Certificate (NDC)" },
        { id: "release-of-original-property-documents", label: "77. Release of Collateral Title Deeds" },
        { id: "timeline-for-business-loan-settlement", label: "78. Settlement Timeline & Milestones" },
        { id: "common-mistakes-to-avoid-business-settlement", label: "79. Traps to Avoid" },
        { id: "how-to-avoid-business-loan-settlement-scams", label: "80. Avoiding Scams" },
      ]
    },
    {
      moduleTitle: "Module 10: Master Action Plan & Defense Guide",
      links: [
        { id: "professional-business-settlement-assistance", label: "81. Professional Settlement Assistance" },
        { id: "why-choose-credsettle-business-loans", label: "82. Why Choose CredSettle?" },
        { id: "complete-step-by-step-guide", label: "83. Complete Step-by-Step Guide" },
        { id: "conclusion-understanding-business-settlement", label: "84. Conclusion: Know Your Rights" },
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

      {/* Hero Section - Matching /loan-settlement & /stop-recovery-agent-harassment Style */}
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
            RBI Compromise Framework &amp; Commercial Debt Shield 2026
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words">
            Business Loan Settlement in India<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">
              The Complete Legal, MSME &amp; OTS Master Guide
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            Resolve commercial defaults, working capital limits, term loans, and overdrafts under RBI compromise guidelines. Protect directors, personal guarantors, and mortgaged collateral with senior banking advocates.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md active:scale-98 text-center"
            >
              Get Free Commercial Debt Review
            </Link>
            <a
              href="#business-loan-ots-calculator"
              className="px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm text-white bg-blue-600/40 hover:bg-blue-600/60 border border-blue-400/40 transition-all backdrop-blur-sm active:scale-98 text-center"
            >
              Calculate Settlement Estimate ⚡
            </a>
          </div>
          <div className="mt-3.5 sm:mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-blue-200/80">
            <span>✓ RBI Circular Compliant</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ SARFAESI &amp; DRT Shield</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Personal Guarantee Protection</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ 100% Confidential</span>
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
              { name: 'Business Loan Settlement', url: '/services/business-loan-settlement' }
            ]}
          />
        </div>
      </div>

      {/* Trust & E-E-A-T Signal Banner */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-3 sm:px-4 border-b border-slate-800 text-[11px] sm:text-xs md:text-sm">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-600 text-white font-semibold px-2 py-0.5 rounded text-[10px] sm:text-xs">COMMERCIAL BANKING ADVISORY</span>
            <span className="leading-tight">Reviewed by Senior Banking Law Advocates &amp; Debt Resolution Specialists</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400 text-[10px] sm:text-xs">
            <span>Last Updated: October 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>RBI Master Direction DOR.STR.REC.20/21.04.048/2023-24</span>
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
              href="#business-loan-ots-calculator"
              className="flex-shrink-0 bg-slate-900 hover:bg-slate-800 text-white px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center gap-1 shadow-xs"
            >
              <span>⚡</span>
              <span className="hidden sm:inline">Calculator</span>
            </a>

            <Link
              href="/contact"
              className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-colors shadow-xs"
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
                    <p className="text-[10px] text-slate-300">84 Master Sections • Business Loan Settlement</p>
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
                    Consult Corporate Banking Advocate
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
                <span>🏢</span>
                <h4 className="font-bold text-xs text-white">Commercial Debt?</h4>
              </div>
              <p className="text-[10px] text-blue-200 mb-2 leading-snug">
                Senior advocates safeguard directors, guarantors, and mortgaged collateral from coercive SARFAESI actions.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-blue-500 hover:bg-blue-400 text-white font-bold text-[11px] py-1.5 px-2 rounded-lg transition-colors shadow"
              >
                Consult Advocate
              </Link>
            </div>
          </aside>

          {/* ===================================================================== */}
          {/* MIDDLE COLUMN: MASTER 84-SECTION EDITORIAL CONTENT (70% Width)        */}
          {/* ===================================================================== */}
          <div className="lg:w-[70%] flex-1 min-w-0">
            <article className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-sm border border-gray-200/90 space-y-8 sm:space-y-12 overflow-hidden text-black">


              {/* =================================================================== */}
              {/* MODULE 1: FOUNDATIONS & CORE CONCEPTS (Sections 1–10)               */}
              {/* =================================================================== */}

              {/* Section 1 */}
              <section id="intro-business-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 1
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  1. Introduction to Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Running a commercial enterprise in India entails significant market volatility, supply-chain vulnerabilities, delayed trade receivables, regulatory transitions, and unpredictable economic headwinds. When unexpected revenue contractions or client insolvencies impair a company&apos;s cash flow, meeting regular monthly loan servicing obligations on term loans, machinery credits, working capital limits, or overdrafts becomes mathematically unviable.
                </p>
                <p>
                  Faced with ballooning compound interest, punitive penal charges, and aggressive recovery actions, business promoters often feel trapped between company survival and catastrophic personal bankruptcy. Business loan settlement provides a structured, legally sanctioned exit mechanism. Under statutory Reserve Bank of India (RBI) prudential norms, commercial banks and Non-Banking Financial Companies (NBFCs) are empowered to negotiate compromise settlements that extinguish corporate debt for a mutually determined lump-sum payment.
                </p>
                <p>
                  Settling a commercial loan is not an evasion of liability; it is an established commercial resolution protocol. It enables viable entrepreneurs to legally discharge unserviceable liabilities, halt coercive litigation, prevent asset distress sales, and preserve operational momentum to rebuild enterprise value.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl text-xs text-blue-950 space-y-1">
                  <p className="font-bold text-blue-900">Key Commercial Reality:</p>
                  <p className="font-medium text-black">
                    A commercial loan default is fundamentally a civil contract breach governed by the Indian Contract Act, 1872. Indian financial institutions maintain dedicated Non-Performing Asset (NPA) loss provisioning reserves specifically mandated by the RBI to absorb negotiated compromise haircuts for bona fide stressed enterprises.
                  </p>
                </div>
                </div>
              </section>

              {/* Interactive Assessment Funnel - Blended inside Middle Container Above Chapter 2 */}
              <div className="not-prose my-6 sm:my-8 p-3 sm:p-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-slate-50 rounded-2xl border border-blue-100 shadow-xs">
                <InteractiveLeadFunnel className="!bg-transparent !p-0 !py-0 !px-0" />
              </div>

              {/* Section 2 */}
              <section id="what-is-business-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 2
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  2. What Is Business Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Business loan settlement—formally executed within the Indian banking sector as a One-Time Settlement (OTS) or Compromise Settlement—is a binding tripartite or bipartite legal agreement entered into between a borrower (proprietorship, partnership, LLP, or private limited company) and a lending bank or NBFC. Under this contractual resolution, the lender agrees to accept a significantly discounted lump-sum payment or phased tranches as full, final, and irreversible discharge of all outstanding claims.
                </p>
                <p>
                  Unlike loan restructuring—which merely reschedules loan tenure, reduces interest rates, or adds a temporary moratorium while keeping the principal obligation intact—a settlement results in the immediate extinguishment of the debt ledger. In exchange for the agreed settlement remittance, the financial institution waives 100% of accumulated penal interest, cancels accrued compound interest, absorbs a negotiated haircut on the core principal balance, withdraws ongoing legal petitions, and issues an irrevocable No Dues Certificate (NDC).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Irrevocable Legal Discharge
                    </h4>
                    <p className="text-black font-normal">
                      The lender issues a formal Settlement Sanction Letter followed by an authenticated No Dues Certificate (NDC), legally barring all future recovery attempts across all legal forums.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Collateral &amp; Guarantee Release
                    </h4>
                    <p className="text-black font-normal">
                      Pledged title deeds, commercial machinery charges registered with ROC/CERSAI, and personal guarantees of directors and third parties are formally vacated and returned.
                    </p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="easy-meaning-business-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 3
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  3. Easy Meaning of Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In straightforward commercial terms, business loan settlement means closing your commercial debt for significantly less than what the bank claims on paper. For instance, suppose an engineering MSME availed an unsecured business loan of ₹50 Lakhs. Following a major client default, the company missed EMIs for 10 months. With compound interest, penal charges, and legal fees, the bank&apos;s ledger statement reflects an inflated outstanding balance of ₹76 Lakhs.
                </p>
                <p>
                  Through formal settlement representation, the enterprise demonstrates genuine commercial failure and audited lack of liquidity. The bank agrees to close the entire account permanently for ₹22 Lakhs to ₹26 Lakhs. Once paid, the ₹50+ Lakhs difference is permanently written off by the bank as an accounting loss, the loan is marked closed/settled with zero dues, and the promoter is liberated from endless collection calls and litigation threats.
                </p>
                <p>
                  Lenders agree to these significant concessions because protracted recovery litigation in Debt Recovery Tribunals (DRT) or insolvency proceedings under the IBC can consume 5 to 8 years, cost millions in advocate fees, and often result in near-zero recovery if the business has no liquid assets. A certain cash recovery today is financially superior to an uncertain court decree tomorrow.
                </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="how-does-business-loan-settlement-work" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 4
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  4. How Does Business Loan Settlement Work?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Business loan settlement functions through four interconnected stages across the creditor&apos;s credit risk, legal recovery, and executive committee infrastructure:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-black font-normal">
                  <li><strong>NPA Transition &amp; Mandatory Provisioning:</strong> Once commercial installments remain unpaid for 90 days, the loan transitions from Special Mention Account (SMA-2) into a Non-Performing Asset (NPA). Under RBI prudential guidelines, the lender must provision 15% to 100% against its capital reserves, heavily incentivizing early recovery.</li>
                  <li><strong>Hardship Docket &amp; Net Worth Analysis:</strong> The borrower, represented by banking advocates, submits an exhaustive Commercial Hardship Docket containing audited financial statements, GST return cancellations or turnover dips, inventory valuations, and debtor aging reports proving inability to pay regular dues.</li>
                  <li><strong>Settlement Advisory Committee Deliberation:</strong> The proposal is placed before the bank&apos;s internal Compromise Settlement Committee (consisting of Assistant General Managers, Chief Risk Officers, and Legal Heads) which calculates the Net Present Value (NPV) of immediate recovery versus legal enforcement costs.</li>
                  <li><strong>Sanction Issuance &amp; Judicial Consent Terms:</strong> Upon approval, the bank issues a legally binding Settlement Sanction Letter. If cases are pending before DRT, civil courts, or under Section 138 of the NI Act, formal joint compromise terms are filed to ensure judicial closure.</li>
                </ol>
                </div>
              </section>

              {/* Section 5 */}
              <section id="how-to-settle-business-loan" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 5
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  5. How to Settle a Business Loan?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Settling a commercial loan requires strategic foresight, disciplined documentation, and assertive legal representation. Unprepared borrowers who walk into bank branches asking for discounts are routinely dismissed, redirected to junior recovery staff, or coerced into signing unsustainable payment commitments that reset the statute of limitations.
                </p>
                <p>
                  The correct roadmap begins with halting informal oral exchanges with recovery agents and serving a formal legal representation notice. This channels all future correspondence through authorized legal counsel. Next, conduct an exhaustive forensic audit of the loan ledger to identify unlawful penal compounding, uncredited subsidies, or misapplied interest rates. Finally, formulate a data-backed OTS proposal demonstrating that the proposed settlement sum represents the maximum recoverable value under existing market constraints.
                </p>
                <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 text-xs space-y-2 text-black">
                  <h4 className="font-bold text-black text-sm">Strategic Rules for Commercial Borrowers:</h4>
                  <ul className="list-disc pl-4 space-y-1 font-normal">
                    <li>Never submit an OTS request without verifiable evidence of financial insolvency or business distress.</li>
                    <li>Always insist on an official written Compromise Sanction Letter issued under the signature of an authorized Scale-IV/V officer or Zonal Committee head.</li>
                    <li>Never pay token sums or post-dated cheques without written confirmation that they form part of a sanctioned OTS.</li>
                  </ul>
                </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="settlement-process-step-by-step" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 6
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  6. Business Loan Settlement Process – Step by Step
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A professional business loan settlement follows a rigorous 6-phase lifecycle that typically spans 4 to 12 weeks, ensuring full legal immunity and complete document retrieval:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 1: Commercial Debt &amp; Legal Audit (Days 1–7)</span>
                    <p className="text-black font-normal">Consolidation of sanction letters, mortgage deeds, hypothecation agreements, personal guarantees, and current statements of account across all lending institutions.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 2: Legal Representation Notice &amp; Protection (Days 8–14)</span>
                    <p className="text-black font-normal">Advocates serve formal representation notices under the Advocates Act 1961, directing lenders to cease harassment and halt coercive recovery at commercial premises.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 3: Hardship Docket &amp; Formal OTS Filing (Days 15–25)</span>
                    <p className="text-black font-normal">Submission of a comprehensive OTS proposal backed by P&amp;L accounts, GST cancellation filings, asset valuation certificates, and verifiable business closure affidavits.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 4: High-Level Zonal Committee Negotiation (Days 26–45)</span>
                    <p className="text-black font-normal">Direct advocacy-led negotiations with the bank&apos;s Stressed Asset Management Branch (SAMB) to eliminate penal charges and maximize principal haircut percentages.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 5: Sanction Letter Vetting &amp; Execution (Days 46–60)</span>
                    <p className="text-black font-normal">Vetting the bank&apos;s OTS Sanction Letter to ensure explicit guarantee discharge covenants, zero-claim waivers, and realistic tranche timelines before disbursing funds.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 6: NDC Receipt, Charge Satisfaction &amp; CIBIL Update (Days 61–90)</span>
                    <p className="text-black font-normal">Securing the stamped No Dues Certificate, filing Form CHG-4 with the Registrar of Companies (ROC) to satisfy charges, and retrieving original title deeds within 30 days under RBI directives.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="when-to-consider-business-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 7
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  7. When Should You Consider Business Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Settlement is a surgical financial remedy indicated when continuing to service standard debt becomes counterproductive to business survival. You should seriously consider an OTS when debt servicing costs consistently exceed total operating profit, forcing the company into a debt trap of borrowing fresh high-interest funds to pay existing EMIs.
                </p>
                <p>
                  Critical indicators include: (1) Total operational shutdown or surrender of commercial licenses, (2) Substantial structural loss of key clients or export orders resulting in permanent revenue contraction, (3) Receipt of SARFAESI Section 13(2) demand notices or Section 138 NI Act summons, (4) Inability of the enterprise to generate positive free cash flow for over two consecutive fiscal quarters, and (5) Severe threat of personal asset attachment against directors and family guarantors.
                </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="who-is-eligible-for-business-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 8
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  8. Who Is Eligible for Business Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under the RBI Framework for Compromise Settlements and Technical Write-offs (Circular dated June 8, 2023), all regulated commercial banks, cooperative banks, and NBFCs must maintain board-approved policies governing compromise settlements for distressed commercial borrowers.
                </p>
                <p>
                  To be eligible for a commercial OTS, an enterprise must demonstrate that its default is non-wilful—stemming from bona fide economic, operational, or market hardship rather than fraudulent diversion or siphoning of borrowed capital. Eligible entities include registered MSMEs, small trading firms, proprietorship concerns, partnership firms, LLPs, and private limited companies categorized as Sub-Standard, Doubtful, or Loss NPAs.
                </p>
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950">
                  <strong>Important Regulatory Safeguard:</strong> Borrowers categorized as Wilful Defaulters or Fraud accounts under RBI circulars are subject to specialized committee review and board-level reporting, but are still eligible for compromise settlements without prejudice to ongoing criminal proceedings, ensuring recovery of public funds.
                </div>
                </div>
              </section>

              {/* Section 9 */}
              <section id="which-business-loans-can-be-settled" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 9
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  9. Which Business Loans Can Be Settled?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Virtually all forms of fund-based and non-fund-based commercial credit facilities extended by scheduled commercial banks, regional rural banks, NBFCs, and fintech platforms can be legally resolved through an OTS:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Unsecured Business Loans</span>
                    <p className="text-black font-normal">Collateral-free commercial term loans, fintech revenue advances, and merchant cash advances.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Working Capital &amp; Cash Credit (CC)</span>
                    <p className="text-black font-normal">Overdrawn cash credit limits, working capital demand loans (WCDL), and irregular overdraft accounts.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Machinery &amp; Equipment Loans</span>
                    <p className="text-black font-normal">Asset-backed commercial loans where hypothecated equipment has suffered severe depreciation.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Commercial Property Loans (LAP)</span>
                    <p className="text-black font-normal">Mortgage-backed loans against industrial sheds, warehouses, or commercial offices facing SARFAESI action.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Trade Finance &amp; Invoice Discounting</span>
                    <p className="text-black font-normal">Bill discounting facilities, letters of credit (LC) devolutions, and invoked bank guarantees.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Government Guaranteed Credit</span>
                    <p className="text-black font-normal">Stressed MSME facilities under CGTMSE and Emergency Credit Line Guarantee Scheme (ECLGS).</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 10 */}
              <section id="secured-vs-unsecured-business-loans" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 10
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  10. Secured vs Unsecured Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The strategic dynamics of business loan settlement vary fundamentally depending on whether the underlying debt is secured by tangible immovable collateral or extended on an unsecured basis:
                </p>
                <div className="overflow-x-auto text-xs">
                  <table className="w-full border-collapse border border-gray-200 rounded-lg text-left">
                    <thead>
                      <tr className="bg-slate-100 text-black font-bold">
                        <th className="p-2.5 border border-gray-200">Parameter</th>
                        <th className="p-2.5 border border-gray-200">Unsecured Business Loan</th>
                        <th className="p-2.5 border border-gray-200">Secured Business Loan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-black font-normal">
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Collateral at Risk</td>
                        <td className="p-2.5 border border-gray-200">None (No hypothecated immovable asset)</td>
                        <td className="p-2.5 border border-gray-200">Commercial/Residential Real Estate or Factory</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Lender Legal Weapon</td>
                        <td className="p-2.5 border border-gray-200">Sec 138 NI Act, Sec 25 PSSA, Civil Summary Suits</td>
                        <td className="p-2.5 border border-gray-200">SARFAESI Act 2002 (Sec 13(2), 13(4) possession)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Typical Haircut Waiver</td>
                        <td className="p-2.5 border border-gray-200">45% to 70% of total ledger dues</td>
                        <td className="p-2.5 border border-gray-200">20% to 45% (tied to distress liquidation value)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Settlement Velocity</td>
                        <td className="p-2.5 border border-gray-200">Fast (3 to 6 weeks)</td>
                        <td className="p-2.5 border border-gray-200">Moderate (6 to 12 weeks with valuation audits)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 2: BUSINESS ENTITIES & STRUCTURES (Sections 11–19)           */}
              {/* =================================================================== */}

              {/* Section 11 */}
              <section id="settlement-for-msmes" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 11
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  11. Business Loan Settlement for MSMEs
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Micro, Small, and Medium Enterprises (MSMEs) registered under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 form the economic bedrock of India&apos;s industrial fabric. However, MSMEs operate with narrow liquidity buffers, making them highly vulnerable to delayed payments from large corporate buyers or government procurement agencies. Recognizing this vulnerability, the Reserve Bank of India issued dedicated frameworks—notably the <em>Framework for Revival and Rehabilitation of Micro, Small and Medium Enterprises</em>—mandating that banks explore viable resolution mechanisms prior to initiating coercive legal action.
                </p>
                <p>
                  When an MSME faces irreversible financial distress, settlement provides a legally protected path to liquidate unmanageable liabilities without liquidating core operating plant and machinery. CredSettle represents MSME enterprises before specialized Bank MSME Restructuring Committees, demonstrating operational stress via Udyam Registration profiles, delayed payment filings on the MSME Samadhaan portal, and audited gross turnover contraction.
                </p>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950">
                  <strong>Statutory MSME Protection:</strong> MSMEs facing imminent NPA classification have the legal right to request their lending bank to refer their loan account to the Committee for Stressed MSMEs under RBI directives, creating an administrative window to negotiate structured debt settlements while halting aggressive third-party collection agencies.
                </div>
                </div>
              </section>

              {/* Section 12 */}
              <section id="settlement-for-small-businesses" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 12
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  12. Business Loan Settlement for Small Businesses
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Small commercial businesses—such as retail stores, wholesale distributors, local transport operators, and small service agencies—frequently depend on multiple overlapping credit lines, including unsecured overdrafts, working capital demand loans, and fintech business loans. When local trade slows down or overhead expenses spike, servicing monthly repayments across 3 to 6 lending institutions becomes mathematically impossible.
                </p>
                <p>
                  Small business debt settlement consolidates multiple disparate liabilities into a single, cohesive legal resolution strategy. By presenting verified local market challenges—such as shop lease terminations, inventory obsolescence, or unrecoverable customer credit ledgers—our legal team negotiates bilateral compromise settlements with each bank and NBFC, enabling small business owners to prevent total insolvency and protect personal savings.
                </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="settlement-for-startups" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 13
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  13. Business Loan Settlement for Startups
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Startups operating in technology, direct-to-consumer (D2C) retail, e-commerce, and logistics often incur substantial early-stage burn rates. When anticipated venture capital or venture debt funding rounds fail to materialize, or when customer acquisition costs exceed lifetime value, startups holding bank debt or venture financing lines face critical liquidity shortages.
                </p>
                <p>
                  Settling startup loans requires specialized commercial advocacy. Startups typically possess zero immovable real estate collateral, but maintain intellectual property, software codebases, and digital brand equity. We assist founders in negotiating structured settlements that cleanly extinguish financial debt, eliminate personal promoter liability, and shield software IP and brand trademarks from liquidation attachment.
                </p>
                </div>
              </section>

              {/* Section 14 */}
              <section id="settlement-for-self-employed" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 14
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  14. Business Loan Settlement for Self-Employed Borrowers
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Self-employed professionals—including doctors, chartered accountants, architects, engineers, management consultants, and independent contractors—often secure specialized professional business loans to establish clinics, design studios, or consulting practices. Unlike salaried borrowers who have predictable monthly payslips, self-employed earnings fluctuate drastically based on project delivery and billing cycles.
                </p>
                <p>
                  When prolonged illness, client loss, or market disruptions cause loan delinquency, lenders aggressively target the individual because professional loans are underwritten based on the professional&apos;s personal credit capacity. We negotiate compromise settlements that reflect actual reduced taxable income (ITR), preventing aggressive recovery visits to clinics or offices and preserving the professional&apos;s commercial reputation.
                </p>
                </div>
              </section>

              {/* Section 15 */}
              <section id="settlement-for-sole-proprietorships" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 15
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  15. Business Loan Settlement for Sole Proprietorships
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A sole proprietorship concern has no separate legal existence distinct from its proprietor under Indian commercial law. Consequently, the proprietor carries <strong>unlimited personal liability</strong> for all debts incurred by the business. When a proprietorship defaults on a business loan, the lending institution can legally proceed against the proprietor&apos;s personal residential savings, ancestral property, bank accounts, and personal vehicles.
                </p>
                <p>
                  Because personal exposure is absolute, negotiating an early One-Time Settlement is urgent and crucial for sole proprietors. Our advocates structure compromise proposals that establish the proprietor&apos;s total real net worth, demonstrate genuine personal economic distress, and negotiate complete legal discharge. The resulting settlement ensures that both the commercial enterprise and the individual proprietor are released from all civil liability and Section 138 NI Act litigation.
                </p>
                </div>
              </section>

              {/* Section 16 */}
              <section id="settlement-for-partnerships" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 16
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  16. Business Loan Settlement for Partnerships
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under Section 25 of the Indian Partnership Act, 1932, every partner in a registered or unregistered partnership firm is <strong>jointly and severally liable</strong> for all debts and obligations of the firm incurred while they are a partner. If one partner becomes insolvent or absconds, the remaining partners remain fully liable to the bank for 100% of the outstanding loan balance.
                </p>
                <p>
                  Settling partnership debts requires coordinated legal maneuvering, particularly when internal partner disputes or dissolution proceedings are underway. CredSettle designs tripartite settlement agreements that bind all partners and the bank, ensuring that once the agreed compromise sum is satisfied, the lender issues an omnibus discharge that protects each partner individually and bars future contribution suits or cross-litigation.
                </p>
                </div>
              </section>

              {/* Section 17 */}
              <section id="settlement-for-pvt-ltd-companies" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 17
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  17. Business Loan Settlement for Private Limited Companies
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A Private Limited Company incorporated under the Companies Act, 2013 is an independent juristic entity endowed with perpetual succession and limited liability. In corporate debt default, the company&apos;s liabilities are legally restricted to the assets held within the corporate balance sheet, provided directors have not executed individual personal guarantees.
                </p>
                <p>
                  When a corporate default reaches critical levels, financial creditors frequently threaten Corporate Insolvency Resolution Process (CIRP) petitions before the National Company Law Tribunal (NCLT) under Section 7 of the Insolvency and Bankruptcy Code (IBC), 2016. CredSettle represents corporate debtor boards in pre-NCLT compromise negotiations, executing Section 12A IBC withdrawals or out-of-court commercial compromise settlements that resolve bank debt without stripping promoters of corporate control or forcing company liquidation.
                </p>
                </div>
              </section>

              {/* Section 18 */}
              <section id="settlement-for-directors-promoters" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 18
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  18. Business Loan Settlement for Directors and Promoters
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Although the corporate veil protects ordinary shareholders, Indian commercial banks routinely circumvent corporate limited liability by demanding unconditional <strong>Personal Guarantees</strong> from managing directors and promoters during credit sanction. Following default, banks immediately invoke Section 128 of the Indian Contract Act, 1872, asserting that the director&apos;s personal liability is co-extensive with that of the corporate borrower.
                </p>
                <p>
                  Settling loans with director personal guarantees demands uncompromising legal precision. Our banking advocates draft non-negotiable indemnity and release clauses ensuring that the Compromise Sanction Letter explicitly discharges all director personal guarantees, vacates personal property liens, cancels DIN (Director Identification Number) disqualification risks, and withdraws personal insolvency notices under Part III of the IBC.
                </p>
                </div>
              </section>

              {/* Section 19 */}
              <section id="settlement-for-guarantors-coborrowers" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 19
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  19. Business Loan Settlement for Guarantors and Co-Borrowers
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Family members, sleeping partners, or associate enterprises often sign business loan agreements as co-borrowers or third-party collateral guarantors. When the primary commercial enterprise defaults, recovery agencies aggressively harass these secondary obligants, freezing their personal bank accounts and issuing demand notices under the SARFAESI Act.
                </p>
                <p>
                  A comprehensive business loan settlement negotiated by CredSettle encompasses all co-borrowers and guarantors within the settlement umbrella. We ensure that the settlement deed explicitly extinguishes guarantor obligations under Section 133, 134, and 135 of the Indian Contract Act, returns original title deeds pledged by third parties, and updates credit bureau profiles of guarantors to clear derogatory delinquency marks.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 3: CALCULATIONS, WAIVERS & COMPARISONS (Sections 20–28)       */}
              {/* =================================================================== */}

              {/* Section 20 */}
              <section id="how-much-business-loan-settled-for" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 20
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  20. How Much Can a Business Loan Be Settled For?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The actual compromise settlement value achievable on a distressed commercial loan varies widely based on asset classification, default vintage, presence of tangible collateral, and the commercial risk appetite of the lender. In standard retail commercial banking practice, settlements do not operate on fixed price tags; rather, they represent the outcome of intense commercial negotiations guided by the lender&apos;s internal compromise settlement policy approved under RBI directives.
                </p>
                <p>
                  For <strong>unsecured commercial business loans</strong> with defaults exceeding 180 to 365 days (Doubtful or Loss NPA status), banks and NBFCs routinely waive 100% of accumulated penal interest, compounding interest surcharges, and legal processing charges, accompanied by a <strong>35% to 65% haircut on the core principal balance</strong>. Consequently, an unserviceable ledger debt of ₹1 Crore can frequently be legally settled and closed for ₹35 Lakhs to ₹50 Lakhs in cash.
                </p>
                <p>
                  For <strong>secured commercial facilities</strong> (backed by real estate or machinery mortgages), the settlement figure is pegged directly to the <em>Distress Sale Value (DSV)</em> or <em>Realizable Value (RV)</em> of the pledged asset minus anticipated litigation expenses and auction holding depreciation. Haircuts on secured loans typically range between 15% and 40% of the total ledger exposure.
                </p>
                </div>
              </section>

              {/* Section 21 */}
              <section id="settlement-amount-calculation-examples" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 21
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  21. Business Loan Settlement Amount – Calculation and Examples
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  To understand how a compromise settlement is calculated, examine the structural disparity between what the bank&apos;s automated computer ledger demands versus what the bank&apos;s Stressed Asset Management Branch actually accepts under compromise scrutiny:
                </p>
                <div className="overflow-x-auto text-xs my-3">
                  <table className="w-full border-collapse border border-gray-200 rounded-lg text-left">
                    <thead>
                      <tr className="bg-slate-100 text-black font-bold">
                        <th className="p-2.5 border border-gray-200">Component</th>
                        <th className="p-2.5 border border-gray-200">Bank Ledger Demand</th>
                        <th className="p-2.5 border border-gray-200">OTS Compromise Treatment</th>
                        <th className="p-2.5 border border-gray-200">Settled Amount Payable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-black font-normal">
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Unamortized Principal</td>
                        <td className="p-2.5 border border-gray-200">₹ 40,00,000</td>
                        <td className="p-2.5 border border-gray-200">Negotiated 45% Haircut</td>
                        <td className="p-2.5 border border-gray-200">₹ 22,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Accrued Regular Interest</td>
                        <td className="p-2.5 border border-gray-200">₹ 14,00,000</td>
                        <td className="p-2.5 border border-gray-200">Reduced to 20% simple interest</td>
                        <td className="p-2.5 border border-gray-200">₹ 2,80,000</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Penal Interest &amp; Bounce Fees</td>
                        <td className="p-2.5 border border-gray-200">₹ 8,50,000</td>
                        <td className="p-2.5 border border-gray-200">100% Complete Waiver</td>
                        <td className="p-2.5 border border-gray-200">₹ 0</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Legal Charges &amp; Misc Dues</td>
                        <td className="p-2.5 border border-gray-200">₹ 2,50,000</td>
                        <td className="p-2.5 border border-gray-200">100% Complete Waiver</td>
                        <td className="p-2.5 border border-gray-200">₹ 0</td>
                      </tr>
                      <tr className="bg-emerald-50/60 font-bold text-black">
                        <td className="p-2.5 border border-gray-200">TOTAL OUTSTANDING</td>
                        <td className="p-2.5 border border-gray-200 text-red-600 line-through">₹ 65,00,000</td>
                        <td className="p-2.5 border border-gray-200 text-emerald-700">Total Waiver: ₹ 40,20,000 (61.8%)</td>
                        <td className="p-2.5 border border-gray-200 text-emerald-800">₹ 24,80,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  In the representative case above, an unmanageable claim of ₹65 Lakhs is fully resolved and discharged for ₹24.8 Lakhs—a net monetary saving of ₹40.2 Lakhs (61.8% total debt reduction), allowing the promoter to avert bankruptcy and close all legal exposure permanently.
                </p>
                </div>
              </section>

              {/* Section 22 */}
              <section id="factors-affecting-settlement-amount" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 22
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  22. Factors That Affect Business Loan Settlement Amount
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The final compromise sanction approved by a bank&apos;s Zonal Credit Committee is governed by five decisive commercial determinants:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">1. NPA Aging &amp; Mandatory Capital Provisioning</span>
                    <p className="text-black font-normal">Loans past 365 days of default (Doubtful D2/D3 or Loss assets) have already absorbed 40% to 100% loss provisions on the bank&apos;s balance sheet, unlocking maximum committee flexibility for large principal waivers.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">2. Tangibility &amp; Liquidity of Collateral</span>
                    <p className="text-black font-normal">Properties burdened with third-party tenancy, municipal disputes, or litigation fetch lower auction values, motivating lenders to accept realistic compromise cash offers.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">3. Audited Inability to Pay (Financial Hardship)</span>
                    <p className="text-black font-normal">Unquestionable documentary proof—such as cancelled GST certificates, severe operational losses, or frozen working capital—proves the borrower is unable, not unwilling, to service debt.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">4. Immediate Liquidity &amp; Tranche Speed</span>
                    <p className="text-black font-normal">Lenders offer deeper discounts for immediate lump-sum settlement execution (within 30 days) compared to extended multi-tranche payment schemes stretching over 12 months.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 23 */}
              <section id="settlement-vs-full-repayment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 23
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  23. Business Loan Settlement vs Full Repayment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When a commercial enterprise possesses viable long-term cash flow, paying off debt in full is undeniably the gold standard for preserving pristine corporate credit ratings and maintaining institutional banking goodwill. Full repayment ensures that the loan account is marked &quot;Closed&quot; on commercial credit bureau reports (CIBIL Commercial, CRIF, Experian) with zero negative remarks.
                </p>
                <p>
                  However, when business insolvency renders full repayment impossible, attempting to pay full ledger claims by stripping working capital or securing private loan-shark funding leads directly to catastrophic commercial ruin. Settlement sacrifices short-term credit score perfection to secure debt forgiveness, halt interest compounding, and salvage commercial survival.
                </p>
                </div>
              </section>

              {/* Section 24 */}
              <section id="settlement-vs-loan-restructuring" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 24
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  24. Business Loan Settlement vs Loan Restructuring
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Loan restructuring alters the repayment architecture of an active debt obligation without forgiving the underlying debt. Common restructuring methods include converting accumulated unpaid interest into a Funded Interest Term Loan (FITL), extending repayment tenure from 3 years to 7 years, or granting a 6-month moratorium on principal servicing.
                </p>
                <p>
                  Restructuring is viable only when an enterprise has confirmed, predictable future cash flows that can comfortably sustain modified monthly EMIs. If core business operations have permanently collapsed or revenue has dropped by over 60%, restructuring merely postpones default and increases the ultimate interest burden. Settlement, by contrast, creates an immediate, permanent closure with substantial principal reduction.
                </p>
                </div>
              </section>

              {/* Section 25 */}
              <section id="settlement-vs-one-time-settlement-ots" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 25
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  25. Business Loan Settlement vs One-Time Settlement (OTS)
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In commercial banking vernacular, the terms <strong>Business Loan Settlement</strong> and <strong>One-Time Settlement (OTS)</strong> are frequently used interchangeably, but denote distinct procedural stages within banking policy. Business loan settlement is the broader legal concept encompassing all forms of bilateral compromise resolution between borrower and lender.
                </p>
                <p>
                  An OTS, specifically, is a standardized regulatory product codified under bank board policies and state/central schemes (such as public sector bank non-discretionary OTS schemes). Under an OTS, the bank applies a predetermined formula to compute the settlement sum, requiring the borrower to remit an upfront earnest deposit (typically 10% to 15%) upon application and pay the balance within a stipulated 30 to 90-day window.
                </p>
                </div>
              </section>

              {/* Section 26 */}
              <section id="settlement-vs-loan-waiver" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 26
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  26. Business Loan Settlement vs Loan Waiver
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  It is vital to distinguish between a negotiated settlement and a sovereign loan waiver. A <strong>loan waiver</strong> is an absolute, non-reciprocal forgiveness of debt typically announced by central or state governments for agricultural distress or political relief programs, where the state exchequer reimburses banks on behalf of borrowers. Commercial business loans are virtually never eligible for government waivers.
                </p>
                <p>
                  A <strong>settlement</strong>, conversely, is a purely commercial transaction negotiated between the lender and the borrower. The bank absorbs an accounting write-off based on hard commercial realities, but demands a negotiated cash consideration from the borrower in exchange for releasing liabilities and vacating encumbrances.
                </p>
                </div>
              </section>

              {/* Section 27 */}
              <section id="advantages-of-business-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 27
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  27. Advantages of Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Executing a legally binding commercial loan settlement delivers immediate strategic and operational advantages to distressed business enterprises:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-black font-normal">
                  <li><strong>Substantial Principal &amp; Interest Reduction:</strong> Forgives 40% to 70% of total ledger debt, immediately restoring positive net worth.</li>
                  <li><strong>Immediate Cessation of Recovery Harassment:</strong> Service of legal notices halts aggressive collection calls and unauthorized site visits.</li>
                  <li><strong>Termination of Active Litigation:</strong> Guarantees the formal withdrawal of proceedings under SARFAESI Act, Section 138 NI Act, DRT suits, and NCLT insolvency petitions.</li>
                  <li><strong>Full Discharge of Personal Guarantees:</strong> Liberates directors, promoters, and family co-borrowers from lifetime personal financial liability.</li>
                  <li><strong>Collateral Retrieval:</strong> Ensures the physical return of title deeds, release of machinery hypothecations, and ROC charge satisfaction.</li>
                </ul>
                </div>
              </section>

              {/* Section 28 */}
              <section id="disadvantages-risks-business-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 28
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  28. Disadvantages and Risks of Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  While settlement offers definitive legal debt relief, transparent legal counsel requires acknowledging its inherent trade-offs. The primary consequence is the credit bureau remark: the settling bank reports the account as &quot;Settled&quot; or &quot;Post-Write-Off Compromise&quot; to CIBIL Commercial and consumer bureaus, causing a temporary credit rating downgrade.
                </p>
                <p>
                  Additionally, under the RBI Compromise Settlement circular of June 8, 2023, regulated entities enforce a mandatory cooling-off period of at least 12 months before sanctioning fresh credit facilities to the settling entity. Finally, failure to strictly adhere to agreed settlement payment deadlines can cause the lender to revoke the OTS sanction, forfeiting deposited tokens and reinstating the full original ledger demand.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 4: CIBIL, CREDIT BUREAU & CREDIT REBUILDING (Sections 29–34) */}
              {/* =================================================================== */}

              {/* Section 29 */}
              <section id="impact-on-cibil-score" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 29
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  29. Impact of Business Loan Settlement on CIBIL Score
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When a commercial enterprise executes an OTS, the impact on individual CIBIL scores depends on the legal structure of the business and whether the promoter executed a personal guarantee. For sole proprietors and individual partners, business loans are directly linked to their personal Permanent Account Number (PAN). Consequently, when a proprietorship loan is settled, the personal consumer CIBIL report records a &quot;Settled&quot; remark, accompanied by a score decline of 70 to 120 points.
                </p>
                <p>
                  However, context is vital: prior to settlement, an account in continuous default generates compounding 90+, 180+, and 360+ Days Past Due (DPD) entries each month. This active delinquency destroys creditworthiness and signals ongoing insolvency to all lenders. A settlement freezes the delinquency, updates the current balance to ₹0, clears the overdue amount to ₹0, and establishes a stable, non-delinquent financial baseline from which credit repair can commence.
                </p>
                </div>
              </section>

              {/* Section 30 */}
              <section id="impact-on-business-credit-score" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 30
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  30. Impact of Business Loan Settlement on Business Credit Score
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Corporate and commercial entities are evaluated under the <strong>CIBIL Rank</strong> system (graded from CMR-1 to CMR-10, where CMR-1 denotes lowest risk of default and CMR-10 denotes highest risk) alongside Commercial Credit Reports (CCR) maintained by CIBIL, CRIF High Mark, Equifax, and Experian.
                </p>
                <p>
                  Settling a commercial loan will temporarily position the company in the CMR-7 to CMR-10 bracket, reflecting a past debt compromise. While Tier-1 institutional lenders may refrain from extending large unsecured working capital facilities during this phase, non-bank trade creditors, specialized supply-chain financiers, and MSME fintech platforms will still extend asset-backed and invoice-linked credit lines based on current audited operational cash flows.
                </p>
                </div>
              </section>

              {/* Section 31 */}
              <section id="impact-on-company-director-profiles" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 31
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  31. Impact on Company and Director Credit Profiles
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Indian commercial banking operates under sophisticated cross-referencing algorithms that correlate company DINs (Director Identification Numbers), corporate PANs, and personal promoter profiles. If a corporate loan settlement is completed without comprehensive legal oversight, the settling bank may report the director&apos;s personal profile as a &quot;Guarantor Settled under Compromise,&quot; severely impairing their ability to secure personal home loans or vehicle financing.
                </p>
                <p>
                  CredSettle enforces strict contractual covenants in every settlement agreement. We ensure that the settlement deed clearly segregates corporate entity liability from non-obligated directors, mandating that the bank report guarantor files as &quot;Discharged upon Full Satisfaction of Corporate Compromise,&quot; thereby preserving the promoter&apos;s personal borrowing capacity.
                </p>
                </div>
              </section>

              {/* Section 32 */}
              <section id="credit-bureau-reporting-commercial" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 32
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  32. Business Loan Settlement and Credit Bureau Reporting
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under the Credit Information Companies (Regulation) Act (CICRA), 2005 and RBI Master Directions on Credit Reporting, all commercial banks and NBFCs are legally mandated to upload updated credit files to all four licensed credit bureaus on a monthly cycle.
                </p>
                <p>
                  Following the clearance of the final settlement tranche, the bank must report the following exact parameter changes:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black font-normal">
                  <li><strong>Account Status:</strong> Updated from &quot;Active / NPA / Suit Filed&quot; to &quot;Settled&quot; or &quot;Post-Write-Off Compromise Closed.&quot;</li>
                  <li><strong>Current Balance:</strong> Reported as ₹0.</li>
                  <li><strong>Amount Overdue:</strong> Reported as ₹0.</li>
                  <li><strong>Date of Last Payment:</strong> Updated to the exact UTR remittance date of the final settlement tranche.</li>
                </ul>
                </div>
              </section>

              {/* Section 33 */}
              <section id="how-long-settlement-affects-credit" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 33
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  33. How Long Does Business Loan Settlement Affect Credit Score?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In Indian credit bureau databases, closed and settled loan records remain on file for up to 7 years from the date of final resolution. However, the commercial impact of the &quot;Settled&quot; remark diminishes progressively over time. Credit scoring models heavily weight recent repayment behavior (the trailing 12 to 24 months) over older historical defaults.
                </p>
                <p>
                  The initial 12 months post-settlement constitute the mandatory RBI cooling-off period during which mainstream institutional borrowing is paused. Between Months 13 and 24, as the business establishes new on-time vendor credit cycles and secures secured credit facilities, the credit score rebounds substantially. By Months 25 to 36, an enterprise that maintains spotless cash-flow disciplines can regain high creditworthiness and qualify for competitive commercial funding.
                </p>
                </div>
              </section>

              {/* Section 34 */}
              <section id="how-to-rebuild-credit-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 34
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  34. How to Rebuild Credit After Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Rebuilding commercial and personal credit scores after an OTS requires disciplined execution of a 4-step financial restoration protocol:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 1: Secure Fixed-Deposit Backed Credit Lines</span>
                    <p className="text-black font-normal">Open an FD-backed corporate or personal credit card. Utilize 20% to 30% of the limit monthly and repay the total bill 5 days prior to the due date, generating positive 30-day reporting cycles.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 2: Establish Clean Vendor &amp; Invoice Discounting Streams</span>
                    <p className="text-black font-normal">Route operational transactions through TReDS (Trade Receivables Electronic Discounting System) or local MSME factoring platforms, establishing documented trade reliability.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 3: Maintain Flawless Banking Operations</span>
                    <p className="text-black font-normal">Ensure zero cheque bounces, zero inward NACH return charges, and a healthy average monthly balance in current accounts for a minimum of 4 consecutive quarters.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 4: Routine Bureau Audit &amp; Data Rectification</span>
                    <p className="text-black font-normal">Download quarterly CCR reports to verify that no residual balances, bogus legal charges, or wrongful DPD entries linger on the company&apos;s credit profile.</p>
                  </div>
                </div>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 5: RBI GUIDELINES, LEGAL DEFENSES & HARASSMENT (35–44)       */}
              {/* =================================================================== */}

              {/* Section 35 */}
              <section id="rbi-guidelines-business-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 35
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  35. RBI Guidelines for Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The Reserve Bank of India has established a clear, progressive statutory framework encouraging regulated lending entities to resolve distressed assets through transparent compromise settlements. The landmark circular—<em>Framework for Compromise Settlements and Technical Write-offs</em> (Circular DOR.STR.REC.20/21.04.048/2023-24 dated June 8, 2023)—directs all scheduled commercial banks, NBFCs, and primary cooperative banks to institute formal, board-approved policies governing compromise settlements.
                </p>
                <p>
                  Key mandates under the RBI directive include: (1) Transparent delegation of financial powers so that settlements are approved by designated committees rather than arbitrary individual discretion, (2) Mandatory inclusion of restructuring provisions before initiating coercive recovery, (3) Permissibility of compromise settlements even for accounts classified as wilful defaulters or fraud without prejudice to ongoing criminal investigations, and (4) Strict adherence to transparent accounting principles regarding technical write-offs.
                </p>
                </div>
              </section>

              {/* Section 36 */}
              <section id="rbi-guidelines-one-time-settlement-ots" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 36
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  36. RBI Guidelines for One-Time Settlement of Loans
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under the June 8, 2023 RBI Framework, regulated entities must clearly lay down the methodology for arriving at the minimum compromise settlement amount. The circular dictates that the settlement sum should not fall below the estimated Net Present Value (NPV) of the cash flows that could be recovered through lengthy legal enforcement, factoring in auction discounts, advocate fees, and time delay costs.
                </p>
                <p>
                  Additionally, the guidelines mandate a minimum <strong>cooling-off period of 12 months</strong> before a borrower who has executed a compromise settlement can be considered for fresh credit facilities by any regulated entity. The circular also mandates that all compromise sanctions must be reported quarterly to the bank&apos;s Board of Directors or Audit Committee, ensuring executive oversight and institutional transparency.
                </p>
                </div>
              </section>

              {/* Section 37 */}
              <section id="rbi-rules-recovery-agents" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 37
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  37. RBI Rules for Loan Recovery Agents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The Reserve Bank of India has instituted stringent operational boundaries for outsourced recovery agencies via its <em>Master Circular on Loans and Advances – Instructions for Recovery Agents</em> and circular RBI/2022-23/108 (August 12, 2022). These directives apply equally to recovery personnel acting on commercial and business loan defaults:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black font-normal">
                  <li><strong>Strict Calling Window:</strong> Tele-calling and visits are permitted strictly between <strong>08:00 AM and 07:00 PM</strong>. Calling outside these hours is a severe regulatory violation.</li>
                  <li><strong>Absolute Prohibition on Harassment:</strong> Agents are barred from using abusive, profane, or intimidating language, making threatening physical gestures, or causing public nuisance.</li>
                  <li><strong>Confidentiality Protection:</strong> Agents cannot disclose the debt or discuss repayment with employees, suppliers, customers, neighbors, or third-party family members.</li>
                  <li><strong>Mandatory Identification:</strong> Agents visiting commercial premises must carry a photo identity card issued by the agency and an official Letter of Authority from the bank.</li>
                </ul>
                </div>
              </section>

              {/* Section 38 */}
              <section id="business-loan-default-consequences" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 38
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  38. Business Loan Default – What Happens If You Stop Paying?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When a business enterprise stops servicing its loan installments, the lending institution initiates a standardized, multi-tiered escalation matrix:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Days 1–30 (SMA-0):</span> Automated payment alerts, gentle reminder calls, and reversal of non-penal concessions.
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Days 31–60 (SMA-1):</span> Escalated follow-up from internal credit collections, freeze on unused overdraft limits, and initial loan recall warnings.
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Days 61–90 (SMA-2):</span> Assignment of the account to specialized recovery units, field visits to factory/office premises, and notice of imminent NPA reclassification.
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Day 91+ (NPA Stage):</span> Account classified as Non-Performing Asset. Penal compounding begins, recovery agencies are deployed, and statutory legal notices are issued.
                  </div>
                </div>
                </div>
              </section>

              {/* Section 39 */}
              <section id="legal-consequences-business-loan-default" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 39
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  39. Legal Consequences of Business Loan Default
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Defaulting on a commercial loan triggers civil and quasi-criminal legal consequences across several statutory statutes in India. For secured loans, the bank can invoke the <strong>SARFAESI Act, 2002</strong> to take symbolic or physical possession of mortgaged commercial real estate without prior court intervention.
                </p>
                <p>
                  For debts exceeding ₹20 Lakhs, banks frequently institute recovery proceedings before the <strong>Debt Recovery Tribunal (DRT)</strong> under the Recovery of Debts and Bankruptcy Act (RDBA), 1993, seeking attachment of debtor bank accounts and personal assets. If security cheques or electronic NACH mandates dishonor, lenders routinely file criminal complaints under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act (PSSA), 2007.
                </p>
                </div>
              </section>

              {/* Section 40 */}
              <section id="can-bank-take-legal-action" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 40
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  40. Can a Bank Take Legal Action for Business Loan Default?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Yes, commercial banks and NBFCs possess legal authority to initiate recovery proceedings through designated judicial and statutory forums. However, taking legal action is not an immediate, unchecked process; lenders must strictly comply with mandatory statutory notice periods, due process safeguards, and natural justice requirements.
                </p>
                <p>
                  Crucially, <strong>loan default is not a criminal offense under the Bharatiya Nyaya Sanhita (BNS)</strong>. Police officers have no statutory jurisdiction over bank defaults and cannot summon or arrest a borrower for commercial debt. Lenders must rely entirely on civil recovery channels, where an assertive, advocate-led legal defense can stall litigation and create massive leverage to force an affordable settlement.
                </p>
                </div>
              </section>

              {/* Section 41 */}
              <section id="settlement-after-legal-notice" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 41
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  41. Business Loan Settlement After Receiving a Legal Notice
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Receiving a formal legal demand notice—whether a Loan Recall Notice, SARFAESI Section 13(2) Demand Notice, or Section 138 NI Act statutory notice—is not a reason to panic; it is the formal starting bell for settlement negotiations. Lenders issue legal notices to build pressure, but senior banking officials understand that fighting contested litigation in Indian courts can consume years.
                </p>
                <p>
                  CredSettle&apos;s banking advocates immediately file a comprehensive, point-by-point Legal Reply within the statutory deadline (e.g. 60 days under Section 13(3A) of SARFAESI, or 15 days under Section 138 NI Act). The reply challenges unlawful penal calculations, highlights procedural irregularities in loan disbursement, substantiates commercial distress, and proposes an amicable One-Time Settlement, shifting the dispute from litigation to the settlement table.
                </p>
                </div>
              </section>

              {/* Section 42 */}
              <section id="settlement-during-arbitration-court" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 42
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  42. Business Loan Settlement During Arbitration or Legal Proceedings
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A business loan can be settled at <strong>any stage of active litigation</strong>—including during ongoing arbitration proceedings under the Arbitration and Conciliation Act, 1996, during Securitisation Applications before the DRT, during civil summary suits (Order 37 CPC), and even during pre-charge stages in Section 138 NI Act criminal complaints.
                </p>
                <p>
                  When a settlement is finalized mid-litigation, the parties execute formal Joint Application for Compromise or Consent Terms. The judicial forum (Civil Judge, Metropolitan Magistrate, or Arbitrator) records the settlement, dismisses the case as settled out of court, and ensures complete discharge, guaranteeing that the borrower emerges free of all ongoing court liabilities.
                </p>
                </div>
              </section>

              {/* =================================================================== */}
              {/* MIDPOINT INTERACTIVE TOOL: BUSINESS LOAN SETTLEMENT & OTS CALCULATOR */}
              {/* =================================================================== */}
              <div id="business-loan-ots-calculator" className="my-8 sm:my-10 p-4 sm:p-6 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-2xl text-white shadow-xl border border-blue-800/60 not-prose">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-800/80 pb-3 mb-5">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full inline-block mb-1">
                      Interactive Financial Diagnostic Tool
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>⚡</span> Business Loan OTS Haircut &amp; Settlement Calculator
                    </h3>
                  </div>
                  <span className="text-xs text-blue-200 bg-blue-900/60 px-2.5 py-1 rounded-lg border border-blue-700/50 self-start sm:self-auto">
                    RBI Framework 2026 Ready
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Sliders & Selectors */}
                  <div className="lg:col-span-7 space-y-4 text-xs">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="font-semibold text-slate-200">Total Outstanding Principal (₹)</label>
                        <span className="text-sm font-bold text-blue-300">₹ {calcPrincipal.toLocaleString('en-IN')}</span>
                      </div>
                      <input
                        type="range"
                        min="500000"
                        max="20000000"
                        step="100000"
                        value={calcPrincipal}
                        onChange={(e) => setCalcPrincipal(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>₹ 5 Lakhs</span>
                        <span>₹ 1 Crore</span>
                        <span>₹ 2 Crores</span>
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
                        <label className="block font-semibold text-slate-200 mb-1">Commercial Structure</label>
                        <select
                          value={calcBusinessType}
                          onChange={(e) => setCalcBusinessType(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500 text-xs"
                        >
                          <option value="msme_unsecured">MSME Unsecured Loan</option>
                          <option value="proprietorship_unsecured">Proprietorship Unsecured</option>
                          <option value="pvt_ltd_unsecured">Pvt Ltd Unsecured Debt</option>
                          <option value="secured_business_loan">Secured Loan (LAP/Mortgage)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-200 mb-1">Current Legal Escalation</label>
                        <select
                          value={calcLegalStatus}
                          onChange={(e) => setCalcLegalStatus(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500 text-xs"
                        >
                          <option value="demand_notice">Loan Recall / Demand Notice</option>
                          <option value="sarfaesi_notice">SARFAESI Sec 13(2) Notice</option>
                          <option value="sec_138_cheque">Sec 138 NI Act Cheque Notice</option>
                          <option value="arbitration">Arbitration / DRT Filed</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Output Summary Card */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-blue-900/60 to-slate-800/80 p-4 rounded-xl border border-blue-700/60 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block mb-1">
                        Estimated OTS Compromise Outcome
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                          ₹ {otsAnalysis.estimatedSettlement.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-300">payable</span>
                      </div>
                      <p className="text-[11px] text-emerald-300 font-semibold mt-1">
                        Est. Debt Waiver: ₹ {otsAnalysis.estimatedSavings.toLocaleString('en-IN')} ({otsAnalysis.waiverPct}% Haircut)
                      </p>
                    </div>

                    <div className="space-y-1.5 text-[11px] border-t border-blue-800/60 pt-2.5">
                      <div className="flex items-start gap-1.5">
                        <span className="text-blue-400 shrink-0 font-bold">Strategy:</span>
                        <span className="text-slate-200">{otsAnalysis.strategy}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-emerald-400 shrink-0 font-bold">Legal Defense:</span>
                        <span className="text-slate-200">{otsAnalysis.legalShield}</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="block w-full py-2 bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs rounded-lg text-center transition-colors shadow-md"
                    >
                      Lock In This OTS Target
                    </Link>
                  </div>
                </div>
              </div>

              {/* Section 43 */}
              <section id="settlement-and-recovery-harassment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 43
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  43. Business Loan Settlement and Recovery Agent Harassment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When commercial borrowers face severe business distress, lending banks and NBFCs frequently deploy outsourced third-party recovery agencies to exert aggressive extra-judicial pressure. In commercial debt collection, rogue agencies routinely escalate beyond polite phone reminders: they show up unannounced at factory premises, create public scenes in corporate lobbies before clients or vendors, and send intimidatory WhatsApp threats to directors and family members.
                </p>
                <p>
                  Such coercive actions are not lawful debt collection; they constitute actionable torts and cognizable criminal offenses under Indian penal statutes. Intimidating commercial enterprise leadership, disrupting business operations, or causing public embarrassment violates RBI directives and penal laws governing criminal intimidation (Section 351 BNS) and extortion (Section 308 BNS). Immediate legal intervention shuts down harassment and forces the bank back into lawful compromise discussions.
                </p>
                </div>
              </section>

              {/* Section 44 */}
              <section id="borrowers-rights-against-harassment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 44
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  44. Borrower&apos;s Rights Against Recovery Agent Harassment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Commercial business owners, promoters, and guarantors enjoy absolute statutory rights protected under Indian central banking regulations and the Constitution of India:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">1. Right to Dignity &amp; Respect (Article 21)</span>
                    <p className="text-black font-normal">Supreme Court rulings guarantee that inability to pay a civil debt cannot strip a citizen of their constitutional right to personal dignity and freedom from mental torture.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">2. Right to Legal Representation</span>
                    <p className="text-black font-normal">Borrowers have the statutory right under the Advocates Act, 1961 to retain banking advocates to handle all communications, legally barring direct agent contact.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">3. Right to Privacy (CICRA 2005)</span>
                    <p className="text-black font-normal">Absolute prohibition against agents disclosing commercial debt details to staff, landlords, vendors, customers, or third-party family members.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">4. Right to Regulatory Compensation</span>
                    <p className="text-black font-normal">The RBI Integrated Ombudsman can penalize lending banks directly and award financial compensation for mental harassment and operational damage caused by agents.</p>
                  </div>
                </div>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 6: NEGOTIATION TACTICS & FINANCIAL HARDSHIP (45–52)          */}
              {/* =================================================================== */}

              {/* Section 45 */}
              <section id="how-to-negotiate-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 45
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  45. How to Negotiate Business Loan Settlement With a Bank or NBFC
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Negotiating a business loan settlement with institutional lenders is an exercise in data-backed financial advocacy rather than emotional pleading. Commercial bank credit committees operate under cold mathematical risk matrices: they evaluate the <em>Net Present Value (NPV)</em> of accepting a lump-sum compromise payment today against the discounted recovery yield of pursuing lengthy litigation over 5 to 7 years.
                </p>
                <p>
                  To negotiate effectively, borrowers must shift authority away from branch personnel or commission-driven recovery agents toward the bank&apos;s Stressed Asset Management Branch (SAMB) or Zonal Settlement Committee. Never reveal personal liquid emergency reserves during initial talks. Present an unassailable financial picture demonstrating that the business has hit terminal illiquidity and that the proposed OTS represents the lender&apos;s single best recovery opportunity before assets depreciate further.
                </p>
                </div>
              </section>

              {/* Section 46 */}
              <section id="how-to-make-settlement-proposal" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 46
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  46. How to Make a Business Loan Settlement Proposal
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A business loan settlement proposal must be structured as a formal legal-financial petition submitted on corporate letterhead addressed to the General Manager / Zonal Head of the lending institution. Informal emails or oral discussions lack evidentiary standing in bank credit committee reviews.
                </p>
                <p>
                  A professional OTS proposal drafted by CredSettle contains five mandatory sections: (1) <strong>Chronological Enterprise Background</strong> highlighting years of flawless historical compliance prior to default, (2) <strong>Verifiable Economic Hardship Statement</strong> documenting specific market failures or revenue loss, (3) <strong>Forensic Account Audit</strong> challenging compound penal interest, (4) <strong>The Firm Compromise Offer</strong> specifying the exact lump-sum figure and payment schedule, and (5) <strong>Legal Reciprocal Terms</strong> requiring guarantee discharge, NDC issuance, and court petition withdrawal.
                </p>
                </div>
              </section>

              {/* Section 47 */}
              <section id="documents-required-business-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 47
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  47. Documents Required for Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  To satisfy bank audit scrutiny and comply with RBI compromise guidelines, an enterprise must substantiate its settlement proposal with comprehensive documentation:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Financial &amp; Tax Filings</span>
                    <ul className="text-black space-y-0.5 list-disc pl-4 font-normal">
                      <li>Audited Balance Sheets &amp; P&amp;L accounts for the trailing 3 fiscal years</li>
                      <li>Monthly GST returns (GSTR-3B and GSTR-1) showing revenue collapse</li>
                      <li>Income Tax Returns (ITR) of the enterprise and individual promoters</li>
                      <li>Current bank statements of all corporate and personal operative accounts (12 months)</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Commercial Distress Proofs</span>
                    <ul className="text-black space-y-0.5 list-disc pl-4 font-normal">
                      <li>Official factory or commercial shop lease termination agreements</li>
                      <li>GST registration cancellation filings or surrender certificates</li>
                      <li>Debtor default court filings, uncollectible receivable notices, or bad debt write-offs</li>
                      <li>Medical discharge summaries or hospital records if health crises impacted leadership</li>
                    </ul>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 48 */}
              <section id="financial-hardship-justification" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 48
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  48. Financial Hardship and Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In Indian banking regulation, there is a fundamental legal distinction between a <em>Wilful Defaulter</em> (who has the financial capability to pay but chooses not to, or has diverted borrowed capital) and a <em>Bona Fide Stressed Borrower</em> (who has defaulted due to genuine commercial distress beyond their control).
                </p>
                <p>
                  Demonstrating financial hardship is the cornerstone of securing large principal waivers. Our advocates construct an irrefutable Hardship Docket showing that default occurred despite the promoter&apos;s best efforts. We correlate macro-economic factors—such as raw material inflation, policy shifts, tender cancellations, or client insolvencies—with internal accounting ledgers, ensuring the credit committee classifies the account as non-wilful and eligible for maximum compromise write-offs.
                </p>
                </div>
              </section>

              {/* Section 49 */}
              <section id="settlement-loss-making-businesses" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 49
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  49. Business Loan Settlement for Loss-Making Businesses
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When an enterprise operates at a persistent net loss with negative EBITDA, servicing commercial debt out of operating earnings is impossible. Continuing to maintain such an account under standard restructured terms only results in secondary and tertiary defaults, compounding interest dues and destroying whatever residual asset value remains.
                </p>
                <p>
                  For loss-making businesses, CredSettle demonstrates to lenders that liquidation or court litigation will yield pennies on the rupee because commercial assets (inventories, depreciated machinery, software systems) lose up to 80% of their book value at distress auction. Demonstrating ongoing operational burn rates convinces credit committees to accept an immediate compromise settlement and write off the balance.
                </p>
                </div>
              </section>

              {/* Section 50 */}
              <section id="settlement-after-business-closure" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 50
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  50. Business Loan Settlement After Business Closure
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Closing down business operations—surrendering commercial leased premises, terminating employees, and surrendering utility connections—does not automatically extinguish commercial loan obligations. In sole proprietorships and partnerships, lenders immediately redirect all recovery machinery to the promoter&apos;s home address, threatening personal asset attachment.
                </p>
                <p>
                  However, formal business closure creates immense negotiation leverage for an OTS. With zero revenue, zero operating bank balances, and shuttered commercial premises, the bank recognizes that their chances of involuntary recovery are virtually non-existent. We utilize official closure affidavits, lease termination deeds, and staff severance receipts to negotiate deep principal haircuts of 55% to 75%, allowing promoters to permanently close the defunct entity&apos;s books.
                </p>
                </div>
              </section>

              {/* Section 51 */}
              <section id="settlement-after-business-failure" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 51
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  51. Business Loan Settlement After Business Failure
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Business failure is an acknowledged economic reality across mature market economies. In India, bankruptcy reforms and the Insolvency and Bankruptcy Code (IBC) were enacted precisely to facilitate clean exits for honest, failed entrepreneurs so that capital and talent can be reallocated productively.
                </p>
                <p>
                  Settlement provides a dignified, out-of-court commercial closure following business failure without undergoing the costly, public stigma of formal corporate insolvency or individual personal bankruptcy. We assist failed founders in negotiating final compromise releases, ensuring that all director personal guarantees and hypothecations are vacated so they can re-enter the commercial marketplace unburdened by past debt.
                </p>
                </div>
              </section>

              {/* Section 52 */}
              <section id="settlement-zero-cash-flow" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 52
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  52. Business Loan Settlement When the Business Has No Cash Flow
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When an enterprise has completely exhausted its cash reserves and maintains zero operating cash flow, finding funds to finance an OTS settlement proposal appears paradoxical. In these extreme distress scenarios, settlement funds are typically sourced through external white-knight capital—such as family contributions, sale of non-pledged peripheral personal assets, or structured third-party bridge support.
                </p>
                <p>
                  Our advocates structure settlement proposals emphasizing that the offered settlement sum is being injected solely by third-party benevolent sources contingent on the bank granting a 100% full and final release. If the bank rejects the compromise, this third-party capital will not be injected into the defunct company. Faced with the choice between an immediate cash settlement funded by third parties or zero recovery through court decree, bank credit committees routinely approve the settlement.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 7: MULTI-LENDER PORTFOLIOS & INSTITUTION TYPES (53–60)       */}
              {/* =================================================================== */}

              {/* Section 53 */}
              <section id="settlement-multiple-lenders" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 53
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  53. Business Loan Settlement With Multiple Lenders
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Mid-sized commercial enterprises frequently carry credit lines distributed across multiple financial institutions—such as a working capital facility with a public sector bank, machinery term loans with an NBFC, and unsecured business loans with private digital lenders. When distress strikes, managing multiple creditors simultaneously presents acute operational friction: uncoordinated lenders may file competing DRT suits, initiate conflicting SARFAESI actions, or issue simultaneous Section 138 NI Act notices.
                </p>
                <p>
                  In multiple-lender situations, CredSettle implements a structured Inter-Creditor Settlement Strategy. We establish a debt-priority matrix based on security ranking (first charge vs second charge vs unsecured) and litigation aggressiveness. By coordinating settlement negotiations across lenders, we ensure that an agreement reached with one bank is not derailed by an unexpected injunction from another, creating an orderly, phased resolution that completely closes the company&apos;s macro-debt footprint.
                </p>
                </div>
              </section>

              {/* Section 54 */}
              <section id="settlement-multiple-business-loans" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 54
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  54. Business Loan Settlement for Multiple Business Loans
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  It is very common for an enterprise to maintain multiple distinct credit facilities with the <em>same</em> bank—for example, a ₹50 Lakhs Cash Credit (CC) limit, a ₹30 Lakhs Term Loan for factory shed expansion, and a ₹15 Lakhs Emergency Credit Line (ECLGS). When default occurs, banks often attempt to settle one facility while maintaining active recovery or litigation on the others, withholding collateral release.
                </p>
                <p>
                  Our banking advocates negotiate <strong>Omnibus Composite Settlements</strong> covering all intra-bank credit accounts under a single compromise sanction letter. We insist that the compromise terms explicitly tie the agreed settlement sum to the complete closure of all outstanding account numbers, ensuring that once the payment is completed, the bank issues a single, comprehensive No Dues Certificate and vacates all registered charges.
                </p>
                </div>
              </section>

              {/* Section 55 */}
              <section id="settlement-with-banks" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 55
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  55. Business Loan Settlement With Banks
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Public sector banks (State Bank of India, Punjab National Bank, Bank of Baroda, Canara Bank, Union Bank) and major private commercial banks (HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, IndusInd Bank) operate under strict bureaucratic Delegation of Financial Powers (DOFP) matrices codified pursuant to RBI regulations. Settlement requests are not decided by branch managers; they must be evaluated and approved by designated Settlement Advisory Committees (SAC) or Zonal High-Power Credit Risk Committees based on exposure thresholds.
                </p>
                <p>
                  Public sector banks place supreme emphasis on procedural compliance, vigilance guidelines, and non-discretionary OTS schemes to insulate bank executives from subsequent scrutiny by the Central Vigilance Commission (CVC) or Comptroller and Auditor General (CAG). Private banks, on the other hand, prioritize commercial velocity and recovery yield. CredSettle tailors every settlement petition to align directly with the specific institutional risk guidelines of the target bank, accelerating committee approvals and maximizing principal haircuts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block">Public Sector Banks (PSBs)</span>
                    <p className="text-black font-normal">Strict adherence to published non-discretionary OTS formulas; require formal hardship dockets to satisfy internal audit committees.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block">Private Commercial Banks</span>
                    <p className="text-black font-normal">Fast commercial decisions based on net present recovery value; high flexibility for immediate lump-sum settlement execution.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 56 */}
              <section id="settlement-with-nbfcs" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 56
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  56. Business Loan Settlement With NBFCs
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Non-Banking Financial Companies (including Bajaj Finserv, Tata Capital, Aditya Birla Finance, Piramal Capital, Shriram Finance, and L&amp;T Finance) have become major providers of commercial MSME and business loans. While NBFCs operate with greater procedural flexibility and shorter settlement decision cycles than traditional banks, major NBFCs with asset sizes exceeding ₹100 Crores possess full enforcement powers under the SARFAESI Act, 2002.
                </p>
                <p>
                  NBFCs often rely on aggressive tele-calling agencies and fast-track arbitration clauses under the Arbitration and Conciliation Act, 1996. Our legal defense counters unilateral arbitrator appointments under Section 11/12 of the Act, halts recovery harassment, and initiates direct negotiations with the NBFC&apos;s Central Stressed Asset Division. NBFC settlements can often be concluded within 15 to 30 days when presented with an immediate, verifiable cash compromise offer.
                </p>
                </div>
              </section>

              {/* Section 57 */}
              <section id="settlement-with-fintech-lenders" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 57
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  57. Business Loan Settlement With Fintech Lenders
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Digital business lending platforms, neo-banks, and app-based commercial financiers (such as Lendingkart, FlexiLoans, Indifi, NeoGrowth, and Protium) extend rapid unsecured loans based on algorithm-driven cash-flow assessments and merchant POS swipe volumes. These digital loans carry high interest rates and mandate aggressive daily or weekly auto-debit NACH mandates.
                </p>
                <p>
                  When a borrower defaults, fintech lenders frequently deploy automated dialers that violate RBI Digital Lending Guidelines (2022) by inundating borrowers with endless automated calls. We intervene by serving formal legal notices to their partner NBFCs, stopping unlawful auto-dialing, canceling rogue NACH mandates, and negotiating substantial principal haircuts of 50% to 70% to close digital credit facilities permanently.
                </p>
                </div>
              </section>

              {/* Section 58 */}
              <section id="how-to-choose-settlement-company" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 58
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  58. How to Choose a Business Loan Settlement Company
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Choosing the right debt resolution partner is the most critical commercial decision a distressed enterprise will make. The commercial debt settlement sector includes reputable advocate-backed firms as well as fly-by-night non-legal telemarketing agencies that make fraudulent promises of 90% debt erasure while stealing upfront fees.
                </p>
                <p>
                  When evaluating a business loan settlement firm, demand verification on four vital criteria: (1) <strong>Legal Representation by Enrolled Advocates:</strong> Only licensed High Court advocates can issue formal legal notices under the Advocates Act, 1961 and represent you before judicial forums, (2) <strong>Physical Corporate Presence:</strong> Avoid companies operating solely via mobile numbers without registered offices, (3) <strong>Track Record in Commercial Debt:</strong> Verify successful OTS track records with major commercial banks, and (4) <strong>Transparent Service Agreement:</strong> Ensure fees are milestone-linked with zero hidden demands.
                </p>
                </div>
              </section>

              {/* Section 59 */}
              <section id="settlement-company-vs-direct-negotiation" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 59
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  59. Business Loan Settlement Company vs Direct Bank Negotiation
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Business owners often wonder whether they should negotiate directly with their branch manager rather than retaining a professional legal settlement firm. In reality, individual borrowers negotiating unrepresented face severe structural disadvantages:
                </p>
                <div className="overflow-x-auto text-xs my-2">
                  <table className="w-full border-collapse border border-gray-200 rounded-lg text-left">
                    <thead>
                      <tr className="bg-slate-100 text-black font-bold">
                        <th className="p-2 border border-gray-200">Parameter</th>
                        <th className="p-2 border border-gray-200">Direct Bank Negotiation</th>
                        <th className="p-2 border border-gray-200">CredSettle Legal Representation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-black font-normal">
                      <tr>
                        <td className="p-2 font-bold border border-gray-200">Contact Level</td>
                        <td className="p-2 border border-gray-200">Branch staff / Recovery callers with zero waiver authority</td>
                        <td className="p-2 border border-gray-200">Zonal Settlement Committees &amp; Stressed Asset Chiefs</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-gray-200">Legal Notice Defense</td>
                        <td className="p-2 border border-gray-200">Borrower is vulnerable to ex-parte court orders &amp; warrants</td>
                        <td className="p-2 border border-gray-200">Formal legal replies filed, staying litigation</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-gray-200">Waiver Percentage</td>
                        <td className="p-2 border border-gray-200">Modest (10%–25% interest concession only)</td>
                        <td className="p-2 border border-gray-200">Deep Haircuts (40%–65% principal &amp; charge reduction)</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-gray-200">Guarantee Release</td>
                        <td className="p-2 border border-gray-200">Often omitted, leaving personal promoters liable</td>
                        <td className="p-2 border border-gray-200">Strict legal covenants discharging all guarantors</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              </section>

              {/* Section 60 */}
              <section id="settlement-fees-charges-structure" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 60
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  60. Business Loan Settlement Fees and Charges
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Professional business loan settlement operates under transparent, contractually documented fee structures designed to align the settlement firm&apos;s incentives with the client&apos;s financial recovery. Reputable firms operate on a two-component model: an initial legal retainer to cover advocate representation notices, forensic ledger audits, and hardship docket compilation, followed by a milestone-linked success fee tied directly to the actual monetary waiver achieved.
                </p>
                <p>
                  Beware of unethical operators demanding large upfront cash fees with guarantees of 90% debt cancellation. Legitimate banking advocates never guarantee a specific percentage before auditing bank ledgers, never handle settlement funds directly (all settlement payments must be made directly to the bank via RTGS/NEFT to the loan account), and provide full tax-compliant GST invoices for all professional legal services.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 8: CLOSURE DOCUMENTS & FUTURE BORROWING (61–70)              */}
              {/* =================================================================== */}

              {/* Section 61 */}
              <section id="what-happens-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 61
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  61. What Happens After Business Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Remitting the final agreed settlement payment marks the formal conclusion of debt compromise negotiations and the commencement of the post-settlement administrative and legal closure workflow. Within 15 to 30 days of payment clearance, the lending bank or NBFC must update its core banking system (CBS), permanently zero out the loan ledger, and cancel all active collection mandates.
                </p>
                <p>
                  Simultaneously, the bank&apos;s legal panel is instructed to file formal withdrawal applications for all pending judicial proceedings—including dropping Section 138 NI Act cheque cases, filing compromise consent decrees before the DRT, and terminating civil recovery suits. The lender then executes an official No Dues Certificate, delivers back all original mortgaged property documents, and submits updated status files to the four licensed credit bureaus.
                </p>
                </div>
              </section>

              {/* Section 62 */}
              <section id="settlement-letter-ndc-documents" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 62
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  62. Settlement Letter, No-Dues Certificate and Other Documents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A commercial loan is not legally closed until the borrower secures and permanently archives four indispensable legal instruments issued under official bank seal:
                </p>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">1. Settlement Sanction Letter</span>
                    <p className="text-black font-normal">The original signed document on bank letterhead specifying the net sanctioned compromise amount, exact tranche schedule, account numbers, and complete waiver clauses.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">2. No Dues Certificate (NDC) / Closure Letter</span>
                    <p className="text-black font-normal">The definitive legal instrument confirming that all claims against the enterprise, promoters, and guarantors have been fully and irrevocably satisfied with zero balance remaining.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">3. Charge Satisfaction Letter (ROC Form CHG-4)</span>
                    <p className="text-black font-normal">For corporate borrowers, the bank must execute and sign Form CHG-4 for filing with the Ministry of Corporate Affairs (MCA) to formally vacate the registered charge on company assets.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">4. Original Document Handover Acknowledgement</span>
                    <p className="text-black font-normal">An itemized receipt signed by bank officials returning original title deeds, sale deeds, share certificates, and personal guarantee deeds.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 63 */}
              <section id="check-settlement-status-credit-report" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 63
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  63. How to Check Business Loan Settlement Status on Credit Report
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Approximately 45 to 60 days following the execution of your settlement payment, you must conduct a thorough credit bureau audit. Commercial borrowers should pull the company&apos;s Commercial Credit Report (CCR) from CIBIL and CRIF High Mark, while individual promoters and guarantors should access their personal consumer credit reports.
                </p>
                <p>
                  Examine the credit file for three critical indicators: (1) The <strong>Current Balance</strong> must strictly display ₹0, (2) The <strong>Amount Overdue</strong> must strictly display ₹0, and (3) The <strong>Account Status</strong> should read &quot;Settled&quot; or &quot;Post-Write-Off Settled.&quot; If the report continues to display an active overdue balance or continuing DPD delinquency, the bank has committed an administrative reporting error that requires immediate legal escalation.
                </p>
                </div>
              </section>

              {/* Section 64 */}
              <section id="correct-incorrect-bureau-reporting" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 64
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  64. How to Correct Incorrect Credit Bureau Reporting After Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Banks frequently suffer from operational lag, with central credit reporting desks failing to reconcile settlements finalized by regional Stressed Asset branches. If your credit report incorrectly reflects active default after receiving an NDC, follow this 3-tier correction protocol:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Tier 1: Online Bureau Dispute Filing:</span> File a formal dispute on the CIBIL / Experian portal attaching certified copies of your OTS Sanction Letter, payment UTR receipt, and No Dues Certificate.
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Tier 2: Principal Nodal Officer (PNO) Escalation:</span> Serve an urgent legal demand on the bank&apos;s Principal Nodal Officer under Section 21 of CICRA 2005, giving them 30 days to rectify the erroneous data.
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="font-bold text-blue-700">Tier 3: RBI Ombudsman Complaint:</span> If uncorrected after 30 days, lodge a complaint on the RBI CMS portal. The Ombudsman can penalize the bank ₹100 per day of default and award compensation for business harm.
                  </div>
                </div>
                </div>
              </section>

              {/* Section 65 */}
              <section id="common-mistakes-to-avoid" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 65
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  65. Common Mistakes to Avoid During Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In commercial loan settlement, minor procedural missteps can cause catastrophic financial losses. Avoid these four fatal mistakes:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black font-normal">
                  <li><strong>Paying Based on Verbal Promises:</strong> Never transfer funds based on an oral assurance from a recovery agent or branch manager. Without an official stamped OTS letter, the bank treats your payment as a standard recovery against penal interest, resetting the 3-year limitation clock.</li>
                  <li><strong>Missing Agreed Payment Deadlines:</strong> OTS letters contain strict default clauses. Missing a tranche deadline by even 24 hours can automatically revoke the settlement, with the bank forfeiting deposited funds and reinstating the full original claim.</li>
                  <li><strong>Ignoring Personal Guarantee Release:</strong> Settling a corporate loan without explicit written discharge of director personal guarantees leaves the promoters personally exposed to residual civil suits.</li>
                  <li><strong>Neglecting Court Case Withdrawal:</strong> Failing to require the bank to file joint compromise terms in pending Section 138 NI Act or DRT cases allows court proceedings to continue unmonitored.</li>
                </ul>
                </div>
              </section>

              {/* Section 66 */}
              <section id="settlement-scams-and-fraud-safety" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 66
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  66. Business Loan Settlement Scams and Fraud – How to Stay Safe
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The commercial debt resolution ecosystem has seen a proliferation of fraudulent operators who prey on desperate business promoters facing insolvency. Common scam vectors include fake recovery agencies issuing forged settlement letters on cloned bank stationery, or unauthorized intermediaries demanding cash payments or transfers into private third-party bank accounts.
                </p>
                <p>
                  To protect your enterprise from fraud, adhere strictly to three golden rules: (1) <strong>Verify the Sanction Letter:</strong> Always cross-verify the OTS Sanction Letter directly with the bank&apos;s Zonal Stressed Asset branch before transferring any funds, (2) <strong>Direct Account Remittance Only:</strong> All settlement payments must be made strictly via RTGS/NEFT directly into your official loan account number with the lending bank—never to any individual or settlement company account, and (3) <strong>Demand Bank Acknowledgement:</strong> Insist on a formal stamped bank receipt for every tranche deposited.
                </p>
                </div>
              </section>

              {/* Section 67 */}
              <section id="can-you-get-business-loan-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 67
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  67. Can You Get a Business Loan After Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Yes, an enterprise can secure commercial financing after executing a loan settlement, but borrowing pathways and underwriting criteria will shift during the transitional recovery phase. Mainstream Tier-1 scheduled commercial banks will enforce the mandatory 12-month RBI cooling-off period during which unsecured credit facilities are unavailable.
                </p>
                <p>
                  However, modern commercial credit evaluation has evolved beyond simple CIBIL scores. Emerging MSME fintech lenders, private credit funds, and revenue-based financiers evaluate enterprises based on <strong>real-time operational cash flows</strong>, GST invoice velocity, and merchant bank transactions. By demonstrating strong ongoing operating margins and maintaining clean current account operations, businesses routinely qualify for structured invoice discounting, machinery leasing, and secured credit lines within 12 to 18 months of settlement.
                </p>
                </div>
              </section>

              {/* Section 68 */}
              <section id="can-company-get-finance-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 68
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  68. Can a Company Get Finance After Business Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  For incorporated private limited companies and LLPs, executing an OTS actually cleanses the corporate balance sheet of toxic, non-performing liabilities that previously blocked external equity investment or venture debt. Once the bank files Form CHG-4 with the Registrar of Companies (ROC) satisfying the registered charge, the company&apos;s asset register is legally liberated.
                </p>
                <p>
                  With legacy defaults extinguished, the corporate entity can attract fresh equity investment, onboard strategic angel capital, or secure asset-backed trade credit from industrial suppliers who were previously unwilling to engage with an NPA-burdened enterprise.
                </p>
                </div>
              </section>

              {/* Section 69 */}
              <section id="can-directors-get-loans-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 69
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  69. Can Directors Get Loans After Business Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Whether company directors can access personal financing (such as home loans, auto loans, or personal credit cards) following a corporate business loan settlement depends entirely on how the settlement covenants were structured. If the settlement deed properly discharged the director&apos;s personal guarantee and the bank updated the bureau without individual delinquency marks, the director&apos;s personal credit file remains clean.
                </p>
                <p>
                  If the director was listed as an individual co-borrower, their personal CIBIL score will reflect the &quot;Settled&quot; status for the cooling-off period. However, directors can rapidly rebuild creditworthiness by maintaining secured credit cards, showing healthy personal ITR filings, and applying to progressive private lenders who look past commercial settlement history when assessing secured home loans.
                </p>
                </div>
              </section>

              {/* Section 70 */}
              <section id="impact-on-gst-mca-records" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 70
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  70. Can a Settled Business Loan Affect GST, MCA or Other Business Records?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A common concern among business promoters is whether a loan settlement negatively impacts official statutory registrations—such as GSTIN status, MCA filings, Director Identification Numbers (DIN), or Import Export Codes (IEC).
                </p>
                <p>
                  The legal reality is completely reassuring: a commercial loan compromise is a private contract resolution governed by the Indian Contract Act and RBI banking directives. It does <strong>not</strong> result in statutory disqualification under Section 164 of the Companies Act, 2013, does not trigger GST cancellation, and does not revoke municipal trade licenses or IEC registrations. On the contrary, filing Form CHG-4 satisfies open charges on the MCA portal, presenting a clean, unencumbered corporate public record.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 9: TAXATION, SARFAESI, GUARANTEES & COURT LAWS (71–77)       */}
              {/* =================================================================== */}

              {/* Section 71 */}
              <section id="tax-implications-business-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 71
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  71. Tax Implications of Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The taxation of waived debt amounts following a commercial compromise settlement is a complex legal-financial domain governed by the Income Tax Act, 1961 and binding judicial precedents established by the Supreme Court of India. When a bank writes off principal debt or interest dues under an OTS, borrowers must understand whether the waived sum constitutes taxable business income or a non-taxable capital receipt.
                </p>
                <p>
                  In its landmark ruling in <em>CIT v. Mahindra &amp; Mahindra Ltd. (2018)</em>, the Supreme Court held that the waiver of a loan taken for the purchase of <strong>capital assets</strong> (plant, machinery, real estate) constitutes a capital receipt that is not taxable under Section 28(iv) or Section 41(1) of the Income Tax Act, provided the asset cost is suitably adjusted for depreciation under Section 43(6). Conversely, the waiver of a loan utilized for <strong>working capital or revenue expenditure</strong> (inventory, wages, operational supplies) where interest deductions were claimed in previous tax years may attract Section 41(1) as remission of trading liability.
                </p>
                <p>
                  Furthermore, regarding Section 194R (TDS on benefit or perquisite arising from business), the Central Board of Direct Taxes (CBDT) issued Circular No. 18/2022 explicitly clarifying that Section 194R TDS does <strong>not apply to loan waivers or concessions granted by scheduled commercial banks and financial institutions</strong> under OTS frameworks.
                </p>
                </div>
              </section>

              {/* Section 72 */}
              <section id="accounting-treatment-loan-waiver" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 72
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  72. Business Loan Settlement and Accounting Treatment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In enterprise financial accounting governed by Indian Accounting Standards (Ind AS 109 - Financial Instruments) or standard Indian GAAP (AS-9 / AS-5), the execution of a compromise settlement triggers derecognition of a financial liability from the corporate balance sheet.
                </p>
                <p>
                  When the settlement is finalized and the No Dues Certificate is issued, the difference between the carrying ledger amount of the liability and the actual consideration paid is recognized in the Profit and Loss Account as an <strong>Exceptional Item</strong> titled &quot;Gain on Settlement of Debt / Loan Waiver.&quot; For capital loans, companies may credit this surplus directly to Capital Reserve. Proper accounting documentation ensures transparency during statutory audits and protects the company from adverse tax scrutiny.
                </p>
                </div>
              </section>

              {/* Section 73 */}
              <section id="settlement-and-personal-guarantees" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 73
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  73. Business Loan Settlement and Personal Guarantees
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Personal guarantees executed by company promoters, directors, or third-party family members represent the lender&apos;s most lethal recovery weapon. Under Section 128 of the Indian Contract Act, 1872, the liability of a surety is co-extensive with that of the principal debtor, meaning the bank is not legally required to exhaust remedies against the corporate borrower before attaching the personal guarantor&apos;s assets.
                </p>
                <p>
                  During settlement negotiations, our legal team ensures that the Settlement Sanction Letter incorporates absolute discharge language. Under Section 133, 134, and 135 of the Contract Act, any valid compromise entered into between the creditor and the principal debtor discharges the surety. We require the bank to explicitly confirm that the personal guarantee deed is cancelled, return the original guarantee documents, and waive all rights to initiate personal insolvency under Section 95 of the IBC.
                </p>
                </div>
              </section>

              {/* Section 74 */}
              <section id="settlement-and-collateral-security" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 74
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  74. Business Loan Settlement and Collateral/Security
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  For secured commercial loans backed by registered or equitable mortgages on commercial sheds, industrial plots, or director residential homes, the primary objective of settlement is the swift, unencumbered retrieval of title deeds. Under the landmark RBI Circular dated September 13, 2023 (<em>Release of Movable / Immovable Property Documents on Repayment / Settlement of Personal / MSME Loans</em>), regulated entities are legally mandated to <strong>release all original property documents within 30 days</strong> of full settlement clearance.
                </p>
                <p>
                  If a bank delays releasing original deeds beyond 30 days, the RBI circular requires the bank to compensate the borrower at the rate of <strong>₹5,000 for each day of delay</strong>, in addition to replacing lost documents at the bank&apos;s expense. CredSettle actively enforces these regulatory directives to guarantee the physical recovery of your valuable property documents.
                </p>
                </div>
              </section>

              {/* Section 75 */}
              <section id="settlement-and-sarfaesi-proceedings" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 75
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  75. Business Loan Settlement and SARFAESI Proceedings
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When a secured business loan defaults, lenders invoke the <strong>SARFAESI Act, 2002</strong> to bypass civil courts and enforce security interests. The bank issues a 60-day demand notice under Section 13(2), followed by a Section 13(4) possession notice to take symbolic or physical custody of the mortgaged asset, subsequently applying to the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) under Section 14 to evict occupants.
                </p>
                <p>
                  CredSettle&apos;s banking advocates counter SARFAESI escalation through aggressive statutory defenses. We file comprehensive objections under Section 13(3A) of SARFAESI, which the bank is legally obligated to consider within 15 days. If the bank proceeds coercively, we file a Securitisation Application (SA) before the <strong>Debt Recovery Tribunal (DRT)</strong> under Section 17, challenging improper valuation, illegal interest capitalization, or flawed auction notices. This judicial stay halts auction proceedings and compels the bank&apos;s leadership to execute an amicable OTS.
                </p>
                </div>
              </section>

              {/* Section 76 */}
              <section id="settlement-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 76
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  76. Business Loan Settlement and Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  During commercial loan sanction, lenders routinely collect undated security cheques or electronic NACH auto-debit mandates from business promoters. When cash flow fails and EMIs bounce, lenders present these security cheques for clearing. Upon dishonor for &quot;insufficient funds,&quot; the bank issues a 15-day statutory demand notice followed by criminal complaints against the company and individual signatories.
                </p>
                <p>
                  Our defense strategy establishes that the dishonored cheques were delivered strictly as advance collateral security rather than against an existing crystallized debt at the time of delivery. More importantly, we leverage Supreme Court precedents holding that Section 138 cases are essentially civil debt disputes dressed in criminal garb, using our structured settlement negotiations to ensure that criminal complaints are formally withdrawn upon settlement.
                </p>
                </div>
              </section>

              {/* Section 77 */}
              <section id="settlement-section-138-ni-act" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 77
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  77. Business Loan Settlement and Section 138 NI Act
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Complaints filed under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007 (for bounced e-NACH mandates) are <strong>fully compoundable offenses</strong> under Section 147 of the NI Act and Section 320 of the Code of Criminal Procedure (CrPC).
                </p>
                <p>
                  In <em>M/s Meters and Instruments Pvt. Ltd. v. Kanchan Mehta (2018)</em> and <em>Damodar S. Prabhu v. Sayed Babalal H. (2010)</em>, the Supreme Court ruled that the primary objective of Section 138 is recovery of money, not criminal incarceration. Once a compromise settlement is executed and the agreed amount is paid, the bank is legally obligated to file an application for compounding or withdrawal before the Metropolitan Magistrate, resulting in the immediate dismissal of the complaint and total acquittal of the directors.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 10: SCENARIOS, ACTIONABLE RULES, FAQS & SHIELD (78–84)       */}
              {/* =================================================================== */}

              {/* Section 78 */}
              <section id="common-business-settlement-scenarios" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 78
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  78. Common Business Loan Settlement Scenarios and Solutions
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In commercial debt practice, business distress patterns typically fall into four distinct operational scenarios, each requiring a tailored legal-negotiation strategy:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario A: The Manufacturing MSME with Delayed Govt/PSU Receivables</span>
                    <p className="text-black font-normal"><strong>Challenge:</strong> An auto-component supplier with ₹1.2 Cr working capital debt defaults because state procurement agencies delayed ₹90 Lakhs of payments for 14 months.<br /><strong>Solution:</strong> We invoke the MSMED Act delayed payment provisions, present MSME Samadhaan filings to the bank&apos;s Stressed Asset Committee, and negotiate an OTS freezing interest and settling the principal with a 50% haircut.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario B: Shuttered Retail Firm with Multiple Unsecured Digital Lines</span>
                    <p className="text-black font-normal"><strong>Challenge:</strong> A retail clothing brand took 4 unsecured digital business loans totaling ₹45 Lakhs. Due to lease hikes, the shop closed permanently.<br /><strong>Solution:</strong> With zero commercial assets and cancelled GST, we file commercial closure affidavits with all 4 lenders simultaneously, settling the unsecured liabilities for an average of 35% of ledger claims.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario C: Commercial Property Loan Facing Imminent SARFAESI Auction</span>
                    <p className="text-black font-normal"><strong>Challenge:</strong> An industrial warehouse mortgaged against a ₹2 Cr loan receives a SARFAESI Section 13(4) possession notice and auction date.<br /><strong>Solution:</strong> We file a Securitisation Application before the DRT challenging auction valuation flaws, secure an interim stay, and negotiate a bilateral OTS saving the mortgaged property from distress liquidation.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario D: Corporate Default with Personal Director Guarantees Invoked</span>
                    <p className="text-black font-normal"><strong>Challenge:</strong> A private limited tech company shuts down, but directors face personal asset attachment under Section 128 Contract Act.<br /><strong>Solution:</strong> We execute an out-of-court corporate compromise that explicitly discharges director personal guarantees and cancels Section 138 NI Act notices.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 79 */}
              <section id="dos-and-donts-business-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 79
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  79. Do&apos;s and Don&apos;ts During Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-emerald-50/50 border border-emerald-300 rounded-xl space-y-2">
                    <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      CRITICAL DO&apos;S
                    </h4>
                    <ul className="text-black space-y-1.5 list-disc pl-4 font-normal">
                      <li>Channel all communication through registered legal counsel via formal representation notices.</li>
                      <li>Maintain rigorous copies of audited financial accounts, GST returns, and proof of commercial distress.</li>
                      <li>Demand an official written Settlement Sanction Letter signed by a competent Scale-IV/V officer.</li>
                      <li>Ensure the sanction letter explicitly discharges director personal guarantees and co-borrowers.</li>
                      <li>Remit payments strictly via direct RTGS/NEFT to the bank&apos;s official loan account.</li>
                    </ul>
                  </div>
                  <div className="p-3.5 bg-red-50/50 border border-red-300 rounded-xl space-y-2">
                    <h4 className="font-bold text-red-950 text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span>
                      DANGEROUS DON&apos;TS
                    </h4>
                    <ul className="text-black space-y-1.5 list-disc pl-4 font-normal">
                      <li>Never pay cash or transfer funds into third-party personal accounts or recovery agent accounts.</li>
                      <li>Never pay token sums without an official written OTS sanction confirming it forms part of settlement.</li>
                      <li>Never reveal hidden liquid family reserves during informal conversations with branch staff.</li>
                      <li>Never ignore statutory court summons under Section 138 NI Act or DRT notices.</li>
                      <li>Never miss an agreed settlement tranche payment deadline, which automatically revokes the OTS.</li>
                    </ul>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 80 */}
              <section id="comprehensive-faqs-business-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 80
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  80. Frequently Asked Questions About Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">Can a secured business loan be settled without losing the mortgaged property?</p>
                    <p className="text-black font-normal">Yes. CredSettle regularly negotiates compromise settlements on secured business loans where the lender accepts a cash compromise based on realistic distress sale valuation, returning all original title deeds within 30 days under RBI guidelines.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">Is business loan settlement legally recognized by the Reserve Bank of India?</p>
                    <p className="text-black font-normal">Yes, 100% legal. The RBI codified this under its landmark circular on Compromise Settlements and Technical Write-offs (June 8, 2023), directing all banks and NBFCs to maintain board-approved compromise policies for non-wilful defaulters.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">Can business loan recovery agents send police to arrest company directors?</p>
                    <p className="text-black font-normal">No. Debt default is purely a civil contract breach under the Indian Contract Act. Police have zero legal authority to arrest borrowers for bank loan defaults. Threatening police arrest constitutes criminal extortion and impersonation under the BNS.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">What happens to personal guarantees executed by directors after settlement?</p>
                    <p className="text-black font-normal">A professionally negotiated settlement contractually extinguishes all personal guarantees under Sections 133–135 of the Indian Contract Act, requiring the bank to return original guarantee deeds and vacate all claims.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">How long does a business loan settlement take from start to finish?</p>
                    <p className="text-black font-normal">A structured commercial settlement typically takes 4 to 12 weeks, spanning initial audit, legal representation notice, hardship filing, Zonal Committee negotiation, sanction letter issuance, and NDC receipt.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 81 */}
              <section id="professional-business-settlement-assistance" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 81
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  81. Professional Business Loan Settlement Assistance
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Resolving high-stakes commercial debt requires specialized institutional advocacy at the intersection of banking regulations, corporate insolvency law, and forensic accounting. Professional settlement assistance provides distressed commercial borrowers with an authoritative institutional buffer against aggressive recovery departments.
                </p>
                <p>
                  CredSettle deploys senior banking advocates who have represented major public sector banks, private lenders, and corporate debtors across India. We level the playing field by conducting forensic audits of loan ledgers to uncover illegal interest compounding, drafting statutory replies that halt DRT and SARFAESI escalation, and presenting compelling financial hardship dockets that command immediate respect before bank Zonal Credit Committees.
                </p>
                </div>
              </section>

              {/* Section 82 */}
              <section id="why-choose-credsettle-business-loans" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 82
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  82. Why Choose Professional Business Loan Settlement Services?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Over 8,500+ commercial enterprises, MSMEs, and business promoters have entrusted their debt resolution to CredSettle for five defining institutional capabilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Senior Banking Advocates</span>
                    <p className="text-black font-normal">Dedicated legal representation under the Advocates Act, 1961 ensuring full immunity against coercive harassment.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Deepest Principal Waivers</span>
                    <p className="text-black font-normal">Proven track record achieving 40% to 70% total debt reduction across public, private, and NBFC lenders.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Complete Legal Shield</span>
                    <p className="text-black font-normal">Comprehensive defense across SARFAESI Sec 13(2)/13(4), DRT Securitisation Applications, and Sec 138 NI Act compounding.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Guarantee &amp; Collateral Release</span>
                    <p className="text-black font-normal">Guaranteed retrieval of original property title deeds and complete cancellation of director personal guarantees.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Consolidated Portfolios</span>
                    <p className="text-black font-normal">Simultaneous coordination of multiple lenders, eliminating cross-litigation and competing recovery actions.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">100% Confidentiality</span>
                    <p className="text-black font-normal">Strict enterprise data security protecting your commercial brand reputation, suppliers, and customer relationships.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 83 */}
              <section id="complete-step-by-step-guide" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 83
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  83. Business Loan Settlement – Complete Step-by-Step Guide
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  To achieve a successful commercial settlement that permanently resolves debt while safeguarding assets, follow this unified 5-step operational protocol:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 1: Financial &amp; Legal Audit</span>
                    <p className="text-black font-normal">Aggregate all loan agreements, mortgage deeds, sanction letters, and 12-month bank statements to establish total exposure and identify misapplied penal compounding.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 2: Formal Legal Representation Notice</span>
                    <p className="text-black font-normal">Serve notice under the Advocates Act 1961 directing all future bank correspondence through your legal desk, immediately halting unauthorized recovery visits to commercial premises.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 3: Compilation of the Commercial Hardship Docket</span>
                    <p className="text-black font-normal">Document operational distress through audited P&amp;L accounts, GST cancellation filings, lease terminations, and debtor defaults to prove non-wilful commercial failure.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 4: Zonal Settlement Committee Advocacy</span>
                    <p className="text-black font-normal">Present the formal OTS petition to the bank&apos;s executive Stressed Asset division, negotiating maximum principal haircuts and securing a written Compromise Sanction Letter.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 5: Execution, Document Retrieval &amp; Closure</span>
                    <p className="text-black font-normal">Remit the sanctioned settlement payment directly to the bank via RTGS, secure the authenticated No Dues Certificate, retrieve original title deeds, and satisfy ROC charges.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 84 */}
              <section id="conclusion-understanding-business-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 84
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  84. Conclusion – Understanding Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In commercial enterprise, financial distress and business failure are not moral defects; they are structural risks inherent to commercial entrepreneurship. When unforeseen macroeconomic shocks, client insolvencies, or market disruptions render debt unserviceable, continuing to deplete personal family assets to pay compounding bank interest is neither commercially sensible nor legally necessary.
                </p>
                <p>
                  Business loan settlement under the Reserve Bank of India&apos;s compromise framework provides an honorable, legally sound, and definitive exit. It allows you to legally write off unmanageable commercial debt, permanently discharge personal promoter guarantees, shield valuable mortgaged real estate from distress auction, and close painful legal proceedings.
                </p>
                <p>
                  With seasoned legal representation from CredSettle, you do not have to face aggressive recovery departments or institutional bank committees alone. Take decisive control of your commercial liabilities today, assert your statutory rights, and build a clean foundation for your next entrepreneurial venture.
                </p>
                <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-xl text-white text-center space-y-2 mt-4 shadow-md">
                  <h4 className="text-base font-bold text-white">Resolve Your Commercial Business Debt Today</h4>
                  <p className="text-xs text-blue-200 max-w-xl mx-auto">
                    Speak directly with a senior banking litigation advocate. We audit your loan agreements, halt recovery harassment within 24 hours, and negotiate maximum RBI-compliant OTS waivers.
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
                <BanksGrid serviceType="business-loan-settlement" servicePath="/services/business-loan-settlement" />
              </div>

              {/* Conclusion Callout Box Matching loan-settlement */}
              <div className="border-t border-gray-200 pt-6 sm:pt-8 space-y-4">
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-xl font-bold">Defend Your Enterprise &amp; Settle Commercial Debt</h3>
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                    Struggling with unserviceable business loans, cash credit limits, or recovery notices? Consult CredSettle’s corporate banking advocates for a comprehensive balance sheet compromise, legal shielding, and closure.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto inline-block text-center bg-white text-blue-950 font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-xs sm:text-sm active:scale-98"
                    >
                      Book a Free Commercial Debt Evaluation
                    </Link>
                  </div>
                </div>
              </div>

            </article>
          </div>

          {/* ===================================================================== */}
          {/* RIGHT COLUMN: STICKY CONVERSION & SARFAESI DEFENSE CARD (15%)         */}
          {/* ===================================================================== */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-20 space-y-4">
            <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-blue-200 text-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center text-sm mb-2">
                🛡️
              </span>
              <h4 className="font-bold text-xs text-black mb-1">Protect Business Assets</h4>
              <p className="text-[10px] text-black mb-3 leading-tight">
                Senior advocates file DRT objections and halt SARFAESI auctions within statutory deadlines.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-blue-600 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-[11px]"
              >
                Request Corporate Review
              </Link>
              <div className="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-black space-y-1 text-left">
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% Confidential</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> SARFAESI &amp; DRT Shield</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> Director Personal Immunity</p>
              </div>
            </div>

            {/* Diagnostic Calculator Quick Jump */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-black">
              <span className="font-bold text-black block text-[11px]">Commercial OTS Calculator</span>
              <p className="text-[10px] text-black leading-tight">Estimate commercial compromise haircut &amp; savings.</p>
              <a href="#business-loan-ots-calculator" className="text-[10px] text-blue-600 font-semibold block pt-1 hover:underline">Calculate Haircut ↓</a>
            </div>

            {/* Official Regulatory Links */}
            <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200 text-blue-950 text-xs space-y-1.5">
              <strong className="block text-[11px] font-bold text-blue-900">Official Portals</strong>
              <a
                href="https://cms.rbi.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] text-blue-700 hover:underline"
              >
                🔗 RBI CMS Portal (cms.rbi.org.in)
              </a>
              <a
                href="https://drt.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] text-blue-700 hover:underline"
              >
                🔗 DRT e-Filing Portal (drt.gov.in)
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
          href="#business-loan-ots-calculator"
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
