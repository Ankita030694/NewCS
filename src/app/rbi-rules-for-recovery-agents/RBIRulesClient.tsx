'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';

export default function RBIRulesClient() {
  const [activeId, setActiveId] = useState<string>('intro-rbi-rules');
  const [isMobile, setIsMobile] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [tocSearch, setTocSearch] = useState('');
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isFirefox, setIsFirefox] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Interactive Diagnostic Tool State
  const [selectedViolation, setSelectedViolation] = useState<string>('odd_hours');
  const [lenderType, setLenderType] = useState<string>('commercial_bank');
  const [complaintFiledStatus, setComplaintFiledStatus] = useState<string>('no');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
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
    const map: Record<string, { severity: string; rbiBreach: string; penalOffense: string; actionForum: string; nextStep: string }> = {
      odd_hours: {
        severity: "Severe Regulatory Violation (Grade A)",
        rbiBreach: "Master Circular on Recovery Agents (Para 2.4) — Absolute prohibition of calls before 08:00 AM or after 07:00 PM.",
        penalOffense: "Section 351 BNS (Intentional Harassment & Public Nuisance) via electronic telecommunications.",
        actionForum: complaintFiledStatus === 'over_30' ? "RBI Integrated Ombudsman (CMS Portal)" : "Bank Principal Nodal Officer (PNO)",
        nextStep: "Preserve incoming call logs with exact timestamps and demand ₹50,000+ ombudsman compensation for mental distress."
      },
      abuse_threats: {
        severity: "Criminal Offense & Non-Bailable Intimidation",
        rbiBreach: "Master Direction on Outsourcing & Master Circular — Zero tolerance for verbal abuse, profanity, or physical intimidation.",
        penalOffense: "Section 351/352 BNS (Criminal Intimidation & Intentional Insult) + Section 79 BNS if directed at women.",
        actionForum: "Local Police Station (FIR under BNS) + RBI Banking Ombudsman",
        nextStep: "Submit recorded audio proof to the nearest police station under Section 175 BNSS and serve an advocate notice to the bank."
      },
      relatives_friends: {
        severity: "Severe Breach of Privacy & Statutory Confidentiality",
        rbiBreach: "Section 29 CICRA Act, 2005 & Master Circular — Total bar on contacting non-guarantor third parties, relatives, or neighbors.",
        penalOffense: "Section 356 BNS (Defamation) & Digital Personal Data Protection Act, 2023 violation.",
        actionForum: "Principal Nodal Officer + Cyber Crime Cell (if WhatsApp messaging used)",
        nextStep: "Issue formal cease-and-desist representation to the bank demanding immediate deregistration of unauthorized contacts."
      },
      workplace_visit: {
        severity: "Criminal Defamation & Economic Coercion",
        rbiBreach: "Master Circular on Recovery Agents — Workplace visits prohibited unless borrower has absconded from residential address.",
        penalOffense: "Section 356 BNS (Criminal Defamation) & Tortious Interference with Employment Contract.",
        actionForum: "Civil Court (Permanent Injunction) + Bank Zonal Head Grievance",
        nextStep: "Submit building CCTV footage and colleague witness statements to the Bank Grievance Redressal Officer."
      },
      fake_police: {
        severity: "Cognizable Criminal Fraud & Impersonation",
        rbiBreach: "Simulating legal/police documents is strictly barred under IBA Code of Conduct and banking fair practice norms.",
        penalOffense: "Section 204 BNS (Personating a Public Servant) + Section 336 BNS (Forgery for Extortion).",
        actionForum: "Police Commissioner / District Magistrate + Urgent Cyber Cell FIR",
        nextStep: "Lodge immediate police complaint against the recovery agency numbers; police do not collect private civil debts."
      },
      no_id_trespass: {
        severity: "Unlawful Trespass & Unauthorized Agency Operation",
        rbiBreach: "Operating without IIBF DRA certificate and official bank Letter of Authority violates mandatory regulatory licensing.",
        penalOffense: "Section 329 BNS (Criminal Trespass) & Section 308 BNS (Extortion Attempts).",
        actionForum: "Emergency Police Dial 112 + Bank Senior Nodal Desk",
        nextStep: "Take photograph of visiting individuals, refuse doorstep entry, and dial 112 if agents refuse to leave."
      }
    };

    return map[selectedViolation] || map.odd_hours;
  }, [selectedViolation, complaintFiledStatus]);

  // Master 8-Module Navigation Structure (52 Sections)
  const navModules = useMemo(() => [
    {
      moduleTitle: "Module 1: Foundations & Definitions",
      links: [
        { id: "intro-rbi-rules", label: "1. Introduction to RBI Rules" },
        { id: "what-are-recovery-agents", label: "2. What Are Recovery Agents?" },
        { id: "who-is-a-recovery-agent", label: "3. Who Is a Recovery Agent?" },
        { id: "role-and-responsibilities", label: "4. Role & Responsibilities" },
      ]
    },
    {
      moduleTitle: "Module 2: Regulatory Guidelines & Operations",
      links: [
        { id: "rbi-guidelines-india", label: "5. RBI Guidelines in India" },
        { id: "rules-on-agent-conduct", label: "6. Rules on Agent Conduct" },
        { id: "guidelines-on-agent-calls", label: "7. Guidelines on Calls" },
        { id: "permitted-prohibited-calling-hours", label: "8. Calling Hours (08:00-19:00)" },
        { id: "rules-on-agent-visits", label: "9. Rules on Agent Visits" },
        { id: "rules-on-agent-communication", label: "10. Rules on Communication" },
      ]
    },
    {
      moduleTitle: "Module 3: Harassment, Intimidation & Privacy",
      links: [
        { id: "rules-against-harassment", label: "11. Anti-Harassment Rules" },
        { id: "rules-threatening-abusive-language", label: "12. Threatening & Abusive Language" },
        { id: "rules-contacting-family-friends", label: "13. Contacting Family & Friends" },
        { id: "rules-contacting-employers", label: "14. Contacting Employers & Colleagues" },
        { id: "rules-privacy-confidentiality", label: "15. Privacy & Confidentiality" },
        { id: "guidelines-agent-identification", label: "16. Agent Identification Norms" },
      ]
    },
    {
      moduleTitle: "Module 4: Bank Liability & Debt-Specific Directives",
      links: [
        { id: "banks-responsibility", label: "17. Bank's Legal Responsibility" },
        { id: "can-banks-be-held-responsible", label: "18. Holding Banks Accountable" },
        { id: "rbi-rules-credit-card-recovery", label: "19. Credit Card Recovery Rules" },
        { id: "rbi-rules-personal-loan-recovery", label: "20. Personal Loan Recovery Rules" },
        { id: "rbi-rules-digital-loan-recovery", label: "21. Digital App Loan Recovery" },
        { id: "rbi-rules-third-party-agencies", label: "22. Third-Party Recovery Agencies" },
        { id: "rules-agent-training-conduct", label: "23. Agent Training & Certification" },
        { id: "recovery-agent-code-of-conduct", label: "24. Official Code of Conduct" },
      ]
    },
    {
      moduleTitle: "Module 5: Boundaries: What Agents Can & Cannot Do",
      links: [
        { id: "what-recovery-agents-cannot-do", label: "25. What Agents Cannot Do" },
        { id: "what-recovery-agents-can-legally-do", label: "26. What Agents Can Legally Do" },
        { id: "harassment-violation-checker", label: "⚡ Diagnostic Violation Tool" },
        { id: "can-agents-visit-home-workplace", label: "27. Home & Workplace Visits" },
        { id: "can-agents-call-family-members", label: "28. Calling Family Members" },
        { id: "can-agents-contact-employer", label: "29. Contacting Your Employer" },
        { id: "can-agents-threaten-abuse-borrowers", label: "30. Threatening or Abusing Borrowers" },
        { id: "can-agents-use-police-legal-threats", label: "31. Police & Fake Legal Threats" },
        { id: "can-agents-seize-property", label: "32. Property Seizure Legality" },
        { id: "can-agents-force-immediate-payment", label: "33. Forcing Immediate Payment" },
      ]
    },
    {
      moduleTitle: "Module 6: Borrower Defense & Action Plan",
      links: [
        { id: "rights-of-borrowers", label: "34. Borrower Statutory Rights" },
        { id: "what-to-do-if-agent-harasses", label: "35. Immediate Steps When Harassed" },
        { id: "how-to-respond-to-agent-calls", label: "36. Handling Tele-Calling Calls" },
        { id: "how-to-handle-agent-visits", label: "37. Handling Home & Office Visits" },
        { id: "evidence-to-collect", label: "38. Critical Evidence to Collect" },
        { id: "how-to-record-document-misconduct", label: "39. Recording & Documenting Proof" },
      ]
    },
    {
      moduleTitle: "Module 7: Complaint Escalation & Legal Redressal",
      links: [
        { id: "how-to-complain-against-agent", label: "40. How to Complain Against Agents" },
        { id: "how-to-complain-to-bank", label: "41. Escalation to the Bank / NBFC" },
        { id: "rbi-complaint-process", label: "42. RBI Complaint Procedure" },
        { id: "rbi-integrated-ombudsman-scheme", label: "43. RBI Integrated Ombudsman (CMS)" },
        { id: "when-to-approach-police", label: "44. When to Lodge a Police Complaint" },
        { id: "legal-remedies-harassment", label: "45. Legal Remedies & Injunctions" },
        { id: "harassment-consumer-rights", label: "46. Consumer Protection Forum Rights" },
        { id: "harassment-privacy-rights", label: "47. Right to Privacy (Article 21)" },
        { id: "harassment-legal-consequences", label: "48. Penal Penalties on Banks & Agents" },
      ]
    },
    {
      moduleTitle: "Module 8: Scenarios, FAQs & Outlook",
      links: [
        { id: "common-harassment-scenarios", label: "49. Real-World Harassment Scenarios" },
        { id: "faqs-rbi-recovery-rules", label: "50. Comprehensive FAQs" },
        { id: "latest-rbi-rules-updates", label: "51. Latest 2026 RBI Policy Updates" },
        { id: "conclusion-protections", label: "52. Conclusion & Borrower Empowerment" },
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

  // Comprehensive Authoritative Recovery FAQs
  const recoveryFaqs = [
    {
      question: "Are bank recovery agents legally allowed to call me before 8:00 AM or after 7:00 PM?",
      answer: "No. The Reserve Bank of India Master Circular on claims agents in Banks strictly mandates that all claims-related calls must occur strictly between 08:00 AM and 07:00 PM (IST). Calling before 8 AM or after 7 PM is an express RBI violation for which the bank can be penalized by the RBI RBI agents."
    },
    {
      question: "Can a recovery agent contact my parents, spouse, or siblings regarding my personal loan or credit card?",
      answer: "Under RBI fair practice codes and credit rights regulations. Debt debt risk is strictly between the client and the lender. claims agents are by law forbidden from contacting non-guarantor kin. Disclosing unpaid dues to them. Or demanding that they clear your debts."
    },
    {
      question: "What documents must a recovery agent show when visiting my residence?",
      answer: "An agent visiting your home must show an bank photo identity card issued by the claims firm. A valid Letter of formal executed on bank letterhead specifying your account. And proof of Debt claims Agent (DRA) certification issued by the Indian Institute of Banking & Finance (IIBF). If they fail to produce these. You may refuse interaction and report penal trespass."
    },
    {
      question: "Can recovery agents get me arrested or send police to my home for an unpaid loan?",
      answer: "No. no-pledge loan or credit card default due to genuine debt stress is purely a civil contractual matter under Indian law. Police agents have no police area or legal formal to intervene in bank debt claims. And claims agents who impersonate police or threaten arrest commit a serious penal offense under Section 204 of the Bharatiya Nyaya Sanhita."
    },
    {
      question: "Can a bank recovery agent visit my office or workplace?",
      answer: "Under RBI directives. Agents are strictly discouraged from visiting a client's place of jobs. It is permissible only if the client has refused all contact at their residential address or cannot be traced. Agents are strictly prohibited from causing public scenes. Informing colleagues. Or speaking to HR units."
    },
    {
      question: "Can recovery agents take away my vehicle, furniture, or jewelry for an unsecured loan?",
      answer: "No. no-pledge loans and credit cards do not carry any asset mortgage or pledge. claims agents have zero legal right to confiscate own home. Forcible seizure of private items without a formal court court decree amounts to penal robbery and extortion under Section 308/383 BNS."
    },
    {
      question: "Is it legal for me to record calls with recovery agents in India?",
      answer: "Yes, 100% legal. Recording a talk in which you are a participant is fully permissible under Indian proof law and admissible as electronic proof under Bharatiya Sakshya Adhiniyam. 2023. These recordings provide decisive proof when lodging reports with the RBI agents or local police."
    },
    {
      question: "What should I do if a recovery agent uses abusive or threatening language?",
      answer: "Do not abuse them back. Maintain composure. Record the call. Note down the agent's phone number and the exact time. And file an fast written reports to the bank's main loan Nodal agents citing Section 351/352 of Bharatiya Nyaya Sanhita (penal threats). If the threat involves physical violence. Dial 112 to register a police reports."
    },
    {
      question: "Can banks be held responsible if an outsourced third-party agency misbehaves?",
      answer: "Yes. The Reserve Bank of India holds lending institutions vicariously liable for all actions of their outside claims agents. The Supreme Court in ICICI Bank v. Shanti Devi Sharma established that banks cannot employ musclemen and are straight culpable for any abuse committed by their agents."
    },
    {
      question: "How long does a bank have to resolve a recovery agent harassment complaint?",
      answer: "Under RBI customer service regulations. The bank has a legal timeline of 30 days from the date of reports receipt to conduct an internal inquiry and provide a formal written relief. If they fail to reply or reject your reports. You can promptly escalate to the RBI Integrated agents on cms.rbi.org.in."
    },
    {
      question: "How much compensation can the RBI Ombudsman award for recovery harassment?",
      answer: "Under the Reserve Bank - Integrated agents Scheme. The agents has the legal power to award up to ₹1,00,000 to the complainant for mental agony. Loss of time. abuse. In addition to ordering payout of up to ₹20,00,000 for any direct money loss caused by the lender's misconduct."
    },
    {
      question: "Can digital lending apps access my phone contact list or photo gallery to recover loans?",
      answer: "Absolutely not. Under the RBI online Lending rules of September 2022. Lending apps are strictly prohibited from accessing mobile contact lists. Media galleries. Call logs. Or device files. Harassing contacts or circulating morphed images constitutes cyber extortion punishable under Sections 66E and 67 of the Information Technology Act."
    },
    {
      question: "What is a Letter of Authority and why is it mandatory for field agents?",
      answer: "A Letter of formal is an formal legal docket executed by an authorized bank agents assigning a local delinquent account to an empaneled firm. It prevents banned imposters. Rogue claims freelancers. Or scam telecallers from extorting money from vulnerable citizens."
    },
    {
      question: "Can I instruct the bank to communicate only with my lawyer or legal representative?",
      answer: "Yes. Under the lawyers Act of 1961. Every citizen has the constitutional right to be represented by an lawyers. When CredSettle's banking lawyers issue a formal Legal legal help Notice. The bank and its claims firms are by law required to route all contacts through our legal desk."
    },
    {
      question: "What happens if a bank repeatedly violates RBI recovery guidelines?",
      answer: "The Reserve Bank of India has the power under paragraph 2.6 of the Master Circular to impose a complete daily work ban prohibiting the bank from engaging claims agents in that geographical area for a specified period. Alongside issuing multi-crore RBI fines."
    },
    {
      question: "Can a recovery agent demand payment via their personal UPI ID or cash?",
      answer: "Never pay money into a private UPI ID. Mobile wallet. Or cash without a system-generated bank receipt. Legitimate debt payments must be made straight into your registered loan account number or through the bank's formal payment portal."
    },
    {
      question: "What is the role of the Indian Institute of Banking & Finance (IIBF) in recovery?",
      answer: "The IIBF administers the strict Debt claims Agent (DRA) letter check following 100 hours of training in legal rules. Client dignity. ethical claims practices. An agent who has not cleared the IIBF DRA exam cannot lawfully be deployed for field debt claims."
    },
    {
      question: "How does CredSettle protect borrowers against recovery agent harassment?",
      answer: "CredSettle's senior banking lawsuits lawyers step in to safeguard your legal rights. We issue formal legal help Notices under the lawyers Act. Establish direct contact with bank grievance nodal agents. File RBI agents and police reports when needed. And transition harsh claims claims toward honorable. Structured debt settlement."
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
            Master RBI Directives &amp; Legal Rights 2026
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight leading-snug break-words">
            RBI Rules for Recovery Agents in India
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200"> The Master Legal &amp. legal Rights Guide </p>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1"> Know your constitutional and legal rights against claims agent abuse. Understand permitted calling hours (08:00 AM to 07:00 PM). Strict bans on third-party abuse. Police police area limits. And step-by-step steps to file reports with the RBI Integrated agents. </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md active:scale-98 text-center"
            >
              Get Free Case Assessment
            </Link>
            <a
              href="#harassment-violation-checker"
              className="px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm text-white bg-blue-600/40 hover:bg-blue-600/60 border border-blue-400/40 transition-all backdrop-blur-sm active:scale-98 text-center"
            >
              Check Agent Violations
            </a>
          </div>
          <div className="mt-3.5 sm:mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-blue-200/80">
            <span>✓ RBI Master Circular Compliant</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ 100% Legal Harassment Defense</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Senior High-Court Banking Advocates</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'RBI Rules for Recovery Agents', url: '/rbi-rules-for-recovery-agents' }
            ]}
          />
        </div>
      </div>

      {/* Trust & E-E-A-T Signal Banner Matching loan-settlement */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-3 sm:px-4 border-b border-slate-800 text-[11px] sm:text-xs md:text-sm">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-600 text-white font-semibold px-2 py-0.5 rounded text-[10px] sm:text-xs">LEGAL ADVISORY</span>
            <span className="leading-tight">Reviewed by High Court Banking Litigation Advocates &amp; RBI Compliance Specialists</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400 text-[10px] sm:text-xs">
            <span>Last Updated: October 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>RBI Master Circular on Recovery Agents &amp; Fair Practices Code</span>
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
              href="#harassment-violation-checker"
              className="flex-shrink-0 bg-slate-900 hover:bg-slate-800 text-white px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center gap-1 shadow-xs"
            >
              <span>⚡</span>
              <span className="hidden sm:inline">Diagnostic</span>
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
              All 52
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
                    <p className="text-[10px] text-slate-300">52 Master Sections • RBI claims Rules</p>
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
                              onClick={() => {
                                handleLinkClick(link.id);
                                setIsMobileTocOpen(false);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                                activeId === link.id
                                  ? 'bg-blue-600 text-white font-bold'
                                  : 'text-black hover:bg-gray-100'
                              }`}
                            >
                              <span className="truncate">{link.label}</span>
                              {activeId === link.id && <span className="text-[10px]">●</span>}
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

        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 items-start relative">

          {/* Left Column: Categorized Table of Contents (15% Desktop Sticky) */}
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-24 h-[calc(100vh-7rem)] max-h-[calc(100vh-7rem)] flex flex-col space-y-2.5 overflow-hidden z-10">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 flex-1 min-h-0 flex flex-col overflow-hidden max-h-full">
              <div className="flex items-center justify-between border-b pb-2 mb-2 flex-shrink-0">
                <div className="font-bold text-black text-xs">Table of Contents</div>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">52</span>
              </div>

              <div className="space-y-2.5 flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar max-h-full">
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
                <div className="font-bold text-xs text-white">Harassment Help</div>
              </div>
              <p className="text-[10px] text-blue-200 mb-2 leading-snug"> fast legal defense against calls. Doorstep visits. And notices. </p>
              <Link
                href="/contact"
                className="block text-center bg-blue-500 hover:bg-blue-400 text-white font-bold text-[11px] py-1.5 px-2 rounded-lg transition-colors shadow"
              >
                Consult Advocate
              </Link>
            </div>
          </aside>

          {/* Middle Column: Master 52-Section Editorial Guide (70% Width) */}
          <div className="lg:w-[70%] flex-1 min-w-0">
            <article className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-sm border border-gray-200/90 space-y-8 sm:space-y-12 overflow-hidden text-black">

              {/* ------------------------------------------------------------- */}
              {/* 1. Introduction to RBI Rules for Recovery Agents              */}
              {/* ------------------------------------------------------------- */}
              <section id="intro-rbi-rules" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 1
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  1. Introduction to RBI Rules for Recovery Agents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Over the past decade. Retail credit in India has skilled an unprecedented growth. Millions of salaried workers. Small firms owners. Gig workers. And middle-class households depend on credit cards. Private loans. cars financing. And online clients lines to manage crises and fund firms initiatives. However. When economic turbulence strikes. Such as sudden job retrenchment. Catastrophic health hospitalization. trade ruin. clients often skill temporary or acute debt delinquency. </p>
                  <p> Under the jurisprudence established by the <strong>Reserve Bank of India (RBI)</strong> and the Constitution of India<strong>loan default due to bona fide money incapacity is strictly a civil contractual matter. it is never a crime</strong>. Regrettably. Banks. Non-banking money firms (NBFCs). And loan apps historically outside debt claims to unregulated claims firms that weaponized coercion: relentless telecalling. Doorstep threats. Character assassination. And defamatory outreach to relatives and workplace employers. </p>
                  <p> To dismantle these predatory practices and protect the fundamental dignity of citizens under Article 21 of the Constitution. The Reserve Bank of India enacted a robust. by law binding RBI regime. Headlined by the <em>Master Circular on claims agents in Banks</em>, the <em>Master Direction on outside work of money Services</em>. the <em>Master Direction DOR.ORG.REC.65/21.04.158/2022-23</em>The central bank established strict. Inviolable boundaries between legitimate debt contact and unlawful penal abuse. </p>
                  <div className="p-4 sm:p-5 bg-blue-50/80 rounded-2xl border border-blue-200 text-xs sm:text-sm text-blue-950 space-y-2.5">
                    <span className="font-bold block text-blue-900 text-sm sm:text-base">Foundational Regulatory Principle (RBI Master Circular):</span>
                    <p className="leading-relaxed"> &quot. Regulated Entities (REs) must strictly ensure that they or their claims agents do not resort to threats or abuse of any kind. Either verbally or physically. Against any person in their debt claims efforts. Including acts intended to humiliate publicly or intrude upon the rights of the debtors&apos. kin, referees. friends.&quot. </p>
                    <p className="text-[11px] sm:text-xs text-blue-800 font-medium">. Mandated under Paragraph 2.4 of RBI Master Circular on claims agents &amp. Master Direction DOR.ORG.REC.65/21.04.158/2022-23. </p>
                  </div>
                  <p> This legal rules applies universally across all <strong>Regulated Entities (REs)</strong>. Including Public Sector Banks. Private banks. Foreign Banks. Small Finance Banks. Local Rural Banks. Co-operative Banks. And all systemically key Non-Banking money firms (NBFCs). Whether you are dealing with a nationalized bank or a online fintech lender. These RBI shields provide you with full legal immunity against threats. </p>
                </div>
              </section>

              {/* Interactive Assessment Funnel - Blended inside Middle Container Above Chapter 2 */}
              <div className="not-prose my-6 sm:my-8 p-3 sm:p-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-slate-50 rounded-2xl border border-blue-100 shadow-xs">
                <InteractiveLeadFunnel className="!bg-transparent !p-0 !py-0 !px-0" />
              </div>

              {/* ------------------------------------------------------------- */}
              {/* 2. What Are Recovery Agents?                                  */}
              {/* ------------------------------------------------------------- */}
              <section id="what-are-recovery-agents" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 2
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  2. What Are Recovery Agents? Role and Structure
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> In the contemporary Indian money architecture<strong>claims agents</strong> (also termed debt claims firms. Loan claims service providers. Or claims trade correspondents) are expert external firm entities. Partnership firms. Or third-party call centers contracted by regulated banks to follow up on late retail credit facilities and assist in the claims of delinquent balances. </p>
                  <p> Because scheduled trade lenders disburse millions of clients loans annually. Branch managers and credit underwriting teams lack the daily work bandwidth to personally contact clients whose accounts slip into delinquency. banks categorize late accounts into progressive risk buckets based on Days Past Due (DPD): </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="text-black block text-xs sm:text-sm font-bold">SMA-0 (1 to 30 Days Overdue)</strong>
                      <p className="text-xs text-black mt-1">Handled via automated SMS reminders. Email records. And internal soft-touch telecalling desks.</p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                      <strong className="text-blue-950 block text-xs sm:text-sm font-bold">SMA-1 (31 to 60 Days Overdue)</strong>
                      <p className="text-xs text-blue-900 mt-1">Assigned to primary outbound telecalling centers and external firm claims desks.</p>
                    </div>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                      <strong className="text-amber-950 block text-xs sm:text-sm font-bold">SMA-2 (61 to 90 Days Overdue)</strong>
                      <p className="text-xs text-amber-900 mt-1">Escalated to expert field investigation teams and doorstep claims firms.</p>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-950 block text-xs sm:text-sm font-bold">NPA (90+ Days Consecutive Default)</strong>
                      <p className="text-xs text-red-900 mt-1">Classified as Non-Performing Asset. allocated to legal claims verticals and hard-claims firms.</p>
                    </div>
                  </div>
                  <p> Once an account enters SMA-1 or SMA-2 classification. The lenders bank typically assigns the portfolio to an outside claims firm on a <strong>success-fee contingency model</strong>. Under these contracts. Firms earn between 5% and 25% of any money recovered from the client. It is precisely this harsh money incentive structure that often tempts unethical agents to violate RBI rules and deploy threats tactics unless restrained by by law informed clients. </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                      <thead className="bg-slate-900 text-white font-semibold">
                        <tr>
                          <th className="p-3">Agency Classification</th>
                          <th className="p-3">Primary Operational Scope</th>
                          <th className="p-3">Statutory Regulatory Mandates</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-3 font-semibold text-black">Telecalling Contact Centers</td>
                          <td className="p-3">Outbound online phone calls. Automated IVR reminders. SMS. And WhatsApp notices for early delinquent accounts (1. 60 DPD).</td>
                          <td className="p-3">TRAI UCC registration. Strict 8 AM to 7 PM calling window. Strict voice recording. And daily frequency caps.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-black">Field Investigation Teams</td>
                          <td className="p-3">In-person residential and trade visits to verify client domicile. Assess debt stress. And deliver formal bank dockets.</td>
                          <td className="p-3">Strict IIBF DRA certification. Police antecedent clearance. Formal bank Letter of formal. And daytime visit rules.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-black">Legal talks Verticals</td>
                          <td className="p-3">Coordinating formal claims relief. Pre-lawsuits settlement conferences. And Lok Adalat OTS deal applications.</td>
                          <td className="p-3">Sections 19. 21 of Legal Services officials Act. 1987. And RBI Master Direction on OTS deals.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 3. Who Is a Recovery Agent?                                   */}
              {/* ------------------------------------------------------------- */}
              <section id="who-is-a-recovery-agent" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 3
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  3. Who Is a Recovery Agent? Mandatory Qualifications
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Under RBI prudential rules. An person cannot simply print visiting cards and claim to be a bank claims agent. The central monetary formal mandates that any person deployed for debt claims must satisfy four strict legal criteria before contacting any client: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li> <strong>strict IIBF Certification (DRA):</strong> Every claims agent must undergo a strict 50-hour (for graduates) or 100-hour (for non-graduates) expert training program administered by the <strong>Indian Institute of Banking &amp. Finance (IIBF)</strong> and clear the formal Debt claims Agent (DRA) check covering banking law. Clients rights. ethical claims conduct. </li>
                    <li> <strong>Police Background Antecedent check:</strong> Regulated lenders must conduct full police background checks through local police officials to ensure that the candidate has no prior penal records. FIRs. charges involving extortion. Physical assault. Extortionate threats. Or moral turpitude. </li>
                    <li> <strong>Individualized Bank Letter of formal:</strong> The agent must carry an authentic. Non-transferable Letter of formal issued on the bank&apos. s formal letterhead. This paper must state the agent&apos. S full name. Firm registration details. Photograph. The local loan account number. And the authorized scope of interaction. Signed by a senior bank agents. </li>
                    <li> <strong>bank Photo Identity Card:</strong> The agent must prominently display an bank ID card displaying their full legal name. Photograph. Firm employer. And the bank division they are authorized to represent. </li>
                  </ul>
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-1.5">
                    <strong className="block text-amber-900 font-bold">Crucial Legal Principle for Borrowers:</strong>
                    <p> If any person visits your premises or calls you demanding loan payment without producing their <strong>IIBF DRA letter Number</strong>, <strong>Valid Bank Identity Card</strong>. <strong>local Letter of formal</strong>They have zero legal standing. In the eyes of the law. They are trespassers and potential imposters attempting extortion under Section 308 of the Bharatiya Nyaya Sanhita (BNS). </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 4. Role and Responsibilities of Recovery Agents               */}
              {/* ------------------------------------------------------------- */}
              <section id="role-and-responsibilities" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 4
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  4. Role and Statutory Responsibilities of Agents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The lawful mandate of a claims agent in India is strictly office and facilitative. claims agents are <strong>not</strong> law enforcement agents. court bailiffs. Or authorized court liquidators. They are purely trade communicators tasked with bridging the dialogue between the lender and the client. </p>
                  <p> Under Paragraph 2 of the RBI Master Circular. Their legal responsibilities are strictly confined to the following lawful functions: </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
                    <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/50 space-y-2">
                      <h4 className="font-bold text-blue-950 text-xs sm:text-sm">Lawful Responsibilities</h4>
                      <ul className="text-xs text-blue-900 space-y-1.5 list-disc pl-4">
                        <li>Informing the client accurately of the total dues and breakdown of rates.</li>
                        <li>Delivering formal letters. Demand notices. And restructuring dockets issued by the bank.</li>
                        <li>Inquiring into the genuine reasons behind default (job loss. health crisis. Trade failure).</li>
                        <li>Documenting customer hardship records and forwarding them to the bank&apos. s credit boards.</li>
                        <li>Assisting the client in scheduling formal settlement meetings at the bank branch.</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl border border-red-200 bg-red-50/50 space-y-2">
                      <h4 className="font-bold text-red-950 text-xs sm:text-sm">Ultra Vires (Unlawful) Actions</h4>
                      <ul className="text-xs text-red-900 space-y-1.5 list-disc pl-4">
                        <li>Demanding cash payments straight into their own hands or private UPI addresses.</li>
                        <li>Threatening penal arrest. Police detention. Or asset seizure without court orders.</li>
                        <li>Disclosing private money details to spouses. Parents. Colleagues. Or neighbors.</li>
                        <li>Entering private bedrooms. Forcing entry. Or refusing to leave when requested.</li>
                        <li>Offering informal. Verbal &quot. discounts&quot. without bank-sanctioned settlement letters.</li>
                      </ul>
                    </div>
                  </div>
                  <p> Understanding this demarcation is essential: an agent cannot unilaterally seize assets. Write off rates. Or initiate penal steps. Any agent attempting to do so is acting beyond their lawful mandate (<em>ultra vires</em>). </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 5. RBI Guidelines for Recovery Agents in India                 */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-guidelines-india" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 5
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  5. RBI Guidelines for Recovery Agents in India
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The RBI architecture governing debt claims in India has evolved through progressive legal notices. Supreme Court judgments. And policy revisions designed to protect clients rights against bank overreach: </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black font-bold block">1. 2007–2008: Supreme Court Intervention &amp; First Master Circular</strong>
                      <p className="text-black"> Following landmark court censure in <em>Manager. ICICI Bank v. Prakash Kaur</em> (2007) and <em>ICICI Bank v. Shanti Devi Sharma</em> (2008). The RBI issued circular DBOD.No.Leg.BC.24/09.07.005/2008-09. This circular made IIBF training compulsory. Mandated police check. Prohibited musclemen. And instituted vicarious debt risk on bank directors. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black font-bold block">2. 2017–2021: Master Directions on Outsourcing of Financial Services</strong>
                      <p className="text-black"> Codified that banks cannot outsource core credit risk decisions. Mandated that outside work pacts must empower the RBI and bank internal audit teams to inspect claims vendor facilities and audit all claims call recordings at any time. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black font-bold block">3. August 12, 2022: Recovery Agents – Additional Due Diligence Circular</strong>
                      <p className="text-black"> Circular DOR.ORG.REC.65/21.04.158/2022-23 established the rigid 08:00 AM to 07:00 PM calling window. Explicitly banned contacting clients&apos. Friends. kin. Or referees. Prohibited threatening messages on social media. And made lenders liable to severe daily work sanctions for vendor misconduct. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black font-bold block">4. September 2022: RBI Guidelines on Digital Lending</strong>
                      <p className="text-black"> Formally banned loan apps (DLAs) and Lending Service Providers (LSPs) from accessing client mobile device data. Including contacts. Photos. Media files. Call logs. precise GPS locations. Made it banned to weaponize private data for loan claims. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black font-bold block">5. 2023–2026: Digital Personal Data Protection Act &amp; Integrated Ombudsman Consolidation</strong>
                      <p className="text-black"> The enactment of the online private Data safety Act. 2023 (DPDP Act) and the consolidation of the RBI Integrated agents Scheme (RB-IOS) have introduced heavy money penalties (up to ₹250 Crores under DPDP) for lenders sharing client data with banned claims telecallers. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 6. RBI Rules on Recovery Agent Conduct                         */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-on-agent-conduct" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 6
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  6. RBI Rules on Recovery Agent Conduct &amp; Ethics
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Under Section 2 of the RBI Master Circular on claims agents. Every interaction between a claims agent and a client must adhere to expert behavioral standards. The central bank has outlined non-negotiable conduct rules: </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <span className="text-blue-600 font-bold text-base">✓</span>
                      <div>
                        <strong className="text-black block text-xs sm:text-sm font-bold">Mandatory Self-Identification:</strong>
                        <span className="text-xs text-black leading-relaxed">
                          The agent must immediately disclose their full legal name, the name of the recovery agency, the creditor bank they represent, and provide their agency ID card upon demand. Concealing identity or impersonating bank officials is strictly prohibited.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <span className="text-blue-600 font-bold text-base">✓</span>
                      <div>
                        <strong className="text-black block text-xs sm:text-sm font-bold">Respect for Customer Privacy and Domicile:</strong>
                        <span className="text-xs text-black leading-relaxed">
                          Discussions regarding debt must be conducted in private. Agents cannot create public scenes, shout across residential corridors, or discuss account details in front of society guards, domestic staff, or neighbors.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <span className="text-blue-600 font-bold text-base">✓</span>
                      <div>
                        <strong className="text-black block text-xs sm:text-sm font-bold">Mandatory Sensitivity to Domestic Distress:</strong>
                        <span className="text-xs text-black leading-relaxed">
                          If a borrower&apos;s family is experiencing bereavement, acute hospitalization, or a major medical emergency, agents are strictly mandated to withdraw immediately, refrain from demanding money, and reschedule communications with appropriate sensitivity.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <span className="text-blue-600 font-bold text-base">✓</span>
                      <div>
                        <strong className="text-black block text-xs sm:text-sm font-bold">Maintenance of Physical Restraint:</strong>
                        <span className="text-xs text-black leading-relaxed">
                          Agents must maintain at least one meter of physical distance, never block doors or exits, never touch the borrower, and immediately exit the home when explicitly requested by the homeowner or tenant.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 7. RBI Guidelines on Recovery Agent Calls                      */}
              {/* ------------------------------------------------------------- */}
              <section id="guidelines-on-agent-calls" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 7
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  7. RBI Guidelines on Recovery Calls &amp; Verification
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Telephonic contact is the single most abused channel in clients debt claims. To curb relentless phone abuse. The Reserve Bank of India. In coordination with the Telecom RBI formal of India (TRAI). Has established binding calling protocols: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li> <strong>Strict Calling Frequency Caps:</strong> Calling a customer repeatedly throughout the day. Such as placing 10. 20. Or 30 calls daily. constitutes electronic stalking and deliberate psychological abuse. Under RBI customer service norms. Excessive calling is treated as an unfair trade practice. </li>
                    <li> <strong>strict Call Recording and Archiving:</strong> Regulated institutions are by law obligated to record and digitally archive all outbound telephonic claims calls placed by internal staff and third-party vendors. These recordings must be preserved for a minimum of one year and produced before the RBI agents upon request. </li>
                    <li> <strong>Ban on Anonymous &amp. Masked Numbers:</strong> Outbound claims calls must originate from checked trade telephone lines registered under TRAI&apos. s 140-series trade telemarketing headers. Using hidden caller IDs. International virtual numbers. Or private mobile SIMs to bypass Truecaller flags is banned. </li>
                    <li> <strong>Prohibition of Robocall Bombing:</strong> Deploying automated interactive voice response (IVR) auto-dialers that flood a client&apos. s phone with steady missed calls or automated threats violates both TRAI UCC regulations and RBI Fair Practice Directives. </li>
                  </ul>
                  <p className="text-xs text-black"> <em>client Right:</em> If a claims center calls you persistently throughout the day. Note down each timestamp. A call log showing repeated calls from the same entity serves as conclusive documentary proof for agents reports. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 8. Permitted and Prohibited Calling Hours                     */}
              {/* ------------------------------------------------------------- */}
              <section id="permitted-prohibited-calling-hours" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 8
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  8. Permitted and Prohibited Calling Hours (08:00-19:00)
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Under Paragraph 2.4(a) of the RBI Master Direction DOR.ORG.REC.65/21.04.158/2022-23. The Reserve Bank of India has established a clear. Non-negotiable legal window for all claims contacts: </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
                    <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-950">
                      <span className="text-2xl block mb-1">⏰</span>
                      <strong className="text-sm sm:text-base font-bold">Permitted Contact Window</strong>
                      <p className="text-xs sm:text-sm mt-1"> <strong>08:00 AM to 07:00 PM (IST)</strong><br /> Calls within this daytime span must remain expert. Courteous. And strictly focused on debt reconciliation. </p>
                    </div>
                    <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50 text-rose-950">
                      <span className="text-2xl block mb-1">🚫</span>
                      <strong className="text-sm sm:text-base font-bold">Prohibited Window (Strictly Illegal)</strong>
                      <p className="text-xs sm:text-sm mt-1"> <strong>Before 08:00 AM &amp. After 07:00 PM</strong><br /> Calling at 07:01 PM. Late night (10:00 PM). Or early morning (06:30 AM) is a direct RBI violation subject to money penalties. </p>
                    </div>
                  </div>
                  <p> The rationale behind this rule is the preservation of domestic tranquility and kin rights. Calls placed after 7:00 PM are presumed to be coercive acts designed to disturb sleep. Cause panic. distress household members. </p>
                  <p className="text-xs text-black"> <em>legal Action:</em> If an agent dials you at 08:30 PM or 06:45 AM. Promptly capture a high-relief screenshot of your incoming call log displaying the caller&apos. s number and exact time. Under the RBI Integrated agents Scheme. A single checked odd-hours call establishes a prima facie breach of RBI conduct. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 9. RBI Rules on Recovery Agent Visits                         */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-on-agent-visits" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 9
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  9. RBI Rules on Home and Workplace Recovery Visits
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> In-person physical doorstep visits represent the most sensitive and potentially confrontational facet of debt claims. To prevent home invasions and breaches of the peace. The Reserve Bank of India mandates strict daily work protocols: </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">1. Customer-Designated Location:</strong>
                      <p className="text-black"> Field visits must occur primarily at the address designated by the client (typically the registered residential address). If the client explicitly indicates that they prefer to meet at an alternative mutually agreed location. such as the bank branch or a nearby office. the claims agent must respect that preference. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">2. Strict Ban on Mob Intimidation:</strong>
                      <p className="text-black"> banks cannot deploy large groups of claims agents to create an intimidating atmosphere. Under RBI operating standards. No more than two authorized agents may visit a client&apos. s premises simultaneously. Sending three. Four. Or more people constitutes unlawful assembly under Section 189 BNS. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">3. Non-Intrusion into Private Living Quarters:</strong>
                      <p className="text-black"> Visiting agents must remain in the public reception room. Drawing room. designated visitor area. They possess zero legal formal to step into bedrooms. Kitchens. private domestic quarters. Refusing to leave upon the host&apos. s request constitutes penal trespass under Section 329 BNS. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">4. Severe Restrictions on Workplace Visits:</strong>
                      <p className="text-black"> Visiting a client&apos. s employer or workplace is strictly prohibited unless the lender establishes that the client has abandoned their registered residence and remains completely unreachable telephonically. Even then. Agents cannot disclose debt details to HR or colleagues. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 10. RBI Rules on Recovery Agent Communication                 */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-on-agent-communication" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 10
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  10. RBI Rules on Written &amp; Verbal Communication
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> legal transparency in debt contact is strict under banking clients safety regulations. All claims notices. Electronic messages. And verbal discussions must adhere to checked standards: </p>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black block font-bold mb-1">1. Mandatory Written Debt Itemization:</strong>
                      <p className="text-black"> Before initiating harsh claims demands. The lenders bank must supply a clear written record detailing: (a) Original main loan Disbursed. (b) Total Repaid. (c) Accrued Normal rates. (d) Penal Charges and Late Fees. And (e) Total Net Claim. Lenders cannot demand arbitrary round sums without written itemization. </p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black block font-bold mb-1">2. Criminal Ban on Fake Legal Notices:</strong>
                      <p className="text-black"> Rogue claims firms often send forged notices titled &quot. Final Police Arrest Docket&quot. , &quot. Court Warrant of Attachment&quot. &quot. Non-Bailable Seizure Notice&quot. complete with fake national emblems or forged court seals. Creating or delivering simulated court papers constitutes penal forgery and extortion under Sections 336. 338. And 308 of the Bharatiya Nyaya Sanhita (BNS). </p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black block font-bold mb-1">3. Digital Messaging Norms (SMS &amp; WhatsApp):</strong>
                      <p className="text-black"> All SMS. WhatsApp. And email contacts must clearly display the registered bank name of the lender. The local loan reference number. And formal bank customer care contacts. Threatening language. Offensive emojis. Or countdown timers threatening police case are strictly barred. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 11. RBI Rules Against Harassment and Intimidation             */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-against-harassment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 11
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  11. RBI Rules Against Harassment, Coercion, and Intimidation
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The Reserve Bank of India maintains an unyielding. Zero-tolerance doctrine regarding client abuse in debt claims. Under Paragraph 2.4 of the Master Circular on claims agents in Banks and Master Direction DOR.ORG.REC.65/21.04.158/2022-23. Abuse is broadly defined and strictly penalized: </p>
                  <p> Regulated Entities (REs) must ensure that neither their internal staff nor contracted claims firms resort to threats or abuse of any kind. Whether verbal or physical. Against any person in their debt claims efforts. Debt claims must operate strictly within the bounds of civil contract law. The moment coercion is applied. The action becomes a crime. </p>
                  <div className="p-4 sm:p-5 bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl space-y-2.5 text-rose-950">
                    <strong className="block font-bold text-xs sm:text-sm md:text-base">Expressly Prohibited Forms of Harassment Under RBI Mandates:</strong>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm">
                      <li>Use of threatening gestures. harsh physical posturing. Or menacing verbal bullying.</li>
                      <li>Staging sit-ins. Dharnas. Or banned assemblies outside a customer&apos. s residence or trade premises.</li>
                      <li>Refusing to vacate the customer&apos. s home promptly when explicitly requested to leave by the occupants.</li>
                      <li>Repeatedly sounding horns. Shouting private names. Or creating public spectacles in housing societies to induce public humiliation.</li>
                      <li>Shadowing, stalking. following a client. Their spouse. Or their children during daily commutes.</li>
                      <li>Calling neighbors. Residential pledge guards. Or landlords to broadcast the client&apos. s debt distress.</li>
                    </ul>
                  </div>
                  <p> Under Indian penal law. Acts of physical threats. Menacing posturing. And public humiliation are punishable under Sections 351 (penal threats). 352 (Intentional Insult to Provoke Breach of Peace). And 189 (Unlawful Assembly) of the <strong>Bharatiya Nyaya Sanhita. 2023 (BNS)</strong>. clients facing such abuse are entitled to register fast police reports alongside escalating to the RBI RBI agents. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 12. RBI Rules on Threatening or Abusive Language              */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-threatening-abusive-language" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 12
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  12. RBI Rules on Threatening, Profane, or Abusive Language
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Verbal abuse. Profanity. Character assassination. And menacing threats over the phone or in person are outright penal offenses under Indian penal law. The RBI Master Circular explicitly mandates that claims personnel must maintain complete behavioral restraint. Civil decorum. And courtesy at all times. </p>
                  <p> claims telecallers often resort to high-decibel shouting. Degrading insults. And threats of social ruin to panic clients into liquidating assets or borrowing from loan sharks. The legal rules provides clear legal remedies against each category of verbal transgression: </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">1. Derogatory, Abusive &amp; Obscene Language (Section 352 BNS):</strong>
                      <p className="text-black"> Using foul language. Slurs against kin. Or sexually suggestive remarks constitutes an offense under Section 352 BNS (intentional insult with intent to provoke breach of the peace) and Section 79 BNS (acts intended to outrage the modesty of women). Punishable with rigorous imprisonment. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">2. Criminal Intimidation &amp; Threats of Harm (Section 351 BNS):</strong>
                      <p className="text-black"> Threatening injury to the client&apos. s person, reputation. home. Such as threatening to break limbs. Ruin trade standing. Or cause public disgrace. Attracts imprisonment up to two years under Section 351(2) BNS. Or up to seven years if the threat involves death or grievous hurt. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">3. Admissibility of Electronic Evidence (Section 63 BSA 2023):</strong>
                      <p className="text-black"> Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam. 2023 (BSA)</strong>Audio recordings of abusive calls stored on your smartphone are fully admissible in court and before the RBI agents. When presented with authenticated call recordings. The agents routinely penalizes the lender with payout orders up to ₹1,00,000 for mental agony. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 13. RBI Rules on Contacting Family Members & References       */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-contacting-family-friends" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 13
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  13. RBI Rules on Contacting Family, Friends &amp; References
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> One of the most widespread and damaging claims abuses is contacting parents. Spouses. Siblings. Children. Or crisis references to demand payment for an late debt. The Reserve Bank of India has enacted explicit. Zero-ambiguity prohibitions against this practice: </p>
                  <p> Under the <strong>Doctrine of Privity of Contract</strong> (codified under the Indian Contract Act. 1872). A loan pacts is an exclusive bilateral contract solely between the primary client. Co-clients. And formal legal guarantors who executed the loan pacts. Third parties. Including spouses. Elderly parents. Adult children. Relatives. And social acquaintances. possess <strong>zero legal debt risk</strong> for the client&apos. s debt. </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block text-xs sm:text-sm font-bold">Strict Credit Confidentiality (CICRA Sec 29)</strong>
                      <p className="text-xs text-black leading-relaxed"> Under Section 29 of the Credit Information firms (Regulation) Act. 2005. Disclosing client money details. Loan balances. Or default status to non-guarantor third parties is an explicit legal crime. </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block text-xs sm:text-sm font-bold">Misuse of Application Form References</strong>
                      <p className="text-xs text-black leading-relaxed"> Reference contacts provided during loan onboarding are solely for initial address check. Calling references to demand debt settlement or induce social embarrassment is strictly banned under Paragraph 2.4 of the RBI Master Direction. </p>
                    </div>
                  </div>
                  <p> If an agent contacts your elderly parents or spouse demanding money. The kin can promptly lodge a police reports under Section 308 BNS (Attempt to Commit Extortion) and Section 351 BNS (penal threats) against the claims firm and the bank&apos. s managing director. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 14. RBI Rules on Contacting Employers and Colleagues          */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-contacting-employers" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 14
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  14. RBI Rules on Contacting Employers and Workplace Colleagues
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> claims firms often threaten: <em>&quot. We will call your HR director. Inform your Managing Director. And get you terminated from your job.&quot. </em> This is a coercive. Unlawful threat designed to weaponize livelihood anxiety. Under Indian law and RBI directives. Contacting a client&apos. s employer is strictly prohibited: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li> <strong>penal Defamation (Section 356 BNS):</strong> Publicly or privately maligning an staff&apos. S expert reputation. Circulating false allegations of fraud. Or informing workplace colleagues of a civil debt default constitutes penal defamation punishable with imprisonment up to two years. </li>
                    <li> <strong>Tortious Interference with Livelihood:</strong> Threatening an person&apos. s jobs to extort loan payments violates the constitutional right to livelihood under Article 21. Employers have zero legal debt to entertain third-party claims inquiries for private loans. </li>
                    <li> <strong>Strict RBI Workplace rules:</strong> The RBI Master Circular allows visits or contact with an employer <strong>only</strong> if the client has completely absconded from their residential address and cannot be contacted through any other lawful channel. Even in that extreme scenario. The agent can only inquire about the client&apos. s contact details. they cannot disclose loan figures or default status. </li>
                  </ul>
                  <div className="p-3.5 bg-blue-50 rounded-2xl border border-blue-200 text-blue-950 text-xs sm:text-sm">
                    <strong>Recommended Protective Action:</strong> If a recovery telecaller contacts your company HR or desk line, issue an immediate formal legal Cease-and-Desist Notice through banking advocates, notifying the bank that any further workplace interference will result in an immediate damages claim before the High Court.
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 15. RBI Rules on Privacy and Confidentiality                  */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-privacy-confidentiality" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 15
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  15. RBI Rules on Privacy, Customer Dignity, and Data Protection
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Following the Supreme Court of India&apos. s historic nine-judge constitutional bench ruling in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017 10 SCC 1)</em>, the <strong>Right to rights</strong> is recognized as a fundamental right guaranteed under Article 21 of the Constitution. In the banking realm. Customer rights is protected by both constitutional jurisprudence and legal enactments: </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black font-bold block mb-1">1. Common Law Duty of Secrecy (The Tournier Principle):</strong>
                      <p className="text-black"> Under the foundational banking law doctrine established in <em>Tournier v. National Provincial and Union Bank of England</em>Trade lenders owe an implied contractual duty of absolute secrecy regarding a customer&apos. S account transactions. Balances. And credit standings. Breaching this duty exposes the bank to large civil damages. </p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black font-bold block mb-1">2. Digital Personal Data Protection Act, 2023 (DPDP Act):</strong>
                      <p className="text-black"> Under Sections 6 and 8 of the DPDP Act. 2023. Banks act as Data Fiduciaries. Sharing client private data. Contact lists. Or debt stress records with banned claims telecallers without explicit lawful consent constitutes an actionable breach carrying legal penalties up to <strong>₹250 Crores</strong> imposed by the Data safety Board of India. </p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black font-bold block mb-1">3. Absolute Prohibition of Public Shaming Posters:</strong>
                      <p className="text-black"> Affixing &quot. Defaulter&quot. Posters on housing society noticeboards. Publishing photos of retail clients in local newspapers. Or circulating shaming flyers in residential colonies is an unlawful breach of rights prohibited by High Court rulings across India. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 16. RBI Guidelines on Recovery Agent Identification           */}
              {/* ------------------------------------------------------------- */}
              <section id="guidelines-agent-identification" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 16
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  16. RBI Guidelines on Recovery Agent Identification Protocols
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Whenever a claims agent initiates contact. whether in person or via telephone. legal identification check must take place before any substantive loan discussion. clients must never entertain unidentified callers or visitors: </p>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full text-left text-xs sm:text-sm border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                      <thead className="bg-slate-900 text-white font-semibold">
                        <tr>
                          <th className="p-3">Mandatory Identification Credential</th>
                          <th className="p-3">Statutory Verification Requirement</th>
                          <th className="p-3">Borrower Legal Remedy If Missing</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-3 font-semibold text-black">formal Bank Letter of formal</td>
                          <td className="p-3">Must name the agent. Firm. Client account number. And date of issue on bank letterhead signed by AGM/DGM.</td>
                          <td className="p-3 text-red-600 font-semibold">Refuse interaction &amp. report trespass under Sec 329 BNS.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-black">bank Photo ID Card</td>
                          <td className="p-3">Laminated badge displaying firm logo. Agent photograph. Staff code. And issuing bank division.</td>
                          <td className="p-3 text-red-600 font-semibold">Photograph badge &amp. verify via bank customer care helpline.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-black">IIBF Debt claims letter (DRA)</td>
                          <td className="p-3">Valid DRA letter number confirming completion of strict 50/100-hour expert banking training.</td>
                          <td className="p-3 text-red-600 font-semibold">Challenge agent competence before RBI RBI agents.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-black">state Photo ID (Aadhaar / Voter ID)</td>
                          <td className="p-3">formal state identity paper matching the name on the firm badge and Letter of formal.</td>
                          <td className="p-3 text-red-600 font-semibold">Refuse entry. report imposter to local police via 112.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-black"> <em>strict Protocol:</em> You are by law entitled to photograph these credentials using your smartphone before engaging in any dialogue. If the agent hesitates or refuses to present credentials. Close the door promptly. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 17. Bank's Responsibility for Recovery Agents                 */}
              {/* ------------------------------------------------------------- */}
              <section id="banks-responsibility" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 17
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  17. Bank&apos;s Legal &amp; Vicarious Liability for Agents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> A foundational legal principle established by the Reserve Bank of India and Indian courts is the doctrine of <strong>vicarious debt risk</strong> (<em>Respondeat Superior</em>). banks cannot escape accountability for abusive debt claims by claiming that third-party claims firms are &quot. independent contractors&quot. </p>
                  <p> Under Paragraph 2.1 of the RBI Master Circular on claims agents: <em>&quot. Banks are advised that they. As the principals. Are responsible for the actions of their agents. Hence. In cases where a bank engages claims agents for claims of dues. It is appropriate that banks ensure that the agents adhere to the rules.&quot. </em> </p>
                  <p> This legal doctrine establishes three fundamental legal protections for clients: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Direct bank Culpability:</strong> If a claims firm agent abuses a client. The bank is by law deemed to have committed that abuse itself.</li>
                    <li><strong>Board-Level Accountability:</strong> Bank managing directors and nodal agents are straight answerable to RBI bodies for systemic vendor misconduct.</li>
                    <li><strong>Joint and Several Civil debt risk:</strong> In clients court damages claims. Both the claims firm and the main loan bank are jointly liable to pay money payout.</li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 18. Can Banks Be Held Responsible for Misconduct?             */}
              {/* ------------------------------------------------------------- */}
              <section id="can-banks-be-held-responsible" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 18
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  18. Can Banks Be Held Liable for Agent Misconduct?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The Supreme Court of India and High Courts have consistently held trade lenders strictly accountable for strong-arm claims tactics. Delivering landmark rulings that form the bedrock of clients defense: </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-1.5">
                      <strong className="text-blue-950 block font-bold text-sm">Supreme Court: ICICI Bank v. Shanti Devi Sharma (2008 7 SCC 532):</strong>
                      <p className="text-blue-900 leading-relaxed"> In this tragic case. Claims agents deployed by the bank subjected a two-wheeler client to extreme public humiliation. This leading to suicide. The Supreme Court delivered a historic rebuke: </p>
                      <blockquote className="border-l-2 border-blue-400 pl-3 italic text-blue-900 my-1">
                        &quot;We are governed by a rule of law in the country. The recovery of loans or the seizure of vehicles could be done only through legal means. Banks cannot employ muscle men or recovery agents to take the law into their own hands.&quot;
                      </blockquote>
                      <p className="text-blue-950 font-medium">The Apex Court upheld penal steps against the bank&apos. s senior executives for abetment.</p>
                    </div>

                    <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl space-y-1.5">
                      <strong className="text-indigo-950 block font-bold text-sm">Supreme Court: Manager, ICICI Bank Ltd. v. Prakash Kaur (2007 2 SCC 711):</strong>
                      <p className="text-indigo-900 leading-relaxed"> The Supreme Court firmly ruled that banks cannot repossess hypothecated cars on highways or at night through force: </p>
                      <blockquote className="border-l-2 border-indigo-400 pl-3 italic text-indigo-900 my-1">
                        &quot;In a country governed by the rule of law, no one—including financial institutions—can be permitted to use muscle power to recover debts. Repossession must strictly follow due judicial process.&quot;
                      </blockquote>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 19. RBI Rules for Recovery of Credit Card Dues                */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-rules-credit-card-recovery" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 19
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  19. RBI Rules for Credit Card Dues Recovery (2022)
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Under the <em>RBI Master Direction. Credit Card and Debit Card. Issuance and Conduct Directions. 2022 (Updated 2024)</em>expert clients safeguards govern revolving credit card calls: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li> <strong>legal Standstill on Disputed Billing Transactions:</strong> If a cardholder lodges a formal claims regarding banned transactions. Billing errors. excessive rates calculation. The card issuer is by law barred from pursuing claims on the disputed balance until a formal investigation is concluded. </li>
                    <li> <strong>Prohibition of Anonymous Telecalling:</strong> claims agents cannot conceal their identity. Use caller ID spoofing. Or contact cardholders under false pretenses such as &quot. Courier check agents&quot. or &quot. Tax Inspector&quot. </li>
                    <li> <strong>Complete Billing Itemization Requirement:</strong> During talks. Card issuers must furnish a full record bifurcating the original merchant transaction main loan from finance charges. Late payment penalties. GST fees. </li>
                    <li> <strong>Right to Formal settlement Sanction Letter:</strong> Oral assurances given by claims telecallers have zero validity. Any settlement pacts must be executed via an formal bank-generated settlement docket issued from the card issuer&apos. s registered domain. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 20. RBI Rules for Personal Loan Recovery Agents               */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-rules-personal-loan-recovery" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 20
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  20. RBI Rules for Personal Loan Recovery Agents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> no-pledge private term loans carry fixed monthly Equated Monthly Installments (EMIs). When non-payment occurs due to salary reduction. Layoff. firms cash-flow distress. claims agents often attempt banned pressure tactics: </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">Civil Nature of Personal Loan Defaults:</strong>
                      <p className="text-black"> Defaulting on an no-pledge private loans is strictly a breach of contract under the Indian Contract Act. 1872. The lender&apos. s lawful recourse is filing a civil summary suit under Order 37 of the Code of Civil steps (CPC) or petitioning before Lok Adalat. Police agents have no police area over civil private loans defaults. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">Prohibition of Forced Instrument Execution:</strong>
                      <p className="text-black"> claims agents are strictly barred from coercing a client into executing fresh blank cheques. Signing promissory notes under duress. Or surrendering home title deeds during doorstep visits. </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">Distinction from NACH / Cheque Bounce (Sec 25 PSSA &amp; Sec 138 NI Act):</strong>
                      <p className="text-black"> While dishonor of an electronic NACH mandate or cheque can trigger legal legal notices under Section 25 of the Payment and settlement Systems Act (PSSA) or Section 138 of the Negotiable Instruments Act (NI Act). This is a court process adjudicated only by a court Magistrate. claims agents cannot issue warrants. Conduct arrests. Or act as court bailiffs. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 21. RBI Rules for Digital Loan Recovery Agents                */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-rules-digital-loan-recovery" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 21
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  21. RBI Rules for Digital Loan Recovery Agents &amp; FinTech Apps
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> In September 2022. The Reserve Bank issued landmark <strong>rules on online Lending</strong> (DOR.CRE.REC.66/21.07.001/2022-23) to eliminate predatory online lending applications and cyber abuse: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li> <strong>Total Ban on Contact List &amp. Gallery Scraping:</strong> loan apps (DLAs) and Lending Service Providers (LSPs) are categorically forbidden from requesting access to the client&apos. S phone contact list. Photo gallery. Call logs. biometric files. Only one-time camera access for KYC check is permitted. </li>
                    <li> <strong>penal Cyber Extortion Penalties:</strong> Circulating morphed pictures. Sending defamatory WhatsApp blasts to contacts. Or threatening to post private photos constitutes cyber extortion under Sections 66E and 67 of the Information Technology Act. 2000. And Section 308 BNS. Triggering non-bailable FIRs. </li>
                    <li> <strong>strict Regulated Entity Alignment:</strong> app loans claims must be conducted only on behalf of licensed Scheduled Banks or registered NBFCs. Unlicensed Chinese loan apps or banned APK applications operate outside the law and can be reported straight to cybercrime portals. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 22. RBI Rules for Third-Party Recovery Agencies              */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-rules-third-party-agencies" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 22
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  22. RBI Rules for Third-Party Recovery Agencies
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Under central bank governance norms. Regulated lending institutions must enforce strict supervisory oversight and due diligence over third-party claims vendors: </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black block font-bold mb-1">Public Agency Roster:</strong>
                      <p className="text-black"> Every bank and NBFC must publish an up-to-date directory of all empaneled claims firms on their formal website. Detailing firm legal names. Registered addresses. And local police areas. </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black block font-bold mb-1">Quarterly Compliance Audits:</strong>
                      <p className="text-black"> Lenders must conduct quarterly compliance audits of firm call centers. Reviewing recorded phone calls. Training logs. Customer grievance tickets. And police check dockets. </p>
                    </div>
                  </div>
                  <p> If an firm grows multiple checked clients abuse reports. The bank is obligated to terminate the outside work pacts promptly and de-empanel the firm from future banking mandates. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 23. RBI Rules on Training and Certification                   */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-agent-training-conduct" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 23
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  23. RBI Rules on Agent Training &amp; Certification
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The Reserve Bank mandates that every person deployed for debt claims must undergo structured expert training and clear the <strong>Debt claims Agent (DRA) letter course</strong> administered by the Indian Institute of Banking &amp. Finance (IIBF). </p>
                  <p> The curriculum includes 100 hours of pedagogical training for non-graduates (50 hours for graduates) covering clients rights. Ethical contact. Fair debt claims practices. Legal boundaries. rights safety. Deploying uncertified personnel is an actionable RBI infraction. </p>
                  <p> The training focuses on: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Understanding client psychological vulnerability and handling genuine hardship with empathy.</li>
                    <li>Strict adherence to permitted calling hours (08:00 AM to 07:00 PM) and rights norms.</li>
                    <li>Clear explanation of money records without applying misleading legal threats.</li>
                    <li>Legal compliance with the Banking Regulation Act. 1949. Clients safety Act. 2019.</li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 24. Recovery Agent Code of Conduct                            */}
              {/* ------------------------------------------------------------- */}
              <section id="recovery-agent-code-of-conduct" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 24
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  24. IBA Code of Conduct for Debt Recovery Agents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> In addition to binding Reserve Bank circulars. All public and private banks subscribe to the <strong>Model Code of Conduct for claims agents</strong> formulated by the Indian Banks&apos. Association (IBA). </p>
                  <div className="p-4 sm:p-5 bg-slate-900 text-white rounded-2xl sm:rounded-3xl space-y-2.5 text-xs sm:text-sm">
                    <strong className="block text-blue-400 font-bold text-sm sm:text-base">Core Tenets of the IBA Model Code:</strong>
                    <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                      <li><strong>Customer Dignity:</strong> Treat every debtor with expert courtesy. Patience. And respect regardless of delinquency duration.</li>
                      <li><strong>Transparency:</strong> Never mislead a customer regarding the legal consequences of non-payment or create false legal urgency.</li>
                      <li><strong>Non-Intrusion:</strong> Never damage home. Enter private living quarters without consent. Or refuse to vacate upon request.</li>
                      <li><strong>rights Preservation:</strong> Never disclose debt balances or debt stress to any person other than the client and authorized co-signers.</li>
                      <li><strong>fast Accounting:</strong> Provide instantaneous. Bank-generated receipts for any payment received toward loan settlement.</li>
                    </ul>
                  </div>
                  <p> When lodging formal grievances with bank chairpersons or RBI ombudsmen. Citing local breaches of the IBA Model Code provides decisive documentary weight to your case. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 25. What Recovery Agents Cannot Do                            */}
              {/* ------------------------------------------------------------- */}
              <section id="what-recovery-agents-cannot-do" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 25
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  25. What Recovery Agents Cannot Do: Prohibited Actions
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> For quick reference and legal enforcement. Here is the exhaustive. Authoritative catalog of actions that claims agents are <strong>strictly barred</strong> from performing under Indian law. The Banking Regulation Act. 1949. And binding Reserve Bank of India directives: </p>
                  <p> The moment a claims agent engages in any of the prohibited behaviors listed below. They forfeit their lawful standing as an authorized agent of a regulated bank. Their actions transition from trade contact into actionable RBI non-compliance and penal offenses: </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-red-50/70 border border-red-200 rounded-2xl space-y-2">
                      <strong className="text-red-950 font-bold block text-sm">Communications, Telecalling &amp; Timing Bans</strong>
                      <ul className="text-red-900 space-y-1.5 list-disc pl-4 text-xs sm:text-sm">
                        <li>Calling before 08:00 AM or after 07:00 PM under any hardships.</li>
                        <li>Spamming with excessive. Steady calls (call-bombing 10+ times daily).</li>
                        <li>Using masked caller IDs. Spoofed numbers. Or private numbers to evade Truecaller.</li>
                        <li>Using foul. Abusive. Casteist. Communal. Or sexually suggestive remarks.</li>
                        <li>Calling kin. Elderly parents. Spouses. Children. Or friends.</li>
                        <li>Sending threatening SMS. WhatsApp messages. Or countdown timer ultimatums.</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50/70 border border-red-200 rounded-2xl space-y-2">
                      <strong className="text-red-950 font-bold block text-sm">Physical Conduct, Coercion &amp; False Legal Claims</strong>
                      <ul className="text-red-900 space-y-1.5 list-disc pl-4 text-xs sm:text-sm">
                        <li>Visiting a client&apos. s workplace or employer to cause public humiliation.</li>
                        <li>Threatening police arrest. penal FIRs. Or jail detention for civil loan defaults.</li>
                        <li>Entering private bedrooms. Blocking doorways. Or refusing to exit on request.</li>
                        <li>Seizing furniture. Appliances. cars. Or private items for no-pledge loans.</li>
                        <li>Deploying mobs or more than two agents simultaneously.</li>
                        <li>Demanding cash payments or transfers into private UPI accounts without receipts.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 26. What Recovery Agents Can Legally Do                       */}
              {/* ------------------------------------------------------------- */}
              <section id="what-recovery-agents-can-legally-do" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 26
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  26. What Recovery Agents Can Legally Do: Permitted Acts
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> clients often inquire: <em>&quot. What rights DOES the lenders bank actually have under Indian law?&quot. </em> Regulated banks are entitled to pursue legitimate claims of delinquent funds through civilized. Transparent. by law authorized channels: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li> <strong>Courteous Daytime Reminders:</strong> Placing civil. Expert phone calls between 08:00 AM and 07:00 PM to remind the customer of the late balance and inquire about payment schedules. </li>
                    <li> <strong>formal Written Notices:</strong> Delivering formal demand notices. Loan recall letters. Or restructuring dockets via speed post. Registered post. checked bank email. </li>
                    <li> <strong>checked In-Person Residential Visits:</strong> Visiting the client&apos. S registered residence during daylight hours (08:00 AM to 07:00 PM). Provided the agents prominently display authentic photo IDs and present a valid bank Letter of formal. </li>
                    <li> <strong>Initiating Lawful court Redressal:</strong> Filing summary claims suits under Order 37 of the Code of Civil steps (CPC). Petitioning before National or State Lok Adalats. Or issuing formal legal legal notices under Section 138 of the Negotiable Instruments Act (NI Act) or Section 25 of the Payment and settlement Systems Act (PSSA) for bounced cheques or dishonored NACH mandates. </li>
                    <li> <strong>Reporting to Credit Bureaus:</strong> Accurately transmitting payment delinquency data (SMA-0. SMA-1. SMA-2. NPA. Written-Off) to RBI-licensed credit information firms (CIBIL. Experian. CRIF High Mark. Equifax) in accordance with the Credit Information firms (Regulation) Act. 2005. </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* Interactive Recovery Harassment & Legal Violation Checker     */}
              {/* ------------------------------------------------------------- */}
              <section id="harassment-violation-checker" className="scroll-section scroll-mt-28">
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl border border-indigo-800/60 shadow-xl my-8">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <span>⚡</span> Interactive Regulatory Diagnostic
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">
                    Recovery Harassment Severity &amp; Legal Remedy Checker
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-200 mb-6 leading-relaxed"> Select the local misconduct you are experiencing to determine which RBI master directives were breached. Applicable penal statutes under Bharatiya Nyaya Sanhita. And fast legal remedies. </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-bold text-indigo-200 mb-1.5">
                        Violation Category:
                      </label>
                      <select
                        aria-label="Violation Category"
                        value={selectedViolation}
                        onChange={(e) => setSelectedViolation(e.target.value)}
                        className="w-full bg-slate-800 text-white text-xs sm:text-sm rounded-xl px-3 py-2.5 border border-indigo-700/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      >
                        <option value="odd_hours">Calling Before 8 AM or After 7 PM</option>
                        <option value="abuse_threats">Verbal Abuse &amp; Physical Threats</option>
                        <option value="relatives_friends">Calling Family Members &amp; Friends</option>
                        <option value="workplace_visit">Office / Workplace Visit &amp; Defamation</option>
                        <option value="fake_police">Fake Police, FIR &amp; Arrest Threats</option>
                        <option value="no_id_trespass">Visiting Without ID / Refusing to Leave</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-indigo-200 mb-1.5">
                        Lending Institution Type:
                      </label>
                      <select
                        aria-label="Lending Institution Type"
                        value={lenderType}
                        onChange={(e) => setLenderType(e.target.value)}
                        className="w-full bg-slate-800 text-white text-xs sm:text-sm rounded-xl px-3 py-2.5 border border-indigo-700/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      >
                        <option value="commercial_bank">Scheduled Commercial Bank</option>
                        <option value="nbfc">Non-Banking Financial Company (NBFC)</option>
                        <option value="digital_app">Digital Lending App / FinTech Platform</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-indigo-200 mb-1.5">
                        Has Bank Complaint Been Filed?
                      </label>
                      <select
                        aria-label="Has Bank Complaint Been Filed?"
                        value={complaintFiledStatus}
                        onChange={(e) => setComplaintFiledStatus(e.target.value)}
                        className="w-full bg-slate-800 text-white text-xs sm:text-sm rounded-xl px-3 py-2.5 border border-indigo-700/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      >
                        <option value="no">No Complaint Filed Yet</option>
                        <option value="under_30">Filed (Less than 30 Days Ago)</option>
                        <option value="over_30">Filed (Over 30 Days Ago / Rejected)</option>
                      </select>
                    </div>
                  </div>

                  {/* Diagnostic Results Box */}
                  <div className="bg-slate-800/80 rounded-2xl p-4 sm:p-5 border border-indigo-600/50 space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-800/50 pb-3">
                      <div>
                        <span className="text-xs text-indigo-300 block">Severity Level:</span>
                        <span className="text-sm sm:text-base font-extrabold text-rose-400">
                          {violationAnalysis.severity}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-indigo-300 block">Immediate Action Forum:</span>
                        <span className="text-xs sm:text-sm font-bold text-emerald-300">
                          {violationAnalysis.actionForum}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <strong className="text-indigo-200 block mb-1">RBI Circular Directives Breached:</strong>
                        <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-700"> {violationAnalysis.rbiBreach} </p>
                      </div>
                      <div>
                        <strong className="text-indigo-200 block mb-1">Applicable Penal Law Offenses:</strong>
                        <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-700"> {violationAnalysis.penalOffense} </p>
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-indigo-200 flex items-center justify-between">
                      <span>💡 <strong>Next Legal Move:</strong> {violationAnalysis.nextStep}</span>
                      <Link
                        href="/contact"
                        className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs py-1.5 px-3 rounded-lg transition-colors shadow"
                      >
                        Get Advocate Defense
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 27. Can Recovery Agents Visit Your Home or Workplace?          */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-visit-home-workplace" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 27
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  27. Can Recovery Agents Visit Your Home or Workplace?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> <strong>Residential Home Visits:</strong> Permitted ONLY during daylight hours (strictly between 08:00 AM and 07:00 PM). Provided the visiting agents carry their bank photo identity cards and the formal bank Letter of formal. Agents cannot force entry. Must remain in the living room or reception area. And must leave promptly if the client requests a postponement due to an crisis. kin illness. Or distress. </p>
                  <p> <strong>Workplace &amp. Office Visits:</strong> Under Paragraph 2.4 of the RBI Master Direction. Visiting a client&apos. S office. Trade establishment. Or workplace is strictly discouraged. It is permissible <strong>only</strong> under exceptional hardships where the client has completely absconded from their residential address or consistently refuses all telephonic contact. </p>
                  <p> Even in that rare scenario. Visiting an office to publicly humiliate an staff. Create a scene in front of colleagues. Or disclose debt figures to Human Resources violates both the client&apos. s constitutional right to livelihood under Article 21 and constitutes penal defamation under Section 356 BNS. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 28. Can Recovery Agents Call Your Family Members?             */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-call-family-members" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 28
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  28. Can Recovery Agents Call Your Family Members?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> <strong>ABSOLUTELY NOT.</strong> The debt pacts is a private. Confidential bilateral contract solely between the primary client. Co-client. formally signed legal guarantors. </p>
                  <p> Spouses. Aging parents. Children. And siblings are <strong>third parties</strong> in the eyes of the law. Contacting kin to demand money. Discuss loan balances. Or apply emotional pressure is a direct violation of Paragraph 2.4 of the RBI Master Direction and constitutes: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Breach of legal Credit Secrecy:</strong> Punishable under Section 29 of the Credit Information firms (Regulation) Act. 2005.</li>
                    <li><strong>penal threats:</strong> Punishable under Section 351 BNS for causing psychological trauma to uninvolved people.</li>
                    <li><strong>Attempted Extortion:</strong> Punishable under Section 308 BNS when demanding that parents or spouses liquidate their savings for another person&apos. s loan.</li>
                  </ul>
                  <p> kin facing such calls should state firmly: <em>&quot. I am not a party to this loan contract. Do not call this number again. Or I will register an FIR for penal threats.&quot. </em> </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 29. Can Recovery Agents Contact Your Employer?                */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-contact-employer" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 29
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  29. Can Recovery Agents Contact Your Employer?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> <strong>NO.</strong> A lender or claims firm cannot contact your reporting manager. Human Resources (HR) unit. Or firm directors to demand EMI payments or complain about your money status. </p>
                  <p> Unless an staff explicitly executed a voluntary tripartite salary deduction pacts (such as an employer-sponsored firm loans program). The employer has zero role or debt risk in an staff&apos. s private debts. Attempting to disrupt an staff&apos. s job pledge entitles the client to: </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p> <strong>1. penal Defamation Action:</strong> File an fast penal reports under Section 356 BNS against the claims firm and bank nodal agents for maligning your expert reputation. </p>
                    <p> <strong>2. Cease-and-Desist Legal Notice:</strong> Have CredSettle&apos. s banking lawyers serve a formal notice to the bank&apos. S firm headquarters. Holding them vicariously liable for tortious interference with jobs. </p>
                    <p> <strong>3. RBI agents reports:</strong> Seek punitive payout up to ₹1,00,000 for mental abuse and threat to livelihood under the RBI Integrated agents Scheme. </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 30. Can Recovery Agents Threaten or Abuse Borrowers?          */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-threaten-abuse-borrowers" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 30
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  30. Can Recovery Agents Threaten or Abuse Borrowers?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> <strong>STRICTLY banned.</strong> Threatening bodily injury. Using foul profanity. Shouting abusive slurs. Or making insinuations regarding a client&apos. s moral character are penal acts under Indian penal law. </p>
                  <p> Under the <strong>Bharatiya Nyaya Sanhita. 2023 (BNS)</strong>Claims personnel indulging in verbal abuse or threats face severe legal consequences: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Section 351 BNS (penal threats):</strong> Punishable with imprisonment up to two years. Or up to seven years if the threat involves death or grievous harm.</li>
                    <li><strong>Section 352 BNS (Intentional Insult to Provoke Breach of Peace):</strong> Punishable with imprisonment up to two years with fine.</li>
                    <li><strong>Section 79 BNS (Insult to Modesty of a Woman):</strong> Using sexually suggestive language. Vulgar gestures. Or calling female clients at late hours is a <strong>cognizable, non-bailable offense</strong> carrying rigorous imprisonment up to three years.</li>
                  </ul>
                  <p> If an agent uses abusive language. Do not engage in shouting matches. Ensure your call recorder is active. Note the timestamp. And initiate formal legal reports. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 31. Can Recovery Agents Use Police or Legal Threats?          */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-use-police-legal-threats" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 31
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  31. Can Recovery Agents Use Police or Legal Threats?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> claims callers routinely intimidate clients by claiming: <em>&quot. The local police station has registered an FIR against you. And agents will arrive at your home with an arrest warrant within two hours.&quot. </em> </p>
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-950 text-xs sm:text-sm space-y-2">
                    <strong className="block font-bold text-sm">Authoritative Legal Reality in India:</strong>
                    <ul className="list-disc pl-4 space-y-1.5">
                      <li><strong>Zero Police police area in Civil Defaults:</strong> Police agents have zero legal formal to act as debt claims agents or intervene in no-pledge credit card or private loans claims.</li>
                      <li><strong>Impersonation of Public Servant (Section 204 BNS):</strong> Any claims agent who falsely claims to be a police sub-inspector. Crime branch detective. Or court bailiff commits a serious offense punishable with imprisonment under Section 204 BNS (Section 170 IPC).</li>
                      <li><strong>court Process Exclusivity:</strong> Arrest warrants can ONLY be issued by court magistrates following formal trial steps under local legal enactments (such as Section 138 NI Act). Never by a telecaller over the phone.</li>
                    </ul>
                  </div>
                  <p className="text-xs text-black"> <em>Defense plan:</em> Whenever an agent threatens police arrest. Ask them for their Police Station police area. GD (General Diary) entry number. And agents rank. They will almost promptly hang up. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 32. Can Recovery Agents Legally Seize Your Property?                  */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-seize-property" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 32
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  32. Can Recovery Agents Seize Your Property?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> <strong>no-pledge Loans &amp. Credit Cards:</strong> claims agents have <strong>ZERO legal formal</strong> to touch. Confiscate. Or repossess your television. Air conditioner. Jewelry. Electronics. Furniture. Or private two-wheeler/four-wheeler for no-pledge debts. </p>
                  <p> no-pledge credit facilities carry no mortgage. Hypothecation. Or asset pledge. Forcibly confiscating private items without a formal court court decree amounts to penal robbery. Extortion. And penal trespass under Sections 308. 309. And 329 of the Bharatiya Nyaya Sanhita (BNS). </p>
                  <p> <strong>Secured pledge Facilities (Home &amp. Auto Loans):</strong> Even for secured pledge. Repossession must adhere strictly to the <strong>SARFAESI Act, 2002</strong> or court repossession rules: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Lenders must issue a formal 60-day demand notice under Section 13(2) of the SARFAESI Act. Followed by a 30-day seizure notice under Section 13(4).</li>
                    <li>In <em>Manager. ICICI Bank v. Prakash Kaur (2007)</em>The Supreme Court ruled that banks cannot use musclemen to intercept cars on highways or tow cars without prior stock panchnamas.</li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 33. Can Recovery Agents Force You to Pay Immediately?         */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-force-immediate-payment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 33
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  33. Can Recovery Agents Force You to Pay Immediately?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> claims personnel cannot stand menacingly over you. Block your doorway. Or demand that you borrow from relatives. Sell household belongings. Or transfer funds via private UPI handles on the spot. </p>
                  <p> Under Indian contract law. Debt payment must be voluntary and orderly. clients possess the by law protected right to: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Demand an accurate. Up-to-date written record of account itemizing main loan and charges.</li>
                    <li>Consult banking lawsuits lawyers or money counselors before executing any OTS deals.</li>
                    <li>Remit all funds only into registered bank loan account numbers through formal banking gateways. Never into private accounts.</li>
                    <li>Refuse cash handovers unless an instantaneous. Computer-generated counterfoil receipt with bank branding is provided.</li>
                  </ul>
                </div>
              </section>


              {/* ------------------------------------------------------------- */}
              {/* 34. Rights of Borrowers Against Recovery Agent Harassment     */}
              {/* ------------------------------------------------------------- */}
              <section id="rights-of-borrowers" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 34
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  34. Borrower Rights Against Recovery Agent Harassment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Every citizen in India holds enforceable fundamental. Clients. And RBI rights that no bank or claims firm can override: </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block font-bold text-sm">1. Right to Human Dignity (Article 21)</strong>
                      <p className="text-black leading-relaxed"> Article 21 guarantees life with human dignity. Civil money inability cannot be used to humiliate. Insult. Or browbeat an person before kin. Neighbors. Or peers. </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block font-bold text-sm">2. Right to Financial Privacy</strong>
                      <p className="text-black leading-relaxed"> Your debt history is private confidential data. It cannot be broadcast to relatives. Employers. Or society guards without violating legal secrecy laws. </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block font-bold text-sm">3. Right to Legal Representation</strong>
                      <p className="text-black leading-relaxed"> Under Section 30 of the lawyers Act. 1961. You have the right to instruct an lawyers to handle all lenders contacts on your behalf. </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block font-bold text-sm">4. Right to Fair Dispute Redressal</strong>
                      <p className="text-black leading-relaxed"> Access to bank grievance cells. Main loan Nodal agents. And the RBI Integrated agents without paying court filing fees or legal stamp duties. </p>
                    </div>
                  </div>
                  <p> These rights are inalienable. You cannot contract them away. Even if a loan pacts contains fine-print clauses purporting to waive rights. Such clauses are void ab initio under Section 23 of the Indian Contract Act. 1872 as opposed to public policy. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 35. What to Do If a Recovery Agent Harasses You               */}
              {/* ------------------------------------------------------------- */}
              <section id="what-to-do-if-agent-harasses" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 35
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  35. What to Do If a Recovery Agent Harasses You
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> When an agent crosses legal boundaries. Do not panic. Plead. hide. Execute this systematic 4-step crisis defense protocol: </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                    <li> <strong>Maintain Composure &amp. Control Tone:</strong> Do not engage in shouting matches or reciprocate with profanity. Maintain a composed. Assertive tone to deny the agent psychological leverage. </li>
                    <li> <strong>Demand strict Credentials:</strong> State clearly: <em>&quot. Please present your IIBF DRA letter number. Your firm photo ID. And the bank&apos. s Letter of formal for this account.&quot. </em> </li>
                    <li> <strong>Commence Contemporaneous Audio/Video Recording:</strong> Inform the agent: <em>&quot. This talk is being recorded under Section 63 of Bharatiya Sakshya Adhiniyam. 2023 for evidentiary submission to the RBI agents and local police.&quot. </em> Agents often retreat the moment a camera is pointed at them. </li>
                    <li> <strong>Direct Them to Formal Written Channels:</strong> Instruct them: <em>&quot. Any further contact must be delivered in writing via speed post or formal email to my legal agent under the lawyers Act.&quot. </em> </li>
                  </ol>
                  <p> Following this protocol promptly strips rogue agents of their perceived dominance and creates an unshakeable factual record for subsequent legal reports. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 36. How to Respond to Recovery Agent Calls                    */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-respond-to-agent-calls" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 36
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  36. How to Respond to Recovery Agent Calls: Key Scripts
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Use these battle-tested legal scripts when receiving high-pressure claims phone calls across different abuse scenarios: </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs sm:text-sm space-y-2 border border-slate-700">
                      <p className="text-emerald-400 font-bold">// SCENARIO 1: harsh OR ABUSIVE CALLER</p>
                      <p>&quot. Please note that this call is being digitally recorded. State your full legal name. Your firm registration number. And your IIBF DRA letter number.&quot. </p>
                      <p>&quot. I am facing documented economic hardship. I refuse to entertain verbal abuse. Any further abusive calls will result in an fast police reports under Section 352 BNS and an reports to the RBI main loan Nodal agents.&quot. </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs sm:text-sm space-y-2 border border-slate-700">
                      <p className="text-sky-400 font-bold">// SCENARIO 2: THREATENING POLICE ARREST OR LEGAL ACTION</p>
                      <p>&quot. Loan default is purely a civil contractual matter. Police agents have zero police area over civil loans. Impersonating a police agents or making fraudulent claims of arrest warrants is a crime under Section 204 BNS.&quot. </p>
                      <p>&quot. If you have a lawful court claim. Serve a formal summons through the appropriate civil court. Do not call this number again.&quot. </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs sm:text-sm space-y-2 border border-slate-700">
                      <p className="text-amber-400 font-bold">// SCENARIO 3: CALLING RELATIVES OR WORKPLACE</p>
                      <p>&quot. You have unlawfully contacted third parties regarding my private credit account. This is a direct violation of Paragraph 2.4 of the RBI Master Circular and Section 29 of CICRA. I have logged this timestamp and am submitting this recording to the RBI RBI agents and local cyber cell.&quot. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 37. How to Handle Recovery Agent Visits                       */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-handle-agent-visits" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 37
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  37. How to Handle Recovery Agent Visits to Your Home
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> If claims agents arrive at your doorstep. Observe these defensive legal rules: </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li> <strong>Do Not Permit Entry Beyond the Doorstep:</strong> You are not by law obligated to invite claims agents into your living quarters. Speak to them at the doorway or building lobby. </li>
                    <li> <strong>Demand and Photograph Credentials:</strong> Take clear photographs of their firm ID badge and the bank Letter of formal using your phone camera. If they refuse to show credentials. Inform them they are trespassing under Section 329 BNS. </li>
                    <li> <strong>Maintain a Witness:</strong> Have a kin or neighbor present during the interaction. Or record the interaction on video. </li>
                    <li> <strong>crisis Police Dispatch (112):</strong> If agents raise their voices. Stage a commotion. Or refuse to vacate your premises after being instructed to leave. Dial <strong>112</strong> promptly and report penal trespass and breach of the peace. </li>
                  </ul>
                  <p className="text-xs text-black"> <em>Remember:</em> Your home is your constitutional sanctuary. An uninvited visitor who refuses to leave when commanded by the legal resident is committing penal trespass under Section 329 of the Bharatiya Nyaya Sanhita (BNS). </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 38. Evidence to Collect Against Harassment                    */}
              {/* ------------------------------------------------------------- */}
              <section id="evidence-to-collect" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 38
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  38. Evidence to Collect Against Recovery Harassment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> RBI officials like the RBI RBI agents and clients safety Commissions adjudicate cases based on <strong>contemporaneous electronic and documentary proof</strong>. Assembling a rock-solid proof dossier is essential: </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black block font-bold">1. Digital Call Audio Recordings:</strong>
                      <p className="text-black">Preserve unmodified audio files showing exact dates. Call durations. Caller records. And background call-center chatter.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black block font-bold">2. Telecom Call Detail Records (CDR):</strong>
                      <p className="text-black">Screenshots of your incoming mobile call logs proving repeated calls in a single day or calls outside the 8 AM. 7 PM window.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black block font-bold">3. Electronic Messaging Screenshots:</strong>
                      <p className="text-black">High-relief screenshots of WhatsApp texts. SMS messages. Fake arrest notices. Or contacts sent to kin.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black block font-bold">4. CCTV &amp; Doorbell Video Footage:</strong>
                      <p className="text-black">Video footage from society entry gates. Building belts. Or video doorbells showing the agents&apos. Arrival. Number of personnel. And harsh conduct.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 39. How to Record and Document Misconduct                     */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-record-document-misconduct" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 39
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  39. How to Record and Document Recovery Agent Misconduct Legally
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> <strong>Is call recording legal in India?</strong> Yes, 100% legal. Under Indian proof law. Recording a talk in which you are an active participant is fully permissible and admissible as electronic proof under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam. 2023 (BSA)</strong> (formerly Section 65B of the Indian proof Act). </p>
                  <p> To ensure your proof is unimpeachable before the RBI agents or a court Magistrate. Maintain a formal <strong>abuse Incident Dossier</strong> containing: </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>The chronological date. Exact time. And duration of every incoming claims contact.</li>
                    <li>The incoming phone number. Stated agent name. And claims firm employer.</li>
                    <li>Local words spoken. Threats made. Or demands for fast cash payment.</li>
                    <li>The corresponding raw audio file stored in a dedicated secure cloud folder.</li>
                  </ul>
                  <p className="text-xs text-black"> <em>Pro Tip:</em> Do not edit. Trim. Or filter audio recordings. Preserving the raw. Unedited file with original file metadata ensures maximum evidentiary admissibility under Section 63 BSA. </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 40. How to Complain Against a Recovery Agent                  */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-complain-against-agent" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 40
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  40. How to Complain Against a Recovery Agent: 3 Steps
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> When a debt claims agent transgresses legal boundaries. By calling during prohibited nocturnal hours. Hurling verbal profanities. Trespassing upon private premises. Or contacting non-guarantor third parties. the client holds powerful legal recourse. However. Navigating grievance redressal requires strict adherence to the <strong>Reserve Bank of India&apos. s Three-Tier reports Hierarchy</strong>. </p>
                  <p> Filing a reports straight with the RBI RBI agents without first engaging the lending institution&apos. s internal grievance machinery will result in the fast procedural rejection of your petition under Clause 10(1) of the <em>Reserve Bank - Integrated agents Scheme. 2021</em>. To build an unassailable legal case. You must follow the sequential reports ladder: </p>

                  <div className="space-y-4 my-4">
                    {/* Tier 1 */}
                    <div className="p-4 sm:p-5 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider">
                          Tier 1: Internal Bank Grievance
                        </span>
                        <span className="text-[11px] font-bold text-blue-900">Statutory Window: 30 Days</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-blue-950">
                        Branch Manager &amp; Bank Grievance Redressal Officer (GRO)
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-900 leading-relaxed"> Every regulated banks and NBFC is mandated by the RBI to appoint designated Grievance Redressal agents at the branch. Hubs. And local levels. You must lodge a formal written reports with your home branch and the designated local GRO. Attaching documented proof of misconduct (call logs. Audio recordings. WhatsApp transcripts). </p>
                      <div className="text-[11px] text-blue-800 bg-white/70 p-2.5 rounded-xl border border-blue-100">
                        <strong>Mandatory Outcome:</strong> The bank must assign an official grievance tracking docket number within 48 hours and provide a substantive written finding within 30 days.
                      </div>
                    </div>

                    {/* Tier 2 */}
                    <div className="p-4 sm:p-5 bg-indigo-50/70 border border-indigo-200 rounded-2xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 bg-indigo-600 text-white text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider">
                          Tier 2: Apex Corporate Escalation
                        </span>
                        <span className="text-[11px] font-bold text-indigo-900">Escalation Window: 7–10 Days</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-indigo-950">
                        Principal Nodal Officer (PNO) &amp; Customer Care Head
                      </h4>
                      <p className="text-xs sm:text-sm text-indigo-900 leading-relaxed"> If the branch manager or local GRO fails to respond within 7 to 10 days. Or provides an evasive. Dismissive reply defending the outside firm. Escalate the matter promptly to the lender&apos. s apex <strong>main loan Nodal agents (PNO)</strong> at their firm headquarters. The PNO holds direct executive formal over outside vendor empanelment and customer service quality. </p>
                      <div className="text-[11px] text-indigo-800 bg-white/70 p-2.5 rounded-xl border border-indigo-100">
                        <strong>Mandatory Action:</strong> Demand the immediate suspension of field visits, de-allocation of the offending agency, and disclosure of the recovery personnel&apos;s IIBF DRA certification records.
                      </div>
                    </div>

                    {/* Tier 3 */}
                    <div className="p-4 sm:p-5 bg-purple-50/70 border border-purple-200 rounded-2xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 bg-purple-600 text-white text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider">
                          Tier 3: Statutory Regulator Appeal
                        </span>
                        <span className="text-[11px] font-bold text-purple-900">Jurisdiction: Day 31 Onward</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-purple-950">
                        RBI Integrated Ombudsman (CMS Portal: cms.rbi.org.in)
                      </h4>
                      <p className="text-xs sm:text-sm text-purple-900 leading-relaxed"> If 30 calendar days elapse from your Tier 1 reports without a satisfactory written relief. Or if the bank outright rejects your reports while abuse continues. You gain fast legal standing to file an appeal before the <strong>RBI Integrated agents</strong> via the central reports handling System (CMS). </p>
                      <div className="text-[11px] text-purple-800 bg-white/70 p-2.5 rounded-xl border border-purple-100">
                        <strong>Ombudsman Powers:</strong> Can award up to ₹1,00,000 for mental harassment and up to ₹20,00,000 for direct financial damage, while issuing binding regulatory reprimands against the lending entity.
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-gray-100 text-black border-b border-gray-300">
                          <th className="p-3 font-bold">Escalation Tier</th>
                          <th className="p-3 font-bold">Appropriate Forum</th>
                          <th className="p-3 font-bold">Response Window</th>
                          <th className="p-3 font-bold">Key Remedy Available</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-black">
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-blue-900">Tier 1: Branch / GRO</td>
                          <td className="p-3">Home Branch Manager &amp. local Grievance agents</td>
                          <td className="p-3">30 Days</td>
                          <td className="p-3">Firm de-allocation. Stoppage of field visits. Internal inquiry.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-indigo-900">Tier 2: Apex PNO</td>
                          <td className="p-3">main loan Nodal agents (Bank firm Office)</td>
                          <td className="p-3">7. 10 Days</td>
                          <td className="p-3">Direct executive intervention. Blacklisting of firm. Written apology.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-purple-900">Tier 3: RBI agents</td>
                          <td className="p-3">Centralized CMS Portal (cms.rbi.org.in)</td>
                          <td className="p-3">30. 60 Days</td>
                          <td className="p-3">Legal payout (up to ₹1L mental agony). RBI penalties.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-red-900">Parallel: Police / Court</td>
                          <td className="p-3">Local Police Station / court Magistrate / clients Court</td>
                          <td className="p-3">fast</td>
                          <td className="p-3">penal FIR for extortion/trespass. Civil injunction. Punitive damages.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 41. How to Complain to the Bank or Financial Institution      */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-complain-to-bank" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 41
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  41. How to File a Formal Complaint With Bank or NBFC
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> When submitting a grievance to a bank. Informal phone talks with customer care executives are largely futile. Call center agents often close reports as &quot. clarification provided&quot. without initiating substantive inquiry. To establish an unassailable legal paper trail. Your grievance must be served through <strong>Registered Post with Acknowledgment Due (RPAD)</strong> and parallelly transmitted via the bank&apos. s checked main loan Nodal agents email address. </p>
                  <p> Below is an authoritative. by law fortified reports draft developed by senior banking lawsuits attorneys. Mainly tailored to invoke the central bank&apos. s Master Directions: </p>

                  <div className="p-4 sm:p-6 bg-slate-900 text-slate-100 rounded-2xl border border-slate-700 text-xs sm:text-sm font-mono space-y-3 leading-relaxed shadow-lg">
                    <div className="text-amber-400 font-bold border-b border-slate-700 pb-2 text-[11px] sm:text-xs uppercase tracking-wider">
                      FORMAL GRIEVANCE NOTICE (SERVED VIA RPAD &amp; REGISTERED EMAIL)
                    </div>
                    <p>To,<br /> The main loan Nodal agents / Head of Customer Grievance Redressal,<br /> [Name of banks / NBFC],<br /> firm Headquarters / Zonal Office Address: [Insert Address]<br /> Email: [Insert formal PNO Email Address]</p>

                    <p><strong>SUBJECT:</strong> Formal reports Regarding Egregious abuse. Prohibited Calling Hours. And Unlawful Misconduct by outside claims agents. Account No: [Insert Loan / Credit Card Account Number].</p>

                    <p>Dear Sir / Madam,</p>

                    <p>I am writing to register an urgent formal reports regarding serious RBI violations and penal threats committed by claims personnel acting on behalf of your institution regarding the captioned account.</p>

                    <p><strong>1. DETAILS OF OFFENDING CONDUCT &amp. TIMESTAMPS:</strong><br /> On [Insert Date] at [Insert Exact Time. E.g. 09:45 PM]. An person identifying himself as [Insert Agent Name or Unknown Caller] calling from mobile number [Insert Phone Number] contacted the undersigned. During this interaction. The caller used abusive language. Threatened home intrusion. And made false claims of impending police arrest. In clear defiance of the 08:00 AM to 07:00 PM legal calling window mandated by the Reserve Bank of India.</p>

                    <p><strong>2. local RBI VIOLATIONS COMMITTED:</strong><br /> • Paragraph 2.4 of the RBI Master Circular on claims agents in Banks (DBOD.No.Leg.BC.91/09.07.005/2007-08).<br /> • Master Direction. Managing Risks and Code of Conduct in outside work of money Services (RBI/2022-23/108).<br /> • Sections 351. 352. And 79 of the Bharatiya Nyaya Sanhita. 2023 (penal threats and Intentional Insult).<br /> • Supreme Court of India directives in <em>ICICI Bank v. Shanti Devi Sharma (2008)</em> and <em>Prakash Kaur (2007)</em> prohibiting coercive debt claims.</p>

                    <p><strong>3. FORMAL RELIEF SOUGHT WITHIN 7 WORKING DAYS:</strong><br /> i. fast de-allocation of this account from the offending claims firm.<br /> ii. fast cessation of all field visits and prohibited-hour contacts.<br /> iii. Disclosure of the claims firm name. firm address. And IIBF DRA certification details of the caller.<br /> iv. Written confirmation of internal disciplinary steps initiated against the vendor.</p>

                    <p>Please note that if this grievance is not resolved satisfactorily within 30 days. This matter will be escalated to the <strong>RBI Integrated agents (cms.rbi.org.in)</strong>, the <strong>Cyber Crime Cell</strong>. the jurisdictional <strong>clients claims Redressal Commission</strong> holding your bank vicariously liable for all consequential damages.</p>

                    <p>Yours faithfully,<br /> [Your Full Legal Name]<br /> [Registered Mobile Number]<br /> [Registered Residential Address]<br /> Enclosures: Audio Recording Drive Link. Call Log Screenshots. Telecom CDR Dossier.</p>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs sm:text-sm text-amber-950 space-y-1">
                    <strong className="block font-bold">Critical Procedural Instruction:</strong>
                    <p> Always retain the physical postal receipt and obtain the computerized delivery confirmation from the formal India Post tracking portal. In banking lawsuits. The date stamped on the postal acknowledgment card serves as the conclusive legal trigger for calculating the 30-day legal agents countdown. </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 42. RBI Complaint Process Against Recovery Agents              */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-complaint-process" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 42
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  42. RBI Complaint Process: Step-by-Step CMS Portal Guide
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The Reserve Bank of India operates the centralized <strong>reports handling System (CMS)</strong> at <strong>cms.rbi.org.in</strong>. This online platform bypasses local bureaucracy. This provides Indian clients with a direct electronic conduit to hold banks. NBFCs. And primary urban co-operative banks by law accountable. </p>
                  <p> Below is the authoritative. Five-step daily work roadmap for filing a successful RBI reports against claims agent abuse: </p>

                  <div className="space-y-3 sm:space-y-4 my-4">
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Navigate to the Official Portal &amp; Verify Identity</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black pl-8"> Visit <strong>https://cms.rbi.org.in</strong> and select <em>&quot. File a reports&quot. </em>. Enter your registered mobile number to receive an Aadhaar/mobile OTP check. Never use third-party intermediary websites or unofficial grievance portals. </p>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Select the Regulated Entity (Lender Classification)</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black pl-8"> Select the correct bank tier: <em>Scheduled banks (Public or Private)</em>, <em>Non-Banking money firm (NBFC)</em>, <em>Small Finance Bank</em>. <em>Asset Reconstruction firm (ARC)</em>. Enter the local branch name and your loan or credit card account number. </p>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Accurately Classify the Grievance Category</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black pl-8"> Under the primary category drop-down. Select <strong>&quot. Loans and Advances&quot. </strong>. In the sub-category drop-down. Mainly choose <strong>&quot. claims Agent Conduct / abuse / Unfair claims Practices&quot. </strong>. Selecting generic customer service categories will route your reports to standard claims queues instead of the expert agents claims cell. </p>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">4</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Upload the Fortified Evidence Dossier (PDF &amp; Audio)</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black pl-8"> Attach a single full PDF dossier containing: (a) Your Tier 1 reports copy with India Post RPAD delivery proof or bank email acknowledgment ticket. (b) Bank&apos. S unsatisfactory reply or proof that 30 days have elapsed. (c) Telecom CDR call logs. And (d) Transcript of abusive call recordings. Audio files can be uploaded or provided via an authenticated cloud hyperlink. </p>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">5</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Obtain CMS Tracking Number &amp; Monitor Conciliation</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black pl-8"> Upon submission. You receive an formal CMS reports Reference Number (e.g.<em>CMS/2026/XXXXXX</em>). The agents office serves notice upon the bank&apos. S main loan Nodal agents with a strict 14-day legal deadline to furnish its defense. Telecaller records. And internal voice audit files. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 43. RBI Integrated Ombudsman Scheme                           */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-integrated-ombudsman-scheme" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 43
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  43. RBI Ombudsman Scheme (RB-IOS): Powers &amp; Relief
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Notified on November 12. 2021. The <strong>Reserve Bank - Integrated agents Scheme (RB-IOS. 2021)</strong> amalgamated three erstwhile agents schemes (RBI agents Scheme 2006. agents Scheme for NBFCs 2018. And agents Scheme for online Transactions 2019) into a unified. Borderless RBI tribunal operating under the doctrine of <em>&quot. One Nation One agents&quot. </em>. </p>
                  <p> Unlike standard bank grievance desks. The Integrated agents functions as a <strong>quasi-court formal</strong> established under Section 35A of the Banking Regulation Act. 1949. Section 45L of the RBI Act. 1934. And Section 18 of the Payment and settlement Systems Act. 2007. </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 sm:p-5 bg-emerald-50/80 border border-emerald-300 rounded-2xl space-y-2">
                      <div className="inline-block px-2 py-0.5 bg-emerald-700 text-white text-[10px] font-bold rounded-md uppercase">
                        Statutory Remedy 1
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-emerald-950">
                        Compensation for Mental Agony: Up to ₹1,00,000
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed"> Under <strong>Clause 15(3) of the Scheme</strong>The agents holds special legal power to award monetary payout of up to <strong>₹1,00,000 (Rupees One Lakh)</strong> straight to the client for loss of time. Mental anguish. Physical abuse. And emotional distress caused by unlawful claims agent conduct. </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-teal-50/80 border border-teal-300 rounded-2xl space-y-2">
                      <div className="inline-block px-2 py-0.5 bg-teal-700 text-white text-[10px] font-bold rounded-md uppercase">
                        Statutory Remedy 2
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-teal-950">
                        Consequential Loss Damages: Up to ₹20,00,000
                      </h4>
                      <p className="text-xs sm:text-sm text-teal-900 leading-relaxed"> Under <strong>Clause 15(2) of the Scheme</strong>If the claims misconduct resulted in measurable money damage. Such as banned bank account debits. Unlawful home seizure. Loss of jobs due to workplace defamation. Or forced distress sales. the agents can award damages up to <strong>₹20,00,000 (Rupees Twenty Lakhs)</strong>. </p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-2 text-xs sm:text-sm">
                    <strong className="text-black block font-bold">Binding Nature of Ombudsman Awards &amp; Appellate Mechanism:</strong>
                    <p className="text-black"> An Award passed by the RBI agents is <strong>strictly binding upon the lending institution</strong>. The bank has no option to ignore it and must comply within 30 days of the complainant issuing their acceptance. If the bank seeks to challenge the award. It can only file an appeal before the <strong>Executive Director of the Reserve Bank of India</strong> (the designated Appellate formal) within 30 days. But only after satisfying strict conditions. If the complainant is dissatisfied with the payout awarded. They retain complete freedom to reject the award and pursue full damages before the clients Commission or Civil Court. </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 44. When to Approach the Police                               */}
              {/* ------------------------------------------------------------- */}
              <section id="when-to-approach-police" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 44
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  44. When to Approach Police: Criminal vs Civil Disputes
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> One of the most dangerous misconceptions held by debt-stressed citizens is that the police can be called by banks to arrest them for unpaid loans. Under Indian jurisprudence, <strong>defaulting on an no-pledge private loans or credit card is strictly a civil breach of contract</strong> governed by the <em>Indian Contract Act. 1872</em>. It is not an offense under the penal code. And police agents possess zero legal police area to summon clients or mediate debt payments. </p>
                  <p> Conversely. When claims agents cross the threshold into coercive muscle tactics<strong>their actions constitute serious cognizable penal offenses</strong> under the <strong>Bharatiya Nyaya Sanhita. 2023 (BNS)</strong>. You must approach the jurisdictional police station promptly under these five penal scenarios: </p>

                  <div className="space-y-3 my-4">
                    <div className="p-3.5 sm:p-4 bg-red-50/80 border border-red-200 rounded-xl space-y-1">
                      <strong className="text-red-950 font-bold block text-xs sm:text-sm">
                        1. Physical Assault or Use of Criminal Force (Sections 115 &amp; 352 BNS):
                      </strong>
                      <p className="text-xs sm:text-sm text-red-900"> Any physical manhandling. Pushing. Collar-grabbing. Or physically blocking a client from leaving their house or cars constitutes cognizable assault punishable with rigorous imprisonment. </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-red-50/80 border border-red-200 rounded-xl space-y-1">
                      <strong className="text-red-950 font-bold block text-xs sm:text-sm">
                        2. Criminal Trespass &amp; Home Intrusion (Section 329 BNS):
                      </strong>
                      <p className="text-xs sm:text-sm text-red-900"> Entering your private residence without permission. Pushing past kin. Staging a sit-in inside your living room. Or refusing to vacate after being asked to leave constitutes penal house-trespass. </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-red-50/80 border border-red-200 rounded-xl space-y-1">
                      <strong className="text-red-950 font-bold block text-xs sm:text-sm">
                        3. Extortion &amp; Forcible Confiscation of Property (Sections 308 &amp; 383 BNS):
                      </strong>
                      <p className="text-xs sm:text-sm text-red-900"> Forcibly snatching car or two-wheeler keys. Seizing laptops. Mobile phones. Or gold ornaments. Or forcing a client to initiate an on-the-spot UPI transfer under threat of violence constitutes extortion and highway robbery. </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-red-50/80 border border-red-200 rounded-xl space-y-1">
                      <strong className="text-red-950 font-bold block text-xs sm:text-sm">
                        4. Outraging Modesty of Women &amp; Lewd Insults (Section 79 BNS):
                      </strong>
                      <p className="text-xs sm:text-sm text-red-900"> Any lewd remarks. Sexually suggestive threats. Verbal insults. Or harsh posturing directed toward female clients. Mothers. Wives. Or daughters carries strict non-bailable arrest under Indian law. </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-red-50/80 border border-red-200 rounded-xl space-y-1">
                      <strong className="text-red-950 font-bold block text-xs sm:text-sm">
                        5. Personating a Public Servant / Police Officer (Section 204 BNS):
                      </strong>
                      <p className="text-xs sm:text-sm text-red-900"> Agents falsely claiming to be Crime Branch inspectors. CBI agents. court bailiffs. Or displaying fake police stamps on WhatsApp claims notices. Commit severe offenses punishable with up to 3 years imprisonment. </p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-300 rounded-2xl space-y-2 text-xs sm:text-sm">
                    <strong className="text-black block font-bold">Procedural Rights Under Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS):</strong>
                    <ul className="list-disc pl-5 space-y-1 text-black text-xs">
                      <li> <strong>strict FIR Registration (Section 173 BNSS):</strong> When information discloses the commission of a cognizable offense (assault. Extortion. Trespass). The Station House agents (SHO) has no legal discretion and is mandated to register a formal First Information Report (FIR). </li>
                      <li> <strong>reports to SP / DCP (Section 175(3) BNSS):</strong> If the local police station refuses to register an FIR claiming it is a &quot. bank claims&quot. Send a written reports with audio/video proof via Registered Post to the Superintendent of Police (SP) or Deputy Commissioner of Police (DCP). </li>
                      <li> <strong>court Magistrate Application (Section 175(4) BNSS):</strong> If police leadership fails to act. CredSettle’s lawyers file a formal Section 175(4) BNSS application before the local court Magistrate First Class (JMFC) seeking a court order directing the police to lodge an FIR and investigate the bank managers. </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 45. Legal Remedies Against Recovery Agent Harassment           */}
              {/* ------------------------------------------------------------- */}
              <section id="legal-remedies-harassment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 45
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  45. Judicial Legal Remedies: Injunctions, Damages &amp; Quashing
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> When trade lenders cross legal lines. The Indian court system equips clients with powerful civil and constitutional remedies to halt abuse permanently and seek compensatory damages: </p>

                  <div className="space-y-4 my-4">
                    {/* Remedy 1 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-[11px] font-bold rounded-md uppercase">
                        Civil Court Injunction
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-black">
                        Permanent &amp; Temporary Injunction Under Order 39 Rules 1 &amp; 2 CPC
                      </h4>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> clients facing persistent doorstep threats can file a Civil Suit before the City Civil Court or Senior Civil Judge seeking a <strong>Permanent Injunction</strong> restraining the bank. Its directors. Branch managers. Claims firms. And freelance telecallers from visiting the client&apos. S residence. Office. Or contacting kin. Courts routinely grant ad-interim ex-parte injunctions prohibiting lenders from deploying field agents within a 500-meter radius of the client&apos. s home. </p>
                    </div>

                    {/* Remedy 2 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-[11px] font-bold rounded-md uppercase">
                        Tortious Damages Suit
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-black">
                        Civil Suit for Damages for Defamation &amp; Intentional Infliction of Distress
                      </h4>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Under Indian tort law. A lender that damages a citizen&apos. S social reputation by shouting in residential societies. Informing office employers. Or circulating WhatsApp messages can be sued for <strong>large Tortious Damages</strong>. Indian courts have awarded damages ranging from ₹5 Lakhs to ₹50 Lakhs for mental anguish. Loss of livelihood. And loss of dignity resulting from unlawful claims. </p>
                    </div>

                    {/* Remedy 3 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-[11px] font-bold rounded-md uppercase">
                        Advocates Act Representation
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-black">
                        Formal Legal Representation Notice Under Advocates Act, 1961
                      </h4>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Under Section 30 of the <em>lawyers Act, 1961</em>An enrolled lawyers has the legal right to represent clients across all forums. When CredSettle’s banking lawsuits lawyers serve a formal <strong>Legal legal help &amp. Cease-and-Desist Notice</strong> upon the bank. The lender is by law mandated to direct all future correspondence solely to the lawyers’s chamber. Any subsequent claims agent visit or harassing call straight to the client constitutes contempt and actionable abuse. </p>
                    </div>

                    {/* Remedy 4 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <span className="px-2.5 py-1 bg-rose-100 text-rose-800 text-[11px] font-bold rounded-md uppercase">
                        High Court Constitutional Remedy
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-black">
                        Writ Petition Under Article 226 of the Constitution of India
                      </h4>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Where public sector banks or major private lenders violate fundamental human rights through organized musclemen. Clients can petition their state High Court under Article 226 for a <strong>Writ of Mandamus</strong> directing the Reserve Bank of India to enforce its Master Circulars and hold the bank&apos. s managing director personally liable for contempt of constitutional liberty. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 46. Consumer Rights Protection                                */}
              {/* ------------------------------------------------------------- */}
              <section id="harassment-consumer-rights" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 46
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  46. Recovery Harassment and the Consumer Protection Act, 2019
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> The enactment of the <strong>Clients safety Act. 2019 (CPA 2019)</strong> transformed debt claims lawsuits in India. Under Section 2(7) of the Act. Any person who avails banking. Credit card. Or money loan services is a legal <strong>&quot. clients&quot. </strong>And banking institutions are classified as service providers under Section 2(42). </p>
                  <p> Coercive. Humiliating. Or unlawful debt claims is recognized under clients law as both a <strong>&quot. Deficiency in Service&quot. </strong> under Section 2(11) and an <strong>&quot. Unfair Trade Practice&quot. </strong> under Section 2(47). </p>

                  <div className="p-4 sm:p-5 bg-blue-50/60 border border-blue-200 rounded-2xl space-y-3 my-3">
                    <h4 className="font-bold text-blue-950 text-sm sm:text-base">
                      Why Consumer Commissions Are Devastating for Errant Banks:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-blue-900">
                      <li> <strong>Vicarious debt risk Without Exception:</strong> clients forums hold banks 100% liable for the actions of their outside claims firms. Rejecting defenses that the agent was an &quot. independent contractor&quot. </li>
                      <li> <strong>Punitive Damages for Mental abuse:</strong> areas clients Commissions regularly award damages between ₹50,000 to ₹10,00,000 for mental agony. Defamation. And lawsuits costs against trade lenders. </li>
                      <li> <strong>Order of Public Apology &amp. Debt Waiver:</strong> In severe cases of persistent abuse. Clients Commissions have ordered lenders to issue full written apologies and write off large portions of disputed late fees and extra fees. </li>
                    </ul>
                  </div>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-gray-100 text-black border-b border-gray-300">
                          <th className="p-3 font-bold">Consumer Commission Tier</th>
                          <th className="p-3 font-bold">Pecuniary Jurisdiction</th>
                          <th className="p-3 font-bold">Standard Resolution Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-black">
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-blue-900">areas clients claims Redressal Commission (DCDRC)</td>
                          <td className="p-3">Claims up to ₹50 Lakhs</td>
                          <td className="p-3">3 to 6 Months (Fast-Tracked)</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-indigo-900">State clients claims Redressal Commission (SCDRC)</td>
                          <td className="p-3">Claims between ₹50 Lakhs and ₹2 Crores</td>
                          <td className="p-3">6 to 12 Months</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-purple-900">National clients claims Redressal Commission (NCDRC)</td>
                          <td className="p-3">Claims exceeding ₹2 Crores</td>
                          <td className="p-3">Appellate &amp. High-Value police area</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 47. Privacy Rights Protections                                */}
              {/* ------------------------------------------------------------- */}
              <section id="harassment-privacy-rights" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 47
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  47. Recovery Agent Harassment and Fundamental Privacy Rights
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> In the landmark 9-judge constitutional bench ruling in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>The Supreme Court of India declared that the <strong>Right to rights is an inalienable Fundamental Right</strong> guaranteed under Article 21 of the Constitution of India. This constitutional doctrine straight governs money debt claims. </p>
                  <p> also. With the enactment of the <strong>online private Data safety Act. 2023 (DPDP Act. 2023)</strong> and Section 29 of the <strong>Credit Information firms (Regulation) Act. 2005 (CICRA)</strong>Indian clients enjoy full legal shielding against rights transgressions: </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        1. Fiduciary Data Breach Liability
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Under the DPDP Act. 2023. Lending institutions are classified as <strong>&quot. Data Fiduciaries&quot. </strong> and claims firms as <strong>&quot. Data Processors&quot. </strong>. Banks that disclose unencrypted customer contact lists. PAN numbers. Aadhaar details. Or money balances to unvetted claims freelancers commit catastrophic RBI data breaches subject to fines up to <strong>₹250 Crores</strong> imposed by the Data safety Board of India. </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        2. Prohibition on Third-Party Data Scraping
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Lending entities and claims firms are strictly barred from accessing. Scraping. utilizing phone contact books. Social media profiles (LinkedIn. Instagram. Facebook). Or employer internal directories to track delinquent clients. Any attempt to contact a client&apos. s expert contacts constitutes actionable cyberstalking and tortious interference. </p>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs sm:text-sm text-emerald-950 space-y-1">
                    <strong className="block font-bold">The Rule of Informational Self-Determination:</strong>
                    <p> Every Indian citizen holds the sovereign legal right to control who discusses their money debts. A claims agent who blurts out loan balances to a neighbor. Apartment pledge guard. Or kin commits an fast. Non-compoundable breach of legal rights under Section 29 CICRA. Entitling the victim to punitive payout. </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 48. Legal Consequences for Misconduct                         */}
              {/* ------------------------------------------------------------- */}
              <section id="harassment-legal-consequences" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 48
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  48. Legal Consequences for Errant Banks &amp; Misconducting Agents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> When claims misconduct is formally prove before RBI or court officials. The punitive consequences inflicted upon banks and claims firms are severe and multifaceted: </p>

                  <div className="space-y-3 sm:space-y-4 my-4">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-1.5">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        1. RBI Regional Ban on Outsourced Debt Recovery (Paragraph 2.6):
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Under Paragraph 2.6 of the Master Circular on claims agents in Banks. If the Reserve Bank observes persistent reports of abuse or coercive claims against a particular bank or NBFC. The central bank holds the legal power to <strong>impose an outright ban prohibiting the bank from engaging claims agents</strong> in that local city. Areas. Or state for a specified period (typically 6 months to 1 year). During this ban. The lender cannot deploy a single field claims agent. </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-1.5">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        2. Permanent Blacklisting on the IBA Central Database:
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Any claims firm whose personnel are found guilty of physical threats. Abusive profanity. Or police impersonation faces fast termination of contract and permanent entry into the <strong>Indian Banks&apos. Association (IBA) Centralized Blacklist</strong>. Once blacklisted. The firm is permanently barred from securing claims contracts with any public or private sector bank across India. </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-1.5">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        3. Multi-Crore RBI Compounding Penalties:
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Under Section 47A(1)(b) of the Banking Regulation Act. 1949. The Reserve Bank routinely imposes multi-crore monetary penalties on major banks for non-compliance with the outside work rules and Fair Practices Code. In recent RBI enforcement orders. Major private and public banks have been slapped with penalties ranging from ₹1 Crore to ₹10+ Crores for unfair claims practices. </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-1.5">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        4. Personal Criminal Culpability of Bank Executives:
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Under the doctrine of penal conspiracy and abetment (Sections 45 &amp. 61 BNS). Senior bank claims heads and local managers cannot hide behind firm veils. Where a bank knowingly deploys uncertified bouncers who commit penal extortion or physical violence. The bank managers are named as co-accused in penal FIRs alongside the physical claims agents. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 49. Common Harassment Scenarios                               */}
              {/* ------------------------------------------------------------- */}
              <section id="common-harassment-scenarios" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 49
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  49. Common Recovery Harassment Scenarios &amp; Defense Tactics
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Third-party claims firms often deploy calculated psychological threats playbooks designed to exploit a client&apos. s unfamiliarity with Indian banking law. Understanding the legal truth behind these predatory tactics strips the caller of power and provides you with fast. Scripted counter-measures: </p>

                  <div className="space-y-4 my-4">
                    {/* Scenario 1 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 bg-red-100 text-red-800 text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider">
                          Scenario 1: The Arrest Warrant &amp; Police Raid Bluff
                        </span>
                        <span className="text-[11px] font-bold text-red-600">High Frequency Tactic</span>
                      </div>
                      <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 text-xs sm:text-sm text-red-950">
                        <strong>The Agent&apos;s Threat:</strong> &quot;A non-bailable arrest warrant has been signed by the Magistrate. Our recovery team is arriving with the local Crime Branch police within 2 hours to detain you!&quot;
                      </div>
                      <div className="text-xs sm:text-sm text-black space-y-1.5">
                        <p> <strong>The legal Reality:</strong> Pure legal fraud. Purely civil debt defaults cannot trigger arrest warrants. Police agents cannot execute civil arrests without a formal decree issued by a competent Civil Court under Order 21 CPC after a full civil trial. Threatening arrest violates Section 351 BNS (penal threats) and Section 204 BNS (Personating a Public Servant). </p>
                        <p className="text-blue-950 font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100"> <strong>Your Counter-Response:</strong> &quot. Loan default is purely a civil contractual matter. Impersonating police or threatening arrest is a cognizable crime under Sections 204 and 351 of the Bharatiya Nyaya Sanhita. 2023. I am recording this call and will forward this recording to the Police Commissioner and the RBI Integrated agents.&quot. </p>
                      </div>
                    </div>

                    {/* Scenario 2 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider">
                          Scenario 2: The Doorstep Lock &amp; Asset Seizure Threat
                        </span>
                        <span className="text-[11px] font-bold text-amber-700">Doorstep Coercion</span>
                      </div>
                      <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 text-xs sm:text-sm text-amber-950">
                        <strong>The Agent&apos;s Threat:</strong> &quot;We are arriving with a recovery truck right now to seize your furniture, electronics, and vehicle, and we will lock your apartment!&quot;
                      </div>
                      <div className="text-xs sm:text-sm text-black space-y-1.5">
                        <p> <strong>The legal Reality:</strong> no-pledge loans and credit cards have no mortgage lien. claims agents have zero formal under SARFAESI or the Transfer of home Act to attach. Seize. lock any own home. Attempting to enter private home or seize items constitutes penal Trespass (Section 329 BNS) and Extortion / Robbery (Sections 308 &amp. 383 BNS). </p>
                        <p className="text-blue-950 font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100"> <strong>Your Counter-Response:</strong> &quot. You have zero legal formal to touch any home without a formal Civil Court attachment decree. If you step onto my home or attempt to take any item. I will dial 112 promptly for penal trespass and robbery.&quot. </p>
                      </div>
                    </div>

                    {/* Scenario 3 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-900 text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider">
                          Scenario 3: Contacting Corporate HR &amp; Threatening Termination
                        </span>
                        <span className="text-[11px] font-bold text-indigo-700">Economic Coercion</span>
                      </div>
                      <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs sm:text-sm text-indigo-950">
                        <strong>The Agent&apos;s Threat:</strong> &quot;We are calling your HR director and company managing director to inform them of your fraud, freeze your salary, and get you terminated!&quot;
                      </div>
                      <div className="text-xs sm:text-sm text-black space-y-1.5">
                        <p> <strong>The legal Reality:</strong> Paragraph 2.4 of the RBI Master Circular strictly forbids contacting a client&apos. s employer or colleagues. Defaming an staff at their workplace constitutes penal Defamation under Section 356 BNS and actionable Tortious Interference with an jobs Contract. For which the bank can be sued for massive trade damages. </p>
                        <p className="text-blue-950 font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100"> <strong>Your Counter-Response:</strong> &quot. Contacting my employer violates Paragraph 2.4 of the RBI Master Circular and constitutes penal defamation under Section 356 BNS. Any contact with my workplace will result in an fast damages suit against your bank for intentional tortious interference.&quot. </p>
                      </div>
                    </div>

                    {/* Scenario 4 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 bg-purple-100 text-purple-900 text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider">
                          Scenario 4: Harassing Elderly Parents, In-Laws &amp; Relatives
                        </span>
                        <span className="text-[11px] font-bold text-purple-700">Privacy Breach</span>
                      </div>
                      <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 text-xs sm:text-sm text-purple-950">
                        <strong>The Agent&apos;s Threat:</strong> &quot;We have your parents&apos; phone numbers. We will call them every 10 minutes and visit their home with society elders to shame your family!&quot;
                      </div>
                      <div className="text-xs sm:text-sm text-black space-y-1.5">
                        <p> <strong>The legal Reality:</strong> Non-guarantor kin have zero legal debt for another adult&apos. s debts under the Indian Contract Act. Reaching out to relatives violates legal rights under Section 29 CICRA and triggers heavy penalties under the Maintenance and Welfare of Parents and Senior Citizens Act. 2007 if elderly relatives are harassed. </p>
                        <p className="text-blue-950 font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100"> <strong>Your Counter-Response:</strong> &quot. My kin are not guarantors or parties to this loan pacts. Disclosing my money data to them violates Section 29 of the CICRA Act and the DPDP Act. 2023. Continued abuse of my elderly parents will result in an fast reports under the Senior Citizens Welfare Act.&quot. </p>
                      </div>
                    </div>

                    {/* Scenario 5 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-900 text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider">
                          Scenario 5: The Fake Discount / Personal UPI Settlement Trap
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700">Financial Fraud</span>
                      </div>
                      <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs sm:text-sm text-emerald-950">
                        <strong>The Agent&apos;s Threat:</strong> &quot;I have special approval to close your ₹4 Lakh card balance for just ₹30,000 today. Send it right now to this UPI QR code and I will mark your loan closed in the system!&quot;
                      </div>
                      <div className="text-xs sm:text-sm text-black space-y-1.5">
                        <p> <strong>The legal Reality:</strong> A classic claims agent scam. Money transferred to a private UPI ID. Phone number. Or unverified QR code goes straight into the agent&apos. s private pocket. The bank never receives the funds. Your loan remains delinquent. extra fees continues growing. And your credit score continues plummeting. </p>
                        <p className="text-blue-950 font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100"> <strong>The Golden Rule:</strong> Never pay a single rupee without a formal. System-generated closure note issued on the bank&apos. s formal letterhead with an authorized agents signature. All payments must be made straight to your registered loan account number through the bank&apos. s formal gateway. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 50. Frequently Asked Questions (FAQ Accordion)                 */}
              {/* ------------------------------------------------------------- */}
              <section id="faqs-rbi-recovery-rules" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 50
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  50. Frequently Asked Questions About RBI Recovery Agent Rules
                </h2>
                <p className="text-xs sm:text-sm text-black mb-4 leading-relaxed"> Below are detailed. Authoritative legal answers to the 18 most critical questions asked by Indian clients regarding debt claims agent rules. RBI rights. Legal time windows. And legal defense plans: </p>

                <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-2xl mb-4 text-xs sm:text-sm text-blue-950 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-bold block text-blue-900">Need Immediate Legal Protection?</span>
                    <p className="text-xs text-blue-800">Our banking lawyers issue formal legal help notices to banks within 24 hours.</p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-3.5 py-2 bg-blue-600 text-white font-bold rounded-xl text-xs hover:bg-blue-700 transition-colors flex-shrink-0"
                  >
                    Consult Advocate →
                  </Link>
                </div>

                <div className="space-y-2.5">
                  {recoveryFaqs.map((faq, idx) => {
                    const isOpen = expandedFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-2xs transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedFaq(isOpen ? null : idx)}
                          className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-gray-50/80 transition-colors"
                        >
                          <span className="font-bold text-black text-xs sm:text-sm md:text-base leading-snug">
                            {faq.question}
                          </span>
                          <span className="text-blue-600 font-bold text-lg sm:text-xl flex-shrink-0">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-3.5 sm:p-4 pt-0 text-xs sm:text-sm text-black leading-relaxed border-t border-gray-100 bg-gray-50/40">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 51. Latest RBI Rules and Updates                              */}
              {/* ------------------------------------------------------------- */}
              <section id="latest-rbi-rules-updates" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 51
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  51. Latest RBI Rules &amp; Policy Updates for Agents (2026)
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> As clients lending digitizes across India. The Reserve Bank of India. In coordination with the Telecom RBI formal of India (TRAI) and the Ministry of Electronics &amp. Information Technology (MeitY). Has enacted unprecedented RBI safeguards: </p>

                  <div className="space-y-3 sm:space-y-4 my-4">
                    {/* Update 1 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-blue-600 text-white font-bold text-[10px] rounded uppercase">TRAI Mandate</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">TRAI &amp; DoT 160-Series Dedicated Telecalling Mandate</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Under joint directives from TRAI and the unit of Telecommunications. All legitimate trade banking and claims calls must originate strictly from the dedicated <strong>&apos. 160&apos. series number block</strong> (e.g., <em>1600XXXXXX</em>). Banks and outside firms are strictly prohibited from making debt claims calls from standard 10-digit private mobile numbers (e.g. 98XXXXXXXX. 99XXXXXXXX) or unregistered VoIP virtual numbers. Any claims call originating from a non-160 series number can be promptly reported as unlawful telemarketing and cyber abuse. </p>
                    </div>

                    {/* Update 2 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-indigo-600 text-white font-bold text-[10px] rounded uppercase">AI Surveillance</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Mandatory AI-Powered Speech Analytics &amp; Voice Auditing</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> The RBI mandates all Scheduled banks and large NBFCs to deploy automated speech recognition and natural language processing (NLP) algorithms on 100% of outbound claims calls. These AI compliance engines automatically flag and log harsh decibel levels. Shouting. Profanity. Abusive vocabulary. And calls initiated outside the permitted 08:00 AM to 07:00 PM window. Generating auditable compliance logs that must be submitted to RBI checks teams. </p>
                    </div>

                    {/* Update 3 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-purple-600 text-white font-bold text-[10px] rounded uppercase">Privacy Law</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">DPDP Act 2023 Enforcement: Penalties up to ₹250 Crores</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> With full operationalization of the <em>online private Data safety Act. 2023</em>Lending institutions face legal penalties of up to <strong>₹250 Crores</strong> for sharing customer phone records. Loan arrears. Or addresses with unverified claims vendors without valid consent. clients can file reports straight with the Data safety Board of India for banned data processing. </p>
                    </div>

                    {/* Update 4 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-emerald-600 text-white font-bold text-[10px] rounded uppercase">Consumer Access</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Mandatory Principal Nodal Officer Links on All Digital Notices</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> Every automated payment reminder. SMS notice. Or WhatsApp alert dispatched by banks or claims firms must incorporate a direct. Clickable hyperlink routing the customer to the bank&apos. s main loan Nodal agents reports desk and the formal RBI CMS portal (<em>cms.rbi.org.in</em>). Omitting this grievance link renders the online notice by law defective under RBI customer service directives. </p>
                    </div>

                    {/* Update 5 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-rose-600 text-white font-bold text-[10px] rounded uppercase">Cyber Crime</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Criminalization of Digital Contact Scraping &amp; Morphing</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed"> The central bank&apos. s online Lending rules strictly prohibit lending applications from requesting access to a user&apos. S contact book. Photo gallery. Or device storage. Attempting to message contacts or circulate morphed photos is classified as non-bailable cyber extortion punishable under Sections 66E. 67. And 67A of the Information Technology Act and Bharatiya Nyaya Sanhita. Holding both app developers and lending executives criminally liable. </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 52. Conclusion – Rights and Protections Against Harassment    */}
              {/* ------------------------------------------------------------- */}
              <section id="conclusion-protections" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 52
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  52. Conclusion: Stop Debt Harassment With CredSettle
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p> Navigating severe debt stress is an emotionally grueling trial. But <strong>Experiencing hardship does not strip you of your constitutional liberty. Private dignity. fundamental human rights</strong>. Defaulting on an no-pledge private loans or credit card is purely a civil disagreement between a citizen and a firms. it is not a crime. you are never at the mercy of predatory claims bouncers. </p>
                  <p> Under the protective architecture of the Reserve Bank of India&apos. S Master Circulars. The Bharatiya Nyaya Sanhita. The clients safety Act. And the lawyers Act of 1961<strong>the law stands firmly on the side of the dignified client</strong>. You do not have to live in fear of ringing phones. Doorstep intrusions. social defamation. </p>
                  <p> At <strong>CredSettle</strong>Our senior banking lawsuits lawyers construct an impenetrable legal shield around you and your kin: </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4 text-xs sm:text-sm">
                    <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                      <strong className="text-blue-950 font-bold block">1. 24-Hour Legal Representation Notice:</strong>
                      <p className="text-blue-900">We serve formal legal notices under the lawyers Act. 1961. Forcing banks to cease direct calls and reroute all contact to our legal chamber.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                      <strong className="text-blue-950 font-bold block">2. Complete Family &amp; Workplace Shielding:</strong>
                      <p className="text-blue-900">We enforce strict rights boundaries under Article 21. Stopping banned agent visits to your workplace or calls to non-guarantor kin.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                      <strong className="text-blue-950 font-bold block">3. Aggressive Regulatory Escalation:</strong>
                      <p className="text-blue-900">We file proof-backed petitions before Bank main loan Nodal agents. The RBI Integrated agents. And police officials for penal violations.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                      <strong className="text-blue-950 font-bold block">4. Structured &amp; Honorable Debt Settlement:</strong>
                      <p className="text-blue-900">Once abuse is halted. We transition claims into honorable. Structured debt deals with 40% to 70%+ waivers and formal No Dues letters.</p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-2xl sm:rounded-3xl text-white shadow-lg space-y-3 text-center my-6">
                    <h3 className="text-lg sm:text-2xl font-black text-white">
                      Put an Immediate Stop to Recovery Agent Harassment
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-200 max-w-xl mx-auto leading-relaxed"> Connect with CredSettle’s checked banking defense lawyers. We issue legal legal help notices within 24 hours. Shielding you. Your kin. And your workplace. </p>
                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-block bg-white text-blue-950 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-all shadow-md transform hover:-translate-y-0.5"
                      >
                        Shield My Rights Now →
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion Callout Box Matching loan-settlement */}
              <div className="border-t border-gray-200 pt-6 sm:pt-8 space-y-4">
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl sm:rounded-3xl text-white space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-xl font-bold">Put an Immediate Stop to Recovery Harassment</h3>
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed"> Our dedicated banking defense lawyers enforce RBI clients fair-practice codes. Shield your kin from claims calls. And secure legal safety under the lawyers Act. </p>
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
              <div className="font-bold text-xs text-black mb-1">Stop Harassment Now</div>
              <p className="text-[10px] text-black mb-3 leading-tight"> Cease-and-desist notices issued by lawyers halt unlawful claims calls within 24. 48 hours. </p>
              <Link
                href="/contact"
                className="block w-full bg-blue-600 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-[11px]"
              >
                Request Legal Callback
              </Link>
              <div className="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-black space-y-1 text-left">
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% Confidential</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> RBI Fair Code</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> High-Court lawyers</p>
              </div>
            </div>

            {/* Diagnostic Quick Jump Badge */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-black">
              <span className="font-bold text-black block text-[11px]">Violation Checker</span>
              <p className="text-[10px] text-black leading-tight">Check if your lender breached RBI calling hours or rights rules.</p>
              <a href="#harassment-violation-checker" className="text-[10px] text-blue-600 font-semibold block pt-1 hover:underline">Check Violations ↓</a>
            </div>

            {/* Official Regulatory Links */}
            <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200 text-blue-950 text-xs space-y-1.5">
              <strong className="block text-[11px] font-bold text-blue-900">Official Complaint Links</strong>
              <a
                href="https://cms.rbi.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] text-blue-700 hover:underline"
              >
                🔗 RBI CMS Portal (cms.rbi.org.in)
              </a>
              <a
                href="https://consumerhelpline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] text-blue-700 hover:underline"
              >
                🔗 National Consumer Helpline
              </a>
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
          <span className="bg-blue-800 text-[10px] px-1.5 py-0.5 rounded-full">52</span>
        </button>

        <a
          href="#harassment-violation-checker"
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold p-2.5 rounded-full shadow-xl active:scale-95 transition-transform flex items-center justify-center w-10 h-10"
          aria-label="Jump to Violation Checker"
        >
          <span>⚡</span>
        </a>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white/90 hover:bg-white text-black border border-slate-200 text-xs font-bold p-2.5 rounded-full shadow-md active:scale-95 transition-transform flex items-center justify-center w-10 h-10"
          aria-label="Scroll to Top"
        >
          <span>↑</span>
        </button>
      </div>

      {/* Footer */}
      <div className="relative z-20 mt-12 sm:mt-16 bg-white">
        <Footer hideFunnel />
      </div>
    </div>
  );
}
