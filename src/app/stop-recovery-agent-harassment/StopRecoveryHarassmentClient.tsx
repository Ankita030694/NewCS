'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';

export default function StopRecoveryHarassmentClient() {
  const [activeId, setActiveId] = useState<string>('intro-recovery-harassment');
  const [isMobile, setIsMobile] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [tocSearch, setTocSearch] = useState('');
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  // Interactive Diagnostic Tool State
  const [selectedViolation, setSelectedViolation] = useState<string>('threatening_calls');
  const [lenderType, setLenderType] = useState<string>('commercial_bank');
  const [complaintFiledStatus, setComplaintFiledStatus] = useState<string>('no');

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingNav(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Diagnostic Violation Analysis
  const violationAnalysis = useMemo(() => {
    const map: Record<string, { severity: string; rbiBreach: string; penalOffense: string; actionForum: string; nextStep: string; script: string }> = {
      threatening_calls: {
        severity: "Severe Criminal Intimidation & Grade-A Regulatory Breach",
        rbiBreach: "RBI Master Circular Para 2.4 & Master Direction on Outsourcing — Total bar on profanity, intimidation, continuous auto-dialing, and calling before 8 AM or after 7 PM.",
        penalOffense: "Sections 351 & 352 BNS (Criminal Intimidation and Intentional Insult) + TRAI Telecom Commercial Communications Customer Preference Regulations.",
        actionForum: complaintFiledStatus === 'over_30' ? "RBI Integrated Ombudsman (CMS Portal)" : "Bank Principal Nodal Officer (PNO) + Police Cyber Cell",
        nextStep: "Enable call recording, preserve audio logs with exact timestamps, and serve an advocate cease-and-desist notice to the lender.",
        script: "This call is being recorded. Under Section 351 of Bharatiya Nyaya Sanhita and RBI Circular Para 2.4, using abusive words or calling repeatedly is a punishable offense. Provide your full name, agency ID, and supervisor extension immediately."
      },
      family_contact: {
        severity: "Unlawful Breach of Privacy & Third-Party Harassment",
        rbiBreach: "Section 29 CICRA 2005 & Master Circular Para 2.5(c) — Absolute statutory prohibition on contacting non-guarantor relatives, spouse, or parents.",
        penalOffense: "Section 356 BNS (Defamation) & Digital Personal Data Protection Act 2023 violation.",
        actionForum: "Principal Nodal Officer + Cyber Crime Cell (if WhatsApp messaging used)",
        nextStep: "Demand immediate removal of third-party numbers from collection software under Section 12 DPDP Act 2023.",
        script: "My family members did not sign or guarantee this credit facility. Under RBI guidelines and the DPDP Act 2023, disclosing my debt to third parties is illegal. If you call my family again, an FIR for defamation and harassment will be lodged against your agency."
      },
      workplace_visit: {
        severity: "Criminal Defamation & Economic Coercion",
        rbiBreach: "Master Circular on Recovery Agents — Workplace visits prohibited unless borrower has permanently absconded from residential address.",
        penalOffense: "Section 356 BNS (Criminal Defamation) & Tortious Interference with Employment Contract.",
        actionForum: "Civil Court (Permanent Injunction) + Bank Zonal Head Grievance Desk",
        nextStep: "Submit building security CCTV footage and HR witness statements directly to the Bank Grievance Redressal Officer.",
        script: "Visiting my workplace violates RBI recovery guidelines. You are causing a public nuisance on corporate property. Please leave the premises immediately, or building security will hand you over to the local police station."
      },
      fake_police_legal: {
        severity: "Cognizable Criminal Fraud & Impersonation of Public Servant",
        rbiBreach: "Simulating court warrants, police notices, or legal process is strictly barred under IBA Fair Practice Code and penal statutes.",
        penalOffense: "Section 204 BNS (Personating a Public Servant) + Section 336 BNS (Forgery for Extortion) + Section 308 BNS (Extortion).",
        actionForum: "Police Commissioner / District Magistrate + Urgent Cyber Cell FIR under Section 175 BNSS",
        nextStep: "Submit digital notice copies to the local police station; civil loan defaults never trigger police arrest warrants.",
        script: "Under Indian law, debt default is a civil dispute. Police have no jurisdiction over bank recovery. Impersonating a police officer or sending fake warrants is a cognizable criminal offense under Section 204 and 336 BNS. I am reporting this number to cybercrime.gov.in."
      },
      post_settlement: {
        severity: "Contractual Fraud, Unfair Trade Practice & Extortion",
        rbiBreach: "Issuing demand notices or deploying agents after a written One-Time Settlement (OTS) breaches RBI Fair Practice Directives.",
        penalOffense: "Section 316 BNS (Criminal Breach of Trust) & Section 318 BNS (Cheating).",
        actionForum: "Banking Ombudsman + State Consumer Disputes Redressal Commission",
        nextStep: "Furnish your stamped settlement sanction letter and payment receipts to the bank's Nodal Officer and demand an immediate NDC.",
        script: "This loan account was formally settled under a written OTS sanction letter on [Date] with UTR [Reference]. Demanding further funds violates the contract and constitutes criminal cheating under Section 318 BNS. Remove this account from recovery immediately."
      },
      social_shaming: {
        severity: "Aggravated Cyber Harassment & Criminal Extortion",
        rbiBreach: "RBI Digital Lending Directives 2022 — Absolute prohibition against accessing contacts, device media, or broadcasting loan details.",
        penalOffense: "Sections 66E and 67 IT Act + Sections 356 & 308 BNS.",
        actionForum: "National Cyber Crime Reporting Portal (cybercrime.gov.in) + Urgent High Court Writ Petition",
        nextStep: "Capture uncropped full-screen screenshots including phone numbers, URLs, and timestamps, then file an immediate cybercrime complaint.",
        script: "Broadcasting loan information or sharing personal details on social media or messaging groups violates Section 66E of the IT Act and Section 356 of BNS. Every screenshot is documented and will be submitted to the Cyber Crime Police Cell."
      }
    };

    return map[selectedViolation] || map.threatening_calls;
  }, [selectedViolation, complaintFiledStatus]);

  // Master 8-Module Navigation Structure (64 Sections)
  const navModules = useMemo(() => [
    {
      moduleTitle: "Module 1: Foundations, Concepts & Harassment Thresholds",
      links: [
        { id: "intro-recovery-harassment", label: "1. Introduction to Recovery Harassment" },
        { id: "what-is-recovery-harassment", label: "2. What Is Recovery Harassment?" },
        { id: "what-is-a-recovery-agent", label: "3. What Is a Recovery Agent?" },
        { id: "why-agents-contact-borrowers", label: "4. Why Agents Contact Borrowers" },
        { id: "when-recovery-becomes-harassment", label: "5. When Recovery Becomes Harassment" },
        { id: "types-of-recovery-harassment", label: "6. Types of Recovery Harassment" },
      ]
    },
    {
      moduleTitle: "Module 2: Channels of Harassment & Coercive Modalities",
      links: [
        { id: "harassment-through-phone-calls", label: "7. Harassment Through Phone Calls" },
        { id: "repeated-excessive-calls", label: "8. Repeated & Excessive Calls" },
        { id: "threatening-abusive-calls", label: "9. Threatening & Abusive Calls" },
        { id: "calling-family-and-relatives", label: "10. Calling Family & Relatives" },
        { id: "contacting-friends-references", label: "11. Contacting Friends & References" },
        { id: "contacting-employer-colleagues", label: "12. Contacting Employer & Colleagues" },
        { id: "visits-to-home-workplace", label: "13. Visits to Home or Workplace" },
        { id: "harassment-whatsapp-sms-social", label: "14. Harassment via WhatsApp & Social" },
        { id: "public-shaming-by-agents", label: "15. Public Shaming by Agents" },
        { id: "threats-police-action-arrest", label: "16. Threats of Police Action & Arrest" },
        { id: "threats-court-cases-legal", label: "17. Threats of Court Cases & Lawsuits" },
      ]
    },
    {
      moduleTitle: "Module 3: Regulatory Guardrails & Statutory Boundaries",
      links: [
        { id: "rbi-rules-against-harassment", label: "18. RBI Rules Against Harassment" },
        { id: "rbi-guidelines-recovery-calls", label: "19. RBI Guidelines on Calls" },
        { id: "permitted-prohibited-calling-hours", label: "20. Permitted Calling Hours (08:00–19:00)" },
        { id: "rbi-rules-recovery-visits", label: "21. RBI Rules on Agent Visits" },
        { id: "rbi-rules-threats-intimidation", label: "22. Rules on Threats & Abusive Language" },
        { id: "borrower-rights-against-harassment", label: "23. Borrower Rights Against Harassment" },
        { id: "what-agents-can-legally-do", label: "24. What Agents Can Legally Do" },
        { id: "what-agents-cannot-legally-do", label: "25. What Agents Cannot Legally Do" },
      ]
    },
    {
      moduleTitle: "Module 4: Concrete Legal Clarifications (Can They / Can't They?)",
      links: [
        { id: "can-agents-call-family", label: "26. Can Agents Call Family Members?" },
        { id: "can-agents-contact-employer", label: "27. Can Agents Contact Your Employer?" },
        { id: "can-agents-visit-home", label: "28. Can Agents Visit Your Home?" },
        { id: "can-agents-visit-workplace", label: "29. Can Agents Visit Your Workplace?" },
        { id: "can-agents-threaten-arrest", label: "30. Can Agents Threaten You With Arrest?" },
        { id: "can-agents-seize-property", label: "31. Can Agents Seize Your Property?" },
        { id: "can-agents-force-immediate-payment", label: "32. Can Agents Force Immediate Payment?" },
      ]
    },
    {
      moduleTitle: "Module 5: Immediate Defense Playbook & Communication Strategies",
      links: [
        { id: "harassment-diagnostic-tool", label: "⚡ Diagnostic Violation Checker" },
        { id: "how-to-stop-harassment", label: "33. How to Stop Agent Harassment" },
        { id: "how-to-handle-recovery-calls", label: "34. How to Handle Recovery Calls" },
        { id: "how-to-respond-threatening-calls", label: "35. Responding to Threatening Calls" },
        { id: "how-to-handle-home-visits", label: "36. Handling Home Visits" },
        { id: "how-to-deal-workplace-visits", label: "37. Dealing With Workplace Visits" },
        { id: "how-to-communicate-with-bank", label: "38. Communicating With the Bank" },
        { id: "request-communication-in-writing", label: "39. Requesting Written Communication" },
      ]
    },
    {
      moduleTitle: "Module 6: Evidence Gathering, Logging & Legal Complaints",
      links: [
        { id: "how-to-document-harassment", label: "40. How to Document Harassment" },
        { id: "what-evidence-to-preserve", label: "41. What Evidence to Preserve" },
        { id: "recording-calls-maintaining-evidence", label: "42. Recording Calls & Legal Validity" },
        { id: "how-to-complain-against-agent", label: "43. How to Complain Against an Agent" },
        { id: "how-to-complain-to-bank-nbfc", label: "44. How to Complain to Bank / NBFC" },
        { id: "how-to-file-rbi-complaint", label: "45. How to File an RBI Complaint" },
        { id: "rbi-ombudsman-complaint-harassment", label: "46. RBI Ombudsman Harassment Complaint" },
        { id: "when-to-approach-police", label: "47. When to Approach the Police" },
        { id: "legal-action-against-harassment", label: "48. Legal Action Against Harassment" },
        { id: "consumer-protection-remedies", label: "49. Consumer Protection Remedies" },
        { id: "legal-notice-against-harassment", label: "50. Legal Notice Against Harassment" },
        { id: "what-to-do-legal-notice-bank", label: "51. Responding to Bank Legal Notices" },
      ]
    },
    {
      moduleTitle: "Module 7: Loan-Specific Harassment & Complex Scenarios",
      links: [
        { id: "harassment-credit-card-cases", label: "52. Harassment in Credit Card Cases" },
        { id: "harassment-personal-loan-cases", label: "53. Harassment in Personal Loan Cases" },
        { id: "harassment-business-loan-cases", label: "54. Harassment in Business Loan Cases" },
        { id: "harassment-after-loan-settlement", label: "55. Harassment After Loan Settlement" },
        { id: "harassment-after-payment", label: "56. Harassment After Payment" },
        { id: "harassment-someone-elses-loan", label: "57. Harassment for Someone Else's Loan" },
        { id: "agent-calling-guarantor-reference", label: "58. Calling a Guarantor or Reference" },
      ]
    },
    {
      moduleTitle: "Module 8: Scenarios, Actionable Rules, FAQs & Legal Shield",
      links: [
        { id: "common-harassment-scenarios-solutions", label: "59. Common Scenarios & Solutions" },
        { id: "dos-and-donts-recovery-agents", label: "60. Do's & Don'ts With Recovery Agents" },
        { id: "faqs-recovery-harassment", label: "61. Comprehensive FAQs" },
        { id: "how-legal-support-can-help", label: "62. How Legal Support Stops Harassment" },
        { id: "step-by-step-guide-stop-harassment", label: "63. Step-by-Step Action Guide" },
        { id: "conclusion-know-rights-take-action", label: "64. Conclusion: Know Your Rights" },
      ]
    }
  ], []);

  const allNavLinks = useMemo(() => navModules.flatMap((m) => m.links), [navModules]);

  const currentChapter = useMemo(() => {
    return allNavLinks.find(link => link.id === activeId) || allNavLinks[0];
  }, [allNavLinks, activeId]);

  const filteredLinks = useMemo(() => {
    const list = selectedModule !== null ? navModules[selectedModule]?.links || [] : allNavLinks;
    if (!tocSearch.trim()) return list;
    const q = tocSearch.toLowerCase().trim();
    return list.filter((l) => l.label.toLowerCase().includes(q));
  }, [navModules, selectedModule, allNavLinks, tocSearch]);

  // Comprehensive Harassment FAQs
  const harassmentFaqs = [
    {
      question: "Are recovery agents legally allowed to call me continuously or use abusive language?",
      answer: "No. The Reserve Bank of India Master Circular on Recovery Agents strictly forbids persistent auto-dialing, verbal abuse, obscene language, and intimidatory threats. Under Section 351 and 352 of the Bharatiya Nyaya Sanhita (BNS), using vulgar language or threatening bodily injury or reputation is a cognizable criminal offense."
    },
    {
      question: "Can recovery agents call my relatives, parents, or friends if I default on an unsecured loan?",
      answer: "Under Section 29 of the Credit Information Companies (Regulation) Act and RBI Outsourcing Guidelines, debt confidentiality is legally protected. Lenders and their collection agencies are strictly prohibited from contacting third-party family members, friends, or neighbors who are not formal co-borrowers or legal guarantors."
    },
    {
      question: "Can a recovery agent visit my office or inform my HR manager about my unpaid loan?",
      answer: "No. RBI directives explicitly bar agents from visiting an employer's office or disclosing debt obligations to colleagues or management, unless the borrower has deliberately absconded from their registered residence. Intentionally causing public embarrassment at a place of employment constitutes actionable criminal defamation under Section 356 BNS."
    },
    {
      question: "What should I do if a collection agent threatens to send police or have me arrested?",
      answer: "Loan default is purely a civil breach of contract under Indian jurisprudence, not a criminal crime. Police officers have no statutory authority or jurisdiction to arrest individuals for unsecured credit card or personal loan defaults. Collection agents threatening police action commit the offense of impersonation and extortion under Sections 204 and 308 BNS."
    },
    {
      question: "What documents must a recovery agent produce before talking to me at my home?",
      answer: "Field recovery agents must furnish three mandatory credentials: (1) A photo identity card issued by the authorized agency, (2) A certified Letter of Authority issued by the bank or NBFC explicitly naming your loan account, and (3) Proof of Debt Recovery Agent (DRA) certification from the Indian Institute of Banking & Finance (IIBF). Without these, you are entitled to deny entry and request police assistance."
    },
    {
      question: "Are recovery calls allowed on Sundays, national holidays, or late at night?",
      answer: "Under RBI operational directives, collection calls and field visits are strictly restricted between 08:00 AM and 07:00 PM (IST). Calls before 8 AM or after 7 PM, as well as unannounced visits during times of personal bereavement or family crisis, violate central bank regulations."
    },
    {
      question: "Can recovery agents legally seize personal property or household items for personal loans?",
      answer: "No. Personal loans and credit cards are unsecured credit facilities where no collateral or asset is hypothecated. Recovery agents have zero legal power to seize furniture, vehicles, jewelry, or residential appliances. Confiscating items without a formal judicial execution order from a competent civil court constitutes criminal robbery or extortion under the BNS."
    },
    {
      question: "How does filing a complaint with the RBI Banking Ombudsman help stop harassment?",
      answer: "If the bank's internal Grievance Cell fails to resolve harassment within 30 days, filing a complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in) triggers formal regulatory scrutiny. The Ombudsman can award compensation up to ₹1,00,000 for mental harassment and loss of dignity, and can penalize the lending institution directly."
    },
    {
      question: "Can CredSettle stop recovery agent calls legally?",
      answer: "Yes. CredSettle's banking litigation advocates serve a formal Legal Representation Notice to the bank under the Advocates Act 1961. This notice informs the lender that legal counsel has been retained, requires all communication to be directed in writing to our legal desk, and warns of criminal and regulatory action if unlawful direct harassment continues."
    },
    {
      question: "What should I do if recovery agents continue calling after I have fully paid or settled the loan?",
      answer: "This is a serious deficiency of service and harassment under the Consumer Protection Act 2019. Forward your stamped settlement letter, payment receipt, and No Dues Certificate (NDC) to the bank's Principal Nodal Officer. If calls persist, CredSettle can issue an urgent legal notice demanding damages for wrongful recovery."
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
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
            Stop Recovery Harassment • Legal Defense 2026
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words">
            How to Stop Recovery Agent Harassment<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">
              Complete Legal Protection &amp; Borrower Defense Guide
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-100 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            Are recovery agents threatening your family, visiting your workplace, or calling at odd hours? Learn how to legally halt coercive tactics, assert your constitutional rights under RBI guidelines and Bharatiya Nyaya Sanhita, preserve unassailable evidence, and secure professional legal protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md active:scale-98 text-center"
            >
              Stop Agent Harassment Now
            </Link>
            <a
              href="#harassment-diagnostic-tool"
              className="px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm text-white bg-blue-600/40 hover:bg-blue-600/60 border border-blue-400/40 transition-all backdrop-blur-sm active:scale-98 text-center"
            >
              Analyze Agent Violations ⚡
            </a>
          </div>
          <div className="mt-3.5 sm:mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-blue-200/90 font-medium">
            <span>✓ RBI Anti-Harassment Circulars</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Criminal Intimidation Protections (BNS)</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Advocates Act Legal Representation</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Stop Recovery Agent Harassment', url: '/stop-recovery-agent-harassment' }
            ]}
          />
        </div>
      </div>

      {/* Trust & E-E-A-T Signal Banner */}
      <div className="bg-slate-900 text-slate-200 py-2.5 px-3 sm:px-4 border-b border-slate-800 text-[11px] sm:text-xs md:text-sm">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-red-600 text-white font-semibold px-2 py-0.5 rounded text-[10px] sm:text-xs">BORROWER DEFENSE</span>
            <span className="leading-tight text-white font-medium">Reviewed by High Court Banking Litigation Advocates &amp; Consumer Protection Specialists</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-300 text-[10px] sm:text-xs">
            <span>Current as of: October 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>Supreme Court Landmarks &amp; RBI Fair Practices Mandate</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3-COLUMN EDITORIAL CONTENT LAYOUT (15% - 70% - 15%)                       */}
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
                <span className="text-blue-600 font-bold mr-1">TOC (64 Chapters):</span>
                {currentChapter.label}
              </span>
              <span className="text-blue-600 text-xs flex-shrink-0">Menu ▾</span>
            </button>

            <a
              href="#harassment-diagnostic-tool"
              className="flex-shrink-0 bg-slate-900 hover:bg-slate-800 text-white px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center gap-1 shadow-xs"
            >
              <span>⚡</span>
              <span className="hidden sm:inline">Diagnostic</span>
            </a>

            <Link
              href="/contact"
              className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-colors shadow-xs"
            >
              Get Legal Help
            </Link>
          </div>
        </div>

        {/* 3 Column Flex Container: 15% - 70% - 15% */}
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 items-start relative">

          {/* ===================================================================== */}
          {/* LEFT COLUMN: DESKTOP STICKY TABLE OF CONTENTS (15% Width)             */}
          {/* ===================================================================== */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-24 h-[calc(100vh-7rem)] max-h-[calc(100vh-7rem)] flex flex-col space-y-2.5 overflow-hidden z-10">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 flex-1 min-h-0 flex flex-col overflow-hidden max-h-full">
              <div className="flex items-center justify-between border-b pb-2 mb-2 flex-shrink-0">
                <h3 className="font-bold text-black text-xs">Table of Contents</h3>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">64</span>
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
                    M{idx + 1}
                  </button>
                ))}
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

            {/* Quick Legal Support Action */}
            <div className="bg-gradient-to-br from-red-600 to-rose-700 p-2.5 sm:p-3 rounded-xl text-white shadow-sm text-center flex-shrink-0">
              <div className="flex items-center justify-center gap-1.5 mb-1 text-red-100 text-xs">
                <span>🛡️</span>
                <h4 className="font-bold text-xs text-white">Stop Harassment</h4>
              </div>
              <p className="text-[10px] text-red-100 mb-2 leading-snug">
                High Court advocate representation within 24 hours.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-red-50 text-red-700 font-bold text-[11px] py-1.5 px-2 rounded-lg transition-colors shadow"
              >
                Consult Advocate
              </Link>
            </div>
          </aside>

          {/* ===================================================================== */}
          {/* MIDDLE COLUMN: MAIN EDITORIAL CONTENT (70% Width)                     */}
          {/* ===================================================================== */}
          <main className="lg:w-[70%] flex-1 min-w-0 space-y-6">

            {/* Overview Emergency Banner */}
            <div className="bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 border border-red-300 rounded-2xl p-5 text-black shadow-xs">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">🛡️</span>
                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-red-950">
                    Emergency Legal Protection Against Unlawful Debt Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-black leading-relaxed font-normal">
                    Under Indian law, non-payment of an unsecured personal loan or credit card bill due to genuine financial distress is <strong>strictly a civil dispute</strong> governed by the Indian Contract Act, 1872. <strong>Debt default is not a crime under the Bharatiya Nyaya Sanhita (BNS)</strong>. Recovery agents have zero statutory power to intimidate you, contact third-party relatives, defame you before colleagues, or summon the police.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-semibold text-red-900">
                    <span className="bg-white px-2 py-0.5 rounded border border-red-200">RBI Master Circular Para 2.4</span>
                    <span className="bg-white px-2 py-0.5 rounded border border-red-200">BNS Section 351 (Criminal Intimidation)</span>
                    <span className="bg-white px-2 py-0.5 rounded border border-red-200">TRAI 160-Series Regulations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Editorial Card Container */}
            <article className="bg-white p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-sm border border-gray-200/90 space-y-8 sm:space-y-12 overflow-hidden text-black">

              {/* =================================================================== */}
              {/* MODULE 1: FOUNDATIONS, CONCEPTS & HARASSMENT THRESHOLDS             */}
              {/* =================================================================== */}

              {/* Section 1 */}
              <section id="intro-recovery-harassment" className="scroll-section space-y-4">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 1 • Overview &amp; Context
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  1. Introduction to Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  When a borrower experiences sudden financial shocks—such as job termination, business insolvency, medical emergencies, or family crises—repaying unsecured personal loans and credit card dues can become temporarily unfeasible. While lending institutions possess a legitimate contractual right to recover overdue funds through due process of law, recovery agents frequently abandon legal channels in favor of psychological warfare, relentless telephonic harassment, and aggressive doorstep intimidation.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  In India, debt collection is governed by strict regulatory directives issued by the Reserve Bank of India (RBI) and binding penal statutes. Every borrower is entitled to basic human dignity, privacy, and constitutional protection under Article 21 of the Constitution of India. This comprehensive master guide outlines the exact legal boundaries governing recovery agencies, details what constitutes unlawful harassment, and equips borrowers with battle-tested legal mechanisms to immediately halt abusive tactics.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Financial difficulties can affect any honest citizen. Understanding that debt is a civil contractual obligation rather than a moral crime or a police offense is the first step toward reclaiming your peace of mind and asserting your statutory rights.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl text-xs text-blue-950 space-y-1">
                  <p className="font-bold text-blue-900">Key Regulatory Principle:</p>
                  <p className="font-medium text-black">
                    The Reserve Bank of India has repeatedly affirmed that commercial banks and Non-Banking Financial Companies (NBFCs) are vicariously liable for all acts of harassment, abuse, or intimidation committed by their outsourced recovery agents.
                  </p>
                </div>
              </section>

              {/* Interactive Assessment Funnel - Blended inside Middle Container Above Chapter 2 */}
              <div className="not-prose my-6 sm:my-8 p-3 sm:p-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-slate-50 rounded-2xl border border-blue-100 shadow-xs">
                <InteractiveLeadFunnel className="!bg-transparent !p-0 !py-0 !px-0" />
              </div>

              {/* Section 2 */}
              <section id="what-is-recovery-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 2 • Legal Definition &amp; Scope
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  2. What Is Recovery Agent Harassment?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Recovery agent harassment is defined as any coercive, intimidatory, humiliating, deceptive, or abusive action deployed by a lender’s representative to force debt repayment through extra-judicial pressure rather than civil adjudication. It transcends professional reminder protocols and infringes upon a citizen’s fundamental peace of mind, privacy, and professional reputation.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Harassment is not merely loud speech; under Indian jurisprudence, it encompasses behavioral patterns calibrated to induce psychological panic, dread of social ostracization, or fear of bodily harm. Whether it occurs through digital messaging, relentless phone calls, doorstep confrontation, or communication with innocent third parties, such conduct is strictly prohibited by law.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Lawful Debt Collection
                    </h4>
                    <ul className="text-black space-y-1 list-disc pl-4 font-normal">
                      <li>Calling strictly between 08:00 AM and 07:00 PM</li>
                      <li>Clearly identifying self, agency, and principal bank</li>
                      <li>Carrying valid IIBF DRA certification and bank Letter of Authority</li>
                      <li>Discussing loan details exclusively with the primary borrower</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-red-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-red-950 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                      Unlawful Harassment
                    </h4>
                    <ul className="text-black space-y-1 list-disc pl-4 font-normal">
                      <li>Calling repeatedly dozens of times daily or late at night</li>
                      <li>Using abusive, profane, or derogatory language</li>
                      <li>Contacting parents, spouses, siblings, or colleagues</li>
                      <li>Falsely claiming police arrest warrants or asset seizures</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="what-is-a-recovery-agent" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 3 • Industry Profile &amp; DRA Training
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  3. What Is a Recovery Agent?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  A recovery agent (also designated as a Debt Recovery Agent or collection tele-caller) is an individual or outsourced third-party firm contracted by a commercial bank, co-operative bank, housing finance company, or NBFC to follow up with defaulting borrowers and recover overdue loan installments.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Under RBI regulations formulated pursuant to the Indian Banks’ Association (IBA) model code, every recovery agent operating in the field must be professionally trained through a mandatory 100-hour (or 50-hour for graduates) curriculum and certified by the <strong>Indian Institute of Banking &amp; Finance (IIBF)</strong>. The syllabus mandates comprehensive instruction in borrower privacy, professional etiquette, and constitutional safeguards.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Despite these clear guidelines, many recovery agencies deploy untrained freelance tele-callers on commission-only contracts. Because their income is tied directly to the amount extracted from borrowers, these individuals frequently disregard ethical and legal standards, resulting in egregious harassment.
                </p>
              </section>

              {/* Section 4 */}
              <section id="why-agents-contact-borrowers" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 4 • Delinquency Triggers &amp; DPD Aging
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  4. Why Do Recovery Agents Contact Borrowers?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Financial institutions maintain strict internal provisioning requirements under RBI Prudential Norms. Lenders must set aside capital reserves for delinquent loans, directly impacting their profitability. To mitigate provisioning losses, accounts are categorized by Days Past Due (DPD) and subjected to escalating recovery protocols:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-lg flex items-start gap-2.5">
                    <span className="font-bold text-blue-700 shrink-0">1–30 DPD:</span>
                    <span className="text-black font-normal">SMA-0 (Special Mention Account 0): Soft reminder SMS alerts and standard tele-calls from automated customer service portals.</span>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg flex items-start gap-2.5">
                    <span className="font-bold text-amber-700 shrink-0">31–60 DPD:</span>
                    <span className="text-black font-normal">SMA-1: Escalation to internal recovery tele-callers and pre-default notices.</span>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg flex items-start gap-2.5">
                    <span className="font-bold text-orange-700 shrink-0">61–90 DPD:</span>
                    <span className="text-black font-normal">SMA-2: Imminent Non-Performing Asset (NPA) threat. Files are handed over to external third-party recovery agencies on high commission brackets.</span>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg flex items-start gap-2.5">
                    <span className="font-bold text-red-700 shrink-0">90+ DPD:</span>
                    <span className="text-black font-normal">NPA Classification: The bank incurs mandatory capital provisioning. Aggressive agencies utilize field visits and psychological pressure to recover capital.</span>
                  </div>
                </div>
                <p className="text-xs text-black leading-relaxed mt-2 font-normal">
                  Understanding this institutional cycle allows borrowers to anticipate the timing and nature of collection efforts, enabling them to assert their legal rights proactively.
                </p>
              </section>

              {/* Section 5 */}
              <section id="when-recovery-becomes-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 5 • The Legal Threshold &amp; Statutory Red Lines
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  5. When Does Recovery Become Harassment?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  The boundary between legitimate debt follow-up and unlawful harassment is clearly codified in the <em>RBI Master Circular on Recovery Agents in Banks (DBOD.No.Leg.BC.24/09.07.005/2008-09)</em> and reiterated in the Master Direction on Financial Services Outsourcing (2023).
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  A collection effort crosses into criminal and regulatory harassment the moment any of the following 5 statutory red lines are breached:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-2 list-disc pl-5 font-normal">
                  <li><strong>Temporal Boundary Breach:</strong> Calling or knocking on doors prior to 08:00 AM or subsequent to 07:00 PM.</li>
                  <li><strong>Privacy &amp; Third-Party Breach:</strong> Disclosing loan defaults to employers, neighbors, friends, or non-guarantor family.</li>
                  <li><strong>Verbal Intimidation &amp; Insult:</strong> Using profane, casteist, sexually derogatory, or threatening words (Sections 351, 352 BNS).</li>
                  <li><strong>Impersonation &amp; Deception:</strong> Posing as police officers, CBI agents, advocates, or executing simulated court summons.</li>
                  <li><strong>Physical Trespass &amp; Coercion:</strong> Refusing to leave private premises, obstructing movement, or attempting forced vehicle/property seizure.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Once an agent crosses any of these red lines, the interaction ceases to be a civil discussion and becomes an actionable legal violation.
                </p>
              </section>

              {/* Section 6 */}
              <section id="types-of-recovery-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 6 • Categorization &amp; Behavioral Matrix
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  6. Types of Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  In practical banking litigation, borrower harassment manifests across four distinct operational dimensions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-300 rounded-xl shadow-2xs space-y-1">
                    <h4 className="font-bold text-black">1. Telephonic &amp; Digital Harassment</h4>
                    <p className="text-black font-normal">Auto-dialer robo-bombardment (30–80 calls/day), abusive WhatsApp audio notes, spam SMS, and international virtual VoIP spoofing.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-300 rounded-xl shadow-2xs space-y-1">
                    <h4 className="font-bold text-black">2. Reputational &amp; Social Shaming</h4>
                    <p className="text-black font-normal">Directly calling HR management, leaving derogatory notices in apartment lobbies, or creating WhatsApp borrower default groups.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-300 rounded-xl shadow-2xs space-y-1">
                    <h4 className="font-bold text-black">3. Doorstep Physical Intimidation</h4>
                    <p className="text-black font-normal">Unannounced residential visits by groups of aggressive individuals, refusal to show IIBF credentials, shouting outside doorways.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-300 rounded-xl shadow-2xs space-y-1">
                    <h4 className="font-bold text-black">4. Legal &amp; Penal Misrepresentation</h4>
                    <p className="text-black font-normal">Forged non-bailable arrest warrants, fake notices from "Chief Judicial Magistrates", and threats of immediate asset seizure.</p>
                  </div>
                </div>
                <p className="text-xs text-black leading-relaxed font-normal">
                  Identifying which category of harassment you are experiencing is critical for choosing the appropriate legal countermeasure and complaint forum.
                </p>
              </section>

              {/* =================================================================== */}
              {/* MODULE 2: CHANNELS OF HARASSMENT & COERCIVE MODALITIES              */}
              {/* =================================================================== */}

              {/* Section 7 */}
              <section id="harassment-through-phone-calls" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 7 • Telephonic Vector &amp; Telecom Regulations
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  7. Recovery Agent Harassment Through Phone Calls
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Telephonic harassment represents the most prevalent form of collection abuse. Tele-callers deployed by outsourced agencies routinely violate the <strong>Telecom Commercial Communications Customer Preference Regulations (TCCCPR, 2018)</strong> and TRAI mandates by utilizing unverified private SIM cards, GSM gateways, and virtual VoIP networks to bypass caller ID identification and spam filters.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Under RBI directives, lenders must maintain verifiable telephonic logs of every interaction and ensure agents state their full name, the collection agency's name, and the principal bank immediately upon call initiation. Using unregistered phone numbers or masking caller identities violates TRAI’s 160-series telemarketing allocation rules.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  When agents conceal their identity or refuse to disclose which agency they represent, they are engaging in deceptive telephonic practices that can be reported directly to telecom enforcement authorities and the RBI Banking Ombudsman.
                </p>
              </section>

              {/* Section 8 */}
              <section id="repeated-excessive-calls" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 8 • Call Bombardment &amp; Auto-Dialer Abuse
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  8. Repeated and Excessive Recovery Calls
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Borrowers regularly report receiving 20, 50, or even 100+ calls in a single day. Repeated calling designed to cause mental exhaustion, disrupt daily work, or induce psychological panic is an explicit breach of RBI Fair Practice Codes. Automated predictive dialers flood phone lines every few minutes, making normal phone use impossible.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Under the Indian legal framework, deliberate telephonic flooding can be treated as an actionable public nuisance under Section 270 of the Bharatiya Nyaya Sanhita (BNS) and intentional harassment via electronic telecommunications.
                </p>
                <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 text-xs text-amber-950 space-y-1.5">
                  <p className="font-bold">What RBI Guidelines Mandate:</p>
                  <p className="text-black font-normal">
                    Agents are forbidden from harassing borrowers through persistent, repeated calls. Once a borrower indicates their inability to make immediate payment or requests contact at a later scheduled date, repeated calls on the same day constitute regulatory harassment subject to Banking Ombudsman penalties.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="threatening-abusive-calls" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 9 • Abusive Audio &amp; Criminal Offenses
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  9. Threatening and Abusive Recovery Calls
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Profanity, derogatory slurs against family members, threats of physical assault, and vulgar remarks directed at female borrowers or family members are strictly criminal offenses under Indian law. Collection agents who use aggressive profanity often assume borrowers will not record the call.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  The moment an agent utters abusive language or threatens harm, the matter ceases to be a commercial banking transaction and becomes a cognizable penal offense under the Bharatiya Nyaya Sanhita.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-black font-bold">
                      <tr>
                        <th className="p-2.5 border-b border-gray-300">Offensive Behavior</th>
                        <th className="p-2.5 border-b border-gray-300">Applicable Statute</th>
                        <th className="p-2.5 border-b border-gray-300">Legal Penalty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-black font-normal">
                      <tr>
                        <td className="p-2.5">Threats of physical harm or violence</td>
                        <td className="p-2.5 font-bold text-red-700">Section 351 BNS (Criminal Intimidation)</td>
                        <td className="p-2.5">Imprisonment up to 2 years, fine, or both</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Intentional insult provoking breach of peace</td>
                        <td className="p-2.5 font-bold text-red-700">Section 352 BNS</td>
                        <td className="p-2.5">Imprisonment up to 2 years or fine</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Insulting modesty of a female borrower</td>
                        <td className="p-2.5 font-bold text-red-700">Section 79 BNS</td>
                        <td className="p-2.5">Rigorous imprisonment up to 3 years + fine</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 10 */}
              <section id="calling-family-and-relatives" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 10 • Third-Party Harassment &amp; CICRA Protection
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  10. Recovery Agents Calling Family Members and Relatives
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  One of the most emotionally distressing tactics used by rogue recovery agents is telephoning elderly parents, spouses, siblings, or in-laws. Agents often tell relatives that the borrower is facing imminent imprisonment or demand that family members pay off the loan from their personal savings.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  <strong>Legal Reality:</strong> Under Indian contract law, debt liability is strictly individual. Unless a family member is a formal co-borrower or legal guarantor who signed the loan agreement, they have zero legal liability for your personal loan or credit card debt. Calling them violates Section 29 of the Credit Information Companies (Regulation) Act and RBI privacy codes.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Lenders have a legal obligation to maintain credit confidentiality. Sharing account balances, default histories, or legal threats with non-guarantor relatives is an unlawful breach of privacy that entitles borrowers to initiate complaints before the Banking Ombudsman and Consumer Courts.
                </p>
              </section>

              {/* Section 11 */}
              <section id="contacting-friends-references" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 11 • Reference Misuse &amp; DPDP Act Safeguards
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  11. Recovery Agents Contacting Friends and References
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  When borrowers fill out loan applications, lenders often ask for 2 personal "references". Agents frequently treat these references as collateral co-signers, calling them to demand loan clearance or to disclose your debt details.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  A "reference" on a loan application serves merely as an address verification contact. A reference is <strong>not a guarantor</strong>. Demanding money from a reference or informing them of an outstanding debt is an unlawful breach of confidentiality under the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Under Section 12 of the DPDP Act 2023, personal data collected for address verification cannot be repurposed for third-party coercion or public shaming. Lenders misusing reference contact details can face severe statutory penalties from the Data Protection Board of India.
                </p>
              </section>

              {/* Section 12 */}
              <section id="contacting-employer-colleagues" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 12 • Workplace Interference &amp; Defamation
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  12. Recovery Agents Contacting Your Employer or Colleagues
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Calling your workplace landline, emailing your corporate HR department, or speaking to team managers regarding a personal debt is illegal. Agents utilize this tactic to threaten the borrower’s livelihood and force emergency liquidation of assets.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Such conduct directly damages the borrower’s professional standing and can result in disciplinary action or termination. The law strictly separates an individual's private civil debt from their employment contract.
                </p>
                <div className="bg-red-50 border border-red-300 rounded-xl p-4 text-xs text-red-950 space-y-1">
                  <p className="font-bold text-red-900">Criminal Defamation Under Section 356 BNS:</p>
                  <p className="text-black font-normal">
                    Disclosing a citizen’s private debt status to their employer with the intention of causing reputational injury or job termination constitutes criminal defamation under Section 356 of the Bharatiya Nyaya Sanhita, punishable by up to 2 years imprisonment.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="visits-to-home-workplace" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 13 • Doorstep Visits &amp; Mandatory Credentials
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  13. Recovery Agent Visits to Home or Workplace
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Field collection visits are heavily regulated under RBI’s 2008 Master Circular and 2023 Outsourcing Directions. An agent may visit a residential address only between 08:00 AM and 07:00 PM and must show certified identification and authorization dockets.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Workplace visits are strictly prohibited unless the borrower has stopped responding to all communication and is completely untraceable at their residential address. Visiting an office to create a public scene entitles the borrower to initiate criminal proceedings and report institutional misconduct to the bank's MD &amp; CEO.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Any visiting agent who arrives in groups of three or four, refuses to show credentials, or uses intimidating physical posturing is in clear breach of central banking guidelines and criminal law.
                </p>
              </section>

              {/* Section 14 */}
              <section id="harassment-whatsapp-sms-social" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 14 • Digital Cyber Coercion &amp; IT Act Violations
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  14. Recovery Agent Harassment Through WhatsApp, SMS and Social Media
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  With the proliferation of instant messaging, recovery agencies frequently flood WhatsApp with threatening voice notes, countdown ultimatum messages ("Pay within 2 hours or face police raid"), and fake legal notices carrying fabricated court seals.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Sending intimidatory WhatsApp messages or contacting borrowers through LinkedIn, Instagram, or Facebook violates both the Information Technology Act, 2000 (Sections 66D, 66E) and RBI Digital Lending Guidelines. All such digital messages must be preserved as unedited screenshots for police and ombudsman complaints.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Creating group chats containing a borrower’s family members, colleagues, or social connections to discuss debt obligations is cyber extortion punishable by imprisonment under Indian cyber law.
                </p>
              </section>

              {/* Section 15 */}
              <section id="public-shaming-by-agents" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 15 • Public Humiliation &amp; Judicial Precedents
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  15. Public Shaming by Recovery Agents
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Rogue agencies occasionally resort to pasting default notices on apartment security noticeboards, shouting in residential corridors, or informing residential welfare associations (RWAs).
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  The Supreme Court of India in <em>ICICI Bank v. Shanti Devi Sharma (2008)</em> firmly held that banks cannot employ strong-arm tactics to subject citizens to public ignominy and humiliation. Any public shaming allows the borrower to seek substantial damages before the Consumer Disputes Redressal Commission and High Court.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Under Article 21 of the Constitution of India, the Right to Life includes the Right to Live with Human Dignity. Public humiliation by debt collection agents directly infringes upon this fundamental constitutional guarantee.
                </p>
              </section>

              {/* Section 16 */}
              <section id="threats-police-action-arrest" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 16 • False Criminal Threats &amp; Police Jurisdiction
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  16. Threats of Police Action or Arrest
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  A common psychological weapon is the threat of immediate arrest. Recovery agents frequently claim: <em>"An FIR has been lodged at the Crime Branch,"</em> or <em>"Police will arrive at your home with an arrest warrant this evening."</em>
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  These claims are entirely fabricated. Indian police officers are tasked with investigating crimes under the Bharatiya Nyaya Sanhita and local penal laws. They are not collection agents for commercial banks or NBFCs.
                </p>
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-xs text-emerald-950 space-y-1.5">
                  <p className="font-bold text-emerald-900">The Law in Clear Terms:</p>
                  <p className="text-black font-normal">
                    <strong>Civil default cannot result in police arrest.</strong> The police department handles criminal offenses under the BNS, such as murder, theft, fraud, or assault. Debt collection is exclusively handled through Civil Courts, Debt Recovery Tribunals (for debts above ₹20 Lakhs), or Consumer Forums. Agents impersonating police officers commit a cognizable criminal offense under Section 204 BNS.
                  </p>
                </div>
              </section>

              {/* Section 17 */}
              <section id="threats-court-cases-legal" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 17 • Fabricated Legal Threats &amp; Forgery
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  17. Threats of Court Cases and Legal Action
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Collection agencies routinely distribute simulated documents bearing fake official emblems, fabricated case numbers ("C.C. No. 4920/2026"), and urgent warnings of non-bailable warrants under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  While a lender has the lawful right to initiate legitimate arbitration or Section 138 cheque bounce proceedings through an enrolled advocate, <strong>recovery agents cannot issue legal process themselves</strong>. Simulating court dockets constitutes criminal forgery for the purpose of cheating and extortion under Sections 336 and 318 BNS.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Legitimate court summons are always served by an official court bailiff or sent via registered post with acknowledgment due (RPAD). They are never delivered via WhatsApp voice notes or private collection agent SMS.
                </p>
              </section>

              {/* =================================================================== */}
              {/* MODULE 3: REGULATORY GUARDRAILS & STATUTORY BOUNDARIES              */}
              {/* =================================================================== */}

              {/* Section 18 */}
              <section id="rbi-rules-against-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 18 • Core RBI Directives
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  18. RBI Rules Against Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  The Reserve Bank of India has established an extensive regulatory code prohibiting intimidation. Key circulars include:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li><strong>Master Circular on Recovery Agents in Banks (DBOD.No.Leg.BC.24/09.07.005/2008-09):</strong> Foundational code of conduct for bank recovery agents.</li>
                  <li><strong>Master Direction on Financial Services Outsourcing (2023):</strong> Direct institutional liability on banks and NBFCs for outsourced collection entities.</li>
                  <li><strong>RBI Circular on Recovery Agents - Harassment of Borrowers (August 2022):</strong> Explicit directive barring public humiliation, obscene language, and unauthorized third-party contact.</li>
                  <li><strong>Digital Lending Guidelines (September 2022):</strong> Complete ban on smartphone contact scraping and digital blackmail.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  These circulars carry the force of law under Section 35A of the Banking Regulation Act, 1949, and Section 45JA of the RBI Act, 1934. Violations trigger regulatory enforcement actions, monetary penalties, and potential bans on collection outsourcing.
                </p>
              </section>

              {/* Section 19 */}
              <section id="rbi-guidelines-recovery-calls" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 19 • Telephonic Calling Mandates
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  19. RBI Guidelines on Recovery Agent Calls
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Under paragraph 2.4 of the Master Circular, telephonic recovery must adhere to 4 mandatory conditions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">1. Immediate Identification:</strong> The caller must state their name, their certified agency, and the lending bank right at the start.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">2. Registered Calling Lines:</strong> Calls must originate from registered telephone numbers pre-notified by the bank.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">3. Interaction Logging:</strong> The agency must record and archive every call for regulatory inspection.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">4. Respect for Privacy:</strong> If the borrower asks to be called at an alternative time, the agent must honor that request.
                  </div>
                </div>
                <p className="text-sm text-black leading-relaxed font-normal">
                  If an agent refuses to state their full name or calling agency, the call violates RBI guidelines, and the borrower is fully entitled to disconnect and report the interaction.
                </p>
              </section>

              {/* Section 20 */}
              <section id="permitted-prohibited-calling-hours" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 20 • Temporal Window Regulations
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  20. Permitted and Prohibited Calling Hours
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  The RBI has established strict, non-negotiable operational hours for debt recovery communications:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 space-y-1">
                    <h4 className="font-bold text-emerald-950 text-sm">✓ Permitted Hours</h4>
                    <p className="text-emerald-900 font-bold text-base">08:00 AM to 07:00 PM (IST)</p>
                    <p className="text-black font-normal">Calls and field visits are permissible exclusively during this window on standard business days.</p>
                  </div>
                  <div className="bg-red-50 border border-red-300 rounded-xl p-4 space-y-1">
                    <h4 className="font-bold text-red-950 text-sm">✗ Prohibited Hours</h4>
                    <p className="text-red-900 font-bold text-base">Before 08:00 AM &amp; After 07:00 PM</p>
                    <p className="text-black font-normal">Calls at night, early morning, or during family bereavements are strict regulatory violations.</p>
                  </div>
                </div>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Calling at 07:05 PM or 07:30 AM is just as unlawful as calling at midnight. Every call received outside this 11-hour window should be logged as documentary evidence of regulatory non-compliance.
                </p>
              </section>

              {/* Section 21 */}
              <section id="rbi-rules-recovery-visits" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 21 • Field Visit Standards &amp; Verification
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  21. RBI Rules on Recovery Agent Visits
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Paragraph 2.5 of the Master Circular delineates the mandatory protocol for doorstep visits:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-2 list-disc pl-5 font-normal">
                  <li><strong>Advance Written Notice:</strong> The bank must formally notify the borrower of the recovery agency’s empanelment and authorized personnel before any home visit.</li>
                  <li><strong>Mandatory Documentation:</strong> Field agents must carry and present on demand: (a) Bank-issued Letter of Authority, (b) Agency Photo ID, and (c) IIBF Certification.</li>
                  <li><strong>Respect for Privacy &amp; Sanctity:</strong> Agents must respect the borrower’s home environment, refrain from entering without express permission, and conduct conversations peacefully.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Agents are prohibited from visiting a borrower's residence during family bereavements, marriages, or severe medical emergencies. Doing so demonstrates bad faith and deliberate infliction of mental agony.
                </p>
              </section>

              {/* Section 22 */}
              <section id="rbi-rules-threats-intimidation" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 22 • Zero Tolerance Directives
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  22. RBI Rules on Threats, Intimidation and Abusive Language
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  The RBI’s August 2022 notification issued under Section 35A of the Banking Regulation Act establishes a zero-tolerance mandate against abusive recovery practices:
                </p>
                <blockquote className="border-l-4 border-red-500 pl-4 py-2 italic text-xs sm:text-sm text-black bg-gray-50 rounded-r-lg font-normal">
                  "Regulated Entities (REs) shall strictly ensure that they or their agents do not resort to intimidation or harassment of any kind, either verbally or physically, against any person in their debt collection efforts, including acts intended to humiliate publicly or intrude upon the privacy of the debtors' family members, referees and friends..."
                </blockquote>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Lending institutions that fail to rein in aggressive collection vendors face direct regulatory sanctions, including public reprimands, monetary fines, and mandatory operational audits.
                </p>
              </section>

              {/* Section 23 */}
              <section id="borrower-rights-against-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 23 • Statutory &amp; Constitutional Protections
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  23. Borrower's Rights Against Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  As a borrower under Indian law, you are endowed with 5 fundamental statutory rights:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">1. Right to Dignity &amp; Respect:</strong> Protection against profanity, physical threats, and public embarrassment under Article 21.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">2. Right to Privacy:</strong> Protection of financial confidentiality; absolute bar on third-party disclosure under Section 29 CICRA Act.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">3. Right to Credentials:</strong> The absolute right to inspect the visiting agent’s IIBF DRA certificate and bank Letter of Authority.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">4. Right to Legal Representation:</strong> The constitutional right to instruct the lender to communicate exclusively with your appointed advocate under the Advocates Act 1961.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">5. Right to Redressal:</strong> Immediate access to the Bank Grievance Redressal Officer and the RBI Banking Ombudsman under RB-IOS 2021.
                  </div>
                </div>
              </section>

              {/* Section 24 */}
              <section id="what-agents-can-legally-do" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 24 • Lawful Scope of Debt Collection
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  24. What Recovery Agents Can Legally Do
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Legitimate debt collection in India is strictly limited to polite, documented communication. Recovery agents are legally authorized to:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Make polite telephonic inquiries regarding payment status between 08:00 AM and 07:00 PM.</li>
                  <li>Visit the borrower’s registered residential address during permitted hours with valid identification.</li>
                  <li>Deliver written demand notices and account statement summaries issued by the lender.</li>
                  <li>Discuss repayment plans, restructuring options, or formal settlement frameworks sanctioned by the bank.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Notice that none of these authorized powers include using abusive language, threatening physical violence, or contacting colleagues or relatives.
                </p>
              </section>

              {/* Section 25 */}
              <section id="what-agents-cannot-legally-do" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 25 • Statutory Prohibitions Summary
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  25. What Recovery Agents Cannot Legally Do
                </h2>
                <div className="bg-red-50 border border-red-300 rounded-xl p-4 text-xs text-red-950 space-y-2">
                  <p className="font-bold text-sm text-red-900">Strictly Prohibited Acts Under Indian Law:</p>
                  <ul className="space-y-1.5 list-disc pl-4 text-black font-normal">
                    <li>They CANNOT use physical force or enter your home without your explicit permission.</li>
                    <li>They CANNOT seize furniture, appliances, cars, or jewelry for unsecured personal loans.</li>
                    <li>They CANNOT call or visit your friends, relatives, in-laws, or neighbors.</li>
                    <li>They CANNOT visit your office or talk to your colleagues, supervisor, or HR manager.</li>
                    <li>They CANNOT threaten arrest, jail time, police raids, or criminal prosecution.</li>
                    <li>They CANNOT call before 8:00 AM or after 7:00 PM.</li>
                    <li>They CANNOT demand cash or payment into their personal UPI ID.</li>
                  </ul>
                </div>
                <p className="text-sm text-black leading-relaxed mt-2 font-normal">
                  If an agent engages in any of these prohibited actions, they are acting outside the law and can be held personally liable in civil and criminal proceedings.
                </p>
              </section>

              {/* =================================================================== */}
              {/* MODULE 4: CONCRETE LEGAL CLARIFICATIONS (CAN THEY / CAN'T THEY?)     */}
              {/* =================================================================== */}

              {/* Section 26 */}
              <section id="can-agents-call-family" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 26 • Legal Clarification: Family Members
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  26. Can Recovery Agents Call Your Family Members?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  <strong>No. Absolutely not.</strong> Calling non-guarantor family members is an explicit violation of the RBI Master Circular on Recovery Agents and Section 29 of the CICRA Act. The lender has a contractual relationship solely with the individual borrower. Harassing parents, spouses, or children to extract payment can be immediately reported to the Bank Nodal Officer and the RBI Integrated Ombudsman.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Family members are not responsible for your debts unless they signed the loan agreement as a co-borrower or guarantor. Inform your family members never to entertain such calls, never to disclose your whereabouts, and to record any incoming calls from recovery agents.
                </p>
              </section>

              {/* Section 27 */}
              <section id="can-agents-contact-employer" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 27 • Legal Clarification: Employers &amp; HR
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  27. Can Recovery Agents Contact Your Employer?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  <strong>No.</strong> Contacting an employer, emailing HR, or calling office reception violates RBI fair practice norms and constitutes criminal defamation under Section 356 of the Bharatiya Nyaya Sanhita. An agent may contact a workplace only if the borrower has designated their corporate office as their official communication address and has completely ceased communication at their residence.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  If an agent contacts your workplace, obtain a written statement from your receptionist or HR department detailing the call. This serves as critical evidence when seeking ombudsman compensation or filing a defamation suit.
                </p>
              </section>

              {/* Section 28 */}
              <section id="can-agents-visit-home" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 28 • Legal Clarification: Home Visits
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  28. Can Recovery Agents Visit Your Home?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  <strong>Yes, but strictly under stringent conditions.</strong> Agents can visit your residence only between 08:00 AM and 07:00 PM. They must carry official ID, IIBF certification, and a bank Letter of Authority. You are not obligated to invite them inside your home; conversations can be conducted at your doorstep or building gate. If they behave aggressively or refuse to leave upon request, they commit criminal trespass under Section 329 BNS.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Never allow field agents to enter private residential rooms, and never feel intimidated into making on-the-spot cash handovers. Always speak calmly, keep your smartphone recording, and inspect all credentials.
                </p>
              </section>

              {/* Section 29 */}
              <section id="can-agents-visit-workplace" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 29 • Legal Clarification: Workplace Visits
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  29. Can Recovery Agents Visit Your Workplace?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  <strong>No. Workplace visits are strictly discouraged by the RBI.</strong> Field visits to an office premises are permissible only as a last resort if the borrower has absconded or is unreachable at their residential address. Visiting an office to create a public spectacle is an actionable civil and criminal wrong.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Most corporate office parks have strict visitor screening policies. You can instruct your facility management or reception team that personal financial matters are not to be entertained on corporate premises, effectively barring unauthorized entry.
                </p>
              </section>

              {/* Section 30 */}
              <section id="can-agents-threaten-arrest" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 30 • Legal Clarification: Arrest Threats
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  30. Can Recovery Agents Threaten You With Arrest?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  <strong>Never.</strong> Defaulting on an unsecured personal loan or credit card is purely a civil contractual matter. In India, there is no provision for criminal arrest for loan default arising from genuine financial distress. Agents who claim to have police connections or threaten arrest are committing extortion and impersonation offenses under Sections 204 and 308 BNS.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Do not allow agents to intimidate you with threats of arrest warrants or police raids. These are standard deceptive tactics designed to exploit borrowers' lack of legal familiarity.
                </p>
              </section>

              {/* Section 31 */}
              <section id="can-agents-seize-property" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 31 • Legal Clarification: Property Seizure
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  31. Can Recovery Agents Seize Your Property?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  <strong>No. In unsecured loans, there is no asset hypothecation.</strong> Unlike secured vehicle or housing loans governed by SARFAESI Act, personal loans and credit cards do not carry any charge over your assets. Recovery agents have zero authority to touch or seize personal belongings. Attempting to confiscate property constitutes criminal robbery or extortion.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Only a competent civil court executing a formal decree has the legal authority to attach assets, and that process requires lengthy judicial proceedings with full opportunities for legal defense.
                </p>
              </section>

              {/* Section 32 */}
              <section id="can-agents-force-immediate-payment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 32 • Legal Clarification: Instant Demands
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  32. Can Recovery Agents Force You to Make Immediate Payment?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  <strong>No. Coercive instantaneous payment demands are illegal.</strong> Agents often demand: <em>"Arrange ₹50,000 within 30 minutes via UPI or we won't leave your house."</em> This is unlawful confinement and coercion. Borrowers have the right to request a formal account statement and channel all payments through verified bank portals.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Never succumb to artificial deadlines. Take your time to review accounts, consult legal counsel, and negotiate structured repayments through formal banking channels.
                </p>
              </section>

              {/* Diagnostic Interactive Tool */}
              <section id="harassment-diagnostic-tool" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md">
                  Interactive Legal Diagnostic
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  ⚡ Emergency Recovery Harassment Legal Severity &amp; Action Protocol Checker
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Select the specific recovery harassment behavior you are currently facing to receive an instant legal evaluation, applicable penal statutes under Bharatiya Nyaya Sanhita (BNS), and exact counter-action steps:
                </p>

                <div className="bg-white border-2 border-red-300 rounded-2xl p-5 shadow-xs space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-black mb-1.5">1. Harassment Type</label>
                      <select
                        value={selectedViolation}
                        onChange={(e) => setSelectedViolation(e.target.value)}
                        className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 font-semibold text-black"
                      >
                        <option value="threatening_calls">Abusive / Threatening Calls</option>
                        <option value="family_contact">Calling Family / Relatives</option>
                        <option value="workplace_visit">Workplace Visit / Contacting HR</option>
                        <option value="fake_police_legal">Fake Police / Arrest Threats</option>
                        <option value="post_settlement">Harassment After Settlement</option>
                        <option value="social_shaming">Social Media / WhatsApp Shaming</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black mb-1.5">2. Lender Category</label>
                      <select
                        value={lenderType}
                        onChange={(e) => setLenderType(e.target.value)}
                        className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 font-semibold text-black"
                      >
                        <option value="commercial_bank">Major Commercial Bank</option>
                        <option value="nbfc">NBFC / Private Digital FinTech</option>
                        <option value="credit_card">Credit Card Division</option>
                        <option value="small_finance">Small Finance Bank</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black mb-1.5">3. Bank Complaint Status</label>
                      <select
                        value={complaintFiledStatus}
                        onChange={(e) => setComplaintFiledStatus(e.target.value)}
                        className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 font-semibold text-black"
                      >
                        <option value="no">Not yet complained to Bank PNO</option>
                        <option value="under_30">Complained (Under 30 days pending)</option>
                        <option value="over_30">Complained (Over 30 days / Rejected)</option>
                      </select>
                    </div>
                  </div>

                  {/* Instant Diagnostic Output Box */}
                  <div className="bg-slate-900 text-slate-100 rounded-xl p-4.5 space-y-3 border border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                        Severity: {violationAnalysis.severity}
                      </span>
                      <span className="text-[10px] bg-red-600/30 text-red-300 border border-red-500/40 px-2 py-0.5 rounded font-mono font-bold">
                        Statutory Violation
                      </span>
                    </div>

                    <div className="text-xs space-y-2">
                      <div>
                        <span className="text-slate-300 font-bold block">Regulatory Breach (RBI):</span>
                        <p className="text-slate-100 mt-0.5 leading-relaxed">{violationAnalysis.rbiBreach}</p>
                      </div>

                      <div>
                        <span className="text-slate-300 font-bold block">Applicable Penal Offense (BNS):</span>
                        <p className="text-amber-300 font-semibold mt-0.5">{violationAnalysis.penalOffense}</p>
                      </div>

                      <div className="bg-slate-800/90 p-3 rounded-lg border border-slate-700">
                        <span className="text-slate-300 text-[10px] font-bold uppercase block">Verbatim Response Script (Read This to Agent):</span>
                        <p className="text-emerald-300 font-mono text-xs mt-1 leading-relaxed">
                          "{violationAnalysis.script}"
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                          <span className="text-slate-400 text-[10px] font-semibold uppercase block">Recommended Legal Forum:</span>
                          <span className="text-blue-300 font-bold">{violationAnalysis.actionForum}</span>
                        </div>
                        <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                          <span className="text-slate-400 text-[10px] font-semibold uppercase block">Immediate Next Step:</span>
                          <span className="text-emerald-300 font-semibold">{violationAnalysis.nextStep}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                      <span className="text-slate-300 text-[11px]">Need urgent advocate representation to stop this immediately?</span>
                      <Link
                        href="/contact"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition-all shrink-0 text-center w-full sm:w-auto"
                      >
                        Connect With Banking Advocate →
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 33 */}
              <section id="how-to-stop-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 33 • Core Strategy &amp; Defense Sequences
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  33. How to Stop Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Halting collection harassment requires transitioning from a defensive, panicked victim mindset to an assertive, legally documented defense. The 3-phase strategic sequence to stop harassment comprises:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-xl space-y-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">1</div>
                    <h4 className="font-bold text-black">Document &amp; Record</h4>
                    <p className="text-black font-normal">Capture audio recordings of all inbound calls, maintain timestamped call logs, and save all abusive SMS/WhatsApp messages.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-xl space-y-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">2</div>
                    <h4 className="font-bold text-black">Serve Legal Notice</h4>
                    <p className="text-black font-normal">Issue a formal representation notice through CredSettle’s advocates citing RBI circulars and BNS provisions.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-xl space-y-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">3</div>
                    <h4 className="font-bold text-black">Escalate to RBI</h4>
                    <p className="text-black font-normal">File an official complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in) seeking compensation and agency deregistration.</p>
                  </div>
                </div>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Following this methodical sequence ensures you build an unshakeable evidentiary record while immediately cooling down the aggressive collection apparatus.
                </p>
              </section>

              {/* Section 34 */}
              <section id="how-to-handle-recovery-calls" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 34 • Call Management Protocols
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  34. How to Handle Recovery Agent Calls
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  When answering collection calls, follow this professional 4-step protocol:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-2 list-decimal pl-5 font-normal">
                  <li><strong>Remain Calm:</strong> Never match the caller's aggression, lose your temper, or use foul language. Calmness deprives the agent of psychological leverage.</li>
                  <li><strong>Demand Full Identification:</strong> Ask: <em>"Please state your full name, employee ID, your recovery agency's registered name, and your direct extension number."</em></li>
                  <li><strong>State Call Recording:</strong> Announce immediately: <em>"Please note this call is being recorded for legal and regulatory compliance."</em> Rogue agents frequently disconnect at this step.</li>
                  <li><strong>Direct Written Communication:</strong> Instruct the caller to send all proposals, settlement options, and demand letters to your registered email address.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  By maintaining professional composure, you avoid providing agents with verbal ammunition while establishing clear procedural boundaries.
                </p>
              </section>

              {/* Section 35 */}
              <section id="how-to-respond-threatening-calls" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 35 • Verbatim Response Scripts
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  35. How to Respond to Threatening Recovery Calls
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Use these battle-tested, verbatim legal scripts when facing intimidatory statements:
                </p>
                <div className="space-y-3 text-xs">
                  <div className="bg-slate-100 p-3.5 rounded-xl border border-slate-300 space-y-1">
                    <p className="font-bold text-red-700">When the Agent Says: <em>"We are sending the police to arrest you right now."</em></p>
                    <p className="font-medium text-black">
                      <strong>Your Response:</strong> <em>"Under Indian law, debt default is a civil dispute. Police have no jurisdiction over bank recovery. Threatening me with police arrest violates Section 204 and 351 of the Bharatiya Nyaya Sanhita. This call is recorded and will be submitted to the Police Commissioner and RBI Ombudsman."</em>
                    </p>
                  </div>
                  <div className="bg-slate-100 p-3.5 rounded-xl border border-slate-300 space-y-1">
                    <p className="font-bold text-red-700">When the Agent Says: <em>"We are calling your relatives and HR manager."</em></p>
                    <p className="font-medium text-black">
                      <strong>Your Response:</strong> <em>"Under the RBI Master Circular and Section 29 of the CICRA Act, disclosing my debt to third parties is illegal. Contacting my employer or relatives constitutes criminal defamation under Section 356 BNS. I will hold your agency and the bank personally liable for damages."</em>
                    </p>
                  </div>
                  <div className="bg-slate-100 p-3.5 rounded-xl border border-slate-300 space-y-1">
                    <p className="font-bold text-red-700">When the Agent Says: <em>"Pay immediately via UPI or face immediate home raids."</em></p>
                    <p className="font-medium text-black">
                      <strong>Your Response:</strong> <em>"Demanding instantaneous payment under threat of home raids violates RBI fair practice codes. All payments must be processed directly to the loan account through verified bank channels. Send a formal statement to my registered email."</em>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 36 */}
              <section id="how-to-handle-home-visits" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 36 • Doorstep Defense Protocols
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  36. How to Handle Recovery Agents Visiting Your Home
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  If collection agents arrive at your residence, adhere strictly to these procedural safeguards:
                </p>
                <div className="space-y-2 text-xs text-black font-normal">
                  <p>1. <strong>Do Not Allow Entry:</strong> You are not legally required to invite field agents inside your private living room. Conduct all interactions outside your door or at your building entrance gate.</p>
                  <p>2. <strong>Inspect Credentials Before Speaking:</strong> Ask them to display their agency ID card, IIBF certificate, and the bank’s Letter of Authority. Take clear photographs of these documents with your smartphone.</p>
                  <p>3. <strong>Record Video / Audio:</strong> Inform the agents that the interaction is being recorded on your phone or doorstep security camera.</p>
                  <p>4. <strong>Refuse Forced Cash Handover:</strong> Never hand over cash or make payments to personal UPI handles. State that all payments are processed through the bank’s official online portal.</p>
                  <p>5. <strong>Dial 112 if They Refuse to Leave:</strong> If agents shout, cause a scene, or refuse to vacate your premises after being asked, dial 112 immediately to report unlawful assembly and criminal trespass.</p>
                </div>
              </section>

              {/* Section 37 */}
              <section id="how-to-deal-workplace-visits" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 37 • Workplace Security &amp; HR Protection
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  37. How to Deal With Recovery Agents at Your Workplace
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  If an agent visits your office:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Instruct building security or reception not to allow them access past the visitor lobby.</li>
                  <li>Meet them briefly in a private visitor cubicle; do not allow them into open office work areas.</li>
                  <li>State clearly: <em>"This is my workplace. Visiting me here violates RBI Master Circular directives. Leave immediately, and route all communication to my registered email address."</em></li>
                  <li>Collect building security CCTV footage and file an urgent complaint to the bank's MD desk and local police for harassment at workplace.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Proactively briefing your office security team prevents embarrassing incidents in front of colleagues and maintains corporate decorum.
                </p>
              </section>

              {/* Section 38 */}
              <section id="how-to-communicate-with-bank" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 38 • Formal Bank Dialogue &amp; Grievance Desks
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  38. How to Communicate With the Bank During Recovery
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Never conduct negotiations solely with freelance collection agents. They possess zero authority to sanction debt waivers, freeze interest, or approve settlements. Always escalate communication directly to the lending institution’s official Grievance Redressal Officer (GRO) and Principal Nodal Officer (PNO) via written email correspondence.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Maintain a formal, professional tone in all communications. Clearly explain your genuine financial hardship, provide supporting documentation (medical bills, termination letters, bank statements), and express your sincere intention to resolve the debt through an honorable settlement once your financial situation stabilizes.
                </p>
              </section>

              {/* Section 39 */}
              <section id="request-communication-in-writing" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 39 • Written Demands &amp; Formal Email Templates
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  39. How to Request Communication in Writing
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Send a formal registered email to the lender’s customer care and nodal desk stating:
                </p>
                <div className="bg-gray-100 p-4 rounded-xl text-xs text-black font-mono space-y-2 border border-gray-300 font-medium">
                  <p><strong>Subject:</strong> Formal Request to Cease Telephonic Calls and Communicate Exclusively in Writing — Loan A/C [Number]</p>
                  <p>
                    "Dear Grievance Redressal Officer,<br /><br />
                    I am experiencing temporary financial hardship. Due to severe harassment, multiple calls outside permitted hours, and intimidatory language from outsourced recovery agents, I hereby request that all future communications, demands, and settlement proposals regarding my loan account be conveyed strictly in writing to my registered email address.<br /><br />
                    Any continued verbal intimidation, unauthorized visits, or contact with third-party references will be treated as deliberate violations of the RBI Master Circular and submitted to the RBI Ombudsman."
                  </p>
                </div>
              </section>

              {/* =================================================================== */}
              {/* MODULE 6: EVIDENCE GATHERING, LOGGING & LEGAL COMPLAINTS            */}
              {/* =================================================================== */}

              {/* Section 40 */}
              <section id="how-to-document-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 40 • Documentation Strategy &amp; Incident Logging
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  40. How to Document Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  In legal proceedings before the Banking Ombudsman or a Magistrate’s Court, contemporaneous written documentation is critical. Maintain a dedicated <strong>"Harassment Incident Log"</strong> recording:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Date and exact timestamp of every inbound call, SMS, or doorstep visit.</li>
                  <li>Originating phone numbers (including screenshots of caller ID).</li>
                  <li>Name stated by the caller and recovery agency represented.</li>
                  <li>Verbatim summary of abusive words, threats, or claims made.</li>
                  <li>Names of any third-party witnesses (family members, building security, colleagues).</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  A contemporaneous log maintained day-by-day carries substantial probative weight in judicial and regulatory evaluations.
                </p>
              </section>

              {/* Section 41 */}
              <section id="what-evidence-to-preserve" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 41 • Comprehensive Evidence Checklist
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  41. What Evidence Should You Preserve?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <span className="font-bold text-blue-700">Audio &amp; Call Records:</span>
                    <p className="text-black font-normal">Complete, unedited call recordings and itemized telecom operator call detail records (CDR).</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <span className="font-bold text-blue-700">Digital Screenshots:</span>
                    <p className="text-black font-normal">Full-screen WhatsApp chats, SMS threads, and email notifications showing sender timestamps and phone numbers.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <span className="font-bold text-blue-700">Video &amp; CCTV Footage:</span>
                    <p className="text-black font-normal">Doorbell camera, smartphone video, or building security footage of visiting field agents.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <span className="font-bold text-blue-700">Physical Notices:</span>
                    <p className="text-black font-normal">Envelopes, printed demand letters, and fabricated legal dockets handed over by field agents.</p>
                  </div>
                </div>
              </section>

              {/* Section 42 */}
              <section id="recording-calls-maintaining-evidence" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 42 • BSA 2023 Electronic Evidence Admissibility
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  42. Recording Recovery Calls and Maintaining Evidence
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, electronic records, including digital audio recordings and smartphone screenshots, are fully admissible as primary electronic evidence. To maintain legal validity:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Do not edit, trim, or alter audio recordings in any way.</li>
                  <li>Back up raw audio files to secure cloud storage immediately with metadata preserved.</li>
                  <li>Obtain an electronic certificate under Section 63 of the BSA (equivalent to old Section 65B of Indian Evidence Act) through legal counsel when filing court proceedings.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Unedited call recordings containing vulgar or threatening words represent decisive evidence that leaves banks with no defense before the Banking Ombudsman.
                </p>
              </section>

              {/* Section 43 */}
              <section id="how-to-complain-against-agent" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 43 • Multi-Tier Escalation Architecture
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  43. How to Complain Against a Recovery Agent
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  A structured complaint process follows a 4-tier escalation hierarchy:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between">
                    <span><strong className="text-black">Tier 1:</strong> Bank Grievance Redressal Officer (GRO)</span>
                    <span className="text-black font-semibold">Timeline: 7 Days</span>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between">
                    <span><strong className="text-black">Tier 2:</strong> Bank Principal Nodal Officer (PNO)</span>
                    <span className="text-black font-semibold">Timeline: 14 Days</span>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between">
                    <span><strong className="text-black">Tier 3:</strong> RBI Integrated Ombudsman (CMS Portal)</span>
                    <span className="text-black font-semibold">Timeline: 30 Days</span>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between">
                    <span><strong className="text-black">Tier 4:</strong> Police FIR / Consumer Disputes Commission</span>
                    <span className="text-black font-semibold">Emergency / Ongoing</span>
                  </div>
                </div>
              </section>

              {/* Section 44 */}
              <section id="how-to-complain-to-bank-nbfc" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 44 • Institutional Redressal Protocols
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  44. How to Complain to the Bank or NBFC
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Submit a formal written complaint via the bank’s official online grievance portal or registered email address. Attach your incident log and audio snippets. Cite paragraph 2.6 of the RBI Master Circular, which empowers the RBI to impose a geographical ban on the bank’s recovery agency for repeated harassment. Demand an immediate internal investigation and a written confirmation that the specific agency has been removed from your loan account.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Always ensure you receive a formal Service Request (SR) or Ticket Reference Number. Under RBI directives, banks must resolve internal grievances within 30 calendar days.
                </p>
              </section>

              {/* Section 45 */}
              <section id="how-to-file-rbi-complaint" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 45 • RBI CMS Online Procedure
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  45. How to File a Complaint With RBI
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  If the lending institution fails to resolve the harassment within 30 days or rejects your complaint, you are legally entitled to lodge a complaint with the Reserve Bank of India through the central <strong>Complaint Management System (CMS)</strong> at <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">cms.rbi.org.in</a>.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  The portal allows you to upload supporting call recordings, SMS screenshots, and bank correspondence. A unique reference tracking ID is issued, and the lender is mandated to submit a formal response directly to the Ombudsman.
                </p>
              </section>

              {/* Section 46 */}
              <section id="rbi-ombudsman-complaint-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 46 • Ombudsman Compensation Powers
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  46. RBI Ombudsman Complaint Against Recovery Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Under the <strong>Reserve Bank - Integrated Ombudsman Scheme (RB-IOS, 2021)</strong>, the Ombudsman holds extensive adjudicatory powers:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li><strong>Harassment Compensation:</strong> Power to award up to <strong>₹1,00,000</strong> directly to the borrower for mental distress, loss of time, and harassment.</li>
                  <li><strong>Financial Loss Compensation:</strong> Power to award up to <strong>₹20,00,000</strong> for actual financial damages caused by the bank’s misconduct.</li>
                  <li><strong>Agency Blacklisting:</strong> Direction to the bank to terminate contracts with offending recovery agencies.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Ombudsman awards are binding on banks unless appealed within strict statutory deadlines, making this one of the most effective non-judicial remedies available to borrowers.
                </p>
              </section>

              {/* Section 47 */}
              <section id="when-to-approach-police" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 47 • Criminal Thresholds &amp; Police Action
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  47. When Should You Approach the Police?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  While police cannot intervene in civil loan recovery, you must approach the local police station or dial <strong>112</strong> when collection agents commit cognizable criminal acts, such as:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Physical assault, unlawful physical restraint, or doorstep violence.</li>
                  <li>Verbal abuse or threats directed at female family members (Section 79 BNS).</li>
                  <li>Criminal extortion, demanding cash under threat of injury (Section 308 BNS).</li>
                  <li>Impersonation of police officers or judicial magistrates (Section 204 BNS).</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  When filing a police complaint, clearly mention that you are not seeking intervention in debt repayment, but are reporting specific penal offenses committed by individual agents.
                </p>
              </section>

              {/* Section 48 */}
              <section id="legal-action-against-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 48 • Judicial Remedies &amp; Injunctions
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  48. Legal Action Against Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  If harassment is continuous and severe, your legal counsel can initiate formal judicial proceedings:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">Civil Injunction Suit:</strong> Petitioning a Civil Court for a permanent injunction restraining the lender and its agents from visiting your home or workplace.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">Section 175 BNSS Application:</strong> Filing a formal application before the Judicial Magistrate if local police refuse to register an FIR against abusive agents.
                  </div>
                </div>
                <p className="text-sm text-black leading-relaxed mt-2 font-normal">
                  Judicial intervention sends an unmistakable signal to the lender's legal department, usually prompting an immediate withdrawal of third-party recovery agencies.
                </p>
              </section>

              {/* Section 49 */}
              <section id="consumer-protection-remedies" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 49 • Consumer Protection Act 2019 Remedies
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  49. Consumer Protection Remedies Against Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Under the <strong>Consumer Protection Act, 2019</strong>, deploying abusive recovery agents constitutes both an "unfair trade practice" and a "deficiency of service". Borrowers can file a consumer complaint before the District Consumer Disputes Redressal Commission seeking substantial financial compensation and litigation costs from the bank.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Consumer commissions across India have repeatedly awarded significant damages against banks that deploy uncertified recovery agencies to terrorize consumers.
                </p>
              </section>

              {/* Section 50 */}
              <section id="legal-notice-against-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 50 • Advocate Cease-and-Desist Notice
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  50. Legal Notice Against Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  A formal Advocate Legal Notice issued to the bank’s Board of Directors and Principal Nodal Officer serves as a powerful deterrent. Prepared by CredSettle’s banking litigation counsel, this notice:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Chronicles the specific dates, times, and phone numbers involved in the harassment.</li>
                  <li>Quotes relevant Supreme Court precedents (*Shanti Devi Sharma*) and BNS criminal provisions.</li>
                  <li>Directs the bank to immediately recall its recovery agency under threat of criminal prosecution and RBI Ombudsman litigation.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal">
                  In over 90% of cases, receipt of a formal advocate notice causes the bank’s compliance desk to immediately de-assign the aggressive agency.
                </p>
              </section>

              {/* Section 51 */}
              <section id="what-to-do-legal-notice-bank" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 51 • Responding to Bank Legal Notices
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  51. What to Do If You Receive a Legal Notice From the Bank
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Receiving a formal legal notice (under Section 138 NI Act, Section 25 PSS Act, or a loan recall notice) requires professional legal handling:
                </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li><strong>Verify Authenticity:</strong> Check whether the notice is issued by an enrolled advocate or is a simulated threat from a collection agency.</li>
                  <li><strong>Do Not Panic:</strong> A legal notice is not an arrest warrant; it is a statutory communication providing time to reply.</li>
                  <li><strong>File a Timely Legal Reply:</strong> Have an experienced banking advocate draft a formal reply within 15 days, explaining financial hardship, contesting inflated interest charges, and proposing amicable structured debt settlement.</li>
                </ul>
              </section>

              {/* =================================================================== */}
              {/* MODULE 7: LOAN-SPECIFIC HARASSMENT & COMPLEX SCENARIOS              */}
              {/* =================================================================== */}

              {/* Section 52 */}
              <section id="harassment-credit-card-cases" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 52 • Credit Card Collections
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  52. Recovery Agent Harassment in Credit Card Cases
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Credit card collections are notoriously aggressive due to high annualized interest rates (40%–52%) and compounding finance charges. Collection tele-callers frequently fabricate urgent legal consequences or claim that non-payment will result in immediate passport impoundment.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Under the <em>RBI Master Direction on Credit Card and Debit Card Issuance (2022)</em>, card issuers must strictly adhere to the Fair Practices Code and are directly accountable for recovery agent misconduct. Unsecured card dues cannot lead to travel bans or criminal arrest.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Cardholders who default due to job loss or illness are entitled to request debt restructuring or a negotiated one-time settlement rather than enduring coercive collection calls.
                </p>
              </section>

              {/* Section 53 */}
              <section id="harassment-personal-loan-cases" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 53 • Personal Loan Collections
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  53. Recovery Agent Harassment in Personal Loan Cases
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Unsecured personal loans represent pure contractual borrowings backed by no collateral. When defaults occur, recovery agents frequently exploit the borrower’s fear of social embarrassment. Remind visiting agents that personal loans carry no lien over household goods and that civil recovery suits through courts are the lender’s only lawful recourse.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Because there is no hypothecated security to sell, lenders often rely on external recovery agencies to apply psychological pressure. Exercising your legal rights breaks this cycle and forces the bank to discuss structured debt settlement.
                </p>
              </section>

              {/* Section 54 */}
              <section id="harassment-business-loan-cases" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 54 • Business &amp; MSME Loans
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  54. Recovery Agent Harassment in Business Loan Cases
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  For MSME and small business loans, agents frequently attempt to disrupt commercial operations by confronting customers, suppliers, or staff. Under MSMED Act guidelines and RBI restructuring frameworks, small businesses experiencing distress are entitled to special debt resolution mechanisms rather than coercive operational disruptions.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Business owners facing recovery harassment should immediately notify their enterprise association and serve a legal representation notice to safeguard business goodwill.
                </p>
              </section>

              {/* Section 55 */}
              <section id="harassment-after-loan-settlement" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 55 • Post-Settlement Coercion
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  55. Recovery Agent Harassment After Loan Settlement
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  A common institutional failure occurs when a bank’s collection department fails to update its system following a formal <strong>One-Time Settlement (OTS)</strong>. Borrowers who have paid the agreed settlement amount find themselves harassed months later by a newly empaneled collection agency demanding the remaining balance.
                </p>
                <div className="bg-red-50 border border-red-300 rounded-xl p-4 text-xs text-red-950 space-y-1.5">
                  <p className="font-bold text-red-900">Legal Defense Against Post-Settlement Harassment:</p>
                  <p className="text-black font-normal">
                    A formal written OTS letter executed by an authorized bank officer constitutes a binding, legally enforceable novation of contract. Demanding further payment constitutes fraud and extortion under Sections 316 and 318 BNS. Provide your settlement letter and payment proof to CredSettle to seek emergency intervention and immediate issuance of your No Dues Certificate (NDC).
                  </p>
                </div>
              </section>

              {/* Section 56 */}
              <section id="harassment-after-payment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 56 • Misallocated Credits &amp; Accounting Errors
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  56. Recovery Agent Harassment After Payment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  If EMI payments are made but misallocated due to technical banking glitches, collection agents may continue aggressive follow-up. Furnish your bank transaction UTR reference and account debit statement to the Bank Branch Manager and demand immediate credit rectification.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Harassing a customer who has already paid is an egregious deficiency of service. You can claim damages before the Consumer Forum for mental distress caused by accounting negligence.
                </p>
              </section>

              {/* Section 57 */}
              <section id="harassment-someone-elses-loan" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 57 • Mistaken Identity &amp; Wrong Number Calls
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  57. Recovery Agent Harassment for Someone Else's Loan
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Citizens frequently receive calls for loans taken by strangers, previous SIM card owners, or distant acquaintances. If you are not the borrower, state clearly: <em>"You have dialed an incorrect number. I am not the borrower and have no connection to this loan. Remove my number immediately."</em> If calls persist, file a complaint on the National Cyber Crime Portal and with the RBI Ombudsman for unauthorized harassment of a third party.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Telecom service providers frequently recycle inactive numbers. Collection agencies that fail to verify debtor identity before launching automated calling campaigns violate TRAI regulations.
                </p>
              </section>

              {/* Section 58 */}
              <section id="agent-calling-guarantor-reference" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 58 • Guarantor vs Reference Legal Distinction
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  58. Recovery Agent Calling a Guarantor or Reference
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  It is vital to distinguish between a legal guarantor and a reference:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <h4 className="font-bold text-black">Reference: Zero Liability</h4>
                    <p className="text-black font-normal">A person named on the application form for identity verification. They signed no guarantee and have zero obligation to pay. Calling them for debt recovery is illegal.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <h4 className="font-bold text-black">Guarantor: Joint Liability</h4>
                    <p className="text-black font-normal">A person who executed a formal Deed of Guarantee. While co-liable under contract law, agents must treat guarantors with the exact same dignity and fair practice codes as the primary borrower.</p>
                  </div>
                </div>
                <p className="text-sm text-black leading-relaxed mt-2 font-normal">
                  Guarantors cannot be subjected to abusive language or unannounced odd-hour visits. All RBI fair practice protections apply equally to guarantors and borrowers.
                </p>
              </section>

              {/* =================================================================== */}
              {/* MODULE 8: SCENARIOS, ACTIONABLE RULES, FAQS & LEGAL SHIELD          */}
              {/* =================================================================== */}

              {/* Section 59 */}
              <section id="common-harassment-scenarios-solutions" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 59 • Real-World Case Scenarios
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  59. Common Recovery Agent Harassment Scenarios and Solutions
                </h2>
                <div className="space-y-3 text-xs">
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-black">Scenario 1: Agent creates a scene at your apartment gate</h4>
                    <p className="text-black font-normal"><strong>Action:</strong> Instruct apartment security to bar entry. Film the agent from your balcony or gate. Dial 112 to report public nuisance and criminal trespass. Forward the video to the Bank PNO.</p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-black">Scenario 2: Tele-caller sends fake arrest warrant on WhatsApp</h4>
                    <p className="text-black font-normal"><strong>Action:</strong> Take full-screen screenshots showing the phone number. Do not delete the chat. File a cybercrime complaint on cybercrime.gov.in under Section 336 BNS (forgery) and serve an advocate notice.</p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h4 className="font-bold text-black">Scenario 3: Agent calls your workplace reception desk</h4>
                    <p className="text-black font-normal"><strong>Action:</strong> Request a written statement from your receptionist detailing the call timestamp and caller's statements. Submit this as primary evidence of criminal defamation to the Bank Ombudsman.</p>
                  </div>
                </div>
              </section>

              {/* Section 60 */}
              <section id="dos-and-donts-recovery-agents" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 60 • Protocol Checklist
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  60. Do's and Don'ts When Dealing With Recovery Agents
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-emerald-950 text-sm">✓ DO'S</h4>
                    <ul className="text-black space-y-1 list-disc pl-4 font-normal">
                      <li>Record all phone calls automatically on your device.</li>
                      <li>Always ask for full agent credentials and IIBF DRA certificates.</li>
                      <li>Insist on communicating through registered email.</li>
                      <li>Preserve all threatening text messages and WhatsApp audio notes.</li>
                      <li>Appoint an experienced banking advocate to represent you.</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-300 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-red-950 text-sm">✗ DON'TS</h4>
                    <ul className="text-black space-y-1 list-disc pl-4 font-normal">
                      <li>Do not lose your temper or use abusive language back.</li>
                      <li>Do not allow field agents inside your private home.</li>
                      <li>Do not pay cash or send money to personal UPI handles.</li>
                      <li>Do not panic when agents make fake police arrest threats.</li>
                      <li>Do not borrow from informal loan sharks to pay recovery agents.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 61 */}
              <section id="faqs-recovery-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 61 • Frequently Asked Questions
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  61. Frequently Asked Questions About Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Clear, authoritative answers to the most urgent questions borrowers ask regarding collection harassment:
                </p>
                <div className="space-y-3">
                  {harassmentFaqs.map((faq, index) => {
                    const isExpanded = expandedFaq === index;
                    return (
                      <div
                        key={index}
                        className="border border-gray-300 rounded-xl bg-white overflow-hidden shadow-2xs transition-all"
                      >
                        <button
                          onClick={() => setExpandedFaq(isExpanded ? null : index)}
                          className="w-full text-left p-3.5 sm:p-4 font-bold text-black text-xs sm:text-sm flex justify-between items-center gap-3 hover:bg-gray-50 transition-colors"
                        >
                          <span>{faq.question}</span>
                          <span className="text-blue-700 text-base shrink-0 font-bold">{isExpanded ? '−' : '+'}</span>
                        </button>
                        {isExpanded && (
                          <div className="px-3.5 pb-4 pt-1 sm:px-4 text-xs sm:text-sm text-black border-t border-gray-200 bg-gray-50/50 leading-relaxed font-normal">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Section 62 */}
              <section id="how-legal-support-can-help" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 62 • Advocate Legal Shield
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  62. How Professional Legal Support Can Help Stop Recovery Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  When an individual borrower stands alone against an aggressive collection apparatus, agents exploit their lack of legal knowledge. CredSettle’s seasoned banking litigation advocates act as a protective legal shield:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">1. Formal Legal Representation Notice:</strong> We issue a formal notice under the Advocates Act 1961, directing the bank to cease all direct contact and route communications through our legal desk.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">2. Regulatory Grievance Escalation:</strong> We lodge documented complaints directly with Principal Nodal Officers and the RBI Integrated Ombudsman.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">3. Criminal Defense &amp; Injunctions:</strong> If agents cross criminal lines, our litigation team files police complaints and court injunctions.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">4. Honorable Debt Settlement:</strong> We transition abusive recovery disputes into structured, formal debt settlement agreements (One-Time Settlement), reducing your principal burden legitimately.
                  </div>
                </div>
              </section>

              {/* Section 63 */}
              <section id="step-by-step-guide-stop-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 63 • Step-by-Step Action Roadmap
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  63. Step-by-Step Guide to Stop Recovery Agent Harassment
                </h2>
                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3 p-3 bg-white border border-gray-300 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-black">Activate Call Recording Immediately</h4>
                      <p className="text-black font-normal">Ensure every incoming call from unknown numbers is recorded and saved with timestamps.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white border border-gray-300 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-black">Send Cease-and-Desist Email to Bank PNO</h4>
                      <p className="text-black font-normal">Submit a formal written objection to the Principal Nodal Officer citing specific call violations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white border border-gray-300 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-black">Retain CredSettle Advocates</h4>
                      <p className="text-black font-normal">Authorize our legal desk to issue formal notices and handle all recovery communications.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white border border-gray-300 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-black">File RBI Ombudsman Complaint</h4>
                      <p className="text-black font-normal">Escalate unresolved harassment to the central Banking Ombudsman on cms.rbi.org.in.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white border border-gray-300 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">5</div>
                    <div>
                      <h4 className="font-bold text-black">Negotiate Structured Settlement</h4>
                      <p className="text-black font-normal">Resolve underlying debt on honorable, affordable terms with full legal No Dues certification.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 64 */}
              <section id="conclusion-know-rights-take-action" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 64 • Final Borrower Empowerment Takeaway
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  64. Conclusion – Know Your Rights and Take Action Against Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal">
                  Financial distress is a temporary economic phase, not a crime. No bank, NBFC, or recovery agency possesses the legal authority to rob you of your constitutional dignity, defame your character, or terrorize your family. The law in India firmly protects borrowers against predatory collections.
                </p>
                <p className="text-sm text-black leading-relaxed font-normal">
                  By understanding your rights under the RBI Master Circular, preserving robust audio and visual evidence, and deploying professional advocate representation, you can immediately halt unlawful harassment and regain peace of mind.
                </p>

                {/* Call to Action Box */}
                <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 rounded-2xl shadow-md space-y-3 mt-4">
                  <h3 className="text-base sm:text-lg font-bold">
                    Stop Recovery Agent Harassment Today With CredSettle
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed font-normal">
                    You do not have to endure abusive calls, doorstep intimidation, or threats of arrest. Let our high-court banking advocates safeguard your dignity, handle your lenders, and guide you toward complete financial freedom.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-block bg-white text-blue-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md active:scale-98"
                    >
                      Get Immediate Legal Protection →
                    </Link>
                  </div>
                </div>
              </section>

            </article>

          </main>

          {/* ===================================================================== */}
          {/* RIGHT COLUMN: DESKTOP STICKY SIDEBAR (15% Width)                      */}
          {/* ===================================================================== */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-20 space-y-3">

              {/* Quick Advocate Consultation Card */}
              <div className="bg-white border-2 border-red-300 rounded-2xl p-3.5 shadow-xs space-y-2 text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <h3 className="font-bold text-black text-xs">Active Harassment?</h3>
                </div>
                <p className="text-[10px] text-black leading-tight font-normal">
                  Advocates issue cease-and-desist notices to stop collection calls within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-2 bg-red-600 hover:bg-red-700 text-white text-center text-[10px] font-bold rounded-lg transition-all shadow-xs"
                >
                  Get Case Review
                </Link>
                <div className="text-[9px] text-black text-center font-medium">
                  100% Confidential • Advocates
                </div>
              </div>

              {/* Quick Legal Facts Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-3.5 shadow-xs space-y-2 border border-slate-800">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                  Key Safeguards
                </h4>
                <ul className="text-[10px] space-y-1.5 text-slate-200 font-medium">
                  <li className="flex items-start gap-1">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Debt default is strictly civil, never criminal.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Calls only 08:00 AM to 07:00 PM.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Zero contact with relatives or employers.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>No property seizure for personal loans.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Escalation Contacts */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 text-[10px] text-black space-y-1.5">
                <h4 className="font-bold text-[10px] text-blue-900 uppercase tracking-wider">
                  Redressal Portals
                </h4>
                <div className="space-y-1">
                  <div>
                    <span className="text-black block text-[9px] font-semibold">RBI Ombudsman:</span>
                    <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800 hover:underline">
                      cms.rbi.org.in
                    </a>
                  </div>
                  <div>
                    <span className="text-black block text-[9px] font-semibold">Cyber Crime Portal:</span>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-800 hover:underline">
                      cybercrime.gov.in
                    </a>
                  </div>
                  <div>
                    <span className="text-black block text-[9px] font-semibold">Police Helpline:</span>
                    <span className="font-bold text-red-700">Dial 112 (24x7)</span>
                  </div>
                </div>
              </div>
          </aside>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE TOC SLIDE-OVER DRAWER                                              */}
      {/* ========================================================================= */}
      {isMobileTocOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-sm bg-white h-full overflow-y-auto flex flex-col p-4 shadow-2xl text-black">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <h3 className="font-bold text-black text-sm">Table of Contents (64 Chapters)</h3>
              </div>
              <button
                onClick={() => setIsMobileTocOpen(false)}
                className="text-gray-700 hover:text-black text-lg p-1.5 rounded-lg hover:bg-gray-100"
                aria-label="Close Table of Contents"
              >
                ✕
              </button>
            </div>

            {/* Drawer Search */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search all 64 sections..."
                value={tocSearch}
                onChange={(e) => setTocSearch(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-blue-500 text-black placeholder:text-gray-500"
              />
            </div>

            {/* Drawer Module Filter */}
            <div className="flex flex-wrap gap-1 mb-3 pb-2 border-b border-gray-100">
              <button
                onClick={() => setSelectedModule(null)}
                className={`text-[10px] px-2 py-0.5 rounded-md font-medium transition-all ${selectedModule === null ? 'bg-blue-600 text-white font-bold' : 'bg-gray-100 text-black'}`}
              >
                All (8)
              </button>
              {navModules.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedModule(selectedModule === idx ? null : idx)}
                  className={`text-[10px] px-2 py-0.5 rounded-md font-medium transition-all ${selectedModule === idx ? 'bg-blue-600 text-white font-bold' : 'bg-gray-100 text-black'}`}
                >
                  M{idx + 1}
                </button>
              ))}
            </div>

            {/* Links List */}
            <div className="space-y-4 flex-1 overflow-y-auto pr-1">
              {navModules.map((m, mIdx) => {
                if (selectedModule !== null && selectedModule !== mIdx) return null;
                const moduleLinks = m.links.filter(l => !tocSearch.trim() || l.label.toLowerCase().includes(tocSearch.toLowerCase().trim()));
                if (moduleLinks.length === 0) return null;

                return (
                  <div key={mIdx} className="space-y-1">
                    <div className="text-[10px] font-bold text-black uppercase tracking-wider px-2 py-1 bg-gray-50 rounded">
                      {m.moduleTitle}
                    </div>
                    <nav className="space-y-0.5 pl-1">
                      {moduleLinks.map((link) => {
                        const isActive = activeId === link.id;
                        return (
                          <button
                            key={link.id}
                            onClick={() => handleLinkClick(link.id)}
                            className={`w-full text-left px-2 py-2 rounded-md text-xs leading-tight transition-all flex items-center justify-between ${
                              isActive
                                ? 'bg-blue-600 text-white font-bold shadow-2xs'
                                : 'text-black hover:bg-gray-100 font-medium'
                            }`}
                          >
                            <span className="truncate">{link.label}</span>
                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>}
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                );
              })}
            </div>

            {/* Mobile Drawer Bottom Action */}
            <div className="pt-3 border-t border-gray-200 mt-2">
              <Link
                href="/contact"
                className="block w-full py-2.5 bg-red-600 text-white text-center text-xs font-bold rounded-xl shadow-xs"
              >
                Stop Agent Harassment Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Pill on Mobile (Bottom Right) */}
      {showFloatingNav && (
        <div className="lg:hidden fixed bottom-4 right-4 z-40 flex items-center gap-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-slate-900 text-white shadow-lg flex items-center justify-center text-sm border border-slate-700 hover:bg-slate-800 transition-all active:scale-95"
            aria-label="Scroll to top"
          >
            ↑
          </button>
          <button
            onClick={() => setIsMobileTocOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-full shadow-lg flex items-center gap-1.5 border border-blue-500 transition-all active:scale-95"
          >
            <span>📑</span>
            <span>Index</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="relative z-20 mt-12 sm:mt-16 bg-white">
        <Footer hideFunnel />
      </div>
    </div>
  );
}
