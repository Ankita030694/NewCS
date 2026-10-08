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
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-black px-2">
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
                <h3 className="font-bold text-black text-xs">Table of Contents</h3>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">52</span>
              </div>

              <div className="space-y-2.5 flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar max-h-full">
                {navModules.map((module, mIdx) => (
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
                  1. Introduction to RBI Rules for Recovery Agents: Statutory Shield for Indian Borrowers
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Over the past decade, retail credit in India has experienced an unprecedented expansion. Millions of salaried professionals, small enterprise owners, gig workers, and middle-class households depend on credit cards, personal loans, vehicle financing, and digital consumer lines to manage emergencies and fund enterprise initiatives. However, when economic turbulence strikes—such as sudden job retrenchment, catastrophic medical hospitalization, or business insolvency—borrowers frequently experience temporary or acute debt delinquency.
                  </p>
                  <p>
                    Under the jurisprudence established by the <strong>Reserve Bank of India (RBI)</strong> and the Constitution of India, <strong>loan default due to bona fide financial incapacity is strictly a civil contractual matter—it is never a criminal offense</strong>. Regrettably, commercial banks, non-banking financial companies (NBFCs), and digital lending apps historically outsourced debt recovery to unregulated collection agencies that weaponized coercion: relentless telecalling, doorstep intimidation, character assassination, and defamatory outreach to relatives and workplace employers.
                  </p>
                  <p>
                    To dismantle these predatory practices and protect the fundamental dignity of citizens under Article 21 of the Constitution, the Reserve Bank of India enacted a robust, legally binding regulatory regime. Headlined by the <em>Master Circular on Recovery Agents in Banks</em>, the <em>Master Direction on Outsourcing of Financial Services</em>, and the <em>Master Direction DOR.ORG.REC.65/21.04.158/2022-23</em>, the central bank established strict, inviolable boundaries between legitimate debt communication and unlawful criminal harassment.
                  </p>
                  <div className="p-4 sm:p-5 bg-blue-50/80 rounded-2xl border border-blue-200 text-xs sm:text-sm text-blue-950 space-y-2.5">
                    <span className="font-bold block text-blue-900 text-sm sm:text-base">Foundational Regulatory Principle (RBI Master Circular):</span>
                    <p className="leading-relaxed">
                      &quot;Regulated Entities (REs) must strictly ensure that they or their recovery agents do not resort to intimidation or harassment of any kind, either verbally or physically, against any person in their debt collection efforts, including acts intended to humiliate publicly or intrude upon the privacy of the debtors&apos; family members, referees, or friends.&quot;
                    </p>
                    <p className="text-[11px] sm:text-xs text-blue-800 font-medium">
                      — Mandated under Paragraph 2.4 of RBI Master Circular on Recovery Agents &amp; Master Direction DOR.ORG.REC.65/21.04.158/2022-23.
                    </p>
                  </div>
                  <p>
                    This statutory framework applies universally across all <strong>Regulated Entities (REs)</strong>—including Public Sector Banks, Private Commercial Banks, Foreign Banks, Small Finance Banks, Regional Rural Banks, Co-operative Banks, and all systemically important Non-Banking Financial Companies (NBFCs). Whether you are dealing with a nationalized bank or a digital fintech lender, these regulatory shields provide you with unconditional legal immunity against intimidation.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  2. What Are Recovery Agents? Structure, Function, and Industry Architecture
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    In the contemporary Indian financial architecture, <strong>recovery agents</strong> (also termed debt recovery agencies, loan recovery service providers, or collection business correspondents) are specialized external corporate entities, partnership firms, or third-party call centers contracted by regulated financial institutions to follow up on overdue retail credit facilities and assist in the recovery of delinquent balances.
                  </p>
                  <p>
                    Because scheduled commercial lenders disburse millions of consumer loans annually, branch managers and credit underwriting teams lack the operational bandwidth to personally contact borrowers whose accounts slip into delinquency. Financial institutions categorize overdue accounts into progressive risk buckets based on Days Past Due (DPD):
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="text-black block text-xs sm:text-sm font-bold">SMA-0 (1 to 30 Days Overdue)</strong>
                      <p className="text-xs text-black mt-1">Handled via automated SMS reminders, email statements, and internal soft-touch telecalling desks.</p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                      <strong className="text-blue-950 block text-xs sm:text-sm font-bold">SMA-1 (31 to 60 Days Overdue)</strong>
                      <p className="text-xs text-blue-900 mt-1">Assigned to primary outbound telecalling centers and external agency recovery desks.</p>
                    </div>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                      <strong className="text-amber-950 block text-xs sm:text-sm font-bold">SMA-2 (61 to 90 Days Overdue)</strong>
                      <p className="text-xs text-amber-900 mt-1">Escalated to specialized field investigation teams and doorstep collection agencies.</p>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                      <strong className="text-red-950 block text-xs sm:text-sm font-bold">NPA (90+ Days Consecutive Default)</strong>
                      <p className="text-xs text-red-900 mt-1">Classified as Non-Performing Asset; allocated to legal recovery verticals and hard-collection agencies.</p>
                    </div>
                  </div>
                  <p>
                    Once an account enters SMA-1 or SMA-2 classification, the creditor bank typically assigns the portfolio to an outsourced collection agency on a <strong>success-fee contingency model</strong>. Under these contracts, agencies earn between 5% and 25% of any money recovered from the borrower. It is precisely this aggressive financial incentive structure that frequently tempts unethical agents to violate RBI rules and deploy intimidation tactics unless restrained by legally informed consumers.
                  </p>

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
                          <td className="p-3">Outbound digital phone calls, automated IVR reminders, SMS, and WhatsApp notices for early delinquent accounts (1–60 DPD).</td>
                          <td className="p-3">TRAI UCC registration, strict 8 AM to 7 PM calling window, mandatory voice recording, and daily frequency caps.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-black">Field Investigation Teams</td>
                          <td className="p-3">In-person residential and commercial visits to verify borrower domicile, assess financial distress, and deliver formal bank dockets.</td>
                          <td className="p-3">Mandatory IIBF DRA certification, police antecedent clearance, official bank Letter of Authority, and daytime visit rules.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-black">Legal Conciliation Verticals</td>
                          <td className="p-3">Coordinating formal dispute resolution, pre-litigation settlement conferences, and Lok Adalat compromise applications.</td>
                          <td className="p-3">Sections 19–21 of Legal Services Authorities Act, 1987, and RBI Master Direction on Compromise Settlements.</td>
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
                  3. Who Is a Recovery Agent? Statutory Qualifications &amp; Mandatory Credentials
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under RBI prudential guidelines, an individual cannot simply print visiting cards and claim to be a bank recovery representative. The central monetary authority mandates that any person deployed for debt collection must satisfy four mandatory statutory criteria before contacting any borrower:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Mandatory IIBF Certification (DRA):</strong> Every recovery agent must undergo a mandatory 50-hour (for graduates) or 100-hour (for non-graduates) specialized training program administered by the <strong>Indian Institute of Banking &amp; Finance (IIBF)</strong> and clear the official Debt Recovery Agent (DRA) examination covering banking law, consumer rights, and ethical recovery conduct.
                    </li>
                    <li>
                      <strong>Police Background Antecedent Verification:</strong> Regulated lenders must conduct comprehensive police background checks through local police authorities to ensure that the candidate has no prior criminal records, FIRs, or charges involving extortion, physical assault, extortionate threats, or moral turpitude.
                    </li>
                    <li>
                      <strong>Individualized Bank Letter of Authority:</strong> The agent must carry an authentic, non-transferable Letter of Authority issued on the bank&apos;s official letterhead. This document must state the agent&apos;s full name, agency registration details, photograph, the specific loan account number, and the authorized scope of interaction, signed by a senior bank officer.
                    </li>
                    <li>
                      <strong>Institutional Photo Identity Card:</strong> The agent must prominently display an institutional ID card displaying their full legal name, photograph, agency employer, and the bank division they are authorized to represent.
                    </li>
                  </ul>
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-1.5">
                    <strong className="block text-amber-900 font-bold">Crucial Legal Principle for Borrowers:</strong>
                    <p>
                      If any individual visits your premises or calls you demanding loan repayment without producing their <strong>IIBF DRA Certificate Number</strong>, <strong>Valid Bank Identity Card</strong>, and <strong>Specific Letter of Authority</strong>, they have zero legal standing. In the eyes of the law, they are trespassers and potential imposters attempting extortion under Section 308 of the Bharatiya Nyaya Sanhita (BNS).
                    </p>
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
                  4. Role and Responsibilities of Recovery Agents: Statutory Scope and Boundaries
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The lawful mandate of a recovery agent in India is strictly administrative and facilitative. Recovery agents are <strong>not</strong> law enforcement officers, judicial bailiffs, or authorized court liquidators. They are purely commercial communicators tasked with bridging the dialogue between the lender and the borrower.
                  </p>
                  <p>
                    Under Paragraph 2 of the RBI Master Circular, their statutory responsibilities are strictly confined to the following lawful functions:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
                    <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/50 space-y-2">
                      <h4 className="font-bold text-blue-950 text-xs sm:text-sm">Lawful Responsibilities</h4>
                      <ul className="text-xs text-blue-900 space-y-1.5 list-disc pl-4">
                        <li>Informing the borrower accurately of the total outstanding dues and breakdown of interest.</li>
                        <li>Delivering formal letters, demand notices, and restructuring dockets issued by the bank.</li>
                        <li>Inquiring into the genuine reasons behind default (job loss, medical emergency, business failure).</li>
                        <li>Documenting customer hardship statements and forwarding them to the bank&apos;s credit committee.</li>
                        <li>Assisting the borrower in scheduling formal settlement meetings at the bank branch.</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl border border-red-200 bg-red-50/50 space-y-2">
                      <h4 className="font-bold text-red-950 text-xs sm:text-sm">Ultra Vires (Unlawful) Actions</h4>
                      <ul className="text-xs text-red-900 space-y-1.5 list-disc pl-4">
                        <li>Demanding cash payments directly into their own hands or personal UPI addresses.</li>
                        <li>Threatening criminal arrest, police detention, or asset seizure without court orders.</li>
                        <li>Disclosing private financial details to spouses, parents, colleagues, or neighbors.</li>
                        <li>Entering private bedrooms, forcing entry, or refusing to leave when requested.</li>
                        <li>Offering informal, verbal &quot;discounts&quot; without bank-sanctioned settlement letters.</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Understanding this demarcation is essential: an agent cannot unilaterally seize assets, write off interest, or initiate criminal proceedings. Any agent attempting to do so is acting beyond their lawful mandate (<em>ultra vires</em>).
                  </p>
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
                  5. RBI Guidelines for Recovery Agents in India: Comprehensive Regulatory Evolution
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The regulatory architecture governing debt collection in India has evolved through progressive statutory notifications, Supreme Court judgments, and policy revisions designed to protect consumer rights against institutional overreach:
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black font-bold block">1. 2007–2008: Supreme Court Intervention &amp; First Master Circular</strong>
                      <p className="text-black">
                        Following landmark judicial censure in <em>Manager, ICICI Bank v. Prakash Kaur</em> (2007) and <em>ICICI Bank v. Shanti Devi Sharma</em> (2008), the RBI issued circular DBOD.No.Leg.BC.24/09.07.005/2008-09. This circular made IIBF training compulsory, mandated police verification, prohibited musclemen, and instituted vicarious liability on bank directors.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black font-bold block">2. 2017–2021: Master Directions on Outsourcing of Financial Services</strong>
                      <p className="text-black">
                        Codified that banks cannot outsource core credit risk decisions. Mandated that outsourcing agreements must empower the RBI and bank internal audit teams to inspect recovery vendor facilities and audit all collection call recordings at any time.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black font-bold block">3. August 12, 2022: Recovery Agents – Additional Due Diligence Circular</strong>
                      <p className="text-black">
                        Circular DOR.ORG.REC.65/21.04.158/2022-23 established the rigid 08:00 AM to 07:00 PM calling window, explicitly banned contacting borrowers&apos; friends, family, or referees, prohibited threatening messages on social media, and made lenders liable to severe operational sanctions for vendor misconduct.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black font-bold block">4. September 2022: RBI Guidelines on Digital Lending</strong>
                      <p className="text-black">
                        Formally banned digital lending apps (DLAs) and Lending Service Providers (LSPs) from accessing borrower mobile device data, including contacts, photos, media files, call logs, and precise GPS locations. Made it illegal to weaponize private data for loan recovery.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black font-bold block">5. 2023–2026: Digital Personal Data Protection Act &amp; Integrated Ombudsman Consolidation</strong>
                      <p className="text-black">
                        The enactment of the Digital Personal Data Protection Act, 2023 (DPDP Act) and the consolidation of the RBI Integrated Ombudsman Scheme (RB-IOS) have introduced heavy financial penalties (up to ₹250 Crores under DPDP) for lenders sharing borrower data with unauthorized recovery telecallers.
                      </p>
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
                  6. RBI Rules on Recovery Agent Conduct &amp; Professional Demeanor
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under Section 2 of the RBI Master Circular on Recovery Agents, every interaction between a collection representative and a borrower must adhere to professional behavioral standards. The central bank has outlined non-negotiable conduct rules:
                  </p>
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
                  7. RBI Guidelines on Recovery Agent Calls: Frequency &amp; Verification Norms
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Telephonic communication is the single most abused channel in consumer debt recovery. To curb relentless phone harassment, the Reserve Bank of India, in coordination with the Telecom Regulatory Authority of India (TRAI), has established binding calling protocols:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Strict Calling Frequency Caps:</strong> Calling a customer repeatedly throughout the day—such as placing 10, 20, or 30 calls daily—constitutes electronic stalking and deliberate psychological harassment. Under RBI customer service norms, excessive calling is treated as an unfair trade practice.
                    </li>
                    <li>
                      <strong>Mandatory Call Recording and Archiving:</strong> Regulated institutions are legally obligated to record and digitally archive all outbound telephonic recovery calls placed by internal staff and third-party vendors. These recordings must be preserved for a minimum of one year and produced before the Banking Ombudsman upon request.
                    </li>
                    <li>
                      <strong>Ban on Anonymous &amp; Masked Numbers:</strong> Outbound collection calls must originate from verified business telephone lines registered under TRAI&apos;s 140-series commercial telemarketing headers. Using hidden caller IDs, international virtual numbers, or personal mobile SIMs to bypass Truecaller flags is illegal.
                    </li>
                    <li>
                      <strong>Prohibition of Robocall Bombing:</strong> Deploying automated interactive voice response (IVR) auto-dialers that flood a borrower&apos;s phone with continuous missed calls or automated threats violates both TRAI UCC regulations and RBI Fair Practice Directives.
                    </li>
                  </ul>
                  <p className="text-xs text-black">
                    <em>Borrower Right:</em> If a collection center calls you persistently throughout the day, note down each timestamp. A call log showing repeated calls from the same entity serves as conclusive documentary evidence for Ombudsman complaints.
                  </p>
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
                  8. Permitted and Prohibited Calling Hours (The Strict 08:00 to 19:00 Rule)
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under Paragraph 2.4(a) of the RBI Master Direction DOR.ORG.REC.65/21.04.158/2022-23, the Reserve Bank of India has established a clear, non-negotiable statutory window for all recovery communications:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
                    <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-950">
                      <span className="text-2xl block mb-1">⏰</span>
                      <strong className="text-sm sm:text-base font-bold">Permitted Contact Window</strong>
                      <p className="text-xs sm:text-sm mt-1">
                        <strong>08:00 AM to 07:00 PM (IST)</strong><br />
                        Calls within this daytime span must remain professional, courteous, and strictly focused on debt reconciliation.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50 text-rose-950">
                      <span className="text-2xl block mb-1">🚫</span>
                      <strong className="text-sm sm:text-base font-bold">Prohibited Window (Strictly Illegal)</strong>
                      <p className="text-xs sm:text-sm mt-1">
                        <strong>Before 08:00 AM &amp; After 07:00 PM</strong><br />
                        Calling at 07:01 PM, late night (10:00 PM), or early morning (06:30 AM) is a direct regulatory violation subject to financial penalties.
                      </p>
                    </div>
                  </div>
                  <p>
                    The rationale behind this rule is the preservation of domestic tranquility and family privacy. Calls placed after 7:00 PM are presumed to be coercive acts designed to disturb sleep, cause panic, and distress household members.
                  </p>
                  <p className="text-xs text-black">
                    <em>Statutory Action:</em> If an agent dials you at 08:30 PM or 06:45 AM, immediately capture a high-resolution screenshot of your incoming call log displaying the caller&apos;s number and exact time. Under the RBI Integrated Ombudsman Scheme, a single verified odd-hours call establishes a prima facie breach of regulatory conduct.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  9. RBI Rules on Recovery Agent Visits: Residential &amp; Workplace Protocols
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    In-person physical doorstep visits represent the most sensitive and potentially confrontational facet of debt collection. To prevent home invasions and breaches of the peace, the Reserve Bank of India mandates strict operational protocols:
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">1. Customer-Designated Location:</strong>
                      <p className="text-black">
                        Field visits must occur primarily at the address designated by the borrower (typically the registered residential address). If the borrower explicitly indicates that they prefer to meet at an alternative mutually agreed location—such as the bank branch or a nearby office—the recovery agent must respect that preference.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">2. Strict Ban on Mob Intimidation:</strong>
                      <p className="text-black">
                        Financial institutions cannot deploy large groups of recovery agents to create an intimidating atmosphere. Under RBI operating standards, no more than two authorized representatives may visit a borrower&apos;s premises simultaneously. Sending three, four, or more individuals constitutes unlawful assembly under Section 189 BNS.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">3. Non-Intrusion into Private Living Quarters:</strong>
                      <p className="text-black">
                        Visiting agents must remain in the public reception room, drawing room, or designated visitor area. They possess zero legal authority to step into bedrooms, kitchens, or private domestic quarters. Refusing to leave upon the host&apos;s request constitutes criminal trespass under Section 329 BNS.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">4. Severe Restrictions on Workplace Visits:</strong>
                      <p className="text-black">
                        Visiting a borrower&apos;s employer or workplace is strictly prohibited unless the lender establishes that the borrower has abandoned their registered residence and remains completely unreachable telephonically. Even then, agents cannot disclose debt details to HR or colleagues.
                      </p>
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
                  10. RBI Rules on Recovery Agent Communication: Written Disclosures vs Verbal Representations
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Statutory transparency in debt communication is mandatory under banking consumer protection regulations. All recovery notices, electronic messages, and verbal discussions must adhere to verified standards:
                  </p>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black block font-bold mb-1">1. Mandatory Written Debt Itemization:</strong>
                      <p className="text-black">
                        Before initiating aggressive recovery demands, the creditor bank must supply a clear written statement detailing: (a) Original Principal Disbursed, (b) Total Repaid, (c) Accrued Normal Interest, (d) Penal Charges and Late Fees, and (e) Total Net Claim. Lenders cannot demand arbitrary round sums without written itemization.
                      </p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black block font-bold mb-1">2. Criminal Ban on Fake Legal Notices:</strong>
                      <p className="text-black">
                        Rogue recovery agencies frequently send forged notices titled &quot;Final Police Arrest Docket&quot;, &quot;Court Warrant of Attachment&quot;, or &quot;Non-Bailable Seizure Notice&quot; complete with fake national emblems or forged judicial seals. Creating or delivering simulated court documents constitutes criminal forgery and extortion under Sections 336, 338, and 308 of the Bharatiya Nyaya Sanhita (BNS).
                      </p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black block font-bold mb-1">3. Digital Messaging Norms (SMS &amp; WhatsApp):</strong>
                      <p className="text-black">
                        All SMS, WhatsApp, and email communications must clearly display the registered institutional name of the lender, the specific loan reference number, and official bank customer care contacts. Threatening language, offensive emojis, or countdown timers threatening criminal action are strictly barred.
                      </p>
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
                  <p>
                    The Reserve Bank of India maintains an unyielding, zero-tolerance doctrine regarding borrower harassment in debt collection. Under Paragraph 2.4 of the Master Circular on Recovery Agents in Banks and Master Direction DOR.ORG.REC.65/21.04.158/2022-23, harassment is broadly defined and strictly penalized:
                  </p>
                  <p>
                    Regulated Entities (REs) must ensure that neither their internal staff nor contracted recovery agencies resort to intimidation or harassment of any kind, whether verbal or physical, against any person in their debt collection efforts. Debt collection must operate strictly within the bounds of civil contract law; the moment coercion is applied, the action becomes a criminal offense.
                  </p>
                  <div className="p-4 sm:p-5 bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl space-y-2.5 text-rose-950">
                    <strong className="block font-bold text-xs sm:text-sm md:text-base">Expressly Prohibited Forms of Harassment Under RBI Mandates:</strong>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm">
                      <li>Use of threatening gestures, aggressive physical posturing, or menacing verbal bullying.</li>
                      <li>Staging sit-ins, dharnas, or unauthorized assemblies outside a customer&apos;s residence or commercial premises.</li>
                      <li>Refusing to vacate the customer&apos;s home immediately when explicitly requested to leave by the occupants.</li>
                      <li>Repeatedly sounding horns, shouting personal names, or creating public spectacles in housing societies to induce public humiliation.</li>
                      <li>Shadowing, stalking, or following a borrower, their spouse, or their children during daily commutes.</li>
                      <li>Calling neighbors, residential security guards, or landlords to broadcast the borrower&apos;s debt distress.</li>
                    </ul>
                  </div>
                  <p>
                    Under Indian criminal law, acts of physical intimidation, menacing posturing, and public humiliation are punishable under Sections 351 (Criminal Intimidation), 352 (Intentional Insult to Provoke Breach of Peace), and 189 (Unlawful Assembly) of the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>. Borrowers facing such harassment are entitled to register immediate police complaints alongside escalating to the RBI Banking Ombudsman.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  12. RBI Rules on Threatening, Profane, or Abusive Language
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Verbal abuse, profanity, character assassination, and menacing threats over the phone or in person are outright criminal offenses under Indian penal law. The RBI Master Circular explicitly mandates that collection personnel must maintain complete behavioral restraint, civil decorum, and courtesy at all times.
                  </p>
                  <p>
                    Recovery telecallers frequently resort to high-decibel shouting, degrading insults, and threats of social ruin to panic borrowers into liquidating assets or borrowing from loan sharks. The statutory framework provides clear legal remedies against each category of verbal transgression:
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">1. Derogatory, Abusive &amp; Obscene Language (Section 352 BNS):</strong>
                      <p className="text-black">
                        Using foul language, slurs against family members, or sexually suggestive remarks constitutes an offense under Section 352 BNS (intentional insult with intent to provoke breach of the peace) and Section 79 BNS (acts intended to outrage the modesty of women), punishable with rigorous imprisonment.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">2. Criminal Intimidation &amp; Threats of Harm (Section 351 BNS):</strong>
                      <p className="text-black">
                        Threatening injury to the borrower&apos;s person, reputation, or property—such as threatening to break limbs, ruin business standing, or cause public disgrace—attracts imprisonment up to two years under Section 351(2) BNS, or up to seven years if the threat involves death or grievous hurt.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">3. Admissibility of Electronic Evidence (Section 63 BSA 2023):</strong>
                      <p className="text-black">
                        Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, audio recordings of abusive calls stored on your smartphone are fully admissible in court and before the Banking Ombudsman. When presented with authenticated call recordings, the Ombudsman routinely penalizes the lender with compensation orders up to ₹1,00,000 for mental agony.
                      </p>
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
                  13. RBI Rules on Contacting Family Members, Friends and References
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    One of the most widespread and damaging recovery abuses is contacting parents, spouses, siblings, children, or emergency references to demand payment for an overdue debt. The Reserve Bank of India has enacted explicit, zero-ambiguity prohibitions against this practice:
                  </p>
                  <p>
                    Under the <strong>Doctrine of Privity of Contract</strong> (codified under the Indian Contract Act, 1872), a loan agreement is an exclusive bilateral contract solely between the primary borrower, co-borrowers, and formal legal guarantors who executed the loan agreement. Third parties—including spouses, elderly parents, adult children, relatives, and social acquaintances—possess <strong>zero legal liability</strong> for the borrower&apos;s debt.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block text-xs sm:text-sm font-bold">Strict Credit Confidentiality (CICRA Sec 29)</strong>
                      <p className="text-xs text-black leading-relaxed">
                        Under Section 29 of the Credit Information Companies (Regulation) Act, 2005, disclosing borrower financial details, loan balances, or default status to non-guarantor third parties is an explicit statutory crime.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block text-xs sm:text-sm font-bold">Misuse of Application Form References</strong>
                      <p className="text-xs text-black leading-relaxed">
                        Reference contacts provided during loan onboarding are solely for initial address verification. Calling references to demand debt settlement or induce social embarrassment is strictly banned under Paragraph 2.4 of the RBI Master Direction.
                      </p>
                    </div>
                  </div>
                  <p>
                    If an agent contacts your elderly parents or spouse demanding money, the family member can immediately lodge a police complaint under Section 308 BNS (Attempt to Commit Extortion) and Section 351 BNS (Criminal Intimidation) against the collection agency and the bank&apos;s managing director.
                  </p>
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
                  <p>
                    Recovery agencies frequently threaten: <em>&quot;We will call your HR director, inform your Managing Director, and get you terminated from your job.&quot;</em> This is a coercive, unlawful threat designed to weaponize livelihood anxiety. Under Indian law and RBI directives, contacting a borrower&apos;s employer is strictly prohibited:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Criminal Defamation (Section 356 BNS):</strong> Publicly or privately maligning an employee&apos;s professional reputation, circulating false allegations of fraud, or informing workplace colleagues of a civil debt default constitutes criminal defamation punishable with imprisonment up to two years.
                    </li>
                    <li>
                      <strong>Tortious Interference with Livelihood:</strong> Threatening an individual&apos;s employment to extort loan payments violates the constitutional right to livelihood under Article 21. Employers have zero legal obligation to entertain third-party recovery inquiries for personal loans.
                    </li>
                    <li>
                      <strong>Strict RBI Workplace Guidelines:</strong> The RBI Master Circular allows visits or contact with an employer <strong>only</strong> if the borrower has completely absconded from their residential address and cannot be contacted through any other lawful channel. Even in that extreme scenario, the agent can only inquire about the borrower&apos;s contact details; they cannot disclose loan figures or default status.
                    </li>
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
                  <p>
                    Following the Supreme Court of India&apos;s historic nine-judge constitutional bench ruling in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017 10 SCC 1)</em>, the <strong>Right to Privacy</strong> is recognized as a fundamental right guaranteed under Article 21 of the Constitution. In the banking realm, customer privacy is protected by both constitutional jurisprudence and statutory enactments:
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black font-bold block mb-1">1. Common Law Duty of Secrecy (The Tournier Principle):</strong>
                      <p className="text-black">
                        Under the foundational banking law doctrine established in <em>Tournier v. National Provincial and Union Bank of England</em>, commercial lenders owe an implied contractual duty of absolute secrecy regarding a customer&apos;s account transactions, balances, and credit standings. Breaching this duty exposes the bank to substantial civil damages.
                      </p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black font-bold block mb-1">2. Digital Personal Data Protection Act, 2023 (DPDP Act):</strong>
                      <p className="text-black">
                        Under Sections 6 and 8 of the DPDP Act, 2023, financial institutions act as Data Fiduciaries. Sharing borrower personal data, contact lists, or financial distress records with unauthorized collection telecallers without explicit lawful consent constitutes an actionable breach carrying statutory penalties up to <strong>₹250 Crores</strong> imposed by the Data Protection Board of India.
                      </p>
                    </div>
                    <div className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs">
                      <strong className="text-black font-bold block mb-1">3. Absolute Prohibition of Public Shaming Posters:</strong>
                      <p className="text-black">
                        Affixing &quot;Defaulter&quot; posters on housing society noticeboards, publishing photos of retail borrowers in local newspapers, or circulating shaming flyers in residential colonies is an unlawful breach of privacy prohibited by High Court rulings across India.
                      </p>
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
                  <p>
                    Whenever a recovery representative initiates contact—whether in person or via telephone—statutory identification verification must take place before any substantive loan discussion. Borrowers must never entertain unidentified callers or visitors:
                  </p>
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
                          <td className="p-3 font-semibold text-black">Official Bank Letter of Authority</td>
                          <td className="p-3">Must name the agent, agency, borrower account number, and date of issue on bank letterhead signed by AGM/DGM.</td>
                          <td className="p-3 text-red-600 font-semibold">Refuse interaction &amp; report trespass under Sec 329 BNS.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-black">Institutional Photo ID Card</td>
                          <td className="p-3">Laminated badge displaying agency logo, agent photograph, employee code, and issuing bank division.</td>
                          <td className="p-3 text-red-600 font-semibold">Photograph badge &amp; verify via bank customer care helpline.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-black">IIBF Debt Recovery Certificate (DRA)</td>
                          <td className="p-3">Valid DRA certificate number confirming completion of mandatory 50/100-hour professional banking training.</td>
                          <td className="p-3 text-red-600 font-semibold">Challenge agent competence before RBI Banking Ombudsman.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-black">Government Photo ID (Aadhaar / Voter ID)</td>
                          <td className="p-3">Official government identity document matching the name on the agency badge and Letter of Authority.</td>
                          <td className="p-3 text-red-600 font-semibold">Refuse entry; report imposter to local police via 112.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-black">
                    <em>Mandatory Protocol:</em> You are legally entitled to photograph these credentials using your smartphone before engaging in any dialogue. If the agent hesitates or refuses to present credentials, close the door immediately.
                  </p>
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
                  17. Bank&apos;s Legal Responsibility for Recovery Agents: Principle of Vicarious Liability
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    A foundational legal principle established by the Reserve Bank of India and Indian courts is the doctrine of <strong>vicarious liability</strong> (<em>Respondeat Superior</em>). Financial institutions cannot escape accountability for abusive debt collection by claiming that third-party collection agencies are &quot;independent contractors&quot;.
                  </p>
                  <p>
                    Under Paragraph 2.1 of the RBI Master Circular on Recovery Agents: <em>&quot;Banks are advised that they, as the principals, are responsible for the actions of their agents. Hence, in cases where a bank engages recovery agents for recovery of dues, it is appropriate that banks ensure that the agents adhere to the guidelines.&quot;</em>
                  </p>
                  <p>
                    This statutory doctrine establishes three fundamental legal protections for consumers:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Direct Institutional Culpability:</strong> If a collection agency representative abuses a borrower, the bank is legally deemed to have committed that abuse itself.</li>
                    <li><strong>Board-Level Accountability:</strong> Bank managing directors and nodal officers are directly answerable to regulatory bodies for systemic vendor misconduct.</li>
                    <li><strong>Joint and Several Civil Liability:</strong> In consumer court damages claims, both the collection agency and the principal bank are jointly liable to pay financial compensation.</li>
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
                  18. Can Banks Be Held Responsible for Recovery Agent Misconduct? Landmark Judicial Precedents
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The Supreme Court of India and High Courts have consistently held commercial lenders strictly accountable for strong-arm recovery tactics, delivering landmark rulings that form the bedrock of consumer defense:
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-1.5">
                      <strong className="text-blue-950 block font-bold text-sm">Supreme Court: ICICI Bank v. Shanti Devi Sharma (2008 7 SCC 532):</strong>
                      <p className="text-blue-900 leading-relaxed">
                        In this tragic case, recovery agents deployed by the bank subjected a two-wheeler borrower to extreme public humiliation, leading to suicide. The Supreme Court delivered a historic rebuke:
                      </p>
                      <blockquote className="border-l-2 border-blue-400 pl-3 italic text-blue-900 my-1">
                        &quot;We are governed by a rule of law in the country. The recovery of loans or the seizure of vehicles could be done only through legal means. Banks cannot employ muscle men or recovery agents to take the law into their own hands.&quot;
                      </blockquote>
                      <p className="text-blue-950 font-medium">The Apex Court upheld criminal proceedings against the bank&apos;s senior executives for abetment.</p>
                    </div>

                    <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl space-y-1.5">
                      <strong className="text-indigo-950 block font-bold text-sm">Supreme Court: Manager, ICICI Bank Ltd. v. Prakash Kaur (2007 2 SCC 711):</strong>
                      <p className="text-indigo-900 leading-relaxed">
                        The Supreme Court firmly ruled that banks cannot repossess hypothecated vehicles on highways or at night through force:
                      </p>
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
                  19. RBI Rules for Recovery of Credit Card Dues (Master Direction 2022)
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under the <em>RBI Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (Updated 2024)</em>, specialized consumer safeguards govern revolving credit card collections:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Statutory Standstill on Disputed Billing Transactions:</strong> If a cardholder lodges a formal dispute regarding unauthorized transactions, billing errors, or excessive interest calculation, the card issuer is legally barred from pursuing recovery on the disputed balance until a formal investigation is concluded.
                    </li>
                    <li>
                      <strong>Prohibition of Anonymous Telecalling:</strong> Collection agents cannot conceal their identity, use caller ID spoofing, or contact cardholders under false pretenses such as &quot;Courier Verification Officer&quot; or &quot;Tax Inspector&quot;.
                    </li>
                    <li>
                      <strong>Complete Billing Itemization Requirement:</strong> During settlement negotiations, card issuers must furnish a full statement bifurcating the original merchant transaction principal from finance charges, late payment penalties, and GST fees.
                    </li>
                    <li>
                      <strong>Right to Formal Settlement Sanction Letter:</strong> Oral assurances given by collection telecallers have zero validity. Any settlement agreement must be executed via an official bank-generated settlement docket issued from the card issuer&apos;s registered domain.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  20. RBI Rules for Personal Loan Recovery Agents: Unsecured Debt Protections
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Unsecured personal term loans carry fixed monthly Equated Monthly Installments (EMIs). When non-payment occurs due to salary reduction, layoff, or enterprise cash-flow distress, recovery agents frequently attempt unauthorized pressure tactics:
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">Civil Nature of Personal Loan Defaults:</strong>
                      <p className="text-black">
                        Defaulting on an unsecured personal loan is strictly a breach of contract under the Indian Contract Act, 1872. The lender&apos;s lawful recourse is filing a civil summary suit under Order 37 of the Code of Civil Procedure (CPC) or petitioning before Lok Adalat. Police officers have no jurisdiction over civil personal loan defaults.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">Prohibition of Forced Instrument Execution:</strong>
                      <p className="text-black">
                        Recovery agents are strictly barred from coercing a borrower into executing fresh blank cheques, signing promissory notes under duress, or surrendering property title deeds during doorstep visits.
                      </p>
                    </div>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black font-bold block mb-1">Distinction from NACH / Cheque Bounce (Sec 25 PSSA &amp; Sec 138 NI Act):</strong>
                      <p className="text-black">
                        While dishonor of an electronic NACH mandate or cheque can trigger statutory legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA) or Section 138 of the Negotiable Instruments Act (NI Act), this is a judicial process adjudicated exclusively by a Judicial Magistrate. Recovery agents cannot issue warrants, conduct arrests, or act as court bailiffs.
                      </p>
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
                  <p>
                    In September 2022, the Reserve Bank issued landmark <strong>Guidelines on Digital Lending</strong> (DOR.CRE.REC.66/21.07.001/2022-23) to eliminate predatory digital lending applications and cyber harassment:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Total Ban on Contact List &amp; Gallery Scraping:</strong> Digital lending apps (DLAs) and Lending Service Providers (LSPs) are categorically forbidden from requesting access to the borrower&apos;s phone contact list, photo gallery, call logs, or biometric files. Only one-time camera access for KYC verification is permitted.
                    </li>
                    <li>
                      <strong>Criminal Cyber Extortion Penalties:</strong> Circulating morphed pictures, sending defamatory WhatsApp blasts to contacts, or threatening to post private photos constitutes cyber extortion under Sections 66E and 67 of the Information Technology Act, 2000, and Section 308 BNS, triggering non-bailable FIRs.
                    </li>
                    <li>
                      <strong>Mandatory Regulated Entity Alignment:</strong> Digital loan recovery must be conducted exclusively on behalf of licensed Scheduled Banks or registered NBFCs. Unlicensed Chinese loan apps or illegal APK applications operate outside the law and can be reported directly to cybercrime portals.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  22. RBI Rules for Third-Party Recovery Agencies: Onboarding &amp; Auditing
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Under central bank governance norms, regulated lending institutions must enforce strict supervisory oversight and due diligence over third-party recovery vendors:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black block font-bold mb-1">Public Agency Roster:</strong>
                      <p className="text-black">
                        Every bank and NBFC must publish an up-to-date directory of all empaneled recovery agencies on their official website, detailing agency legal names, registered addresses, and regional jurisdictions.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <strong className="text-black block font-bold mb-1">Quarterly Compliance Audits:</strong>
                      <p className="text-black">
                        Lenders must conduct quarterly compliance audits of agency call centers, reviewing recorded phone calls, training logs, customer grievance tickets, and police verification dockets.
                      </p>
                    </div>
                  </div>
                  <p>
                    If an agency accumulates multiple verified consumer harassment complaints, the bank is obligated to terminate the outsourcing agreement immediately and de-empanel the agency from future banking mandates.
                  </p>
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
                  23. RBI Rules on Recovery Agent Training, IIBF Certification &amp; Ethics
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The Reserve Bank mandates that every individual deployed for debt recovery must undergo structured professional training and clear the <strong>Debt Recovery Agent (DRA) certificate course</strong> administered by the Indian Institute of Banking &amp; Finance (IIBF).
                  </p>
                  <p>
                    The curriculum includes 100 hours of pedagogical training for non-graduates (50 hours for graduates) covering consumer rights, ethical communication, fair debt collection practices, legal boundaries, and privacy protection. Deploying uncertified personnel is an actionable regulatory infraction.
                  </p>
                  <p>
                    The training focuses on:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Understanding borrower psychological vulnerability and handling genuine hardship with empathy.</li>
                    <li>Strict adherence to permitted calling hours (08:00 AM to 07:00 PM) and privacy norms.</li>
                    <li>Clear explanation of financial statements without applying misleading legal intimidation.</li>
                    <li>Statutory compliance with the Banking Regulation Act, 1949, and Consumer Protection Act, 2019.</li>
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
                  24. The Indian Banks&apos; Association (IBA) Recovery Agent Code of Conduct
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    In addition to binding Reserve Bank circulars, all public and private commercial banks subscribe to the <strong>Model Code of Conduct for Recovery Agents</strong> formulated by the Indian Banks&apos; Association (IBA).
                  </p>
                  <div className="p-4 sm:p-5 bg-slate-900 text-white rounded-2xl sm:rounded-3xl space-y-2.5 text-xs sm:text-sm">
                    <strong className="block text-blue-400 font-bold text-sm sm:text-base">Core Tenets of the IBA Model Code:</strong>
                    <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                      <li><strong>Customer Dignity:</strong> Treat every debtor with professional courtesy, patience, and respect regardless of delinquency duration.</li>
                      <li><strong>Transparency:</strong> Never mislead a customer regarding the legal consequences of non-payment or create false legal urgency.</li>
                      <li><strong>Non-Intrusion:</strong> Never damage property, enter private living quarters without consent, or refuse to vacate upon request.</li>
                      <li><strong>Privacy Preservation:</strong> Never disclose debt balances or financial distress to any person other than the borrower and authorized co-signers.</li>
                      <li><strong>Immediate Accounting:</strong> Provide instantaneous, bank-generated receipts for any payment received toward loan settlement.</li>
                    </ul>
                  </div>
                  <p>
                    When lodging formal grievances with bank chairpersons or regulatory ombudsmen, citing specific breaches of the IBA Model Code provides decisive documentary weight to your case.
                  </p>
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
                  25. What Recovery Agents Cannot Do: Complete Prohibited Actions Checklist
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    For quick reference and legal enforcement, here is the exhaustive, authoritative catalog of actions that recovery representatives are <strong>strictly barred</strong> from performing under Indian law, the Banking Regulation Act, 1949, and binding Reserve Bank of India directives:
                  </p>
                  <p>
                    The moment a recovery agent engages in any of the prohibited behaviors listed below, they forfeit their lawful standing as an authorized representative of a regulated financial institution. Their actions transition from commercial communication into actionable regulatory non-compliance and criminal offenses:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-red-50/70 border border-red-200 rounded-2xl space-y-2">
                      <strong className="text-red-950 font-bold block text-sm">Communications, Telecalling &amp; Timing Bans</strong>
                      <ul className="text-red-900 space-y-1.5 list-disc pl-4 text-xs sm:text-sm">
                        <li>Calling before 08:00 AM or after 07:00 PM under any circumstances.</li>
                        <li>Spamming with excessive, continuous calls (call-bombing 10+ times daily).</li>
                        <li>Using masked caller IDs, spoofed numbers, or private numbers to evade Truecaller.</li>
                        <li>Using foul, abusive, casteist, communal, or sexually suggestive remarks.</li>
                        <li>Calling family members, elderly parents, spouses, children, or friends.</li>
                        <li>Sending threatening SMS, WhatsApp messages, or countdown timer ultimatums.</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50/70 border border-red-200 rounded-2xl space-y-2">
                      <strong className="text-red-950 font-bold block text-sm">Physical Conduct, Coercion &amp; False Legal Claims</strong>
                      <ul className="text-red-900 space-y-1.5 list-disc pl-4 text-xs sm:text-sm">
                        <li>Visiting a borrower&apos;s workplace or employer to cause public humiliation.</li>
                        <li>Threatening police arrest, criminal FIRs, or jail detention for civil loan defaults.</li>
                        <li>Entering private bedrooms, blocking doorways, or refusing to exit on request.</li>
                        <li>Seizing furniture, appliances, vehicles, or personal items for unsecured loans.</li>
                        <li>Deploying mobs or more than two representatives simultaneously.</li>
                        <li>Demanding cash payments or transfers into personal UPI accounts without receipts.</li>
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
                  26. What Recovery Agents Can Legally Do: Legitimate Collection Rights
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Borrowers frequently inquire: <em>&quot;What rights DOES the creditor bank actually have under Indian law?&quot;</em> Regulated financial institutions are entitled to pursue legitimate recovery of delinquent funds through civilized, transparent, and legally authorized channels:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Courteous Daytime Reminders:</strong> Placing civil, professional phone calls between 08:00 AM and 07:00 PM to remind the customer of the overdue balance and inquire about repayment schedules.
                    </li>
                    <li>
                      <strong>Official Written Notices:</strong> Delivering formal demand notices, loan recall letters, or restructuring dockets via speed post, registered post, or verified institutional email.
                    </li>
                    <li>
                      <strong>Verified In-Person Residential Visits:</strong> Visiting the borrower&apos;s registered residence during daylight hours (08:00 AM to 07:00 PM), provided the agents prominently display authentic photo IDs and present a valid bank Letter of Authority.
                    </li>
                    <li>
                      <strong>Initiating Lawful Judicial Redressal:</strong> Filing summary recovery suits under Order 37 of the Code of Civil Procedure (CPC), petitioning before National or State Lok Adalats, or issuing formal statutory legal notices under Section 138 of the Negotiable Instruments Act (NI Act) or Section 25 of the Payment and Settlement Systems Act (PSSA) for bounced cheques or dishonored NACH mandates.
                    </li>
                    <li>
                      <strong>Reporting to Credit Bureaus:</strong> Accurately transmitting repayment delinquency data (SMA-0, SMA-1, SMA-2, NPA, Written-Off) to RBI-licensed credit information companies (CIBIL, Experian, CRIF High Mark, Equifax) in accordance with the Credit Information Companies (Regulation) Act, 2005.
                    </li>
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
                  <p>
                    <strong>Residential Home Visits:</strong> Permitted ONLY during daylight hours (strictly between 08:00 AM and 07:00 PM), provided the visiting representatives carry their institutional photo identity cards and the official bank Letter of Authority. Agents cannot force entry, must remain in the living room or reception area, and must leave immediately if the borrower requests a postponement due to an emergency, family illness, or distress.
                  </p>
                  <p>
                    <strong>Workplace &amp; Office Visits:</strong> Under Paragraph 2.4 of the RBI Master Direction, visiting a borrower&apos;s office, commercial establishment, or workplace is strictly discouraged. It is permissible <strong>only</strong> under exceptional circumstances where the borrower has completely absconded from their residential address or consistently refuses all telephonic contact.
                  </p>
                  <p>
                    Even in that rare scenario, visiting an office to publicly humiliate an employee, create a scene in front of colleagues, or disclose debt figures to Human Resources violates both the borrower&apos;s constitutional right to livelihood under Article 21 and constitutes criminal defamation under Section 356 BNS.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  28. Can Recovery Agents Call Your Family Members?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>ABSOLUTELY NOT.</strong> The debt agreement is a private, confidential bilateral contract solely between the primary borrower, co-borrower, and formally signed legal guarantors.
                  </p>
                  <p>
                    Spouses, aging parents, children, and siblings are <strong>third parties</strong> in the eyes of the law. Contacting family members to demand money, discuss loan balances, or apply emotional pressure is a direct violation of Paragraph 2.4 of the RBI Master Direction and constitutes:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Breach of Statutory Credit Secrecy:</strong> Punishable under Section 29 of the Credit Information Companies (Regulation) Act, 2005.</li>
                    <li><strong>Criminal Intimidation:</strong> Punishable under Section 351 BNS for causing psychological trauma to uninvolved individuals.</li>
                    <li><strong>Attempted Extortion:</strong> Punishable under Section 308 BNS when demanding that parents or spouses liquidate their savings for another person&apos;s loan.</li>
                  </ul>
                  <p>
                    Family members facing such calls should state firmly: <em>&quot;I am not a party to this loan contract. Do not call this number again, or I will register an FIR for criminal intimidation.&quot;</em>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  29. Can Recovery Agents Contact Your Employer?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>NO.</strong> A lender or collection agency cannot contact your reporting manager, Human Resources (HR) department, or company directors to demand EMI payments or complain about your financial status.
                  </p>
                  <p>
                    Unless an employee explicitly executed a voluntary tripartite salary deduction agreement (such as an employer-sponsored corporate loan program), the employer has zero role or liability in an employee&apos;s personal debts. Attempting to disrupt an employee&apos;s job security entitles the borrower to:
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p>
                      <strong>1. Criminal Defamation Action:</strong> File an immediate criminal complaint under Section 356 BNS against the collection agency and bank nodal officers for maligning your professional reputation.
                    </p>
                    <p>
                      <strong>2. Cease-and-Desist Legal Notice:</strong> Have CredSettle&apos;s banking advocates serve a formal notice to the bank&apos;s corporate headquarters, holding them vicariously liable for tortious interference with employment.
                    </p>
                    <p>
                      <strong>3. Banking Ombudsman Escalation:</strong> Seek punitive compensation up to ₹1,00,000 for mental harassment and threat to livelihood under the RBI Integrated Ombudsman Scheme.
                    </p>
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
                  <p>
                    <strong>STRICTLY ILLEGAL.</strong> Threatening bodily injury, using foul profanity, shouting abusive slurs, or making insinuations regarding a borrower&apos;s moral character are criminal acts under Indian penal law.
                  </p>
                  <p>
                    Under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>, recovery personnel indulging in verbal abuse or threats face severe statutory consequences:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Section 351 BNS (Criminal Intimidation):</strong> Punishable with imprisonment up to two years, or up to seven years if the threat involves death or grievous harm.</li>
                    <li><strong>Section 352 BNS (Intentional Insult to Provoke Breach of Peace):</strong> Punishable with imprisonment up to two years with fine.</li>
                    <li><strong>Section 79 BNS (Insult to Modesty of a Woman):</strong> Using sexually suggestive language, vulgar gestures, or calling female borrowers at late hours is a <strong>cognizable, non-bailable offense</strong> carrying rigorous imprisonment up to three years.</li>
                  </ul>
                  <p>
                    If an agent uses abusive language, do not engage in shouting matches. Ensure your call recorder is active, note the timestamp, and initiate formal legal complaints.
                  </p>
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
                  <p>
                    Collection callers routinely intimidate borrowers by claiming: <em>&quot;The local police station has registered an FIR against you, and officers will arrive at your home with an arrest warrant within two hours.&quot;</em>
                  </p>
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-950 text-xs sm:text-sm space-y-2">
                    <strong className="block font-bold text-sm">Authoritative Legal Reality in India:</strong>
                    <ul className="list-disc pl-4 space-y-1.5">
                      <li><strong>Zero Police Jurisdiction in Civil Defaults:</strong> Police officers have zero statutory authority to act as debt collection agents or intervene in unsecured credit card or personal loan disputes.</li>
                      <li><strong>Impersonation of Public Servant (Section 204 BNS):</strong> Any recovery agent who falsely claims to be a police sub-inspector, crime branch detective, or court bailiff commits a serious offense punishable with imprisonment under Section 204 BNS (Section 170 IPC).</li>
                      <li><strong>Judicial Process Exclusivity:</strong> Arrest warrants can ONLY be issued by judicial magistrates following formal trial proceedings under specific statutory enactments (such as Section 138 NI Act), never by a telecaller over the phone.</li>
                    </ul>
                  </div>
                  <p className="text-xs text-black">
                    <em>Defense Strategy:</em> Whenever an agent threatens police arrest, ask them for their Police Station jurisdiction, GD (General Diary) entry number, and officer rank. They will almost immediately hang up.
                  </p>
                </div>
              </section>

              {/* ------------------------------------------------------------- */}
              {/* 32. Can Recovery Agents Seize Your Property?                  */}
              {/* ------------------------------------------------------------- */}
              <section id="can-agents-seize-property" className="scroll-section scroll-mt-28">
                <div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded-md mb-2.5 sm:mb-3">
                  SECTION 32
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  32. Can Recovery Agents Seize Your Property?
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    <strong>Unsecured Loans &amp; Credit Cards:</strong> Recovery agents have <strong>ZERO legal authority</strong> to touch, confiscate, or repossess your television, air conditioner, jewelry, electronics, furniture, or private two-wheeler/four-wheeler for unsecured debts.
                  </p>
                  <p>
                    Unsecured credit facilities carry no mortgage, hypothecation, or asset pledge. Forcibly confiscating personal items without a formal judicial court decree amounts to criminal robbery, extortion, and criminal trespass under Sections 308, 309, and 329 of the Bharatiya Nyaya Sanhita (BNS).
                  </p>
                  <p>
                    <strong>Secured Collateral Facilities (Home &amp; Auto Loans):</strong> Even for secured collateral, repossession must adhere strictly to the <strong>SARFAESI Act, 2002</strong> or judicial repossession guidelines:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Lenders must issue a formal 60-day demand notice under Section 13(2) of the SARFAESI Act, followed by a 30-day possession notice under Section 13(4).</li>
                    <li>In <em>Manager, ICICI Bank v. Prakash Kaur (2007)</em>, the Supreme Court ruled that banks cannot use musclemen to intercept vehicles on highways or tow cars without prior inventory panchnamas.</li>
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
                  <p>
                    Collection personnel cannot stand menacingly over you, block your doorway, or demand that you borrow from relatives, sell household belongings, or transfer funds via personal UPI handles on the spot.
                  </p>
                  <p>
                    Under Indian contract law, debt repayment must be voluntary and orderly. Borrowers possess the legally protected right to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Demand an accurate, up-to-date written statement of account itemizing principal and charges.</li>
                    <li>Consult banking litigation advocates or financial counselors before executing any compromise settlement.</li>
                    <li>Remit all funds exclusively into registered bank loan account numbers through official banking gateways, never into personal accounts.</li>
                    <li>Refuse cash handovers unless an instantaneous, computer-generated counterfoil receipt with bank branding is provided.</li>
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
                  34. Rights of Borrowers Against Recovery Agent Harassment: The Citizen&apos;s Shield
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Every citizen in India holds enforceable fundamental, consumer, and regulatory rights that no financial institution or collection agency can override:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block font-bold text-sm">1. Right to Human Dignity (Article 21)</strong>
                      <p className="text-black leading-relaxed">
                        Article 21 guarantees life with human dignity. Civil financial inability cannot be used to humiliate, insult, or browbeat an individual before family, neighbors, or peers.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block font-bold text-sm">2. Right to Financial Privacy</strong>
                      <p className="text-black leading-relaxed">
                        Your debt history is private confidential data. It cannot be broadcast to relatives, employers, or society guards without violating statutory secrecy laws.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block font-bold text-sm">3. Right to Legal Representation</strong>
                      <p className="text-black leading-relaxed">
                        Under Section 30 of the Advocates Act, 1961, you have the right to instruct an advocate to handle all creditor communications on your behalf.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-1.5">
                      <strong className="text-black block font-bold text-sm">4. Right to Fair Dispute Redressal</strong>
                      <p className="text-black leading-relaxed">
                        Access to bank grievance cells, Principal Nodal Officers, and the RBI Integrated Ombudsman without paying court filing fees or legal stamp duties.
                      </p>
                    </div>
                  </div>
                  <p>
                    These rights are inalienable. You cannot contract them away; even if a loan agreement contains fine-print clauses purporting to waive privacy, such clauses are void ab initio under Section 23 of the Indian Contract Act, 1872 as opposed to public policy.
                  </p>
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
                  35. What to Do If a Recovery Agent Harasses You: Emergency Action Protocol
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    When an agent crosses legal boundaries, do not panic, plead, or hide. Execute this systematic 4-step emergency defense protocol:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Maintain Composure &amp; Control Tone:</strong> Do not engage in shouting matches or reciprocate with profanity. Maintain a composed, assertive tone to deny the agent psychological leverage.
                    </li>
                    <li>
                      <strong>Demand Mandatory Credentials:</strong> State clearly: <em>&quot;Please present your IIBF DRA certificate number, your agency photo ID, and the bank&apos;s Letter of Authority for this account.&quot;</em>
                    </li>
                    <li>
                      <strong>Commence Contemporaneous Audio/Video Recording:</strong> Inform the agent: <em>&quot;This conversation is being recorded under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 for evidentiary submission to the RBI Ombudsman and local police.&quot;</em> Agents often retreat the moment a camera is pointed at them.
                    </li>
                    <li>
                      <strong>Direct Them to Formal Written Channels:</strong> Instruct them: <em>&quot;Any further communication must be delivered in writing via speed post or official email to my legal representative under the Advocates Act.&quot;</em>
                    </li>
                  </ol>
                  <p>
                    Following this protocol immediately strips rogue agents of their perceived dominance and creates an unshakeable factual record for subsequent legal escalations.
                  </p>
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
                  36. How to Respond to Recovery Agent Calls: Verbatim Scripts for Borrowers
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Use these battle-tested legal scripts when receiving high-pressure collection phone calls across different harassment scenarios:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs sm:text-sm space-y-2 border border-slate-700">
                      <p className="text-emerald-400 font-bold">// SCENARIO 1: AGGRESSIVE OR ABUSIVE CALLER</p>
                      <p>&quot;Please note that this call is being digitally recorded. State your full legal name, your agency registration number, and your IIBF DRA certificate number.&quot;</p>
                      <p>&quot;I am facing documented economic hardship. I refuse to entertain verbal abuse. Any further abusive calls will result in an immediate police complaint under Section 352 BNS and an escalation to the RBI Principal Nodal Officer.&quot;</p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs sm:text-sm space-y-2 border border-slate-700">
                      <p className="text-sky-400 font-bold">// SCENARIO 2: THREATENING POLICE ARREST OR LEGAL ACTION</p>
                      <p>&quot;Loan default is purely a civil contractual matter. Police officers have zero jurisdiction over civil loans. Impersonating a police officer or making fraudulent claims of arrest warrants is a criminal offense under Section 204 BNS.&quot;</p>
                      <p>&quot;If you have a lawful judicial claim, serve a formal summons through the appropriate civil court. Do not call this number again.&quot;</p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs sm:text-sm space-y-2 border border-slate-700">
                      <p className="text-amber-400 font-bold">// SCENARIO 3: CALLING RELATIVES OR WORKPLACE</p>
                      <p>&quot;You have unlawfully contacted third parties regarding my private credit account. This is a direct violation of Paragraph 2.4 of the RBI Master Circular and Section 29 of CICRA. I have logged this timestamp and am submitting this recording to the RBI Banking Ombudsman and local cyber cell.&quot;</p>
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
                  <p>
                    If recovery agents arrive at your doorstep, observe these defensive legal guidelines:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Do Not Permit Entry Beyond the Doorstep:</strong> You are not legally obligated to invite collection agents into your living quarters. Speak to them at the doorway or building lobby.
                    </li>
                    <li>
                      <strong>Demand and Photograph Credentials:</strong> Take clear photographs of their agency ID badge and the bank Letter of Authority using your phone camera. If they refuse to show credentials, inform them they are trespassing under Section 329 BNS.
                    </li>
                    <li>
                      <strong>Maintain a Witness:</strong> Have a family member or neighbor present during the interaction, or record the interaction on video.
                    </li>
                    <li>
                      <strong>Emergency Police Dispatch (112):</strong> If agents raise their voices, stage a commotion, or refuse to vacate your premises after being instructed to leave, dial <strong>112</strong> immediately and report criminal trespass and breach of the peace.
                    </li>
                  </ul>
                  <p className="text-xs text-black">
                    <em>Remember:</em> Your home is your constitutional sanctuary. An uninvited visitor who refuses to leave when commanded by the legal resident is committing criminal trespass under Section 329 of the Bharatiya Nyaya Sanhita (BNS).
                  </p>
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
                  38. Critical Evidence to Collect Against Recovery Agent Harassment
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Regulatory authorities like the RBI Banking Ombudsman and Consumer Protection Commissions adjudicate cases based on <strong>contemporaneous electronic and documentary evidence</strong>. Assembling a rock-solid evidence dossier is essential:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3 text-xs sm:text-sm">
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black block font-bold">1. Digital Call Audio Recordings:</strong>
                      <p className="text-black">Preserve unmodified audio files showing exact dates, call durations, caller statements, and background call-center chatter.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black block font-bold">2. Telecom Call Detail Records (CDR):</strong>
                      <p className="text-black">Screenshots of your incoming mobile call logs proving repeated calls in a single day or calls outside the 8 AM–7 PM window.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black block font-bold">3. Electronic Messaging Screenshots:</strong>
                      <p className="text-black">High-resolution screenshots of WhatsApp texts, SMS messages, fake arrest notices, or communications sent to family members.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <strong className="text-black block font-bold">4. CCTV &amp; Doorbell Video Footage:</strong>
                      <p className="text-black">Video footage from society entry gates, building corridors, or video doorbells showing the agents&apos; arrival, number of personnel, and aggressive conduct.</p>
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
                  <p>
                    <strong>Is call recording legal in India?</strong> Yes, 100% legal. Under Indian evidence law, recording a conversation in which you are an active participant is fully permissible and admissible as electronic evidence under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong> (formerly Section 65B of the Indian Evidence Act).
                  </p>
                  <p>
                    To ensure your evidence is unimpeachable before the Banking Ombudsman or a Judicial Magistrate, maintain a formal <strong>Harassment Incident Dossier</strong> containing:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>The chronological date, exact time, and duration of every incoming recovery communication.</li>
                    <li>The incoming phone number, stated agent name, and collection agency employer.</li>
                    <li>Specific words spoken, threats made, or demands for immediate cash payment.</li>
                    <li>The corresponding raw audio file stored in a dedicated secure cloud folder.</li>
                  </ul>
                  <p className="text-xs text-black">
                    <em>Pro Tip:</em> Do not edit, trim, or filter audio recordings. Preserving the raw, unedited file with original file metadata ensures maximum evidentiary admissibility under Section 63 BSA.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4 tracking-tight break-words">
                  40. How to Complain Against a Recovery Agent: Three-Tier Escalation Hierarchy
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    When a debt recovery agent transgresses statutory boundaries—by calling during prohibited nocturnal hours, hurling verbal profanities, trespassing upon private premises, or contacting non-guarantor third parties—the borrower holds powerful legal recourse. However, navigating grievance redressal requires strict adherence to the <strong>Reserve Bank of India&apos;s Three-Tier Escalation Hierarchy</strong>.
                  </p>
                  <p>
                    Filing a complaint directly with the RBI Banking Ombudsman without first engaging the lending institution&apos;s internal grievance machinery will result in the immediate procedural rejection of your petition under Clause 10(1) of the <em>Reserve Bank - Integrated Ombudsman Scheme, 2021</em>. To build an unassailable legal case, you must follow the sequential escalation ladder:
                  </p>

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
                      <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                        Every regulated commercial bank and NBFC is mandated by the RBI to appoint designated Grievance Redressal Officers at the branch, cluster, and regional levels. You must lodge a formal written complaint with your home branch and the designated regional GRO, attaching documented evidence of misconduct (call logs, audio recordings, WhatsApp transcripts).
                      </p>
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
                      <p className="text-xs sm:text-sm text-indigo-900 leading-relaxed">
                        If the branch manager or regional GRO fails to respond within 7 to 10 days, or provides an evasive, dismissive reply defending the outsourced agency, escalate the matter immediately to the lender&apos;s apex <strong>Principal Nodal Officer (PNO)</strong> at their corporate headquarters. The PNO holds direct executive authority over outsourced vendor empanelment and customer service quality.
                      </p>
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
                      <p className="text-xs sm:text-sm text-purple-900 leading-relaxed">
                        If 30 calendar days elapse from your Tier 1 complaint without a satisfactory written resolution, or if the bank outright rejects your complaint while harassment continues, you gain immediate statutory standing to file an appeal before the <strong>RBI Integrated Ombudsman</strong> via the central Complaint Management System (CMS).
                      </p>
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
                          <td className="p-3">Home Branch Manager &amp; Regional Grievance Officer</td>
                          <td className="p-3">30 Days</td>
                          <td className="p-3">Agency de-allocation, stoppage of field visits, internal inquiry.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-indigo-900">Tier 2: Apex PNO</td>
                          <td className="p-3">Principal Nodal Officer (Bank Corporate Office)</td>
                          <td className="p-3">7–10 Days</td>
                          <td className="p-3">Direct executive intervention, blacklisting of agency, written apology.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-purple-900">Tier 3: RBI Ombudsman</td>
                          <td className="p-3">Centralized CMS Portal (cms.rbi.org.in)</td>
                          <td className="p-3">30–60 Days</td>
                          <td className="p-3">Statutory compensation (up to ₹1L mental agony), regulatory penalties.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-red-900">Parallel: Police / Court</td>
                          <td className="p-3">Local Police Station / Judicial Magistrate / Consumer Court</td>
                          <td className="p-3">Immediate</td>
                          <td className="p-3">Criminal FIR for extortion/trespass, civil injunction, punitive damages.</td>
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
                  41. How to Complain to the Bank or NBFC: Formal Complaint Template &amp; Statutory Procedure
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    When submitting a grievance to a bank, informal phone conversations with customer care executives are largely futile. Call center representatives often close complaints as &quot;clarification provided&quot; without initiating substantive inquiry. To establish an unassailable legal paper trail, your grievance must be served through <strong>Registered Post with Acknowledgment Due (RPAD)</strong> and parallelly transmitted via the bank&apos;s verified Principal Nodal Officer email address.
                  </p>
                  <p>
                    Below is an authoritative, legally fortified complaint draft developed by senior banking litigation attorneys, specifically tailored to invoke the central bank&apos;s Master Directions:
                  </p>

                  <div className="p-4 sm:p-6 bg-slate-900 text-slate-100 rounded-2xl border border-slate-700 text-xs sm:text-sm font-mono space-y-3 leading-relaxed shadow-lg">
                    <div className="text-amber-400 font-bold border-b border-slate-700 pb-2 text-[11px] sm:text-xs uppercase tracking-wider">
                      FORMAL GRIEVANCE NOTICE (SERVED VIA RPAD &amp; REGISTERED EMAIL)
                    </div>
                    <p>To,<br />
                    The Principal Nodal Officer / Head of Customer Grievance Redressal,<br />
                    [Name of Commercial Bank / NBFC],<br />
                    Corporate Headquarters / Zonal Office Address: [Insert Address]<br />
                    Email: [Insert Official PNO Email Address]</p>

                    <p><strong>SUBJECT:</strong> Formal Complaint Regarding Egregious Harassment, Prohibited Calling Hours, and Unlawful Misconduct by Outsourced Recovery Agents — Account No: [Insert Loan / Credit Card Account Number].</p>

                    <p>Dear Sir / Madam,</p>

                    <p>I am writing to register an urgent formal complaint regarding serious regulatory violations and criminal intimidation committed by recovery personnel acting on behalf of your institution regarding the captioned account.</p>

                    <p><strong>1. DETAILS OF OFFENDING CONDUCT &amp; TIMESTAMPS:</strong><br />
                    On [Insert Date] at [Insert Exact Time, e.g., 09:45 PM], an individual identifying himself as [Insert Agent Name or Unknown Caller] calling from mobile number [Insert Phone Number] contacted the undersigned. During this interaction, the caller used abusive language, threatened home intrusion, and made false claims of impending police arrest, in clear defiance of the 08:00 AM to 07:00 PM statutory calling window mandated by the Reserve Bank of India.</p>

                    <p><strong>2. SPECIFIC REGULATORY VIOLATIONS COMMITTED:</strong><br />
                    • Paragraph 2.4 of the RBI Master Circular on Recovery Agents in Banks (DBOD.No.Leg.BC.91/09.07.005/2007-08).<br />
                    • Master Direction – Managing Risks and Code of Conduct in Outsourcing of Financial Services (RBI/2022-23/108).<br />
                    • Sections 351, 352, and 79 of the Bharatiya Nyaya Sanhita, 2023 (Criminal Intimidation and Intentional Insult).<br />
                    • Supreme Court of India directives in <em>ICICI Bank v. Shanti Devi Sharma (2008)</em> and <em>Prakash Kaur (2007)</em> prohibiting coercive debt recovery.</p>

                    <p><strong>3. FORMAL RELIEF SOUGHT WITHIN 7 WORKING DAYS:</strong><br />
                    i. Immediate de-allocation of this account from the offending recovery agency.<br />
                    ii. Immediate cessation of all field visits and prohibited-hour communications.<br />
                    iii. Disclosure of the recovery agency name, corporate address, and IIBF DRA certification details of the caller.<br />
                    iv. Written confirmation of internal disciplinary proceedings initiated against the vendor.</p>

                    <p>Please note that if this grievance is not resolved satisfactorily within 30 days, this matter will be escalated to the <strong>RBI Integrated Ombudsman (cms.rbi.org.in)</strong>, the <strong>Cyber Crime Cell</strong>, and the jurisdictional <strong>Consumer Disputes Redressal Commission</strong> holding your bank vicariously liable for all consequential damages.</p>

                    <p>Yours faithfully,<br />
                    [Your Full Legal Name]<br />
                    [Registered Mobile Number]<br />
                    [Registered Residential Address]<br />
                    Enclosures: Audio Recording Drive Link, Call Log Screenshots, Telecom CDR Dossier.</p>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs sm:text-sm text-amber-950 space-y-1">
                    <strong className="block font-bold">Critical Procedural Instruction:</strong>
                    <p>
                      Always retain the physical postal receipt and obtain the computerized delivery confirmation from the official India Post tracking portal. In banking litigation, the date stamped on the postal acknowledgment card serves as the conclusive legal trigger for calculating the 30-day statutory ombudsman countdown.
                    </p>
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
                  42. RBI Complaint Process Against Recovery Agents: Step-by-Step CMS Guide
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    The Reserve Bank of India operates the centralized <strong>Complaint Management System (CMS)</strong> at <strong>cms.rbi.org.in</strong>. This digital platform bypasses regional bureaucracy, providing Indian borrowers with a direct electronic conduit to hold commercial banks, NBFCs, and primary urban co-operative banks legally accountable.
                  </p>
                  <p>
                    Below is the authoritative, five-step operational roadmap for filing a successful regulatory complaint against recovery agent harassment:
                  </p>

                  <div className="space-y-3 sm:space-y-4 my-4">
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Navigate to the Official Portal &amp; Verify Identity</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black pl-8">
                        Visit <strong>https://cms.rbi.org.in</strong> and select <em>&quot;File a Complaint&quot;</em>. Enter your registered mobile number to receive an Aadhaar/mobile OTP verification. Never use third-party intermediary websites or unofficial grievance portals.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Select the Regulated Entity (Lender Classification)</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black pl-8">
                        Select the correct institutional tier: <em>Scheduled Commercial Bank (Public or Private)</em>, <em>Non-Banking Financial Company (NBFC)</em>, <em>Small Finance Bank</em>, or <em>Asset Reconstruction Company (ARC)</em>. Enter the specific branch name and your loan or credit card account number.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Accurately Classify the Grievance Category</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black pl-8">
                        Under the primary category drop-down, select <strong>&quot;Loans and Advances&quot;</strong>. In the sub-category drop-down, specifically choose <strong>&quot;Recovery Agent Conduct / Harassment / Unfair Recovery Practices&quot;</strong>. Selecting generic customer service categories will route your complaint to standard dispute queues instead of the specialized ombudsman recovery cell.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">4</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Upload the Fortified Evidence Dossier (PDF &amp; Audio)</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black pl-8">
                        Attach a single comprehensive PDF dossier containing: (a) Your Tier 1 complaint copy with India Post RPAD delivery proof or bank email acknowledgment ticket, (b) Bank&apos;s unsatisfactory reply or proof that 30 days have elapsed, (c) Telecom CDR call logs, and (d) Transcript of abusive call recordings. Audio files can be uploaded or provided via an authenticated cloud hyperlink.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">5</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Obtain CMS Tracking Number &amp; Monitor Conciliation</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black pl-8">
                        Upon submission, you receive an official CMS Complaint Reference Number (e.g., <em>CMS/2026/XXXXXX</em>). The Ombudsman office serves notice upon the bank&apos;s Principal Nodal Officer with a strict 14-day statutory deadline to furnish its defense, telecaller records, and internal voice audit files.
                      </p>
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
                  43. The RBI Integrated Ombudsman Scheme (RB-IOS): Powers &amp; Compensation
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Notified on November 12, 2021, the <strong>Reserve Bank - Integrated Ombudsman Scheme (RB-IOS, 2021)</strong> amalgamated three erstwhile ombudsman schemes (Banking Ombudsman Scheme 2006, Ombudsman Scheme for NBFCs 2018, and Ombudsman Scheme for Digital Transactions 2019) into a unified, borderless regulatory tribunal operating under the doctrine of <em>&quot;One Nation One Ombudsman&quot;</em>.
                  </p>
                  <p>
                    Unlike standard bank grievance desks, the Integrated Ombudsman functions as a <strong>quasi-judicial authority</strong> established under Section 35A of the Banking Regulation Act, 1949, Section 45L of the RBI Act, 1934, and Section 18 of the Payment and Settlement Systems Act, 2007.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 sm:p-5 bg-emerald-50/80 border border-emerald-300 rounded-2xl space-y-2">
                      <div className="inline-block px-2 py-0.5 bg-emerald-700 text-white text-[10px] font-bold rounded-md uppercase">
                        Statutory Remedy 1
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-emerald-950">
                        Compensation for Mental Agony: Up to ₹1,00,000
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                        Under <strong>Clause 15(3) of the Scheme</strong>, the Ombudsman holds discretionary statutory power to award monetary compensation of up to <strong>₹1,00,000 (Rupees One Lakh)</strong> directly to the borrower for loss of time, mental anguish, physical harassment, and emotional distress caused by unlawful recovery agent conduct.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-teal-50/80 border border-teal-300 rounded-2xl space-y-2">
                      <div className="inline-block px-2 py-0.5 bg-teal-700 text-white text-[10px] font-bold rounded-md uppercase">
                        Statutory Remedy 2
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-teal-950">
                        Consequential Loss Damages: Up to ₹20,00,000
                      </h4>
                      <p className="text-xs sm:text-sm text-teal-900 leading-relaxed">
                        Under <strong>Clause 15(2) of the Scheme</strong>, if the recovery misconduct resulted in measurable financial damage—such as unauthorized bank account debits, unlawful property seizure, loss of employment due to workplace defamation, or forced distress sales—the Ombudsman can award damages up to <strong>₹20,00,000 (Rupees Twenty Lakhs)</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-2 text-xs sm:text-sm">
                    <strong className="text-black block font-bold">Binding Nature of Ombudsman Awards &amp; Appellate Mechanism:</strong>
                    <p className="text-black">
                      An Award passed by the Banking Ombudsman is <strong>strictly binding upon the lending institution</strong>. The bank has no option to ignore it and must comply within 30 days of the complainant issuing their acceptance. If the bank seeks to challenge the award, it can only file an appeal before the <strong>Executive Director of the Reserve Bank of India</strong> (the designated Appellate Authority) within 30 days, but only after satisfying strict conditions. If the complainant is dissatisfied with the compensation awarded, they retain complete freedom to reject the award and pursue full damages before the Consumer Commission or Civil Court.
                    </p>
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
                  44. When to Approach the Police: Criminal Violations vs Civil Disputes
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    One of the most dangerous misconceptions held by debt-stressed citizens is that the police can be called by banks to arrest them for unpaid loans. Under Indian jurisprudence, <strong>defaulting on an unsecured personal loan or credit card is strictly a civil breach of contract</strong> governed by the <em>Indian Contract Act, 1872</em>. It is not an offense under the penal code, and police officers possess zero statutory jurisdiction to summon borrowers or mediate debt repayments.
                  </p>
                  <p>
                    Conversely, when recovery agents cross the threshold into coercive muscle tactics, <strong>their actions constitute serious cognizable criminal offenses</strong> under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>. You must approach the jurisdictional police station immediately under these five criminal scenarios:
                  </p>

                  <div className="space-y-3 my-4">
                    <div className="p-3.5 sm:p-4 bg-red-50/80 border border-red-200 rounded-xl space-y-1">
                      <strong className="text-red-950 font-bold block text-xs sm:text-sm">
                        1. Physical Assault or Use of Criminal Force (Sections 115 &amp; 352 BNS):
                      </strong>
                      <p className="text-xs sm:text-sm text-red-900">
                        Any physical manhandling, pushing, collar-grabbing, or physically blocking a borrower from leaving their house or vehicle constitutes cognizable assault punishable with rigorous imprisonment.
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-red-50/80 border border-red-200 rounded-xl space-y-1">
                      <strong className="text-red-950 font-bold block text-xs sm:text-sm">
                        2. Criminal Trespass &amp; Home Intrusion (Section 329 BNS):
                      </strong>
                      <p className="text-xs sm:text-sm text-red-900">
                        Entering your private residence without permission, pushing past family members, staging a sit-in inside your living room, or refusing to vacate after being asked to leave constitutes criminal house-trespass.
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-red-50/80 border border-red-200 rounded-xl space-y-1">
                      <strong className="text-red-950 font-bold block text-xs sm:text-sm">
                        3. Extortion &amp; Forcible Confiscation of Property (Sections 308 &amp; 383 BNS):
                      </strong>
                      <p className="text-xs sm:text-sm text-red-900">
                        Forcibly snatching car or two-wheeler keys, seizing laptops, mobile phones, or gold ornaments, or forcing a borrower to initiate an on-the-spot UPI transfer under threat of violence constitutes extortion and highway robbery.
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-red-50/80 border border-red-200 rounded-xl space-y-1">
                      <strong className="text-red-950 font-bold block text-xs sm:text-sm">
                        4. Outraging Modesty of Women &amp; Lewd Insults (Section 79 BNS):
                      </strong>
                      <p className="text-xs sm:text-sm text-red-900">
                        Any lewd remarks, sexually suggestive threats, verbal insults, or aggressive posturing directed toward female borrowers, mothers, wives, or daughters carries mandatory non-bailable arrest under Indian law.
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-red-50/80 border border-red-200 rounded-xl space-y-1">
                      <strong className="text-red-950 font-bold block text-xs sm:text-sm">
                        5. Personating a Public Servant / Police Officer (Section 204 BNS):
                      </strong>
                      <p className="text-xs sm:text-sm text-red-900">
                        Agents falsely claiming to be Crime Branch inspectors, CBI officers, or court bailiffs, or displaying fake police stamps on WhatsApp recovery notices, commit severe offenses punishable with up to 3 years imprisonment.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-300 rounded-2xl space-y-2 text-xs sm:text-sm">
                    <strong className="text-black block font-bold">Procedural Rights Under Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS):</strong>
                    <ul className="list-disc pl-5 space-y-1 text-black text-xs">
                      <li>
                        <strong>Mandatory FIR Registration (Section 173 BNSS):</strong> When information discloses the commission of a cognizable offense (assault, extortion, trespass), the Station House Officer (SHO) has no legal discretion and is mandated to register a formal First Information Report (FIR).
                      </li>
                      <li>
                        <strong>Escalation to SP / DCP (Section 175(3) BNSS):</strong> If the local police station refuses to register an FIR claiming it is a &quot;bank dispute&quot;, send a written complaint with audio/video evidence via Registered Post to the Superintendent of Police (SP) or Deputy Commissioner of Police (DCP).
                      </li>
                      <li>
                        <strong>Judicial Magistrate Application (Section 175(4) BNSS):</strong> If police leadership fails to act, CredSettle’s advocates file a formal Section 175(4) BNSS application before the local Judicial Magistrate First Class (JMFC) seeking a judicial order directing the police to lodge an FIR and investigate the bank managers.
                      </li>
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
                  <p>
                    When commercial lenders cross statutory lines, the Indian judicial system equips borrowers with powerful civil and constitutional remedies to halt harassment permanently and seek compensatory damages:
                  </p>

                  <div className="space-y-4 my-4">
                    {/* Remedy 1 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-[11px] font-bold rounded-md uppercase">
                        Civil Court Injunction
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-black">
                        Permanent &amp; Temporary Injunction Under Order 39 Rules 1 &amp; 2 CPC
                      </h4>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Borrowers facing persistent doorstep intimidation can file a Civil Suit before the City Civil Court or Senior Civil Judge seeking a <strong>Permanent Injunction</strong> restraining the bank, its directors, branch managers, collection agencies, and freelance telecallers from visiting the borrower&apos;s residence, office, or contacting family members. Courts routinely grant ad-interim ex-parte injunctions prohibiting lenders from deploying field agents within a 500-meter radius of the borrower&apos;s home.
                      </p>
                    </div>

                    {/* Remedy 2 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-[11px] font-bold rounded-md uppercase">
                        Tortious Damages Suit
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-black">
                        Civil Suit for Damages for Defamation &amp; Intentional Infliction of Distress
                      </h4>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Under Indian tort law, a lender that damages a citizen&apos;s social reputation by shouting in residential societies, informing office employers, or circulating WhatsApp messages can be sued for <strong>Substantial Tortious Damages</strong>. Indian courts have awarded damages ranging from ₹5 Lakhs to ₹50 Lakhs for mental anguish, loss of livelihood, and loss of dignity resulting from unlawful recovery.
                      </p>
                    </div>

                    {/* Remedy 3 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-[11px] font-bold rounded-md uppercase">
                        Advocates Act Representation
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-black">
                        Formal Legal Representation Notice Under Advocates Act, 1961
                      </h4>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Under Section 30 of the <em>Advocates Act, 1961</em>, an enrolled advocate has the statutory right to represent clients across all forums. When CredSettle’s banking litigation advocates serve a formal <strong>Legal Representation &amp; Cease-and-Desist Notice</strong> upon the bank, the lender is legally mandated to direct all future correspondence solely to the advocate’s chamber. Any subsequent recovery agent visit or harassing call directly to the borrower constitutes contempt and actionable harassment.
                      </p>
                    </div>

                    {/* Remedy 4 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <span className="px-2.5 py-1 bg-rose-100 text-rose-800 text-[11px] font-bold rounded-md uppercase">
                        High Court Constitutional Remedy
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-black">
                        Writ Petition Under Article 226 of the Constitution of India
                      </h4>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Where public sector banks or major private lenders violate fundamental human rights through organized musclemen, borrowers can petition their state High Court under Article 226 for a <strong>Writ of Mandamus</strong> directing the Reserve Bank of India to enforce its Master Circulars and hold the bank&apos;s managing director personally liable for contempt of constitutional liberty.
                      </p>
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
                  <p>
                    The enactment of the <strong>Consumer Protection Act, 2019 (CPA 2019)</strong> transformed debt recovery litigation in India. Under Section 2(7) of the Act, any person who avails banking, credit card, or financial loan services is a statutory <strong>&quot;Consumer&quot;</strong>, and banking institutions are classified as service providers under Section 2(42).
                  </p>
                  <p>
                    Coercive, humiliating, or unlawful debt collection is recognized under consumer law as both a <strong>&quot;Deficiency in Service&quot;</strong> under Section 2(11) and an <strong>&quot;Unfair Trade Practice&quot;</strong> under Section 2(47).
                  </p>

                  <div className="p-4 sm:p-5 bg-blue-50/60 border border-blue-200 rounded-2xl space-y-3 my-3">
                    <h4 className="font-bold text-blue-950 text-sm sm:text-base">
                      Why Consumer Commissions Are Devastating for Errant Banks:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-blue-900">
                      <li>
                        <strong>Vicarious Liability Without Exception:</strong> Consumer forums hold banks 100% liable for the actions of their outsourced collection agencies, rejecting defenses that the agent was an &quot;independent contractor&quot;.
                      </li>
                      <li>
                        <strong>Punitive Damages for Mental Harassment:</strong> District Consumer Commissions regularly award damages between ₹50,000 to ₹10,00,000 for mental agony, defamation, and litigation costs against commercial lenders.
                      </li>
                      <li>
                        <strong>Order of Public Apology &amp; Debt Waiver:</strong> In severe cases of persistent harassment, Consumer Commissions have ordered lenders to issue unconditional written apologies and write off substantial portions of disputed late fees and penal interest.
                      </li>
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
                          <td className="p-3 font-semibold text-blue-900">District Consumer Disputes Redressal Commission (DCDRC)</td>
                          <td className="p-3">Claims up to ₹50 Lakhs</td>
                          <td className="p-3">3 to 6 Months (Fast-Tracked)</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-indigo-900">State Consumer Disputes Redressal Commission (SCDRC)</td>
                          <td className="p-3">Claims between ₹50 Lakhs and ₹2 Crores</td>
                          <td className="p-3">6 to 12 Months</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-purple-900">National Consumer Disputes Redressal Commission (NCDRC)</td>
                          <td className="p-3">Claims exceeding ₹2 Crores</td>
                          <td className="p-3">Appellate &amp; High-Value Jurisdiction</td>
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
                  <p>
                    In the landmark 9-judge constitutional bench ruling in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, the Supreme Court of India declared that the <strong>Right to Privacy is an inalienable Fundamental Right</strong> guaranteed under Article 21 of the Constitution of India. This constitutional doctrine directly governs financial debt collection.
                  </p>
                  <p>
                    Furthermore, with the enactment of the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act, 2023)</strong> and Section 29 of the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, Indian borrowers enjoy comprehensive statutory shielding against privacy transgressions:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        1. Fiduciary Data Breach Liability
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Under the DPDP Act, 2023, lending institutions are classified as <strong>&quot;Data Fiduciaries&quot;</strong> and recovery agencies as <strong>&quot;Data Processors&quot;</strong>. Banks that disclose unencrypted customer contact lists, PAN numbers, Aadhaar details, or financial balances to unvetted recovery freelancers commit catastrophic regulatory data breaches subject to fines up to <strong>₹250 Crores</strong> imposed by the Data Protection Board of India.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-2">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        2. Prohibition on Third-Party Data Scraping
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Lending entities and recovery agencies are strictly barred from accessing, scraping, or utilizing phone contact books, social media profiles (LinkedIn, Instagram, Facebook), or employer internal directories to track delinquent borrowers. Any attempt to contact a borrower&apos;s professional contacts constitutes actionable cyberstalking and tortious interference.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs sm:text-sm text-emerald-950 space-y-1">
                    <strong className="block font-bold">The Rule of Informational Self-Determination:</strong>
                    <p>
                      Every Indian citizen holds the sovereign legal right to control who discusses their financial obligations. A recovery agent who blurts out loan balances to a neighbor, apartment security guard, or family member commits an immediate, non-compoundable breach of statutory confidentiality under Section 29 CICRA, entitling the victim to punitive compensation.
                    </p>
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
                  <p>
                    When recovery misconduct is formally substantiated before regulatory or judicial authorities, the punitive consequences inflicted upon banks and collection agencies are severe and multifaceted:
                  </p>

                  <div className="space-y-3 sm:space-y-4 my-4">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-1.5">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        1. RBI Regional Ban on Outsourced Debt Recovery (Paragraph 2.6):
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Under Paragraph 2.6 of the Master Circular on Recovery Agents in Banks, if the Reserve Bank observes persistent complaints of harassment or coercive recovery against a particular bank or NBFC, the central bank holds the statutory power to <strong>impose an outright ban prohibiting the bank from engaging recovery agents</strong> in that specific city, district, or state for a specified period (typically 6 months to 1 year). During this ban, the lender cannot deploy a single field recovery agent.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-1.5">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        2. Permanent Blacklisting on the IBA Central Database:
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Any collection agency whose personnel are found guilty of physical intimidation, abusive profanity, or police impersonation faces immediate termination of contract and permanent entry into the <strong>Indian Banks&apos; Association (IBA) Centralized Blacklist</strong>. Once blacklisted, the agency is permanently barred from securing recovery contracts with any public or private sector bank across India.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-1.5">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        3. Multi-Crore RBI Compounding Penalties:
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Under Section 47A(1)(b) of the Banking Regulation Act, 1949, the Reserve Bank routinely imposes multi-crore monetary penalties on major commercial banks for non-compliance with the Outsourcing Guidelines and Fair Practices Code. In recent regulatory enforcement orders, major private and public banks have been slapped with penalties ranging from ₹1 Crore to ₹10+ Crores for unfair recovery practices.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-1.5">
                      <strong className="text-black font-bold block text-sm sm:text-base">
                        4. Personal Criminal Culpability of Bank Executives:
                      </strong>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Under the doctrine of criminal conspiracy and abetment (Sections 45 &amp; 61 BNS), senior bank collection heads and regional managers cannot hide behind corporate veils. Where a bank knowingly deploys uncertified bouncers who commit criminal extortion or physical violence, the bank managers are named as co-accused in criminal FIRs alongside the physical recovery agents.
                      </p>
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
                  49. Common Recovery Agent Harassment Scenarios &amp; Proven Defense Tactics
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Third-party recovery agencies frequently deploy calculated psychological intimidation playbooks designed to exploit a borrower&apos;s unfamiliarity with Indian banking law. Understanding the legal truth behind these predatory tactics strips the caller of power and provides you with immediate, scripted counter-measures:
                  </p>

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
                        <p>
                          <strong>The Statutory Reality:</strong> Pure legal fraud. Purely civil debt defaults cannot trigger arrest warrants. Police officers cannot execute civil arrests without a formal decree issued by a competent Civil Court under Order 21 CPC after a full civil trial. Threatening arrest violates Section 351 BNS (Criminal Intimidation) and Section 204 BNS (Personating a Public Servant).
                        </p>
                        <p className="text-blue-950 font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                          <strong>Your Counter-Response:</strong> &quot;Loan default is purely a civil contractual matter. Impersonating police or threatening arrest is a cognizable criminal offense under Sections 204 and 351 of the Bharatiya Nyaya Sanhita, 2023. I am recording this call and will forward this recording to the Police Commissioner and the RBI Integrated Ombudsman.&quot;
                        </p>
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
                        <p>
                          <strong>The Statutory Reality:</strong> Unsecured loans and credit cards have no mortgage lien. Recovery agents have zero authority under SARFAESI or the Transfer of Property Act to attach, seize, or lock any personal property. Attempting to enter private property or seize items constitutes Criminal Trespass (Section 329 BNS) and Extortion / Robbery (Sections 308 &amp; 383 BNS).
                        </p>
                        <p className="text-blue-950 font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                          <strong>Your Counter-Response:</strong> &quot;You have zero legal authority to touch any property without a formal Civil Court attachment decree. If you step onto my property or attempt to take any item, I will dial 112 immediately for criminal trespass and robbery.&quot;
                        </p>
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
                        <p>
                          <strong>The Statutory Reality:</strong> Paragraph 2.4 of the RBI Master Circular strictly forbids contacting a borrower&apos;s employer or colleagues. Defaming an employee at their workplace constitutes Criminal Defamation under Section 356 BNS and actionable Tortious Interference with an Employment Contract, for which the bank can be sued for massive commercial damages.
                        </p>
                        <p className="text-blue-950 font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                          <strong>Your Counter-Response:</strong> &quot;Contacting my employer violates Paragraph 2.4 of the RBI Master Circular and constitutes criminal defamation under Section 356 BNS. Any contact with my workplace will result in an immediate damages suit against your bank for intentional tortious interference.&quot;
                        </p>
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
                        <p>
                          <strong>The Statutory Reality:</strong> Non-guarantor family members have zero legal obligation for another adult&apos;s debts under the Indian Contract Act. Reaching out to relatives violates statutory confidentiality under Section 29 CICRA and triggers heavy penalties under the Maintenance and Welfare of Parents and Senior Citizens Act, 2007 if elderly relatives are harassed.
                        </p>
                        <p className="text-blue-950 font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                          <strong>Your Counter-Response:</strong> &quot;My family members are not guarantors or parties to this loan agreement. Disclosing my financial data to them violates Section 29 of the CICRA Act and the DPDP Act, 2023. Continued harassment of my elderly parents will result in an immediate complaint under the Senior Citizens Welfare Act.&quot;
                        </p>
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
                        <p>
                          <strong>The Statutory Reality:</strong> A classic collection agent scam. Money transferred to a personal UPI ID, phone number, or unverified QR code goes straight into the agent&apos;s personal pocket. The bank never receives the funds, your loan remains delinquent, penal interest continues compounding, and your credit score continues plummeting.
                        </p>
                        <p className="text-blue-950 font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                          <strong>The Golden Rule:</strong> Never pay a single rupee without a formal, system-generated Settlement Letter issued on the bank&apos;s official letterhead with an authorized officer signature. All payments must be made directly to your registered loan account number through the bank&apos;s official gateway.
                        </p>
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
                <p className="text-xs sm:text-sm text-black mb-4 leading-relaxed">
                  Below are detailed, authoritative legal answers to the 18 most critical questions asked by Indian borrowers regarding debt recovery agent rules, regulatory rights, statutory time windows, and legal defense strategies:
                </p>

                <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-2xl mb-4 text-xs sm:text-sm text-blue-950 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-bold block text-blue-900">Need Immediate Legal Protection?</span>
                    <p className="text-xs text-blue-800">Our banking advocates issue formal representation notices to banks within 24 hours.</p>
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
                  51. Latest RBI Rules and Policy Updates for Recovery Agents (2026 Edition)
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    As consumer lending digitizes across India, the Reserve Bank of India, in coordination with the Telecom Regulatory Authority of India (TRAI) and the Ministry of Electronics &amp; Information Technology (MeitY), has enacted unprecedented regulatory safeguards:
                  </p>

                  <div className="space-y-3 sm:space-y-4 my-4">
                    {/* Update 1 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-blue-600 text-white font-bold text-[10px] rounded uppercase">TRAI Mandate</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">TRAI &amp; DoT 160-Series Dedicated Telecalling Mandate</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Under joint directives from TRAI and the Department of Telecommunications, all legitimate commercial banking and collection calls must originate strictly from the dedicated <strong>&apos;160&apos; series number block</strong> (e.g., <em>1600XXXXXX</em>). Financial institutions and outsourced agencies are strictly prohibited from making debt collection calls from standard 10-digit personal mobile numbers (e.g., 98XXXXXXXX, 99XXXXXXXX) or unregistered VoIP virtual numbers. Any recovery call originating from a non-160 series number can be immediately reported as unlawful telemarketing and cyber harassment.
                      </p>
                    </div>

                    {/* Update 2 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-indigo-600 text-white font-bold text-[10px] rounded uppercase">AI Surveillance</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Mandatory AI-Powered Speech Analytics &amp; Voice Auditing</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        The RBI mandates all Scheduled Commercial Banks and large NBFCs to deploy automated speech recognition and natural language processing (NLP) algorithms on 100% of outbound collection calls. These AI compliance engines automatically flag and log aggressive decibel levels, shouting, profanity, abusive vocabulary, and calls initiated outside the permitted 08:00 AM to 07:00 PM window, generating auditable compliance logs that must be submitted to RBI inspection teams.
                      </p>
                    </div>

                    {/* Update 3 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-purple-600 text-white font-bold text-[10px] rounded uppercase">Privacy Law</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">DPDP Act 2023 Enforcement: Penalties up to ₹250 Crores</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        With full operationalization of the <em>Digital Personal Data Protection Act, 2023</em>, lending institutions face statutory penalties of up to <strong>₹250 Crores</strong> for sharing customer phone records, loan arrears, or addresses with unverified collection vendors without valid consent. Borrowers can file complaints directly with the Data Protection Board of India for unauthorized data processing.
                      </p>
                    </div>

                    {/* Update 4 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-emerald-600 text-white font-bold text-[10px] rounded uppercase">Consumer Access</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Mandatory Principal Nodal Officer Links on All Digital Notices</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        Every automated repayment reminder, SMS notice, or WhatsApp alert dispatched by banks or collection agencies must incorporate a direct, clickable hyperlink routing the customer to the bank&apos;s Principal Nodal Officer complaint desk and the official RBI CMS portal (<em>cms.rbi.org.in</em>). Omitting this grievance link renders the digital notice legally defective under RBI customer service directives.
                      </p>
                    </div>

                    {/* Update 5 */}
                    <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-rose-600 text-white font-bold text-[10px] rounded uppercase">Cyber Crime</span>
                        <h4 className="font-bold text-black text-sm sm:text-base">Criminalization of Digital Contact Scraping &amp; Morphing</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed">
                        The central bank&apos;s Digital Lending Guidelines strictly prohibit lending applications from requesting access to a user&apos;s contact book, photo gallery, or device storage. Attempting to message contacts or circulate morphed photos is classified as non-bailable cyber extortion punishable under Sections 66E, 67, and 67A of the Information Technology Act and Bharatiya Nyaya Sanhita, holding both app developers and lending executives criminally liable.
                      </p>
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
                  52. Conclusion: Standing Tall Against Debt Harassment With CredSettle
                </h2>
                <div className="text-black leading-relaxed space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <p>
                    Navigating severe financial distress is an emotionally grueling trial, but <strong>experiencing financial hardship does not strip you of your constitutional liberty, personal dignity, or fundamental human rights</strong>. Defaulting on an unsecured personal loan or credit card is purely a civil disagreement between a citizen and a commercial enterprise—it is not a crime, and you are never at the mercy of predatory collection bouncers.
                  </p>
                  <p>
                    Under the protective architecture of the Reserve Bank of India&apos;s Master Circulars, the Bharatiya Nyaya Sanhita, the Consumer Protection Act, and the Advocates Act of 1961, <strong>the law stands firmly on the side of the dignified borrower</strong>. You do not have to live in fear of ringing phones, doorstep intrusions, or social defamation.
                  </p>
                  <p>
                    At <strong>CredSettle</strong>, our senior banking litigation advocates construct an impenetrable legal shield around you and your family:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4 text-xs sm:text-sm">
                    <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                      <strong className="text-blue-950 font-bold block">1. 24-Hour Legal Representation Notice:</strong>
                      <p className="text-blue-900">We serve formal legal notices under the Advocates Act, 1961, forcing banks to cease direct calls and reroute all communication to our legal chamber.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                      <strong className="text-blue-950 font-bold block">2. Complete Family &amp; Workplace Shielding:</strong>
                      <p className="text-blue-900">We enforce strict privacy boundaries under Article 21, stopping illegal agent visits to your workplace or calls to non-guarantor family members.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                      <strong className="text-blue-950 font-bold block">3. Aggressive Regulatory Escalation:</strong>
                      <p className="text-blue-900">We file evidence-backed petitions before Bank Principal Nodal Officers, the RBI Integrated Ombudsman, and police authorities for criminal violations.</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                      <strong className="text-blue-950 font-bold block">4. Structured &amp; Honorable Debt Settlement:</strong>
                      <p className="text-blue-900">Once harassment is halted, we transition disputes into honorable, structured debt settlements with 40% to 70%+ waivers and official No Dues Certificates.</p>
                    </div>
                  </div>

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
          <aside className="lg:w-[15%] flex-shrink-0 hidden lg:block sticky top-20 space-y-4">
            <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-blue-200 text-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center text-sm mb-2">
                🛡️
              </span>
              <h4 className="font-bold text-xs text-black mb-1">Stop Harassment Now</h4>
              <p className="text-[10px] text-black mb-3 leading-tight">
                Cease-and-desist notices issued by advocates halt unlawful collection calls within 24–48 hours.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-blue-600 text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-[11px]"
              >
                Request Legal Callback
              </Link>
              <div className="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-black space-y-1 text-left">
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% Confidential</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> RBI Fair Code</p>
                <p className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> High-Court Advocates</p>
              </div>
            </div>

            {/* Diagnostic Quick Jump Badge */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-black">
              <span className="font-bold text-black block text-[11px]">Violation Checker</span>
              <p className="text-[10px] text-black leading-tight">Check if your lender breached RBI calling hours or privacy rules.</p>
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
