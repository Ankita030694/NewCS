'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import AuthorBioBox from '@/components/AuthorBioBox';
import {
  Calculator,
  ShieldCheck,
  Scale,
  FileText,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Phone,
  ArrowRight,
  Search,
  Menu,
  X,
  CreditCard,
  Building2,
  Gavel,
  Landmark,
  BadgePercent,
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function NBFCLoanSettlementPageClient() {
  const [activeId, setActiveId] = useState<string>('intro-nbfc-loan-settlement');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  const [showFloatingNav, setShowFloatingNav] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [tocSearch, setTocSearch] = useState<string>('');
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Interactive NBFC Loan Settlement Calculator State
  const [calcPrincipal, setCalcPrincipal] = useState<number>(600000);
  const [calcPenalCharges, setCalcPenalCharges] = useState<number>(240000);
  const [calcDpdMonths, setCalcDpdMonths] = useState<number>(9);
  const [calcHardshipReason, setCalcHardshipReason] = useState<string>('job_loss');
  const [calcLenderType, setCalcLenderType] = useState<string>('retail_nbfc');

  // Interactive OTS Calculation Logic
  const otsAnalysis = useMemo(() => {
    const totalClaim = calcPrincipal + calcPenalCharges;
    const penalWaiver = calcPenalCharges; // 100% penal fee waiver under RBI Fair Practice norms

    let principalHaircutPct = 45; // baseline 45% principal haircut
    if (calcDpdMonths >= 12) principalHaircutPct += 10;
    if (calcDpdMonths >= 24) principalHaircutPct += 5;

    if (calcHardshipReason === 'job_loss') principalHaircutPct += 5;
    if (calcHardshipReason === 'medical_crisis') principalHaircutPct += 8;
    if (calcHardshipReason === 'business_loss') principalHaircutPct += 5;

    if (calcLenderType === 'fintech_app') principalHaircutPct += 5;
    if (calcLenderType === 'housing_hfc') principalHaircutPct = Math.min(principalHaircutPct, 25); // secured limit

    // Cap principal haircut at 65% for unsecured, 25% for secured
    const cappedPrincipalHaircutPct = calcLenderType === 'housing_hfc' 
      ? Math.min(principalHaircutPct, 25) 
      : Math.min(principalHaircutPct, 65);

    const principalWaived = Math.round(calcPrincipal * (cappedPrincipalHaircutPct / 100));
    const targetSettlementPayable = Math.round(calcPrincipal - principalWaived);
    const totalSavings = totalClaim - targetSettlementPayable;
    const effectiveTotalDiscountPct = Math.round((totalSavings / totalClaim) * 100);

    let strategyText = 'Bilateral compromise settlement anchored to pure principal under RBI June 8, 2023 Prudential Norms.';
    if (calcLenderType === 'fintech_app') {
      strategyText = 'Identify underlying RBI-registered NBFC, enforce Digital Lending Guidelines against contact harassment, and offer clean 40% lump sum.';
    } else if (calcLenderType === 'enterprise_nbfc') {
      strategyText = 'MSME distress packaging with balance sheet segregation, ensuring total discharge of director personal guarantees.';
    } else if (calcLenderType === 'housing_hfc') {
      strategyText = 'Pre-SARFAESI compromise; prioritize waiving 100% penal interest and securing 30-day title deed release under RBI Sept 2023 norms.';
    }

    return {
      totalClaim,
      penalWaiver,
      cappedPrincipalHaircutPct,
      principalWaived,
      targetSettlementPayable,
      totalSavings,
      effectiveTotalDiscountPct,
      strategyText
    };
  }, [calcPrincipal, calcPenalCharges, calcDpdMonths, calcHardshipReason, calcLenderType]);

  // Master 10-Module Navigation Structure (79 Sections)
  const navModules = useMemo(() => [
    {
      moduleTitle: "Module 1: Foundations & Core Concepts",
      links: [
        { id: "intro-nbfc-loan-settlement", label: "1. Introduction to NBFC Loan Settlement" },
        { id: "what-is-nbfc-loan-settlement", label: "2. What Is NBFC Loan Settlement?" },
        { id: "easy-meaning-nbfc-loan-settlement", label: "3. Easy Meaning of NBFC Settlement" },
        { id: "how-does-nbfc-loan-settlement-work", label: "4. How Does NBFC Settlement Work?" },
        { id: "how-to-settle-an-nbfc-loan", label: "5. How to Settle an NBFC Loan?" },
        { id: "nbfc-loan-settlement-process-step-by-step", label: "6. Settlement Process – Step by Step" },
        { id: "when-should-you-consider-nbfc-loan-settlement", label: "7. When Should You Consider Settlement?" },
        { id: "who-is-eligible-for-nbfc-loan-settlement", label: "8. Who Is Eligible for NBFC Settlement?" },
      ]
    },
    {
      moduleTitle: "Module 2: Loan Types & Institutional Categories",
      links: [
        { id: "which-nbfc-loans-can-be-settled", label: "9. Which NBFC Loans Can Be Settled?" },
        { id: "personal-loan-settlement-with-nbfcs", label: "10. Personal Loan Settlement" },
        { id: "business-loan-settlement-with-nbfcs", label: "11. Business Loan Settlement" },
        { id: "credit-card-unsecured-debt-settlement-nbfcs", label: "12. Credit Card & Unsecured Debt" },
        { id: "vehicle-loan-settlement-with-nbfcs", label: "13. Vehicle Loan Settlement" },
        { id: "secured-vs-unsecured-nbfc-loan-settlement", label: "14. Secured vs Unsecured NBFC Settlement" },
      ]
    },
    {
      moduleTitle: "Module 3: Valuation, Haircuts & Alternative Relief Models",
      links: [
        { id: "how-much-can-nbfc-loan-be-settled-for", label: "15. How Much Can an NBFC Loan Settle For?" },
        { id: "nbfc-loan-settlement-amount-calculation-examples", label: "16. Settlement Calculation & Examples" },
        { id: "factors-that-affect-nbfc-loan-settlement-amount", label: "17. Factors Affecting Settlement Amount" },
        { id: "nbfc-loan-settlement-vs-full-repayment", label: "18. Settlement vs Full Repayment" },
        { id: "nbfc-loan-settlement-vs-loan-restructuring", label: "19. Settlement vs Restructuring" },
        { id: "nbfc-loan-settlement-vs-loan-waiver", label: "20. Settlement vs Loan Waiver" },
        { id: "nbfc-loan-settlement-vs-loan-foreclosure", label: "21. Settlement vs Loan Foreclosure" },
        { id: "advantages-of-nbfc-loan-settlement", label: "22. Advantages of NBFC Settlement" },
        { id: "disadvantages-and-risks-of-nbfc-loan-settlement", label: "23. Disadvantages & Risks" },
      ]
    },
    {
      moduleTitle: "Module 4: CIBIL Score, Credit Bureau Tracking & Repair",
      links: [
        { id: "impact-of-nbfc-loan-settlement-on-cibil-score", label: "24. Impact of Settlement on CIBIL" },
        { id: "nbfc-loan-settlement-and-credit-bureau-reporting", label: "25. Credit Bureau Reporting Mechanics" },
        { id: "how-long-does-nbfc-loan-settlement-affect-cibil", label: "26. How Long Does Settlement Affect CIBIL?" },
        { id: "how-to-rebuild-cibil-after-nbfc-loan-settlement", label: "27. How to Rebuild CIBIL Score" },
      ]
    },
    {
      moduleTitle: "Module 5: RBI Guidelines, Defaults & Recovery Defense",
      links: [
        { id: "rbi-guidelines-for-nbfc-loan-settlement", label: "28. RBI Guidelines for NBFC Settlement" },
        { id: "rbi-rules-for-nbfc-recovery-agents", label: "29. RBI Rules for Recovery Agents" },
        { id: "rbi-guidelines-for-fair-recovery-practices", label: "30. Fair Recovery Practices Code" },
        { id: "nbfc-loan-default-what-happens-if-you-stop-paying", label: "31. Default – What Happens If You Stop?" },
        { id: "legal-consequences-of-nbfc-loan-default", label: "32. Legal Consequences of Default" },
        { id: "can-an-nbfc-take-legal-action-for-loan-default", label: "33. Can an NBFC Take Legal Action?" },
        { id: "nbfc-loan-settlement-after-receiving-legal-notice", label: "34. Settlement After Legal Notice" },
        { id: "nbfc-loan-settlement-during-arbitration-legal-proceedings", label: "35. Settlement During Arbitration / Court" },
        { id: "nbfc-loan-settlement-and-recovery-agent-harassment", label: "36. Settlement & Agent Harassment" },
        { id: "borrowers-rights-against-nbfc-recovery-agent-harassment", label: "37. Borrower Rights Against Harassment" },
      ]
    },
    {
      moduleTitle: "Module 6: Negotiation Tactics, Proposal & Hardship Proof",
      links: [
        { id: "how-to-negotiate-nbfc-loan-settlement", label: "38. How to Negotiate Settlement" },
        { id: "how-to-make-settlement-proposal-to-nbfc", label: "39. Making a Settlement Proposal" },
        { id: "documents-required-for-nbfc-loan-settlement", label: "40. Documents Required for Settlement" },
        { id: "financial-hardship-and-nbfc-loan-settlement", label: "41. Financial Hardship & Settlement" },
        { id: "nbfc-loan-settlement-after-job-loss", label: "42. Settlement After Job Loss" },
        { id: "nbfc-loan-settlement-after-business-income-loss", label: "43. Settlement After Business / Income Loss" },
        { id: "nbfc-loan-settlement-due-to-financial-emergency", label: "44. Settlement Due to Medical Emergency" },
        { id: "nbfc-one-time-settlement-ots", label: "45. NBFC One-Time Settlement (OTS)" },
        { id: "how-to-convince-an-nbfc-for-one-time-settlement", label: "46. How to Convince NBFC for OTS" },
      ]
    },
    {
      moduleTitle: "Module 7: Multi-Lender, Borrower Profiles & Digital Apps",
      links: [
        { id: "nbfc-loan-settlement-with-multiple-lenders", label: "47. Settlement With Multiple Lenders" },
        { id: "settlement-of-multiple-nbfc-loans", label: "48. Settlement of Multiple NBFC Loans" },
        { id: "nbfc-loan-settlement-for-salaried-borrowers", label: "49. Settlement for Salaried Borrowers" },
        { id: "nbfc-loan-settlement-for-self-employed-borrowers", label: "50. Settlement for Self-Employed" },
        { id: "nbfc-loan-settlement-for-business-owners", label: "51. Settlement for Business Owners" },
        { id: "nbfc-loan-settlement-with-banks-vs-nbfcs", label: "52. Settlement: Banks vs NBFCs" },
        { id: "nbfc-loan-settlement-with-digital-and-fintech-lenders", label: "53. Settlement With Digital & Fintech Apps" },
      ]
    },
    {
      moduleTitle: "Module 8: Company Selection, Execution, NDC & Bureau Verification",
      links: [
        { id: "how-to-choose-an-nbfc-loan-settlement-company", label: "54. Choosing a Settlement Company" },
        { id: "nbfc-loan-settlement-company-vs-direct-negotiation", label: "55. Company vs Direct Negotiation" },
        { id: "nbfc-loan-settlement-fees-and-charges", label: "56. Settlement Fees and Charges" },
        { id: "what-happens-after-nbfc-loan-settlement", label: "57. What Happens After Settlement?" },
        { id: "nbfc-settlement-letter-and-no-dues-certificate", label: "58. Settlement Letter & NDC" },
        { id: "how-to-check-nbfc-loan-settlement-status-on-your-credit-report", label: "59. Checking Settlement on Credit Report" },
        { id: "how-to-correct-incorrect-credit-bureau-reporting", label: "60. Correcting Bureau Reporting Errors" },
      ]
    },
    {
      moduleTitle: "Module 9: Guarantees, Security, Section 138 & Legal Risks",
      links: [
        { id: "nbfc-loan-settlement-and-personal-guarantees", label: "61. Personal Guarantees & Settlement" },
        { id: "nbfc-loan-settlement-and-co-borrowers", label: "62. Co-Borrowers & Joint Liability" },
        { id: "nbfc-loan-settlement-and-collateral-security", label: "63. Collateral & Security Release" },
        { id: "nbfc-loan-settlement-and-vehicle-repossession", label: "64. Vehicle Repossession & Settlement" },
        { id: "nbfc-loan-settlement-and-cheque-bounce-cases", label: "65. Cheque Bounce Cases & Settlement" },
        { id: "nbfc-loan-settlement-and-section-138-of-the-ni-act", label: "66. Section 138 NI Act Defense" },
        { id: "tax-and-financial-implications-of-nbfc-loan-settlement", label: "67. Tax & Financial Implications" },
      ]
    },
    {
      moduleTitle: "Module 10: Traps, FAQs, Master SOP & Conclusion",
      links: [
        { id: "common-mistakes-to-avoid-during-nbfc-loan-settlement", label: "68. Common Mistakes to Avoid" },
        { id: "nbfc-loan-settlement-scams-and-fraud", label: "69. Settlement Scams & Fraud" },
        { id: "can-you-get-another-loan-after-nbfc-loan-settlement", label: "70. Getting Another Loan After Settlement" },
        { id: "can-you-get-a-loan-from-an-nbfc-after-settlement", label: "71. Loans From NBFCs After Settlement" },
        { id: "how-to-rebuild-your-financial-profile-after-settlement", label: "72. Rebuilding Your Financial Profile" },
        { id: "common-nbfc-loan-settlement-scenarios-and-solutions", label: "73. Common Scenarios & Solutions" },
        { id: "dos-and-donts-during-nbfc-loan-settlement", label: "74. Do's and Don'ts of Settlement" },
        { id: "frequently-asked-questions-about-nbfc-loan-settlement", label: "75. Frequently Asked Questions" },
        { id: "professional-nbfc-loan-settlement-assistance", label: "76. Professional Settlement Assistance" },
        { id: "why-choose-professional-nbfc-loan-settlement-services", label: "77. Why Choose CredSettle?" },
        { id: "nbfc-loan-settlement-complete-step-by-step-guide", label: "78. Complete Step-by-Step SOP" },
        { id: "conclusion-understanding-nbfc-loan-settlement", label: "79. Conclusion: Understanding Settlement" },
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

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'NBFC Loan Settlement', url: '/services/nbfc-loan-settlement' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <Navbar />

      {/* Hero Section */}
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
            RBI Prudential Framework &amp; NBFC Compromise Norms 2026
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words">
            NBFC Loan Settlement in India<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">
              The Definitive Legal, OTS &amp; Recovery Defense Guide
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            Resolve unmanageable NBFC personal loans, business lines, consumer durables, and fintech app debt under RBI guidelines. Stop recovery agent harassment, defend legal notices, and secure 40% to 70% OTS waivers with verified senior advocates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-slate-300">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Bar Council Advocate Representation
            </span>
            <span className="flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-emerald-400" /> RBI June 8, 2023 OTS Framework
            </span>
            <span className="flex items-center gap-1">
              <BadgePercent className="w-3.5 h-3.5 text-yellow-400" /> 100% Penal Fee Waiver Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-2.5 px-3 sm:px-6">
        <div className="max-w-[1600px] xl:max-w-[1720px] 2xl:max-w-[1800px] mx-auto">
          <Breadcrumbs items={breadcrumbItems} align="left" />
        </div>
      </div>

      {/* Sticky Mobile Bar */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-3 py-2.5 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => setIsMobileTocOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 font-bold rounded-lg text-xs"
          >
            <Menu className="w-3.5 h-3.5" />
            <span>Table of Contents (79)</span>
          </button>
          <div className="text-[11px] text-slate-600 truncate flex-1 text-right font-medium">
            {currentChapter.label}
          </div>
        </div>
        {/* Module horizontal swipeable pills */}
        <div className="flex gap-1.5 overflow-x-auto mt-2 pb-1 scrollbar-none text-[10px]">
          {navModules.map((m, idx) => (
            <button
              key={idx}
              onClick={() => {
                const firstId = m.links[0]?.id;
                if (firstId) handleLinkClick(firstId);
              }}
              className="flex-shrink-0 px-2 py-1 rounded bg-slate-100 hover:bg-blue-100 text-slate-700 font-medium"
            >
              M{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Slide-Over Drawer */}
      {isMobileTocOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileTocOpen(false)}
          />
          <div
            ref={mobileNavRef}
            className="relative ml-auto w-[85%] max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300"
          >
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <div className="font-bold text-sm">Table of Contents</div>
                <div className="text-[11px] text-slate-300">79 Sections in 10 Modules</div>
              </div>
              <button
                onClick={() => setIsMobileTocOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 border-b border-slate-200">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search 79 sections..."
                  value={tocSearch}
                  onChange={(e) => setTocSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-4">
              {filteredLinks.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-500">No matching sections found</div>
              ) : (
                navModules.map((m, mIdx) => {
                  const moduleLinks = m.links.filter(l =>
                    filteredLinks.some(fl => fl.id === l.id)
                  );
                  if (moduleLinks.length === 0) return null;
                  return (
                    <div key={mIdx} className="space-y-1">
                      <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wider px-2 py-1 bg-blue-50/50 rounded">
                        {m.moduleTitle}
                      </div>
                      <div className="space-y-0.5">
                        {moduleLinks.map((link) => (
                          <button
                            key={link.id}
                            onClick={() => handleLinkClick(link.id)}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1.5 ${
                              activeId === link.id
                                ? 'bg-blue-600 text-white font-bold'
                                : 'text-slate-700 hover:bg-slate-100 font-medium'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              activeId === link.id ? 'bg-white' : 'bg-slate-300'
                            }`} />
                            <span className="truncate">{link.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="p-3 border-t border-slate-200 bg-slate-50">
              <a
                href="#lead-funnel"
                onClick={() => setIsMobileTocOpen(false)}
                className="w-full py-2 bg-blue-600 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow"
              >
                <span>Free Hardship Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main 3-Column Layout */}
      <div className="w-full max-w-[1600px] xl:max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
          
          {/* Left Sticky Column (15%): Table of Contents */}
          <aside className="hidden lg:block lg:col-span-2 sticky top-24 max-h-[calc(100vh-110px)] overflow-y-auto pr-2 scrollbar-thin">
            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
              <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Contents</span>
                <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-bold">79</span>
              </div>

              <div className="relative mb-3">
                <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter..."
                  value={tocSearch}
                  onChange={(e) => setTocSearch(e.target.value)}
                  className="w-full pl-7 pr-2 py-1 text-[11px] bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-3">
                {navModules.map((m, mIdx) => {
                  const mLinks = m.links.filter(l =>
                    filteredLinks.some(fl => fl.id === l.id)
                  );
                  if (mLinks.length === 0) return null;
                  return (
                    <div key={mIdx} className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        M{mIdx + 1}
                      </div>
                      <div className="space-y-0.5">
                        {mLinks.map((link) => (
                          <button
                            key={link.id}
                            onClick={() => handleLinkClick(link.id)}
                            className={`w-full text-left px-2 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
                              activeId === link.id
                                ? 'bg-blue-600 text-white font-semibold'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                          >
                            <span className={`w-1 h-1 rounded-full flex-shrink-0 ${
                              activeId === link.id ? 'bg-white' : 'bg-slate-300'
                            }`} />
                            <span className="truncate">{link.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Middle Editorial Column (70%): All 79 Sections & Interactive Calculator */}
          <main className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-4 sm:p-7 md:p-9 shadow-sm space-y-10 sm:space-y-14">
\n
        {/* SECTION 1 */}
        <section id="intro-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 1</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            1. Introduction to NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Non-Banking Financial Companies (NBFCs) form the bedrock of retail credit expansion in modern India. From organized corporate conglomerates like Bajaj Finance, Tata Capital, Aditya Birla Finance, and Shriram Finance to fast-growing digital lending apps and microfinance institutions, NBFCs cater to millions of salaried employees, self-employed individuals, and MSME business owners underserved by traditional public sector banks.
            </p>
            <p>
              However, because NBFCs raise capital from wholesale commercial markets rather than low-cost public CASA deposits, their lending margins are sensitive, and their collection operations are notoriously aggressive. When unexpected life crises—such as involuntary job retrenchment, catastrophic health emergencies, commercial contract defaults, or sudden family losses—derail a borrower&apos;s repayment capacity, NBFC accounts rapidly accumulate compounded penal charges, high bounce fees, and relentless telecaller pressure.
            </p>
            <p>
              When equated monthly installments (EMIs) become permanently unsustainable, Indian commercial banking jurisprudence and the Reserve Bank of India’s regulatory frameworks provide a structured, legitimate exit route: <strong>NBFC Loan Settlement</strong>. Through a legally executed compromise settlement, a distressed borrower can settle their outstanding debt for a discounted lump sum, eliminate secondary penalties, stop third-party harassment, and obtain an unconditional No-Dues Certificate (NDC).
            </p>

            <div className="p-4 sm:p-5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl">
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Key Regulatory Protection</h4>
              <p className="text-black text-xs sm:text-sm">
                Under the Reserve Bank of India’s landmark <em>Prudential Framework for Resolution of Stressed Assets (June 8, 2023)</em> and the <em>Master Direction – Reserve Bank of India (Non-Banking Financial Company – Scale Based Regulation) Directions, 2023</em>, all NBFCs are legally mandated to maintain board-approved compromise settlement policies. A borrower who empirically proves financial hardship is entitled to negotiate a transparent, discounted settlement.
              </p>
            </div>
          </div>
        </section>
        {/* LEAD FUNNEL EMBED */}
        <div id="lead-funnel" className="my-6">
          <InteractiveLeadFunnel />
        </div>


        {/* INTERACTIVE LEAD FUNNEL EMBEDDED AFTER SECTION 1 */}
        <div className="my-8">
          <InteractiveLeadFunnel />
        </div>

        {/* SECTION 2 */}
        <section id="what-is-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 2</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            2. What Is NBFC Loan Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              An <strong>NBFC Loan Settlement</strong> (also referred to as a Compromise Settlement or One-Time Settlement - OTS) is a formal, legally binding bilateral contract executed between a registered Non-Banking Financial Company and a defaulting borrower. Under this agreement, the NBFC voluntarily agrees to accept a discounted sum—which is substantially lower than the total ledger balance—as full, final, and absolute satisfaction of the loan facility.
            </p>
            <p>
              The ledger balance typically includes the unpaid principal capital, contractual interest accrued up to the date of default, compounding penal interest, NACH/cheque dishonour charges, legal expenses, and agency collection commissions. Upon receipt of the agreed settlement sum within the stipulated deadline, the NBFC issues a formal <strong>No-Dues Certificate (NDC)</strong>, revokes all ongoing legal notices or arbitration proceedings, cancels registered NACH mandates, and updates the loan status as &quot;Settled&quot; across all credit bureaus.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="easy-meaning-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 3</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            3. Easy Meaning of NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              In plain, everyday terms, an NBFC loan settlement means closing an unpayable loan by paying a realistic discounted amount once, instead of staying trapped in a lifetime of compounding interest and collection calls.
            </p>
            <p>
              Consider this simple real-world illustration:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Original Unsecured Personal Loan Availed: <strong>₹6,00,000</strong></li>
              <li>Amount Repaid Through Past EMIs: <strong>₹2,20,000</strong></li>
              <li>Unpaid Principal Balance Remaining: <strong>₹3,80,000</strong></li>
              <li>After 10 Months Default, NBFC Demands: <strong>₹5,90,000</strong> (Principal ₹3.8L + Penal Fees ₹2.1L)</li>
            </ul>
            <p>
              Through formal compromise negotiations supported by medical or income loss documents, the NBFC agrees to:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li>Completely wipe off the ₹2,10,000 in secondary penal charges and bounce fees.</li>
              <li>Concede a 45% haircut on the unpaid principal balance of ₹3,80,000.</li>
              <li>Accept <strong>₹2,10,000 as a single, full and final settlement payment</strong>.</li>
            </ol>
            <p>
              You close a ₹5.9 Lakh liability for ₹2.1 Lakhs, the NBFC writes off the remainder under its bad debt provisions, the legal notices are withdrawn, and you receive an official No-Dues Certificate confirming you owe zero rupees.
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="how-does-nbfc-loan-settlement-work" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 4</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            4. How Does NBFC Loan Settlement Work?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              NBFC loan settlement operates through a defined institutional mechanism governed by asset classification timelines and risk provisioning:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Stage 1: NPA Tagging (90+ DPD)</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  When payments cross 90 days overdue, RBI norms require the NBFC to classify the loan as a Non-Performing Asset (NPA). The NBFC must allocate capital provisions of 15% to 100% against this defaulted exposure.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Stage 2: Stressed Portfolio Transfer</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  The account moves from regular customer service to the Stressed Assets Recovery Branch (SARB) or regional recovery desk, where performance is evaluated on cash recovery speed rather than customer retention.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Stage 3: Net Realization Modeling</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  The NBFC&apos;s Credit Committee compares the immediate cash settlement offer against the anticipated recovery from prolonged arbitration or civil litigation over 3 to 5 years minus advocate retainers.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Stage 4: Sanction &amp; Closure</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  Upon committee approval, the NBFC issues an official OTS Sanction Letter specifying the approved figure and due date. Once deposited directly into the loan account, the account is marked closed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="how-to-settle-an-nbfc-loan" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 5</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            5. How to Settle an NBFC Loan?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Settling an NBFC loan requires transitioning from reactive defense to proactive institutional engagement:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cease Unofficial Telephonic Discussions:</strong> Stop debating with outsourced telecallers who have zero sanctioning authority. Everything must be put in writing.</li>
              <li><strong>Isolate Unpaid Principal:</strong> Secure an authenticated Statement of Account (SOA) and calculate the pure unpaid principal capital minus late fees.</li>
              <li><strong>Compile Empirical Hardship Proof:</strong> Prepare a formal hardship dossier documenting involuntary unemployment, medical crises, or business insolvency.</li>
              <li><strong>Table a Formal Written Proposal:</strong> Deliver an OTS proposal letter to the NBFC&apos;s Nodal Officer and Stressed Assets Head offering 30% to 40% of the principal capital.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 6 */}
        <section id="nbfc-loan-settlement-process-step-by-step" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 6</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            6. NBFC Loan Settlement Process – Step by Step
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Follow this 7-step institutional roadmap to navigate NBFC settlement safely:
            </p>
            <div className="space-y-3 my-4">
              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 1: Ledger Statement Audit</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Obtain the full statement of account. Separate original disbursed capital from high-interest compounding, bounce fees, and recovery charges.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 2: Legal Risk Assessment</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Review pending legal notices—such as Section 25 PSSA (NACH bounce) or Section 138 NI Act notices—and prepare formal advocate replies.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 3: Settlement Corpus Mobilization</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Accumulate liquid settlement funds (targeting 35% to 50% of pure principal) in an unlinked bank account before approaching the lender.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 4: Formal OTS Submission</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Submit a structured OTS proposal letter to the NBFC Stressed Assets Committee citing RBI compromise frameworks and verifiable hardship exhibits.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 5: Committee Bargaining</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Negotiate counter-offers with the recovery manager, locking in 100% penal fee waivers and 40% to 60% principal haircuts.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">6</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 6: Sanction Letter Verification &amp; Payment</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Audit the official OTS Sanction Letter for explicit full-release clauses before remitting funds directly to your loan account via RTGS/NEFT.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">7</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 7: NDC Retrieval &amp; Bureau Verification</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Collect the physical No-Dues Certificate, confirm NACH cancellation, and verify that CIBIL reports the account as &quot;Settled&quot; with ₹0 balance within 45 days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section id="when-should-you-consider-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 7</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            7. When Should You Consider NBFC Loan Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Settlement is an extraordinary remedy designed for serious distress. You should consider an NBFC loan settlement when:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Debt Service Exceeds Net Income:</strong> When total monthly EMIs across NBFCs exceed 60% of your earnings, leaving insufficient surplus for food, rent, or utilities.</li>
              <li><strong>Persistent Delinquency (90+ Days):</strong> When the loan has crossed 90 days of continuous default and the NBFC has initiated collection agency action.</li>
              <li><strong>Unserviceable Penal Compounding:</strong> When late payment penalties and bounce charges exceed the monthly principal component of the loan.</li>
              <li><strong>Structural Income Loss:</strong> Involuntary job loss, permanent closure of business, or catastrophic family health crises with no prospect of income restoration in the foreseeable future.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 8 */}
        <section id="who-is-eligible-for-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 8</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            8. Who Is Eligible for NBFC Loan Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under RBI Scale Based Regulation (SBR) guidelines, eligibility for an NBFC settlement is strictly reserved for <strong>genuine distressed borrowers</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Eligible:</strong> Salaried employees facing retrenchment; small enterprise promoters facing commercial insolvency; individuals with verified medical catastrophes (cancer, cardiac, organ failure); surviving legal heirs of deceased primary borrowers.</li>
              <li><strong>Ineligible / Disqualified:</strong> Willful defaulters who hold adequate financial capacity but intentionally refuse payment; individuals implicated in siphoning or diversion of loan funds; borrowers with unencumbered liquid assets discoverable through PAN-linked financial tracking.</li>
            </ul>
          </div>
        </section>
\n
        {/* SECTION 9 */}
        <section id="which-nbfc-loans-can-be-settled" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 9</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            9. Which NBFC Loans Can Be Settled?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Virtually all categories of retail and commercial debt disbursed by Non-Banking Financial Companies can be resolved through compromise settlement, provided the account has defaulted and entered non-performing asset (NPA) status:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Unsecured Consumer Credit:</strong> Clean personal loans, instant app loans, consumer durable loans, and revolving credit lines.</li>
              <li><strong>Commercial &amp; MSME Facilities:</strong> Unsecured business loans, working capital loans, machinery finance, and merchant cash advances.</li>
              <li><strong>Asset-Backed Facilities:</strong> Commercial vehicle loans, passenger car loans, two-wheeler loans, and post-auction deficiency balances.</li>
              <li><strong>Mortgage &amp; Secured Credit:</strong> Loan Against Property (LAP) and affordable housing finance (settled prior to physical possession under SARFAESI).</li>
            </ul>
          </div>
        </section>

        {/* SECTION 10 */}
        <section id="personal-loan-settlement-with-nbfcs" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 10</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            10. Personal Loan Settlement With NBFCs
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Unsecured personal loans represent over 60% of all NBFC settlements in India. Because personal loans have no underlying hypothecation or mortgage, the lender holds zero collateral to repossess or auction upon default.
            </p>
            <p>
              Key characteristics of NBFC personal loan settlement:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Haircuts typically range between <strong>40% and 60% of the unpaid principal balance</strong>.</li>
              <li>100% of accumulated penal fees, late payment charges, and bounce fines are completely wiped clean.</li>
              <li>NBFCs routinely threaten legal notices under Section 25 PSSA (bounced NACH). Serving an assertive legal reply establishing genuine illiquidity rapidly compels their legal desk to approve an OTS.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 11 */}
        <section id="business-loan-settlement-with-nbfcs" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 11</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            11. Business Loan Settlement With NBFCs
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              MSME and small enterprise business loans from NBFCs (such as Lendingkart, FlexiLoans, NeoGrowth, Tata Capital, and Bajaj Finserv) often carry interest rates between 18% and 30% per annum, backed by personal guarantees of the proprietor or directors.
            </p>
            <p>
              To settle an NBFC business loan successfully:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Prove Genuine Commercial Downfall:</strong> Submit GST turnover drop reports, cancelled vendor purchase orders, or debtor default records proving that cash flow collapsed due to external market conditions.</li>
              <li><strong>Discharge Personal Guarantees:</strong> Ensure that the final settlement sanction letter expressly discharges not only the borrowing corporate entity but also all individual promoter guarantors from surviving liabilities under Section 128 of the Indian Contract Act.</li>
              <li><strong>Haircuts of 45% to 65%:</strong> Because uncollateralized MSME business loans are categorized as high-risk, NBFCs prefer upfront settlements over lengthy civil litigation.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 12 */}
        <section id="credit-card-unsecured-debt-settlement-nbfcs" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 12</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            12. Credit Card and Unsecured Debt Settlement With NBFCs
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Several major NBFCs issue co-branded credit cards or digital credit lines (such as Bajaj Finserv RBL SuperCard, SBI Card subsidiary operations, and fintech revolving lines).
            </p>
            <p>
              Revolving credit lines compound at <strong>42% to 54% annualized interest</strong>. When an account defaults for over 180 days, over 60% of the statement balance represents pure compounded finance fees. In compromise settlements, NBFCs routinely settle revolving credit lines for <strong>25% to 40% of the gross statement value</strong>, effectively recovering their base spend while forgiving the inflated fee layer.
            </p>
          </div>
        </section>

        {/* SECTION 13 */}
        <section id="vehicle-loan-settlement-with-nbfcs" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 13</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            13. Vehicle Loan Settlement With NBFCs
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Auto loans and commercial vehicle financing from NBFCs like Shriram Finance, Cholamandalam, Mahindra Finance, and Sundaram Finance are hypothecated under Section 51 of the Motor Vehicles Act.
            </p>
            <p>
              Vehicle loan settlement bifurcates into two distinct scenarios:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1">Pre-Repossession Settlement</h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  The borrower retains the vehicle. The settlement figure is benchmarked against the current depreciated market value of the car or truck. Upon payment, the NBFC must issue RTO Form 35 to cancel hypothecation from the Registration Certificate.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1">Post-Auction Deficiency Settlement</h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  The NBFC seized and auctioned the vehicle, but the auction proceeds fell short of the total debt, leaving a &quot;deficiency balance&quot;. Because the asset is already sold, this shortfall is 100% unsecured debt, allowing the borrower to settle it at a <strong>60% to 75% discount</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 14 */}
        <section id="secured-vs-unsecured-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 14</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            14. Secured vs Unsecured NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              The presence or absence of underlying collateral fundamentally governs negotiation dynamics:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-black font-bold">
                    <th className="p-3 border border-slate-200">Parameter</th>
                    <th className="p-3 border border-slate-200">Unsecured NBFC Loan</th>
                    <th className="p-3 border border-slate-200">Secured NBFC Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Collateral Backing</td>
                    <td className="p-3 border border-slate-200">Zero collateral (purely personal covenant).</td>
                    <td className="p-3 border border-slate-200">Mortgage on property or hypothecation of vehicle.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Typical Haircut %</td>
                    <td className="p-3 border border-slate-200 font-bold text-emerald-700">40% to 65% of principal balance.</td>
                    <td className="p-3 border border-slate-200">10% to 25% (penal waiver only; principal protected).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Lender Remedy</td>
                    <td className="p-3 border border-slate-200">Arbitration or civil suit (lengthy &amp; expensive).</td>
                    <td className="p-3 border border-slate-200">SARFAESI Section 13(2) notice &amp; asset auction.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Borrower Leverage</td>
                    <td className="p-3 border border-slate-200">High (lender risks total loss in insolvency).</td>
                    <td className="p-3 border border-slate-200">Moderate (lender can liquidate security).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
\n
        {/* SECTION 15 */}
        <section id="how-much-can-nbfc-loan-be-settled-for" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 15</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            15. How Much Can an NBFC Loan Be Settled For?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              In unsecured retail and MSME lending, NBFCs operate under competitive collection dynamics. Unlike public sector banks bound by rigid vigilance audits, NBFCs are private, commercially oriented lenders focused on cash flow velocity and capital recycling.
            </p>
            <p>
              Under verified financial insolvency, an unsecured NBFC loan can typically be settled for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li><strong>Against Gross Ledger Claim:</strong> <strong>30% to 50%</strong> of the gross demanded sum (representing a <strong>50% to 70% total debt reduction</strong>).</li>
              <li><strong>Against Unpaid Principal:</strong> <strong>40% to 60%</strong> of the actual principal balance.</li>
              <li><strong>Penal Charges &amp; Overdue Bounce Fees:</strong> <strong>100% completely eliminated</strong> under RBI fair lending guidelines.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 16 */}
        <section id="nbfc-loan-settlement-amount-calculation-examples" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 16</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            16. NBFC Loan Settlement Amount – Calculation and Examples
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Let us analyze a concrete financial ledger calculation for an unsecured personal loan defaulted with a premier tier-1 NBFC:
            </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-black font-bold">
                    <th className="p-3 border border-slate-200">Ledger Component</th>
                    <th className="p-3 border border-slate-200">NBFC Statement Claim</th>
                    <th className="p-3 border border-slate-200">Negotiated Settlement</th>
                    <th className="p-3 border border-slate-200">Waiver Granted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Unpaid Principal Balance</td>
                    <td className="p-3 border border-slate-200">₹5,00,000</td>
                    <td className="p-3 border border-slate-200 font-bold text-blue-700">₹2,60,000</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">₹2,40,000 (48% Haircut)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Contractual Overdue Interest</td>
                    <td className="p-3 border border-slate-200">₹1,20,000</td>
                    <td className="p-3 border border-slate-200">₹0</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">₹1,20,000 (100% Waived)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Compounded Penal Charges</td>
                    <td className="p-3 border border-slate-200">₹95,000</td>
                    <td className="p-3 border border-slate-200">₹0</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">₹95,000 (100% Waived)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">NACH Bounce &amp; Notice Fees</td>
                    <td className="p-3 border border-slate-200">₹45,000</td>
                    <td className="p-3 border border-slate-200">₹0</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">₹45,000 (100% Waived)</td>
                  </tr>
                  <tr className="bg-slate-50 font-bold">
                    <td className="p-3 border border-slate-200 text-black">Total Payable Amount</td>
                    <td className="p-3 border border-slate-200 text-red-700">₹7,60,000</td>
                    <td className="p-3 border border-slate-200 text-blue-800 font-black">₹2,60,000</td>
                    <td className="p-3 border border-slate-200 text-emerald-800 font-black">₹5,00,000 (65.8% Total Waiver)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              In this real-world example, the borrower resolved an escalating ₹7.6 Lakh liability for a clean, one-time payment of ₹2.6 Lakhs, saving ₹5 Lakhs in toxic debt.
            </p>
          </div>
        </section>

        {/* SECTION 17 */}
        <section id="factors-that-affect-nbfc-loan-settlement-amount" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 17</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            17. Factors That Affect NBFC Loan Settlement Amount
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              NBFC credit committees calibrate settlement concessions against four objective institutional metrics:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Asset Vintage &amp; Provisioning Coverage:</strong> Accounts defaulted for over 180 days have higher capital provisions set aside. NBFCs grant much deeper haircuts on 1-year-old NPAs than on fresh 95-day defaults.</li>
              <li><strong>Remittance Speed (Bullet vs Tranches):</strong> A borrower offering immediate settlement payment within 15 days secures a 10% to 15% deeper discount than one requesting 3 monthly tranches.</li>
              <li><strong>Borrower Realizable Assets:</strong> If the borrower has no traceable real estate, salary credits, or investments linked to their PAN, the NBFC knows court execution yields zero return.</li>
              <li><strong>Fiscal Quarter-End Urgency:</strong> In March, June, September, and December, NBFCs face pressure to clean balance sheet NPA ratios, resulting in higher willingness to grant discounts.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 18 */}
        <section id="nbfc-loan-settlement-vs-full-repayment" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 18</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            18. NBFC Loan Settlement vs Full Repayment
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Understanding the fundamental divergence between full repayment and compromise settlement:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1">Full Repayment</h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  Requires paying 100% of the principal and accrued interest. The loan is reported as &quot;Closed&quot; on CIBIL, maintaining a positive credit profile. However, for a borrower with ruined cash flow, full repayment is impossible and causes bankruptcy.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1">NBFC Loan Settlement</h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  Permanently extinguishes the debt at a 40% to 65% discount. The account reflects &quot;Settled&quot; status on credit bureaus, temporarily lowering credit scores, but instantly stops legal threats, collection calls, and financial despair.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 19 */}
        <section id="nbfc-loan-settlement-vs-loan-restructuring" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 19</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            19. NBFC Loan Settlement vs Loan Restructuring
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              In <strong>Loan Restructuring</strong>, the NBFC reschedules the existing loan by extending the repayment tenure (e.g., from 36 months to 60 months) or granting a short moratorium.
            </p>
            <p>
              However, restructuring offers <strong>zero haircut on principal</strong>. In fact, extending tenure actually increases the total lifetime interest paid to the NBFC. Restructuring is only suitable for borrowers facing temporary cash flow mismatches who expect full income recovery within months. For permanent financial distress, settlement is vastly superior because it permanently writes off a huge portion of the debt.
            </p>
          </div>
        </section>

        {/* SECTION 20 */}
        <section id="nbfc-loan-settlement-vs-loan-waiver" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 20</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            20. NBFC Loan Settlement vs Loan Waiver
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              A <strong>Loan Waiver</strong> implies 100% cancellation of a loan without any repayment by the borrower, typically seen in government-subsidized agricultural farm waivers. Private commercial NBFCs never grant 100% unilateral loan waivers to retail borrowers.
            </p>
            <p>
              An <strong>NBFC Settlement</strong> is a commercial compromise: the borrower pays a negotiated discounted portion of the principal (40% to 60%), and the NBFC writes off the remaining balance. It requires bilateral payment execution.
            </p>
          </div>
        </section>

        {/* SECTION 21 */}
        <section id="nbfc-loan-settlement-vs-loan-foreclosure" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 21</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            21. NBFC Loan Settlement vs Loan Foreclosure
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              <strong>Loan Foreclosure</strong> occurs when a solvent borrower pays off 100% of the remaining principal balance before the scheduled tenure ends, sometimes paying a foreclosure fee (though RBI bans foreclosure charges on floating-rate individual loans). The account is marked &quot;Closed&quot;.
            </p>
            <p>
              <strong>Loan Settlement</strong> occurs when a defaulted borrower cannot pay the balance and the lender agrees to accept a discounted payoff with substantial haircuts. The account is marked &quot;Settled&quot;.
            </p>
          </div>
        </section>

        {/* SECTION 22 */}
        <section id="advantages-of-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 22</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            22. Advantages of NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Executing a settlement with an NBFC delivers immediate operational and legal relief:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Substantial Debt Elimination:</strong> Secures 40% to 65% principal haircuts and 100% penal fee waivers, saving lakhs of rupees.</li>
              <li><strong>Instant Cessation of Harassment:</strong> Under RBI mandates, all recovery calls, agency visits, and automated collection reminders stop permanently once an OTS is sanctioned and paid.</li>
              <li><strong>Withdrawal of Legal Claims:</strong> Section 25 PSSA, Section 138 NI Act, or arbitration proceedings are formally withdrawn by the NBFC.</li>
              <li><strong>Restoration of Peace of Mind:</strong> Frees your household from chronic financial anxiety and lets you redirect earnings toward family survival.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 23 */}
        <section id="disadvantages-and-risks-of-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 23</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            23. Disadvantages and Risks of NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              To make an informed financial decision, consider the trade-offs:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>&quot;Settled&quot; Remark on Credit Bureaus:</strong> CIBIL will reflect &quot;Settled&quot; status for the loan, indicating a past debt compromise.</li>
              <li><strong>Temporary Cooling-Off Period:</strong> Unsecured credit card and personal loan approvals will be restricted across major banks for 12 to 24 months.</li>
              <li><strong>Risk of Invalid Oral Promises:</strong> Depositing money on informal verbal promises by recovery agents without a verified written sanction letter leads to total loss of funds.</li>
            </ul>
          </div>
        </section>
\n
        {/* INTERACTIVE NBFC LOAN SETTLEMENT CALCULATOR */}
        <section id="interactive-nbfc-settlement-calculator" className="scroll-section scroll-mt-28 my-8 p-5 sm:p-7 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-2xl sm:rounded-3xl text-white shadow-xl">
          <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Real-Time Estimation Tool</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-extrabold mb-1 tracking-tight">
            Interactive NBFC Loan Settlement &amp; Haircut Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Estimate your realistic One-Time Settlement (OTS) amount under RBI&apos;s June 8, 2023 Prudential Compromise Framework. Calculate 100% penal interest waivers and pure principal haircuts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            {/* Input Controls */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Outstanding Principal Balance:</span>
                  <span className="text-blue-300 font-bold">₹{calcPrincipal.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="25000"
                  value={calcPrincipal}
                  onChange={(e) => setCalcPrincipal(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Accumulated Penalties &amp; Late Fees:</span>
                  <span className="text-yellow-300 font-bold">₹{calcPenalCharges.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000000"
                  step="10000"
                  value={calcPenalCharges}
                  onChange={(e) => setCalcPenalCharges(Number(e.target.value))}
                  className="w-full accent-yellow-400 cursor-pointer h-2 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">Default Age (Months):</label>
                  <select
                    value={calcDpdMonths}
                    onChange={(e) => setCalcDpdMonths(Number(e.target.value))}
                    className="w-full bg-slate-800 text-white text-xs border border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  >
                    <option value={3}>3-6 Months (SMA-2)</option>
                    <option value={9}>6-12 Months (Substandard NPA)</option>
                    <option value={15}>12-24 Months (Doubtful NPA)</option>
                    <option value={27}>24+ Months (Loss Asset)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">NBFC Institution Type:</label>
                  <select
                    value={calcLenderType}
                    onChange={(e) => setCalcLenderType(e.target.value)}
                    className="w-full bg-slate-800 text-white text-xs border border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  >
                    <option value="retail_nbfc">Retail NBFC (Personal Loan)</option>
                    <option value="fintech_app">Fintech Digital Lending App</option>
                    <option value="enterprise_nbfc">MSME / Enterprise NBFC</option>
                    <option value="housing_hfc">Housing Finance Company (LAP)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Documented Financial Hardship:</label>
                <select
                  value={calcHardshipReason}
                  onChange={(e) => setCalcHardshipReason(e.target.value)}
                  className="w-full bg-slate-800 text-white text-xs border border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                >
                  <option value="job_loss">Involuntary Job Loss / Retrenchment</option>
                  <option value="medical_crisis">Critical Illness / Medical Emergency</option>
                  <option value="business_loss">Severe Business Deficit / Liquidity Crisis</option>
                  <option value="income_reduction">Substantial Salary / Income Reduction</option>
                </select>
              </div>
            </div>

            {/* Calculated Output Breakdown */}
            <div className="flex flex-col justify-between bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-white/10">
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Total NBFC Claim:</span>
                  <span className="font-semibold">₹{otsAnalysis.totalClaim.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2 text-yellow-300">
                  <span>100% Penal Fee Waiver:</span>
                  <span className="font-bold">-₹{otsAnalysis.penalWaiver.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2 text-emerald-400">
                  <span>Principal Haircut ({otsAnalysis.cappedPrincipalHaircutPct}%):</span>
                  <span className="font-bold">-₹{otsAnalysis.principalWaived.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between pt-1 text-sm sm:text-base font-extrabold text-blue-200">
                  <span>Target Settlement Amount:</span>
                  <span className="text-lg sm:text-xl text-white">₹{otsAnalysis.targetSettlementPayable.toLocaleString('en-IN')}</span>
                </div>
                <div className="bg-emerald-500/20 border border-emerald-500/30 p-2.5 rounded-lg text-emerald-300 text-xs font-semibold text-center">
                  Total Estimated Savings: ₹{otsAnalysis.totalSavings.toLocaleString('en-IN')} ({otsAnalysis.effectiveTotalDiscountPct}% Overall Haircut)
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="text-[11px] text-slate-300 leading-relaxed">
                  <strong>Recommended Strategy:</strong> {otsAnalysis.strategyText}
                </div>
              </div>
            </div>
          </div>
        </section>
\n
        {/* SECTION 24 */}
        <section id="impact-of-nbfc-loan-settlement-on-cibil-score" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 24</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            24. Impact of NBFC Loan Settlement on CIBIL Score
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              A major concern for borrowers is how an NBFC settlement impacts their CIBIL score. It is vital to understand the difference between active default and completed settlement:
            </p>
            <p>
              An unresolved default continues to report increasing <strong>Days Past Due (90, 120, 180+ DPD)</strong> every single month. This active delinquency causes your credit score to drop continuously, bleeding 10 to 20 points month after month down into the 500s.
            </p>
            <p>
              When you execute a settlement, the NBFC reports the account as <strong>&quot;Settled&quot;</strong> and updates the outstanding balance to <strong>₹0</strong>. The bleeding stops immediately. While your score will reflect a temporary dip of approximately 50 to 80 points, it establishes a solid foundation from which you can actively rebuild your credit profile.
            </p>
          </div>
        </section>

        {/* SECTION 25 */}
        <section id="nbfc-loan-settlement-and-credit-bureau-reporting" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 25</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            25. NBFC Loan Settlement and Credit Bureau Reporting
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under RBI mandates, NBFCs submit monthly data files to all four Credit Information Companies (CIBIL, Experian, Equifax, CRIF High Mark). In your credit report, the settled NBFC tradeline will display:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li><strong>Current Balance:</strong> ₹0 (confirming zero surviving liability).</li>
              <li><strong>Amount Overdue:</strong> ₹0.</li>
              <li><strong>Account Status:</strong> &quot;Settled&quot; or &quot;Post-Write-off Settled&quot;.</li>
              <li><strong>Written-off Amount:</strong> The principal haircut and penal charges waived by the NBFC.</li>
            </ul>
            <p>
              Automated underwriting models may flag this &quot;Settled&quot; status for instant personal loan pre-approvals during the initial cooling-off period. However, the presence of a ₹0 balance allows manual credit underwriters to approve future secured credit.
            </p>
          </div>
        </section>

        {/* SECTION 26 */}
        <section id="how-long-does-nbfc-loan-settlement-affect-cibil" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 26</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            26. How Long Does NBFC Loan Settlement Affect CIBIL?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), historical credit tradelines remain visible on your report for up to <strong>7 years</strong>.
            </p>
            <p>
              However, the <em>algorithmic weight</em> of a past settlement decays rapidly over time:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm block mb-1">Months 1 to 12 (Cooling-off)</span>
                <p className="text-xs text-slate-800">Highest algorithmic sensitivity. Unsecured loans restricted. Primary focus must be on opening secured credit and making zero delayed payments.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm block mb-1">Months 13 to 24 (Rebuilding)</span>
                <p className="text-xs text-slate-800">Score rebounds towards 700–740 if secured lines are serviced perfectly. Gold loans, vehicle loans, and two-wheeler financing become easily accessible.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm block mb-1">Months 25+ (Prime Re-Entry)</span>
                <p className="text-xs text-slate-800">Recent on-time payment history heavily overshadows the 2-year-old settlement entry. Score crosses 750+, qualifying you for standard home loans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 27 */}
        <section id="how-to-rebuild-cibil-after-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 27</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            27. How to Rebuild CIBIL After NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Rebuilding a prime credit score (750+) after an NBFC settlement is completely achievable within 12 to 24 months by following this disciplined protocol:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Open a Fixed Deposit (FD) Backed Credit Card:</strong> Apply for a secured credit card issued against a small fixed deposit of ₹25,000 to ₹50,000 (such as IDFC First WOW or Kotak 811 DreamDifferent). These cards require zero credit score checks and report fresh positive repayment tradelines every month.</li>
              <li><strong>Maintain Strict 15% Utilization:</strong> Spend no more than 15% of your secured card limit in any single billing cycle on routine living expenses (groceries, fuel).</li>
              <li><strong>Pay 100% of Total Amount Due:</strong> Never pay only the minimum balance; set up auto-pay for the full statement amount 5 days before the due date.</li>
              <li><strong>Avoid Unnecessary Credit Inquiries:</strong> Do not submit multiple speculative loan applications on fintech apps, as repeated hard credit inquiries degrade recovering scores.</li>
            </ol>
          </div>
        </section>
\n
        {/* SECTION 28 */}
        <section id="rbi-guidelines-for-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 28</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            28. RBI Guidelines for NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Compromise settlements in the NBFC sector are strictly governed by the Reserve Bank of India’s landmark regulatory circular: <strong>Prudential Framework for Resolution of Stressed Assets – Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) issued on June 8, 2023</strong>.
            </p>
            <p>
              Key regulatory rights established for NBFC borrowers:
            </p>
            <div className="p-4 sm:p-5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">Core Provisions of the RBI June 2023 Circular:</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                <li><strong>Universal Mandate for Board Policies:</strong> Every registered NBFC (across Base, Middle, and Upper Layers) must maintain a transparent, non-discriminatory compromise policy approved by its board of directors.</li>
                <li><strong>Clear Delegation of Financial Powers:</strong> Haircut decisions cannot be made arbitrarily; they must follow a designated hierarchy of Credit Committees.</li>
                <li><strong>Defined Cooling-off Period:</strong> Settled borrowers face a standardized 12-month cooling period rather than permanent blacklisting across the banking system.</li>
                <li><strong>Reporting Transparency:</strong> NBFCs must report settlement data uniformly to credit bureaus as &quot;Settled&quot; with full disclosure of write-off figures.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 29 */}
        <section id="rbi-rules-for-nbfc-recovery-agents" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 29</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            29. RBI Rules for NBFC Recovery Agents
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under the RBI’s <strong>Master Direction – Non-Banking Financial Company – Scale Based Regulation (SBR) Directions, 2023</strong> and the <strong>Circular on Recovery Agents (August 2022)</strong>, NBFC recovery agents must adhere to strict operational boundaries:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Time Windows:</strong> Recovery communications (phone calls, SMS, WhatsApp, home visits) are strictly restricted between <strong>8:00 AM and 7:00 PM</strong>. Calls before 8 AM or after 7 PM constitute punishable regulatory misconduct.</li>
              <li><strong>Strict Prohibition on Harassment:</strong> Agents are barred from using abusive language, physical muscle power, repeated persistent calls, or public shaming.</li>
              <li><strong>Third-Party Contact Prohibited:</strong> Contacting your workplace colleagues, employer, friends, or relatives regarding your loan default is an explicit violation of customer privacy and RBI directions.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 30 */}
        <section id="rbi-guidelines-for-fair-recovery-practices" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 30</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            30. RBI Guidelines for Fair Recovery Practices
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under the <strong>Fair Practices Code (FPC)</strong> for NBFCs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1">Direct Liability of NBFCs</h4>
                <p className="text-xs text-slate-800">NBFCs cannot evade responsibility by blaming third-party recovery agencies. The NBFC is directly and strictly liable for any illegal act, harassment, or verbal abuse committed by its agents.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1">Identity &amp; Authorization</h4>
                <p className="text-xs text-slate-800">Every visiting agent must carry an official NBFC identity badge and a verified letter of authorization detailing the debt amount.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1">Grievance Redressal Mandate</h4>
                <p className="text-xs text-slate-800">Every NBFC must display the contact details of its Principal Nodal Officer (PNO) and local RBI Ombudsman office on its website and branches.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1">Fair Penal Charges Rules (2024)</h4>
                <p className="text-xs text-slate-800">NBFCs are prohibited from compounding penal interest. Overdue charges must be levied as simple, transparent penal charges without capital capitalization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 31 */}
        <section id="nbfc-loan-default-what-happens-if-you-stop-paying" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 31</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            31. NBFC Loan Default – What Happens If You Stop Paying?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              When you stop servicing EMIs on an NBFC loan, the facility moves through standardized asset classification stages:
            </p>
            <div className="space-y-2.5 my-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm">Days 1 to 30 (SMA-0):</span>
                <span className="text-xs sm:text-sm text-slate-800 ml-2">Automated SMS, emails, and gentle phone reminders from the NBFC call center.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm">Days 31 to 60 (SMA-1):</span>
                <span className="text-xs sm:text-sm text-slate-800 ml-2">Compounding penal interest is appended; calls shift to intensive collection agencies; NACH bounce fees mount.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm">Days 61 to 90 (SMA-2):</span>
                <span className="text-xs sm:text-sm text-slate-800 ml-2">Field agents initiate physical address verification visits; initial advocate legal demand notices are dispatched.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm">Days 91+ (NPA Classification):</span>
                <span className="text-xs sm:text-sm text-slate-800 ml-2">Account tagged as Non-Performing Asset; interest accrual freezes in NBFC books; file shifts to Stressed Recovery Desk for OTS negotiations.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 32 */}
        <section id="legal-consequences-of-nbfc-loan-default" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 32</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            32. Legal Consequences of NBFC Loan Default
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              It is critical to separate legal facts from recovery agent intimidation:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Loan Default Is NOT a Criminal Crime:</strong> Inability to repay an unsecured NBFC loan is a civil breach of contract under Section 73 of the Indian Contract Act, 1872. Police cannot register an FIR, issue arrest warrants, or detain you for civil debt default.</li>
              <li><strong>No Immediate Property Attachment:</strong> For unsecured personal or business loans, an NBFC cannot seize your household items, vehicle, or apartment without winning a full civil suit and securing an execution decree from a competent court after years of trial.</li>
              <li><strong>Quasi-Criminal Statutory Notices:</strong> NBFCs can only approach judicial magistrates if: (a) a physical cheque bounced (Section 138 NI Act), or (b) an electronic NACH mandate was dishonoured (Section 25 PSSA). Both offenses are bailable and compoundable upon settlement.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 33 */}
        <section id="can-an-nbfc-take-legal-action-for-loan-default" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 33</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            33. Can an NBFC Take Legal Action for Loan Default?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Yes, NBFCs possess legal avenues to pursue delinquent debt, but each avenue has commercial limitations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Section 25 Payment and Settlement Systems Act (PSSA):</strong> Filed in magistrate courts for bounced electronic auto-debits. Highly common for NBFCs.</li>
              <li><strong>Sole Arbitrator Proceedings:</strong> Many NBFCs invoke arbitration clauses to obtain ex-parte arbitral awards. Unilateral arbitrator appointments can be challenged under Section 34 of the Arbitration Act.</li>
              <li><strong>Civil Summary Suit (Order 37 CPC):</strong> Filed in civil court, but rarely pursued for retail debts under ₹15 Lakhs due to high court fees and multi-year delays.</li>
              <li><strong>SARFAESI Act (Secured NBFCs):</strong> Applicable only if the NBFC is notified by the Ministry of Finance under SARFAESI and the debt exceeds ₹20 Lakhs backed by mortgaged property.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 34 */}
        <section id="nbfc-loan-settlement-after-receiving-legal-notice" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 34</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            34. NBFC Loan Settlement After Receiving a Legal Notice
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Receiving an advocate legal notice from an NBFC often creates intense panic, but it actually signals the <strong>prime window to execute an OTS</strong>.
            </p>
            <p>
              When a legal notice arrives:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li>Never ignore it; failing to respond allows the NBFC to claim you admitted the liability.</li>
              <li>Have an experienced debt defense counsel serve an assertive, factual legal reply within the 15-day statutory window.</li>
              <li>Establish your verifiable hardship and formally offer an amicable compromise under RBI guidelines.</li>
              <li>This shifts the matter from aggressive recovery agencies to the NBFC&apos;s legal desk, which is authorized to grant 45% to 60% haircuts to avoid spending money on advocate retainers in court.</li>
            </ol>
          </div>
        </section>

        {/* SECTION 35 */}
        <section id="nbfc-loan-settlement-during-arbitration-legal-proceedings" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 35</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            35. NBFC Loan Settlement During Arbitration or Legal Proceedings
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Even if an NBFC has already initiated arbitration hearings or filed a court complaint, compromise settlement remains fully valid at any stage prior to final decree execution:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Section 147 NI Act / Section 25 PSSA Compounding:</strong> Both offenses are compoundable. Upon realization of the agreed settlement sum, the NBFC is legally bound to withdraw the criminal case in court.</li>
              <li><strong>Consent Arbitral Award (Section 30):</strong> The parties can jointly petition the arbitrator to record the compromise terms as a Consent Award, terminating all legal claims.</li>
              <li><strong>National Lok Adalat Settlement:</strong> Under the Legal Services Authorities Act, matters settled in Lok Adalats result in an unappealable judicial decree with 100% refund of court fees to the NBFC.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 36 */}
        <section id="nbfc-loan-settlement-and-recovery-agent-harassment" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 36</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            36. NBFC Loan Settlement and Recovery Agent Harassment
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Because NBFCs rely heavily on outsourced recovery agencies, borrowers face intense collection tactics—including 20+ automated calls daily, visits to family residences, and threats of police action.
            </p>
            <p>
              To neutralize NBFC agent harassment:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Record all inbound collection calls and take screenshots of threatening WhatsApp messages.</li>
              <li>Demand the caller&apos;s full name, agency registration certificate, and NBFC employee authorization code.</li>
              <li>Inform the caller firmly: <em>&quot;This account is in formal dispute and legal settlement review with the NBFC Nodal Officer. Any further calls outside 8 AM to 7 PM or calls to third parties will be escalated to the RBI Ombudsman under the Recovery Agent Master Direction.&quot;</em></li>
            </ul>
          </div>
        </section>

        {/* SECTION 37 */}
        <section id="borrowers-rights-against-nbfc-recovery-agent-harassment" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 37</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            37. Borrower&apos;s Rights Against NBFC Recovery Agent Harassment
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Every Indian citizen possesses enforceable legal protections against predatory collection behavior:
            </p>
            <div className="p-4 sm:p-5 bg-amber-50/80 border-l-4 border-amber-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">Statutory Rights Against NBFC Harassment</h4>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-black">
                <li><strong>Right to Dignity:</strong> Abusive language, public humiliation, or shouting at your doorstep violates fundamental rights under Article 21 and Supreme Court precedents (<em>ICICI Bank v. Shanti Devi Sharma</em>).</li>
                <li><strong>Right to Privacy:</strong> Calling your HR department or workplace colleagues violates the Digital Personal Data Protection Act, 2023.</li>
                <li><strong>Right to Redressal:</strong> You can file formal complaints with the NBFC Principal Nodal Officer (PNO) and escalate to the <strong>RBI Integrated Ombudsman</strong> (cms.rbi.org.in), which imposes severe financial penalties on non-compliant NBFCs.</li>
              </ul>
            </div>
          </div>
        </section>
\n
        {/* SECTION 38 */}
        <section id="how-to-negotiate-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 38</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            38. How to Negotiate NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Negotiating an OTS with an NBFC requires strategic framing and adherence to institutional rules:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Bypass Call Centers:</strong> Telecallers receive incentives to recover 100% of the statement amount. Request meetings with the <strong>Area Recovery Manager (ARM)</strong> or <strong>Zonal Settlement Officer</strong>.</li>
              <li><strong>Anchor to Pure Principal:</strong> When the NBFC demands ₹8 Lakhs on a ₹4.5 Lakh principal, immediately strip the ₹3.5 Lakh penal fee layer under RBI fair practice norms.</li>
              <li><strong>The &quot;Borrower Insolvency&quot; Card:</strong> Demonstrate that you hold zero attachable assets. An NBFC credit committee will only sanction a 50% haircut if their credit appraisal note can prove that litigation would yield less.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 39 */}
        <section id="how-to-make-settlement-proposal-to-nbfc" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 39</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            39. How to Make a Settlement Proposal to an NBFC
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Your formal OTS proposal letter must be structured as an institutional memorandum. Below is an authoritative sample template:
            </p>

            <div className="p-4 sm:p-6 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto my-4 space-y-3">
              <p>To,</p>
              <p>The Head – Stressed Assets Resolution Division,<br />[Name of NBFC],<br />[Registered Office Address / Zonal Office Address]</p>
              
              <p><strong>SUBJECT: Formal Proposal for One-Time Settlement (OTS) under RBI Compromise Framework in respect of Loan Account No. [Insert Loan Account Number]</strong></p>
              
              <p>Respected Sir/Madam,</p>
              
              <p>1. I had availed a [Personal / Business / Vehicle] facility bearing Loan Account No. [XXXXXXXX] from your esteemed company on [Disbursal Date] with a sanctioned amount of ₹[XXXXXXXX].</p>
              
              <p>2. I maintained regular EMI payments until [Month, Year]. Unfortunately, due to unforeseen and catastrophic circumstances—specifically [Detail: corporate retrenchment / severe medical emergency / business liquidation]—my income has ceased completely.</p>
              
              <p>3. While your statement claims an outstanding balance of ₹[Total Claim], the pure unpaid principal capital stands at ₹[Principal Balance]. The remainder comprises compounded penal interest and overdue charges.</p>
              
              <p>4. In line with the Reserve Bank of India’s June 8, 2023 Prudential Compromise Framework, I am formally requesting a One-Time Settlement. Having exhausted all personal savings, I have mobilized financial assistance from close family members.</p>
              
              <p>5. I hereby offer <strong>₹[Offer Amount in Figures] (Rupees [Offer Amount in Words] Only)</strong>, representing approximately [35% / 45%] of the unpaid principal, as full, final, and absolute settlement of all claims.</p>
              
              <p>6. Upon receipt of your formal written OTS Sanction Letter, I undertake to deposit the entire sum within [15 / 30] business days directly into my loan account, subject to issuance of an unconditional No-Dues Certificate and withdrawal of any pending notices.</p>
              
              <p>7. Enclosed please find documentary exhibits substantiating my medical/financial hardship and bank statements (Annexures A to D).</p>
              
              <p>Yours faithfully,<br />[Your Signature]<br />[Your Full Name]<br />[Contact Address, Phone, Email]</p>
            </div>
          </div>
        </section>

        {/* SECTION 40 */}
        <section id="documents-required-for-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 40</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            40. Documents Required for NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              To substantiate an OTS application before the NBFC’s credit committee, assemble this standardized dossier:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Loan Identification:</strong> Sanction letter copy, authenticated Statement of Account (SOA), loan account number.</li>
              <li><strong>Income Collapse Records:</strong> Corporate termination letter, retrenchment notice, salary reduction slips, or business closure certificates.</li>
              <li><strong>Medical Emergency Proof (If Applicable):</strong> Hospital discharge summaries, surgical invoices, cancer or chronic illness diagnostic records.</li>
              <li><strong>Bank Statements (Past 12 Months):</strong> Statements of all active savings and current accounts across all banks proving zero surplus cash reserves.</li>
              <li><strong>Affidavit of Assets:</strong> A notarized legal affidavit confirming you own no unencumbered marketable real estate, shares, or liquid mutual funds.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 41 */}
        <section id="financial-hardship-and-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 41</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            41. Financial Hardship and NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Financial hardship is the foundational legal justification for any compromise haircut. Under RBI audit guidelines, an NBFC credit committee cannot approve debt forgiveness out of personal sympathy; their files must contain verifiable evidence proving that full recovery is an economic impossibility.
            </p>
            <p>
              When framing your hardship:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Differentiate between temporary cash flow delays and permanent earning destruction.</li>
              <li>Show that essential survival expenses (rent, food, child schooling) consume 100% of your current income.</li>
              <li>Demonstrate that the proposed settlement funds are not your own operational money, but a compassionate, one-time loan raised from family members.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 42 */}
        <section id="nbfc-loan-settlement-after-job-loss" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 42</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            42. NBFC Loan Settlement After Job Loss
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Involuntary corporate retrenchment, company downsizing, and startup layoffs are prime catalysts for NBFC defaults. When a salaried borrower loses their primary income, servicing high-interest NBFC EMIs becomes impossible.
            </p>
            <p>
              To settle post-job loss:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Submit the official Relieving Letter or Retrenchment Notice from your previous employer.</li>
              <li>Provide bank statements showing the complete cessation of monthly salary credits.</li>
              <li>If you have secured a new job at a substantially lower pay scale (e.g., 40%–50% pay cut), submit the new employment agreement to prove that your current income cannot support legacy high-EMI commitments.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 43 */}
        <section id="nbfc-loan-settlement-after-business-income-loss" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 43</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            43. NBFC Loan Settlement After Business or Income Loss
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              MSME promoters, traders, and proprietary firm owners frequently borrow from NBFCs at high interest rates (18% to 28%) to manage working capital. When market shifts, client payment defaults, or supply chain disruptions destroy business margins, debt servicing collapses.
            </p>
            <p>
              To substantiate commercial hardship:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide audited Balance Sheets and Profit &amp; Loss statements showing sustained operational losses.</li>
              <li>Furnish GST cancellation certificates, commercial lease surrender deeds, or bounced customer cheques.</li>
              <li>Show that default resulted from genuine commercial failure rather than intentional fund diversion.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 44 */}
        <section id="nbfc-loan-settlement-due-to-financial-emergency" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 44</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            44. NBFC Loan Settlement Due to Financial Emergency
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Catastrophic medical diagnoses (such as cancer treatments, major cardiac bypass surgeries, organ transplants, or permanent physical disability) consume life savings and eliminate earning capacity.
            </p>
            <p>
              NBFC credit committees treat medical insolvency with the highest degree of latitude:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Committees routinely approve <strong>haircuts exceeding 65%</strong> on unsecured facilities when catastrophic medical hardship is proven.</li>
              <li>Attach hospital admission notes, ICU records, surgery invoices, and pharmacy receipts.</li>
              <li>Demonstrate that medical bills completely exhausted liquid emergency reserves.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 45 */}
        <section id="nbfc-one-time-settlement-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 45</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            45. NBFC One-Time Settlement (OTS)
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              An <strong>NBFC One-Time Settlement (OTS)</strong> is an institutional compromise wherein the lender accepts an agreed discounted sum in a single payment (or up to 3 short tranches) to permanently extinguish the loan.
            </p>
            <p>
              The hallmark of an OTS is finality: upon realization of the settlement amount, the borrower is granted complete legal discharge from all surviving claims, the loan account is closed in CBS systems, and all registered NACH auto-debits and cheques are nullified.
            </p>
          </div>
        </section>

        {/* SECTION 46 */}
        <section id="how-to-convince-an-nbfc-for-one-time-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 46</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            46. How to Convince an NBFC for One-Time Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              To convince an NBFC credit committee to approve a major principal discount, frame your proposal around commercial realism rather than emotional pleading:
            </p>
            <div className="space-y-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Pillar 1: Demonstrate Complete Inability to Service Full Debt</span>
                <p className="text-xs sm:text-sm text-slate-800">Prove with bank statements and tax filings that your disposable surplus is zero. Show that full recovery is an economic impossibility.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Pillar 2: Present Immediate Lump-Sum Liquidity</span>
                <p className="text-xs sm:text-sm text-slate-800">Differentiate yourself from non-paying debtors by showing that while you cannot pay ₹6 Lakhs, you have mobilized ₹2.5 Lakhs from relatives ready for immediate deposit upon sanction.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Pillar 3: The Reality of Litigation Overhead</span>
                <p className="text-xs sm:text-sm text-slate-800">Subtly remind the recovery manager that civil litigation or arbitration incurs heavy advocate fees and years of delay without guaranteeing cash recovery.</p>
              </div>
            </div>
          </div>
        </section>
\n
        {/* SECTION 47 */}
        <section id="nbfc-loan-settlement-with-multiple-lenders" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 47</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            47. NBFC Loan Settlement With Multiple Lenders
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              When a borrower is indebted to multiple lending institutions simultaneously—such as two commercial banks, three retail NBFCs, and four instant digital lending apps—navigating settlements requires cross-institutional coordination and strict priority sequencing. Attempting to negotiate haphazardly across five different institutions creates severe liquidity exhaustion, where partial token deposits deplete settlement reserves without extinguishing any single liability.
            </p>
            <p>
              Unlike corporate debt restructuring governed by the Insolvency and Bankruptcy Code (IBC) or RBI&apos;s Inter-Creditor Agreements (ICA) where lenders vote collectively, retail multiple-lender settlements operate as bilateral negotiations. Each institution acts in isolation to maximize its individual recovery before the borrower&apos;s remaining capital pool is entirely extinguished.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Key Strategic Principles for Multi-Lender Settlement:</h4>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>Enforce an Information Firewall:</strong> Never disclose to NBFC &apos;A&apos; that you have successfully concluded an OTS with Bank &apos;B&apos; for ₹3 Lakhs. NBFC &apos;A&apos; will immediately extrapolate that you possess hidden liquidity and will stiffen their demand, rejecting any concessionary haircut.</li>
                <li><strong>Triage Legal Exposure Over Balance Size:</strong> Prioritize settlement funds for institutions that have actively issued legal notices under Section 138 of the Negotiable Instruments Act or initiated arbitration hearings. An unserviced ₹1 Lakh unsecured loan backed by an active criminal summons poses an immediate threat to your personal liberty, whereas a passive ₹5 Lakh loan with no ongoing litigation can await round two of negotiations.</li>
                <li><strong>Consolidated Pool Allocation:</strong> Calculate your total liquid liquidation reserve (e.g., ₹6 Lakhs total available from provident fund withdrawal or family assistance) against your total outstanding across all lenders (e.g., ₹18 Lakhs). Apportion this reserve systematically, offering targeted 30% to 40% lump-sum settlements sequentially rather than distributing ineffective EMI tokens across all files.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 48 */}
        <section id="settlement-of-multiple-nbfc-loans" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 48</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            48. Settlement of Multiple NBFC Loans
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Settling multiple loans exclusively held by NBFCs involves distinct operational mechanics compared to bank portfolios. NBFCs share real-time delinquency information across high-frequency credit bureau updates (CIBIL, Experian, CRIF High Mark, Equifax), meaning an aggressive default on one NBFC portfolio will immediately freeze secondary credit lines across all other participating institutions.
            </p>
            <p>
              To execute a structured multi-NBFC debt clearance program without triggering premature litigation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Phase 1: Portfolio Audit &amp; Categorization</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Aggregate sanction letters, total original principals, cumulative interest paid, and existing penalty overdues across every open NBFC account. Differentiate between asset-backed loans (consumer durable, two-wheeler) and pure unsecured cash lines.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Phase 2: The &apos;Oldest Delinquency&apos; First Rule</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  NBFC accounts that have crossed 180 to 270 days past due (DPD) carry 100% loss-asset provisioning on the lender&apos;s balance sheet. These portfolios yield the highest settlement haircuts (up to 60-75% discount on total claims) compared to recently defaulted 90-day DPD accounts.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Phase 3: Synchronized Counter-Proposals</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Issue formal, written compromise proposals to the authorized grievance redressal and recovery divisions of each NBFC within the same calendar quarter, preventing aggressive third-party collection agencies from competing via predatory harassment.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Phase 4: Sequential Fund Disbursement</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Never pay lender two until lender one has delivered an authentic, digitally verifiable settlement sanction letter and acknowledged receipt of the settlement tranche in writing, accompanied by an explicit commitment to issue a formal No Dues Certificate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 49 */}
        <section id="nbfc-loan-settlement-for-salaried-borrowers" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 49</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            49. NBFC Loan Settlement for Salaried Borrowers
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Salaried professionals represent a unique demographic in NBFC retail lending. Because salaried borrowers provide employer details, official email addresses, and salary account bank statements during underwriting, recovery wings frequently leverage professional vulnerability and workplace embarrassment to force compliance.
            </p>
            <p>
              When a salaried employee faces involuntary job loss, corporate downsizing, unexpected pay cuts, or critical family healthcare crises, standard monthly EMIs become unsustainable. NBFCs initially assume the borrower is deliberately withholding payment while continuing to draw a salary.
            </p>
            <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 sm:p-5 my-4">
              <h4 className="font-bold text-blue-950 mb-2 text-sm sm:text-base">Strategic Steps for Salaried Borrowers Seeking Settlement:</h4>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>Document Involuntary Career Disruption:</strong> Submit the formal corporate relieving letter, termination notice, severance computation sheet, or statutory proof of salary reduction. This directly establishes unviability of original EMI terms under RBI&apos;s Prudential Compromise Norms.</li>
                <li><strong>Protect the Workplace Environment:</strong> If recovery agents unlawfully call office landlines, contact corporate HR desks, or show up at company premises, issue an immediate written cease-and-desist letter citing RBI&apos;s Master Direction on Recovery Agents (which strictly prohibits visiting workplaces or contacting colleagues).</li>
                <li><strong>Salary Account Defense:</strong> Ensure your operational salary account is held with a neutral scheduled commercial bank that has no lending relationship or lien authorization with the defaulted NBFC, preventing unauthorized ECS/NACH debit sweeps.</li>
                <li><strong>Terminal Benefit Utilization:</strong> If utilizing gratuity, provident fund payouts, or severance compensation for OTS, present the capital as a strictly one-time &quot;third-party family benevolence pool&quot; rather than personal wealth, anchoring negotiations to a clean 40% to 50% principal payoff.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 50 */}
        <section id="nbfc-loan-settlement-for-self-employed-borrowers" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 50</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            50. NBFC Loan Settlement for Self-Employed Borrowers
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Self-employed individuals, including independent consultants, retail traders, freelance practitioners, and service contractors, encounter distinct challenges during debt distress. Unlike salaried workers with predictable monthly slips, self-employed income is cyclical and subject to macroeconomic volatility, client contract terminations, and working capital blockages.
            </p>
            <p>
              NBFC underwriting for self-employed professionals frequently relies on banking turnover surrogates and GST return multiples. When turnover collapses, the NBFC&apos;s algorithms still record historic high revenues, leading settlement committees to doubt financial hardship claims unless substantiated with concrete accounting evidence.
            </p>
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Evidentiary Substantiation of Income Contraction:</h5>
                <p className="text-xs sm:text-sm text-slate-700">
                  Provide sequential GSTR-3B filings demonstrating a 50%+ reduction in gross taxable turnover over the preceding 6 to 12 months, accompanied by current CA-certified profit and loss statements reflecting operating deficits.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Client Invalidation &amp; Contract Cancellation Letters:</h5>
                <p className="text-xs sm:text-sm text-slate-700">
                  Furnish verified documentary proof of major vendor contract cancellations, delayed client receivables, or disputed commercial invoices that directly triggered the liquidity freeze.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Separation of Personal and Commercial Liabilities:</h5>
                <p className="text-xs sm:text-sm text-slate-700">
                  Clarify whether the loan was extended in personal capacity or tied to proprietary commercial trade names, ensuring cross-collateralization clauses do not threaten essential tools of trade or professional equipment protected under Section 60 of the CPC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 51 */}
        <section id="nbfc-loan-settlement-for-business-owners" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 51</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            51. NBFC Loan Settlement for Business Owners
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Enterprise borrowers, including proprietors, partnership partners, and directors of private limited MSMEs, frequently utilize unsecured NBFC business installment loans (BIL), machinery credit lines, or merchant cash advances. Because commercial credit limits can range from ₹10 Lakhs to several Crores, NBFCs employ specialized enterprise recovery teams backed by corporate legal wings.
            </p>
            <p>
              When an enterprise enters financial distress due to supply chain breakdown, regulatory disruptions, or customer insolvencies, negotiating a structured business loan settlement demands a comprehensive corporate financial defense:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>MSME Samadhaan &amp; Udyam Registration:</strong> Utilize your Udyam registration status to invoke RBI&apos;s MSME restructuring and settlement framework. NBFCs are encouraged under central guidelines to explore viable compromise paths for genuine stressed MSMEs before declaring non-cooperative status.</li>
                <li><strong>Audited Balance Sheet Deficits:</strong> Present audited financial statements displaying depleted net worth, negative EBITDA, and operational liabilities that exceed enterprise realizable assets. Demonstrating that liquidation would generate near-zero recovery creates compelling justification for a 50% to 70% OTS approval.</li>
                <li><strong>Director/Partner Guarantee Mitigation:</strong> Unsecured business loans almost universally mandate personal guarantees from directors or promoters. An effective OTS must explicitly include full discharge of personal guarantee liability alongside corporate debt extinguishment to insulate personal residences and assets.</li>
                <li><strong>Preventing Preemptive Insolvency Filings:</strong> For corporate entities where debt exceeds ₹1 Crore, NBFCs may threaten proceedings under Section 7 of the IBC before the NCLT. Timely structured settlement negotiations avoid costly insolvency proceedings and preserve operational continuity.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 52 */}
        <section id="nbfc-loan-settlement-with-banks-vs-nbfcs" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 52</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            52. NBFC Loan Settlement With Banks vs NBFCs
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              While both Scheduled Commercial Banks (SCBs) and Non-Banking Financial Companies (NBFCs) are regulated by the Reserve Bank of India, their internal governance structures, balance sheet incentives, and settlement approval workflows differ fundamentally:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-3 border border-slate-200 font-bold">Parameter</th>
                    <th className="p-3 border border-slate-200 font-bold">Commercial Banks</th>
                    <th className="p-3 border border-slate-200 font-bold">NBFCs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">Regulatory Vigilance</td>
                    <td className="p-3 border border-slate-200">Public sector banks face strict oversight from CVC and CAG, making officers hesitant to grant large haircuts without extensive committees.</td>
                    <td className="p-3 border border-slate-200">Board-governed private capital; officers operate with agile commercial mandates to clean balance sheets swiftly.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">Speed of Decision Making</td>
                    <td className="p-3 border border-slate-200">Lengthy multi-tiered approval hierarchy; OTS files can take 60 to 120 days for committee ratification.</td>
                    <td className="p-3 border border-slate-200">Rapid turnaround; settlement decisions can be sanctioned within 7 to 21 business days by designated regional committees.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">Haircut Flexibility</td>
                    <td className="p-3 border border-slate-200">Rigid internal formulas linked to historical provisioning; waivers on pure principal are difficult to secure.</td>
                    <td className="p-3 border border-slate-200">Substantially higher flexibility; will consider 40% to 65% discounts on principal for deeply aged, uncollectible loss portfolios.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">Recovery Methods</td>
                    <td className="p-3 border border-slate-200">Primarily formal legal notices, Lok Adalat summons, DRT filings, and institutional empanelled agencies.</td>
                    <td className="p-3 border border-slate-200">Aggressive telecalling networks, digital trace mechanisms, outsourced agency visits, and fast-track private arbitration.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Understanding these operational distinctions enables borrowers to adjust their negotiation strategy—anticipating faster resolutions and higher haircut potential with NBFCs while maintaining strict compliance vigilance.
            </p>
          </div>
        </section>

        {/* SECTION 53 */}
        <section id="nbfc-loan-settlement-with-digital-and-fintech-lenders" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 53</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            53. NBFC Loan Settlement With Digital and Fintech Lenders
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              The emergence of digital lending applications (DLAs) and fintech aggregators operating under Lending Service Provider (LSP) partnerships with registered NBFCs has transformed consumer credit. While onboarding is frictionless, recovery and collection workflows often exhibit intense digital aggressiveness when defaults occur.
            </p>
            <p>
              Settling debt with digital and fintech lenders requires understanding the relationship between the front-end application and the underlying regulated balance-sheet lender:
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 my-4">
              <h4 className="font-bold text-amber-950 mb-2 text-sm sm:text-base">Essential Safeguards for Fintech &amp; App-Based Settlements:</h4>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-amber-900">
                <li><strong>Identify the Real Regulated Entity (RE):</strong> The mobile application displayed on your smartphone is usually merely a technology vendor (LSP). Check your loan sanction letter to identify the actual RBI-registered NBFC backing the capital. All formal settlement correspondence and payments must be directed to the NBFC, never to an unauthorized third-party fintech account.</li>
                <li><strong>Enforce the RBI Digital Lending Guidelines (2022):</strong> The RBI Digital Lending Directive strictly prohibits unauthorized contact access, photo scraping, or harassment of phone contacts. Any violation should be countered with formal complaints to the NBFC&apos;s Principal Nodal Officer and the RBI Sachet portal, creating substantial leverage for a favorable settlement.</li>
                <li><strong>Reject In-App UPI Payment Links for Settlement:</strong> App recovery agents frequently send WhatsApp UPI payment links promising &quot;instant closure.&quot; These links often route funds into general recovery pools without closing the loan record. Demand a signed, official settlement sanction letter on NBFC letterhead before initiating any transfer.</li>
                <li><strong>Mandate Credit Bureau Update Commitments:</strong> Fintech lenders report delinquencies rapidly to credit bureaus via automated APIs. Ensure the settlement letter explicitly states that the NBFC will report the account as &apos;Settled&apos; or &apos;Closed&apos; to CIBIL, Experian, CRIF, and Equifax within the mandatory 30-day statutory window.</li>
              </ul>
            </div>
          </div>
        </section>
\n
        {/* SECTION 54 */}
        <section id="how-to-choose-an-nbfc-loan-settlement-company" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 54</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            54. How to Choose an NBFC Loan Settlement Company
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Navigating debt distress and hostile recovery practices can be overwhelming for individual borrowers. Engaging a professional debt settlement and legal advisory firm can provide critical institutional insulation, legal defense, and structured negotiation leverage. However, the market also contains unregulated operators and fraudulent intermediaries making unrealistic claims.
            </p>
            <p>
              When evaluating an NBFC debt settlement firm, verify the following core institutional criteria:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>In-House Legal Infrastructure:</strong> Ensure the firm employs qualified advocates admitted to State Bar Councils who can actively draft legal replies to Section 138 notices, defend against Section 25 PSSA complaints, and enter appearances before arbitration tribunals. Pure telemarketing agencies cannot represent your legal interests.</li>
                <li><strong>Transparent Fee Structure:</strong> Reputable advisory firms operate on documented retainers and performance-based success fees pegged strictly to actual savings achieved. Avoid any entity demanding large upfront percentages of your total outstanding without clear contractual milestones.</li>
                <li><strong>Direct Settlement Directives:</strong> Legitimate firms never instruct you to deposit settlement principal funds into their corporate accounts. All compromise payments must be remitted directly to the NBFC&apos;s verified institutional loan account.</li>
                <li><strong>Absence of False Credit Promises:</strong> Reputable legal advisors are transparent regarding credit bureau implications. Any company promising to &quot;erase your default from CIBIL within 48 hours&quot; or guarantee a 800+ score immediately following an OTS is engaging in unlawful misrepresentation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 55 */}
        <section id="nbfc-loan-settlement-company-vs-direct-negotiation" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 55</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            55. NBFC Loan Settlement Company vs Direct Negotiation
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Borrowers facing debt distress often weigh the pros and cons of negotiating directly with the NBFC versus retaining professional legal and settlement counsel:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-3 border border-slate-200 font-bold">Negotiation Vector</th>
                    <th className="p-3 border border-slate-200 font-bold">Direct Self-Negotiation</th>
                    <th className="p-3 border border-slate-200 font-bold">Professional Settlement Counsel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">Harassment Protection</td>
                    <td className="p-3 border border-slate-200">Borrower absorbs continuous telecalling, unannounced home visits, and psychological pressure directly.</td>
                    <td className="p-3 border border-slate-200">All communications are routed through formal legal channels; formal cease-and-desist notices shield personal life.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">Legal Notice Defense</td>
                    <td className="p-3 border border-slate-200">High risk of missed statutory deadlines under Section 138 NI Act or ex-parte awards in private arbitration.</td>
                    <td className="p-3 border border-slate-200">Qualified legal team files timely replies, challenges biased arbitral appointments, and files jurisdictional objections.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">Haircut Optimization</td>
                    <td className="p-3 border border-slate-200">Often limited to 20-30% discounts as collection agents exploit the borrower&apos;s lack of policy knowledge.</td>
                    <td className="p-3 border border-slate-200">Secures 45% to 70% haircuts by leveraging internal RBI provisioning rules, loss-asset categorizations, and formal credit committee escalations.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">Documentation Integrity</td>
                    <td className="p-3 border border-slate-200">Risk of paying based on fake agency letters or receiving ambiguous settlement receipts that leave debt open.</td>
                    <td className="p-3 border border-slate-200">Meticulous legal vetting of sanction letters, secure direct payment workflows, and guaranteed acquisition of clean No Dues Certificates.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 56 */}
        <section id="nbfc-loan-settlement-fees-and-charges" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 56</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            56. NBFC Loan Settlement Fees and Charges
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              A transparent understanding of the economic costs associated with loan settlement helps borrowers plan their finances effectively. There are two primary categories of fees involved:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">1. Settlement Amounts Paid to the NBFC</div>
                <p className="text-xs sm:text-sm text-slate-700 mb-2">
                  This is the negotiated compromise capital paid directly into your loan account. Under RBI rules, an authentic OTS letter waives 100% of accumulated penal charges, late fees, and overdue interest margins, leaving only the mutually agreed principal settlement figure.
                </p>
                <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 p-2 rounded">
                  Rule: Never pay cash to collection agents; always obtain a receipt directly in the loan account statement.
                </div>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">2. Professional Advisory &amp; Legal Fees</div>
                <p className="text-xs sm:text-sm text-slate-700 mb-2">
                  When engaging professional legal counsel, industry-standard billing structures typically include an onboarding legal retainer (covering anti-harassment notices and legal replies) plus a success-based advisory fee (typically 8% to 15% of the total amount saved on your outstanding).
                </p>
                <div className="text-[11px] text-blue-800 font-semibold bg-blue-50 p-2 rounded">
                  Example: If outstanding is ₹10 Lakhs and settled for ₹4 Lakhs, you save ₹6 Lakhs, providing substantial net economic benefit even after advisory fees.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 57 */}
        <section id="what-happens-after-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 57</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            57. What Happens After NBFC Loan Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Successfully transferring the agreed settlement amount to the NBFC is a major milestone, but formal debt closure requires completing critical post-settlement steps:
            </p>
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Immediate Halting of Collection Activities</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Within 24 to 48 hours of settlement fund credit, the NBFC must de-assign your file from all third-party recovery agencies, permanently terminating telecalls, visits, and SMS payment reminders.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Withdrawal of Active Legal Proceedings</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  The NBFC&apos;s legal department must file formal withdrawal or compromise applications before the relevant judicial forums—withdrawing Section 138 complaints from the Magistrate Court and terminating ongoing arbitration proceedings.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Deactivation of Banking Mandates (NACH / e-Mandate)</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  The NBFC must cancel active auto-debit mandates across the NPCI NACH gateway. As a safeguard, borrowers should also submit a copy of the settlement letter to their bank to cancel the mandate on their end.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Issuance of Statutory No Dues Certificate (NDC)</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  The NBFC must issue a formal No Dues Certificate or Loan Closure Confirmation, typically delivered via physical courier and registered email within 15 to 30 working days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 58 */}
        <section id="nbfc-settlement-letter-and-no-dues-certificate" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 58</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            58. NBFC Settlement Letter and No-Dues Certificate
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Borrowers must distinguish clearly between an <strong>OTS Sanction Letter</strong> and a <strong>No Dues Certificate (NDC)</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="border border-blue-200 rounded-xl p-4 bg-blue-50/40">
                <div className="font-bold text-blue-950 text-sm sm:text-base mb-1">OTS Sanction Letter (Pre-Payment)</div>
                <p className="text-xs sm:text-sm text-slate-700 mb-2">
                  This document establishes the terms of the settlement agreement. It must specify:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
                  <li>Exact Loan Account Number and primary borrower name</li>
                  <li>Original contractual outstanding vs agreed settlement amount</li>
                  <li>Payment deadlines and approved institutional bank account details</li>
                  <li>Clause confirming that upon receipt of payment, the loan will be fully extinguished with no residual claim</li>
                  <li>Signature and designation of an authorized officer of the NBFC</li>
                </ul>
              </div>
              <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50/40">
                <div className="font-bold text-emerald-950 text-sm sm:text-base mb-1">No Dues Certificate (Post-Payment)</div>
                <p className="text-xs sm:text-sm text-slate-700 mb-2">
                  Issued after settlement funds have cleared. It certifies that:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
                  <li>The borrower has paid the agreed settlement consideration in full</li>
                  <li>The NBFC retains zero outstanding claims or liens against the borrower</li>
                  <li>All pledged securities or collateral (if any) are released</li>
                  <li>The account has been closed in the institution&apos;s core banking system (CBS)</li>
                  <li>Updated status will be transmitted to all four credit bureaus</li>
                </ul>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-amber-900 bg-amber-50 p-3 rounded-lg border border-amber-200">
              <strong>Crucial Rule:</strong> Store physical and scanned digital copies of both the OTS Sanction Letter and the No Dues Certificate permanently. If a third-party asset reconstruction company (ARC) attempts to re-demand settled debt years later, these documents serve as your absolute legal shield.
            </p>
          </div>
        </section>

        {/* SECTION 59 */}
        <section id="how-to-check-nbfc-loan-settlement-status-on-your-credit-report" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 59</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            59. How to Check NBFC Loan Settlement Status on Your Credit Report
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under RBI mandates, all regulated NBFCs must report monthly portfolio updates to India&apos;s four licensed Credit Information Companies (CIBIL, Experian, CRIF High Mark, and Equifax). Between 45 and 60 days following settlement payment, borrowers should inspect their credit reports across all bureaus to verify accurate reporting.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Key Account Indicators to Verify on Your Credit Report:</h4>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>Current Balance / Amount Overdue:</strong> The &apos;Current Balance&apos; and &apos;Amount Overdue&apos; fields must show exactly <strong>₹0</strong>. If any balance appears, the NBFC has improperly recorded the payment as a partial recovery rather than an agreed settlement.</li>
                <li><strong>Account Status:</strong> The status must reflect <strong>&apos;Settled&apos;</strong> (or &apos;Post-Write-Off Settled&apos;). It should NOT display &apos;Written Off&apos;, &apos;Willful Default&apos;, or &apos;Active Default&apos;.</li>
                <li><strong>Date of Last Payment &amp; Closed Date:</strong> Ensure the &apos;Date Closed&apos; field matches your final settlement payment date, terminating the delinquency timeline and halting further DPD counter progression.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 60 */}
        <section id="how-to-correct-incorrect-credit-bureau-reporting" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 60</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            60. How to Correct Incorrect Credit Bureau Reporting
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              It is common for NBFC operational teams to misreport settled accounts—either failing to update the balance to zero or leaving the account flagged as an active default. Borrowers have statutory rights under the Credit Information Companies (Regulation) Act, 2005 (CICRA) to enforce prompt data rectification:
            </p>
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Step 1: Initiate an Online Bureau Dispute</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Log into the official dispute resolution portals of CIBIL, Experian, CRIF, and Equifax. Select the disputed NBFC account, highlight the erroneous &apos;Amount Overdue&apos; or incorrect status, and submit a formal dispute with your unique report control number (ECN / Control ID).
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Step 2: Formal Grievance Escalation to the NBFC</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Email the NBFC&apos;s Principal Nodal Officer (PNO) and Credit Bureau Operations team with copies of your OTS Sanction Letter, bank debit statement, and No Dues Certificate. Demand submission of an updated monthly commercial file to the credit bureaus within 15 days.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Step 3: RBI Ombudsman Complaint Under Section 11 of CICRA</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Under RBI directives, credit institutions must resolve bureau reporting errors within 30 days. If the NBFC fails to correct the data within this statutory timeframe, lodge a formal complaint on the RBI CMS portal (cms.rbi.org.in). The RBI Ombudsman can award compensation of ₹100 per day of delay for unjustified bureau reporting failures.
                </p>
              </div>
            </div>
          </div>
        </section>
\n
        {/* SECTION 61 */}
        <section id="nbfc-loan-settlement-and-personal-guarantees" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 61</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            61. NBFC Loan Settlement and Personal Guarantees
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              In many NBFC credit facilities—especially high-ticket unsecured personal loans, business loans, and MSME machinery lines—the lender mandates the execution of a separate Deed of Personal Guarantee by a family member, business partner, or enterprise director. Under Section 128 of the Indian Contract Act, 1872, the liability of the surety is co-extensive with that of the principal debtor, meaning the NBFC can proceed against the guarantor without first exhausting remedies against the primary borrower.
            </p>
            <p>
              This co-extensive liability creates a dangerous trap during unstructured settlements: if a borrower settles their primary loan without an explicit contractual release of the guarantor, the NBFC may attempt to pursue the guarantor for the waived &quot;haircut&quot; balance.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Mandatory Guarantor Safeguards in Settlement Documentation:</h4>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>Tripartite Settlement Sanction:</strong> The OTS approval letter must explicitly name both the principal borrower and all personal guarantors, affirming that payment of the compromise amount discharges all parties simultaneously.</li>
                <li><strong>Invocation of Section 135 (Indian Contract Act):</strong> Under Section 135, any contract between the creditor and the principal debtor to compound or grant time discharges the surety, unless the surety assents. Incorporating this provision ensures the guarantee deed is rendered void and unenforceable upon settlement execution.</li>
                <li><strong>Physical Return of Guarantee Instruments:</strong> Demand the return or formal written cancellation of all original guarantee deeds, undated cheques, and promissory notes executed by the guarantor at the time of loan underwriting.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 62 */}
        <section id="nbfc-loan-settlement-and-co-borrowers" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 62</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            62. NBFC Loan Settlement and Co-Borrowers
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              A co-borrower is a joint signatory who bears equal, primary liability for the entire debt. Unlike a guarantor, whose obligation arises upon default, a co-borrower is jointly and severally liable from loan inception. Consequently, any default, restructuring, or settlement reflects simultaneously on the credit bureau files of both the primary applicant and the co-applicant.
            </p>
            <p>
              When navigating an NBFC loan settlement involving a spouse, parent, or business partner as co-borrower:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Dual Credit Bureau Impact</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  The &apos;Settled&apos; account status will appear on both individuals&apos; credit profiles. Both parties will experience an equivalent score drop and credit cooling period, which must be factored into household financial planning.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Mandatory Joint Execution</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  The settlement proposal letter and final acceptance must be signed by all co-borrowers. An agreement signed by only one party leaves the non-signing co-borrower exposed to potential collection claims for the remaining balance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 63 */}
        <section id="nbfc-loan-settlement-and-collateral-security" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 63</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            63. NBFC Loan Settlement and Collateral/Security
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              For secured NBFC credit facilities—such as loans against property (LAP), gold loans, or secured business working capital—the lender holds a registered mortgage, pledge, or hypothecation charge over tangible physical assets. Negotiating a settlement on secured debt involves distinct considerations compared to unsecured loans:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>Haircut Constraints:</strong> Because the NBFC can enforce its security interest through SARFAESI proceedings (for qualifying registered NBFCs with loan limits above statutory thresholds), haircuts are typically narrower (10% to 25% on accumulated interest and penalties) unless the property has defective title, valuation challenges, or legal disputes.</li>
                <li><strong>Formal Release of Charge with CERSAI:</strong> Following settlement payment, the NBFC must satisfy its registered charge on the Central Registry of Securitisation Asset Reconstruction and Security Interest of India (CERSAI) portal within 30 days, as mandated by RBI regulations.</li>
                <li><strong>Return of Original Title Deeds:</strong> Under RBI&apos;s September 2023 Master Direction on Release of Movable/Immovable Property Documents, the NBFC must return all original property title deeds within 30 days of full settlement payment. Failure to do so incurs mandatory statutory compensation of ₹5,000 per day of delay payable to the borrower.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 64 */}
        <section id="nbfc-loan-settlement-and-vehicle-repossession" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 64</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            64. NBFC Loan Settlement and Vehicle Repossession
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              In auto, commercial vehicle, and two-wheeler loans, the vehicle remains hypothecated to the NBFC until the loan is fully satisfied. In the event of default, recovery divisions often attempt direct vehicle repossession. However, the Supreme Court of India in <em>ICICI Bank v. Shanti Devi Sharma</em> and subsequent precedents has established that lenders cannot use force, hire musclemen, or intercept vehicles on public highways to execute repossessions.
            </p>
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Mandatory Repossession Notice Protocol:</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  The NBFC must issue a pre-repossession notice granting a minimum statutory cure window (typically 7 to 14 days), followed by an inventory sheet signed at the time of surrender, and a post-repossession notice providing a final pre-sale redemption window.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Pre-Auction Settlement Opportunity:</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  If the vehicle has been surrendered or repossessed, you retain the legal right to propose an OTS prior to public auction. If your settlement offer matches or exceeds the vehicle&apos;s distressed market valuation (after deducting yard parking and auctioneer commissions), the NBFC credit committee will frequently accept the settlement and release the vehicle.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Form 35 and RTO Hypothecation Removal:</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Upon settlement execution, ensure the NBFC issues duplicate original copies of <strong>Form 35</strong> along with a clean NOC addressed to the relevant Regional Transport Office (RTO), enabling removal of the hypothecation endorsement from your vehicle Registration Certificate (RC).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 65 */}
        <section id="nbfc-loan-settlement-and-cheque-bounce-cases" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 65</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            65. NBFC Loan Settlement and Cheque Bounce Cases
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Many NBFCs require borrowers to provide post-dated cheques (PDCs) or security cheques at the time of loan onboarding. If an EMI defaults, the NBFC may deposit one of these cheques. When returned dishonored with memos such as &apos;Funds Insufficient&apos; or &apos;Account Closed&apos;, the NBFC initiates criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881.
            </p>
            <p>
              It is critical to recognize that a Section 138 proceeding is a quasi-criminal complaint carrying potential imprisonment of up to two years, a fine of up to double the cheque amount, or both. However, because Section 138 offenses are compoundable under Section 147 of the NI Act, loan settlement serves as a direct legal mechanism to compound the offense and quash the criminal case.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 my-4">
              <h4 className="font-bold text-amber-950 mb-2 text-sm sm:text-base">Cheque Bounce Case Compounding Protocol:</h4>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-amber-900">
                <li>Never pay settlement funds under an informal verbal assurance that &apos;the cheque case will be dropped.&apos;</li>
                <li>Demand that the NBFC advocate sign a joint compromise petition or withdrawal memo to be filed before the Metropolitan Magistrate or Judicial Magistrate First Class (JMFC) simultaneously with settlement fund clearance.</li>
                <li>Ensure the compounding order is recorded in the official court order sheet, formally acquitting or discharging the accused borrower.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 66 */}
        <section id="nbfc-loan-settlement-and-section-138-of-the-ni-act" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 66</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            66. NBFC Loan Settlement and Section 138 of the NI Act
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              To maintain an effective legal defense during Section 138 proceedings while negotiating an NBFC settlement, borrowers must understand the strict statutory timeline governing cheque dishonor complaints:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-3 border border-slate-200 font-bold">Statutory Milestone</th>
                    <th className="p-3 border border-slate-200 font-bold">Legal Time Window</th>
                    <th className="p-3 border border-slate-200 font-bold">Borrower Legal Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">Statutory Demand Notice</td>
                    <td className="p-3 border border-slate-200">NBFC must issue within 30 days of receiving bank dishonor memo.</td>
                    <td className="p-3 border border-slate-200">File a detailed legal reply through counsel within 15 days, contesting excessive penal interest and demonstrating willingness to resolve.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">15-Day Cure Window</td>
                    <td className="p-3 border border-slate-200">Borrower has 15 calendar days from receipt of notice to pay.</td>
                    <td className="p-3 border border-slate-200">Initiate formal settlement discussions; if resolved within this window, no criminal cause of action arises under law.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-semibold">Criminal Complaint Filing</td>
                    <td className="p-3 border border-slate-200">NBFC must file complaint within 30 days after expiry of cure window.</td>
                    <td className="p-3 border border-slate-200">Track court portal for summons. Never ignore summons; appear through counsel and request referral to the National Lok Adalat for settlement.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Resolving Section 138 matters through National Lok Adalats is highly advantageous: under Supreme Court directives in <em>Damodar S. Prabhu v. Sayed Babalal H.</em>, compounding at early stages avoids heavy statutory graded costs.
            </p>
          </div>
        </section>

        {/* SECTION 67 */}
        <section id="tax-and-financial-implications-of-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 67</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            67. Tax and Financial Implications of NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              When an NBFC writes off a portion of your outstanding loan as a settlement haircut, the tax treatment of the forgiven debt depends significantly on whether the loan was taken in an individual personal capacity or for commercial enterprise purposes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Retail Personal Loans (Individual Taxpayers)</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Under the Income Tax Act, 1961, the waiver of a pure personal loan taken for personal consumption, medical emergencies, or education is treated as a capital receipt. It does <strong>not</strong> constitute taxable income under Section 28(iv) or Section 56(2)(x), meaning individual salaried borrowers do not owe income tax on the forgiven amount.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Commercial &amp; Business Loans (Enterprises)</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  For businesses and proprietary entities, the tax treatment depends on how the borrowed funds were used. If the loan funded working capital and interest was claimed as a tax deduction in prior years, the waiver may be treated as remission of trading liability under Section 41(1) and taxed as business profits. Conversely, waiver of loans utilized exclusively for capital asset acquisition is generally treated as a capital receipt.
                </p>
              </div>
            </div>
            <p>
              Business owners should consult their Chartered Accountant to ensure appropriate accounting disclosures in their balance sheets following an NBFC debt settlement.
            </p>
          </div>
        </section>
\n
        {/* SECTION 68 */}
        <section id="common-mistakes-to-avoid-during-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 68</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            68. Common Mistakes to Avoid During NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Navigating debt settlement without experienced guidance often leads borrowers into costly traps that compromise both their finances and legal standing:
            </p>
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/30">
                <div className="font-bold text-red-950 text-sm sm:text-base mb-1">Mistake 1: Relying on Verbal Assurances or Unverified WhatsApp Messages</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Recovery agents routinely promise that paying a specific amount will &quot;close the file.&quot; Unless backed by an official, signed OTS sanction letter on the NBFC&apos;s corporate letterhead with an authorized digital signature, such verbal agreements are legally unenforceable.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/30">
                <div className="font-bold text-red-950 text-sm sm:text-base mb-1">Mistake 2: Paying Token Installments to Third-Party Accounts</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Never transfer funds via personal UPI IDs, third-party agency accounts, or cash to visiting collection agents. All payments must be deposited directly into your designated institutional loan account number at the NBFC.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/30">
                <div className="font-bold text-red-950 text-sm sm:text-base mb-1">Mistake 3: Prematurely Liquidating Retirement Assets</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Liquidating your Employee Provident Fund (EPF), Public Provident Fund (PPF), or life insurance policies to pay inflated interest penalties is unnecessary. Under Section 60 of the Code of Civil Procedure (CPC), PF balances and essential life policies are legally protected from judicial attachment.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/30">
                <div className="font-bold text-red-950 text-sm sm:text-base mb-1">Mistake 4: Ignoring Formal Legal Notices and Court Summons</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Ignoring legal notices under Section 138 of the NI Act or arbitration proceedings can lead to non-bailable warrants or ex-parte awards. Always respond through qualified legal counsel while pursuing settlement discussions in parallel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 69 */}
        <section id="nbfc-loan-settlement-scams-and-fraud" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 69</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            69. NBFC Loan Settlement Scams and Fraud
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Debt-stressed borrowers are prime targets for fraudulent syndicates operating online. Familiarize yourself with common loan settlement scams to protect your finances:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">The &apos;CIBIL Erase&apos; Scam</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Fraudulent operators claim to have &quot;internal connections&quot; at CIBIL or the RBI who can wipe your default history for an upfront fee of ₹15,000 to ₹50,000. Under CICRA, no third party can manually alter credit bureau records without authorized institutional data feeds from the lender.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Counterfeit Settlement Letter Scams</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Rogue collection agents generate fake settlement letters using scanned NBFC logos, directing payments to unauthorized UPI IDs or fictitious accounts. Verify every settlement letter directly through the NBFC&apos;s official customer care portal or branch before making any payment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 70 */}
        <section id="can-you-get-another-loan-after-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 70</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            70. Can You Get Another Loan After NBFC Loan Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              The short answer is <strong>yes, but not immediately</strong>. Following an NBFC loan settlement, credit bureaus report the account status as &apos;Settled&apos;, and your credit score typically drops into the 550 to 650 range. During the initial 12 to 24 months, Tier-1 scheduled commercial banks will generally decline automated, unsecured loan applications.
            </p>
            <p>
              However, credit eligibility follows a predictable rehabilitation trajectory over time:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>Months 1 to 12 (Cooling Period):</strong> Unsecured credit lines remain inaccessible. Focus on opening a secured credit card backed by a Fixed Deposit (FD) and maintaining 100% on-time payments to initiate score rehabilitation.</li>
                <li><strong>Months 13 to 24 (Initial Recovery):</strong> With consistent on-time payment history on secured credit, your score can rise toward 700. Tier-2 NBFCs and fintech lenders become open to micro-credit or consumer durable financing.</li>
                <li><strong>Months 25 to 36 (Full Rehabilitation):</strong> As the settlement event ages and healthy credit habits are demonstrated, mainstream lenders will consider auto loans, secured business credit, and home loan applications (provided loan-to-value ratios and income metrics are strong).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 71 */}
        <section id="can-you-get-a-loan-from-an-nbfc-after-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 71</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            71. Can You Get a Loan From an NBFC After Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Borrowers are often surprised to learn that securing subsequent credit from a <em>different</em> NBFC is often achievable sooner than from a traditional public sector bank. NBFCs utilize risk-based pricing algorithms that evaluate holistic factors—such as bank statement cash flows, GST filings, and employment stability—rather than relying solely on CIBIL scores.
            </p>
            <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 sm:p-5 my-4">
              <h4 className="font-bold text-blue-950 mb-2 text-sm sm:text-base">Rules for Securing Future NBFC Financing:</h4>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>Avoid the Settled NBFC Group:</strong> Never apply to the same NBFC group where you settled. Your name will remain permanently flagged on their internal negative list, regardless of your credit score recovery elsewhere.</li>
                <li><strong>Offer Collateral or Commercial Security:</strong> NBFCs readily extend loans against gold, property (LAP), or liquid securities even with a settled record on your credit file, as the physical asset mitigates credit risk.</li>
                <li><strong>Expect Risk-Adjusted Interest Rates:</strong> In the early post-settlement phase, NBFCs may price unsecured credit 2% to 4% higher than standard rack rates. Maintaining timely payments on these facilities helps accelerate score rebuilding.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 72 */}
        <section id="how-to-rebuild-your-financial-profile-after-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 72</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            72. How to Rebuild Your Financial Profile After Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Rebuilding your financial health following a debt settlement is a deliberate, structured process. Follow this proven four-pillar financial recovery roadmap:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Pillar 1: Build an Emergency Reserve</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Prioritize saving 3 to 6 months of essential living expenses in a liquid bank deposit. Having an emergency cushion prevents future credit dependency when unforeseen expenses arise.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Pillar 2: Maintain a Secured Credit Line</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Open an FD-backed credit card with a deposit of ₹25,000 to ₹50,000. Keep your credit utilization ratio strictly below 30% and ensure the bill is paid in full every month before the due date.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Pillar 3: Clean Banking Hygiene</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Ensure your primary operational bank account shows zero outward cheque bounces, NACH return charges, or minimum balance penalties over an unbroken 12-month period.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">Pillar 4: Regular Credit Bureau Audits</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Review your credit reports from all four bureaus every quarter. Verify that no erroneous balances linger and track your gradual score progression toward 750+.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 73 */}
        <section id="common-nbfc-loan-settlement-scenarios-and-solutions" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 73</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            73. Common NBFC Loan Settlement Scenarios and Solutions
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Real-world settlement negotiations encounter varied operational dynamics. Here are solutions for three of the most common borrower scenarios:
            </p>
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Scenario A: The NBFC Assigned the Loan to an Asset Reconstruction Company (ARC)</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Solution:</strong> ARCs acquire distressed debt portfolios at substantial discounts (often 20 to 30 paise on the rupee). When dealing with an ARC, leverage their low acquisition cost to negotiate favorable settlements—typically 30% to 45% of the principal—while ensuring the ARC delivers a valid No Dues Certificate.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Scenario B: You Received a Section 138 Notice While Inactive for 6 Months</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Solution:</strong> Do not panic or ignore the notice. Have legal counsel issue a formal reply within 15 days, explaining that the default was involuntary due to financial distress and proposing a structured one-time settlement. This documentation protects against ex-parte proceedings and sets the stage for a court-approved compromise.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Scenario C: Digital Lending App Harassing Phone Contacts</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Solution:</strong> File immediate complaints on the RBI Sachet portal and the National Cyber Crime portal (cybercrime.gov.in). Submit copies of these filings to the NBFC&apos;s Principal Nodal Officer, demanding immediate cessation of unlawful collection practices under RBI&apos;s Digital Lending Guidelines as a precondition to settlement talks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 74 */}
        <section id="dos-and-donts-during-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 74</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            74. Do&apos;s and Don&apos;ts During NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="border border-emerald-200 bg-emerald-50/30 rounded-xl p-4">
                <div className="font-bold text-emerald-950 text-sm sm:text-base mb-2">DO&apos;s</div>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-emerald-900">
                  <li>Maintain all settlement correspondence in writing (emails, speed posts, registered letters).</li>
                  <li>Verify that the settlement sanction letter contains the exact loan number, agreed amount, and authorized signatory.</li>
                  <li>Deposit all settlement funds directly into your designated institutional NBFC loan account.</li>
                  <li>Obtain a formal No Dues Certificate and verify that credit bureau records reflect ₹0 balance within 60 days.</li>
                  <li>Respond promptly through legal counsel to any statutory court notices or summons.</li>
                </ul>
              </div>
              <div className="border border-red-200 bg-red-50/30 rounded-xl p-4">
                <div className="font-bold text-red-950 text-sm sm:text-base mb-2">DON&apos;Ts</div>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-red-900">
                  <li>Never pay cash or transfer money to personal UPI IDs of collection agents.</li>
                  <li>Never accept verbal settlement assurances over phone calls without a written sanction letter.</li>
                  <li>Never ignore Section 138 NI Act notices or arbitration hearing summons.</li>
                  <li>Never deplete statutory retirement funds (EPF, PPF) to pay inflated penal charges.</li>
                  <li>Never fall for &apos;CIBIL repair&apos; agencies promising instant score erasure for upfront fees.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 75 */}
        <section id="frequently-asked-questions-about-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 75</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            75. Frequently Asked Questions About NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-4 text-xs sm:text-sm md:text-base">
            <div className="space-y-3">
              <details className="group border border-slate-200 rounded-xl bg-white p-4 open:bg-slate-50 transition-colors">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center text-sm sm:text-base">
                  <span>Is loan settlement with an NBFC legally valid in India?</span>
                  <span className="text-blue-600 font-bold transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="mt-3 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200 pt-3">
                  Yes, loan settlement is entirely legal. It is governed by the Reserve Bank of India&apos;s Prudential Framework for Resolution of Stressed Assets and the June 8, 2023 Guidelines on Compromise Settlements. An NBFC possesses the institutional authority to enter into a binding compromise agreement with any defaulting borrower.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-4 open:bg-slate-50 transition-colors">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center text-sm sm:text-base">
                  <span>Can an NBFC send recovery agents to my home or workplace?</span>
                  <span className="text-blue-600 font-bold transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="mt-3 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200 pt-3">
                  Under the RBI Master Direction on Fair Practices Code, recovery agents may only visit your residence between 08:00 AM and 07:00 PM, must carry official photo ID, and must respect borrower privacy. Agents are strictly prohibited from visiting workplaces unannounced, using abusive language, threatening family members, or causing public humiliation.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-4 open:bg-slate-50 transition-colors">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center text-sm sm:text-base">
                  <span>How much haircut can I realistically expect on an NBFC personal loan?</span>
                  <span className="text-blue-600 font-bold transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="mt-3 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200 pt-3">
                  For unsecured personal loans that have been classified as non-performing assets (NPA) for over 180 to 270 days, settlements typically settle between 35% and 55% of the total outstanding claim. 100% of penal charges, late fees, and overdue interest margins are typically waived, with concessions applied to the base principal amount depending on documented financial hardship.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-4 open:bg-slate-50 transition-colors">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center text-sm sm:text-base">
                  <span>Can I go to jail for defaulting on an NBFC loan?</span>
                  <span className="text-blue-600 font-bold transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="mt-3 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200 pt-3">
                  No. Defaulting on a commercial or retail loan is a civil matter, not a criminal offense. You cannot be arrested for inability to repay. However, if a cheque bounces (Section 138 NI Act) or an NACH mandate fails repeatedly, quasi-criminal proceedings can be initiated. Appearing through counsel and entering into a structured settlement quashes these proceedings.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-4 open:bg-slate-50 transition-colors">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center text-sm sm:text-base">
                  <span>Will a loan settlement permanently ruin my CIBIL score?</span>
                  <span className="text-blue-600 font-bold transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="mt-3 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200 pt-3">
                  No, the impact is not permanent. The &apos;Settled&apos; status will remain visible in your credit bureau history for up to 7 years, but its impact diminishes significantly over time. By maintaining timely payments on a secured credit card and building healthy banking habits, borrowers routinely rebuild their scores back to 750+ within 24 to 36 months.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* SECTION 76 */}
        <section id="professional-nbfc-loan-settlement-assistance" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 76</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            76. Professional NBFC Loan Settlement Assistance
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Navigating aggressive collection tactics while trying to negotiate complex financial terms with institutional credit committees requires professional expertise. CredSettle delivers comprehensive legal and financial advisory services tailored specifically to borrowers in distress:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Legal Anti-Harassment Defense</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Immediate issuance of formal representation notices and cease-and-desist letters to halting unlawful calls, home visits, and workplace intimidation.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Litigation Management</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Advocate representation for Section 138 notices, Section 25 PSSA complaints, and private arbitration hearings, preventing ex-parte orders.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <div className="font-bold text-blue-900 text-sm sm:text-base mb-1">Direct Committee Negotiation</div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Formal submission of hardship dossiers to authorized Zonal Settlement Committees, securing maximum legally sanctioned haircuts on pure principal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 77 */}
        <section id="why-choose-professional-nbfc-loan-settlement-services" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 77</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            77. Why Choose Professional NBFC Loan Settlement Services?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Choosing professional counsel levels the playing field between an individual borrower and institutional NBFC recovery departments:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>Statutory Policy Knowledge:</strong> Our legal strategists leverage RBI&apos;s Scale Based Regulations, the June 8, 2023 Compromise Framework, and established judicial precedents to anchor negotiations to pure principal figures.</li>
                <li><strong>Complete Peace of Mind:</strong> We handle incoming communications from recovery agencies, allowing you to focus on your professional and personal life without constant disruption.</li>
                <li><strong>Documented Legal Safety:</strong> Every settlement is verified, from the initial sanction letter to the final No Dues Certificate, ensuring permanent legal debt extinguishment without residual liabilities.</li>
                <li><strong>Maximized Financial Savings:</strong> Our structured negotiation approach consistently secures substantial waivers on penal interest and principal, yielding savings that far exceed advisory fees.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 78 */}
        <section id="nbfc-loan-settlement-complete-step-by-step-guide" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 78</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            78. NBFC Loan Settlement – Complete Step-by-Step Guide
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Here is the complete, end-to-end procedural workflow for executing a successful NBFC loan settlement:
            </p>
            <div className="space-y-3 my-4">
              <div className="flex gap-3 items-start p-3 bg-white border border-slate-200 rounded-xl">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">1</span>
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Comprehensive Portfolio Audit</div>
                  <p className="text-xs text-slate-600">Gather sanction letters, account statements, identify total principal vs penal interest layers, and audit active legal notices across all lenders.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-white border border-slate-200 rounded-xl">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">2</span>
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Establish Anti-Harassment Insulation</div>
                  <p className="text-xs text-slate-600">Issue formal legal representation notices to the NBFC, halting unannounced home visits and unauthorized communications under RBI Fair Practice norms.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-white border border-slate-200 rounded-xl">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">3</span>
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Prepare Financial Hardship Dossier</div>
                  <p className="text-xs text-slate-600">Compile documented proof of genuine financial distress (medical records, termination letters, GST filings) demonstrating permanent repayment impairment.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-white border border-slate-200 rounded-xl">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">4</span>
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Formal Proposal Submission &amp; Escalation</div>
                  <p className="text-xs text-slate-600">Submit a formal written settlement proposal to the NBFC&apos;s Zonal Credit Committee, anchoring the opening offer at 30% to 40% of the base principal.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-white border border-slate-200 rounded-xl">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">5</span>
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Vetting of Sanction Letter &amp; Payment</div>
                  <p className="text-xs text-slate-600">Meticulously verify the official OTS sanction letter. Remit settlement funds directly into your institutional loan account before the specified deadline.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-white border border-slate-200 rounded-xl">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">6</span>
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Closure, NDC &amp; Credit Bureau Rectification</div>
                  <p className="text-xs text-slate-600">Obtain the physical No Dues Certificate, confirm withdrawal of all legal proceedings, and verify ₹0 balance across all four credit bureaus.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 79 */}
        <section id="conclusion-understanding-nbfc-loan-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 79</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            79. Conclusion – Understanding NBFC Loan Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Defaulting on an NBFC loan is not a criminal failing—it is an economic consequence of unforeseen life events, medical emergencies, or commercial volatility. Under Indian law and the Reserve Bank of India&apos;s regulatory architecture, every borrower is entitled to dignity, fair recovery practices, and the legal mechanism of a compromise settlement to resolve unsustainable liabilities.
            </p>
            <p>
              A structured one-time settlement (OTS) offers an honorable, pragmatic exit path from debt distress. By understanding your statutory rights, insisting on verified written documentation, and executing negotiations strategically, you can eliminate debt burdens, extinguish legal exposure, and rebuild your financial future on stable ground.
            </p>

            {/* GRAND CONCLUSION CALLOUT CARD */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white mt-6 sm:mt-8 shadow-xl">
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">
                Take Control of Your NBFC Debt Today
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-blue-100 mb-5 leading-relaxed">
                You don&apos;t have to face aggressive recovery agents or mounting legal notices alone. CredSettle&apos;s team of experienced debt settlement advocates and financial strategists can help protect your rights, halt harassment, and negotiate maximum haircuts with your NBFC.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#lead-funnel"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-md"
                >
                  Start Your Free Hardship Assessment
                </a>
                <a
                  href="tel:+918800224757"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-700/60 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors border border-blue-400/30"
                >
                  Call +91 88002 24757
                </a>
              </div>
            </div>
          </div>
        </section>
\n
          </main>

          {/* Right Sticky Column (15%): Conversion & Regulatory Shield */}
          <aside className="hidden lg:block lg:col-span-2 sticky top-24 space-y-4">
            {/* Quick Assessment CTA Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm text-center">
              <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-xs mb-1">
                Facing NBFC Recovery Harassment?
              </h4>
              <p className="text-[11px] text-slate-600 mb-3 leading-relaxed">
                Senior advocates can issue immediate legal notices to halt calls, home visits, and defend Section 138 notices.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-colors shadow"
              >
                Free Hardship Review
              </a>
            </div>

            {/* Regulatory Shield Badges */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 text-[11px]">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-[10px] mb-1">
                Regulatory Standards
              </div>
              <div className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>RBI Master Direction Fair Practices Code</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>RBI June 8, 2023 Prudential OTS Norms</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Section 138 NI Act Compounding Defense</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>30-Day Mandatory Title Deed Release</span>
              </div>
            </div>

            {/* Direct Helpline */}
            <div className="bg-blue-900 text-white rounded-xl p-3 text-center">
              <div className="text-[10px] uppercase tracking-wider text-blue-200 mb-0.5">Direct Legal Desk</div>
              <a href="tel:+918800224757" className="font-bold text-xs flex items-center justify-center gap-1 hover:text-blue-200">
                <Phone className="w-3 h-3" /> +91 88002 24757
              </a>
            </div>
          </aside>

        </div>
      </div>

      {/* Floating Action Pill on Mobile */}
      {showFloatingNav && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden flex items-center gap-2 bg-slate-900/90 text-white backdrop-blur-md px-4 py-2 rounded-full shadow-2xl border border-white/20 text-xs">
          <button
            onClick={() => setIsMobileTocOpen(true)}
            className="flex items-center gap-1.5 font-bold hover:text-blue-300"
          >
            <Menu className="w-3.5 h-3.5" />
            <span>Chapters (79)</span>
          </button>
          <span className="w-px h-3.5 bg-slate-700" />
          <button
            onClick={() => {
              const el = document.getElementById('interactive-nbfc-settlement-calculator');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-1 text-yellow-300 font-semibold"
          >
            <Calculator className="w-3 h-3" />
            <span>Calc</span>
          </button>
          <span className="w-px h-3.5 bg-slate-700" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-slate-300 hover:text-white"
          >
            ↑ Top
          </button>
        </div>
      )}

      {/* Bottom Features */}
      <div className="max-w-[1600px] xl:max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-2 sm:px-4 md:px-6 my-10">
        <AuthorBioBox />
      </div>

      <Footer />
    </div>
  );
}
