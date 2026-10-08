'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';

export default function LoanSettlementPageClient() {
  const [activeId, setActiveId] = useState<string>('introduction');
  const [isMobile, setIsMobile] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [tocSearch, setTocSearch] = useState('');
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Calculator State
  const [totalOutstanding, setTotalOutstanding] = useState<number>(600000);
  const [principalOutstanding, setPrincipalOutstanding] = useState<number>(400000);
  const [penalInterest, setPenalInterest] = useState<number>(200000);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(50000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(35000);
  const [defaultMonths, setDefaultMonths] = useState<number>(8);

  useEffect(() => {
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

  // Master 25-Point Navigation
  const navModules = [
    {
      moduleTitle: 'Module 1: Settlement Fundamentals',
      links: [
        { id: 'introduction', label: '1. Introduction to Loan Settlement' },
        { id: 'how-loan-settlement-works', label: '2. How Loan Settlement Works' },
        { id: 'who-can-opt-for-settlement', label: '3. Who Can Opt for Settlement?' },
        { id: 'types-of-loans-settled', label: '4. Types of Loans That Can Be Settled' },
        { id: 'settlement-vs-restructuring', label: '5. Settlement vs Restructuring' },
      ]
    },
    {
      moduleTitle: 'Module 2: RBI Framework & Legal Protection',
      links: [
        { id: 'rbi-guidelines-settlement', label: '6. RBI Guidelines on Compromise Settlement' },
        { id: 'rbi-guidelines-recovery-agents', label: '7. RBI Guidelines for Recovery Agents' },
        { id: 'settlement-amount-factors', label: '8. How Much Can a Loan Be Settled For?' },
        { id: 'how-to-negotiate-settlement', label: '9. How to Negotiate the Best Settlement' },
        { id: 'legal-rights-borrowers', label: '10. Legal Rights of Borrowers' },
        { id: 'bank-legal-actions', label: '11. Legal Actions Lenders Can Take' },
        { id: 'legal-complications', label: '12. Legal Complications & Agreements' },
      ]
    },
    {
      moduleTitle: 'Module 3: CIBIL Score & Rebuilding Credit',
      links: [
        { id: 'cibil-credit-score-impact', label: '13. Impact on CIBIL & Credit Score' },
        { id: 'after-loan-settlement', label: '14. What Happens After Settlement' },
        { id: 'loans-after-settlement', label: '15. Can You Get a Loan After Settlement?' },
      ]
    },
    {
      moduleTitle: 'Module 4: Safety, Scams & Checklists',
      links: [
        { id: 'recovery-harassment-remedies', label: '16. Recovery Agent Harassment Defense' },
        { id: 'documents-required', label: '17. Documents Required for Settlement' },
        { id: 'verify-genuine-offer', label: '18. How to Verify a Genuine OTS Offer' },
        { id: 'common-settlement-mistakes', label: '19. Common Loan Settlement Mistakes' },
      ]
    },
    {
      moduleTitle: 'Module 5: Cases, Costs, Calculator & FAQs',
      links: [
        { id: 'settlement-case-examples', label: '20. Practical Settlement Case Examples' },
        { id: 'settlement-costs-fees', label: '21. Settlement Costs & Professional Fees' },
        { id: 'settlement-calculator', label: '22. Loan Settlement Calculator' },
        { id: 'legal-remedies-assistance', label: '23. Legal Remedies & Professional Help' },
        { id: 'faqs', label: '24. Comprehensive Loan Settlement FAQs' },
        { id: 'conclusion', label: '25. Conclusion & Action Plan' },
      ]
    }
  ];

  const allNavLinks = useMemo(() => navModules.flatMap(m => m.links), [navModules]);

  const currentChapter = useMemo(() => {
    return allNavLinks.find((l) => l.id === activeId) || allNavLinks[0];
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

    let waiverFactorMin = 0.35;
    let waiverFactorMax = 0.55;

    if (months >= 12) {
      waiverFactorMin = 0.50;
      waiverFactorMax = 0.70;
    } else if (months >= 6) {
      waiverFactorMin = 0.40;
      waiverFactorMax = 0.60;
    }

    const estimatedMinPayable = Math.round(principal * (1 - (waiverFactorMin * 0.4)) + (charges * 0.15));
    const estimatedMaxPayable = Math.round(principal * (1 - (waiverFactorMax * 0.2)) + (charges * 0.40));

    const estLow = Math.min(estimatedMinPayable, total * 0.75);
    const estHigh = Math.min(estimatedMaxPayable, total * 0.85);

    const disposable = Math.max(0, income - expenses);

    return {
      total,
      principal,
      charges,
      disposable,
      estLow: Math.max(estLow, principal * 0.4),
      estHigh: Math.max(estHigh, principal * 0.6),
      estimatedSavingsLow: Math.max(0, total - estHigh),
      estimatedSavingsHigh: Math.max(0, total - estLow),
    };
  }, [totalOutstanding, principalOutstanding, penalInterest, monthlyIncome, monthlyExpenses, defaultMonths]);

  const faqs = [
    {
      question: 'What is loan settlement?',
      answer: 'Loan settlement (One-Time Settlement or OTS) is a formal negotiated agreement between a financially distressed borrower and a lender (bank or NBFC). Under this arrangement, the lender agrees to accept a lump-sum or staged amount that is less than the total outstanding balance, extinguishing the remaining balance and closing the account.'
    },
    {
      question: 'Is loan settlement legal in India?',
      answer: 'Yes, loan settlement is entirely legal in India. It is governed and recognized by the Reserve Bank of India (RBI) under the "Framework for Compromise Settlements and Technical Write-offs" (Circular DOR.STR.REC.20/21.04.048/2023-24) and the Prudential Framework for Resolution of Stressed Assets.'
    },
    {
      question: 'Is loan settlement safe?',
      answer: 'Loan settlement is completely safe when executed formally through official banking channels. You must only make payments directly into your registered loan account after receiving a physical or verified digital Settlement Sanction Letter from an authorized bank officer on official bank letterhead. Never pay cash or transfer funds into third-party personal accounts.'
    },
    {
      question: 'How does loan settlement work?',
      answer: 'The process involves assessing genuine financial hardship, communicating inability to pay due to valid reasons (job loss, business failure, medical emergency), negotiating with the bank\'s collections or Stressed Asset Recovery Branch, receiving an official written settlement sanction letter, paying the agreed amount via authorized bank channels, and receiving a No Dues Certificate (NOC).'
    },
    {
      question: 'How much can a loan be settled for?',
      answer: 'There is no fixed statutory waiver percentage. In unsecured debts like credit cards and personal loans, settlements typically conclude at 30% to 60% of the total outstanding dues depending on the age of default, the principal component, penal interest accumulated, and documented hardship.'
    },
    {
      question: 'Can I settle my personal loan?',
      answer: 'Yes. Personal loans from commercial banks and NBFCs are unsecured and represent one of the most common debt categories resolved through compromise settlements when regular EMI payments become impossible.'
    },
    {
      question: 'Can I settle my credit card?',
      answer: 'Yes. Credit cards carry exorbitant finance charges (36% to 48% APR) and compounding penal fees. Banks routinely offer substantial waivers on accumulated charges during one-time settlements for default cards.'
    },
    {
      question: 'Can I settle an NBFC loan?',
      answer: 'Yes. All RBI-registered Non-Banking Financial Companies (NBFCs) are mandated to maintain transparent, Board-approved compromise settlement policies aligned with RBI circulars.'
    },
    {
      question: 'Can I settle a vehicle loan?',
      answer: 'Vehicle loans are secured by hypothecation of the vehicle. Lenders generally possess the legal right to repossess and auction the asset. Settlements on vehicle loans typically occur only if there is an uncovered deficiency balance following auction, or if the vehicle is untraceable/damaged.'
    },
    {
      question: 'Does loan settlement affect CIBIL?',
      answer: 'Yes. The lender reports the account to CIBIL and other credit bureaus as "Settled" or "Post Write-Off Settled" instead of "Closed". This negative status drops your credit score and remains recorded on your credit history for up to 7 years.'
    },
    {
      question: 'How long does loan settlement take?',
      answer: 'A structured loan settlement usually takes between 3 weeks to 3 months. The duration depends on the bank\'s internal approval delegation committee, whether the account is in NPA stage 1, 2, or 3, and whether legal notices are already active.'
    },
    {
      question: 'Can a bank reject settlement?',
      answer: 'Yes. Banks are under no legal obligation to settle. If their internal investigation reveals sufficient liquid assets, active salary credits, or suspected willful default, they can reject the proposal and pursue civil or arbitration recovery.'
    },
    {
      question: 'Can a bank take legal action after settlement?',
      answer: 'No, provided you fulfill all payments stipulated in the official settlement agreement within the prescribed timelines. Under the Indian Contract Act (Accord and Satisfaction), completing the agreed terms extinguishes the creditor\'s claim.'
    },
    {
      question: 'Can I get a loan after settlement?',
      answer: 'Not immediately from prime lenders. Under RBI norms, there is a cooling-off period (at least 12 months) before the settling bank can consider fresh credit. Borrowers can rebuild credit over 24-36 months using secured credit cards backed by fixed deposits.'
    },
    {
      question: 'What happens after settlement?',
      answer: 'Once payment is completed, the bank withdraws pending recovery calls and legal notices, cancels Section 138/arbitration filings, issues a formal No Dues Certificate (NOC), and updates the credit bureau records within 30-45 days.'
    },
    {
      question: 'How do I get an NOC?',
      answer: 'After clearing the settlement payment, submit the transaction receipt with the settlement letter to the branch or designated nodal officer. The bank is required to issue the formal No Dues Certificate within 15 to 30 working days.'
    },
    {
      question: 'Can recovery agents visit my home?',
      answer: 'Under RBI Fair Practices Code, authorized agents may visit only between 8:00 AM and 7:00 PM. They must carry official ID cards and bank authorization letters, maintain professional decorum, and cannot intimidate, shout, or breach your privacy.'
    },
    {
      question: 'What should I do if recovery agents harass me?',
      answer: 'Document all evidence (record phone calls, save WhatsApp threats, note agent details). File an immediate written complaint to the bank\'s Principal Nodal Officer (PNO). If unaddressed within 30 days, escalate to the RBI Banking Ombudsman (CMS Portal) and file a police complaint under applicable provisions of law.'
    },
    {
      question: 'Can I negotiate directly with the bank?',
      answer: 'Yes, you can approach the bank\'s Stressed Assets Recovery Branch or branch manager in person. However, many borrowers find legal and financial advisory firms helpful to buffer against aggressive recovery harassment and ensure legally binding settlement agreements.'
    },
    {
      question: 'Should I hire a lawyer for loan settlement?',
      answer: 'Consulting legal counsel is strongly recommended if you have received formal court summons, Section 138 (cheque bounce) notices, Section 25 (e-mandate bounce) notices, or arbitration notices, to ensure that legal replies are formally filed and prevent ex-parte orders.'
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
    <>
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
          <nav className="flex text-xs sm:text-sm text-gray-500 overflow-x-auto no-scrollbar" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 whitespace-nowrap">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-800 md:ml-2">Loan Settlement in India</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Trust & E-E-A-T Signal Banner */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-3 sm:px-4 border-b border-slate-800 text-[11px] sm:text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-600 text-white font-semibold px-2 py-0.5 rounded text-[10px] sm:text-xs">LEGAL ADVISORY</span>
            <span className="leading-tight">Reviewed by Senior Banking Law Advocates &amp; Specialists</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400 text-[10px] sm:text-xs">
            <span>Last Updated: October 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>RBI Circular DOR.STR.REC.20/21.04.048/2023-24</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="w-full max-w-[1600px] xl:max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8">
        
        {/* Mobile Sticky Chapter Indicator & Dropdown Action Bar */}
        <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs -mx-3 sm:-mx-4 px-3 sm:px-4 py-2 mb-4 sm:mb-6">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => setIsMobileTocOpen(true)}
              className="flex-1 flex items-center justify-between bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-950 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors active:scale-98 min-w-0"
              aria-label="Open Chapter Directory"
            >
              <span className="truncate pr-1 text-left flex items-center gap-1">
                <span>📖</span>
                <span className="text-blue-700 font-bold">{currentChapter.label.split('.')[0]}.</span>
                <span className="truncate text-gray-800">{currentChapter.label.split('.').slice(1).join('.').trim()}</span>
              </span>
              <span className="text-[10px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded-md flex-shrink-0 ml-1">
                Menu ▾
              </span>
            </button>
            <a
              href="#settlement-calculator"
              className="bg-slate-900 text-white hover:bg-slate-800 text-[11px] font-bold px-2.5 py-1.5 rounded-xl flex-shrink-0 flex items-center gap-1 shadow-xs active:scale-95 transition-transform"
            >
              <span>🧮</span> <span className="hidden xs:inline">OTS</span> Calc
            </a>
          </div>

          {/* Swipeable Module Filter Chips */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar mt-2 pt-1 border-t border-gray-100" ref={mobileNavRef}>
            {navModules.map((m, idx) => {
              const hasActiveLink = m.links.some(l => l.id === activeId);
              return (
                <button
                  key={idx}
                  onClick={() => {
                    const firstLink = m.links[0];
                    if (firstLink) {
                      handleLinkClick(firstLink.id);
                    }
                  }}
                  className={`text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap font-medium transition-all ${
                    hasActiveLink
                      ? 'bg-blue-600 text-white font-bold shadow-xs'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  M{idx + 1}: {m.moduleTitle.split(':')[1]?.trim() || m.moduleTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Slide-Over / Bottom Sheet Chapter Drawer Modal */}
        {isMobileTocOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
              onClick={() => setIsMobileTocOpen(false)}
            />
            
            {/* Bottom Sheet Modal */}
            <div className="relative z-10 bg-white rounded-t-3xl max-h-[85vh] flex flex-col shadow-2xl border-t border-slate-200 animate-in slide-in-from-bottom duration-200">
              
              {/* Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider">Quick Navigation</span>
                  <h3 className="text-base font-bold text-black">Table of Contents (25 Chapters)</h3>
                </div>
                <button
                  onClick={() => setIsMobileTocOpen(false)}
                  className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close chapter menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Search Input */}
              <div className="p-3 border-b border-gray-100 bg-gray-50/70">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search chapters (e.g. CIBIL, Harassment, OTS)..."
                    value={tocSearch}
                    onChange={(e) => setTocSearch(e.target.value)}
                    className="w-full text-xs pl-8 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {/* Module Filter Pills in Drawer */}
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar pt-2 pb-0.5">
                  <button
                    onClick={() => setSelectedModule(null)}
                    className={`text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                      selectedModule === null ? 'bg-blue-600 text-white font-bold' : 'bg-white text-black border border-gray-200'
                    }`}
                  >
                    All (25)
                  </button>
                  {navModules.map((m, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedModule(idx)}
                      className={`text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                        selectedModule === idx ? 'bg-blue-600 text-white font-bold' : 'bg-white text-black border border-gray-200'
                      }`}
                    >
                      M{idx + 1}: {m.moduleTitle.split(':')[1]?.trim() || m.moduleTitle}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chapters List */}
              <div className="overflow-y-auto p-3 space-y-1.5 divide-y divide-gray-50 flex-1">
                {filteredNavLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between text-xs ${
                        isActive
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
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 items-start">
          
          {/* Left Column: Categorized Table of Contents (15% Desktop Sticky) */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-20 max-h-[calc(100vh-5.5rem)] flex flex-col space-y-2.5">
              <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between border-b pb-2.5 mb-2.5">
                  <h3 className="font-bold text-black text-xs">Table of Contents</h3>
                  <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">25</span>
                </div>

                <div className="space-y-3">
                  {navModules.map((module, mIdx) => (
                    <div key={mIdx} className="space-y-1">
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
                  ))}
                </div>
              </div>

              {/* Quick Legal Help Banner in Sidebar */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-3.5 rounded-2xl text-white shadow-sm text-center">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-2 text-blue-300 text-sm">
                  ⚖️
                </div>
                <h4 className="font-bold text-xs mb-1">Multi-Debt Shield</h4>
                <p className="text-[10px] text-blue-200 mb-3 leading-snug">
                  Direct advocate intervention freezing recovery action across all lenders.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-blue-500 hover:bg-blue-400 text-white font-bold text-[11px] py-1.5 px-2.5 rounded-lg transition-colors shadow"
                >
                  Consult Advocate
                </Link>
              </div>
          </aside>

          {/* Middle Column: Master 25-Section Editorial Guide (70% Width) */}
          <div className="lg:w-[70%] flex-1 min-w-0">
            <article className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-sm border border-gray-200/90 space-y-8 sm:space-y-12 overflow-hidden text-black">

              {/* 1. Introduction to Loan Settlement */}
              <section id="introduction" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 1
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  1. Introduction to Loan Settlement in India
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>Loan settlement</strong>—commonly referred to in Indian banking as a <strong>One-Time Settlement (OTS)</strong> or compromise settlement—is a legally recognized process where a borrower unable to service their debt negotiates with a lender (bank or NBFC) to pay an agreed lump-sum amount lower than the total ledger balance. Upon realization of this agreed amount, the lender forgives the residual balance and considers the obligation fully discharged.
                  </p>
                  <p>
                    In India, loan settlement is not a statutory right of default; it is a financial and legal relief mechanism intended for individuals and businesses experiencing verified, irreversible financial hardship such as job termination, critical illness, demise of an earning member, or commercial insolvency.
                  </p>

                  <div className="bg-slate-50 border-l-4 border-blue-600 p-3 sm:p-4 rounded-r-xl my-4 text-xs sm:text-sm space-y-2">
                    <p className="font-semibold text-black">Critical Terminological Distinctions:</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-black">
                      <li><strong>Loan Settlement vs Loan Repayment:</strong> In standard repayment, the borrower pays 100% of the principal and accrued interest as per the loan schedule. In settlement, the bank waives a portion of principal and penal interest, closing the account with a partial payment.</li>
                      <li><strong>Loan Settlement vs Loan Waiver:</strong> A loan waiver is typically a government-subsidized scheme (such as agricultural debt relief) where the government reimburses banks. In a loan settlement, the private lender voluntarily takes a commercial loss (haircut) based on its own recovery calculations.</li>
                      <li><strong>Loan Settlement vs Loan Restructuring:</strong> Restructuring adjusts loan tenures, lowers interest rates, or adds a moratorium without forgiving principal dues. Settlement permanently extinguishes the loan account with a one-time discounted payment.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Interactive Assessment Funnel - Blended inside Middle Container Above Chapter 2 */}
              <div className="not-prose my-6 sm:my-8 p-3 sm:p-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-slate-50 rounded-2xl border border-blue-100 shadow-xs">
                <InteractiveLeadFunnel className="!bg-transparent !p-0 !py-0 !px-0" />
              </div>

              {/* 2. How Loan Settlement Works */}
              <section id="how-loan-settlement-works" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 2
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  2. How Loan Settlement Works: Step-by-Step Procedure
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    A standard compromise settlement does not occur overnight. It progresses through a structured regulatory sequence governed by the lender&apos;s internal Recovery Policy and RBI circulars:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4 sm:my-6">
                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2">1</span>
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Dues &amp; Hardship Assessment</h3>
                      <p className="text-xs text-black">Comprehensive audit of actual principal, normal interest, penal charges, and assembly of incontrovertible medical, employment, or revenue loss records.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2">2</span>
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Formal Representation</h3>
                      <p className="text-xs text-black">Submitting a formal hardship letter and compromise proposal to the bank branch or Stressed Asset Recovery Branch (SARB) offering a realistic lump-sum.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2">3</span>
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Committee Negotiation</h3>
                      <p className="text-xs text-black">Bank&apos;s internal Settlement Advisory Committee evaluates liquidation value vs legal recovery costs and issues terms.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2">4</span>
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Written Settlement Sanction</h3>
                      <p className="text-xs text-black">Lender issues a formal written approval letter specifying the agreed sum, due dates, and closure clauses.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2">5</span>
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Payment Execution</h3>
                      <p className="text-xs text-black">Remittance executed strictly via authorized banking channels (NEFT/RTGS/Official payment gateway) credited directly to the loan account.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold inline-flex items-center justify-center text-xs mb-2">6</span>
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">NOC &amp; Bureau Update</h3>
                      <p className="text-xs text-black">Lender issues a No Dues Certificate (NOC) and reports the account as &apos;Settled&apos; to CIBIL, Equifax, Experian, and CRIF High Mark.</p>
                    </div>
                  </div>

                  {/* Infographic Visual Guide Section */}
                  <div className="my-6 sm:my-8 p-3 sm:p-4 bg-gradient-to-b from-slate-50 to-blue-50/50 rounded-xl sm:rounded-2xl border border-blue-100 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-blue-600 uppercase tracking-wider block">Visual Roadmap</span>
                        <h3 className="text-sm sm:text-base font-bold text-black">5-Step Loan Settlement Process in India</h3>
                      </div>
                      <span className="text-[10px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-full">
                        RBI Compliant
                      </span>
                    </div>
                    <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-xs">
                      <img
                        src="/images/loan-settlement-process-infographic.jpg"
                        alt="5-Step Loan Settlement Process in India Infographic - Detailed visual roadmap illustrating financial hardship assessment, legal notice representation, RBI compromise negotiation, official settlement sanction letter, and No Dues Certificate NOC CIBIL update"
                        className="w-full h-auto object-cover rounded-xl"
                        loading="lazy"
                        width={1200}
                        height={675}
                      />
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 mt-2 italic text-center">
                      Infographic: Complete legal and procedural sequence for compromise loan settlement under RBI guidelines.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Who Can Opt for Loan Settlement? */}
              <section id="who-can-opt-for-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 3
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  3. Who Can Opt for Loan Settlement? Eligibility Realities
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Banks and NBFCs in India do not grant compromise settlements simply upon request. Lenders conduct diligence to distinguish between a <strong>genuine distressed borrower</strong> and a <strong>willful defaulter</strong>.
                  </p>
                  <p>Lenders actively consider settlement applications under the following circumstances:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>Loss of Employment or Primary Income:</strong> Involuntary layoff, downsizing, or company shutdown supported by termination letters and non-salary bank statements.</li>
                    <li><strong>Catastrophic Medical Emergencies:</strong> Life-threatening illnesses, major surgeries, or prolonged treatments of the borrower or direct dependents that consumed family savings.</li>
                    <li><strong>Business Failure &amp; Commercial Distress:</strong> Micro, small, or medium enterprise (MSME) closure, loss of key contracts, or insolvency.</li>
                    <li><strong>Excessive Debt-to-Income (DTI) Overload:</strong> When total monthly EMI obligations exceed 80% to 100% of demonstrable monthly take-home earnings.</li>
                    <li><strong>Prolonged Default (NPA Classification):</strong> Accounts in Non-Performing Asset (NPA) status for 90 days or longer where recovery prospects through normal collection are bleak.</li>
                  </ul>
                  <div className="p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                    <strong>Warning on Willful Default:</strong> Borrowers with substantial undeclared assets, verifiable luxury spending, or who divert sanctioned funds are classified as willful defaulters under RBI Master Directions and face criminal proceedings rather than compromise settlements.
                  </div>
                </div>
              </section>

              {/* 4. Types of Loans That Can Be Settled */}
              <section id="types-of-loans-settled" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 4
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  4. Types of Loans That Can Be Settled in India
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The viability of a loan settlement depends heavily on whether the underlying loan is <strong>unsecured</strong> or <strong>secured</strong>.
                  </p>

                  <div className="overflow-x-auto -mx-1 sm:mx-0 my-4 border border-gray-200 rounded-xl shadow-xs">
                    <div className="text-[10px] text-gray-500 sm:hidden px-3 py-1.5 bg-gray-50 border-b border-gray-200 flex items-center justify-between font-medium">
                      <span>👉 Swipe table to view all columns</span>
                      <span>↔</span>
                    </div>
                    <table className="min-w-[560px] w-full text-left text-xs">
                      <thead className="bg-gray-100 text-gray-800 font-bold uppercase">
                        <tr>
                          <th className="p-2.5 sm:p-3 border-b">Loan Category</th>
                          <th className="p-2.5 sm:p-3 border-b">Collateral Status</th>
                          <th className="p-2.5 sm:p-3 border-b">Settlement Feasibility</th>
                          <th className="p-2.5 sm:p-3 border-b">Typical Haircut / Waiver</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-black">
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold text-black">Credit Card Dues</td>
                          <td className="p-2.5 sm:p-3">Unsecured</td>
                          <td className="p-2.5 sm:p-3 text-emerald-700 font-semibold">Very High</td>
                          <td className="p-2.5 sm:p-3">40% – 70% of total balance (waiver of penal charges + interest)</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold text-black">Personal Loans</td>
                          <td className="p-2.5 sm:p-3">Unsecured</td>
                          <td className="p-2.5 sm:p-3 text-emerald-700 font-semibold">High</td>
                          <td className="p-2.5 sm:p-3">30% – 60% of total ledger balance</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold text-black">NBFC / Instant App Loans</td>
                          <td className="p-2.5 sm:p-3">Unsecured</td>
                          <td className="p-2.5 sm:p-3 text-emerald-700 font-semibold">High</td>
                          <td className="p-2.5 sm:p-3">40% – 65% depending on platform and vintage</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold text-black">Unsecured Business Loans</td>
                          <td className="p-2.5 sm:p-3">Unsecured / Personal Guarantee</td>
                          <td className="p-2.5 sm:p-3 text-blue-700 font-semibold">Moderate to High</td>
                          <td className="p-2.5 sm:p-3">25% – 50% subject to financial audit</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold text-black">Vehicle / Auto Loans</td>
                          <td className="p-2.5 sm:p-3">Secured (Hypothecated Vehicle)</td>
                          <td className="p-2.5 sm:p-3 text-amber-700 font-semibold">Conditional</td>
                          <td className="p-2.5 sm:p-3">Settlement generally limited to deficiency balance post-repossession</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold text-black">Home Loans / Mortgages</td>
                          <td className="p-2.5 sm:p-3">Secured (Immovable Property)</td>
                          <td className="p-2.5 sm:p-3 text-rose-700 font-semibold">Very Low</td>
                          <td className="p-2.5 sm:p-3">Lenders invoke SARFAESI Act to auction property rather than give large haircuts</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 5. Loan Settlement vs Loan Restructuring */}
              <section id="settlement-vs-restructuring" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 5
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  5. Loan Settlement vs Loan Restructuring
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Borrowers in distress must evaluate whether to seek a loan restructuring or a compromise settlement. Both address default risk, but their financial mechanics and bureau repercussions are fundamentally different.
                  </p>

                  <div className="overflow-x-auto -mx-1 sm:mx-0 my-4 border border-gray-200 rounded-xl shadow-xs">
                    <div className="text-[10px] text-gray-500 sm:hidden px-3 py-1.5 bg-gray-50 border-b border-gray-200 flex items-center justify-between font-medium">
                      <span>👉 Swipe table to view comparison</span>
                      <span>↔</span>
                    </div>
                    <table className="min-w-[560px] w-full text-left text-xs">
                      <thead className="bg-slate-100 text-gray-800 font-bold">
                        <tr>
                          <th className="p-2.5 sm:p-3 border-b">Parameter</th>
                          <th className="p-2.5 sm:p-3 border-b">Loan Restructuring</th>
                          <th className="p-2.5 sm:p-3 border-b">Loan Settlement (OTS)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold">Principal Repayment</td>
                          <td className="p-2.5 sm:p-3">100% of principal is repaid over extended time</td>
                          <td className="p-2.5 sm:p-3 font-semibold text-blue-700">Bank waives a portion of principal and charges</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold">Loan Account Status</td>
                          <td className="p-2.5 sm:p-3">Remains active with revised EMI schedule</td>
                          <td className="p-2.5 sm:p-3 font-semibold text-emerald-700">Account is permanently closed</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold">Payment Mode</td>
                          <td className="p-2.5 sm:p-3">Extended monthly EMIs with lowered interest</td>
                          <td className="p-2.5 sm:p-3">Single lump-sum or 2–4 short structured installments</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold">CIBIL Bureau Reporting</td>
                          <td className="p-2.5 sm:p-3">Tagged as &apos;Restructured&apos;</td>
                          <td className="p-2.5 sm:p-3 text-rose-700 font-semibold">Tagged as &apos;Settled&apos; or &apos;Post Write-Off Settled&apos;</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 sm:p-3 font-semibold">Best Suited For</td>
                          <td className="p-2.5 sm:p-3">Temporary liquidity drops with intact earning capacity</td>
                          <td className="p-2.5 sm:p-3">Permanent earning impairment or severe insolvency</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 6. RBI Guidelines on Loan Settlement */}
              <section id="rbi-guidelines-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 6
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  6. RBI Guidelines on Compromise Settlements &amp; Technical Write-offs
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    On <strong>June 8, 2023</strong>, the Reserve Bank of India issued its landmark circular 
                    <span className="font-semibold text-black"> DOR.STR.REC.20/21.04.048/2023-24</span> entitled 
                    <em> &quot;Framework for Compromise Settlements and Technical Write-offs&quot;</em>, reinforcing uniform standards across all Regulated Entities (REs):
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 bg-slate-50 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 text-xs sm:text-sm">
                    <div className="flex gap-2.5 sm:gap-3">
                      <div className="text-blue-600 font-bold">1.</div>
                      <div>
                        <strong>Mandatory Board-Approved Policies:</strong> Every commercial bank, cooperative bank, and NBFC must operate under transparent, board-approved compromise policies. Discretionary, arbitrary unwritten deals are impermissible.
                      </div>
                    </div>
                    <div className="flex gap-2.5 sm:gap-3">
                      <div className="text-blue-600 font-bold">2.</div>
                      <div>
                        <strong>Delegation of Authority:</strong> Settlement proposals must be approved by an authority at least one tier higher than the official who sanctioned the original credit limit. Officials who sanctioned the loan cannot approve its haircut.
                      </div>
                    </div>
                    <div className="flex gap-2.5 sm:gap-3">
                      <div className="text-blue-600 font-bold">3.</div>
                      <div>
                        <strong>Realizable Value Assessment:</strong> Lenders must formally assess the net present value (NPV) of potential recovery via legal proceedings against immediate cash compromise before approving a waiver.
                      </div>
                    </div>
                    <div className="flex gap-2.5 sm:gap-3">
                      <div className="text-blue-600 font-bold">4.</div>
                      <div>
                        <strong>Cooling-off Period:</strong> The RBI framework stipulates that borrowers entering into a compromise settlement are subject to a minimum 12-month cooling-off period before becoming eligible for fresh exposure from the same lender.
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-500">
                    Source: Reserve Bank of India, Department of Regulation, Central Office, Mumbai.
                  </p>
                </div>
              </section>

              {/* 7. RBI Guidelines for Loan Recovery Agents */}
              <section id="rbi-guidelines-recovery-agents" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 7
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  7. RBI Guidelines for Loan Recovery Agents: Calling Hours &amp; Conduct Rules
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under RBI Master Directions (including Circular <strong>RBI/2022-23/108</strong> and unified Fair Practices Codes), the Reserve Bank strictly regulates debt collection. Banks and NBFCs remain <strong>vicariously liable</strong> for unlawful actions taken by their outsourced recovery agencies.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4">
                    <div className="p-3.5 sm:p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs">
                      <h3 className="font-bold text-emerald-900 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        Permitted Recovery Practices
                      </h3>
                      <ul className="space-y-1.5 text-emerald-800 list-disc pl-4">
                        <li>Calling borrowers strictly between <strong>8:00 AM and 7:00 PM</strong>.</li>
                        <li>Verifying borrower identity before discussing outstanding loan details.</li>
                        <li>Agents carrying valid bank authorization letters and photo identity cards.</li>
                        <li>Maintaining professional call recordings and communication audit trails.</li>
                      </ul>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-rose-50 rounded-xl border border-rose-200 text-xs">
                      <h3 className="font-bold text-rose-900 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                        Strictly Prohibited Illegal Conduct
                      </h3>
                      <ul className="space-y-1.5 text-rose-800 list-disc pl-4">
                        <li>Initiating recovery communications outside the permissible 8:00 AM to 7:00 PM statutory window.</li>
                        <li>Resorting to defamatory, abusive, or emotionally intimidating remarks during calls.</li>
                        <li>Contacting friends, relatives, neighbours, or workplace employers.</li>
                        <li>Visiting residence/workplace without prior notice or creating public scenes.</li>
                        <li>Falsely claiming to be police officers, court bailiffs, or CBI officials.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. How Much Can a Loan Be Settled For? */}
              <section id="settlement-amount-factors" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 8
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  8. How Much Can a Loan Be Settled For? The Mathematics of OTS
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    One of the most persistent myths in Indian debt resolution is that there is a standard &quot;flat 50% discount&quot; or guaranteed waiver rate. <strong>There is no statutory flat percentage.</strong> Every compromise settlement amount is calculated on a risk-recovery matrix governed by the following factors:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>Principal vs Penal Charges Composition:</strong> Banks are far more willing to waive 100% of accumulated penal interest and late fees than their core disbursed principal.</li>
                    <li><strong>Age of Default (NPA Vintage):</strong> 
                      <br />• <em>SMA-0 to SMA-2 (0-90 days):</em> Banks rarely consider settlements; they push for full recovery or restructuring.
                      <br />• <em>Sub-standard Asset (NPA 3–12 months):</em> Settlement offers typically range between 55% to 75% of total dues.
                      <br />• <em>Doubtful / Loss Asset (NPA &gt; 12 months):</em> Settlement offers often range between 30% to 50% of the total balance because the bank has already made 100% provisioning in its books.
                    </li>
                    <li><strong>Demonstrable Inability to Pay:</strong> Documented zero liquid balance, frozen accounts, or medical liabilities prove that dragging the borrower to civil court will yield zero recoverable assets.</li>
                    <li><strong>Immediate Lump-sum Capacity:</strong> A borrower ready to transfer ₹3,00,000 within 48 hours will always receive a better OTS sanction than a borrower seeking 12 installments.</li>
                  </ul>
                </div>
              </section>

              {/* 9. How to Negotiate the Best Loan Settlement Amount */}
              <section id="how-to-negotiate-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 9
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  9. How to Negotiate the Best Loan Settlement Amount
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Negotiating with a banking institution requires a disciplined, evidence-based approach. Shouting at recovery agents or ignoring calls weakens your position. Follow this battle-tested negotiation playbook:
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4 my-4">
                    <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Step 1: Obtain Complete Statement of Accounts (SOA)</h3>
                      <p className="text-xs text-black">Demand an itemized breakdown of pure principal outstanding, normal contractual interest, penal interest, and processing charges. Never negotiate on a vague &apos;total demand figure&apos; stated verbally over the phone.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Step 2: Establish the Anchoring Offer</h3>
                      <p className="text-xs text-black">Start negotiations by proposing waiver of 100% of penal charges and 60% of principal. This anchors the discussion around principal recovery rather than accumulated interest penalties.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Step 3: Document Hardship in Writing</h3>
                      <p className="text-xs text-black">Submit a comprehensive representation letter citing RBI Compromise Framework guidelines, detailing health reports or termination slips, demonstrating that your offer is the maximum realizable value.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Step 4: Golden Rule — Never Pay Without Written Sanction</h3>
                      <p className="text-xs text-black">No matter how urgent the recovery agent claims their monthly target is, <strong>never transfer a single rupee</strong> based on a WhatsApp message or verbal call. Insist on a formal Settlement Letter generated from the bank&apos;s centralized system with an official dispatch number.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 10. Legal Rights of Borrowers During Loan Recovery */}
              <section id="legal-rights-borrowers" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 10
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  10. Legal Rights of Borrowers During Loan Recovery in India
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Defaulting on a debt is a civil contractual breach—<strong>it is not a criminal offense under Indian law</strong>. The Supreme Court of India and the Reserve Bank have repeatedly upheld fundamental constitutional rights safeguarding borrowers:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4">
                    <div className="p-3.5 sm:p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Right to Privacy (Article 21)</h3>
                      <p className="text-xs text-black">Lenders cannot disclose your debt status to your employer, colleagues, neighbours, or extended family members. Doing so constitutes civil defamation and an actionable breach of privacy.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Right Against Harassment</h3>
                      <p className="text-xs text-black">Repeated calling, threatening criminal incarceration, shouting at doorsteps, or physical stalking is actionable under the Bharatiya Nyaya Sanhita (BNS) / IPC Sections 351, 352, and 503.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Right to Due Process &amp; Notice</h3>
                      <p className="text-xs text-black">Borrowers are legally entitled to receive prior written demand notices before any legal invocation (Arbitration, Sec 138 NI Act, or SARFAESI repossession).</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white border border-gray-200 rounded-xl shadow-xs">
                      <h3 className="font-bold text-black text-xs sm:text-sm mb-1">Right to Grievance Redressal</h3>
                      <p className="text-xs text-black">Access to the bank&apos;s Principal Nodal Officer (PNO) and subsequent escalation to the RBI Integrated Ombudsman Scheme (CMS Portal) with mandatory 30-day resolution windows.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 11. What Legal Action Can a Bank/NBFC Take? */}
              <section id="bank-legal-actions" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 11
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  11. What Legal Action Can a Bank or NBFC Take Against Defaulters?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Understanding the distinction between an empty recovery agent threat, a formal lawyer&apos;s legal notice, and an actual court summons is vital:
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 text-xs text-black">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <strong>1. Section 138, Negotiable Instruments Act (Cheque Bounce):</strong> If a physical cheque submitted for EMI repayment bounces due to insufficient funds, the lender can issue a statutory 15-day demand notice. Failure to pay within 15 days allows the lender to file a criminal complaint before a Magistrate.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <strong>2. Section 25, Payment and Settlement Systems Act (NACH / e-Mandate Bounce):</strong> Electronic auto-debit bounce carries quasi-criminal liability analogous to cheque bounce, requiring a formal legal notice and magistrate filing.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <strong>3. Arbitration Proceedings (Arbitration and Conciliation Act 1996):</strong> Most retail loan agreements contain an arbitration clause. The lender may appoint an arbitrator to pass an arbitral award. Note: Unilateral appointment of sole arbitrators by banks has been held illegal by the Supreme Court of India.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <strong>4. Civil Summary Suit (Order 37 CPC):</strong> Lenders can file for recovery of debts in a civil court. However, due to court backlogs and filing fees, banks rarely file civil suits for unsecured debts under ₹10-15 Lakhs.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <strong>5. SARFAESI Act 2002 (Secured Debts Only):</strong> For home loans and mortgages, lenders issue Section 13(2) demand notices giving 60 days to pay, followed by Section 13(4) symbolic possession of the property. SARFAESI does not apply to unsecured credit cards or personal loans.
                    </div>
                  </div>
                </div>
              </section>

              {/* 12. Legal Complications of Loan Settlement */}
              <section id="legal-complications" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 12
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  12. Legal Complications: Defaulting on a Settlement Agreement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Entering into a compromise settlement creates a new substituted contract under Section 62 and Section 63 of the Indian Contract Act, 1872. Borrowers must be aware of the severe legal pitfalls if they fail to uphold the terms:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>Revocation of Waiver:</strong> Every standard Settlement Sanction Letter contains a default clause: <em>&quot;In the event of delay or default in payment of any installment, the settlement shall stand cancelled automatically, and the bank shall be entitled to recover the entire original dues with retrospective interest.&quot;</em></li>
                    <li><strong>Loss of Partial Payments:</strong> If you agree to settle for ₹3 Lakhs in 3 installments of ₹1 Lakh each, and you pay ₹2 Lakhs but default on the 3rd, the bank typically treats the ₹2 Lakhs as normal partial payment against your original ledger dues and restarts recovery for the balance!</li>
                    <li><strong>Pending Litigation Re-activation:</strong> If Section 138 or arbitration was stayed conditional upon settlement payments, the bank can immediately resume criminal or execution proceedings before the court.</li>
                  </ul>
                </div>
              </section>

              {/* 13. Impact of Loan Settlement on CIBIL/Credit Score */}
              <section id="cibil-credit-score-impact" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 13
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  13. Impact of Loan Settlement on CIBIL &amp; Credit Score
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Borrowers must enter settlement with complete clarity on how Indian credit information companies (TransUnion CIBIL, Equifax, Experian, CRIF High Mark) record the transaction:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                    <div className="p-3.5 sm:p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs">
                      <span className="font-bold text-emerald-900 block mb-1 text-xs sm:text-sm">Status: &apos;CLOSED&apos;</span>
                      <p className="text-emerald-800">Represents 100% full repayment of principal and interest. Positive credit signal that builds or restores high 750+ CIBIL scores.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs">
                      <span className="font-bold text-amber-900 block mb-1 text-xs sm:text-sm">Status: &apos;SETTLED&apos;</span>
                      <p className="text-amber-800">Represents account closed via compromise haircut. Lowers credit score by 50–120 points and remains on your bureau report for up to 7 years.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs">
                      <span className="font-bold text-rose-900 block mb-1 text-xs sm:text-sm">Status: &apos;POST WRITE-OFF SETTLED&apos;</span>
                      <p className="text-rose-800">Indicates the lender wrote off the debt as bad debt before you paid a compromise amount. Severe red flag for tier-1 credit underwriting.</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm">
                    <strong>Is a &apos;Settled&apos; status worse than an active NPA?</strong> No. An active unpaid default continues to drag your CIBIL score downward month after month with Days Past Due (DPD) counters hitting 900+ days, invites court cases, and guarantees immediate rejection. A settled status stops the bleeding and begins the 7-year countdown for credit rehabilitation.
                  </p>
                </div>
              </section>

              {/* 14. What Happens After Loan Settlement? */}
              <section id="after-loan-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 14
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  14. What Happens After Loan Settlement? Post-Closure Checklist
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Once your settlement remittance clears the bank&apos;s account, ensure you complete these four mandatory closing procedures:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>Demand the Official No Dues Certificate (NDC):</strong> The bank is mandated under RBI customer service directives to issue a stamped No Dues Certificate / Account Closure Letter within 15–30 days confirming that no further claims survive.</li>
                    <li><strong>Verify Withdrawal of Court Cases:</strong> If Section 138 or arbitration notices were filed, ensure the bank&apos;s advocate files a joint memo of compromise or application for withdrawal before the relevant Magistrate or Arbitrator.</li>
                    <li><strong>Retrieve Post-Dated Cheques &amp; Security Documents:</strong> Ensure the lender cancels NACH e-mandates and returns or destroys any physical security cheques deposited at the time of loan disbursal.</li>
                    <li><strong>Check Credit Bureau After 45 Days:</strong> Download an updated CIBIL report 45 to 60 days post-settlement to verify that the balance outstanding shows zero and the status reflects &apos;Settled&apos; rather than active default.</li>
                  </ol>
                </div>
              </section>

              {/* 15. Can You Get a Loan After Settlement? */}
              <section id="loans-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 15
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  15. Can You Get a Loan After Settlement? Rebuilding Creditworthiness
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    While prime banks will reject unsecured loan applications immediately following a settlement, you can systematically rebuild your credit score using this proven 3-phase pathway:
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 text-xs text-black my-4">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-black block mb-0.5">Phase 1 (Months 1–12): The Secured Credit Foundation</span>
                      <p>Open a fixed deposit (FD) of ₹25,000 to ₹50,000 with a bank (e.g. IDFC First WOW, Kotak 811 Dream Different, or SBI Unnati) and obtain a <strong>secured credit card</strong> backed 100% by the FD. Use no more than 20% of the limit and repay the bill in full 5 days before the due date.</p>
                    </div>

                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-black block mb-0.5">Phase 2 (Months 13–24): Establishing Positive Bureau History</span>
                      <p>Consistent, on-time payments on your secured card generate consecutive &apos;000&apos; (paid on time) monthly records on CIBIL. Your score typically climbs from the low 600s back into the 700–740 range.</p>
                    </div>

                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-black block mb-0.5">Phase 3 (Months 25+): Secured Loans &amp; Secondary Lenders</span>
                      <p>Apply for entry-level consumer durable loans or gold loans. Once 36 months pass with zero fresh delinquencies, secondary NBFCs and fintech lenders will readily approve fresh personal credit.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 16. Loan Settlement and Recovery Agent Harassment */}
              <section id="recovery-harassment-remedies" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 16
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  16. Recovery Agent Harassment: How to Legally Defend Yourself
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Recovery agent harassment is the most painful ordeal for defaulting borrowers. If collection agents are crossing legal boundaries, execute these immediate defensive countermeasures:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>Enable Call Recording:</strong> Maintain an automatic audio recorder on your phone. Inform calling agents: <em>&quot;This call is being recorded for evidence under RBI circular DOR.ORG.REC.65/21.04.158/2022-23.&quot;</em> This statement alone discourages 80% of aggressive threats.</li>
                    <li><strong>Send a Formal Cease &amp; Desist Letter:</strong> Issue a registered legal notice to the bank&apos;s managing director and collections head demanding that third-party agents immediately cease calling unauthorized numbers or visiting your workplace.</li>
                    <li><strong>Lodge a Complaint with the Principal Nodal Officer (PNO):</strong> Every bank has a designated PNO. Send the call audio, agent phone numbers, and WhatsApp screenshots. Under RBI regulations, the bank must acknowledge within 24 hours.</li>
                    <li><strong>Escalate to the RBI Banking Ombudsman (CMS Portal):</strong> If the harassment does not halt within 30 days, file an online grievance on <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">cms.rbi.org.in</a>. The Ombudsman can award compensation up to ₹20 Lakhs for mental anguish and harassment.</li>
                  </ul>
                </div>
              </section>

              {/* 17. Documents Required for Loan Settlement */}
              <section id="documents-required" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 17
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  17. Comprehensive Document Checklist for Loan Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Having an organized dossier of hardship documentation speeds up the bank&apos;s settlement committee approval:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
                    <div className="p-3.5 sm:p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1.5">
                      <p className="font-bold text-black text-xs sm:text-sm mb-1">KYC &amp; Loan Records</p>
                      <p>✓ PAN Card &amp; Aadhaar Card</p>
                      <p>✓ Latest Loan Account Statement (showing dues)</p>
                      <p>✓ Loan Sanction Letter / Credit Card Agreement</p>
                      <p>✓ Comprehensive CIBIL / Experian Credit Report</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1.5">
                      <p className="font-bold text-black text-xs sm:text-sm mb-1">Financial Inability Proof</p>
                      <p>✓ Last 6 to 12 months Bank Statements (all active accounts)</p>
                      <p>✓ Job Termination Letter / Resignation / Salary Slips</p>
                      <p>✓ Business Closure Certificate / GST Surrender (for MSMEs)</p>
                      <p>✓ Hospital discharge summaries &amp; medical treatment bills</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 18. How to Verify a Genuine Loan Settlement Offer */}
              <section id="verify-genuine-offer" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 18
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  18. How to Verify a Genuine Settlement Offer &amp; Avoid Scams
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Thousands of Indian borrowers are defrauded each month by rogue recovery telecallers and scammers sending forged settlement letters on PDF templates. Use this 4-step checklist to verify authenticity:
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 text-xs text-black my-4">
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                      <strong>Check 1: Official Corporate Domain Verification:</strong> If receiving the offer by email, ensure the sender address ends with the bank&apos;s official domain (e.g. <code>@hdfcbank.com</code>, <code>@icicibank.com</code>, <code>@sbi.co.in</code>). Never accept letters from Gmail, Yahoo, or generic Outlook addresses.
                    </div>
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                      <strong>Check 2: Unique Loan Account &amp; LAN Matching:</strong> Ensure the letter accurately cites your 16-digit Loan Account Number (LAN), your registered PAN, and exact outstanding ledger balance.
                    </div>
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                      <strong>Check 3: Payment Recipient Name:</strong> The payment must <strong>always</strong> be made directly to the bank via your loan account number as the beneficiary (e.g., Beneficiary: HDFC Bank Loan A/c [Your LAN]). <strong>Never pay into any individual person&apos;s savings account or scan a personal UPI QR code.</strong>
                    </div>
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                      <strong>Check 4: In-Branch Verification:</strong> Visit the nearest branch or Stressed Asset Recovery Branch (SARB) and ask the Branch Credit Manager or Operations Head to verify the settlement reference number in their internal core banking system (CBS).
                    </div>
                  </div>
                </div>
              </section>

              {/* 19. Common Loan Settlement Mistakes */}
              <section id="common-settlement-mistakes" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 19
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  19. Common Loan Settlement Mistakes That Cost Borrowers Lakhs
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>Relying on Verbal Promises of Recovery Agents:</strong> Agents under target pressure frequently say: <em>&quot;Just pay ₹50,000 today and the bank will close the card.&quot;</em> If you pay without a settlement letter, the bank treats it as partial interest recovery and demands the rest next week!</li>
                    <li><strong>Ignoring Court Summons &amp; Legal Notices:</strong> Thinking that avoiding notices makes them disappear. Failing to appear in Section 138 or arbitration proceedings results in bailable/non-bailable warrants or ex-parte awards that freeze your bank accounts.</li>
                    <li><strong>Borrowing from Informal Loan Sharks to Settle:</strong> Taking a high-interest private loan (5%–10% monthly interest) to settle a 14% bank loan creates a fatal debt vortex.</li>
                    <li><strong>Forgetting to Demand the No Dues Certificate (NDC):</strong> Assuming payment receipt is the same as an NOC. Without an official NOC, old collection agencies may resurface years later demanding residual dues.</li>
                  </ul>
                </div>
              </section>

              {/* 20. Loan Settlement Examples */}
              <section id="settlement-case-examples" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 20
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  20. Practical Settlement Case Studies &amp; Financial Breakdowns
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Examine these real-world examples demonstrating how compromise settlements are negotiated across different loan portfolios:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs my-4">
                    <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <span className="font-bold text-blue-700 block text-xs sm:text-sm">Case 1: Personal Loan Compromise</span>
                      <p><strong>Borrower Profile:</strong> IT Professional terminated during tech layoffs.</p>
                      <p><strong>Original Sanction:</strong> ₹8,00,000 | <strong>Total Outstanding:</strong> ₹9,40,000 (with penalties)</p>
                      <p><strong>Principal Balance:</strong> ₹6,20,000 | <strong>Default Vintage:</strong> 11 Months NPA</p>
                      <p><strong>Negotiated Settlement:</strong> ₹3,80,000 in two installments.</p>
                      <p className="font-semibold text-emerald-700">Total Waiver: ₹5,60,000 (~60% of total ledger dues)</p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <span className="font-bold text-blue-700 block text-xs sm:text-sm">Case 2: Multiple Credit Cards Portfolio</span>
                      <p><strong>Borrower Profile:</strong> Retail shop owner with pandemic business collapse.</p>
                      <p><strong>Dues Across 3 Cards:</strong> ₹5,20,000 (Principal: ₹2,40,000 + ₹2,80,000 Finance Charges)</p>
                      <p><strong>Default Vintage:</strong> 14 Months</p>
                      <p><strong>Negotiated Settlement:</strong> ₹1,90,000 total lump-sum payment.</p>
                      <p className="font-semibold text-emerald-700">Total Waiver: ₹3,30,000 (Waiver of 100% penalties + ₹50,000 principal haircut)</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 21. Loan Settlement Cost and Professional Assistance */}
              <section id="settlement-costs-fees" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 21
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  21. Loan Settlement Costs and Professional Legal Assistance
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    When evaluating professional debt settlement and legal representation services in India, transparency in fee structures is paramount:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>Direct Settlement Amount (Paid to Bank):</strong> The negotiated compromise sum paid directly to the lending bank or NBFC.</li>
                    <li><strong>Professional Legal &amp; Representation Fees:</strong> Reputable legal advisory firms operate either on a transparent milestone retainer or a success-fee percentage based on the verified money saved for the borrower.</li>
                    <li><strong>No Upfront Hidden Charges:</strong> Legitimate firms never demand full upfront contingency fees before negotiating with the bank. Ensure you receive a formal service contract specifying exact deliverables, legal notice drafting, and anti-harassment coverage.</li>
                  </ul>
                </div>
              </section>

              {/* 22. Loan Settlement Calculator / Settlement Estimator */}
              <section id="settlement-calculator" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 22
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  22. Interactive Loan Settlement Calculator / Estimator
                </h2>
                <p className="text-xs sm:text-sm text-black mb-4 sm:mb-6">
                  Estimate a realistic One-Time Settlement (OTS) compromise band based on your principal, accumulated charges, and default duration under standard Indian banking recovery parameters:
                </p>

                {/* Calculator Widget */}
                <div className="bg-slate-900 text-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-800 space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                        Total Outstanding (₹): {Number(totalOutstanding).toLocaleString('en-IN')}
                      </label>
                      <input
                        type="range"
                        min="50000"
                        max="5000000"
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
                        min="10000"
                        max="500000"
                        step="5000"
                        value={monthlyIncome}
                        onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                        className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                        Age of Default: {defaultMonths} Months
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

                  {/* Calculated Results Box */}
                  <div className="bg-slate-800/80 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-700/80 mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-b border-slate-700 pb-3 sm:pb-4">
                      <div>
                        <span className="text-[11px] sm:text-xs text-slate-400 block">Estimated Settlement Band (Payable to Bank)</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-black text-blue-400">
                          ₹{Math.round(calculationResult.estLow).toLocaleString('en-IN')} – ₹{Math.round(calculationResult.estHigh).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="sm:text-right">
                        <span className="text-[11px] sm:text-xs text-slate-400 block">Potential Waiver / Haircut</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400">
                          ₹{Math.round(calculationResult.estimatedSavingsLow).toLocaleString('en-IN')} – ₹{Math.round(calculationResult.estimatedSavingsHigh).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center text-xs">
                      <div className="p-2 sm:p-2.5 bg-slate-900/60 rounded-xl">
                        <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">Penal Interest</span>
                        <span className="font-bold text-slate-200">₹{(calculationResult.charges).toLocaleString('en-IN')}</span>
                      </div>
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
                    *Disclaimer: This estimator provides statistical approximations based on standard RBI compromise trends and NPA aging. Actual compromise sanctions depend solely on the concerned bank or NBFC Board-approved compromise policy and settlement committee approval.
                  </p>
                </div>
              </section>

              {/* 23. Legal Remedies and Professional Assistance */}
              <section id="legal-remedies-assistance" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 23
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  23. Legal Remedies &amp; When to Seek Advocate Representation
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    While simple default negotiations can sometimes be initiated directly by borrowers, legal representation becomes crucial in the following circumstances:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-black">
                    <li><strong>Receipt of Section 138 NI Act or Section 25 PSSA Notice:</strong> A formal legal reply drafted by a practicing advocate must be served within the statutory period to set up your defense and prevent summary conviction.</li>
                    <li><strong>Notice of Arbitration:</strong> Objecting to unilaterally appointed sole arbitrators and filing applications under Section 11, 12, or 16 of the Arbitration and Conciliation Act 1996.</li>
                    <li><strong>Unlawful Harassment &amp; Blackmail:</strong> Issuing formal Cease &amp; Desist notices, criminal complaints under BNS/IPC, and initiating injunction proceedings before Civil Courts against illegal workplace visits.</li>
                    <li><strong>Drafting Watertight Settlement Contracts:</strong> Reviewing the bank&apos;s settlement letter to ensure it does not contain hidden clauses that keep personal guarantees or co-borrower liabilities alive.</li>
                  </ul>
                </div>
              </section>

              {/* 24. Loan Settlement FAQs */}
              <section id="faqs" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 24
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  24. Comprehensive Loan Settlement FAQs (20 Essential Q&amp;As)
                </h2>
                <p className="text-xs sm:text-sm text-black mb-4 sm:mb-6">
                  Answers to the most critical legal, operational, and financial questions regarding loan settlement in India:
                </p>

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

              {/* 25. Conclusion — Loan Settlement in India */}
              <section id="conclusion" className="scroll-section scroll-mt-28 border-t border-gray-200 pt-6 sm:pt-8">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CHAPTER 25
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  25. Conclusion: Your Action Plan for Financial Freedom
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Loan settlement is a viable, legally protected exit route for honest borrowers overwhelmed by uncontrollable economic distress. It shields your mental sanity, halts aggressive recovery intimidation, and formally liquidates crushing liabilities.
                  </p>
                  <p>
                    However, settlement must never be entered into impulsively or without proper legal documentation. Always demand written settlement sanction letters, verify authorized bank payment channels, insist on your No Dues Certificate, and commit to a structured 24-month credit rebuilding roadmap.
                  </p>

                  <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white my-4 sm:my-6 space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-xl font-bold">Don&apos;t Fight the Bank Alone</h3>
                    <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                      At CredSettle, our team of seasoned advocates and banking resolution specialists safeguard your rights under RBI guidelines, stop recovery agent harassment immediately, and negotiate the highest possible legal waiver for your loans.
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

                  <div className="p-3.5 sm:p-4 bg-gray-100 rounded-xl text-[11px] sm:text-xs text-black space-y-1">
                    <p><strong>Regulatory &amp; Legal Attribution:</strong> Content authored and maintained in compliance with Reserve Bank of India (Compromise Settlements and Technical Write-offs Framework 2023, Circular DOR.STR.REC.20/21.04.048/2023-24) and Banking Regulation Act, 1949.</p>
                    <p><em>Disclaimer: The contents of this master guide are published for informational purposes and do not constitute formal attorney-client advice until a legal representation agreement is formally executed.</em></p>
                  </div>
                </div>
              </section>

            </article>
          </div>

          {/* Right Column: Sticky Conversion & Emergency Defense Card (15% Width) */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-20 space-y-4">
              
              <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-blue-200 text-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center text-sm mb-2">
                  🛡️
                </span>
                <h4 className="font-bold text-xs text-black mb-1">Halt Multi-Loan Calls</h4>
                <p className="text-[10px] text-black mb-3 leading-tight">
                  Official advocate notices shield your family from cross-lender recovery pressure within 24 hrs.
                </p>
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
                <span className="font-bold text-black block text-[11px]">Composite Debt Calculator</span>
                <p className="text-[10px] text-black leading-tight">Simulate potential compromise waivers across all your active loans and bank cards.</p>
                <a href="#settlement-calculator" className="text-[10px] text-blue-600 font-semibold block pt-1 hover:underline">Estimate Combined Relief ↓</a>
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
          <span className="bg-blue-800 text-[10px] px-1.5 py-0.5 rounded-full">25</span>
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
    </>
  );
}
