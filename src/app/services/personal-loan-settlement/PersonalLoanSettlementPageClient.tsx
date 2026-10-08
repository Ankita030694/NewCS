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
      answer: 'Personal loan compromise—structured in retail banking practice as a One-Time Settlement (OTS)—is a recognized bipartite legal agreement between a borrower experiencing genuine, verifiable financial distress and a lending bank or NBFC. Under this binding compromise, the creditor agrees to accept a mutually negotiated settlement payment (typically 35% to 60% of total claimed ledger balance) as complete and permanent discharge of the debt obligation. Following account crediting of the sanctioned settlement remittance, the financial institution terminates the credit file, quashes recovery measures, and releases an official closure deed.'
    },
    {
      question: 'Is personal loan settlement officially recognized and legal under RBI circulars?',
      answer: 'Yes, 100% legal. The country\'s apex central banking authority, the RBI, codified this under the \'Framework for Compromise Settlements and Technical Write-offs\' (Circular DOR.STR.REC.20/21.04.048/2023-24 dated June 8, 2023). Under these directives, every scheduled commercial bank, cooperative bank, and NBFC is legally mandated to maintain a board-approved policy governing compromise settlements with non-wilful, stressed retail borrowers.'
    },
    {
      question: 'How much haircut or waiver can I realistically expect on my personal loan?',
      answer: 'In personal loan compromise settlements, lenders routinely waive 100% of accumulated penal interest, late payment fees, and cheque/e-NACH bounce charges. On the core unamortized principal balance, negotiated haircuts typically range from 30% to 60%, depending on the default vintage (e.g. 90 days vs 18 months), severity of verified hardship, whether the account has been classified as a doubtful/loss asset, and the quality of advocate-led representation.'
    },
    {
      question: 'Is a 50% waiver on an unsecured personal loan achievable?',
      answer: 'Yes. Achieving a 45% to 55% reduction on total outstanding dues is very common for unsecured personal loans that have crossed 90 to 180 days of delinquency (NPA stage). Because personal loans lack collateral, the bank recognizes that recovering 50% in cash today is commercially superior to spending years in civil courts with zero recovery guarantee.'
    },
    {
      question: 'Does the RBI mandate or guarantee a specific waiver percentage?',
      answer: 'No. The RBI mandates that all lenders have structured settlement frameworks and transparent delegation of financial powers, but it leaves the exact waiver haircut to the commercial judgment and board-approved compromise policy of each respective bank or NBFC based on the borrower\'s verifiable net worth and liquidation value.'
    },
    {
      question: 'When is the strategically optimal time to initiate a personal loan settlement?',
      answer: 'The optimal window is typically between 90 days and 180 days past due (when the account transitions from SMA-2 into a Sub-Standard NPA), or during quarterly National Lok Adalat cycles organized by NALSA. At this juncture, the bank has already absorbed mandatory 15% capital provisioning hits on its balance sheet, making its Stressed Asset Management Branch highly receptive to compromise offers.'
    },
    {
      question: 'Can I settle a personal loan before it becomes an NPA (within 90 days of default)?',
      answer: 'Banks rarely agree to compromise principal haircuts while the loan is in regular standard status (SMA-0 or SMA-1). Prior to NPA classification, lenders prefer tenure extensions, EMI restructuring, or moratoriums. Substantial OTS waivers typically unlock only after the account reaches NPA classification under RBI prudential norms.'
    },
    {
      question: 'How should I respond if served with a Section 138 or Section 25 court notice?',
      answer: 'Never ignore a statutory legal demand notice. Under Section 138 of Negotiable Instruments Act or Section 25 of Payment and Settlement Systems Act, you have a statutory window of 15 days from receipt to respond. CredSettle advocates file a robust legal reply highlighting genuine economic hardship and proposing a compromise settlement. Once settled, these offenses are fully compoundable under Section 147 of the NI Act and Section 320 of the CrPC, resulting in complete withdrawal of court proceedings.'
    },
    {
      question: 'Can I be arrested, jailed, or face police detention for defaulting on a personal loan?',
      answer: 'No criminal liability attaches to loan defaults caused by economic hardship. In its authoritative verdict in Jolly George Varghese (1980), the Supreme Court ruled that an honest borrower lacking present means to clear civil dues cannot be detained under Article 21 rights, the Supreme Court of India held that simple poverty or inability to pay a civil debt cannot lead to imprisonment under Article 21 of the Constitution. Police have no jurisdiction or statutory power to arrest or summon borrowers for unsecured loan defaults.'
    },
    {
      question: 'Do collection representatives have the right to visit my residence or workplace?',
      answer: 'Under the RBI Master Circular on Recovery Agents (August 12, 2022), collection agents are strictly prohibited from calling before 8:00 AM or after 7:00 PM, visiting without prior appointment and official bank identity cards, contacting relatives, neighbors, or employers, or using abusive language. Any such harassment violates RBI directives and Indian Penal Code provisions, entitling you to file immediate police complaints and ombudsman petitions.'
    },
    {
      question: 'How does personal loan settlement impact my CIBIL score and bureau report?',
      answer: 'The financial institution relays updated repayment records to the four licensed credit information bureaus (CIBIL, Experian, Equifax, and CRIF) marking the loan as \'Settled\' (or \'Post-Write-Off Settled\') instead of \'Closed\'. This triggers a score drop of 75 to 120 points. However, settlement stops the continuous compounding of negative Days Past Due (DPD 90+, 180+) and clears the overdue amount to zero, enabling credit recovery to 750+ within 12 to 24 months.'
    },
    {
      question: 'Can the \'Settled\' remark on my credit report be updated to \'Closed\' in the future?',
      answer: 'Yes. If your financial situation improves at a later stage, you have the legal right to approach the settling bank, pay the previously waived haircut differential amount, and request an updated No Dues Certificate that reclassifies the bureau status to \'Closed\'.'
    },
    {
      question: 'How long does the entire personal loan settlement lifecycle take?',
      answer: 'A structured personal loan settlement typically takes 3 to 8 weeks. This spans initial hardship portfolio audit (Days 1–7), formal petition submission and negotiation (Days 8–21), Settlement Committee sanction letter issuance (Days 22–35), payment execution, and receipt of the stamped No Dues Certificate (Days 36–50).'
    },
    {
      question: 'Can I settle multiple personal loans and fintech instant credit apps simultaneously?',
      answer: 'Yes. Many distressed borrowers service 3 to 6 simultaneous credit facilities across multiple banks and NBFC digital loan apps. CredSettle designs unified multi-creditor negotiation strategies to prioritize aggressive lenders while settling accounts sequentially within your available liquidity.'
    },
    {
      question: 'What is the mandatory RBI cooling-off period before I can apply for new loans?',
      answer: 'Under the RBI Compromise Settlement Framework circular of June 8, 2023, regulated entities are required to observe a mandatory cooling-off period of at least 12 months before sanctioning fresh credit facilities to borrowers who have executed a compromise settlement.'
    },
    {
      question: 'What documents are legally mandatory to substantiate financial hardship for an OTS?',
      answer: 'To satisfy bank audit and RBI compliance, you must provide KYC records (PAN, Aadhaar), comprehensive loan account statements, last 6 to 12 months bank statements of all active accounts, Form 16 / ITR, and verifiable hardship proof such as official termination/layoff letters, hospital discharge summaries, medical diagnosis reports, or business closure GST cancellation certificates.'
    },
    {
      question: 'What is the difference between a provisional settlement receipt and a No Dues Certificate (NDC)?',
      answer: 'A payment receipt or UTR slip only proves that money was transferred. It does NOT legally extinguish debt. An official No Dues Certificate (NDC) or release deed is an authenticated legal instrument issued under bank seal confirming that the loan facility is permanently closed with zero outstanding balance and that the bank waives all future recovery claims.'
    },
    {
      question: 'Why is engaging legal counsel or an advocate-led settlement firm superior to negotiating alone?',
      answer: 'Unrepresented borrowers negotiating with aggressive collection departments are frequently pressured into unaffordable partial payments with verbal promises that the bank later rejects. Senior advocates serve formal legal representation notices under the Advocates Act 1961 (stopping agent harassment immediately), negotiate directly with Zonal Credit Committees, vet sanction letters for restrictive clauses, and guarantee receipt of legally binding closure documents.'
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
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words">
            Personal Loan Settlement in India<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">
              The Complete Legal &amp; Financial Master Guide
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            Understand the RBI compromise settlement policy for unsecured personal loans, stop recovery agent harassment, defend legal notices under Order 37 &amp; Sec 25, calculate realistic OTS ranges, and protect your dignity.
          </p>
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
      <div className="max-w-8xl mx-auto px-3 sm:px-4 py-4 sm:py-8">

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
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                    <h3 className="font-bold text-sm">Table of Contents</h3>
                    <p className="text-[10px] text-slate-300">18 Master Chapters • Personal Loan Settlement</p>
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
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 px-2">
                          {module.moduleTitle}
                        </p>
                        <div className="space-y-1">
                          {filteredInModule.map((link) => {
                            const isActive = activeId === link.id;
                            return (
                              <button
                                key={link.id}
                                onClick={() => handleLinkClick(link.id)}
                                className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition-colors flex items-center justify-between ${isActive
                                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                                    : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
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

        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6">

          {/* Left Column: Categorized Table of Contents (15% Desktop Sticky) */}
          <div className="lg:w-[15%] flex-shrink-0 hidden lg:block">
            <div className="sticky top-20 max-h-[calc(100vh-5.5rem)] flex flex-col space-y-2.5">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-xs">Table of Contents</h3>
                  <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">18</span>
                </div>

                <div className="space-y-2.5">
                  {navModules.map((module, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 px-1 py-0.5">
                        {module.moduleTitle.replace('Module ', 'M')}
                      </p>
                      <nav className="space-y-0.5">
                        {module.links.map((link) => {
                          const isActive = activeId === link.id;
                          return (
                            <a
                              key={link.id}
                              href={`#${link.id}`}
                              className={`block text-[11px] transition-all duration-150 px-2 py-1 rounded-md leading-tight ${isActive
                                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                                  : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
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
                  <h4 className="font-bold text-xs text-white">Salary &amp; EMI Shield</h4>
                </div>
                <p className="text-[10px] text-blue-200 mb-2 leading-snug">
                  Defense against employer HR calls, salary account liens, and agent visits.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-blue-500 hover:bg-blue-400 text-white font-bold text-[11px] py-1.5 px-2 rounded-lg transition-colors shadow"
                >
                  Consult Advocate
                </Link>
              </div>
            </div>
          </div>

          {/* Middle Column: Master 18-Section Editorial Guide (70% Width) */}
          <div className="lg:w-[70%] w-full min-w-0">
            <article className="prose prose-slate max-w-none bg-white p-3.5 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-sm border border-gray-200/80 space-y-8 sm:space-y-12 overflow-hidden">

              {/* ------------------------------------------------------------- */}
              {/* 1. What is Personal Loan Settlement?                          */}
              {/* ------------------------------------------------------------- */}
              <section id="what-is-personal-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 1
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  1. What is Personal Loan Settlement?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>Personal loan settlement</strong>—recognized under retail banking regulations as an authorized bipartite compromise accord—enables an overburdened borrower to reach a permanent legal closure with the lending institution.</p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Easy Meaning of Personal Loan Settlement</h3>
                  <p>
                    In simple everyday terms, a personal loan in India is an <em>unsecured credit facility</em>. There is no underlying collateral—such as a residential apartment, commercial shop, physical gold, or motor vehicle—that the bank can seize, seal, or auction under the SARFAESI Act, 2002. The loan is disbursed purely against the borrower&apos;s past credit history and prospective earning capacity.
                  </p>
                  <p>
                    When an individual experiences an acute, unforeseen financial catastrophe—such as corporate retrenchment, involuntary salary reduction, catastrophic medical hospitalization of a family member, sudden commercial business insolvency, or demise of the sole earning member—servicing contractual monthly EMIs becomes mathematically impossible.
                  </p>
                  <p>
                    Once EMIs stop, lenders initiate automated penalty mechanisms. Compounding late payment charges, penal interest (routinely 24% to 36% APR), and recurring NACH/cheque bounce fees cause the nominal ledger claim to mushroom far beyond the initial principal borrowed. Recognizing that a financially insolvent individual cannot service this hyper-inflated ledger, the bank&apos;s authorized Settlement Committee exercises its commercial judgment under Reserve Bank of India (RBI) guidelines to accept a realistic lump-sum or phased compromise payment (haircut), extinguishing the remaining principal and 100% of accumulated penal charges.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Personal Loan Settlement Explained With an Example</h3>
                  <div className="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs sm:text-sm">
                    <div className="font-bold text-gray-900 text-sm sm:text-base border-b border-slate-200 pb-2">
                      Real Case Illustration: Rajesh&apos;s ₹7,50,000 Unsecured Personal Loan Resolution
                    </div>
                    <p>
                      <strong>Initial Borrowing:</strong> Rajesh, a mid-level IT project lead in Bengaluru, availed a ₹7,50,000 personal loan at an interest rate of 15.5% per annum for a 5-year tenure from a prominent private sector bank. Over 18 months, he serviced every EMI on schedule, reducing his unamortized principal balance to ₹5,40,000.
                    </p>
                    <p>
                      <strong>The Financial Collapse:</strong> A severe medical emergency involving emergency cardiac surgery for his dependent parent, followed by a company-wide workforce downsizing, left Rajesh without an income stream for 8 consecutive months. He defaulted on 8 consecutive EMIs.
                    </p>
                    <p>
                      <strong>Bank&apos;s Inflated Demand Notice:</strong> Core Principal (₹5,40,000) + Normal Accrued Contractual Interest (₹1,35,000) + Punitive Late Penalties &amp; Recurring NACH Dishonor Fees (₹95,000) = <strong>₹7,70,000 Total Demanded Balance</strong>.
                    </p>
                    <p>
                      <strong>Advocate-Led Strategic Intervention:</strong> CredSettle&apos;s senior banking advocates assembled an irrefutable hardship dossier containing hospital surgical discharge summaries, the company retrenchment letter, and zero-balance savings statements. We submitted a formal OTS petition to the bank&apos;s Stressed Asset Resolution Branch (SARB) and Principal Nodal Officer, citing the RBI June 8, 2023 Compromise Framework.
                    </p>
                    <p>
                      <strong>Sanctioned Settlement Terms:</strong> Following structured multi-round negotiations, the bank&apos;s Settlement Committee sanctioned an official One-Time Settlement:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700">
                      <li>100% waiver of penal interest and bounce charges (₹95,000 extinguished).</li>
                      <li>100% waiver of regular accrued interest (₹1,35,000 extinguished).</li>
                      <li>45% commercial haircut on the remaining principal balance.</li>
                      <li>Final full-and-final settlement sum approved at <strong>₹2,97,000</strong>.</li>
                    </ul>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 font-semibold text-xs mt-2">
                      ✓ Final Result: Rajesh saved ₹4,73,000 (a 61.4% overall ledger reduction), remitted the sanctioned amount via RTGS directly into his loan account, and received an official stamped No Dues Certificate within 21 days, ending all collection agency communications permanently.
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Personal Loan Settlement vs Loan Closure</h3>
                  <p>
                    Borrowers frequently confuse regular loan closure with compromise settlement. While both result in account termination, their financial requirements, legal documentation, and credit bureau consequences differ fundamentally:
                  </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-gray-700 border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-gray-900 font-bold">
                        <tr>
                          <th className="p-3">Evaluation Parameter</th>
                          <th className="p-3">Regular Loan Closure (Full Repayment)</th>
                          <th className="p-3">Personal Loan Settlement (Compromise OTS)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">Repayment Amount</td>
                          <td className="p-3 text-emerald-700 font-medium">100% of Principal + 100% of Contracted Interest</td>
                          <td className="p-3 text-blue-700 font-medium">35% to 60% of total claimed balance (Substantial Haircut)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">CIBIL Bureau Status</td>
                          <td className="p-3 font-semibold text-emerald-700">Reported as <strong>"CLOSED"</strong></td>
                          <td className="p-3 font-semibold text-amber-700">Marked under the regulatory classification <strong>"Account Settled under Compromise"</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Credit Score Impact</td>
                          <td className="p-3 text-emerald-700">Positive or neutral (+15 to +35 points over tenure)</td>
                          <td className="p-3 text-amber-700">Immediate drop of 75–120 points; stops worsening DPD accumulation</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Borrower Financial State</td>
                          <td className="p-3">Fully solvent, steady income, capable of regular EMIs</td>
                          <td className="p-3">Verifiable insolvency, job loss, illness, or acute financial collapse</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Documentation Required</td>
                          <td className="p-3">Standard banking clearance letter or digital NOC</td>
                          <td className="p-3">Formal Board-approved OTS Sanction Letter + Stamped Full &amp; Final NDC</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Future Prime Borrowing</td>
                          <td className="p-3 text-emerald-700">Eligible immediately for prime retail loans and cards</td>
                          <td className="p-3 text-gray-600">Subject to 12-month RBI cooling-off period; re-built via secured tradelines</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Tax &amp; Legal Finality</td>
                          <td className="p-3">Routine contract fulfillment</td>
                          <td className="p-3">Complete legal discharge; bank waives right to file civil suits or Sec 138/25</td>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  2. How to Do Personal Loan Settlement?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Personal loan settlement is not an informal telephone bargain conducted with collection agency telecallers. It is a formal institutional and legal procedure governed by internal bank recovery policies, the Indian Contract Act, 1872, and Reserve Bank of India guidelines. To settle an unsecured personal loan successfully, you must navigate this rigorous 7-stage protocol:
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Eligibility for Personal Loan Settlement</h3>
                  <p>
                    Lending institutions routinely reject compromise proposals from solvent borrowers who possess liquid reserves or steady disposable cash flow. To be approved for a genuine One-Time Settlement, the following criteria must be established:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                    <li>
                      <strong>NPA Delinquency Threshold:</strong> The loan account must have crossed <strong>90 days of continuous non-payment</strong>, classifying it as a Non-Performing Asset (NPA) under RBI Prudential Norms. While in rare circumstances pre-NPA settlements are approved, significant principal haircuts are almost universally restricted to NPA accounts.
                    </li>
                    <li>
                      <strong>Demonstrable Involuntary Hardship:</strong> The inability to pay must arise from legitimate, unavoidable economic shocks—such as involuntary job termination, prolonged medical treatment or hospitalization, commercial business collapse, divorce, or permanent physical disability.
                    </li>
                    <li>
                      <strong>Absence of Liquid Surplus &amp; At-Risk Assets:</strong> The borrower&apos;s bank statements must confirm negligible disposable cash flow after meeting essential family living expenditures (food, housing, medical, education).
                    </li>
                    <li>
                      <strong>Non-Wilful Defaulter Classification:</strong> The borrower must not be classified as a &quot;Wilful Defaulter&quot; under RBI Master Circular DBR.No.CID.BC.22/20.16.003/2015-16. There must be no evidence of fund diversion, fraudulent documentation at the time of loan application, or siphoning of borrowed capital into speculative luxury investments.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Documents Required to Initiate Settlement</h3>
                  <p>
                    Before initiating contact with the bank, you must construct an airtight hardship dossier. Banks are subject to statutory audits by the RBI and statutory auditors; every rupee of debt waived must be backed by documentary justification in the bank&apos;s credit file:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 text-xs sm:text-sm">1. Verifiable Hardship Dossier</strong>
                      <ul className="text-gray-600 space-y-1 list-disc list-inside">
                        <li>Official termination / layoff letter from employer.</li>
                        <li>Hospital discharge summaries, medical diagnosis, surgery bills.</li>
                        <li>Audited P&amp;L showing business insolvency or GST cancellation notice.</li>
                        <li>Death certificate of family primary breadwinner (if applicable).</li>
                      </ul>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 text-xs sm:text-sm">2. Banking &amp; Financial Evidence</strong>
                      <ul className="text-gray-600 space-y-1 list-disc list-inside">
                        <li>Operational bank transaction records covering the most recent half-year to twelve months.</li>
                        <li>Latest Form 16 / ITR filings proving drop in income.</li>
                        <li>Household income vs basic survival expense declaration.</li>
                        <li>Detailed statement of outstanding multi-lender liabilities.</li>
                      </ul>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 text-xs sm:text-sm">3. KYC &amp; Loan Account Records</strong>
                      <ul className="text-gray-600 space-y-1 list-disc list-inside">
                        <li>Self-attested PAN Card and Aadhaar Card.</li>
                        <li>Original Loan Sanction Letter and Sanction Schedule.</li>
                        <li>Comprehensive Loan Statement showing payment history.</li>
                        <li>Copies of all legal notices received (Section 138, Sec 25, recall).</li>
                      </ul>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 text-xs sm:text-sm">4. Formal Legal Representation</strong>
                      <ul className="text-gray-600 space-y-1 list-disc list-inside">
                        <li>Advocate Representation Notice under Advocates Act, 1961.</li>
                        <li>Formal OTS Proposal Letter addressed to Competent Authority.</li>
                        <li>Vakalatnama / Authorization letter empowering legal counsel.</li>
                        <li>Draft consent settlement terms for Lok Adalat / Court disposal.</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">How to Approach the Bank or NBFC</h3>
                  <p>
                    A critical blunder made by defaulting borrowers is attempting to negotiate settlement terms with third-party recovery agents or call-center executives. These agents work on commission quotas and have <em>zero institutional authority</em> to sanction principal waivers or issue No Dues Certificates. To approach the lender properly:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                    <li>
                      <strong>Identify the Stressed Asset Department:</strong> Escalate beyond the originating retail branch. Direct all communications to the <strong>Stressed Asset Resolution Centre (SARC)</strong>, <strong>Specialized Stressed Asset Management Branch (SAMB)</strong>, or the Chief Remedial Manager at the Zonal/Regional Office.
                    </li>
                    <li>
                      <strong>Use Formal Written Channels:</strong> Submit formal representations via <strong>Registered Post with Acknowledgment Due (RPAD)</strong> and through official institutional email channels addressed to the bank&apos;s Principal Nodal Officer (PNO) and Chief Grievance Officer.
                    </li>
                    <li>
                      <strong>Seek Lok Adalat Referral:</strong> Explicitly request that the dispute be referred to the upcoming <strong>National Lok Adalat</strong> organized under the aegis of the National Legal Services Authority (NALSA), where compromise settlements are sanctioned with judicial finality under Section 21 of the Legal Services Authorities Act, 1987.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">How to Negotiate the Settlement Amount</h3>
                  <p>
                    Institutional loan settlement negotiation is an iterative, multi-stage anchoring process. Lenders typically counter initial borrower requests with conservative offers (waiving only 10%–20% of charges). Successful negotiation relies on the following strategic principles:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                    <li>
                      <strong>First Step: 100% Extinguishment of Penal Dues:</strong> Establish firmly that zero penal interest, late payment penalties, or recurring NACH dishonor charges will be entertained. In virtually all genuine OTS cases, banks concede to 100% waiver of non-principal charges.
                    </li>
                    <li>
                      <strong>Anchor on Unamortized Core Principal:</strong> Base all calculations strictly on the core unamortized principal balance at the time of default, discounting all post-delinquency compound interest.
                    </li>
                    <li>
                      <strong>Initial Proposal (25% to 35%):</strong> Propose an opening settlement figure representing 25% to 35% of the principal balance, backed by demonstrable proof of available savings from relatives or emergency funds.
                    </li>
                    <li>
                      <strong>Consensus Band (40% to 55%):</strong> Through professional advocate representation demonstrating lack of attachable assets, most unsecured personal loans stabilize within an agreed settlement band of <strong>40% to 55% of the unamortized principal balance</strong>.
                    </li>
                    <li>
                      <strong>Lump-Sum vs Structured Tranches:</strong> Offering an immediate single-bullet payment within 15 days yields significantly higher haircuts than requesting 3 to 6 monthly installments.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Obtaining a Written Settlement Offer</h3>
                  <div className="p-4 bg-amber-50 border-l-4 border-amber-600 rounded-r-xl text-xs sm:text-sm text-amber-950 space-y-2">
                    <strong>Critical Legal Requirement: The 7 Pillars of a Valid Settlement Letter</strong>
                    <p>
                      Never pay a single rupee based on verbal promises, phone recordings, SMS messages, or informal WhatsApp chats from recovery agents. Payment without an official sanction letter is treated by bank accounting software as routine &quot;part-payment,&quot; leaving the remaining balance open to compounding interest and ongoing legal action.
                    </p>
                    <p>A legally binding OTS Sanction Letter must contain:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-xs">
                      <li>Official bank/NBFC letterhead featuring verified branch address and corporate identity.</li>
                      <li>Unique sanction reference number and official date of issuance.</li>
                      <li>Exact borrower full name and designated loan account number.</li>
                      <li>Sanctioned settlement figure matching agreed negotiation terms precisely.</li>
                      <li>Strict payment due dates (single bullet date or installment schedule).</li>
                      <li>Unambiguous &quot;Full and Final Discharge&quot; clause confirming no further financial claims.</li>
                      <li>Formal undertaking by the lender to terminate ongoing recovery proceedings and deliver an authenticated, physical Certificate of Debt Extinguishment within thirty days of funds realization.</li>
                    </ol>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Making the Settlement Payment</h3>
                  <p>
                    Remit the sanctioned settlement amount strictly through verifiable, traceable banking rails:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                    <li>
                      <strong>Approved Channels:</strong> Remit via <strong>RTGS, NEFT, or Account Payee Demand Draft</strong> made out directly in the name of the lending bank marked with your exact loan account number.
                    </li>
                    <li>
                      <strong>Zero Cash Transfers:</strong> Never hand over physical cash, bearer cheques, or personal UPI transfers to any recovery agent, lawyer, or third-party intermediary.
                    </li>
                    <li>
                      <strong>Adhere to Expiry Deadlines:</strong> Settlement letters carry an explicit validity date (usually 15 to 30 days). Even a 24-hour delay in funds credit can automatically revoke the sanction letter, forfeiting the haircut and reviving the full ledger claim.
                    </li>
                    <li>
                      <strong>Retain Permanent Proof:</strong> Preserve the bank-stamped deposit slip, digital UTR receipt, and bank debit advice permanently in your physical and digital records.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Obtaining the Settlement/Closure Documents</h3>
                  <p>
                    Following funds realization, follow up systematically to procure the final discharge documentation:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                    <li>
                      <strong>No Dues Certificate (NDC) / No Objection Certificate (NOC):</strong> The bank is legally mandated to issue a signed, stamped NDC within 15 to 30 days confirming complete discharge of debt.
                    </li>
                    <li>
                      <strong>Zero-Balance Account Ledger:</strong> Download or collect an updated loan account statement demonstrating that the outstanding balance has been adjusted to ₹0.00.
                    </li>
                    <li>
                      <strong>Return of Post-Dated Cheques / Security Instruments:</strong> If any blank security cheques or physical NACH mandates were submitted at the time of loan disbursement, demand their destruction or physical return with a formal cancellation receipt.
                    </li>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  3. How Personal Loan Settlement Process Works (9-Step In-Depth Roadmap)
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Navigating a compromise settlement requires systematic execution across 9 discrete phases. Missing a single procedural step can derail negotiations or leave you exposed to renewed collection litigation:
                  </p>

                  <div className="space-y-4 my-4">
                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          1
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Step 1: Assess Your Outstanding Loan Ledger</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-9">
                        Download your comprehensive loan account statement from your net banking portal or branch. Deconstruct the total claimed balance into three distinct heads: (a) Unamortized Core Principal, (b) Contracted Regular Interest, and (c) Compounded Penal Charges, Overdue Interest &amp; NACH Dishonor Fees. Knowing the exact principal component establishes your true negotiation baseline, as non-principal charges are universally eligible for 100% waiver.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          2
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Step 2: Establish Legitimate Financial Hardship</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-9">
                        Compile concrete, incontrovertible evidence establishing why contractual EMI servicing is impossible. Gather employer termination notices, medical discharge summaries, hospitalization bills, diagnosis reports, or audited P&amp;L records showing business collapse. Prepare a transparent household budget reflecting survival expenditures versus net household income.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          3
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Step 3: Stop Accumulating Further Debt</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-9">
                        Break the dangerous &quot;debt spiral&quot; trap. Desperate borrowers frequently borrow from high-interest instant fintech apps or credit cards at 36%–48% APR to service past bank EMIs. This escalates insolvency. Cease taking fresh loans immediately. If auto-debit (NACH) mandates continue to bounce, notify the bank in writing of your inability to service EMIs to avoid recurring bounce charges.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          4
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Step 4: Engage With Lender or Appoint Legal Representation</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-9">
                        Engaging directly with aggressive telecallers results in intimidation and misleading verbal promises. Appointing CredSettle&apos;s legal advocates establishes an official legal barrier. Our advocates issue a formal Representation Notice under the Advocates Act, 1961, directing the bank and its collection agencies to cease all direct contact and route communications strictly through our legal desk.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          5
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Step 5: Submit a Formal OTS Proposal</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-9">
                        Draft and submit a structured One-Time Settlement (OTS) petition to the bank&apos;s Stressed Asset Management Branch and Principal Nodal Officer. The petition details your repayment track record, recounts the involuntary hardship timeline, encloses the verified hardship dossier, and tenders a realistic opening lump-sum offer (typically 25%–35% of core principal) supported by third-party financial assistance.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          6
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Step 6: Multi-Round Institutional Negotiation</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-9">
                        Banks almost universally reject initial settlement offers or counter with nominal 10%–20% fee waivers. CredSettle advocates represent you before the bank&apos;s Settlement Advisory Committee or Regional Remedial Head. By demonstrating zero attachable assets, citing RBI compromise directions, and highlighting the prohibitive cost of 3-year civil recovery litigation, we drive the final figure into the optimal 40%–55% principal band.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          7
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Step 7: Verification of the Settlement Letter</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-9">
                        Once terms are sanctioned, the lender generates a formal settlement letter. Our legal team conducts a line-by-line audit: verifying that the document is on authentic bank letterhead, signed by an authorized signatory with appropriate delegated financial powers, features the exact loan account number, specifies the agreed sum without hidden conditions, and explicitly confirms full, final, and unconditional closure.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          8
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Step 8: Execution of Payment via Traceable Banking Rails</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-9">
                        Remit the sanctioned amount directly into the designated loan account via RTGS, NEFT, or Account Payee Demand Draft before the letter&apos;s expiry date. Immediately obtain and secure the stamped bank acknowledgment receipt or digital transaction UTR reference number as legal evidence of complete performance.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">
                          9
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Step 9: Post-Settlement Formalities &amp; Credit Report Update</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-9">
                        Within 15 to 30 days, ensure the bank issues your stamped No Dues Certificate (NDC). Between 45 and 60 days post-settlement, pull your updated credit bureau reports (CIBIL, Experian, CRIF, Equifax) to verify that the loan status has transitioned from delinquent/overdue to &quot;Settled&quot; with a remaining balance of ₹0.00. If discrepancies persist, file a formal dispute attaching your NDC.
                      </p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  4. Why Do People Choose Personal Loan Settlement?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Borrowers do not enter compromise settlements as an investment choice; it is an emergency financial and legal rescue mechanism chosen when continuing full repayments becomes impossible. Understanding the core drivers and trade-offs is essential:
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Involuntary and Unavoidable Financial Hardship</h3>
                  <p>
                    The vast majority of personal loan defaults in India stem from genuine economic shocks rather than bad faith:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                    <li>
                      <strong>Corporate Layoffs &amp; Sudden Loss of Employment:</strong> In an evolving economy with startup consolidation, automation, and corporate downsizings, a sudden job loss deprives a professional of disposable monthly cash flow. Finding comparable employment often takes 6 to 12 months, during which unpaid EMIs compound rapidly.
                    </li>
                    <li>
                      <strong>Severe Medical Emergencies &amp; Critical Illness:</strong> Serious health crises—cancer therapies, organ transplants, cardiovascular surgeries, or extensive post-accident trauma—frequently exhaust health insurance limits and wipe out lifetime savings, diverting all income toward survival.
                    </li>
                    <li>
                      <strong>Commercial Business Failure &amp; Cash-Flow Crises:</strong> Self-employed individuals, traders, and MSME entrepreneurs frequently face client defaults, supply chain collapses, or regulatory disruptions that turn profitable businesses insolvent overnight.
                    </li>
                    <li>
                      <strong>Multi-Lender Debt Cascading:</strong> Borrowers often hold 3 to 5 simultaneous credit facilities across multiple banks and instant digital loan apps. Attempting to service interest across all lenders leads to a total collapse, making coordinated settlement the only path out of chronic debt.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Pros of Personal Loan Settlement</h3>
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                    <strong className="text-sm sm:text-base text-emerald-900 block">Substantial Financial &amp; Psychological Benefits:</strong>
                    <ul className="list-disc pl-5 space-y-1.5 text-emerald-900">
                      <li><strong>Significant Debt Haircut (40% to 65%):</strong> Permanently eliminates a major portion of total claimed dues, bringing repayment within your actual financial capability.</li>
                      <li><strong>100% Extinguishment of Penalties &amp; Bounce Fees:</strong> Completely cancels astronomical compound late payment charges and recurring NACH dishonor penalties.</li>
                      <li><strong>Instant Cessation of Harassment:</strong> Completely halts aggressive recovery agent phone calls, workplace intrusions, and residential visits upon formal sanction.</li>
                      <li><strong>Permanent Legal Protection:</strong> Shields you from civil summary suits (Order 37 CPC), arbitration awards, and criminal proceedings under Section 138 of the NI Act or Section 25 of the PSSA.</li>
                      <li><strong>Definitive Legal Closure:</strong> Yields a stamped No Dues Certificate, confirming that the lender has zero residual claim against your future income or inherited assets.</li>
                    </ul>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Cons of Personal Loan Settlement</h3>
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
                    <strong className="text-sm sm:text-base text-amber-900 block">Trade-Offs and Long-Term Implications:</strong>
                    <ul className="list-disc pl-5 space-y-1.5 text-amber-900">
                      <li><strong>Bureau Account Tagging:</strong> Credit information bureaus annotate the loan account remark with &quot;Settled under Compromise&quot; rather than &quot;Regular Closure&quot;.</li>
                      <li><strong>Credit Score Reduction:</strong> Triggers an immediate dip of 75 to 120 points, reflecting the commercial loss absorbed by the lending institution.</li>
                      <li><strong>7-Year Bureau Retention:</strong> Under Section 20 of the Credit Information Companies (Regulation) Act, settlement tags remain visible on your credit history for up to 7 years (though impact diminishes significantly after 24 months).</li>
                      <li><strong>Mandatory 12-Month RBI Cooling-Off Period:</strong> Under the RBI June 8, 2023 Circular, regulated entities cannot extend fresh credit facilities to settled borrowers for at least 12 months.</li>
                      <li><strong>Need for Ready Liquid Funds:</strong> Requires the borrower to arrange an agreed lump-sum amount (or 2–3 short installments) to execute the settlement.</li>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  5. When is the Right Time to Settle a Personal Loan?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Strategic timing is the decisive factor in securing maximum debt waivers while minimizing legal vulnerability. Initiating settlement discussions at the wrong phase can result in summary rejection or unmanageable legal escalation:
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Days Past Due (DPD) and NPA Classification</h3>
                  <p>
                    Credit bureaus and bank internal risk models track delinquency through <strong>Days Past Due (DPD)</strong> counters. As unpaid days accumulate, loan accounts progress through statutory regulatory stages:
                  </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-gray-700 border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-gray-900 font-bold">
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
                          <td className="p-3">Elevated Risk Capital</td>
                          <td className="p-3 text-amber-600 font-medium">Restructuring possible; principal haircut rejected</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">SMA-2 (Severe Warning)</td>
                          <td className="p-3">61 to 90 Days Overdue</td>
                          <td className="p-3">Impending Default Classification</td>
                          <td className="p-3 text-amber-600 font-medium">Early discussions; minimal haircut sanctioned</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">Sub-Standard NPA (Optimal Window)</td>
                          <td className="p-3 font-bold text-blue-700">91 to 365 Days Overdue</td>
                          <td className="p-3 text-blue-700 font-bold">15% Mandatory Capital Provisioning</td>
                          <td className="p-3 text-emerald-700 font-bold">High (35% to 55% Principal Waiver)</td>
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

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Why Settling Too Early or Too Late Can Work Against You</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                      <strong className="text-red-900 block mb-1 text-sm font-bold">⚠️ The Pitfall of Settling Too Early (0 to 60 Days):</strong>
                      <p className="text-red-800 leading-relaxed">
                        When an account is in SMA-0 or SMA-1, bank internal recovery guidelines strictly prohibit credit committees from granting principal waivers. Credit managers assume you have liquid assets and are merely testing the waters. Asking for a settlement at this stage flags you as a prospective willful defaulter, accelerating collection calls without securing any discount.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <strong className="text-amber-900 block mb-1 text-sm font-bold">⚠️ The Danger of Waiting Too Late (Post-Court Decrees):</strong>
                      <p className="text-amber-800 leading-relaxed">
                        Conversely, delaying settlement until the bank has filed civil suits under Order 37 CPC, obtained an ex-parte arbitration award, or secured a Section 138 summons with non-bailable warrants places you at a severe disadvantage. The bank has already incurred legal expenses and possesses judicial enforcement leverage, making them far less willing to grant substantial haircuts.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl text-xs sm:text-sm text-blue-950 space-y-1.5 my-2">
                    <strong>🎯 The Strategic Sweet Spot: 90 to 180 Days Delinquency &amp; National Lok Adalat</strong>
                    <p>
                      The ideal window to initiate compromise settlement is between <strong>90 and 180 days past due</strong>. The bank has officially classified the asset as an NPA and been forced to allocate 15% capital provisioning, directly impacting its quarterly profitability. Additionally, participating in <strong>National Lok Adalat</strong> cycles (held once every quarter across all Indian states) provides a state-sanctioned forum where banks are under institutional pressure to clear stressed asset backlogs with maximum waiver flexibility.
                    </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">When NOT to Settle a Personal Loan</h3>
                  <p>
                    Settlement is a permanent financial mark. It is NOT advisable if:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                    <li><strong>Your Income Loss is Purely Temporary:</strong> If you face a 1 to 2 month salary delay between jobs, apply for a temporary EMI moratorium or loan tenure extension instead of taking a permanent bureau hit.</li>
                    <li><strong>You Intend to Buy a Home Within 12 to 24 Months:</strong> A &quot;Settled&quot; remark on CIBIL will cause tier-1 banks to reject prime home loan applications during the mandatory cooling-off window.</li>
                    <li><strong>You Possess Liquid Investments or Assets:</strong> If you have mutual funds, fixed deposits, or gold assets that can cover the principal, liquidating them preserves your pristine credit score.</li>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  6. Legal Aspects of Personal Loan Settlement in India
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Defaulting borrowers are routinely subjected to aggressive intimidation by collection agencies, including threats of immediate police arrest, home seizure, and criminal FIRs. Understanding the statutory legal framework under Indian jurisprudence dispels these myths:
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Can You Be Arrested for Not Paying a Personal Loan?</h3>
                  <div className="p-4 sm:p-5 bg-red-50 border-l-4 border-red-600 rounded-r-xl text-xs sm:text-sm text-red-950 space-y-2">
                    <strong className="text-sm sm:text-base text-red-900 block font-bold">Unambiguous Constitutional Law: ABSOLUTELY NOT.</strong>
                    <p>
                      Inability to repay an unsecured personal loan due to poverty, unemployment, or commercial distress is strictly a <strong>CIVIL DISPUTE</strong> governed by the Indian Contract Act, 1872. It does NOT constitute a cognizable criminal offense.
                    </p>
                    <p>
                      Under the constitutional doctrine articulated in <strong>Jolly George Varghese (1980 AIR 470)</strong>, Justice Krishna Iyer ruled that personal liberty under Article 21 shields an impoverished borrower from penal incarceration for bona fide civil contract defaults.<strong>zero statutory authority</strong> to file a criminal complaint, issue station notices, or interrogate a borrower over unpaid personal loan installments.
                    </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Legal Recourse Available to Lenders (4 Legal Pathways)</h3>
                  <p>
                    While criminal arrest for simple default is unlawful, lenders possess legitimate legal instruments under Indian procedural law to enforce recovery:
                  </p>

                  <div className="space-y-3 my-3 text-xs sm:text-sm">
                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">1. Civil Summary Suit under Order 37 of Code of Civil Procedure (CPC), 1908</strong>
                      <p className="text-gray-600 leading-relaxed">
                        Lenders file summary suits in Civil Courts for fast-track recovery based on written debt contracts. The borrower has 10 days to enter appearance and file an application for &quot;Leave to Defend&quot; on grounds of exorbitant interest calculations or unconscionable penalties. Executing a compromise settlement results in mutual disposal under Order 23 Rule 3 of the CPC.
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">2. Arbitration Proceedings under Arbitration and Conciliation Act, 1996</strong>
                      <p className="text-gray-600 leading-relaxed">
                        Standard personal loan agreements incorporate mandatory arbitration clauses. Lenders frequently appoint sole arbitrators unilaterally. Under landmark Supreme Court rulings in <em>TRF Ltd. (2017)</em> and <em>Perkins Eastman Architects DPC (2019)</em>, unilateral appointment of an arbitrator by a lender is legally void ab initio. CredSettle advocates challenge illegal appointments under Section 12(5) and Section 14, converting arbitration hearings into binding Section 30 consent settlements.
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">3. Section 25 of Payment &amp; Settlement Systems Act (PSSA), 2007</strong>
                      <p className="text-gray-600 leading-relaxed">
                        When an electronic auto-debit (e-NACH / ECS mandate) bounces due to insufficient funds, lenders issue a 30-day statutory demand notice followed by a criminal complaint before a Metropolitan Magistrate. This is a bailable offense. Filing a legal reply and executing an OTS quashes the complaint, as offenses under Section 25 are completely compoundable.
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">4. Section 138 of Negotiable Instruments Act, 1881 (Cheque Bounce)</strong>
                      <p className="text-gray-600 leading-relaxed">
                        If a physical post-dated cheque dishonors, the lender serves a 15-day statutory demand notice and files a complaint before a Judicial Magistrate. Section 138 is a quasi-criminal bailable offense. Under Section 147 of the Negotiable Instruments Act and Section 320 of the CrPC, any complaint under Section 138 is 100% compoundable upon mutual compromise, resulting in complete acquittal and case dismissal.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Legal Rights of the Borrower Under Indian Law</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-2">
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1">Right to Privacy &amp; Dignity</strong>
                      <p className="text-gray-600">Guaranteed under K.S. Puttaswamy v. Union of India. Lenders cannot disclose your debt to neighbors, relatives, or employers.</p>
                    </div>
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1">Right to Regulated Contact Hours</strong>
                      <p className="text-gray-600">Under central bank standards, field representatives may communicate strictly between 08:00 AM and 07:00 PM.</p>
                    </div>
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1">Right to Fair Transparent Accounting</strong>
                      <p className="text-gray-600">Borrowers have the statutory right to receive full ledger statements breaking down principal, interest, and penalties.</p>
                    </div>
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1">Right to Legal Representation</strong>
                      <p className="text-gray-600">Pursuant to the Advocates Act of 1961, borrowers retain the statutory entitlement to be represented by an advocate to handle all dispute communications.</p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  7. Dealing With Recovery Agents and Harassment
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    When a personal loan becomes delinquent, banks and NBFCs assign accounts to internal collection teams and third-party recovery agencies (Direct Recovery Agents - DRAs). Understanding the precise legal boundaries governing collection activities empowers you to defend yourself effectively:
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Tactics Used by Recovery Agents</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                    <li><strong>Continuous Calling &amp; Automated Dialers:</strong> High-frequency phone calls from rotating mobile numbers and automated predictive dialer systems designed to create psychological pressure.</li>
                    <li><strong>Unannounced Home &amp; Workplace Field Visits:</strong> Visiting residential addresses or corporate workplaces unannounced to cause social embarrassment.</li>
                    <li><strong>Misleading Legal &amp; Police Notices:</strong> Circulating fake legal notices or WhatsApp messages falsely claiming that a Non-Bailable Warrant (NBW) or Police FIR has been lodged.</li>
                    <li><strong>Third-Party Contact &amp; Shaming:</strong> Calling family members, references, elderly parents, or office HR departments to extract payment through social stigma.</li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">What Recovery Agents Can and Cannot Do (RBI Guidelines)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <strong className="text-emerald-950 block mb-2 font-bold">✓ Strictly Permitted Under Law:</strong>
                      <ul className="space-y-1.5 text-emerald-900 list-disc list-inside">
                        <li>Permitted contact hours are strictly bounded from <strong>08:00 to 19:00 hours</strong>; calls outside this span are regulatory infractions.</li>
                        <li>Possessing valid <strong>DRA Certification</strong> from the Indian Institute of Banking &amp; Finance (IIBF).</li>
                        <li>Carrying official bank identity cards and a signed authorization letter from the lending institution.</li>
                        <li>Maintaining professional, respectful language and respecting personal privacy.</li>
                        <li>Providing an official bank receipt for any payment tendered.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                      <strong className="text-red-950 block mb-2 font-bold">✗ Strictly ILLEGAL Under RBI Directives:</strong>
                      <ul className="space-y-1.5 text-red-900 list-disc list-inside">
                        <li>Calling before 8:00 AM or after 7:00 PM.</li>
                        <li>Contacting relatives, friends, neighbors, or employer HR.</li>
                        <li>Using abusive, threatening, or vulgar language.</li>
                        <li>Trespassing inside your residence without permission.</li>
                        <li>Refusing to show official bank identification or authorization.</li>
                        <li>Sending forged court summons or fake police arrest warrants.</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">What to Do If You Face Harassment</h3>
                  <p>
                    If recovery agents violate RBI Fair Practices Codes, take these immediate protective actions:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                    <li><strong>Record Everything:</strong> Enable automated call recording on your smartphone. Record all incoming recovery calls and preserve timestamps and caller phone numbers.</li>
                    <li><strong>Demand Identity Credentials:</strong> If an agent visits your home, demand to inspect their employee ID card, IIBF DRA certificate, and bank authorization letter. Record the interaction on video if they behave aggressively.</li>
                    <li><strong>Serve an Advocate Representation Notice:</strong> Direct CredSettle advocates to issue a formal representation notice notifying the bank that any further direct agent contact will attract criminal prosecution under IPC/BNS sections.</li>
                  </ol>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">How to File a Formal Complaint Against Recovery Harassment</h3>
                  <p>
                    Follow this statutory 4-tier complaint escalation matrix:
                  </p>
                  <div className="space-y-2.5 my-3 text-xs sm:text-sm">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block font-bold">Level 1: Bank&apos;s Branch Manager &amp; Grievance Redressal Officer (GRO)</strong>
                      <p className="text-gray-600 mt-0.5">Submit a formal written complaint with audio recordings and phone numbers demanding immediate de-allocation of abusive agencies.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block font-bold">Level 2: Principal Nodal Officer (PNO)</strong>
                      <p className="text-gray-600 mt-0.5">If the branch fails to act within 7 days, escalate directly to the lender&apos;s Principal Nodal Officer. Under RBI rules, the PNO has 30 days to resolve the grievance.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block font-bold">Level 3: RBI Integrated Ombudsman (CMS Portal)</strong>
                      <p className="text-gray-600 mt-0.5">
                        File an online complaint at <code className="text-blue-600 font-mono">cms.rbi.org.in</code> or call toll-free helpline 14448 under the <em>Reserve Bank - Integrated Ombudsman Scheme, 2021</em> for deficiency of service and harassment.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block font-bold">Level 4: Police FIR &amp; Cyber Crime Portal</strong>
                      <p className="text-gray-600 mt-0.5">
                        For physical intimidation, extortion, or vulgar abuse, file a police complaint under Section 384 (Extortion), Section 503 (Criminal Intimidation), and Section 506 of the IPC / Bharatiya Nyaya Sanhita, or report online via <code className="text-blue-600 font-mono">cybercrime.gov.in</code>.
                      </p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  8. How Much Can You Settle a Personal Loan For? (With Mathematical Examples)
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    A settlement waiver (commonly referred to in banking circles as the &quot;haircut&quot;) is the percentage of total claimed dues that the lender permanently forgives. To understand how waivers are determined, examine the anatomical structure of delinquent debt:
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Principal, Interest, Penalties and Other Charges</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">1. Penalties &amp; Bounce Fees</strong>
                      <span className="text-emerald-700 font-extrabold text-sm block mb-1">100% Waived</span>
                      <p className="text-gray-600">All late fees, cheque/e-NACH bounce charges, and compounding penal interest are waived upfront in genuine OTS proposals.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">2. Accrued Regular Interest</strong>
                      <span className="text-emerald-700 font-extrabold text-sm block mb-1">70% – 100% Waived</span>
                      <p className="text-gray-600">Contractual interest accrued after default is almost entirely waived during structured committee negotiations.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">3. Core Principal Balance</strong>
                      <span className="text-blue-700 font-extrabold text-sm block mb-1">30% – 60% Waived</span>
                      <p className="text-gray-600">The unamortized principal is discounted based on default age, hardship severity, and demonstrable lack of assets.</p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Factors That Determine the Settlement Percentage</h3>
                  <p>
                    Bank settlement committees do not pick discount percentages arbitrarily. They evaluate six mathematical and institutional variables:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                    <li><strong>NPA Delinquency Vintage:</strong> Loans delinquent for 12 to 24+ months (Doubtful/Loss assets) attract significantly higher haircuts than 90-day defaults, as the bank has already fully provisioned for the loss.</li>
                    <li><strong>Unsecured Nature of Credit:</strong> Because personal loans lack collateral, the bank cannot auction property under SARFAESI, forcing them to accept compromise cash.</li>
                    <li><strong>Verifiable Inability to Pay:</strong> Low average bank balances, zero liquid investments, and joblessness compel the bank to accept achievable settlement sums.</li>
                    <li><strong>Lender Category &amp; Risk Appetite:</strong> Fintech NBFCs settle quickly with moderate haircuts; private banks follow strict committee formulas; PSU banks offer deep discounts during annual compromise drives.</li>
                    <li><strong>Fiscal Calendar Timing:</strong> Quarter-end and fiscal year-end (especially March 15 to March 31) create aggressive pressure on banks to reduce gross NPAs, unlocking peak waiver approvals.</li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Is a 50% Settlement Realistic?</h3>
                  <p>
                    <strong>Yes.</strong> For unsecured personal loans that have crossed 90 to 180 days of non-payment, an overall waiver of <strong>45% to 60% on total ledger dues</strong> is standard industry practice in Indian banking. Recovering 45%–50% in cash today is commercially superior for a bank compared to spending 3–5 years in civil litigation where recovery is uncertain. Beware of agencies promising unrealistic 85%–90% waivers on recent defaults, which are deceptive marketing traps.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Personal Loan Settlement Calculation Scenarios</h3>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-gray-700 border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-gray-900 font-bold">
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
                          <td className="p-3 text-emerald-700 font-bold">₹1,15,000 – ₹1,35,000</td>
                          <td className="p-3 font-semibold">₹2,10,000 – ₹2,30,000</td>
                          <td className="p-3 font-bold text-blue-700">60% – 66%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">₹5,00,000</td>
                          <td className="p-3 text-red-600">₹6,90,000</td>
                          <td className="p-3 text-emerald-700 font-bold">₹2,25,000 – ₹2,60,000</td>
                          <td className="p-3 font-semibold">₹4,30,000 – ₹4,65,000</td>
                          <td className="p-3 font-bold text-blue-700">62% – 67%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">₹10,00,000</td>
                          <td className="p-3 text-red-600">₹14,20,000</td>
                          <td className="p-3 text-emerald-700 font-bold">₹4,50,000 – ₹5,25,000</td>
                          <td className="p-3 font-semibold">₹8,95,000 – ₹9,70,000</td>
                          <td className="p-3 font-bold text-blue-700">63% – 68%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">₹15,00,000</td>
                          <td className="p-3 text-red-600">₹21,50,000</td>
                          <td className="p-3 text-emerald-700 font-bold">₹6,75,000 – ₹7,80,000</td>
                          <td className="p-3 font-semibold">₹13,70,000 – ₹14,75,000</td>
                          <td className="p-3 font-bold text-blue-700">64% – 69%</td>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  9. How Long Does Personal Loan Settlement Take?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    A structured personal loan settlement typically takes <strong>3 to 8 weeks</strong> from initial debt audit to issuance of the official No Dues Certificate. Here is the operational phase breakdown:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">Phase 1: Hardship Audit &amp; Notice (Days 1–7)</strong>
                      <p className="text-gray-600">Comprehensive ledger audit, compilation of medical/job loss evidence, and service of formal Advocate Representation Notice.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">Phase 2: Negotiation &amp; Committee Review (Days 8–21)</strong>
                      <p className="text-gray-600">Direct negotiations with the bank&apos;s Remedial Desk, counter-proposals exchange, and presentation to Settlement Advisory Committee.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">Phase 3: Sanction Letter Issuance (Days 22–35)</strong>
                      <p className="text-gray-600">Bank issues formal stamped OTS Sanction Letter on official letterhead specifying sanctioned figure and payment schedule.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">Phase 4: Payment &amp; NDC Delivery (Days 36–50)</strong>
                      <p className="text-gray-600">Funds remittance via RTGS/NEFT into loan account, payment realization, and delivery of stamped No Dues Certificate (NDC).</p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Timeline Comparison by Lender Type</h3>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-gray-700 border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-gray-900 font-bold">
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
                          <td className="p-3">Automated risk matrices, centralized digital approval desks, fast turnaround on lump-sum settlements.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">Private Sector Banks (HDFC, ICICI, Axis, Kotak)</td>
                          <td className="p-3 font-bold text-blue-700">3 to 6 Weeks (Moderate)</td>
                          <td className="p-3">Structured multi-tier remedial committees, formalized legal vetting, strict documentation requirements.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">Public Sector Banks (SBI, PNB, BoB, Canara)</td>
                          <td className="p-3 font-bold text-amber-700">6 to 10 Weeks (Extended)</td>
                          <td className="p-3">Rigid branch-to-zonal hierarchy, formal committee quorums, deep audit scrutiny, but substantial waivers.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Factors That Can Delay the Process</h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-700">
                    <li>Incomplete or unverified hardship documentation submitted by the borrower.</li>
                    <li>Discrepancies between bank system ledger records and borrower payment history.</li>
                    <li>Accounts tied up in active court proceedings requiring formal legal disposal.</li>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  10. Errors to Avoid When Settling a Personal Loan (10 Critical Pitfalls)
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Distressed borrowers are exceptionally vulnerable to misleading promises and fraudulent debt relief claims. Protect yourself by avoiding these 10 fatal mistakes:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">1. Paying Recovery Agents in Cash</strong>
                      <p className="text-red-800">Never hand over cash or transfer money to personal UPI accounts. Agents pocket funds, and the bank continues to treat your loan as in default.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">2. Accepting Verbal Settlement Promises</strong>
                      <p className="text-red-800">Telecallers promise &quot;pay ₹30,000 and the account will close.&quot; Without a written sanction letter, the bank registers it as a part-payment and resumes recovery.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">3. Settling Without Financial Proof</strong>
                      <p className="text-red-800">Approaching the bank without medical, job-loss, or income-drop records leads to immediate rejection, as auditors mandate documentary hardship proof.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">4. Ignoring Legal Court Notices</strong>
                      <p className="text-red-800">Ignoring Section 138, Section 25, or arbitration notices leads to ex-parte orders or bailable warrants. Always file a formal legal reply through an advocate.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">5. Using Unregistered Agencies</strong>
                      <p className="text-red-800">Beware of unregulated online agencies that charge massive upfront fees without legal representation, failing to deliver valid bank sanction letters.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">6. Borrowing More to Settle Existing Debt</strong>
                      <p className="text-red-800">Taking high-interest loans from payday apps to settle bank loans accelerates insolvency. Settle strictly within your genuine savings or family aid.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">7. Unchecked Settlement Letters</strong>
                      <p className="text-red-800">Failing to verify that the letter explicitly mentions &quot;Full and Final Discharge&quot; leaves loopholes for the bank to sell the residual debt to asset reconstruction firms.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">8. Missing the Payment Deadline</strong>
                      <p className="text-red-800">Sanction letters carry strict validity periods (typically 15 to 30 days). Even a 24-hour delay voids the settlement, reinstating the full claimed balance.</p>
                    </div>

                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-900 block mb-1 font-bold text-xs sm:text-sm">9. Not Collecting the No Dues Certificate</strong>
                      <p className="text-red-800">Never consider a settlement complete until you have the physical, stamped No Dues Certificate (NDC) issued by the bank in your hands.</p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  11. Impact of Personal Loan Settlement on CIBIL Score &amp; Credit Rebuilding
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Credit bureau transparency is critical. Under the Credit Information Companies (Regulation) Act (CICRA), 2005, lenders must report the exact repayment performance to all four authorized credit bureaus: TransUnion, Experian, Equifax, and CRIF:
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">How Settlement is Reported: &quot;Settled&quot; vs &quot;Written Off&quot; vs &quot;Closed&quot;</h3>
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

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">How Long Does the &quot;Settled&quot; Status Stay on Your Credit Report?</h3>
                  <p>
                    Under CICRA regulations, credit bureaus retain negative payment records and settlement remarks for <strong>up to 7 years</strong>. However, the score impact is not static. Its weight diminishes sharply after 12 to 24 months if new credit lines are managed with 100% on-time discipline. Furthermore, if your financial condition improves, you can approach the settling bank in the future, pay the previously waived differential amount, and obtain an updated <strong>&quot;CLOSED&quot;</strong> status.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">How to Rebuild Your CIBIL Score After Settlement (CredSettle 4-Step Plan)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1 text-xs sm:text-sm">Step 1: Verify Zero Overdue (Month 1–2)</strong>
                      <p className="text-gray-600">Pull your bureau reports 60 days post-settlement. Verify that the outstanding overdue balance shows ₹0.00 to stop negative score compounding.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1 text-xs sm:text-sm">Step 2: Avail a Secured Credit Card (Month 3–6)</strong>
                      <p className="text-gray-600">Open a Fixed-Deposit (FD) backed credit card (FD of ₹25,000–₹50,000) from banks like IDFC FIRST, Kotak, or ICICI. No income proof required.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1 text-xs sm:text-sm">Step 3: Maintain Utilization &lt; 20% (Month 6–12)</strong>
                      <p className="text-gray-600">Use the card for modest grocery and utility expenses, keeping utilization below 20%. Always pay the total bill 5 days before due date.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block mb-1 text-xs sm:text-sm">Step 4: Restore 750+ CIBIL Rating (Month 12–24)</strong>
                      <p className="text-gray-600">12 to 18 months of disciplined secured repayments pushes your CIBIL score back into the 750+ prime band, unlocking fresh loans.</p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  12. Alternatives to Personal Loan Settlement
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Before committing to a compromise settlement, evaluate all debt resolution alternatives to ensure you select the optimal strategy for your financial profile:
                  </p>

                  <div className="space-y-3 my-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">1. Loan Restructuring (RBI Guidelines)</strong>
                      <p className="text-gray-600">
                        Under RBI Resolution Frameworks, lenders can modify loan terms without forgiving principal. This includes extending tenure from 3 to 5 years (lowering monthly EMIs), granting a 3 to 6-month moratorium on principal, or converting accrued interest into a Funded Interest Term Loan (FITL). Ideal for borrowers experiencing temporary salary delays who expect full earnings recovery.
                      </p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">2. Debt Consolidation Loan</strong>
                      <p className="text-gray-600">
                        Combining multiple personal loans and credit cards into a single lower-interest secured or unsecured loan. This replaces 4–5 chaotic monthly payments with a single predictable EMI. However, it requires a healthy credit score (720+) and steady disposable income; insolvent borrowers will not qualify.
                      </p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">3. Personal Loan Balance Transfer</strong>
                      <p className="text-gray-600">
                        Transferring an existing high-cost personal loan (16%–22% APR) to a competitive lender offering lower interest rates (10.5%–12.5%). This reduces interest outgo, but is exclusively available to non-delinquent borrowers with unblemished credit records.
                      </p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">4. Liquidating Assets or Borrowing From Family</strong>
                      <p className="text-gray-600">
                        Utilizing gold loans (which offer lower interest rates due to physical collateral), withdrawing an employee provident fund (EPF) non-refundable advance under EPFO Form 31, or securing soft interest-free loans from immediate family. This prevents credit bureau damage and avoids a &quot;Settled&quot; remark.
                      </p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">5. Technical Write-Off vs Compromise Settlement</strong>
                      <p className="text-gray-600">
                        A critical distinction: A <em>Technical Write-Off</em> is an internal accounting maneuver by a bank to remove bad debts from its balance sheet for tax efficiency; the borrower remains 100% legally liable and recovery actions continue. In contrast, a <em>Compromise Settlement (OTS)</em> permanently extinguishes the borrower&apos;s legal obligation.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Comprehensive Comparison Table</h3>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-gray-700 border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-gray-900 font-bold">
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
                          <td className="p-3 font-semibold text-blue-700">Personal Loan Settlement (OTS)</td>
                          <td className="p-3 text-emerald-700 font-bold">Yes (30% to 60% Haircut)</td>
                          <td className="p-3 text-amber-700 font-semibold">&quot;Settled&quot; Status</td>
                          <td className="p-3">90+ DPD NPA, Severe Involuntary Distress</td>
                          <td className="p-3">Insolvent borrowers, job loss, unmanageable debt</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Loan Restructuring</td>
                          <td className="p-3 text-red-600 font-bold">No (Tenure Extended)</td>
                          <td className="p-3 text-amber-600">&quot;Restructured&quot; Status</td>
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
                          <td className="p-3">Borrowers seeking lower monthly interest costs</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Technical Write-Off</td>
                          <td className="p-3 text-red-600 font-bold">No (Bank Internal Action)</td>
                          <td className="p-3 text-red-700 font-semibold">&quot;Written Off&quot; Status</td>
                          <td className="p-3">Bank Internal Decision (100% Provisioned)</td>
                          <td className="p-3">Unresolved delinquent loans where recovery continues</td>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  13. Role of a Legal Advisor / Debt Settlement Company
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Attempting to negotiate directly with institutional bank recovery departments places an unrepresented individual at a severe disadvantage. Practicing banking law advocates provide vital legal shields and negotiation leverage:
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Why Professional Legal Guidance Matters</h3>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                    <li>
                      <strong>Statutory Protection Under the Advocates Act, 1961:</strong> When an advocate serves a formal notice of appearance, lenders and recovery agencies are legally required to communicate through legal counsel, immediately halting harassment of the borrower.
                    </li>
                    <li>
                      <strong>Leveling the Institutional Playing Field:</strong> Banks employ specialized legal and recovery teams. Having senior advocates representing you ensures that RBI circulars, insolvency jurisprudence, and consumer court precedents are leveraged to maximize waivers.
                    </li>
                    <li>
                      <strong>Defense Against Section 138 &amp; Section 25 Notices:</strong> Legal counsel drafts professional, timely statutory replies to cheque bounce and e-NACH bounce notices, protecting you from ex-parte criminal summons.
                    </li>
                    <li>
                      <strong>Challenging Unilateral Arbitration:</strong> Advocates challenge illegally appointed sole arbitrators under Section 11 and Section 12(5) of the Arbitration Act, converting proceedings into consensual Lok Adalat awards.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">What a Legitimate Debt Settlement Company Does</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">Debt &amp; Hardship Portfolio Audit</strong>
                      <p className="text-gray-600">Conducts a forensic analysis of your loan ledger, segregating core principal from excessive penalties and assembling medical/job-loss dossiers.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">Direct Committee Negotiation</strong>
                      <p className="text-gray-600">Bypasses external telecallers to negotiate directly with Stressed Asset Resolution Heads and Lok Adalat benches for 40%–60% waivers.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">Legal Sanction Letter Vetting</strong>
                      <p className="text-gray-600">Scrutinizes the bank&apos;s settlement letter to ensure it contains full-and-final discharge clauses with zero conditional loopholes.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">Guaranteed NDC Delivery &amp; CIBIL Audit</strong>
                      <p className="text-gray-600">Follows up until the stamped No Dues Certificate is secured and verifies accurate reporting across credit bureaus.</p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Red Flags: How to Identify Fraudulent Debt Settlement Agencies</h3>
                  <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl text-xs sm:text-sm text-red-950 space-y-2">
                    <strong className="text-red-900 block font-bold">⚠️ Warning: Protect Yourself from Fraudulent Agencies</strong>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-red-900">
                      <li><strong>Demanding Settlement Money into Their Own Accounts:</strong> A legitimate firm NEVER asks you to transfer settlement funds to their company account. All payments must be made directly to the lending bank.</li>
                      <li><strong>Promising &quot;100% CIBIL Score Clean-Up&quot;:</strong> Any agency claiming they can &quot;delete settlement tags&quot; or &quot;erase CIBIL history&quot; is running an illegal scam. Bureau reporting is strictly automated under CICRA.</li>
                      <li><strong>Guaranteeing 90% Discounts:</strong> Promising 90% waivers on 1-month-old loans is deceptive marketing. Real bank haircuts range from 35% to 60%.</li>
                      <li><strong>Operating Without Verified Advocates:</strong> Debt settlement without practicing advocates enrolled with the Bar Council lacks legal standing before courts and bank committees.</li>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  14. CredSettle&apos;s Personal Loan Settlement Services
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    CredSettle delivers end-to-end legal and financial representation to safeguard distressed personal loan borrowers across India. Our 5-pillar service framework guarantees total legal protection:
                  </p>

                  <div className="space-y-3 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-blue-900 block mb-1 text-sm font-bold">1. Free Comprehensive Debt Assessment</strong>
                      <p className="text-gray-600">
                        Our banking specialists conduct a forensic audit of your loan agreements, ledger balances, and CIBIL reports to identify unamortized principal, eliminate compounding penal charges, and calculate your exact optimal settlement range.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-blue-900 block mb-1 text-sm font-bold">2. Anti-Harassment Legal Protection</strong>
                      <p className="text-gray-600">
                        Upon onboarding, our advocates serve formal Representation Notices under the Advocates Act, 1961, directing lenders and recovery agencies to halt direct phone calls and home visits, establishing an impenetrable legal barrier.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-blue-900 block mb-1 text-sm font-bold">3. End-to-End Negotiation with Banks and NBFCs</strong>
                      <p className="text-gray-600">
                        We bypass frontline telecallers and negotiate directly with Chief Remedial Managers, Stressed Asset Resolution Branches (SARB), and National Lok Adalat benches to achieve maximum legal haircuts (40% to 65%).
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-blue-900 block mb-1 text-sm font-bold">4. Written Settlement Letter Verification</strong>
                      <p className="text-gray-600">
                        Our legal team reviews the bank&apos;s official OTS Sanction Letter line by line, ensuring strict compliance with RBI directives, proper authorization, and ironclad full-and-final discharge clauses before you disburse a single rupee.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-blue-900 block mb-1 text-sm font-bold">5. Post-Settlement Support and Credit Guidance</strong>
                      <p className="text-gray-600">
                        We ensure prompt delivery of your stamped No Dues Certificate (NDC), verify that credit bureaus record ₹0.00 outstanding dues, and provide a personalized 4-step credit rehabilitation roadmap to rebuild a 750+ CIBIL score.
                      </p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  15. RBI Guidelines Governing Personal Loan Settlement (Framework 2023–2026)
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under the central bank's June 2023 notification on retail compromise frameworks (Circular DOR.STR.REC.20/21.04.048/2023-24), scheduled lending institutions and non-banking finance firms are bound by uniform governance rules for resolving distressed term loan accounts.</p>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">Key Provisions of the June 2023 Circular</h3>
                  <div className="space-y-3 my-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">1. Mandatory Board-Approved Compromise Policy</strong>
                      <p className="text-gray-600">Every regulated lender must maintain a comprehensive, board-approved compromise policy establishing objective criteria for evaluating hardship, minimum haircut thresholds, and standardized procedures.</p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">2. Delegation of Financial Powers</strong>
                      <p className="text-gray-600">To prevent arbitrary favoritism, the authority sanctioning a compromise settlement must be at least one administrative tier higher than the authority that sanctioned the initial loan facility.</p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">3. Objective Valuation of Net Realizable Assets</strong>
                      <p className="text-gray-600">Settlements must be based on a realistic assessment of the borrower&apos;s current financial capacity and net realizable asset value rather than coercive recovery tactics.</p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">4. Mandatory Cooling-Off Period for Fresh Borrowing</strong>
                      <p className="text-gray-600">The circular prescribes a mandatory minimum cooling-off period of <strong>at least 12 months</strong> before a regulated lender can sanction fresh credit facilities to borrowers who have executed compromise settlements.</p>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1 font-bold">5. Treatment of Wilful Defaulters and Fraud Accounts</strong>
                      <p className="text-gray-600">The framework clarifies that regulated entities can enter into compromise settlements with accounts classified as fraud or wilful default subject to Board approval and <em>strictly without prejudice to ongoing criminal proceedings</em>, ensuring public transparency.</p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  16. Documents Required for Personal Loan Settlement: Complete Checklist
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Assemble this complete four-part documentation dossier before initiating settlement proceedings to ensure swift approval:
                  </p>

                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-gray-700 border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-gray-900 font-bold">
                        <tr>
                          <th className="p-3">Category</th>
                          <th className="p-3">Mandatory Documents</th>
                          <th className="p-3">Purpose &amp; Audit Requirement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">1. Identity &amp; Address Proof</td>
                          <td className="p-3">PAN Card, Aadhaar Card, Passport, or Voter ID</td>
                          <td className="p-3">Statutory KYC verification and authentic borrower identification.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">2. Loan Account Records</td>
                          <td className="p-3">Loan Sanction Letter, Agreement Copy, Latest Statement of Account</td>
                          <td className="p-3">Establishing unamortized principal, contractual interest, and penalty charges.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">3. Income &amp; Financial Proof</td>
                          <td className="p-3">Bank account statements for the preceding 6 to 12 months, salary slips, Form 16, or ITR copies</td>
                          <td className="p-3">Demonstrating lack of liquid disposable surplus to satisfy bank audit tests.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-blue-700">4. Hardship-Specific Proof</td>
                          <td className="p-3">Layoff/termination letter, hospital discharge summaries, medical bills, GST cancellation</td>
                          <td className="p-3">Legally proving involuntary financial collapse under RBI compromise guidelines.</td>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  17. What Happens After Personal Loan Settlement?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Following payment execution, critical operational milestones must be monitored across three distinct time horizons:
                  </p>

                  <div className="space-y-3 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950">
                      <strong className="block mb-1 text-sm font-bold text-emerald-900">Immediate Next Steps (0 to 30 Days):</strong>
                      <p>
                        Remit funds strictly via RTGS/NEFT into the loan account. Obtain the bank-stamped deposit counterfoil or UTR receipt. Follow up systematically until the bank issues the official stamped <strong>No Dues Certificate (NDC)</strong> confirming complete discharge of all liabilities.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="block mb-1 text-sm font-bold text-gray-900">Medium-Term Actions (1 to 6 Months):</strong>
                      <p>
                        Log in to net banking to verify that the loan account ledger reflects an exact balance of ₹0.00. Pull your updated credit bureau reports (CIBIL, Experian, CRIF, Equifax) after 45 to 60 days. Ensure the status reflects &quot;Settled&quot; with zero remaining overdue balance. If the bank fails to update the bureau, lodge a formal dispute attaching your NDC.
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-blue-950">
                      <strong className="block mb-1 text-sm font-bold text-blue-900">Long-Term Outlook (1 to 3 Years):</strong>
                      <p>
                        Initiate credit score rehabilitation by opening an FD-backed secured credit card. Maintain strict payment discipline and credit utilization below 20%. Within 18 to 24 months, your credit score will recover into the 750+ prime band, unlocking fresh loans at standard market interest rates.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2">What If Recovery Calls Continue Post-Settlement?</h3>
                  <p>
                    Occasionally, outsourced collection agencies continue calling post-settlement due to internal database sync delays. Simply present a digital copy of your stamped OTS Sanction Letter and payment receipt. If harassment persists, CredSettle issues an immediate contempt and cease-and-desist notice to the bank&apos;s legal head, compelling immediate blacklisting of the agency.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* OTS Calculator Section Matching loan-settlement               */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-calculator" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CALCULATOR TOOL
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  Personal Loan Settlement (OTS) Savings Calculator
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                  Estimate your approximate settlement payable band and potential waiver based on total dues and default age:
                </p>

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

                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed italic">
                    *Disclaimer: Estimations based on RBI compromise guidelines and standard banking write-off trends. Actual terms depend on bank settlement committee approvals.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 18. Personal Loan Settlement FAQs (18 FAQs)                   */}
              {/* ------------------------------------------------------------- */}
              <section id="personal-loan-settlement-faqs" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 18
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  18. Frequently Asked Questions About Personal Loan Settlement
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                  Crucial legal, operational, and financial guidance regarding unsecured personal term loan resolution in India:
                </p>

                <div className="space-y-2.5 sm:space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = expandedFaq === index;
                    return (
                      <div key={index} className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all bg-white">
                        <button
                          onClick={() => setExpandedFaq(isOpen ? null : index)}
                          className="w-full flex justify-between items-center text-left p-3.5 sm:p-4 md:p-5 font-bold text-xs sm:text-sm md:text-base text-gray-900 hover:text-blue-700 hover:bg-slate-50 transition-colors"
                        >
                          <span className="pr-2">{index + 1}. {faq.question}</span>
                          <span className={`ml-2 text-blue-600 transition-transform duration-200 flex-shrink-0 text-xs ${isOpen ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-3.5 pb-4 sm:px-4 sm:pb-5 md:px-5 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-2.5 sm:pt-3 bg-slate-50/50">
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
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                    CredSettle’s advocates safeguard your legal rights under RBI guidelines, stop collection harassment immediately, and negotiate the maximum legal waiver for your personal loans.
                  </p>
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
          <div className="lg:w-[15%] flex-shrink-0 hidden lg:block">
            <div className="sticky top-20 space-y-4">

              <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-blue-200 text-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center text-sm mb-2">
                  🛡️
                </span>
                <h4 className="font-bold text-xs text-gray-900 mb-1">Stop EMI Harassment</h4>
                <p className="text-[10px] text-gray-600 mb-3 leading-tight">
                  Statutory legal defense halts workplace calls and recovery home visits within 24–48 hours.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-[11px]"
                >
                  Request Call Back
                </Link>
                <div className="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-gray-500 space-y-1 text-left">
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% Confidential</p>
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> RBI Fair Code</p>
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> Bank Sanctions</p>
                </div>
              </div>

              {/* OTS Calculator Quick Jump Badge */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-slate-700">
                <span className="font-bold text-slate-900 block text-[11px]">Personal Loan OTS Tool</span>
                <p className="text-[10px] text-slate-500 leading-tight">Calculate realistic principal haircuts and penal interest waivers for personal loans.</p>
                <a href="#settlement-calculator" className="text-[10px] text-blue-600 font-semibold block pt-1 hover:underline">Calculate Term Loan Savings ↓</a>
              </div>

            </div>
          </div>

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
          className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 text-xs font-bold p-2.5 rounded-full shadow-md active:scale-95 transition-transform flex items-center justify-center w-10 h-10"
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
