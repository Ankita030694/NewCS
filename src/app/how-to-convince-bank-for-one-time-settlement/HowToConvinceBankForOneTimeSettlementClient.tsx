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
      a: "Branch managers lack discretionary authority to waive principal. Internal recovery quotas penalize haircuts at the branch level, requiring borrowers to escalate proposals directly to regional credit committees or Stressed Assets Recovery Branches (SARB)."
    },
    {
      q: "Which bank authority approves an OTS proposal?",
      a: "Depending on loan quantum, OTS approvals are sanctioned by Regional Stressed Assets Resolution Branches (SARB), Regional Settlement Advisory Committees, or Zonal Credit Committees under the bank's board-approved Delegation of Financial Powers (DOFP)."
    },
    {
      q: "What are the key provisions of the RBI June 2023 compromise circular?",
      a: "The RBI June 8, 2023 Prudential Framework directs all regulated lenders to implement transparent, board-approved compromise policies, ensuring standardized debt settlement procedures, cooling-off periods, and uniform treatment for distressed retail and commercial borrowers."
    },
    {
      q: "How do I prove financial hardship versus willful default to the bank?",
      a: "Submit a documented hardship dossier containing medical records, layoff notices, corporate liquidation filings, and past 12-month bank statements proving zero income diversion and absolute absence of unencumbered liquid assets."
    },
    {
      q: "What average percentage haircut can a borrower negotiate during an OTS?",
      a: "Borrowers with verified financial insolvency typically secure complete 100% penal fee waivers, alongside 40% to 60% principal waivers depending on NPA aging, collateral absence, and speed of lump-sum remittance."
    },
    {
      q: "How should I handle recovery agent threats after requesting an OTS?",
      a: "Issue a formal legal notice citing the RBI Master Directions on Recovery Agents, record unlawful communications, and file complaints with the bank Principal Nodal Officer (PNO) and the RBI Integrated Ombudsman."
    },
    {
      q: "What clauses must be verified in a bank OTS sanction letter?",
      a: "Verify authentic bank stationery, authorized signatory seal and employee code, unique CBS dispatch number, explicit full debt release terms, specified payment schedules, and an unconditional No-Dues Certificate commitment."
    },
    {
      q: "Can a loan be settled after receiving a Section 138 notice?",
      a: "Yes. Section 138 Negotiable Instruments Act matters are compoundable under Section 147. Banks are legally bound to withdraw criminal complaints upon execution of an OTS and realization of agreed settlement funds."
    },
    {
      q: "How does an OTS impact credit score and future borrowing?",
      a: "The credit bureau marks the account as 'Settled', which stops continuous score degradation. Borrowers can rebuild credit scores past 750 within 12 to 24 months using secured, fixed-deposit backed credit cards."
    },
    {
      q: "Can debt assigned to an Asset Reconstruction Company (ARC) be settled?",
      a: "Yes. ARCs acquire distressed loan portfolios at steep discounts under SARFAESI Section 5 (often 15 to 25 paise on the rupee), making them highly receptive to compromise settlements offering 50% to 70% debt waivers."
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

          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive 60-chapter master guide to negotiating loan settlement, proving financial hardship, securing 40%–60% principal haircuts, overcoming branch refusals, and securing an unconditional No Dues Certificate under RBI&apos;s June 2023 compromise norms.
          </p>

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
                <h3 className="font-extrabold text-sm">Table of Contents</h3>
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
            <p>
              In the Indian banking and financial landscape, loan repayment default is rarely an intentional act of evasion. For millions of retail borrowers, small business entrepreneurs, and salaried professionals, unforeseen economic dislocations—such as involuntary retrenchment, catastrophic health emergencies, inflationary margin compressions, or sudden business closures—can abruptly derail an otherwise pristine repayment history. When equated monthly installments (EMIs) cease, borrowers find themselves caught in a vicious vortex of compounding penal levies, aggressive collection agency interactions, and impending statutory legal notices.
            </p>
            <p>
              However, Indian banking regulations and commercial prudential frameworks recognize that protracted litigation against an insolvent or genuinely distressed borrower yields diminishing returns for financial institutions. Recovering debts through the Debt Recovery Tribunal (DRT), Civil Courts, or criminal complaints under Section 138 of the Negotiable Instruments Act often takes several years and incurs massive administrative and legal expenses. To resolve non-performing assets (NPAs) pragmatically, scheduled commercial banks, regional rural banks, and Non-Banking Financial Companies (NBFCs) utilize a structured institutional compromise mechanism known as a <strong>One-Time Settlement (OTS)</strong>.
            </p>
            <p>
              A One-Time Settlement represents a win-win commercial compromise: the borrower is liberated from the relentless psychological and legal pressure of unpaid liabilities through a negotiated debt waiver, while the financial institution reclaims a significant portion of its capital upfront without squandering further resources on uncertain recovery litigation. Navigating this process, however, requires a nuanced understanding of bank credit policies, reserve provisioning rules, and the legal parameters governing compromise settlements in India.
            </p>

            <div className="p-4 sm:p-5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl">
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Key Strategic Insight</h4>
              <p className="text-black text-xs sm:text-sm">
                Under the Reserve Bank of India’s landmark <em>Prudential Framework for Resolution of Stressed Assets</em> and subsequent Master Directions, all commercial lenders are mandated to institute transparent, board-approved compromise settlement policies. A borrower who approaches the bank with an empirically verified financial hardship dossier can successfully secure substantial principal haircuts and complete penal interest waivers.
              </p>
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
            <p>
              A <strong>One-Time Settlement (OTS)</strong> is a formalized, legally binding contract executed between a lending institution and a defaulting borrower, whereby the lender voluntarily consents to accept a consolidated sum that is lower than the total ledger balance in full and final satisfaction of the loan obligations. The ledger balance typically encompasses the unpaid principal, normal contract interest, penal interest, late payment fees, bounce charges, and accrued legal costs.
            </p>
            <p>
              Upon remittance of the mutually agreed settlement amount within the stipulated timeframe, the bank undertakes to completely discharge the borrower from all surviving financial liabilities, revoke legal claims, withdraw ongoing court or arbitration proceedings, release original mortgaged title deeds or hypothecated security, and formally issue an unconditional <strong>No-Dues Certificate (NDC)</strong> or <strong>Full and Final Settlement Letter</strong>.
            </p>

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
                    <td className="p-3 border border-slate-200">Extends tenure, lowers EMI, or reduces interest rate while repaying 100% principal.</td>
                    <td className="p-3 border border-slate-200">Permanent debt extinction with substantial principal haircut and 100% penalty waiver.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Total Liability</td>
                    <td className="p-3 border border-slate-200">Full original debt remains payable over an extended amortization schedule.</td>
                    <td className="p-3 border border-slate-200">Discounted lump-sum (usually 35% to 60% of outstanding) clears entire debt.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Account Status</td>
                    <td className="p-3 border border-slate-200">Account continues as active and standard after successful restructuring trial.</td>
                    <td className="p-3 border border-slate-200">Account permanently terminated; reported to credit bureaus as &quot;Settled&quot;.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Repayment Period</td>
                    <td className="p-3 border border-slate-200">Multiple years through revised monthly installments.</td>
                    <td className="p-3 border border-slate-200">Single bullet payment or 2–4 short structured tranches (30–90 days).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Unlike loan refinancing or loan top-ups, an OTS is not a credit product; it is an extraordinary resolution mechanism designed specifically for distressed credit facilities where conventional debt servicing has collapsed irretrievably.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="easy-meaning-ots" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 3</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            3. Easy Meaning of One-Time Settlement
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              To understand One-Time Settlement in everyday terms, consider this real-world illustration:
            </p>
            <p>
              Imagine you availed a personal loan of ₹10,00,000 two years ago. Due to an unforeseen medical crisis and subsequent job loss, you missed consecutive EMIs for nine months. By this time, the bank ledger reflects your outstanding debt as follows:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Original Unpaid Principal: <strong>₹7,50,000</strong></li>
              <li>Accrued Normal Interest: <strong>₹1,80,000</strong></li>
              <li>Penal Interest &amp; Overdue Charges: <strong>₹1,20,000</strong></li>
              <li>Bounce Charges &amp; Recovery Overheads: <strong>₹50,000</strong></li>
              <li><strong>Total Bank Claimed Outstanding: ₹11,00,000</strong></li>
            </ul>
            <p>
              Under an OTS agreement, after you demonstrate genuine insolvency and lack of liquid assets, the bank agrees to:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li>Completely cancel and write off 100% of the penal charges, bounce fees, and accrued interest (₹3,50,000).</li>
              <li>Grant a 40% haircut on the unpaid principal balance of ₹7,50,000, bringing it down to ₹4,50,000.</li>
              <li>Accept ₹4,50,000 as a single, one-time payment to close the loan account permanently.</li>
            </ol>
            <p>
              In short, you settle an ₹11,00,000 problem for ₹4,50,000. The bank writes off the remaining ₹6,50,000 in its profit and loss statement under bad debt provisions, the recovery calls stop immediately, and you receive an official clearance document confirming you owe zero rupees to that lender.
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="how-ots-works" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 4</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            4. How Does One-Time Settlement Work?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              The mechanics of a One-Time Settlement operate through distinct administrative and regulatory stages inside a banking institution. Understanding this internal workflow enables borrowers to anticipate lender reactions and strategize their negotiations effectively:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 1: Asset Classification (NPA Tagging)</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  When payments are delayed past 90 days, the loan is classified as a Non-Performing Asset (NPA). Under RBI norms, the bank must set aside capital reserves (provisioning) of 15% to 100% against this defaulted exposure.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 2: Stressed Asset Transfer</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  The loan file shifts from the local branch to the regional Stressed Assets Recovery Branch (SARB) or Special Recovery Cell, where specialized recovery officers are evaluated on debt recovery metrics.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 3: Formal Hardship Appraisal</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  The borrower submits an OTS proposal supported by documentary evidence proving genuine financial hardship, insolvency, and absence of attachable commercial assets.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 4: Net Present Value (NPV) Assessment</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  The bank’s internal credit committee performs a Net Present Value calculation, comparing the immediate cash offer against the estimated realization from prolonged litigation over 3 to 7 years.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 5: Sanction Letter Issuance</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  Upon committee approval, the bank issues a written OTS Sanction Letter specifying the approved settlement sum, exact payment deadlines, and account closure terms.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-2">Stage 6: Execution &amp; Closure</h4>
                <p className="text-xs sm:text-sm text-slate-800">
                  The borrower remits funds directly into their designated loan account. The bank marks the facility closed, releases any held collateral, and issues the No-Dues Certificate.
                </p>
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
            <p>
              Not every defaulted borrower is eligible for a One-Time Settlement. Indian banking regulations draw a strict legal demarcation between <strong>genuine distressed borrowers</strong> and <strong>willful defaulters</strong>.
            </p>
            <p>
              Eligible categories for requesting an OTS include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Salaried Employees Facing Involuntary Job Loss:</strong> Individuals retrenched due to corporate downsizing, company insolvency, or prolonged economic downturns with verifiable termination letters.</li>
              <li><strong>Victims of Medical Catastrophes:</strong> Borrowers who have suffered permanent partial/total disability, critical illnesses (cancer, stroke, renal failure), or whose immediate dependents required life-savings medical expenditures.</li>
              <li><strong>MSME and Proprietary Business Owners:</strong> Entrepreneurs who experienced catastrophic business failure, loss of major clients, cancellation of government licenses, or supply chain devastation.</li>
              <li><strong>Surviving Legal Heirs of Deceased Borrowers:</strong> Families where the primary breadwinner and loan co-applicant has passed away without leaving adequate life or loan insurance protection.</li>
              <li><strong>Senior Citizens with Exhausted Retirement Corpus:</strong> Pensioners who borrowed against future expectations but faced unforeseen family crises.</li>
            </ul>

            <div className="p-4 sm:p-5 bg-amber-50/80 border-l-4 border-amber-600 rounded-r-xl my-4">
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Strict Disqualification Criteria</h4>
              <p className="text-black text-xs sm:text-sm">
                Borrowers declared as <strong>Willful Defaulters</strong> under RBI Master Circular (DBR.No.CID.BC.22/20.16.003/2015-16), individuals implicated in financial fraud, siphoning or diversion of loan funds to sister concerns, or those with undisclosed attachable real estate and liquid investments are strictly barred from receiving OTS benefits.
              </p>
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
            <p>
              Timing is the single most critical tactical factor in securing a favorable One-Time Settlement. Submitting an OTS request at the wrong juncture can lead to immediate rejection, whereas timing your proposal strategically maximizes the bank&apos;s willingness to grant deep discounts.
            </p>
            
            <div className="space-y-3 my-4">
              <div className="p-3.5 bg-red-50/70 border border-red-200 rounded-lg">
                <span className="font-bold text-red-800 text-xs sm:text-sm block mb-1">Too Early: SMA-0 &amp; SMA-1 Stage (1 to 60 Days Default)</span>
                <p className="text-xs sm:text-sm text-slate-800">
                  Approaching the branch manager when your loan is barely 30 days overdue is virtually guaranteed to fail. The branch manager will dismiss your request and insist on regular EMI clearance because the asset is still categorized as standard, and internal rules penalize early write-offs.
                </p>
              </div>

              <div className="p-3.5 bg-emerald-50/70 border border-emerald-300 rounded-lg">
                <span className="font-bold text-emerald-800 text-xs sm:text-sm block mb-1">Optimal Window: Sub-Standard NPA Stage (90 to 180 Days Overdue)</span>
                <p className="text-xs sm:text-sm text-slate-800">
                  Once your account crosses 90 days of continuous default and is formally tagged as an NPA, the bank must begin reserving capital provisions. The debt is transferred from retail branch operations to the recovery desk. This is the prime window to table an initial OTS proposal, as the lender is motivated to avoid further classification downgrades.
                </p>
              </div>

              <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-lg">
                <span className="font-bold text-blue-800 text-xs sm:text-sm block mb-1">Deepest Haircuts: Doubtful &amp; Loss Asset Stage (180+ Days to Multiple Years)</span>
                <p className="text-xs sm:text-sm text-slate-800">
                  When a loan remains non-performing for over 12 months, banks must maintain 100% provisioning against unsecured portions. The loan is virtually written off in bank accounting books. At this juncture, any recovered cash immediately flows directly into the bank&apos;s bottom-line profitability, prompting credit committees to approve 50% to 70% debt waivers.
                </p>
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
            <p>
              Lending institutions operate under systemic commercial and accounting pressures. Recognizing these institutional catalysts enables borrowers to submit compromise proposals when the bank&apos;s willingness to settle is at its absolute peak:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Quarter-End and Financial Year-End Cleanups (March &amp; September):</strong> Public and private sector banks face intense regulatory scrutiny regarding their Gross and Net NPA ratios during audited quarterly results. Between February 15 and March 31, credit committees are authorized to close pending stressed files rapidly to book cash recoveries before balance sheet finalization.</li>
              <li><strong>Total Absence of Primary or Collateral Security:</strong> In unsecured personal loans, consumer credit lines, and business loans without mortgage backing, the lender knows that court execution yields very little. An upfront cash offer is vastly superior to paper decrees.</li>
              <li><strong>Impasse in Legal Proceedings:</strong> When the bank discovers that the borrower has engaged competent legal counsel who has successfully countered Section 138 notices or challenged arbitration jurisdiction, the lender realizes that legal resolution will drag on for years. OTS becomes their preferred exit strategy.</li>
              <li><strong>Transfer to Stressed Assets Resolution Branches (SARB):</strong> SARBs exist exclusively to liquidate bad debt through negotiated settlements or auctions. Their performance KPIs are tied directly to recovered liquidity, not customer retention.</li>
              <li><strong>Lok Adalat Sessions:</strong> Periodic National and State Lok Adalats organized under the Legal Services Authorities Act provide specialized institutional forums where banks offer pre-sanctioned, steep compromise discounts.</li>
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
            <p>
              Convincing a bank to take a major financial loss on your loan requires shifting the discussion from emotional distress to financial realism. Bank managers and credit committee members are fiduciary custodians bound by auditing norms; they cannot grant haircuts out of personal sympathy. They can only approve an OTS if their internal documentation demonstrates that <em>settling now yields more than litigating later</em>.
            </p>
            <p>
              To convince the bank decisively, you must master the <strong>Three Pillars of Settlement Persuasion</strong>:
            </p>

            <div className="space-y-4 my-4">
              <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                <span className="font-extrabold text-black text-sm sm:text-base block mb-1">Pillar 1: Irrefutable Proof of Inability to Pay in Full</span>
                <p className="text-slate-800 text-xs sm:text-sm">
                  You must demonstrate beyond doubt that you do not have the income, liquid savings, or disposable surplus to service the original EMI schedule. Provide audited bank statements showing nil balances, medical bills, salary slip reductions, or tax returns demonstrating business collapse. Show them that full recovery is an economic impossibility.
                </p>
              </div>

              <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                <span className="font-extrabold text-black text-sm sm:text-base block mb-1">Pillar 2: Genuine Demonstration of Willingness to Settle Upfront</span>
                <p className="text-slate-800 text-xs sm:text-sm">
                  Banks deal constantly with evasive debtors who make empty promises. Differentiate yourself by demonstrating that while you cannot pay ₹10 Lakhs over 5 years, you have mobilized ₹4 Lakhs from family, friends, or gold liquidation that is ready for immediate deposit upon sanction. Immediate liquidity is a bank officer&apos;s greatest incentive.
                </p>
              </div>

              <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                <span className="font-extrabold text-black text-sm sm:text-base block mb-1">Pillar 3: The Threat of Zero Recovery in Insolvency or Litigation</span>
                <p className="text-slate-800 text-xs sm:text-sm">
                  Subtly convey that if the bank insists on unpayable amounts or drags you to court, legal costs and delays will erode their recovery to near zero. A bank credit committee must justify their approval to statutory auditors by noting: <em>&quot;Borrower has no attachable assets; proposed settlement represents highest possible net realization for the institution.&quot;</em> Give them the documentation they need to write that exact sentence.
                </p>
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
            <p>
              Navigating a One-Time Settlement successfully requires adhering to a structured procedural sequence. Attempting to skip steps—such as negotiating informally over the phone with third-party collection agents—frequently leads to wasted time, lost money, and non-binding verbal promises.
            </p>
            
            <div className="space-y-3 my-4">
              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 1: Ledger Statement Procurement</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Apply for and secure an authenticated, updated Loan Account Statement from your home branch. Segregate the figures into: (a) Sanctioned Principal, (b) Disbursed Amount, (c) Repaid Principal, (d) Unpaid Principal Balance, (e) Normal Accrued Interest, and (f) Compounded Penal Charges.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 2: Hardship Evidence Collation</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Assemble a comprehensive documentary dossier establishing why your income contracted permanently or temporarily. Include hospital discharge summaries, employment separation letters, ITR acknowledgments, or GST cancellation filings.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 3: Repayment Corpus Mobilization</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Before approaching the bank with a specific figure, secure the proposed settlement funds in an accessible liquid account (from personal savings, provident fund withdrawals, or assistance from relatives). Do not offer what you cannot immediately deliver.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 4: Formal OTS Proposal Submission</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Draft a formal, legally structured OTS request letter addressed to the Competent Authority (Branch Head / Regional Stressed Assets Branch Manager). Deliver it via Registered Post AD / Speed Post and official email, retaining acknowledgment copies.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 5: Bilateral Committee Negotiation</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Engage directly with the internal Settlement Advisory Committee or designated recovery officers. Counter high starting demands by anchoring firmly around the unpaid principal and verifiable hardship parameters.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">6</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 6: Written Sanction &amp; Monitored Remittance</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Obtain an official, signed OTS Sanction Letter on official bank stationery. Verify critical legal clauses before depositing the settlement sum directly into the designated loan account via RTGS/NEFT.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">7</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Step 7: NDC Issuance &amp; Credit Bureau Reconciliation</h4>
                  <p className="text-slate-800 text-xs sm:text-sm">Collect the physical No-Dues Certificate, retrieve all deposited security cheques, cancelled ECS mandates, or property title deeds. Ensure the bank reports the account status as &quot;Settled&quot; to CIBIL, Experian, Equifax, and CRIF High Mark within 30 days.</p>
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
            <p>
              Entering an OTS discussion without meticulous preparation is the most common reason settlement requests are summarily rejected. Banks operate on cold data, audited numbers, and internal regulatory constraints. To command authority during negotiations, prepare the following preliminary dossier:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Complete Repayment Chronology:</strong> Prepare a chronological spreadsheet detailing every EMI paid since the inception of the loan. Highlight the total quantum of principal and interest already repaid to show that you were a conscientious borrower until disaster struck.</li>
              <li><strong>Statement of Personal Assets and Liabilities (SAL):</strong> Draft an objective balance sheet of your current financial condition. Itemize your liquid savings, current monthly household expenses (food, rent, school fees, utilities), and demonstrate that your net disposable surplus is zero or negative.</li>
              <li><strong>Litigation Audit:</strong> Check whether the bank has initiated legal action against you, such as notices under Section 138 of the Negotiable Instruments Act, Section 25 of the Payment and Settlement Systems Act (PSSA), arbitration proceedings, or DRT applications. Understanding your legal exposure determines your negotiation leverage.</li>
              <li><strong>Mental Readiness and Emotional Detachment:</strong> Bank officers and recovery personnel frequently use intimidation tactics, threatening arrest or seizure of household goods. Recognize that unpaid unsecured personal debt is a civil dispute in India, not a criminal offense. Enter discussions with calm, legal confidence.</li>
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
            <p>
              When a loan enters default, bank core banking systems (CBS) automatically compound interest, append monthly late payment fines, levy penal interest (often 24% to 36% per annum), and add transaction charges for bounced cheques or NACH auto-debits. Over 12 to 24 months, these secondary levies can swell the claimed total to double the original borrowed capital.
            </p>
            <p>
              Before negotiating, you must dissect the bank&apos;s demand notice into three distinct financial components:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">1. Pure Principal Balance</span>
                <p className="text-xs text-slate-800">The actual capital borrowed minus the principal portions amortized through past EMIs. This is the only baseline figure the bank fundamentally seeks to protect.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">2. Normal Accrued Interest</span>
                <p className="text-xs text-slate-800">Contractual interest calculated at the sanctioned rate up to the date the account was classified as NPA. Under RBI rules, interest ceases to accrue in P&amp;L accounts once tagged as NPA.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">3. Penal Levies &amp; Overheads</span>
                <p className="text-xs text-slate-800">Unjustified penal interest, bounce charges, recovery agency commissions, and legal fees. Under RBI compromise circulars, these charges are 100% waivable.</p>
              </div>
            </div>

            <p>
              Never formulate your settlement offer based on the inflated gross demand. Always anchor your settlement discussions strictly around the <strong>Pure Principal Balance</strong>.
            </p>
          </div>
        </section>

        {/* SECTION 12 */}
        <section id="understanding-repayment-capacity" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 12</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            12. Understanding Your Repayment Capacity
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Before making an offer to the bank, you must objectively determine your absolute upper financial limit. A common and disastrous mistake is agreeing to a settlement figure under bank intimidation that you cannot actually pay. If an OTS sanction letter is issued and you default on the agreed payment date, the bank automatically cancels the OTS, revokes all granted waivers, and appropriates any partial deposit towards penal charges.
            </p>
            <p>
              Conduct an honest assessment using this pragmatic formula:
            </p>
            <div className="p-4 bg-slate-100 border border-slate-300 rounded-xl font-mono text-xs sm:text-sm my-3">
              <strong>Realistic Settlement Corpus</strong> = [Liquid Bank Balance] + [Provident Fund / Policy Surrender Value] + [Assistance from Family/Relatives] - [Mandatory 3 Months Survival Reserve]
            </div>
            <p>
              Never commit to borrowing from high-interest predatory loan apps or private moneylenders to settle a bank loan. Swapping low-risk bank debt for high-risk informal debt only accelerates financial ruin. If your mobilized corpus is ₹3,00,000, your starting negotiation offer should be ₹1,80,000, leaving you adequate headroom to negotiate upwards to your ₹3,00,000 ceiling.
            </p>
          </div>
        </section>

        {/* SECTION 13 */}
        <section id="explaining-financial-hardship-to-bank" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 13</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            13. Explaining Financial Hardship to the Bank
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Merely informing the bank that &quot;I am in financial trouble&quot; will elicit zero sympathy and zero concessions. Bank recovery officers hear identical claims dozens of times every day. To convince a bank credit committee, your financial hardship narrative must be structured with precision, empathy, and documentary evidence:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Pinpoint the Specific Trigger Event:</strong> Clearly identify the exact date and catalyst that disrupted your income. For example: <em>&quot;On October 14, 2024, my primary employer liquidated operations pursuant to NCLT insolvency proceedings, terminating my employment without severance pay.&quot;</em></li>
              <li><strong>Illustrate Cumulative Household Deficit:</strong> Document how the loss of income forced you to deplete emergency reserves, exhaust medical insurance policies, or rely on familial support for basic nutritional and educational needs.</li>
              <li><strong>Provide Contemporaneous Proof:</strong> Corroborate every statement with external, verifiable records. A doctor&apos;s prescription, an oncology diagnostic report, a termination letter on corporate letterhead, or a court liquidation notice transforms subjective distress into an indisputable legal fact.</li>
              <li><strong>Differentiate Between Unwillingness and Inability:</strong> Emphasize that your default was entirely involuntary. Point out that you serviced all installments faithfully for years prior to the catastrophic event, proving you possess bona fide borrower intent.</li>
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
            <p>
              A strong settlement proposal is structured like an institutional memorandum rather than a casual plea. When drafted with professional rigor, it provides the bank manager with the exact documentary justification required to seek approval from higher credit authorities.
            </p>
            <p>
              Your settlement proposal packet must comprise five vital components:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Executive Summary &amp; Loan Identifiers:</strong> Complete account number, loan sanction date, original sanctioned amount, total EMIs paid, and current NPA classification status.</li>
              <li><strong>Chronological Hardship Narrative:</strong> A concise, factual summary detailing the exogenous crisis that incapacitated your earning potential.</li>
              <li><strong>Financial Audit &amp; Asset Statement:</strong> Explicit declaration under affidavit confirming that you hold no marketable immovable properties, shares, or mutual funds capable of satisfying the original debt.</li>
              <li><strong>The Concrete Commercial Offer:</strong> A definitive, unambiguous settlement figure expressed in both figures and words, coupled with an exact payment timeline (e.g., <em>&quot;₹3,50,000 payable within 30 days of receiving the formal OTS sanction letter&quot;</em>).</li>
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
                    <p className="text-slate-300">
                      <strong>₹{otsAnalysis.recommendedFirstOffer.toLocaleString('en-IN')}</strong> in single payment (leaves headroom to settle at ₹{otsAnalysis.targetSettlement.toLocaleString('en-IN')}).
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                    <span className="font-bold text-blue-300 block mb-0.5">Approving Committee:</span>
                    <p className="text-slate-300">{otsAnalysis.authorityLevel}</p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-3 italic">
                  * Note: Estimates based on RBI June 2023 Prudential Compromise Framework and actual banking recovery matrices. Final sanctioned amounts vary based on documented medical/financial hardship dossiers.
                </p>
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
            <p>
              Determining your initial settlement offer is a delicate tactical balancing act. If you bid unrealistically low—such as offering 10% of the principal without severe medical proof—the credit committee will discard your letter as non-serious. Conversely, if you offer too high, you leave no room for negotiations and pay hundreds of thousands of rupees more than necessary.
            </p>
            <p>
              The industry benchmark for settlement offers varies by loan type and default duration:
            </p>

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
                    <td className="p-3 font-semibold border border-slate-200">Unsecured Personal Loans</td>
                    <td className="p-3 border border-slate-200">25% – 30% of Unpaid Principal</td>
                    <td className="p-3 border border-slate-200">35% – 50% of Unpaid Principal</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">100% Waived</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Credit Card Outstandings</td>
                    <td className="p-3 border border-slate-200">20% – 25% of Unpaid Principal</td>
                    <td className="p-3 border border-slate-200">30% – 45% of Unpaid Principal</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">100% Waived</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Unsecured Business Loans</td>
                    <td className="p-3 border border-slate-200">30% – 35% of Unpaid Principal</td>
                    <td className="p-3 border border-slate-200">40% – 55% of Unpaid Principal</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">100% Waived</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Post-Auction Vehicle Shortfall</td>
                    <td className="p-3 border border-slate-200">15% – 25% of Deficiency Balance</td>
                    <td className="p-3 border border-slate-200">25% – 40% of Deficiency Balance</td>
                    <td className="p-3 border border-slate-200 text-emerald-700 font-bold">100% Waived</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Always initiate discussions below your maximum willingness to pay. A bank credit committee rarely accepts a borrower&apos;s initial offer without a counter-demand. By starting at 25% to 30%, you allow the bank officer to feel victorious by negotiating you up to 40% or 45%, which represents your true target ceiling.
            </p>
          </div>
        </section>

        {/* SECTION 16 */}
        <section id="how-banks-decide-settlement-amount" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 16</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            16. How Banks Decide the Settlement Amount
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Borrowers often assume that settlement figures are arbitrary numbers pulled out of thin air by bank branch managers. In reality, banks employ rigorous actuarial and recovery matrices governed by internal board policies and RBI guidelines:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Net Present Value (NPV) Comparison:</strong> The bank models two economic scenarios. Scenario A: Accept ₹4,00,000 cash today. Scenario B: Spend ₹1,50,000 in advocate fees, court court court fees, and collection commissions over 4 years to potentially recover ₹6,00,000. When discounted to present value, Scenario A frequently yields a higher net recovery than Scenario B.</li>
              <li><strong>Provisioning Coverage Ratio (PCR):</strong> If the bank has already made a 100% capital provision against your doubtful loan, the book value of that asset on their ledger is effectively zero. Every single rupee collected under an OTS reverses that provision and directly boosts the bank&apos;s reported quarterly profit.</li>
              <li><strong>Realizable Security Value:</strong> If the loan has zero collateral backing (clean personal loan), the realizable security is zero. If the loan is backed by residential property, the bank will calculate the distressed sale value (forced sale value) of the asset minus eviction litigation costs.</li>
              <li><strong>Recovery Agency Commission Cap:</strong> Banks pay external collection agencies between 10% and 25% for recovering bad debts. Knowing this, banks prefer direct OTS settlements that eliminate third-party agency payouts.</li>
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
            <p>
              When a credit committee convenes to evaluate an OTS file, they review a structured credit appraisal note. The following critical parameters determine whether your proposal is approved or denied:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Borrower Age &amp; Employability</h4>
                <p className="text-xs sm:text-sm text-slate-800">A 58-year-old retired borrower with no pension has near-zero future earning capacity, making deep discounts readily justifiable. A 28-year-old software engineer will face higher resistance unless permanent disability is proven.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Duration of Default &amp; Asset Vintage</h4>
                <p className="text-xs sm:text-sm text-slate-800">A loan defaulted for 3 years is considered a dormant &quot;hard-core NPA&quot;. Banks offer vastly steeper discounts on older vintage debts than on accounts defaulted for just 4 months.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Status of Co-Borrowers and Guarantors</h4>
                <p className="text-xs sm:text-sm text-slate-800">If a solvent co-applicant or third-party guarantor with high net worth exists, the bank will refuse an OTS and target the guarantor instead. The absence of solvent guarantors accelerates OTS approval.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Speed of Lump-Sum Remittance</h4>
                <p className="text-xs sm:text-sm text-slate-800">A borrower offering ₹4,00,000 payable within 15 days will receive a much larger haircut than a borrower offering ₹5,00,000 payable across 12 monthly installments.</p>
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
            <p>
              To substantiate an OTS application before the internal audit department, you must provide empirical documentation corroborating every dimension of your hardship:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Income and Employment Records:</strong> Formal letter of termination, retrenchment notice, pink slip, corporate closure circular, or salary slips demonstrating severe pay-cuts.</li>
              <li><strong>Medical and Health Records:</strong> Hospital admission and discharge summaries, cancer/cardiac surgery bills, chemotherapy protocols, disability certificates issued by government medical boards.</li>
              <li><strong>Business Downfall &amp; Insolvency Documents:</strong> Audited balance sheets displaying operating losses, GST registration cancellation certificates, ITR acknowledgments showing income collapse, lease termination notices.</li>
              <li><strong>Bank Account Statements (Past 12 Months):</strong> Statements of all active savings and current accounts across all banks proving zero surplus cash reserves and absence of large hidden transactions.</li>
              <li><strong>Affidavit of Assets:</strong> A notarized legal affidavit declaring under oath that you own no undisclosed real estate, vehicles, corporate equity, or financial instruments.</li>
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
            <p>
              The OTS request letter is your primary legal exhibit. It should be typed, signed, notarized if required, and dispatched via registered post and email. Below is an authoritative sample template based on banking law standards:
            </p>

            <div className="p-4 sm:p-6 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto my-4 space-y-3">
              <p>To,</p>
              <p>The Branch Manager / Stressed Assets Resolution Branch (SARB),<br />[Name of Bank / Financial Institution],<br />[Branch Address, City, Pincode]</p>
              
              <p><strong>SUBJECT: Formal Proposal for Compromise One-Time Settlement (OTS) under RBI Prudential Guidelines in respect of Loan Account No. [Insert Loan Account Number]</strong></p>
              
              <p>Respected Sir/Madam,</p>
              
              <p>1. I, [Borrower Full Name], had availed a [Personal / Business / Credit Card] facility bearing Loan Account No. [XXXXXXXX] from your esteemed bank on [Date of Sanction] with a sanctioned limit of ₹[XXXXXXXX].</p>
              
              <p>2. I had been servicing the equated monthly installments (EMIs) with impeccable regularity until [Month, Year]. Unfortunately, due to unforeseen and catastrophic events beyond my reasonable control, namely [Specify: involuntary employment termination / acute critical illness / business liquidation], my income dried up completely.</p>
              
              <p>3. As per your latest ledger statement, the outstanding amount is claimed at ₹[Total Amount], which includes substantial accrued penal interest, late payment fines, and bounce charges. The actual unpaid principal capital stands at ₹[Principal Balance].</p>
              
              <p>4. In line with the Reserve Bank of India Master Directions and Prudential Compromise Settlement Guidelines, I am formally requesting a One-Time Settlement (OTS). I have managed to arrange a consolidated corpus of <strong>₹[Offer Amount in Figures] (Rupees [Offer Amount in Words] Only)</strong> through voluntary financial assistance from close relatives.</p>
              
              <p>5. I hereby offer this sum of ₹[Offer Amount] as full, final, and absolute settlement of all claims arising under the captioned loan account. Upon receipt of your formal written OTS Sanction Letter, I undertake to deposit the entire sum within [15 / 30] days.</p>
              
              <p>6. Enclosed herewith please find documentary exhibits substantiating my medical/financial hardship and bank statements reflecting my current illiquidity (Annexures A to E).</p>
              
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
            <p>
              Negotiating an OTS is a phased tactical negotiation. Never negotiate in person alone without written notes. Always keep the following strategic principles at the core of your discussions:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Bypass Low-Level Recovery Callers:</strong> Third-party recovery agents have zero power to waive a single rupee of principal. Engaging in heated arguments with them is futile. Request meeting the Chief Manager, Stressed Assets Branch Head, or Regional Credit Manager.</li>
              <li><strong>Anchor to Unpaid Principal Only:</strong> When the bank opens negotiations with: <em>&quot;Your total outstanding is ₹12 Lakhs, we can give you a discount to ₹9 Lakhs,&quot;</em> immediately counter: <em>&quot;The original principal balance is ₹6 Lakhs. The remaining ₹6 Lakhs are penal charges. Under RBI rules, penal charges are waivable. Let us negotiate on the ₹6 Lakhs principal.&quot;</em></li>
              <li><strong>Use Time Decay as Leverage:</strong> Banks operate against internal monthly deadlines. If the bank refuses a reasonable offer in January, remain patient. By late February or mid-March, their urgency to clear NPAs before year-end audit will make them far more accommodating.</li>
              <li><strong>Insist on Written Communication:</strong> Never accept a verbal settlement figure agreed over a phone call or casual branch visit. Until you hold a physical or digitally verified Sanction Letter on official bank letterhead, no settlement exists.</li>
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
            <p>
              Your spoken words during settlement conferences create the psychological foundation of the negotiation. Use precise, legally sound phrases that emphasize cooperation while maintaining firm financial boundaries:
            </p>

            <div className="space-y-2.5 my-4">
              <div className="p-3 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-lg">
                <p className="font-bold text-emerald-950 text-xs sm:text-sm">&quot;I respect the bank&apos;s capital and have every intention to resolve this matter amicably, but my verified financial incapacity makes full repayment impossible.&quot;</p>
                <p className="text-slate-700 text-xs mt-1">Demonstrates good faith while preventing the bank from labeling you a willful defaulter.</p>
              </div>

              <div className="p-3 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-lg">
                <p className="font-bold text-emerald-950 text-xs sm:text-sm">&quot;This settlement fund is not my own money; it is a one-time humanitarian loan mobilized from my relatives solely to close this account forever.&quot;</p>
                <p className="text-slate-700 text-xs mt-1">Explains why you cannot increase your offer—because you do not control the funds.</p>
              </div>

              <div className="p-3 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-lg">
                <p className="font-bold text-emerald-950 text-xs sm:text-sm">&quot;If this proposal is rejected, the funds will be returned to my relatives, and both parties will face years of zero-recovery civil litigation.&quot;</p>
                <p className="text-slate-700 text-xs mt-1">Reminds the bank officer of the immediate opportunity cost of rejecting the offer.</p>
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
            <p>
              An inadvertent slip of the tongue during a settlement meeting can instantly destroy your negotiation leverage or trigger criminal charges. Strictly avoid the following statements:
            </p>

            <div className="space-y-2.5 my-4">
              <div className="p-3 bg-red-50/80 border-l-4 border-red-600 rounded-r-lg">
                <p className="font-bold text-red-950 text-xs sm:text-sm">NEVER SAY: &quot;I will not pay a single rupee, do whatever you want!&quot;</p>
                <p className="text-slate-700 text-xs mt-1">This statement can be logged by the bank as willful default or refusal to pay, triggering criminal notices under Section 420/406 IPC or Section 138 NI Act.</p>
              </div>

              <div className="p-3 bg-red-50/80 border-l-4 border-red-600 rounded-r-lg">
                <p className="font-bold text-red-950 text-xs sm:text-sm">NEVER SAY: &quot;I am expecting a large payout / property sale in 6 months.&quot;</p>
                <p className="text-slate-700 text-xs mt-1">The bank will immediately freeze all OTS discussions and wait for your future funds to attach them for 100% full recovery.</p>
              </div>

              <div className="p-3 bg-red-50/80 border-l-4 border-red-600 rounded-r-lg">
                <p className="font-bold text-red-950 text-xs sm:text-sm">NEVER SAY: &quot;I have money in other bank accounts or mutual funds.&quot;</p>
                <p className="text-slate-700 text-xs mt-1">Revealing liquid wealth destroys your insolvency defense and exposes those secondary accounts to potential legal attachment.</p>
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
            <p>
              It is standard banking procedure to reject a borrower&apos;s first OTS offer. Rejection is rarely a final judicial verdict; it is an institutional posture designed to test whether the borrower has hidden financial reserves that can be pressured into daylight.
            </p>
            <p>
              When your proposal is rejected, execute this four-step counter-strategy:
            </p>

            <div className="space-y-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Step 1: Demand Written Grounds for Rejection</span>
                <p className="text-xs sm:text-sm text-slate-800">Do not accept verbal rejections from recovery staff. Submit a formal request asking the bank to articulate the specific policy grounds under which your proposal was turned down. Banks struggle to defend arbitrary rejections when empirical hardship is on record.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Step 2: Ascertain the Bank&apos;s Counter-Expectation</span>
                <p className="text-xs sm:text-sm text-slate-800">Directly ask the Stressed Assets Branch Head: <em>&quot;What is the minimum threshold the Settlement Advisory Committee is authorized to sanction under the board-approved policy for an asset of this vintage?&quot;</em> This unlocks their internal mandate.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Step 3: Escalate to Higher Zonal Authorities</span>
                <p className="text-xs sm:text-sm text-slate-800">If the local branch head is intransigent due to local branch recovery quotas, escalate your proposal directly to the Zonal Stressed Assets Resolution Branch (ZSARB) or the General Manager (Recovery). Higher authorities hold far broader discretionary powers to sanction deep haircuts.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Step 4: Table a Modest Incremental Increase</span>
                <p className="text-xs sm:text-sm text-slate-800">Increase your offer marginally (e.g., from 30% to 35% of principal), emphasizing that this represents the absolute final assistance obtainable from your extended family.</p>
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
            <p>
              When submitting a revised offer, avoid jumping immediately to the bank&apos;s demanded figure. Structured revision signals to the credit committee that you are negotiating at the outer perimeter of your financial capacity:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>The Incremental Stepping Strategy:</strong> If your initial offer was ₹3,00,000 on an ₹8,00,000 principal, and the bank demanded ₹6,00,000, do not offer ₹5,00,000. Revise to ₹3,60,000. Frame the additional ₹60,000 as emergency contributions raised from a sibling or gold pawn.</li>
              <li><strong>Introduce Shorter Payment Terms as Currency:</strong> If you cannot raise the cash amount, offer to compress the payment window. For example: <em>&quot;While I cannot increase the amount beyond ₹3,75,000, I am prepared to remit 100% of this amount within 7 business days instead of 30 days.&quot;</em> Immediate cash closure is highly prized by credit officers.</li>
              <li><strong>Attach a Token Earnest Money Deposit (EMD):</strong> In high-value settlements, attaching a refundable Demand Draft for 5% to 10% of the proposed settlement amount proves absolute bona fide intent. Bank guidelines mandate committees to prioritize OTS files accompanied by EMD drafts.</li>
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
            <p>
              Yes, absolutely. Under Indian banking jurisprudence and the Reserve Bank of India’s June 8, 2023 <em>Prudential Framework for Compromise Settlements and Concessions</em>, scheduled commercial banks and NBFCs possess comprehensive institutional discretion to negotiate and modify settlement amounts.
            </p>
            <p>
              Settlement figures are not cast in stone. The final sanctioned number is the outcome of commercial bargaining between the borrower&apos;s demonstrated repayment capacity and the bank&apos;s cost-benefit calculus regarding recovery litigation. While the branch manager may claim that &quot;the system does not permit discounts,&quot; every bank maintains an internal <strong>Delegation of Financial Powers (DOFP)</strong> matrix that authorizes Regional Heads, Zonal Committees, and Executive Directors to sanction haircuts of up to 60% or more on stressed unsecured portfolios.
            </p>
          </div>
        </section>

        {/* SECTION 26 */}
        <section id="can-you-negotiate-interest-and-penalties" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 26</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            26. Can You Negotiate Interest and Penalties?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Negotiating a 100% waiver of penal interest, bounce fees, and late payment penalties is virtually non-negotiable in any standard OTS. In fact, banks consider penal interest as a bookkeeping lever rather than real cost of capital.
            </p>
            <div className="p-4 sm:p-5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl my-4">
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">RBI Fair Lending Practice Directive (2024)</h4>
              <p className="text-black text-xs sm:text-sm">
                Under the RBI Master Direction on <em>Fair Practices Code for Lenders</em> and circulars on <em>Penal Charges in Loan Accounts</em>, the central bank explicitly mandated that penal charges must not be compounded into the principal balance or used as a revenue-generating tool. In any compromise settlement, 100% of accumulated penal interest, overdue processing charges, and advocate notice costs are routinely wiped clean.
              </p>
            </div>
            <p>
              Furthermore, contractual interest accrued after the loan&apos;s NPA classification date is also reversed under RBI income recognition norms (IRAC), since banks cannot book uncollected interest on non-performing assets into their profit statements.
            </p>
          </div>
        </section>

        {/* SECTION 27 */}
        <section id="can-you-request-more-time-pay-settlement" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 27</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            27. Can You Request More Time to Pay the Settlement Amount?
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              While an OTS is traditionally conceived as an upfront, single bullet payment within 15 to 30 days of sanction, banks routinely allow borrowers to pay the agreed settlement sum in <strong>structured tranches</strong> (installments) over a 60 to 90-day window.
            </p>
            <p>
              To structure a multi-installment settlement successfully, observe these rules:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Standard Tranche Structure:</strong> Most bank policies permit a 3-tranche structure: 25% payable upfront upon sanction, 35% payable within 30 days, and the remaining 40% payable within 60 to 90 days.</li>
              <li><strong>Interest on Extended Periods:</strong> If you request an installment window exceeding 90 days, bank guidelines frequently require charging simple interest (typically MCLR or base lending rate) on the unpaid balance for the extended duration.</li>
              <li><strong>The Critical Default Clause:</strong> All OTS sanction letters contain a strict default covenant: if you pay the first two tranches but fail to pay the final installment on time, the entire OTS agreement is rendered null and void. The bank appropriates your paid tranches against past overdue interest, and reinstates the original loan balance in full. Never agree to an installment timeline you cannot maintain with absolute certainty.</li>
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
            <p>
              Negotiating an OTS with a Scheduled Commercial Bank (such as State Bank of India, Punjab National Bank, Bank of Baroda, HDFC Bank, ICICI Bank, or Axis Bank) requires navigating institutional hierarchy and compliance protocols.
            </p>
            <p>
              In Public Sector Banks (PSBs), officers are audited by the Comptroller and Auditor General (CAG), Central Vigilance Commission (CVC), and statutory internal auditors. Consequently, public sector bank officers are terrified of being accused of corruption or favoring a borrower. To approve an OTS, they require an airtight, water-tight file proving that the borrower is completely destitute and that litigation would yield less than the settlement offer. Public sector banks adhere rigidly to periodic, board-approved OTS schemes (such as Rin Samadhan Schemes) with predetermined discount grids based on asset vintage.
            </p>
            <p>
              Private Sector Banks, conversely, operate on commercial agility and quarterly P&amp;L targets. They are far less concerned with bureaucratic vigilance audits and much more focused on cash collection speed. Private banks are more flexible with customized haircuts, especially towards the end of fiscal quarters, provided the borrower can execute an immediate lump-sum payment.
            </p>
          </div>
        </section>

        {/* SECTION 29 */}
        <section id="ots-with-nbfcs" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 29</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            29. One-Time Settlement With NBFCs
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Non-Banking Financial Companies (NBFCs) and digital lending fintech platforms (such as Bajaj Finance, Tata Capital, Aditya Birla Capital, Hero Fincorp, and digital NBFC apps) operate under higher borrowing costs than retail deposit-taking commercial banks. Consequently, their internal collection mechanisms are notoriously more aggressive.
            </p>
            <p>
              However, NBFCs are also governed by the RBI June 8, 2023 Prudential Framework on Compromise Settlements. Key tactical differences when negotiating with NBFCs include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Higher Rate of Arbitrary Charges:</strong> NBFC statements are frequently cluttered with excessive penal interest, bounce charges, and loan processing fees. Stripping these secondary charges often eliminates 30% to 50% of their claimed ledger balance immediately.</li>
              <li><strong>Early Reliance on Arbitration:</strong> NBFCs frequently initiate unilateral, sole-arbitrator proceedings or file Section 25 PSSA complaints (for bounced NACH mandates) to generate coercive leverage. Establishing that you are legally prepared to defend against these proceedings rapidly compels their legal desk to table an OTS.</li>
              <li><strong>Debt Assignment to ARCs:</strong> If an NBFC fails to recover debt within 180 to 365 days, they frequently bundle and sell the loan portfolio to Asset Reconstruction Companies (ARCs) like Phoenix ARC, ARCIL, or Asset Reconstruction Company India at a steep discount (often 15 to 25 paise on the rupee). Once sold, negotiating a deep settlement with the ARC becomes exceptionally advantageous.</li>
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
            <p>
              Unsecured personal loans represent the most common credit facility resolved through One-Time Settlement. Because personal loans are sanctioned without any tangible asset hypothecation or mortgage backing, the lender possesses zero collateral to seize or auction upon default.
            </p>
            <p>
              In personal loan settlements:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>The primary negotiation anchor is the <strong>unpaid principal amount</strong>.</li>
              <li>Penal interest and bounce fees are completely waived.</li>
              <li>Depending on whether the account is 90 days overdue (Sub-Standard) or over 12 months overdue (Doubtful), realistic principal haircuts range between <strong>35% and 55%</strong>.</li>
              <li>If the borrower has suffered a catastrophic medical impairment or permanent job loss, settlements as low as 30% of principal are achievable through zonal committee escalation.</li>
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
            <p>
              Credit card outstandings are infamous for compounding at predatory interest rates ranging from 42% to 52% per annum, coupled with GST on finance charges, late payment fees, and over-limit charges. If an individual carries an unpaid balance of ₹2,00,000, compounding charges can escalate the statement balance to ₹5,50,000 within 24 months.
            </p>
            <p>
              During an OTS for credit card dues:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Ledger Dissection:</strong> The borrower must obtain an itemized breakdown of actual retail purchase transactions versus accrued financing charges and finance fees.</li>
              <li><strong>Haircuts Exceeding 60%:</strong> Because 60% or more of the card statement is pure compounding interest and late fees, banks routinely settle credit card portfolios at <strong>25% to 40% of the gross statement value</strong>, effectively recovering their base transactional spend while extinguishing the inflated fee layer.</li>
              <li><strong>Immediate Card Invalidation:</strong> Upon execution of an OTS, the card account is permanently canceled, and the credit limit is revoked.</li>
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
            <p>
              Settling business loans—such as unsecured MSME working capital loans, cash credit (CC) limits, overdrafts (OD), or machinery term loans—involves corporate legal frameworks and personal guarantee liabilities.
            </p>
            <p>
              Most business loans feature personal guarantees executed by promoters, directors, or partners under Section 128 of the Indian Contract Act. To settle a distressed business loan:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Substantiate Genuine Commercial Failure:</strong> Provide audited financials, cancelled supplier orders, debtor default records, or insolvency petitions proving that business revenue has collapsed permanently without diversion of funds.</li>
              <li><strong>Comprehensive Personal Guarantee Discharge:</strong> Ensure that the OTS agreement explicitly covenants that upon receipt of the settlement sum, the bank discharges not only the corporate borrower entity but also all personal and corporate guarantors from all future liabilities.</li>
              <li><strong>CGTMSE Coverage Implications:</strong> For loans covered under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE), the bank can claim up to 75% to 85% of the default from the Trust. Knowing this provides immense negotiation leverage: the borrower can negotiate a settlement that bridges the bank&apos;s net uncovered gap.</li>
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
            <p>
              Vehicle loans are secured by hypothecation over the automobile under Section 51 of the Motor Vehicles Act. Consequently, OTS negotiations in auto loans bifurcate into two distinct scenarios:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Scenario A: Vehicle Remains with Borrower</h4>
                <p className="text-xs sm:text-sm text-slate-800">The borrower wishes to settle the loan and retain the car. In this case, the bank will calculate the current depreciated market value of the car. The settlement amount cannot fall below the vehicle&apos;s realistic market liquidation value. Upon settlement, the bank must issue RTO Form 35 to remove hypothecation from the RC.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Scenario B: Post-Auction Deficiency Balance</h4>
                <p className="text-xs sm:text-sm text-slate-800">The bank repossessed and auctioned the vehicle, but the auction proceeds were insufficient to cover the loan, leaving a &quot;deficiency balance&quot; of ₹2 to ₹5 Lakhs. Since the asset is already sold, this deficiency balance is now 100% unsecured debt, allowing the borrower to settle it at a steep <strong>60% to 75% haircut</strong>.</p>
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
            <p>
              A substantial number of stressed borrowers do not default on a single facility; they find themselves entangled in multiple credit cards, personal loans, and fintech lines across four to seven different lenders simultaneously.
            </p>
            <p>
              When dealing with multiple defaults, a scattershot approach leads to disaster. Execute a structured <strong>Debt Prioritization &amp; Settlement Sequencing Protocol</strong>:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Sequence by Legal Exposure:</strong> Settle lenders that have issued Section 138 NI Act statutory legal notices or Section 25 PSSA summons first, as criminal complaint exposure carries potential warrants.</li>
              <li><strong>Sequence by Haircut Economics:</strong> Direct liquid capital towards lenders offering the highest haircuts (60%+), closing maximum accounts with minimum cash.</li>
              <li><strong>Never Cross-Contaminate Negotiations:</strong> Never inform Bank A about how much you paid to settle with Bank B. Each bank must believe that you have zero remaining liquidity and that their offer represents your very last available penny.</li>
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
            <p>
              Many borrowers mistakenly believe that once a loan defaults, the opportunity to negotiate is permanently closed. In truth, <strong>loan default is the mandatory prerequisite for an OTS</strong>. No regulated commercial bank in India can legally entertain a haircut proposal on a &quot;Standard Asset&quot; where regular EMIs are being serviced, as doing so would violate RBI asset classification norms.
            </p>
            <p>
              Once a loan defaults and crosses into NPA territory:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>The relationship transitions from retail customer servicing to stressed credit recovery.</li>
              <li>The branch manager loses sole jurisdiction over the file, and regional credit committees take control.</li>
              <li>The borrower gains substantial bargaining power because the bank is now incurring mandatory provisioning costs against the non-performing asset.</li>
            </ul>
            <p>
              Defaulting is not a crime under Indian civil law; it is a breach of contract under Section 73 of the Indian Contract Act, 1872. Approaching the bank with an OTS immediately after NPA classification establishes you as a proactive, solutions-oriented borrower.
            </p>
          </div>
        </section>

        {/* SECTION 36 */}
        <section id="ots-after-receiving-legal-notice" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 36</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            36. One-Time Settlement After Receiving a Legal Notice
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Receiving an advocate legal notice—whether a Loan Recall Notice, a Section 138 NI Act statutory notice (for cheque dishonour), a Section 25 PSSA notice (for bounced NACH mandates), or a Section 13(2) SARFAESI notice—often induces panic. Borrowers assume court prosecution is inevitable.
            </p>
            <p>
              In reality, over 80% of legal notices issued by banks and NBFCs are <strong>procedural recovery pressure tactics</strong> designed to compel the borrower to the negotiating table. Far from ending OTS prospects, a legal notice represents an exceptional window to execute a compromise settlement:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Serve a Point-by-Point Legal Reply:</strong> Never ignore a statutory legal notice. Have an experienced debt defense lawyer issue a comprehensive legal reply within the 15-day statutory window, stating your bona fide hardship and expressly offering to settle the dispute via OTS.</li>
              <li><strong>Compoundability of Section 138 &amp; Section 25:</strong> Under Section 147 of the Negotiable Instruments Act and established Supreme Court precedents (<em>M/s Meters and Instruments Pvt. Ltd. v. Kanchan Mehta</em>), cheque bounce offenses are compoundable. Once an OTS is reached, the bank is legally obligated to withdraw the criminal complaint.</li>
              <li><strong>Halting Litigation Costs:</strong> Filing court cases costs banks substantial retainer fees for external advocates. Proposing a settlement immediately after the notice saves the bank legal overheads, making them highly receptive to discounts.</li>
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
            <p>
              If the bank has already initiated arbitration proceedings under the Arbitration and Conciliation Act, 1996, or filed a civil recovery suit in the Civil Court or Debt Recovery Tribunal (DRT), an OTS remains 100% viable at any stage prior to final decree execution.
            </p>
            <p>
              The Indian legal framework actively encourages compromise settlements during ongoing judicial proceedings:
            </p>

            <div className="space-y-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Section 89 CPC &amp; Mediation</span>
                <p className="text-xs sm:text-sm text-slate-800">Under Section 89 of the Code of Civil Procedure, 1908, courts are empowered to refer pending disputes to alternative dispute resolution (ADR) mechanisms, including mediation, conciliation, and Lok Adalat, where binding compromise decrees are passed without court fee deductions.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">Consent Arbitral Award (Section 30)</span>
                <p className="text-xs sm:text-sm text-slate-800">Under Section 30 of the Arbitration and Conciliation Act, 1996, the arbitral tribunal can record a mutually agreed settlement as a Consent Award, which holds the same legal finality as an arbitral decree while codifying the agreed haircut.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-black text-sm block mb-1">National Lok Adalat Settlement</span>
                <p className="text-xs sm:text-sm text-slate-800">Under the Legal Services Authorities Act, 1987, matters settled in Lok Adalats result in a final award against which no appeal lies in any court. The bank refunds 100% of the court fees deposited, giving them an enormous financial incentive to approve your OTS.</p>
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
            <p>
              When a loan is assigned to third-party recovery agencies, borrowers face unrelenting phone calls, workplace visits, and abusive threats. It is crucial to understand that <strong>recovery agents are paid contractors, not judicial officers</strong>. They have zero legal power to seize your home, confiscate your belongings, or effect arrests.
            </p>
            <p>
              To neutralize recovery agent harassment and transition to an OTS:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Enforce the RBI Recovery Charter:</strong> Demand the agent&apos;s identity card, bank authorization letter, and Drawee Recovery Agency certificate. Inform them that under RBI Master Directions, calls before 8:00 AM, after 7:00 PM, or contacting relatives is strictly prohibited.</li>
              <li><strong>Record Evidence of Unlawful Coercion:</strong> Save call recordings, WhatsApp threats, and security CCTV footage of home visits. This evidence can be submitted to the Banking Ombudsman or High Court under writ jurisdiction.</li>
              <li><strong>Leverage Harassment for Deeper Haircuts:</strong> Present documented evidence of recovery agent misconduct to the bank&apos;s Principal Nodal Officer (PNO). To avoid regulatory fines from the RBI, banks frequently expedite OTS approvals with substantial concessions.</li>
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
            <p>
              The definitive regulatory framework governing loan compromises in India is the Reserve Bank of India’s landmark circular: <strong>Prudential Framework for Resolution of Stressed Assets – Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) issued on June 8, 2023</strong>.
            </p>
            <p>
              This landmark framework introduced critical borrower rights:
            </p>

            <div className="p-4 sm:p-5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">Core Mandates of the RBI June 2023 Framework:</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                <li><strong>Mandatory Board-Approved Policy:</strong> Every scheduled bank and NBFC must lay down a transparent, non-discriminatory policy detailing compromise terms, haircut ceilings, and delegation of powers.</li>
                <li><strong>Universal Eligibility:</strong> All stressed retail and commercial loan accounts are eligible for consideration under compromise policies, ending arbitrary exclusions.</li>
                <li><strong>Standardized Cooling Period:</strong> Borrowers who undergo a compromise settlement face a defined cooling-off period (minimum 12 months for standard exposures) before becoming eligible for fresh credit, rather than permanent blacklisting.</li>
                <li><strong>Compromise with Willful Defaulters:</strong> Under strict board-level safeguards and without prejudice to ongoing criminal proceedings, banks are even permitted to execute compromise settlements with willful defaulters or fraud-tagged accounts to maximize public recovery.</li>
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
            <p>
              Beyond the compromise circular, several overarching RBI regulations protect defaulting borrowers during the settlement journey:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">RBI Fair Practices Code (FPC)</h4>
                <p className="text-xs sm:text-sm text-slate-800">Mandates lenders to maintain transparency in loan contracts, prohibit unauthorized charges, and provide borrowers with 30-day notices before initiating enforcement action.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Guidelines on Recovery Agents (2022)</h4>
                <p className="text-xs sm:text-sm text-slate-800">Lenders are strictly liable for the actions of recovery agents. Harassment, physical intimidation, abusive language, or public shaming triggers severe monetary penalties and regulatory sanctions against the bank.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Release of Movable/Immovable Property (Sept 2023)</h4>
                <p className="text-xs sm:text-sm text-slate-800">Banks are legally mandated to release all original property documents and remove charges registered with CERSAI within <strong>30 days</strong> of full settlement payment. Failure to do so incurs a penalty of ₹5,000 per day payable to the borrower.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm sm:text-base mb-1">Fair Penal Charges Framework (Jan 2024)</h4>
                <p className="text-xs sm:text-sm text-slate-800">Prohibits compounding of penal interest. Penal levies can only be levied as simple &quot;penal charges&quot; without any interest calculation on overdue amounts.</p>
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
            <p>
              A major concern for borrowers contemplating an OTS is its subsequent impact on their credit score across Credit Information Companies (CIBIL, Experian, Equifax, CRIF High Mark). It is essential to separate widespread myths from credit bureau reality.
            </p>
            <p>
              When an account undergoes an OTS:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>The loan status is updated from &quot;Default / DPD 90+&quot; to <strong>&quot;Settled&quot;</strong>.</li>
              <li>The negative bleed on your score halts immediately. While an active default causes your score to drop month after month, a &quot;Settled&quot; status marks the definitive end of arrears.</li>
              <li>Your credit score will experience a temporary downward correction of approximately 50 to 100 points initially, but it provides a clean platform to initiate credit rehabilitation.</li>
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
            <p>
              In your credit report, the loan line will display key metadata:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li><strong>Current Balance:</strong> ₹0 (reflecting that no further debt is legally recoverable).</li>
              <li><strong>Amount Overdue:</strong> ₹0.</li>
              <li><strong>Account Status:</strong> &quot;Settled&quot; or &quot;Post-Write-off Settled&quot;.</li>
              <li><strong>Written Off Amount:</strong> The principal haircut and waived charges conceded by the bank.</li>
            </ul>
            <p>
              Future automated loan underwriting algorithms will identify this &quot;Settled&quot; remark and may automatically reject unsecured personal loan or credit card applications for 12 to 24 months. However, an OTS does not disqualify you from credit permanently.
            </p>
          </div>
        </section>

        {/* SECTION 43 */}
        <section id="settled-vs-closed-loan-account" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 43</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            43. “Settled” vs “Closed” Loan Account
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Understanding the precise technical and legal distinction between a &quot;Closed&quot; account and a &quot;Settled&quot; account is critical for every borrower:
            </p>

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
                    <td className="p-3 font-semibold border border-slate-200">Repayment Math</td>
                    <td className="p-3 border border-slate-200">100% of principal and contractual interest paid without any waiver.</td>
                    <td className="p-3 border border-slate-200">Discounted lump-sum paid; bank conceded a financial haircut.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Credit Score Impact</td>
                    <td className="p-3 border border-slate-200">Highly positive; boosts credit score past 750+.</td>
                    <td className="p-3 border border-slate-200">Neutral to moderate drag; indicates past inability to service full debt.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-slate-200">Subsequent Conversion</td>
                    <td className="p-3 border border-slate-200">Already at highest standard rating.</td>
                    <td className="p-3 border border-slate-200">Can be converted to &quot;Closed&quot; later by paying the waived haircut amount.</td>
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
            <p>
              Rebuilding a prime credit score (750+) after executing an OTS is entirely feasible within 12 to 24 months by following a disciplined credit rehabilitation protocol:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Secure a Fixed Deposit (FD) Backed Credit Card:</strong> Apply for a secured credit card (issued against a ₹25,000 to ₹50,000 fixed deposit by banks like IDFC First WOW, Kotak 811 DreamDifferent, or SBI Unnati). Secured cards require zero credit check.</li>
              <li><strong>Maintain Strict 20% Utilization:</strong> Spend no more than 15% to 20% of your secured card limit monthly on routine expenses (groceries, fuel).</li>
              <li><strong>Clear 100% of Total Amount Due:</strong> Never pay only the minimum amount due; set up auto-pay for the full bill amount 5 days before the due date.</li>
              <li><strong>Avoid Multiple Credit Enquiries:</strong> Do not apply for unsecured personal loans or retail credit cards during the 12-month cooling period, as hard enquiries degrade recovering scores.</li>
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
            <p>
              Defaulting on a bank loan triggers civil liability, but understanding your exact statutory risks prevents irrational fear:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>No Automatic Criminal Arrest:</strong> Defaulting on an unsecured personal loan or credit card is purely a civil default. Police cannot register an FIR or arrest you for inability to pay debt.</li>
              <li><strong>Statutory Quasi-Criminal Remedies:</strong> Banks can only invoke criminal courts if: (a) a physical repayment cheque bounced (Section 138 NI Act), or (b) an electronic NACH/e-Mandate was returned dishonoured (Section 25 PSSA). Both offenses are bailable and compoundable upon settlement.</li>
              <li><strong>Secured Loans (SARFAESI Act):</strong> For housing or mortgage loans, default empowers the secured creditor to issue Section 13(2) demand notices and Section 13(4) possession notices to auction the mortgaged property without court intervention.</li>
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
            <p>
              When the bank credit committee sanctions your OTS proposal, the process shifts into formal administrative closing. The bank communicates the approval via an official <strong>OTS Sanction Letter</strong>.
            </p>
            <p>
              Once sanctioned:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>All collection agency outreach, phone calls, and visits must freeze immediately.</li>
              <li>Any ongoing civil suits, DRT proceedings, or Section 138 cases are placed in abeyance pending final payment realization.</li>
              <li>The borrower is given a fixed statutory window (typically 15 to 30 days) to deposit the agreed settlement funds directly into their designated loan account.</li>
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
            <p>
              Fraudulent settlement letters issued by rogue recovery agents are a pervasive menace. Never deposit money until you have verified the following six authentication checkpoints:
            </p>

            <div className="p-4 sm:p-5 bg-amber-50/80 border-l-4 border-amber-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">OTS Letter Verification Checklist</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                <li><strong>Official Bank Stationery:</strong> Must be on authentic bank letterhead displaying the bank&apos;s corporate logo, CIN, and Zonal/Branch office address.</li>
                <li><strong>Unique Dispatch / Reference Number:</strong> Every valid sanction letter carries a CBS reference number trackable in the bank&apos;s internal intranet.</li>
                <li><strong>Designation of Signatory:</strong> Must be signed by an authorized officer (Chief Manager, AGM, or Vice President) with official employee code stamp.</li>
                <li><strong>Explicit Account Number &amp; Full Discharge Covenant:</strong> Must clearly state that upon payment of ₹[X], the loan account is fully and finally closed with no residual claim.</li>
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
            <p>
              Making the payment incorrectly can lead to total forfeiture of your funds without closing the loan:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>NEVER Pay in Cash to Recovery Agents:</strong> Never hand over physical currency to anyone claiming to be a bank representative.</li>
              <li><strong>NEVER Transfer to Personal or Agency UPI/Accounts:</strong> Payments must only be credited directly to your own loan account number or via Demand Draft drawn strictly in favor of <em>&quot;[Name of Bank] - Loan Account No. XXXXXXXX&quot;</em>.</li>
              <li><strong>Safe Payment Modes:</strong> Use RTGS, NEFT, or a bank counter cash/cheque deposit slip bearing an official bank teller stamp and transaction UTR number.</li>
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
            <p>
              Once your settlement funds have cleared, immediately collect the following critical post-settlement documentation from the bank:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li><strong>Payment Deposit Receipt &amp; Updated Statement of Account:</strong> Showing the credit of the settlement funds and a nil outstanding balance.</li>
              <li><strong>Unconditional No-Dues Certificate (NDC):</strong> Formally releasing you from all liabilities.</li>
              <li><strong>Return of Unused Cheques:</strong> Retrieval of all security cheques handed over at the time of loan disbursal.</li>
              <li><strong>Cancellation of NACH / e-Mandate:</strong> Written confirmation that all auto-debit mandates have been deregistered.</li>
              <li><strong>Court Withdrawal Joint Memo:</strong> Copy of the formal application filed by the bank in court withdrawing pending Section 138, Section 25, or civil recovery proceedings.</li>
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
            <p>
              The <strong>No-Dues Certificate (NDC)</strong> or <strong>Full and Final Settlement Certificate</strong> is your ultimate shield against future claims. Preserve both physical and scanned digital copies of this document permanently.
            </p>
            <p>
              If the bank sells remaining write-off portfolios to Asset Reconstruction Companies (ARCs) years later by administrative error, your NDC is the conclusive legal proof that quashes any subsequent collection attempts under Section 8 of the Limitation Act and the Indian Contract Act.
            </p>
          </div>
        </section>

        {/* SECTION 51 */}
        <section id="ensure-bank-updates-credit-report" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 51</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            51. How to Ensure the Bank Updates Your Credit Report
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Under RBI regulations, banks must transmit updated account data to all four credit bureaus (CIBIL, Experian, Equifax, CRIF) within <strong>30 to 45 days</strong> of account resolution.
            </p>
            <p>
              To ensure compliance:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium">
              <li>Pull your credit report 45 days after making the OTS payment.</li>
              <li>Verify that the status reads &quot;Settled&quot; and the outstanding balance displays ₹0.</li>
              <li>If the bank fails to update the status and continues reporting active overdue amounts, raise a formal CIBIL Dispute attaching your NDC and OTS Sanction Letter. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), the credit bureau is required to resolve disputes within 30 days.</li>
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
            <p>
              If you secure an OTS sanction but experience an unexpected liquidity crisis that prevents you from remitting the agreed amount by the deadline:
            </p>
            <div className="space-y-2.5 my-4">
              <div className="p-3 bg-red-50/80 border-l-4 border-red-600 rounded-r-lg">
                <p className="font-bold text-red-950 text-xs sm:text-sm">Consequence of Uncommunicated Default</p>
                <p className="text-slate-700 text-xs mt-1">The OTS sanction expires automatically. The bank revokes all concessions, forfeits any partial tranche payments against overdue interest, and reinstates the entire original gross liability.</p>
              </div>
              <div className="p-3 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-lg">
                <p className="font-bold text-emerald-950 text-xs sm:text-sm">Proactive Remedy: Formal Extension Application</p>
                <p className="text-slate-700 text-xs mt-1">Submit a formal extension application at least 7 days <em>before</em> the deadline. Cite unforeseen delays in liquidating family assets and request a 15 to 30-day extension with simple interest. Credit committees routinely grant reasonable extensions to salvage an imminent recovery.</p>
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
            <p>
              Understanding why bank credit committees turn down settlement proposals allows you to preemptively insulate your application against rejection:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Lack of Documentary Hardship Proof:</strong> Submitting a settlement request that relies solely on emotional pleas without income tax returns, termination notices, or hospital records leads to immediate rejection by statutory auditors.</li>
              <li><strong>Active High-Value Bank Accounts:</strong> If the bank discovers active transactions, salary credits, or mutual fund investments linked to your PAN in another bank account, your insolvency defense collapses.</li>
              <li><strong>Unrealistic or Insulting Starting Offers:</strong> Bidding 5% or 10% of the loan principal without proving total medical disability signals non-serious intent.</li>
              <li><strong>Presence of High-Net-Worth Co-Borrowers:</strong> If a co-applicant or guarantor holds stable employment or unencumbered real estate, the bank will refuse haircuts and initiate recovery against the solvent guarantor.</li>
              <li><strong>Premature Application (Account Still Standard):</strong> Requesting an OTS when the loan is only 30 or 60 days overdue, before it has been formally tagged as an NPA.</li>
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
            <p>
              Avoid these costly missteps that compromise borrower rights across India:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 1: Depositing Money on Verbal Assurance</h4>
                <p className="text-xs text-slate-800">Never deposit a single rupee because a recovery agent told you &quot;just pay ₹50,000 and the loan will be closed.&quot; The bank will simply adjust that money against overdue interest and continue demanding the full principal balance.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 2: Missing Payment Deadlines</h4>
                <p className="text-xs text-slate-800">Failing to pay the sanctioned settlement amount by the exact due date invalidates the agreement and forfeits all negotiated discounts.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 3: Ignoring Court Summons</h4>
                <p className="text-xs text-slate-800">Failing to appear in court after receiving Section 138 NI Act or Section 25 PSSA summons leads to bailable or non-bailable warrants, severely weakening your negotiation leverage.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-black text-sm mb-1 text-red-600">Mistake 4: Not Collecting the NDC</h4>
                <p className="text-xs text-slate-800">Assuming payment alone ends the relationship without obtaining a physical No-Dues Certificate leaves the door open for future collection disputes.</p>
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
            <p>
              Distressed debtors are prime targets for predatory settlement syndicates and rogue recovery agents. Be vigilant against these widespread fraudulent schemes:
            </p>
            <div className="p-4 sm:p-5 bg-red-50/80 border-l-4 border-red-600 rounded-r-xl my-4 space-y-2">
              <h4 className="font-bold text-black text-sm sm:text-base">Major Settlement Fraud Patterns:</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                <li><strong>The Fake PDF Sanction Letter:</strong> Fraudulent recovery agents forge bank letterheads and issue counterfeit OTS letters over WhatsApp, asking borrowers to transfer money via UPI to an agency account.</li>
                <li><strong>The &quot;Guaranteed CIBIL Erasure&quot; Scam:</strong> Unscrupulous operators promise to &quot;completely delete default records from CIBIL within 7 days&quot; for an advance fee. Credit bureaus operate under strict algorithmic statutory controls under CICRA 2005; nobody can manually delete legitimate default history.</li>
                <li><strong>The Cash Collection Ruse:</strong> Field agents visiting your residence and offering a handwritten receipt in exchange for physical cash. Banks never accept settlement funds in cash via field agents.</li>
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
            <p>
              Yes. Engaging an experienced debt defense and banking litigation lawyer fundamentally shifts the balance of power during OTS negotiations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Equalizes Legal Knowledge:</strong> Banks employ corporate law firms and seasoned recovery managers. An individual borrower without legal representation is easily overwhelmed by technical jargon and hollow litigation threats.</li>
              <li><strong>Halts Recovery Harassment:</strong> Under Indian jurisprudence, once a borrower is formally represented by legal counsel, all communication must flow through the designated advocate. Unlawful agent harassment ceases immediately.</li>
              <li><strong>Drafts Compelling Statutory Replies:</strong> A lawyer crafts replies to Section 138, Section 25, and SARFAESI notices that establish valid legal defenses, forcing the bank&apos;s legal department to recommend an amicable OTS.</li>
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
            <p>
              Enlisting specialized institutional debt resolution assistance from CredSettle delivers distinct operational and financial advantages:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">Substantially Deeper Haircuts</span>
                <p className="text-xs text-slate-800">Institutional negotiators know the exact board-approved discount limits of each bank, securing 40% to 60% principal waivers compared to 15% to 20% for unassisted borrowers.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">Airtight Sanction Letter Verification</span>
                <p className="text-xs text-slate-800">Every sanction letter is audited by legal professionals to ensure complete legal discharge covenants, zero residual liability, and court case withdrawal clauses.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-black text-sm block mb-1 text-blue-700">Total Harassment Shield</span>
                <p className="text-xs text-slate-800">CredSettle issues formal statutory representations to the bank&apos;s Nodal Officers, redirecting all recovery communications to our legal team.</p>
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
            <p>
              Find authoritative answers to the most common questions regarding loan settlements under Indian banking regulations:
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

        {/* SECTION 59 */}
        <section id="ots-complete-step-by-step-guide" className="scroll-section scroll-mt-28">
          <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">SECTION 59</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
            59. One-Time Settlement – Complete Step-by-Step Guide
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Here is your complete procedural summary to successfully execute an OTS from default to full debt freedom:
            </p>

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
            60. Conclusion – How to Successfully Negotiate an OTS With Your Bank
          </h2>
          <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
            <p>
              Securing a One-Time Settlement with your bank is neither an admission of moral failure nor an insurmountable financial barrier. It is a legitimate, legally sanctioned commercial resolution pathway explicitly endorsed by the Reserve Bank of India to restore economic productivity to distressed borrowers.
            </p>
            <p>
              By shifting the conversation from emotional distress to financial economics, presenting an airtight hardship dossier, anchoring negotiations strictly to the unpaid principal, and insisting on verified legal documentation, you can extinguish unpayable debt, halt coercive recovery practices, and reclaim total peace of mind for you and your family.
            </p>

            {/* GOLDEN CONCLUSION CALLOUT BOX */}
            <div className="mt-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white p-6 sm:p-10 shadow-xl">
              <span className="text-xs font-black tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full text-blue-200 inline-block mb-3 border border-white/10">
                OFFICIAL DEBT RESOLUTION DESK
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 tracking-tight">
                Ready to Settle Your Bank Debt with 40% to 60% Haircut?
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
                Connect with CredSettle&apos;s senior banking and debt settlement legal advocates today. We handle bank credit committee negotiations, neutralize recovery agent harassment, audit sanction letters, and secure your unconditional No-Dues Certificate.
              </p>
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
              <h4 className="font-black text-sm mb-2 leading-snug">
                Need Bank OTS Negotiation?
              </h4>
              <p className="text-[11px] text-blue-100/90 mb-3 leading-relaxed">
                Stop agent harassment and secure maximum haircuts with institutional legal defense.
              </p>
              <ul className="text-[10px] space-y-1.5 text-blue-200 mb-4 font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>40%–60% Principal Haircut</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>100% Penal Fee Waiver</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>RBI June 2023 Norms</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Verified No-Dues Certificate</span>
                </li>
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
              <h5 className="text-[11px] font-bold text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>CredSettle Legal Shield</span>
              </h5>
              <p className="text-[10px] text-slate-700 leading-relaxed mb-2.5">
                All negotiations are conducted under the supervision of enrolled Advocates in strict compliance with the Advocates Act, 1961 and RBI Master Directions.
              </p>
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
