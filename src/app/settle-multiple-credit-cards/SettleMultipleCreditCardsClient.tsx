'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
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

export default function SettleMultipleCreditCardsClient() {
  const [activeId, setActiveId] = useState<string>('intro-multiple-credit-card-settlement');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  const [showFloatingNav, setShowFloatingNav] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [tocSearch, setTocSearch] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Interactive Multi-Card Settlement Assessment Calculator State
  const [calcCardCount, setCalcCardCount] = useState<number>(4);
  const [calcTotalCardDebt, setCalcTotalCardDebt] = useState<number>(1200000);
  const [calcAvgAPR, setCalcAvgAPR] = useState<number>(45);
  const [calcDefaultStage, setCalcDefaultStage] = useState<string>('substandard');
  const [calcAvailableFunds, setCalcAvailableFunds] = useState<number>(400000);

  // Dynamic Calculation Logic
  const multiCardAnalysis = useMemo(() => {
    // In typical credit card default portfolios, ~50% is uncollected compounding interest & penalties
    const estimatedPrincipalSpend = Math.round(calcTotalCardDebt * 0.48);
    const estimatedFinancePenalties = calcTotalCardDebt - estimatedPrincipalSpend;

    let baseHaircutPct = 0.65; // 65% total statement haircut standard
    if (calcDefaultStage === 'fresh_default') {
      baseHaircutPct = 0.50;
    } else if (calcDefaultStage === 'hardcore_npa') {
      baseHaircutPct = 0.72;
    } else if (calcDefaultStage === 'post_legal') {
      baseHaircutPct = 0.75;
    }

    const targetSettlementTotal = Math.round(calcTotalCardDebt * (1 - baseHaircutPct));
    const totalSavings = calcTotalCardDebt - targetSettlementTotal;
    const effectiveDiscountPct = Math.round((totalSavings / calcTotalCardDebt) * 100);

    const recommendedPerCardBudget = Math.round(targetSettlementTotal / Math.max(1, calcCardCount));
    const canSettleAllImmediately = calcAvailableFunds >= targetSettlementTotal;

    let waterfallAdvice = 'Deploy available liquidity using Waterfall Method: settle Tier 1 salary bank card first, then clear remaining cards sequentially.';
    if (canSettleAllImmediately) {
      waterfallAdvice = 'Your mobilized funds are sufficient to execute simultaneous settlements across all ' + calcCardCount + ' cards. Negotiate concurrent closure letters.';
    } else {
      const cardsCovered = Math.max(1, Math.floor(calcAvailableFunds / recommendedPerCardBudget));
      waterfallAdvice = 'Your funds can immediately extinguish ' + cardsCovered + ' of your ' + calcCardCount + ' cards completely. Settle highest-risk cards first and defer dormant cards.';
    }

    return {
      estimatedPrincipalSpend,
      estimatedFinancePenalties,
      targetSettlementTotal,
      totalSavings,
      effectiveDiscountPct,
      recommendedPerCardBudget,
      canSettleAllImmediately,
      waterfallAdvice
    };
  }, [calcCardCount, calcTotalCardDebt, calcAvgAPR, calcDefaultStage, calcAvailableFunds]);

  // Master 8-Module Navigation Structure (63 Sections)
  const navModules = useMemo(() => [
    {
      moduleTitle: "Module 1: Foundations & Core Concepts",
      links: [
        { id: "intro-multiple-credit-card-settlement", label: "1. Introduction to Multi-Card Settlement" },
        { id: "what-is-multiple-credit-card-settlement", label: "2. What Is Multiple Card Settlement?" },
        { id: "easy-meaning-settling-multiple-credit-cards", label: "3. Easy Meaning of Multi-Card Settlement" },
        { id: "can-you-settle-multiple-credit-cards-at-once", label: "4. Settle Multiple Cards at Once?" },
        { id: "how-does-multiple-credit-card-settlement-work", label: "5. How Does Multi-Card Settlement Work?" },
        { id: "how-to-settle-multiple-credit-cards", label: "6. How to Settle Multiple Credit Cards" },
        { id: "multiple-credit-card-settlement-process-step-by-step", label: "7. Settlement Process Step by Step" },
        { id: "when-should-you-consider-settling-multiple-credit-cards", label: "8. When to Consider Multi-Card Settlement" },
        { id: "who-is-eligible-for-multiple-credit-card-settlement", label: "9. Who Is Eligible for Settlement?" },
      ]
    },
    {
      moduleTitle: "Module 2: Assessment, Prioritization & Strategy",
      links: [
        { id: "how-to-assess-total-credit-card-debt", label: "10. How to Assess Total Card Debt" },
        { id: "how-to-calculate-total-outstanding-across-multiple-cards", label: "11. Calculate Total Multi-Card Balance" },
        { id: "prioritising-multiple-credit-card-debts", label: "12. Prioritising Card Debts (3-Tiers)" },
        { id: "how-to-create-multiple-credit-card-settlement-strategy", label: "13. Create Multi-Card Settlement Strategy" },
        { id: "how-to-negotiate-settlement-with-multiple-banks", label: "14. Negotiating With Multiple Banks" },
        { id: "can-you-negotiate-with-all-banks-same-time", label: "15. Negotiate With All Banks at Once?" },
        { id: "how-to-decide-which-credit-card-to-settle-first", label: "16. Decide Which Card to Settle First" },
      ]
    },
    {
      moduleTitle: "Module 3: Valuation, Math, Haircuts & Alternatives",
      links: [
        { id: "how-much-can-multiple-credit-cards-be-settled-for", label: "17. How Much Can Cards Be Settled For?" },
        { id: "multiple-credit-card-settlement-amount-calculation-examples", label: "18. Settlement Calculation & Examples" },
        { id: "factors-that-affect-settlement-amount", label: "19. Factors Affecting Settlement Amount" },
        { id: "multiple-card-settlement-vs-full-repayment", label: "20. Card Settlement vs Full Repayment" },
        { id: "multiple-card-settlement-vs-debt-consolidation", label: "21. Settlement vs Debt Consolidation" },
        { id: "multiple-card-settlement-vs-credit-card-restructuring", label: "22. Settlement vs Card Restructuring" },
        { id: "multiple-card-settlement-vs-balance-transfer", label: "23. Settlement vs Balance Transfer" },
        { id: "advantages-of-settling-multiple-credit-cards", label: "24. Advantages of Settling Multiple Cards" },
        { id: "disadvantages-and-risks-of-multiple-credit-card-settlement", label: "25. Disadvantages and Risks of Settlement" },
      ]
    },
    {
      moduleTitle: "Module 4: CIBIL Score, Credit Bureau Tracking & Rebuilding",
      links: [
        { id: "impact-of-multiple-card-settlement-on-cibil-score", label: "26. Impact of Settlement on CIBIL Score" },
        { id: "impact-on-credit-report-when-multiple-accounts-are-settled", label: "27. Credit Report Impact (Multi-Card)" },
        { id: "how-long-does-settlement-affect-credit-score", label: "28. How Long Does Settlement Affect Score?" },
        { id: "how-to-rebuild-cibil-after-settling-multiple-credit-cards", label: "29. How to Rebuild CIBIL After Settlement" },
      ]
    },
    {
      moduleTitle: "Module 5: RBI Framework, Defaults & Recovery Defense",
      links: [
        { id: "rbi-guidelines-for-credit-card-settlement", label: "30. RBI Guidelines for Card Settlement" },
        { id: "rbi-rules-for-credit-card-recovery-agents", label: "31. RBI Rules for Recovery Agents" },
        { id: "multiple-credit-card-default-what-happens-if-you-stop-paying", label: "32. Multi-Card Default Timeline" },
        { id: "legal-consequences-of-multiple-credit-card-defaults", label: "33. Legal Consequences of Card Defaults" },
        { id: "can-banks-take-legal-action-for-credit-card-dues", label: "34. Can Banks Take Legal Action for Cards?" },
        { id: "multiple-card-settlement-after-receiving-legal-notices", label: "35. Settlement After Legal Notices" },
        { id: "multiple-card-settlement-during-arbitration-legal-proceedings", label: "36. Settlement During Arbitration/Court" },
        { id: "recovery-agent-harassment-when-you-have-multiple-credit-cards", label: "37. Recovery Harassment Defense" },
        { id: "borrowers-rights-against-recovery-agent-harassment", label: "38. Borrower's Rights Against Harassment" },
      ]
    },
    {
      moduleTitle: "Module 6: Hardship Dossier, Evidence & Proposal Building",
      links: [
        { id: "documents-required-for-multiple-credit-card-settlement", label: "39. Documents Required for Settlement" },
        { id: "financial-hardship-and-multiple-credit-card-settlement", label: "40. Financial Hardship Justification" },
        { id: "multiple-card-settlement-after-job-loss", label: "41. Settlement After Job Loss / Layoff" },
        { id: "multiple-card-settlement-after-business-income-loss", label: "42. Settlement After Business Deficit" },
        { id: "multiple-card-settlement-due-to-financial-emergency", label: "43. Settlement Due to Medical Emergency" },
        { id: "how-to-prepare-settlement-proposal-multiple-credit-cards", label: "44. Prepare Settlement Proposal (Template)" },
      ]
    },
    {
      moduleTitle: "Module 7: Multi-Bank Negotiations, Payment & Verification",
      links: [
        { id: "how-to-negotiate-with-banks-credit-card-issuers", label: "45. Negotiating With Card Issuers" },
        { id: "how-to-handle-different-settlement-offers-different-banks", label: "46. Handling Asymmetric Bank Offers" },
        { id: "how-to-manage-settlement-payments-across-multiple-banks", label: "47. Managing Multi-Bank Payment Deadlines" },
        { id: "how-to-verify-settlement-letters-multiple-banks", label: "48. Verifying Multi-Bank OTS Letters" },
        { id: "settlement-letter-no-dues-certificate-closure-documents", label: "49. NDC & Final Closure Documents" },
        { id: "how-to-check-multiple-settled-accounts-on-credit-report", label: "50. Checking Settled Accounts in CIBIL" },
        { id: "how-to-correct-incorrect-credit-bureau-reporting", label: "51. Correcting Bureau Reporting Errors" },
        { id: "what-happens-after-settling-multiple-credit-cards", label: "52. What Happens After Settling Cards?" },
        { id: "can-you-get-a-loan-after-settling-multiple-credit-cards", label: "53. Can You Get a Loan After Settlement?" },
        { id: "can-you-get-a-credit-card-after-multiple-settlements", label: "54. Can You Get a Credit Card After OTS?" },
        { id: "how-to-rebuild-financial-profile-after-multiple-settlements", label: "55. Rebuilding Your Financial Profile" },
      ]
    },
    {
      moduleTitle: "Module 8: Traps, Scams, Company Selection & Master SOP",
      links: [
        { id: "common-mistakes-to-avoid-settling-multiple-credit-cards", label: "56. Common Mistakes to Avoid" },
        { id: "multiple-credit-card-settlement-scams-and-fraud", label: "57. Multi-Card Settlement Scams & Fraud" },
        { id: "how-to-choose-a-credit-card-settlement-company", label: "58. Choosing a Settlement Company" },
        { id: "credit-card-settlement-company-vs-direct-bank-negotiation", label: "59. Settlement Company vs Direct Bank" },
        { id: "professional-assistance-for-multiple-credit-card-settlement", label: "60. Professional Settlement Assistance" },
        { id: "faqs-about-settling-multiple-credit-cards", label: "61. Frequently Asked Questions" },
        { id: "multiple-card-settlement-complete-step-by-step-guide", label: "62. Multi-Card Settlement Step-by-Step SOP" },
        { id: "conclusion-how-to-successfully-settle-multiple-credit-cards", label: "63. Conclusion – How to Successfully Settle" },
      ]
    }
  ], []);

  const allLinks = useMemo(() => navModules.flatMap(m => m.links), [navModules]);

  const filteredLinks = useMemo(() => {
    return allLinks.filter(l =>
      l.label.toLowerCase().includes(tocSearch.toLowerCase()) ||
      l.id.toLowerCase().includes(tocSearch.toLowerCase())
    );
  }, [allLinks, tocSearch]);

  const currentChapter = useMemo(() => {
    return allLinks.find(l => l.id === activeId) || allLinks[0];
  }, [allLinks, activeId]);

  // Observer to track active section
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

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));

    const handleScroll = () => {
      setShowFloatingNav(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sections.forEach((s) => observer.unobserve(s));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    setIsMobileTocOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: "Can you settle multiple credit cards from different banks simultaneously?",
      a: "Yes. You can settle multiple cards across banks like HDFC, SBI Card, ICICI, and Axis concurrently through structured One-Time Settlement (OTS) negotiations while maintaining strict information confidentiality between lenders."
    },
    {
      q: "What percentage waiver can I expect when settling multiple credit cards?",
      a: "Settlement waivers typically range between 55% and 75% of gross statement balances. Banks routinely waive 100% of accumulated penal fees and revolving finance charges, requiring only 35% to 50% of the actual purchase principal."
    },
    {
      q: "Which credit cards should be prioritized during multi-lender settlements?",
      a: "Prioritize cards issued by your salary or primary operating bank (to prevent banker lien debits), cards with active Section 138 NI Act or Section 25 PSSA legal notices, and accounts subject to aggressive recovery agency visits."
    },
    {
      q: "Can banks seize personal property or arrest me for credit card dues?",
      a: "No. Credit cards are 100% unsecured debt. Credit card default is purely a civil breach of contract. Police cannot arrest you for inability to pay card dues, and banks cannot confiscate household belongings without a civil court decree."
    },
    {
      q: "How does settling multiple credit cards affect my CIBIL score?",
      a: "Settled cards are reported with a 'Settled' status and ₹0 balance. This stops continuous DPD score degradation. While your score drops initially, you can rebuild it past 750 within 12 to 24 months using FD-backed secured cards."
    },
    {
      q: "What happens if a bank rejects my settlement proposal for a credit card?",
      a: "Rejection is a standard initial posture. Escalate the proposal from branch recovery callers to the Zonal Stressed Assets Division, request written reasons, or allow the account to age towards quarter-end when banks are eager to clear NPAs."
    },
    {
      q: "How do I ensure a settlement letter from a credit card company is genuine?",
      a: "Verify that the letter is on official bank letterhead, carries a traceable CBS dispatch number, is sent from an official corporate email domain (@bankname.com), and explicitly covenants full debt release with ₹0 residual liability."
    },
    {
      q: "Can I pay the settlement amount across multiple credit cards in installments?",
      a: "Yes. Most card issuers allow 2 to 3 monthly tranches (over 60 to 90 days), though offering an upfront lump sum typically unlocks a 10% to 15% deeper principal haircut."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      <Navbar />

      {/* BREADCRUMBS */}
      <div className="bg-white border-b border-slate-200">
        <div className="w-full max-w-[1600px] xl:max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 py-2.5">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Resources', url: '/resources' },
              { name: 'Settle Multiple Credit Cards', url: '/settle-multiple-credit-cards' }
            ]}
          />
        </div>
      </div>

      {/* HERO SECTION (#2452ae) */}
      <section
        className="relative text-white pt-14 pb-12 md:pt-20 md:pb-16 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3 border border-white/15">
            MULTI-LENDER DEBT RESOLUTION &amp; LEGAL DEFENSE
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Settle Multiple Credit Cards in India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive 63-chapter master blueprint to resolving debts across HDFC, SBI Card, ICICI, Axis, and other card issuers. Learn waterfall debt prioritization, 55%–75% principal haircuts, banker lien defense, and credit score rehabilitation under RBI compromise norms.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit Your Multi-Card Settlement Haircut</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+918800226635"
              className="px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-sm md:text-base border border-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Talk to Credit Card Settlement Lawyer</span>
            </a>
          </div>
        </div>
      </section>

      {/* STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* STICKY TOP BAR FOR MOBILE */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-3 py-2.5 flex items-center justify-between shadow-xs lg:hidden">
        <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 animate-pulse" />
          <p className="text-xs font-bold text-slate-800 truncate">
            {currentChapter.label}
          </p>
        </div>
        <button
          onClick={() => setIsMobileTocOpen(true)}
          className="shrink-0 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold flex items-center gap-1.5 border border-blue-200 hover:bg-blue-100 transition-colors"
        >
          <Menu className="w-3.5 h-3.5" />
          <span>Menu ▾</span>
        </button>
      </div>

      {/* MOBILE MODULE FILTER PILLS */}
      <div className="lg:hidden bg-slate-100/90 border-b border-slate-200 px-3 py-2 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs">
        <button
          onClick={() => setSelectedModule(null)}
          className={`shrink-0 px-2.5 py-1 rounded-md font-semibold transition-colors ${
            selectedModule === null
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200'
          }`}
        >
          All (63)
        </button>
        {navModules.map((m, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedModule(idx)}
            className={`shrink-0 px-2.5 py-1 rounded-md font-semibold transition-colors ${
              selectedModule === idx
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200'
            }`}
          >
            M${idx + 1}
          </button>
        ))}
      </div>

      {/* SLIDE-OVER MOBILE DRAWER */}
      {isMobileTocOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileTocOpen(false)}
          />
          <div className="relative w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-10">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm">Table of Contents</h3>
                <p className="text-[11px] text-slate-300">63 Chapters • Multi-Card Master Guide</p>
              </div>
              <button
                onClick={() => setIsMobileTocOpen(false)}
                className="p-1 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 border-b border-slate-200 bg-slate-50">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search 63 chapters..."
                  value={tocSearch}
                  onChange={(e) => setTocSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-4">
              {navModules.map((m, mIdx) => {
                const visibleInMod = m.links.filter(l =>
                  l.label.toLowerCase().includes(tocSearch.toLowerCase()) ||
                  l.id.toLowerCase().includes(tocSearch.toLowerCase())
                );
                if (visibleInMod.length === 0) return null;

                return (
                  <div key={mIdx}>
                    <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1.5 px-2">
                      {m.moduleTitle}
                    </h4>
                    <div className="space-y-1">
                      {visibleInMod.map((link) => {
                        const isActive = activeId === link.id;
                        return (
                          <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                              isActive
                                ? 'bg-blue-50 text-blue-700 font-bold border-l-3 border-blue-600'
                                : 'text-slate-700 hover:bg-slate-100 font-medium'
                            }`}
                          >
                            <span className="truncate pr-2">{link.label}</span>
                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-3 border-t border-slate-200 bg-slate-50">
              <Link
                href="/contact"
                onClick={() => setIsMobileTocOpen(false)}
                className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs text-center block"
              >
                Speak With Multi-Card Settlement Lawyer
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1600px] xl:max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-5 xl:gap-8 items-start">

          {/* LEFT COLUMN: STICKY TABLE OF CONTENTS (15%) */}
          <aside className="hidden lg:block lg:w-[15%] shrink-0 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 custom-scrollbar">
            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Contents (63)
                </span>
                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
                  RBI Norms
                </span>
              </div>

              {/* Quick Search */}
              <div className="relative mb-2.5">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter chapters..."
                  value={tocSearch}
                  onChange={(e) => setTocSearch(e.target.value)}
                  className="w-full pl-8 pr-2 py-1 text-[11px] bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                />
              </div>

              {/* Module Filter Chips */}
              <div className="flex flex-wrap gap-1 mb-2.5 pb-2 border-b border-slate-100">
                <button
                  onClick={() => setSelectedModule(null)}
                  className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                    selectedModule === null
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All
                </button>
                {navModules.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedModule(selectedModule === i ? null : i)}
                    className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                      selectedModule === i
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    M{i + 1}
                  </button>
                ))}
              </div>

              {/* Links list */}
              <div className="space-y-3">
                {navModules.map((m, mIdx) => {
                  if (selectedModule !== null && selectedModule !== mIdx) return null;

                  const visibleInMod = m.links.filter(l =>
                    l.label.toLowerCase().includes(tocSearch.toLowerCase()) ||
                    l.id.toLowerCase().includes(tocSearch.toLowerCase())
                  );
                  if (visibleInMod.length === 0) return null;

                  return (
                    <div key={mIdx}>
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1 px-1">
                        M{mIdx + 1}
                      </div>
                      <div className="space-y-0.5">
                        {visibleInMod.map((link) => {
                          const isActive = activeId === link.id;
                          return (
                            <button
                              key={link.id}
                              onClick={() => scrollToSection(link.id)}
                              className={`w-full text-left px-2 py-1 rounded text-[11px] transition-colors flex items-center justify-between ${
                                isActive
                                  ? 'bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600'
                                  : 'text-slate-600 hover:bg-slate-50 hover:text-black font-medium'
                              }`}
                            >
                              <span className="truncate pr-1">{link.label}</span>
                              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* MIDDLE COLUMN: MAIN CONTENT (70%) */}
          <article className="w-full lg:w-[70%] min-w-0 space-y-6 sm:space-y-8">

            {/* PART 1 (SECTIONS 1 TO 9) */}
            
        {/* SECTION 1 */}
        <section id="intro-multiple-credit-card-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 1</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            1. Introduction to Multiple Credit Card Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              In urban and semi-urban India, the ease of pre-approved unsecured credit cards has led millions of upwardly mobile professionals and business owners to accumulate cards across multiple banking institutions—such as HDFC Bank, SBI Card, ICICI Bank, Axis Bank, RBL Bank, Kotak Mahindra Bank, and American Express. When financial stability is disrupted by involuntary job loss, business margin compression, or acute family medical emergencies, borrowers often attempt to juggle minimum amount due (MAD) payments across three to seven different cards simultaneously.
            </p>
            <p>
              This revolving credit cycle quickly transforms into an inescapable debt trap. With annualized percentage rates (APRs) ranging between <strong>42% and 54%</strong>, combined with late payment penalties, over-limit charges, and 18% Goods and Services Tax (GST) on financing costs, a combined credit balance of ₹10 Lakhs across five cards can balloon into an unserviceable ₹22 Lakhs within 18 months. When cash reserves are exhausted and payments stop, borrowers face simultaneous harassment from multiple aggressive third-party collection agencies, threats of legal prosecution, and severe credit score erosion.
            </p>
            <p>
              Resolving multiple credit card debts requires a coordinated, institutional strategy known as <strong>Multiple Credit Card Settlement</strong>. Rather than falling prey to piecemeal payments that are entirely absorbed by compounding interest, distressed borrowers can utilize the Reserve Bank of India’s prudential compromise guidelines to negotiate structured, discounted One-Time Settlements (OTS) across all their card issuers concurrently or sequentially.
            </p>

            <div className="p-4 sm:p-5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl">
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Critical Regulatory Principle</h4>
              <p className="text-black text-xs sm:text-sm">
                Under the Reserve Bank of India&apos;s <em>Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022</em> and the <em>Prudential Framework for Compromise Settlements (June 2023)</em>, all card-issuing banks and NBFCs must maintain transparent, board-approved compromise policies. Borrowers in genuine financial distress are legally entitled to propose compromise settlements to extinguish unserviceable credit card liabilities.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE LEAD FUNNEL EMBEDDED AFTER SECTION 1 */}
        <div className="my-8">
          <InteractiveLeadFunnel />
        </div>

        {/* SECTION 2 */}
        <section id="what-is-multiple-credit-card-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 2</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            2. What Is Multiple Credit Card Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              <strong>Multiple Credit Card Settlement</strong> is an orchestrated legal and financial debt resolution process wherein a borrower holding delinquent credit card accounts across two or more independent banks negotiates formal, bilateral One-Time Settlements (OTS) with each creditor. Under these agreements, each card issuer agrees to accept a discounted lump sum—usually representing a fraction of the gross claimed statement balance—in full, final, and absolute satisfaction of the card obligations.
            </p>
            <p>
              Unlike settling a single personal loan, multiple credit card settlement involves managing competing creditor demands, varying bank internal credit committee policies, differing delinquency aging timelines, and asynchronous recovery pressure. The ultimate objective is to secure written settlement sanction letters, permanently terminate all card lines, halt legal notices, eliminate coercive recovery agent visits, and obtain unconditional <strong>No-Dues Certificates (NDCs)</strong> from every lending institution.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="easy-meaning-settling-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 3</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            3. Easy Meaning of Settling Multiple Credit Cards
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              In plain language, settling multiple credit cards means negotiating a wholesale discount on your collective credit card debt because you can no longer afford the full bill.
            </p>
            <p>
              Consider this practical real-world scenario:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li><strong>Bank A (HDFC):</strong> Statement Balance ₹3,50,000 (Actual spend ₹1,80,000; Interest &amp; fees ₹1,70,000)</li>
              <li><strong>Bank B (SBI Card):</strong> Statement Balance ₹4,20,000 (Actual spend ₹2,10,000; Interest &amp; fees ₹2,10,000)</li>
              <li><strong>Bank C (ICICI):</strong> Statement Balance ₹2,80,000 (Actual spend ₹1,40,000; Interest &amp; fees ₹1,40,000)</li>
              <li><strong>Bank D (Axis):</strong> Statement Balance ₹1,50,000 (Actual spend ₹80,000; Interest &amp; fees ₹70,000)</li>
              <li><strong>Total Gross Claimed Debt: ₹12,00,000</strong> (Actual Purchase Principal: ₹6,10,000)</li>
            </ul>
            <p>
              Through a coordinated settlement strategy, you prove your total household insolvency and absence of disposable income. You demonstrate to each bank that protracted recovery will yield zero return. Consequently:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li>All four banks completely wipe off 100% of their accumulated penal fees and revolving finance charges (₹5,90,000).</li>
              <li>Each bank grants an additional 40% to 50% discount on the actual purchase spend.</li>
              <li>You settle all four accounts for a combined total of approximately <strong>₹3,60,000 to ₹4,20,000</strong> paid in single bullet payments or short tranches.</li>
            </ol>
            <p>
              You eliminate a crushing ₹12 Lakh debt for roughly one-third of the amount, terminate four high-interest liability accounts, and regain complete financial independence.
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="can-you-settle-multiple-credit-cards-at-once" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 4</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            4. Can You Settle Multiple Credit Cards at Once?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Yes, you can settle multiple credit cards concurrently or in rapid succession. However, executing settlements across several lenders at once requires strict adherence to institutional capital discipline.
            </p>
            <p>
              While banks share credit reporting data via Credit Information Companies (CIBIL, Experian, Equifax, and CRIF High Mark), there is no centralized &quot;clearing house&quot; where card issuers collaborate on a joint consumer settlement. Each card-issuing bank operates an autonomous Credit Committee, separate Stressed Asset Resolution Branches (SARB), and distinct recovery targets.
            </p>
            <p>
              Therefore, you negotiate with each bank as an independent sovereign creditor. The strategic secret is <strong>information insulation</strong>: Bank A must never know what settlement figure you offered or paid to Bank B. Each bank must be shown that your available family-assisted liquidity is severely limited, forcing them to compete for your scarce settlement funds before other creditors exhaust your capacity.
            </p>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="how-does-multiple-credit-card-settlement-work" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 5</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            5. How Does Multiple Credit Card Settlement Work?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              The operational mechanics of multiple credit card settlement function across five synchronized operational tracks:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Track 1: Delinquency &amp; NPA Maturation</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  When card payments cease, the accounts progress through Days Past Due (DPD) buckets: 30 DPD (SMA-0), 60 DPD (SMA-1), 90 DPD (NPA / Sub-Standard). At 90+ DPD, the bank must provide 15% to 100% capital provisioning, opening the door for credit committee haircuts.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Track 2: Stressed Debt Segregation</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  Each bank transfers the delinquent card file from regular customer care to internal Stressed Card Collections or external empaneled recovery agencies.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Track 3: Legal Notice Shielding</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  As banks issue Section 138 NI Act notices (for bounced security cheques) or Section 25 PSSA notices (for failed auto-debit mandates), formal legal replies are served to prevent criminal escalation and establish bona fide settlement intent.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Track 4: Bilateral Hardship Appraisal</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  A standardized financial hardship dossier is submitted to each bank&apos;s settlement committee, demonstrating that uncollateralized card debt cannot be recovered via civil litigation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 */}
        <section id="how-to-settle-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 6</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            6. How to Settle Multiple Credit Cards
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Successfully settling multiple credit cards requires executing a <strong>Waterfall Debt Resolution Protocol</strong>. Rather than spreading limited funds across all lenders in tiny, meaningless EMI tokens, you pool your liquidity and settle cards systematically one by one or in high-priority batches:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Step 1: Stop Revolving Minimum Dues:</strong> Cease paying minimum amounts due immediately. Minimum payments do not reduce the principal; they merely service interest and keep accounts standard, preventing banks from offering OTS schemes.</li>
              <li><strong>Step 2: Isolate Salary and Operational Accounts:</strong> If you hold a credit card with the same bank where your salary or primary savings account is maintained, transfer your salary account to an unlinked third-party bank immediately to prevent the lender from exercising its <em>Banker&apos;s Right of Lien and Set-Off</em> under Section 171 of the Indian Contract Act.</li>
              <li><strong>Step 3: Establish a Consolidated Settlement Fund:</strong> Accumulate liquid capital into a separate, unlinked savings account. Target an amount equal to approximately 30% to 40% of your total combined card spends.</li>
              <li><strong>Step 4: Engage Settlement Committees Directly:</strong> Bypass low-level telecallers and present written compromise proposals to the Stressed Assets Division of each credit card issuer.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 7 */}
        <section id="multiple-credit-card-settlement-process-step-by-step" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 7</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            7. Multiple Credit Card Settlement Process – Step by Step
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Follow this verified 7-stage institutional workflow to settle multiple cards safely:
            </p>

            <div className="space-y-3 my-4">
              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Stage 1: Multi-Card Statement Audit</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Download the last 12 months of monthly statements for every card. Segregate original purchase principal from revolving finance charges, annual card fees, late charges, and GST levies.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Stage 2: Hardship Evidence Assembly</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Compile medical diagnosis records, hospital invoices, employment termination letters, salary revision notices, or business loss statements into a master hardship dossier.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Stage 3: Creditor Risk &amp; Legal Prioritization</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Rank cards based on legal aggressiveness: prioritize cards with active Section 138 / Section 25 PSSA notices or accounts tied to your primary operating accounts.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Stage 4: Formal OTS Proposal Dispatch</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Dispatch written compromise settlement letters to each bank&apos;s Card Settlement Cell via registered post AD and official grievance email.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Stage 5: Committee Bargaining &amp; Haircut Locking</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Engage the Credit Settlement Advisory Committee, countering high starting quotes with documented proof of insolvency, securing 100% penal waivers and 45%–60% principal haircuts.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">6</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Stage 6: Sanction Letter Legal Audit &amp; Direct Remittance</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Scrutinize the official OTS letter for full release covenants before paying the agreed settlement sum directly into your 16-digit credit card number via NEFT/RTGS.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">7</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Stage 7: NDC Collection &amp; Bureau Status Verification</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Obtain the unconditional No-Dues Certificate, confirm permanent card cancellation, and verify that the account is reported as &quot;Settled&quot; with ₹0 balance across all credit bureaus within 45 days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 */}
        <section id="when-should-you-consider-settling-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 8</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            8. When Should You Consider Settling Multiple Credit Cards?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Settlement is not a casual convenience; it is an extraordinary debt relief mechanism. You should consider settling multiple credit cards when:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Debt Service Exceeds Net Monthly Income:</strong> When total minimum dues across all cards exceed 50% to 70% of your take-home pay, leaving insufficient funds for basic household survival.</li>
              <li><strong>You Are Borrowing from Card B to Pay Card A:</strong> If you are withdrawing cash from one card or using fintech instant loan apps to service other credit cards, you have entered a terminal debt spiral.</li>
              <li><strong>Persistent Delinquency (90+ Days):</strong> If your cards have already defaulted past 90 days and recovery callers are making multiple daily contacts.</li>
              <li><strong>Permanent or Severe Income Disruption:</strong> You have experienced a verifiable, structural reduction in earning capacity (layoff, company shutdown, physical disability) with no realistic prospect of repaying the full compounding debt within 36 months.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 9 */}
        <section id="who-is-eligible-for-multiple-credit-card-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 9</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            9. Who Is Eligible for Multiple Credit Card Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under RBI compromise guidelines, eligibility for multi-card settlement depends on establishing <strong>genuine financial distress</strong> rather than willful evasion:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Eligible:</strong> Salaried individuals terminated due to corporate retrenchment or salary deferrals; entrepreneurs who experienced insolvency or severe business collapse; individuals facing catastrophic medical expenditures for self or immediate family; surviving legal heirs of deceased primary cardholders.</li>
              <li><strong>Ineligible / High Resistance:</strong> Borrowers with high ongoing salaries actively credited to visible bank accounts; individuals with unencumbered liquid investments (mutual funds, fixed deposits, shares) discoverable under PAN-linked CIMS reporting; borrowers who utilized cards for high-value speculative trading, crypto investments, or gambling immediately prior to default.</li>
            </ul>
          </div>
        </section>


            {/* PART 2 (SECTIONS 10 TO 16) */}
            
        {/* SECTION 10 */}
        <section id="how-to-assess-total-credit-card-debt" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 10</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            10. How to Assess Your Total Credit Card Debt
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              When dealing with four to seven delinquent credit cards, borrowers often avoid looking at their statements out of fear and psychological paralysis. However, an accurate assessment is the non-negotiable starting point for effective negotiation.
            </p>
            <p>
              To assess your multi-card exposure objectively, construct a master <strong>Credit Card Liability Audit Matrix</strong> in a spreadsheet with the following data points for each card:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li>Issuing Bank Name and Card Product Type (e.g., HDFC Regalia, SBI SimplyCLICK).</li>
              <li>Current Statement Balance claimed by the bank.</li>
              <li>Actual Principal Spend (sum of physical retail purchases, utility bills, and EMI conversions minus repaid amounts).</li>
              <li>Unbundled Cumulative Penal Charges, Late Fees, and Over-Limit Fines.</li>
              <li>Annualized Interest Rate (APR, usually 42% to 54%).</li>
              <li>Current Days Past Due (DPD) status and asset classification bucket.</li>
              <li>Whether automated NACH/e-Mandate or physical security cheques were registered.</li>
            </ol>
          </div>
        </section>

        {/* SECTION 11 */}
        <section id="how-to-calculate-total-outstanding-across-multiple-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 11</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            11. How to Calculate Total Outstanding Across Multiple Credit Cards
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Calculating your true settlement baseline requires isolating the <strong>Pure Principal Exposure</strong> from the bank&apos;s inflated billing statement. Bank billing software adds monthly finance charges on top of finance charges, plus 18% GST on every fee, inflating a stagnant balance exponentially.
            </p>
            <p>
              Use this statutory calculation formula for multi-card portfolios:
            </p>
            <div className="p-4 bg-slate-100 border border-slate-300 rounded-xl font-mono text-xs sm:text-sm my-3 space-y-1.5">
              <p><strong>Total Gross Claimed Debt</strong> = Bank A + Bank B + Bank C + Bank D ... (Gross Statements)</p>
              <p><strong>Pure Principal Capital</strong> = Total Actual Purchases - Cumulative Lifetime Repayments</p>
              <p><strong>Compounded Secondary Layer (100% Waivable)</strong> = Total Gross Claimed Debt - Pure Principal Capital</p>
            </div>
            <p>
              In typical multi-card default portfolios older than 180 days, the <strong>Compounded Secondary Layer represents 45% to 65% of the total claimed balance</strong>. Identifying this number gives you instant psychological relief: you realize that more than half of what the banks claim you owe is uncollected compounding interest that banks routinely waive during settlement.
            </p>
          </div>
        </section>

        {/* SECTION 12 */}
        <section id="prioritising-multiple-credit-card-debts" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 12</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            12. Prioritising Multiple Credit Card Debts
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Treating all credit cards equally during a debt crisis is a recipe for failure. You must categorize your cards into distinct risk-weighted priority tiers using the <strong>3-Tier Multi-Card Risk Hierarchy</strong>:
            </p>

            <div className="space-y-3 my-4">
              <div className="p-3.5 bg-red-50/80 border-l-4 border-red-600 rounded-r-lg">
                <span className="font-bold text-red-950 text-xs sm:text-sm block mb-1">Tier 1: High Legal Risk &amp; Account Exposure (Highest Priority)</span>
                <p className="text-xs sm:text-sm text-slate-800">Cards issued by your salary bank (risk of automated debit lien); cards with active Section 138 NI Act notices or Section 25 PSSA summons; cards with high principal balances where civil recovery suits are economically viable for the bank.</p>
              </div>

              <div className="p-3.5 bg-amber-50/80 border-l-4 border-amber-600 rounded-r-lg">
                <span className="font-bold text-amber-950 text-xs sm:text-sm block mb-1">Tier 2: High Recovery Harassment (Medium Priority)</span>
                <p className="text-xs sm:text-sm text-slate-800">Cards assigned to hyper-aggressive third-party field collection agencies making unannounced home or workplace visits. Settling these cards immediately stops social harassment and restores emotional tranquility.</p>
              </div>

              <div className="p-3.5 bg-slate-100 border-l-4 border-slate-500 rounded-r-lg">
                <span className="font-bold text-slate-900 text-xs sm:text-sm block mb-1">Tier 3: Low Balance &amp; Dormant Accounts (Lowest Priority)</span>
                <p className="text-xs sm:text-sm text-slate-800">Cards with balances below ₹75,000 where banks rarely initiate legal action, or accounts that have been sold off to Asset Reconstruction Companies (ARCs). These can wait until Tier 1 and Tier 2 accounts are resolved.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13 */}
        <section id="how-to-create-multiple-credit-card-settlement-strategy" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 13</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            13. How to Create a Multiple Credit Card Settlement Strategy
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              A robust multi-card settlement strategy operates on the <strong>Waterfall Allocation Principle</strong>. Instead of offering ₹10,000 to five different banks every month (which settles nothing and keeps all five accounts bleeding), you pool that ₹50,000 into an isolated settlement escrow reserve.
            </p>
            <p>
              Under the Waterfall model:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You let all cards age into 90+ DPD (NPA status), forcing all issuers into recovery provisioning mode simultaneously.</li>
              <li>You deploy your accumulated liquid corpus to settle Card 1 completely in a single bullet payment with a 55% discount.</li>
              <li>You secure the No-Dues Certificate for Card 1, permanently eliminating that liability and that bank&apos;s recovery calls.</li>
              <li>You redirect all subsequent savings toward Card 2, executing a similar deep settlement, and repeat the sequence until all cards are closed.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 14 */}
        <section id="how-to-negotiate-settlement-with-multiple-banks" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 14</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            14. How to Negotiate Settlement With Multiple Banks
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Negotiating with multiple credit card departments requires compartmentalization and tactical communication:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Maintain Separate Documentation Files:</strong> Create independent digital and physical folders for each bank. Never mix correspondence, notice replies, or settlement drafts.</li>
              <li><strong>Adopt a Uniform Hardship Narrative:</strong> Ensure your explanation of income loss, medical crisis, or business failure is identical across all lenders. Inconsistencies can be uncovered during banking ombudsman or legal proceedings.</li>
              <li><strong>Never Reveal Your Aggregate Liquidity:</strong> If you have mobilized ₹3,00,000 from family, never tell Bank A that you have ₹3,00,000. Inform Bank A that you have arranged ₹70,000 specifically for their card, and that if they reject it, those funds will be reallocated to another card issuer.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 15 */}
        <section id="can-you-negotiate-with-all-banks-same-time" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 15</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            15. Can You Negotiate With All Banks at the Same Time?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Yes. Initiating dialogue with all card issuers simultaneously is standard practice and highly recommended.
            </p>
            <p>
              By sending formal OTS proposal letters to all your card banks at the same time, you establish a <strong>Competitive Settlement Dynamic</strong>. You inform each bank&apos;s recovery head: <em>&quot;I am in default across four institutions due to total insolvency. I have mobilized a limited, one-time family assistance corpus of ₹2,50,000. Whichever bank issues a valid OTS sanction letter with a reasonable principal haircut first will receive their payment; remaining banks will have to await future asset liquidation or face prolonged civil litigation.&quot;</em>
            </p>
            <p>
              This creates urgency among recovery managers, who are incentivized to close recoveries before their fiscal quarter ends.
            </p>
          </div>
        </section>

        {/* SECTION 16 */}
        <section id="how-to-decide-which-credit-card-to-settle-first" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 16</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            16. How to Decide Which Credit Card to Settle First
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              To make a calculated decision on settlement sequence, score each card against four objective operational criteria:
            </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-black font-bold">
                    <th className="p-3 border border-slate-200">Evaluation Factor</th>
                    <th className="p-3 border border-slate-200">High Priority (Settle First)</th>
                    <th className="p-3 border border-slate-200">Low Priority (Settle Later)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Banking Relationship</td>
                    <td className="p-3 border border-slate-200">Salary or primary savings bank (risk of auto-lien debit).</td>
                    <td className="p-3 border border-slate-200">Standalone card issuer with zero deposit accounts.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Legal Escalation</td>
                    <td className="p-3 border border-slate-200">Section 138 NI Act or Section 25 PSSA notice issued.</td>
                    <td className="p-3 border border-slate-200">Only telephonic reminder calls; zero legal notices.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Offered Haircut Depth</td>
                    <td className="p-3 border border-slate-200">Bank offering 55% to 65% total statement discount.</td>
                    <td className="p-3 border border-slate-200">Bank rigidly demanding 85% to 90% of statement.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Repossession / Threat Level</td>
                    <td className="p-3 border border-slate-200">Rogue agency conducting physical workplace visits.</td>
                    <td className="p-3 border border-slate-200">Standard automated SMS and email reminders only.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>


            {/* INTERACTIVE MULTI-CARD SETTLEMENT CALCULATOR */}
            <div id="multi-card-calculator" className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl border border-blue-800/40 my-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider bg-blue-600/40 text-blue-300 px-3 py-1 rounded-full border border-blue-400/20 inline-block mb-1.5">
                    WATERFALL DEBT RESOLUTION TOOL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-blue-400" />
                    <span>Interactive Multi-Card Settlement &amp; Haircut Calculator</span>
                  </h3>
                </div>
                <div className="text-xs text-blue-200">
                  Benchmarked to RBI June 2023 Compromise Framework
                </div>
              </div>

              {/* Calculator Inputs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1 text-slate-300">
                    <span>Number of Stressed Credit Cards</span>
                    <span className="text-white font-mono font-bold">{calcCardCount} Cards</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={8}
                    step={1}
                    value={calcCardCount}
                    onChange={(e) => setCalcCardCount(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>2 Cards</span>
                    <span>5 Cards</span>
                    <span>8 Cards</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1 text-slate-300">
                    <span>Total Claimed Card Debt Across All Banks (₹)</span>
                    <span className="text-white font-mono font-bold">₹{calcTotalCardDebt.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={5000000}
                    step={50000}
                    value={calcTotalCardDebt}
                    onChange={(e) => setCalcTotalCardDebt(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹1,00,000</span>
                    <span>₹25,00,000</span>
                    <span>₹50,00,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Delinquency Status &amp; Default Vintage
                  </label>
                  <select
                    value={calcDefaultStage}
                    onChange={(e) => setCalcDefaultStage(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="fresh_default">Early Default (60–90 Days / SMA-1/2)</option>
                    <option value="substandard">Sub-Standard NPA (90–180 Days Overdue)</option>
                    <option value="hardcore_npa">Hard-Core Stressed NPA (180+ Days to 2 Years)</option>
                    <option value="post_legal">Post-Legal Notice / Arbitration Stage</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1 text-slate-300">
                    <span>Available Liquid Settlement Corpus (₹)</span>
                    <span className="text-white font-mono font-bold">₹{calcAvailableFunds.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={2500000}
                    step={25000}
                    value={calcAvailableFunds}
                    onChange={(e) => setCalcAvailableFunds(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹50,000</span>
                    <span>₹12,50,000</span>
                    <span>₹25,00,000</span>
                  </div>
                </div>
              </div>

              {/* Output Results Box */}
              <div className="bg-slate-800/90 border border-blue-500/30 rounded-xl p-4 sm:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 pb-4 border-b border-slate-700">
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Total Statement Balance</span>
                    <span className="text-sm sm:text-lg font-black font-mono text-slate-200">
                      ₹{calcTotalCardDebt.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Waived Fees &amp; 45% APR</span>
                    <span className="text-sm sm:text-lg font-black font-mono text-emerald-400">
                      ₹{multiCardAnalysis.estimatedFinancePenalties.toLocaleString('en-IN')} (100%)
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Target Settlement Total</span>
                    <span className="text-sm sm:text-lg font-black font-mono text-blue-400">
                      ₹{multiCardAnalysis.targetSettlementTotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Aggregate Debt Relief</span>
                    <span className="text-sm sm:text-lg font-black font-mono text-emerald-300">
                      ~{multiCardAnalysis.effectiveDiscountPct}% Haircut
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                    <span className="font-bold text-blue-300 block mb-0.5">Average Budget Per Card:</span>
                    <p className="text-slate-300">
                      <strong>₹{multiCardAnalysis.recommendedPerCardBudget.toLocaleString('en-IN')}</strong> per card (allows closing cards sequentially using Waterfall Allocation).
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                    <span className="font-bold text-blue-300 block mb-0.5">Recommended Allocation Strategy:</span>
                    <p className="text-slate-300">{multiCardAnalysis.waterfallAdvice}</p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-3 italic">
                  * Note: Real-world card settlement targets benchmarked under RBI Master Directions on Credit Card Operations. Settle salary-bank cards first to neutralize statutory banker lien risks.
                </p>
              </div>
            </div>

            {/* PART 3 (SECTIONS 17 TO 25) */}
            
        {/* SECTION 17 */}
        <section id="how-much-can-multiple-credit-cards-be-settled-for" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 17</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            17. How Much Can Multiple Credit Cards Be Settled For?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              In the Indian banking ecosystem, credit cards yield the highest settlement discounts of any credit product. Because credit cards are 100% unsecured credit lines with exorbitant built-in financing rates (3.5% to 4.5% monthly), banks maintain massive bad-debt provisioning reserves against credit card defaults.
            </p>
            <p>
              Depending on the default vintage, the depth of documented financial hardship, and the speed of lump-sum settlement remittance, multiple credit cards can typically be settled for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li><strong>Against Gross Claimed Balance:</strong> <strong>25% to 40%</strong> of the gross statement amount (equivalent to a <strong>60% to 75% total debt waiver</strong>).</li>
              <li><strong>Against Pure Principal Spend:</strong> <strong>40% to 60%</strong> of the actual purchase capital.</li>
              <li><strong>Penal Fees, Late Fees, and Annual Charges:</strong> <strong>100% completely waived</strong> under RBI fair practices guidelines.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 18 */}
        <section id="multiple-credit-card-settlement-amount-calculation-examples" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 18</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            18. Multiple Credit Card Settlement Amount – Calculation and Examples
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Let us examine a detailed multi-card settlement ledger calculation for a borrower with four defaulted credit cards:
            </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-black font-bold">
                    <th className="p-2.5 border border-slate-200">Card Issuer</th>
                    <th className="p-2.5 border border-slate-200">Claimed Balance</th>
                    <th className="p-2.5 border border-slate-200">Pure Principal</th>
                    <th className="p-2.5 border border-slate-200">Settled Amount</th>
                    <th className="p-2.5 border border-slate-200">Total Savings</th>
                    <th className="p-2.5 border border-slate-200">Haircut %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2.5 font-semibold border border-slate-200">HDFC Bank Card</td>
                    <td className="p-2.5 border border-slate-200">₹4,50,000</td>
                    <td className="p-2.5 border border-slate-200">₹2,20,000</td>
                    <td className="p-2.5 border border-slate-200 font-bold text-blue-700">₹1,25,000</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-700 font-bold">₹3,25,000</td>
                    <td className="p-2.5 border border-slate-200">72.2%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold border border-slate-200">SBI Card</td>
                    <td className="p-2.5 border border-slate-200">₹3,80,000</td>
                    <td className="p-2.5 border border-slate-200">₹1,90,000</td>
                    <td className="p-2.5 border border-slate-200 font-bold text-blue-700">₹1,10,000</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-700 font-bold">₹2,70,000</td>
                    <td className="p-2.5 border border-slate-200">71.0%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold border border-slate-200">ICICI Bank Card</td>
                    <td className="p-2.5 border border-slate-200">₹2,70,000</td>
                    <td className="p-2.5 border border-slate-200">₹1,40,000</td>
                    <td className="p-2.5 border border-slate-200 font-bold text-blue-700">₹80,000</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-700 font-bold">₹1,90,000</td>
                    <td className="p-2.5 border border-slate-200">70.3%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold border border-slate-200">Axis Bank Card</td>
                    <td className="p-2.5 border border-slate-200">₹1,60,000</td>
                    <td className="p-2.5 border border-slate-200">₹90,000</td>
                    <td className="p-2.5 border border-slate-200 font-bold text-blue-700">₹50,000</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-700 font-bold">₹1,10,000</td>
                    <td className="p-2.5 border border-slate-200">68.7%</td>
                  </tr>
                  <tr className="bg-slate-50 font-bold">
                    <td className="p-2.5 border border-slate-200 text-black">Consolidated Total</td>
                    <td className="p-2.5 border border-slate-200 text-red-700">₹12,60,000</td>
                    <td className="p-2.5 border border-slate-200">₹6,40,000</td>
                    <td className="p-2.5 border border-slate-200 text-blue-800">₹3,65,000</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-800">₹8,95,000</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-800">71.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              In this actual case study, the borrower liquidated a life insurance policy surrender value of ₹3.7 Lakhs to settle four credit cards originally demanding ₹12.6 Lakhs, eliminating <strong>₹8.95 Lakhs in toxic debt</strong> in a single month.
            </p>
          </div>
        </section>

        {/* SECTION 19 */}
        <section id="factors-that-affect-settlement-amount" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 19</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            19. Factors That Affect Settlement Amount
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              The specific haircut percentage sanctioned by a credit card committee depends on key institutional variables:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Default Aging (NPA Vintage):</strong> A card defaulted for 18 months commands a vastly higher haircut than a card defaulted for only 95 days, because older debts are 100% provisioned in bank ledgers.</li>
              <li><strong>Payment Structure (Bullet vs Tranches):</strong> Offering 100% payment in a single 15-day bullet remittance secures a 10% to 15% deeper discount than requesting a 3-month installment plan.</li>
              <li><strong>Hardship Documentation Credibility:</strong> Clear diagnostic medical records, corporate pink slips, or GST cancellation orders validate insolvency to bank audit inspectors.</li>
              <li><strong>Fiscal Calendar Timing:</strong> Quarter-end periods (late March, June, September, and December) trigger intense pressure on card collection managers to meet recovery targets, resulting in steeper discounts.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 20 */}
        <section id="multiple-card-settlement-vs-full-repayment" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 20</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            20. Multiple Credit Card Settlement vs Full Repayment
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Comparing full repayment versus compromise settlement:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1">Full Repayment</h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  Requires paying 100% of the compounding 45%+ APR balance. Accounts reflect &quot;Closed&quot; status on credit bureaus, preserving your CIBIL score. However, for an insolvent borrower, this is mathematically impossible and leads to bankruptcy.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1">Multiple Card Settlement</h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  Permanently extinguishes debt with 60%–75% discounts. Accounts reflect &quot;Settled&quot; status on credit bureaus, temporarily lowering credit scores, but instantly frees the borrower from legal risk, calls, and insolvency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 21 */}
        <section id="multiple-card-settlement-vs-debt-consolidation" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 21</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            21. Multiple Credit Card Settlement vs Debt Consolidation
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              <strong>Debt Consolidation</strong> involves taking a large, lower-interest personal loan or loan against property (LAP) to clear all credit card bills in full.
            </p>
            <p>
              While debt consolidation preserves your CIBIL score, it is only viable if your credit score is still above 720 and you have demonstrable, regular income to qualify for a large new loan. If you have already defaulted, your CIBIL score has dropped below 600, making debt consolidation completely inaccessible. In such cases, <strong>Multiple Credit Card Settlement is the only remaining realistic remedy</strong>.
            </p>
          </div>
        </section>

        {/* SECTION 22 */}
        <section id="multiple-card-settlement-vs-credit-card-restructuring" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 22</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            22. Multiple Credit Card Settlement vs Credit Card Restructuring
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under <strong>Credit Card Restructuring</strong>, the bank converts your outstanding revolving balance into a fixed-term personal loan (usually 24 to 48 months) at an interest rate of 14% to 20% per annum.
            </p>
            <p>
              Restructuring grants zero haircut on the principal and requires you to pay the entire balance over several years. If your income has suffered a permanent reduction, restructuring merely delays default. Settlement, in contrast, provides immediate debt extinction with deep principal waivers.
            </p>
          </div>
        </section>

        {/* SECTION 23 */}
        <section id="multiple-card-settlement-vs-balance-transfer" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 23</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            23. Multiple Credit Card Settlement vs Balance Transfer
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              A <strong>Credit Card Balance Transfer</strong> shifts the balance of Card A to Card B at a promotional low interest rate for 3 to 6 months.
            </p>
            <p>
              Balance transfer is a temporary liquidity maneuver for solvent borrowers experiencing brief cash flow mismatches. For borrowers trapped under multiple cards with no visible cash flow recovery, balance transfers merely postpone the inevitable and exhaust secondary credit lines. Settlement eliminates the debt permanently.
            </p>
          </div>
        </section>

        {/* SECTION 24 */}
        <section id="advantages-of-settling-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 24</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            24. Advantages of Settling Multiple Credit Cards
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Settling your multi-card portfolio delivers transformative financial and legal benefits:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Enormous Capital Savings:</strong> Wipes out 50% to 75% of your total claimed liability, saving several lakhs of rupees.</li>
              <li><strong>Immediate Cessation of Harassment:</strong> Under RBI mandates, all recovery calls, agency visits, and automated collection reminders stop once an account is settled.</li>
              <li><strong>Elimination of Criminal Notice Risk:</strong> Section 138 NI Act and Section 25 PSSA proceedings are permanently withdrawn by lenders upon settlement.</li>
              <li><strong>Mental Peace &amp; Reset:</strong> Liberates you and your family from relentless anxiety, allowing you to focus on career rebuilding and family well-being.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 25 */}
        <section id="disadvantages-and-risks-of-multiple-credit-card-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 25</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            25. Disadvantages and Risks of Multiple Credit Card Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              To make an informed decision, you must recognize the trade-offs of settlement:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>&quot;Settled&quot; Remark on Credit Bureau:</strong> Your credit report will reflect &quot;Settled&quot; for each card, which signals past default to automated credit scoring models.</li>
              <li><strong>Temporary Cooling-off Period:</strong> Unsecured credit card and personal loan approvals will be restricted for 12 to 24 months.</li>
              <li><strong>Permanent Invalidation of Existing Cards:</strong> All settled credit cards are immediately closed and destroyed; reward points and travel miles are forfeited.</li>
            </ul>
          </div>
        </section>


            {/* PART 4 (SECTIONS 26 TO 29) */}
            
        {/* SECTION 26 */}
        <section id="impact-of-multiple-card-settlement-on-cibil-score" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 26</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            26. Impact of Multiple Credit Card Settlement on CIBIL Score
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              When a single credit card is settled, your CIBIL score experiences a one-time adjustment. When multiple credit cards are settled across several banks, the credit reporting effect is cumulative across your consumer credit file:
            </p>
            <p>
              However, it is crucial to recognize a fundamental mathematical truth: <strong>An active, unresolved default degrades your score far worse than a completed settlement</strong>. An account in continuous default reports 90, 120, 150, 180+ Days Past Due (DPD) every single month, causing your credit score to plummet continuously towards 500.
            </p>
            <p>
              Executing a settlement halts this ongoing bleeding immediately. Once marked &quot;Settled&quot;, the overdue amount drops to ₹0, the DPD counter stops ticking, and your credit profile is frozen, establishing a rock-solid floor from which credit rehabilitation can commence.
            </p>
          </div>
        </section>

        {/* SECTION 27 */}
        <section id="impact-on-credit-report-when-multiple-accounts-are-settled" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 27</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            27. Impact on Credit Report When Multiple Accounts Are Settled
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Across TransUnion CIBIL, Experian, Equifax, and CRIF High Mark, each settled credit card account will reflect distinct data modifications:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li><strong>Current Balance:</strong> Reported as <strong>₹0</strong> across all four bureaus.</li>
              <li><strong>Amount Overdue:</strong> Reported as <strong>₹0</strong>.</li>
              <li><strong>Account Status:</strong> Updated to <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong>.</li>
              <li><strong>Written-off Amount (Total / Principal):</strong> The difference between the original statement liability and the paid settlement sum.</li>
            </ul>
            <p>
              Having multiple accounts marked &quot;Settled&quot; signals to automated bank underwriting systems that you experienced a systemic financial crisis in that period. While manual underwriters may understand your hardship narrative, automated retail underwriting will require a cooling-off period before issuing fresh unsecured credit.
            </p>
          </div>
        </section>

        {/* SECTION 28 */}
        <section id="how-long-does-settlement-affect-credit-score" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 28</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            28. How Long Does Settlement Affect Your Credit Score?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under Indian credit bureau reporting norms governed by the Credit Information Companies (Regulation) Act, 2005 (CICRA), historical credit entries remain visible in your credit report for up to <strong>7 years</strong>.
            </p>
            <p>
              However, the <em>algorithmic impact</em> of a settlement on your numerical CIBIL score diminishes dramatically with time:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm block mb-1">Months 1 to 12 (Cooling-off Period)</span>
                <p className="text-xs text-slate-800">Highest sensitivity. Unsecured loans restricted. Primary focus must be on zero defaults and building secured credit.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm block mb-1">Months 13 to 24 (Rehabilitation Phase)</span>
                <p className="text-xs text-slate-800">CIBIL score typically rebounds to 700–740 if secured credit is serviced with 100% on-time payments. Gold loans and vehicle loans readily accessible.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm block mb-1">Months 25+ (Prime Restoration)</span>
                <p className="text-xs text-slate-800">Recent positive payment history heavily outweighs 2-year-old settled entries. Score climbs past 750+, qualifying you for home loans and secured business credit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 29 */}
        <section id="how-to-rebuild-cibil-after-settling-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 29</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            29. How to Rebuild CIBIL After Settling Multiple Credit Cards
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Rebuilding your CIBIL score from 550 back past 750 after settling multiple credit cards is completely achievable by following this proven 4-step financial restoration protocol:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Open Two FD-Backed Secured Credit Cards:</strong> Apply for secured credit cards backed by small fixed deposits (e.g., ₹25,000 each in IDFC First WOW and Kotak 811 DreamDifferent). These cards do not require credit score checks and report fresh standard repayment tradelines to CIBIL every month.</li>
              <li><strong>Enforce Strict 15% Credit Utilization:</strong> If your secured card limit is ₹20,000, never spend more than ₹3,000 in any billing cycle. Low credit utilization ratio (CUR) accelerates credit score recovery.</li>
              <li><strong>Activate 100% Auto-Debit for Total Bill:</strong> Never pay only the minimum due; configure full balance auto-debit to guarantee a 100% on-time payment track record.</li>
              <li><strong>Add a Secured Consumer Durable or Gold Loan:</strong> Servicing a small secured installment loan adds credit mix diversity, which accounts for 10% of the CIBIL scoring algorithm.</li>
            </ol>
          </div>
        </section>


            {/* PART 5 (SECTIONS 30 TO 38) */}
            
        {/* SECTION 30 */}
        <section id="rbi-guidelines-for-credit-card-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 30</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            30. RBI Guidelines for Credit Card Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Credit card settlements in India operate under comprehensive central bank regulations, primarily codified in two landmark regulatory frameworks:
            </p>
            <div className="space-y-3 my-4">
              <div className="p-4 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">
                  1. RBI Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022
                </h4>
                <p className="text-xs sm:text-sm text-black">
                  Mandates strict transparency in interest rate disclosures, explicitly prohibits negative amortization, and requires banks to provide clear, standardized procedures for resolving disputed transactions and distressed card accounts.
                </p>
              </div>

              <div className="p-4 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">
                  2. RBI Prudential Framework for Compromise Settlements (June 8, 2023)
                </h4>
                <p className="text-xs sm:text-sm text-black">
                  Directs all regulated commercial banks and NBFCs to establish non-discriminatory, board-approved policies governing compromise settlements for all retail borrowers, establish transparent delegation of powers, and institute a standardized cooling-off period of at least 12 months before considering fresh credit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 31 */}
        <section id="rbi-rules-for-credit-card-recovery-agents" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 31</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            31. RBI Rules for Credit Card Recovery Agents
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              The Reserve Bank of India’s <strong>Master Circular on Recovery Agents (August 2022)</strong> establishes strict legal boundaries to curb predatory collection behavior:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Time Restrictions:</strong> Recovery calls and physical visits can only occur between <strong>8:00 AM and 7:00 PM</strong>. Any call or message outside these hours is a punishable regulatory violation.</li>
              <li><strong>Absolute Prohibition of Harassment:</strong> Agents are strictly barred from using abusive language, physical intimidation, persistent repetitive phone calls, or public embarrassment.</li>
              <li><strong>Third-Party Contact Prohibited:</strong> Calling your workplace colleagues, supervisors, parents, relatives, or neighbors regarding your credit card debt violates customer privacy and the Digital Personal Data Protection Act, 2023.</li>
              <li><strong>Mandatory Identification:</strong> Agents must carry official bank identity cards, a copy of the bank authorization letter, and notice of card debt.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 32 */}
        <section id="multiple-credit-card-default-what-happens-if-you-stop-paying" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 32</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            32. Multiple Credit Card Default – What Happens If You Stop Paying?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              When you stop paying on multiple credit cards, each card follows a predictable institutional trajectory:
            </p>
            <div className="space-y-2.5 my-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm">Days 1–30:</span>
                <span className="text-xs sm:text-sm text-slate-800 ml-2">Automated SMS, emails, and courteous call reminders from bank in-house customer service.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm">Days 31–60:</span>
                <span className="text-xs sm:text-sm text-slate-800 ml-2">Cards are temporarily suspended; late payment fees and interest compounding accelerate; calls intensify.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm">Days 61–90:</span>
                <span className="text-xs sm:text-sm text-slate-800 ml-2">Cards permanently blocked; files reassigned to regional external collection agencies; initial advocate legal notices dispatched.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-xs sm:text-sm">Days 91+ (NPA Classification):</span>
                <span className="text-xs sm:text-sm text-slate-800 ml-2">Account classified as Non-Performing Asset; interest accrual freezes in bank P&amp;L; OTS negotiation window opens.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 33 */}
        <section id="legal-consequences-of-multiple-credit-card-defaults" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 33</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            33. Legal Consequences of Multiple Credit Card Defaults
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              It is critical to distinguish between reality and recovery agent bluffing regarding legal liability:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>No Police Arrest for Credit Card Dues:</strong> Credit card default is purely a civil contractual default under the Indian Contract Act. The police have no legal authority to intervene or arrest you for unpaid card balances.</li>
              <li><strong>No Automatic Property Seizure:</strong> Because credit cards are unsecured, banks have no mortgage over your home, car, or household assets. They cannot seize your personal property without a decree from a competent civil court after years of trial.</li>
              <li><strong>Quasi-Criminal Notice Risks:</strong> If you issued physical post-dated cheques that bounced, the bank can invoke Section 138 of the Negotiable Instruments Act. If you had auto-debit NACH mandates that bounced, the bank can invoke Section 25 of the Payment and Settlement Systems Act (PSSA). Both are bailable and compoundable offenses.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 34 */}
        <section id="can-banks-take-legal-action-for-credit-card-dues" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 34</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            34. Can Banks Take Legal Action for Credit Card Dues?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Yes, banks possess statutory remedies, but their actual deployment depends on commercial economics:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Civil Summary Suit (Order 37 CPC):</strong> Banks can file a civil recovery suit in a city civil court. However, court fees, advocate fees, and procedural delays of 3 to 7 years make civil suits uneconomical for debts below ₹10 Lakhs.</li>
              <li><strong>Sole Arbitrator Proceedings:</strong> Many banks appoint sole arbitrators to pass ex-parte arbitral awards. These can be challenged in High Courts under Section 34 of the Arbitration Act if the arbitrator was unilaterally appointed in violation of the Supreme Court&apos;s <em>Perkins Eastman</em> ruling.</li>
              <li><strong>Lok Adalat Referral:</strong> Banks frequently refer multi-card default matters to National and State Lok Adalats, which provide an ideal statutory forum to finalize mutually agreed OTS settlements with judicial sanction.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 35 */}
        <section id="multiple-card-settlement-after-receiving-legal-notices" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 35</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            35. Multiple Credit Card Settlement After Receiving Legal Notices
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Receiving legal notices from multiple card issuers can be overwhelming, but it actually signals that the accounts have reached the <strong>ideal legal settlement threshold</strong>.
            </p>
            <p>
              When you receive an advocate notice:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li>Do not ignore it; unreplied notices create an adverse legal presumption in court.</li>
              <li>Have a qualified debt defense counsel serve an assertive, factual legal reply within 15 days, documenting your genuine insolvency and requesting an amicable settlement under RBI guidelines.</li>
              <li>Use the legal reply as an anchor to transfer the file to the bank&apos;s legal settlement committee, where haircuts of 55% to 70% are routinely approved to avoid court litigation expenses.</li>
            </ol>
          </div>
        </section>

        {/* SECTION 36 */}
        <section id="multiple-card-settlement-during-arbitration-legal-proceedings" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 36</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            36. Multiple Credit Card Settlement During Arbitration or Legal Proceedings
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Even if one or more card issuers have initiated arbitration or filed court complaints, settlement remains fully permissible at every stage prior to final execution:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Section 147 NI Act Compounding:</strong> Dishonour of cheques is a compoundable offense. Upon payment of the agreed settlement sum, the complainant bank is legally bound to withdraw the criminal complaint.</li>
              <li><strong>Consent Arbitral Award (Section 30):</strong> The parties can jointly petition the arbitrator to record the compromise terms as a Consent Award, terminating all claims.</li>
              <li><strong>Pre-Litigation Lok Adalat:</strong> Courts facilitate zero-court-fee settlements during Lok Adalat sessions, providing an unappealable judicial closure order.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 37 */}
        <section id="recovery-agent-harassment-when-you-have-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 37</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            37. Recovery Agent Harassment When You Have Multiple Credit Cards
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Holding multiple defaulted credit cards exposes you to simultaneous harassment from several distinct collection agencies. Because agencies compete for limited recoveries, their callers frequently resort to extreme pressure tactics—including calling from multiple virtual numbers, threatening to visit your workplace, or sending fake legal notices on WhatsApp.
            </p>
            <p>
              To neutralize this multi-front harassment:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Install call-recording apps to preserve contemporaneous audio evidence of every interaction.</li>
              <li>Demand the caller&apos;s full name, agency registration number, and bank employee ID. Recovery callers routinely hang up when held accountable to RBI compliance rules.</li>
              <li>Never engage in emotional shouting matches. State firmly: <em>&quot;My account is currently under formal legal representation and compromise review with the bank&apos;s Nodal Officer. Communicate only through formal written correspondence.&quot;</em></li>
            </ul>
          </div>
        </section>

        {/* SECTION 38 */}
        <section id="borrowers-rights-against-recovery-agent-harassment" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 38</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            38. Borrower&apos;s Rights Against Recovery Agent Harassment
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Every Indian citizen possesses constitutionally and regulatory protected rights against abusive debt recovery:
            </p>
            <div className="p-4 sm:p-5 bg-amber-50/80 border-l-4 border-amber-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">Statutory Protections for Defaulting Cardholders</h4>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-black">
                <li><strong>Right to Privacy:</strong> Calling third parties or visiting neighbors violates Article 21 of the Constitution and RBI Master Directions.</li>
                <li><strong>Right to Escalate:</strong> You can file formal complaints with the Bank Principal Nodal Officer (PNO) and the <strong>RBI Integrated Ombudsman</strong> (cms.rbi.org.in), which regularly fines banks for agent misconduct.</li>
                <li><strong>Criminal Remedies:</strong> Threats of violence, extortion, or criminal intimidation can be countered by filing complaints under Section 503/506 of the Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS) with local police.</li>
              </ul>
            </div>
          </div>
        </section>


            {/* PART 6 (SECTIONS 39 TO 44) */}
            
        {/* SECTION 39 */}
        <section id="documents-required-for-multiple-credit-card-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 39</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            39. Documents Required for Multiple Credit Card Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              To substantiate your financial inability to repay multiple credit cards, prepare a standardized master documentary dossier:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>KYC Documents:</strong> PAN card, Aadhaar card, current utility bill (electricity/gas) confirming address.</li>
              <li><strong>Credit Card Statements:</strong> Latest monthly statements of all defaulted credit cards showing breakdown of claimed dues.</li>
              <li><strong>Bank Statements (Past 12 Months):</strong> Statements of all active savings and current accounts across all banks proving zero surplus cash reserves.</li>
              <li><strong>Income Disruption Proof:</strong> Termination letters, pink slips, salary reduction circulars, business closure notices, or ITR acknowledgments showing drop in gross total income.</li>
              <li><strong>Medical Emergency Proof (If Applicable):</strong> Hospital discharge summaries, surgery billing records, chemotherapy or dialysis protocols.</li>
              <li><strong>Affidavit of Assets and Liabilities:</strong> A sworn notarized affidavit declaring under oath that you own no unencumbered marketable real estate, gold, or corporate shares.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 40 */}
        <section id="financial-hardship-and-multiple-credit-card-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 40</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            40. Financial Hardship and Multiple Credit Card Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Financial hardship is the legal bridge between loan default and a sanctioned settlement haircut. Bank credit committees cannot approve debt forgiveness out of emotional sympathy; their decisions must be backed by documented hardship to satisfy statutory banking auditors.
            </p>
            <p>
              When presenting hardship across multiple credit cards:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Demonstrate that your aggregate debt servicing obligations exceed your total verifiable income.</li>
              <li>Show that your monthly essential survival costs (rent, food, child schooling, healthcare) consume 100% of your current income.</li>
              <li>Highlight that the proposed settlement funds are not your own operational money, but a compassionate, one-time loan raised from family members strictly conditioned on achieving full account closures.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 41 */}
        <section id="multiple-card-settlement-after-job-loss" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 41</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            41. Multiple Credit Card Settlement After Job Loss
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Corporate retrenchment, company downsizing, and tech industry layoffs are prime catalysts for multi-card defaults in urban centers. When a borrower loses a high-paying salary, maintaining credit card balances accumulated during prosperous times becomes an impossibility.
            </p>
            <p>
              To execute settlements post-job loss:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide the formal <strong>Relieving Letter</strong> or <strong>Retrenchment Notice</strong> from your previous employer.</li>
              <li>Furnish bank statements showing the abrupt cessation of monthly salary credits.</li>
              <li>If you have taken a new role with a significant pay-cut (e.g., 50% lower salary), submit the new appointment letter to prove that your current income cannot support the legacy revolving debt.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 42 */}
        <section id="multiple-card-settlement-after-business-income-loss" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 42</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            42. Multiple Credit Card Settlement After Business or Income Loss
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Entrepreneurs, freelancers, and proprietary business owners frequently use personal credit cards to fund working capital during business downturns, hoping cash flow will recover. When the business collapses, the entrepreneur is left holding crushing personal credit card liabilities.
            </p>
            <p>
              To settle business-driven credit card debt:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Submit audited Profit &amp; Loss statements showing sustained operational losses and negative net margins.</li>
              <li>Provide GST surrender or cancellation certificates, commercial lease termination deeds, or insolvency petitions.</li>
              <li>Establish that business failure was caused by market factors (client default, regulatory bans) rather than fraudulent siphoning of capital.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 43 */}
        <section id="multiple-card-settlement-due-to-financial-emergency" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 43</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            43. Multiple Credit Card Settlement Due to Financial Emergency
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Acute family emergencies—such as prolonged ICU hospitalizations, expensive cancer treatments, major organ transplants, or the sudden demise of a co-earning spouse—frequently drain family life savings and force emergency credit card swipes.
            </p>
            <p>
              Medical hardship is treated with the highest degree of latitude by bank credit committees:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Credit committees routinely approve <strong>haircuts exceeding 70%</strong> on credit cards when catastrophic medical insolvency is established.</li>
              <li>Provide detailed hospital discharge summaries, itemized inpatient bills, pharmacy receipts, and diagnostic pathology reports.</li>
              <li>Demonstrate that medical expenditures completely wiped out liquid emergency savings, leaving the family incapable of servicing unsecured credit card balances.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 44 */}
        <section id="how-to-prepare-settlement-proposal-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 44</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            44. How to Prepare a Settlement Proposal for Multiple Credit Cards
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Your formal OTS proposal letter must be drafted with precision and sent to each credit card issuer. Below is an authoritative multi-card settlement proposal template:
            </p>

            <div className="p-4 sm:p-6 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto my-4 space-y-3">
              <p>To,</p>
              <p>The Head – Credit Cards Collections &amp; Stressed Assets Division,<br />[Name of Card-Issuing Bank / NBFC],<br />[Registered Office Address / Zonal Office Address]</p>
              
              <p><strong>SUBJECT: Formal Proposal for One-Time Settlement (OTS) under RBI Compromise Guidelines in respect of Credit Card No. [XXXX-XXXX-XXXX-XXXX]</strong></p>
              
              <p>Respected Sir/Madam,</p>
              
              <p>1. I am the primary holder of the captioned Credit Card account issued by your esteemed institution, bearing Account / Card Number [Insert Card Number].</p>
              
              <p>2. I maintained a flawless repayment track record for several years until [Month, Year]. Due to unforeseen, catastrophic circumstances—specifically [Detail: corporate layoff / critical medical emergency / business shutdown]—my income has ceased entirely, resulting in default.</p>
              
              <p>3. As per your latest statement, the claimed outstanding is ₹[Total Statement Balance]. However, my actual retail purchase principal is ₹[Pure Principal Spend], while the remainder comprises compounded revolving finance charges (at 45%+ APR), late payment penalties, and GST levies.</p>
              
              <p>4. In accordance with the Reserve Bank of India’s Prudential Framework for Compromise Settlements (June 2023), I am requesting a formal One-Time Settlement. Having exhausted all personal savings, I have arranged a one-time humanitarian financial corpus from close relatives.</p>
              
              <p>5. I hereby offer <strong>₹[Offer Amount in Figures] (Rupees [Offer Amount in Words] Only)</strong>, representing approximately [30% / 40%] of the unpaid principal spend, as full and final settlement of all claims under this card account.</p>
              
              <p>6. Upon receipt of your formal written OTS Sanction Letter on bank letterhead, I undertake to deposit this sum within [15 / 30] business days directly into my credit card account, subject to issuance of an unconditional No-Dues Certificate and withdrawal of any pending notices.</p>
              
              <p>7. Enclosed please find documentary exhibits substantiating my acute hardship (Annexures A to D).</p>
              
              <p>Yours faithfully,<br />[Your Signature]<br />[Your Full Name]<br />[Contact Address, Phone, Email]</p>
            </div>
          </div>
        </section>


            {/* PART 7 (SECTIONS 45 TO 55) */}
            
        {/* SECTION 45 */}
        <section id="how-to-negotiate-with-banks-credit-card-issuers" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 45</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            45. How to Negotiate With Banks and Credit Card Issuers
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Credit card collection departments operate on algorithmic recovery targets. To negotiate successfully with multiple institutions:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Do Not Speak to Tele-Callers About Haircuts:</strong> Third-party agency callers have zero authority to grant discounts. Politely insist on escalating your file to the <strong>Area Collection Manager (ACM)</strong> or <strong>Stressed Assets Head</strong>.</li>
              <li><strong>Anchor to Pure Spend Only:</strong> Strip out all finance charges and GST immediately. Frame the conversation around the baseline purchase capital: <em>&quot;Let us discuss recovering the money I actually spent, not fictitious 50% compounding interest.&quot;</em></li>
              <li><strong>Maintain Emotional Detachment:</strong> Never plead or beg. Treat the settlement as an objective commercial negotiation between an insolvent borrower and a financial institution managing provisioned credit risk.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 46 */}
        <section id="how-to-handle-different-settlement-offers-different-banks" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 46</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            46. How to Handle Different Settlement Offers From Different Banks
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              When negotiating across multiple lenders, you will receive vastly divergent responses. Bank A may offer an aggressive 65% haircut, while Bank B may rigidly insist on an 85% payment.
            </p>
            <p>
              To navigate asymmetric counter-offers:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Close the Flexible Creditor First:</strong> Accept Bank A&apos;s 65% discount immediately. Remit the funds, lock in the closure, and obtain the NDC.</li>
              <li><strong>Use Time Decay Against the Rigid Creditor:</strong> Let Bank B wait. As Bank B&apos;s account ages further into NPA and crosses another fiscal quarter-end, their provisioning costs rise, eventually forcing their committee to match Bank A&apos;s discount.</li>
              <li><strong>Never Reveal Bank A&apos;s Sanction to Bank B:</strong> Keep all discussions strictly segregated.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 47 */}
        <section id="how-to-manage-settlement-payments-across-multiple-banks" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 47</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            47. How to Manage Settlement Payments Across Multiple Banks
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Managing payment schedules across several banks requires rigorous cash flow timing:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Stagger Payment Deadlines:</strong> Never allow two large settlement deadlines to fall on the exact same date. Stagger sanction letter due dates by at least 15 to 20 days so you can verify fund realization sequentially.</li>
              <li><strong>Maintain a 10% Cash Cushion:</strong> Keep a 10% liquid buffer in your settlement reserve to absorb bank administrative fees or small final adjustment differences.</li>
              <li><strong>Safe Payment Modes Only:</strong> Remit settlement funds exclusively via NEFT/RTGS directly into the 16-digit credit card account number, or pay via cash/cheque counter slip at a physical bank branch with an official teller stamp and UTR number.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 48 */}
        <section id="how-to-verify-settlement-letters-multiple-banks" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 48</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            48. How to Verify Settlement Letters From Multiple Banks
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Counterfeit settlement letters issued by corrupt collection agents are rampant in multi-card default scenarios. Before paying a single rupee to any bank, verify this 5-point authentication protocol:
            </p>
            <div className="p-4 sm:p-5 bg-amber-50/80 border-l-4 border-amber-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">Multi-Bank Sanction Letter Verification Checklist</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                <li><strong>Official Bank Stationery:</strong> Must be printed on authentic corporate letterhead showing registered office details, CIN, and official logo.</li>
                <li><strong>Unique Dispatch Number:</strong> Must carry a traceable reference or dispatch number logged in the bank&apos;s CBS intranet.</li>
                <li><strong>Signatory Authorization:</strong> Must be signed by an authorized officer (Manager / Vice President) with employee code stamp.</li>
                <li><strong>Absolute Discharge Clause:</strong> Must clearly state that upon payment of ₹[X], the account is closed in full satisfaction of all claims with ₹0 residual liability.</li>
                <li><strong>Official Email Verification:</strong> Ensure the letter is emailed directly from the bank&apos;s official domain (e.g., @hdfcbank.com, @sbicard.com, @icicibank.com), not from personal Gmail or Yahoo addresses.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 49 */}
        <section id="settlement-letter-no-dues-certificate-closure-documents" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 49</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            49. Settlement Letter, No-Dues Certificate and Closure Documents
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              After remitting the agreed settlement sum to each bank, you must collect and permanently safeguard three foundational closure documents from each creditor:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li><strong>Stamped Payment Receipt:</strong> Acknowledging the credit of the exact settlement sum with UTR tracking details.</li>
              <li><strong>Unconditional No-Dues Certificate (NDC):</strong> Stating that the cardholder owes zero remaining balance and that the bank discharges all rights of action.</li>
              <li><strong>Cancellation of NACH Mandates:</strong> Confirmation that all electronic auto-debits have been permanently revoked in the NPCI clearing system.</li>
            </ol>
            <p>
              Scan and store physical and cloud backups of these documents permanently. They protect you if a bad-debt portfolio is mistakenly sold to an ARC years later.
            </p>
          </div>
        </section>

        {/* SECTION 50 */}
        <section id="how-to-check-multiple-settled-accounts-on-credit-report" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 50</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            50. How to Check Multiple Settled Accounts on Your Credit Report
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under RBI mandates, banks must report account resolution data to all four credit bureaus within <strong>30 to 45 days</strong> of receiving full settlement funds.
            </p>
            <p>
              To verify reporting compliance:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Pull fresh credit reports from CIBIL, Experian, Equifax, and CRIF 45 days after the final settlement payment.</li>
              <li>Review the &quot;Account Information&quot; section for every settled credit card line.</li>
              <li>Confirm that the &quot;Current Balance&quot; and &quot;Amount Overdue&quot; both display <strong>₹0</strong>, and the status reads <strong>&quot;Settled&quot;</strong>.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 51 */}
        <section id="how-to-correct-incorrect-credit-bureau-reporting" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 51</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            51. How to Correct Incorrect Credit Bureau Reporting
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              If a bank fails to update your credit report and continues showing an active overdue balance or DPD bleed after settlement:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li>Raise an official Online Dispute with CIBIL / Experian, attaching your OTS Sanction Letter, payment proof, and No-Dues Certificate.</li>
              <li>Under the <em>Credit Information Companies (Regulation) Act, 2005</em>, bureaus must resolve disputes within <strong>30 days</strong>.</li>
              <li>Simultaneously issue a formal grievance to the bank Principal Nodal Officer. If unrectified within 30 days, file an escalation with the RBI Integrated Ombudsman, which awards compensation for erroneous credit reporting.</li>
            </ol>
          </div>
        </section>

        {/* SECTION 52 */}
        <section id="what-happens-after-settling-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 52</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            52. What Happens After Settling Multiple Credit Cards?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Executing settlements across all your delinquent credit cards triggers immediate financial normalization:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>All collection harassment, automated robocalls, and home visits cease permanently.</li>
              <li>Compounding 45%+ interest stops accumulating on your name.</li>
              <li>Your credit score freezes at its baseline, ready for upward credit rebuilding.</li>
              <li>You regain 100% of your future monthly income for living expenses and fresh wealth creation.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 53 */}
        <section id="can-you-get-a-loan-after-settling-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 53</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            53. Can You Get a Loan After Settling Multiple Credit Cards?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Yes, but access to credit follows a structured timeline:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li><strong>Months 1 to 12:</strong> Unsecured personal loans will be rejected. However, <strong>Gold Loans</strong> and <strong>Loans Against Fixed Deposits</strong> remain 100% accessible because they are collateralized.</li>
              <li><strong>Months 12 to 24:</strong> Two-wheeler loans, secured used car loans, and consumer durable loans become accessible as your CIBIL score crosses 700.</li>
              <li><strong>Months 24+:</strong> Home loans and mortgage facilities become fully viable with manual underwriting justification of past medical/job-loss hardship.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 54 */}
        <section id="can-you-get-a-credit-card-after-multiple-settlements" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 54</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            54. Can You Get a Credit Card After Multiple Settlements?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              You can immediately acquire a <strong>Secured Credit Card</strong> backed by a Fixed Deposit (FD) on the very day your settlement documents clear. Banks like IDFC First Bank, Kotak Mahindra Bank, and State Bank of India issue secured cards with zero credit score checks.
            </p>
            <p>
              After 18 to 24 months of flawless on-time repayments on a secured card, other private banks will begin extending fresh unsecured credit card offers based on your restored repayment behavior.
            </p>
          </div>
        </section>

        {/* SECTION 55 */}
        <section id="how-to-rebuild-financial-profile-after-multiple-settlements" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 55</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            55. How to Rebuild Your Financial Profile After Multiple Settlements
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              True financial rehabilitation extends beyond credit scores. To rebuild enduring financial stability:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Build a 6-Month Emergency Fund:</strong> Stash 6 months of mandatory living expenses in a liquid mutual fund or auto-sweep bank account before taking on any new liabilities.</li>
              <li><strong>Adopt Debit-First Discipline:</strong> Live strictly within cash flow means for at least 18 months.</li>
              <li><strong>Acquire Adequate Health and Term Insurance:</strong> Shield your family with comprehensive standalone term and health insurance so a future health crisis never forces emergency credit card borrowing again.</li>
            </ol>
          </div>
        </section>


            {/* PART 8 (SECTIONS 56 TO 63) */}
            
        {/* SECTION 56 */}
        <section id="common-mistakes-to-avoid-settling-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 56</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            56. Common Mistakes to Avoid When Settling Multiple Credit Cards
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Navigating multi-bank credit card debt without institutional guidance exposes borrowers to critical errors:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 1: Paying Partial Tokens on Verbal Promises</h4>
                <p className="text-xs text-slate-800">Never deposit money because an agency caller promises over the phone that &quot;paying ₹25,000 will settle the card.&quot; The bank ledger will absorb that money as normal interest and demand the full balance next month.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 2: Missing Staggered Deadlines</h4>
                <p className="text-xs text-slate-800">Missing an agreed payment due date on an OTS letter cancels the settlement automatically, forfeiting all granted waivers.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 3: Leaving Salary Accounts Exposed</h4>
                <p className="text-xs text-slate-800">Failing to shift your salary account away from a card-issuing bank allows that bank to freeze and drain your monthly wages under banker&apos;s lien.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 4: Not Collecting No-Dues Certificates</h4>
                <p className="text-xs text-slate-800">Assuming payment alone closes the account without collecting physical NDCs leaves you vulnerable to future collection demands if portfolios are assigned to ARCs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 57 */}
        <section id="multiple-credit-card-settlement-scams-and-fraud" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 57</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            57. Multiple Credit Card Settlement Scams and Fraud
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Distressed multi-card debtors are targeted by predatory syndicates. Protect yourself against these widespread fraudulent patterns:
            </p>
            <div className="p-4 sm:p-5 bg-red-50/80 border-l-4 border-red-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">Major Multi-Card Fraud Warning Signs:</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                <li><strong>The &quot;Guaranteed CIBIL Erase&quot; Scam:</strong> Fraudulent consultants claiming they can erase all default records from CIBIL database for an upfront fee. Under CICRA 2005, credit bureau entries are algorithmically logged and cannot be manually deleted.</li>
                <li><strong>Forged WhatsApp Sanction Letters:</strong> Bogus recovery agents sending fake PDF letters with forged bank logos and directing settlement payments to third-party agency UPI IDs.</li>
                <li><strong>Advance Fee Exploitation:</strong> Unregistered operators demanding large upfront fees without offering written legal representation, statutory notice drafting, or verified lawyer intervention.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 58 */}
        <section id="how-to-choose-a-credit-card-settlement-company" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 58</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            58. How to Choose a Credit Card Settlement Company
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              When selecting an institutional partner to resolve multi-lender credit card debts, verify the following four credentials:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Advocate-Led Legal Representation:</strong> Ensure negotiations are supervised by practicing advocates enrolled with State Bar Councils who can legally draft replies to Section 138, Section 25, and arbitration notices.</li>
              <li><strong>Transparent Fee Structure:</strong> Reputable organizations operate on transparent, milestone-linked service agreements rather than vague promises.</li>
              <li><strong>Comprehensive Anti-Harassment Protocol:</strong> The company must issue formal legal notices to bank Nodal Officers redirecting all recovery calls away from the borrower.</li>
              <li><strong>End-to-End Execution:</strong> The company must oversee sanction letter verification, safe direct payment to the bank, and issuance of the final No-Dues Certificate.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 59 */}
        <section id="credit-card-settlement-company-vs-direct-bank-negotiation" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 59</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            59. Credit Card Settlement Company vs Direct Bank Negotiation
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Comparing unassisted direct negotiation against professional institutional settlement:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-black font-bold">
                    <th className="p-3 border border-slate-200">Parameter</th>
                    <th className="p-3 border border-slate-200">Unassisted Direct Negotiation</th>
                    <th className="p-3 border border-slate-200">CredSettle Professional Settlement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Typical Haircut %</td>
                    <td className="p-3 border border-slate-200">20% to 35% (banks exploit borrower lack of knowledge)</td>
                    <td className="p-3 border border-slate-200 font-bold text-emerald-700">55% to 75% (benchmarked against bank board limits)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Recovery Harassment</td>
                    <td className="p-3 border border-slate-200">Continuous daily calls, home visits, and family pressure</td>
                    <td className="p-3 border border-slate-200 font-bold text-blue-700">Neutralized via formal legal representation notices</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Legal Notice Defense</td>
                    <td className="p-3 border border-slate-200">Borrower unequipped to draft Section 138/25 replies</td>
                    <td className="p-3 border border-slate-200 font-bold text-blue-700">Expertly drafted statutory legal replies protect rights</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Document Verification</td>
                    <td className="p-3 border border-slate-200">High vulnerability to fake letters &amp; misapplied funds</td>
                    <td className="p-3 border border-slate-200 font-bold text-blue-700">Strict legal audit of sanction letters &amp; NDCs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 60 */}
        <section id="professional-assistance-for-multiple-credit-card-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 60</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            60. Professional Assistance for Multiple Credit Card Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              CredSettle provides India&apos;s foremost advocate-backed debt resolution platform for multi-card stressed borrowers. Our specialized legal teams manage the entire multi-lender lifecycle:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">Waterfall Sequencing</span>
                <p className="text-xs text-slate-800">We design a customized multi-bank resolution matrix that prioritizes high-threat accounts and optimizes your available liquidity.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">Multi-Bank Representation</span>
                <p className="text-xs text-slate-800">We represent you across HDFC, SBI Card, ICICI, Axis, Kotak, RBL, and Amex, negotiating directly with higher-tier Credit Committees.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">Statutory Notice Shield</span>
                <p className="text-xs text-slate-800">Our advocates draft and serve legal replies to Section 138, Section 25 PSSA, and arbitration notices, halting court escalations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 61 */}
        <section id="faqs-about-settling-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 61</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            61. Frequently Asked Questions About Settling Multiple Credit Cards
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Explore authoritative answers to the most common questions regarding multi-card debt resolution:
            </p>

            <div className="space-y-3 my-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-4.5 font-bold text-black flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm md:text-base">{faq.q}</span>
                    <span className="text-blue-600 font-extrabold text-lg">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 text-xs sm:text-sm text-slate-800 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 62 */}
        <section id="multiple-card-settlement-complete-step-by-step-guide" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 62</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            62. Multiple Credit Card Settlement – Complete Step-by-Step Guide
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Here is your executive master roadmap to achieve complete freedom from multiple credit card debts:
            </p>

            <div className="space-y-2.5 my-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Step 1:</span>
                <span className="text-xs sm:text-sm text-slate-800">Stop paying revolving minimum amount dues (MAD) that only feed 45%+ APR compounding interest.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Step 2:</span>
                <span className="text-xs sm:text-sm text-slate-800">Relocate your salary and operating savings accounts to an unlinked bank to prevent banker lien debits.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Step 3:</span>
                <span className="text-xs sm:text-sm text-slate-800">Audit all card statements; separate pure purchase capital from waivable finance fees and GST.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Step 4:</span>
                <span className="text-xs sm:text-sm text-slate-800">Assemble an empirical financial hardship dossier (job loss, medical reports, or business deficit statements).</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Step 5:</span>
                <span className="text-xs sm:text-sm text-slate-800">Prioritize debts using the 3-Tier Risk Hierarchy and pool settlement funds for Waterfall allocation.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Step 6:</span>
                <span className="text-xs sm:text-sm text-slate-800">Submit formal written OTS proposals to the Stressed Assets Division of each bank offering 30% to 40% of principal.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Step 7:</span>
                <span className="text-xs sm:text-sm text-slate-800">Negotiate committee counter-offers; audit written OTS Sanction Letters for full legal release covenants.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Step 8:</span>
                <span className="text-xs sm:text-sm text-slate-800">Remit settlement funds directly to card accounts via NEFT/RTGS; collect No-Dues Certificates and rebuild credit.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 63 */}
        <section id="conclusion-how-to-successfully-settle-multiple-credit-cards" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 63</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            63. Conclusion – How to Successfully Settle Multiple Credit Cards
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Defaulting on multiple credit cards is not a reflection of moral inadequacy; it is an economic reality of urban living in the face of sudden, unforeseen life shocks. Continuing to feed 50%+ annual compounding interest through partial payments only deepens the trap.
            </p>
            <p>
              By leveraging the Reserve Bank of India’s compromise settlement frameworks, isolating your operating accounts, prioritizing high-risk cards, presenting an irrefutable hardship dossier, and negotiating structured haircuts, you can eliminate multiple credit card debts at a fraction of their cost.
            </p>

            {/* GOLDEN CONCLUSION CALLOUT BOX */}
            <div className="mt-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white p-6 sm:p-10 shadow-xl">
              <span className="text-xs font-black tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full text-blue-200 inline-block mb-3 border border-white/10">
                MULTI-CARD RESOLUTION DESK
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 tracking-tight">
                Trapped Under Multiple Credit Cards? Settle With 55% to 75% Debt Waivers.
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
                Connect with CredSettle&apos;s senior banking debt resolution advocates today. We coordinate multi-bank negotiations across HDFC, SBI Card, ICICI, Axis, and others, halt recovery agent harassment, defend legal notices, and secure your unconditional No-Dues Certificates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-blue-900 font-extrabold rounded-full text-center hover:bg-slate-100 transition-colors shadow-lg text-xs sm:text-sm"
                >
                  Schedule Free Multi-Card Debt Audit
                </Link>
                <a
                  href="tel:+918800226635"
                  className="px-6 py-3 bg-blue-700/60 hover:bg-blue-700 text-white font-bold rounded-full text-center border border-white/20 transition-colors text-xs sm:text-sm"
                >
                  Call Stressed Card Helpline: +91-8800226635
                </a>
              </div>
            </div>
          </div>
        </section>


            {/* COMPANY SECTION EMBED */}
            <div className="my-8">
              <CompanySection />
            </div>

          </article>

          {/* RIGHT COLUMN: STICKY CONVERSION & LEGAL SHIELD (15%) */}
          <aside className="hidden lg:block lg:w-[15%] shrink-0 sticky top-24 space-y-4">
            
            {/* Urgent Multi-Card Assistance Card */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-xl p-4 shadow-lg border border-blue-700/40">
              <span className="text-[10px] font-black tracking-wider uppercase bg-blue-500/30 text-blue-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
                MULTI-CARD RELIEF DESK
              </span>
              <h4 className="font-black text-sm mb-2 leading-snug">
                Settle 3 to 7 Credit Cards?
              </h4>
              <p className="text-[11px] text-blue-100/90 mb-3 leading-relaxed">
                Halt multi-agency harassment and secure 55% to 75% debt waivers across all lenders.
              </p>
              <ul className="text-[10px] space-y-1.5 text-blue-200 mb-4 font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>55%–75% Statement Haircut</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>100% 45%+ APR Fee Waiver</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Banker Lien Legal Shield</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Verified No-Dues Certificates</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full py-2 bg-white hover:bg-slate-100 text-blue-950 font-extrabold text-xs rounded-lg text-center block transition-colors shadow-sm"
              >
                Request Free Multi-Card Audit
              </Link>
              <a
                href="tel:+918800226635"
                className="w-full mt-2 py-1.5 bg-blue-800/60 hover:bg-blue-800 text-white font-bold text-[11px] rounded-lg text-center flex items-center justify-center gap-1.5 border border-white/10 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>+91-8800226635</span>
              </a>
            </div>

            {/* Regulatory Trust Badge */}
            <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs">
              <h5 className="text-[11px] font-bold text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>CredSettle Legal Defense</span>
              </h5>
              <p className="text-[10px] text-slate-700 leading-relaxed mb-2.5">
                Advocate-supervised multi-bank debt resolution in compliance with the Advocates Act, 1961, and RBI Master Directions on Credit Card Operations.
              </p>
              <div className="text-[10px] text-slate-700 space-y-1 border-t border-slate-100 pt-2 font-medium">
                <div>✓ Multi-Bank Representation</div>
                <div>✓ Zero Agency Coercion</div>
                <div>✓ Section 138/25 PSSA Defense</div>
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* FLOATING ACTION PILL ON MOBILE */}
      {showFloatingNav && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden flex items-center gap-2 bg-slate-900/95 text-white px-4 py-2 rounded-full shadow-2xl border border-white/20 backdrop-blur-md text-xs font-bold">
          <button
            onClick={() => setIsMobileTocOpen(true)}
            className="flex items-center gap-1.5 hover:text-blue-300"
          >
            <Menu className="w-3.5 h-3.5" />
            <span>Chapters ({allLinks.findIndex(l => l.id === activeId) + 1}/63)</span>
          </button>
          <span className="w-px h-3 bg-white/20" />
          <button
            onClick={() => scrollToSection('multi-card-calculator')}
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Calculator</span>
          </button>
          <span className="w-px h-3 bg-white/20" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-slate-400 hover:text-white"
          >
            Top ↑
          </button>
        </div>
      )}

      <Footer />
    </main>
  );
}
