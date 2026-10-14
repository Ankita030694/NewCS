'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';

export default function PersonalLoanSettlementPageClient() {
  const [activeId, setActiveId] = useState<string>('what-is-personal-loan-settlement');
  const [isMobile, setIsMobile] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [tocSearch, setTocSearch] = useState('');
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isFirefox, setIsFirefox] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Calculator State
  const [totalOutstanding, setTotalOutstanding] = useState<number>(600000);
  const [principalOutstanding, setPrincipalOutstanding] = useState<number>(420000);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(50000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(35000);
  const [defaultMonths, setDefaultMonths] = useState<number>(8);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Floating Navigation on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingNav(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile TOC drawer is open
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

  // Intersection Observer for Active Section
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

    const headings = document.querySelectorAll('section[id], div[id].scroll-section');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  // Master 18-Chapter Navigation
  const navModules = [
    {
      moduleTitle: 'Module 1: Fundamentals, Procedure & Timing',
      links: [
        { id: 'what-is-personal-loan-settlement', label: '1. What is Personal Loan Settlement?' },
        { id: 'how-to-do-personal-loan-settlement', label: '2. How to Do Personal Loan Settlement?' },
        { id: 'personal-loan-settlement-process', label: '3. How Personal Loan Settlement Process Works' },
        { id: 'why-opt-for-settlement', label: '4. Why Opt for Personal Loan Settlement?' },
        { id: 'when-to-settle-personal-loan', label: '5. When Should You Take Settlement?' },
      ]
    },
    {
      moduleTitle: 'Module 2: Legal Consequences, Harassment & Waivers',
      links: [
        { id: 'legal-consequences', label: '6. Legal Consequences of Personal Loan Settlement' },
        { id: 'recovery-agents-practices', label: '7. What Do Recovery Agents Do to Recover Loans?' },
        { id: 'personal-loan-settlement-waiver', label: '8. What Is the Waiver for Personal Loan Settlement?' },
        { id: 'settlement-timeline', label: '9. How Long Does Personal Loan Settlement Take?' },
        { id: 'errors-to-avoid', label: '10. Errors to Avoid When Settling a Loan' },
      ]
    },
    {
      moduleTitle: 'Module 3: CIBIL Score, Alternatives & Legal Shield',
      links: [
        { id: 'cibil-score-impact', label: '11. Impact of Settlement on CIBIL Score' },
        { id: 'settlement-vs-other-debt-solutions', label: '12. Personal Loan Settlement vs Other Debt Solutions' },
        { id: 'legal-assistance-settlement', label: '13. Legal Assistance for Personal Loan Settlement Matters' },
        { id: 'credsettle-settlement-services', label: '14. Settlement Services With Legal Protection' },
      ]
    },
    {
      moduleTitle: 'Module 4: RBI Guidelines, Documents & FAQs',
      links: [
        { id: 'rbi-guidelines-personal-loan', label: '15. RBI Guidelines for Personal Loan Settlement' },
        { id: 'documents-required-settlement', label: '16. Documents Required for Personal Loan Settlement' },
        { id: 'after-personal-loan-settlement', label: '17. What Happens After Personal Loan Settlement?' },
        { id: 'personal-loan-settlement-faqs', label: '18. Frequently Asked Questions' },
      ]
    }
  ];

  const allNavLinks = useMemo(() => navModules.flatMap((m) => m.links), [navModules]);

  const currentChapter = useMemo(() => {
    return allNavLinks.find(link => link.id === activeId) || allNavLinks[0];
  }, [allNavLinks, activeId]);

  const filteredNavLinks = useMemo(() => {
    let list = allNavLinks;
    if (selectedModule !== null) {
      list = navModules[selectedModule]?.links || allNavLinks;
    }
    if (!tocSearch.trim()) return list;
    const q = tocSearch.toLowerCase().trim();
    return list.filter((l) => l.label.toLowerCase().includes(q));
  }, [allNavLinks, navModules, selectedModule, tocSearch]);

  // Calculator Estimates Calculation
  const calculationResult = useMemo(() => {
    const total = Math.max(0, Number(totalOutstanding) || 0);
    const principal = Math.max(0, Math.min(total, Number(principalOutstanding) || 0));
    const charges = Math.max(0, total - principal);
    const income = Math.max(0, Number(monthlyIncome) || 0);
    const expenses = Math.max(0, Number(monthlyExpenses) || 0);
    const months = Math.max(1, Number(defaultMonths) || 1);

    // Waiver on charges is typically 90% - 100%
    const chargesWaiver = charges * 0.95;

    // Principal haircut factor depends on default age (months past due)
    let principalHaircutRate = 0.35;
    if (months >= 12) {
      principalHaircutRate = 0.55;
    } else if (months >= 6) {
      principalHaircutRate = 0.45;
    } else if (months >= 3) {
      principalHaircutRate = 0.38;
    }

    const principalWaiver = principal * principalHaircutRate;
    const totalEstimatedWaiver = chargesWaiver + principalWaiver;

    // Settlement payable amount
    const estLow = Math.max(principal * 0.35, total - totalEstimatedWaiver * 1.1);
    const estHigh = Math.max(principal * 0.45, total - totalEstimatedWaiver * 0.9);

    const disposable = Math.max(0, income - expenses);

    return {
      total,
      principal,
      charges,
      chargesWaiver,
      principalWaiver,
      estLow: Math.round(estLow / 1000) * 1000,
      estHigh: Math.round(estHigh / 1000) * 1000,
      disposable,
      estimatedSavingsLow: Math.max(0, total - estHigh),
      estimatedSavingsHigh: Math.max(0, total - estLow),
    };
  }, [totalOutstanding, principalOutstanding, monthlyIncome, monthlyExpenses, defaultMonths]);

  // Comprehensive 18 Detailed FAQs
  const faqs = [
    {
      question: 'What is personal loan settlement and how does it legally work in India?',
      answer: 'private loans settlement. structured in retail banking practice as a One-Time Settlement (OTS). Is a recognized bipartite legal pacts between a client experiencing genuine. Verifiable money stress and a lending bank or NBFC. Under this binding settlement. The creditor agrees to accept a mutually settled settlement payment (typically 35% to 60% of total claimed ledger balance) as complete and permanent discharge of the debt debt. Following account crediting of the sanctioned settlement payment. The bank terminates the credit file. Quashes claims measures. And releases an formal closure deed.'
    },
    {
      question: 'Is personal loan settlement officially recognized and legal under RBI circulars?',
      answer: 'Yes, 100% legal. The country\'s apex central banking authority, the RBI, codified this under the \'Framework for Compromise Settlements and Technical Write-offs\' (Circular DOR.STR.REC.20/21.04.048/2023-24 dated June 8, 2023). Under these directives, every scheduled commercial bank, cooperative bank, and NBFC is legally mandated to maintain a board-approved policy governing compromise settlements with non-wilful, stressed retail borrowers.'
    },
    {
      question: 'How much haircut or waiver can I realistically expect on my personal loan?',
      answer: 'In private loans one-time settlements. Lenders routinely waive 100% of built up penal interest. Late payment fees. And cheque/e-NACH bounce charges. On the core unamortized base loan. Settled haircuts typically range from 30% to 60%. Depending on the default vintage (e.g. 90 days vs 18 months). Severity of verified hardship. Whether the account has been classified as a doubtful/loss asset. And the quality of lawyer-led legal help.'
    },
    {
      question: 'Is a 50% waiver on an unsecured personal loan achievable?',
      answer: 'Yes. get a 45% to 55% reduction on total dues is very common for no-pledge private loans that have crossed 90 to 180 days of default (NPA stage). Because private loans lack security. The bank recognizes that recovering 50% in cash today is commercially superior to spending years in civil courts with zero claims guarantee.'
    },
    {
      question: 'Does the RBI mandate or guarantee a specific waiver percentage?',
      answer: 'No. The RBI mandates that all lenders have structured settlement rules and clear delegation of money powers. But it leaves the exact waiver haircut to the trade judgment and board-approved settlement policy of each respective bank or NBFC based on the client\'s verifiable net worth and liquidation value.'
    },
    {
      question: 'When is the strategically optimal time to initiate a personal loan settlement?',
      answer: 'The optimal window is typically between 90 days and 180 days past due (when the account transitions from SMA-2 into a Sub-Standard NPA). Or during quarterly National Lok Adalat cycles organized by NALSA. At this juncture. The bank has already absorbed strict 15% cash provisioning hits on its balance sheet. Making its Stressed Asset handling Branch highly receptive to offers.'
    },
    {
      question: 'Can I settle a personal loan before it becomes an NPA (within 90 days of default)?',
      answer: 'Banks rarely agree to settlement main loan haircuts while the loan is in regular standard status (SMA-0 or SMA-1). Prior to NPA classification. Lenders prefer tenure extensions. EMI restructuring. Or moratoriums. large OTS waivers typically unlock only after the account reaches NPA classification under RBI prudential norms.'
    },
    {
      question: 'How should I respond if served with a Section 138 or Section 25 court notice?',
      answer: 'Never ignore a legal legal demand notice. Under Section 138 of Negotiable Instruments Act or Section 25 of Payment and Settlement Systems Act. You have a legal window of 15 days from receipt to respond. CredSettle lawyer file a robust legal reply highlighting genuine economic hardship and proposing a one-time settlement. Once settled. These offenses are fully compoundable under Section 147 of the NI Act and Section 320 of the CrPC. This resulting in complete withdrawal of court actions.'
    },
    {
      question: 'Can I be arrested, jailed, or face police detention for defaulting on a personal loan?',
      answer: 'No criminal debt risk attaches to loan defaults caused by economic hardship. In its authoritative verdict in Jolly George Varghese (1980). The Supreme Court ruled that an honest client lacking present means to clear civil dues cannot be detained under Article 21 rights. The Supreme Court of India held that simple poverty or inability to pay a civil debt cannot lead to imprisonment under Article 21 of the Constitution. Police have no police area or legal power to arrest or summon clients for no-pledge loan defaults.'
    },
    {
      question: 'Do collection representatives have the right to visit my residence or workplace?',
      answer: 'Under the RBI Master Circular on claims agents (August 12. 2022). Claims agents are strictly prohibited from calling before 8:00 AM or after 7:00 PM. Visiting without prior appointment and formal bank identity cards. Contacting relatives. Neighbors. Or employers. Or using abusive language. Any such abuse violates RBI directives and Indian Penal Code provisions. Entitling you to file fast police complaints and ombudsman petitions.'
    },
    {
      question: 'How does personal loan settlement impact my CIBIL score and bureau report?',
      answer: 'The bank relays updated payment records to the four licensed credit information bureaus (CIBIL. Experian. Equifax. And CRIF) marking the loan as \'Settled\' (or \'Post-Write-Off Settled\') instead of \'Closed\'. This triggers a score drop of 75 to 120 points. However, settlement stops the continuous compounding of negative Days Past Due (DPD 90+, 180+) and clears the overdue amount to zero, enabling credit recovery to 750+ within 12 to 24 months.'
    },
    {
      question: 'Can the \'Settled\' remark on my credit report be updated to \'Closed\' in the future?',
      answer: 'Yes. If your money situation improves at a later stage. You have the legal right to approach the settling bank. Pay the previously waived haircut differential amount. And request an updated No Dues letter that reclassifies the bureau status to \'Closed\'.'
    },
    {
      question: 'How long does the entire personal loan settlement lifecycle take?',
      answer: 'A structured private loans settlement typically takes 3 to 8 weeks. This spans initial hardship portfolio audit (Days 1. 7). Formal petition submission and talks (Days 8. 21). Settlement boards sanction letter issuance (Days 22. 35). Payment execution. And receipt of the stamped No Dues letter (Days 36. 50).'
    },
    {
      question: 'Can I settle multiple personal loans and fintech instant credit apps simultaneously?',
      answer: 'Yes. Many distressed clients service 3 to 6 simultaneous credit facilities across multiple banks and NBFC digital loan apps. CredSettle designs unified multi-creditor talks plans to prioritize aggressive lenders while settling accounts sequentially within your available liquidity.'
    },
    {
      question: 'What is the mandatory RBI cooling-off period before I can apply for new loans?',
      answer: 'Under the RBI one-time settlement rules circular of June 8. 2023. Regulated entities are required to observe a strict cooling-off period of at least 12 months before sanctioning fresh credit facilities to clients who have executed a one-time settlement.'
    },
    {
      question: 'What documents are legally mandatory to substantiate financial hardship for an OTS?',
      answer: 'To satisfy bank audit and RBI compliance. You must provide KYC records (PAN. Aadhaar), complete loan account records. Last 6 to 12 months bank records of all active accounts. Form 16 / ITR. And verifiable hardship proof such as formal end/layoff letters. Hospital discharge summaries, medical diagnosis reports. Or trade closure GST cancellation letters.'
    },
    {
      question: 'What is the difference between a provisional settlement receipt and a No Dues Certificate (NDC)?',
      answer: 'A payment receipt or UTR slip only proves that money was transferred. It does NOT legally clear debt. An formal No Dues letter (NDC) or release deed is an authenticated legal instrument issued under bank seal confirming that the loan facility is permanently closed with zero unpaid dues and that the bank waives all future claims claims.'
    },
    {
      question: 'Why is engaging legal counsel or an advocate-led settlement firm superior to negotiating alone?',
      answer: 'Unrepresented clients settling with aggressive claims departments are often pressured into unaffordable partial payments with verbal promises that the bank later rejects. Senior lawyer serve formal legal legal help notices under the lawyer Act 1961 (stopping agent abuse promptly). Settle straight with Zonal Credit boards. Vet sanction letters for restrictive clauses. And guarantee receipt of legally binding closure papers.'
    }
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileTocOpen(false);
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
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
            RBI Compromise Framework &amp; Legal Defense 2026
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight leading-snug break-words">
            Personal Loan Settlement in India
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200"> The Complete Legal &amp. money Master Guide </p>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1"> Understand the RBI one-time settlement policy for no-pledge private loans. Stop claims agent abuse. Defend legal notices under Order 37 &amp. Sec 25. Calculate realistic OTS ranges. And protect your dignity. </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md active:scale-98 text-center"
            >
              Get Free Legal Case Review
            </Link>
            <a
              href="#settlement-calculator"
              className="px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm text-white bg-blue-600/40 hover:bg-blue-600/60 border border-blue-400/40 transition-all backdrop-blur-sm active:scale-98 text-center"
            >
              Calculate Settlement Estimate
            </a>
          </div>
          <div className="mt-3.5 sm:mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-blue-200/80">
            <span>✓ RBI Circular Compliant</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Anti-Harassment Shield</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ 100% Confidential</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'Personal Loan Settlement', url: '/services/personal-loan-settlement' }
            ]}
          />
        </div>
      </div>

      {/* Trust & E-E-A-T Signal Banner Matching loan-settlement */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-3 sm:px-4 border-b border-slate-800 text-[11px] sm:text-xs md:text-sm">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-600 text-white font-semibold px-2 py-0.5 rounded text-[10px] sm:text-xs">LEGAL ADVISORY</span>
            <span className="leading-tight">Reviewed by Senior Banking Law Advocates &amp; Debt Specialists</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400 text-[10px] sm:text-xs">
            <span>Last Updated: October 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>RBI Circular DOR.STR.REC.20/21.04.048/2023-24</span>
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
              href="#settlement-calculator"
              className="flex-shrink-0 bg-slate-900 hover:bg-slate-800 text-white px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center gap-1 shadow-xs"
            >
              <span>🧮</span>
              <span className="hidden sm:inline">Calc</span>
            </a>
          </div>

          {/* Swipeable Module Filter Pills on Mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 pb-0.5 text-[10px]">
            <button
              onClick={() => setSelectedModule(null)}
              className={`px-2.5 py-0.5 rounded-full whitespace-nowrap font-medium transition-colors ${selectedModule === null
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
            >
              All 18
            </button>
            {navModules.map((m, mIdx) => (
              <button
                key={mIdx}
                onClick={() => setSelectedModule(selectedModule === mIdx ? null : mIdx)}
                className={`px-2 py-0.5 rounded-full whitespace-nowrap font-medium transition-colors ${selectedModule === mIdx
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
              >
                M{mIdx + 1}
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
                    <p className="text-[10px] text-slate-300">18 Master Chapters • private loans Settlement</p>
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
                    className="w-full text-xs px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        <div className="space-y-1">
                          {filteredInModule.map((link) => {
                            const isActive = activeId === link.id;
                            return (
                              <button
                                key={link.id}
                                onClick={() => handleLinkClick(link.id)}
                                className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition-colors flex items-center justify-between ${isActive
                                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                                    : 'text-black hover:bg-gray-50 active:bg-gray-100'
                                  }`}
                              >
                                <span className="leading-snug pr-2">{link.label}</span>
                                {isActive && <span className="text-blue-600 font-bold text-sm">✓</span>}
                              </button>
                            );
                          })}
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
                    Consult Advocate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 items-start">

          {/* Left Column: Categorized Table of Contents (15% Desktop Sticky) */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-20 max-h-[calc(100vh-5.5rem)] flex flex-col space-y-2.5">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <div className="font-bold text-black text-xs">Table of Contents</div>
                  <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">18</span>
                </div>

                <div className="space-y-2.5">
                  {navModules.map((module, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-black px-1 py-0.5"> {module.moduleTitle.replace('Module ', 'M')} </p>
                      <nav className="space-y-0.5">
                        {module.links.map((link) => {
                          const isActive = activeId === link.id;
                          return (
                            <a
                              key={link.id}
                              href={`#${link.id}`}
                              className={`block text-[11px] transition-all duration-150 px-2 py-1 rounded-md leading-tight ${isActive
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
                  ))}
                </div>
              </div>

              {/* Quick Legal Help Banner in Sidebar - Always 100% visible, never cut in half */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-2.5 sm:p-3 rounded-xl text-white shadow-sm text-center flex-shrink-0">
                <div className="flex items-center justify-center gap-1.5 mb-1 text-blue-300 text-xs">
                  <span>⚖️</span>
                  <div className="font-bold text-xs text-white">Salary &amp; EMI Shield</div>
                </div>
                <p className="text-[10px] text-blue-200 mb-2 leading-snug"> Defense against employer HR calls. Salary account liens, and agent visits. </p>
                <Link
                  href="/contact"
                  className="block text-center bg-blue-500 hover:bg-blue-400 text-white font-bold text-[11px] py-1.5 px-2 rounded-lg transition-colors shadow"
                >
                  Consult Advocate
                </Link>
              </div>
          </aside>

          {/* Middle Column: Master 18-Section Editorial Guide (70% Width) */}
          <div className="lg:w-[70%] flex-1 min-w-0">
            <article className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-sm border border-gray-200/90 space-y-8 sm:space-y-12 overflow-hidden text-black">

              {/* ------------------------------------------------------------- */}
              {/* 1. What is Personal Loan Settlement?                          */}
              {/* ------------------------------------------------------------- */}
              <section id="what-is-personal-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 1
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  1. What is Personal Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> <strong>private loans settlement</strong>. recognized under retail banking regulations as an authorized bipartite settlement accord. enables an overburdened client to reach a permanent legal closure with the lending institution.</p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Easy Meaning of Personal Loan Settlement</h3>
                  <p> In simple everyday terms. A private loans in India is an <em>no-pledge credit facility</em>. There is no underlying security. Such as a residential apartment. Trade shop. Physical gold. Or motor vehicle. That the bank can seize. Seal. Or auction under the SARFAESI Act. 2002. The loan is disbursed purely against the client&apos. s past credit history and prospective earning capacity. </p>
                  <p> When an people experiences an acute. Unforeseen money catastrophe. Such as trade retrenchment. Involuntary salary reduction. Catastrophic medical hospitalization of a family member. Sudden trade trade bankruptcy. Or demise of the sole earning member. servicing contractual monthly EMIs becomes mathematically impossible. </p>
                  <p> Once EMIs stop. Lenders start automated penalty methods. Compounding late payment charges. Penal interest (routinely 24% to 36% APR). And recurring NACH/cheque bounce fees cause the nominal ledger claim to mushroom far beyond the initial main loan borrowed. Recognizing that a financially insolvent people cannot service this hyper-inflated ledger. The bank&apos. S authorized Settlement boards exercises its trade judgment under Reserve Bank of India (RBI) rules to accept a realistic lump-sum or phased settlement payment (haircut). Extinguishing the remaining main loan and 100% of built up penal charges. </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Personal Loan Settlement Explained With an Example</h3>
                  <div className="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs sm:text-sm">
                    <div className="font-bold text-black text-sm sm:text-base border-b border-slate-200 pb-2">
                      Real Case Illustration: Rajesh&apos;s ₹7,50,000 Unsecured Personal Loan Resolution
                    </div>
                    <p> <strong>Initial Borrowing:</strong> Rajesh. A mid-level IT project lead in Bengaluru. Availed a ₹7,50,000 private loans at an interest rate of 15.5% per annum for a 5-year tenure from a prominent private sector bank. Over 18 months. He serviced every EMI on schedule. Reducing his unamortized base loan to ₹5,40,000. </p>
                    <p> <strong>The money Collapse:</strong> A severe medical emergency involving emergency cardiac surgery for his dependent parent. Followed by a company-wide workforce downsizing. Left Rajesh without an income stream for 8 consecutive months. He defaulted on 8 consecutive EMIs. </p>
                    <p> <strong>Bank&apos. s Inflated Demand Notice:</strong> Core main loan (₹5,40,000) + Normal Accrued Contractual Interest (₹1,35,000) + Punitive Late Penalties &amp. Recurring NACH Dishonor Fees (₹95,000) = <strong>₹7,70,000 Total Demanded Balance</strong>. </p>
                    <p> <strong>lawyer-Led Strategic Intervention:</strong> CredSettle&apos. S senior banking lawyer assembled an irrefutable hardship dossier containing hospital surgical discharge summaries. The company retrenchment letter. And zero-balance savings records. We submitted a formal OTS petition to the bank&apos. S Stressed Asset relief Branch (SARB) and main loan Nodal Officer. Citing the RBI June 8. 2023 settlement rules. </p>
                    <p> <strong>Sanctioned Settlement Terms:</strong> Following structured multi-round talks, the bank&apos. s Settlement boards sanctioned an formal One-Time Settlement: </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-black">
                      <li>100% waiver of penal interest and bounce charges (₹95,000 extinguished).</li>
                      <li>100% waiver of regular accrued interest (₹1,35,000 extinguished).</li>
                      <li>45% trade haircut on the remaining base loan.</li>
                      <li>Final full-and-final settlement sum approved at <strong>₹2,97,000</strong>.</li>
                    </ul>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 font-semibold text-xs mt-2">
                      ✓ Final Result: Rajesh saved ₹4,73,000 (a 61.4% overall ledger reduction), remitted the sanctioned amount via RTGS directly into his loan account, and received an official stamped No Dues Certificate within 21 days, ending all collection agency communications permanently.
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Personal Loan Settlement vs Loan Closure</h3>
                  <p> clients often confuse regular loan closure with one-time settlement. While both result in account end. Their money requirements, legal papers. And credit bureau results differ fundamentally: </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Evaluation Parameter</th>
                          <th className="p-3">Regular Loan Closure (Full Repayment)</th>
                          <th className="p-3">Personal Loan Settlement (Compromise OTS)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">payment Amount</td>
                          <td className="p-3 text-emerald-700 font-medium">100% of main loan + 100% of Contracted Interest</td>
                          <td className="p-3 text-blue-700 font-medium">35% to 60% of total claimed balance (large Haircut)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">CIBIL Bureau Status</td>
                          <td className="p-3 font-semibold text-emerald-700">Reported as <strong>"CLOSED"</strong></td>
                          <td className="p-3 font-semibold text-amber-700">Marked under the RBI classification <strong>"Account Settled under OTS deal"</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Credit Score Impact</td>
                          <td className="p-3 text-emerald-700">Positive or neutral (+15 to +35 points over tenure)</td>
                          <td className="p-3 text-amber-700">fast drop of 75. 120 points. stops worsening DPD accumulation</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">client money State</td>
                          <td className="p-3">Fully solvent. Steady income. Capable of regular EMIs</td>
                          <td className="p-3">Verifiable bankruptcy. Job loss. Illness. Or acute money collapse</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">records Required</td>
                          <td className="p-3">Standard banking clearance letter or digital NOC</td>
                          <td className="p-3">Formal Board-approved OTS Sanction Letter + Stamped Full &amp. Final NDC</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Future Prime Borrowing</td>
                          <td className="p-3 text-emerald-700">Eligible promptly for prime retail loans and cards</td>
                          <td className="p-3 text-black">Subject to 12-month RBI cooling-off period. re-built via secured tradelines</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Tax &amp. Legal Finality</td>
                          <td className="p-3">Routine contract fulfillment</td>
                          <td className="p-3">Complete legal discharge. bank waives right to file civil suits or Sec 138/25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Interactive Assessment Funnel - Blended inside Middle Container Above Chapter 2 */}
              <div className="not-prose my-6 sm:my-8 p-3 sm:p-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-slate-50 rounded-2xl border border-blue-100 shadow-xs">
                <InteractiveLeadFunnel className="!bg-transparent !p-0 !py-0 !px-0" />
              </div>

              {/* ------------------------------------------------------------- */}
              {/* 2. How to Do Personal Loan Settlement?                        */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-do-personal-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 2
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  2. How to Do Personal Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> private loans settlement is not an informal telephone bargain conducted with claims firm telecallers. It is a formal bank and legal procedure governed by internal bank claims policies. The Indian Contract Act, 1872. And Reserve Bank of India rules. To settle an no-pledge private loans successfully. You must navigate this rigorous 7-stage protocol: </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Eligibility for Personal Loan Settlement</h3>
                  <p> Lending institutions routinely reject offers from solvent clients who possess liquid reserves or steady disposable cash flow. To be approved for a genuine One-Time Settlement. The following criteria must be established: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>NPA default Threshold:</strong> The loan account must have crossed <strong>90 days of steady non-payment</strong>Classifying it as a Non-Performing Asset (NPA) under RBI Prudential Norms. While in rare cases pre-NPA settlements are approved. Major main loan haircuts are almost universally restricted to NPA accounts. </li>
                    <li> <strong>Demonstrable Involuntary Hardship:</strong> The inability to pay must arise from legitimate. Unavoidable economic shocks. Such as involuntary job end. Prolonged medical treatment or hospitalization. Trade trade collapse. Divorce. Or permanent physical disability. </li>
                    <li> <strong>Absence of Liquid Surplus &amp. At-Risk Assets:</strong> The client&apos. S bank records must confirm negligible disposable cash flow after meeting essential family living expenditures (food. Housing. Medical. Education). </li>
                    <li> <strong>Non-Wilful Defaulter Classification:</strong> The client must not be classified as a &quot. Wilful Defaulter&quot. under RBI Master Circular DBR.No.CID.BC.22/20.16.003/2015-16. There must be no proof of fund diversion. Fraudulent papers at the time of loan application. Or siphoning of borrowed cash into speculative luxury investments. </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Documents Required to Initiate Settlement</h3>
                  <p> Before starting contact with the bank. You must construct an airtight hardship dossier. Banks are subject to legal audits by the RBI and legal auditors. every rupee of debt waived must be backed by documentary justification in the bank&apos. s credit file: </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 text-xs sm:text-sm">1. Verifiable Hardship Dossier</strong>
                      <ul className="text-black space-y-1 list-disc list-inside">
                        <li>formal end / layoff letter from employer.</li>
                        <li>Hospital discharge summaries. Medical diagnosis. Surgery bills.</li>
                        <li>Audited P&amp. L showing trade bankruptcy or GST cancellation notice.</li>
                        <li>Death letter of family primary breadwinner (if applicable).</li>
                      </ul>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 text-xs sm:text-sm">2. Banking &amp; Financial Evidence</strong>
                      <ul className="text-black space-y-1 list-disc list-inside">
                        <li>daily work bank transaction records covering the most recent half-year to twelve months.</li>
                        <li>Latest Form 16 / ITR filings proving drop in income.</li>
                        <li>Household income vs basic survival expense declaration.</li>
                        <li>Detailed record of unpaid multi-lender debts.</li>
                      </ul>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 text-xs sm:text-sm">3. KYC &amp; Loan Account Records</strong>
                      <ul className="text-black space-y-1 list-disc list-inside">
                        <li>Self-attested PAN Card and Aadhaar Card.</li>
                        <li>Original Loan Sanction Letter and Sanction Schedule.</li>
                        <li>complete Loan record showing payment history.</li>
                        <li>Copies of all legal notices received (Section 138. Sec 25. Recall).</li>
                      </ul>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 text-xs sm:text-sm">4. Formal Legal Representation</strong>
                      <ul className="text-black space-y-1 list-disc list-inside">
                        <li>Lawyer legal help Notice under lawyer Act. 1961.</li>
                        <li>Formal OTS offer Letter addressed to Competent formal.</li>
                        <li>Vakalatnama / Authorization letter empowering legal counsel.</li>
                        <li>Draft consent settlement terms for Lok Adalat / Court disposal.</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">How to Approach the Bank or NBFC</h3>
                  <p> A critical blunder made by defaulting clients is attempting to settle settlement terms with third-party claims agents or call-center executives. These agents work on commission quotas and have <em>zero bank formal</em> to sanction main loan waivers or issue No Dues letters. To approach the lender properly: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li> <strong>Identify the Stressed Asset Department:</strong> Escalate beyond the originating retail branch. Direct all contacts to the <strong>Stressed Asset relief Centre (SARC)</strong>, <strong>Specialized Stressed Asset handling Branch (SAMB)</strong>Or the Chief Remedial Manager at the Zonal/local Office. </li>
                    <li> <strong>Use Formal Written Channels:</strong> Submit formal representations via <strong>Registered Post with Acknowledgment Due (RPAD)</strong> and through formal bank email channels addressed to the bank&apos. s main loan Nodal Officer (PNO) and Chief Grievance Officer. </li>
                    <li> <strong>Seek Lok Adalat Referral:</strong> Explicitly request that the dispute be referred to the upcoming <strong>National Lok Adalat</strong> organized under the aegis of the National Legal Services formal (NALSA). Where one-time settlements are sanctioned with judicial finality under Section 21 of the Legal Services formal Act. 1987. </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">How to Negotiate the Settlement Amount</h3>
                  <p> bank loan talks is an iterative. Multi-stage anchoring process. Lenders typically counter initial client requests with conservative offers (waiving only 10%. 20% of charges). Successful talks relies on the following strategic principles: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>First Step: 100% Extinguishment of Penal Dues:</strong> Establish firmly that zero penal interest. Late payment penalties. Or recurring NACH dishonor charges will be entertained. In virtually all genuine OTS cases. Banks concede to 100% waiver of non-main loan charges. </li>
                    <li> <strong>Anchor on Unamortized Core main loan:</strong> Base all calculations strictly on the core unamortized base loan at the time of default. Discounting all post-default compound interest. </li>
                    <li> <strong>Initial offer (25% to 35%):</strong> Propose an opening settlement figure representing 25% to 35% of the base loan. Backed by demonstrable proof of available savings from relatives or emergency funds. </li>
                    <li> <strong>Consensus Band (40% to 55%):</strong> Through expert lawyer legal help show lack of attachable assets. Most no-pledge private loans stabilize within an agreed settlement band of <strong>40% to 55% of the unamortized base loan</strong>. </li>
                    <li> <strong>Lump-Sum vs Structured Tranches:</strong> Offering an fast single-bullet payment within 15 days yields greatly higher haircuts than requesting 3 to 6 monthly installments. </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Obtaining a Written Settlement Offer</h3>
                  <div className="p-4 bg-amber-50 border-l-4 border-amber-600 rounded-r-xl text-xs sm:text-sm text-amber-950 space-y-2">
                    <strong>Critical Legal Requirement: The 7 Pillars of a Valid Settlement Letter</strong>
                    <p> Never pay a single rupee based on verbal promises. Phone recordings. SMS messages. Or informal WhatsApp chats from claims agents. Payment without an formal sanction letter is treated by bank accounting software as routine &quot. part-payment,&quot. leaving the remaining balance open to compounding interest and ongoing legal action. </p>
                    <p>A legally binding OTS Sanction Letter must contain:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-xs">
                      <li>formal bank/NBFC letterhead featuring verified branch address and trade identity.</li>
                      <li>Unique sanction reference number and formal date of issuance.</li>
                      <li>Exact client full name and designated loan account number.</li>
                      <li>Sanctioned settlement figure matching agreed talks terms precisely.</li>
                      <li>Strict payment due dates (single bullet date or installment schedule).</li>
                      <li>Unambiguous &quot. Full and Final Discharge&quot. clause confirming no further money claims.</li>
                      <li>Formal doing by the lender to end ongoing claims actions and deliver an authenticated. Physical letter of Debt Extinguishment within thirty days of funds realization.</li>
                    </ol>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Making the Settlement Payment</h3>
                  <p> Remit the sanctioned payout sum strictly through verifiable. Traceable banking rails: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li> <strong>Approved Channels:</strong> Remit via <strong>RTGS. NEFT. Or Account Payee Demand Draft</strong> made out straight in the name of the lending bank marked with your exact loan account number. </li>
                    <li> <strong>Zero Cash Transfers:</strong> Never hand over physical cash. Bearer cheques. Or private UPI transfers to any claims agent. Lawyer. Or third-party agent. </li>
                    <li> <strong>Adhere to Expiry Deadlines:</strong> Settlement letters carry an explicit validity date (usually 15 to 30 days). Even a 24-hour delay in funds credit can automatically revoke the sanction letter. Forfeiting the haircut and reviving the full ledger claim. </li>
                    <li> <strong>Retain Permanent Proof:</strong> Preserve the bank-stamped deposit slip. Digital UTR receipt. And bank debit advice permanently in your physical and digital records. </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Obtaining the Settlement/Closure Documents</h3>
                  <p> Following funds realization. Follow up systematically to procure the final discharge papers: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li> <strong>No Dues letter (NDC) / No Objection letter (NOC):</strong> The bank is legally mandated to issue a signed. Stamped NDC within 15 to 30 days confirming complete discharge of debt. </li>
                    <li> <strong>Zero-Balance Account Ledger:</strong> Download or collect an updated loan account record show that the unpaid dues has been adjusted to ₹0.00. </li>
                    <li> <strong>Return of Post-Dated Cheques / Security Instruments:</strong> If any blank security cheques or physical NACH mandates were submitted at the time of loan disbursement. Demand their destruction or physical return with a formal cancellation receipt. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 3. How Personal Loan Settlement Process Works                 */}
              {/* ------------------------------------------------------------- */}
              <section id="personal-loan-settlement-process" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 3
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  3. How Personal Loan Settlement Works: 9-Step Roadmap
                </h2>
                <div className="text-black leading-relaxed space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Navigating a one-time settlement requires systematic execution across 9 discrete phases. Missing a single procedural step can derail talks or leave you exposed to renewed claims court cases: </p>

                  <div className="space-y-4 my-4">
                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          1
                        </span>
                        <h3 className="font-bold text-black text-sm sm:text-base">Step 1: Assess Your Outstanding Loan Ledger</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed pl-9"> Download your complete loan account record from your net banking portal or branch. Deconstruct the total claimed balance into three distinct heads: (a) Unamortized Core main loan. (b) Contracted Regular Interest. And (c) Compounded Penal Charges. Overdue Interest &amp. NACH Dishonor Fees. Knowing the exact main loan component establishes your true talks baseline. As non-main loan charges are universally eligible for 100% waiver. </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          2
                        </span>
                        <h3 className="font-bold text-black text-sm sm:text-base">Step 2: Establish Legitimate Financial Hardship</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed pl-9"> Compile concrete. Incontrovertible proof establishing why contractual EMI servicing is impossible. Gather employer end notices. Medical discharge summaries. Hospitalization bills. Diagnosis reports. Or audited P&amp. L records showing trade collapse. Prepare a clear household budget reflecting survival expenditures versus net household income. </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          3
                        </span>
                        <h3 className="font-bold text-black text-sm sm:text-base">Step 3: Stop Accumulating Further Debt</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed pl-9"> Break the dangerous &quot. debt spiral&quot. trap. Desperate clients often borrow from high-interest instant fintech apps or credit cards at 36%. 48% APR to service past bank EMIs. This escalates bankruptcy. Cease taking fresh loans promptly. If auto-debit (NACH) mandates continue to bounce. Notify the bank in writing of your inability to service EMIs to avoid recurring bounce charges. </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          4
                        </span>
                        <h3 className="font-bold text-black text-sm sm:text-base">Step 4: Engage With Lender or Appoint Legal Representation</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed pl-9"> Engaging straight with aggressive telecallers results in threats and misleading verbal promises. Appointing CredSettle&apos. s legal lawyer establishes an formal legal barrier. Our lawyer issue a formal legal help Notice under the lawyer Act. 1961. Directing the bank and its claims firms to cease all direct contact and route contacts strictly through our legal desk. </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          5
                        </span>
                        <h3 className="font-bold text-black text-sm sm:text-base">Step 5: Submit a Formal OTS Proposal</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed pl-9"> Draft and submit a structured One-Time Settlement (OTS) petition to the bank&apos. s Stressed Asset handling Branch and main loan Nodal Officer. The petition details your payment track record. Recounts the involuntary hardship timeline. Encloses the verified hardship dossier. And tenders a realistic opening lump-sum offer (typically 25%. 35% of core main loan) supported by third-party money help. </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          6
                        </span>
                        <h3 className="font-bold text-black text-sm sm:text-base">Step 6: Multi-Round Institutional Negotiation</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed pl-9"> Banks almost universally reject initial offers or counter with nominal 10%. 20% fee waivers. CredSettle lawyer represent you before the bank&apos. s Settlement alert boards or local Remedial Head. By show zero attachable assets. Citing RBI settlement directions. And highlighting the prohibitive cost of 3-year civil claims court cases. We drive the final figure into the optimal 40%. 55% main loan band. </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          7
                        </span>
                        <h3 className="font-bold text-black text-sm sm:text-base">Step 7: Verification of the Settlement Letter</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed pl-9"> Once terms are sanctioned. The lender generates a formal closure note. Our legal team conducts a line-by-line audit: verifying that the paper is on authentic bank letterhead. Signed by an authorized signatory with appropriate delegated money powers. Features the exact loan account number. Specifies the agreed sum without hidden conditions. And explicitly confirms full. Final. And full closure. </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          8
                        </span>
                        <h3 className="font-bold text-black text-sm sm:text-base">Step 8: Execution of Payment via Traceable Banking Rails</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed pl-9"> Remit the sanctioned amount straight into the designated loan account via RTGS. NEFT. Or Account Payee Demand Draft before the letter&apos. s expiry date. promptly obtain and secure the stamped bank acknowledgment receipt or digital transaction UTR reference number as legal proof of complete performance. </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          9
                        </span>
                        <h3 className="font-bold text-black text-sm sm:text-base">Step 9: Post-Settlement Formalities &amp; Credit Report Update</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed pl-9"> Within 15 to 30 days. Make sure the bank issues your stamped No Dues letter (NDC). Between 45 and 60 days post-settlement. Pull your updated credit bureau reports (CIBIL. Experian. CRIF. Equifax) to verify that the loan status has transitioned from overdue/overdue to &quot. Settled&quot. with a remaining balance of ₹0.00. If discrepancies persist. File a formal dispute attaching your NDC. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 4. Why Do People Choose Personal Loan Settlement?             */}
              {/* ------------------------------------------------------------- */}
              <section id="why-opt-for-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 4
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  4. Why Do People Choose Personal Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> clients do not enter one-time settlements as an investment choice. it is an emergency money and legal rescue method chosen when continuing full payments becomes impossible. Understanding the core drivers and trade-offs is essential: </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Involuntary and Unavoidable Financial Hardship</h3>
                  <p> The vast majority of private loans defaults in India stem from genuine economic shocks rather than bad faith: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>trade Layoffs &amp. Sudden Loss of Employment:</strong> In an evolving economy with startup combining. Automation. And trade downsizings. A sudden job loss deprives a expert of disposable monthly cash flow. Finding comparable employment often takes 6 to 12 months. During which unpaid EMIs compound rapidly. </li>
                    <li> <strong>Severe Medical Emergencies &amp. Critical Illness:</strong> Serious health crises. Cancer therapies. Organ transplants. Cardiovascular surgeries. Or extensive post-accident trauma. Often exhaust health cover limits and wipe out lifetime savings. Diverting all income toward survival. </li>
                    <li> <strong>trade trade Failure &amp. Cash-Flow Crises:</strong> Self-employed people. Traders. And MSME founders often face client defaults. Supply chain collapses. Or RBI breaks that turn profitable firms insolvent overnight. </li>
                    <li> <strong>Multi-Lender Debt Cascading:</strong> clients often hold 3 to 5 simultaneous credit facilities across multiple banks and instant digital loan apps. Attempting to service interest across all lenders leads to a total collapse. Making coordinated settlement the only path out of chronic debt. </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Pros of Personal Loan Settlement</h3>
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                    <strong className="text-sm sm:text-base text-emerald-900 block">Substantial Financial &amp; Psychological Benefits:</strong>
                    <ul className="list-disc pl-5 space-y-1.5 text-emerald-900">
                      <li><strong>major Debt Haircut (40% to 65%):</strong> Permanently eliminates a major portion of total claimed dues. Bringing payment within your actual money skill.</li>
                      <li><strong>100% Extinguishment of Penalties &amp. Bounce Fees:</strong> Completely cancels astronomical compound late payment charges and recurring NACH dishonor penalties.</li>
                      <li><strong>Instant Cessation of abuse:</strong> Completely halts aggressive claims agent phone calls. Workplace intrusions. And residential visits upon formal sanction.</li>
                      <li><strong>Permanent Legal Protection:</strong> Shields you from civil summary suits (Order 37 CPC). Arbitration awards. And criminal actions under Section 138 of the NI Act or Section 25 of the PSSA.</li>
                      <li><strong>Definitive Legal Closure:</strong> Yields a stamped No Dues letter. Confirming that the lender has zero residual claim against your future income or inherited assets.</li>
                    </ul>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Cons of Personal Loan Settlement</h3>
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
                    <strong className="text-sm sm:text-base text-amber-900 block">Trade-Offs and Long-Term Implications:</strong>
                    <ul className="list-disc pl-5 space-y-1.5 text-amber-900">
                      <li><strong>Bureau Account Tagging:</strong> Credit information bureaus annotate the loan account remark with &quot. Settled under settlement&quot. rather than &quot. Regular Closure&quot.</li>
                      <li><strong>Credit Score Reduction:</strong> Triggers an fast dip of 75 to 120 points. Reflecting the trade loss absorbed by the lending institution.</li>
                      <li><strong>7-Year Bureau Retention:</strong> Under Section 20 of the Credit Information Companies (Regulation) Act. Settlement tags remain visible on your credit history for up to 7 years (though impact diminishes greatly after 24 months).</li>
                      <li><strong>strict 12-Month RBI Cooling-Off Period:</strong> Under the RBI June 8. 2023 Circular. Regulated entities cannot extend fresh credit facilities to settled clients for at least 12 months.</li>
                      <li><strong>Need for Ready Liquid Funds:</strong> Requires the client to arrange an agreed lump-sum amount (or 2. 3 short installments) to execute the settlement.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 5. When Should You Take Personal Loan Settlement?             */}
              {/* ------------------------------------------------------------- */}
              <section id="when-to-settle-personal-loan" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 5
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  5. When is the Right Time to Settle a Personal Loan?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Strategic timing is the decisive factor in securing maximum debt waivers while minimizing legal vulnerability. start settlement discussions at the wrong phase can result in summary rejection or unmanageable legal escalation: </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Days Past Due (DPD) and NPA Classification</h3>
                  <p> Credit bureaus and bank internal risk models track default through <strong>Days Past Due (DPD)</strong> counters. As unpaid days built up. Loan accounts progress through legal RBI stages: </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Delinquency Category</th>
                          <th className="p-3">DPD Timeline</th>
                          <th className="p-3">Bank Capital Provisioning</th>
                          <th className="p-3">Settlement Feasibility</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">Standard Performing</td>
                          <td className="p-3">0 DPD (Current)</td>
                          <td className="p-3">0.40% Standard Provisioning</td>
                          <td className="p-3 text-red-600 font-medium">Infeasible (0% Haircut Permitted)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">SMA-0 (Early Alert)</td>
                          <td className="p-3">1 to 30 Days Overdue</td>
                          <td className="p-3">Routine Monitoring</td>
                          <td className="p-3 text-red-600 font-medium">Very Low (Telecallers demand 100% EMI)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">SMA-1 (Moderate Delinquency)</td>
                          <td className="p-3">31 to 60 Days Overdue</td>
                          <td className="p-3">Elevated Risk cash</td>
                          <td className="p-3 text-amber-600 font-medium">Restructuring possible. main loan haircut rejected</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">SMA-2 (Severe Warning)</td>
                          <td className="p-3">61 to 90 Days Overdue</td>
                          <td className="p-3">Impending Default Classification</td>
                          <td className="p-3 text-amber-600 font-medium">Early discussions. minimal haircut sanctioned</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">Sub-Standard NPA (Optimal Window)</td>
                          <td className="p-3 font-bold text-blue-700">91 to 365 Days Overdue</td>
                          <td className="p-3 text-blue-700 font-bold">15% strict cash Provisioning</td>
                          <td className="p-3 text-emerald-700 font-bold">High (35% to 55% loan cut)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-emerald-700">Doubtful / Loss Asset (Deep Default)</td>
                          <td className="p-3 font-bold text-emerald-700">365+ Days (12+ Months)</td>
                          <td className="p-3 text-emerald-700 font-bold">25% to 100% Full Provisioning</td>
                          <td className="p-3 text-emerald-700 font-bold">Maximum (50% to 65%+ Haircut Feasible)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Why Settling Too Early or Too Late Can Work Against You</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                      <strong className="text-red-900 block mb-1 text-sm font-bold">⚠️ The Pitfall of Settling Too Early (0 to 60 Days):</strong>
                      <p className="text-red-800 leading-relaxed"> When an account is in SMA-0 or SMA-1. Bank internal claims rules strictly prohibit credit boards from granting main loan waivers. Credit managers assume you have liquid assets and are merely testing the waters. Asking for a settlement at this stage flags you as a prospective willful defaulter. Accelerating claims calls without securing any discount. </p>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <strong className="text-amber-900 block mb-1 text-sm font-bold">⚠️ The Danger of Waiting Too Late (Post-Court Decrees):</strong>
                      <p className="text-amber-800 leading-relaxed"> Conversely. Delaying settlement until the bank has filed civil suits under Order 37 CPC. Obtained an ex-parte arbitration award. Or secured a Section 138 summons with non-bailable warrants places you at a severe disadvantage. The bank has already incurred legal expenses and possesses judicial enforcement leverage. Making them far less willing to grant large haircuts. </p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl text-xs sm:text-sm text-blue-950 space-y-1.5 my-2">
                    <strong>🎯 The Strategic Sweet Spot: 90 to 180 Days Delinquency &amp; National Lok Adalat</strong>
                    <p> The ideal window to start one-time settlement is between <strong>90 and 180 days past due</strong>. The bank has officially classified the asset as an NPA and been forced to allocate 15% cash provisioning. Straight impacting its quarterly profitability. Also, joining in <strong>National Lok Adalat</strong> cycles (held once every quarter across all Indian states) provides a state-sanctioned forum where banks are under bank pressure to clear stressed asset backlogs with maximum waiver flexibility. </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">When NOT to Settle a Personal Loan</h3>
                  <p> Settlement is a permanent money mark. It is NOT advisable if: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>Your Income Loss is Purely Temporary:</strong> If you face a 1 to 2 month salary delay between jobs. Apply for a temporary EMI moratorium or loan tenure extension instead of taking a permanent bureau hit.</li>
                    <li><strong>You Intend to Buy a Home Within 12 to 24 Months:</strong> A &quot. Settled&quot. remark on CIBIL will cause tier-1 banks to reject prime home loan applications during the strict cooling-off window.</li>
                    <li><strong>You Possess Liquid Investments or Assets:</strong> If you have mutual funds. Fixed deposits. Or gold assets that can cover the main loan. Liquidating them preserves your pristine credit score.</li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 6. Legal Consequences of Personal Loan Settlement             */}
              {/* ------------------------------------------------------------- */}
              <section id="legal-consequences" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 6
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  6. Legal Aspects of Personal Loan Settlement in India
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Defaulting clients are routinely subjected to aggressive threats by claims firms. Including threats of fast police arrest. Home seizure, and criminal FIRs. Understanding the legal legal rules under Indian jurisprudence dispels these myths: </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Can You Be Arrested for Not Paying a Personal Loan?</h3>
                  <div className="p-4 sm:p-5 bg-red-50 border-l-4 border-red-600 rounded-r-xl text-xs sm:text-sm text-red-950 space-y-2">
                    <strong className="text-sm sm:text-base text-red-900 block font-bold">Unambiguous Constitutional Law: ABSOLUTELY NOT.</strong>
                    <p> Inability to repay an no-pledge private loans due to poverty. Unemployment. Or trade distress is strictly a <strong>CIVIL DISPUTE</strong> governed by the Indian Contract Act. 1872. It does NOT constitute a cognizable criminal offense. </p>
                    <p> Under the constitutional doctrine articulated in <strong>Jolly George Varghese (1980 AIR 470)</strong>Justice Krishna Iyer ruled that private liberty under Article 21 shields an impoverished client from penal incarceration for bona fide civil contract defaults.<strong>zero legal formal</strong> to file a criminal complaint. Issue station notices. Or interrogate a client over unpaid private loans installments. </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Legal Recourse Available to Lenders (4 Legal Pathways)</h3>
                  <p> While criminal arrest for simple default is unlawful. Lenders possess legitimate legal instruments under Indian procedural law to enforce claims: </p>

                  <div className="space-y-3 my-3 text-xs sm:text-sm">
                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">1. Civil Summary Suit under Order 37 of Code of Civil Procedure (CPC), 1908</strong>
                      <p className="text-black leading-relaxed"> Lenders file summary suits in Civil Courts for fast-track claims based on written debt contracts. The client has 10 days to enter appearance and file an application for &quot. Leave to Defend&quot. on grounds of exorbitant interest calculations or unconscionable penalties. Executing a one-time settlement results in mutual disposal under Order 23 Rule 3 of the CPC. </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">2. Arbitration Proceedings under Arbitration and Conciliation Act, 1996</strong>
                      <p className="text-black leading-relaxed"> Standard private loans pacts incorporate strict arbitration clauses. Lenders often appoint sole arbitrators unilaterally. Under landmark Supreme Court rulings in <em>TRF Ltd. (2017)</em> and <em>Perkins Eastman Architects DPC (2019)</em>Unilateral appointment of an arbitrator by a lender is legally void ab initio. CredSettle lawyer challenge illegal appointments under Section 12(5) and Section 14. Converting arbitration hearings into binding Section 30 consent settlements. </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">3. Section 25 of Payment &amp; Settlement Systems Act (PSSA), 2007</strong>
                      <p className="text-black leading-relaxed"> When an electronic auto-debit (e-NACH / ECS mandate) bounces due to insufficient funds. Lenders issue a 30-day legal demand notice followed by a criminal complaint before a city Magistrate. This is a bailable offense. Filing a legal reply and executing an OTS quashes the complaint. As offenses under Section 25 are completely compoundable. </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">4. Section 138 of Negotiable Instruments Act, 1881 (Cheque Bounce)</strong>
                      <p className="text-black leading-relaxed"> If a physical post-dated cheque dishonors. The lender serves a 15-day legal demand notice and files a complaint before a Judicial Magistrate. Section 138 is a quasi-criminal bailable offense. Under Section 147 of the Negotiable Instruments Act and Section 320 of the CrPC. Any complaint under Section 138 is 100% compoundable upon mutual settlement. This resulting in complete acquittal and case dismissal. </p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Legal Rights of the Borrower Under Indian Law</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-2">
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1">Right to Privacy &amp; Dignity</strong>
                      <p className="text-black">Guaranteed under K.S. Puttaswamy v. Union of India. Lenders cannot disclose your debt to neighbors. Relatives. Or employers.</p>
                    </div>
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1">Right to Regulated Contact Hours</strong>
                      <p className="text-black">Under central bank standards. Field representatives may communicate strictly between 08:00 AM and 07:00 PM.</p>
                    </div>
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1">Right to Fair Transparent Accounting</strong>
                      <p className="text-black">Clients have the legal right to receive full ledger records breaking down main loan. Interest. And penalties.</p>
                    </div>
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1">Right to Legal Representation</strong>
                      <p className="text-black">Pursuant to the lawyer Act of 1961. Clients retain the legal entitlement to be represented by an lawyer to handle all dispute contacts.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 7. What Do Recovery Agents Do to Recover Personal Loans?      */}
              {/* ------------------------------------------------------------- */}
              <section id="recovery-agents-practices" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 7
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  7. Dealing With Recovery Agents and Harassment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> When a private loans becomes overdue. Banks and NBFCs assign accounts to internal claims teams and third-party claims firms (Direct claims agents - DRAs). Understanding the precise legal boundaries governing claims activities empowers you to defend yourself effectively: </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Tactics Used by Recovery Agents</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>steady Calling &amp. Automated Dialers:</strong> High-frequency phone calls from rotating mobile numbers and automated predictive dialer systems designed to create psychological pressure.</li>
                    <li><strong>Unannounced Home &amp. Workplace Field Visits:</strong> Visiting residential addresses or trade workplaces unannounced to cause social embarrassment.</li>
                    <li><strong>Misleading Legal &amp. Police Notices:</strong> Circulating fake legal notices or WhatsApp messages falsely claiming that a Non-Bailable Warrant (NBW) or Police FIR has been lodged.</li>
                    <li><strong>Third-Party Contact &amp. Shaming:</strong> Calling family members, references, elderly parents. Or office HR departments to extract payment through social stigma.</li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">What Recovery Agents Can and Cannot Do (RBI Guidelines)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <strong className="text-emerald-950 block mb-2 font-bold">✓ Strictly Permitted Under Law:</strong>
                      <ul className="space-y-1.5 text-emerald-900 list-disc list-inside">
                        <li>Permitted contact hours are strictly bounded from <strong>08:00 to 19:00 hours</strong>. calls outside this span are RBI infractions.</li>
                        <li>Possessing valid <strong>DRA Certification</strong> from the Indian Institute of Banking &amp. Finance (IIBF).</li>
                        <li>Carrying formal bank identity cards and a signed authorization letter from the lending institution.</li>
                        <li>Maintaining expert. Respectful language and respecting private privacy.</li>
                        <li>Providing an formal bank receipt for any payment tendered.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                      <strong className="text-red-950 block mb-2 font-bold">✗ Strictly ILLEGAL Under RBI Directives:</strong>
                      <ul className="space-y-1.5 text-red-900 list-disc list-inside">
                        <li>Calling before 8:00 AM or after 7:00 PM.</li>
                        <li>Contacting relatives. Friends. Neighbors. Or employer HR.</li>
                        <li>Using abusive, threatening, or vulgar language.</li>
                        <li>Trespassing inside your residence without permission.</li>
                        <li>Refusing to show formal bank identification or authorization.</li>
                        <li>Sending forged court summons or fake police arrest warrants.</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">What to Do If You Face Harassment</h3>
                  <p> If claims agents violate RBI Fair Practices Codes. Take these fast protective actions: </p>
                  <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>Record Everything:</strong> Enable automated call recording on your smartphone. Record all incoming claims calls and preserve timestamps and caller phone numbers.</li>
                    <li><strong>Demand Identity Credentials:</strong> If an agent visits your home. Demand to inspect their staff ID card. IIBF DRA letter. And bank authorization letter. Record the interaction on video if they behave aggressively.</li>
                    <li><strong>Serve an lawyer legal help Notice:</strong> Direct CredSettle lawyer to issue a formal legal help notice notifying the bank that any further direct agent contact will attract criminal legal steps under IPC/BNS sections.</li>
                  </ol>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">How to File a Formal Complaint Against Recovery Harassment</h3>
                  <p> Follow this legal 4-tier complaint escalation matrix: </p>
                  <div className="space-y-2.5 my-3 text-xs sm:text-sm">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block font-bold">Level 1: Bank&apos;s Branch Manager &amp; Grievance Redressal Officer (GRO)</strong>
                      <p className="text-black mt-0.5">Submit a formal written complaint with audio recordings and phone numbers demanding fast de-allocation of abusive firms.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block font-bold">Level 2: Principal Nodal Officer (PNO)</strong>
                      <p className="text-black mt-0.5">If the branch fails to act within 7 days. Escalate straight to the lender&apos. s main loan Nodal Officer. Under RBI rules. The PNO has 30 days to resolve the grievance.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block font-bold">Level 3: RBI Integrated Ombudsman (CMS Portal)</strong>
                      <p className="text-black mt-0.5"> File an online complaint at <code className="text-blue-600 font-mono">cms.rbi.org.in</code> or call toll-free helpline 14448 under the <em>Reserve Bank - Integrated Ombudsman Scheme. 2021</em> for deficiency of service and abuse. </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block font-bold">Level 4: Police FIR &amp; Cyber Crime Portal</strong>
                      <p className="text-black mt-0.5"> For physical threats. Extortion. Or vulgar abuse. File a police complaint under Section 384 (Extortion). Section 503 (Criminal threats). And Section 506 of the IPC / Bharatiya Nyaya Sanhita. Or report online via <code className="text-blue-600 font-mono">cybercrime.gov.in</code>. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 8. What Is the Waiver for Personal Loan Settlement?           */}
              {/* ------------------------------------------------------------- */}
              <section id="personal-loan-settlement-waiver" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 8
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  8. Settlement Amount Calculations &amp; Mathematical Examples
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> A settlement waiver (commonly referred to in banking circles as the &quot. haircut&quot. ) is the percentage of total claimed dues that the lender permanently forgives. To understand how waivers are determined. Examine the anatomical structure of overdue debt: </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Principal, Interest, Penalties and Other Charges</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">1. Penalties &amp; Bounce Fees</strong>
                      <span className="text-emerald-700 font-extrabold text-sm block mb-1">100% Waived</span>
                      <p className="text-black">All late fees, cheque/e-NACH bounce charges. And compounding penal interest are waived upfront in genuine OTS offers.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">2. Accrued Regular Interest</strong>
                      <span className="text-emerald-700 font-extrabold text-sm block mb-1">70% – 100% Waived</span>
                      <p className="text-black">Contractual interest accrued after default is almost entirely waived during structured boards talks.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">3. Core Principal Balance</strong>
                      <span className="text-blue-700 font-extrabold text-sm block mb-1">30% – 60% Waived</span>
                      <p className="text-black">The unamortized main loan is discounted based on default age. Hardship severity. And demonstrable lack of assets.</p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Factors That Determine the Settlement Percentage</h3>
                  <p> Bank settlement boards do not pick discount percentages arbitrarily. They review six mathematical and bank variables: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>NPA default Vintage:</strong> Loans overdue for 12 to 24+ months (Doubtful/Loss assets) attract greatly higher haircuts than 90-day defaults. As the bank has already fully provisioned for the loss.</li>
                    <li><strong>no-pledge Nature of Credit:</strong> Because private loans lack security. The bank cannot auction property under SARFAESI. Forcing them to accept settlement cash.</li>
                    <li><strong>Verifiable Inability to Pay:</strong> Low average bank balances. Zero liquid investments. And joblessness compel the bank to accept achievable settlement sums.</li>
                    <li><strong>Lender Category &amp. Risk Appetite:</strong> Fintech NBFCs settle quickly with moderate haircuts. private banks follow strict boards formulas. PSU banks offer deep discounts during annual settlement drives.</li>
                    <li><strong>Fiscal Calendar Timing:</strong> Quarter-end and fiscal year-end (especially March 15 to March 31) create aggressive pressure on banks to reduce gross NPAs. Unlocking peak waiver approvals.</li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Is a 50% Settlement Realistic?</h3>
                  <p> <strong>Yes.</strong> For no-pledge private loans that have crossed 90 to 180 days of non-payment. An overall waiver of <strong>45% to 60% on total ledger dues</strong> is standard industry practice in Indian banking. Recovering 45%. 50% in cash today is commercially superior for a bank compared to spending 3. 5 years in civil court cases where claims is uncertain. Beware of firms promising unrealistic 85%. 90% waivers on recent defaults. This are deceptive marketing traps. </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Personal Loan Settlement Calculation Scenarios</h3>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Original Principal</th>
                          <th className="p-3">Inflated Ledger Claim</th>
                          <th className="p-3">Average Negotiated OTS</th>
                          <th className="p-3">Total Borrower Savings</th>
                          <th className="p-3">Effective Haircut %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">₹2,50,000</td>
                          <td className="p-3 text-red-600">₹3,45,000</td>
                          <td className="p-3 text-emerald-700 font-bold">₹1,15,000. ₹1,35,000</td>
                          <td className="p-3 font-semibold">₹2,10,000. ₹2,30,000</td>
                          <td className="p-3 font-bold text-blue-700">60%. 66%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">₹5,00,000</td>
                          <td className="p-3 text-red-600">₹6,90,000</td>
                          <td className="p-3 text-emerald-700 font-bold">₹2,25,000. ₹2,60,000</td>
                          <td className="p-3 font-semibold">₹4,30,000. ₹4,65,000</td>
                          <td className="p-3 font-bold text-blue-700">62%. 67%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">₹10,00,000</td>
                          <td className="p-3 text-red-600">₹14,20,000</td>
                          <td className="p-3 text-emerald-700 font-bold">₹4,50,000. ₹5,25,000</td>
                          <td className="p-3 font-semibold">₹8,95,000. ₹9,70,000</td>
                          <td className="p-3 font-bold text-blue-700">63%. 68%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">₹15,00,000</td>
                          <td className="p-3 text-red-600">₹21,50,000</td>
                          <td className="p-3 text-emerald-700 font-bold">₹6,75,000. ₹7,80,000</td>
                          <td className="p-3 font-semibold">₹13,70,000. ₹14,75,000</td>
                          <td className="p-3 font-bold text-blue-700">64%. 69%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 9. How Long Does Personal Loan Settlement Take?               */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-timeline" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 9
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  9. How Long Does Personal Loan Settlement Take?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> A structured private loans settlement typically takes <strong>3 to 8 weeks</strong> from initial debt audit to issuance of the formal No Dues letter. Here is the daily work phase breakdown: </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1">Phase 1: Hardship Audit &amp; Notice (Days 1–7)</strong>
                      <p className="text-black">Complete ledger audit. Compilation of medical/job loss proof. And service of formal lawyer legal help Notice.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1">Phase 2: Negotiation &amp; Committee Review (Days 8–21)</strong>
                      <p className="text-black">Direct talks with the bank&apos. S Remedial Desk, counter-offers exchange. And presentation to Settlement alert boards.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1">Phase 3: Sanction Letter Issuance (Days 22–35)</strong>
                      <p className="text-black">Bank issues formal stamped OTS Sanction Letter on formal letterhead specifying sanctioned figure and payment schedule.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1">Phase 4: Payment &amp; NDC Delivery (Days 36–50)</strong>
                      <p className="text-black">Funds payment via RTGS/NEFT into loan account. Payment realization. And delivery of stamped No Dues letter (NDC).</p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Timeline Comparison by Lender Type</h3>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Lender Category</th>
                          <th className="p-3">Typical Settlement Duration</th>
                          <th className="p-3">Operational Workflow &amp; Approval Process</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">Digital Fintech NBFCs (KreditBee, Navi, MoneyTap)</td>
                          <td className="p-3 font-bold text-emerald-700">1 to 3 Weeks (Fastest)</td>
                          <td className="p-3">Automated risk matrices. Centralized digital approval desks. Fast turnaround on lump-sum settlements.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">Private Sector Banks (HDFC. ICICI. Axis. Kotak)</td>
                          <td className="p-3 font-bold text-blue-700">3 to 6 Weeks (Moderate)</td>
                          <td className="p-3">Structured multi-tier remedial boards. Formalized legal vetting. Strict records requirements.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">Public Sector Banks (SBI. PNB. BoB. Canara)</td>
                          <td className="p-3 font-bold text-amber-700">6 to 10 Weeks (Extended)</td>
                          <td className="p-3">Rigid branch-to-zonal hierarchy, formal boards quorums. Deep audit scrutiny, but large waivers.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Factors That Can Delay the Process</h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-black">
                    <li>Incomplete or unverified hardship papers submitted by the client.</li>
                    <li>Discrepancies between bank system ledger records and client payment history.</li>
                    <li>Accounts tied up in active court actions requiring formal legal disposal.</li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 10. Errors to Avoid When Settling a Loan                      */}
              {/* ------------------------------------------------------------- */}
              <section id="errors-to-avoid" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 10
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  10. Pitfalls to Avoid in Personal Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Distressed clients are exceptionally vulnerable to misleading promises and fraudulent debt relief claims. Protect yourself by avoiding these 10 fatal mistakes: </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">1. Paying Recovery Agents in Cash</strong>
                      <p className="text-red-800">Never hand over cash or transfer money to private UPI accounts. Agents pocket funds. And the bank continues to treat your loan as in default.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">2. Accepting Verbal Settlement Promises</strong>
                      <p className="text-red-800">Telecallers promise &quot. Pay ₹30,000 and the account will close.&quot. Without a written sanction letter. The bank registers it as a part-payment and resumes claims.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">3. Settling Without Financial Proof</strong>
                      <p className="text-red-800">Approaching the bank without medical. Job-loss. Or income-drop records leads to fast rejection. As auditors mandate documentary hardship proof.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">4. Ignoring Legal Court Notices</strong>
                      <p className="text-red-800">Ignoring Section 138, Section 25. Or arbitration notices leads to ex-parte orders or bailable warrants. Always file a formal legal reply through an lawyer.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">5. Using Unregistered Agencies</strong>
                      <p className="text-red-800">Beware of unregulated online firms that charge massive upfront fees without legal legal help. Failing to deliver valid bank sanction letters.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">6. Borrowing More to Settle Existing Debt</strong>
                      <p className="text-red-800">Taking high-interest loans from payday apps to settle bank loans accelerates bankruptcy. Settle strictly within your genuine savings or family aid.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">7. Unchecked Settlement Letters</strong>
                      <p className="text-red-800">Failing to verify that the letter explicitly mentions &quot. Full and Final Discharge&quot. leaves loopholes for the bank to sell the residual debt to asset reconstruction firms.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">8. Missing the Payment Deadline</strong>
                      <p className="text-red-800">Sanction letters carry strict validity periods (typically 15 to 30 days). Even a 24-hour delay voids the settlement. Reinstating the full claimed balance.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">9. Not Collecting the No Dues Certificate</strong>
                      <p className="text-red-800">Never consider a settlement complete until you have the physical. Stamped No Dues letter (NDC) issued by the bank in your hands.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">10. Forgetting About CIBIL Rebuilding</strong>
                      <p className="text-red-800">Assuming credit repair happens automatically is a mistake. You must actively rebuild your credit profile through secured credit lines.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 11. Impact of Settlement on CIBIL Score                       */}
              {/* ------------------------------------------------------------- */}
              <section id="cibil-score-impact" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 11
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  11. Settlement Impact on CIBIL Score &amp; Credit Repair
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Credit bureau clarity is critical. Under the Credit Information Companies (Regulation) Act (CICRA). 2005. Lenders must report the exact payment performance to all four authorized credit bureaus: TransUnion. Experian. Equifax. And CRIF: </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">How Settlement is Reported: &quot;Settled&quot; vs &quot;Written Off&quot; vs &quot;Closed&quot;</h3>
                  <div className="space-y-2.5 my-3 text-xs sm:text-sm">
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950">
                      <strong>CLOSED:</strong> 100% of principal and interest paid in full. Perfect tradeline status with maximum credit score enhancement.
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-blue-950">
                      <strong>SETTLED:</strong> The lender accepted a negotiated haircut via compromise OTS. The remaining balance is marked as zero, stopping future negative DPD compounding.
                    </div>
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-950">
                      <strong>POST-WRITE-OFF SETTLED:</strong> The account was previously technically written off by the bank, and subsequently settled by the borrower, clearing default liability.
                    </div>
                    <div className="p-3 bg-red-50 rounded-xl border border-red-200 text-red-950">
                      <strong>WRITTEN OFF:</strong> Total loss absorbed by the bank. Borrower remains legally liable, and severe damage is inflicted on credit scores indefinitely.
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">How Long Does the &quot;Settled&quot; Status Stay on Your Credit Report?</h3>
                  <p> Under CICRA regulations. Credit bureaus retain negative payment records and settlement remarks for <strong>up to 7 years</strong>. However. The score impact is not static. Its weight diminishes sharply after 12 to 24 months if new credit lines are managed with 100% on-time discipline. Also, if your money condition improves. You can approach the settling bank in the future. Pay the previously waived differential amount. And obtain an updated <strong>&quot. CLOSED&quot. </strong> status. </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">How to Rebuild Your CIBIL Score After Settlement (CredSettle 4-Step Plan)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1 text-xs sm:text-sm">Step 1: Verify Zero Overdue (Month 1–2)</strong>
                      <p className="text-black">Pull your bureau reports 60 days post-settlement. Verify that the unpaid overdue balance shows ₹0.00 to stop negative score compounding.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1 text-xs sm:text-sm">Step 2: Avail a Secured Credit Card (Month 3–6)</strong>
                      <p className="text-black">Open a Fixed-Deposit (FD) backed credit card (FD of ₹25,000. ₹50,000) from banks like IDFC FIRST. Kotak. Or ICICI. No income proof required.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1 text-xs sm:text-sm">Step 3: Maintain Utilization &lt; 20% (Month 6–12)</strong>
                      <p className="text-black">Use the card for modest grocery and utility expenses. Keeping use below 20%. Always pay the total bill 5 days before due date.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1 text-xs sm:text-sm">Step 4: Restore 750+ CIBIL Rating (Month 12–24)</strong>
                      <p className="text-black">12 to 18 months of disciplined secured payments pushes your CIBIL score back into the 750+ prime band. Unlocking fresh loans.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 12. Personal Loan Settlement vs Other Debt Solutions          */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-vs-other-debt-solutions" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 12
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  12. Alternatives to Personal Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Before committing to a one-time settlement. Review all debt relief alternatives to make sure you select the optimal plan for your money profile: </p>

                  <div className="space-y-3 my-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">1. Loan Restructuring (RBI Guidelines)</strong>
                      <p className="text-black"> Under RBI relief rules. Lenders can modify loan terms without forgiving main loan. This includes extending tenure from 3 to 5 years (lowering monthly EMIs). Granting a 3 to 6-month moratorium on main loan. Or converting accrued interest into a Funded Interest Term Loan (FITL). Ideal for clients experiencing temporary salary delays who expect full earnings claims. </p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">2. Debt Consolidation Loan</strong>
                      <p className="text-black"> Combining multiple private loans and credit cards into a single lower-interest secured or no-pledge loan. This replaces 4. 5 chaotic monthly payments with a single predictable EMI. However. It requires a healthy credit score (720+) and steady disposable income. insolvent clients will not qualify. </p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">3. Personal Loan Balance Transfer</strong>
                      <p className="text-black"> Transferring an existing high-cost private loans (16%. 22% APR) to a competitive lender offering lower interest rates (10.5%. 12.5%). This reduces interest outgo. But is only available to non-overdue clients with unblemished credit records. </p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">4. Liquidating Assets or Borrowing From Family</strong>
                      <p className="text-black"> use gold loans (which offer lower interest rates due to physical security). Withdrawing an staff provident fund (EPF) non-refundable advance under EPFO Form 31. Or securing soft interest-free loans from fast family. This prevents credit bureau damage and avoids a &quot. Settled&quot. remark. </p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">5. Technical Write-Off vs Compromise Settlement</strong>
                      <p className="text-black"> A critical distinction: A <em>Technical Write-Off</em> is an internal accounting maneuver by a bank to remove bad debts from its balance sheet for tax efficiency. the client remains 100% legally liable and claims actions continue. In contrast, a <em>one-time settlement (OTS)</em> permanently clears the client&apos. s legal debt. </p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Comprehensive Comparison Table</h3>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Solution</th>
                          <th className="p-3">Principal Reduced?</th>
                          <th className="p-3">CIBIL Bureau Effect</th>
                          <th className="p-3">Prerequisites</th>
                          <th className="p-3">Best Suited For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">private loans Settlement (OTS)</td>
                          <td className="p-3 text-emerald-700 font-bold">Yes (30% to 60% Haircut)</td>
                          <td className="p-3 text-amber-700 font-semibold">&quot. Settled&quot. Status</td>
                          <td className="p-3">90+ DPD NPA, Severe Involuntary Distress</td>
                          <td className="p-3">Insolvent clients, job loss, unmanageable debt</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Loan Restructuring</td>
                          <td className="p-3 text-red-600 font-bold">No (Tenure Extended)</td>
                          <td className="p-3 text-amber-600">&quot. Restructured&quot. Status</td>
                          <td className="p-3">Standard or early delinquent accounts</td>
                          <td className="p-3">Temporary salary cut with steady future cash flow</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Debt Consolidation</td>
                          <td className="p-3 text-red-600 font-bold">No (Refinances Total Debt)</td>
                          <td className="p-3 text-emerald-700 font-semibold">Positive (On-time EMIs)</td>
                          <td className="p-3">720+ CIBIL, High Disposable Salary</td>
                          <td className="p-3">Solvent individuals with multiple high-interest loans</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Balance Transfer</td>
                          <td className="p-3 text-red-600 font-bold">No (Interest Rate Lowered)</td>
                          <td className="p-3 text-emerald-700 font-semibold">Positive (Standard Tradeline)</td>
                          <td className="p-3">Zero Default History, High Credit Score</td>
                          <td className="p-3">clients seeking lower monthly interest costs</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Technical Write-Off</td>
                          <td className="p-3 text-red-600 font-bold">No (Bank Internal Action)</td>
                          <td className="p-3 text-red-700 font-semibold">&quot. Written Off&quot. Status</td>
                          <td className="p-3">Bank Internal Decision (100% Provisioned)</td>
                          <td className="p-3">Unresolved delinquent loans where claims continues</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 13. Legal Assistance for Personal Loan Settlement Matters    */}
              {/* ------------------------------------------------------------- */}
              <section id="legal-assistance-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 13
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  13. Role of a Legal Advisor / Debt Settlement Company
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Attempting to settle straight with bank bank claims departments places an unrepresented people at a severe disadvantage. Practicing banking law lawyer provide vital legal shields and talks leverage: </p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Why Professional Legal Guidance Matters</h3>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>Legal Protection Under the lawyer Act. 1961:</strong> When an lawyer serves a formal notice of appearance. Lenders and claims firms are legally required to communicate through legal counsel. Promptly halting abuse of the client. </li>
                    <li> <strong>Leveling the bank Playing Field:</strong> Banks employ specialized legal and claims teams. Having senior lawyer representing you makes sure that RBI circulars. Bankruptcy jurisprudence. clients court rulings are leveraged to boost waivers. </li>
                    <li> <strong>Defense Against Section 138 &amp. Section 25 Notices:</strong> Legal counsel drafts expert. Timely legal replies to cheque bounce and e-NACH bounce notices. Protecting you from ex-parte criminal summons. </li>
                    <li> <strong>Challenging Unilateral Arbitration:</strong> lawyer challenge illegally appointed sole arbitrators under Section 11 and Section 12(5) of the Arbitration Act. Converting actions into consensual Lok Adalat awards. </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">What a Legitimate Debt Settlement Company Does</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1">Debt &amp; Hardship Portfolio Audit</strong>
                      <p className="text-black">Conducts a deep analysis of your loan ledger. Segregating core main loan from excessive penalties and assembling medical/job-loss dossiers.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1">Direct Committee Negotiation</strong>
                      <p className="text-black">Bypasses external telecallers to settle straight with Stressed Asset relief Heads and Lok Adalat benches for 40%. 60% waivers.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1">Legal Sanction Letter Vetting</strong>
                      <p className="text-black">Scrutinizes the bank&apos. s closure note to make sure it contains full-and-final discharge clauses with zero conditional loopholes.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1">Guaranteed NDC Delivery &amp; CIBIL Audit</strong>
                      <p className="text-black">Follows up until the stamped No Dues letter is secured and verifies accurate reporting across credit bureaus.</p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Red Flags: How to Identify Fraudulent Debt Settlement Agencies</h3>
                  <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl text-xs sm:text-sm text-red-950 space-y-2">
                    <strong className="text-red-900 block font-bold">⚠️ Warning: Protect Yourself from Fraudulent Agencies</strong>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-red-900">
                      <li><strong>Demanding Settlement Money into Their Own Accounts:</strong> A legitimate firm NEVER asks you to transfer settlement funds to their company account. All payments must be made straight to the lending bank.</li>
                      <li><strong>Promising &quot. 100% CIBIL Score Clean-Up&quot. :</strong> Any firm claiming they can &quot. delete settlement tags&quot. or &quot. erase CIBIL history&quot. is running an illegal scam. Bureau reporting is strictly automated under CICRA.</li>
                      <li><strong>Guaranteeing 90% Discounts:</strong> Promising 90% waivers on 1-month-old loans is deceptive marketing. Real bank haircuts range from 35% to 60%.</li>
                      <li><strong>Operating Without Verified lawyer:</strong> Debt settlement without practicing lawyer enrolled with the Bar Council lacks legal standing before courts and bank boards.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 14. Personal Loan Settlement Services With Legal Protection  */}
              {/* ------------------------------------------------------------- */}
              <section id="credsettle-settlement-services" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 14
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  14. CredSettle&apos;s Personal Loan Settlement Services
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> CredSettle delivers end-to-end legal and money legal help to safeguard distressed private loans clients across India. Our 5-pillar service rules guarantees total legal protection: </p>

                  <div className="space-y-3 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-blue-900 block mb-1 text-sm font-bold">1. Free Comprehensive Debt Assessment</strong>
                      <p className="text-black"> Our banking specialists conduct a audits of your loan pacts. Ledger balances. And CIBIL reports to identify unamortized main loan. Eliminate compounding penal charges. And calculate your exact optimal settlement range. </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-blue-900 block mb-1 text-sm font-bold">2. Anti-Harassment Legal Protection</strong>
                      <p className="text-black"> Upon onboarding. Our lawyer serve formal legal help Notices under the lawyer Act. 1961. Directing lenders and claims firms to halt direct phone calls and home visits. Establishing an impenetrable legal barrier. </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-blue-900 block mb-1 text-sm font-bold">3. End-to-End Negotiation with Banks and NBFCs</strong>
                      <p className="text-black"> We bypass frontline telecallers and settle straight with Chief Remedial Managers. Stressed Asset relief Branches (SARB). And National Lok Adalat benches to get maximum legal haircuts (40% to 65%). </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-blue-900 block mb-1 text-sm font-bold">4. Written Settlement Letter Verification</strong>
                      <p className="text-black"> Our legal team reviews the bank&apos. S formal OTS Sanction Letter line by line. Making sure strict compliance with RBI directives. Proper authorization. And ironclad full-and-final discharge clauses before you disburse a single rupee. </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-blue-900 block mb-1 text-sm font-bold">5. Post-Settlement Support and Credit Guidance</strong>
                      <p className="text-black"> We make sure prompt delivery of your stamped No Dues letter (NDC). Verify that credit bureaus record ₹0.00 dues. And provide a personalized 4-step credit rehabilitation roadmap to rebuild a 750+ CIBIL score. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 15. RBI Guidelines for Personal Loan Settlement               */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-guidelines-personal-loan" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 15
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  15. RBI Guidelines on Personal Loan Settlement (2023-2026)
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Under the central bank's June 2023 notification on retail settlement rules (Circular DOR.STR.REC.20/21.04.048/2023-24). Scheduled lending institutions and non-banking finance firms are bound by uniform governance rules for resolving distressed term loan accounts.</p>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">Key Provisions of the June 2023 Circular</h3>
                  <div className="space-y-3 my-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">1. Mandatory Board-Approved Compromise Policy</strong>
                      <p className="text-black">Every regulated lender must maintain a complete. Board-approved settlement policy establishing objective criteria for reviewing hardship. Minimum haircut thresholds, and standardized procedures.</p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">2. Delegation of Financial Powers</strong>
                      <p className="text-black">To prevent arbitrary favoritism. The formal sanctioning a one-time settlement must be at least one office tier higher than the formal that sanctioned the initial loan facility.</p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">3. Objective Valuation of Net Realizable Assets</strong>
                      <p className="text-black">Settlements must be based on a realistic review of the client&apos. s current money capacity and net realizable asset value rather than coercive claims tactics.</p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">4. Mandatory Cooling-Off Period for Fresh Borrowing</strong>
                      <p className="text-black">The circular prescribes a strict minimum cooling-off period of <strong>at least 12 months</strong> before a regulated lender can sanction fresh credit facilities to clients who have executed one-time settlements.</p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-black block mb-1 font-bold">5. Treatment of Wilful Defaulters and Fraud Accounts</strong>
                      <p className="text-black">The rules clarifies that regulated entities can enter into one-time settlements with accounts classified as fraud or wilful default subject to Board approval and <em>strictly without prejudice to ongoing criminal actions</em>, making sure public clarity.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 16. Documents Required for Personal Loan Settlement          */}
              {/* ------------------------------------------------------------- */}
              <section id="documents-required-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 16
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  16. Documents Required for Personal Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Assemble this complete four-part papers dossier before starting settlement actions to make sure swift approval: </p>

                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Category</th>
                          <th className="p-3">Mandatory Documents</th>
                          <th className="p-3">Purpose &amp; Audit Requirement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">1. Identity &amp. Address Proof</td>
                          <td className="p-3">PAN Card. Aadhaar Card. Passport. Or Voter ID</td>
                          <td className="p-3">legal KYC verification and authentic client identification.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">2. Loan Account Records</td>
                          <td className="p-3">Loan Sanction Letter. Pacts Copy. Latest record of Account</td>
                          <td className="p-3">Establishing unamortized main loan. Contractual interest. And penalty charges.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">3. Income &amp. money Proof</td>
                          <td className="p-3">Bank account records for the preceding 6 to 12 months. Salary slips. Form 16. Or ITR copies</td>
                          <td className="p-3">Demonstrating lack of liquid disposable surplus to satisfy bank audit tests.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">4. Hardship-local Proof</td>
                          <td className="p-3">Layoff/termination letter. Hospital discharge summaries. Medical bills. GST cancellation</td>
                          <td className="p-3">Legally proving involuntary money collapse under RBI OTS deal rules.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 17. What Happens After Personal Loan Settlement?              */}
              {/* ------------------------------------------------------------- */}
              <section id="after-personal-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 17
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  17. What Happens After Personal Loan Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Following payment execution. Critical daily work milestones must be monitored across three distinct time horizons: </p>

                  <div className="space-y-3 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950">
                      <strong className="block mb-1 text-sm font-bold text-emerald-900">Immediate Next Steps (0 to 30 Days):</strong>
                      <p> Remit funds strictly via RTGS/NEFT into the loan account. Obtain the bank-stamped deposit counterfoil or UTR receipt. Follow up systematically until the bank issues the formal stamped <strong>No Dues letter (NDC)</strong> confirming complete discharge of all debts. </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="block mb-1 text-sm font-bold text-black">Medium-Term Actions (1 to 6 Months):</strong>
                      <p> Log in to net banking to verify that the loan account ledger reflects an exact balance of ₹0.00. Pull your updated credit bureau reports (CIBIL. Experian. CRIF. Equifax) after 45 to 60 days. making sure the status reflects &quot. Settled&quot. with zero remaining overdue balance. If the bank fails to update the bureau. Lodge a formal dispute attaching your NDC. </p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-blue-950">
                      <strong className="block mb-1 text-sm font-bold text-blue-900">Long-Term Outlook (1 to 3 Years):</strong>
                      <p> start credit score rehabilitation by opening an FD-backed secured credit card. Maintain strict payment discipline and credit use below 20%. Within 18 to 24 months. Your credit score will recover into the 750+ prime band. Unlocking fresh loans at standard market interest rates. </p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mt-5 mb-2">What If Recovery Calls Continue Post-Settlement?</h3>
                  <p> Occasionally. Outside claims firms continue calling post-settlement due to internal database sync delays. Simply present a digital copy of your stamped OTS Sanction Letter and payment receipt. If abuse persists. CredSettle issues an fast contempt and cease-and-desist notice to the bank&apos. S legal head. Compelling fast blacklisting of the firm. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* OTS Calculator Section Matching loan-settlement               */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-calculator" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CALCULATOR TOOL
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  Personal Loan Settlement (OTS) Savings Calculator
                </h2>
                <p className="text-xs sm:text-sm text-black mb-4 sm:mb-6"> Estimate your approximate settlement payable band and potential waiver based on total dues and default age: </p>

                <div className="bg-slate-900 text-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-800 space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                        Total Outstanding (₹): {Number(totalOutstanding).toLocaleString('en-IN')}
                      </label>
                      <input
                        type="range"
                        min="50000"
                        max="3000000"
                        step="25000"
                        value={totalOutstanding}
                        onChange={(e) => setTotalOutstanding(Number(e.target.value))}
                        className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                        Principal Balance (₹): {Number(principalOutstanding).toLocaleString('en-IN')}
                      </label>
                      <input
                        type="range"
                        min="25000"
                        max={totalOutstanding}
                        step="25000"
                        value={principalOutstanding}
                        onChange={(e) => setPrincipalOutstanding(Number(e.target.value))}
                        className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                        Monthly In-Hand Income (₹): {Number(monthlyIncome).toLocaleString('en-IN')}
                      </label>
                      <input
                        type="range"
                        min="15000"
                        max="300000"
                        step="5000"
                        value={monthlyIncome}
                        onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                        className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                        Default Vintage (Months Past Due): {defaultMonths} Months
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="36"
                        step="1"
                        value={defaultMonths}
                        onChange={(e) => setDefaultMonths(Number(e.target.value))}
                        className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>
                  </div>

                  {/* Results Display */}
                  <div className="p-4 sm:p-5 bg-slate-800/80 rounded-xl sm:rounded-2xl border border-slate-700/80 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-center">
                      <div className="p-3 sm:p-4 bg-slate-900/80 rounded-xl border border-blue-500/30">
                        <span className="text-[11px] sm:text-xs text-slate-400 block mb-1">Estimated Settlement Band (OTS)</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-black text-blue-400">
                          ₹{calculationResult.estLow.toLocaleString('en-IN')} – ₹{calculationResult.estHigh.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-1">Approx. 40% – 55% of total dues</span>
                      </div>

                      <div className="p-3 sm:p-4 bg-slate-900/80 rounded-xl border border-emerald-500/30">
                        <span className="text-[11px] sm:text-xs text-slate-400 block mb-1">Estimated Waiver (Haircut Savings)</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400">
                          ₹{calculationResult.estimatedSavingsLow.toLocaleString('en-IN')} – ₹{calculationResult.estimatedSavingsHigh.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-emerald-400/80 block mt-1">Includes 100% penalty waiver</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 sm:p-2.5 bg-slate-900/60 rounded-xl">
                        <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">NPA Status</span>
                        <span className="font-bold text-amber-400">{defaultMonths >= 12 ? 'Doubtful/Loss' : defaultMonths >= 3 ? 'Sub-Standard' : 'SMA Stage'}</span>
                      </div>
                      <div className="p-2 sm:p-2.5 bg-slate-900/60 rounded-xl">
                        <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">Est. Haircut %</span>
                        <span className="font-bold text-emerald-400">
                          {Math.round((calculationResult.estimatedSavingsHigh / calculationResult.total) * 100)}% Max
                        </span>
                      </div>
                      <div className="p-2 sm:p-2.5 bg-slate-900/60 rounded-xl">
                        <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">Surplus/Mo.</span>
                        <span className="font-bold text-blue-300">₹{calculationResult.disposable.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed italic"> *Disclaimer: Estimations based on RBI settlement rules and standard banking write-off trends. Actual terms depend on bank settlement boards approvals. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 18. Personal Loan Settlement FAQs (18 FAQs)                   */}
              {/* ------------------------------------------------------------- */}
              <section id="personal-loan-settlement-faqs" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 18
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  18. Frequently Asked Questions About Personal Loan Settlement
                </h2>
                <p className="text-xs sm:text-sm text-black mb-4 sm:mb-6"> Crucial legal. Daily work. And money guidance regarding no-pledge private term loan relief in India: </p>

                <div className="space-y-2.5 sm:space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = expandedFaq === index;
                    return (
                      <div key={index} className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all bg-white">
                        <button
                          onClick={() => setExpandedFaq(isOpen ? null : index)}
                          className="w-full flex justify-between items-center text-left p-3.5 sm:p-4 md:p-5 font-bold text-xs sm:text-sm md:text-base text-black hover:text-blue-700 hover:bg-slate-50 transition-colors"
                        >
                          <span className="pr-2">{index + 1}. {faq.question}</span>
                          <span className={`ml-2 text-blue-600 transition-transform duration-200 flex-shrink-0 text-xs ${isOpen ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-3.5 pb-4 sm:px-4 sm:pb-5 md:px-5 text-xs sm:text-sm text-black leading-relaxed border-t border-gray-100 pt-2.5 sm:pt-3 bg-slate-50/50">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Conclusion Box Matching loan-settlement */}
              <div className="border-t border-gray-200 pt-6 sm:pt-8 space-y-4">
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-xl font-bold">Don&apos;t Face the Lenders Alone</h3>
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed"> CredSettle’s lawyer safeguard your legal rights under RBI rules. Stop claims abuse promptly. And settle the maximum legal waiver for your private loans. </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto inline-block text-center bg-white text-blue-950 font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-xs sm:text-sm active:scale-98"
                    >
                      Book a Confidential Legal Consultation
                    </Link>
                  </div>
                </div>
              </div>

            </article>
          </div>

          {/* Right Column: Sticky Conversion & Emergency Defense Card (15% Width) */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-20 space-y-4">

              <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-blue-200 text-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center text-sm mb-2">
                  🛡️
                </span>
                <div className="font-bold text-xs text-black mb-1">Stop EMI Harassment</div>
                <p className="text-[10px] text-black mb-3 leading-tight"> legal legal defense halts workplace calls and claims home visits within 24. 48 hours. </p>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-[11px]"
                >
                  Request Call Back
                </Link>
                <div className="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-black space-y-1 text-left">
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% Confidential</p>
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> RBI Fair Code</p>
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> Bank Sanctions</p>
                </div>
              </div>

              {/* OTS Calculator Quick Jump Badge */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-black">
                <span className="font-bold text-black block text-[11px]">Personal Loan OTS Tool</span>
                <p className="text-[10px] text-black leading-tight">Calculate realistic main loan haircuts and penal interest waivers for private loans.</p>
                <a href="#settlement-calculator" className="text-[10px] text-blue-600 font-semibold block pt-1 hover:underline">Calculate Term Loan Savings ↓</a>
              </div>
          </aside>

        </div>
      </div>

      {/* Floating Mobile Action Pill (Visible on scroll) */}
      <div className={`fixed bottom-4 right-3 z-40 lg:hidden flex items-center gap-2 transition-all duration-300 ${showFloatingNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}>
        <button
          onClick={() => setIsMobileTocOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-full shadow-xl flex items-center gap-1.5 active:scale-95 transition-transform"
          aria-label="Open Table of Contents"
        >
          <span>📑</span>
          <span>Chapters</span>
          <span className="bg-blue-800 text-[10px] px-1.5 py-0.5 rounded-full">18</span>
        </button>

        <a
          href="#settlement-calculator"
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold p-2.5 rounded-full shadow-xl active:scale-95 transition-transform flex items-center justify-center w-10 h-10"
          aria-label="Jump to Settlement Calculator"
          title="Loan Settlement Calculator"
        >
          🧮
        </a>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white hover:bg-gray-100 text-black border border-gray-200 text-xs font-bold p-2.5 rounded-full shadow-md active:scale-95 transition-transform flex items-center justify-center w-10 h-10"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
