'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function KrazyBeeLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Check if mobile for specific behaviors
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        rootMargin: '-100px 0px -35% 0px', // Adjust trigger point
        threshold: 0.1
      }
    );

    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  // Scroll active item into view on mobile
  useEffect(() => {
    if (isMobile && activeId && mobileNavRef.current) {
      const activeLink = mobileNavRef.current.querySelector(`[href="#${activeId}"]`);
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeId, isMobile]);

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'kreditbee-vs-krazybee', label: 'Who is Lender?' },
    { id: 'settlement-process', label: 'Settlement Process' },
    { id: 'fake-notice-checker', label: 'Fake Notice Checker' },
    { id: 'legal-notices', label: 'Arbitration & S.138' },
    { id: 'settlement-letter', label: 'Letter Format' },
    { id: 'written-off-vs-settled', label: 'Written Off vs Settled' },
    { id: 'grievance-redressal', label: 'Escalation Matrix' },
    { id: 'faqs', label: 'FAQs' },
  ];

  /* 
    Helper class for links 
  */
  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive 
          ? 'border-blue-600 text-blue-600 font-semibold' 
          : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      // Desktop vertical style
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  const faqList = [
    {
      question: "Can I settle my KreditBee personal loan?",
      answer: "Yes, KreditBee loans (which are financed by KrazyBee or other partner NBFCs) can be settled if you are unable to repay. This involves paying a one-time reduced amount to close the loan account."
    },
    {
      question: "Why am I getting notices from KrazyBee Services?",
      answer: "KrazyBee Services Ltd. is the registered NBFC that lends money through the KreditBee app. Even if you took the loan on the KreditBee app, the legal entity you owe money to is likely KrazyBee, which is why you receive notices from them."
    },
    {
      question: "Does KreditBee/KrazyBee file legal cases?",
      answer: "Yes, they are known to initiate arbitration proceedings and can file criminal complaints under Section 138 of the Negotiable Instruments Act if an EMI repayment cheque or NACH mandate bounces."
    },
    {
      question: "How do I stop KreditBee agents from calling my parents?",
      answer: "Harassing relatives is against RBI guidelines. You can stop this by formally engaging a settlement firm like CredSettle to represent you. We issue a legal notice to them to stop contacting third parties and route all communication through us."
    },
    {
      question: "Is the WhatsApp legal notice from KreditBee real?",
      answer: "Most legal notices sent via WhatsApp that threaten 'Immediate Arrest' or 'Police Visit' are FAKE. A real arbitration notice is usually sent via registered post or official email and will contain a specific case number and hearing link."
    },
    {
      question: "What is the settlement percentage for KrazyBee loans?",
      answer: "Settlements often range between 30% to 50% of the total outstanding amount, depending on the delinquency period (how long you haven't paid) and your proven financial hardship."
    },
    {
      question: "Will settlement affect my CIBIL score?",
      answer: "Yes, the account will be marked as 'Settled' appearing in your credit report for 7 years. This is a negative status but is better than a 'Written Off' status or an active legal case."
    },
    {
      question: "Who is the Grievance Officer for KrazyBee?",
      answer: "As of 2026, the Grievance Redressal Officer can be reached at 080-44292555 or reachus@kbnbfc.in. If unresolved, escalations go to the Nodal Officer at grievance@kbnbfc.in."
    },
    {
      question: "What should be in the KrazyBee settlement letter?",
      answer: "The letter must be on KrazyBee letterhead, stating the agreed amount, payment deadline, loan account number, and explicitly mentioning that upon payment, the loan is closed and any legal proceedings will be withdrawn."
    },
    {
      question: "Can I settle if my case is in arbitration?",
      answer: "Yes, arbitration is a dispute resolution mechanism. You can settle the loan even during arbitration. The settlement agreement should serve as the consent terms to close the arbitration proceedings."
    }
  ];

  return (
    <>
      {/* Breadcrumb Section - Adjusted to match HDFC Design */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/loan-settlement" className="ml-1 font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                    Loan Settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    KrazyBee (KreditBee)
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout - 3 Column */}
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        
        {/* Mobile: Sticky Horizontal Scroll Table of Contents */}
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobileNavRef}>
          <nav className="flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={getLinkClass(link.id, true)}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveId(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Table of Contents */}
          <div className="lg:w-1/6 hidden lg:block">
            
            {/* Desktop: Sticky Vertical Sidebar */}
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
                  {navLinks.map((link) => (
                    <a 
                      key={link.id}
                      href={`#${link.id}`} 
                      className={getLinkClass(link.id, false)}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                        setActiveId(link.id);
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Middle Column: Main Content */}
          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">KrazyBee (KreditBee) Loan Settlement Guide</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                 If you took a loan through the <strong>KreditBee</strong> app and are now struggling with repayments, you are likely dealing with <strong>KrazyBee Services Limited</strong>. Thousands of young professionals across India find themselves in a debt trap due to high-interest digital loans. The ease of getting these loans often masks the aggressive recovery tactics and legal complications that follow a default.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Defaulting on a KreditBee loan can be scary. You might be facing endless calls from recovery agents, threats of legal action, or even arbitration notices. However, there is a way out. <strong>Loan Settlement</strong> is a legitimate, RBI-recognized process to close your loan for a reduced amount if you are in genuine financial distress.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Important Distinction</h4>
                <p className="text-blue-800 m-0">
                  <strong>KreditBee</strong> is the platform (app) you used. <strong>KrazyBee Services Pvt Ltd</strong> is the NBFC (Non-Banking Financial Company) that actually lent you the money. Your legal obligation and settlement agreement will be with KrazyBee.
                </p>
              </div>

              <h2 id="kreditbee-vs-krazybee" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding the Lender: KreditBee vs KrazyBee</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many borrowers are confused when they receive legal notices from "KrazyBee" when they applied on "KreditBee". Here is the breakdown:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li><strong>KreditBee:</strong> A digital Lending Service Provider (LSP). They provide the app interface, customer support, and marketing.</li>
                <li><strong>KrazyBee:</strong> An RBI-registered Systemically Important Non-Deposit taking Non-Banking Financial Company (NBFC-ND-SI). They provide the capital, hold the loan book, and have the legal right to recover the money.</li>
              </ul>
    
              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Settlement Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling a digital loan requires a slightly different approach than traditional bank loans due to the speed at which these apps operate. Here is the CredSettle roadmap:
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Stop the Harassment</h4>
                    <p className="text-gray-600 mt-1">Digital lenders are notorious for calling contacts. We immediately revoke their authorization to contact third parties (referencing RBI's digital lending guidelines) and demand all communication come to us.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Evaluate Hardship</h4>
                    <p className="text-gray-600 mt-1">We compile proofs of your financial inability to pay (job loss, medical emergency). This is crucial to justify the waiver request.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Negotiation</h4>
                    <p className="text-gray-600 mt-1">We propose a One Time Settlement (OTS) to KrazyBee's recovery department. We aim to remove all penal charges and reduce the principal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Formal Agreement</h4>
                    <p className="text-gray-600 mt-1">We secure a formal settlement letter. This step is non-negotiable. <strong>Never pay on a verbal promise.</strong></p>
                  </div>
                </div>
              </div>

              {/* NEW SEO SECTION: Fake vs Real Notice */}
              <h2 id="fake-notice-checker" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Is Your Legal Notice Fake or Real?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Borrowers often receive threatening messages via WhatsApp claiming to be "Court Summons" or "Police Notices". 95% of these are fake tactics used by recovery agents. Here is how to spot the difference:
              </p>
              
              <div className="overflow-x-auto mb-10">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Feature</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-red-600 uppercase tracking-wider">FAKE NOTICE (Scam)</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-green-600 uppercase tracking-wider">REAL NOTICE (Legal)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Delivery Method</td>
                      <td className="py-4 px-6 text-sm text-gray-700">WhatsApp, Personal Gmail</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Registered Post, Speed Post, or Official Email</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Language</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Threatening ("Arrest in 1 hour", "Police on way")</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Formal legal language, citing Acts (Arbitration Act, NI Act)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Sender</td>
                      <td className="py-4 px-6 text-sm text-gray-700">"Inspector Sharma", "Advocate Raj" (No ID)</td>
                      <td className="py-4 px-6 text-sm text-gray-700">KrazyBee Services Ltd or Registered Law Firm</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Contact</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Personal Mobile Number</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Landline or Official Customer Care Number</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="legal-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Handling Real Legal Actions: Arbitration & Section 138</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                KrazyBee is legally active. If you default, you may face two specific types of legal actions:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white border-l-4 border-red-500 shadow-sm p-6 ml-0">
                  <h4 className="font-bold text-gray-900">1. Arbitration Notice</h4>
                  <p className="text-gray-600 mt-2 text-sm">
                    Most loan agreements include an arbitration clause. You might receive a notice of an arbitration hearing (often online via Presolv360 or similar platforms). 
                    <br/><br/>
                    <strong>Action:</strong> Do not ignore this. CredSettle lawyers can represent you in these proceedings to record your financial hardship and willingness to settle.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-red-500 shadow-sm p-6 ml-0">
                  <h4 className="font-bold text-gray-900">2. Section 138 / Section 25</h4>
                  <p className="text-gray-600 mt-2 text-sm">
                    If your EMI auto-debit (NACH) bounces, it can be treated as a criminal offense (similar to a cheque bounce). They may file a case under Section 25 of the Payment and Settlement Systems Act.
                    <br/><br/>
                    <strong>Action:</strong> Instant settlement is usually the best way to quash these complaints.
                  </p>
                </div>
              </div>

              <h2 id="settlement-letter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">KrazyBee Settlement Letter Format</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you propose a settlement, you need to send a formal email to their settlement team. You can use the following template:
              </p>
              
              <div className="bg-gray-800 text-gray-200 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
                <p className="mb-2"><span className="text-blue-400">To:</span> reachus@kbnbfc.in, grievance@kbnbfc.in</p>
                <p className="mb-4"><span className="text-blue-400">Subject:</span> Settlement Proposal for Loan Account [YOUR_LOAN_ID] - [YOUR_NAME]</p>
                <p className="mb-2">Dear Sir/Madam,</p>
                <p className="mb-2">I am writing regarding my personal loan (Account No: [YOUR_LOAN_ID]) with KrazyBee Services.</p>
                <p className="mb-2">Due to [MENTION_REASON: job loss/medical emergency], I have been unable to pay the EMIs for the last [X] months. I am willing to close this loan permanently but I cannot pay the total outstanding of Rs. [TOTAL_AMOUNT] which includes heavy penalties.</p>
                <p className="mb-2">I am requesting a One Time Settlement (OTS) of Rs. [PROPOSED_AMOUNT] to be paid in [1 or 2] installments.</p>
                <p className="mb-2">Please confirm if this is acceptable so I can arrange the funds.</p>
                <p>Regards,<br/>[YOUR_NAME]<br/>[PHONE_NUMBER]</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                 Once they accept, they will issue an official **Settlement Letter**. Ensure it checks the following:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
                <h4 className="font-bold text-gray-900 mb-4 text-center border-b pb-4">Checklist for a Valid Settlement Letter</h4>
                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Source:</strong> Must be issued by KrazyBee Services Pvt Ltd or their authorized ARC.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Exact Amount:</strong> The final OTS figure must be clearly stated.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Withdrawal Clause:</strong> Explicit mention that "All pending legal proceedings, including Arbitration Case No. X and Section 138 Case No. Y, will be withdrawn upon payment".</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>NOC Timeline:</strong> A promise to issue the No Objection Certificate within a specific timeframe (e.g., 15-30 days).</span>
                  </li>
                </ul>
              </div>

              {/* NEW SEO SECTION: Written Off vs Settled */}
              <h2 id="written-off-vs-settled" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Written Off vs Settled: What is worse?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many borrowers ask if they should just stop paying (run away) or settle. Here is the reality of the CIBIL impact:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-xl overflow-hidden mb-10">
                <div className="bg-gray-50 p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <h4 className="font-bold text-red-600 mb-2 text-xl">Written Off</h4>
                  <p className="text-gray-900 font-medium mb-4">(Worst Case Scenario)</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Means the lender has given up on recovery but <strong>still owns the debt</strong>.</li>
                    <li>CIBIL Score drops by 150-200 points.</li>
                    <li>Legal cases (Arbitration/Section 138) may continue for years.</li>
                    <li>Zero chance of getting a loan for 7+ years.</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6">
                  <h4 className="font-bold text-blue-600 mb-2 text-xl">Settled</h4>
                  <p className="text-gray-900 font-medium mb-4">(Practical Solution)</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Means the debt is <strong>closed</strong> by mutual agreement.</li>
                    <li>CIBIL Score drops by 50-100 points but stabilizes.</li>
                    <li><strong>Immediate stop</strong> to all legal actions and harassment.</li>
                    <li>You can rebuild score in 12-18 months using secured cards.</li>
                  </ul>
                </div>
              </div>

              <h2 id="grievance-redressal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Grievance Redressal Mechanism</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are facing abusive behavior from recovery agents or if your layout settlement request is being ignored, you can escalate via the following matrix:
              </p>
              
              <div className="overflow-x-auto mb-10">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Level</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Officer Role</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Level 1</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Grievance Redressal Officer</td>
                      <td className="py-4 px-6 text-sm text-gray-700">080-44292555<br/>reachus@kbnbfc.in</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Level 2</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Nodal Officer</td>
                      <td className="py-4 px-6 text-sm text-gray-700">080-44292244<br/>grievance@kbnbfc.in</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Level 3</td>
                      <td className="py-4 px-6 text-sm text-gray-700">RBI Ombudsman</td>
                      <td className="py-4 px-6 text-sm text-gray-700">cms.rbi.org.in<br/>Call 14448</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="why-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Trust CredSettle?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand the specific anxiety caused by digital lending apps. Our team has successfully settled hundreds of KrazyBee cases.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Anti-Harassment</h5>
                  <p className="text-sm text-gray-600">We leverage digital lending laws to stop agent calls to your contacts.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Arbitration Experts</h5>
                  <p className="text-sm text-gray-600">Our lawyers are experienced in handling digital arbitration notices.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Proven Results</h5>
                  <p className="text-sm text-gray-600">Average savings of 40-50% on principal+interest.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Success-Based</h5>
                  <p className="text-sm text-gray-600">We don't charge negotiation fees upfront. We win, you pay.</p>
                </div>
              </div>

              {/* Client Reviews */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Recent KrazyBee Settlements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                      <div className="text-sm opacity-80">Rohan Das, Hyderabad</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"Agents were calling my HR. I was terrified. CredSettle sent a legal notice to stop the harassment instantly. They settled my 50k loan for 22k."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                      <div className="text-sm opacity-80">Karthik S., Chennai</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"Received an arbitration notice from KrazyBee. I didn't know what to do. The CredSettle legal team handled the hearing and closed the case swiftly."</p>
                  </div>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Urgent Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Stop the calls. Get legal protection now.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ Stop Harassment</p>
                  <p className="mt-1">✓ Legal Representation</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Personal Loan Settle
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/anti-harassment" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Stop Harassment
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/fibe" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Fibe (EarlySalary)
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
