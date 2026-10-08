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
        { id: "permitted-prohibited-calling-hours", label: "8. Calling Hours (08:00–19:00)" },
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
        { id: "harassment-violation-checker", label: "⚡ Diagnostic Violation Tool" },
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
      answer: "No. The Reserve Bank of India Master Circular on Recovery Agents in Banks strictly mandates that all recovery-related calls must occur strictly between 08:00 AM and 07:00 PM (IST). Calling before 8 AM or after 7 PM is an express regulatory violation for which the bank can be penalized by the RBI Banking Ombudsman."
    },
    {
      question: "Can a recovery agent contact my parents, spouse, or siblings regarding my personal loan or credit card?",
      answer: "Under RBI fair practice codes and credit confidentiality regulations, debt liability is strictly between the borrower and the lender. Recovery agents are legally forbidden from contacting non-guarantor family members, disclosing outstanding balances to them, or demanding that they clear your debts."
    },
    {
      question: "What documents must a recovery agent show when visiting my residence?",
      answer: "An agent visiting your home must show an institutional photo identity card issued by the collection agency, a valid Letter of Authority executed on bank letterhead specifying your account, and proof of Debt Recovery Agent (DRA) certification issued by the Indian Institute of Banking & Finance (IIBF). If they fail to produce these, you may refuse interaction and report criminal trespass."
    },
    {
      question: "Can recovery agents get me arrested or send police to my home for an unpaid loan?",
      answer: "No. Unsecured loan or credit card default due to genuine financial distress is purely a civil contractual matter under Indian law. Police officers have no jurisdiction or statutory authority to intervene in bank debt recovery, and recovery agents who impersonate police or threaten arrest commit a serious penal offense under Section 204 of the Bharatiya Nyaya Sanhita."
    },
    {
      question: "Can a bank recovery agent visit my office or workplace?",
      answer: "Under RBI directives, agents are strictly discouraged from visiting a borrower's place of employment. It is permissible only if the borrower has refused all contact at their residential address or cannot be traced. Agents are strictly prohibited from causing public scenes, informing colleagues, or speaking to HR departments."
    },
    {
      question: "Can recovery agents take away my vehicle, furniture, or jewelry for an unsecured loan?",
      answer: "No. Unsecured loans and credit cards do not carry any asset mortgage or pledge. Recovery agents have zero legal right to confiscate personal property. Forcible seizure of personal items without a formal judicial court decree amounts to criminal robbery and extortion under Section 308/383 BNS."
    },
    {
      question: "Is it legal for me to record calls with recovery agents in India?",
      answer: "Yes, 100% legal. Recording a conversation in which you are a participant is fully permissible under Indian evidence law and admissible as electronic evidence under Bharatiya Sakshya Adhiniyam, 2023. These recordings provide decisive proof when lodging complaints with the Banking Ombudsman or local police."
    },
    {
      question: "What should I do if a recovery agent uses abusive or threatening language?",
      answer: "Do not abuse them back. Maintain composure, record the call, note down the agent's phone number and the exact time, and file an immediate written complaint to the bank's Principal Nodal Officer citing Section 351/352 of Bharatiya Nyaya Sanhita (criminal intimidation). If the threat involves physical violence, dial 112 to register a police complaint."
    },
    {
      question: "Can banks be held responsible if an outsourced third-party agency misbehaves?",
      answer: "Yes. The Reserve Bank of India holds lending institutions vicariously liable for all actions of their outsourced collection agents. The Supreme Court in ICICI Bank v. Shanti Devi Sharma established that banks cannot employ musclemen and are directly culpable for any harassment committed by their agents."
    },
    {
      question: "How long does a bank have to resolve a recovery agent harassment complaint?",
      answer: "Under RBI customer service regulations, the bank has a statutory timeline of 30 days from the date of complaint receipt to conduct an internal inquiry and provide a formal written resolution. If they fail to reply or reject your complaint, you can immediately escalate to the RBI Integrated Ombudsman on cms.rbi.org.in."
    },
    {
      question: "How much compensation can the RBI Ombudsman award for recovery harassment?",
      answer: "Under the Reserve Bank - Integrated Ombudsman Scheme, the Ombudsman has the statutory power to award up to ₹1,00,000 to the complainant for mental agony, loss of time, and harassment, in addition to ordering compensation of up to ₹20,00,000 for any direct financial loss caused by the lender's misconduct."
    },
    {
      question: "Can digital lending apps access my phone contact list or photo gallery to recover loans?",
      answer: "Absolutely not. Under the RBI Digital Lending Guidelines of September 2022, lending apps are strictly prohibited from accessing mobile contact lists, media galleries, call logs, or device files. Harassing contacts or circulating morphed images constitutes cyber extortion punishable under Sections 66E and 67 of the Information Technology Act."
    },
    {
      question: "What is a Letter of Authority and why is it mandatory for field agents?",
      answer: "A Letter of Authority is an official legal docket executed by an authorized bank officer assigning a specific delinquent account to an empaneled agency. It prevents unauthorized imposters, rogue recovery freelancers, or scam telecallers from extorting money from vulnerable citizens."
    },
    {
      question: "Can I instruct the bank to communicate only with my lawyer or legal representative?",
      answer: "Yes. Under the Advocates Act of 1961, every citizen has the constitutional right to be represented by an advocate. When CredSettle's banking advocates issue a formal Legal Representation Notice, the bank and its collection agencies are legally required to route all communications through our legal desk."
    },
    {
      question: "What happens if a bank repeatedly violates RBI recovery guidelines?",
      answer: "The Reserve Bank of India has the power under paragraph 2.6 of the Master Circular to impose a complete operational ban prohibiting the bank from engaging recovery agents in that geographical area for a specified period, alongside issuing multi-crore regulatory fines."
    },
    {
      question: "Can a recovery agent demand payment via their personal UPI ID or cash?",
      answer: "Never pay money into a personal UPI ID, mobile wallet, or cash without a system-generated bank receipt. Legitimate debt repayments must be made directly into your registered loan account number or through the bank's official payment portal."
    },
    {
      question: "What is the role of the Indian Institute of Banking & Finance (IIBF) in recovery?",
      answer: "The IIBF administers the mandatory Debt Recovery Agent (DRA) certificate examination following 100 hours of training in legal rules, borrower dignity, and ethical recovery practices. An agent who has not cleared the IIBF DRA exam cannot lawfully be deployed for field debt recovery."
    },
    {
      question: "How does CredSettle protect borrowers against recovery agent harassment?",
      answer: "CredSettle's senior banking litigation advocates step in to safeguard your legal rights. We issue formal Representation Notices under the Advocates Act, establish direct communication with bank grievance nodal officers, file RBI Ombudsman and police complaints when necessary, and transition aggressive recovery disputes toward honorable, structured debt settlement."
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
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words">
            RBI Rules for Recovery Agents in India<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">
              The Master Legal &amp; Statutory Rights Guide
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            Know your constitutional and statutory rights against recovery agent harassment. Understand permitted calling hours (08:00 AM to 07:00 PM), strict bans on third-party harassment, police jurisdiction limits, and step-by-step procedures to file complaints with the RBI Integrated Ombudsman.
          </p>
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
            <span className="leading-tight">Reviewed by Senior Banking Law Advocates &amp; Debt Resolution Counsel</span>
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
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                    <p className="text-[10px] text-slate-300">52 Master Sections • RBI Recovery Rules</p>
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
                                  : 'text-gray-700 hover:bg-gray-100'
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

        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6">

          {/* Left Column: Categorized Table of Contents (15% Desktop Sticky) */}
          <div className="lg:w-[15%] flex-shrink-0 hidden lg:block">
            <div className="sticky top-20 max-h-[calc(100vh-5.5rem)] flex flex-col space-y-2.5">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-xs">Table of Contents</h3>
                  <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">52</span>
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
                              className={`block text-[11px] transition-all duration-150 px-2 py-1 rounded-md leading-tight ${
                                isActive
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
                  <h4 className="font-bold text-xs text-white">Harassment Help</h4>
                </div>
                <p className="text-[10px] text-blue-200 mb-2 leading-snug">
                  Immediate legal defense against calls, doorstep visits, and notices.
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

          {/* Middle Column: Master 52-Section Editorial Guide (70% Width) */}
          <div className="lg:w-[70%] w-full min-w-0">
            <article className="prose prose-slate max-w-none bg-white p-3.5 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-xs sm:shadow-sm border border-gray-200/80 space-y-8 sm:space-y-12 overflow-hidden">

              {/* ------------------------------------------------------------- */}
              {/* 1. Introduction to RBI Rules for Recovery Agents              */}
              {/* ------------------------------------------------------------- */}
              <section id="intro-rbi-rules" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 1
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  1. Introduction to RBI Rules for Recovery Agents
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Defaulting on a bank loan or credit card in India is an unfortunate financial event, but under the statutory mandate of the <strong>Reserve Bank of India (RBI)</strong> and the Constitution of India, <strong>it is never a crime</strong>. For decades, commercial banks, non-banking financial companies (NBFCs), and predatory digital lending applications engaged third-party collection agencies that weaponized intimidation, public humiliation, abusive telecalling, and physical threats against vulnerable citizens.
                  </p>
                  <p>
                    To dismantle these coercive practices, the Reserve Bank of India enacted rigorous, legally binding regulatory frameworks—most notably the <em>Master Circular on Recovery Agents in Banks</em>, the <em>Master Direction on Outsourcing of Financial Services</em>, and the <em>Digital Lending Directions</em>. These statutory regulations establish an unequivocal legal boundary: <strong>lenders and their outsourced recovery representatives possess zero legal right to breach a borrower&apos;s fundamental dignity, privacy, or peace of mind</strong>.
                  </p>
                  <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-200 text-xs sm:text-sm text-blue-950 space-y-2">
                    <span className="font-bold block text-blue-900">Foundational Regulatory Principle:</span>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      &quot;Regulated Entities (REs) must strictly ensure that their recovery agents do not resort to intimidation or harassment of any kind, either verbally or physically, against any person in their debt collection efforts.&quot; — <em>Reserve Bank of India Master Circular</em>.
                    </p>
                  </div>
                  <p>
                    This comprehensive master guide breaks down every statutory provision, Supreme Court precedent, operational boundary, and legal remedy available to Indian borrowers facing unlawful recovery tactics.
                  </p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  2. What Are Recovery Agents?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    In Indian retail finance, <strong>recovery agents</strong> are external service providers, agencies, or individuals engaged by regulated financial institutions to communicate with delinquent borrowers, verify circumstances surrounding non-payment, and encourage voluntary resolution of past-due balances.
                  </p>
                  <p>
                    Because scheduled commercial banks and NBFCs disburse tens of thousands of unsecured retail loans each month, their internal branch personnel lack the bandwidth to physically pursue overdue accounts once they enter Special Mention Account (SMA) or Non-Performing Asset (NPA) classification. Consequently, banks outsource non-core recovery operations to third-party collection agencies.
                  </p>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                      <thead className="bg-slate-900 text-white font-semibold">
                        <tr>
                          <th className="p-3">Agency Classification</th>
                          <th className="p-3">Operational Scope</th>
                          <th className="p-3">Statutory Regulatory Oversight</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-3 font-semibold text-gray-900">Telecalling Collection Desks</td>
                          <td className="p-3">Outbound telephone reminders for early delinquency (1–60 DPD)</td>
                          <td className="p-3">TRAI UCC Regulations &amp; RBI Master Circular Calling Hours</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-gray-900">Field Investigation Agencies</td>
                          <td className="p-3">In-person residential or business visits to verify borrower status</td>
                          <td className="p-3">Mandatory IIBF Certification &amp; Police Verification</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-gray-900">Legal Conciliation Verticals</td>
                          <td className="p-3">Facilitating Lok Adalat referrals and formal dispute conciliation</td>
                          <td className="p-3">Section 19–21 Legal Services Authorities Act, 1987</td>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  3. Who Is a Recovery Agent? Legal Definition &amp; Qualifications
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under RBI prudential guidelines, an individual cannot simply print visiting cards and claim to be a bank recovery representative. The central monetary authority mandates that a legally recognized recovery agent must fulfill rigorous professional benchmarks before contacting any customer:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Mandatory IIBF Certification:</strong> Every field recovery agent must complete a structured 50-hour or 100-hour training curriculum administered by the <strong>Indian Institute of Banking &amp; Finance (IIBF)</strong> and pass the official Debt Recovery Agent (DRA) examination.
                    </li>
                    <li>
                      <strong>Clean Police Verification Docket:</strong> Regulated institutions must ensure antecedent verification through local police stations confirming that the individual has no criminal history involving violent offenses, extortion, assault, or moral turpitude.
                    </li>
                    <li>
                      <strong>Official Bank Letter of Authority:</strong> The agent must carry an individualized, non-transferable Letter of Authority executed on bank letterhead bearing a verified employee code, the specific borrower account reference, and the signature of an authorized bank manager.
                    </li>
                    <li>
                      <strong>Institutional Photo Identity Card:</strong> The agent must prominently display an institutional ID card stating their full name, agency registration number, photograph, and issuing bank division details.
                    </li>
                  </ul>
                  <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm">
                    <strong>Critical Legal Check:</strong> Any recovery representative who visits you without an official IIBF certificate number, a verifiable bank identity card, and an authentic Letter of Authority is operating in <strong>direct violation of RBI directives</strong> and can be treated as a criminal trespasser.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  4. Role and Responsibilities of Recovery Agents
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The lawful mandate of a recovery agent is strictly limited to commercial facilitation and customer communication. Their statutory responsibilities include:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
                    <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 space-y-1.5">
                      <h4 className="font-bold text-blue-950 text-xs sm:text-sm">Permissible Duties</h4>
                      <ul className="text-xs text-blue-900 space-y-1 list-disc pl-4">
                        <li>Informing the borrower of the current overdue balance</li>
                        <li>Explaining the breakdown of principal and accrued interest</li>
                        <li>Delivering formal bank demand notices or communications</li>
                        <li>Documenting genuine customer hardship reasons</li>
                        <li>Connecting distressed borrowers to bank restructuring officers</li>
                      </ul>
                    </div>
                    <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 space-y-1.5">
                      <h4 className="font-bold text-red-950 text-xs sm:text-sm">Expressly Forbidden Actions</h4>
                      <ul className="text-xs text-red-900 space-y-1 list-disc pl-4">
                        <li>Demanding cash payments without bank-generated receipts</li>
                        <li>Threatening imprisonment or police station visits</li>
                        <li>Disclosing debt details to family or neighbors</li>
                        <li>Trespassing inside bedrooms or private domestic areas</li>
                        <li>Confiscating household vehicles or private chattels</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 5. RBI Guidelines for Recovery Agents in India                 */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-guidelines-india" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 5
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  5. RBI Guidelines for Recovery Agents in India: Regulatory Evolution
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The regulatory architecture governing debt collection in India has evolved through progressive statutory notifications designed to protect consumer rights:
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    <li className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong>1. RBI Master Circular on Recovery Agents in Banks (August 2022):</strong> Codified mandatory pre-engagement police verification, standardized 100-hour training modules through IIBF, established zero-tolerance for physical intimidation, and made bank leadership personally accountable for vendor violations.
                    </li>
                    <li className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong>2. Master Direction on Outsourcing of Financial Services (Updated 2023):</strong> Prohibits banks from outsourcing core management functions and mandates that outsourcing contracts must contain explicit clauses empowering the bank and RBI auditors to inspect agency premises and terminate abusive vendors immediately.
                    </li>
                    <li className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong>3. Guidelines on Digital Lending (September 2022):</strong> Formally banned lending apps from accessing borrower phone contacts, media galleries, call logs, and location data. Mandated that digital lending recovery must adhere to the same fair practices code as traditional banks.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 6. RBI Rules on Recovery Agent Conduct                         */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-on-agent-conduct" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 6
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  6. RBI Rules on Recovery Agent Conduct &amp; Professional Demeanor
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under Section 2 of the RBI Master Circular, every interaction between a recovery representative and a borrower must observe strict decorum:
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5 p-3 bg-white border border-gray-200 rounded-xl">
                      <span className="text-blue-600 font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900 block text-xs sm:text-sm">Mandatory Self-Introduction:</strong>
                        <span className="text-xs text-gray-600">The agent must begin every telephone call or in-person greeting by stating their full name, the collection agency they represent, the creditor bank they are contracted by, and the purpose of the communication.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 bg-white border border-gray-200 rounded-xl">
                      <span className="text-blue-600 font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900 block text-xs sm:text-sm">Respect for Customer Privacy:</strong>
                        <span className="text-xs text-gray-600">Discussions regarding unpaid loans must occur strictly in private. Agents are prohibited from shouting in building lobbies, public corridors, or within earshot of neighbors.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 bg-white border border-gray-200 rounded-xl">
                      <span className="text-blue-600 font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900 block text-xs sm:text-sm">Civic Dignity During Distress:</strong>
                        <span className="text-xs text-gray-600">If a borrower is observing bereavement in the family or facing an acute medical crisis, the agent must withdraw immediately and reschedule the interaction with appropriate sensitivity.</span>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  7. RBI Guidelines on Recovery Agent Calls: Frequency &amp; Verification
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Telephonic communication is the most abused channel in consumer debt recovery. The central bank has instituted strict operational safeguards governing collection calling:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Call Frequency Caps:</strong> Agents are prohibited from spamming borrowers with persistent, relentless calls. Dialing a customer 10, 15, or 20 times a day constitutes deliberate electronic harassment under Section 351 BNS and regulatory fair practice violations.
                    </li>
                    <li>
                      <strong>Mandatory Call Recording:</strong> Regulated institutions are legally obligated to record and archive all outbound recovery telecalls. These logs must be made available to banking ombudsman examiners during dispute investigations.
                    </li>
                    <li>
                      <strong>Registered Telemarketer (TRAI) Compliance:</strong> Outbound recovery calls must originate from verified business PRI/SIP trunks registered under TRAI telemarketing regulations, prohibiting agents from using masked, private, or international numbers.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 8. Permitted and Prohibited Calling Hours                     */}
              {/* ------------------------------------------------------------- */}
              <section id="permitted-prohibited-calling-hours" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 8
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  8. Permitted and Prohibited Calling Hours (Strict 08:00 to 19:00 Rule)
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The Reserve Bank of India has established a rigid, non-negotiable statutory window for all recovery-related calls and residential communications:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
                    <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-950">
                      <span className="text-2xl block mb-1">⏰</span>
                      <strong className="text-sm sm:text-base font-bold">Permitted Contact Hours</strong>
                      <p className="text-xs sm:text-sm mt-1">
                        <strong>08:00 AM to 07:00 PM (IST)</strong><br />
                        Strictly on regular business days. Calls within this span must remain courteous and professional.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-rose-200 bg-rose-50 text-rose-950">
                      <span className="text-2xl block mb-1">🚫</span>
                      <strong className="text-sm sm:text-base font-bold">Prohibited Window (Illegal)</strong>
                      <p className="text-xs sm:text-sm mt-1">
                        <strong>Before 08:00 AM &amp; After 07:00 PM</strong><br />
                        Calls at 7:01 PM, late night, or 6:00 AM are statutory violations subject to punitive bank compensation.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    <em>Statutory Note:</em> If a recovery agent calls you at 10:00 PM or 06:30 AM, preserve your call log screenshot immediately. This single piece of electronic proof is sufficient to trigger RBI Ombudsman penalties against the lender.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 9. RBI Rules on Recovery Agent Visits                         */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-on-agent-visits" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 9
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  9. RBI Rules on Recovery Agent Visits: Home &amp; Office Protocols
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    In-person physical visits represent the most sensitive interaction in debt collection. The RBI sets down explicit protocols:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Designated Venue Only:</strong> Field visits must occur strictly at the place designated by the borrower (typically the registered residential address). If the borrower explicitly requests meetings at a specific mutually agreed location, agents must honor that choice.
                    </li>
                    <li>
                      <strong>Workplace Restriction:</strong> Agents are prohibited from visiting a borrower&apos;s office or employer premises unless the borrower has refused contact at their residential address or cannot be located through standard channels.
                    </li>
                    <li>
                      <strong>Limited Delegation:</strong> Lenders cannot send large mobs or gangs of recovery agents. Usually, no more than two authorized representatives may visit simultaneously.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 10. RBI Rules on Recovery Agent Communication                 */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-on-agent-communication" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 10
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  10. RBI Rules on Recovery Agent Communication: Written vs Spoken
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Transparency in debt communication is mandatory under banking consumer protection regulations. All recovery notices, reminders, and statements must adhere to verified standards:
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p>
                      <strong>1. Written Communication Mandate:</strong> The lender must provide clear written disclosures detailing the exact principal, accrued normal interest, overdue penal fees, and the specific date by which payments are requested.
                    </p>
                    <p>
                      <strong>2. Prohibition of Misleading Legal Terminology:</strong> Collection representatives cannot issue notices titled &quot;Police Arrest Notice&quot;, &quot;Warrant of Attachment&quot;, or &quot;Criminal Action Docket&quot;. Issuing simulated legal documents is an offense under Section 468/471 IPC (forgery).
                    </p>
                    <p>
                      <strong>3. SMS and WhatsApp Messaging Norms:</strong> Electronic messages must state the sender&apos;s verified institutional credentials and cannot contain threatening or defamatory language.
                    </p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  11. RBI Rules Against Harassment, Coercion, and Intimidation
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The Reserve Bank of India maintains an unyielding, zero-tolerance doctrine regarding borrower harassment. Under the Master Circular on Recovery Agents in Banks, harassment is broadly defined and strictly penalized:
                  </p>
                  <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl space-y-2 text-rose-950">
                    <strong className="block font-bold text-xs sm:text-sm">Prohibited Forms of Harassment Under RBI Mandates:</strong>
                    <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                      <li>Use of threatening gestures, overbearing physical postures, or verbal bullying</li>
                      <li>Staging sit-ins or protests outside a customer&apos;s residence or commercial establishment</li>
                      <li>Refusing to vacate the premises upon the borrower&apos;s explicit request</li>
                      <li>Repeatedly sounding horns, shouting names, or causing public scenes in residential housing societies</li>
                      <li>Following a borrower or their children on their commute to school or work</li>
                    </ul>
                  </div>
                  <p>
                    Any such behavior strips the agency of its lawful standing, rendering the agents liable for criminal prosecution under Bharatiya Nyaya Sanhita (BNS) and triggering immediate regulatory audit of the lending institution.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 12. RBI Rules on Threatening or Abusive Language              */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-threatening-abusive-language" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 12
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  12. RBI Rules on Threatening, Profane, or Abusive Language
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Verbal abuse, profanity, and menacing language are outright criminal offenses under Indian penal law. The RBI Master Circular explicitly states that recovery agents must communicate with absolute restraint:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Zero Tolerance for Slurs:</strong> Use of derogatory, casteist, communal, or sexually suggestive remarks constitutes a non-bailable criminal offense under special statutes as well as Section 352/356 BNS (intentional insult with intent to provoke breach of the peace).
                    </li>
                    <li>
                      <strong>Criminal Intimidation (Section 351 BNS / 506 IPC):</strong> Threatening injury to the borrower&apos;s person, reputation, or property carries imprisonment up to two years (or seven years if the threat involves death or grievous harm).
                    </li>
                    <li>
                      <strong>Legal Consequence:</strong> When abusive call recordings are submitted to the Banking Ombudsman, the Ombudsman routinely issues strict censures, imposes punitive compensation awards against the bank, and orders the debarment of the offending collection agency.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 13. RBI Rules on Contacting Family Members & References       */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-contacting-family-friends" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 13
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  13. RBI Rules on Contacting Family Members, Friends and References
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    One of the most widespread recovery violations is calling parents, spouses, siblings, or emergency contacts to demand debt payment. The RBI&apos;s stance on this is crystal clear:
                  </p>
                  <div className="space-y-3">
                    <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-xs">
                      <strong className="text-gray-900 block text-xs sm:text-sm">Strict Debt Confidentiality:</strong>
                      <span className="text-xs text-gray-600">Debt liability is strictly personal to the borrower (or co-borrowers and legal guarantors). Non-guarantor family members have ZERO legal obligation to pay, and disclosing debt figures to them violates Section 29 of the Credit Information Companies (Regulation) Act.</span>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-xs">
                      <strong className="text-gray-900 block text-xs sm:text-sm">Misuse of Reference Contacts:</strong>
                      <span className="text-xs text-gray-600">Reference numbers provided on loan application forms are solely for address verification during initial onboarding. Agents are legally barred from contacting references to demand payments or shame the borrower.</span>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-xs">
                      <strong className="text-gray-900 block text-xs sm:text-sm">Immediate Police Protection:</strong>
                      <span className="text-xs text-gray-600">If recovery callers harass elderly parents or children, the family can lodge an immediate police complaint for criminal intimidation and mental harassment against both the agency and the bank&apos;s regional director.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 14. RBI Rules on Contacting Employers and Colleagues          */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-contacting-employers" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 14
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  14. RBI Rules on Contacting Employers and Workplace Colleagues
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Recovery agencies frequently threaten: <em>&quot;We will call your HR department, report your loan default, and get you fired.&quot;</em> This is completely illegal under Indian law:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Workplace Defamation (Section 356 BNS):</strong> Publicly or privately maligning an employee&apos;s reputation before their employer or colleagues over a civil loan dispute constitutes criminal defamation.
                    </li>
                    <li>
                      <strong>Tortious Interference with Employment:</strong> Threatening an individual&apos;s livelihood to extort debt repayment violates constitutional protections under Article 21 and exposes the lender to civil damage lawsuits in high courts.
                    </li>
                    <li>
                      <strong>HR Standing Orders:</strong> Employers are under zero legal obligation to entertain third-party recovery calls for unsecured loans. In fact, many corporate HR policies treat unverified collection calls as corporate nuisance and can bar agents from premises.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 15. RBI Rules on Privacy and Confidentiality                  */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-privacy-confidentiality" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 15
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  15. RBI Rules on Privacy, Customer Dignity, and Data Protection
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Following the Supreme Court&apos;s landmark nine-judge bench judgment in <em>K.S. Puttaswamy v. Union of India (2017)</em>, the <strong>Right to Privacy</strong> is a fundamental right under Article 21 of the Constitution. The RBI reinforces this across multiple circulars:
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p>
                      <strong>1. Duty of Banker Confidentiality:</strong> Under the common law doctrine established in <em>Tournier v. National Provincial and Union Bank of England</em> (followed by Indian courts), banks have an implied contractual duty to maintain complete confidentiality regarding customer account details.
                    </p>
                    <p>
                      <strong>2. Prohibition of Public Defamation:</strong> Lenders cannot publish photographs of defaulting retail borrowers in local newspapers or post default notices on society noticeboards without following due process under statutory recovery acts.
                    </p>
                    <p>
                      <strong>3. Digital Personal Data Protection Act (DPDP), 2023:</strong> Processing or sharing borrower personal data with unauthorized collection vendors without specific, informed consent triggers severe regulatory fines reaching up to ₹250 Crores.
                    </p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  16. RBI Guidelines on Recovery Agent Identification Protocols
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Whenever a recovery representative approaches a borrower, statutory identification verification must occur prior to any discussion:
                  </p>
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-left text-xs sm:text-sm border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                      <thead className="bg-slate-900 text-white font-semibold">
                        <tr>
                          <th className="p-3">Mandatory Identification Credential</th>
                          <th className="p-3">Statutory Verification Requirement</th>
                          <th className="p-3">Borrower Right If Missing</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-3 font-semibold text-gray-900">Official Bank Letter of Authority</td>
                          <td className="p-3">Must name the agent, agency, borrower account number, and date of issue</td>
                          <td className="p-3 text-red-600 font-semibold">Refuse interaction &amp; report trespass</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-gray-900">Institutional ID with Photo</td>
                          <td className="p-3">Laminated card with agency logo, agent photo, and employee serial number</td>
                          <td className="p-3 text-red-600 font-semibold">Demand photograph &amp; call bank hotline</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-gray-900">IIBF Debt Recovery Certificate (DRA)</td>
                          <td className="p-3">Valid DRA certificate number confirming completion of regulatory training</td>
                          <td className="p-3 text-red-600 font-semibold">Challenge agent competence before Ombudsman</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 17. Bank's Responsibility for Recovery Agents                 */}
              {/* ------------------------------------------------------------- */}
              <section id="banks-responsibility" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 17
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  17. Bank&apos;s Legal Responsibility for Recovery Agents
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    A foundational legal principle established by the RBI and Indian courts is the doctrine of <strong>vicarious liability</strong>. Financial institutions cannot wash their hands of illegal recovery actions by claiming the agent is an &quot;independent contractor&quot;.
                  </p>
                  <p>
                    Under paragraph 2.1 of the RBI Master Circular on Recovery Agents: <em>&quot;Banks are advised that they, as the principals, are responsible for the actions of their agents. Hence, in cases where a bank engages recovery agents for recovery of dues, it is appropriate that banks ensure that the agents adhere to the guidelines.&quot;</em>
                  </p>
                  <p>
                    If an agent intimidates a borrower, <strong>the bank is legally deemed to have committed that intimidation</strong>, rendering both the agency and bank senior executives answerable to regulatory bodies and consumer courts.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 18. Can Banks Be Held Responsible for Misconduct?             */}
              {/* ------------------------------------------------------------- */}
              <section id="can-banks-be-held-responsible" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 18
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  18. Can Banks Be Held Responsible for Recovery Agent Misconduct? (Judicial Precedents)
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The Supreme Court of India and High Courts have consistently held commercial banks directly culpable for strong-arm collection tactics:
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl">
                      <strong className="text-blue-950 block">Supreme Court: ICICI Bank v. Shanti Devi Sharma (2008 7 SCC 532):</strong>
                      <p className="text-blue-900 mt-1">
                        The Supreme Court delivered a scathing condemnation of aggressive banking recovery: <em>&quot;We are governed by a rule of law in the country. The recovery of loans or the seizure of vehicles could be done only through legal means. Banks cannot employ muscle men or recovery agents to take the law into their own hands.&quot;</em>
                      </p>
                    </div>
                    <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl">
                      <strong className="text-blue-950 block">Supreme Court: Manager, ICICI Bank Ltd. v. Prakash Kaur (2007 2 SCC 711):</strong>
                      <p className="text-blue-900 mt-1">
                        The Apex Court firmly prohibited lenders from employing recovery agents who use muscular tactics, criminal trespass, or street coercion to recover dues, directing state police to register FIRs against offending banks.
                      </p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  19. RBI Rules for Recovery of Credit Card Dues (Master Direction 2022)
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under the <em>RBI Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022</em>, dedicated consumer protections govern credit card collections:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Explicit Prohibition of Anonymous Calls:</strong> Card issuers must ensure that collection desks disclose their identity immediately and avoid contacting cardholders under misleading pretexts.
                    </li>
                    <li>
                      <strong>Dispute Resolution Window:</strong> If a cardholder disputes specific unauthorized transactions or finance charge calculations, collection activities regarding the disputed portion must be placed on hold until formal investigation is completed.
                    </li>
                    <li>
                      <strong>Fair Settlement Transparency:</strong> Card issuers must provide clear itemization showing the merchant purchase principal versus accrued finance charges and late fees during recovery negotiations.
                    </li>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  20. RBI Rules for Personal Loan Recovery Agents
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Unsecured personal term loans carry fixed monthly EMIs. When non-payment occurs due to salary reduction or job loss, recovery agents often attempt unauthorized pressure:
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p>
                      <strong>Salary Mandate Restrictions:</strong> While lenders hold standing instructions under e-NACH/ECS, agents cannot intimidate borrowers into signing fresh blank cheques or executing coercive promissory notes under duress.
                    </p>
                    <p>
                      <strong>No Criminal Threats for Unsecured Loans:</strong> Default on an unsecured personal loan is strictly a civil dispute. Agents claiming that <em>&quot;an arrest warrant has been issued by the magistrate&quot;</em> are making fraudulent statements punishable under Section 420/506 IPC.
                    </p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  21. RBI Rules for Digital Loan Recovery Agents &amp; FinTech Apps
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    In September 2022, the RBI issued landmark <strong>Digital Lending Guidelines</strong> to eliminate the menace of predatory loan apps:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Total Ban on Contact List &amp; Gallery Scraping:</strong> Lending apps are strictly forbidden from demanding access to the borrower&apos;s phone contacts, photo gallery, call logs, or biometric files.
                    </li>
                    <li>
                      <strong>Criminalization of Morphed Media Threats:</strong> Circulating morphed pictures or sending defamatory messages to a borrower&apos;s contacts constitutes cyber extortion under Sections 66E and 67 of the Information Technology Act, triggering mandatory non-bailable FIRs.
                    </li>
                    <li>
                      <strong>Regulated Entity Mandate:</strong> Only RBI-registered banks or NBFCs can disburse loans; unlicensed digital apps are illegal under Indian law.
                    </li>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  22. RBI Rules for Third-Party Recovery Agencies: Onboarding &amp; Auditing
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under central bank governance norms, regulated entities must enforce strict supervisory oversight over third-party recovery vendors:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong>Public Agency Directory:</strong>
                      <p className="text-gray-600 mt-1">Banks must publish a complete list of all empaneled recovery agencies on their official website, accessible to the general public.</p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <strong>Periodic Conduct Audits:</strong>
                      <p className="text-gray-600 mt-1">Lenders must perform quarterly compliance audits of collection agencies, reviewing recorded calls and resolving customer grievance logs.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 23. RBI Rules on Training and Certification                   */}
              {/* ------------------------------------------------------------- */}
              <section id="rules-agent-training-conduct" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 23
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  23. RBI Rules on Recovery Agent Training, IIBF Certification &amp; Ethics
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The Reserve Bank mandates that every individual deployed for recovery must complete the <strong>Debt Recovery Agent (DRA) certificate course</strong> through the Indian Institute of Banking &amp; Finance (IIBF).
                  </p>
                  <p>
                    The curriculum includes 100 hours of pedagogical training for non-graduates (50 hours for graduates) covering consumer rights, ethical communication, fair debt collection practices, legal boundaries, and privacy protection. Deploying uncertified personnel is an actionable regulatory infraction.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 24. Recovery Agent Code of Conduct                            */}
              {/* ------------------------------------------------------------- */}
              <section id="recovery-agent-code-of-conduct" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 24
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  24. The Indian Banks&apos; Association (IBA) Recovery Agent Code of Conduct
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    In addition to RBI circulars, all public and private commercial banks subscribe to the <strong>Model Code of Conduct for Recovery Agents</strong> formulated by the Indian Banks&apos; Association (IBA):
                  </p>
                  <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2 text-xs sm:text-sm">
                    <strong className="block text-blue-400 font-bold">Key Tenets of the IBA Model Code:</strong>
                    <ul className="space-y-1 list-disc pl-4 text-slate-300">
                      <li>Contact customers at reasonable hours, avoiding unusual times.</li>
                      <li>Never mislead the customer about the consequences of non-payment.</li>
                      <li>Never damage property or enter residential premises without permission.</li>
                      <li>Handle all customer interactions with courtesy, patience, and dignity.</li>
                      <li>Provide immediate, authentic receipts for any payment received.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 25. What Recovery Agents Cannot Do                            */}
              {/* ------------------------------------------------------------- */}
              <section id="what-recovery-agents-cannot-do" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 25
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  25. What Recovery Agents Cannot Do: Complete Prohibited Actions Checklist
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    For quick reference, here is the exhaustive, authoritative catalog of actions that recovery representatives are <strong>strictly barred</strong> from performing under Indian law and RBI directives:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-red-50/70 border border-red-200 rounded-xl space-y-1.5">
                      <strong className="text-red-950 font-bold block">Communications &amp; Timing</strong>
                      <ul className="text-red-900 space-y-1 list-disc pl-4 text-xs">
                        <li>Calling before 08:00 AM or after 07:00 PM</li>
                        <li>Spamming with repeated calls throughout the day</li>
                        <li>Using masked, spoofed, or private caller IDs</li>
                        <li>Using abusive, filthy, or insulting language</li>
                        <li>Calling family members, friends, or neighbors</li>
                      </ul>
                    </div>
                    <div className="p-3.5 bg-red-50/70 border border-red-200 rounded-xl space-y-1.5">
                      <strong className="text-red-950 font-bold block">Physical Conduct &amp; Legal Coercion</strong>
                      <ul className="text-red-900 space-y-1 list-disc pl-4 text-xs">
                        <li>Visiting workplace uninvited or creating office scenes</li>
                        <li>Threatening police arrest, FIRs, or jail detention</li>
                        <li>Entering bedrooms or refusing to leave when asked</li>
                        <li>Confiscating vehicles or household items without court orders</li>
                        <li>Demanding cash payments without official bank receipts</li>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  26. What Recovery Agents Can Legally Do: Legitimate Collection Rights
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Borrowers often ask: <em>&quot;What rights DOES the bank actually have?&quot;</em> Lenders are entitled to pursue legitimate recovery of delinquent funds through civilized channels:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Civil Reminders:</strong> Placing courteous phone calls between 08:00 AM and 07:00 PM to remind the customer of the overdue balance and inquiry regarding repayment schedules.
                    </li>
                    <li>
                      <strong>Official Written Notices:</strong> Delivering formal demand notices, recall letters, or restructuring dockets via post or registered email.
                    </li>
                    <li>
                      <strong>Verified In-Person Meetings:</strong> Visiting the borrower&apos;s residence during daylight hours, while carrying authentic photo ID and a valid bank authorization letter.
                    </li>
                    <li>
                      <strong>Initiating Lawful Judicial Redressal:</strong> Filing summary recovery suits under Order 37 CPC, petitioning before Lok Adalat, or presenting formal legal notices under Section 138 NI Act or Section 25 PSSA for bounced instruments.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 27. Can Recovery Agents Visit Your Home or Workplace?          */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-visit-home-workplace" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 27
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  27. Can Recovery Agents Visit Your Home or Workplace?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>Home Visits:</strong> Permitted ONLY during daylight hours (08:00 AM to 07:00 PM), provided the agents carry valid ID and the Letter of Authority. They cannot force entry, must remain in the living room or reception area, and must leave immediately if the borrower requests a postponement due to emergency or distress.
                  </p>
                  <p>
                    <strong>Workplace Visits:</strong> Under RBI Fair Practice directives, visiting an office or employment site is strictly discouraged. It is permissible <strong>only</strong> if the borrower has completely absconded from their residential address or consistently refuses all telephonic contact. Visiting an office to publicly humiliate an employee violates the borrower&apos;s right to livelihood.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 28. Can Recovery Agents Call Your Family Members?             */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-call-family-members" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 28
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  28. Can Recovery Agents Call Your Family Members?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>ABSOLUTELY NOT.</strong> The debt agreement is a private contract solely between the primary borrower, co-borrower, and formally signed guarantors.
                  </p>
                  <p>
                    Spouses, aging parents, children, and siblings are <strong>third parties</strong> in the eyes of the law. Contacting family members to demand money, discuss loan defaults, or apply psychological pressure is a direct violation of the RBI Master Circular and constitutes criminal harassment under Section 351 BNS.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 29. Can Recovery Agents Contact Your Employer?                */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-contact-employer" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 29
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  29. Can Recovery Agents Contact Your Employer?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>NO.</strong> A lender or collection agency cannot contact your reporting manager, Human Resources (HR) department, or company directors to demand EMI payments or complain about your financial status.
                  </p>
                  <p>
                    Unless an employee explicitly signed a voluntary salary deduction agreement (such as a formal employer salary-tie-up loan facility), the employer has zero role or liability in an employee&apos;s personal debts. Doing so entitles the borrower to pursue civil defamation and regulatory complaints.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 30. Can Recovery Agents Threaten or Abuse Borrowers?          */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-threaten-abuse-borrowers" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 30
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  30. Can Recovery Agents Threaten or Abuse Borrowers?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>STRICTLY ILLEGAL.</strong> Threatening, shouting, using foul language, or making insinuations regarding a borrower&apos;s moral character are criminal acts.
                  </p>
                  <p>
                    Under Bharatiya Nyaya Sanhita, 2023:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li><strong>Section 351 BNS (Criminal Intimidation):</strong> Imprisonment up to two years.</li>
                    <li><strong>Section 352 BNS (Intentional Insult):</strong> Imprisonment up to two years with fine.</li>
                    <li><strong>Section 79 BNS (Word, gesture or act intended to insult modesty of a woman):</strong> Non-bailable offense carrying rigorous imprisonment up to three years.</li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 31. Can Recovery Agents Use Police or Legal Threats?          */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-use-police-legal-threats" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 31
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  31. Can Recovery Agents Use Police or Legal Threats?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Collection callers often impersonate police inspectors or claim: <em>&quot;The police have registered an FIR and will arrive at your home with an arrest warrant in two hours.&quot;</em>
                  </p>
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-950 text-xs sm:text-sm space-y-1.5">
                    <strong>Legal Reality in India:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Police officers have <strong>zero statutory authority</strong> to recover commercial bank debts or arrest individuals for loan defaults.</li>
                      <li>Impersonating a public servant or police officer is a serious offense under Section 204 BNS (Section 170 IPC), punishable by imprisonment.</li>
                      <li>Arrest warrants can ONLY be issued by judicial magistrates after formal trial proceedings, never by a collection agency telecaller.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 32. Can Recovery Agents Seize Your Property?                  */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-seize-property" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 32
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  32. Can Recovery Agents Seize Your Property?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>Unsecured Loans &amp; Credit Cards:</strong> Recovery agents have <strong>ZERO legal right</strong> to touch or seize your television, jewelry, electronics, furniture, or private vehicles. Unsecured loans carry no collateral mortgage. Confiscating items constitutes robbery and extortion under Section 308/383 BNS.
                  </p>
                  <p>
                    <strong>Secured Asset Loans (Auto/Home Loans):</strong> Even for secured collateral, repossession must adhere strictly to the <strong>SARFAESI Act, 2002</strong> or legal repossession protocols. In <em>ICICI Bank v. Prakash Kaur</em>, the Supreme Court ruled that banks cannot forcibly tow vehicles using goons; formal statutory notices and inventory dockets are mandatory.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 33. Can Recovery Agents Force You to Pay Immediately?         */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-force-immediate-payment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 33
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  33. Can Recovery Agents Force You to Pay Immediately?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Agents cannot stand over you, block your doorway, or demand that you borrow from relatives, sell household belongings, or transfer funds via personal UPI handles on the spot.
                  </p>
                  <p>
                    Under Indian contract law, repayment must be voluntary. Borrowers have the protected legal right to review bank statements, calculate accurate dues, consult legal counsel, and remit funds solely into official bank accounts.
                  </p>
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
                  <p className="text-xs sm:text-sm text-indigo-200 mb-6 leading-relaxed">
                    Select the specific misconduct you are experiencing to determine which RBI master directives were breached, applicable penal statutes under Bharatiya Nyaya Sanhita, and immediate legal remedies.
                  </p>

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
                        <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-700">
                          {violationAnalysis.rbiBreach}
                        </p>
                      </div>
                      <div>
                        <strong className="text-indigo-200 block mb-1">Applicable Penal Law Offenses:</strong>
                        <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-700">
                          {violationAnalysis.penalOffense}
                        </p>
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
              {/* 34. Rights of Borrowers Against Recovery Agent Harassment     */}
              {/* ------------------------------------------------------------- */}
              <section id="rights-of-borrowers" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 34
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  34. Rights of Borrowers Against Recovery Agent Harassment: The Citizen&apos;s Shield
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Every citizen in India holds enforceable fundamental and consumer rights that no financial institution can override:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-xs space-y-1">
                      <strong className="text-gray-900 block font-bold">1. Right to Dignity &amp; Respect</strong>
                      <p className="text-gray-600">Article 21 guarantees life with human dignity. Civil financial inability cannot be used to humiliate or browbeat an individual.</p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-xs space-y-1">
                      <strong className="text-gray-900 block font-bold">2. Right to Privacy</strong>
                      <p className="text-gray-600">Your debt history is private confidential data. It cannot be broadcast to relatives, employers, or society guards.</p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-xs space-y-1">
                      <strong className="text-gray-900 block font-bold">3. Right to Legal Representation</strong>
                      <p className="text-gray-600">Under the Advocates Act, 1961, you have the right to instruct an advocate to handle all creditor communications on your behalf.</p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-xs space-y-1">
                      <strong className="text-gray-900 block font-bold">4. Right to Fair Dispute Redressal</strong>
                      <p className="text-gray-600">Access to bank grievance cells, Principal Nodal Officers, and the RBI Integrated Ombudsman without court filing costs.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 35. What to Do If a Recovery Agent Harasses You               */}
              {/* ------------------------------------------------------------- */}
              <section id="what-to-do-if-agent-harasses" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 35
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  35. What to Do If a Recovery Agent Harasses You: Emergency Action Protocol
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    When an agent crosses legal boundaries, do not panic or plead. Execute this systematic 4-step emergency protocol:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Stay Calm and Firm:</strong> Do not engage in arguments or reciprocate with profanity. Maintain a composed, assertive tone.
                    </li>
                    <li>
                      <strong>Demand Complete Credentials:</strong> State clearly: <em>&quot;Please show your IIBF certificate, your institutional photo ID, and the bank&apos;s Letter of Authority for this account.&quot;</em>
                    </li>
                    <li>
                      <strong>Commence Audio/Video Recording:</strong> Inform the agent: <em>&quot;This conversation is being recorded for legal evidence and regulatory complaints.&quot;</em> Agents often retreat the moment a camera is pointed at them.
                    </li>
                    <li>
                      <strong>Direct Them to Written Communication:</strong> Instruct them: <em>&quot;Any further communication must be delivered in writing via registered post or official email to my legal representative.&quot;</em>
                    </li>
                  </ol>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 36. How to Respond to Recovery Agent Calls                    */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-respond-to-agent-calls" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 36
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  36. How to Respond to Recovery Agent Calls: Verbatim Script for Borrowers
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Use this battle-tested legal script when receiving high-pressure collection phone calls:
                  </p>
                  <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs sm:text-sm space-y-2 border border-slate-700">
                    <p className="text-emerald-400 font-bold">// VERBATIM TELECALL RESPONSE SCRIPT</p>
                    <p>&quot;Please note that this call is being recorded for evidentiary submission to the RBI Ombudsman and local police authorities.&quot;</p>
                    <p>&quot;State your full legal name, your agency name, your IIBF DRA registration number, and the official email ID of your bank supervisor.&quot;</p>
                    <p>&quot;I am facing documented economic hardship. I refuse to entertain verbal threats or unverified demands. Send all formal notices in writing on official bank letterhead.&quot;</p>
                    <p>&quot;If you call outside 8:00 AM–7:00 PM or contact my family members, I will immediately register an FIR for criminal intimidation under Section 351 BNS.&quot;</p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  37. How to Handle Recovery Agent Visits to Your Home
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    If agents arrive at your doorstep, observe these defensive guidelines:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Do Not Permit Entry Beyond the Doorstep:</strong> You are not legally required to invite collection agents inside your home. Speak to them at the doorway or building lobby.
                    </li>
                    <li>
                      <strong>Verify Physical ID Cards:</strong> Take a clear photo of their ID card and the Letter of Authority using your phone camera. If they refuse to show credentials, inform them they are trespassing.
                    </li>
                    <li>
                      <strong>Call Building Security or Police Control (112):</strong> If agents become loud, aggressive, or refuse to vacate your premises, dial <strong>112</strong> immediately and report criminal trespass and breach of peace.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 38. Evidence to Collect Against Harassment                    */}
              {/* ------------------------------------------------------------- */}
              <section id="evidence-to-collect" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 38
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  38. Critical Evidence to Collect Against Recovery Agent Harassment
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Regulatory bodies like the RBI Ombudsman and Consumer Forums decide cases based on <strong>contemporaneous evidence</strong>. Assembling solid proof is crucial:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong>Electronic Call Recordings:</strong>
                      <p className="text-gray-600 mt-1">Clear audio recordings showing dates, timestamps, agent statements, and background noises.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong>Call Detail Records (CDR):</strong>
                      <p className="text-gray-600 mt-1">Screenshots of your mobile incoming call log proving continuous calling or odd-hour calls (before 8 AM / after 7 PM).</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong>SMS &amp; WhatsApp Screenshots:</strong>
                      <p className="text-gray-600 mt-1">Screenshots of threatening text messages, fake arrest notices, or messages sent to third-party relatives.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <strong>CCTV Footage &amp; Photographs:</strong>
                      <p className="text-gray-600 mt-1">Video footage from society gates, building corridors, or doorstep cameras showing agent physical presence and demeanor.</p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  39. How to Record and Document Recovery Agent Misconduct Legally
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>Is call recording legal in India?</strong> Yes. Under Indian evidence law, recording a conversation in which you are an active participant is fully permissible and admissible as electronic evidence under Section 65B of the Indian Evidence Act (now Section 63 of Bharatiya Sakshya Adhiniyam, 2023).
                  </p>
                  <p>
                    Maintain a chronological <strong>Harassment Incident Log</strong> noting: Date, Time, Caller Phone Number, Name Stated, Agency Claimed, Specific Threats Made, and the Call Recording File Name. This structured dossier forms the bedrock of legal notices and ombudsman complaints.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 40. How to Complain Against a Recovery Agent                  */}
              {/* ------------------------------------------------------------- */}
              <section id="how-to-complain-against-agent" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 40
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  40. How to Complain Against a Recovery Agent: Three-Tier Escalation Hierarchy
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The Reserve Bank of India mandates a structured, multi-tier grievance redressal ladder for handling recovery misconduct. Skipping steps can delay resolution, so following the statutory order is essential:
                  </p>
                  <div className="space-y-3 my-3">
                    <div className="p-3.5 bg-blue-50/60 border border-blue-200 rounded-xl">
                      <strong className="text-blue-950 block text-xs sm:text-sm font-bold">Tier 1: Bank Grievance Redressal Officer (GRO) &amp; Branch Manager</strong>
                      <p className="text-xs text-blue-900 mt-1">Submit a formal written complaint with evidence to the bank branch and GRO. The bank has a 30-day statutory window to investigate and provide written resolution.</p>
                    </div>
                    <div className="p-3.5 bg-indigo-50/60 border border-indigo-200 rounded-xl">
                      <strong className="text-indigo-950 block text-xs sm:text-sm font-bold">Tier 2: Bank Principal Nodal Officer (PNO)</strong>
                      <p className="text-xs text-indigo-900 mt-1">If the branch fails to act within 7–10 days, escalate directly to the lender&apos;s apex Principal Nodal Officer at their corporate headquarters.</p>
                    </div>
                    <div className="p-3.5 bg-purple-50/60 border border-purple-200 rounded-xl">
                      <strong className="text-purple-950 block text-xs sm:text-sm font-bold">Tier 3: RBI Integrated Ombudsman (CMS Portal)</strong>
                      <p className="text-xs text-purple-900 mt-1">If the bank fails to resolve the complaint within 30 days or rejects it unsatisfactorily, file an online appeal on <strong>cms.rbi.org.in</strong>.</p>
                    </div>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  41. How to Complain to the Bank or NBFC: Formal Complaint Template
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Always submit complaints via <strong>Registered Post with Acknowledgment Due (RPAD)</strong> and through the bank&apos;s official grievance email gateway to establish an irrefutable paper trail.
                  </p>
                  <div className="p-4 bg-gray-50 border border-gray-300 rounded-2xl text-xs sm:text-sm space-y-2">
                    <strong className="text-gray-900 block font-bold">Essential Components of an Effective Bank Complaint:</strong>
                    <ul className="list-disc pl-4 space-y-1 text-gray-700 text-xs">
                      <li>Your full name, registered mobile number, and loan/card account number.</li>
                      <li>Specific dates, exact times, and phone numbers of the offending recovery calls or visits.</li>
                      <li>Detailed description of the abusive words, threats, or third-party contacts made.</li>
                      <li>Explicit citation of <em>RBI Master Circular on Recovery Agents (August 12, 2022)</em>.</li>
                      <li>Demand for immediate de-allocation of the agency and a written confirmation of remedial action.</li>
                    </ul>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  42. RBI Complaint Process Against Recovery Agents: Step-by-Step Guide
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The Reserve Bank provides a centralized electronic mechanism for consumers to hold regulated lenders directly accountable:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Access the Official CMS Portal:</strong> Visit <em>cms.rbi.org.in</em> (the Reserve Bank&apos;s Complaint Management System).
                    </li>
                    <li>
                      <strong>Select Regulated Entity:</strong> Choose whether the lender is a Public Sector Bank, Private Commercial Bank, Small Finance Bank, or NBFC.
                    </li>
                    <li>
                      <strong>Select Complaint Category:</strong> Under grievance category, choose <em>&quot;Loans and Advances&quot;</em> &gt; <em>&quot;Recovery Agent Conduct / Harassment&quot;</em>.
                    </li>
                    <li>
                      <strong>Upload Verified Evidence:</strong> Attach your call recordings, call log screenshots, bank grievance ticket reference, and identity proofs.
                    </li>
                    <li>
                      <strong>Track Complaint Reference Number:</strong> The CMS assigns an official complaint tracking number with statutory turnaround monitoring.
                    </li>
                  </ol>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 43. RBI Integrated Ombudsman Scheme                           */}
              {/* ------------------------------------------------------------- */}
              <section id="rbi-integrated-ombudsman-scheme" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 43
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  43. The RBI Integrated Ombudsman Scheme (RB-IOS): Powers &amp; Compensation
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under the <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021</strong>, the Ombudsman holds quasi-judicial powers to penalize errant institutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <strong className="text-emerald-950 font-bold block">Compensation for Mental Anguish:</strong>
                      <p className="text-emerald-900 mt-1">The Ombudsman can award compensation up to <strong>₹1,00,000</strong> directly to the complainant for mental harassment, loss of time, and emotional distress.</p>
                    </div>
                    <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <strong className="text-emerald-950 font-bold block">Consequential Loss Awards:</strong>
                      <p className="text-emerald-900 mt-1">For direct financial loss caused by unlawful recovery or unauthorized debits, the Ombudsman can award damages up to <strong>₹20,00,000</strong>.</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    Ombudsman awards are binding upon the financial institution, and the bank must comply within 30 days of the order.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 44. When to Approach the Police                               */}
              {/* ------------------------------------------------------------- */}
              <section id="when-to-approach-police" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 44
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  44. When to Approach the Police: Criminal Violations vs Civil Disputes
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    While non-payment of an unsecured loan is purely a civil disagreement, <strong>recovery harassment frequently escalates into criminal conduct</strong>. You should approach the local police station immediately under these circumstances:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Physical Violence or Assault (Section 115 BNS):</strong> Any physical scuffle, manhandling, or assault.
                    </li>
                    <li>
                      <strong>Criminal Trespass (Section 329 BNS):</strong> Agents entering your private home without consent or refusing to leave.
                    </li>
                    <li>
                      <strong>Extortion &amp; Robbery (Section 308/383 BNS):</strong> Forcibly confiscating personal items, vehicle keys, or forcing UPI transfers.
                    </li>
                    <li>
                      <strong>Outraging Modesty of Women (Section 79 BNS):</strong> Any obscene, menacing, or sexually suggestive words directed at female family members.
                    </li>
                  </ul>
                  <p className="text-xs text-gray-600">
                    If the local station house officer (SHO) refuses to register an FIR, file a written complaint to the Superintendent of Police (SP) or Deputy Commissioner of Police (DCP) under Section 175(3) BNSS (formerly Section 154(3) CrPC).
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 45. Legal Remedies Against Recovery Agent Harassment           */}
              {/* ------------------------------------------------------------- */}
              <section id="legal-remedies-harassment" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 45
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  45. Judicial Legal Remedies: Injunctions, Damages &amp; Quashing
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Through experienced banking litigation advocates, distressed citizens can invoke multiple judicial remedies:
                  </p>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <p>
                      <strong>1. Civil Injunction Against Harassment:</strong> Filing a civil suit under Order 39 Rules 1 &amp; 2 CPC seeking a permanent injunction restraining the bank, its managers, and third-party recovery vendors from visiting the borrower&apos;s home or calling workplace numbers.
                    </p>
                    <p>
                      <strong>2. Formal Representation Notice Under Advocates Act, 1961:</strong> When an advocate issues a formal Legal Representation Notice, all direct communication to the borrower must cease; failure by the lender constitutes an actionable tort.
                    </p>
                    <p>
                      <strong>3. Writ Petition Before the High Court:</strong> Under Article 226 of the Constitution, borrowers facing egregious fundamental rights violations can petition High Courts for writ directions against commercial banks to halt coercive recovery.
                    </p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  46. Recovery Harassment and the Consumer Protection Act, 2019
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under the <strong>Consumer Protection Act, 2019</strong>, a banking customer is a statutory consumer. Strong-arm recovery practices constitute both a <strong>&quot;Deficiency in Service&quot;</strong> and an <strong>&quot;Unfair Trade Practice&quot;</strong> under Section 2(47).
                  </p>
                  <p>
                    District Consumer Commissions routinely award substantial financial compensation (ranging from ₹50,000 to ₹10 Lakhs) against major banks for humiliating customers, making abusive calls, or sending recovery agents to residential apartments.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 47. Privacy Rights Protections                                */}
              {/* ------------------------------------------------------------- */}
              <section id="harassment-privacy-rights" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 47
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  47. Recovery Agent Harassment and Fundamental Privacy Rights
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The intersection of the <em>Digital Personal Data Protection Act, 2023</em> and constitutional privacy jurisprudence provides unprecedented legal ammunition against illegal debt collection:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Unlawful Data Sharing:</strong> Banks that hand over unvetted customer contact lists, Aadhaar details, or financial statements to unauthorized collection vendors commit major regulatory data breaches.
                    </li>
                    <li>
                      <strong>Right to Informational Autonomy:</strong> A citizen has the constitutionally protected right to control who accesses their private residential address and phone number for debt discussions.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 48. Legal Consequences for Misconduct                         */}
              {/* ------------------------------------------------------------- */}
              <section id="harassment-legal-consequences" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 48
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  48. Legal Consequences for Errant Banks &amp; Misconducting Agents
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    When recovery violations are formally proved before regulators, the consequences on lending institutions and collection vendors are severe:
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p>
                      <strong>1. Regulatory Ban on Outsourced Recovery:</strong> Paragraph 2.6 of the RBI Master Circular empowers the Reserve Bank to <strong>ban a bank from engaging recovery agents</strong> in a specific geographical area for a specified period (typically 6 months to 1 year) if persistent harassment complaints are substantiated.
                    </p>
                    <p>
                      <strong>2. Blacklisting of Collection Agencies:</strong> Offending agencies face permanent blacklisting across the entire Indian banking sector through the Indian Banks&apos; Association (IBA) vendor database.
                    </p>
                    <p>
                      <strong>3. Multi-Crore RBI Monetary Penalties:</strong> The RBI regularly slaps multi-crore fines on major private and public banks for outsourcing violations and unfair recovery practices.
                    </p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  49. Common Recovery Agent Harassment Scenarios &amp; Proven Defense Tactics
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="text-slate-900 block font-bold">Scenario A: &quot;We will have your Aadhaar and PAN card permanently cancelled!&quot;</strong>
                      <p className="text-slate-600 mt-1"><em>Legal Truth:</em> Completely fraudulent lie. No bank, court, or recovery agent has statutory power to cancel a citizen&apos;s PAN or Aadhaar for financial defaults.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="text-slate-900 block font-bold">Scenario B: &quot;Pay via UPI to this agent phone number immediately for waiver!&quot;</strong>
                      <p className="text-slate-600 mt-1"><em>Legal Truth:</em> Classic recovery fraud. The money goes into the agent&apos;s personal account; the bank never credits the loan and continues recovery.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="text-slate-900 block font-bold">Scenario C: &quot;We are standing outside your office building with police!&quot;</strong>
                      <p className="text-slate-600 mt-1"><em>Legal Truth:</em> Pure psychological bluff. Police cannot accompany recovery agents for unsecured civil defaults. Dial 112 if they cause a public disturbance.</p>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  50. Frequently Asked Questions About RBI Recovery Agent Rules
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  Authoritative legal, procedural, and statutory guidance addressing consumer rights against debt collection agents in India:
                </p>

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
                          <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base leading-snug">
                            {faq.question}
                          </span>
                          <span className="text-blue-600 font-bold text-lg sm:text-xl flex-shrink-0">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-3.5 sm:p-4 pt-0 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/40">
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  51. Latest RBI Rules and Policy Updates for Recovery Agents (2026 Edition)
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    As retail lending increasingly digitizes, the Reserve Bank continues to tighten recovery surveillance:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Real-Time AI Telecall Audits:</strong> Major scheduled commercial banks are mandated to deploy speech analytics engines on 100% of collection calls to detect abusive keywords, shouting tones, or odd-hour calls automatically.
                    </li>
                    <li>
                      <strong>Digital Harassment Penalties:</strong> Central bank directives classify morphing photos or contacting phone contact lists as cyber extortion, subjecting fintech executives to direct criminal culpability.
                    </li>
                    <li>
                      <strong>Mandatory Grievance Escalation Links:</strong> All debt reminder SMS and WhatsApp notices must incorporate direct hyperlinks to the bank&apos;s Principal Nodal Officer complaints page.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 52. Conclusion – Rights and Protections Against Harassment    */}
              {/* ------------------------------------------------------------- */}
              <section id="conclusion-protections" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 52
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight break-words">
                  52. Conclusion: Standing Tall Against Debt Harassment With CredSettle
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Economic adversity is a temporary hardship, but your personal dignity, constitutional liberty, and peace of mind are non-negotiable. <strong>You do not have to endure abusive calls, doorstep intimidation, or public humiliation in silence.</strong>
                  </p>
                  <p>
                    Under the protective umbrella of the Reserve Bank of India&apos;s Master Directives and the Advocates Act of 1961, <strong>CredSettle provides fearless, comprehensive legal defense</strong>. Our senior banking litigation advocates step between you and aggressive collection agencies—halting unauthorized calls, countering illegal threats, filing statutory ombudsman petitions, and transitioning contentious disputes toward peaceful, honorable debt resolution.
                  </p>

                  <div className="p-5 sm:p-7 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-2xl sm:rounded-3xl text-white shadow-lg space-y-3 text-center my-6">
                    <h3 className="text-lg sm:text-2xl font-black text-white">
                      Put an Immediate Stop to Recovery Agent Harassment
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-200 max-w-xl mx-auto leading-relaxed">
                      Connect with CredSettle’s verified banking defense advocates. We issue legal representation notices within 24 hours, shielding you, your family, and your workplace.
                    </p>
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
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                    Our dedicated banking defense advocates enforce RBI consumer fair-practice codes, shield your family from recovery calls, and secure legal protection under the Advocates Act.
                  </p>
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
          <div className="lg:w-[15%] flex-shrink-0 hidden lg:block">
            <div className="sticky top-20 space-y-4">

              <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-blue-200 text-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center text-sm mb-2">
                  🛡️
                </span>
                <h4 className="font-bold text-xs text-gray-900 mb-1">Stop Harassment Now</h4>
                <p className="text-[10px] text-gray-600 mb-3 leading-tight">
                  Legal notices stop illegal recovery calls within 24–48 hrs.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-[11px]"
                >
                  Request Legal Callback
                </Link>
                <div className="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-gray-500 space-y-1 text-left">
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% Confidential</p>
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> RBI Fair Code</p>
                  <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> High-Court Advocates</p>
                </div>
              </div>

              {/* Diagnostic Quick Jump Badge */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-slate-700">
                <span className="font-bold text-slate-900 block text-[11px]">Violation Checker</span>
                <p className="text-[10px] text-slate-500 leading-tight">Check if your lender breached RBI calling hours or privacy rules.</p>
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

            </div>
          </div>

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
          className="bg-white/90 hover:bg-white text-slate-800 border border-slate-200 text-xs font-bold p-2.5 rounded-full shadow-md active:scale-95 transition-transform flex items-center justify-center w-10 h-10"
          aria-label="Scroll to Top"
        >
          <span>↑</span>
        </button>
      </div>

      <Footer />
    </div>
  );
}
