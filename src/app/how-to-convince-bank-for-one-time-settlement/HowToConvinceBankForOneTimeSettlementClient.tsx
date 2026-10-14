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
  Building2,
  Gavel,
  Landmark,
  BadgePercent,
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function HowToConvinceBankForOneTimeSettlementClient() {
  const [activeId, setActiveId] = useState<string>('intro-ots');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  const [showFloatingNav, setShowFloatingNav] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [tocSearch, setTocSearch] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Interactive OTS Assessment Calculator State
  const [calcPrincipal, setCalcPrincipal] = useState<number>(800000);
  const [calcPenalCharges, setCalcPenalCharges] = useState<number>(350000);
  const [calcLoanType, setCalcLoanType] = useState<string>('personal_loan');
  const [calcNpaAge, setCalcNpaAge] = useState<string>('substandard');
  const [calcHardshipType, setCalcHardshipType] = useState<string>('job_loss');

  // Dynamic Calculation Logic
  const otsAnalysis = useMemo(() => {
    const totalClaimed = calcPrincipal + calcPenalCharges;
    const waivedPenalties = calcPenalCharges; // 100% waivable under RBI rules

    let baseHaircutPct = 0.40; // 40% default principal haircut
    if (calcLoanType === 'credit_card') {
      baseHaircutPct = 0.55;
    } else if (calcLoanType === 'business_loan') {
      baseHaircutPct = 0.45;
    } else if (calcLoanType === 'vehicle_shortfall') {
      baseHaircutPct = 0.60;
    }

    if (calcNpaAge === 'doubtful') {
      baseHaircutPct += 0.08;
    } else if (calcNpaAge === 'hardcore') {
      baseHaircutPct += 0.15;
    } else if (calcNpaAge === 'sma_90') {
      baseHaircutPct -= 0.05;
    }

    if (calcHardshipType === 'medical_crisis' || calcHardshipType === 'business_closure') {
      baseHaircutPct += 0.05;
    }

    // Bound between 30% and 70%
    baseHaircutPct = Math.min(0.70, Math.max(0.30, baseHaircutPct));

    const settledPrincipal = Math.round(calcPrincipal * (1 - baseHaircutPct));
    const targetSettlement = settledPrincipal;
    const recommendedFirstOffer = Math.round(targetSettlement * 0.70);
    const totalSavings = totalClaimed - targetSettlement;
    const totalDiscountPct = Math.round((totalSavings / totalClaimed) * 100);

    let authorityLevel = 'Regional Stressed Assets Resolution Branch (SARB)';
    if (calcPrincipal < 500000) {
      authorityLevel = 'Branch Chief Manager / Circle Recovery Head';
    } else if (calcPrincipal > 2000000) {
      authorityLevel = 'Zonal Settlement Advisory Committee / Executive Director';
    }

    let strategicAdvice = 'Anchor firmly on pure principal. Demand full reversal of accrued penal charges and seek 3 monthly tranches.';
    if (calcLoanType === 'credit_card') {
      strategicAdvice = 'Highlight that over 50% of the statement is compounding financing charges. Offer upfront payment to secure max haircut.';
    } else if (calcLoanType === 'vehicle_shortfall') {
      strategicAdvice = 'Since asset repossession is already completed, the deficiency balance is 100% unsecured. Bank provisioned 100%. Settle aggressively.';
    }

    return {
      totalClaimed,
      waivedPenalties,
      targetSettlement,
      recommendedFirstOffer,
      totalSavings,
      totalDiscountPct,
      authorityLevel,
      strategicAdvice
    };
  }, [calcPrincipal, calcPenalCharges, calcLoanType, calcNpaAge, calcHardshipType]);

  // Master 8-Module Navigation Structure (60 Sections)
  const navModules = useMemo(() => [
    {
      moduleTitle: "Module 1: Foundations & Core Concepts",
      links: [
        { id: "intro-ots", label: "1. Introduction to One-Time Settlement (OTS)" },
        { id: "what-is-ots", label: "2. What Is a One-Time Settlement?" },
        { id: "easy-meaning-ots", label: "3. Easy Meaning of One-Time Settlement" },
        { id: "how-ots-works", label: "4. How Does One-Time Settlement Work?" },
        { id: "who-can-request-ots", label: "5. Who Can Request a One-Time Settlement?" },
        { id: "when-to-ask-bank-ots", label: "6. When Should You Ask the Bank for an OTS?" },
        { id: "when-bank-more-likely-consider-ots", label: "7. When Is a Bank More Likely to Consider an OTS?" },
        { id: "how-to-convince-bank-ots", label: "8. How to Convince a Bank for One-Time Settlement" },
      ]
    },
    {
      moduleTitle: "Module 2: Preparation & Hardship Dossier",
      links: [
        { id: "step-by-step-process-request-ots", label: "9. Step-by-Step Process to Request an OTS" },
        { id: "how-to-prepare-before-approaching-bank", label: "10. How to Prepare Before Approaching the Bank" },
        { id: "assessing-total-outstanding-loan", label: "11. Assessing Your Total Outstanding Loan" },
        { id: "understanding-repayment-capacity", label: "12. Understanding Your Repayment Capacity" },
        { id: "explaining-financial-hardship-to-bank", label: "13. Explaining Financial Hardship to the Bank" },
        { id: "how-to-build-strong-settlement-proposal", label: "14. How to Build a Strong Settlement Proposal" },
      ]
    },
    {
      moduleTitle: "Module 3: Valuation, Formulae & Negotiation",
      links: [
        { id: "how-much-to-offer-bank-settlement", label: "15. How Much Should You Offer for Settlement?" },
        { id: "how-banks-decide-settlement-amount", label: "16. How Banks Decide the Settlement Amount" },
        { id: "factors-influence-bank-ots-decision", label: "17. Factors Influencing Bank's OTS Decision" },
        { id: "documents-support-ots-request", label: "18. Documents That Support Your OTS Request" },
        { id: "how-to-write-ots-request-letter", label: "19. How to Write an OTS Request Letter (Template)" },
        { id: "how-to-negotiate-with-bank-ots", label: "20. How to Negotiate With Bank for OTS" },
        { id: "what-to-say-during-ots-negotiations", label: "21. What to Say During OTS Negotiations" },
        { id: "what-not-to-say-during-ots-negotiations", label: "22. What Not to Say During Negotiations" },
      ]
    },
    {
      moduleTitle: "Module 4: Counter-Offers & Structuring",
      links: [
        { id: "how-to-respond-bank-rejects-ots", label: "23. How to Respond When Bank Rejects OTS" },
        { id: "how-to-make-revised-settlement-offer", label: "24. How to Make a Revised Settlement Offer" },
        { id: "can-you-negotiate-settlement-amount", label: "25. Can You Negotiate Settlement Amount?" },
        { id: "can-you-negotiate-interest-penalties", label: "26. Can You Negotiate Interest and Penalties?" },
        { id: "can-you-request-more-time-pay-settlement", label: "27. Requesting More Time to Pay Settlement" },
      ]
    },
    {
      moduleTitle: "Module 5: Institutional & Debt Categories",
      links: [
        { id: "ots-with-banks", label: "28. One-Time Settlement With Banks" },
        { id: "ots-with-nbfcs", label: "29. One-Time Settlement With NBFCs" },
        { id: "ots-for-personal-loans", label: "30. OTS for Personal Loans" },
        { id: "ots-for-credit-card-dues", label: "31. OTS for Credit Card Dues" },
        { id: "ots-for-business-loans", label: "32. OTS for Business Loans" },
        { id: "ots-for-vehicle-loans", label: "33. OTS for Vehicle Loans" },
        { id: "ots-for-multiple-loans", label: "34. OTS for Multiple Loans" },
      ]
    },
    {
      moduleTitle: "Module 6: Defaults, Legal Notices & RBI Framework",
      links: [
        { id: "ots-after-loan-default", label: "35. OTS After Loan Default" },
        { id: "ots-after-receiving-legal-notice", label: "36. OTS After Receiving a Legal Notice" },
        { id: "ots-during-arbitration-legal-proceedings", label: "37. OTS During Arbitration or Litigation" },
        { id: "ots-after-recovery-agent-contact", label: "38. OTS After Recovery Agent Contact" },
        { id: "rbi-guidelines-on-one-time-settlement", label: "39. RBI Guidelines on One-Time Settlement" },
        { id: "rbi-rules-relevant-loan-settlement-recovery", label: "40. RBI Rules for Settlement and Recovery" },
      ]
    },
    {
      moduleTitle: "Module 7: CIBIL Score, Credit Bureau Tracking & Execution",
      links: [
        { id: "ots-and-cibil-score", label: "41. One-Time Settlement and CIBIL Score" },
        { id: "impact-of-ots-on-credit-report", label: "42. Impact of OTS on Credit Report" },
        { id: "settled-vs-closed-loan-account", label: "43. \"Settled\" vs \"Closed\" Loan Account" },
        { id: "how-to-rebuild-cibil-after-ots", label: "44. How to Rebuild CIBIL After OTS" },
        { id: "legal-consequences-loan-default-before-ots", label: "45. Legal Consequences of Default Before OTS" },
        { id: "what-happens-after-bank-accepts-ots-proposal", label: "46. What Happens After Bank Accepts OTS?" },
        { id: "how-to-verify-ots-letter", label: "47. How to Verify an OTS Letter" },
        { id: "how-to-make-ots-payment-safely", label: "48. How to Make OTS Payment Safely" },
        { id: "documents-obtain-after-making-ots-payment", label: "49. Documents to Obtain After Payment" },
        { id: "settlement-letter-and-no-dues-certificate", label: "50. Settlement Letter and No-Dues Certificate" },
        { id: "ensure-bank-updates-credit-report", label: "51. How to Ensure Bank Updates Credit Report" },
        { id: "what-happens-if-cannot-pay-agreed-ots-amount", label: "52. What If You Cannot Pay Agreed Amount?" },
      ]
    },
    {
      moduleTitle: "Module 8: Traps, Scams, Legal Defense & SOP",
      links: [
        { id: "common-reasons-banks-reject-ots-requests", label: "53. Common Reasons Banks Reject OTS Requests" },
        { id: "common-mistakes-avoid-during-ots-negotiation", label: "54. Common Mistakes to Avoid During Negotiation" },
        { id: "one-time-settlement-scams-and-fraud", label: "55. One-Time Settlement Scams and Fraud" },
        { id: "can-a-lawyer-help-negotiate-ots", label: "56. Can a Lawyer Help Negotiate an OTS?" },
        { id: "benefits-professional-ots-negotiation-assistance", label: "57. Benefits of Professional OTS Assistance" },
        { id: "faqs-about-one-time-settlement", label: "58. Frequently Asked Questions About OTS" },
        { id: "ots-complete-step-by-step-guide", label: "59. OTS – Complete Step-by-Step Guide" },
        { id: "conclusion-successfully-negotiate-ots", label: "60. Conclusion – How to Successfully Negotiate OTS" },
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
      q: "Why do branch managers refuse One Time Settlement requests?",
      a: "Branch managers lack special formal to waive main loan. Internal claims quotas penalize haircuts at the branch level. Requiring clients to escalate proposals straight to local credit boards or Stressed Assets claims Branches (SARB)."
    },
    {
      q: "Which bank authority approves an OTS proposal?",
      a: "Depending on loan quantum. OTS approvals are sanctioned by local Stressed Assets relief Branches (SARB). Local deal alert boards. Or Zonal Credit boards under the bank's board-approved Delegation of money Powers (DOFP)."
    },
    {
      q: "What are the key provisions of the RBI June 2023 compromise circular?",
      a: "The RBI June 8. 2023 Prudential rules directs all regulated lenders to implement transparent. Board-approved OTS deal policies. Ensuring standardized debt settlement procedures. Cooling-off periods. And uniform treatment for distressed retail and trade clients."
    },
    {
      q: "How do I prove financial hardship versus willful default to the bank?",
      a: "Submit a documented hardship dossier containing medical records. Layoff notices, company liquidation filings. And past 12-month bank records proving zero income diversion and absolute absence of unencumbered liquid assets."
    },
    {
      q: "What average percentage haircut can a borrower negotiate during an OTS?",
      a: "Clients with verified money bankruptcy typically secure complete 100% penal fee waivers. Alongside 40% to 60% main loan waivers depending on NPA aging. Security absence. And speed of lump-sum remittance."
    },
    {
      q: "How should I handle recovery agent threats after requesting an OTS?",
      a: "Issue a formal legal notice citing the RBI Master Directions on claims agents. Record unlawful contacts. And file complaints with the bank main loan Nodal Officer (PNO) and the RBI Integrated Ombudsman."
    },
    {
      q: "What clauses must be verified in a bank OTS sanction letter?",
      a: "Verify authentic bank stationery. Authorized signatory seal and staff code. Unique CBS dispatch number. Explicit full debt release terms. Specified payment schedules. And an full No-Dues letter commitment."
    },
    {
      q: "Can a loan be settled after receiving a Section 138 notice?",
      a: "Yes. Section 138 Negotiable Instruments Act matters are compoundable under Section 147. Banks are legally bound to withdraw criminal complaints upon execution of an OTS and realization of agreed settlement funds."
    },
    {
      q: "How does an OTS impact credit score and future borrowing?",
      a: "The credit bureau marks the account as 'Settled'. This stops steady score degradation. Clients can rebuild credit scores past 750 within 12 to 24 months using secured. Fixed-deposit backed credit cards."
    },
    {
      q: "Can debt assigned to an Asset Reconstruction Company (ARC) be settled?",
      a: "Yes. ARCs acquire distressed loan portfolios at steep discounts under SARFAESI Section 5 (often 15 to 25 paise on the rupee). Making them highly receptive to OTS deals offering 50% to 70% debt waivers."
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
              { name: 'How to Convince Bank for One-Time Settlement', url: '/how-to-convince-bank-for-one-time-settlement' }
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
            BANKING COMPROMISE &amp; LEGAL SETTLEMENT BLUEPRINT
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Convince Bank for One-Time Settlement (OTS)
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed"> A full 60-chapter master guide to settling loan settlement. Proving hardship. Securing 40%. 60% main loan haircuts. Overcoming branch refusals. And securing an full No Dues letter under RBI&apos. s June 2023 OTS deal norms. </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Check Your OTS Haircut Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+918800226635"
              className="px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-sm md:text-base border border-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Talk to Settlement Lawyer</span>
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
          <p className="text-xs font-bold text-slate-800 truncate"> {currentChapter.label} </p>
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
          All (60)
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
                <div className="font-extrabold text-sm">Table of Contents</div>
                <p className="text-[11px] text-slate-300">60 Chapters • Complete OTS Guide</p>
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
                  placeholder="Search 60 chapters..."
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
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1.5 px-2">
                      {m.moduleTitle}
                    </div>
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
                Speak With Settlement Lawyer
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
                  Contents (60)
                </span>
                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
                  RBI 2023
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

            {/* MODULE 1 (SECTIONS 1 TO 8) */}
            
        {/* SECTION 1 */}
        <section id="intro-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 1</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            1. Introduction to One-Time Settlement (OTS)
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> In the Indian banking and money landscape. Loan payment default is rarely an intentional act of evasion. For millions of retail clients. Small trade founders. And salaried workers. Unforeseen economic dislocations. Such as involuntary retrenchment. Catastrophic health emergencies. Inflationary margin compressions. Or sudden trade closures. can abruptly derail an otherwise pristine payment history. When equated monthly installments (EMIs) cease. Clients find themselves caught in a vicious vortex of compounding penal levies. Aggressive claims firm interactions. And impending legal legal notices. </p>
            <p> However. Indian banking regulations and trade prudential rules recognize that protracted lawsuits against an insolvent or genuinely distressed client yields diminishing returns for banks. Recovering debts through the Debt claims Tribunal (DRT). Civil Courts. Or criminal complaints under Section 138 of the Negotiable Instruments Act often takes several years and incurs massive office and legal expenses. To resolve non-performing assets (NPAs) pragmatically. Scheduled banks, local rural banks. And Non-Banking money Companies (NBFCs) utilize a structured bank OTS deal mechanism known as a <strong>One-Time Settlement (OTS)</strong>. </p>
            <p> A One-Time Settlement represents a win-win trade OTS deal: the client is liberated from the relentless psychological and legal pressure of unpaid debts through a settled debt waiver. Meanwhile. The bank reclaims a significant portion of its cash upfront without squandering further resources on uncertain claims lawsuits. Navigating this process. However. Requires a nuanced understanding of bank credit policies. Reserve provisioning rules. And the legal parameters governing OTS deals in India. </p>

            <div className="p-4 sm:p-5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl">
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Key Strategic Insight</h4>
              <p className="text-black text-xs sm:text-sm"> Under the Reserve Bank of India’s landmark <em>Prudential rules for relief of Stressed Assets</em> and subsequent Master Directions. All trade lenders are mandated to institute transparent. Board-approved OTS deals policies. A client who approaches the bank with an empirically verified hardship dossier can successfully secure large main loan haircuts and complete penal interest waivers. </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE LEAD FUNNEL EMBEDDED AFTER SECTION 1 */}
        <div className="my-8">
          <InteractiveLeadFunnel />
        </div>

        {/* SECTION 2 */}
        <section id="what-is-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 2</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            2. What Is a One-Time Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> A <strong>One-Time Settlement (OTS)</strong> is a formalized. Legally binding contract executed between a lending institution and a defaulting client. Whereby the lender voluntarily consents to accept a consolidated sum that is lower than the total ledger balance in full and final satisfaction of the loan debts. The ledger balance typically encompasses the unpaid main loan. Normal contract interest, penal interest. Late payment fees. Bounce charges. And accrued legal costs. </p>
            <p> Upon remittance of the mutually agreed payout sum within the stipulated timeframe. The bank does to completely discharge the client from all surviving money debts. Revoke legal claims. Withdraw ongoing court or arbitration proceedings. Release original mortgaged title deeds or hypothecated security. And formally issue an full <strong>No-Dues letter (NDC)</strong> or <strong>Full and Final closure note</strong>. </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-black font-bold">
                    <th className="p-3 border border-slate-200">Parameter</th>
                    <th className="p-3 border border-slate-200">Standard Loan Restructuring</th>
                    <th className="p-3 border border-slate-200">One-Time Settlement (OTS)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Core Objective</td>
                    <td className="p-3 border border-slate-200">Extends tenure. Lowers EMI. Or reduces interest rate while repaying 100% main loan.</td>
                    <td className="p-3 border border-slate-200">Permanent debt extinction with large main loan haircut and 100% penalty waiver.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Total debt risk</td>
                    <td className="p-3 border border-slate-200">Full original debt remains payable over an extended amortization schedule.</td>
                    <td className="p-3 border border-slate-200">Discounted lump-sum (usually 35% to 60% of unpaid) clears entire debt.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Account Status</td>
                    <td className="p-3 border border-slate-200">Account continues as active and standard after successful restructuring trial.</td>
                    <td className="p-3 border border-slate-200">Account permanently terminated. reported to credit bureaus as &quot. Settled&quot.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">payment Period</td>
                    <td className="p-3 border border-slate-200">Multiple years through revised monthly installments.</td>
                    <td className="p-3 border border-slate-200">Single bullet payment or 2. 4 short structured tranches (30. 90 days).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p> Unlike loan refinancing or loan top-ups. An OTS is not a credit product. it is an extraordinary relief options designed mainly for distressed credit facilities where conventional debt servicing has collapsed irretrievably. </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="easy-meaning-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 3</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            3. Easy Meaning of One-Time Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> To understand One-Time Settlement in everyday terms. Consider this real-world illustration: </p>
            <p> Imagine you availed a private loans of ₹10,00,000 two years ago. Due to an unforeseen medical crisis and subsequent job loss. You missed consecutive EMIs for nine months. By this time. The bank ledger reflects your unpaid debt as follows: </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Original Unpaid main loan: <strong>₹7,50,000</strong></li>
              <li>Accrued Normal Interest: <strong>₹1,80,000</strong></li>
              <li>Penal Interest &amp. Overdue Charges: <strong>₹1,20,000</strong></li>
              <li>Bounce Charges &amp. claims Overheads: <strong>₹50,000</strong></li>
              <li><strong>Total Bank Claimed unpaid: ₹11,00,000</strong></li>
            </ul>
            <p> Under an OTS pacts. After you demonstrate genuine bankruptcy and lack of liquid assets. The bank agrees to: </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li>Completely cancel and write off 100% of the penal charges. Bounce fees, and accrued interest (₹3,50,000).</li>
              <li>Grant a 40% haircut on the unpaid base loan of ₹7,50,000. Bringing it down to ₹4,50,000.</li>
              <li>Accept ₹4,50,000 as a single. One-time payment to close the loan account permanently.</li>
            </ol>
            <p> In short. You settle an ₹11,00,000 problem for ₹4,50,000. The bank writes off the remaining ₹6,50,000 in its profit and loss record under bad debt provisions. The claims calls stop promptly. you receive an formal clearance paper confirming you owe zero rupees to that lender. </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="how-ots-works" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 4</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            4. How Does One-Time Settlement Work?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> The mechanics of a One-Time Settlement operate through distinct office and RBI stages inside a banking institution. Understanding this internal workflow enables clients to anticipate lender reactions and strategize their talks effectively: </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 1: Asset Classification (NPA Tagging)</h4>
                <p className="text-xs sm:text-sm text-slate-800"> When payments are delayed past 90 days. The loan is classified as a Non-Performing Asset (NPA). Under RBI norms. The bank must set aside cash reserves (provisioning) of 15% to 100% against this defaulted exposure. </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 2: Stressed Asset Transfer</h4>
                <p className="text-xs sm:text-sm text-slate-800"> The loan file shifts from the local branch to the local Stressed Assets claims Branch (SARB) or Special claims Cell. Where specialized claims officers are evaluated on debt claims metrics. </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 3: Formal Hardship Appraisal</h4>
                <p className="text-xs sm:text-sm text-slate-800"> The client submits an OTS proposal supported by documentary proof proving genuine hardship. Bankruptcy. And absence of attachable trade assets. </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 4: Net Present Value (NPV) Assessment</h4>
                <p className="text-xs sm:text-sm text-slate-800"> The bank’s internal credit boards performs a Net Present Value calculation. Comparing the fast cash offer against the estimated realization from prolonged lawsuits over 3 to 7 years. </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 5: Sanction Letter Issuance</h4>
                <p className="text-xs sm:text-sm text-slate-800"> Upon boards approval. The bank issues a written OTS Sanction Letter specifying the approved settlement sum. Exact payment deadlines. And account closure terms. </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 6: Execution &amp; Closure</h4>
                <p className="text-xs sm:text-sm text-slate-800"> The client remits funds straight into their designated loan account. The bank marks the facility closed. Releases any held security. And issues the No-Dues letter. </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="who-can-request-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 5</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            5. Who Can Request a One-Time Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Not every defaulted client is eligible for a One-Time Settlement. Indian banking regulations draw a strict legal demarcation between <strong>genuine distressed clients</strong> and <strong>willful defaulters</strong>. </p>
            <p> Eligible categories for requesting an OTS include: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Salaried staff Facing Involuntary Job Loss:</strong> Individuals retrenched due to company downsizing. Company bankruptcy. Or prolonged economic downturns with verifiable termination letters.</li>
              <li><strong>Victims of Medical Catastrophes:</strong> clients who have suffered permanent partial/total disability. Critical illnesses (cancer, stroke, renal failure). Or whose fast dependents required life-savings medical expenditures.</li>
              <li><strong>MSME and Proprietary shop owners:</strong> founders who skilled catastrophic trade failure. Loss of major clients. Cancellation of government licenses. Or supply chain devastation.</li>
              <li><strong>Surviving Legal Heirs of Deceased clients:</strong> Families where the primary breadwinner and loan co-applicant has passed away without leaving adequate life or loan cover protection.</li>
              <li><strong>Senior Citizens with Exhausted Retirement Corpus:</strong> Pensioners who borrowed against future expectations but faced unforeseen family crises.</li>
            </ul>

            <div className="p-4 sm:p-5 bg-amber-50/80 border-l-4 border-amber-600 rounded-r-xl my-4">
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Strict Disqualification Criteria</h4>
              <p className="text-black text-xs sm:text-sm"> clients declared as <strong>Willful Defaulters</strong> under RBI Master Circular (DBR.No.CID.BC.22/20.16.003/2015-16). Individuals implicated in money fraud. Siphoning or diversion of loan funds to sister concerns. Or those with undisclosed attachable real estate and liquid investments are strictly barred from receiving OTS benefits. </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 */}
        <section id="when-to-ask-bank-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 6</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            6. When Should You Ask the Bank for an OTS?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Timing is the single most critical tactical factor in securing a favorable One-Time Settlement. Submitting an OTS request at the wrong juncture can lead to fast rejection. In contrast. Timing your proposal strategically maximizes the bank&apos. s willingness to grant deep discounts. </p>
            
            <div className="space-y-3 my-4">
              <div className="p-3.5 bg-red-50/70 border border-red-200 rounded-lg">
                <span className="font-bold text-red-800 text-xs sm:text-sm block mb-1">Too Early: SMA-0 &amp; SMA-1 Stage (1 to 60 Days Default)</span>
                <p className="text-xs sm:text-sm text-slate-800"> Approaching the branch manager when your loan is barely 30 days overdue is virtually guaranteed to fail. The branch manager will dismiss your request and insist on regular EMI clearance because the asset is still categorized as standard. And internal rules penalize early write-offs. </p>
              </div>

              <div className="p-3.5 bg-emerald-50/70 border border-emerald-300 rounded-lg">
                <span className="font-bold text-emerald-800 text-xs sm:text-sm block mb-1">Optimal Window: Sub-Standard NPA Stage (90 to 180 Days Overdue)</span>
                <p className="text-xs sm:text-sm text-slate-800"> Once your account crosses 90 days of steady default and is formally tagged as an NPA. The bank must begin reserving cash provisions. The debt is transferred from retail branch work to the claims desk. This is the prime window to table an initial OTS proposal. As the lender is motivated to avoid further classification downgrades. </p>
              </div>

              <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-lg">
                <span className="font-bold text-blue-800 text-xs sm:text-sm block mb-1">Deepest Haircuts: Doubtful &amp; Loss Asset Stage (180+ Days to Multiple Years)</span>
                <p className="text-xs sm:text-sm text-slate-800"> When a loan remains non-performing for over 12 months. Banks must maintain 100% provisioning against no-pledge portions. The loan is virtually written off in bank accounting books. At this juncture. Any recovered cash promptly flows straight into the bank&apos. S bottom-line profitability. Prompting credit boards to approve 50% to 70% debt waivers. </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section id="when-bank-more-likely-consider-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 7</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            7. When Is a Bank More Likely to Consider an OTS?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Lending institutions operate under systemic trade and accounting pressures. Recognizing these bank catalysts enables clients to submit OTS deal proposals when the bank&apos. s willingness to settle is at its absolute peak: </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Quarter-End and money Year-End Cleanups (March &amp. September):</strong> Public and private sector banks face intense RBI scrutiny regarding their Gross and Net NPA ratios during audited quarterly results. Between February 15 and March 31. Credit boards are authorized to close pending stressed files rapidly to book cash recoveries before balance sheet finalization.</li>
              <li><strong>Total Absence of Primary or security Security:</strong> In no-pledge private loans. Clients credit lines. And firm loans without mortgage backing. The lender knows that court execution yields very little. An upfront cash offer is vastly superior to paper decrees.</li>
              <li><strong>Impasse in Legal Proceedings:</strong> When the bank discovers that the client has engaged competent legal counsel who has successfully countered Section 138 notices or challenged arbitration police area. The lender realizes that legal relief will drag on for years. OTS becomes their preferred exit plan.</li>
              <li><strong>Transfer to Stressed Assets relief Branches (SARB):</strong> SARBs exist only to liquidate bad debt through settled settlements or auctions. Their performance KPIs are tied straight to recovered liquidity. Not customer retention.</li>
              <li><strong>Lok Adalat Sessions:</strong> Periodic National and State Lok Adalats organized under the Legal Services officials Act provide specialized bank forums where banks offer pre-sanctioned. Steep OTS deal discounts.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 8 */}
        <section id="how-to-convince-bank-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 8</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            8. How to Convince a Bank for One-Time Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Convincing a bank to take a major money loss on your loan requires shifting the discussion from emotional distress to money realism. Bank managers and credit boards members are fiduciary custodians bound by auditing norms. they cannot grant haircuts out of private sympathy. They can only approve an OTS if their internal records demonstrates that <em>settling now yields more than litigating later</em>. </p>
            <p> To convince the bank decisively. You must master the <strong>Three Pillars of Settlement Persuasion</strong>: </p>

            <div className="space-y-4 my-4">
              <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                <span className="font-extrabold text-black text-sm sm:text-base block mb-1">Pillar 1: Irrefutable Proof of Inability to Pay in Full</span>
                <p className="text-slate-800 text-xs sm:text-sm"> You must demonstrate beyond doubt that you do not have the income. Liquid savings. Or disposable surplus to service the original EMI schedule. Provide audited bank records showing nil balances. Medical bills, salary slip reductions. Or tax returns demonstrating trade collapse. Show them that full claims is an economic impossibility. </p>
              </div>

              <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                <span className="font-extrabold text-black text-sm sm:text-base block mb-1">Pillar 2: Genuine Demonstration of Willingness to Settle Upfront</span>
                <p className="text-slate-800 text-xs sm:text-sm"> Banks deal constantly with evasive debtors who make empty promises. Differentiate yourself by demonstrating that while you cannot pay ₹10 Lakhs over 5 years. You have mobilized ₹4 Lakhs from family. Friends. Or gold liquidation that is ready for fast deposit upon sanction. fast liquidity is a bank officer&apos. s greatest incentive. </p>
              </div>

              <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                <span className="font-extrabold text-black text-sm sm:text-base block mb-1">Pillar 3: The Threat of Zero Recovery in Insolvency or Litigation</span>
                <p className="text-slate-800 text-xs sm:text-sm"> Subtly convey that if the bank insists on unpayable amounts or drags you to court. Legal costs and delays will erode their claims to near zero. A bank credit boards must justify their approval to legal auditors by noting: <em>&quot. client has no attachable assets. proposed settlement represents highest possible net realization for the institution.&quot. </em> Give them the records they need to write that exact sentence. </p>
              </div>
            </div>
          </div>
        </section>


            {/* MODULE 2 (SECTIONS 9 TO 14) */}
            
        {/* SECTION 9 */}
        <section id="step-by-step-process-request-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 9</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            9. Step-by-Step Process to Request an OTS
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Navigating a One-Time Settlement successfully requires adhering to a structured procedural sequence. Attempting to skip steps. such as settling informally over the phone with third-party claims agents. Often leads to wasted time. Lost money, and non-binding verbal promises. </p>
            
            <div className="space-y-3 my-4">
              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 1: Ledger Statement Procurement</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Apply for and secure an authenticated. Updated Loan Account record from your home branch. Segregate the figures into: (a) Sanctioned main loan. (b) Disbursed Amount. (c) Repaid main loan. (d) Unpaid base loan. (e) Normal Accrued Interest. And (f) Compounded Penal Charges.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 2: Hardship Evidence Collation</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Assemble a full documentary dossier establishing why your income contracted permanently or temporarily. Include hospital discharge summaries. Employment separation letters. ITR acknowledgments, or GST cancellation filings.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 3: Repayment Corpus Mobilization</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Before approaching the bank with a local figure. Secure the proposed settlement funds in an accessible liquid account (from private savings. Provident fund withdrawals. Or assistance from relatives). Do not offer what you cannot promptly deliver.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 4: Formal OTS Proposal Submission</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Draft a formal. Legally structured OTS request letter addressed to the Competent formal (Branch Head / local Stressed Assets Branch Manager). Deliver it via Registered Post AD / Speed Post and formal email. Retaining acknowledgment copies.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 5: Bilateral Committee Negotiation</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Engage straight with the internal Settlement alert boards or designated claims officers. Counter high starting demands by anchoring firmly around the unpaid main loan and verifiable hardship parameters.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">6</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 6: Written Sanction &amp; Monitored Remittance</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Obtain an formal. Signed OTS Sanction Letter on formal bank stationery. Verify critical legal clauses before depositing the settlement sum straight into the designated loan account via RTGS/NEFT.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">7</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 7: NDC Issuance &amp; Credit Bureau Reconciliation</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Collect the physical No-Dues letter. Retrieve all deposited security cheques. Cancelled ECS mandates. Or property title deeds. Ensure the bank reports the account status as &quot. Settled&quot. To CIBIL. Experian. Equifax. And CRIF High Mark within 30 days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10 */}
        <section id="how-to-prepare-before-approaching-bank" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 10</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            10. How to Prepare Before Approaching the Bank
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Entering an OTS discussion without meticulous preparation is the most common reason settlement requests are summarily rejected. Banks operate on cold data. Audited numbers, and internal RBI constraints. To command formal during talks. Prepare the following preliminary dossier: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Complete payment Chronology:</strong> Prepare a chronological spreadsheet detailing every EMI paid since the inception of the loan. Highlight the total quantum of main loan and interest already repaid to show that you were a conscientious client until disaster struck.</li>
              <li><strong>record of own assets and debts (SAL):</strong> Draft an objective balance sheet of your current money condition. Itemize your liquid savings. Current monthly household expenses (food. Rent. School fees. Utilities). And demonstrate that your net disposable surplus is zero or negative.</li>
              <li><strong>lawsuits Audit:</strong> Check whether the bank has initiated legal action against you. Such as notices under Section 138 of the Negotiable Instruments Act. Section 25 of the Payment and Settlement Systems Act (PSSA). Arbitration proceedings, or DRT applications. Understanding your legal exposure determines your talks leverage.</li>
              <li><strong>Mental Readiness and Emotional Detachment:</strong> Bank officers and claims personnel often use threats tactics. Threatening arrest or seizure of household goods. Recognize that unpaid no-pledge private debt is a civil dispute in India. Not a criminal offense. Enter discussions with calm, legal confidence.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 11 */}
        <section id="assessing-total-outstanding-loan" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 11</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            11. Assessing Your Total Outstanding Loan
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> When a loan enters default. Bank core banking systems (CBS) automatically compound interest. Append monthly late payment fines. Levy penal interest (often 24% to 36% per annum). And add transaction charges for bounced cheques or NACH auto-debits. Over 12 to 24 months. These secondary levies can swell the claimed total to double the original borrowed cash. </p>
            <p> Before settling. You must dissect the bank&apos. s demand notice into three distinct money components: </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">1. Pure Principal Balance</span>
                <p className="text-xs text-slate-800">The actual cash borrowed minus the main loan portions amortized through past EMIs. This is the only baseline figure the bank fundamentally seeks to protect.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">2. Normal Accrued Interest</span>
                <p className="text-xs text-slate-800">Contractual interest calculated at the sanctioned rate up to the date the account was classified as NPA. Under RBI rules. Interest ceases to accrue in P&amp. L accounts once tagged as NPA.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">3. Penal Levies &amp; Overheads</span>
                <p className="text-xs text-slate-800">Unjustified penal interest, bounce charges. claims firm commissions, and legal fees. Under RBI OTS deal circulars. These charges are 100% waivable.</p>
              </div>
            </div>

            <p> Never formulate your offers based on the inflated gross demand. Always anchor your settlement discussions strictly around the <strong>Pure base loan</strong>. </p>
          </div>
        </section>

        {/* SECTION 12 */}
        <section id="understanding-repayment-capacity" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 12</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            12. Understanding Your Repayment Capacity
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Before making an offer to the bank. You must objectively determine your absolute upper money limit. A common and disastrous mistake is agreeing to a settlement figure under bank threats that you cannot actually pay. If an OTS sanction letter is issued and you default on the agreed payment date. The bank automatically cancels the OTS. Revokes all granted waivers. And appropriates any partial deposit towards penal charges. </p>
            <p> Conduct an honest assessment using this pragmatic formula: </p>
            <div className="p-4 bg-slate-100 border border-slate-300 rounded-xl font-mono text-xs sm:text-sm my-3">
              <strong>Realistic Settlement Corpus</strong> = [Liquid Bank Balance] + [Provident Fund / Policy Surrender Value] + [Assistance from Family/Relatives] - [Mandatory 3 Months Survival Reserve]
            </div>
            <p> Never commit to borrowing from high-interest predatory loan apps or private moneylenders to settle a bank loan. Swapping low-risk bank debt for high-risk informal debt only accelerates money ruin. If your mobilized corpus is ₹3,00,000. Your starting talks offer should be ₹1,80,000. Leaving you adequate headroom to settle upwards to your ₹3,00,000 ceiling. </p>
          </div>
        </section>

        {/* SECTION 13 */}
        <section id="explaining-financial-hardship-to-bank" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 13</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            13. Explaining Financial Hardship to the Bank
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Merely informing the bank that &quot. I am in money trouble&quot. will elicit zero sympathy and zero concessions. Bank claims officers hear identical claims dozens of times every day. To convince a bank credit boards. Your hardship narrative must be structured with precision. Empathy. And documentary proof: </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Pinpoint the local Trigger Event:</strong> Clearly identify the exact date and catalyst that disrupted your income. For example: <em>&quot. On October 14. 2024. My primary employer liquidated work pursuant to NCLT bankruptcy proceedings. Terminating my employment without severance pay.&quot. </em></li>
              <li><strong>Illustrate Cumulative Household Deficit:</strong> paper how the loss of income forced you to deplete emergency reserves. Exhaust medical cover policies. Or rely on familial support for basic nutritional and educational needs.</li>
              <li><strong>Provide Contemporaneous Proof:</strong> Corroborate every record with external. Verifiable records. A doctor&apos. S prescription, an oncology diagnostic report. A termination letter on company letterhead. Or a court liquidation notice transforms subjective distress into an indisputable legal fact.</li>
              <li><strong>Differentiate Between Unwillingness and Inability:</strong> Emphasize that your default was entirely involuntary. Point out that you serviced all installments faithfully for years prior to the catastrophic event. Proving you possess bona fide client intent.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 14 */}
        <section id="how-to-build-strong-settlement-proposal" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 14</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            14. How to Build a Strong Settlement Proposal
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> A strong offers is structured like an bank memorandum rather than a casual plea. When drafted with expert rigor. It provides the bank manager with the exact documentary justification required to seek approval from higher credit officials. </p>
            <p> Your offers packet must comprise five vital components: </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Executive Summary &amp. Loan Identifiers:</strong> Complete account number, loan sanction date. Original sanctioned amount, total EMIs paid. And current NPA classification status.</li>
              <li><strong>Chronological Hardship Narrative:</strong> A concise. Factual summary detailing the exogenous crisis that incapacitated your earning potential.</li>
              <li><strong>money Audit &amp. Asset record:</strong> Explicit declaration under affidavit confirming that you hold no marketable immovable properties. Shares. Or mutual funds capable of satisfying the original debt.</li>
              <li><strong>The Concrete trade Offer:</strong> A definitive. Unambiguous settlement figure expressed in both figures and words. Coupled with an exact payment timeline (e.g.<em>&quot. ₹3,50,000 payable within 30 days of receiving the formal OTS sanction letter&quot. </em>).</li>
              <li><strong>List of Accompanying Annexures:</strong> Indexed documentary exhibits supporting each assertion in the proposal.</li>
            </ol>
          </div>
        </section>


            {/* INTERACTIVE OTS CALCULATOR COMPONENT */}
            <div id="ots-calculator" className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl border border-blue-800/40 my-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider bg-blue-600/40 text-blue-300 px-3 py-1 rounded-full border border-blue-400/20 inline-block mb-1.5">
                    INSTITUTIONAL VALUATION TOOL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-blue-400" />
                    <span>Interactive Bank OTS Haircut &amp; Settlement Calculator</span>
                  </h3>
                </div>
                <div className="text-xs text-blue-200">
                  Updated per RBI June 2023 Compromise Framework
                </div>
              </div>

              {/* Calculator Inputs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1 text-slate-300">
                    <span>Unpaid Principal Capital (₹)</span>
                    <span className="text-white font-mono font-bold">₹{calcPrincipal.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={5000000}
                    step={25000}
                    value={calcPrincipal}
                    onChange={(e) => setCalcPrincipal(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹50,000</span>
                    <span>₹25,00,000</span>
                    <span>₹50,00,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1 text-slate-300">
                    <span>Accrued Penal Interest &amp; Fees (₹)</span>
                    <span className="text-white font-mono font-bold">₹{calcPenalCharges.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={2500000}
                    step={10000}
                    value={calcPenalCharges}
                    onChange={(e) => setCalcPenalCharges(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹10,000</span>
                    <span>₹12,50,000</span>
                    <span>₹25,00,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Credit Facility / Loan Category
                  </label>
                  <select
                    value={calcLoanType}
                    onChange={(e) => setCalcLoanType(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="personal_loan">Unsecured Personal Loan (Clean)</option>
                    <option value="credit_card">Credit Card Revolving Balance</option>
                    <option value="business_loan">Unsecured Business Loan (MSME)</option>
                    <option value="vehicle_shortfall">Post-Auction Vehicle Deficiency Balance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    NPA Aging &amp; Default Classification
                  </label>
                  <select
                    value={calcNpaAge}
                    onChange={(e) => setCalcNpaAge(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="sma_90">SMA-2 / Early Default (60–90 Days)</option>
                    <option value="substandard">Sub-Standard NPA (90–365 Days)</option>
                    <option value="doubtful">Doubtful NPA (12–24 Months Overdue)</option>
                    <option value="hardcore">Hard-Core / Loss Asset (&gt; 2 Years)</option>
                  </select>
                </div>
              </div>

              {/* Output Results Box */}
              <div className="bg-slate-800/90 border border-blue-500/30 rounded-xl p-4 sm:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 pb-4 border-b border-slate-700">
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Total Claimed Balance</span>
                    <span className="text-sm sm:text-lg font-black font-mono text-slate-200">
                      ₹{otsAnalysis.totalClaimed.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Penal Charges Waived</span>
                    <span className="text-sm sm:text-lg font-black font-mono text-emerald-400">
                      100% (₹{otsAnalysis.waivedPenalties.toLocaleString('en-IN')})
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Realistic Settlement Target</span>
                    <span className="text-sm sm:text-lg font-black font-mono text-blue-400">
                      ₹{otsAnalysis.targetSettlement.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Total Debt Reduction</span>
                    <span className="text-sm sm:text-lg font-black font-mono text-emerald-300">
                      ~{otsAnalysis.totalDiscountPct}% Haircut
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                    <span className="font-bold text-blue-300 block mb-0.5">Recommended Starting Offer:</span>
                    <p className="text-slate-300"> <strong>₹{otsAnalysis.recommendedFirstOffer.toLocaleString('en-IN')}</strong> in single payment (leaves headroom to settle at ₹{otsAnalysis.targetSettlement.toLocaleString('en-IN')}). </p>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                    <span className="font-bold text-blue-300 block mb-0.5">Approving Committee:</span>
                    <p className="text-slate-300">{otsAnalysis.authorityLevel}</p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-3 italic"> * Note: Estimates based on RBI June 2023 Prudential OTS deal rules and actual banking claims matrices. Final sanctioned amounts vary based on documented medical/hardship dossiers. </p>
              </div>
            </div>

            {/* MODULE 3 (SECTIONS 15 TO 22) */}
            
        {/* SECTION 15 */}
        <section id="how-much-to-offer-bank-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 15</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            15. How Much Should You Offer the Bank for Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Determining your initial offers is a delicate tactical balancing act. If you bid unrealistically low. such as offering 10% of the main loan without severe medical proof. the credit boards will discard your letter as non-serious. Conversely, if you offer too high. You leave no room for talks and pay hundreds of thousands of rupees more than necessary. </p>
            <p> The industry benchmark for offers varies by loan type and default duration: </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-black font-bold">
                    <th className="p-3 border border-slate-200">Loan Category</th>
                    <th className="p-3 border border-slate-200">Recommended First Offer</th>
                    <th className="p-3 border border-slate-200">Realistic Closing Range</th>
                    <th className="p-3 border border-slate-200">Penal Fee Waiver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">no-pledge private loans</td>
                    <td className="p-3 border border-slate-200">25%. 30% of Unpaid main loan</td>
                    <td className="p-3 border border-slate-200">35%. 50% of Unpaid main loan</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">100% Waived</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Credit Card Outstandings</td>
                    <td className="p-3 border border-slate-200">20%. 25% of Unpaid main loan</td>
                    <td className="p-3 border border-slate-200">30%. 45% of Unpaid main loan</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">100% Waived</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">no-pledge firm loans</td>
                    <td className="p-3 border border-slate-200">30%. 35% of Unpaid main loan</td>
                    <td className="p-3 border border-slate-200">40%. 55% of Unpaid main loan</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">100% Waived</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Post-Auction Vehicle Shortfall</td>
                    <td className="p-3 border border-slate-200">15%. 25% of Deficiency Balance</td>
                    <td className="p-3 border border-slate-200">25%. 40% of Deficiency Balance</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">100% Waived</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p> Always initiate discussions below your maximum willingness to pay. A bank credit boards rarely accepts a client&apos. s initial offer without a counter-demand. By starting at 25% to 30%. You allow the bank officer to feel victorious by settling you up to 40% or 45%. This represents your true target ceiling. </p>
          </div>
        </section>

        {/* SECTION 16 */}
        <section id="how-banks-decide-settlement-amount" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 16</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            16. How Banks Decide the Settlement Amount
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> clients often assume that settlement figures are arbitrary numbers pulled out of thin air by bank branch managers. In reality. Banks employ rigorous actuarial and claims matrices governed by internal board policies and RBI rules: </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Net Present Value (NPV) Comparison:</strong> The bank models two economic scenarios. Scenario A: Accept ₹4,00,000 cash today. Scenario B: Spend ₹1,50,000 in advocate fees. Court court court fees. And claims commissions over 4 years to potentially recover ₹6,00,000. When discounted to present value. Scenario A often yields a higher net claims than Scenario B.</li>
              <li><strong>Provisioning Coverage Ratio (PCR):</strong> If the bank has already made a 100% cash provision against your doubtful loan. The book value of that asset on their ledger is effectively zero. Every single rupee collected under an OTS reverses that provision and straight boosts the bank&apos. s reported quarterly profit.</li>
              <li><strong>Realizable Security Value:</strong> If the loan has zero security backing (clean private loans). The realizable security is zero. If the loan is backed by residential property. The bank will calculate the distressed sale value (forced sale value) of the asset minus eviction lawsuits costs.</li>
              <li><strong>claims firm Commission Cap:</strong> Banks pay external claims firms between 10% and 25% for recovering bad debts. Knowing this. Banks prefer direct OTS settlements that eliminate third-party firm payouts.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 17 */}
        <section id="factors-influence-bank-ots-decision" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 17</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            17. Factors That Influence a Bank&apos;s OTS Decision
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> When a credit boards convenes to evaluate an OTS file. They review a structured credit appraisal note. The following critical parameters determine whether your proposal is approved or denied: </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Borrower Age &amp; Employability</h4>
                <p className="text-xs sm:text-sm text-slate-800">A 58-year-old retired client with no pension has near-zero future earning capacity. Making deep discounts readily justifiable. A 28-year-old software engineer will face higher resistance unless permanent disability is proven.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Duration of Default &amp; Asset Vintage</h4>
                <p className="text-xs sm:text-sm text-slate-800">A loan defaulted for 3 years is considered a dormant &quot. hard-core NPA&quot. Banks offer vastly steeper discounts on older vintage debts than on accounts defaulted for just 4 months.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Status of Co-Borrowers and Guarantors</h4>
                <p className="text-xs sm:text-sm text-slate-800">If a solvent co-applicant or third-party guarantor with high net worth exists. The bank will refuse an OTS and target the guarantor instead. The absence of solvent guarantors accelerates OTS approval.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Speed of Lump-Sum Remittance</h4>
                <p className="text-xs sm:text-sm text-slate-800">A client offering ₹4,00,000 payable within 15 days will receive a much larger haircut than a client offering ₹5,00,000 payable across 12 monthly installments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 18 */}
        <section id="documents-support-ots-request" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 18</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            18. Documents That Can Support Your OTS Request
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> To prove an OTS application before the internal audit department. You must provide empirical records corroborating every dimension of your hardship: </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Income and Employment Records:</strong> Formal letter of termination, retrenchment notice. Pink slip, company closure circular. Or salary slips demonstrating severe pay-cuts.</li>
              <li><strong>Medical and Health Records:</strong> Hospital admission and discharge summaries. Cancer/cardiac surgery bills, chemotherapy protocols. Disability letters issued by government medical boards.</li>
              <li><strong>trade Downfall &amp. bankruptcy papers:</strong> Audited balance sheets displaying operating losses. GST registration cancellation letters. ITR acknowledgments showing income collapse. Lease termination notices.</li>
              <li><strong>Bank Account records (Past 12 Months):</strong> records of all active savings and current accounts across all banks proving zero surplus cash reserves and absence of large hidden transactions.</li>
              <li><strong>Affidavit of Assets:</strong> A notarized legal affidavit declaring under oath that you own no undisclosed real estate. Vehicles, company equity, or money instruments.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 19 */}
        <section id="how-to-write-ots-request-letter" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 19</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            19. How to Write a One-Time Settlement Request Letter
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> The OTS request letter is your primary legal exhibit. It should be typed, signed. Notarized if required. And dispatched via registered post and email. Below is an authoritative sample template based on banking law standards: </p>

            <div className="p-4 sm:p-6 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto my-4 space-y-3">
              <p>To,</p>
              <p>The Branch Manager / Stressed Assets relief Branch (SARB),<br />[Name of Bank / bank],<br />[Branch Address, City, Pincode]</p>
              
              <p><strong>SUBJECT: Formal Proposal for OTS deal One-Time Settlement (OTS) under RBI Prudential rules in respect of Loan Account No. [Insert Loan Account Number]</strong></p>
              
              <p>Respected Sir/Madam,</p>
              
              <p>1. I. [client Full Name]. Had availed a [private / trade / Credit Card] facility bearing Loan Account No. [XXXXXXXX] from your esteemed bank on [Date of Sanction] with a sanctioned limit of ₹[XXXXXXXX].</p>
              
              <p>2. I had been servicing the equated monthly installments (EMIs) with impeccable regularity until [Month. Year]. Unfortunately. Due to unforeseen and catastrophic events beyond my reasonable control. Namely [Specify: involuntary employment termination / acute critical illness / trade liquidation]. My income dried up completely.</p>
              
              <p>3. As per your latest ledger record. The unpaid amount is claimed at ₹[Total Amount]. This includes large accrued penal interest. Late payment fines, and bounce charges. The actual unpaid main loan cash stands at ₹[base loan].</p>
              
              <p>4. In line with the Reserve Bank of India Master Directions and Prudential OTS deals rules. I am formally requesting a One-Time Settlement (OTS). I have managed to arrange a consolidated corpus of <strong>₹[Offer Amount in Figures] (Rupees [Offer Amount in Words] Only)</strong> through voluntary money help from close relatives.</p>
              
              <p>5. I hereby offer this sum of ₹[Offer Amount] as full. Final. And absolute settlement of all claims arising under the captioned loan account. Upon receipt of your formal written OTS Sanction Letter. I do to deposit the entire sum within [15 / 30] days.</p>
              
              <p>6. Enclosed herewith please find documentary exhibits proving my medical/hardship and bank records reflecting my current illiquidity (Annexures A to E).</p>
              
              <p>Yours faithfully,<br />[Your Signature]<br />[Your Full Name]<br />[Current Contact Address, Phone, Email]</p>
            </div>
          </div>
        </section>

        {/* SECTION 20 */}
        <section id="how-to-negotiate-with-bank-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 20</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            20. How to Negotiate With the Bank for OTS
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> settling an OTS is a phased tactical talks. Never settle in person alone without written notes. Always keep the following strategic principles at the core of your discussions: </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Bypass Low-Level claims Callers:</strong> Third-party claims agents have zero power to waive a single rupee of main loan. Engaging in heated arguments with them is futile. Request meeting the Chief Manager. Stressed Assets Branch Head. Or local Credit Manager.</li>
              <li><strong>Anchor to Unpaid main loan Only:</strong> When the bank opens talks with: <em>&quot. Your total unpaid is ₹12 Lakhs. We can give you a discount to ₹9 Lakhs,&quot. </em> promptly counter: <em>&quot. The original base loan is ₹6 Lakhs. The remaining ₹6 Lakhs are penal charges. Under RBI rules. Penal charges are waivable. Let us settle on the ₹6 Lakhs main loan.&quot. </em></li>
              <li><strong>Use Time Decay as Leverage:</strong> Banks operate against internal monthly deadlines. If the bank refuses a reasonable offer in January. Remain patient. By late February or mid-March. Their urgency to clear NPAs before year-end audit will make them far more accommodating.</li>
              <li><strong>Insist on Written contact:</strong> Never accept a verbal settlement figure agreed over a phone call or casual branch visit. Until you hold a physical or digitally verified Sanction Letter on formal bank letterhead. No settlement exists.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 21 */}
        <section id="what-to-say-during-ots-negotiations" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 21</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            21. What to Say During OTS Negotiations
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Your spoken words during settlement conferences create the psychological foundation of the talks. Use precise. Legally sound phrases that emphasize cooperation while maintaining firm money boundaries: </p>

            <div className="space-y-2.5 my-4">
              <div className="p-3 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-lg">
                <p className="font-bold text-emerald-950 text-xs sm:text-sm">&quot. I respect the bank&apos. S cash and have every intention to resolve this matter amicably. But my verified money incapacity makes full payment impossible.&quot. </p>
                <p className="text-slate-700 text-xs mt-1">Demonstrates good faith while preventing the bank from labeling you a willful defaulter.</p>
              </div>

              <div className="p-3 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-lg">
                <p className="font-bold text-emerald-950 text-xs sm:text-sm">&quot. This settlement fund is not my own money. it is a one-time humanitarian loan mobilized from my relatives solely to close this account forever.&quot. </p>
                <p className="text-slate-700 text-xs mt-1">Explains why you cannot increase your offer. because you do not control the funds.</p>
              </div>

              <div className="p-3 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-lg">
                <p className="font-bold text-emerald-950 text-xs sm:text-sm">&quot. If this proposal is rejected. The funds will be returned to my relatives. And both parties will face years of zero-claims civil lawsuits.&quot. </p>
                <p className="text-slate-700 text-xs mt-1">Reminds the bank officer of the fast opportunity cost of rejecting the offer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 22 */}
        <section id="what-not-to-say-during-ots-negotiations" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 22</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            22. What Not to Say During OTS Negotiations
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> An inadvertent slip of the tongue during a settlement meeting can instantly destroy your talks leverage or trigger criminal charges. Strictly avoid the following records: </p>

            <div className="space-y-2.5 my-4">
              <div className="p-3 bg-red-50/80 border-l-4 border-red-600 rounded-r-lg">
                <p className="font-bold text-red-950 text-xs sm:text-sm">NEVER SAY: &quot. I will not pay a single rupee. Do whatever you want!&quot. </p>
                <p className="text-slate-700 text-xs mt-1">This record can be logged by the bank as willful default or refusal to pay. Triggering criminal notices under Section 420/406 IPC or Section 138 NI Act.</p>
              </div>

              <div className="p-3 bg-red-50/80 border-l-4 border-red-600 rounded-r-lg">
                <p className="font-bold text-red-950 text-xs sm:text-sm">NEVER SAY: &quot. I am expecting a large payout / property sale in 6 months.&quot. </p>
                <p className="text-slate-700 text-xs mt-1">The bank will promptly freeze all OTS discussions and wait for your future funds to attach them for 100% full claims.</p>
              </div>

              <div className="p-3 bg-red-50/80 border-l-4 border-red-600 rounded-r-lg">
                <p className="font-bold text-red-950 text-xs sm:text-sm">NEVER SAY: &quot. I have money in other bank accounts or mutual funds.&quot. </p>
                <p className="text-slate-700 text-xs mt-1">Revealing liquid wealth destroys your bankruptcy defense and exposes those secondary accounts to potential legal attachment.</p>
              </div>
            </div>
          </div>
        </section>


            {/* MODULE 4 (SECTIONS 23 TO 27) */}
            
        {/* SECTION 23 */}
        <section id="how-to-respond-bank-rejects-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 23</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            23. How to Respond When the Bank Rejects Your OTS Request
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> It is standard banking procedure to reject a client&apos. s first OTS offer. Rejection is rarely a final judicial verdict. it is an bank posture designed to test whether the client has hidden money reserves that can be pressured into daylight. </p>
            <p> When your proposal is rejected. Execute this four-step counter-plan: </p>

            <div className="space-y-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Step 1: Demand Written Grounds for Rejection</span>
                <p className="text-xs sm:text-sm text-slate-800">Do not accept verbal rejections from claims staff. Submit a formal request asking the bank to articulate the local policy grounds under which your proposal was turned down. Banks struggle to defend arbitrary rejections when empirical hardship is on record.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Step 2: Ascertain the Bank&apos;s Counter-Expectation</span>
                <p className="text-xs sm:text-sm text-slate-800">straight ask the Stressed Assets Branch Head: <em>&quot. What is the minimum threshold the Settlement alert boards is authorized to sanction under the board-approved policy for an asset of this vintage?&quot. </em> This unlocks their internal mandate.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Step 3: Escalate to Higher Zonal Authorities</span>
                <p className="text-xs sm:text-sm text-slate-800">If the local branch head is intransigent due to local branch claims quotas. Escalate your proposal straight to the Zonal Stressed Assets relief Branch (ZSARB) or the General Manager (claims). Higher officials hold far broader special powers to sanction deep haircuts.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Step 4: Table a Modest Incremental Increase</span>
                <p className="text-xs sm:text-sm text-slate-800">Increase your offer marginally (e.g. From 30% to 35% of main loan). Emphasizing that this represents the absolute final assistance obtainable from your extended family.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 24 */}
        <section id="how-to-make-revised-settlement-offer" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 24</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            24. How to Make a Revised Settlement Offer
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> When submitting a revised offer. Avoid jumping promptly to the bank&apos. s demanded figure. Structured revision signals to the credit boards that you are settling at the outer perimeter of your money capacity: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>The Incremental Stepping plan:</strong> If your initial offer was ₹3,00,000 on an ₹8,00,000 main loan. And the bank demanded ₹6,00,000. Do not offer ₹5,00,000. Revise to ₹3,60,000. Frame the additional ₹60,000 as emergency contributions raised from a sibling or gold pawn.</li>
              <li><strong>Introduce Shorter Payment Terms as Currency:</strong> If you cannot raise the cash amount. Offer to compress the payment window. For example: <em>&quot. While I cannot increase the amount beyond ₹3,75,000. I am prepared to remit 100% of this amount within 7 trade days instead of 30 days.&quot. </em> fast cash closure is highly prized by credit officers.</li>
              <li><strong>Attach a Token Earnest Money Deposit (EMD):</strong> In high-value settlements. Attaching a refundable Demand Draft for 5% to 10% of the proposed payout sum proves absolute bona fide intent. Bank rules mandate boards to prioritize OTS files accompanied by EMD drafts.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 25 */}
        <section id="can-you-negotiate-settlement-amount" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 25</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            25. Can You Negotiate the Settlement Amount?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Yes, absolutely. Under Indian banking jurisprudence and the Reserve Bank of India’s June 8. 2023 <em>Prudential rules for OTS deals and Concessions</em>Scheduled banks and NBFCs possess full bank discretion to settle and modify settlement amounts. </p>
            <p> Settlement figures are not cast in stone. The final sanctioned number is the outcome of trade bargaining between the client&apos. s demonstrated payment capacity and the bank&apos. s cost-benefit calculus regarding claims lawsuits. While the branch manager may claim that &quot. the system does not permit discounts,&quot. every bank maintains an internal <strong>Delegation of money Powers (DOFP)</strong> matrix that authorizes local Heads. Zonal boards. And Executive Directors to sanction haircuts of up to 60% or more on stressed no-pledge portfolios. </p>
          </div>
        </section>

        {/* SECTION 26 */}
        <section id="can-you-negotiate-interest-and-penalties" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 26</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            26. Can You Negotiate Interest and Penalties?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> settling a 100% waiver of penal interest. Bounce fees. And late payment penalties is virtually non-negotiable in any standard OTS. In fact. Banks consider penal interest as a bookkeeping lever rather than real cost of cash. </p>
            <div className="p-4 sm:p-5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl my-4">
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">RBI Fair Lending Practice Directive (2024)</h4>
              <p className="text-black text-xs sm:text-sm"> Under the RBI Master Direction on <em>Fair Practices Code for Lenders</em> and circulars on <em>Penal Charges in Loan Accounts</em>The central bank explicitly mandated that penal charges must not be compounded into the base loan or used as a income-generating tool. In any OTS deals. 100% of total penal interest. Overdue processing charges. And advocate notice costs are routinely wiped clean. </p>
            </div>
            <p> also. Contractual interest accrued after the loan&apos. S NPA classification date is also reversed under RBI income recognition norms (IRAC). Since banks cannot book uncollected interest on non-performing assets into their profit records. </p>
          </div>
        </section>

        {/* SECTION 27 */}
        <section id="can-you-request-more-time-pay-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 27</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            27. Can You Request More Time to Pay the Settlement Amount?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> While an OTS is traditionally conceived as an upfront. Single bullet payment within 15 to 30 days of sanction. Banks routinely allow clients to pay the agreed settlement sum in <strong>structured tranches</strong> (installments) over a 60 to 90-day window. </p>
            <p> To structure a multi-installment settlement successfully. Observe these rules: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Standard Tranche Structure:</strong> Most bank policies permit a 3-tranche structure: 25% payable upfront upon sanction. 35% payable within 30 days. And the remaining 40% payable within 60 to 90 days.</li>
              <li><strong>Interest on Extended Periods:</strong> If you request an installment window exceeding 90 days. Bank rules often require charging simple interest (typically MCLR or base lending rate) on the unpaid balance for the extended duration.</li>
              <li><strong>The Critical Default Clause:</strong> All OTS sanction letters contain a strict default covenant: if you pay the first two tranches but fail to pay the final installment on time. The entire OTS pacts is rendered null and void. The bank appropriates your paid tranches against past overdue interest. And reinstates the original loan balance in full. Never agree to an installment timeline you cannot maintain with absolute certainty.</li>
            </ul>
          </div>
        </section>


            {/* MODULE 5 (SECTIONS 28 TO 34) */}
            
        {/* SECTION 28 */}
        <section id="ots-with-banks" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 28</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            28. One-Time Settlement With Banks
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> settling an OTS with a Scheduled banks (such as State Bank of India. Punjab National Bank, Bank of Baroda. HDFC Bank. ICICI Bank. Or Axis Bank) requires navigating bank hierarchy and compliance protocols. </p>
            <p> In Public Sector Banks (PSBs). Officers are audited by the Comptroller and Auditor General (CAG). Central Vigilance Commission (CVC). And legal internal auditors. So. Public sector bank officers are terrified of being accused of corruption or favoring a client. To approve an OTS. They require an airtight. Water-tight file proving that the client is completely destitute and that lawsuits would yield less than the offers. Public sector banks adhere rigidly to periodic. Board-approved OTS schemes (such as Rin Samadhan Schemes) with predetermined discount grids based on asset vintage. </p>
            <p> Private Sector Banks. Conversely. Operate on trade agility and quarterly P&amp. L targets. They are far less concerned with bureaucratic vigilance audits and much more focused on cash claims speed. Private banks are more flexible with customized haircuts. Especially towards the end of fiscal quarters. Provided the client can execute an fast lump-sum payment. </p>
          </div>
        </section>

        {/* SECTION 29 */}
        <section id="ots-with-nbfcs" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 29</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            29. One-Time Settlement With NBFCs
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Non-Banking money Companies (NBFCs) and digital lending fintech platforms (such as Bajaj Finance. Tata cash, Aditya Birla cash. Hero Fincorp. And digital NBFC apps) operate under higher borrowing costs than retail deposit-taking banks. So. Their internal claims mechanisms are notoriously more aggressive. </p>
            <p> However. NBFCs are also governed by the RBI June 8. 2023 Prudential rules on OTS deals. Key tactical differences when settling with NBFCs include: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Higher Rate of Arbitrary Charges:</strong> NBFC records are often cluttered with excessive penal interest. Bounce charges, and loan processing fees. Stripping these secondary charges often eliminates 30% to 50% of their claimed ledger balance promptly.</li>
              <li><strong>Early Reliance on Arbitration:</strong> NBFCs often initiate unilateral. Sole-arbitrator proceedings or file Section 25 PSSA complaints (for bounced NACH mandates) to generate coercive leverage. Establishing that you are legally prepared to defend against these proceedings rapidly compels their legal desk to table an OTS.</li>
              <li><strong>Debt Assignment to ARCs:</strong> If an NBFC fails to recover debt within 180 to 365 days. They often bundle and sell the loan portfolio to Asset Reconstruction Companies (ARCs) like Phoenix ARC. ARCIL. Or Asset Reconstruction Company India at a steep discount (often 15 to 25 paise on the rupee). Once sold. Settling a deep settlement with the ARC becomes exceptionally advantageous.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 30 */}
        <section id="ots-for-personal-loans" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 30</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            30. One-Time Settlement for Personal Loans
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> no-pledge private loans represent the most common credit facility resolved through One-Time Settlement. Because private loans are sanctioned without any tangible asset hypothecation or mortgage backing. The lender possesses zero security to seize or auction upon default. </p>
            <p> In private loans settlements: </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>The primary talks anchor is the <strong>unpaid base loan</strong>.</li>
              <li>Penal interest and bounce fees are completely waived.</li>
              <li>Depending on whether the account is 90 days overdue (Sub-Standard) or over 12 months overdue (Doubtful). Realistic main loan haircuts range between <strong>35% and 55%</strong>.</li>
              <li>If the client has suffered a catastrophic medical impairment or permanent job loss. Settlements as low as 30% of main loan are achievable through zonal boards escalation.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 31 */}
        <section id="ots-for-credit-card-dues" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 31</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            31. One-Time Settlement for Credit Card Dues
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Credit card outstandings are infamous for compounding at predatory interest rates ranging from 42% to 52% per annum. Coupled with GST on finance charges. Late payment fees, and over-limit charges. If an individual carries an unpaid balance of ₹2,00,000. Compounding charges can escalate the record balance to ₹5,50,000 within 24 months. </p>
            <p> During an OTS for credit card dues: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Ledger Dissection:</strong> The client must obtain an itemized breakdown of actual retail purchase transactions versus accrued financing charges and finance fees.</li>
              <li><strong>Haircuts Exceeding 60%:</strong> Because 60% or more of the card record is pure compounding interest and late fees. Banks routinely settle credit card portfolios at <strong>25% to 40% of the gross record value</strong>Effectively recovering their base transactional spend while extinguishing the inflated fee layer.</li>
              <li><strong>fast Card Invalidation:</strong> Upon execution of an OTS. The card account is permanently canceled. And the credit limit is revoked.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 32 */}
        <section id="ots-for-business-loans" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 32</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            32. One-Time Settlement for Business Loans
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Settling firm loans. Such as no-pledge MSME working cash loans. Cash credit (CC) limits. Overdrafts (OD). Or machinery term loans. involves company legal rules and private guarantees debts. </p>
            <p> Most firm loans feature private guarantees executed by promoters. Directors. Or partners under Section 128 of the Indian Contract Act. To settle a distressed firm loans: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>prove Genuine trade Failure:</strong> Provide audited financials, cancelled supplier orders. Debtor default records. Or bankruptcy petitions proving that trade income has collapsed permanently without diversion of funds.</li>
              <li><strong>full private guarantees Discharge:</strong> Ensure that the OTS pacts explicitly covenants that upon receipt of the settlement sum. The bank discharges not only the firm clients entity but also all private and company guarantors from all future debts.</li>
              <li><strong>CGTMSE Coverage Implications:</strong> For loans covered under the Credit Guarantee Fund Trust for Micro and Small firms (CGTMSE). The bank can claim up to 75% to 85% of the default from the Trust. Knowing this provides immense talks leverage: the client can settle a settlement that bridges the bank&apos. s net uncovered gap.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 33 */}
        <section id="ots-for-vehicle-loans" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 33</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            33. One-Time Settlement for Vehicle Loans
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Vehicle loans are secured by hypothecation over the automobile under Section 51 of the Motor Vehicles Act. So. OTS talks in auto loans bifurcate into two distinct scenarios: </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Scenario A: Vehicle Remains with Borrower</h4>
                <p className="text-xs sm:text-sm text-slate-800">The client wishes to settle the loan and retain the car. In this case. The bank will calculate the current depreciated market value of the car. The payout sum cannot fall below the vehicle&apos. s realistic market liquidation value. Upon settlement. The bank must issue RTO Form 35 to remove hypothecation from the RC.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Scenario B: Post-Auction Deficiency Balance</h4>
                <p className="text-xs sm:text-sm text-slate-800">The bank repossessed and auctioned the vehicle. But the auction proceeds were insufficient to cover the loan. Leaving a &quot. deficiency balance&quot. of ₹2 to ₹5 Lakhs. Since the asset is already sold. This deficiency balance is now 100% no-pledge debt. This allows the client to settle it at a steep <strong>60% to 75% haircut</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 34 */}
        <section id="ots-for-multiple-loans" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 34</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            34. One-Time Settlement for Multiple Loans
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> A large number of stressed clients do not default on a single facility. They find themselves entangled in multiple credit cards. Private loans. And fintech lines across four to seven different lenders simultaneously. </p>
            <p> When dealing with multiple defaults. A scattershot approach leads to disaster. Execute a structured <strong>Debt Prioritization &amp. Settlement Sequencing Protocol</strong>: </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Sequence by Legal Exposure:</strong> Settle lenders that have issued Section 138 NI Act legal legal notices or Section 25 PSSA summons first. As criminal complaint exposure carries potential warrants.</li>
              <li><strong>Sequence by Haircut Economics:</strong> Direct liquid cash towards lenders offering the highest haircuts (60%+). Closing maximum accounts with minimum cash.</li>
              <li><strong>Never Cross-Contaminate talks:</strong> Never inform Bank A about how much you paid to settle with Bank B. Each bank must believe that you have zero remaining liquidity and that their offer represents your very last available penny.</li>
            </ol>
          </div>
        </section>


            {/* MODULE 6 (SECTIONS 35 TO 40) */}
            
        {/* SECTION 35 */}
        <section id="ots-after-loan-default" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 35</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            35. One-Time Settlement After Loan Default
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Many clients mistakenly believe that once a loan defaults. The opportunity to settle is permanently closed. In truth, <strong>loan default is the strict prerequisite for an OTS</strong>. No regulated banks in India can legally entertain a haircut proposal on a &quot. Standard Asset&quot. Where regular EMIs are being serviced. As doing so would violate RBI asset classification norms. </p>
            <p> Once a loan defaults and crosses into NPA territory: </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>The relationship transitions from retail customer servicing to stressed credit claims.</li>
              <li>The branch manager loses sole police area over the file. And local credit boards take control.</li>
              <li>The client gains large bargaining power because the bank is now incurring strict provisioning costs against the non-performing asset.</li>
            </ul>
            <p> Defaulting is not a crime under Indian civil law. It is a breach of contract under Section 73 of the Indian Contract Act. 1872. Approaching the bank with an OTS promptly after NPA classification establishes you as a early. Solutions-oriented client. </p>
          </div>
        </section>

        {/* SECTION 36 */}
        <section id="ots-after-receiving-legal-notice" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 36</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            36. One-Time Settlement After Receiving a Legal Notice
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Receiving an advocate legal notice. Whether a Loan Recall Notice. A Section 138 NI Act legal notices (for cheque dishonour). A Section 25 PSSA notice (for bounced NACH mandates). Or a Section 13(2) SARFAESI notice. often induces panic. clients assume court legal steps is inevitable. </p>
            <p> In reality. Over 80% of legal notices issued by banks and NBFCs are <strong>procedural claims pressure tactics</strong> designed to compel the client to the settling table. Far from ending OTS prospects. A legal notice represents an exceptional window to execute a OTS deals: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Serve a Point-by-Point Legal Reply:</strong> Never ignore a legal legal notice. Have an skilled debt defense lawyer issue a full legal reply within the 15-day legal window. Stating your bona fide hardship and expressly offering to settle the dispute via OTS.</li>
              <li><strong>Compoundability of Section 138 &amp. Section 25:</strong> Under Section 147 of the Negotiable Instruments Act and established Supreme Court rulings (<em>M/s Meters and Instruments Pvt. Ltd. v. Kanchan Mehta</em>), cheque bounce offenses are compoundable. Once an OTS is reached. The bank is legally obligated to withdraw the criminal complaint.</li>
              <li><strong>Halting lawsuits Costs:</strong> Filing court cases costs banks large retainer fees for external advocates. Proposing a settlement promptly after the notice saves the bank legal overheads. Making them highly receptive to discounts.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 37 */}
        <section id="ots-during-arbitration-legal-proceedings" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 37</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            37. One-Time Settlement During Arbitration or Legal Proceedings
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> If the bank has already initiated arbitration proceedings under the Arbitration and talks Act. 1996. Or filed a civil claims suit in the Civil Court or Debt claims Tribunal (DRT). An OTS remains 100% viable at any stage prior to final decree execution. </p>
            <p> The Indian legal rules actively encourages OTS deals during ongoing judicial proceedings: </p>

            <div className="space-y-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Section 89 CPC &amp; Mediation</span>
                <p className="text-xs sm:text-sm text-slate-800">Under Section 89 of the Code of Civil Procedure. 1908. Courts are empowered to refer pending disputes to alternative dispute relief (ADR) mechanisms. Including mediation, talks, and Lok Adalat. Where binding OTS deal decrees are passed without court fee deductions.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Consent Arbitral Award (Section 30)</span>
                <p className="text-xs sm:text-sm text-slate-800">Under Section 30 of the Arbitration and talks Act. 1996. The arbitral tribunal can record a mutually agreed settlement as a Consent Award. This holds the same legal finality as an arbitral decree while codifying the agreed haircut.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">National Lok Adalat Settlement</span>
                <p className="text-xs sm:text-sm text-slate-800">Under the Legal Services officials Act. 1987. Matters settled in Lok Adalats result in a final award against which no appeal lies in any court. The bank refunds 100% of the court fees deposited. Giving them an enormous money incentive to approve your OTS.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 38 */}
        <section id="ots-after-recovery-agent-contact" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 38</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            38. One-Time Settlement After Recovery Agent Contact
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> When a loan is assigned to third-party claims firms. Clients face unrelenting phone calls. Workplace visits, and abusive threats. It is crucial to understand that <strong>Claims agents are paid contractors. Not judicial officers</strong>. They have zero legal power to seize your home. Confiscate your belongings, or effect arrests. </p>
            <p> To neutralize claims agent abuse and transition to an OTS: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Enforce the RBI claims Charter:</strong> Demand the agent&apos. S identity card, bank authorization letter. And Drawee claims firm letter. Inform them that under RBI Master Directions. Calls before 8:00 AM. After 7:00 PM. Or contacting relatives is strictly prohibited.</li>
              <li><strong>Record proof of Unlawful Coercion:</strong> Save call recordings, WhatsApp threats. And security CCTV footage of home visits. This proof can be submitted to the Banking Ombudsman or High Court under writ police area.</li>
              <li><strong>Leverage abuse for Deeper Haircuts:</strong> Present documented proof of claims agent misconduct to the bank&apos. s main loan Nodal Officer (PNO). To avoid RBI fines from the RBI. Banks often expedite OTS approvals with large concessions.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 39 */}
        <section id="rbi-guidelines-on-one-time-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 39</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            39. RBI Guidelines on One-Time Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> The definitive RBI rules governing loan compromises in India is the Reserve Bank of India’s landmark circular: <strong>Prudential rules for relief of Stressed Assets. OTS deals and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) issued on June 8. 2023</strong>. </p>
            <p> This landmark rules introduced critical client rights: </p>

            <div className="p-4 sm:p-5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">Core Mandates of the RBI June 2023 Framework:</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                <li><strong>strict Board-Approved Policy:</strong> Every scheduled bank and NBFC must lay down a transparent. Non-discriminatory policy detailing OTS deal terms. Haircut ceilings, and delegation of powers.</li>
                <li><strong>Universal Eligibility:</strong> All stressed retail and firm loans accounts are eligible for consideration under OTS deal policies. Ending arbitrary exclusions.</li>
                <li><strong>Standardized Cooling Period:</strong> clients who undergo a OTS deals face a defined cooling-off period (minimum 12 months for standard exposures) before becoming eligible for fresh credit. Rather than permanent blacklisting.</li>
                <li><strong>OTS deal with Willful Defaulters:</strong> Under strict board-level safeguards and without prejudice to ongoing criminal proceedings. Banks are even permitted to execute OTS deals with willful defaulters or fraud-tagged accounts to maximize public claims.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 40 */}
        <section id="rbi-rules-relevant-loan-settlement-recovery" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 40</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            40. RBI Rules Relevant to Loan Settlement and Recovery
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Beyond the OTS deal circular. Several overarching RBI regulations protect defaulting clients during the settlement journey: </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">RBI Fair Practices Code (FPC)</h4>
                <p className="text-xs sm:text-sm text-slate-800">Mandates lenders to maintain transparency in loan contracts. Prohibit illegal charges. And provide clients with 30-day notices before initiating enforcement action.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Guidelines on Recovery Agents (2022)</h4>
                <p className="text-xs sm:text-sm text-slate-800">Lenders are strictly liable for the actions of claims agents. Abuse, physical threats, abusive language. Or public shaming triggers severe monetary penalties and RBI sanctions against the bank.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Release of Movable/Immovable Property (Sept 2023)</h4>
                <p className="text-xs sm:text-sm text-slate-800">Banks are legally mandated to release all original property papers and remove charges registered with CERSAI within <strong>30 days</strong> of full settlement payment. Failure to do so incurs a penalty of ₹5,000 per day payable to the client.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Fair Penal Charges Framework (Jan 2024)</h4>
                <p className="text-xs sm:text-sm text-slate-800">Prohibits compounding of penal interest. Penal levies can only be levied as simple &quot. penal charges&quot. without any interest calculation on overdue amounts.</p>
              </div>
            </div>
          </div>
        </section>


            {/* MODULE 7 (SECTIONS 41 TO 52) */}
            
        {/* SECTION 41 */}
        <section id="ots-and-cibil-score" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 41</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            41. One-Time Settlement and CIBIL Score
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> A major concern for clients contemplating an OTS is its subsequent impact on their credit score across Credit Information Companies (CIBIL. Experian, Equifax, CRIF High Mark). It is essential to separate widespread myths from credit bureau reality. </p>
            <p> When an account undergoes an OTS: </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>The loan status is updated from &quot. Default / DPD 90+&quot. to <strong>&quot. Settled&quot. </strong>.</li>
              <li>The negative bleed on your score halts promptly. While an active default causes your score to drop month after month. A &quot. Settled&quot. status marks the definitive end of arrears.</li>
              <li>Your credit score will skill a temporary downward correction of about 50 to 100 points initially. But it provides a clean platform to initiate credit rehabilitation.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 42 */}
        <section id="impact-of-ots-on-credit-report" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 42</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            42. Impact of OTS on Credit Report
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> In your credit report. The loan line will display key metadata: </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li><strong>Current Balance:</strong> ₹0 (reflecting that no further debt is legally recoverable).</li>
              <li><strong>Amount Overdue:</strong> ₹0.</li>
              <li><strong>Account Status:</strong> &quot. Settled&quot. or &quot. Post-Write-off Settled&quot.</li>
              <li><strong>Written Off Amount:</strong> The main loan haircut and waived charges conceded by the bank.</li>
            </ul>
            <p> Future automated loan underwriting algorithms will identify this &quot. Settled&quot. remark and may automatically reject no-pledge private loans or credit card applications for 12 to 24 months. However. An OTS does not disqualify you from credit permanently. </p>
          </div>
        </section>

        {/* SECTION 43 */}
        <section id="settled-vs-closed-loan-account" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 43</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            43. “Settled” vs “Closed” Loan Account
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Understanding the precise technical and legal distinction between a &quot. Closed&quot. account and a &quot. Settled&quot. account is critical for every client: </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-black font-bold">
                    <th className="p-3 border border-slate-200">Attribute</th>
                    <th className="p-3 border border-slate-200">&quot;Closed&quot; Status</th>
                    <th className="p-3 border border-slate-200">&quot;Settled&quot; Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">payment Math</td>
                    <td className="p-3 border border-slate-200">100% of main loan and contractual interest paid without any waiver.</td>
                    <td className="p-3 border border-slate-200">Discounted lump-sum paid. bank conceded a money haircut.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Credit Score Impact</td>
                    <td className="p-3 border border-slate-200">Highly positive. boosts credit score past 750+.</td>
                    <td className="p-3 border border-slate-200">Neutral to moderate drag. indicates past inability to service full debt.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Subsequent Conversion</td>
                    <td className="p-3 border border-slate-200">Already at highest standard rating.</td>
                    <td className="p-3 border border-slate-200">Can be converted to &quot. Closed&quot. later by paying the waived haircut amount.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 44 */}
        <section id="how-to-rebuild-cibil-after-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 44</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            44. How to Rebuild CIBIL After One-Time Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Rebuilding a prime credit score (750+) after executing an OTS is entirely feasible within 12 to 24 months by following a disciplined credit rehabilitation protocol: </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Secure a Fixed Deposit (FD) Backed Credit Card:</strong> Apply for a secured credit card (issued against a ₹25,000 to ₹50,000 fixed deposit by banks like IDFC First WOW. Kotak 811 DreamDifferent, or SBI Unnati). Secured cards require zero credit check.</li>
              <li><strong>Maintain Strict 20% Utilization:</strong> Spend no more than 15% to 20% of your secured card limit monthly on routine expenses (groceries. Fuel).</li>
              <li><strong>Clear 100% of Total Amount Due:</strong> Never pay only the minimum amount due. set up auto-pay for the full bill amount 5 days before the due date.</li>
              <li><strong>Avoid Multiple Credit Enquiries:</strong> Do not apply for no-pledge private loans or retail credit cards during the 12-month cooling period. As hard enquiries degrade recovering scores.</li>
            </ol>
          </div>
        </section>

        {/* SECTION 45 */}
        <section id="legal-consequences-loan-default-before-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 45</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            45. Legal Consequences of Loan Default Before OTS
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Defaulting on a bank loan triggers civil debt risk. But understanding your exact legal risks prevents irrational fear: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>No Automatic Criminal Arrest:</strong> Defaulting on an no-pledge private loans or credit card is purely a civil default. Police cannot register an FIR or arrest you for inability to pay debt.</li>
              <li><strong>legal Quasi-Criminal Remedies:</strong> Banks can only invoke criminal courts if: (a) a physical payment cheque bounced (Section 138 NI Act). Or (b) an electronic NACH/e-Mandate was returned dishonoured (Section 25 PSSA). Both offenses are bailable and compoundable upon settlement.</li>
              <li><strong>Secured Loans (SARFAESI Act):</strong> For housing or mortgage loans. Default empowers the secured creditor to issue Section 13(2) demand notices and Section 13(4) takeover notices to auction the mortgaged property without court intervention.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 46 */}
        <section id="what-happens-after-bank-accepts-ots-proposal" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 46</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            46. What Happens After the Bank Accepts an OTS Proposal?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> When the bank credit boards sanctions your OTS proposal. The process shifts into formal office closing. The bank communicates the approval via an formal <strong>OTS Sanction Letter</strong>. </p>
            <p> Once sanctioned: </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>All claims firm outreach, phone calls. And visits must freeze promptly.</li>
              <li>Any ongoing civil suits, DRT proceedings. Or Section 138 cases are placed in abeyance pending final payment realization.</li>
              <li>The client is given a fixed legal window (typically 15 to 30 days) to deposit the agreed settlement funds straight into their designated loan account.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 47 */}
        <section id="how-to-verify-ots-letter" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 47</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            47. How to Verify an OTS Letter
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Fraudulent settlement letters issued by rogue claims agents are a pervasive menace. Never deposit money until you have verified the following six authentication checkpoints: </p>

            <div className="p-4 sm:p-5 bg-amber-50/80 border-l-4 border-amber-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">OTS Letter Verification Checklist</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                <li><strong>formal Bank Stationery:</strong> Must be on authentic bank letterhead displaying the bank&apos. S company logo. CIN. And Zonal/Branch office address.</li>
                <li><strong>Unique Dispatch / Reference Number:</strong> Every valid sanction letter carries a CBS reference number trackable in the bank&apos. s internal intranet.</li>
                <li><strong>Designation of Signatory:</strong> Must be signed by an authorized officer (Chief Manager. AGM. Or Vice President) with formal staff code stamp.</li>
                <li><strong>Explicit Account Number &amp. Full Discharge Covenant:</strong> Must clearly state that upon payment of ₹[X]. The loan account is fully and finally closed with no residual claim.</li>
                <li><strong>Branch Manager Confirmation:</strong> Physically visit the home branch with the letter and have the Branch Manager verify the approval in the core banking system (CBS).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 48 */}
        <section id="how-to-make-ots-payment-safely" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 48</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            48. How to Make the OTS Payment Safely
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Making the payment incorrectly can lead to total forfeiture of your funds without closing the loan: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>NEVER Pay in Cash to claims agents:</strong> Never hand over physical currency to anyone claiming to be a bank representative.</li>
              <li><strong>NEVER Transfer to private or firm UPI/Accounts:</strong> Payments must only be credited straight to your own loan account number or via Demand Draft drawn strictly in favor of <em>&quot. [Name of Bank] - Loan Account No. XXXXXXXX&quot. </em>.</li>
              <li><strong>Safe Payment Modes:</strong> Use RTGS. NEFT. Or a bank counter cash/cheque deposit slip bearing an formal bank teller stamp and transaction UTR number.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 49 */}
        <section id="documents-obtain-after-making-ots-payment" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 49</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            49. Documents to Obtain After Making OTS Payment
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Once your settlement funds have cleared. Promptly collect the following critical post-settlement records from the bank: </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li><strong>Payment Deposit Receipt &amp. Updated record of Account:</strong> Showing the credit of the settlement funds and a nil unpaid dues.</li>
              <li><strong>full No-Dues letter (NDC):</strong> Formally releasing you from all debts.</li>
              <li><strong>Return of Unused Cheques:</strong> Retrieval of all security cheques handed over at the time of loan disbursal.</li>
              <li><strong>Cancellation of NACH / e-Mandate:</strong> Written confirmation that all auto-debit mandates have been deregistered.</li>
              <li><strong>Court Withdrawal Joint Memo:</strong> Copy of the formal application filed by the bank in court withdrawing pending Section 138. Section 25, or civil claims steps.</li>
            </ol>
          </div>
        </section>

        {/* SECTION 50 */}
        <section id="settlement-letter-and-no-dues-certificate" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 50</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            50. Settlement Letter and No-Dues Certificate
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> The <strong>No-Dues letter (NDC)</strong> or <strong>Full and Final closure note</strong> is your ultimate shield against future claims. Preserve both physical and scanned digital copies of this paper permanently. </p>
            <p> If the bank sells remaining write-off portfolios to Asset Reconstruction Companies (ARCs) years later by office error. Your NDC is the conclusive legal proof that quashes any subsequent claims attempts under Section 8 of the Limitation Act and the Indian Contract Act. </p>
          </div>
        </section>

        {/* SECTION 51 */}
        <section id="ensure-bank-updates-credit-report" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 51</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            51. How to Ensure the Bank Updates Your Credit Report
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Under RBI regulations. Banks must transmit updated account data to all four credit bureaus (CIBIL. Experian. Equifax. CRIF) within <strong>30 to 45 days</strong> of account relief. </p>
            <p> To ensure compliance: </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Pull your credit report 45 days after making the OTS payment.</li>
              <li>Verify that the status reads &quot. Settled&quot. and the unpaid dues displays ₹0.</li>
              <li>If the bank fails to update the status and continues reporting active overdue amounts. Raise a formal CIBIL Dispute attaching your NDC and OTS Sanction Letter. Under the Credit Information Companies (Regulation) Act. 2005 (CICRA). The credit bureau is required to resolve disputes within 30 days.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 52 */}
        <section id="what-happens-if-cannot-pay-agreed-ots-amount" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 52</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            52. What Happens If You Cannot Pay the Agreed OTS Amount?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> If you secure an OTS sanction but skill an unexpected liquidity crisis that prevents you from remitting the agreed amount by the deadline: </p>
            <div className="space-y-2.5 my-4">
              <div className="p-3 bg-red-50/80 border-l-4 border-red-600 rounded-r-lg">
                <p className="font-bold text-red-950 text-xs sm:text-sm">Consequence of Uncommunicated Default</p>
                <p className="text-slate-700 text-xs mt-1">The OTS sanction expires automatically. The bank revokes all concessions. Forfeits any partial tranche payments against overdue interest. And reinstates the entire original gross debt risk.</p>
              </div>
              <div className="p-3 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-lg">
                <p className="font-bold text-emerald-950 text-xs sm:text-sm">early Remedy: Formal Extension Application</p>
                <p className="text-slate-700 text-xs mt-1">Submit a formal extension application at least 7 days <em>before</em> the deadline. Cite unforeseen delays in liquidating family assets and request a 15 to 30-day extension with simple interest. Credit boards routinely grant reasonable extensions to salvage an imminent claims.</p>
              </div>
            </div>
          </div>
        </section>


            {/* MODULE 8 (SECTIONS 53 TO 60) */}
            
        {/* SECTION 53 */}
        <section id="common-reasons-banks-reject-ots-requests" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 53</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            53. Common Reasons Banks Reject OTS Requests
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Understanding why bank credit boards turn down offers allows you to preemptively insulate your application against rejection: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Lack of Documentary Hardship Proof:</strong> Submitting a settlement request that relies solely on emotional pleas without income tax returns. Termination notices. Or hospital records leads to fast rejection by legal auditors.</li>
              <li><strong>Active High-Value Bank Accounts:</strong> If the bank discovers active transactions. Salary credits. Or mutual fund investments linked to your PAN in another bank account. Your bankruptcy defense collapses.</li>
              <li><strong>Unrealistic or Insulting Starting Offers:</strong> Bidding 5% or 10% of the loan main loan without proving total medical disability signals non-serious intent.</li>
              <li><strong>Presence of High-Net-Worth Co-clients:</strong> If a co-applicant or guarantor holds stable employment or unencumbered real estate. The bank will refuse haircuts and initiate claims against the solvent guarantor.</li>
              <li><strong>Premature Application (Account Still Standard):</strong> Requesting an OTS when the loan is only 30 or 60 days overdue. Before it has been formally tagged as an NPA.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 54 */}
        <section id="common-mistakes-avoid-during-ots-negotiation" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 54</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            54. Common Mistakes to Avoid During OTS Negotiation
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Avoid these costly missteps that OTS deal client rights across India: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 1: Depositing Money on Verbal Assurance</h4>
                <p className="text-xs text-slate-800">Never deposit a single rupee because a claims agent told you &quot. Just pay ₹50,000 and the loan will be closed.&quot. The bank will simply adjust that money against overdue interest and continue demanding the full base loan.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 2: Missing Payment Deadlines</h4>
                <p className="text-xs text-slate-800">Failing to pay the sanctioned payout sum by the exact due date invalidates the pacts and forfeits all settled discounts.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 3: Ignoring Court Summons</h4>
                <p className="text-xs text-slate-800">Failing to appear in court after receiving Section 138 NI Act or Section 25 PSSA summons leads to bailable or non-bailable warrants. Severely weakening your talks leverage.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 4: Not Collecting the NDC</h4>
                <p className="text-xs text-slate-800">Assuming payment alone ends the relationship without obtaining a physical No-Dues letter leaves the door open for future claims disputes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 55 */}
        <section id="one-time-settlement-scams-and-fraud" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 55</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            55. One-Time Settlement Scams and Fraud
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Distressed debtors are prime targets for predatory settlement syndicates and rogue claims agents. Be vigilant against these widespread fraudulent schemes: </p>
            <div className="p-4 sm:p-5 bg-red-50/80 border-l-4 border-red-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">Major Settlement Fraud Patterns:</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                <li><strong>The Fake PDF Sanction Letter:</strong> Fraudulent claims agents forge bank letterheads and issue counterfeit OTS letters over WhatsApp. Asking clients to transfer money via UPI to an firm account.</li>
                <li><strong>The &quot. Guaranteed CIBIL Erasure&quot. Scam:</strong> Unscrupulous operators promise to &quot. completely delete default records from CIBIL within 7 days&quot. for an advance fee. Credit bureaus operate under strict algorithmic legal controls under CICRA 2005. nobody can manually delete legitimate default history.</li>
                <li><strong>The Cash claims Ruse:</strong> Field agents visiting your residence and offering a handwritten receipt in exchange for physical cash. Banks never accept settlement funds in cash via field agents.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 56 */}
        <section id="can-a-lawyer-help-negotiate-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 56</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            56. Can a Lawyer Help Negotiate a One-Time Settlement?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Yes. Engaging an skilled debt defense and banking lawsuits lawyer fundamentally shifts the balance of power during OTS talks: </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Equalizes Legal Knowledge:</strong> Banks employ company law firms and seasoned claims managers. An individual client without legal legal help is easily overwhelmed by technical jargon and hollow lawsuits threats.</li>
              <li><strong>Halts claims abuse:</strong> Under Indian jurisprudence. Once a client is formally represented by legal counsel. All contact must flow through the designated advocate. Unlawful agent abuse ceases promptly.</li>
              <li><strong>Drafts Compelling legal Replies:</strong> A lawyer crafts replies to Section 138. Section 25. And SARFAESI notices that establish valid legal defenses. Forcing the bank&apos. s legal department to recommend an amicable OTS.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 57 */}
        <section id="benefits-professional-ots-negotiation-assistance" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 57</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            57. Benefits of Professional OTS Negotiation Assistance
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Enlisting specialized bank debt relief assistance from CredSettle delivers distinct daily work and money advantages: </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">Substantially Deeper Haircuts</span>
                <p className="text-xs text-slate-800">Bank negotiators know the exact board-approved discount limits of each bank. Securing 40% to 60% main loan waivers compared to 15% to 20% for unassisted clients.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">Airtight Sanction Letter Verification</span>
                <p className="text-xs text-slate-800">Every sanction letter is audited by legal workers to ensure complete legal discharge covenants. Zero residual debt risk. And court case withdrawal clauses.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">Total Harassment Shield</span>
                <p className="text-xs text-slate-800">CredSettle issues formal legal representations to the bank&apos. S Nodal Officers. Redirecting all claims contacts to our legal team.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 58 */}
        <section id="faqs-about-one-time-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 58</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            58. Frequently Asked Questions About One-Time Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Find authoritative answers to the most common questions regarding loan settlements under Indian banking regulations: </p>

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

        {/* SECTION 59 */}
        <section id="ots-complete-step-by-step-guide" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 59</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            59. One-Time Settlement: Complete Step-by-Step Guide
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Here is your complete procedural summary to successfully execute an OTS from default to full debt freedom: </p>

            <div className="space-y-2.5 my-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Phase 1:</span>
                <span className="text-xs sm:text-sm text-slate-800">Identify NPA status past 90 days; stop paying piecemeal EMIs that disappear into penal interest.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Phase 2:</span>
                <span className="text-xs sm:text-sm text-slate-800">Audit your loan statement; isolate the pure unpaid principal capital from secondary penal levies.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Phase 3:</span>
                <span className="text-xs sm:text-sm text-slate-800">Assemble medical records, layoff letters, or business closure documents into a verifiable hardship dossier.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Phase 4:</span>
                <span className="text-xs sm:text-sm text-slate-800">Mobilize your settlement corpus from family/savings (target 35% to 50% of principal).</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Phase 5:</span>
                <span className="text-xs sm:text-sm text-slate-800">Submit a formal written OTS proposal to the Stressed Assets Branch Head offering an initial 25% to 30%.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Phase 6:</span>
                <span className="text-xs sm:text-sm text-slate-800">Negotiate committee counter-offers upwards to your ceiling; verify the written OTS Sanction Letter.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Phase 7:</span>
                <span className="text-xs sm:text-sm text-slate-800">Remit settlement funds directly into your loan account via RTGS/NEFT before the deadline.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                <span className="font-bold text-blue-700 text-xs sm:text-sm">Phase 8:</span>
                <span className="text-xs sm:text-sm text-slate-800">Obtain the No-Dues Certificate, retrieve security cheques, and monitor credit bureau status update.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 60 */}
        <section id="conclusion-successfully-negotiate-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 60</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            60. Conclusion: How to Successfully Negotiate an OTS With Bank
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p> Securing a One-Time Settlement with your bank is neither an admission of moral failure nor an insurmountable money barrier. It is a legitimate. Legally sanctioned trade relief pathway explicitly endorsed by the Reserve Bank of India to restore economic productivity to distressed clients. </p>
            <p> By shifting the conversation from emotional distress to money economics. Presenting an airtight hardship dossier. Anchoring talks strictly to the unpaid main loan. And insisting on verified legal records. You can extinguish unpayable debt. Halt coercive claims practices. And reclaim total peace of mind for you and your family. </p>

            {/* GOLDEN CONCLUSION CALLOUT BOX */}
            <div className="mt-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white p-6 sm:p-10 shadow-xl">
              <span className="text-xs font-black tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full text-blue-200 inline-block mb-3 border border-white/10">
                OFFICIAL DEBT RESOLUTION DESK
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 tracking-tight">
                Ready to Settle Your Bank Debt with 40% to 60% Haircut?
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-2xl mb-6 leading-relaxed"> Connect with CredSettle&apos. s senior banking and debt settlement legal advocates today. We handle bank credit boards talks. Neutralize claims agent abuse. Audit sanction letters. And secure your full No-Dues letter. </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-blue-900 font-extrabold rounded-full text-center hover:bg-slate-100 transition-colors shadow-lg text-xs sm:text-sm"
                >
                  Schedule Confidential Legal Consultation
                </Link>
                <a
                  href="tel:+918800226635"
                  className="px-6 py-3 bg-blue-700/60 hover:bg-blue-700 text-white font-bold rounded-full text-center border border-white/20 transition-colors text-xs sm:text-sm"
                >
                  Call Stressed Debt Helpline: +91-8800226635
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
            
            {/* Urgent OTS Assistance Card */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-xl p-4 shadow-lg border border-blue-700/40">
              <span className="text-[10px] font-black tracking-wider uppercase bg-blue-500/30 text-blue-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
                FREE EVALUATION
              </span>
              <div className="font-black text-sm mb-2 leading-snug">
                Need Bank OTS Negotiation?
              </div>
              <p className="text-[11px] text-blue-100/90 mb-3 leading-relaxed"> Stop agent abuse and secure maximum haircuts with bank legal defense. </p>
              <ul className="text-[10px] space-y-1.5 text-blue-200 mb-4 font-medium">
                <li className="flex items-center gap-1.5"> <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> <span>40%. 60% main loan Haircut</span> </li>
                <li className="flex items-center gap-1.5"> <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> <span>100% Penal Fee Waiver</span> </li>
                <li className="flex items-center gap-1.5"> <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> <span>RBI June 2023 Norms</span> </li>
                <li className="flex items-center gap-1.5"> <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> <span>Verified No-Dues letter</span> </li>
              </ul>
              <Link
                href="/contact"
                className="w-full py-2 bg-white hover:bg-slate-100 text-blue-950 font-extrabold text-xs rounded-lg text-center block transition-colors shadow-sm"
              >
                Request Free OTS Audit
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
              <div className="text-[11px] font-bold text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>CredSettle Legal Shield</span>
              </div>
              <p className="text-[10px] text-slate-700 leading-relaxed mb-2.5"> All talks are conducted under the supervision of enrolled Advocates in strict compliance with the Advocates Act. 1961 and RBI Master Directions. </p>
              <div className="text-[10px] text-slate-700 space-y-1 border-t border-slate-100 pt-2 font-medium">
                <div>✓ 100% Confidential</div>
                <div>✓ Zero Agency Coercion</div>
                <div>✓ Pan-India Bank Coverage</div>
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
            <span>Chapters ({allLinks.findIndex(l => l.id === activeId) + 1}/60)</span>
          </button>
          <span className="w-px h-3 bg-white/20" />
          <button
            onClick={() => scrollToSection('ots-calculator')}
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
          >
            <Calculator className="w-3.5 h-3.5" />
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
