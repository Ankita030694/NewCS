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
      answer: "No. The Reserve Bank of India Master Circular on claims agents strictly forbids persistent auto-dialing. Verbal abuse. Obscene language. And intimidatory threats. Under Section 351 and 352 of the Bharatiya Nyaya Sanhita (BNS). Using vulgar language or threatening bodily injury or reputation is a cognizable criminal offense."
    },
    {
      question: "Can recovery agents call my relatives, parents, or friends if I default on an unsecured loan?",
      answer: "Under Section 29 of the Credit Information Companies (Regulation) Act and RBI outside work rules. Debt privacy is legally protected. Lenders and their claims firms are strictly prohibited from contacting third-party family members. Friends. Or neighbors who are not formal co-clients or legal guarantors."
    },
    {
      question: "Can a recovery agent visit my office or inform my HR manager about my unpaid loan?",
      answer: "No. RBI directives explicitly bar agents from visiting an employer's office or disclosing debt debts to colleagues or handling. Unless the client has on purpose absconded from their registered residence. Intentionally causing public embarrassment at a place of employment constitutes actionable criminal defamation under Section 356 BNS."
    },
    {
      question: "What should I do if a collection agent threatens to send police or have me arrested?",
      answer: "Loan default is purely a civil breach of contract under Indian jurisprudence. Not a criminal crime. Police officers have no legal formal or police area to arrest people for no-pledge credit card or private loans defaults. claims agents threatening police action commit the offense of impersonation and extortion under Sections 204 and 308 BNS."
    },
    {
      question: "What documents must a recovery agent produce before talking to me at my home?",
      answer: "Field claims agents must furnish three strict credentials: (1) A photo identity card issued by the authorized firm. (2) A certified Letter of formal issued by the bank or NBFC explicitly naming your loan account. And (3) Proof of Debt claims Agent (DRA) certification from the Indian Institute of Banking & Finance (IIBF). Without these. You are entitled to deny entry and request police assistance."
    },
    {
      question: "Are recovery calls allowed on Sundays, national holidays, or late at night?",
      answer: "Under RBI daily work directives. claims calls and field visits are strictly restricted between 08:00 AM and 07:00 PM (IST). Calls before 8 AM or after 7 PM. As well as unannounced visits during times of private bereavement or family crisis. Violate central bank regulations."
    },
    {
      question: "Can recovery agents legally seize personal property or household items for personal loans?",
      answer: "No. private loans and credit cards are no-pledge credit facilities where no pledge or asset is hypothecated. claims agents have zero legal power to seize furniture. Vehicles, jewelry. residential appliances. Confiscating items without a formal judicial execution order from a competent civil court constitutes criminal robbery or extortion under the BNS."
    },
    {
      question: "How does filing a complaint with the RBI Banking Ombudsman help stop harassment?",
      answer: "If the bank's internal Grievance Cell fails to resolve abuse within 30 days. Filing a reports on the RBI Integrated Ombudsman portal (cms.rbi.org.in) triggers formal RBI scrutiny. The Ombudsman can award payout up to ₹1,00,000 for mental abuse and loss of dignity. And can penalize the lending institution straight."
    },
    {
      question: "Can CredSettle stop recovery agent calls legally?",
      answer: "Yes. CredSettle's banking lawsuits lawyers serve a formal Legal legal help Notice to the bank under the lawyers Act 1961. This notice informs the lender that legal counsel has been retained. Requires all contact to be directed in writing to our legal desk. And warns of criminal and RBI action if unlawful direct abuse continues."
    },
    {
      question: "What should I do if recovery agents continue calling after I have fully paid or settled the loan?",
      answer: "This is a serious deficiency of service and abuse under the clients safety Act 2019. Forward your stamped closure note. Payment receipt. And No Dues letter (NDC) to the bank's main loan Nodal Officer. If calls persist. CredSettle can issue an urgent legal notice demanding damages for wrongful claims."
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
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight leading-snug break-words">
            How to Stop Recovery Agent Harassment
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200"> Complete Legal safety &amp. client Defense Guide </p>
          <p className="text-xs sm:text-sm text-slate-100 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1"> Are claims agents threatening your family. Visiting your workplace. Or calling at odd hours? Learn how to legally halt coercive tactics. Assert your constitutional rights under RBI rules and Bharatiya Nyaya Sanhita. Preserve unassailable proof. And secure expert legal safety. </p>
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
                <div className="font-bold text-black text-xs">Table of Contents</div>
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
                  );
                })}
              </div>
            </div>

            {/* Quick Legal Support Action */}
            <div className="bg-gradient-to-br from-red-600 to-rose-700 p-2.5 sm:p-3 rounded-xl text-white shadow-sm text-center flex-shrink-0">
              <div className="flex items-center justify-center gap-1.5 mb-1 text-red-100 text-xs">
                <span>🛡️</span>
                <div className="font-bold text-xs text-white">Stop Harassment</div>
              </div>
              <p className="text-[10px] text-red-100 mb-2 leading-snug"> High Court lawyers legal help within 24 hours. </p>
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
                  <p className="text-xs sm:text-sm text-black leading-relaxed font-normal"> Under Indian law. Non-payment of an no-pledge private loans or credit card bill due to genuine debt stress is <strong>strictly a civil claims</strong> governed by the Indian Contract Act. 1872. <strong>Debt default is not a crime under the Bharatiya Nyaya Sanhita (BNS)</strong>. claims agents have zero legal power to intimidate you. Contact third-party relatives. Defame you before colleagues. Or summon the police. </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> When a client experiences sudden money shocks. Such as job termination. Trade bankruptcy. health crises. family crises. repaying no-pledge private loans and credit card dues can become temporarily unfeasible. While lending institutions possess a legitimate contractual right to recover overdue funds through due process of law. claims agents often abandon legal channels in favor of psychological warfare. Relentless telephonic abuse. And aggressive doorstep threats. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> In India. Debt claims is governed by strict RBI directives issued by the Reserve Bank of India (RBI) and binding penal statutes. Every client is entitled to basic human dignity. Privacy. And constitutional safety under Article 21 of the Constitution of India. This full master guide outlines the exact legal boundaries governing claims firms. Details what constitutes unlawful abuse. And equips clients with battle-tested legal mechanisms to promptly halt abusive tactics. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> money troubles can affect any honest citizen. Understanding that debt is a civil contractual debt rather than a moral crime or a police offense is the first step toward reclaiming your peace of mind and asserting your legal rights. </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl text-xs text-blue-950 space-y-1">
                  <p className="font-bold text-blue-900">Key RBI Principle:</p>
                  <p className="font-medium text-black"> The Reserve Bank of India has repeatedly affirmed that banks and Non-Banking money Companies (NBFCs) are vicariously liable for all acts of abuse. Abuse. Or threats committed by their outside claims agents. </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> claims agent abuse is defined as any coercive. Intimidatory. Humiliating. Deceptive. Or abusive action deployed by a lender’s agent to force debt payment through extra-judicial pressure rather than civil adjudication. It transcends expert reminder protocols and infringes upon a citizen’s fundamental peace of mind. Privacy. And expert reputation. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> abuse is not merely loud speech. Under Indian jurisprudence. It encompasses behavioral patterns calibrated to induce psychological panic. Dread of social ostracization. Or fear of bodily harm. Whether it occurs through digital messaging. Relentless phone calls, doorstep confrontation. Or contact with innocent third parties. Such conduct is strictly prohibited by law. </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h3 className="font-bold text-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Lawful Debt Collection
                    </h3>
                    <ul className="text-black space-y-1 list-disc pl-4 font-normal">
                      <li>Calling strictly between 08:00 AM and 07:00 PM</li>
                      <li>Clearly identifying self. Firm. And main loan bank</li>
                      <li>Carrying valid IIBF DRA certification and bank Letter of formal</li>
                      <li>Discussing loan details only with the primary client</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-red-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h3 className="font-bold text-red-950 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                      Unlawful Harassment
                    </h3>
                    <ul className="text-black space-y-1 list-disc pl-4 font-normal">
                      <li>Calling repeatedly dozens of times daily or late at night</li>
                      <li>Using abusive, profane. derogatory language</li>
                      <li>Contacting parents, spouses, siblings. colleagues</li>
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
                <p className="text-sm text-black leading-relaxed font-normal"> A claims agent (also designated as a Debt claims Agent or claims tele-caller) is an person or outside third-party firm contracted by a banks. Co-operative bank, housing finance company. Or NBFC to follow up with defaulting clients and recover overdue loan installments. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Under RBI regulations formulated pursuant to the Indian Banks’ Association (IBA) model code. Every claims agent operating in the field must be professionally trained through a strict 100-hour (or 50-hour for graduates) curriculum and certified by the <strong>Indian Institute of Banking &amp. Finance (IIBF)</strong>. The syllabus mandates full instruction in client privacy. Expert etiquette. constitutional safeguards. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Despite these clear rules. Many claims firms deploy untrained freelance tele-callers on commission-only contracts. Because their income is tied straight to the amount extracted from clients. These people often disregard ethical and legal standards. This resulting in egregious abuse. </p>
              </section>

              {/* Section 4 */}
              <section id="why-agents-contact-borrowers" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 4 • Delinquency Triggers &amp; DPD Aging
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  4. Why Do Recovery Agents Contact Borrowers?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> banks maintain strict internal provisioning requirements under RBI Prudential Norms. Lenders must set aside cash reserves for delinquent loans. Straight impacting their profitability. To cut provisioning losses. Accounts are categorized by Days Past Due (DPD) and subjected to escalating claims protocols: </p>
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
                <p className="text-xs text-black leading-relaxed mt-2 font-normal"> Understanding this bank cycle allows clients to anticipate the timing and nature of claims efforts. This lets them to assert their legal rights proactively. </p>
              </section>

              {/* Section 5 */}
              <section id="when-recovery-becomes-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 5 • The Legal Threshold &amp; Statutory Red Lines
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  5. When Does Recovery Become Harassment?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> The boundary between legitimate debt follow-up and unlawful abuse is clearly codified in the <em>RBI Master Circular on claims agents in Banks (DBOD.No.Leg.BC.24/09.07.005/2008-09)</em> and reiterated in the Master Direction on money Services outside work (2023). </p>
                <p className="text-sm text-black leading-relaxed font-normal"> A claims effort crosses into criminal and RBI abuse the moment any of the following 5 legal red lines are breached: </p>
                <ul className="text-xs sm:text-sm text-black space-y-2 list-disc pl-5 font-normal">
                  <li><strong>Temporal Boundary Breach:</strong> Calling or knocking on doors prior to 08:00 AM or subsequent to 07:00 PM.</li>
                  <li><strong>Privacy &amp. Third-Party Breach:</strong> Disclosing loan defaults to employers. Neighbors, friends. non-guarantor family.</li>
                  <li><strong>Verbal threats &amp. Insult:</strong> Using profane, casteist, sexually derogatory. Or threatening words (Sections 351. 352 BNS).</li>
                  <li><strong>Impersonation &amp. Deception:</strong> Posing as police officers. CBI agents. lawyers. executing simulated court summons.</li>
                  <li><strong>Physical Trespass &amp. Coercion:</strong> Refusing to leave private premises. Obstructing movement. Or attempting forced vehicle/property seizure.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> Once an agent crosses any of these red lines. The interaction ceases to be a civil discussion and becomes an actionable legal violation. </p>
              </section>

              {/* Section 6 */}
              <section id="types-of-recovery-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 6 • Categorization &amp; Behavioral Matrix
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  6. Types of Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> In practical banking lawsuits. Client abuse manifests across four distinct daily work dimensions: </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-white border border-gray-300 rounded-xl shadow-2xs space-y-1">
                    <h3 className="font-bold text-black">1. Telephonic &amp; Digital Harassment</h3>
                    <p className="text-black font-normal">Auto-dialer robo-bombardment (30. 80 calls/day). Abusive WhatsApp audio notes. Spam SMS. And international virtual VoIP spoofing.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-300 rounded-xl shadow-2xs space-y-1">
                    <h3 className="font-bold text-black">2. Reputational &amp; Social Shaming</h3>
                    <p className="text-black font-normal">Straight calling HR handling. Leaving derogatory notices in apartment lobbies. Or creating WhatsApp client default groups.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-300 rounded-xl shadow-2xs space-y-1">
                    <h3 className="font-bold text-black">3. Doorstep Physical Intimidation</h3>
                    <p className="text-black font-normal">Unannounced residential visits by groups of aggressive people. Refusal to show IIBF credentials. Shouting outside doorways.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-300 rounded-xl shadow-2xs space-y-1">
                    <h3 className="font-bold text-black">4. Legal &amp; Penal Misrepresentation</h3>
                    <p className="text-black font-normal">Forged non-bailable arrest warrants. Fake notices from "Chief Judicial Magistrates". And threats of fast asset seizure.</p>
                  </div>
                </div>
                <p className="text-xs text-black leading-relaxed font-normal"> Identifying which category of abuse you are experiencing is critical for choosing the appropriate legal countermeasure and reports forum. </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> Telephonic abuse represents the most prevalent form of claims abuse. Tele-callers deployed by outside firms routinely violate the <strong>Telecom trade contacts Customer Preference Regulations (TCCCPR. 2018)</strong> and TRAI mandates by utilizing unverified private SIM cards. GSM gateways. And virtual VoIP networks to bypass caller ID identification and spam filters. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Under RBI directives. Lenders must maintain verifiable telephonic logs of every interaction and ensure agents state their full name. The claims firm's name. And the main loan bank promptly upon call initiation. Using unregistered phone numbers or masking caller identities violates TRAI’s 160-series telemarketing allocation rules. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> When agents conceal their identity or refuse to disclose which firm they represent. They are engaging in deceptive telephonic practices that can be reported straight to telecom enforcement officials and the RBI Banking Ombudsman. </p>
              </section>

              {/* Section 8 */}
              <section id="repeated-excessive-calls" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 8 • Call Bombardment &amp; Auto-Dialer Abuse
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  8. Repeated and Excessive Recovery Calls
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> clients regularly report receiving 20. 50. Or even 100+ calls in a single day. Repeated calling designed to cause mental exhaustion. Disrupt daily work. Or induce psychological panic is an explicit breach of RBI Fair Practice Codes. Automated predictive dialers flood phone lines every few minutes. Making normal phone use impossible. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Under the Indian legal rules. Deliberate telephonic flooding can be treated as an actionable public nuisance under Section 270 of the Bharatiya Nyaya Sanhita (BNS) and intentional abuse via electronic telecommunications. </p>
                <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 text-xs text-amber-950 space-y-1.5">
                  <p className="font-bold">What RBI rules Mandate:</p>
                  <p className="text-black font-normal"> Agents are forbidden from harassing clients through persistent. Repeated calls. Once a client indicates their inability to make fast payment or requests contact at a later scheduled date. Repeated calls on the same day constitute RBI abuse subject to Banking Ombudsman penalties. </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> Profanity. Derogatory slurs against family members. Threats of physical assault. And vulgar remarks directed at female clients or family members are strictly criminal offenses under Indian law. claims agents who use aggressive profanity often assume clients will not record the call. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> The moment an agent utters abusive language or threatens harm. The matter ceases to be a trade banking transaction and becomes a cognizable penal offense under the Bharatiya Nyaya Sanhita. </p>
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
                        <td className="p-2.5 font-bold text-red-700">Section 351 BNS (Criminal threats)</td>
                        <td className="p-2.5">Imprisonment up to 2 years. Fine. Or both</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Intentional insult provoking breach of peace</td>
                        <td className="p-2.5 font-bold text-red-700">Section 352 BNS</td>
                        <td className="p-2.5">Imprisonment up to 2 years or fine</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Insulting modesty of a female client</td>
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
                <p className="text-sm text-black leading-relaxed font-normal"> One of the most emotionally distressing tactics used by rogue claims agents is telephoning elderly parents. Spouses. Siblings. Or in-laws. Agents often tell relatives that the client is facing imminent imprisonment or demand that family members pay off the loan from their private savings. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> <strong>Legal Reality:</strong> Under Indian contract law. Debt debt risk is strictly person. Unless a family member is a formal co-client or legal guarantor who signed the loan pacts. They have zero legal debt risk for your private loans or credit card debt. Calling them violates Section 29 of the Credit Information Companies (Regulation) Act and RBI privacy codes. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Lenders have a legal debt to maintain credit privacy. Sharing account balances, default histories. Or legal threats with non-guarantor relatives is an unlawful breach of privacy that entitles clients to initiate reports before the Banking Ombudsman and clients Courts. </p>
              </section>

              {/* Section 11 */}
              <section id="contacting-friends-references" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 11 • Reference Misuse &amp; DPDP Act Safeguards
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  11. Recovery Agents Contacting Friends and References
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> When clients fill out loan applications. Lenders often ask for 2 private "references". Agents often treat these references as pledge co-signers. Calling them to demand loan clearance or to disclose your debt details. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> A "reference" on a loan application serves merely as an address verification contact. A reference is <strong>not a guarantor</strong>. Demanding money from a reference or informing them of an unpaid debt is an unlawful breach of privacy under the <strong>Digital private Data safety Act. 2023 (DPDP Act)</strong>. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Under Section 12 of the DPDP Act 2023. Private data collected for address verification cannot be repurposed for third-party coercion or public shaming. Lenders misusing reference contact details can face severe legal penalties from the Data safety Board of India. </p>
              </section>

              {/* Section 12 */}
              <section id="contacting-employer-colleagues" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 12 • Workplace Interference &amp; Defamation
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  12. Recovery Agents Contacting Your Employer or Colleagues
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Calling your workplace landline. Emailing your company HR unit. Or speaking to team managers regarding a private debt is illegal. Agents utilize this tactic to threaten the client’s livelihood and force crisis liquidation of assets. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Such conduct straight damages the client’s expert standing and can result in disciplinary action or termination. The law strictly separates an person's private civil debt from their employment contract. </p>
                <div className="bg-red-50 border border-red-300 rounded-xl p-4 text-xs text-red-950 space-y-1">
                  <p className="font-bold text-red-900">Criminal Defamation Under Section 356 BNS:</p>
                  <p className="text-black font-normal"> Disclosing a citizen’s private debt status to their employer with the intention of causing reputational injury or job termination constitutes criminal defamation under Section 356 of the Bharatiya Nyaya Sanhita. Punishable by up to 2 years imprisonment. </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> Field claims visits are heavily regulated under RBI’s 2008 Master Circular and 2023 outside work Directions. An agent may visit a residential address only between 08:00 AM and 07:00 PM and must show certified identification and authorization dockets. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Workplace visits are strictly prohibited unless the client has stopped responding to all contact and is completely untraceable at their residential address. Visiting an office to create a public scene entitles the client to initiate criminal steps and report bank misconduct to the bank's MD &amp. CEO. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Any visiting agent who arrives in groups of three or four. Refuses to show credentials. Or uses intimidating physical posturing is in clear breach of central banking rules and criminal law. </p>
              </section>

              {/* Section 14 */}
              <section id="harassment-whatsapp-sms-social" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 14 • Digital Cyber Coercion &amp; IT Act Violations
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  14. Recovery Agent Harassment Through WhatsApp, SMS and Social Media
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> With the proliferation of instant messaging. claims firms often flood WhatsApp with threatening voice notes. Countdown ultimatum messages ("Pay within 2 hours or face police raid"). And fake legal notices carrying fabricated court seals. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Sending intimidatory WhatsApp messages or contacting clients through LinkedIn. Instagram. Or Facebook violates both the Information Technology Act. 2000 (Sections 66D. 66E) and RBI Digital Lending rules. All such digital messages must be preserved as unedited screenshots for police and ombudsman reports. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Creating group chats containing a client’s family members. Colleagues. Or social connections to discuss debt debts is cyber extortion punishable by imprisonment under Indian cyber law. </p>
              </section>

              {/* Section 15 */}
              <section id="public-shaming-by-agents" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 15 • Public Humiliation &amp; Judicial Precedents
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  15. Public Shaming by Recovery Agents
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Rogue firms occasionally resort to pasting default notices on apartment pledge noticeboards. Shouting in residential belts. Or informing residential welfare associations (RWAs). </p>
                <p className="text-sm text-black leading-relaxed font-normal"> The Supreme Court of India in <em>ICICI Bank v. Shanti Devi Sharma (2008)</em> firmly held that banks cannot employ strong-arm tactics to subject citizens to public ignominy and humiliation. Any public shaming allows the client to seek large damages before the clients claims Redressal Commission and High Court. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Under Article 21 of the Constitution of India. The Right to Life includes the Right to Live with Human Dignity. Public humiliation by debt claims agents straight infringes upon this fundamental constitutional guarantee. </p>
              </section>

              {/* Section 16 */}
              <section id="threats-police-action-arrest" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 16 • False Criminal Threats &amp; Police Jurisdiction
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  16. Threats of Police Action or Arrest
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> A common psychological weapon is the threat of fast arrest. claims agents often claim: <em>"An FIR has been lodged at the Crime Branch,"</em> or <em>"Police will arrive at your home with an arrest warrant this evening."</em> </p>
                <p className="text-sm text-black leading-relaxed font-normal"> These claims are entirely fabricated. Indian police officers are tasked with investigating crimes under the Bharatiya Nyaya Sanhita and local penal laws. They are not claims agents for banks or NBFCs. </p>
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-xs text-emerald-950 space-y-1.5">
                  <p className="font-bold text-emerald-900">The Law in Clear Terms:</p>
                  <p className="text-black font-normal"> <strong>Civil default cannot result in police arrest.</strong> The police unit handles criminal offenses under the BNS. Such as murder. Theft. Fraud. Or assault. Debt claims is only handled through Civil Courts. Debt claims Tribunals (for debts above ₹20 Lakhs). Or clients Forums. Agents impersonating police officers commit a cognizable criminal offense under Section 204 BNS. </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> claims firms routinely distribute simulated papers bearing fake formal emblems. Fabricated case numbers ("C.C. No. 4920/2026"). And urgent warnings of non-bailable warrants under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and settlement Systems Act. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> While a lender has the lawful right to initiate legitimate hearing or Section 138 cheque bounce steps through an enrolled lawyers<strong>claims agents cannot issue legal process themselves</strong>. Simulating court dockets constitutes criminal forgery for the purpose of cheating and extortion under Sections 336 and 318 BNS. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Legitimate court summons are always served by an formal court bailiff or sent via registered post with acknowledgment due (RPAD). They are never delivered via WhatsApp voice notes or private claims agent SMS. </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> The Reserve Bank of India has established an extensive RBI code prohibiting threats. Key circulars include: </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li><strong>Master Circular on claims agents in Banks (DBOD.No.Leg.BC.24/09.07.005/2008-09):</strong> Foundational code of conduct for bank claims agents.</li>
                  <li><strong>Master Direction on money Services outside work (2023):</strong> Direct bank debt risk on banks and NBFCs for outside claims entities.</li>
                  <li><strong>RBI Circular on claims agents - abuse of clients (August 2022):</strong> Explicit directive barring public humiliation. Obscene language. illegal third-party contact.</li>
                  <li><strong>Digital Lending rules (September 2022):</strong> Complete ban on smartphone contact scraping and digital blackmail.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> These circulars carry the force of law under Section 35A of the Banking Regulation Act. 1949. And Section 45JA of the RBI Act. 1934. Violations trigger RBI enforcement actions. Monetary penalties. And potential bans on claims outside work. </p>
              </section>

              {/* Section 19 */}
              <section id="rbi-guidelines-recovery-calls" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 19 • Telephonic Calling Mandates
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  19. RBI Guidelines on Recovery Agent Calls
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Under paragraph 2.4 of the Master Circular. Telephonic claims must adhere to 4 strict conditions: </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> If an agent refuses to state their full name or calling firm. The call violates RBI rules. And the client is fully entitled to disconnect and report the interaction. </p>
              </section>

              {/* Section 20 */}
              <section id="permitted-prohibited-calling-hours" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 20 • Temporal Window Regulations
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  20. Permitted and Prohibited Calling Hours
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> The RBI has established strict. Non-negotiable daily work hours for debt claims contacts: </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 space-y-1">
                    <h3 className="font-bold text-emerald-950 text-sm">✓ Permitted Hours</h3>
                    <p className="text-emerald-900 font-bold text-base">08:00 AM to 07:00 PM (IST)</p>
                    <p className="text-black font-normal">Calls and field visits are permissible only during this window on standard trade days.</p>
                  </div>
                  <div className="bg-red-50 border border-red-300 rounded-xl p-4 space-y-1">
                    <h3 className="font-bold text-red-950 text-sm">✗ Prohibited Hours</h3>
                    <p className="text-red-900 font-bold text-base">Before 08:00 AM &amp. After 07:00 PM</p>
                    <p className="text-black font-normal">Calls at night, early morning. Or during family bereavements are strict RBI violations.</p>
                  </div>
                </div>
                <p className="text-sm text-black leading-relaxed font-normal"> Calling at 07:05 PM or 07:30 AM is just as unlawful as calling at midnight. Every call received outside this 11-hour window should be logged as documentary proof of RBI non-compliance. </p>
              </section>

              {/* Section 21 */}
              <section id="rbi-rules-recovery-visits" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 21 • Field Visit Standards &amp; Verification
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  21. RBI Rules on Recovery Agent Visits
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Paragraph 2.5 of the Master Circular delineates the strict protocol for doorstep visits: </p>
                <ul className="text-xs sm:text-sm text-black space-y-2 list-disc pl-5 font-normal">
                  <li><strong>Advance Written Notice:</strong> The bank must formally notify the client of the claims firm’s empanelment and authorized personnel before any home visit.</li>
                  <li><strong>strict records:</strong> Field agents must carry and present on demand: (a) Bank-issued Letter of formal. (b) firm Photo ID. And (c) IIBF Certification.</li>
                  <li><strong>Respect for Privacy &amp. Sanctity:</strong> Agents must respect the client’s home environment. Refrain from entering without express permission. And conduct talks peacefully.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> Agents are prohibited from visiting a client's residence during family bereavements. Marriages. severe health crises. Doing so demonstrates bad faith and deliberate infliction of mental agony. </p>
              </section>

              {/* Section 22 */}
              <section id="rbi-rules-threats-intimidation" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 22 • Zero Tolerance Directives
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  22. RBI Rules on Threats, Intimidation and Abusive Language
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> The RBI’s August 2022 notice issued under Section 35A of the Banking Regulation Act establishes a zero-tolerance mandate against abusive claims practices: </p>
                <blockquote className="border-l-4 border-red-500 pl-4 py-2 italic text-xs sm:text-sm text-black bg-gray-50 rounded-r-lg font-normal">
                  "Regulated Entities (REs) shall strictly ensure that they or their agents do not resort to intimidation or harassment of any kind, either verbally or physically, against any person in their debt collection efforts, including acts intended to humiliate publicly or intrude upon the privacy of the debtors' family members, referees and friends..."
                </blockquote>
                <p className="text-sm text-black leading-relaxed font-normal"> Lending institutions that fail to rein in aggressive claims vendors face direct RBI sanctions. Including public reprimands, monetary fines. And strict daily work audits. </p>
              </section>

              {/* Section 23 */}
              <section id="borrower-rights-against-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 23 • Statutory &amp; Constitutional Protections
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  23. Borrower's Rights Against Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> As a client under Indian law. You are endowed with 5 fundamental legal rights: </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> Legitimate debt claims in India is strictly limited to polite. Documented contact. claims agents are legally authorized to: </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Make polite telephonic inquiries regarding payment status between 08:00 AM and 07:00 PM.</li>
                  <li>Visit the client’s registered residential address during permitted hours with valid identification.</li>
                  <li>Deliver written demand notices and account record summaries issued by the lender.</li>
                  <li>Discuss payment plans, restructuring options. Or formal settlement rules sanctioned by the bank.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> Notice that none of these authorized powers include using abusive language. Threatening physical violence. Or contacting colleagues or relatives. </p>
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
                    <li>They CANNOT seize furniture, appliances. Cars. Or jewelry for no-pledge private loans.</li>
                    <li>They CANNOT call or visit your friends. Relatives. In-laws. Or neighbors.</li>
                    <li>They CANNOT visit your office or talk to your colleagues. Supervisor. Or HR manager.</li>
                    <li>They CANNOT threaten arrest. Jail time. Police raids. criminal legal steps.</li>
                    <li>They CANNOT call before 8:00 AM or after 7:00 PM.</li>
                    <li>They CANNOT demand cash or payment into their private UPI ID.</li>
                  </ul>
                </div>
                <p className="text-sm text-black leading-relaxed mt-2 font-normal"> If an agent engages in any of these prohibited actions. They are acting outside the law and can be held personally liable in civil and criminal steps. </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> <strong>No. Absolutely not.</strong> Calling non-guarantor family members is an explicit violation of the RBI Master Circular on claims agents and Section 29 of the CICRA Act. The lender has a contractual relationship solely with the person client. Harassing parents. Spouses. Or children to extract payment can be promptly reported to the Bank Nodal Officer and the RBI Integrated Ombudsman. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Family members are not responsible for your debts unless they signed the loan pacts as a co-client or guarantor. Inform your family members never to entertain such calls. Never to disclose your whereabouts. And to record any incoming calls from claims agents. </p>
              </section>

              {/* Section 27 */}
              <section id="can-agents-contact-employer" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 27 • Legal Clarification: Employers &amp; HR
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  27. Can Recovery Agents Contact Your Employer?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> <strong>No.</strong> Contacting an employer, emailing HR. Or calling office reception violates RBI fair practice norms and constitutes criminal defamation under Section 356 of the Bharatiya Nyaya Sanhita. An agent may contact a workplace only if the client has designated their company office as their formal contact address and has completely ceased contact at their residence. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> If an agent contacts your workplace. Obtain a written record from your receptionist or HR unit detailing the call. This serves as critical proof when seeking ombudsman payout or filing a defamation suit. </p>
              </section>

              {/* Section 28 */}
              <section id="can-agents-visit-home" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 28 • Legal Clarification: Home Visits
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  28. Can Recovery Agents Visit Your Home?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> <strong>Yes. strictly under stringent conditions.</strong> Agents can visit your residence only between 08:00 AM and 07:00 PM. They must carry formal ID. IIBF certification. And a bank Letter of formal. You are not obligated to invite them inside your home. talks can be conducted at your doorstep or building gate. If they behave aggressively or refuse to leave upon request. They commit criminal trespass under Section 329 BNS. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Never allow field agents to enter private residential rooms. And never feel intimidated into making on-the-spot cash handovers. Always speak calmly. Keep your smartphone recording. And inspect all credentials. </p>
              </section>

              {/* Section 29 */}
              <section id="can-agents-visit-workplace" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 29 • Legal Clarification: Workplace Visits
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  29. Can Recovery Agents Visit Your Workplace?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> <strong>No. Workplace visits are strictly discouraged by the RBI.</strong> Field visits to an office premises are permissible only as a last resort if the client has absconded or is unreachable at their residential address. Visiting an office to create a public spectacle is an actionable civil and criminal wrong. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Most company office parks have strict visitor screening policies. You can instruct your facility handling or reception team that private money matters are not to be entertained on company premises. Effectively barring illegal entry. </p>
              </section>

              {/* Section 30 */}
              <section id="can-agents-threaten-arrest" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 30 • Legal Clarification: Arrest Threats
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  30. Can Recovery Agents Threaten You With Arrest?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> <strong>Never.</strong> Defaulting on an no-pledge private loans or credit card is purely a civil contractual matter. In India. There is no provision for criminal arrest for loan default arising from genuine debt stress. Agents who claim to have police connections or threaten arrest are committing extortion and impersonation offenses under Sections 204 and 308 BNS. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Do not allow agents to intimidate you with threats of arrest warrants or police raids. These are standard deceptive tactics designed to exploit clients' lack of legal familiarity. </p>
              </section>

              {/* Section 31 */}
              <section id="can-agents-seize-property" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 31 • Legal Clarification: Property Seizure
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  31. Can Recovery Agents Seize Your Property?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> <strong>No. In no-pledge loans. There is no asset hypothecation.</strong> Unlike secured vehicle or housing loans governed by SARFAESI Act. Private loans and credit cards do not carry any charge over your assets. claims agents have zero formal to touch or seize private belongings. Attempting to confiscate property constitutes criminal robbery or extortion. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Only a competent civil court executing a formal decree has the legal formal to attach assets. And that process requires lengthy judicial steps with full opportunities for legal defense. </p>
              </section>

              {/* Section 32 */}
              <section id="can-agents-force-immediate-payment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 32 • Legal Clarification: Instant Demands
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  32. Can Recovery Agents Force You to Make Immediate Payment?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> <strong>No. Coercive instantaneous payment demands are illegal.</strong> Agents often demand: <em>"Arrange ₹50,000 within 30 minutes via UPI or we won't leave your house."</em> This is unlawful confinement and coercion. clients have the right to request a formal account record and channel all payments through verified bank portals. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Never succumb to artificial deadlines. Take your time to review accounts. Consult legal counsel. And settle structured payments through formal banking channels. </p>
              </section>

              {/* Diagnostic Interactive Tool */}
              <section id="harassment-diagnostic-tool" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md">
                  Interactive Legal Diagnostic
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  ⚡ Recovery Harassment Legal Severity &amp; Action Checker
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Select the local claims abuse behavior you are currently facing to receive an instant legal evaluation. Applicable penal statutes under Bharatiya Nyaya Sanhita (BNS). And exact counter-action steps: </p>

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
                        <p className="text-emerald-300 font-mono text-xs mt-1 leading-relaxed"> "{violationAnalysis.script}" </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> Halting claims abuse requires transitioning from a defensive. Panicked victim mindset to an assertive. Legally documented defense. The 3-phase strategic sequence to stop abuse comprises: </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-xl space-y-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">1</div>
                    <h3 className="font-bold text-black">Document &amp; Record</h3>
                    <p className="text-black font-normal">Capture audio recordings of all inbound calls. Maintain timestamped call logs. And save all abusive SMS/WhatsApp messages.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-xl space-y-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">2</div>
                    <h3 className="font-bold text-black">Serve Legal Notice</h3>
                    <p className="text-black font-normal">Issue a formal legal help notice through CredSettle’s lawyers citing RBI circulars and BNS provisions.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-xl space-y-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">3</div>
                    <h3 className="font-bold text-black">Escalate to RBI</h3>
                    <p className="text-black font-normal">File an formal reports on the RBI Integrated Ombudsman portal (cms.rbi.org.in) seeking payout and firm deregistration.</p>
                  </div>
                </div>
                <p className="text-sm text-black leading-relaxed font-normal"> Following this methodical sequence ensures you build an unshakeable evidentiary record while promptly cooling down the aggressive claims apparatus. </p>
              </section>

              {/* Section 34 */}
              <section id="how-to-handle-recovery-calls" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 34 • Call Management Protocols
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  34. How to Handle Recovery Agent Calls
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> When answering claims calls. Follow this expert 4-step protocol: </p>
                <ul className="text-xs sm:text-sm text-black space-y-2 list-decimal pl-5 font-normal">
                  <li><strong>Remain Calm:</strong> Never match the caller's aggression. Lose your temper. Or use foul language. Calmness deprives the agent of psychological leverage.</li>
                  <li><strong>Demand Full Identification:</strong> Ask: <em>"Please state your full name. Staff ID. Your claims firm's registered name. And your direct extension number."</em></li>
                  <li><strong>State Call Recording:</strong> Announce promptly: <em>"Please note this call is being recorded for legal and RBI compliance."</em> Rogue agents often disconnect at this step.</li>
                  <li><strong>Direct Written contact:</strong> Instruct the caller to send all proposals. settlement options. And demand letters to your registered email address.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> By maintaining expert composure. You avoid providing agents with verbal ammunition while establishing clear procedural boundaries. </p>
              </section>

              {/* Section 35 */}
              <section id="how-to-respond-threatening-calls" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 35 • Verbatim Response Scripts
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  35. How to Respond to Threatening Recovery Calls
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Use these battle-tested. Verbatim legal scripts when facing intimidatory records: </p>
                <div className="space-y-3 text-xs">
                  <div className="bg-slate-100 p-3.5 rounded-xl border border-slate-300 space-y-1">
                    <p className="font-bold text-red-700">When the Agent Says: <em>"We are sending the police to arrest you right now."</em></p>
                    <p className="font-medium text-black"> <strong>Your Response:</strong> <em>"Under Indian law. Debt default is a civil claims. Police have no police area over bank claims. Threatening me with police arrest violates Section 204 and 351 of the Bharatiya Nyaya Sanhita. This call is recorded and will be submitted to the Police Commissioner and RBI Ombudsman."</em> </p>
                  </div>
                  <div className="bg-slate-100 p-3.5 rounded-xl border border-slate-300 space-y-1">
                    <p className="font-bold text-red-700">When the Agent Says: <em>"We are calling your relatives and HR manager."</em></p>
                    <p className="font-medium text-black"> <strong>Your Response:</strong> <em>"Under the RBI Master Circular and Section 29 of the CICRA Act. Disclosing my debt to third parties is illegal. Contacting my employer or relatives constitutes criminal defamation under Section 356 BNS. I will hold your firm and the bank personally liable for damages."</em> </p>
                  </div>
                  <div className="bg-slate-100 p-3.5 rounded-xl border border-slate-300 space-y-1">
                    <p className="font-bold text-red-700">When the Agent Says: <em>"Pay promptly via UPI or face fast home raids."</em></p>
                    <p className="font-medium text-black"> <strong>Your Response:</strong> <em>"Demanding instantaneous payment under threat of home raids violates RBI fair practice codes. All payments must be processed straight to the loan account through verified bank channels. Send a formal record to my registered email."</em> </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> If claims agents arrive at your residence. Adhere strictly to these procedural safeguards: </p>
                <div className="space-y-2 text-xs text-black font-normal">
                  <p>1. <strong>Do Not Allow Entry:</strong> You are not legally required to invite field agents inside your private living room. Conduct all interactions outside your door or at your building entrance gate.</p>
                  <p>2. <strong>Inspect Credentials Before Speaking:</strong> Ask them to display their firm ID card. IIBF letter. And the bank’s Letter of formal. Take clear photographs of these papers with your smartphone.</p>
                  <p>3. <strong>Record Video / Audio:</strong> Inform the agents that the interaction is being recorded on your phone or doorstep pledge camera.</p>
                  <p>4. <strong>Refuse Forced Cash Handover:</strong> Never hand over cash or make payments to private UPI handles. State that all payments are processed through the bank’s formal online portal.</p>
                  <p>5. <strong>Dial 112 if They Refuse to Leave:</strong> If agents shout. Cause a scene. Or refuse to vacate your premises after being asked. Dial 112 promptly to report unlawful assembly and criminal trespass.</p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> If an agent visits your office: </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Instruct building pledge or reception not to allow them access past the visitor lobby.</li>
                  <li>Meet them briefly in a private visitor cubicle. do not allow them into open office work areas.</li>
                  <li>State clearly: <em>"This is my workplace. Visiting me here violates RBI Master Circular directives. Leave promptly. And route all contact to my registered email address."</em></li>
                  <li>Collect building pledge CCTV footage and file an urgent reports to the bank's MD desk and local police for abuse at workplace.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> Proactively briefing your office pledge team prevents embarrassing incidents in front of colleagues and maintains company decorum. </p>
              </section>

              {/* Section 38 */}
              <section id="how-to-communicate-with-bank" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 38 • Formal Bank Dialogue &amp; Grievance Desks
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  38. How to Communicate With the Bank During Recovery
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Never conduct talks solely with freelance claims agents. They possess zero formal to sanction debt waivers. Freeze interest. approve deals. Always escalate contact straight to the lending institution’s formal Grievance Redressal Officer (GRO) and main loan Nodal Officer (PNO) via written email correspondence. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Maintain a formal. Expert tone in all contacts. Clearly explain your genuine hardship. Provide supporting records (health bills. Termination letters. Bank records). And express your sincere intention to resolve the debt through an honorable settlement once your money situation stabilizes. </p>
              </section>

              {/* Section 39 */}
              <section id="request-communication-in-writing" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 39 • Written Demands &amp; Formal Email Templates
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  39. How to Request Communication in Writing
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Send a formal registered email to the lender’s customer care and nodal desk stating: </p>
                <div className="bg-gray-100 p-4 rounded-xl text-xs text-black font-mono space-y-2 border border-gray-300 font-medium">
                  <p><strong>Subject:</strong> Formal Request to Cease Telephonic Calls and Communicate only in Writing. Loan A/C [Number]</p>
                  <p> "Dear Grievance Redressal Officer,<br /><br /> I am experiencing temporary hardship. Due to severe abuse. Multiple calls outside permitted hours. And intimidatory language from outside claims agents. I hereby request that all future contacts. Demands. And offers regarding my loan account be conveyed strictly in writing to my registered email address.<br /><br /> Any continued verbal threats. Illegal visits. Or contact with third-party references will be treated as deliberate violations of the RBI Master Circular and submitted to the RBI Ombudsman." </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> In legal steps before the Banking Ombudsman or a Magistrate’s Court. Contemporaneous written records is critical. Maintain a dedicated <strong>"abuse Incident Log"</strong> recording: </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Date and exact timestamp of every inbound call. SMS. Or doorstep visit.</li>
                  <li>Originating phone numbers (including screenshots of caller ID).</li>
                  <li>Name stated by the caller and claims firm represented.</li>
                  <li>Verbatim summary of abusive words. Threats. Or claims made.</li>
                  <li>Names of any third-party witnesses (family members. Building pledge. Colleagues).</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> A contemporaneous log maintained day-by-day carries large probative weight in judicial and RBI evaluations. </p>
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
                    <p className="text-black font-normal">Complete. Unedited call recordings and itemized telecom operator call detail records (CDR).</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <span className="font-bold text-blue-700">Digital Screenshots:</span>
                    <p className="text-black font-normal">Full-screen WhatsApp chats, SMS threads. And email notices showing sender timestamps and phone numbers.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <span className="font-bold text-blue-700">Video &amp; CCTV Footage:</span>
                    <p className="text-black font-normal">Doorbell camera. Smartphone video. Or building pledge footage of visiting field agents.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <span className="font-bold text-blue-700">Physical Notices:</span>
                    <p className="text-black font-normal">Envelopes. Printed demand letters. And fabricated legal dockets handed over by field agents.</p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>Electronic records. Including digital audio recordings and smartphone screenshots. Are fully admissible as primary electronic proof. To maintain legal validity: </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Do not edit. Trim. Or alter audio recordings in any way.</li>
                  <li>Back up raw audio files to secure cloud storage promptly with metadata preserved.</li>
                  <li>Obtain an electronic letter under Section 63 of the BSA (equivalent to old Section 65B of Indian proof Act) through legal counsel when filing court steps.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> Unedited call recordings containing vulgar or threatening words represent decisive proof that leaves banks with no defense before the Banking Ombudsman. </p>
              </section>

              {/* Section 43 */}
              <section id="how-to-complain-against-agent" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 43 • Multi-Tier Escalation Architecture
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  43. How to Complain Against a Recovery Agent
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> A structured reports process follows a 4-tier escalation hierarchy: </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> Submit a formal written reports via the bank’s formal online grievance portal or registered email address. Attach your incident log and audio snippets. Cite paragraph 2.6 of the RBI Master Circular. This empowers the RBI to impose a geographical ban on the bank’s claims firm for repeated abuse. Demand an fast internal investigation and a written confirmation that the local firm has been removed from your loan account. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Always ensure you receive a formal Service Request (SR) or Ticket Reference Number. Under RBI directives. Banks must resolve internal grievances within 30 calendar days. </p>
              </section>

              {/* Section 45 */}
              <section id="how-to-file-rbi-complaint" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 45 • RBI CMS Online Procedure
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  45. How to File a Complaint With RBI
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> If the lending institution fails to resolve the abuse within 30 days or rejects your reports. You are legally entitled to lodge a reports with the Reserve Bank of India through the central <strong>reports handling System (CMS)</strong> at <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">cms.rbi.org.in</a>. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> The portal allows you to upload supporting call recordings. SMS screenshots. bank correspondence. A unique reference tracking ID is issued. And the lender is mandated to submit a formal response straight to the Ombudsman. </p>
              </section>

              {/* Section 46 */}
              <section id="rbi-ombudsman-complaint-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 46 • Ombudsman Compensation Powers
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  46. RBI Ombudsman Complaint Against Recovery Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Under the <strong>Reserve Bank - Integrated Ombudsman Scheme (RB-IOS. 2021)</strong>The Ombudsman holds extensive adjudicatory powers: </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li><strong>abuse payout:</strong> Power to award up to <strong>₹1,00,000</strong> straight to the client for mental distress. Loss of time. abuse.</li>
                  <li><strong>money Loss payout:</strong> Power to award up to <strong>₹20,00,000</strong> for actual money damages caused by the bank’s misconduct.</li>
                  <li><strong>firm Blacklisting:</strong> Direction to the bank to terminate contracts with offending claims firms.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> Ombudsman awards are binding on banks unless appealed within strict legal deadlines. Making this one of the most effective non-judicial remedies available to clients. </p>
              </section>

              {/* Section 47 */}
              <section id="when-to-approach-police" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 47 • Criminal Thresholds &amp; Police Action
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  47. When Should You Approach the Police?
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> While police cannot intervene in civil loan claims. You must approach the local police station or dial <strong>112</strong> when claims agents commit cognizable criminal acts. Such as: </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Physical assault. Unlawful physical restraint. Or doorstep violence.</li>
                  <li>Verbal abuse or threats directed at female family members (Section 79 BNS).</li>
                  <li>Criminal extortion. Demanding cash under threat of injury (Section 308 BNS).</li>
                  <li>Impersonation of police officers or judicial magistrates (Section 204 BNS).</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> When filing a police reports. Clearly mention that you are not seeking intervention in debt payment. But are reporting local penal offenses committed by person agents. </p>
              </section>

              {/* Section 48 */}
              <section id="legal-action-against-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 48 • Judicial Remedies &amp; Injunctions
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  48. Legal Action Against Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> If abuse is steady and severe. Your legal counsel can initiate formal judicial steps: </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">Civil Injunction Suit:</strong> Petitioning a Civil Court for a permanent injunction restraining the lender and its agents from visiting your home or workplace.
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg">
                    <strong className="text-black">Section 175 BNSS Application:</strong> Filing a formal application before the Judicial Magistrate if local police refuse to register an FIR against abusive agents.
                  </div>
                </div>
                <p className="text-sm text-black leading-relaxed mt-2 font-normal"> Judicial intervention sends an unmistakable signal to the lender's legal unit. Usually prompting an fast withdrawal of third-party claims firms. </p>
              </section>

              {/* Section 49 */}
              <section id="consumer-protection-remedies" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 49 • Consumer Protection Act 2019 Remedies
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  49. Consumer Protection Remedies Against Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Under the <strong>clients safety Act, 2019</strong>Deploying abusive claims agents constitutes both an "unfair trade practice" and a "deficiency of service". clients can file a clients reports before the areas clients claims Redressal Commission seeking large money payout and lawsuits costs from the bank. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> clients commissions across India have repeatedly awarded significant damages against banks that deploy uncertified claims firms to terrorize clients. </p>
              </section>

              {/* Section 50 */}
              <section id="legal-notice-against-harassment" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 50 • Advocate Cease-and-Desist Notice
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  50. Legal Notice Against Recovery Agent Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> A formal lawyers Legal Notice issued to the bank’s Board of Directors and main loan Nodal Officer serves as a powerful deterrent. Prepared by CredSettle’s banking lawsuits counsel. This notice: </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li>Chronicles the local dates, times. And phone numbers involved in the abuse.</li>
                  <li>Quotes relevant Supreme Court rulings (*Shanti Devi Sharma*) and BNS criminal provisions.</li>
                  <li>Directs the bank to promptly recall its claims firm under threat of criminal legal steps and RBI Ombudsman lawsuits.</li>
                </ul>
                <p className="text-sm text-black leading-relaxed font-normal"> In over 90% of cases. Receipt of a formal lawyers notice causes the bank’s compliance desk to promptly de-assign the aggressive firm. </p>
              </section>

              {/* Section 51 */}
              <section id="what-to-do-legal-notice-bank" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 51 • Responding to Bank Legal Notices
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  51. What to Do If You Receive a Legal Notice From the Bank
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Receiving a formal legal notice (under Section 138 NI Act. Section 25 PSS Act. Or a loan recall notice) requires expert legal handling: </p>
                <ul className="text-xs sm:text-sm text-black space-y-1.5 list-disc pl-5 font-normal">
                  <li><strong>Verify Authenticity:</strong> Check whether the notice is issued by an enrolled lawyers or is a simulated threat from a claims firm.</li>
                  <li><strong>Do Not Panic:</strong> A legal notice is not an arrest warrant. it is a legal contact providing time to reply.</li>
                  <li><strong>File a Timely Legal Reply:</strong> Have an skilled banking lawyers draft a formal reply within 15 days. Explaining hardship. Contesting inflated interest charges. And proposing amicable structured debt settlement.</li>
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
                <p className="text-sm text-black leading-relaxed font-normal"> Credit card collections are notoriously aggressive due to high annualized interest rates (40%. 52%) and compounding finance charges. claims tele-callers often fabricate urgent legal consequences or claim that non-payment will result in fast passport impoundment. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Under the <em>RBI Master Direction on Credit Card and Debit Card Issuance (2022)</em>Card issuers must strictly adhere to the Fair Practices Code and are straight accountable for claims agent misconduct. no-pledge card dues cannot lead to travel bans or criminal arrest. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Cardholders who default due to job loss or illness are entitled to request debt restructuring or a settled one-time settlement rather than enduring coercive claims calls. </p>
              </section>

              {/* Section 53 */}
              <section id="harassment-personal-loan-cases" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 53 • Personal Loan Collections
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  53. Recovery Agent Harassment in Personal Loan Cases
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> no-pledge private loans represent pure contractual borrowings backed by no pledge. When defaults occur. Claims agents often exploit the client’s fear of social embarrassment. Remind visiting agents that private loans carry no lien over household goods and that civil claims suits through courts are the lender’s only lawful recourse. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Because there is no hypothecated pledge to sell. Lenders often rely on external claims firms to apply psychological pressure. Exercising your legal rights breaks this cycle and forces the bank to discuss structured debt settlement. </p>
              </section>

              {/* Section 54 */}
              <section id="harassment-business-loan-cases" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 54 • Business &amp; MSME Loans
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  54. Recovery Agent Harassment in Business Loan Cases
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> For MSME and small firm loans. Agents often attempt to disrupt trade work by confronting customers. Suppliers. Or staff. Under MSMED Act rules and RBI restructuring rules. Small firms experiencing distress are entitled to special debt relief options rather than coercive daily work breaks. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> shop owners facing claims abuse should promptly notify their firms association and serve a legal legal help notice to safeguard trade goodwill. </p>
              </section>

              {/* Section 55 */}
              <section id="harassment-after-loan-settlement" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 55 • Post-Settlement Coercion
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  55. Recovery Agent Harassment After Loan Settlement
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> A common bank failure occurs when a bank’s claims unit fails to update its system following a formal <strong>One-Time settlement (OTS)</strong>. clients who have paid the agreed payout sum find themselves harassed months later by a newly empaneled claims firm demanding the remaining balance. </p>
                <div className="bg-red-50 border border-red-300 rounded-xl p-4 text-xs text-red-950 space-y-1.5">
                  <p className="font-bold text-red-900">Legal Defense Against Post-settlement abuse:</p>
                  <p className="text-black font-normal"> A formal written OTS letter executed by an authorized bank officer constitutes a binding. Legally enforceable novation of contract. Demanding further payment constitutes fraud and extortion under Sections 316 and 318 BNS. Provide your closure note and payment proof to CredSettle to seek crisis intervention and fast issuance of your No Dues letter (NDC). </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> If EMI payments are made but misallocated due to technical banking glitches. claims agents may continue aggressive follow-up. Furnish your bank transaction UTR reference and account debit record to the Bank Branch Manager and demand fast credit rectification. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Harassing a customer who has already paid is an egregious deficiency of service. You can claim damages before the clients Forum for mental distress caused by accounting negligence. </p>
              </section>

              {/* Section 57 */}
              <section id="harassment-someone-elses-loan" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 57 • Mistaken Identity &amp; Wrong Number Calls
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  57. Recovery Agent Harassment for Someone Else's Loan
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> Citizens often receive calls for loans taken by strangers. Previous SIM card owners. Or distant acquaintances. If you are not the client. State clearly: <em>"You have dialed an incorrect number. I am not the client and have no connection to this loan. Remove my number promptly."</em> If calls persist. File a reports on the National Cyber Crime Portal and with the RBI Ombudsman for illegal abuse of a third party. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> Telecom service providers often recycle inactive numbers. claims firms that fail to verify debtor identity before launching automated calling campaigns violate TRAI regulations. </p>
              </section>

              {/* Section 58 */}
              <section id="agent-calling-guarantor-reference" className="scroll-section space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Section 58 • Guarantor vs Reference Legal Distinction
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                  58. Recovery Agent Calling a Guarantor or Reference
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> It is vital to distinguish between a legal guarantor and a reference: </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <h3 className="font-bold text-black">Reference: Zero Liability</h3>
                    <p className="text-black font-normal">A person named on the application form for identity verification. They signed no guarantee and have zero debt to pay. Calling them for debt claims is illegal.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300 rounded-lg space-y-1">
                    <h3 className="font-bold text-black">Guarantor: Joint Liability</h3>
                    <p className="text-black font-normal">A person who executed a formal Deed of Guarantee. While co-liable under contract law. Agents must treat guarantors with the exact same dignity and fair practice codes as the primary client.</p>
                  </div>
                </div>
                <p className="text-sm text-black leading-relaxed mt-2 font-normal"> Guarantors cannot be subjected to abusive language or unannounced odd-hour visits. All RBI fair practice protections apply equally to guarantors and clients. </p>
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
                    <h3 className="font-bold text-black">Scenario 1: Agent creates a scene at your apartment gate</h3>
                    <p className="text-black font-normal"><strong>Action:</strong> Instruct apartment pledge to bar entry. Film the agent from your balcony or gate. Dial 112 to report public nuisance and criminal trespass. Forward the video to the Bank PNO.</p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h3 className="font-bold text-black">Scenario 2: Tele-caller sends fake arrest warrant on WhatsApp</h3>
                    <p className="text-black font-normal"><strong>Action:</strong> Take full-screen screenshots showing the phone number. Do not delete the chat. File a cybercrime reports on cybercrime.gov.in under Section 336 BNS (forgery) and serve an lawyers notice.</p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-xl p-3.5 shadow-2xs space-y-1.5">
                    <h3 className="font-bold text-black">Scenario 3: Agent calls your workplace reception desk</h3>
                    <p className="text-black font-normal"><strong>Action:</strong> Request a written record from your receptionist detailing the call timestamp and caller's records. Submit this as primary proof of criminal defamation to the Bank Ombudsman.</p>
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
                    <h3 className="font-bold text-emerald-950 text-sm">✓ DO'S</h3>
                    <ul className="text-black space-y-1 list-disc pl-4 font-normal">
                      <li>Record all phone calls automatically on your device.</li>
                      <li>Always ask for full agent credentials and IIBF DRA letters.</li>
                      <li>Insist on communicating through registered email.</li>
                      <li>Preserve all threatening text messages and WhatsApp audio notes.</li>
                      <li>Appoint an skilled banking lawyers to represent you.</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-300 rounded-xl p-4 space-y-2">
                    <h3 className="font-bold text-red-950 text-sm">✗ DON'TS</h3>
                    <ul className="text-black space-y-1 list-disc pl-4 font-normal">
                      <li>Do not lose your temper or use abusive language back.</li>
                      <li>Do not allow field agents inside your private home.</li>
                      <li>Do not pay cash or send money to private UPI handles.</li>
                      <li>Do not panic when agents make fake police arrest threats.</li>
                      <li>Do not borrow from informal loan sharks to pay claims agents.</li>
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
                <p className="text-sm text-black leading-relaxed font-normal"> Clear. Authoritative answers to the most urgent questions clients ask regarding claims abuse: </p>
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
                <p className="text-sm text-black leading-relaxed font-normal"> When an person client stands alone against an aggressive claims apparatus. Agents exploit their lack of legal knowledge. CredSettle’s seasoned banking lawsuits lawyers act as a protective legal shield: </p>
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
                      <h3 className="font-bold text-black">Activate Call Recording Immediately</h3>
                      <p className="text-black font-normal">Ensure every incoming call from unknown numbers is recorded and saved with timestamps.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white border border-gray-300 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-black">Send Cease-and-Desist Email to Bank PNO</h3>
                      <p className="text-black font-normal">Submit a formal written objection to the main loan Nodal Officer citing local call violations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white border border-gray-300 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-black">Retain CredSettle Advocates</h3>
                      <p className="text-black font-normal">Authorize our legal desk to issue formal notices and handle all claims contacts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white border border-gray-300 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-black">File RBI Ombudsman Complaint</h3>
                      <p className="text-black font-normal">Escalate unresolved abuse to the central Banking Ombudsman on cms.rbi.org.in.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white border border-gray-300 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">5</div>
                    <div>
                      <h3 className="font-bold text-black">Negotiate Structured Settlement</h3>
                      <p className="text-black font-normal">Resolve underlying debt on honorable. Affordable terms with full legal No Dues certification.</p>
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
                  64. Conclusion: Know Your Rights and Stop Harassment
                </h2>
                <p className="text-sm text-black leading-relaxed font-normal"> debt stress is a temporary economic phase. Not a crime. No bank. NBFC. Or claims firm possesses the legal formal to rob you of your constitutional dignity. Defame your character. Or terrorize your family. The law in India firmly protects clients against predatory collections. </p>
                <p className="text-sm text-black leading-relaxed font-normal"> By understanding your rights under the RBI Master Circular. Preserving robust audio and visual proof. And deploying expert lawyers legal help. You can promptly halt unlawful abuse and regain peace of mind. </p>

                {/* Call to Action Box */}
                <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 rounded-2xl shadow-md space-y-3 mt-4">
                  <h3 className="text-base sm:text-lg font-bold">
                    Stop Recovery Agent Harassment Today With CredSettle
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed font-normal"> You do not have to endure abusive calls. Doorstep threats. threats of arrest. Let our high-court banking lawyers safeguard your dignity. Handle your lenders. And guide you toward complete money freedom. </p>
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
                  <div className="font-bold text-black text-xs">Active Harassment?</div>
                </div>
                <p className="text-[10px] text-black leading-tight font-normal"> lawyers issue cease-and-desist notices to stop claims calls within 24 hours. </p>
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
                <div className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                  Key Safeguards
                </div>
                <ul className="text-[10px] space-y-1.5 text-slate-200 font-medium">
                  <li className="flex items-start gap-1"> <span className="text-emerald-400 font-bold">✓</span> <span>Debt default is strictly civil. Never criminal.</span> </li>
                  <li className="flex items-start gap-1"> <span className="text-emerald-400 font-bold">✓</span> <span>Calls only 08:00 AM to 07:00 PM.</span> </li>
                  <li className="flex items-start gap-1"> <span className="text-emerald-400 font-bold">✓</span> <span>Zero contact with relatives or employers.</span> </li>
                  <li className="flex items-start gap-1"> <span className="text-emerald-400 font-bold">✓</span> <span>No property seizure for private loans.</span> </li>
                </ul>
              </div>

              {/* Direct Escalation Contacts */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 text-[10px] text-black space-y-1.5">
                <div className="font-bold text-[10px] text-blue-900 uppercase tracking-wider">
                  Redressal Portals
                </div>
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
                <div className="font-bold text-black text-sm">Table of Contents (64 Chapters)</div>
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
