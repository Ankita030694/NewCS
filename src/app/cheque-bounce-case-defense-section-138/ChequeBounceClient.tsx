'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';

export default function ChequeBounceClient() {
  const [activeId, setActiveId] = useState<string>('intro-cheque-bounce-cases');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  const [showFloatingNav, setShowFloatingNav] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [tocSearch, setTocSearch] = useState<string>('');
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Interactive Section 138 Criminal Exposure & Defense Calculator State
  const [calcChequeAmount, setCalcChequeAmount] = useState<number>(500000);
  const [calcChequeType, setCalcChequeType] = useState<string>('security_blank');
  const [calcCaseStage, setCalcCaseStage] = useState<string>('statutory_notice');
  const [calcIsDirector, setCalcIsDirector] = useState<boolean>(false);

  // Interactive Calculation Logic
  const niAnalysis = useMemo(() => {
    const maxFineExposure = calcChequeAmount * 2;
    const interimRisk = Math.round(calcChequeAmount * 0.20);

    let strategy = 'Rebut Section 139 presumption by establishing security instrument status and lack of subsisting debt on presentation date.';
    let immediateAction = 'Draft and serve an assertive, point-by-point Legal Reply within 15 days of notice receipt via Speed Post AD.';

    if (calcChequeType === 'security_blank') {
      strategy = 'Defense under Indus Airways & Sampelly Satyanarayana Rao: undated security cheque presented without mature debt or prior default notice.';
      immediateAction = 'Demand immediate return of security instrument and issue formal stop-payment intimation to bank.';
    } else if (calcChequeType === 'loan_emi') {
      strategy = 'Defense under Dashrathbhai Patel (SC 2022): unendorsed part-payments and excessive penal compounding violate Section 56 NI Act.';
      immediateAction = 'Collate complete loan account statement and initiate bilateral One-Time Settlement (OTS) under RBI guidelines.';
    } else if (calcChequeType === 'commercial_vendor') {
      strategy = 'Defense of failed consideration & breach of contract: defective goods/unperformed services disprove legally enforceable liability.';
      immediateAction = 'Assemble contemporaneous commercial correspondence, rejection memos, delivery challans, and GST e-way bills.';
    } else if (calcChequeType === 'personal_friendly') {
      strategy = 'Basalingappa & K. Subramani doctrine: challenge financial capacity of complainant, lack of ITR disclosure, and cash source.';
      immediateAction = 'Demand audited financial disclosures, ITR filings, and proof of source of funds during cross-examination.';
    }

    if (calcCaseStage === 'summons_received') {
      immediateAction = 'Engage criminal defense counsel to appear on summons date, furnish personal bail bond, and secure regular court bail.';
    } else if (calcCaseStage === 'bailable_warrant') {
      immediateAction = 'Urgent Section 70(2) CrPC / Section 72 BNSS application for recall and cancellation of warrant with medical/absence grounds.';
    } else if (calcCaseStage === 'trial_stage') {
      immediateAction = 'File application under Section 145(2) NI Act to recall complainant for cross-examination and oppose Section 143A interim deposit.';
    }

    if (calcIsDirector) {
      strategy += ' Section 141 Vicarious Liability Shield: invoke Sunita Palita & SMS Pharma to quash proceedings against non-executive directors.';
    }

    return {
      maxFineExposure,
      interimRisk,
      strategy,
      immediateAction
    };
  }, [calcChequeAmount, calcChequeType, calcCaseStage, calcIsDirector]);

  // Master 10-Module Navigation Structure (78 Sections)
  const navModules = useMemo(() => [
    {
      moduleTitle: "Module 1: Foundations & Statutory Framework",
      links: [
        { id: "intro-cheque-bounce-cases", label: "1. Introduction to Cheque Bounce Cases" },
        { id: "what-is-a-cheque-bounce", label: "2. What Is a Cheque Bounce?" },
        { id: "what-is-section-138-of-the-negotiable-instruments-act", label: "3. What Is Section 138 NI Act?" },
        { id: "essential-ingredients-of-a-section-138-case", label: "4. Essential Ingredients of Section 138" },
        { id: "when-does-section-138-apply", label: "5. When Does Section 138 Apply?" },
        { id: "when-does-section-138-not-apply", label: "6. When Does Section 138 Not Apply?" },
        { id: "cheque-bounce-due-to-insufficient-funds", label: "7. Dishonour Due to Insufficient Funds" },
        { id: "other-reasons-for-cheque-dishonour", label: "8. Other Reasons for Dishonour" },
      ]
    },
    {
      moduleTitle: "Module 2: Statutory Notices & Timelines",
      links: [
        { id: "cheque-bounce-notice-what-is-it", label: "9. Cheque Bounce Notice – What Is It?" },
        { id: "legal-notice-under-section-138", label: "10. Legal Notice Under Section 138" },
        { id: "time-limit-for-sending-a-cheque-bounce-notice", label: "11. 30-Day Notice Time Limit" },
        { id: "how-to-reply-to-a-section-138-legal-notice", label: "12. Replying to Section 138 Notice" },
        { id: "what-happens-after-receiving-a-cheque-bounce-notice", label: "13. 15-Day Statutory Grace Period" },
        { id: "time-limit-for-filing-a-section-138-complaint", label: "14. Time Limit for Filing Complaint" },
      ]
    },
    {
      moduleTitle: "Module 3: Court Filing, Jurisdiction & Trial",
      links: [
        { id: "cheque-bounce-case-filing-process", label: "15. Court Filing Process" },
        { id: "stages-of-a-section-138-cheque-bounce-case", label: "16. 7 Stages of a Section 138 Case" },
        { id: "jurisdiction-in-cheque-bounce-cases", label: "17. Territorial Jurisdiction Rules" },
        { id: "documents-required-for-a-cheque-bounce-case", label: "18. Required Documents Checklist" },
        { id: "evidence-required-in-a-section-138-case", label: "19. Evidence & Section 65B Rules" },
        { id: "presumptions-under-sections-118-and-139", label: "20. Presumptions Under Sec 118 & 139" },
        { id: "burden-of-proof-in-cheque-bounce-cases", label: "21. Burden of Proof & Rebuttal" },
      ]
    },
    {
      moduleTitle: "Module 4: Substantive Defense Strategies",
      links: [
        { id: "how-to-defend-a-cheque-bounce-case", label: "22. How to Defend a Section 138 Case" },
        { id: "common-defences-in-cheque-bounce-cases", label: "23. Top Common Defenses Overview" },
        { id: "defence-of-no-legally-enforceable-debt", label: "24. No Legally Enforceable Debt" },
        { id: "defence-of-security-cheque-misuse", label: "25. Security Cheque Misuse Defense" },
        { id: "defence-of-cheque-given-for-loan-security", label: "26. Loan Security Cheque Defense" },
        { id: "defence-of-blank-signed-cheque-misuse", label: "27. Blank Signed Cheque Defense" },
        { id: "defence-of-stop-payment-instruction", label: "28. Stop Payment Defense (Sec 139)" },
        { id: "defence-of-account-closed", label: "29. Account Closed Pre-Drawn Defense" },
        { id: "defence-of-signature-mismatch", label: "30. Signature Discrepancy Defense" },
      ]
    },
    {
      moduleTitle: "Module 5: Technical, Notice & Procedural Defenses",
      links: [
        { id: "defence-of-cheque-not-issued-voluntarily", label: "31. Cheque Under Coercion / Duress" },
        { id: "defence-of-cheque-lost-or-stolen", label: "32. Lost or Stolen Cheque Defense" },
        { id: "defence-of-time-barred-debt", label: "33. Time-Barred Debt Defense" },
        { id: "defence-of-dispute-regarding-liability", label: "34. Disputed Unliquidated Liability" },
        { id: "defence-of-defective-legal-notice", label: "35. Defective Demand Notice Defense" },
        { id: "defence-of-non-receipt-of-legal-notice", label: "36. Non-Receipt of Notice Defense" },
        { id: "defence-of-notice-sent-to-wrong-address", label: "37. Wrong Address Service Defense" },
        { id: "defence-of-case-filed-after-limitation-period", label: "38. Limitation Expired Defense" },
      ]
    },
    {
      moduleTitle: "Module 6: Specialized Entity & Pre-Trial Defenses",
      links: [
        { id: "defence-of-lack-of-territorial-jurisdiction", label: "39. Lack of Territorial Jurisdiction" },
        { id: "defence-of-cheque-issued-by-partnership-firm", label: "40. Partnership Firm Defenses" },
        { id: "defence-of-cheque-issued-by-company-director-liability", label: "41. Company & Director Vicarious Liability" },
        { id: "defence-for-non-executive-directors", label: "42. Non-Executive Director Defense" },
        { id: "defence-for-independent-directors", label: "43. Independent Director Protection" },
        { id: "defence-for-sleeping-partners", label: "44. Sleeping Partner Immunity" },
        { id: "defence-in-case-of-cheque-bounce-for-friendly-loans", label: "45. Friendly Loan & Cash Defense" },
        { id: "defence-when-cheque-amount-differs-from-actual-liability", label: "46. Part-Payment & Sec 56 Defense" },
      ]
    },
    {
      moduleTitle: "Module 7: Landmark Precedents & Trial Procedure",
      links: [
        { id: "landmark-judgments-in-cheque-bounce-cases", label: "47. Supreme Court Landmark Judgments" },
        { id: "how-to-rebut-presumption-under-section-139", label: "48. Rebutting Sec 139 Presumption" },
        { id: "preponderance-of-probabilities-in-cheque-bounce", label: "49. Preponderance of Probabilities" },
        { id: "cross-examination-of-complainant-in-138-case", label: "50. Cross-Examination Strategy" },
        { id: "effective-questions-for-cross-examination", label: "51. Crucial Cross-Examination Questions" },
        { id: "defence-evidence-in-cheque-bounce-cases", label: "52. Leading Accused Defense Evidence" },
        { id: "can-accused-give-evidence-on-affidavit", label: "53. Accused Evidence on Affidavit" },
      ]
    },
    {
      moduleTitle: "Module 8: Penalties, Compounding & Settlements",
      links: [
        { id: "penalties-and-punishment-under-section-138", label: "54. Penalties & 2-Year Jail Scope" },
        { id: "can-you-go-to-jail-for-cheque-bounce", label: "55. Can You Go to Jail?" },
        { id: "interim-compensation-under-section-143a", label: "56. Section 143A 20% Interim Compensation" },
        { id: "how-to-avoid-interim-compensation-payment", label: "57. Opposing Section 143A Orders" },
        { id: "compounding-of-cheque-bounce-offences", label: "58. Section 147 Compounding" },
        { id: "settlement-in-cheque-bounce-cases", label: "59. Out-of-Court Settlement Procedure" },
        { id: "cheque-bounce-settlement-in-lok-adalat", label: "60. Settlement in National Lok Adalat" },
        { id: "mediation-in-cheque-bounce-cases", label: "61. Court-Referred Mediation" },
        { id: "quashing-of-cheque-bounce-case-under-section-482", label: "62. Quashing Under Section 482 CrPC" },
      ]
    },
    {
      moduleTitle: "Module 9: High Court Appeals, Bail & Civil Redress",
      links: [
        { id: "appeal-against-conviction-in-cheque-bounce-case", label: "63. Sessions Court Appeal & Bail" },
        { id: "deposit-of-compensation-during-appeal", label: "64. Section 148 Appeal Deposit" },
        { id: "bailable-and-non-bailable-warrants", label: "65. Bailable & Non-Bailable Warrants" },
        { id: "how-to-cancel-a-non-bailable-warrant", label: "66. Recalling Warrants (Sec 70(2))" },
        { id: "how-to-get-bail-in-a-cheque-bounce-case", label: "67. Securing Bail in Section 138" },
        { id: "cheque-bounce-case-vs-civil-suit-for-recovery", label: "68. Section 138 vs Civil Recovery Suit" },
        { id: "cheque-bounce-case-vs-fir-under-section-420", label: "69. Section 138 vs Section 420 / 318 FIR" },
      ]
    },
    {
      moduleTitle: "Module 10: Digital Payments, CIBIL & Master Action Plan",
      links: [
        { id: "cheque-bounce-in-business-transactions", label: "70. Business Transaction Dishonour" },
        { id: "cheque-bounce-for-loan-emi-payments", label: "71. Loan EMI Cheque Dishonour" },
        { id: "section-25-payment-and-settlement-systems-act", label: "72. Section 25 NACH / ECS Dishonour" },
        { id: "impact-of-cheque-bounce-on-cibil-score", label: "73. Impact on CIBIL & Credit Score" },
        { id: "how-to-prevent-cheque-bounce-cases", label: "74. Preventive Risk Protocols" },
        { id: "role-of-a-cheque-bounce-lawyer", label: "75. Role of Criminal Defense Lawyer" },
        { id: "why-choose-credsettle-for-cheque-bounce-defence", label: "76. Why Choose CredSettle Defense" },
        { id: "step-by-step-defense-plan", label: "77. Master 6-Step Defense Checklist" },
        { id: "conclusion-understanding-your-rights", label: "78. Conclusion: Know Your Rights" },
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
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            Negotiable Instruments Act 1881 • Criminal Defense &amp; Compounding Shield
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words">
            Cheque Bounce Case Defense Under Section 138<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">
              The Complete Legal, Precedents &amp; Acquittal Master Guide
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            Defend against statutory legal notices, court summons, and bailable warrants. Rebut Section 139 debt presumptions, expose security cheque misuse, secure instant court bail, and execute Section 147 compounding with senior criminal defense advocates.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md active:scale-98 text-center"
            >
              Get Free Section 138 Legal Review
            </Link>
            <a
              href="#section-138-defense-calculator"
              className="px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm text-white bg-blue-600/40 hover:bg-blue-600/60 border border-blue-400/40 transition-all backdrop-blur-sm active:scale-98 text-center"
            >
              Calculate Exposure &amp; Defense ⚡
            </a>
          </div>
          <div className="mt-3.5 sm:mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-blue-200/80">
            <span>✓ Supreme Court Precedent Defense</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Same-Day Court Bail Support</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Section 147 Compounding &amp; Lok Adalat</span>
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
              { name: 'Legal Defense', url: '/services' },
              { name: 'Cheque Bounce Case Defense (Section 138)', url: '/cheque-bounce-case-defense-section-138' }
            ]}
          />
        </div>
      </div>

      {/* Trust & E-E-A-T Signal Banner */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-3 sm:px-4 border-b border-slate-800 text-[11px] sm:text-xs md:text-sm">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-amber-600 text-white font-semibold px-2 py-0.5 rounded text-[10px] sm:text-xs">CRIMINAL LITIGATION ADVISORY</span>
            <span className="leading-tight">Reviewed by Senior Criminal Defense Advocates &amp; High Court Banking Litigators</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400 text-[10px] sm:text-xs">
            <span>Last Updated: October 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>Negotiable Instruments Act 1881 &amp; Supreme Court Precedents</span>
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
              href="#section-138-defense-calculator"
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
              All 78
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
                    <p className="text-[10px] text-slate-300">78 Master Sections • Cheque Bounce Defense</p>
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
                    Consult Criminal Defense Advocate
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
                <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">78</span>
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
                  placeholder="Filter 78 topics..."
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
                <span>⚖️</span>
                <h4 className="font-bold text-xs text-white">Court Summons?</h4>
              </div>
              <p className="text-[10px] text-blue-200 mb-2 leading-snug">
                Urgent bail, warrant recall, and legal defense representation across all Magistrate Courts.
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
          {/* MIDDLE COLUMN: MASTER 78-SECTION EDITORIAL CONTENT (70% Width)        */}
          {/* ===================================================================== */}
          <div className="lg:w-[70%] flex-1 min-w-0">
            <article className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-sm border border-gray-200/90 space-y-8 sm:space-y-12 overflow-hidden text-black">


              {/* =================================================================== */}
              {/* MODULE 1: FOUNDATIONS & STATUTORY FRAMEWORK (1–8)                   */}
              {/* =================================================================== */}

              {/* Section 1 */}
              <section id="intro-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 1
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  1. Introduction to Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In modern Indian commerce, banking, and retail lending, cheques have historically served as a foundational instrument for credit disbursement, trade credit collateral, and deferred payment commitments. However, the dishonour of a cheque introduces severe legal consequences under Indian commercial and criminal jurisprudence. A returned cheque transforms what might appear as a routine civil breach of contract into a quasi-criminal trial before a Judicial Magistrate.
                </p>
                <p>
                  Thousands of borrowers, business promoters, and commercial guarantors across India find themselves facing coercive legal notices and court summons following the bounce of Equated Monthly Installment (EMI) cheques, post-dated security cheques, or business vendor payments. Coercive collection agencies and aggressive complainants routinely leverage the threat of criminal prosecution, non-bailable warrants, and jail time to force panicked payments.
                </p>
                <p>
                  Receiving a cheque bounce notice or court summons does not mean automatic criminal conviction or immediate imprisonment. The Indian legal framework—anchored by the Negotiable Instruments Act, 1881, and landmark rulings of the Supreme Court of India—provides comprehensive statutory safeguards, strict procedural conditions precedent, and robust substantive defenses to protect honest drawers against fraudulent prosecution, misused security cheques, and exaggerated claims.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl text-xs text-blue-950 space-y-1">
                  <p className="font-bold text-blue-900">Core Jurisprudential Principle:</p>
                  <p className="font-medium text-black">
                    Section 138 proceedings are intended to enhance the credibility of negotiable instruments in trade, not to serve as an extortionary debt-collection weapon for predatory lenders. If a cheque was issued without an existing, legally enforceable debt on the date of presentation, no criminal offense is made out in the eyes of the law.
                  </p>
                </div>
                </div>
              </section>

              {/* Interactive Assessment Funnel - Blended inside Middle Container Above Chapter 2 */}
              <div className="not-prose my-6 sm:my-8 p-3 sm:p-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-slate-50 rounded-2xl border border-blue-100 shadow-xs">
                <InteractiveLeadFunnel className="!bg-transparent !p-0 !py-0 !px-0" />
              </div>

              {/* Section 2 */}
              <section id="what-is-a-cheque-bounce" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 2
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  2. What Is a Cheque Bounce?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A &quot;cheque bounce&quot;—statutorily referred to as the dishonour of a cheque—occurs when a banking institution returns a presented negotiable instrument unpaid to the drawee/payee bank accompanied by an authenticated &quot;Bank Return Memo&quot; or &quot;Cheque Return Advice&quot; specifying the factual ground for non-clearance.
                </p>
                <p>
                  Under the Banking Regulation Act, 1949, and the uniform clearing house rules established by the National Payments Corporation of India (NPCI) under CTS-2010 (Cheque Truncation System) standards, the drawee bank must assign a standardized reason code on the return memo. While dishonour can arise from multiple banking conditions (such as signature mismatch, account closed, or stop payment), only specific categories of dishonour attract criminal liability under Section 138 of the Negotiable Instruments Act.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      The Bank Return Memo
                    </h4>
                    <p className="text-black font-normal">
                      The official documentary certificate issued by the clearing bank stating the date of dishonour and specific bank reason code. This document forms the primary evidentiary cornerstone required for statutory notice issuance.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Quasi-Criminal Status
                    </h4>
                    <p className="text-black font-normal">
                      Cheque dishonour is fundamentally a civil breach of a monetary undertaking that the legislature, via the Banking, Public Financial Institutions and Negotiable Instruments Laws (Amendment) Act 1988, elevated to a specialized criminal offense.
                    </p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="what-is-section-138-of-the-negotiable-instruments-act" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 3
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  3. What Is Section 138 of the Negotiable Instruments Act?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Section 138 of the Negotiable Instruments Act, 1881 (NI Act) is the special penal provision in Indian law that criminalizes the dishonour of a cheque drawn by a person on an account maintained by them with a banker for the discharge, in whole or in part, of any legally enforceable debt or other liability.
                </p>
                <p>
                  Inserted by Parliament through the 1988 Amendment to promote commercial integrity and discourage reckless issuance of negotiable paper, Section 138 establishes strict liability once the statutory conditions are met. Under the statute, an offender may be punished with imprisonment for a term which may extend to two years, or with a monetary fine which may extend to twice the amount of the cheque, or with both.
                </p>
                <p>
                  Crucially, criminal liability does not trigger instantly at the moment the cheque bounces. The law mandates strict compliance with a sequential chain of procedural prerequisites—including presentation within the cheque&apos;s validity period, mandatory service of a statutory demand notice within 30 days of receiving the return memo, and the drawer&apos;s subsequent failure to pay within 15 days of notice receipt.
                </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="essential-ingredients-of-a-section-138-case" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 4
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  4. Essential Ingredients of a Section 138 Case
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In a catena of decisions—most notably in <em>Kusum Ingots &amp; Alloys Ltd. v. Pennar Peterson Securities Ltd. (2000)</em> and <em>Aparna A. Shah v. Sheth Developers (2013)</em>—the Supreme Court of India delineated the seven cumulative essential ingredients that a complainant must strictly prove to sustain a conviction under Section 138:
                </p>
                <div className="space-y-2.5 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">1. Drawing of the Cheque:</span>
                    <p className="font-normal text-black">The cheque must be drawn by the accused on a bank account maintained in their own name or on behalf of an authorized entity.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">2. Discharge of Existing Enforceable Debt:</span>
                    <p className="font-normal text-black">The instrument must have been executed for the discharge, in whole or in part, of a legally enforceable debt or legal liability existing on the date of issuance or maturity.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">3. Presentation Within Validity:</span>
                    <p className="font-normal text-black">The cheque must be presented to the drawee bank within its validity period (strictly 3 months from the date written on the instrument under RBI circulars).</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">4. Dishonour by Bank:</span>
                    <p className="font-normal text-black">The instrument must be returned unpaid by the bank due to insufficiency of funds or because it exceeds the arranged overdraft limit.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">5. Statutory Demand Notice in Writing:</span>
                    <p className="font-normal text-black">The payee or holder in due course must issue a formal written demand notice within 30 days of receiving information regarding the dishonour from the bank.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">6. Expiry of 15-Day Grace Period:</span>
                    <p className="font-normal text-black">The drawer must fail to make payment of the demanded cheque amount within 15 calendar days from the date of receipt of the legal notice.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">7. Timely Complaint Filing:</span>
                    <p className="font-normal text-black">The formal criminal complaint must be filed before the competent Judicial Magistrate within 1 month from the date the cause of action arises (i.e., on the 16th day following notice receipt).</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="when-does-section-138-apply" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 5
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  5. When Does Section 138 Apply?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Section 138 applies in transactions where a negotiable cheque is tendered to satisfy a crystallized, verifiable legal debt. Common commercial and financial scenarios that fall within the statutory ambit include:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-black font-normal">
                  <li><strong>Commercial Invoices &amp; Vendor Payments:</strong> Cheques issued by traders, manufacturers, or businesses toward undisputed supply of goods, work contracts, or professional services rendered.</li>
                  <li><strong>Matured Loan Repayments:</strong> Cheques deposited toward overdue loan installments or bullet repayment where an enforceable loan agreement exists and the liability was due on the presentation date.</li>
                  <li><strong>Commercial Rent &amp; Lease Obligations:</strong> Cheques drawn for contractual property rentals, commercial leases, or equipment hire where possession and services were delivered.</li>
                  <li><strong>Documented Friendly Loans:</strong> Written promissory notes or bank-transferred friendly loans where the cheque was explicitly issued to repay a documented monetary advance.</li>
                  <li><strong>Compromise &amp; Settlement Deeds:</strong> Cheques issued pursuant to an executed formal settlement agreement, Lok Adalat award, or mediation settlement.</li>
                </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section id="when-does-section-138-not-apply" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 6
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  6. When Does Section 138 Not Apply?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Understanding when Section 138 does <em>not</em> apply is the most critical foundation for building a successful legal defense. The criminal machinery cannot be invoked in any of the following circumstances:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-black">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="font-bold text-red-950 block">1. Advance Payment for Unperformed Contracts</span>
                    <p className="font-normal text-black">Where a cheque was issued as an advance for goods or services that the complainant subsequently failed to supply. (Supreme Court in <em>Indus Airways</em>).</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="font-bold text-red-950 block">2. Undocumented Cash or Hawala Transactions</span>
                    <p className="font-normal text-black">Claims arising from unaccounted black-money transactions, illegal gambling, or amounts violating Section 269SS/269T of the Income Tax Act.</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="font-bold text-red-950 block">3. Time-Barred Debt (Limitation Act)</span>
                    <p className="font-normal text-black">A cheque issued for a debt that was already barred by the 3-year limitation period without a prior written acknowledgment under Section 18 of the Limitation Act.</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="font-bold text-red-950 block">4. Voluntary Gifts or Charitable Pledges</span>
                    <p className="font-normal text-black">A cheque delivered purely as a personal gift, dowry pledge, or moral obligation lacks valuable commercial consideration and cannot sustain prosecution.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="cheque-bounce-due-to-insufficient-funds" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 7
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  7. Cheque Bounce Due to Insufficient Funds
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The primary statutory condition explicitly codified in Section 138 is that the cheque is returned unpaid by the bank either because the amount of money standing to the credit of that account is insufficient to honour the cheque, or that it exceeds the amount arranged to be paid from that account by an agreement made with that bank (such as an overdraft or cash-credit limit).
                </p>
                <p>
                  Bank Return Memo reason codes such as &quot;Funds Insufficient&quot; (CTS code 01) or &quot;Exceeds Arrangement&quot; (CTS code 02) trigger the presumption that the drawer failed to maintain adequate liquidity to meet their contractual commitment. However, our defense advocates routinely prove that insufficient funds on the presentation date are legally immaterial if the complainant deposited the cheque prematurely or in violation of an agreed schedule.
                </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="other-reasons-for-cheque-dishonour" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 8
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  8. Other Reasons for Cheque Dishonour
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  While Section 138 explicitly mentions &quot;insufficiency of funds&quot; and &quot;exceeds arrangement,&quot; the Supreme Court through landmark constitutional bench rulings has expanded the scope to prevent fraudulent drawers from dodging criminal liability through evasive banking instructions:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs text-black font-normal">
                  <li><strong>&quot;Stop Payment Instructions&quot; (Modi Cements v. Kuchil Kumar Nandi):</strong> The apex court held that instructing your bank to stop payment does not take the matter out of Section 138, unless the drawer affirmatively proves that stop payment was issued because there was no subsisting debt or because of genuine fraud/loss of instrument.</li>
                  <li><strong>&quot;Account Closed&quot; (NEPC Micon Ltd. v. Magma Leasing Ltd.):</strong> Closing the bank account prior to presentation is judicially treated on par with insufficiency of funds, as it demonstrates deliberate incapacitation to honour the instrument.</li>
                  <li><strong>&quot;Refer to Drawer&quot; &amp; &quot;Exceeds Arrangement&quot;:</strong> Broad banking notations that signify the drawer has no available balance or arrangement to pay the sum.</li>
                  <li><strong>Technical Rejections (Non-138):</strong> Conversely, dishonours due to &quot;Signature Differs,&quot; &quot;Cheque Mutilated,&quot; &quot;Post-Dated,&quot; or &quot;CTS Watermark Missing&quot; require factual rectification and do not automatically constitute criminal conduct unless intentional malice is proven.</li>
                </ul>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 2: STATUTORY NOTICES, GRACE PERIOD & TIMELINES (9–14)        */}
              {/* =================================================================== */}

              {/* Section 9 */}
              <section id="cheque-bounce-notice-what-is-it" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 9
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  9. Cheque Bounce Notice – What Is It?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A Cheque Bounce Notice is a mandatory formal statutory demand served by the payee (or holder in due course) to the drawer of a dishonoured cheque under clause (b) of the proviso to Section 138 of the Negotiable Instruments Act, 1881. It is not an informal reminder, email alert, or collection WhatsApp message; it is a solemn legal document that forms the essential condition precedent to the birth of a criminal cause of action.
                </p>
                <p>
                  The primary statutory objective of this notice is to afford an honest drawer a mandatory 15-day statutory window to verify the transaction, rectify unintended banking oversights, and make the payment before being dragged into criminal litigation. Without strict, lawful service of this notice, no court in India has jurisdiction to take cognizance of a complaint under Section 138.
                </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="legal-notice-under-section-138" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 10
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  10. Legal Notice Under Section 138
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  To be legally valid and enforceable, a statutory notice under Section 138 must satisfy precise legal standards formulated through decades of Supreme Court jurisprudence:
                </p>
                <div className="space-y-2.5 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">1. Clear and Unambiguous Demand:</span>
                    <p className="font-normal text-black">The notice must contain an express demand for the payment of the exact cheque amount. In <em>Central Bank of India v. Saxons Farms (1999)</em>, the Supreme Court ruled that while no specific phrasing is prescribed, the notice must clearly demand the cheque sum within 15 days.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">2. Severability of Extraneous Claims (Suman Sethi Doctrine):</span>
                    <p className="font-normal text-black">If the notice bundles the cheque amount with legal fees, interest, and damages, the cheque amount must be clearly segregated and severable. An omnibus demand that fails to specify the exact cheque value renders the notice fatally defective (<em>Suman Sethi v. Ajay K. Churiwal</em>).</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">3. Full Transaction Particulars:</span>
                    <p className="font-normal text-black">The notice must disclose the cheque number, date, drawn amount, drawee bank branch, bank return memo date, and the specific reason for dishonour.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 11 */}
              <section id="time-limit-for-sending-a-cheque-bounce-notice" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 11
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  11. Time Limit for Sending a Cheque Bounce Notice
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The law prescribes an uncompromising limitation period for dispatching the statutory demand notice. Under Section 138(b), the payee must make the demand in writing <strong>within 30 calendar days</strong> of the receipt of information from the bank regarding the return of the cheque as unpaid.
                </p>
                <p>
                  The limitation clock begins ticking on the exact date the complainant receives the Bank Return Memo, not when the cheque was returned to the clearing house. If the notice is dispatched on the 31st day, the statutory chain of causation is broken forever. The complainant cannot cure this defect, and any subsequent complaint filed on the basis of a belated notice is void ab initio and liable to be quashed under Section 482 CrPC / Section 528 BNSS.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-xl text-xs text-amber-950">
                  <strong>Critical Defense Audit:</strong> Always inspect the postal dispatch receipt and bank return memo stamp. Complainants frequently fabricate the date of receiving the return memo to cover up their delay in dispatching the legal notice.
                </div>
                </div>
              </section>

              {/* Section 12 */}
              <section id="how-to-reply-to-a-section-138-legal-notice" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 12
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  12. How to Reply to a Section 138 Legal Notice
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Sending an immediate, strategically constructed Legal Reply through an experienced criminal defense advocate is the single most important step in defeating a cheque bounce case. An unreplied legal notice creates an adverse judicial inference under Section 114 of the Indian Evidence Act, leading the Magistrate to presume that you had no defense to offer.
                </p>
                <p>
                  A high-caliber legal reply drafted by CredSettle achieves several vital strategic objectives:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 text-xs text-black font-normal">
                  <li><strong>Sets the Contemporaneous Defense on Record:</strong> Formally records that the cheque was an undated security instrument given during loan origination, vendor onboarding, or dealership setup, and not for an existing liability.</li>
                  <li><strong>Challenges Financial Capacity of Complainant:</strong> Demands proof of source of funds and income tax compliance if an undocumented cash loan is alleged (invoking the <em>Basalingappa</em> doctrine).</li>
                  <li><strong>Highlights Prior Payments &amp; Statements of Account:</strong> Encloses bank statements, UPI slips, and NEFT receipts proving that partial or full repayment was already executed.</li>
                  <li><strong>Disputes Signatures or Material Alterations:</strong> Denies unauthorized date or amount additions made by the complainant without drawer consent.</li>
                  <li><strong>Serves Counter-Notice:</strong> Formally cautions the complainant against instituting frivolous criminal proceedings and demands immediate return of unencumbered security cheques.</li>
                </ol>
                </div>
              </section>

              {/* Section 13 */}
              <section id="what-happens-after-receiving-a-cheque-bounce-notice" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 13
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  13. What Happens After Receiving a Cheque Bounce Notice?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The delivery of the legal notice activates a mandatory statutory moratorium of <strong>15 calendar days</strong>. Day 1 begins on the date of actual physical delivery (or tracked postal delivery confirmation). During this 15-day window:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-black font-normal">
                  <li><strong>No Criminal Offense Exists Yet:</strong> The law provides this period as an absolute statutory immunity. Even if the drawer admits liability and chooses to pay the demanded amount within these 15 days, no offense is committed, and no complaint can be instituted.</li>
                  <li><strong>Premature Filing is Fatal:</strong> If the complainant files a complaint in court before the expiration of the full 15-day period, the complaint is premature and invalid in law. (Supreme Court in <em>Yogendra Pratap Singh v. Savitri Pandey</em>).</li>
                  <li><strong>Opportunity for Amicable OTS / Settlement:</strong> The drawer and payee can execute a formal settlement deed or One-Time Settlement (OTS) to compound the dispute and withdraw the instrument cleanly.</li>
                </ul>
                </div>
              </section>

              {/* Section 14 */}
              <section id="time-limit-for-filing-a-section-138-complaint" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 14
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  14. Time Limit for Filing a Section 138 Complaint
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under Section 142(1)(b) of the Negotiable Instruments Act, the cause of action to file a criminal complaint arises on the 16th day following the receipt of the statutory notice by the drawer. The complainant must formally file the complaint before the competent Judicial Magistrate / Metropolitan Magistrate <strong>within one month (30 days)</strong> from that date.
                </p>
                <p>
                  While the proviso to Section 142(1)(b) permits the court to condone delay if the complainant demonstrates &quot;sufficient cause,&quot; such applications for condonation must be formally filed and adjudicated. If the complainant filed the complaint past the 30-day window without an application for condonation of delay, the Magistrate lacks jurisdiction to issue summons, providing an immediate ground for discharge.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 3: COURT FILING, JURISDICTION & TRIAL STAGES (15–21)         */}
              {/* =================================================================== */}

              {/* Section 15 */}
              <section id="cheque-bounce-case-filing-process" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 15
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  15. Cheque Bounce Case Filing Process
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The filing of a Section 138 complaint initiates a specialized criminal proceeding governed by Chapter XVII of the Negotiable Instruments Act read with the Code of Criminal Procedure, 1973 (CrPC) / Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS). The complainant submits a written complaint before the Chief Judicial Magistrate (CJM) or Metropolitan Magistrate (MM).
                </p>
                <p>
                  The complaint must contain the primary transaction narrative, verify the original cheque, bank return memo, copy of the statutory demand notice, postal dispatch receipt, and online delivery tracking confirmation. Upon physical or e-filing through the eCourts platform, the court assigns a Criminal Case (CC) or Complaint Case number and lists the matter for pre-summoning examination.
                </p>
                </div>
              </section>

              {/* Section 16 */}
              <section id="stages-of-a-section-138-cheque-bounce-case" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 16
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  16. Stages of a Section 138 Cheque Bounce Case
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A Section 138 case progresses through seven distinct judicial phases. Understanding these stages allows the accused to prepare timely procedural objections, secure bail without distress, and execute an effective cross-examination strategy:
                </p>
                <div className="space-y-3 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Stage 1: Pre-Summoning Evidence (Section 200 CrPC / Sec 223 BNSS)</span>
                    <p className="font-normal text-black">The complainant tenders an affidavit of pre-summoning evidence and exhibits the original documents. Under Section 145(1) NI Act, the complainant does not need to give oral testimony at this initial stage.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Stage 2: Judicial Cognizance &amp; Issuance of Summons (Section 204)</span>
                    <p className="font-normal text-black">The Magistrate scrutinizes the documents to verify territorial jurisdiction and limitation. Upon prima facie satisfaction, the court issues court summons directing the accused drawer to appear.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Stage 3: Appearance, Bail &amp; Notice of Accusation (Section 251)</span>
                    <p className="font-normal text-black">The accused appears before the Magistrate and obtains court bail. The Magistrate frames the formal Notice under Section 251 CrPC / Sec 274 BNSS, recording the accused&apos;s plea of &quot;Not Guilty&quot; and their core grounds of defense.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Stage 4: Application Under Section 145(2) &amp; Cross-Examination</span>
                    <p className="font-normal text-black">The defense counsel files a formal application under Section 145(2) NI Act to recall the complainant for oral cross-examination to dismantle the debt claim, expose ledger contradictions, and prove cheque misuse.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Stage 5: Statement of Accused (Section 313 CrPC / Sec 351 BNSS)</span>
                    <p className="font-normal text-black">The Magistrate puts all incriminating circumstances and evidence directly to the accused to record their personal explanation without taking an oath.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Stage 6: Defense Evidence (DE)</span>
                    <p className="font-normal text-black">The accused enters the witness box (by filing an application under Section 315 CrPC) or examines defense witnesses (bank managers, forensic handwriting experts, company accountants) to rebut statutory presumptions.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Stage 7: Final Arguments &amp; Pronouncement of Judgment</span>
                    <p className="font-normal text-black">Advocates present statutory case laws and written submissions. The Magistrate pronounces judgment—either acquitting the accused or entering a conviction with sentence.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 17 */}
              <section id="jurisdiction-in-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 17
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  17. Jurisdiction in Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Territorial jurisdiction under Section 138 was historically a source of severe forum shopping and harassment. To eliminate ambiguity, Parliament enacted the Negotiable Instruments (Amendment) Act, 2015, codifying Section 142(2) to establish unambiguous, fixed territorial rules:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-black">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">If Delivered for Account Credit:</span>
                    <p className="font-normal text-black">The court within whose local jurisdiction the <strong>branch of the bank where the payee maintains the account</strong> is situated. (Section 142(2)(a)).</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">If Presented Over the Counter:</span>
                    <p className="font-normal text-black">The court within whose local jurisdiction the <strong>branch of the drawee bank where the drawer maintains the account</strong> is situated. (Section 142(2)(b)).</p>
                  </div>
                </div>
                <p>
                  If a complainant files a case in a remote city where their home branch is NOT located, our advocates immediately file a jurisdictional objection for return of the complaint under Section 201 CrPC / Section 224 BNSS.
                </p>
                </div>
              </section>

              {/* Section 18 */}
              <section id="documents-required-for-a-cheque-bounce-case" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 18
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  18. Documents Required for a Cheque Bounce Case
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Both prosecution and defense revolve around authenticated documentary exhibits. A complete cheque bounce court record comprises:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-black font-normal">
                  <li>Original dishonoured cheque bearing the drawer&apos;s signature.</li>
                  <li>Original Bank Return Memo with official clearing stamp and CTS reason code.</li>
                  <li>Office copy of the statutory Legal Notice served under Section 138(b).</li>
                  <li>Original Postal / Speed Post dispatch receipts and tracking delivery consignment logs.</li>
                  <li>Original Legal Reply issued by the accused (if dispatched).</li>
                  <li>Underlying loan agreement, commercial invoices, delivery challans, or ledger statements.</li>
                </ul>
                </div>
              </section>

              {/* Section 19 */}
              <section id="evidence-required-in-a-section-138-case" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 19
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  19. Evidence Required in a Section 138 Case
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In a Section 138 trial, evidence is governed by the special rules of the NI Act combined with the Bharatiya Sakshya Adhiniyam / Indian Evidence Act. While the complainant benefits from statutory presumptions regarding the execution of the cheque, they must still produce credible primary evidence establishing that a real, lawful transaction occurred.
                </p>
                <p>
                  Electronic evidence—such as WhatsApp settlement conversations, email correspondence, and online banking account ledgers—must be authenticated with mandatory certificates under Section 65B of the Indian Evidence Act / Section 63 BSA. Without Section 65B compliance, digital records cannot be read into evidence by the court.
                </p>
                </div>
              </section>

              {/* Section 20 */}
              <section id="presumptions-under-sections-118-and-139" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 20
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  20. Presumptions Under Sections 118 and 139
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The Negotiable Instruments Act creates two powerful statutory &quot;reverse burden&quot; presumptions in favor of the holder:
                </p>
                <div className="space-y-2 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Section 118(a) Presumption of Consideration:</span>
                    <p className="font-normal text-black">The law presumes that every negotiable instrument was made or drawn for consideration, and that every such instrument was accepted, endorsed, or negotiated for consideration.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Section 139 Presumption of Debt Discharge:</span>
                    <p className="font-normal text-black">It shall be presumed, unless the contrary is proved, that the holder of a cheque received the cheque for the discharge, in whole or in part, of any debt or other liability.</p>
                  </div>
                </div>
                <p>
                  These presumptions mean that once the accused admits their signature on the cheque, the burden shifts to the accused to prove that the cheque was NOT issued for an existing debt.
                </p>
                </div>
              </section>

              {/* Section 21 */}
              <section id="burden-of-proof-in-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 21
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  21. Burden of Proof in Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  While the initial statutory presumption favors the complainant, the standard of proof required for the accused to rebut this presumption is fundamentally different from a regular criminal trial. The Supreme Court in landmark three-judge bench judgments—including <em>Rangappa v. Sri Mohan (2010)</em> and <em>Basalingappa v. Mudibasappa (2019)</em>—settled the law:
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl text-xs text-emerald-950 space-y-1.5">
                  <p className="font-bold text-emerald-900">The Preponderance of Probabilities Standard:</p>
                  <p className="font-normal text-black">
                    The accused is <strong>NOT required to prove their defense beyond reasonable doubt</strong>. The accused only needs to raise a probable defense by a &quot;preponderance of probabilities,&quot; which can be achieved solely by puncturing holes in the complainant&apos;s cross-examination without the accused even entering the witness box.
                  </p>
                  <p className="font-normal text-black">
                    Once the accused raises a plausible doubt regarding the existence of the debt or financial capacity of the complainant, the statutory presumption evaporates, and the heavy burden shifts entirely back to the complainant to prove the debt beyond reasonable doubt.
                  </p>
                </div>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 4: SUBSTANTIVE GROUNDS OF LEGAL DEFENSE (22–30)              */}
              {/* =================================================================== */}

              {/* Section 22 */}
              <section id="defences-available-in-section-138-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 22
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  22. Defences Available in Section 138 Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Contrary to popular misconception propagated by aggressive debt collection recovery agents, an accused in a Section 138 trial possesses a vast armory of substantive, technical, and constitutional defenses. Under Indian law, an accused cannot be convicted purely because their signature appears on a dishonoured cheque.
                </p>
                <p>
                  Defenses in cheque dishonour trials broadly fall into three categories: (1) <strong>Substantive Commercial Defenses</strong> challenging the existence, quantum, or enforceability of the debt, (2) <strong>Technical / Procedural Defenses</strong> challenging notice validity, service, or statutory limitation, and (3) <strong>Status / Vicarious Liability Defenses</strong> proving lack of day-to-day managerial control in corporate complaints.
                </p>
                </div>
              </section>

              {/* Section 23 */}
              <section id="common-grounds-for-defence-in-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 23
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  23. Common Grounds for Defence in Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Judicially recognized grounds of defense frequently utilized by our senior banking defense advocates include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">1. Security Cheque Without Subsisting Debt</span>
                    <p className="font-normal text-black">Cheque handed over as an advance collateral security for a contingent liability that had not matured on the presentation date.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">2. Total or Partial Discharge of Liability</span>
                    <p className="font-normal text-black">Proof of direct bank transfers (NEFT/RTGS/UPI) establishing that the claimed liability was already repaid prior to cheque presentation.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">3. Blank Cheque Misuse &amp; Fabrication</span>
                    <p className="font-normal text-black">Cheque signed blank and unauthorizedly filled in with an exaggerated sum without the drawer&apos;s authorization or consent.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">4. Material Alteration (Section 87 NI Act)</span>
                    <p className="font-normal text-black">Tampering with the date, payee name, or amount without the drawer&apos;s explicit countersignature rendering the cheque void.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 24 */}
              <section id="defence-of-no-legally-enforceable-debt" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 24
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  24. Defence of No Legally Enforceable Debt
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The foundational bedrock of Section 138 is that the cheque must have been issued for the discharge of a <em>&quot;legally enforceable debt or other liability.&quot;</em> The Explanation appended to Section 138 explicitly states: <em>&quot;For the purposes of this section, &apos;debt or other liability&apos; means a legally enforceable debt or other liability.&quot;</em>
                </p>
                <p>
                  If the complainant cannot establish the lawful origin of the alleged debt, the prosecution collapses. For example:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-black font-normal">
                  <li><strong>Complainant Has No Source of Income (Basalingappa Doctrine):</strong> If the complainant claims they advanced ₹20 Lakhs in cash but their Income Tax Returns (ITR) show an annual income of ₹2 Lakhs, the court will disbelieve the transaction and acquit the accused.</li>
                  <li><strong>Illegal Consideration (Section 23 Contract Act):</strong> Cheques issued for gambling debts, hawala, or contraband are void under contract law.</li>
                  <li><strong>Unfulfilled Conditions Precedent:</strong> Where payment was contingent upon reciprocal performance (e.g., delivery of machinery or execution of sale deed) which never occurred.</li>
                </ul>
                </div>
              </section>

              {/* Section 25 */}
              <section id="defence-of-payment-already-made" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 25
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  25. Defence of Payment Already Made
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When a borrower makes partial or full repayments against a loan or commercial balance, but the creditor subsequently deposits a cheque for the full original amount without endorsing the part-payment on the instrument, the cheque presentation is illegal under <strong>Section 56 of the Negotiable Instruments Act</strong>.
                </p>
                <p>
                  In the landmark ruling of <em>Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022)</em>, the Supreme Court held: <em>&quot;When a part-payment of the debt is made after the cheque was drawn, but before the cheque is encashed, such payment must be endorsed on the cheque under Section 56 of the Act. The cheque cannot be presented for encashment without recording the part-payment. If presented for the full amount, the offence under Section 138 is not attracted.&quot;</em>
                </p>
                <p>
                  Our defense team routinely produces bank statements showing EMI debits or partial NEFT transfers, securing immediate dismissals of bank and NBFC cheque bounce cases under this ruling.
                </p>
                </div>
              </section>

              {/* Section 26 */}
              <section id="defence-of-security-cheque" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 26
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  26. Defence of Security Cheque
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Banks, NBFCs, and commercial distributors routinely take undated cheques marked or understood as &quot;Security Cheques&quot; at the inception of a transaction. The Supreme Court in <em>Indus Airways Pvt. Ltd. v. Magnum Aviation Pvt. Ltd. (2014)</em> and subsequent rulings established that if a cheque is issued merely as advance security and on the date of its presentation no crystallized debt or liability was due, Section 138 cannot be invoked.
                </p>
                <p>
                  While a security cheque can be presented if a valid debt subsequently matures, the creditor must prove that: (1) A notice of default was given, (2) The exact ledger balance was reconciled, and (3) The drawer was called upon to clear the subsisting liability before the security cheque was deposited.
                </p>
                </div>
              </section>

              {/* Section 27 */}
              <section id="defence-of-misuse-of-blank-cheque" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 27
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  27. Defence of Misuse of Blank Cheque
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under Section 20 of the NI Act, an &quot;inchoate stamped instrument&quot; (a signed blank cheque) gives the holder prima facie authority to fill up the blanks. In <em>Bir Singh v. Mukesh Kumar (2019)</em>, the Supreme Court held that filling in details on a signed blank cheque does not automatically invalidate the instrument.
                </p>
                <p>
                  However, <strong>this authority is strictly limited to the actual amount due</strong>. If a borrower signed a blank cheque for an unsecured loan of ₹5 Lakhs, and the lender filled in ₹25 Lakhs, the accused can prove blank cheque misuse by demonstrating different handwriting inks (via CFSL forensic analysis), showing loan sanction records, and proving that the filled amount exceeds any possible contractually agreed liability.
                </p>
                </div>
              </section>

              {/* Section 28 */}
              <section id="defence-of-material-alteration-in-cheque" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 28
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  28. Defence of Material Alteration in Cheque
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under Section 87 of the Negotiable Instruments Act, <strong>any material alteration of a negotiable instrument renders the same void as against anyone who is a party thereto at the time of making such alteration and does not consent thereto</strong>.
                </p>
                <p>
                  Material alteration includes changing the date (e.g., altering &quot;2023&quot; to &quot;2026&quot; to revive an expired cheque), modifying the payee name, changing the amount from words or figures, or striking out &quot;A/C Payee&quot; endorsements. If the alteration was carried out without the drawer&apos;s full signature endorsing the change, the instrument is null and void in the eyes of the law, warranting immediate acquittal.
                </p>
                </div>
              </section>

              {/* Section 29 */}
              <section id="defence-of-stop-payment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 29
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  29. Defence of Stop Payment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  While a &quot;Stop Payment&quot; instruction does not automatically shield a drawer from Section 138 under the <em>Modi Cements</em> ruling, it serves as a powerful defense if the drawer can prove <strong>valid commercial justification</strong>.
                </p>
                <p>
                  If the drawer instructed the bank to stop payment prior to presentation because: (1) The payee committed breach of contract by failing to deliver purchased goods, (2) The cheque was reported lost or stolen with a contemporaneous police diary entry, or (3) The underlying debt was already paid via online transfer, the defense can prove absence of criminal intent (mens rea) and rebut the Section 139 presumption.
                </p>
                </div>
              </section>

              {/* Section 30 */}
              <section id="defence-of-signature-dispute" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 30
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  30. Defence of Signature Dispute
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  If the signature on the dishonoured cheque was forged, simulated, or executed by an unauthorized third party, the statutory presumption under Section 139 never arises. Section 138 applies exclusively to a cheque <em>&quot;drawn by a person on an account maintained by him.&quot;</em>
                </p>
                <p>
                  In such cases, the defense counsel immediately files an application under Section 45 of the Indian Evidence Act / Section 39 BSA requesting the Magistrate to refer the disputed cheque alongside the drawer&apos;s specimen signatures to the Central Forensic Science Laboratory (CFSL) or a government-notified handwriting expert. If forgery is confirmed, the complaint is dismissed with liberty to prosecute the complainant for cheating under Section 318 BNS / Section 420 IPC.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 5: TECHNICAL, NOTICE & PROCEDURAL DEFENSES (31–38)           */}
              {/* =================================================================== */}

              {/* Section 31 */}
              <section id="defence-of-cheque-not-issued-voluntarily" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 31
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  31. Defence of Cheque Not Issued Voluntarily
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A negotiable instrument executed under coercion, physical duress, criminal intimidation, or unlawful detention at a police station or recovery agency office lacks valid contractual consent under Section 14 and 15 of the Indian Contract Act, 1872. Cheques extracted through muscular intimidation cannot form the basis of a lawful prosecution under Section 138.
                </p>
                <p>
                  To successfully sustain this defense, the accused must establish contemporaneous conduct. If you were forced to sign a cheque under duress, you must immediately lodge a written complaint with the local police station or Magistrate, dispatch a tracked letter to your bank placing a stop-payment instruction citing coercion, and send a legal notice to the extortionist. Presenting these contemporaneous documents during trial convincingly disproves voluntary execution.
                </p>
                </div>
              </section>

              {/* Section 32 */}
              <section id="defence-of-cheque-lost-or-stolen" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 32
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  32. Defence of Cheque Lost or Stolen
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Where a signed or unsigned cheque was misplaced, lost, or stolen and subsequently fell into the hands of an unscrupulous individual who filled in their name and deposited it, the drawer bears zero criminal liability under Section 138.
                </p>
                <p>
                  Key evidentiary proof for this defense includes: (1) A certified copy of the Police Daily Diary (GD Entry) or Lost Article Report lodged prior to the date of cheque presentation, (2) Written communication delivered to the bank branch requesting stop-payment due to loss of cheque leaves, and (3) Absence of any prior commercial relationship, invoices, or communication between the drawer and the alleged complainant.
                </p>
                </div>
              </section>

              {/* Section 33 */}
              <section id="defence-of-time-barred-debt" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 33
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  33. Defence of Time-Barred Debt
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under the Indian Limitation Act, 1963, the statutory limitation period for recovery of a monetary debt or commercial invoice is strictly <strong>three years</strong> from the date the cause of action accrued. A debt that has crossed this three-year threshold becomes a &quot;time-barred debt&quot; and is no longer legally enforceable in a court of law.
                </p>
                <p>
                  In a series of landmark judgments—including the Delhi High Court in <em>Vijay Polymers Pvt. Ltd. v. Vinnay Aggarwal</em> and Kerala High Court in <em>Sasseriyil Joseph v. Devassia</em> (affirmed by the Supreme Court)—courts have held: <strong>Section 138 is NOT attracted when a cheque is issued in respect of a time-barred debt</strong>, unless there was a distinct written promise to pay signed by the drawer under Section 25(3) of the Indian Contract Act. If a lender deposits a stale security cheque 3 years after loan default, the prosecution must be quashed.
                </p>
                </div>
              </section>

              {/* Section 34 */}
              <section id="defence-of-dispute-regarding-liability" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 34
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  34. Defence of Dispute Regarding Liability
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Section 138 applies exclusively to a crystallized, liquidated debt. It does NOT apply where the monetary claim represents unliquidated damages, disputed breach of contract claims, or disputed project penalties.
                </p>
                <p>
                  If the parties are embroiled in an active commercial arbitration, consumer dispute, or civil litigation where liability has not been determined by a competent civil court, a complainant cannot unilaterally deposit a security cheque and convert a complex civil dispute into a criminal conviction. Our advocates demonstrate that the dispute is civil in character, securing referrals to mediation or outright dismissal.
                </p>
                </div>
              </section>

              {/* Section 35 */}
              <section id="defence-of-incorrect-amount-or-wrongful-demand" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 35
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  35. Defence of Incorrect Amount or Wrongful Demand
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Predatory lenders and collection agencies routinely levy illegal compounding interest, exorbitant bounce penalties, and foreclosure fees, inflating a ₹3 Lakh loan default into a ₹12 Lakh cheque demand.
                </p>
                <p>
                  In <em>Dashrathbhai Trikambhai Patel (2022)</em>, the Supreme Court unequivocally ruled that a demand notice which claims an amount higher than the actual legally subsisting liability is invalid. If the cheque amount exceeds the net outstanding balance on the date of presentation, the statutory notice fails the test of law, rendering the complaint non-maintainable.
                </p>
                </div>
              </section>

              {/* Section 36 */}
              <section id="defence-of-defective-or-invalid-legal-notice" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 36
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  36. Defence of Defective or Invalid Legal Notice
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Because Section 138 creates a criminal offense under a special statute, its procedural provisions must be construed with strict precision. A defective statutory notice destroys the foundation of the complaint. Fatal defects include:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-black font-normal">
                  <li><strong>Notice Issued Beyond 30 Days:</strong> Sent more than 30 days after the complainant received the bank return memo.</li>
                  <li><strong>Failure to Demand Exact Cheque Amount:</strong> Demanding an omnibus sum or failing to specify what portion represents the dishonoured instrument.</li>
                  <li><strong>Premature Court Complaint:</strong> Filing the complaint in court before the full 15-day notice period has lapsed.</li>
                  <li><strong>Misleading Bank Details:</strong> Mentioning the wrong cheque number, wrong account number, or incorrect date of dishonour.</li>
                </ul>
                </div>
              </section>

              {/* Section 37 */}
              <section id="defence-of-improper-service-of-legal-notice" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 37
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  37. Defence of Improper Service of Legal Notice
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  While the Supreme Court in <em>C.C. Alavi Haji v. Palapetty Muhammed (2007)</em> held that service is presumed under Section 27 of the General Clauses Act if the notice is sent to the correct registered address, this presumption is rebuttable.
                </p>
                <p>
                  If the complainant deliberately mailed the legal notice to an obsolete address, an incorrect premises, or a fake address knowing the drawer had relocated, there is no service in the eyes of the law. By producing tenancy agreements, Aadhaar address updates, or prior formal bank intimation of address change, the defense can prove deliberate non-service and defeat the prosecution.
                </p>
                </div>
              </section>

              {/* Section 38 */}
              <section id="defence-based-on-limitation-and-procedural-defects" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 38
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  38. Defence Based on Limitation and Procedural Defects
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The procedural architecture of Section 138 operates on a strict mathematical clock:
                </p>
                <div className="p-4 bg-slate-50 border border-slate-300 rounded-xl space-y-2 text-xs text-black">
                  <div className="flex justify-between border-b pb-1 font-semibold text-blue-950">
                    <span>Procedural Step</span>
                    <span>Mandatory Statutory Window</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span>Cheque Presentation</span>
                    <span>Within 3 Months of Cheque Date</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span>Dispatch of Statutory Demand Notice</span>
                    <span>Within 30 Days of Receiving Return Memo</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span>Statutory Grace Period for Drawer</span>
                    <span>15 Days From Receipt of Notice</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Filing Criminal Complaint in Court</span>
                    <span>Within 30 Days After Grace Period Ends</span>
                  </div>
                </div>
                <p>
                  A delay of even a single day at any step without a judicial condonation order terminates the maintainability of the complaint.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 6: CHEQUE CATEGORIES, LOANS & COMMERCIAL CONTEXT (39–46)     */}
              {/* =================================================================== */}

              {/* Section 39 */}
              <section id="security-cheque-and-section-138-legal-position" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 39
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  39. Security Cheque and Section 138 – Legal Position
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The phrase &quot;Security Cheque&quot; is one of the most litigated terms in Indian commercial courts. Lenders and commercial creditors frequently argue that marking a cheque as &quot;Security&quot; does not preclude prosecution under Section 138.
                </p>
                <p>
                  The true legal distinction—established by the Supreme Court in <em>Sampelly Satyanarayana Rao v. Indian Renewable Energy Development Agency Ltd. (2016)</em> and <em>Sripati Singh v. State of Jharkhand (2021)</em>—is based on whether a debt was legally due on the date the cheque was presented:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-red-950 block">When Security Cheque IS Protected:</span>
                    <p className="font-normal text-black">If the cheque was given for an unfulfilled future contract, or if the underlying loan had not defaulted or matured on the cheque date, no Section 138 offense is made out.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">When Creditor May Present It:</span>
                    <p className="font-normal text-black">If a borrower defaults on an existing loan agreement and the creditor issues a prior default notice demanding payment, the creditor may present the security cheque for the matured sum.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 40 */}
              <section id="blank-cheque-and-section-138-legal-position" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 40
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  40. Blank Cheque and Section 138 – Legal Position
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under Section 20 of the NI Act, a person who signs and delivers a blank or incomplete negotiable instrument is presumed to have authorized the payee to complete the details. In <em>Bir Singh v. Mukesh Kumar (2019)</em>, the Supreme Court confirmed that a signed blank cheque voluntarily handed over can attract Section 138 even if filled by another person.
                </p>
                <p>
                  However, <strong>implied authority is strictly bounded by the actual debt</strong>. The payee cannot fill in an arbitrary or inflated number. If the drawer demonstrates through loan statements or bank debits that the filled figure exceeds the actual ledger liability, the presumption of lawful debt stands rebutted, resulting in acquittal.
                </p>
                </div>
              </section>

              {/* Section 41 */}
              <section id="post-dated-cheque-and-section-138" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 41
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  41. Post-Dated Cheque and Section 138
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A Post-Dated Cheque (PDC) remains a mere bill of exchange until the date written upon its face arrives. It only becomes a &quot;cheque&quot; within the meaning of Section 6 of the NI Act on that specified date.
                </p>
                <p>
                  If the contract for which the PDC was issued is cancelled, revoked, or rescinded <em>before</em> the date written on the PDC arrives, the payee has no legal right to present the instrument. If the payee presents it despite contract termination, the drawer has a complete defense under the <em>Indus Airways</em> precedent.
                </p>
                </div>
              </section>

              {/* Section 42 */}
              <section id="multiple-cheques-and-multiple-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 42
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  42. Multiple Cheques and Multiple Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Lenders frequently deposit 5, 10, or 20 EMIs or security cheques simultaneously, triggering dozens of separate criminal notices. Under Section 219 of the CrPC / Section 242 BNSS, where a person is accused of more than one offense of the same kind committed within the space of twelve months, they may be charged with and tried at one trial for any number of them not exceeding three.
                </p>
                <p>
                  Our criminal defense advocates regularly file formal consolidation petitions to club multiple cheque bounce complaints into a single joint trial, saving the accused immense legal costs, multiple bail bonds, and unnecessary court travel.
                </p>
                </div>
              </section>

              {/* =================================================================== */}
              {/* INTERACTIVE SECTION 138 LEGAL DEFENSE & EXPOSURE CALCULATOR          */}
              {/* =================================================================== */}
              <div id="section-138-defense-calculator" className="my-8 p-5 sm:p-7 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl sm:rounded-3xl border border-blue-800/60 shadow-xl text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-blue-800/60 pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-xl">⚖️</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-white">
                        Section 138 Criminal Exposure &amp; Defense Calculator
                      </h3>
                      <p className="text-[11px] text-blue-300">
                        Assess financial exposure, Section 143A interim compensation, and personalized defense strategy.
                      </p>
                    </div>
                  </div>
                  <span className="bg-blue-600/40 text-blue-200 border border-blue-400/40 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    NI Act 1881 Verified
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Sliders & Selectors */}
                  <div className="lg:col-span-7 space-y-4 text-xs">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="font-semibold text-slate-200">Cheque Amount (₹)</label>
                        <span className="text-sm font-bold text-amber-300">₹ {calcChequeAmount.toLocaleString('en-IN')}</span>
                      </div>
                      <input
                        type="range"
                        min="25000"
                        max="5000000"
                        step="25000"
                        value={calcChequeAmount}
                        onChange={(e) => setCalcChequeAmount(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>₹ 25K</span>
                        <span>₹ 25 Lakhs</span>
                        <span>₹ 50 Lakhs</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block font-semibold text-slate-200 mb-1">Transaction Category</label>
                        <select
                          value={calcChequeType}
                          onChange={(e) => setCalcChequeType(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500 text-xs"
                        >
                          <option value="security_blank">Blank Security Cheque (Loan / Distributor)</option>
                          <option value="loan_emi">Bank / NBFC Loan EMI Cheque</option>
                          <option value="commercial_vendor">Commercial Vendor / Invoice Payment</option>
                          <option value="personal_friendly">Personal / Friendly Cash Loan</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-200 mb-1">Current Legal Escalation</label>
                        <select
                          value={calcCaseStage}
                          onChange={(e) => setCalcCaseStage(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500 text-xs"
                        >
                          <option value="statutory_notice">15-Day Statutory Notice Received</option>
                          <option value="summons_received">Court Summons Served</option>
                          <option value="bailable_warrant">Bailable / Non-Bailable Warrant Issued</option>
                          <option value="trial_stage">Trial / Cross-Examination Stage</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="checkbox"
                        id="isDirectorCheck"
                        checked={calcIsDirector}
                        onChange={(e) => setCalcIsDirector(e.target.checked)}
                        className="rounded border-slate-700 text-blue-500 focus:ring-blue-500 w-4 h-4 bg-slate-800"
                      />
                      <label htmlFor="isDirectorCheck" className="text-slate-300 text-xs cursor-pointer">
                        Cheque issued by Company / Accused is a Director (Section 141)
                      </label>
                    </div>
                  </div>

                  {/* Right Column: Output Summary Card */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-blue-900/60 to-slate-800/80 p-4 rounded-xl border border-blue-700/60 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                        Statutory Penal Risk &amp; Settlement Target
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl sm:text-2xl font-extrabold text-amber-400">
                          ₹ {niAnalysis.maxFineExposure.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-300">max statutory fine (2x)</span>
                      </div>
                      <p className="text-[11px] text-blue-200 mt-1">
                        Section 143A Interim Risk (20%): <strong>₹ {niAnalysis.interimRisk.toLocaleString('en-IN')}</strong>
                      </p>
                    </div>

                    <div className="space-y-1.5 text-[11px] border-t border-blue-800/60 pt-2.5">
                      <div className="flex items-start gap-1.5">
                        <span className="text-amber-400 shrink-0 font-bold">Defense Strategy:</span>
                        <span className="text-slate-200">{niAnalysis.strategy}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-emerald-400 shrink-0 font-bold">Recommended Action:</span>
                        <span className="text-slate-200">{niAnalysis.immediateAction}</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="block w-full py-2 bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs rounded-lg text-center transition-colors shadow-md"
                    >
                      Consult Section 138 Defense Counsel
                    </Link>
                  </div>
                </div>
              </div>

              {/* Section 43 */}
              <section id="cheque-bounce-in-loan-and-emi-defaults" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 43
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  43. Cheque Bounce in Loan and EMI Defaults
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In retail personal loans, home loans, and auto loans, banks collect post-dated cheques or ECS/NACH mandates. When an EMI bounces, the lender often deposits a physical cheque and issues a Section 138 notice.
                </p>
                <p>
                  Borrowers facing financial distress can defend against these notices by demonstrating: (1) The bank already debited NACH bounce penalties, (2) The cheque was an undated security instrument given before disbursement, and (3) Genuine willingness to execute an RBI-compliant compromise settlement. Under RBI Fair Practices Codes, lenders must explore restructuring before rushing into criminal courts.
                </p>
                </div>
              </section>

              {/* Section 44 */}
              <section id="cheque-bounce-in-credit-card-and-debt-recovery-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 44
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  44. Cheque Bounce in Credit Card and Debt Recovery Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Credit card defaults do NOT involve cheques during card issuance. When an account goes into default, rogue recovery agents often trick cardholders into handing over a &quot;token cheque&quot; for ₹10,000, promising to hold it while settlement is approved. The agency then deposits the cheque, allows it to bounce, and slaps a Section 138 notice to fabricate criminal jurisdiction.
                </p>
                <p>
                  Never hand over cheques to recovery agents without a stamped settlement sanction letter. If a cheque was extracted under false pretenses, our advocates immediately file a formal police complaint for extortion and fraud while raising this defense before the Magistrate.
                </p>
                </div>
              </section>

              {/* Section 45 */}
              <section id="cheque-bounce-in-business-and-commercial-transactions" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 45
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  45. Cheque Bounce in Business and Commercial Transactions
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In B2B commercial dealings, cheques are exchanged against purchase orders, goods supply, and distributorships. When quality disputes, defective goods, or delayed shipments arise, the buyer routinely issues stop-payment instructions.
                </p>
                <p>
                  In commercial Section 138 trials, contemporaneous business correspondence (emails, inspection rejection memos, delivery challans, and GST e-way bills) plays the decisive role. If the defense establishes that the goods were defective and rejected, the consideration fails, destroying the presumption of a legally enforceable debt.
                </p>
                </div>
              </section>

              {/* Section 46 */}
              <section id="cheque-bounce-between-individuals" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 46
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  46. Cheque Bounce Between Individuals
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Cheque bounce cases between private individuals frequently involve alleged &quot;friendly cash loans&quot; without promissory notes or bank transfers. The Supreme Court in <em>Basalingappa (2019)</em> and <em>K. Subramani v. K. Damodara Naidu (2015)</em> held that in friendly cash loan disputes, <strong>the financial capacity of the complainant to advance such a sum is of paramount evidentiary importance</strong>.
                </p>
                <p>
                  If the complainant cannot produce bank withdrawal slips, Income Tax Returns declaring the loan, or audited accounts showing the advance, the court will draw an adverse inference and acquit the drawer.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 7: CORPORATE LIABILITY & PENAL CONSEQUENCES (47–53)          */}
              {/* =================================================================== */}

              {/* Section 47 */}
              <section id="cheque-bounce-involving-companies-and-directors" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 47
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  47. Cheque Bounce Involving Companies and Directors
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When a cheque is issued on behalf of a private limited company, public company, partnership firm, or LLP, vicarious criminal liability is strictly regulated by <strong>Section 141 of the Negotiable Instruments Act</strong>.
                </p>
                <p>
                  In the landmark constitutional ruling of <em>Aneeta Hada v. Godfather Travels &amp; Tours Pvt. Ltd. (2012)</em>, a three-judge bench of the Supreme Court held: <strong>Prosecution of the company as a principal accused is an indispensable condition precedent</strong>. If the complainant files a Section 138 complaint against the directors without formally arraying the company itself as an accused party, the complaint is fundamentally defective and liable to be quashed against all directors immediately.
                </p>
                </div>
              </section>

              {/* Section 48 */}
              <section id="liability-of-directors-in-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 48
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  48. Liability of Directors in Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Simply being listed as a Director on the Ministry of Corporate Affairs (MCA) portal does NOT make an individual criminally liable for a bounced corporate cheque. In <em>SMS Pharmaceuticals Ltd. v. Neeta Bhalla (2005)</em> and <em>Sunita Palita v. Panchami Stone Quarry (2022)</em>, the Supreme Court established the &quot;Specific Averments&quot; doctrine:
                </p>
                <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 text-xs space-y-2 text-black">
                  <h4 className="font-bold text-blue-950 text-sm">Rules for Discharging Independent &amp; Non-Executive Directors:</h4>
                  <ul className="list-disc pl-4 space-y-1 font-normal">
                    <li>The complaint must contain <strong>clear, specific, and unambiguous averments</strong> demonstrating exactly how the director was in charge of and responsible for the conduct of the business of the company at the time of the offense.</li>
                    <li>Vague, omnibus statements like <em>&quot;all accused are directors and responsible for company affairs&quot;</em> are legally insufficient.</li>
                    <li>Independent directors, non-executive directors, and directors who resigned prior to cheque issuance (proven via MCA Form DIR-11/DIR-12) are entitled to immediate quashing under Section 482 CrPC / Section 528 BNSS.</li>
                  </ul>
                </div>
                </div>
              </section>

              {/* Section 49 */}
              <section id="role-of-the-signatory-in-a-section-138-case" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 49
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  49. Role of the Signatory in a Section 138 Case
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The authorized signatory who physically affixes their signature to the cheque on behalf of a company or firm occupies a distinct legal position. Unlike non-signatory directors, the signatory is deemed by law to be directly involved in the transaction, and the complainant does not need to plead elaborate averments regarding their role.
                </p>
                <p>
                  However, an authorized employee signatory is NOT personally liable for the company&apos;s underlying debt if they were acting strictly under employee delegation without personal guarantee commitments. If the company is undergoing Corporate Insolvency Resolution Process (CIRP) under the IBC, specialized moratorium defenses apply.
                </p>
                </div>
              </section>

              {/* Section 50 */}
              <section id="can-a-company-be-prosecuted-for-cheque-bounce" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 50
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  50. Can a Company Be Prosecuted for Cheque Bounce?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Yes. Under Indian law, a company is a separate juristic entity and can be prosecuted as a corporate accused under Section 141 of the NI Act. While a company cannot be imprisoned, it can be sentenced to pay substantial monetary fines extending up to twice the cheque amount.
                </p>
                <p>
                  If the National Company Law Tribunal (NCLT) declares a moratorium under Section 14 of the Insolvency and Bankruptcy Code, 2016 (IBC), the Supreme Court in <em>P. Mohanraj v. Shah Brothers ISPAT Pvt. Ltd. (2021)</em> held that Section 138 proceedings against the corporate debtor are stayed, though individual directors remain personally liable to face trial.
                </p>
                </div>
              </section>

              {/* Section 51 */}
              <section id="can-a-cheque-bounce-case-lead-to-arrest" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 51
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  51. Can a Cheque Bounce Case Lead to Arrest?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  <strong>NO, not upon receipt of a legal notice or court summons.</strong> A cheque bounce under Section 138 is a <strong>bailable, compoundable, non-cognizable offense</strong>. The police have zero legal authority to arrest anyone directly upon cheque dishonour or without a specific judicial warrant issued by a Magistrate.
                </p>
                <p>
                  Arrest only becomes a risk if an accused repeatedly ignores formal court summons, fails to appear through counsel, and causes the Magistrate to issue a Bailable Warrant (BW) or Non-Bailable Warrant (NBW). Even if an NBW is issued, our criminal defense advocates file an urgent application under Section 70(2) CrPC / Section 72 BNSS to cancel or recall the warrant without the accused going to jail.
                </p>
                </div>
              </section>

              {/* Section 52 */}
              <section id="punishment-under-section-138" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 52
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  52. Punishment Under Section 138
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under Section 138 of the Negotiable Instruments Act, if an accused is convicted after full trial, the trial court possesses the statutory discretion to award:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-black font-normal">
                  <li><strong>Imprisonment:</strong> Simple or rigorous imprisonment for a term which may extend up to <strong>two years</strong>.</li>
                  <li><strong>Monetary Fine:</strong> A fine which may extend to <strong>twice the amount of the cheque</strong>.</li>
                  <li><strong>Both:</strong> The Magistrate may impose both imprisonment and a heavy monetary fine in aggravated commercial fraud cases.</li>
                </ul>
                <p>
                  In practice, the Supreme Court has consistently held that the primary objective of Section 138 is compensatory rather than punitive. Courts generally lean toward awarding monetary compensation rather than sending borrowers to prison, especially when genuine efforts to settle are demonstrated.
                </p>
                </div>
              </section>

              {/* Section 53 */}
              <section id="fine-and-compensation-in-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 53
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  53. Fine and Compensation in Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under Section 357(1)(b) of the CrPC / Section 395 BNSS, when a court imposes a sentence of fine, the court may direct that the whole or any part of the fine recovered be applied in the payment to the complainant of compensation for any loss or injury caused by the offense.
                </p>
                <p>
                  The Supreme Court in <em>R. Vijayan v. Baby (2012)</em> urged magistrates to ensure that the compensation awarded adequately covers the cheque amount alongside reasonable interest (typically 6% to 9% per annum from the date of dishonour). This compensatory orientation provides our legal team immense leverage to negotiate structured settlements during trial.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 8: COMPOUNDING, SETTLEMENT & COURT BAIL (54–62)              */}
              {/* =================================================================== */}

              {/* Section 54 */}
              <section id="compounding-of-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 54
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  54. Compounding of Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  One of the most powerful statutory provisions in the Negotiable Instruments Act is <strong>Section 147</strong>, which explicitly provides: <em>&quot;Notwithstanding anything contained in the Code of Criminal Procedure, 1973, every offence punishable under this Act shall be compoundable.&quot;</em>
                </p>
                <p>
                  Unlike traditional Indian Penal Code / BNS offenses where compounding requires permission of the court or is strictly barred, Section 138 offenses can be compounded <strong>at any stage of the proceedings</strong>—before trial, during trial, in appellate courts, and even before the Supreme Court after conviction. Compounding operates as an immediate acquittal of the accused, wiping out the criminal record entirely.
                </p>
                </div>
              </section>

              {/* Section 55 */}
              <section id="settlement-of-section-138-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 55
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  55. Settlement of Section 138 Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  To encourage early settlement and prevent clogging of judicial dockets, the Supreme Court laid down nationwide guidelines in the landmark case of <em>Damodar S. Prabhu v. Sayed Babalal H. (2010)</em> regarding graded costs for compounding:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-emerald-700 block">At Magistrate Level:</span>
                    <p className="font-normal text-black">Compounding executed at the trial court stage incurs <strong>ZERO graded court costs</strong>. Both parties can settle on mutually agreed terms freely.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-700 block">At Sessions Court Level:</span>
                    <p className="font-normal text-black">Compounding sought during criminal appeal before Sessions Court incurs a nominal cost of 10% of the cheque amount to Legal Aid.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-amber-700 block">At High Court / Supreme Court:</span>
                    <p className="font-normal text-black">Compounding at the High Court or Supreme Court revision stage attracts 15% to 20% cost, which courts may waive in hardship cases.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 56 */}
              <section id="cheque-bounce-case-settlement-before-trial" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 56
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  56. Cheque Bounce Case Settlement Before Trial
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Settling during the 15-day statutory notice period or immediately upon receiving summons represents the most cost-effective, stress-free route. At this pre-trial juncture, our advocates engage the bank or complainant in structured compromise negotiations.
                </p>
                <p>
                  Upon reaching an agreed One-Time Settlement (OTS) figure, a formal <strong>Compromise &amp; Withdrawal Deed</strong> is executed. If a complaint was already filed, the complainant tenders a statement withdrawing the complaint under Section 257 CrPC / Section 280 BNSS, resulting in an immediate order of acquittal before charges are framed.
                </p>
                </div>
              </section>

              {/* Section 57 */}
              <section id="cheque-bounce-case-settlement-during-trial" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 57
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  57. Cheque Bounce Case Settlement During Trial
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Even during contested trial hearings, cases can be referred to court-annexed mediation or the <strong>National Lok Adalat</strong>. Lok Adalats—organized quarterly by State Legal Services Authorities—offer specialized platforms for settling cheque bounce cases.
                </p>
                <p>
                  A Lok Adalat settlement award is deemed a formal decree of a civil court under Section 21 of the Legal Services Authorities Act, 1987. It is final, binding, and non-appealable, and any court fees deposited are refunded in full to the complainant.
                </p>
                </div>
              </section>

              {/* Section 58 */}
              <section id="cheque-bounce-case-settlement-after-conviction" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 58
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  58. Cheque Bounce Case Settlement After Conviction
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Even if a trial court convicts an accused and awards a prison sentence, <strong>settlement remains fully possible</strong>. The Supreme Court in <em>K.N. Govindan Kutty Menon v. C.D. Shaji (2012)</em> confirmed that parties can compound a Section 138 offense even after conviction.
                </p>
                <p>
                  The accused files a Criminal Appeal before the Sessions Court alongside an application for compounding under Section 147 NI Act. Once the complainant confirms receipt of the agreed settlement sum, the Sessions Court sets aside the conviction and sentences, granting full acquittal.
                </p>
                </div>
              </section>

              {/* Section 59 */}
              <section id="what-happens-if-the-accused-does-not-pay" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 59
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  59. What Happens If the Accused Does Not Pay?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  If an accused enters into a formal court settlement or Lok Adalat undertaking to pay in monthly tranches but subsequent installments default, the court possesses powers under Section 421 and Section 431 CrPC / Section 461 BNSS to issue a <strong>Distress Warrant</strong> for the attachment and sale of movable or immovable property.
                </p>
                <p>
                  Furthermore, willful breach of a solemn undertaking given to the court can attract contempt of court proceedings. Our advocates ensure that settlement terms contain realistic, staggered installment horizons with grace clauses to prevent accidental default.
                </p>
                </div>
              </section>

              {/* Section 60 */}
              <section id="bail-in-section-138-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 60
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  60. Bail in Section 138 Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Section 138 is statutorily classified as a <strong>bailable offense</strong>. This means that securing court bail upon appearance is an absolute legal right, not a judicial favor. Under Section 436 of the CrPC / Section 478 BNSS, the Magistrate is bound by law to release the accused on bail upon the furnishing of a personal bond and a surety.
                </p>
                <p>
                  CredSettle arranges seamless court representation where our local defense counsel appears alongside the accused on the first date of hearing, files the bail application alongside a local surety or cash bail deposit, and secures regular bail within minutes without the client spending a single second in custody.
                </p>
                </div>
              </section>

              {/* Section 61 */}
              <section id="summons-in-a-cheque-bounce-case" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 61
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  61. Summons in a Cheque Bounce Case
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  When a Magistrate takes cognizance of a complaint, formal court summons are issued under Section 204 CrPC / Section 227 BNSS. The summons specify the court room number, case title, and date of required appearance.
                </p>
                <p>
                  Under Section 144 of the NI Act, summons may be served by speed post, registered post, or approved courier services. If an accused resides outside the territorial jurisdiction of the court, the Magistrate must conduct an inquiry under Section 202 CrPC before issuing summons. If this mandatory inquiry was bypassed, the summons order can be challenged before the High Court.
                </p>
                </div>
              </section>

              {/* Section 62 */}
              <section id="warrants-and-non-appearance-in-section-138-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 62
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  62. Warrants and Non-Appearance in Section 138 Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  If an accused fails to appear on the summons date without filing an application for exemption through an advocate, the Magistrate may issue a Bailable Warrant (BW), followed by a Non-Bailable Warrant (NBW) if non-appearance persists.
                </p>
                <p>
                  If a warrant has been issued against you, do NOT panic. Our defense advocates file an urgent <strong>Application for Cancellation / Recall of Warrant under Section 70(2) CrPC / Section 72 BNSS</strong>, demonstrating bona fide grounds for prior absence (such as medical illness, non-receipt of summons, or outstation travel). Courts routinely cancel warrants upon undertaking regular future appearance.
                </p>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 9: QUASHING, APPEALS & APEX JURISPRUDENCE (63–69)            */}
              {/* =================================================================== */}

              {/* Section 63 */}
              <section id="can-a-cheque-bounce-case-be-dismissed" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 63
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  63. Can a Cheque Bounce Case Be Dismissed?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Yes, a Section 138 complaint can be dismissed at multiple judicial stages:
                </p>
                <div className="space-y-2.5 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">1. Dismissal for Non-Prosecution (Section 256 CrPC / Section 279 BNSS):</span>
                    <p className="font-normal text-black">If the complainant fails to appear on a trial date or repeatedly seeks adjournments without valid cause, the Magistrate has statutory power to dismiss the complaint and acquit the accused.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">2. Dismissal on Jurisdictional Objections (Section 201 CrPC):</span>
                    <p className="font-normal text-black">If the court lacks territorial jurisdiction under Section 142(2), the complaint must be returned or dismissed.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">3. Acquittal on Merits:</span>
                    <p className="font-normal text-black">Following cross-examination and defense evidence where the accused successfully rebuts the Section 139 presumption.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 64 */}
              <section id="quashing-of-section-138-proceedings" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 64
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  64. Quashing of Section 138 Proceedings (Section 482 CrPC / Sec 528 BNSS)
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under <strong>Section 482 of the CrPC / Section 528 of the BNSS</strong>, the High Court possesses inherent powers to prevent abuse of the process of any court and to secure the ends of justice. An accused can invoke this extraordinary jurisdiction to quash an unjust cheque bounce prosecution without enduring a protracted trial.
                </p>
                <p>
                  High Courts routinely exercise Section 482 powers to quash Section 138 proceedings in cases of: (1) Time-barred statutory notice or delayed complaint filing, (2) Non-arraying of the company as principal accused in corporate complaints (<em>Aneeta Hada</em> violation), (3) Independent / non-executive directors arrayed without specific role averments (<em>Sunita Palita</em>), (4) Cheques presented for time-barred debts, and (5) Compromise settlements executed during pendency.
                </p>
                </div>
              </section>

              {/* Section 65 */}
              <section id="appeal-against-conviction-in-a-cheque-bounce-case" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 65
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  65. Appeal Against Conviction in a Cheque Bounce Case
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  If the trial Magistrate passes an adverse judgment of conviction, the accused has an absolute statutory right to file a <strong>Criminal Appeal under Section 374(3) CrPC / Section 415 BNSS</strong> before the Court of Sessions within <strong>30 days</strong> of the judgment.
                </p>
                <p>
                  Upon filing the appeal, our defense advocates simultaneously move applications under Section 389(1) CrPC for <strong>Suspension of Sentence and Grant of Bail</strong> pending appeal. The Sessions Court stays the execution of the prison sentence, ensuring the appellant remains at liberty while the appellate court re-examines the evidence.
                </p>
                </div>
              </section>

              {/* Section 66 */}
              <section id="interim-compensation-under-section-143a" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 66
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  66. Interim Compensation Under Section 143A
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Inserted by the 2018 Amendment, <strong>Section 143A of the NI Act</strong> empowers the trial court to order the drawer to pay interim compensation to the complainant not exceeding <strong>20% of the amount of the cheque</strong> upon framing of notice under Section 251.
                </p>
                <p>
                  Crucially, the Supreme Court in the landmark ruling of <em>Rakesh Ranjan Shrivastava v. State of Jharkhand (2024)</em> clarified that <strong>Section 143A is purely DIRECTORY, not mandatory</strong>. The Magistrate cannot mechanically order 20% interim deposit. The court must evaluate: (1) Prima facie strength of the defense, (2) Financial capacity of the accused, and (3) Genuine hardship. Our defense team aggressively opposes Section 143A applications, shielding clients from coercive pre-trial deposits.
                </p>
                </div>
              </section>

              {/* Section 67 */}
              <section id="compensation-and-deposit-during-appeal-under-section-148" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 67
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  67. Compensation and Deposit During Appeal Under Section 148
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Under <strong>Section 148 of the NI Act</strong>, the appellate court (Sessions Court) may direct the appellant to deposit a minimum of 20% of the fine or compensation awarded by the trial court as a condition for suspending the sentence.
                </p>
                <p>
                  The Supreme Court in <em>Jamboo Bhandari v. M.P. State Industrial Development Corporation Ltd. (2023)</em> ruled that Section 148 is NOT an automatic rule. If the appellant demonstrates exceptional circumstances, patent illegality in the trial court judgment, or severe financial insolvency, the appellate court can grant a stay on sentence without directing a 20% deposit.
                </p>
                </div>
              </section>

              {/* Section 68 */}
              <section id="recent-supreme-court-and-high-court-judgments-on-section-138" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 68
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  68. Recent Supreme Court and High Court Judgments on Section 138
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Modern cheque bounce litigation has witnessed decisive judicial interventions strengthening drawer rights:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs text-black font-normal">
                  <li><strong>Rakesh Ranjan Shrivastava (SC 2024):</strong> Discretionary nature of Section 143A interim compensation established; trial courts cannot penalize drawers automatically.</li>
                  <li><strong>Dashrathbhai Patel (SC 2022):</strong> Failure to endorse part-payment on cheque under Section 56 renders subsequent Section 138 complaint illegal.</li>
                  <li><strong>Sunita Palita (SC 2022):</strong> Quashing of complaints against non-executive directors where specific overt acts are not pleaded.</li>
                  <li><strong>Re: Expeditious Trial of Cases under Sec 138 (SC Constitution Bench):</strong> Mandatory inquiry under Section 202 CrPC before issuing summons to out-of-station accused.</li>
                </ul>
                </div>
              </section>

              {/* Section 69 */}
              <section id="important-case-laws-on-cheque-bounce-defence" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 69
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  69. Important Case Laws on Cheque Bounce Defence
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Mastering the foundational precedents is vital for any successful defense strategy:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Basalingappa v. Mudibasappa (2019)</span>
                    <p className="font-normal text-black">Accused can rebut presumption via preponderance of probabilities by cross-examining complainant on financial capacity and lack of ITR disclosures.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Indus Airways v. Magnum Aviation (2014)</span>
                    <p className="font-normal text-black">Cheque issued as advance payment for purchase of goods that were never supplied does not represent a legally enforceable debt.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Aneeta Hada v. Godfather Travels (2012)</span>
                    <p className="font-normal text-black">In corporate cheque dishonours, arraying the company as principal accused is an absolute statutory prerequisite.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Damodar S. Prabhu (2010)</span>
                    <p className="font-normal text-black">Nationwide framework for compounding Section 138 cases with zero penalty at trial stage to promote early compromise.</p>
                  </div>
                </div>
                </div>
              </section>


              {/* =================================================================== */}
              {/* MODULE 10: DEFENSE PLAYBOOK, FAQS & CONCLUSION (70–78)               */}
              {/* =================================================================== */}

              {/* Section 70 */}
              <section id="common-mistakes-to-avoid-in-a-cheque-bounce-case" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 70
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  70. Common Mistakes to Avoid in a Cheque Bounce Case
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  In Section 138 litigation, tactical errors committed in the initial weeks can permanently compromise your defense. Avoid these dangerous mistakes:
                </p>
                <div className="space-y-2 text-xs text-black">
                  <div className="p-3 bg-red-50/70 border border-red-200 rounded-xl space-y-1">
                    <span className="font-bold text-red-950 block">1. Ignoring the 15-Day Legal Notice:</span>
                    <p className="font-normal text-black">Failing to send a formal legal reply allows the court to draw an adverse presumption that you had no defense to offer.</p>
                  </div>
                  <div className="p-3 bg-red-50/70 border border-red-200 rounded-xl space-y-1">
                    <span className="font-bold text-red-950 block">2. Evading Court Summons:</span>
                    <p className="font-normal text-black">Refusing delivery or failing to appear results in the Magistrate issuing Non-Bailable Warrants (NBWs) and initiating proclamation under Section 82 CrPC.</p>
                  </div>
                  <div className="p-3 bg-red-50/70 border border-red-200 rounded-xl space-y-1">
                    <span className="font-bold text-red-950 block">3. Admitting Signatures Carelessly:</span>
                    <p className="font-normal text-black">Admitting signature on a cheque without simultaneously asserting that it was a blank security instrument given for a specific purpose.</p>
                  </div>
                  <div className="p-3 bg-red-50/70 border border-red-200 rounded-xl space-y-1">
                    <span className="font-bold text-red-950 block">4. Making Unrecorded Cash Payments:</span>
                    <p className="font-normal text-black">Paying money to recovery agents or complainants without a written compromise receipt and return of original cheques.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 71 */}
              <section id="what-to-do-after-receiving-a-section-138-notice" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 71
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  71. What to Do After Receiving a Section 138 Notice
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  The moment a statutory demand notice lands in your hands, execute this rigorous protocol:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 text-xs text-black font-normal">
                  <li><strong>Preserve the Postal Envelope:</strong> The postman&apos;s stamp and speed post consignment number prove the exact date of delivery, calculating your 15-day window.</li>
                  <li><strong>Consolidate Payment Proofs:</strong> Retrieve your bank account statements, loan sanction letters, and digital transaction receipts proving prior payments.</li>
                  <li><strong>Engage Specialized Criminal Defense Counsel:</strong> Retain an advocate who specializes in Negotiable Instruments Act litigation rather than a general practitioner.</li>
                  <li><strong>Dispatch a Detailed Legal Reply:</strong> Draft and dispatch a comprehensive point-by-point reply via Registered Post AD and Speed Post within the 15-day period.</li>
                </ol>
                </div>
              </section>

              {/* Section 72 */}
              <section id="what-not-to-do-after-receiving-a-cheque-bounce-notice" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 72
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  72. What Not to Do After Receiving a Cheque Bounce Notice
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <ul className="list-disc pl-5 space-y-2 text-xs text-black font-normal">
                  <li><strong>Do NOT Panic or Hide:</strong> A cheque bounce is a compoundable, bailable proceeding. Panicking leads to missed deadlines and ex-parte orders.</li>
                  <li><strong>Do NOT Sign Fresh Documents:</strong> Never sign fresh promissory notes, balance confirmation slips, or acknowledgments of debt presented by recovery agents.</li>
                  <li><strong>Do NOT Make Informal Oral Promises:</strong> Avoid making verbal settlement commitments on telephone calls that recovery agencies can record and produce as admissions.</li>
                  <li><strong>Do NOT Attempt to Bribe Court Staff or Agents:</strong> Genuine legal defense resting on Supreme Court precedents is your only legitimate safeguard.</li>
                </ul>
                </div>
              </section>

              {/* Section 73 */}
              <section id="how-a-lawyer-can-defend-a-section-138-case" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 73
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  73. How a Lawyer Can Defend a Section 138 Case
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  An experienced banking litigation advocate provides multi-layered legal defense:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Procedural Immunity Audit</span>
                    <p className="font-normal text-black">Auditing notice dispatch dates, return memos, and complaint verification to file immediate discharge petitions.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Surgical Cross-Examination</span>
                    <p className="font-normal text-black">Interrogating the complainant on missing ITR records, unverified ledger claims, and contradictions regarding the origin of the alleged debt.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Smooth Bail Procurement</span>
                    <p className="font-normal text-black">Arranging surety bonds and securing personal bail on the very first appearance before the Magistrate.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Compromise &amp; Compounding</span>
                    <p className="font-normal text-black">Negotiating maximum debt haircuts and executing formal withdrawal deeds through National Lok Adalats.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 74 */}
              <section id="documents-to-give-your-lawyer-for-defence" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 74
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  74. Documents to Give Your Lawyer for Defence
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Provide your legal defense team with the following materials to construct an ironclad defense:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-black font-normal">
                  <li>Original Legal Notice and the postal envelope showing tracking barcode and delivery dates.</li>
                  <li>Copy of the court summons and attached complaint copy (if summons served).</li>
                  <li>Bank account statements for the 12 months preceding and following the cheque date.</li>
                  <li>Loan sanction letters, original agreements, and schedule of disbursements/EMIs.</li>
                  <li>Receipts, UPI screenshots, or RTGS/NEFT transaction confirmations showing prior payments.</li>
                  <li>All contemporaneous correspondence (emails, WhatsApp chats, letters) concerning the transaction.</li>
                  <li>Police complaint or stop-payment letters (if instrument was stolen, lost, or signed under duress).</li>
                </ul>
                </div>
              </section>

              {/* Section 75 */}
              <section id="step-by-step-strategy-for-defending-a-cheque-bounce-case" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 75
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  75. Step-by-Step Strategy for Defending a Cheque Bounce Case
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  CredSettle executes a structured 5-phase defense playbook to safeguard clients from conviction and debt traps:
                </p>
                <div className="space-y-2.5 text-xs text-black">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Phase 1: Immediate Statutory Notice Response (Days 1–15)</span>
                    <p className="font-normal text-black">Serve an authoritative legal reply detailing the security nature of the cheque, challenging consideration, and disputing liability.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Phase 2: Appearance &amp; Bail Securing (Hearing 1)</span>
                    <p className="font-normal text-black">Counsel appears, files memo of appearance alongside personal bail bond, and secures bail with complete peace of mind.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Phase 3: Notice Framing &amp; Section 145(2) Application (Hearing 2–3)</span>
                    <p className="font-normal text-black">Record formal plea of Not Guilty under Section 251 CrPC; file application under Section 145(2) to recall complainant for cross-examination.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Phase 4: Targeted Cross-Examination &amp; Rebuttal (Hearing 4–6)</span>
                    <p className="font-normal text-black">Expose ledger discrepancies, lack of source of income, failure to endorse payments, and establish defense via preponderance of probabilities.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">Phase 5: Resolution via Section 147 Compounding or Full Acquittal</span>
                    <p className="font-normal text-black">Leverage exposed weaknesses to execute a discounted OTS in Lok Adalat, or obtain an acquittal judgment dismissing all charges.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 76 */}
              <section id="frequently-asked-questions-about-section-138-cheque-bounce-cases" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 76
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  76. Frequently Asked Questions About Section 138 Cheque Bounce Cases
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <div className="space-y-3 text-xs text-black">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl space-y-1">
                    <h4 className="font-bold text-black text-sm">Can I go to jail immediately after a cheque bounces?</h4>
                    <p className="text-black font-normal">No. A cheque bounce is a bailable offense. Arrest cannot take place upon dishonour or notice receipt. Only prolonged refusal to attend court following formal summons can lead to warrants.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl space-y-1">
                    <h4 className="font-bold text-black text-sm">Can a cheque bounce case be settled out of court?</h4>
                    <p className="text-black font-normal">Yes. Under Section 147 of the NI Act, cheque bounce cases are compoundable at any stage. You can settle through bilateral compromise or in the National Lok Adalat, leading to an immediate acquittal.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl space-y-1">
                    <h4 className="font-bold text-black text-sm">What happens if a bank deposits an undated security cheque given years ago?</h4>
                    <p className="text-black font-normal">Depositing an undated security cheque without reconciling accounts or giving prior default notice can be successfully defended under Supreme Court precedents including <em>Indus Airways</em> and <em>Dashrathbhai Patel</em>.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-xl space-y-1">
                    <h4 className="font-bold text-black text-sm">Is Section 143A interim compensation mandatory?</h4>
                    <p className="text-black font-normal">No. The Supreme Court in <em>Rakesh Ranjan Shrivastava (2024)</em> confirmed that Section 143A is directory. Courts cannot order 20% interim deposit mechanically without evaluating your defense and financial capacity.</p>
                  </div>
                </div>
                </div>
              </section>

              {/* Section 77 */}
              <section id="professional-legal-assistance-for-cheque-bounce-defence" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 77
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  77. Professional Legal Assistance for Cheque Bounce Defence
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  Facing a criminal complaint under Section 138 requires precision legal craftsmanship. At CredSettle, our nationwide panel of senior criminal defense advocates, former banking counsel, and debt resolution specialists has successfully defended and compounded thousands of cheque bounce disputes across District Courts and High Courts nationwide.
                </p>
                <p>
                  We take over all communication with the complainant, draft aggressive legal replies, secure immediate court bail, cross-examine lenders on unlawful accounting practices, and negotiate substantial settlement waivers—shielding your personal liberty, reputation, and commercial future.
                </p>
                </div>
              </section>

              {/* Section 78 */}
              <section id="conclusion-understanding-your-rights-and-defence-options-under-section-138" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 78
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  78. Conclusion – Understanding Your Rights and Defence Options Under Section 138
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                  A cheque bounce notice or court summons under Section 138 is not the end of the road; it is a specialized legal proceeding with rigorous checks and balances. The law in India demands strict proof of a legally enforceable debt, adherence to inflexible limitation timelines, and constitutional fairness.
                </p>
                <p>
                  Whether your case stems from an unfulfilled commercial contract, a predatory cash loan claim, a misused security cheque, or an overwhelming bank EMI default, you possess robust statutory defenses. Do not succumb to recovery harassment or coercive threats. Assert your legal rights, act decisively within statutory deadlines, and let experienced criminal defense advocates defend your case.
                </p>
                <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-xl text-white text-center space-y-2 mt-4 shadow-md">
                  <h4 className="text-base font-bold text-white">Receive Immediate Section 138 Legal Defense</h4>
                  <p className="text-xs text-blue-200 max-w-xl mx-auto">
                    Speak directly with a senior Section 138 criminal defense advocate. We draft notices, secure instant bail, dismantle fraudulent claims, and negotiate Lok Adalat compounding.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs py-2.5 px-6 rounded-lg transition-all shadow"
                    >
                      Book Free Case Evaluation
                    </Link>
                  </div>
                </div>
                </div>
              </section>


              {/* Conclusion Callout Box Matching loan-settlement */}
              <div className="border-t border-gray-200 pt-6 sm:pt-8 space-y-4">
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-xl font-bold">Defend Your Section 138 Cheque Bounce Case Today</h3>
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                    Received a 15-day statutory demand notice or judicial court summons? Connect with CredSettle’s experienced criminal defense litigators for immediate notice replies, bail protection, and Section 147 compounding.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto inline-block text-center bg-white text-blue-950 font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-xs sm:text-sm active:scale-98"
                    >
                      Book a Free Section 138 Case Evaluation
                    </Link>
                  </div>
                </div>
              </div>

            </article>
          </div>

          {/* ===================================================================== */}
          {/* RIGHT COLUMN: STICKY CONVERSION & COURT DEFENSE CARD (15% Width)      */}
          {/* ===================================================================== */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-20 space-y-4">
            <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-blue-200 text-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center text-sm mb-2">
                ⚖️
              </span>
              <h4 className="font-bold text-xs text-black mb-1">Notice / Summons?</h4>
              <p className="text-[10px] text-black mb-3 leading-tight">
                Immediate legal reply within 15 days prevents non-bailable warrants and arrest risks.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-blue-600 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-[11px]"
              >
                Request Legal Defense
              </Link>
              <div className="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-black space-y-1 text-left">
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% Confidential</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> Supreme Court Citations</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> Senior Criminal Advocates</p>
              </div>
            </div>

            {/* Diagnostic Calculator Quick Jump */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-black">
              <span className="font-bold text-black block text-[11px]">Section 138 Calculator</span>
              <p className="text-[10px] text-black leading-tight">Estimate fine exposure, Section 143A deposit, and tailored defense.</p>
              <a href="#section-138-defense-calculator" className="text-[10px] text-blue-600 font-semibold block pt-1 hover:underline">Calculate Exposure ↓</a>
            </div>

            {/* Official Portals */}
            <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200 text-blue-950 text-xs space-y-1.5">
              <strong className="block text-[11px] font-bold text-blue-900">Official Judicial Portals</strong>
              <a
                href="https://services.ecourts.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] text-blue-700 hover:underline"
              >
                🔗 eCourts Case Status Portal
              </a>
              <a
                href="https://nalsa.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] text-blue-700 hover:underline"
              >
                🔗 NALSA Lok Adalat Settlement
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
          <span className="bg-blue-800 text-[10px] px-1.5 py-0.5 rounded-full">78</span>
        </button>

        <a
          href="#section-138-defense-calculator"
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
