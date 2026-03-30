'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function PoonawallaLoanSettlementClient() {
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
    { id: 'understanding-poonawalla', label: 'Magma to Poonawalla' },
    { id: 'why-settle', label: 'Why Settle?' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'process', label: 'Settlement Process' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'consequences', label: 'Consequences' },
    { id: 'harassment', label: 'Stop Harassment' },
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
      question: "Is Poonawalla Fincorp the same as Magma Fincorp?",
      answer: "Yes, **Magma Fincorp Limited** was acquired by the Adar Poonawalla-led **Rising Sun Holdings Private Limited** in 2021 and subsequently rebranded as **Poonawalla Fincorp Limited**. If you had an old loan with Magma, it is now managed by Poonawalla Fincorp."
    },
    {
      question: "Can I settle my Poonawalla Fincorp personal loan online?",
      answer: "While you can initiate the request online via email specifically to **customercare@poonawallafincorp.com**, the actual negotiation and finalization of a settlement (OTS) usually require formal documentation and often face-to-face or telephonic negotiation with their recovery officers. CredSettle manages this entire process for you digitally."
    },
    {
      question: "What is the customer care email for Poonawalla Fincorp complaints?",
      answer: "For general queries, you can email **customercare@poonawallafincorp.com**. If you have a specific grievance regarding harassment or settlement refusal, you should escalate it to **grievance@poonawallafincorp.com**."
    },
    {
      question: "Does Poonawalla Fincorp send legal notices for non-payment?",
      answer: "Yes, like all registered NBFCs, Poonawalla Fincorp takes defaults seriously. They may issue notices under **Section 138 of the Negotiable Instruments Act** (for cheque/NACH bounce) or initiate **Arbitration proceedings** in case of prolonged non-payment."
    },
    {
      question: "How much can I save in a Poonawalla loan settlement?",
      answer: "The waiver amount depends on your specific case, including the DPD (Days Past Due), your income proof, and the outstanding amount. Generally, we are able to negotiate a waiver of **100% of the late fees and penal interest**, and up to **40-50% of the principal amount** in genuine hardship cases."
    },
    {
      question: "Will a settlement remove the loan from my CIBIL report?",
      answer: "No, the loan will not be removed. It will be updated with a status of **'Settled'**. This settles the debt so no further recovery happens, but the 'Settled' tag will remain on your credit report for a few years, indicating that the loan was closed for less than the full due amount."
    },
    {
      question: "What is the contact number for Poonawalla Fincorp loan settlement?",
      answer: "You can reach their general helpline at **1800-266-3201**. However, for settlement purposes, it is highly recommended to communicate via email or through a legal representative to ensure everything is documented."
    },
    {
      question: "Can agents come to my home for recovery?",
      answer: "Yes, agents can visit your registered address, but they must follow **RBI guidelines**. They cannot visit before 8 AM or after 7 PM, cannot enter without permission, and cannot behave routinely. If they violate this, you can file a police complaint."
    },
    {
      question: "What constitutes 'harassment' by recovery agents?",
      answer: "Harassment includes calling your relatives/neighbors, using abusive language, threatening physical harm, sending fake legal court orders on WhatsApp, or calling you incessantly (more than a reasonable number of times per day)."
    },
    {
      question: "Do I need a lawyer for loan settlement?",
      answer: "While not mandatory by law, having a legal expert or a firm like **CredSettle** represents you significantly improves your chances. We understand the legal jargon, can distinguish between fake and real notices, and have the experience to negotiate better terms without emotional stress."
    },
    {
      question: "How long does it take to get the NOC after payment?",
      answer: "Once the settlement amount is paid in full as per the agreement, Poonawalla Fincorp typically issues the **No Dues Certificate (NDC)** within **21 to 45 working days**. CredSettle follows up rigorously to ensure you receive this document."
    },
    {
      question: "Can I get a top-up loan after settlement?",
      answer: "No, once an account is settled, the existing relationship is closed negatively. You will not be eligible for top-up loans or new unsecured loans from Poonawalla Fincorp or most other major banks immediately."
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
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
                    loan settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Poonawalla Fincorp (Magma)
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Poonawalla Fincorp (Magma) Loan Settlement: The Complete Guide 2026</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In the diverse world of Non-Banking Financial Companies (NBFCs) in India, **Poonawalla Fincorp** has emerged as a dominant player. Known for its quick processing of personal loans, business loans, and professional loans, it caters to a vast demographic of borrowers. However, the ease of obtaining a loan can often be overshadowed by the difficulty of repayment when life takes an unexpected turn. A sudden medical emergency, a business downturn, or a loss of employment can instantly transform a manageable EMI into a source of immense stress.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For tens of thousands of borrowers, the pressure of mounting dues is compounded by the confusion surrounding the company’s identity-many still know it as **Magma Fincorp**. If you are facing default, receiving legal notices, or dealing with aggressive recovery agents from Poonawalla Fincorp, it is crucial to cut through the noise and understand your legal options.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                **CredSettle** is India’s leading debt relief platform, dedicated to helping honest borrowers find a dignified exit from the debt trap. We specialize in **Poonawalla Fincorp Loan Settlement**, providing a structured, legal pathway to waive off penal charges and close your loan account for a reduced, affordable amount. This extensive guide will walk you through the history of the lender, the settlement process, your rights against harassment, and how to protect your financial future.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Important Clarity</h4>
                <p className="text-blue-800 m-0">
                  Loan settlement is a legitimate financial tool recognized by the RBI for resolving Non-Performing Assets (NPAs). It is not "running away" from your debt; it is a negotiated closure based on your current inability to pay the full amount.
                </p>
              </div>

              <h2 id="understanding-poonawalla" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">From Magma to Poonawalla: Know Your Lender</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To negotiate effectively, you must understand the entity you are dealing with. In July 2021, a significant shift occurred in the Indian NBFC sector. **Magma Fincorp Limited**, a long-standing player in asset financing, was acquired by **Rising Sun Holdings Private Limited**, a company controlled by **Mr. Adar Poonawalla** (of Serum Institute fame). Following this acquisition, the company was rebranded as **Poonawalla Fincorp Limited**.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why is this relevant to your settlement?</h3>
              <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-700">
                <li><strong>Legacy Loans:</strong> If you took a loan from Magma Fincorp prior to 2021, your debt is now owned and managed by Poonawalla Fincorp. The policies, recovery teams, and legal departments have been integrated.</li>
                <li><strong>Corporate Governance:</strong> Under the Poonawalla brand, there is a renewed focus on corporate governance and reputation. This means they are often more responsive to formal grievances filed regarding agent misconduct or harassment than the previous management might have been.</li>
                <li><strong>Digitization:</strong> The new entity is highly digital-first. This means Notices, Statements of Account (SOA), and Settlement Letters are often processed faster, but it also means their automated collection systems (dialers, emails) are more persistent.</li>
              </ul>

              <h2 id="why-settle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Debt Trap: When is Settlement the Right Choice?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling a loan has long-term consequences on your credit score, so it should never be the first option. If you can restructure your loan (increase tenure to reduce EMI) or borrow from family to close it, do that first. However, settlement becomes the **necessary** and **right** choice in specific "insolvency scenarios":
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">1. Total Loss of Income</h4>
                  <p className="text-gray-600">You have lost your job or your business has shut down, and you have zero visibility on when you will have a steady income again to service the full EMI.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">2. The Interest Spiral</h4>
                  <p className="text-gray-600">You have missed 3-4 EMIs. The late payment charges, bounce charges, and penal interest have piled up to such an extent that your outstanding balance is now *higher* than what it was six months ago, despite you making small payments.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">3. Borrowing to Pay</h4>
                  <p className="text-gray-600">You are taking high-interest loans from instant loan apps just to pay the EMI of your Poonawalla loan. This is the classic "debt trap"-digging a new hole to fill an old one.</p>
                </div>
              </div>

              <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Detailed Eligibility Criteria for Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Poonawalla Fincorp works on strict banking principles. They will not offer a One Time Settlement (OTS) to just anyone. You must qualify for it.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">1. The NPA Classification</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your loan account typically needs to be classified as a **Non-Performing Asset (NPA)**. This happens when the EMI remains overdue for a period of more than **90 days**. Before 90 days, the account is "Standard" or "SMA" (Special Mention Account), and the focus is purely on regularization. Settlement negotiations are most effective once the account crosses the 90-day threshold.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Proof of Hardship</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hardship must be **proven**, not just stated. You will need to provide documentation to substantiate your claim.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>**Medical Crisis:** Discharge summaries, hospital bills, or doctor certificates indicating a condition that affects your earning capacity.</li>
                <li>**Unemployment:** Termination letter, resignation acceptance, or bank statements showing cessation of salary credits.</li>
                <li>**Business Loss:** GST return filings showing a drop in turnover, or proof of shop closure.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Unsecured Nature of Loan</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settlements are primarily for **unsecured loans** (Personal Loans, Professional Loans, Business Loans without collateral). If you have a Loan Against Property (LAP) or a Car Loan with Poonawalla Fincorp, settlement is much harder because they have the legal right to repossess and auction the asset to recover dues.
              </p>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The CredSettle Process: Step-by-Step</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Handling a settlement on your own can be intimidating, especially when dealing with legal notices. CredSettle’s expert team manages the entire lifecycle for you.
              </p>

              <div className="relative border-l-4 border-blue-600 pl-8 space-y-12 my-12">
                
                <div className="relative">
                  <span className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold text-sm">1</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Step 1: Legal Assessment & Notice Reply</h4>
                  <p className="text-gray-600">
                    We start by analyzing your loan documents. Have you received a **Section 138 Notice** (Cheque Bounce) or an **Arbitration Notice**? These are critical. Our legal team drafts immediate, professional responses to these notices, stating your intent to settle and disputing any inflated charges. This prevents the lender from obtaining an ex-parte order against you.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold text-sm">2</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Step 2: Buffer Against Harassment</h4>
                  <p className="text-gray-600">
                    Once you appoint us, we notify Poonawalla Fincorp’s collections department. We redirect all recovery calls to our team. If agents continue to harass you, we escalate the matter to the **Principal Nodal Officer (pno@poonawallafincorp.com)** and, if needed, the **RBI Ombudsman**. We ensure your peace of mind is restored.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold text-sm">3</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Step 3: Strategic Negotiation</h4>
                  <p className="text-gray-600">
                    Our financial experts engage with the settlement officers. We don’t just ask for a discount; we build a case. We present your hardship evidence and highlight the cost-benefit analysis to the lender (i.e., immediate settlement vs. long, expensive litigation). We typically aim to waive off all penal interest and negotiate a principal haircut ranging from **30% to 50%**.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold text-sm">4</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Step 4: The Official Settlement Letter</h4>
                  <p className="text-gray-600">
                    This is non-negotiable. We ensure you receive a formal **Settlement Letter** from an official Poonawalla Fincorp email ID. We verify every clause: the final amount, the payment schedule, and the explicit promise to close the loan upon payment. We protect you from "fake settlements" offered by rogue agents.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold text-sm">5</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Step 5: Closing & NDC</h4>
                  <p className="text-gray-600">
                    You make the payment directly to the Poonawalla Fincorp loan account. We then chase the operations team to update the records and issue the **No Dues Certificate (NDC)**. This document is your proof of freedom.
                  </p>
                </div>

              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents</h2>
              <div className="bg-white border border-gray-200 rounded-xl p-8 mb-10 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 border-b pb-2">KYC & Loan Info</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>* PAN Card & Aadhaar Card</li>
                      <li>* Loan Account Number (Poonawalla/Magma)</li>
                      <li>* Welcome Letter / Sanction Letter</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 border-b pb-2">Financial Hardship</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>* Last 6 months Bank Statement</li>
                      <li>* Termination Letter / Salary Slips</li>
                      <li>* Medical Records (if applicable)</li>
                      <li>* Closure of Business Proof</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 id="consequences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Financial Impact: The Truth</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe in total transparency. Settlement is not without cost.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">CIBIL Score Impact</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your loan status in CIBIL will change from "Active" or "Overdue" to **"Settled"**. Unlike "Closed" (which means paid in full), "Settled" indicates you paid less. This will drop your score by **70-100 points**. For the next 24 months, obtaining new unsecured credit (Credit Cards, Personal Loans) will be difficult.
              </p>
              
              <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500 mb-8 shadow-sm">
                <h4 className="font-bold text-green-900 mb-2">The Recovery Path</h4>
                <p className="text-green-800 m-0">
                  Despite the drop, settling is infinitely better than a **"Write-Off"** or **"Suit Filed"** status. A "Write-Off" is a permanent black mark. With a "Settled" status, you can rebuild. By systematically using secured credit instruments (like an FD-backed credit card) and paying bills on time, you can restore your CIBIL score to 750+ within 18-24 months. CredSettle offers a dedicated **Credit Builder Plan** to assist you post-settlement.
                </p>
              </div>

              <h2 id="harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Stop Agent Harassment: RBI Guidelines</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Even if you have defaulted, you are a citizen with rights. The RBI’s "Fair Practices Code" and the specific circular on **"Recovery Agents - Do’s and Don’ts"** protect you.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">You have the right to:</h3>
              <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-700">
                <li><strong>Privacy:</strong> Agents cannot shame you publicly or call your workplace colleagues to discuss your debt.</li>
                <li><strong>Decency:</strong> Abusive language, threats, or physical intimidation is a criminal offense.</li>
                <li><strong>Civil Hours:</strong> Calls and visits are strictly restricted to 08:00 AM to 07:00 PM.</li>
                <li><strong>Due Process:</strong> You have the right to demand the agent’s ID card and authorization letter from Poonawalla Fincorp.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How to Escalate Complaints:</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If harassment occurs, document it (call recordings, screenshots).
              </p>
              <ol className="list-decimal pl-6 space-y-4 mb-10 text-gray-700">
                <li><strong>Level 1:</strong> Email **customercare@poonawallafincorp.com** with the details.</li>
                <li><strong>Level 2:</strong> If unresolved, email the Grievance Redressal Officer at **grievance@poonawallafincorp.com**.</li>
                <li><strong>Level 3:</strong> If the company fails to act within 30 days, file a complaint on the **RBI Sachet Portal** or **CMS Portal**.</li>
              </ol>

              {/* Review Snippets */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Success Stories from Poonawalla Borrowers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Ramesh T., Mumbai</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I had a Magma loan from 2019. After COVID, I couldn’t pay. The new agents were very aggressive. CredSettle stepped in, handled the legal notices, and settled the 5 Lakh loan for just 2.1 Lakhs. I am finally free."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Priya S., Delhi</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"Expert handling. They stopped the calls within 48 hours. The settlement letter was genuine, and I verified it with the branch. Highly recommended for anyone stuck with Poonawalla loans."</p>
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
                <h4 className="font-bold text-xl text-gray-900 mb-2">Harassed by Agents?</h4>
                <p className="text-sm text-gray-600 mb-6">Stop Poonawalla Fincorp / Magma recovery harassment now.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v Legal Protection</p>
                  <p className="mt-1">v Stop Calls</p>
                  <p className="mt-1">v Save 50%+</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Info</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/fibe" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Fibe Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      HDFC Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cheque-bounce-lawyer" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Section 138 Help
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
