'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';

export default function CreditCardSettlementPageClient() {
  const [activeId, setActiveId] = useState<string>('intro-credit-card-settlement');
  const [isMobile, setIsMobile] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [tocSearch, setTocSearch] = useState('');
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isFirefox, setIsFirefox] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Credit Card OTS Calculator State
  const [totalCardDues, setTotalCardDues] = useState<number>(450000);
  const [corePrincipalPurchases, setCorePrincipalPurchases] = useState<number>(230000);
  const [monthlyInHandSalary, setMonthlyInHandSalary] = useState<number>(45000);
  const [defaultDurationMonths, setDefaultDurationMonths] = useState<number>(7);

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

  // 48 Master Table of Contents Sections Organised in 5 Structured Modules
  const navModules = [
    {
      moduleTitle: 'Module 1: Fundamentals, Mechanics & Eligibility',
      links: [
        { id: 'intro-credit-card-settlement', label: '1. Introduction to Credit Card Settlement' },
        { id: 'what-is-credit-card-settlement', label: '2. What Is Credit Card Settlement?' },
        { id: 'easy-meaning-credit-card-settlement', label: '3. Easy Meaning of Credit Card Settlement' },
        { id: 'how-credit-card-settlement-works', label: '4. How Does Credit Card Settlement Work?' },
        { id: 'how-to-do-credit-card-settlement', label: '5. How to Do Credit Card Settlement?' },
        { id: 'credit-card-settlement-process-step-by-step', label: '6. Credit Card Settlement Process – Step by Step' },
        { id: 'when-to-consider-settlement', label: '7. When Should You Consider Credit Card Settlement?' },
        { id: 'eligibility-credit-card-settlement', label: '8. Who Is Eligible for Credit Card Settlement?' },
        { id: 'how-much-settled-for', label: '9. How Much Can a Credit Card Be Settled For?' },
        { id: 'settlement-amount-calculation-examples', label: '10. Credit Card Settlement Amount – Calculation and Examples' },
      ]
    },
    {
      moduleTitle: 'Module 2: Comparisons, Pros, Cons & Credit Score Impact',
      links: [
        { id: 'settlement-vs-full-repayment', label: '11. Credit Card Settlement vs Full Repayment' },
        { id: 'settlement-vs-restructuring', label: '12. Credit Card Settlement vs Credit Card Restructuring' },
        { id: 'settlement-vs-closure', label: '13. Credit Card Settlement vs Credit Card Closure' },
        { id: 'advantages-credit-card-settlement', label: '14. Advantages of Credit Card Settlement' },
        { id: 'disadvantages-risks-settlement', label: '15. Disadvantages and Risks of Credit Card Settlement' },
        { id: 'impact-on-cibil-score', label: '16. Impact of Credit Card Settlement on CIBIL Score' },
        { id: 'bureau-reporting-credit-card-settlement', label: '17. Credit Card Settlement and Credit Bureau Reporting' },
        { id: 'how-long-affects-cibil', label: '18. How Long Does Credit Card Settlement Affect CIBIL?' },
        { id: 'how-to-improve-cibil-after-settlement', label: '19. How to Improve CIBIL Score After Credit Card Settlement' },
      ]
    },
    {
      moduleTitle: 'Module 3: RBI Guidelines, Defaults & Legal Protection',
      links: [
        { id: 'rbi-guidelines-credit-card-settlement', label: '20. RBI Guidelines for Credit Card Settlement' },
        { id: 'rbi-guidelines-recovery-agents', label: '21. RBI Guidelines for Credit Card Recovery Agents' },
        { id: 'credit-card-default-what-happens', label: '22. Credit Card Default – What Happens If You Stop Paying?' },
        { id: 'legal-consequences-credit-card-default', label: '23. Legal Consequences of Credit Card Default' },
        { id: 'can-bank-take-legal-action', label: '24. Can a Bank Take Legal Action for Credit Card Debt?' },
        { id: 'settlement-after-legal-notice', label: '25. Credit Card Settlement After Receiving a Legal Notice' },
        { id: 'settlement-during-arbitration-proceedings', label: '26. Credit Card Settlement During Arbitration or Legal Proceedings' },
        { id: 'recovery-agent-harassment', label: '27. Credit Card Recovery Agent Harassment' },
        { id: 'rights-against-recovery-harassment', label: '28. Rights of Credit Card Customers Against Recovery Harassment' },
      ]
    },
    {
      moduleTitle: 'Module 4: Negotiation, Documentation & Company Selection',
      links: [
        { id: 'how-to-negotiate-with-bank', label: '29. How to Negotiate Credit Card Settlement With a Bank' },
        { id: 'documents-required-credit-card-settlement', label: '30. Documents Required for Credit Card Settlement' },
        { id: 'settlement-without-company-diy', label: '31. Credit Card Settlement Without a Settlement Company' },
        { id: 'how-to-choose-settlement-company', label: '32. How to Choose a Credit Card Settlement Company' },
        { id: 'settlement-company-vs-direct-negotiation', label: '33. Credit Card Settlement Company vs Direct Bank Negotiation' },
        { id: 'settlement-fees-and-charges', label: '34. Credit Card Settlement Fees and Charges' },
      ]
    },
    {
      moduleTitle: 'Module 5: Post-Settlement, Credit Repair, FAQs & Roadmap',
      links: [
        { id: 'what-happens-after-settlement', label: '35. What Happens After Credit Card Settlement?' },
        { id: 'settlement-letter-ndc-documents', label: '36. Settlement Letter, No-Dues Certificate and Other Documents' },
        { id: 'check-settlement-status-credit-report', label: '37. How to Check Credit Card Settlement Status on Your Credit Report' },
        { id: 'correct-incorrect-bureau-reporting', label: '38. How to Correct Incorrect Credit Bureau Reporting After Settlement' },
        { id: 'common-mistakes-to-avoid', label: '39. Common Mistakes to Avoid During Credit Card Settlement' },
        { id: 'credit-card-settlement-scams-fraud', label: '40. Credit Card Settlement Scams and Fraud – How to Stay Safe' },
        { id: 'can-you-get-loan-after-settlement', label: '41. Can You Get a Loan After Credit Card Settlement?' },
        { id: 'can-you-get-card-after-settlement', label: '42. Can You Get a Credit Card After Settlement?' },
        { id: 'how-to-rebuild-financial-profile', label: '43. How to Rebuild Your Financial Profile After Settlement' },
        { id: 'faqs-credit-card-settlement', label: '44. Frequently Asked Questions About Credit Card Settlement' },
        { id: 'professional-settlement-assistance', label: '45. Professional Credit Card Settlement Assistance' },
        { id: 'why-choose-professional-service', label: '46. Why Choose a Professional Credit Card Settlement Service?' },
        { id: 'complete-step-by-step-guide', label: '47. Credit Card Settlement – Complete Step-by-Step Guide' },
        { id: 'conclusion-credit-card-settlement', label: '48. Conclusion' },
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

  // Credit Card Calculator Logic: Compounding finance charges + late fees + principal haircut
  const calculationResult = useMemo(() => {
    const total = Math.max(0, Number(totalCardDues) || 0);
    const principal = Math.max(0, Math.min(total, Number(corePrincipalPurchases) || 0));
    const financeAndPenalties = Math.max(0, total - principal);
    const months = Math.max(1, Number(defaultDurationMonths) || 1);

    // In credit cards, 100% of accumulated finance charges, late fees, and GST are waived
    const financeWaiver = financeAndPenalties;

    // Principal haircut based on default vintage in months
    let principalHaircutRate = 0.35;
    if (months >= 18) {
      principalHaircutRate = 0.60;
    } else if (months >= 10) {
      principalHaircutRate = 0.50;
    } else if (months >= 5) {
      principalHaircutRate = 0.40;
    }

    const principalWaiver = principal * principalHaircutRate;
    const totalWaiver = financeWaiver + principalWaiver;

    // Settlement payable amount
    const payableEstimated = Math.max(principal * 0.30, total - totalWaiver);
    const payableLow = Math.round((payableEstimated * 0.90) / 1000) * 1000;
    const payableHigh = Math.round((payableEstimated * 1.10) / 1000) * 1000;

    const savingsLow = Math.max(0, total - payableHigh);
    const savingsHigh = Math.max(0, total - payableLow);

    return {
      total,
      principal,
      financeAndPenalties,
      payableLow,
      payableHigh,
      savingsLow,
      savingsHigh,
      haircutPercent: Math.min(80, Math.round((savingsHigh / Math.max(total, 1)) * 100)),
      delinquencyStage: months >= 12 ? 'Loss Asset / Written-Off' : months >= 3 ? 'Sub-Standard NPA' : 'SMA Stage'
    };
  }, [totalCardDues, corePrincipalPurchases, defaultDurationMonths]);

  // Comprehensive 18 Authoritative Credit Card Settlement FAQs
  const creditCardFaqs = [
    {
      question: "How does the card debt settlement process work under Indian banking regulations?",
      answer: "Card debt closure relief is an authorized bilateral pact executed between an overburdened cardholder and the card-issuing bank or NBFC. Because revolving card balances incur harsh monthly financing levies (often exceeding 42% to 52.86% APR) coupled with recurring GST surcharges. Cardholders with genuine money setbacks cannot service compound rates. Under a sanctioned OTS. The issuing bank permanently foregoes all accrued finance fees and late fines. Accepts a settle one-off concession against checked merchant purchases. Terminates the plastic card account. delivers a conclusive No Dues letter extinguishing every past and future risk."
    },
    {
      question: "Why do credit card debts get significantly higher settlement waivers than personal loans?",
      answer: "own loans are disbursed as fixed-main sum term loans with moderate amortized rates (11% to 18% p.a.). In contrast. Credit card debts consist of revolving clean lines where unpaid balances compound monthly at 3.5% to 4.0% per month. Compounded with 18% GST and overlimit charges. Within 12 to 18 months of default. Built up finance charges routinely exceed 50% to 65% of the total ledger balance. Because the bank's actual out-of-pocket disbursement (the core merchant purchases) is only a fraction of the demanded balance. The bank's closure board can write off 50% to 75% of the gross ledger claim while still recovering its core funds."
    },
    {
      question: "Is settling an overdue card account legally permitted by Indian banking regulators?",
      answer: "closure relief of overdue card accounts is fully endorsed by the Reserve Bank under its complete Credit Card Conduct Directions (2022) in tandem with the June 2023 prudential charter for technical write-downs. Under these standards. Every card provider must institute a formal Board-authorized method permitting amicable closure terms for honest cardholders afflicted by forced bankruptcy or severe money stress."
    },
    {
      question: "What happens to the Minimum Amount Due (MAD) trap when I stop paying my credit card?",
      answer: "The Minimum Amount Due (MAD) is typically 5% of the statement balance plus applicable monthly finance charges and taxes. When a clients pays only MAD. Nearly 90% of the payment goes toward servicing monthly rates and GST. while the core main sum decreases by less than 1%. If you stop paying MAD. The account enters default (SMA-0 to SMA-2) and turns into a Non-Performing Asset (NPA) after 90 days. While late fees and rates compound temporarily. Entering the NPA and charge-off stage enables our legal counsel to settle an OTS. Cutting through the growing cycle and wiping out the inflated rates permanently."
    },
    {
      question: "Are external collection agencies allowed to contact my office colleagues or family members regarding card dues?",
      answer: "Such practices are unlawful under central bank directives. The Reserve Bank's 2022 Conduct Guidelines for Credit Cards forbid third-party claims vendors from humiliating cardholders. Dialing workplace landlines. Revealing debt information to third parties. contacting clients outside the 08:00 to 19:00 window. Threaten. Unannounced workplace visits. Threatening messages violate legal safety against penal threats (Section 351 Bharatiya Nyaya Sanhita). Warranting prompt complaints to the card desk nodal head and the Central Banking RBI officer."
    },
    {
      question: "Does non-payment of credit card bills constitute a criminal offence leading to police arrest?",
      answer: "Failure to clear monthly card statements is purely a civil default regarding an clean revolving facility. Not a penal offence. The Supreme Court has repeatedly affirmed that genuine economic incapacity to discharge contractual debts does not warrant police detention or penal custody. Local police lack legal valid to lodge an FIR or summon a cardholder over pending card balances unless the institution establishes identity fraud or penal deception from the outset."
    },
    {
      question: "How should a cardholder respond to an e-mandate dishonour notice under Section 25 PSSA?",
      answer: "When recurring autopay for your card statement fails and the card provider issues a demand notice under Section 25 of the Payment and closure Systems Act. Prompt legal action is vital. Cardholders receive a strict 15-day timeline to furnish an valid reply. CredSettle's court cases team prepares an itemized legal rejoinder highlighting illegal finance charges. Demonstrating legitimate income disruption. starting formal OTS closure. which stays contentious magistrate actions."
    },
    {
      question: "What specific bureau updates occur across CIBIL after credit card settlement?",
      answer: "Upon receipt of the closure funds. The card issuer notifies credit registries to adjust both the current ledger balance and overdue amount to zero. while marking the account remark as 'Settled' or 'Post-Charge-Off'. While this causes a temporary rating reduction. It puts an fast end to worsening monthly overdue tallies (DPD 90/180/360+) and removes the toxic overdue tag. Creating a clear pathway to rebuild your credit rating above 750 via secured money products within 18 months."
    },
    {
      question: "Is it possible to upgrade an existing settled card remark to full closure later on?",
      answer: "Cardholders retain the prerogative to convert their credit standing at any future date. When your money cash flow stabilizes. You can contact the original card department. Remit the discounted haircut sum (the portion previously written off by the institution). obtain a pristine final clearance letter. The institution then submits updated data to the credit bureaus. Reclassifying the card account to 'Closed' and removing any adverse historical remarks."
    },
    {
      question: "What is the typical timeframe required to finalize an advocate-assisted card settlement?",
      answer: "A structured. Counsel-led credit card closure typically spans 3 to 6 weeks. Our counsel-managed card closure schedule unfolds across five key milestones: early ledger deconstruction (Days 1. 5). Anti-threats legal notice delivery (Days 6. 10). Formal hardship dossier dispatch to the Card Operations Head (Days 11. 18). Multi-round closure terms talks (Days 19. 28). direct fund payment leading to formal closure certification (Days 29. 42)."
    },
    {
      question: "How long must I wait before seeking new credit lines following an OTS on a card?",
      answer: "Under the central bank's one-time closure rules. Scheduled banks adhere to a minimum twelve-month cooling-off interval before extending new clean lending facilities to applicants with a recent closure record. Yet. Secured credit avenues remain accessible without delay."
    },
    {
      question: "Can I get a new credit card after completing a credit card settlement?",
      answer: "While clean credit cards from major trade banks are generally unavailable during the first 12 to 18 months. You can fast obtain a Fixed Deposit-backed Secured Credit Card (such as IDFC WOW. OneCard. Kotak 811 DreamDifferent). These cards require no credit score verification. Report positive monthly payment history to CIBIL. serve as the most effective tool to rehabilitate your credit score back above 750."
    },
    {
      question: "Which records must a cardholder assemble to verify commercial inability to pay card dues?",
      answer: "Credit card closure boards demand verifiable proof of authentic cash-flow disruption before clearing main sum write-offs. Essential papers includes identity letters (PAN/Aadhaar). Previous 12 months of itemized card statements revealing harsh financing charges. 6 to 12 months bank account transaction ledgers. Recent tax returns or salary reduction notices. Concrete distress proof such as medical treatment bills. Job retrenchment papers. enterprise winding-up records."
    },
    {
      question: "What is the danger of paying a recovery agent based on a verbal settlement promise or WhatsApp letter?",
      answer: "This is one of the most common and devastating debt traps. agents often issue counterfeit closure letters or demand payment via UPI or cash with verbal promises that your card will be closed. Once payment is made. The bank allocates the funds to built up penal rates. Leaving the main sum unpaid and the default active! You must NEVER remit funds without an authentic. Checked closure Sanction Letter issued on valid bank letterhead with a verifiable reference number. Signed by an authorized bank head. directing payment straight into your card account."
    },
    {
      question: "Are unilateral arbitration proceedings initiated by credit card companies legally enforceable?",
      answer: "Credit card issuers often attempt to refer unresolved card balances to privately appointed sole arbitrators. The Supreme Court has ruled in landmark decisions such as TRF Limited and Perkins Eastman that lenders cannot unilaterally appoint arbitrators to adjudicate their own claims. CredSettle's counsel enter appearances. Challenge the jurisdiction of privately engaged arbitration tribunals. transition the matter toward by law sanctioned forum closure or direct closure."
    },
    {
      question: "Why do National Lok Adalat sittings offer an advantageous forum for resolving card disputes?",
      answer: "Conducted under the legal auspices of legal legal services bodies every quarter. Lok Adalats serve as a judicial closure forum where banks offer large concessions to clean up bad card books. Awards formulated by a Lok Adalat bench possess equivalent enforceability to civil court decrees. Require no judicial filing expenses. deliver finality with zero rules for subsequent legal challenges."
    },
    {
      question: "Can CredSettle help if I have multiple credit cards from different banks in default?",
      answer: "Yes. Over 75% of distressed cardholders service balances across 2 to 6 different banks simultaneously (e.g. HDFC. SBI Card. ICICI. Axis. RBL. Standard Chartered). Our legal team executes an integrated portfolio relief framework. Insulating cardholders against simultaneous threats from multiple card desks. Staggering closure pacts to respect your actual cash flow. capturing peak fiscal discounts."
    },
    {
      question: "Why is a card transaction slip insufficient compared to a bank NDC letter?",
      answer: "A bank payment proof or UTR reference only validates that funds were transferred to the card account. It does not establish that the lender has waived the uncollected balance. Only a formal. Seal-bearing No Dues letter issued by the credit card department's authorized signatory serves as an unimpeachable legal release. Formally acknowledging that the facility is cancelled with zero residual claim."
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
            RBI Compromise Framework &amp; Credit Card Debt Relief 2026
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight leading-snug break-words">
            Credit Card Settlement in India
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200"> The Definitive Legal &amp. money Master Guide </p>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1"> Escape the 42%. 52% growing finance charge trap. Halt harsh agents threats. Defend legal legal notices under Section 25 PSSA. Secure 50%. 75% ledger waivers. obtain valid No Dues letters. </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md active:scale-98 text-center"
            >
              Get Free Case Assessment
            </Link>
            <a
              href="#credit-card-calculator"
              className="px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm text-white bg-blue-600/40 hover:bg-blue-600/60 border border-blue-400/40 transition-all backdrop-blur-sm active:scale-98 text-center"
            >
              Estimate Card OTS Waiver
            </a>
          </div>
          <div className="mt-3.5 sm:mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-blue-200/80">
            <span>✓ RBI Master Direction Compliant</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ 100% Legal Harassment Defense</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Verified Bank No Dues Certificates</span>
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
              { name: 'Credit Card Settlement', url: '/services/credit-card-settlement' }
            ]}
          />
        </div>
      </div>

      {/* Trust & E-E-A-T Signal Banner Matching loan-settlement */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-3 sm:px-4 border-b border-slate-800 text-[11px] sm:text-xs md:text-sm">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-600 text-white font-semibold px-2 py-0.5 rounded text-[10px] sm:text-xs">LEGAL ADVISORY</span>
            <span className="leading-tight">Reviewed by Senior Banking Law Advocates &amp; Debt Resolution Counsel</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400 text-[10px] sm:text-xs">
            <span>Last Updated: October 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>RBI Master Direction &amp; Compromise Settlement Framework 2023-24</span>
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
              href="#credit-card-calculator"
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
              className={`px-2.5 py-0.5 rounded-full whitespace-nowrap font-medium transition-colors ${
                selectedModule === null
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              All 48
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
                    <p className="text-[10px] text-slate-300">48 Master Sections • Credit Card closure</p>
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
                        <div className="space-y-0.5">
                          {filteredInModule.map((link) => (
                            <button
                              key={link.id}
                              onClick={() => handleLinkClick(link.id)}
                              className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-colors leading-tight ${
                                activeId === link.id
                                  ? 'bg-blue-600 text-white font-bold'
                                  : 'text-black hover:bg-blue-50'
                              }`}
                            >
                              {link.label}
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
                    Consult Banking Advocate
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
                  <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">48</span>
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

              {/* Quick Legal Help Banner in Sidebar - Always 100% visible, never cut in half */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-2.5 sm:p-3 rounded-xl text-white shadow-sm text-center flex-shrink-0">
                <div className="flex items-center justify-center gap-1.5 mb-1 text-blue-300 text-xs">
                  <span>⚖️</span>
                  <div className="font-bold text-xs text-white">Card Recovery Relief</div>
                </div>
                <p className="text-[10px] text-blue-200 mb-2 leading-snug"> Instant legal defense against harsh telecallers. Home visits. notices. </p>
                <Link
                  href="/contact"
                  className="block text-center bg-blue-500 hover:bg-blue-400 text-white font-bold text-[11px] py-1.5 px-2 rounded-lg transition-colors shadow"
                >
                  Consult Advocate
                </Link>
              </div>
          </aside>

          {/* Middle Column: Master 48-Section Editorial Guide (70% Width) */}
          <div className="lg:w-[70%] flex-1 min-w-0">
            <article className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-sm border border-gray-200/90 space-y-8 sm:space-y-12 overflow-hidden text-black">
              {/* ------------------------------------------------------------- */}
              {/* 1. Introduction to Credit Card Settlement                     */}
              {/* ------------------------------------------------------------- */}
              <section id="intro-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 1
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  1. Introduction to Credit Card Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Over the last decade. India has witnessed an explosive growth in retail revolving credit. Millions of salaried experts. Independent entrepreneurs. small firm operators rely on credit cards to navigate modern transactional life. Yet. Unlike traditional fixed-tenure amortized loans. A credit card is a <strong>revolving credit facility</strong> governed by some of the most punitive money terms in the Indian banking system. </p>
                  <p> When unexpected life disruptions occur. Such as forced job retrenchment. Sudden firm failure. Medical emergencies requiring large out-of-pocket hospital expenditures. the loss of a household&apos. s primary breadwinner. cardholders quickly find that credit card debt behaves like quicksand. The monthly growing finance charges (routinely ranging from <strong>3.5% to 4.25% per month</strong>Translating to an exorbitant <strong>42% to 52.86% APR</strong>). Combined with 18% Goods and Services Tax (GST). Late payment fines. Overlimit fees. Cause modest balances to double or triple within 18 months. </p>
                  <p> <strong>Credit card closure</strong> emerges as the definitive legal and money exit method for distressed clients caught in this growing debt spiral. Governed by the prudential guidelines and one-time closure circulars of the <strong>Reserve Bank of India (RBI)</strong>Credit card closure allows an honest clients facing genuine economic hardship to formally settle with card issuers. Secure massive waivers on unconscionable finance charges and fines. discharge their entire debt burden through a single discounted payment or structured short-term installments. </p>
                  <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-200 text-xs sm:text-sm text-blue-950 space-y-2">
                    <span className="font-bold block text-blue-900">Key Realization for Cardholders:</span>
                    <p> A credit card default is <strong>not a penal act</strong>. Under established legal doctrines. Inability to settle revolving card balances owing to economic catastrophe is purely a civil contractual dispute. You are protected by legal rights. Legal banking rules. strict RBI fair practice codes against calls threats. </p>
                  </div>
                </div>
              </section>

              {/* Interactive Assessment Funnel - Blended inside Middle Container Above Chapter 2 */}
              <div className="not-prose my-6 sm:my-8 p-3 sm:p-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-slate-50 rounded-2xl border border-blue-100 shadow-xs">
                <InteractiveLeadFunnel className="!bg-transparent !p-0 !py-0 !px-0" />
              </div>

              {/* ------------------------------------------------------------- */}
              {/* 2. What Is Credit Card Settlement?                            */}
              {/* ------------------------------------------------------------- */}
              <section id="what-is-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 2
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  2. What Is Credit Card Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> <strong>Credit card closure</strong>. formally designated in Indian banking operations as a <strong>One-Time closure (OTS)</strong> or one-time closure. is a by law binding bilateral pacts entered into between a credit cardholder and the card-issuing bank or Non-Banking money Company (NBFC). Under this bilateral accord. The issuer agrees to accept a mutually settle. Discounted lump sum or short-term phased payment that is greatly lower than the total built up ledger balance demanded in current monthly statements. </p>
                  <p> Once the agreed closure sum is remitted into the credit card account according to the terms of a formal. Written <strong>closure Sanction Letter</strong>The bank permanently writes off the remaining balance (the &quot. haircut&quot. ). Ceases all ongoing legal or claims procedures. Terminates the card facility. issues a complete <strong>No Dues letter (NDC)</strong> or No Objection letter (NOC). </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Core Element</th>
                          <th className="p-3">Legal Framework</th>
                          <th className="p-3">Practical Execution</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">Contractual Nature</td>
                          <td className="p-3">Section 63 of the Contract Act (Creditor's legal authority to remit or dispense with performance)</td>
                          <td className="p-3">Card issuer formally accepts a lesser sum in complete discharge of the credit debts.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">RBI Backing</td>
                          <td className="p-3">RBI Master Direction on Credit Cards &amp. June 8. 2023 deal Framework</td>
                          <td className="p-3">Mandates board-approved deal closure policies across all trade banks and NBFCs.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Debt Extinguishment</td>
                          <td className="p-3">Full and permanent discharge of clients risk</td>
                          <td className="p-3">Bank issues an valid No Dues letter. Barring any future claims demands or third-party claims.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 3. Easy Meaning of Credit Card Settlement                     */}
              {/* ------------------------------------------------------------- */}
              <section id="easy-meaning-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 3
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  3. Easy Meaning of Credit Card Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> In simple everyday language. Credit card closure means reaching a practical. Discounted money closure with your bank when paying your total card bill in full has become fully impossible due to genuine hardship. </p>
                  <p> Consider how a credit card functions compared to other forms of borrowing in India: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>Zero pledge Security:</strong> A home loan is secured by your apartment. a car loan is secured by your vehicle. If you default on a secured loan. The lender can start real asset seizure under the SARFAESI Act. 2002. A credit card. On the other hand. Is <em>100% clean</em>. The bank holds no mortgage. No gold pledge. no home lien. </li>
                    <li> <strong>The Hyperbolic Billing Structure:</strong> When you purchase items worth ₹1,50,000 on a credit card and later experience job loss. You stop paying. After 12 months. The bank&apos. S statement does not demand ₹1,50,000. it demands ₹3,40,000! Where did the extra ₹1,90,000 come from? It consists fully of finance charges growing monthly at 42%+ per annum. Recurring ₹1,200 monthly late payment fines. Overlimit charges. 18% GST on every single fee. </li>
                    <li> <strong>The trade Reality for the Bank:</strong> When an account is overdue for 6 to 12 months. The bank knows that attempting to recover ₹3,40,000 from an unemployed or insolvent individual through civil court cases is commercially pointless. Court court cases takes years. Incurs hefty counsel fees. guarantees zero claims against an clean debtor. The bank would much rather recover ₹1,20,000 to ₹1,50,000 in fast. Guaranteed cash today than carry an irrecoverable non-performing asset indefinitely. </li>
                  </ul>
                  <p> closure is simply the formalized procedure through which the bank cuts away all the inflated rates and fines. Applies a discount to the core purchase main sum. accepts what you can realistically afford to pay to close the card permanently. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 4. How Does Credit Card Settlement Work?                      */}
              {/* ------------------------------------------------------------- */}
              <section id="how-credit-card-settlement-works" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 4
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  4. How Does Credit Card Settlement Work?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> grasp how a credit card closure works requires dissecting the internal operational and money workings of Indian credit card issuers (such as HDFC Bank. SBI Card. ICICI Bank. Axis Bank. RBL Bank. Kotak Mahindra Bank. American Express). </p>
                  <p> When a credit card default progresses through different stages of default. The bank&apos. s internal provisioning and handling change fundamentally: </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                      <span className="font-bold text-xs text-blue-900 block">Phase 1: Special Mention (SMA)</span>
                      <p className="text-[11px] text-black"> Days 1 to 90. Handled by telecalling claims call centers. Lenders push aggressively for Minimum Amount Due (MAD) or EMI conversion. closures are strictly resisted at this stage. </p>
                    </div>
                    <div className="p-3.5 bg-amber-50/60 border border-amber-200 rounded-xl space-y-1.5">
                      <span className="font-bold text-xs text-amber-900 block">Phase 2: NPA Classification</span>
                      <p className="text-[11px] text-black"> Days 91 to 180. Account classified as Sub-Standard Non-Performing Asset under RBI prudential norms. Bank must mandate 15% capital provisioning on its balance sheet. </p>
                    </div>
                    <div className="p-3.5 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1.5">
                      <span className="font-bold text-xs text-emerald-900 block">Phase 3: Charge-Off &amp; Write-Off</span>
                      <p className="text-[11px] text-black"> Days 180+. Card is hotlisted. Credit line permanently cancelled. debt transferred to Card Stressed Asset claims handling Vertical (SARB). 100% loss provisioning applied. Prime window for deep OTS waivers! </p>
                    </div>
                  </div>
                  <p> Once the debt reaches Phase 3. The card issuer transfers valid from frontline claims telecallers to its internal <strong>closure board</strong> or <strong>Stressed Asset handling Desk</strong>. This board operates under strict delegated money powers approved by the bank&apos. s Board of Directors. They possess the legal valid to waive 100% of built up rates and fines. up to 50%. 60% of the actual purchase main sum. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 5. How to Do Credit Card Settlement?                          */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-do-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 5
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  5. How to Do Credit Card Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Executing a credit card closure is not a casual verbal talks with outsourced calls telecallers. Approaching closure incorrectly often leads to devastating money traps. such as making partial payments that the bank absorbs as rates while keeping the default active. </p>
                  <p> To execute a lawful. Binding credit card closure that permanently clears your debt. Follow this proven bank protocol: </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>Stop Verbal Discussions with calls Telecallers:</strong> Third-party calls agents have zero valid to sanction an valid OTS. Demands made over telephone calls or WhatsApp are fully unverified. Shift all contacts to written. Verifiable channels. </li>
                    <li> <strong>Forensic Statement Audit:</strong> Obtain your last 12 to 24 months of itemized credit card statements. Calculate exactly how much money was spent on actual merchant transactions and ATM cash withdrawals. Versus how much represents pure growing finance charges. GST. fines. </li>
                    <li> <strong>Establish Irrefutable Hardship Evidence:</strong> Compile a complete money stress dossier containing medical records. Layoff letters. End notices. audited firm profit-and-loss statements demonstrating complete income collapse. </li>
                    <li> <strong>Submit a Formal Hardship &amp. OTS Petition:</strong> Submit a structured legal petition addressed straight to the Bank&apos. S Card Operations Head. Card Stressed Asset claims handling Vertical. Main sum Nodal head. Proposing a exact lump-sum closure sum supported by documentary proof. </li>
                    <li> <strong>Multi-Round board talks:</strong> The bank will initially counter with an unreasonable demand (e.g. asking for 80% to 90% of the ledger balance). Skilled talks counters this demand by proving your inability to pay more and emphasizing the zero claims value of clean debt. </li>
                    <li> <strong>Obtain the Written closure Sanction Letter:</strong> Never transfer a single rupee without receiving a formal. Signed sanction letter on bank letterhead bearing an authentic reference number. Your card account number. The sanctioned closure figure. a clear payment due date. </li>
                    <li> <strong>Remit Payment straight into the Card Account:</strong> Pay only through verifiable online banking modes (NEFT. RTGS. direct net banking) credited straight to your credit card account number. Never pay via cash or third-party UPI QR codes! </li>
                    <li> <strong>Procure the Stamped No Dues letter:</strong> Within 15 to 30 days of payment realization. Follow up to obtain the valid No Dues letter and check that credit bureaus have updated the account balance to zero. </li>
                  </ol>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 6. Credit Card Settlement Process – Step by Step              */}
              {/* ------------------------------------------------------------- */}
              <section id="credit-card-settlement-process-step-by-step" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 6
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  6. Credit Card Settlement Process – Step by Step
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The complete bank lifecycle of an counsel-led credit card closure spans 30 to 50 days across six structured operational phases: </p>
                  <div className="space-y-3 my-4">
                    <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-xs text-black">Step 1: Portfolio Diagnostic &amp. Legal Shield (Days 1. 5)</h4>
                        <p className="text-[11px] text-black mt-0.5"> Forensic review of card ledgers. Separation of core purchase main sum from finance charges. Issuance of an counsel-led Representation Notice under counsel Act rules. Mandating fast cessation of phone calls. </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-xs text-black">Step 2: Hardship Substantiation Dossier (Days 6. 12)</h4>
                        <p className="text-[11px] text-black mt-0.5"> Assembling income proofs. 6. 12 months bank statements confirming negligible disposable cash flow. Medical records. layoff letters to satisfy bank internal audit requirements under RBI guidelines. </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-xs text-black">Step 3: Formal OTS Petition Submission (Days 13. 20)</h4>
                        <p className="text-[11px] text-black mt-0.5"> Drafting and serving a detailed closure memo straight to the bank&apos. S Specialized Card claims board and Zonal Credit Head. Citing RBI circulars and requesting a complete waiver of rates and fines. </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-bold text-xs text-black">Step 4: Credit board Bilateral talks (Days 21. 32)</h4>
                        <p className="text-[11px] text-black mt-0.5"> counsel-led talks rounds with the bank&apos. S closure board. Pushing back against first inflated counter-offers to lock in the lowest possible payout sum (typically 50% to 75% gross savings). </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">5</div>
                      <div>
                        <h4 className="font-bold text-xs text-black">Step 5: Sanction Letter Verification &amp. Payment (Days 33. 40)</h4>
                        <p className="text-[11px] text-black mt-0.5"> Legal vetting of the valid written closure Sanction Letter to make sure no hidden risk clauses exist. Followed by direct online payment into the card account before the stipulated deadline. </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">6</div>
                      <div>
                        <h4 className="font-bold text-xs text-black">Step 6: No Dues letter &amp. desk Verification (Days 41. 55)</h4>
                        <p className="text-[11px] text-black mt-0.5"> Securing an authenticated real debt release letter from the bank confirming nil balance and verifying zero-rupee updates across credit bureaus. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 7. When Should You Consider Credit Card Settlement?           */}
              {/* ------------------------------------------------------------- */}
              <section id="when-to-consider-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 7
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  7. When Should You Consider Credit Card Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Credit card closure is an extraordinary debt relief remedy. It should not be treated as a casual discount method for clients with ample liquid funds. rather as an essential money life-raft when payment has become mathematically unviable. </p>
                  <p> You should urgently consider starting a formal credit card closure under the following exact diagnostic cases: </p>
                  <div className="space-y-2.5 my-3 text-xs sm:text-sm text-black">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong>1. The Minimum Amount Due (MAD) Trap:</strong> You have been paying the Minimum Amount Due every month for 6 to 12 months, yet your principal balance has not decreased by even 5%. You realize that you are simply throwing money into a furnace of compounding 42% interest and 18% GST.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong>2. Severe Debt-to-Income Imbalance:</strong> Your cumulative monthly credit card dues and loan EMIs exceed 60% to 80% of your total net in-hand monthly salary, forcing you to skip essential household expenses, children&apos;s education fees, or rent.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong>3. Involuntary Income Shock:</strong> You have experienced a sudden corporate layoff, substantial salary reduction, business liquidation, or severe physical incapacitation that eliminates your previous earning capacity.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong>4. Card Juggling &amp; Loan Rolling:</strong> You are taking cash advances or personal loans on one credit card simply to pay the minimum dues on another credit card—a fatal cycle known as &quot;credit juggling&quot; that inevitably ends in systemic insolvency.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong>5. Escalating Recovery Harassment:</strong> Unregulated collection agencies are calling your home, workplace, or relatives, causing acute mental anguish, panic, and loss of personal dignity.
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 8. Who Is Eligible for Credit Card Settlement?                */}
              {/* ------------------------------------------------------------- */}
              <section id="eligibility-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 8
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  8. Who Is Eligible for Credit Card Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Under Reserve Bank of India one-time closure guidelines and internal credit board policies of trade banks. Fit for a credit card OTS is predicated upon proving <strong>Genuine. Non-wilful money stress</strong>. Banks will not approve a closure for a clients who has large liquid funds in savings accounts or investments. </p>
                  <p> To qualify for a sanctioned credit card closure. The clients must satisfy the following core criteria: </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">1. Account Delinquency Vintage</span>
                      <p className="text-[11px] text-black"> The credit card must ideally have crossed <strong>three to six running defaulted billing cycles</strong>Placing it in the NPA or Written-Off classification. Banks rarely sanction main sum haircuts while an account is regular or in early SMA-0 stage. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">2. Verifiable Hardship Ground</span>
                      <p className="text-[11px] text-black"> The inability to pay must be supported by verifiable papers. Such as job end letters. Salary reduction slips. Hospital surgical summaries. firm GST cancellation records. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">3. Non-Wilful Defaulter Classification</span>
                      <p className="text-[11px] text-black"> The clients must not have committed money fraud. Forgery. fund siphoning. The default must be an honest result of economic misfortune rather than deliberate refusal to honor debts. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">4. Absence of Seizable Liquid Assets</span>
                      <p className="text-[11px] text-black"> The clients&apos. S bank statements must show that their net in-hand income is barely sufficient to cover basic family subsistence (food. Shelter. Medical. School fees). Leaving zero surplus for hyper-inflated card bills. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 9. How Much Can a Credit Card Be Settled For?                 */}
              {/* ------------------------------------------------------------- */}
              <section id="how-much-settled-for" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 9
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  9. How Much Can a Credit Card Be Settled For?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> A central question for every cardholder is: <em>&quot. What rate of my credit card bill can actually be waived?&quot. </em> </p>
                  <p> Because credit card balances consist of exorbitant rates and fees<strong>credit cards typically get greatly higher closure discounts than any other loan category in India</strong>. In a professionally settle one-time closure. The breakdown of waivers typically follows this realistic distribution: </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Component of Card Balance</th>
                          <th className="p-3">Standard Realistic Waiver Range</th>
                          <th className="p-3">Institutional Rationale</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">Penal Fees. Late Charges &amp. Overlimit Fees</td>
                          <td className="p-3 font-bold text-emerald-700">100% Full Waiver</td>
                          <td className="p-3">Arbitrary punitive charges waived universally under RBI fair practice codes.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">18% GST on rates &amp. Charges</td>
                          <td className="p-3 font-bold text-emerald-700">100% Full Waiver</td>
                          <td className="p-3">Reversed by the bank upon cancellation of underlying finance charges.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Accumulated Finance Charges (36%. 48% APR)</td>
                          <td className="p-3 font-bold text-emerald-700">90% to 100% Waiver</td>
                          <td className="p-3">Lenders readily forfeit growing rates to secure capital claims.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Core Purchase main sum (Actual Spend)</td>
                          <td className="p-3 font-bold text-blue-700">30% to 60% Haircut</td>
                          <td className="p-3">Determined by default age. Severity of hardship. counsel talks.</td>
                        </tr>
                        <tr className="bg-blue-50/50 font-bold text-black">
                          <td className="p-3">Total Gross Ledger Savings</td>
                          <td className="p-3 text-emerald-800">50% to 75% Overall Reduction</td>
                          <td className="p-3">Cardholders typically pay only 25% to 45% of the total inflated statement demand!</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 10. Credit Card Settlement Amount – Calculation and Examples  */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-amount-calculation-examples" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 10
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  10. Credit Card Settlement Amount – Calculation and Examples
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> To understand how dramatic the savings can be. Examine this authentic case illustration from CredSettle&apos. s debt relief files: </p>
                  <div className="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs sm:text-sm">
                    <div className="font-bold text-black text-sm sm:text-base border-b border-slate-200 pb-2">
                      Case Study: Vivek&apos;s ₹5,20,000 Credit Card Debt Resolution Across 2 Banks
                    </div>
                    <p> <strong>first Scenario:</strong> Vivek. A sales marketing manager in Gurugram. Held two credit cards (Card A: ₹3,10,000 limit. Card B: ₹2,10,000 limit). Following sudden company downsizing in early 2025. His monthly income ceased. Over 10 months of non-payment. The balances escalated: </p>
                    <ul className="list-disc pl-5 space-y-1 text-black">
                      <li><strong>Actual main sum Purchases (Merchant Spends):</strong> ₹2,35,000.</li>
                      <li><strong>growing Monthly Finance Charges (3.75%/mo):</strong> ₹1,85,000.</li>
                      <li><strong>Late Payment fines. Overlimit Fees &amp. 18% GST:</strong> ₹1,00,000.</li>
                      <li><strong>Total Demanded Gross Balance:</strong> <strong>₹5,20,000</strong></li>
                    </ul>
                    <p> <strong>Legal Strategy:</strong> CredSettle counsel stepped in. Issued anti-threats notices. Audited the ledger to segregate the ₹2,35,000 core spend. submitted a hardship petition supported by Vivek&apos. s end letter and job loss duration. </p>
                    <p> <strong>Sanctioned closure Outcome:</strong> </p>
                    <ul className="list-disc pl-5 space-y-1 text-black">
                      <li>100% waiver of fines and GST (₹1,00,000 eliminated).</li>
                      <li>100% waiver of accrued finance charges (₹1,85,000 eliminated).</li>
                      <li>45% main sum haircut on the core purchase balance (₹1,05,750 waived).</li>
                      <li><strong>Final Sanctioned Full &amp. Final OTS Amount: ₹1,29,250</strong></li>
                    </ul>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 font-semibold text-xs mt-2">
                      ✓ Final Result: Vivek achieved total savings of ₹3,90,750 (a 75.14% reduction on total claimed dues), paid the settlement in 2 convenient installments directly into his card accounts, and received stamped No Dues Certificates from both banks within 30 days.
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* OTS Calculator Section Matching loan-settlement               */}
              {/* ------------------------------------------------------------- */}
              <section id="credit-card-calculator" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  CALCULATOR TOOL
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  Credit Card Settlement (OTS) Savings Calculator
                </h2>
                <p className="text-xs sm:text-sm text-black mb-4 sm:mb-6"> Estimate your approximate credit card closure payable range and potential rates/main sum waiver based on default duration and ledger balance: </p>

                <div className="bg-slate-900 text-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-800 space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                        Total Statement Balance (₹): {Number(totalCardDues).toLocaleString('en-IN')}
                      </label>
                      <input
                        type="range"
                        min="50000"
                        max="3000000"
                        step="25000"
                        value={totalCardDues}
                        onChange={(e) => setTotalCardDues(Number(e.target.value))}
                        className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                        Actual Purchase Spend / Cash Advance (₹): {Number(corePrincipalPurchases).toLocaleString('en-IN')}
                      </label>
                      <input
                        type="range"
                        min="25000"
                        max={totalCardDues}
                        step="25000"
                        value={corePrincipalPurchases}
                        onChange={(e) => setCorePrincipalPurchases(Number(e.target.value))}
                        className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                        Monthly In-Hand Income (₹): {Number(monthlyInHandSalary).toLocaleString('en-IN')}
                      </label>
                      <input
                        type="range"
                        min="15000"
                        max="300000"
                        step="5000"
                        value={monthlyInHandSalary}
                        onChange={(e) => setMonthlyInHandSalary(Number(e.target.value))}
                        className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                        Default Duration (Months Overdue): {defaultDurationMonths} Months
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="36"
                        step="1"
                        value={defaultDurationMonths}
                        onChange={(e) => setDefaultDurationMonths(Number(e.target.value))}
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
                          ₹{calculationResult.payableLow.toLocaleString('en-IN')} – ₹{calculationResult.payableHigh.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-1">Approx. 25% – 45% of total card dues</span>
                      </div>

                      <div className="p-3 sm:p-4 bg-slate-900/80 rounded-xl border border-emerald-500/30">
                        <span className="text-[11px] sm:text-xs text-slate-400 block mb-1">Estimated Waiver (Haircut Savings)</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400">
                          ₹{calculationResult.savingsLow.toLocaleString('en-IN')} – ₹{calculationResult.savingsHigh.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-emerald-400/80 block mt-1">100% interest waiver + principal discount</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 sm:p-2.5 bg-slate-900/60 rounded-xl">
                        <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">Asset Stage</span>
                        <span className="font-bold text-amber-400">{calculationResult.delinquencyStage}</span>
                      </div>
                      <div className="p-2 sm:p-2.5 bg-slate-900/60 rounded-xl">
                        <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">Potential Savings</span>
                        <span className="font-bold text-emerald-400">
                          Up to {calculationResult.haircutPercent}%
                        </span>
                      </div>
                      <div className="p-2 sm:p-2.5 bg-slate-900/60 rounded-xl">
                        <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">Unpaid Charges</span>
                        <span className="font-bold text-blue-300">₹{calculationResult.financeAndPenalties.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed italic"> *Disclaimer: Estimations based on standard RBI closure write-off trends and historical closures. Exact figures depend upon bank closure board sanction. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 11. Credit Card Settlement vs Full Repayment                  */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-vs-full-repayment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 11
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  11. Credit Card Settlement vs Full Repayment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> When confronting mounting credit card arrears. Cardholders must review whether to pursue full payment or opt for a one-time closure. While full payment is the ideal choice for people whose money issues are temporary and minor. One-time closure is the indispensable legal remedy when debts exceed total net worth. </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Comparison Metric</th>
                          <th className="p-3">Full Repayment</th>
                          <th className="p-3">Credit Card Settlement (OTS)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">Total money Outlay</td>
                          <td className="p-3 text-red-700 font-medium">100% of purchase main sum + 100% of 42%. 52% finance charges + GST</td>
                          <td className="p-3 text-emerald-700 font-medium">25% to 45% of total demanded ledger balance (Massive savings)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">CIBIL desk Status</td>
                          <td className="p-3 font-semibold text-emerald-700">Reported as <strong>&quot. CLOSED&quot. </strong></td>
                          <td className="p-3 font-semibold text-amber-700">Reported as <strong>&quot. SETTLED&quot. </strong> or &quot. Post-Write-Off Settled&quot. </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Credit Score Trajectory</td>
                          <td className="p-3 text-emerald-700">Preserves or steadily enhances score</td>
                          <td className="p-3 text-amber-700">fast score dip of 75. 120 points. stops growing DPD delinquency</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">calls threats</td>
                          <td className="p-3">Stops only after 100% payment clears</td>
                          <td className="p-3 text-blue-700">Halted fast upon legal representation and OTS sanction</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Required clients Solvency</td>
                          <td className="p-3">Requires high disposable income and liquid cash reserves</td>
                          <td className="p-3">Tailored specifically for insolvent. Distressed. retrenched cardholders</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 12. Credit Card Settlement vs Credit Card Restructuring       */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-vs-restructuring" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 12
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  12. Credit Card Settlement vs Credit Card Restructuring
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Card issuers often propose &quot. Credit Card Restructuring&quot. or &quot. EMI Conversion&quot. to clients who fall behind on payments. It is crucial to understand the vast structural difference between restructuring and one-time closure: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>What is Credit Card Restructuring?</strong> The bank converts your total unpaid card balance (including past late fees and GST) into a fixed-tenure term loan repayable over 12 to 48 months. Yet. The bank continues to charge an rates rate of <strong>16% to 24% per annum</strong> on this converted loan. If your income has collapsed. You will simply default on the restructured EMIs after 2 or 3 months. Worsening your legal risk! </li>
                    <li> <strong>What is Credit Card closure?</strong> closure provides <em>Complete. Permanent debt cancellation</em>. You do not sign up for multi-year rates-bearing EMIs. Rather. Both parties execute an pacts for a mutually agreed discounted sum spread across 1 to 3 EMIs upon. The remaining debt is by law extinguished. the card account is permanently ended. </li>
                  </ul>
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 font-medium text-xs">
                    ⚠️ Critical Advisory: Only accept card restructuring if your income has already returned to normal and you are 100% confident in servicing high monthly EMIs for the next 2 to 4 years. If your income remains constrained, restructuring is a dangerous trap that delays necessary debt relief.
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 13. Credit Card Settlement vs Credit Card Closure             */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-vs-closure" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 13
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  13. Credit Card Settlement vs Credit Card Closure
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> While both actions end your credit card facility. Their procedural requirements. Costs. RBI papers differ greatly: </p>
                  <div className="space-y-2 text-xs sm:text-sm text-black">
                    <p> <strong>Standard Credit Card Closure:</strong> Occurs when the cardholder voluntarily requests card cancellation after paying 100% of all billed and unbilled transactions. Rates. annual fees down to zero rupees. The bank generates a standard account closure proof letter. The credit desk records the account as <strong>&quot. Closed&quot. </strong>Reflecting positively on your money handling history. </p>
                    <p> <strong>Credit Card closure:</strong> Occurs when the cardholder has defaulted due to bankruptcy and pays a settle fraction of the ledger balance. The bank executes a formal Board-approved write-off of the unpaid amount and issues a stamped <strong>No Dues letter</strong>. The credit desk records the status as <strong>&quot. Settled&quot. </strong> with an entry for the written-off amount. </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 14. Advantages of Credit Card Settlement                      */}
              {/* ------------------------------------------------------------- */}
              <section id="advantages-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 14
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  14. Advantages of Credit Card Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> For a clients drowning in unmanageable revolving card debt. A by law sanctioned one-time closure delivers life-changing benefits: </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">1. Eradication of Hyper-Compounding Interest</span>
                      <p className="text-[11px] text-black"> Permanently terminates the 42%. 52.86% APR finance charges and recurring 18% GST that make credit card debts grow exponentially each month. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">2. Cessation of Recovery Harassment</span>
                      <p className="text-[11px] text-black"> Ends abusive calls phone calls. Workplace intrusions. Doorstep visits by third-party claims firms. Restoring own peace and family dignity. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">3. Immunity from Civil Suits &amp; Legal Notices</span>
                      <p className="text-[11px] text-black"> Discharges all legal claims under Section 25 PSSA (e-mandate bounce) and prevents civil summary claims suits under Order 37 CPC. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">4. Immediate Liquidity Recovery</span>
                      <p className="text-[11px] text-black"> Saves 50% to 75% of your total demanded balance. Allowing you to reallocate monthly cash flow toward essential family survival. Rent. savings. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 15. Disadvantages and Risks of Credit Card Settlement         */}
              {/* ------------------------------------------------------------- */}
              <section id="disadvantages-risks-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 15
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  15. Disadvantages and Risks of Credit Card Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> CredSettle operates with uncompromising clarity. While credit card closure resolves acute money crises. Cardholders must be fully cognizant of its operational and credit implications: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>CIBIL desk Remark:</strong> The card issuer reports the account status as <strong>&quot. Settled&quot. </strong> rather than &quot. Closed&quot. This remark signals to future underwriting algorithms that the lender took a money loss. </li>
                    <li> <strong>first Credit Score Impact:</strong> Your credit score will experience a dip of 75 to 120 points upon closure execution (though this is vastly superior to accumulating 360+ Days Past Due). </li>
                    <li> <strong>Mandatory 12-Month Cooling-Off Period:</strong> Under central bank closure guidelines. Regulated lending institutions must implement a 12-month pause before reviewing requests for fresh retail clean limits. </li>
                    <li> <strong>fast Card Cancellation:</strong> The settling credit card facility will be permanently deactivated and destroyed. You cannot use this card account again. </li>
                    <li> <strong>Risk of Agent Fraud:</strong> If settle without legal counsel. There is a risk of paying rogue agents who issue counterfeit closure receipts without valid bank sanction. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 16. Impact of Credit Card Settlement on CIBIL Score           */}
              {/* ------------------------------------------------------------- */}
              <section id="impact-on-cibil-score" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 16
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  16. Impact of Credit Card Settlement on CIBIL Score
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> A widespread myth in India is that &quot. settling a credit card destroys your CIBIL score forever.&quot. This is categorically false. </p>
                  <p> Let us examine credit reporting workings across the four major bureaus (TransUnion. Experian. Equifax. CRIF): </p>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <span className="font-bold text-black block">The Mathematics of Ongoing Default vs. Settlement:</span>
                    <p> <strong>Scenario A (Unresolved Default):</strong> If you do not settle. Every month the bank reports <em>Days Past Due (DPD)</em> advancing from 30 to 60. 90. 180. 360+. Each monthly default entry inflicts growing damage on your score. Dragging it down to 500. 550. while the overdue amount grows indefinitely. No bank will touch your profile as long as active overdue balances remain unaddressed. </p>
                    <p> <strong>Scenario B (Executed closure):</strong> When closure is completed. The bank updates the desk report to show <strong>Current Balance = ₹0</strong> and <strong>Amount Overdue = ₹0</strong>Marking the status as &quot. Settled&quot. While your score takes an first dip. The monthly bleeding stops fast. Because there is zero active overdue balance. Your credit score stabilizes and can be actively rebuilt back to <strong>750+ within 18 to 24 months</strong>! </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 17. Credit Card Settlement and Credit Bureau Reporting        */}
              {/* ------------------------------------------------------------- */}
              <section id="bureau-reporting-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 17
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  17. Credit Card Settlement and Credit Bureau Reporting
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Following the completion of an OTS. The card issuer submits monthly RBI data to all licensed credit information registries under CICRA directives. Here is exactly how the settled credit card appears on your credit report: </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Report Field</th>
                          <th className="p-3">Value Recorded Post-Settlement</th>
                          <th className="p-3">Significance for Future Underwriters</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">Account Status</td>
                          <td className="p-3 text-blue-700 font-bold">SETTLED / POST-CHARGE-OFF deal</td>
                          <td className="p-3">Confirms that the account is closed and no further payments are by law demandable.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Current Balance</td>
                          <td className="p-3 font-bold text-emerald-700">₹0</td>
                          <td className="p-3">Proves you owe zero active debt on this facility.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Amount Overdue</td>
                          <td className="p-3 font-bold text-emerald-700">₹0</td>
                          <td className="p-3">Eliminates the key red-flag of active non-payment.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Amount Written Off</td>
                          <td className="p-3 text-amber-700 font-medium">Reflects the settle haircut waiver</td>
                          <td className="p-3">Shows the total sum waived by the lender as part of the deal pacts.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 18. How Long Does Credit Card Settlement Affect CIBIL?        */}
              {/* ------------------------------------------------------------- */}
              <section id="how-long-affects-cibil" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 18
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  18. How Long Does Credit Card Settlement Affect CIBIL?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Under RBI standards governing Indian credit bureaus. The &quot. Settled&quot. remark remains visible in your account history for up to <strong>7 years</strong> from the date of closure execution. </p>
                  <p> yet, the <em>practical weight</em> of this remark diminishes dramatically over time. Automated credit underwriting engines and loan sanction boards review recent payment history (the last 12 to 24 months) far more heavily than older historical entries. If you show flawless payment behavior on new credit lines for 24 months following closure. Major lenders will gladly approve secured loans (car loans. Gold loans. home loans) despite the past settled card record. </p>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-blue-950 font-medium text-xs">
                    💡 The Ultimate CIBIL Cure: You always retain the legal right to approach the settling bank at a future date when your financial situation improves. By paying the previously waived haircut difference, you can request an updated No Dues Certificate and have the bureau status converted from <strong>&quot;Settled&quot; to &quot;Closed&quot;</strong>, completely erasing the settlement remark!
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 19. How to Improve CIBIL Score After Credit Card Settlement   */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-improve-cibil-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 19
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  19. How to Improve CIBIL Score After Credit Card Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Rebuilding your CIBIL score to 750+ after settling a credit card requires a disciplined. Step-by-step rehabilitation strategy: </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>check desk Balance Updates (Day 45):</strong> Pull your valid credit reports from CIBIL. Experian. CRIF High Mark 45 to 60 days after closure. Confirm that the card status is &quot. Settled&quot. and the current balance is exactly ₹0. If an overdue balance still shows. Raise an fast dispute. </li>
                    <li> <strong>Get a Fixed Deposit (FD) Backed Secured Credit Card:</strong> Rebuild Utilizing Lien-Marked Secured Plastic: Since uncollateralized card lines will be temporarily inaccessible. Pledge a modest deposit (₹15,000 to ₹40,000) against a secured card product like IDFC WOW or OneCard Spark. These credit instruments require no CIBIL verification and forward clean monthly payment ticks straight to credit rating bureaus. </li>
                    <li> <strong>Maintain a Strict Credit Utilization Ratio (CUR) Under 25%:</strong> Never exhaust your secured card limit. If your limit is ₹40,000. Spend no more than ₹8,000 to ₹10,000 per month on routine groceries or fuel. pay the entire bill in full before the due date. </li>
                    <li> <strong>Avail a Small Consumer Durable Loan:</strong> Purchase a household appliance or smartphone through a consumer durable loan (via Bajaj Finserv or Home Credit) and pay every EMI on schedule. This introduces a healthy mix of secured revolving credit and installment credit. </li>
                    <li> <strong>Avoid Hard Inquiries:</strong> Do not apply for multiple loans or credit cards across fintech apps. Each rejection registers a hard inquiry that further suppresses your credit score. </li>
                  </ol>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 20. RBI Guidelines for Credit Card Settlement                 */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-guidelines-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 20
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  20. RBI Guidelines for Credit Card Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Credit card debt closure in India is strictly governed by legal frameworks established by the <strong>Reserve Bank of India (RBI)</strong>. The primary governing rules include: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>RBI Master Direction. Credit Card and Debit Card. Issuance and Conduct Directions. 2022 (updated):</strong> Mandates absolute clarity in credit card billing. Sets rules governing the computation of finance charges. penalizes lenders that levy undisclosed fees or fail to provide complete billing dispute methods. </li>
                    <li> <strong>RBI Framework for one-time closures and Technical Write-offs (Circular DOR.STR.REC.20/21.04.048/2023-24 dated June 8. 2023):</strong> Directs all Scheduled trade Banks. Small Finance Banks. NBFCs to maintain Board-approved policies governing one-time closures for retail clients. Mandates clear delegation of money powers for approving loan haircuts and provides a clear framework for debt write-offs. </li>
                    <li> <strong>Prudential Norms on Income Recognition. Asset Classification and Provisioning (IRACP):</strong> Establishes the 90-day default threshold for classifying credit card balances as Non-Performing Assets (NPAs). Requiring banks to set aside capital rules and incentivizing them to accept one-time closure terms. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 21. RBI Guidelines for Credit Card Recovery Agents             */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-guidelines-recovery-agents" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 21
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  21. RBI Guidelines for Credit Card Recovery Agents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The Reserve Bank of India has issued stringent directives to curb the menace of calls agent misconduct under the <strong>Master Circular on agents in Banks (August 12. 2022)</strong>. If a calls agent violates these rules. The lending institution faces heavy RBI sanctions: </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Calling Hours Restriction</span>
                      <p className="text-[11px] text-black"> agents are strictly permitted to contact clients only between <strong>8:00 AM and 7:00 PM</strong>. Calling before 8 AM or after 7 PM is an explicit RBI offense. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Strict Privacy Protection</span>
                      <p className="text-[11px] text-black"> Agents are strictly forbidden from contacting your relatives. Friends. Neighbors. workplace colleagues. Debt details cannot be disclosed to any third party. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Mandatory IIBF Certification</span>
                      <p className="text-[11px] text-black"> agents must hold Debt agents (DRA) credentials issued through the Indian Banking & Finance Institute. Uncertified agents are unlawful. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Zero Tolerance for Intimidation</span>
                      <p className="text-[11px] text-black"> Use of threatening language. Real threaten. Abusive slang. impersonation of police heads or court bailiffs attracts direct penal risk. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 22. Credit Card Default – What Happens If You Stop Paying?     */}
              {/* ------------------------------------------------------------- */}
              <section id="credit-card-default-what-happens" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 22
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  22. Credit Card Default – What Happens If You Stop Paying?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> If an acute money crisis compels you to halt credit card payments. The default progresses through a standardized chronological lifecycle: </p>
                  <div className="space-y-2 text-xs sm:text-sm text-black">
                    <p> <strong>Month 1 (Days 1. 30):</strong> The payment due date is missed. Automated SMS alerts and email reminders are generated. The bank levies a late payment fee (typically ₹500 to ₹1,300 depending on balance) and finance charges begin growing daily. </p>
                    <p> <strong>Month 2 (Days 31. 60):</strong> The card is blocked from fresh transactions. In-house bank calls telecallers begin calling repeatedly to urge payment of the Minimum Amount Due. </p>
                    <p> <strong>Month 3 (Days 61. 90):</strong> The account enters Special Mention Account-2 (SMA-2) status. Telecalling intensifies and outsourced claims firms are assigned. Lenders send formal demand notices threatening legal action. </p>
                    <p> <strong>Month 4 to 6 (Days 91. 180):</strong> The account is formally classified as a <strong>Non-Performing Asset (NPA)</strong>. The bank marks capital provisioning. Doorstep visits by claims firm staff occur. </p>
                    <p> <strong>Month 6+ (Days 180+):</strong> The bank completes a <strong>Technical Write-Off / Charge-Off</strong>. The file is shifted from frontline operations to the Card Stressed Asset claims handling Vertical. <em>This is the most opportune window for our legal counsel to settle a deep One-Time closure waiver!</em> </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 23. Legal Consequences of Credit Card Default                 */}
              {/* ------------------------------------------------------------- */}
              <section id="legal-consequences-credit-card-default" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 23
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  23. Legal Consequences of Credit Card Default
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The single greatest weapon claims firms use against cardholders is fear of penal prosecution and imprisonment. It is vital to understand the true legal and legal reality in India: </p>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <span className="font-bold text-black block">The Landmark Supreme Court Precedent:</span>
                    <p> Under the landmark legal valid <strong>Jolly George Varghese (AIR 1980 SC 470)</strong>The Supreme Court ruled that an honest debtor lacking money capacity cannot be incarcerated under Article 21. The Apex Court held that depriving a person of liberty merely because they have suffered economic misfortune violates fundamental human rights. </p>
                  </div>
                  <p> Defaulting on a credit card is strictly a <strong>civil matter</strong>. Local police stations have zero jurisdiction. Legal power. Legal valid to register an FIR. Summon. arrest a citizen for credit card defaults. penal charges apply only if a clients used forged papers or committed identity fraud. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 24. Can a Bank Take Legal Action for Credit Card Debt?        */}
              {/* ------------------------------------------------------------- */}
              <section id="can-bank-take-legal-action" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 24
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  24. Can a Bank Take Legal Action for Credit Card Debt?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> While credit card defaults are not penal. Card-issuing banks do possess legal remedies under civil law. In practice. Yet. Banks face massive economic hurdles when pursuing court court cases for clean card debt: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>Summary Suits (Order 37 of Civil Procedure Code):</strong> Banks can theoretically file a summary suit in a City Civil Court to recover unpaid amounts. yet. Because court court cases in India takes 3 to 7 years. Requires large court fees. Demands heavy counsel retainers. Banks rarely pursue summary suits for amounts under ₹15. 20 Lakhs. </li>
                    <li> <strong>Section 25 of the Payment and closure Systems Act. 2007 (PSSA):</strong> If your card payments were linked to an automated online NACH or e-mandate that bounced due to insufficient funds. The bank can issue a legal legal notice under Section 25. </li>
                    <li> <strong>Section 138 of the Negotiable Instruments Act. 1881:</strong> Applies only if you issued a real paper cheque that dishonored. </li>
                    <li> <strong>Arbitration steps:</strong> Lenders often attempt to invoke arbitration clauses in the cardholder pacts to secure ex-parte awards. </li>
                  </ul>
                  <p> In reality. Over 95% of legal notices issued by card issuers are intended to induce pressure to open talks channels. Once our counsel represent your case. These notices serve as the gateway to a fast-track one-time closure. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 25. Credit Card Settlement After Receiving a Legal Notice     */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-after-legal-notice" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 25
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  25. Credit Card Settlement After Receiving a Legal Notice
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Receiving a formal counsel legal notice under Section 25 of the PSSA or a counsel&apos. s demand notice should never cause panic. In fact. Receiving a legal notice often marks the <strong>best possible turning point</strong> for getting a favorable closure: </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>The 15-Day legal Window:</strong> Under legal notice requirements. The clients has prescribed two-week legal timeframe to file a formal rejoinder. Never leave a legal notice unaddressed. </li>
                    <li> <strong>counsel-Drafted Legal Reply:</strong> CredSettle&apos. S banking counsel file a detailed. Formal legal reply to the bank&apos. s counsel. The reply challenges unconscionable finance charges. Asserts documented hardship. formally invites the lender to conciliate through a one-time closure. </li>
                    <li> <strong>Compoundable Offense:</strong> Offenses under Section 25 PSSA and Section 138 NI Act are 100% <em>compoundable</em> under the law. Once the payout sum is remitted. The legal notice is formally withdrawn. all legal actions are quashed. </li>
                  </ol>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 26. Credit Card Settlement During Arbitration or Legal Proceedings */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-during-arbitration-proceedings" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 26
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  26. Credit Card Settlement During Arbitration or Legal Proceedings
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Many credit card issuers attempt to refer overdue accounts to private arbitration. Yet. The legal enforceability of these arbitrations is severely compromised under current Indian law: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>Unilateral Arbitrator Invalidation:</strong> In landmark rulings such as <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd (2019)</em> and <em>TRF Ltd v. Energo Engineering Projects Ltd (2017)</em>The Supreme Court of India held that unilateral appointment of sole arbitrators by interested lenders is by law invalid and void ab initio. CredSettle counsel file formal jurisdictional objections before invalid arbitral tribunals. </li>
                    <li> <strong>National Lok Adalat closure:</strong> Organised quarterly across India by the National Legal Services Authority (NALSA). Lok Adalats provide an ideal legal forum for settling credit card disputes. An OTS executed before a Lok Adalat bench has the binding force of a civil court decree. Charges zero court fees. permanently clears all future claims. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 27. Credit Card Recovery Agent Harassment                     */}
              {/* ------------------------------------------------------------- */}
              <section id="recovery-agent-harassment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 27
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  27. Credit Card Recovery Agent Harassment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Outsourced debt claims firms often deploy harsh. Unlawful tactics to threaten distressed cardholders. Recognizing these illicit practices is the first step in neutralizing them: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li><strong>Continuous Spam Calling:</strong> Subjecting cardholders to 30 to 60 calls a day from automated VOIP numbers and untraceable SIM cards.</li>
                    <li><strong>Calling Relatives and Workplace HR:</strong> Harassing family members or contacting employers to induce acute social humiliation.</li>
                    <li><strong>Impersonation of Police and Judicial heads:</strong> Sending forged &quot. Arrest Warrants&quot. or fake &quot. Court Summons&quot. via WhatsApp to generate panic.</li>
                    <li><strong>Doorstep threaten:</strong> Visiting the cardholder&apos. S home without prior notice. Creating public scenes. refusing to leave until money is paid.</li>
                  </ul>
                  <p> Every single one of these actions is a flagrant violation of RBI rules and constitutes an actionable offense under the Indian Penal Code. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 28. Rights of Credit Card Customers Against Recovery Harassment */}
              {/* ------------------------------------------------------------- */}
              <section id="rights-against-recovery-harassment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 28
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  28. Rights of Credit Card Customers Against Recovery Harassment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> As an Indian citizen and bank customer. You are armed with powerful legal rights to defend your peace and dignity: </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Right to Legal Representation</span>
                      <p className="text-[11px] text-black"> The counsel Act. 1961 by law affirms every citizen's right to engage signed counsel for banking representation. Once our counsel serve a representation notice. The bank must direct all debt contacts exclusively to our legal team. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Right to Identity Verification</span>
                      <p className="text-[11px] text-black"> You have the right to demand valid bank authorization letters. Employee ID cards. IIBF letters before engaging with any field claims staff. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Right to Privacy</span>
                      <p className="text-[11px] text-black"> Protected under Article 21 of the Constitution. Lenders cannot disclose your money defaults to third parties. Neighbors. workplace associates. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Right to File Police Complaints</span>
                      <p className="text-[11px] text-black"> If an agent uses abusive language or threats. You can file a penal complaint under Sections 503. 506 (penal threaten). 384 (Extortion) of the IPC. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 29. How to Negotiate Credit Card Settlement With a Bank       */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-negotiate-with-bank" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 29
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  29. How to Negotiate Credit Card Settlement With a Bank
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> settle a credit card closure with trade banks requires disciplined strategic execution. Follow these core talks principles: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>Anchor on Core main sum Spend:</strong> Never base talks on the bank&apos. s inflated statement ledger balance. Segregate the actual purchase spend from growing finance charges. establish your opening deals at 25% to 35% of the core main sum. </li>
                    <li> <strong>Prove forced money Inability:</strong> closure boards cannot grant discretionary waivers without supporting audit papers. Furnish conclusive evidence of income collapse (layoff letters. Bank statements showing near-zero balances. Medical treatment receipts) to justify the write-off. </li>
                    <li> <strong>Maintain a Written contact Trail:</strong> Always conduct closure talks through registered email correspondence addressed to valid bank domain IDs (e.g. `@hdfcbank.com`. `@icicibank.com`. `@sbicard.com`) rather than over casual telephone calls. </li>
                    <li> <strong>Leverage Fiscal Quarter-End Windows:</strong> Bank credit boards face quarterly provisioning targets. Proposing closures in March (fiscal year-end). June. September. December often secures 15% to 25% deeper haircuts as branches rush to clear bad debts. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 30. Documents Required for Credit Card Settlement             */}
              {/* ------------------------------------------------------------- */}
              <section id="documents-required-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 30
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  30. Documents Required for Credit Card Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> To submit a formal One-Time closure petition that withstands internal bank audit and compliance scrutiny. Prepare the following papers portfolio: </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Document Category</th>
                          <th className="p-3">Required Records</th>
                          <th className="p-3">Audit Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">clients Identity &amp. KYC</td>
                          <td className="p-3">Self-attested PAN Card and Aadhaar Card copy</td>
                          <td className="p-3">Verifies clients identity and matches central credit desk records.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Credit Card Statements</td>
                          <td className="p-3">Last 12 to 24 months itemized credit card statements</td>
                          <td className="p-3">Required for forensic audit to isolate retail spend from growing rates.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Bank Account Statements</td>
                          <td className="p-3">Last 6 to 12 months statements of all active savings/current accounts</td>
                          <td className="p-3">Proves lack of disposable cash flow and absence of hidden liquid assets.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Hardship Corroboration</td>
                          <td className="p-3">End letter. Medical discharge summaries. firm GST cancellation</td>
                          <td className="p-3">Provides legal justification under RBI guidelines for non-wilful default.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 31. Credit Card Settlement Without a Settlement Company (DIY) */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-without-company-diy" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 31
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  31. Credit Card Settlement Without a Settlement Company
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Can a cardholder settle and execute a credit card closure straight on their own without experts help? Yes. It is by law permissible. Yet. An unrepresented clients faces severe operational and mental challenges: </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">The DIY Advantage</span>
                      <p className="text-[11px] text-black"> You avoid paying experts legal advisory fees to a debt closure firm. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-red-900">The Serious DIY Pitfalls</span>
                      <p className="text-[11px] text-black"> You remain fully exposed to daily calls threats. calls firms routinely mislead unrepresented cardholders into paying partial sums that fail to close the account. and banks offer much smaller waivers (only 20%. 30% vs 50%. 75% with counsel). </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 32. How to Choose a Credit Card Settlement Company            */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-choose-settlement-company" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 32
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  32. How to Choose a Credit Card Settlement Company
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> With numerous unregulated entities advertising online. Cardholders must exercise extreme care when selecting a debt relief service. Ensure your chosen firm satisfies these five strict criteria: </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li><strong>counsel-Led Legal Representation:</strong> The firm must have licensed. Experienced banking court cases counsel enrolled with the Bar Council of India who can issue formal legal representation notices and defend court actions.</li>
                    <li><strong>Direct-to-Bank Payment Policy:</strong> Legitimate firms NEVER ask you to deposit closure funds into their private bank accounts. All closure wire transfers must be paid straight into the card issuer&apos. s valid bank account.</li>
                    <li><strong>Transparent Service pacts:</strong> A written contract outlining scope of work. Fee terms. deliverables without ambiguous hidden charges.</li>
                    <li><strong>Proven threats action Protocol:</strong> Established escalation channels to Bank main sum Nodal heads and the RBI Banking RBI officer to halt claims threats.</li>
                    <li><strong>Verifiable closure Track Record:</strong> Demonstrable history of authentic bank sanction letters and genuine No Dues letters.</li>
                  </ol>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 33. Credit Card Settlement Company vs Direct Bank Negotiation */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-company-vs-direct-negotiation" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 33
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  33. Credit Card Settlement Company vs Direct Bank Negotiation
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Comparing what happens when an individual clients negotiates alone versus engaging experts counsel-led debt relief: </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Feature</th>
                          <th className="p-3">Direct Negotiation (Alone)</th>
                          <th className="p-3">CredSettle Professional Assistance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">threats safety</td>
                          <td className="p-3 text-red-700">None. Constant daily calls and field visits.</td>
                          <td className="p-3 text-emerald-700 font-medium">Halted via formal legal notice under counsel Act.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">talks Level</td>
                          <td className="p-3">Limited to outsourced call-center agents.</td>
                          <td className="p-3 text-blue-700 font-medium">Direct representation with Bank Zonal Credit boards.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Waiver rate</td>
                          <td className="p-3">Typically only 20% to 35% discount offered.</td>
                          <td className="p-3 text-emerald-700 font-bold">Deep waivers averaging 50% to 75% gross savings.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Legal Notice Defense</td>
                          <td className="p-3 text-red-700">Defenseless. risk of ex-parte court orders.</td>
                          <td className="p-3 text-emerald-700 font-medium">Formal counsel legal replies filed within 15-day window.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 34. Credit Card Settlement Fees and Charges                   */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-fees-and-charges" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 34
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  34. Credit Card Settlement Fees and Charges
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> grasp experts fee models in the debt closure domain makes sure you are protected from exploitative billing: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>Legal Advisory Retainer:</strong> A clear. Modest fee covering legal representation notices. Case papers. Hardship filing. counsel correspondence with credit boards. </li>
                    <li> <strong>Performance-Linked Success Fee:</strong> Legitimate firms align their incentives with the clients by charging a rate of the <em>actual waiver amount saved</em>. If the firm does not get large savings. They do not earn their performance fee. </li>
                    <li> <strong>Red Flag Alert:</strong> Beware of entities demanding full payment upfront with promises of &quot. guaranteed 90% waivers&quot. or &quot. instant CIBIL cleaning in 48 hours.&quot. Legitimate legal representation operates with clarity. Realistic outcomes. formal service contracts. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 35. What Happens After Credit Card Settlement?                */}
              {/* ------------------------------------------------------------- */}
              <section id="what-happens-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 35
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  35. What Happens After Credit Card Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Once your sanctioned closure payment is remitted and checked by the bank&apos. S Stressed Asset relief department. A standardized chronological sequence of events occurs: </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li><strong>fast Cessation of calls Activities (24. 48 Hours):</strong> The bank de-allocates your account from outsourced claims firms. Phone calls. Automated voice blasts. field visits cease fully.</li>
                    <li><strong>Permanent Card Deactivation (Day 3. 7):</strong> The credit card facility is hotlisted and permanently destroyed in the bank&apos. s core banking system (CBS). The unamortized balance is technically written off.</li>
                    <li><strong>Issuance of the No Dues letter (Days 15. 30):</strong> The bank generates and dispatches an valid stamped No Dues letter (NDC) or No Objection letter (NOC) confirming zero unpaid risk.</li>
                    <li><strong>Credit desk Data Updation (Days 45. 60):</strong> The issuer transmits monthly data to TransUnion. Experian. Equifax. CRIF. Resetting the overdue balance to ₹0 and recording the status as &quot. Settled&quot.</li>
                  </ol>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 36. Settlement Letter, No-Dues Certificate and Other Documents */}
              {/* ------------------------------------------------------------- */}
              <section id="settlement-letter-ndc-documents" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 36
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  36. Settlement Letter, No-Dues Certificate and Other Documents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Documentary integrity is the cornerstone of a secure credit card closure. You must make sure you obtain and permanently archive two crucial legal instruments: </p>
                  <div className="space-y-3 my-3">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                      <span className="font-bold text-xs text-blue-900 block">1. The Formal Settlement Sanction Letter (Pre-Payment)</span>
                      <p className="text-[11px] text-black"> Must be issued on valid bank letterhead with an authentic internal reference number. Signed by an authorized signatory (Manager / Chief Manager). It must state the 16-digit card number. The exact sanctioned payout sum. The strict payment deadline. explicit proof that payment of this sum constitutes full and final satisfaction of all bank claims. </p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                      <span className="font-bold text-xs text-blue-900 block">2. The No Dues Certificate / NDC (Post-Payment)</span>
                      <p className="text-[11px] text-black"> Issued within 3 to 4 weeks after payment realization. This papers serves as your permanent legal shield against future claims attempts by debt calls firms or asset reconstruction companies (ARCs). Always preserve digital and real copies indefinitely. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 37. How to Check Credit Card Settlement Status on Your Credit Report */}
              {/* ------------------------------------------------------------- */}
              <section id="check-settlement-status-credit-report" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 37
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  37. How to Check Credit Card Settlement Status on Your Credit Report
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> About 45 to 60 days following your final closure payment. Check your credit report across all four authorized credit bureaus: </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li>Log in to the valid desk portals: <strong>TransUnion CIBIL</strong> (cibil.com), <strong>Experian India</strong> (experian.in). <strong>CRIF High Mark</strong>.</li>
                    <li>Download your updated CIR (Credit Information Report) and navigate to the <strong>&quot. Accounts Information&quot. </strong> section.</li>
                    <li>Locate the exact credit card issuer and account number.</li>
                    <li> check that: <ul className="list-disc pl-5 mt-1 space-y-0.5 text-xs text-black"> <li><strong>Current Balance:</strong> Must read <strong>₹0</strong> (or NIL).</li>
                        <li><strong>Amount Overdue:</strong> Must read <strong>₹0</strong> (or NIL).</li>
                        <li><strong>Account Status:</strong> Shows as <strong>&quot. Settled&quot. </strong> or &quot. Post-Write-Off Settled&quot.</li>
                        <li><strong>Date of Last Payment:</strong> Matches your closure payment date.</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 38. How to Correct Incorrect Credit Bureau Reporting After Settlement */}
              {/* ------------------------------------------------------------- */}
              <section id="correct-incorrect-bureau-reporting" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 38
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  38. How to Correct Incorrect Credit Bureau Reporting After Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> In about 10% to 15% of cases. Card issuers fail to update desk records correctly due to internal reporting lapses. Leaving the account showing as an &quot. Active Default&quot. with mounting arrears. If this occurs. Execute this correction protocol: </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li><strong>Raise an Online desk Dispute:</strong> Submit a formal dispute on the CIBIL Dispute relief portal. Specifying &quot. Incorrect Balance / Status&quot. and providing your 9-digit Control Number (ECN).</li>
                    <li><strong>Attach Documentary Proof:</strong> Upload high-relief PDF copies of your signed closure Sanction Letter. Payment transaction receipt/UTR. stamped No Dues letter.</li>
                    <li><strong>Serve Notice to the Bank Nodal head:</strong> Email the bank&apos. S main sum Nodal head citing Section 21 of the Credit Information Companies (rule) Act. 2005 (CICRA). which mandates lenders to rectify inaccurate desk data within 30 days.</li>
                    <li><strong>Escalate to RBI RBI officer:</strong> In the event the institution fails to correct registry entries within 30 days. Lodge an online complaint straight through cms.rbi.org.in. The RBI RBI officer can award compensation for inaccurate desk reporting.</li>
                  </ol>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 39. Common Mistakes to Avoid During Credit Card Settlement    */}
              {/* ------------------------------------------------------------- */}
              <section id="common-mistakes-to-avoid" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 39
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  39. Common Mistakes to Avoid During Credit Card Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Cardholders navigating closure without experienced legal counsel routinely fall into devastating traps: </p>
                  <div className="space-y-2 text-xs sm:text-sm text-black">
                    <div className="p-3 bg-red-50/80 rounded-xl border border-red-200">
                      <strong>Mistake 1: Paying on Verbal Assurances:</strong> Never pay money based on telephone promises made by collection agents claiming &quot;Pay ₹30,000 today and your card is settled.&quot; Without a written sanction letter, the bank allocates the payment to penal interest and continues recovery!
                    </div>
                    <div className="p-3 bg-red-50/80 rounded-xl border border-red-200">
                      <strong>Mistake 2: Missing the Sanction Letter Deadline:</strong> Settlement sanction letters carry strict validity dates (typically 7 to 15 days). If you pay even 24 hours past the deadline, the bank can cancel the settlement and demand the full balance.
                    </div>
                    <div className="p-3 bg-red-50/80 rounded-xl border border-red-200">
                      <strong>Mistake 3: Paying to Third-Party Accounts:</strong> Never transfer funds via UPI QR codes or bank accounts belonging to collection agencies or individual recovery agents. Remit payment exclusively into your official 16-digit credit card account.
                    </div>
                    <div className="p-3 bg-red-50/80 rounded-xl border border-red-200">
                      <strong>Mistake 4: Discarding the No Dues Certificate:</strong> Preserving the physical and digital NDC for at least 7 to 10 years is essential to refute future claims if the bank assigns bad debt portfolios to an ARC.
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 40. Credit Card Settlement Scams and Fraud – How to Stay Safe */}
              {/* ------------------------------------------------------------- */}
              <section id="credit-card-settlement-scams-fraud" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 40
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  40. Credit Card Settlement Scams and Fraud – How to Stay Safe
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The vulnerability of distressed cardholders makes them prime targets for fraudulent syndicates. Protect yourself against these widespread scams: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>The Counterfeit WhatsApp closure note:</strong> Fraudulent agents send fake closure letters crafted with copied bank logos. Spelling errors. unverified own contact numbers. Always check the authenticity of a closure note straight with the bank&apos. s valid credit card branch or Nodal head before paying. </li>
                    <li> <strong>The &quot. Guaranteed CIBIL Erase&quot. Racket:</strong> Scammers claim they have &quot. internal connections at CIBIL&quot. to delete your card default record in 48 hours for a fee. <em>This is a 100% fraudulent penal scam.</em> Credit bureaus update records strictly through automated encrypted bank server feeds. </li>
                    <li> <strong>Demands for Cash calls:</strong> Legitimate banks in India NEVER send representatives to collect closure amounts in cash. Any agent demanding cash is attempting fraud. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 41. Can You Get a Loan After Credit Card Settlement?          */}
              {/* ------------------------------------------------------------- */}
              <section id="can-you-get-loan-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 41
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  41. Can You Get a Loan After Credit Card Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Yes. You can qualify for loans after settling a credit card. the trajectory depends on loan type and elapsed time: </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Immediate Phase (0 to 12 Months)</span>
                      <p className="text-[11px] text-black"> clean own loans and fresh credit cards will be rejected due to the mandatory RBI 12-month cooling-off period. yet, <strong>secured credit facilities</strong> (Gold Loans. Fixed Deposit-backed loans. Loan Against home) are readily available because the lender holds liquid pledge. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Rehabilitation Phase (18 to 36 Months)</span>
                      <p className="text-[11px] text-black"> Once you establish 18 to 24 months of spotless payment history on a secured credit line and your score crosses 720+. Major banks and NBFCs will approve <strong>Auto Loans. Trade Vehicle Loans. Home Loans</strong> at competitive market rates. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 42. Can You Get a Credit Card After Settlement?               */}
              {/* ------------------------------------------------------------- */}
              <section id="can-you-get-card-after-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 42
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  42. Can You Get a Credit Card After Settlement?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Obtaining a fresh credit card post-closure is fully achievable through the proven <strong>Secured Credit Card Mechanism</strong>: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-black">
                    <li> <strong>Fixed Deposit-Backed Credit Cards:</strong> Establish a dedicated fixed term deposit (₹20,000 to ₹80,000) with a joining bank. The issuer provides a collateralized card bearing an 80% to 90% spend ceiling linked straight to the fixed reserve. </li>
                    <li> <strong>Zero CIBIL Verification Required:</strong> Secured cards are issued instantly without any credit score screening or income proof. Making them accessible to any settled cardholder. </li>
                    <li> <strong>The Power of desk Reporting:</strong> These cards transmit full monthly payment data to CIBIL. Equifax. Experian. By maintaining on-time payments and keeping use under 25%. You rebuild a flawless credit history within 12 to 18 months. Paving the way for premium clean cards in the future. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 43. How to Rebuild Your Financial Profile After Settlement    */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-rebuild-financial-profile" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 43
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  43. How to Rebuild Your Financial Profile After Settlement
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Credit card closure liberates you from debt slavery. To transform this relief into enduring money prosperity. Execute this 4-step rebuilding roadmap: </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Pillar 1: Emergency Cash Liquidity</span>
                      <p className="text-[11px] text-black"> Redirect the funds previously wasted on minimum card payments into building a liquid emergency fund covering 3 to 6 months of basic household expenses. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Pillar 2: Disciplined Re-Credit Building</span>
                      <p className="text-[11px] text-black"> Operate one single secured credit card for minor daily transactions. Setting auto-debit for 100% full payment on the statement due date. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Pillar 3: Quarterly Credit Auditing</span>
                      <p className="text-[11px] text-black"> Review your free annual credit report from CIBIL and Experian every quarter to check that no ghost accounts or fraudulent inquiries appear. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Pillar 4: Optional Status Upgradation</span>
                      <p className="text-[11px] text-black"> When large savings accumulate in 3 to 5 years. Consider paying the settled card&apos. s haircut differential to upgrade desk status from &quot. Settled&quot. to &quot. Closed&quot. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 44. Frequently Asked Questions About Credit Card Settlement   */}
              {/* ------------------------------------------------------------- */}
              <section id="faqs-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 44
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  44. Frequently Asked Questions About Credit Card Settlement
                </h2>
                <p className="text-xs sm:text-sm text-black mb-4 sm:mb-6"> Authoritative legal analysis. Operational insights. economic breakdown addressing credit card closure relief in India: </p>

                <div className="space-y-2.5 sm:space-y-3">
                  {creditCardFaqs.map((faq, index) => {
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

              {/* ------------------------------------------------------------- */}
              {/* 45. Professional Credit Card Settlement Assistance            */}
              {/* ------------------------------------------------------------- */}
              <section id="professional-settlement-assistance" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 45
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  45. Professional Credit Card Settlement Assistance
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Navigating harsh calls firm tactics. Complex banking calculations. threaten legal notices requires experienced bank firepower. </p>
                  <p> CredSettle provides specialized legal defense and debt closure services tailored exclusively for overburdened credit cardholders across India. Our senior banking counsel take over all calls correspondence under the counsel Act. 1961. Audit your credit card ledgers. Formulate robust hardship petitions. settle straight with Senior Zonal Credit boards to get maximum lawful debt waivers. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 46. Why Choose a Professional Credit Card Settlement Service? */}
              {/* ------------------------------------------------------------- */}
              <section id="why-choose-professional-service" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 46
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  46. Why Choose a Professional Credit Card Settlement Service?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Cardholders choose CredSettle because we combine uncompromising legal safety with superior money savings: </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Direct Senior-Level Access</span>
                      <p className="text-[11px] text-black"> We settle straight with Bank Zonal Heads. SARC boards. main sum Nodal heads. fully bypassing frontline third-party telecallers. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Maximized Financial Savings</span>
                      <p className="text-[11px] text-black"> Our forensic ledger audits and counsel-led talks consistently secure 50% to 75% gross reductions. Far deeper than unrepresented clients can settle. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Absolute Peace of Mind</span>
                      <p className="text-[11px] text-black"> Our anti-threats shield halts agents calls and visits. Protecting your mental well-being and own dignity throughout the process. </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <span className="font-bold text-xs text-blue-900">Guaranteed Document Integrity</span>
                      <p className="text-[11px] text-black"> Every closure is checked for authenticity. We guarantee the delivery of stamped. Valid No Dues letters with complete debt extinguishment. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 47. Credit Card Settlement – Complete Step-by-Step Guide      */}
              {/* ------------------------------------------------------------- */}
              <section id="complete-step-by-step-guide" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 47
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  47. Credit Card Settlement – Complete Step-by-Step Guide
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> A quick reference summary matrix of the complete credit card debt closure roadmap: </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs text-left text-black border border-gray-200 rounded-xl">
                      <thead className="bg-gray-100 text-black font-bold">
                        <tr>
                          <th className="p-3">Timeline</th>
                          <th className="p-3">Key Action Items</th>
                          <th className="p-3">Expected Outcome</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-semibold">Days 1. 7</td>
                          <td className="p-3">Portfolio audit. Legal representation notice. Hardship dossier gathering</td>
                          <td className="p-3 text-emerald-700">Abusive calls halt. legal shield established.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Days 8. 20</td>
                          <td className="p-3">Submission of formal OTS proposal to Bank Zonal Credit board</td>
                          <td className="p-3">Bank opens valid deal review channel.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Days 21. 35</td>
                          <td className="p-3">Multi-round counsel talks on main sum haircut</td>
                          <td className="p-3 text-blue-700 font-bold">Board-approved closure Sanction Letter issued.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Days 36. 45</td>
                          <td className="p-3">Direct online payment into card account</td>
                          <td className="p-3 text-emerald-700">Account technically closed and written off.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Days 46. 60</td>
                          <td className="p-3">Receipt of stamped No Dues letter &amp. CIBIL verification</td>
                          <td className="p-3 font-bold text-black">Total permanent debt freedom!</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 48. Conclusion                                                */}
              {/* ------------------------------------------------------------- */}
              <section id="conclusion-credit-card-settlement" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 48
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  48. Conclusion
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Revolving credit card debt should never define your life. Steal your sleep. closure your family&apos. s dignity. The crushing burden of 42%. 52% growing finance charges. Predatory claims threats. mounting fine fees is not an inescapable life sentence. </p>
                  <p> Under the RBI frameworks established by the Reserve Bank of India. Credit card closure provides an honorable. By law binding pathway to exit the debt trap permanently. By wiping out hyper-inflated rates. Securing 50% to 75% ledger waivers. Obtaining checked No Dues letters. You regain complete control of your money destiny. </p>
                  <p> Take the decisive first step toward money liberation today. Partner with CredSettle&apos. S senior banking counsel. Assert your legal rights. reclaim your peace of mind. </p>
                </div>
              </section>

              {/* Conclusion Callout Box Matching loan-settlement */}
              <div className="border-t border-gray-200 pt-6 sm:pt-8 space-y-4">
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-xl font-bold">Break Free from Credit Card Debt Today</h3>
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed"> Our dedicated card court cases team enforces RBI consumer fair-practice codes. Shields your family from claims calls. secures top-tier main sum concessions on overdue plastic cards. </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto inline-block text-center bg-white text-blue-950 font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-xs sm:text-sm active:scale-98"
                    >
                      Book a Free, Confidential Case Evaluation
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
                <div className="font-bold text-xs text-black mb-1">Stop Card Harassment</div>
                <p className="text-[10px] text-black mb-3 leading-tight"> Legal notices stop unlawful claims calls within 24. 48 hrs. </p>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-[11px]"
                >
                  Request Legal Callback
                </Link>
                <div className="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-black space-y-1 text-left">
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% private</p>
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> RBI Fair Code</p>
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> Bank Sanction Letters</p>
                </div>
              </div>

              {/* OTS Calculator Quick Jump Badge */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-black">
                <span className="font-bold text-black block text-[11px]">Card OTS Calculator</span>
                <p className="text-[10px] text-black leading-tight">Estimate your card closure waiver under RBI closure rules.</p>
                <a href="#credit-card-calculator" className="text-[10px] text-blue-600 font-semibold block pt-1 hover:underline">Calculate Savings ↓</a>
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
          <span className="bg-blue-800 text-[10px] px-1.5 py-0.5 rounded-full">48</span>
        </button>

        <a
          href="#credit-card-calculator"
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold p-2.5 rounded-full shadow-xl active:scale-95 transition-transform flex items-center justify-center w-10 h-10"
          aria-label="Jump to Settlement Calculator"
          title="Credit Card Settlement Calculator"
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
