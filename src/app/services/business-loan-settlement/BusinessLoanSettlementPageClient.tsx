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
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight leading-snug break-words">
            Business Loan Settlement in India
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200"> The Complete Legal, MSME &amp. OTS Master Guide </p>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1"> Resolve trade defaults. Working cash limits. Term loans. And overdrafts under RBI settlement rules. Protect directors. Private guarantors. And mortgaged pledge with senior banking lawyers. </p>
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
                    <div className="font-bold text-sm">Table of Contents</div>
                    <p className="text-[10px] text-slate-300">84 Master Sections • firm loans settlement</p>
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
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-black px-2"> {module.moduleTitle} </p>
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
                <div className="font-bold text-black text-xs">Table of Contents</div>
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
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-black px-1 py-0.5"> {module.moduleTitle.replace('Module ', 'M')} </p>
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
                <div className="font-bold text-xs text-white">Commercial Debt?</div>
              </div>
              <p className="text-[10px] text-blue-200 mb-2 leading-snug"> Senior lawyers safeguard directors, guarantors. And mortgaged pledge from coercive SARFAESI actions. </p>
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
                  <p> Running a trade firm in India entails major market swings. Supply-chain vulnerabilities, delayed trade receivables. RBI transitions. unpredictable economic headwinds. When unexpected income contractions or client insolvencies impair a company&apos. S cash flow. Meeting regular monthly loan servicing debts on term loans. Machinery credits, working cash limits. Or overdrafts becomes mathematically unviable. </p>
                <p> Faced with ballooning compound interest. Punitive penal charges. And aggressive claims actions. Trade promoters often feel trapped between company survival and catastrophic private bankruptcy. Firm loans settlement provides a structured. Legally sanctioned exit method. Under legal Reserve Bank of India (RBI) prudential norms. Trade banks and Non-Banking money Companies (NBFCs) are empowered to settle one-time deals that clear trade debt for a mutually determined lump-sum payment. </p>
                <p> Settling a firm loans is not an evasion of debt risk. it is an established trade relief protocol. It enables viable founders to legally discharge unserviceable debts. Halt coercive court cases. Prevent asset distress sales. And preserve daily momentum to rebuild firm value. </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl text-xs text-blue-950 space-y-1">
                  <p className="font-bold text-blue-900">Key trade Reality:</p>
                  <p className="font-medium text-black"> A firm loans default is fundamentally a civil contract breach governed by the Indian Contract Act. 1872. Indian banks maintain dedicated Non-Performing Asset (NPA) loss provisioning reserves mainly mandated by the RBI to absorb settled settlement haircuts for bona fide stressed firms. </p>
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
                  <p> firm loans settlement. formally executed within the Indian banking sector as a One-Time settlement (OTS) or one-time settlement. Is a binding tripartite or bipartite legal pacts entered into between a client (proprietorship. Partnership. LLP. Or private limited company) and a lending bank or NBFC. Under this contractual relief. The lender agrees to accept a greatly discounted lump-sum payment or phased tranches as full. Final. And irreversible discharge of all unpaid claims. </p>
                <p> Unlike loan restructuring. Which merely reschedules loan tenure. Reduces interest rates. Or adds a temporary moratorium while keeping the main loan debt intact. a settlement results in the fast extinguishment of the debt ledger. In exchange for the agreed settlement payment. The bank waives 100% of built up penal interest. Cancels accrued compound interest. Absorbs a settled haircut on the core base loan. Withdraws ongoing legal petitions. And issues an irrevocable No Dues letter (NDC). </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h3 className="font-bold text-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Irrevocable Legal Discharge
                    </h3>
                    <p className="text-black font-normal"> The lender issues a formal settlement Sanction Letter followed by an authenticated No Dues letter (NDC). Legally barring all future claims attempts across all legal forums. </p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h3 className="font-bold text-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Collateral &amp; Guarantee Release
                    </h3>
                    <p className="text-black font-normal"> Pledged title deeds. Trade machinery charges registered with ROC/CERSAI. And private guarantees of directors and third parties are formally vacated and returned. </p>
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
                  <p> In straightforward trade terms. Firm loans settlement means closing your trade debt for greatly less than what the bank claims on paper. For instance. Suppose an tech MSME availed an no-pledge firm loans of ₹50 Lakhs. Following a major client default. The company missed EMIs for 10 months. With compound interest, penal charges. And legal fees, the bank&apos. s ledger record reflects an inflated unpaid dues of ₹76 Lakhs. </p>
                <p> Through formal settlement support. The firm shows genuine trade failure and audited lack of liquidity. The bank agrees to close the entire account permanently for ₹22 Lakhs to ₹26 Lakhs. Once paid. The ₹50+ Lakhs difference is permanently written off by the bank as an accounting loss. The loan is marked closed/settled with zero dues. And the promoter is liberated from endless claims calls and court cases threats. </p>
                <p> Lenders agree to these major concessions because protracted claims court cases in Debt claims Tribunals (DRT) or bankruptcy actions under the IBC can consume 5 to 8 years. Cost millions in lawyer fees. And often result in near-zero claims if the trade has no liquid assets. A certain cash claims today is financially superior to an uncertain court decree tomorrow. </p>
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
                  <p> firm loans settlement functions through four interconnected stages across the creditor&apos. S credit risk. Legal claims. And executive boards infrastructure: </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-black font-normal">
                  <li><strong>NPA Transition &amp. strict Provisioning:</strong> Once trade installments remain unpaid for 90 days. The loan transitions from Special Mention Account (SMA-2) into a Non-Performing Asset (NPA). Under RBI prudential rules. The lender must provision 15% to 100% against its cash reserves. Heavily incentivizing early claims.</li>
                  <li><strong>Hardship Docket &amp. Net Worth Analysis:</strong> The client. Represented by banking lawyers. Submits an exhaustive trade Hardship Docket containing audited money records. GST return cancellations or turnover dips. Stock valuations. And debtor aging reports proving inability to pay regular dues.</li>
                  <li><strong>settlement alert boards Deliberation:</strong> The offer is placed before the bank&apos. S internal one-time settlement boards (consisting of Assistant General Managers. Chief Risk Officers. And Legal Heads) which calculates the Net Present Value (NPV) of fast claims versus legal enforcement costs.</li>
                  <li><strong>Sanction Issuance &amp. Judicial Consent Terms:</strong> Upon approval. The bank issues a legally binding settlement Sanction Letter. If cases are pending before DRT. Civil courts. Or under Section 138 of the NI Act. Formal joint settlement terms are filed to make sure judicial closure.</li>
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
                  <p> Settling a firm loans requires strategic foresight. Disciplined papers. assertive legal support. Unprepared clients who walk into bank branches asking for discounts are routinely dismissed. Redirected to junior claims staff. Or coerced into signing unsustainable payment commitments that reset the statute of limitations. </p>
                <p> The correct roadmap begins with halting informal oral exchanges with claims agents and serving a formal legal support notice. This channels all future correspondence through authorized legal counsel. Next. Conduct an exhaustive audits of the loan ledger to identify unlawful penal compounding. Uncredited subsidies. misapplied interest rates. Finally. Formulate a data-backed OTS offer demonstrating that the proposed settlement sum represents the maximum recoverable value under existing market constraints. </p>
                <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 text-xs space-y-2 text-black">
                  <h3 className="font-bold text-black text-sm">Strategic Rules for Commercial Borrowers:</h3>
                  <ul className="list-disc pl-4 space-y-1 font-normal">
                    <li>Never submit an OTS request without verifiable proof of money bankruptcy or trade distress.</li>
                    <li>Always insist on an formal written settlement Sanction Letter issued under the signature of an authorized Scale-IV/V officer or Zonal boards head.</li>
                    <li>Never pay token sums or post-dated cheques without written proof that they form part of a sanctioned OTS.</li>
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
                  6. Business Loan Settlement Process: Step by Step
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> A expert firm loans settlement follows a rigorous 6-phase lifecycle that typically spans 4 to 12 weeks. Making sure full legal immunity and complete paper retrieval: </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 1: Commercial Debt &amp; Legal Audit (Days 1–7)</span>
                    <p className="text-black font-normal">Consolidation of sanction letters. Mortgage deeds. Loan lien pacts, private guarantees. And current records of account across all lending institutions.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 2: Legal Representation Notice &amp; Protection (Days 8–14)</span>
                    <p className="text-black font-normal">Lawyers serve formal support notices under the lawyers Act 1961. Directing lenders to cease abuse and halt coercive claims at trade premises.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 3: Hardship Docket &amp; Formal OTS Filing (Days 15–25)</span>
                    <p className="text-black font-normal">Submission of a complete OTS offer backed by P&amp. L accounts, GST cancellation filings. Asset valuation letters. And verifiable trade closure affidavits.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 4: High-Level Zonal Committee Negotiation (Days 26–45)</span>
                    <p className="text-black font-normal">Direct advocacy-led talks with the bank&apos. s Stressed Asset handling Branch (SAMB) to eliminate penal charges and boost main loan haircut percentages.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 5: Sanction Letter Vetting &amp; Execution (Days 46–60)</span>
                    <p className="text-black font-normal">Vetting the bank&apos. S OTS Sanction Letter to make sure explicit guarantee discharge covenants. Zero-claim waivers. And realistic tranche timelines before disbursing funds.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Phase 6: NDC Receipt, Charge Satisfaction &amp; CIBIL Update (Days 61–90)</span>
                    <p className="text-black font-normal">Securing the stamped No Dues letter. Filing Form CHG-4 with the Registrar of Companies (ROC) to satisfy charges. And retrieving original title deeds within 30 days under RBI directives.</p>
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
                  <p> settlement is a surgical money remedy indicated when continuing to service standard debt becomes counterproductive to trade survival. You should seriously consider an OTS when debt servicing costs consistently exceed total operating profit. Forcing the company into a debt trap of borrowing fresh high-interest funds to pay existing EMIs. </p>
                <p> Critical indicators include: (1) Total daily shutdown or surrender of trade licenses. (2) large structural loss of key clients or export orders resulting in permanent income contraction. (3) Receipt of SARFAESI Section 13(2) demand notices or Section 138 NI Act summons. (4) Inability of the firm to generate positive free cash flow for over two consecutive fiscal quarters. And (5) Severe threat of private asset attachment against directors and family guarantors. </p>
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
                  <p> Under the RBI rules for one-time deals and Technical Write-offs (Circular dated June 8. 2023), all regulated trade banks. Local banks. And NBFCs must maintain board-approved policies governing one-time deals for distressed shop owners. </p>
                <p> To be eligible for a trade OTS. An firm must show that its default is non-wilful. Stemming from bona fide economic. Daily. Or market hardship rather than fraudulent diversion or siphoning of borrowed cash. Eligible entities include registered MSMEs. Small trading firms, proprietorship concerns. Partnership firms. LLPs. And private limited companies categorized as Sub-Standard. Doubtful. Or Loss NPAs. </p>
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
                  <p> Virtually all forms of fund-based and non-fund-based trade credit facilities extended by scheduled trade banks. Local rural banks. NBFCs. And fintech platforms can be legally resolved through an OTS: </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Unsecured Business Loans</span>
                    <p className="text-black font-normal">pledge-free trade term loans. Fintech income advances. And merchant cash advances.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Working Capital &amp; Cash Credit (CC)</span>
                    <p className="text-black font-normal">Overdrawn cash credit limits. Working cash demand loans (WCDL). And irregular overdraft accounts.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Machinery &amp; Equipment Loans</span>
                    <p className="text-black font-normal">Asset-backed firm loans where hypothecated tools has suffered severe depreciation.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Commercial Property Loans (LAP)</span>
                    <p className="text-black font-normal">Mortgage-backed loans against factory sheds. Warehouses. Or trade offices facing SARFAESI action.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Trade Finance &amp; Invoice Discounting</span>
                    <p className="text-black font-normal">Bill discounting facilities. Letters of credit (LC) devolutions. And invoked bank guarantees.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-black block mb-1">Government Guaranteed Credit</span>
                    <p className="text-black font-normal">Stressed MSME facilities under CGTMSE and crisis Credit Line Guarantee Scheme (ECLGS).</p>
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
                  <p> The strategic dynamics of firm loans settlement vary fundamentally depending on whether the underlying debt is secured by tangible immovable pledge or extended on an no-pledge basis: </p>
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
                        <td className="p-2.5 font-bold border border-gray-200">pledge at Risk</td>
                        <td className="p-2.5 border border-gray-200">None (No hypothecated immovable asset)</td>
                        <td className="p-2.5 border border-gray-200">trade/Residential Real Estate or Factory</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Lender Legal Weapon</td>
                        <td className="p-2.5 border border-gray-200">Sec 138 NI Act. Sec 25 PSSA. Civil Summary Suits</td>
                        <td className="p-2.5 border border-gray-200">SARFAESI Act 2002 (Sec 13(2). 13(4) takeover)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Typical Haircut Waiver</td>
                        <td className="p-2.5 border border-gray-200">45% to 70% of total ledger dues</td>
                        <td className="p-2.5 border border-gray-200">20% to 45% (tied to distress liquidation value)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">settlement Velocity</td>
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
                  <p> Micro. Small. And Medium firms (MSMEs) registered under the Micro. Small and Medium firms Development (MSMED) Act. 2006 form the economic bedrock of India&apos. s factory fabric. However. MSMEs operate with narrow liquidity buffers. Making them highly vulnerable to delayed payments from large trade buyers or state crop sales firms. Recognizing this vulnerability. The Reserve Bank of India issued dedicated rules. notably the <em>Rules for Revival and Rehabilitation of Micro. Small and Medium firms</em>. mandating that banks explore viable relief methods prior to starting coercive legal action. </p>
                <p> When an MSME faces irreversible money stress. settlement provides a legally protected path to liquidate unmanageable debts without liquidating core operating plant and machinery. CredSettle represents MSME firms before specialized Bank MSME Restructuring boards. Demonstrating daily stress via Udyam Registration profiles. Delayed payment filings on the MSME Samadhaan portal. And audited gross turnover contraction. </p>
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
                  <p> Small trade firms. Such as retail stores. Wholesale distributors. Local transport operators. And small service firms. Often depend on multiple overlapping credit lines. Including no-pledge overdrafts. Working cash demand loans. And fintech firm loans. When local trade slows down or overhead expenses spike. Servicing monthly payments across 3 to 6 lending institutions becomes mathematically impossible. </p>
                <p> Small trade debt settlement consolidates multiple disparate debts into a single. Cohesive legal relief plan. By presenting verified local market challenges. Such as shop lease terminations. Stock obsolescence. Or unrecoverable customer credit ledgers. our legal team negotiates bilateral one-time deals with each bank and NBFC. This lets small shop owners to prevent total bankruptcy and protect private savings. </p>
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
                  <p> Startups operating in technology. Direct-to-clients (D2C) retail. E-commerce. And freight often incur large early-stage burn rates. When anticipated venture cash or venture debt funding rounds fail to materialize. Or when customer acquisition costs exceed lifetime value. Startups holding bank debt or venture financing lines face critical liquidity shortages. </p>
                <p> Settling startup loans requires specialized trade advocacy. Startups typically possess zero immovable real estate pledge. But maintain intellectual property. Software codebases. And digital brand equity. We assist founders in settling structured deals that cleanly clear money debt. Eliminate private promoter debt risk. And shield software IP and brand trademarks from liquidation attachment. </p>
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
                  <p> Self-employed workers. Including doctors, chartered accountants, architects. Engineers, handling consultants. independent contractors. Often secure specialized expert firm loans to establish clinics. Design studios. consulting practices. Unlike salaried clients who have predictable monthly payslips. Self-employed earnings shifting drastically based on project delivery and billing cycles. </p>
                <p> When prolonged illness, client loss. Or market breaks cause loan default. Lenders aggressively target the person because expert loans are underwritten based on the expert&apos. s private credit capacity. We settle one-time deals that reflect actual reduced taxable income (ITR). Preventing aggressive claims visits to clinics or offices and preserving the expert&apos. s trade reputation. </p>
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
                  <p> A sole proprietorship concern has no separate legal existence distinct from its proprietor under Indian trade law. So, the proprietor carries <strong>unlimited private debt risk</strong> for all debts incurred by the trade. When a proprietorship defaults on a firm loans. The lending institution can legally proceed against the proprietor&apos. S private residential savings. Ancestral property. Bank accounts. private vehicles. </p>
                <p> Because private exposure is absolute. Settling an early One-Time settlement is urgent and crucial for sole proprietors. Our lawyers structure offers that establish the proprietor&apos. S total real net worth. Show genuine private economic distress. And settle complete legal discharge. The resulting settlement makes sure that both the trade firm and the person proprietor are released from all civil debt risk and Section 138 NI Act court cases. </p>
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
                  <p> Under Section 25 of the Indian Partnership Act. 1932. Every partner in a registered or unregistered partnership firm is <strong>jointly and severally liable</strong> for all debts and debts of the firm incurred while they are a partner. If one partner becomes insolvent or absconds. The remaining partners remain fully liable to the bank for 100% of the unpaid loan balance. </p>
                <p> Settling partnership debts requires coordinated legal maneuvering. Especially when internal partner claims or dissolution actions are underway. CredSettle designs tripartite settlement pacts that bind all partners and the bank. Making sure that once the agreed settlement sum is satisfied. The lender issues an omnibus discharge that protects each partner individually and bars future contribution suits or cross-court cases. </p>
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
                  <p> A Private Limited Company incorporated under the Companies Act. 2013 is an independent juristic entity endowed with perpetual succession and limited debt risk. In trade debt default. The company&apos. S debts are legally restricted to the assets held within the trade balance sheet. Provided directors have not executed person private guarantees. </p>
                <p> When a trade default reaches critical levels. Money creditors often threaten trade bankruptcy steps (CIRP) petitions before the National Company Law Tribunal (NCLT) under Section 7 of the bankruptcy and Bankruptcy Code (IBC). 2016. CredSettle represents trade debtor boards in pre-NCLT talks. Executing Section 12A IBC withdrawals or out-of-court trade one-time deals that resolve bank debt without stripping promoters of trade control or forcing company liquidation. </p>
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
                  <p> Although the trade veil protects ordinary shareholders. Indian trade banks routinely circumvent trade limited debt risk by demanding full <strong>private guarantees</strong> from managing directors and promoters during credit sanction. Following default. Banks promptly invoke Section 128 of the Indian Contract Act. 1872, asserting that the director&apos. s private debt risk is co-extensive with that of the shop owners. </p>
                <p> Settling loans with director private guarantees demands uncompromising legal precision. Our banking lawyers draft non-negotiable indemnity and release clauses making sure that the settlement Sanction Letter explicitly discharges all director private guarantees. Vacates own property liens. Cancels DIN (Director Identification Number) disqualification risks. And withdraws private bankruptcy notices under Part III of the IBC. </p>
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
                  <p> Family members. Sleeping partners. Or associate firms often sign firm loans pacts as co-clients or third-party pledge guarantors. When the primary trade firm defaults. claims firms aggressively harass these secondary obligants. Freezing their bank accounts and issuing demand notices under the SARFAESI Act. </p>
                <p> A complete firm loans settlement settled by CredSettle encompasses all co-clients and guarantors within the settlement umbrella. We make sure that the settlement deed explicitly clears guarantor debts under Section 133. 134. And 135 of the Indian Contract Act. Returns original title deeds pledged by third parties. And updates credit bureau profiles of guarantors to clear derogatory default marks. </p>
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
                  <p> The actual one-time settlement value achievable on a distressed firm loans varies widely based on asset classification. Default vintage. Presence of tangible pledge. And the trade risk appetite of the lender. In standard retail trade banking practice. deals do not operate on fixed price tags. Rather. They represent the outcome of intense trade talks guided by the lender&apos. s internal one-time settlement policy approved under RBI directives. </p>
                <p> For <strong>no-pledge trade firm loans</strong> with defaults exceeding 180 to 365 days (Doubtful or Loss NPA status). Banks and NBFCs routinely waive 100% of built up penal interest. Compounding interest surcharges. And legal processing charges. Accompanied by a <strong>35% to 65% haircut on the core base loan</strong>. So. An unserviceable ledger debt of ₹1 Crore can often be legally settled and closed for ₹35 Lakhs to ₹50 Lakhs in cash. </p>
                <p> For <strong>secured trade facilities</strong> (backed by real estate or machinery mortgages). The settlement figure is pegged straight to the <em>Distress Sale Value (DSV)</em> or <em>Realizable Value (RV)</em> of the pledged asset minus anticipated court cases expenses and auction holding depreciation. Haircuts on secured loans typically range between 15% and 40% of the total ledger exposure. </p>
                </div>
              </section>

              {/* Section 21 */}
              <section id="settlement-amount-calculation-examples" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 21
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  21. Business Loan Settlement Amount: Calculations
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> To understand how a one-time settlement is calculated. Examine the structural disparity between what the bank&apos. s automated computer ledger demands versus what the bank&apos. s Stressed Asset handling Branch actually accepts under settlement scrutiny: </p>
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
                        <td className="p-2.5 font-bold border border-gray-200">Unamortized main loan</td>
                        <td className="p-2.5 border border-gray-200">₹ 40,00,000</td>
                        <td className="p-2.5 border border-gray-200">settled 45% Haircut</td>
                        <td className="p-2.5 border border-gray-200">₹ 22,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Accrued Regular Interest</td>
                        <td className="p-2.5 border border-gray-200">₹ 14,00,000</td>
                        <td className="p-2.5 border border-gray-200">Reduced to 20% simple interest</td>
                        <td className="p-2.5 border border-gray-200">₹ 2,80,000</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Penal Interest &amp. Bounce Fees</td>
                        <td className="p-2.5 border border-gray-200">₹ 8,50,000</td>
                        <td className="p-2.5 border border-gray-200">100% Complete Waiver</td>
                        <td className="p-2.5 border border-gray-200">₹ 0</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border border-gray-200">Legal Charges &amp. Misc Dues</td>
                        <td className="p-2.5 border border-gray-200">₹ 2,50,000</td>
                        <td className="p-2.5 border border-gray-200">100% Complete Waiver</td>
                        <td className="p-2.5 border border-gray-200">₹ 0</td>
                      </tr>
                      <tr className="bg-emerald-50/60 font-bold text-black">
                        <td className="p-2.5 border border-gray-200">TOTAL unpaid</td>
                        <td className="p-2.5 border border-gray-200 text-red-600 line-through">₹ 65,00,000</td>
                        <td className="p-2.5 border border-gray-200 text-emerald-700">Total Waiver: ₹ 40,20,000 (61.8%)</td>
                        <td className="p-2.5 border border-gray-200 text-emerald-800">₹ 24,80,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p> In the agent case above. An unmanageable claim of ₹65 Lakhs is fully resolved and discharged for ₹24.8 Lakhs. a net monetary saving of ₹40.2 Lakhs (61.8% total debt reduction). This allows the promoter to avert bankruptcy and close all legal exposure permanently. </p>
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
                  <p> The final settlement sanction approved by a bank&apos. s Zonal Credit boards is governed by five decisive trade determinants: </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">1. NPA Aging &amp; Mandatory Capital Provisioning</span>
                    <p className="text-black font-normal">Loans past 365 days of default (Doubtful D2/D3 or Loss assets) have already absorbed 40% to 100% loss provisions on the bank&apos. S balance sheet. Unlocking maximum boards flexibility for large main loan waivers.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">2. Tangibility &amp; Liquidity of Collateral</span>
                    <p className="text-black font-normal">Properties burdened with third-party tenancy. Municipal claims. Or court cases fetch lower auction values. Motivating lenders to accept realistic settlement cash offers.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">3. Audited Inability to Pay (Financial Hardship)</span>
                    <p className="text-black font-normal">Unquestionable documentary proof. Such as cancelled GST letters. Severe daily losses. Or frozen working cash. Proves the client is unable. Not unwilling, to service debt.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">4. Immediate Liquidity &amp; Tranche Speed</span>
                    <p className="text-black font-normal">Lenders offer deeper discounts for fast lump-sum settlement execution (within 30 days) compared to extended multi-tranche payment schemes stretching over 12 months.</p>
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
                  <p> When a trade firm possesses viable long-term cash flow. Paying off debt in full is undeniably the gold standard for preserving pristine trade credit ratings and maintaining bank banking goodwill. Full payment makes sure that the loan account is marked &quot. Closed&quot. On trade credit bureau reports (CIBIL trade. CRIF. Experian) with zero negative remarks. </p>
                <p> However. When trade bankruptcy renders full payment impossible. Attempting to pay full ledger claims by stripping working cash or securing private loan-shark funding leads straight to catastrophic trade ruin. settlement sacrifices short-term credit score perfection to secure debt forgiveness. Halt interest compounding. And salvage trade survival. </p>
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
                  <p> Loan restructuring alters the payment architecture of an active debt debt without forgiving the underlying debt. Common restructuring methods include converting built up unpaid interest into a Funded Interest Term Loan (FITL). Extending payment tenure from 3 years to 7 years. Or granting a 6-month moratorium on main loan servicing. </p>
                <p> Restructuring is viable only when an firm has confirmed. Predictable future cash flows that can comfortably sustain modified monthly EMIs. If core trade work have permanently collapsed or income has dropped by over 60%. Restructuring merely postpones default and increases the ultimate interest burden. Settlement. By contrast. Creates an fast. Permanent closure with large main loan reduction. </p>
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
                  <p> In trade banking vernacular. The terms <strong>firm loans settlement</strong> and <strong>One-Time settlement (OTS)</strong> are often used interchangeably. But denote distinct procedural stages within banking policy. firm loans settlement is the broader legal concept encompassing all forms of bilateral settlement relief between client and lender. </p>
                <p> An OTS. Mainly. Is a standardized RBI product codified under bank board policies and state/central schemes (such as public sector bank non-special OTS schemes). Under an OTS. The bank applies a predetermined formula to compute the settlement sum. Requiring the client to remit an upfront earnest deposit (typically 10% to 15%) upon application and pay the balance within a stipulated 30 to 90-day window. </p>
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
                  <p> It is vital to distinguish between a settled settlement and a sovereign loan waiver. A <strong>loan waiver</strong> is an absolute. Non-reciprocal forgiveness of debt typically announced by central or state governments for farm distress or political relief programs. Where the state exchequer reimburses banks on behalf of clients. trade firm loans are virtually never eligible for state waivers. </p>
                <p> A <strong>settlement</strong>Conversely. Is a purely trade transaction settled between the lender and the client. The bank absorbs an accounting write-off based on hard trade realities. But demands a settled cash consideration from the client in exchange for releasing debts and vacating encumbrances. </p>
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
                  <p> Executing a legally binding firm loans settlement delivers fast strategic and daily advantages to distressed trade firms: </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-black font-normal">
                  <li><strong>large main loan &amp. Interest Reduction:</strong> Forgives 40% to 70% of total ledger debt. Promptly restoring positive net worth.</li>
                  <li><strong>fast Cessation of claims abuse:</strong> Service of legal notices halts aggressive claims calls and illegal site visits.</li>
                  <li><strong>Termination of Active court cases:</strong> Guarantees the formal withdrawal of actions under SARFAESI Act. Section 138 NI Act. DRT suits. And NCLT bankruptcy petitions.</li>
                  <li><strong>Full Discharge of private guarantees:</strong> Liberates directors. Promoters. And family co-clients from lifetime private money debt risk.</li>
                  <li><strong>pledge Retrieval:</strong> Ensures the physical return of title deeds. Release of machinery hypothecations. And ROC charge satisfaction.</li>
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
                  <p> While offers definitive legal debt relief. Clear legal counsel requires acknowledging its inherent trade-offs. The primary result is the credit bureau remark: the settling bank reports the account as &quot. Settled&quot. or &quot. Post-Write-Off settlement&quot. to CIBIL trade and clients bureaus. This causes a temporary credit rating downgrade. </p>
                <p> Also. Under the RBI one-time settlement circular of June 8. 2023. Regulated entities enforce a strict cooling-off period of at least 12 months before sanctioning fresh credit facilities to the settling entity. Finally. Failure to strictly adhere to agreed settlement payment deadlines can cause the lender to revoke the OTS sanction. Forfeiting deposited tokens and reinstating the full original ledger demand. </p>
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
                  <p> When a trade firm executes an OTS. The impact on person CIBIL scores depends on the legal structure of the trade and whether the promoter executed a private guarantees. For sole proprietors and person partners. Firm loans are straight linked to their private Permanent Account Number (PAN). So. When a proprietorship loan is settled. The private clients CIBIL report records a &quot. Settled&quot. Remark. Accompanied by a score decline of 70 to 120 points. </p>
                <p> However. Context is vital: prior to settlement. An account in steady default generates compounding 90+. 180+. And 360+ Days Past Due (DPD) entries each month. This active default destroys creditworthiness and signals ongoing bankruptcy to all lenders. A settlement freezes the default. Updates the current balance to ₹0. Clears the overdue amount to ₹0. And establishes a stable. Non-overdue money baseline from which credit repair can start. </p>
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
                  <p> trade and trade entities are evaluated under the <strong>CIBIL Rank</strong> system (graded from CMR-1 to CMR-10. Where CMR-1 denotes lowest risk of default and CMR-10 denotes highest risk) alongside trade Credit Reports (CCR) maintained by CIBIL. CRIF High Mark, Equifax. Experian. </p>
                <p> Settling a firm loans will temporarily position the company in the CMR-7 to CMR-10 bracket. Reflecting a past debt settlement. While Tier-1 banks may refrain from extending large no-pledge working cash facilities during this phase. Non-bank trade creditors. Specialized supply-chain lenders. And MSME fintech platforms will still extend asset-backed and invoice-linked credit lines based on current audited daily cash flows. </p>
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
                  <p> Indian trade banking operates under sophisticated cross-referencing algorithms that correlate company DINs (Director Identification Numbers). Trade PANs. private promoter profiles. If a firm loans settlement is completed without complete legal oversight. The settling bank may report the director&apos. s private profile as a &quot. Guarantor Settled under settlement,&quot. severely impairing their ability to secure private home loans or vehicle financing. </p>
                <p> CredSettle enforces strict contractual covenants in every settlement pacts. We make sure that the settlement deed clearly segregates trade entity debt risk from non-obligated directors. Mandating that the bank report guarantor files as &quot. Discharged upon Full Satisfaction of trade settlement,&quot. thereby preserving the promoter&apos. s private borrowing capacity. </p>
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
                  <p> Under the Credit Information Companies (Regulation) Act (CICRA). 2005 and RBI Master Directions on Credit Reporting. All trade banks and NBFCs are legally mandated to upload updated credit files to all four licensed credit bureaus on a monthly cycle. </p>
                <p> Following the clearance of the final payment steps. The bank must report the following exact parameter changes: </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black font-normal">
                  <li><strong>Account Status:</strong> Updated from &quot. Active / NPA / Suit Filed&quot. to &quot. Settled&quot. or &quot. Post-Write-Off settlement Closed.&quot.</li>
                  <li><strong>Current Balance:</strong> Reported as ₹0.</li>
                  <li><strong>Amount Overdue:</strong> Reported as ₹0.</li>
                  <li><strong>Date of Last Payment:</strong> Updated to the exact UTR payment date of the final payment steps.</li>
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
                  <p> In Indian credit bureau databases. Closed and settled loan records remain on file for up to 7 years from the date of final relief. However. The trade impact of the &quot. Settled&quot. remark diminishes progressively over time. Credit scoring models heavily weight recent payment behavior (the trailing 12 to 24 months) over older historical defaults. </p>
                <p> The initial 12 months post-settlement constitute the strict RBI cooling-off period during which mainstream bank borrowing is paused. Between Months 13 and 24. As the trade establishes new on-time vendor credit cycles and secures secured credit facilities. The credit score rebounds greatly. By Months 25 to 36. An firm that maintains spotless cash-flow disciplines can regain high creditworthiness and qualify for competitive trade funding. </p>
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
                  <p> Rebuilding trade and private credit scores after an OTS requires disciplined execution of a 4-step money restoration protocol: </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 1: Secure Fixed-Deposit Backed Credit Lines</span>
                    <p className="text-black font-normal">Open an FD-backed trade or private credit card. Utilize 20% to 30% of the limit monthly and repay the total bill 5 days prior to the due date. Generating positive 30-day reporting cycles.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 2: Establish Clean Vendor &amp; Invoice Discounting Streams</span>
                    <p className="text-black font-normal">Route daily transactions through TReDS (Trade Receivables Electronic Discounting System) or local MSME factoring platforms. Establishing documented trade reliability.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 3: Maintain Flawless Banking Operations</span>
                    <p className="text-black font-normal">Ensure zero cheque bounces. Zero inward NACH return charges. And a healthy average monthly balance in current accounts for a minimum of 4 consecutive quarters.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 4: Routine Bureau Audit &amp; Data Rectification</span>
                    <p className="text-black font-normal">Download quarterly CCR reports to verify that no residual balances. Bogus legal charges. Or wrongful DPD entries linger on the company&apos. s credit profile.</p>
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
                  <p> The Reserve Bank of India has established a clear. Progressive legal rules encouraging regulated lending entities to resolve distressed assets through clear one-time deals. The landmark circular. <em>rules for one-time deals and Technical Write-offs</em> (Circular DOR.STR.REC.20/21.04.048/2023-24 dated June 8. 2023). Directs all scheduled trade banks. NBFCs. And primary local banks to institute formal. Board-approved policies governing one-time deals. </p>
                <p> Key mandates under the RBI directive include: (1) Transparent delegation of money powers so that deals are approved by designated boards rather than arbitrary person discretion. (2) strict inclusion of restructuring provisions before starting coercive claims. (3) Permissibility of one-time deals even for accounts classified as wilful defaulters or fraud without prejudice to ongoing criminal investigations. And (4) Strict adherence to clear accounting principles regarding technical write-offs. </p>
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
                  <p> Under the June 8. 2023 RBI rules. Regulated entities must clearly lay down the process for arriving at the minimum one-time payout sum. The circular dictates that the settlement sum should not fall below the estimated Net Present Value (NPV) of the cash flows that could be recovered through lengthy legal enforcement. Factoring in auction discounts. Lawyer fees. And time delay costs. </p>
                <p> Also. The rules mandate a minimum <strong>cooling-off period of 12 months</strong> before a client who has executed a one-time settlement can be considered for fresh credit facilities by any regulated entity. The circular also mandates that all settlement sanctions must be reported quarterly to the bank&apos. S Board of Directors or Audit boards. Making sure executive oversight and bank clarity. </p>
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
                  <p> The Reserve Bank of India has instituted stringent daily boundaries for outside claims firms via its <em>Master Circular on Loans and Advances. Instructions for claims agents</em> and circular RBI/2022-23/108 (August 12. 2022). These directives apply equally to claims personnel acting on trade and firm loans defaults: </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black font-normal">
                  <li><strong>Strict Calling Window:</strong> Tele-calling and visits are permitted strictly between <strong>08:00 AM and 07:00 PM</strong>. Calling outside these hours is a severe RBI violation.</li>
                  <li><strong>Absolute Prohibition on abuse:</strong> Agents are barred from using abusive. Profane. Or intimidating language. Making threatening physical gestures. Or causing public nuisance.</li>
                  <li><strong>privacy safety:</strong> Agents cannot disclose the debt or discuss payment with staff. Suppliers. Customers. Neighbors. Or third-party family members.</li>
                  <li><strong>strict Identification:</strong> Agents visiting trade premises must carry a photo identity card issued by the firm and an formal Letter of formal from the bank.</li>
                </ul>
                </div>
              </section>

              {/* Section 38 */}
              <section id="business-loan-default-consequences" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 38
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  38. Business Loan Default: Consequences of Non-Payment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> When a trade firm stops servicing its loan installments. The lending institution initiates a standardized. Multi-tiered escalation matrix: </p>
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
                  <p> Defaulting on a firm loans triggers civil and quasi-criminal legal results across several legal statutes in India. For secured loans. The bank can invoke the <strong>SARFAESI Act, 2002</strong> to take symbolic or physical takeover of mortgaged trade real estate without prior court intervention. </p>
                <p> For debts exceeding ₹20 Lakhs. Banks often institute claims actions before the <strong>Debt claims Tribunal (DRT)</strong> under the claims of Debts and Bankruptcy Act (RDBA). 1993. Seeking attachment of debtor bank accounts and own assets. If pledge cheques or electronic NACH mandates dishonor. Lenders routinely file criminal reports under Section 138 of the Negotiable Instruments Act. 1881 or Section 25 of the Payment and settlement Systems Act (PSSA). 2007. </p>
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
                  <p> Yes. Trade banks and NBFCs possess legal formal to start claims actions through designated judicial and legal forums. However. Taking legal action is not an fast. Unchecked process. Lenders must strictly comply with strict legal notice periods. Due process safeguards. And natural justice requirements. </p>
                <p> Crucially, <strong>loan default is not a criminal offense under the Bharatiya Nyaya Sanhita (BNS)</strong>. Police officers have no legal police area over bank defaults and cannot summon or arrest a client for trade debt. Lenders must rely entirely on civil claims channels. Where an assertive. Lawyer-led legal defense can stall court cases and create massive leverage to force an affordable settlement. </p>
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
                  <p> Receiving a formal legal demand notice. Whether a Loan Recall Notice. SARFAESI Section 13(2) Demand Notice. Or Section 138 NI Act legal notice. is not a reason to panic. it is the formal starting bell for talks. Lenders issue legal notices to build pressure. But senior banking officials understand that fighting contested court cases in Indian courts can consume years. </p>
                <p> CredSettle&apos. S banking lawyers promptly file a complete. Point-by-point Legal Reply within the legal deadline (e.g. 60 days under Section 13(3A) of SARFAESI. Or 15 days under Section 138 NI Act). The reply challenges unlawful penal calculations. Highlights procedural irregularities in loan disbursement. prove trade distress. And proposes an amicable One-Time settlement. Shifting the claims from court cases to the settlement table. </p>
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
                  <p> A firm loans can be settled at <strong>any stage of active court cases</strong>. Including during ongoing hearings actions under the hearings and settlement Act. 1996. During Securitisation Applications before the DRT. During civil summary suits (Order 37 CPC). And even during pre-charge stages in Section 138 NI Act criminal reports. </p>
                <p> When a settlement is finalized mid-court cases. The parties execute formal Joint Application for settlement or Consent Terms. The judicial forum (Civil Judge. City Magistrate. Or Arbitrator) records the settlement. Dismisses the case as settled out of court. And makes sure complete discharge. Guaranteeing that the client emerges free of all ongoing court debts. </p>
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
                      <p className="text-[11px] text-emerald-300 font-semibold mt-1"> Est. Debt Waiver: ₹ {otsAnalysis.estimatedSavings.toLocaleString('en-IN')} ({otsAnalysis.waiverPct}% Haircut) </p>
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
                  <p> When shop owners face severe trade distress. Lending banks and NBFCs often deploy outside third-party claims firms to exert aggressive extra-judicial pressure. In trade debt claims. Rogue firms routinely escalate beyond polite phone reminders: they show up unannounced at factory premises. Create public scenes in trade lobbies before clients or vendors. And send intimidatory WhatsApp threats to directors and family members. </p>
                <p> Such coercive actions are not lawful debt claims. they constitute actionable torts and cognizable criminal offenses under Indian penal statutes. Intimidating trade firm leadership. Disrupting trade work. Or causing public embarrassment violates RBI directives and penal laws governing criminal threats (Section 351 BNS) and extortion (Section 308 BNS). fast legal intervention shuts down abuse and forces the bank back into lawful settlement discussions. </p>
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
                  <p> trade shop owners. Promoters. And guarantors enjoy absolute legal rights protected under Indian central banking regulations and the Constitution of India: </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">1. Right to Dignity &amp; Respect (Article 21)</span>
                    <p className="text-black font-normal">Supreme Court rulings guarantee that inability to pay a civil debt cannot strip a citizen of their constitutional right to private dignity and freedom from mental torture.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">2. Right to Legal Representation</span>
                    <p className="text-black font-normal">Clients have the legal right under the lawyers Act. 1961 to retain banking lawyers to handle all contacts. Legally barring direct agent contact.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">3. Right to Privacy (CICRA 2005)</span>
                    <p className="text-black font-normal">Absolute prohibition against agents disclosing trade debt details to staff. Landlords. Vendors. Customers. Or third-party family members.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-black block">4. Right to Regulatory Compensation</span>
                    <p className="text-black font-normal">The RBI Integrated Ombudsman can penalize lending banks straight and award money payout for mental abuse and daily damage caused by agents.</p>
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
                  <p> settling a firm loans settlement with banks is an exercise in data-backed money advocacy rather than emotional pleading. trade bank credit boards operate under cold mathematical risk matrices: they review the <em>Net Present Value (NPV)</em> of accepting a lump-sum settlement payment today against the discounted claims yield of pursuing lengthy court cases over 5 to 7 years. </p>
                <p> To settle effectively. Clients must shift formal away from branch personnel or commission-driven claims agents toward the bank&apos. s Stressed Asset handling Branch (SAMB) or Zonal settlement boards. Never reveal private liquid crisis reserves during initial talks. Present an unassailable money picture demonstrating that the trade has hit terminal illiquidity and that the proposed OTS represents the lender&apos. s single best claims opportunity before assets depreciate further. </p>
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
                  <p> A firm loans offers must be structured as a formal legal-money petition submitted on trade letterhead addressed to the General Manager / Zonal Head of the lending institution. Informal emails or oral discussions lack evidentiary standing in bank credit boards reviews. </p>
                <p> A expert OTS offer drafted by CredSettle contains five strict sections: (1) <strong>Chronological firm Background</strong> highlighting years of flawless historical compliance prior to default. (2) <strong>Verifiable Economic Hardship record</strong> documenting local market failures or income loss. (3) <strong>deep Account Audit</strong> challenging compound penal interest, (4) <strong>The Firm offers</strong> specifying the exact lump-sum figure and payment schedule. And (5) <strong>Legal Reciprocal Terms</strong> requiring guarantee discharge. NDC issuance. And court petition withdrawal. </p>
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
                  <p> To satisfy bank audit scrutiny and comply with RBI settlement rules. An firm must prove its offers with complete papers: </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Financial &amp; Tax Filings</span>
                    <ul className="text-black space-y-0.5 list-disc pl-4 font-normal">
                      <li>Audited Balance Sheets &amp. P&amp. L accounts for the trailing 3 fiscal years.</li>
                      <li>Monthly GST returns (GSTR-3B and GSTR-1) showing income collapse.</li>
                      <li>Income Tax Returns (ITR) of the firm and person promoters.</li>
                      <li>Current bank records of all trade and private operative accounts (12 months).</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Commercial Distress Proofs</span>
                    <ul className="text-black space-y-0.5 list-disc pl-4 font-normal">
                      <li>formal factory or trade shop lease end pacts.</li>
                      <li>GST registration cancellation filings or surrender letters.</li>
                      <li>Debtor default court filings. Uncollectible receivable notices. Or bad debt write-offs.</li>
                      <li>health discharge summaries or hospital records if health crises impacted leadership.</li>
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
                  <p> In Indian banking regulation. There is a fundamental legal distinction between a <em>Wilful Defaulter</em> (who has the money skill to pay but chooses not to. Or has diverted borrowed cash) and a <em>Bona Fide Stressed client</em> (who has defaulted due to genuine trade distress beyond their control). </p>
                <p> Demonstrating hardship is the cornerstone of securing large main loan waivers. Our lawyers construct an irrefutable Hardship Docket showing that default occurred despite the promoter&apos. s best efforts. We correlate macro-economic factors. Such as raw material inflation. Policy shifts. Tender cancellations. Or client insolvencies. With internal accounting ledgers. Making sure the credit boards classifies the account as non-wilful and eligible for maximum settlement write-offs. </p>
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
                  <p> When an firm operates at a persistent net loss with negative EBITDA. Servicing trade debt out of operating earnings is impossible. Continuing to maintain such an account under standard restructured terms only results in secondary and tertiary defaults. Compounding interest dues and destroying whatever residual asset value remains. </p>
                <p> For loss-making firms. CredSettle shows to lenders that liquidation or court court cases will yield pennies on the rupee because trade assets (inventories. Depreciated machinery. Software systems) lose up to 80% of their book value at distress auction. Demonstrating ongoing daily burn rates convinces credit boards to accept an fast one-time settlement and write off the balance. </p>
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
                  <p> Closing down trade work. Surrendering trade leased premises. Terminating staff. And surrendering utility connections. does not automatically clear firm loans debts. In sole proprietorships and partnerships. Lenders promptly redirect all claims machinery to the promoter&apos. S home address. Threatening private asset attachment. </p>
                <p> However. Formal trade closure creates immense talks leverage for an OTS. With zero income. Zero operating bank balances. And shuttered trade premises. The bank recognizes that their chances of involuntary claims are virtually non-existent. We use formal closure affidavits. Lease end deeds. And staff severance receipts to settle deep main loan haircuts of 55% to 75%. This allows promoters to permanently close the defunct entity&apos. s books. </p>
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
                  <p> trade failure is an acknowledged economic reality across mature market economies. In India. Bankruptcy reforms and the bankruptcy and Bankruptcy Code (IBC) were enacted precisely to help clean exits for honest. Failed founders so that cash and talent can be reallocated productively. </p>
                <p> settlement provides a dignified. Out-of-court trade closure following trade failure without undergoing the costly. Public stigma of formal trade bankruptcy or person private bankruptcy. We assist failed founders in settling final settlement releases. Making sure that all director private guarantees and hypothecations are vacated so they can re-enter the trade marketplace unburdened by past debt. </p>
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
                  <p> When an firm has completely exhausted its cash reserves and maintains zero operating cash flow. Finding funds to finance an OTS offers appears paradoxical. In these extreme distress scenarios. settlement funds are typically sourced through external white-knight cash. Such as family contributions. Sale of non-pledged peripheral own assets. Or structured third-party bridge support. </p>
                <p> Our lawyers structure offers emphasizing that the offered settlement sum is being injected solely by third-party benevolent sources contingent on the bank granting a 100% full and final release. If the bank rejects the settlement. This third-party cash will not be injected into the defunct company. Faced with the choice between an fast cash settlement funded by third parties or zero claims through court decree. Bank credit boards routinely approve the settlement. </p>
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
                  <p> Mid-sized trade firms often carry credit lines distributed across multiple banks. Such as a working cash facility with a public sector bank. Machinery term loans with an NBFC. And no-pledge firm loans with private digital lenders. When distress strikes. Managing multiple creditors simultaneously presents acute daily friction: uncoordinated lenders may file competing DRT suits. Start conflicting SARFAESI actions. Or issue simultaneous Section 138 NI Act notices. </p>
                <p> In multiple-lender situations. CredSettle implements a structured Inter-Creditor relief plans. We establish a debt-priority matrix based on pledge ranking (first charge vs second charge vs no-pledge) and court cases aggressiveness. By coordinating talks across lenders. We make sure that an pacts reached with one bank is not derailed by an unexpected injunction from another. Creating an orderly. Phased relief that completely closes the company&apos. s macro-debt footprint. </p>
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
                  <p> It is very common for an firm to maintain multiple distinct credit facilities with the <em>same</em> bank. For example. A ₹50 Lakhs Cash Credit (CC) limit. A ₹30 Lakhs Term Loan for factory shed growth. And a ₹15 Lakhs crisis Credit Line (ECLGS). When default occurs. Banks often attempt to settle one facility while maintaining active claims or court cases on the others. Withholding pledge release. </p>
                <p> Our banking lawyers settle <strong>Omnibus Composite deals</strong> covering all intra-bank credit accounts under a single settlement sanction letter. We insist that the settlement terms explicitly tie the agreed settlement sum to the complete closure of all unpaid account numbers. Making sure that once the payment is completed. The bank issues a single. Complete No Dues letter and vacates all registered charges. </p>
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
                  <p> Public sector banks (State Bank of India. Punjab National Bank. Bank of Baroda. Canara Bank. Union Bank) and major private trade banks (HDFC Bank. ICICI Bank. Axis Bank. Kotak Mahindra Bank. IndusInd Bank) operate under strict bureaucratic Delegation of money Powers (DOFP) matrices codified pursuant to RBI regulations. settlement requests are not decided by branch managers. they must be evaluated and approved by designated settlement alert boards (SAC) or Zonal High-Power Credit Risk boards based on exposure thresholds. </p>
                <p> Public sector banks place supreme emphasis on procedural compliance. Vigilance rules. And non-special OTS schemes to insulate bank executives from subsequent scrutiny by the Central Vigilance Commission (CVC) or Comptroller and Auditor General (CAG). Private banks. On the other hand. Prioritize trade velocity and claims yield. CredSettle tailors every settlement petition to align straight with the local bank risk rules of the target bank. Accelerating boards approvals and boosting main loan haircuts. </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block">Public Sector Banks (PSBs)</span>
                    <p className="text-black font-normal">Strict adherence to published non-special OTS formulas. require formal hardship dockets to satisfy internal audit boards.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block">Private Commercial Banks</span>
                    <p className="text-black font-normal">Fast trade decisions based on net present claims value. high flexibility for fast lump-sum settlement execution.</p>
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
                  <p> Non-Banking money Companies (including Bajaj Finserv. Tata cash, Aditya Birla Finance. Piramal cash, Shriram Finance. L&amp. T Finance) have become major providers of trade MSME and firm loans. While NBFCs operate with greater procedural flexibility and shorter settlement decision cycles than traditional banks. Major NBFCs with asset sizes exceeding ₹100 Crores possess full enforcement powers under the SARFAESI Act. 2002. </p>
                <p> NBFCs often rely on aggressive tele-calling firms and fast-track hearings clauses under the hearings and settlement Act. 1996. Our legal defense counters unilateral arbitrator appointments under Section 11/12 of the Act. Halts claims abuse. And initiates direct talks with the NBFC&apos. s Central Stressed Asset Division. NBFC deals can often be concluded within 15 to 30 days when presented with an fast. Verifiable cash offers. </p>
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
                  <p> Digital trade lending platforms, neo-banks. And app-based trade lenders (such as Lendingkart. FlexiLoans. Indifi. NeoGrowth. And Protium) extend rapid no-pledge loans based on algorithm-driven cash-flow reviews and merchant POS swipe volumes. These digital loans carry high interest rates and mandate aggressive daily or weekly auto-debit NACH mandates. </p>
                <p> When a client defaults. Fintech lenders often deploy automated dialers that violate RBI Digital Lending rules (2022) by inundating clients with endless automated calls. We intervene by serving formal legal notices to their partner NBFCs. Stopping unlawful auto-dialing. Canceling rogue NACH mandates. And settling large main loan haircuts of 50% to 70% to close digital credit facilities permanently. </p>
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
                  <p> Choosing the right debt relief partner is the most critical trade decision a distressed firm will make. The trade debt settlement sector includes reputable lawyer-backed firms as well as fly-by-night non-legal telemarketing firms that make fraudulent promises of 90% debt erasure while stealing upfront fees. </p>
                <p> When reviewing a firm loans settlement firm. Demand verification on four vital criteria: (1) <strong>Legal support by Enrolled lawyers:</strong> Only licensed High Court lawyers can issue formal legal notices under the lawyers Act. 1961 and represent you before judicial forums. (2) <strong>Physical trade Presence:</strong> Avoid companies operating solely via mobile numbers without registered offices. (3) <strong>Track Record in trade debt:</strong> Verify successful OTS track records with major trade banks. And (4) <strong>Transparent Service pacts:</strong> Ensure fees are milestone-linked with zero hidden demands. </p>
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
                  <p> shop owners often wonder whether they should settle straight with their branch manager rather than retaining a expert legal settlement firm. In reality. person clients settling unrepresented face severe structural disadvantages: </p>
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
                        <td className="p-2 border border-gray-200">Branch staff / claims callers with zero waiver formal</td>
                        <td className="p-2 border border-gray-200">Zonal settlement boards &amp. Stressed Asset Chiefs</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-gray-200">Legal Notice Defense</td>
                        <td className="p-2 border border-gray-200">client is vulnerable to ex-parte court orders &amp. warrants</td>
                        <td className="p-2 border border-gray-200">Formal legal replies filed. Staying lawsuits</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-gray-200">Waiver Percentage</td>
                        <td className="p-2 border border-gray-200">Modest (10%. 25% interest concession only)</td>
                        <td className="p-2 border border-gray-200">Deep Haircuts (40%. 65% main loan &amp. charge reduction)</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-gray-200">Guarantee Release</td>
                        <td className="p-2 border border-gray-200">Often omitted. Leaving private promoters liable</td>
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
                  <p> expert firm loans settlement operates under clear. Contractually documented fee structures designed to align the settlement firm&apos. s incentives with the client&apos. s money claims. Reputable firms operate on a two-component model: an initial legal retainer to cover lawyer support notices. Deep ledger audits. And hardship docket compilation. Followed by a milestone-linked success fee tied straight to the actual monetary waiver got. </p>
                <p> Beware of unethical operators demanding large upfront cash fees with guarantees of 90% debt cancellation. Legitimate banking lawyers never guarantee a local percentage before auditing bank ledgers. Never handle settlement funds straight (all settlement payments must be made straight to the bank via RTGS/NEFT to the loan account). And provide full tax-compliant GST invoices for all expert legal services. </p>
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
                  <p> Remitting the final agreed settlement payment marks the formal conclusion of debt talks and the commencement of the post-settlement office and legal closure workflow. Within 15 to 30 days of payment clearance. The lending bank or NBFC must update its core banking system (CBS). Permanently zero out the loan ledger. And cancel all active claims mandates. </p>
                <p> Simultaneously, the bank&apos. s legal panel is instructed to file formal withdrawal applications for all pending judicial actions. Including dropping Section 138 NI Act cheque cases. Filing settlement consent decrees before the DRT. And terminating civil claims suits. The lender then executes an formal No Dues letter. Delivers back all original mortgaged property papers. And submits updated status files to the four licensed credit bureaus. </p>
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
                  <p> A firm loans is not legally closed until the client secures and permanently archives four indispensable legal instruments issued under formal bank seal: </p>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">1. Settlement Sanction Letter</span>
                    <p className="text-black font-normal">The original signed paper on bank letterhead specifying the net sanctioned payout sum. Exact tranche schedule. Account numbers. And complete waiver clauses.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">2. No Dues Certificate (NDC) / Closure Letter</span>
                    <p className="text-black font-normal">The definitive legal instrument confirming that all claims against the firm. Promoters. And guarantors have been fully and irrevocably satisfied with zero balance remaining.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">3. Charge Satisfaction Letter (ROC Form CHG-4)</span>
                    <p className="text-black font-normal">For shop owners. The bank must execute and sign Form CHG-4 for filing with the Ministry of trade Affairs (MCA) to formally vacate the registered charge on company assets.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">4. Original Document Handover Acknowledgement</span>
                    <p className="text-black font-normal">An itemized receipt signed by bank officials returning original title deeds. Sale deeds. Share letters. And private guarantees deeds.</p>
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
                  <p> About 45 to 60 days following the execution of your settlement payment. You must conduct a thorough credit bureau audit. shop owners should pull the company&apos. s trade Credit Report (CCR) from CIBIL and CRIF High Mark. Meanwhile. person promoters and guarantors should access their private clients credit reports. </p>
                <p> Examine the credit file for three critical indicators: (1) The <strong>Current Balance</strong> must strictly display ₹0. (2) The <strong>Amount Overdue</strong> must strictly display ₹0. And (3) The <strong>Account Status</strong> should read &quot. Settled&quot. or &quot. Post-Write-Off Settled.&quot. If the report continues to display an active overdue balance or continuing DPD default. The bank has committed an office reporting error that requires fast legal escalation. </p>
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
                  <p> Banks often suffer from daily lag. With central credit reporting desks failing to reconcile deals finalized by local Stressed Asset branches. If your credit report incorrectly reflects active default after receiving an NDC. Follow this 3-tier correction protocol: </p>
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
                  <p> In firm loans settlement. Minor procedural missteps can cause catastrophic money losses. Avoid these four fatal mistakes: </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black font-normal">
                  <li><strong>Paying Based on Verbal Promises:</strong> Never transfer funds based on an oral assurance from a claims agent or branch manager. Without an formal stamped OTS letter. The bank treats your payment as a standard claims against penal interest. Resetting the 3-year limitation clock.</li>
                  <li><strong>Missing Agreed Payment Deadlines:</strong> OTS letters contain strict default clauses. Missing a tranche deadline by even 24 hours can automatically revoke the settlement. With the bank forfeiting deposited funds and reinstating the full original claim.</li>
                  <li><strong>Ignoring private guarantees Release:</strong> Settling a firm loans without explicit written discharge of director private guarantees leaves the promoters personally exposed to residual civil suits.</li>
                  <li><strong>Neglecting Court Case Withdrawal:</strong> Failing to require the bank to file joint settlement terms in pending Section 138 NI Act or DRT cases allows court actions to continue unmonitored.</li>
                </ul>
                </div>
              </section>

              {/* Section 66 */}
              <section id="settlement-scams-and-fraud-safety" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 66
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  66. Business Loan Settlement Scams: How to Stay Safe
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The trade debt relief hub has seen a proliferation of fraudulent operators who prey on desperate trade promoters facing bankruptcy. Common scam vectors include fake claims firms issuing forged settlement letters on cloned bank stationery. Or illegal agents demanding cash payments or transfers into private third-party bank accounts. </p>
                <p> To protect your firm from fraud. Adhere strictly to three golden rules: (1) <strong>Verify the Sanction Letter:</strong> Always cross-verify the OTS Sanction Letter straight with the bank&apos. S Zonal Stressed Asset branch before transferring any funds. (2) <strong>Direct Account payment Only:</strong> All settlement payments must be made strictly via RTGS/NEFT straight into your formal loan account number with the lending bank. Never to any person or settlement company account. And (3) <strong>Demand Bank receipts:</strong> Insist on a formal stamped bank receipt for every tranche deposited. </p>
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
                  <p> Yes. An firm can secure trade financing after executing a loan settlement. But borrowing pathways and underwriting criteria will shift during the transitional claims phase. Mainstream Tier-1 scheduled trade banks will enforce the strict 12-month RBI cooling-off period during which no-pledge credit facilities are unavailable. </p>
                <p> However. Modern trade credit review has evolved beyond simple CIBIL scores. Emerging MSME fintech lenders. Private credit funds. And income-based lenders review firms based on <strong>real-time daily cash flows</strong>GST invoice velocity. And merchant bank transactions. By demonstrating strong ongoing operating margins and maintaining clean current account work. Firms routinely qualify for structured invoice discounting. Machinery leasing. And secured credit lines within 12 to 18 months of settlement. </p>
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
                  <p> For incorporated private limited companies and LLPs. Executing an OTS actually cleanses the trade balance sheet of toxic. Non-performing debts that previously blocked external equity investment or venture debt. Once the bank files Form CHG-4 with the Registrar of Companies (ROC) satisfying the registered charge. The company&apos. s asset register is legally liberated. </p>
                <p> With legacy defaults extinguished. The trade entity can attract fresh equity investment. Onboard strategic angel cash. Or secure asset-backed trade credit from factory suppliers who were previously unwilling to engage with an NPA-burdened firm. </p>
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
                  <p> Whether company directors can access private financing (such as home loans. Auto loans. Or private credit cards) following a trade firm loans settlement depends entirely on how the settlement covenants were structured. If the settlement deed properly discharged the director&apos. S private guarantees and the bank updated the bureau without person default marks. The director&apos. s private credit file remains clean. </p>
                <p> If the director was listed as an person co-client. Their private CIBIL score will reflect the &quot. Settled&quot. status for the cooling-off period. However. Directors can rapidly rebuild creditworthiness by maintaining secured credit cards. Showing healthy private ITR filings. And applying to progressive private lenders who look past trade settlement history when assessing secured home loans. </p>
                </div>
              </section>

              {/* Section 70 */}
              <section id="impact-on-gst-mca-records" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 70
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  70. Settled Business Loan Impact on GST &amp; MCA Records
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> A common concern among trade promoters is whether a loan settlement negatively impacts formal legal registrations. Such as GSTIN status. MCA filings. Director Identification Numbers (DIN). Or Import Export Codes (IEC). </p>
                <p> The legal reality is completely reassuring: a firm loans settlement is a private contract relief governed by the Indian Contract Act and RBI banking directives. It does <strong>not</strong> result in legal disqualification under Section 164 of the Companies Act. 2013. Does not trigger GST cancellation. And does not revoke municipal trade licenses or IEC registrations. On the contrary. Filing Form CHG-4 satisfies open charges on the MCA portal. Presenting a clean. Unencumbered trade public record. </p>
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
                  <p> The taxation of waived debt amounts following a trade one-time settlement is a complex legal-money domain governed by the Income Tax Act. 1961 and binding judicial rulings established by the Supreme Court of India. When a bank writes off main loan debt or interest dues under an OTS. Clients must understand whether the waived sum constitutes taxable trade income or a non-taxable cash receipt. </p>
                <p> In its landmark ruling in <em>CIT v. Mahindra &amp. Mahindra Ltd. (2018)</em>The Supreme Court held that the waiver of a loan taken for the purchase of <strong>cash assets</strong> (plant. Machinery. Real estate) constitutes a cash receipt that is not taxable under Section 28(iv) or Section 41(1) of the Income Tax Act. Provided the asset cost is suitably adjusted for depreciation under Section 43(6). Conversely. The waiver of a loan used for <strong>working cash or income expenditure</strong> (stock. Wages. Daily supplies) where interest deductions were claimed in previous tax years may attract Section 41(1) as remission of trading debt risk. </p>
                <p> Also. Regarding Section 194R (TDS on benefit or perquisite arising from trade). The Central Board of Direct Taxes (CBDT) issued Circular No. 18/2022 explicitly clarifying that Section 194R TDS does <strong>not apply to loan waivers or concessions granted by scheduled trade banks and banks</strong> under OTS rules. </p>
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
                  <p> In firm money accounting governed by Indian Accounting Standards (Ind AS 109 - money Instruments) or standard Indian GAAP (AS-9 / AS-5). The execution of a one-time settlement triggers derecognition of a money debt risk from the trade balance sheet. </p>
                <p> When the settlement is finalized and the No Dues letter is issued. The difference between the carrying ledger amount of the debt risk and the actual consideration paid is recognized in the Profit and Loss Account as an <strong>Exceptional Item</strong> titled &quot. Gain on settlement of Debt / Loan Waiver.&quot. For cash loans. Companies may credit this surplus straight to cash Reserve. Proper accounting papers makes sure clarity during legal audits and protects the company from adverse tax scrutiny. </p>
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
                  <p> private guarantees executed by company promoters. Directors. Or third-party family members represent the lender&apos. s most lethal claims weapon. Under Section 128 of the Indian Contract Act. 1872. The debt risk of a surety is co-extensive with that of the main loan debtor. Meaning the bank is not legally required to exhaust remedies against the shop owners before attaching the private guarantor&apos. s assets. </p>
                <p> During talks. Our legal team makes sure that the settlement Sanction Letter incorporates absolute discharge language. Under Section 133. 134. And 135 of the Contract Act. Any valid settlement entered into between the creditor and the main loan debtor discharges the surety. We require the bank to explicitly confirm that the private guarantees deed is cancelled. Return the original guarantee papers. And waive all rights to start private bankruptcy under Section 95 of the IBC. </p>
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
                  <p> For secured firm loans backed by registered or equitable mortgages on trade sheds. Factory plots. director residential homes. The primary objective of settlement is the swift. Unencumbered retrieval of title deeds. Under the landmark RBI Circular dated September 13. 2023 (<em>Release of Movable / Immovable Property papers on payment / settlement of private / MSME Loans</em>). Regulated entities are legally mandated to <strong>release all original property papers within 30 days</strong> of full settlement clearance. </p>
                <p> If a bank delays releasing original deeds beyond 30 days. The RBI circular requires the bank to compensate the client at the rate of <strong>₹5,000 for each day of delay</strong>In addition to replacing lost papers at the bank&apos. s expense. CredSettle actively enforces these RBI directives to guarantee the physical claims of your valuable property papers. </p>
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
                  <p> When a secured firm loans defaults. Lenders invoke the <strong>SARFAESI Act, 2002</strong> to bypass civil courts and enforce pledge interests. The bank issues a 60-day demand notice under Section 13(2). Followed by a Section 13(4) seizure notice to take symbolic or physical custody of the mortgaged asset. Later applying to the Chief city Magistrate (CMM) or areas Magistrate (DM) under Section 14 to evict occupants. </p>
                <p> CredSettle&apos. s banking lawyers counter SARFAESI escalation through aggressive legal defenses. We file complete objections under Section 13(3A) of SARFAESI. This the bank is legally obligated to consider within 15 days. If the bank proceeds coercively. We file a Securitisation Application (SA) before the <strong>Debt claims Tribunal (DRT)</strong> under Section 17. Challenging improper valuation. Illegal interest capitalization. Or flawed auction notices. This judicial stay halts auction actions and compels the bank&apos. s leadership to execute an amicable OTS. </p>
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
                  <p> During firm loans sanction. Lenders routinely collect undated pledge cheques or electronic NACH auto-debit mandates from trade promoters. When cash flow fails and EMIs bounce. Lenders present these pledge cheques for clearing. Upon dishonor for &quot. insufficient funds,&quot. the bank issues a 15-day legal demand notice followed by criminal reports against the company and person signatories. </p>
                <p> Our defense plan establishes that the dishonored cheques were delivered strictly as advance pledge pledge rather than against an existing crystallized debt at the time of delivery. More importantly. We leverage Supreme Court rulings holding that Section 138 cases are essentially civil debt claims dressed in criminal garb. Using our structured talks to make sure that criminal reports are formally withdrawn upon settlement. </p>
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
                  <p> reports filed under Section 138 of the Negotiable Instruments Act. 1881 and Section 25 of the Payment and settlement Systems Act. 2007 (for bounced e-NACH mandates) are <strong>fully compoundable offenses</strong> under Section 147 of the NI Act and Section 320 of the Code of Criminal steps (CrPC). </p>
                <p> In <em>M/s Meters and Instruments Pvt. Ltd. v. Kanchan Mehta (2018)</em> and <em>Damodar S. Prabhu v. Sayed Babalal H. (2010)</em>The Supreme Court ruled that the primary objective of Section 138 is claims of money. Not criminal incarceration. Once a one-time settlement is executed and the agreed amount is paid. The bank is legally obligated to file an application for compounding or withdrawal before the city Magistrate. This resulting in the fast dismissal of the reports and total acquittal of the directors. </p>
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
                  <p> In trade debt practice. Trade distress patterns typically fall into four distinct daily scenarios. Each requiring a tailored legal-talks plan: </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario A: The Manufacturing MSME with Delayed Govt/PSU Receivables</span>
                    <p className="text-black font-normal"><strong>Challenge:</strong> An auto-component supplier with ₹1.2 Cr working cash debt defaults because state crop sales firms delayed ₹90 Lakhs of payments for 14 months.<br /><strong>Solution:</strong> We invoke the MSMED Act delayed payment provisions. Present MSME Samadhaan filings to the bank&apos. S Stressed Asset boards. And settle an OTS freezing interest and settling the main loan with a 50% haircut.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario B: Shuttered Retail Firm with Multiple Unsecured Digital Lines</span>
                    <p className="text-black font-normal"><strong>Challenge:</strong> A retail clothing brand took 4 no-pledge digital firm loans totaling ₹45 Lakhs. Due to lease hikes. The shop closed permanently.<br /><strong>Solution:</strong> With zero trade assets and cancelled GST. We file trade closure affidavits with all 4 lenders simultaneously. Settling the no-pledge debts for an average of 35% of ledger claims.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario C: Commercial Property Loan Facing Imminent SARFAESI Auction</span>
                    <p className="text-black font-normal"><strong>Challenge:</strong> An factory warehouse mortgaged against a ₹2 Cr loan receives a SARFAESI Section 13(4) seizure notice and auction date.<br /><strong>Solution:</strong> We file a Securitisation Application before the DRT challenging auction valuation flaws. Secure an interim stay. And settle a bilateral OTS saving the mortgaged property from distress liquidation.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Scenario D: Corporate Default with Personal Director Guarantees Invoked</span>
                    <p className="text-black font-normal"><strong>Challenge:</strong> A private limited tech company shuts down. But directors face private asset attachment under Section 128 Contract Act.<br /><strong>Solution:</strong> We execute an out-of-court trade settlement that explicitly discharges director private guarantees and cancels Section 138 NI Act notices.</p>
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
                    <h3 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      CRITICAL DO&apos;S
                    </h3>
                    <ul className="text-black space-y-1.5 list-disc pl-4 font-normal">
                      <li>Channel all contact through registered legal counsel via formal support notices.</li>
                      <li>Maintain rigorous copies of audited money accounts. GST returns. And proof of trade distress.</li>
                      <li>Demand an formal written settlement Sanction Letter signed by a competent Scale-IV/V officer.</li>
                      <li>Ensure the sanction letter explicitly discharges director private guarantees and co-clients.</li>
                      <li>Remit payments strictly via direct RTGS/NEFT to the bank&apos. s formal loan account.</li>
                    </ul>
                  </div>
                  <div className="p-3.5 bg-red-50/50 border border-red-300 rounded-xl space-y-2">
                    <h3 className="font-bold text-red-950 text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span>
                      DANGEROUS DON&apos;TS
                    </h3>
                    <ul className="text-black space-y-1.5 list-disc pl-4 font-normal">
                      <li>Never pay cash or transfer funds into third-party private accounts or claims agent accounts.</li>
                      <li>Never pay token sums without an formal written OTS sanction confirming it forms part of settlement.</li>
                      <li>Never reveal hidden liquid family reserves during informal talks with branch staff.</li>
                      <li>Never ignore legal court summons under Section 138 NI Act or DRT notices.</li>
                      <li>Never miss an agreed payment steps payment deadline. This automatically revokes the OTS.</li>
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
                    <p className="font-bold text-black text-sm">Can a secured firm loans be settled without losing the mortgaged property?</p>
                    <p className="text-black font-normal">Yes. CredSettle regularly negotiates one-time deals on secured firm loans where the lender accepts a cash settlement based on realistic distress sale valuation. Returning all original title deeds within 30 days under RBI rules.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">Is firm loans settlement legally recognized by the Reserve Bank of India?</p>
                    <p className="text-black font-normal">Yes, 100% legal. The RBI codified this under its landmark circular on one-time deals and Technical Write-offs (June 8. 2023). Directing all banks and NBFCs to maintain board-approved settlement policies for non-wilful defaulters.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">Can firm loans claims agents send police to arrest company directors?</p>
                    <p className="text-black font-normal">No. Debt default is purely a civil contract breach under the Indian Contract Act. Police have zero legal formal to arrest clients for bank loan defaults. Threatening police arrest constitutes criminal extortion and impersonation under the BNS.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">What happens to private guarantees executed by directors after settlement?</p>
                    <p className="text-black font-normal">A professionally settled settlement contractually clears all private guarantees under Sections 133. 135 of the Indian Contract Act. Requiring the bank to return original guarantee deeds and vacate all claims.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <p className="font-bold text-black text-sm">How long does a firm loans settlement take from start to finish?</p>
                    <p className="text-black font-normal">A structured trade settlement typically takes 4 to 12 weeks. Spanning initial audit. Legal support notice. Hardship filing, Zonal boards talks. Sanction letter issuance. NDC receipt.</p>
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
                  <p> Resolving high-stakes trade debt requires specialized bank advocacy at the intersection of banking regulations. Trade bankruptcy law. deep accounting. expert settlement help provides distressed shop owners with an authoritative bank buffer against aggressive claims units. </p>
                <p> CredSettle deploys senior banking lawyers who have represented major public sector banks. Private lenders. And trade debtors across India. We level the playing field by conducting audits of loan ledgers to uncover illegal interest compounding. Drafting legal replies that halt DRT and SARFAESI escalation. And presenting compelling hardship dockets that command fast respect before bank Zonal Credit boards. </p>
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
                  <p> Over 8,500+ trade firms, MSMEs. And trade promoters have entrusted their debt relief to CredSettle for five defining bank skills: </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Senior Banking Advocates</span>
                    <p className="text-black font-normal">Dedicated legal support under the lawyers Act. 1961 making sure full immunity against coercive abuse.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Deepest Principal Waivers</span>
                    <p className="text-black font-normal">Proven track record getting 40% to 70% total debt reduction across public. Private. And NBFC lenders.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Complete Legal Shield</span>
                    <p className="text-black font-normal">Full defense across SARFAESI Sec 13(2)/13(4). DRT Securitisation Applications. And Sec 138 NI Act compounding.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Guarantee &amp; Collateral Release</span>
                    <p className="text-black font-normal">Guaranteed retrieval of original property title deeds and complete cancellation of director private guarantees.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">Consolidated Portfolios</span>
                    <p className="text-black font-normal">Simultaneous coordination of multiple lenders. Eliminating cross-court cases and competing claims actions.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-2xs">
                    <span className="font-bold text-blue-700 block mb-1">100% Confidentiality</span>
                    <p className="text-black font-normal">Strict firm data pledge protecting your trade brand reputation. Suppliers. And customer relationships.</p>
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
                  83. Business Loan Settlement: Step-by-Step Guide
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> To get a successful trade settlement that permanently resolves debt while safeguarding assets. Follow this unified 5-step daily protocol: </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 1: Financial &amp; Legal Audit</span>
                    <p className="text-black font-normal">Aggregate all loan pacts. Mortgage deeds. Sanction letters. And 12-month bank records to establish total exposure and identify misapplied penal compounding.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 2: Formal Legal Representation Notice</span>
                    <p className="text-black font-normal">Serve notice under the lawyers Act 1961 directing all future bank correspondence through your legal desk. Promptly halting illegal claims visits to trade premises.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 3: Compilation of the Commercial Hardship Docket</span>
                    <p className="text-black font-normal">paper daily distress through audited P&amp. L accounts, GST cancellation filings. Lease terminations. And debtor defaults to prove non-wilful trade failure.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 4: Zonal Settlement Committee Advocacy</span>
                    <p className="text-black font-normal">Present the formal OTS petition to the bank&apos. S executive Stressed Asset division. Settling maximum main loan haircuts and securing a written settlement Sanction Letter.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-2xs space-y-1">
                    <span className="font-bold text-blue-700 block">Step 5: Execution, Document Retrieval &amp; Closure</span>
                    <p className="text-black font-normal">Remit the sanctioned settlement payment straight to the bank via RTGS. Secure the authenticated No Dues letter. Retrieve original title deeds. And satisfy ROC charges.</p>
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
                  84. Conclusion: Understanding Business Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> In trade firm. Money stress and trade failure are not moral defects. they are structural risks inherent to trade entrepreneurship. When unforeseen macroeconomic shocks. Client insolvencies. Or market breaks render debt unserviceable. Continuing to deplete private family assets to pay compounding bank interest is neither commercially sensible nor legally needed. </p>
                <p> firm loans settlement under the Reserve Bank of India&apos. S settlement rules provides an honorable. Legally sound. definitive exit. It allows you to legally write off unmanageable trade debt. Permanently discharge private promoter guarantees. Shield valuable mortgaged real estate from distress auction. And close painful legal actions. </p>
                <p> With seasoned legal support from CredSettle. You do not have to face aggressive claims units or bank bank boards alone. Take decisive control of your trade debts today. Assert your legal rights. And build a clean foundation for your next entrepreneurial venture. </p>
                <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-xl text-white text-center space-y-2 mt-4 shadow-md">
                  <div className="text-base font-bold text-white">Resolve Your Commercial Business Debt Today</div>
                  <p className="text-xs text-blue-200 max-w-xl mx-auto"> Speak straight with a senior banking court cases lawyer. We audit your loan pacts. Halt claims abuse within 24 hours. And settle maximum RBI-compliant OTS waivers. </p>
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
                <BanksGrid serviceType="business-loan-settlement" servicePath="business-loan-settlement" />
              </div>

              {/* Conclusion Callout Box Matching loan-settlement */}
              <div className="border-t border-gray-200 pt-6 sm:pt-8 space-y-4">
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-xl font-bold">Defend Your Enterprise &amp; Settle Commercial Debt</h3>
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed"> Struggling with unserviceable firm loans. Cash credit limits. claims notices? Consult CredSettle’s trade banking lawyers for a complete balance sheet settlement. Legal shielding. And closure. </p>
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
              <div className="font-bold text-xs text-black mb-1">Protect Business Assets</div>
              <p className="text-[10px] text-black mb-3 leading-tight"> Senior lawyers file DRT objections and halt SARFAESI auctions within legal deadlines. </p>
              <Link
                href="/contact"
                className="block w-full bg-blue-600 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-[11px]"
              >
                Request Corporate Review
              </Link>
              <div className="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-black space-y-1 text-left">
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% Confidential</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> SARFAESI &amp. DRT Shield</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> Director private Immunity</p>
              </div>
            </div>

            {/* Diagnostic Calculator Quick Jump */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-black">
              <span className="font-bold text-black block text-[11px]">Commercial OTS Calculator</span>
              <p className="text-[10px] text-black leading-tight">Estimate trade settlement haircut &amp. savings.</p>
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
