'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PayUFinanceLoanSettlementClient() {
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
        rootMargin: '-100px 0px -60% 0px', // Adjust trigger point
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
    { id: 'payu-lazypay', label: 'PayU vs LazyPay' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'settlement-process', label: 'Settlement Process' },
    { id: 'documents', label: 'Documents' },
    { id: 'nodal-officer', label: 'Grievance Redressal' },
    { id: 'credit-score', label: 'CIBIL Impact' },
    { id: 'why-credsettle', label: 'Why Us' },
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
      question: "What is PayU Finance Loan Settlement and how does it differ from closing a loan?",
      answer: "A standard loan closure involves paying the full outstanding amount (principal + interest) as per the loan agreement. PayU Finance Loan Settlement is a negotiation process used when a borrower cannot pay the full amount due to financial hardship. In a settlement, PayU agrees to accept a reduced lump sum payment (often waiving interest and penalties) to close the account. However, this is marked as 'Settled' in your credit report, whereas a full repayment is marked as 'Closed'."
    },
    {
      question: "Can I settle my LazyPay BNPL (Buy Now Pay Later) dues?",
      answer: "Yes. LazyPay is a product of PayU Finance. If you have defaulted on your 'LazyPay Pay Later' bills or 'LazyPlus' UPI loans, the settlement process is handled by PayU Finance India Pvt Ltd. The process involves negotiating with their central collections team to waive off the high late fees and penal interest that typically accumulate on BNPL accounts."
    },
    {
      question: "Will I get a No Objection Certificate (NOC) after settling with PayU Finance?",
      answer: "Yes, absolutely. Once you pay the agreed settlement amount, PayU Finance is legally obligated to issue a 'No Dues Certificate' (NDC) or NOC. This document serves as proof that your loan account is closed and you have no further liability towards the lender. It usually takes 15-20 working days to receive this via email after the payment is processed."
    },
    {
      question: "How does the settlement affect my CIBIL score?",
      answer: "Settling a loan has a negative impact on your CIBIL score. The account status will be reported as 'Settled' or 'Post Write-off Settled'. This can lower your score by 50-100 points and remains on your report for years. However, it is better than a 'Wilful Default' status, which permanently locks you out of the credit market. You can rebuild your score over time after settlement."
    },
    {
      question: "Recovery agents are harassing my family. What can I do?",
      answer: "Harassment by recovery agents (calling at odd hours, using abusive language, threatening relatives) is a violation of RBI’s Fair Practices Code. You should immediately file a complaint with PayU’s Principal Nodal Officer (Mrs. Bhavana Bharat). If you hire CredSettle, we send a legal notice of representation to PayU, which legally compels them to stop contacting you directly and route communications through us."
    },
    {
      question: "Who is the Nodal Officer for PayU Finance / LazyPay?",
      answer: "The Principal Nodal Officer for PayU Finance is Mrs. Bhavana Bharat. Her contact email is nodalofficer@payufin.com. For LazyPay specific grievances, the officer is Ms. Bharathi Sarilla (email: grievanceredressalofficer@lazypay.in). They are the final authority for resolving unresolved complaints."
    },
    {
      question: "Can PayU Finance take legal action against me for non-payment?",
      answer: "Yes. As an RBI-registered NBFC, PayU Finance can initiate legal proceedings. Common actions include arbitration notices or filing a case under Section 25 of the Payment and Settlement Systems Act (for failed auto-debits) or Section 138 (Cheque Bounce) if you provided cheques. Settlement effectively stops these legal actions."
    },
    {
      question: "How much discount/waiver can I expect on my PayU loan?",
      answer: "The waiver amount depends on the 'delinquency bucket' (how long you have been in default) and your hardship proof. For unsecured personal loans and BNPL, waivers can range from 30% to 60% of the total outstanding amount. Waivers are typically given on the interest, late fees, and penalty components, and sometimes on a portion of the principal."
    },
    {
      question: "Is the settlement process online or do I need to visit an office?",
      answer: "The settlement process for PayU Finance and LazyPay is 100% online. Negotiations are conducted via registered email channels. You do not need to visit any physical branch. However, it is crucial to ensure that all settlement offers are received from official '@payufin.com' email addresses to avoid fraud."
    },
    {
      question: "What is a 'Settlement Letter' and why is it important?",
      answer: "A Settlement Letter is a formal contract from PayU Finance stating that they agree to accept a reduced amount to close the loan. It must contain the specific amount to be paid, the due date, and a clause confirming that no further dues will be pending after this payment. Never make a payment based on a verbal promise from an agent; always insist on an official letter."
    },
    {
      question: "Can I settle a PayU XpressLoan (Personal Loan)?",
      answer: "Yes, XpressLoans are unsecured personal loans and eligible for settlement. Since these loans often have higher principal amounts than BNPL dues, the negotiation is more detailed and may require stronger proof of financial hardship (like bank statements or medical records)."
    },
    {
      question: "Do I need a lawyer to settle my PayU loan?",
      answer: "It is not mandatory, but highly recommended. Recovery agents often use intimidation tactics or misinformation. A legal service like CredSettle ensures you are not bullied, that the settlement terms are fair, and that the legal documentation is flawless to prevent future claims."
    },
    {
      question: "What happens if I miss the settlement payment date?",
      answer: "A settlement offer is valid typically for a specific date range. If you miss the payment deadline, the settlement agreement becomes null and void. The lender can then demand the full original amount including any interest that accrued during the negotiation. You would then have to restart negotiations."
    },
    {
      question: "Can payU deduct money from my bank account after settlement?",
      answer: "Once the settlement is paid and the account is closed, they should not deduct money. However, you must ensure you cancel any NACH/e-mandate active on your bank account immediately after the settlement to prevent accidental auto-debits."
    },
    {
      question: "How long does the entire process take?",
      answer: "With CredSettle, the process typically takes 2 to 4 weeks. The timeline depends on how quickly we can get the lender to agree to your offered amount. Once the letter is issued, you usually have 3-5 days to make the payment."
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
                    PayU Finance
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
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-justify">
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Comprehensive Guide to PayU Finance & LazyPay Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In the rapidly evolving landscape of Indian fintech, <strong>PayU Finance India Private Limited</strong> has emerged as a dominant player, particularly through its popular products like <strong>LazyPay</strong> (Buy Now Pay Later) and <strong>XpressLoans</strong> (Personal Loans). While these instant credit facilities offer unparalleled convenience-allowing users to shop on platforms like Swiggy, Zomato, and various e-commerce sites with a single tap-they have also led to a significant rise in consumer debt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For many borrowers, what starts as a small "Buy Now Pay Later" limit of ₹1,500 can quickly spiral into a personal loan liability of lakhs. The ease of access, coupled with high interest rates (often ranging from 24% to 36% or more annually) and confusing "late fee" structures, often traps individuals in a debt cycle. When a financial crisis hits-be it a job loss, a medical emergency, or simply over-leverage-repayment becomes impossible.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are currently defaulting on your PayU Finance or LazyPay dues, you are likely facing aggressive recovery actions, including incessant calls from agents and threats of legal action. However, there is a legal and dignified way out. <strong>PayU Finance Loan Settlement</strong> is a structured process where you can negotiate with the lender to close your account for a reduced lump sum amount. This guide serves as your definitive resource on how to navigate this process, stop harassment, and achieve financial freedom.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">The CredSettle Assurance</h4>
                <p className="text-blue-800 m-0">
                  Navigating the "100% online" collections ecosystem of digital lenders like PayU can be confusing. CredSettle bridges the gap. We don’t just negotiate; we protect your rights against digital harassment and ensure that every document you receive-from the Settlement Letter to the No Dues Certificate-is legally watertight.
                </p>
              </div>

              <h2 id="payu-lazypay" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">De-coding the Ecosystem: PayU Finance vs. LazyPay</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many borrowers are confused by the branding. You might say, "I owe money to LazyPay, not PayU." It is crucial to understand the corporate structure for effective negotiation.
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-700">
                <li><strong>LazyPay is the Brand:</strong> LazyPay is a consumer-facing platform/app. It is the interface you use to take credit.</li>
                <li><strong>PayU Finance is the Lender:</strong> <strong>PayU Finance India Private Limited</strong> is the RBI-registered Non-Banking Financial Company (NBFC) that actually lends the money. They are the ones reporting to CIBIL, and they are the ones you must legally settle with.</li>
                <li><strong>The Consequence:</strong> When you default on LazyPay, the legal notices and arbitration proceedings will come from PayU Finance. Therefore, your settlement agreement MUST be effectively with PayU Finance India Pvt Ltd to be valid.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Digital Loans Become Debt Traps</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike traditional bank loans, digital loans from PayU/LazyPay often have specific characteristics that exacerbate debt:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h5 className="font-bold text-red-600 mb-2">High Penal Interest</h5>
                  <p className="text-sm text-gray-600">Late fees are often charged daily (e.g., ₹10-₹50 per day) alongside penal interest, causing small dues to double in months.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h5 className="font-bold text-red-600 mb-2">Algorithmic Harassment</h5>
                  <p className="text-sm text-gray-600">Recovery is often managed by automated systems and third-party tele-calling agencies that use aggressive scripts and repeated calling.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h5 className="font-bold text-red-600 mb-2">Credit Stacking</h5>
                  <p className="text-sm text-gray-600">Users often have multiple "BNPL" lines (LazyPay, Simpl, etc.) active simultaneously, leading to an aggregate debt that exceeds repayment capacity.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h5 className="font-bold text-red-600 mb-2">Illegal Bill Generation</h5>
                  <p className="text-sm text-gray-600">Some users have reported instances where bills were generated for failed transactions or unauthorized usage, leading to disputes that turn into defaults.</p>
                </div>
              </div>

              <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility Criteria for Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                PayU Finance, like all NBFCs, follows strict underwriting and collection policies. Settlement is not a right; it is a negotiated exception. To qualify for a One Time Settlement (OTS), your case typically needs to fit the following profile:
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">1. Non-Performing Asset (NPA) Status</h4>
                    <p className="mt-2 text-gray-600">
                      Ideally, your account should be in the NPA category, which generally happens after <strong>90 days of non-payment</strong>. Before this period, the lender’s primary focus is full recovery and regularization of the account. Once it crosses 90 days (or sometimes 60 days for digital lenders), they are more open to "salvaging" the principal through settlement.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">2. Demonstrable Financial Hardship</h4>
                    <p className="mt-2 text-gray-600">
                      You cannot settle just because you "don’t want" to pay. You must prove inability to pay. Valid hardships include:
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-sm text-gray-500 space-y-1">
                      <li><strong>Loss of Employment:</strong> Termination letter or resignation proof.</li>
                      <li><strong>Medical Emergency:</strong> Hospitalization records for self or immediate family.</li>
                      <li><strong>Business Loss:</strong> GST returns showing revenue drop or closure proof.</li>
                      <li><strong>Pay Cut:</strong> Salary slips showing reduced income.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">3. Unsecured Nature of Loan</h4>
                    <p className="mt-2 text-gray-600">
                      Settlement is primarily for <strong>unsecured loans</strong> (Personal Loans, BNPL, Credit Lines). If you have a secured loan (like a car loan against collateral), PayU is less likely to settle as they have the option to repossess the asset. However, even for car loans, settlements are possible if the vehicle value has depreciated significantly.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Detailed Settlement Process: Step-by-Step</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                PayU Finance has a centralized, digital-first collections process. Negotiations often happen via email rather than face-to-face. Here is how CredSettle handles this on your behalf:
              </p>

              <div className="relative border-l-2 border-blue-200 ml-4 space-y-10 my-10">
                <div className="relative pl-8">
                  <span className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></span>
                  <h4 className="font-bold text-gray-900">Step 1: Authorization & Analysis</h4>
                  <p className="text-sm text-gray-600 mt-1">We begin by analyzing your total outstanding across LazyPay and PayU loans. You sign a Letter of Authority (LoA) allowing CredSettle to represent you legally. This is the first shield against harassment.</p>
                </div>
                <div className="relative pl-8">
                  <span className="absolute -left-2.5 top-0 w-5 h-5 bg-gray-300 rounded-full border-4 border-white"></span>
                  <h4 className="font-bold text-gray-900">Step 2: Legal Representation Notice</h4>
                  <p className="text-sm text-gray-600 mt-1">We send a formal notice to PayU Finance’s collections department and Nodal Officer, informing them of your hardship and our representation. This formally requests them to direct all communication to us.</p>
                </div>
                <div className="relative pl-8">
                  <span className="absolute -left-2.5 top-0 w-5 h-5 bg-gray-300 rounded-full border-4 border-white"></span>
                  <h4 className="font-bold text-gray-900">Step 3: The Negotiation Phase</h4>
                  <p className="text-sm text-gray-600 mt-1">This is the core. For digital loans, we negotiate with the central team. We aim for a waiver of all penal interest, late fees, and a percentage of the principal. <strong>Target Settlement: 40% - 60% of the principal + interest.</strong></p>
                </div>
                <div className="relative pl-8">
                  <span className="absolute -left-2.5 top-0 w-5 h-5 bg-gray-300 rounded-full border-4 border-white"></span>
                  <h4 className="font-bold text-gray-900">Step 4: Settlement Letter Issuance</h4>
                  <p className="text-sm text-gray-600 mt-1">Once a figure is agreed, PayU will issue a formal <strong>Settlement Letter</strong> via email. We scrutinize this letter to ensure it mentions "Full and Final Settlement" and has no hidden clauses.</p>
                </div>
                <div className="relative pl-8">
                  <span className="absolute -left-2.5 top-0 w-5 h-5 bg-gray-300 rounded-full border-4 border-white"></span>
                  <h4 className="font-bold text-gray-900">Step 5: Payment & Closure</h4>
                  <p className="text-sm text-gray-600 mt-1">You make the payment directly to PayU’s official bank account (NEVER to a UPI ID sent by an agent). Within 15-20 days, a <strong>No Dues Certificate (NDC)</strong> is issued, confirming the loan is closed.</p>
                </div>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To process a settlement request effectively, especially for digital loans where documentation is key, you need:
              </p>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-10">
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700"><strong>KYC:</strong> PAN Card & Aadhaar Card</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700"><strong>Loan Details:</strong> Loan Account Number / LazyPay Registered Mobile Number</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700"><strong>Dashboard Screenshot:</strong> Current view of LazyPay/PayU app showing outstanding</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700"><strong>Hardship Proof:</strong> Termination Letter, Medical Records, etc.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700"><strong>Bank Statement:</strong> Last 3 months showing inability to pay</span>
                  </li>
                   <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700"><strong>Legal Notices:</strong> Copies of any Section 138 or arbitration notices received</span>
                  </li>
                 </ul>
              </div>

              <h2 id="nodal-officer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Grievance Redressal: Stopping the Harassment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the biggest complaints against fintech lenders is harassment-abusive calls, calling relatives/friends, or threatening messages on WhatsApp. <strong>This is illegal.</strong> The RBI has laid out clear strictures against such practices. If you are a victim, you must escalate the issue immediately.
              </p>
              
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-10">
                <div className="bg-gray-900 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-white">Authorized Escalation Matrix (2024-25)</h4>
                </div>
                <div className="p-6 space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-blue-800 mb-2 border-b pb-1">For General Complaints (Level 1)</h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><strong>LazyPay Support:</strong> <a href="mailto:wecare@lazypay.in" className="text-blue-600 hover:underline">wecare@lazypay.in</a></li>
                        <li><strong>PayU Finance Support:</strong> <a href="mailto:wecare@payufin.com" className="text-blue-600 hover:underline">wecare@payufin.com</a></li>
                        <li><strong>Phone:</strong> 080-69081112 / 022-69821111 (10 AM - 7 PM)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-800 mb-2 border-b pb-1">Grievance Redressal Officer (Level 2)</h5>
                       <ul className="space-y-2 text-sm text-gray-600">
                        <li><strong>Officer Name:</strong> Mr. Suraj Sapte / Ms. Bharathi Sarilla</li>
                        <li><strong>LazyPay Email:</strong> <a href="mailto:grievanceredressalofficer@lazypay.in" className="text-blue-600 hover:underline">grievanceredressalofficer@lazypay.in</a></li>
                         <li><strong>Phone:</strong> +91 22 6982 1155</li>
                       </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-100 mt-4">
                    <h5 className="font-bold text-red-900 mb-2">Principal Nodal Officer (Level 3 - Final Escalation)</h5>
                    <p className="text-sm text-gray-700 mb-3">If your complaint is not resolved within 30 days, or if harassment persists, contact the Principal Nodal Officer directly. This is the highest level of internal escalation.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-gray-900">Name: Mrs. Bhavana Bharat</p>
                        <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:nodalofficer@payufin.com" className="text-blue-600 hover:underline">nodalofficer@payufin.com</a></p>
                         <p className="text-gray-600"><strong>Phone:</strong> +91 22 6982 1177 / 080 6908 1110</p>
                      </div>
                      <div>
                        <p className="text-gray-600"><strong>Address:</strong><br/>Empresa Building, Office No. 102,<br/>Second Road, Khar West,<br/>Mumbai - 400052</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              <h2 id="credit-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Truth About CIBIL & Future Credit</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe in total transparency. Settling a loan <strong>will</strong> impact your credit score. Here is the reality check:
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-700">
                 <li><strong>'Settled' Status:</strong> When you pay a reduced amount, PayU Finance will report the account status as "Settled" (and not "Closed"). This indicates to future lenders that you did not repay the full obligation.</li>
                 <li><strong>Score Drop:</strong> You can expect a drop of 50-100 points, depending on your previous history.</li>
                 <li><strong>The Alternative is Worse:</strong> If you do not settle and stay in default, the status will show as "Written Off" or "Wilful Default" with a "Suit Filed" status if legal action is taken. This is a permanent black mark. A "Settled" status is a "yellow flag"-it’s bad, but it stops the damage.</li>
                 <li><strong>Recovery Path:</strong> After settlement, you are debt-free. You can immediately start rebuilding your score using secured credit cards (like FD-backed cards) or gold loans. Most clients see their score recover to 750+ within 24-36 months of disciplined behavior post-settlement.</li>
              </ul>

              <h2 id="why-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Choose CredSettle?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                You might ask, "Why can’t I just email them myself?" You can. But dealing with institutional lenders and trained recovery agents requires expertise. Here is the CredSettle difference:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
                  <h5 className="font-bold text-gray-900 mb-2">[Protection] Shield Against Harassment</h5>
                  <p className="text-sm text-gray-600">We redirect agent calls to our legal team. We file official grievances for every instance of abuse, forcing the lender to back down.</p>
                </div>
                <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
                  <h5 className="font-bold text-gray-900 mb-2">[Money] Institutional Negotiation</h5>
                  <p className="text-sm text-gray-600">We settle hundreds of cases monthly. Lenders know us. We often secure waivers (40-60%) that individual borrowers rarely get.</p>
                </div>
                <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
                  <h5 className="font-bold text-gray-900 mb-2">[Scale] Legal Verification</h5>
                  <p className="text-sm text-gray-600">PayU’s settlement letters can be technical. We verify every clause to ensure you are legally protected from future claims.</p>
                </div>
                <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
                  <h5 className="font-bold text-gray-900 mb-2">[Deal] Success-Fee Model</h5>
                  <p className="text-sm text-gray-600">We are partners in your freedom. A significant portion of our fee is payable <strong>only</strong> when you receive the settlement letter.</p>
                </div>
              </div>

              {/* Review Snippets */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Real Stories, Real Relief</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Rohan K., Bangalore</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I was terrified. LazyPay agents were calling my office HR. CredSettle stepped in, sent a legal notice, and the calls stopped in 48 hours. Settled for 45% of the amount."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Priya S., Mumbai</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"My PayU personal loan of 2 Lakhs ballooned to 3.5 Lakhs with interest. CredSettle negotiated a closure at 1.2 Lakhs. I have my NDC now."</p>
                  </div>
                   <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Amitabh D., Delhi</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"The transparency is what I liked. No fake promises about CIBIL. They told me the truth, handled the legal mess, and got me out of debt."</p>
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
                <p className="text-sm text-gray-600 mb-6">Don’t face the bank alone. Get expert legal support today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v 100% Confidential</p>
                  <p className="mt-1">v RBI Compliant Process</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Credit Card Settlement
                    </Link>
                  </li>
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
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      HDFC Settlement
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
