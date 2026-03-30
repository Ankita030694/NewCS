'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function TataCapitalLoanSettlementClient() {
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
    { id: 'what-is-ots', label: 'What is OTS?' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'settlement-process', label: 'Settlement Process' },
    { id: 'letter-format', label: 'Settlement Letter' },
    { id: 'rbi-guidelines', label: 'RBI Guidelines' },
    { id: 'grievance-redressal', label: 'Complaints & Escalsation' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'credit-impact', label: 'CIBIL Impact' },
    { id: 'why-credsettle', label: 'Why Choose Us' },
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
      question: "What is the process for Tata Capital personal loan settlement?",
      answer: "The process involves analyzing your financial hardship, submitting a formal settlement proposal to Tata Capital, negotiating for a reduced repayment amount (One Time Settlement), and obtaining a settlement letter. Once the agreed amount is paid, the bank issues a No Dues Certificate. It is crucial to have all terms in writing."
    },
    {
      question: "Does Tata Capital accept settlement for credit cards?",
      answer: "Yes, Tata Capital (and its partnered issuers) accepts settlement for credit card dues if the borrower is in genuine financial distress. The settlement is typically offered on the total outstanding dues including interest and late fees."
    },
    {
      question: "How can I get the Tata Capital loan settlement letter?",
      answer: "The settlement letter is issued by Tata Capital’s collections department after your settlement proposal is approved. It must be on the official letterhead and contain details like the settlement amount, payment due date, and a clause stating that the loan will be closed upon payment."
    },
    {
      question: "What are the RBI guidelines for NBFC loan settlement?",
      answer: "RBI guidelines mandate fair practices. NBFCs like Tata Capital must have a clear grievance redressal mechanism, cannot use abusive harassment tactics for recovery, and must provide a clear One Time Settlement (OTS) scheme for eligible borrowers. They are also required to release original documents within 30 days of closure."
    },
    {
      question: "Will settlement remove 'Written Off' status from CIBIL?",
      answer: "A settlement changes the status from 'Written Off' or 'Default' to 'Settled'. While 'Settled' is still a negative remark indicating partial payment, it stops the monthly reporting of 'Overdue' status and allows you to start rebuilding your credit score sooner."
    },
    {
      question: "Who is the Grievance Redressal Officer for Tata Capital?",
      answer: "For retail loans, the Level 2 Grievance Redressal Officer is Ms. Francyna Dias. If unresolved, you can escalate to the Principal Nodal Officer, Ms. Sona S. Gaharwar. Emails are available on the Tata Capital website or in our detailed guide above."
    },
    {
      question: "Can I do a settlement if I have a co-applicant?",
      answer: "Yes, but both the primary applicant and the co-applicant must agree to the settlement terms. The impact on CIBIL score will apply to both applicants."
    },
    {
      question: "How much can I save in a Tata Capital OTS?",
      answer: "Savings typically range from 30% to 50% of the total outstanding amount. In cases of severe hardship (like critical illness or long-term unemployment) or very old NPAs, the waiver can sometimes be higher."
    },
    {
      question: "Is it safe to use a third-party settlement company?",
      answer: "Yes, provided they are legitimate. A professional company like CredSettle ensures that you are protected from harassment, that the negotiation is handled legally, and that the final settlement letter is authentic and binding."
    },
    {
      question: "Does Tata Capital initiate legal action for non-payment?",
      answer: "Yes, as an NBFC, they can initiate arbitration proceedings or file cases under Section 25 of the Payment and Settlement Systems Act for bounced NACH mandates. Initiating a settlement dialogue is the best way to pause or resolve these legal actions."
    }
  ];

  return (
    <>
      {/* Breadcrumb Section - Moved Inside to Match HDFC Design */}
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
                    Tata Capital
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Introduction to Tata Capital Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Are you feeling the heavy weight of unmanageable debt from <strong>Tata Capital</strong>? Whether it is a personal loan that has spiraled due to high interest rates, a business loan that you can no longer service due to market downturns, or ever-mounting credit card dues, you are likely facing significant stress. The constant ping of payment reminders, the dread of answering calls from recovery agents, and the fear of legal notices can be overwhelming.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Financial hardships-be it from sudden job loss, medical emergencies, or business insolvency-can happen to anyone. It is important to remember that being in debt is a civil issue, not a criminal one. If you are genuinely unable to repay your full dues, <strong>Tata Capital Loan Settlement</strong> offers a legal, structured, and dignified way out.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>CredSettle</strong> is India’s leading debt relief platform. We specialize in negotiating with major NBFCs like Tata Capital. Our goal is to protect you from harassment, handle all legal complexities, and help you settle your loans for up to <strong>50% less</strong> than what you owe. This guide covers the complete 2026 process, ensuring you have all the information needed to make the right decision.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Did You Know?</h4>
                <p className="text-blue-800 m-0">
                  Tata Capital is regulated by the RBI. They are bound by the "Fair Practices Code" which mandates them to treat borrowers with dignity and offer settlement options (OTS) to those in genuine distress. You have rights that protect you during this process.
                </p>
              </div>

              <h2 id="what-is-ots" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">What is One Time Settlement (OTS)?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A <strong>One Time Settlement (OTS)</strong> is a formal, legal agreement between you and Tata Capital. In this arrangement, the lender agrees to accept a lump sum payment that is significantly lower than your total outstanding balance (Principal + Interest + Penalties) to close the loan account permanently.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                This is typically offered when a loan has turned into a <strong>Non-Performing Asset (NPA)</strong>, usually after 90 days of non-payment. For Tata Capital, accepting a settlement is often a better financial decision than spending years on costly legal recovery processes or writing off the entire debt as a loss.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits of Settlement:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li><strong>Debt Reduction:</strong> Waiver of accumulated penal interest, late fees, and a portion of the principal.</li>
                <li><strong>Instant Relief:</strong> Stops the monthly EMI cycle and collection calls immediately upon agreement.</li>
                <li><strong>Legal Closure:</strong> Ends any arbitration or Section 25 (payment bounce) cases filed against you.</li>
                <li><strong>Fresh Start:</strong> Allows you to become debt-free and start rebuilding your financial life.</li>
              </ul>

              <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility Criteria for Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Tata Capital does not offer settlement to every borrower. It is a relief measure designed for those who truly need it. To qualify, you typically need to withstand a strict evaluation process.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">1. Default Status</h4>
                  <p className="text-gray-600 text-sm">Your loan must be in default, ideally classified as an NPA (90+ days overdue). Accounts that are regular or only slightly delayed are usually not considered for OTS.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">2. Unsecured Loans</h4>
                  <p className="text-gray-600 text-sm">Settlement is most common for <strong>Personal Loans</strong>, <strong>Business Loans</strong>, and <strong>Credit Cards</strong>. Secured loans (Home/Car) differ as the asset can be repossessed.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">3. Proven Hardship</h4>
                  <p className="text-gray-600 text-sm">You must demonstrate "unintentional default". Reasons include job loss, pay cuts, business failure, divorce, or medical emergencies.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">4. Repayment Intent</h4>
                  <p className="text-gray-600 text-sm">You must show the intent to settle by offering a realistic lump sum amount, even if it is lower than the total due.</p>
                </div>
              </div>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Tata Capital Settlement Process: Step-by-Step</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Navigating the settlement process requires strategy and patience. A wrong move can lead to rejection or higher settlement amounts. Here is the proven CredSettle approach:
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Financial Analysis</h4>
                    <p className="text-gray-600 mt-1">We review your loan documents, total outstanding, and current financial capacity. We help you gather evidence of hardship (termination letters, medical bills).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Communication Takeover</h4>
                    <p className="text-gray-600 mt-1">We inform Tata Capital that you are legally represented by CredSettle. This routes all communication through us, significantly reducing harassment from recovery agents.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">The Hard Negotiation</h4>
                    <p className="text-gray-600 mt-1">We submit a formal settlement proposal. The bank will counter-offer. our experts negotiate aggressively, using RBI guidelines and your hardship proofs, to bring the amount down to 30-50%.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Settlement Letter & Payment</h4>
                    <p className="text-gray-600 mt-1">We ensure a valid Settlement Letter is issued. You make the payment directly to your account. <strong>Never pay cash to agents.</strong></p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900">No Dues Certificate (NOC)</h4>
                    <p className="text-gray-600 mt-1">We follow up to ensure the NOC is issued within 21 days, confirming the loan is closed and your obligation is over.</p>
                  </div>
                </div>
              </div>

              <h2 id="letter-format" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Tata Capital Settlement Letter Format</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Settlement Letter</strong> is the most critical document in this process. Without it, your payment might just be adjusted against interest, and the loan will remain open. When you receive a settlement offer from Tata Capital, ensure it checks legal validity.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
                <h4 className="font-bold text-gray-900 mb-4 text-center border-b pb-4">Essential Components of a Valid Settlement Letter</h4>
                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">v</span>
                    <span><strong>Official Letterhead:</strong> Must be on Tata Capital Financial Services Ltd letterhead.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">v</span>
                    <span><strong>Loan Details:</strong> Correct Loan Account Number (LAN) and borrower name.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">v</span>
                    <span><strong>Settlement Amount:</strong> The exact agreed lump sum figure.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">v</span>
                    <span><strong>Payment Deadline:</strong> Accurate date by which payment must be credited.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">v</span>
                    <span><strong>Closure Clause:</strong> A clear statement that upon this payment, the entire loan liability is extinguished and the account will be closed.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">v</span>
                    <span><strong>Legal Withdrawal:</strong> Mention that any pending legal cases (Arbitration/Section 138/Section 25) will be withdrawn.</span>
                  </li>
                </ul>
              </div>

              <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">RBI Guidelines for NBFC Settlements</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                You are protected by the Reserve Bank of India (RBI). As an NBFC, Tata Capital must adhere to strict guidelines regarding recovery and settlement. Knowing these rights is your shield against abuse.
              </p>
              <div className="grid gap-6 mb-10">
                <div className="bg-white border-l-4 border-indigo-500 shadow-sm p-6 ml-4">
                  <h4 className="font-bold text-gray-900">Fair Practices Code</h4>
                  <p className="text-gray-600 mt-2 text-sm">NBFCs must disclose all terms and conditions. They cannot resort to undue harassment or coercion. Recovery agents must follow a code of conduct-no calling before 8 AM or after 7 PM.</p>
                </div>
                <div className="bg-white border-l-4 border-indigo-500 shadow-sm p-6 ml-4">
                  <h4 className="font-bold text-gray-900">Right to Privacy</h4>
                  <p className="text-gray-600 mt-2 text-sm">Recovery agents cannot visit your workplace to humiliate you or contact family members who are not co-borrowers/guarantors. They must respect your privacy.</p>
                </div>
                <div className="bg-white border-l-4 border-indigo-500 shadow-sm p-6 ml-4">
                  <h4 className="font-bold text-gray-900">Document Release</h4>
                  <p className="text-gray-600 mt-2 text-sm">Current RBI norms state that upon closure of a loan (settlement or full repayment), the lender must release all original property/security documents within 30 days, failing which they are liable to pay compensation.</p>
                </div>
              </div>

              <h2 id="grievance-redressal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Complaints & Grievance Redressal</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                 If you face harassment or if Tata Capital is unresponsive to your legitimate settlement request, you can escalate the matter. The escalation hierarchy is:
              </p>
              
              <div className="overflow-x-auto mb-10">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Level</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contact Person</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contact Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Level 1 (General)</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Customer Care</td>
                      <td className="py-4 px-6 text-sm text-gray-700">customercare@tatacapital.com<br/>1860 267 6060</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Level 2 (Escalation)</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Ms. Francyna Dias (Retail)</td>
                      <td className="py-4 px-6 text-sm text-gray-700">SeniorCRORetail@tatacapital.com</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Level 3 (Nodal)</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Ms. Sona S. Gaharwar</td>
                      <td className="py-4 px-6 text-sm text-gray-700">CCRO@tatacapital.com</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2 italic">*If unresolved after Level 3, you can complain to the RBI Ombudsman.</p>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To process your settlement promptly, ensure you have the following ready:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
                <li><strong>Loan Statement:</strong> Details of principal vs interest outstanding.</li>
                <li><strong>KYC Documents:</strong> Copy of Pan Card and Aadhar Card.</li>
                <li><strong>Harassment Proof:</strong> Call records or threatening emails (if any).</li>
                <li><strong>Hardship Proofs:</strong> Bank statements showing income loss, medical records, or termination letters.</li>
              </ul>

              <h2 id="credit-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on CIBIL Score</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transparency is key. A settlement will result in your account status being reported as <strong>"Settled"</strong> to CIBIL. This negatively impacts your score (typically by 50-100 points) and remains on the report for 7 years.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                However, a "Settled" status is far superior to a "Written Off" or "Suit Filed" status. It stops the ongoing damage. Once settled, you can start rebuilding your score using secured credit cards. CredSettle also offers a specific <strong>Credit Rebuild Program</strong> to help you return to a 750+ score within 12-18 months.
              </p>

              <h2 id="why-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Choose CredSettle?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are not just a document processing service; we are your legal partners in achieving debt freedom.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Protection</h5>
                  <p className="text-sm text-gray-600">We shield you from recovery agents. All calls are routed to our legal team.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Savings</h5>
                  <p className="text-sm text-gray-600">Our data-driven negotiation strategies save clients an average of 45-50%.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Compliance</h5>
                  <p className="text-sm text-gray-600">We ensure every step follows RBI guidelines and the settlement is 100% legal.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Success Fee</h5>
                  <p className="text-sm text-gray-600">Zero upfront fees for negotiation. You pay us only when you save.</p>
                </div>
              </div>

              {/* Client Reviews */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Client Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Manish Verma, Bangalore</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"My business took a hit and I defaulted on a 15 Lakh Tata Capital loan. The arbitration notice scared me. CredSettle took over, attended the hearings, and settled it for 7 Lakhs. Highly professional."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Sneha R., Pune</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I was being harassed daily by agents. After signing up with CredSettle, the calls stopped within 48 hours. I settled my personal loan and finally have peace of mind."</p>
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
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Personal Loan Settle
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/business-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Business Loan Settle
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/anti-harassment" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Stop Harassment
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
