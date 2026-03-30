'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function BajajFinservLoanSettlementClient() {
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
    { id: 'what-is-settlement', label: 'What is Settlement?' },
    { id: 'eligible-products', label: 'Eligible Products' },
    { id: 'emi-card-settlement', label: 'EMI Card Settlement' },
    { id: 'rbl-supercard', label: 'RBL SuperCard' },
    { id: 'process', label: 'Settlement Process' },
    { id: 'settlement-letter', label: 'Settlement Letter' },
    { id: 'documents', label: 'Documents Required' },
    { id: 'credit-score', label: 'CIBIL Impact' },
    { id: 'legal-implications', label: 'Legal Implications' },
    { id: 'why-credsettle', label: 'Why CredSettle' },
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
      question: "What is the Bajaj Finserv loan settlement process?",
      answer: "The Bajaj Finserv loan settlement process involves negotiating with the lender to pay a one-time reduced amount to close your loan account. This is typically an option when you are unable to pay the full EMI due to financial hardship. The process includes submitting a settlement request, financial evaluation by Bajaj Finserv, and issuance of a settlement letter upon agreement."
    },
    {
      question: "Can I settle my Bajaj Finserv EMI Network Card dues?",
      answer: "Yes, you can settle Bajaj Finserv EMI Network Card dues. If you have been unable to pay your minimum dues for over 90 days and your account is classified as NPA, you can approach the lender for a One Time Settlement (OTS) to clear the debt at a reduced value."
    },
    {
      question: "How do I settle my Bajaj Finserv RBL Bank SuperCard?",
      answer: "Settling a Bajaj Finserv RBL Bank SuperCard follows a similar process to credit card settlement. You need to demonstrate financial inability to pay the full outstanding amount. Once approved, you pay a negotiated lump sum, and the card account is closed as 'settled'."
    },
    {
      question: "How much discount can I get in Bajaj Finserv loan settlement?",
      answer: "The discount in Bajaj Finserv loan settlement varies based on your financial condition and the age of the default. Typically, borrowers can save anywhere between 30% to 50% on the total outstanding principal and interest, though exceptional cases may see higher waivers."
    },
    {
      question: "Will settling my Bajaj Finserv loan affect my CIBIL score?",
      answer: "Yes, settling a loan will impact your CIBIL score. The account status will be reported as 'Settled' rather than 'Closed', which indicates to future lenders that the full amount was not repaid. However, this is often better than a 'Written Off' status or continuing default."
    },
    {
      question: "How do I get a foreclosure letter after settlement?",
      answer: "Once you pay the agreed settlement amount, Bajaj Finserv will issue a 'No Dues Certificate' or a settlement closure letter. This document serves as proof that your liability towards the loan is extinguished."
    },
    {
      question: "Can Bajaj Finserv file a legal case against me for non-payment?",
      answer: "Lenders have the right to initiate legal proceedings like arbitration or filing a civil suit for recovery of dues. However, initiating a settlement dialogue often puts these legal actions on hold as both parties work towards a mutual resolution."
    },
    {
      question: "Do I need a lawyer for Bajaj Finserv loan settlement?",
      answer: "While not mandatory, having a legal expert or a settlement company like CredSettle represents you ensures that you are not bullied by recovery agents. We handle the negotiations to get you the best possible deal and ensure all documentation is legally sound."
    },
    {
      question: "What is the minimum amount Bajaj Finserv will accept for settlement?",
      answer: "There is no fixed minimum rule, as it is case specific. However, lenders generally try to recover at least the principal amount. In cases of severe hardship, they may accept a lower percentage of the principal."
    },
    {
      question: "How long does the Bajaj Finserv settlement process take?",
      answer: "The process can take anywhere from a few weeks to a couple of months, depending on the complexity of the case, the amount due, and the speed of negotiations between you (or your representative) and the lender officials."
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
                    Bajaj Finserv
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Introduction to Bajaj Finserv Loan Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Are you feeling the overwhelming weight of mounting EMIs from Bajaj Finserv? Whether it involves a personal loan, a consumer durable loan on your EMI Network Card, or credit card dues from the Bajaj Finserv RBL Bank SuperCard, financial stress can affect anyone unexpectedly. Life events such as a sudden job loss, a significant medical emergency, or an unforeseen business downturn can quickly transform a manageable loan into a severe financial burden. If you are struggling to keep up with your repayment schedule, facing constant calls from recovery agents, and worrying about your financial future, you are not alone.
                </p>
                <p>
                  Bajaj Finserv Loan Settlement offers a structured and legal solution for borrowers who are genuinely unable to repay their full debt obligations. Also known as One-Time Settlement (OTS), this process allows you to negotiate with the lender to pay a reduced lump sum amount to close your loan account permanently. This comprehensive guide by CredSettle will walk you through the entire process, specifically tailored for Bajaj Finserv products, helping you understand your rights, options, and how to negotiate a favorable settlement in 2026.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Key Insight</h4>
                <p className="text-blue-800 m-0">
                  Loan settlement is a financial lifeline, not a crime. If your intention to repay is genuine but your capability is currently compromised by valid hardships, Bajaj Finserv may agree to settle your outstanding dues for as low as 50% of the total liability, helping you avoid long-term legal complications.
                </p>
              </div>

              <h2 id="what-is-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">What is Bajaj Finserv Loan Settlement?</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Loan Settlement is a formal agreement between a borrower and the lender (Bajaj Finance Limited or its banking partners) to resolve a debt for less than the total outstanding balance. This generally becomes an option when the loan account has been classified as a <strong>Non-Performing Asset (NPA)</strong>, which typically happens after 90 days of consecutive non-payment.
                </p>
                <p>
                  From Bajaj Finserv’s perspective, engaging in a settlement is a pragmatic decision. Recovering a portion of the principal amount immediately through a settlement is often more financially viable than pursuing a lengthy legal recovery process that might yield no results, or writing off the entire loan as a complete loss. For you, the borrower, it provides a critical opportunity to exit the debt trap, halt the accumulation of compounding interest and penal charges, and put an end to the relentless harassment from recovery agents.
                </p>
              </div>

              <h3 id="eligible-products" className="text-2xl font-bold text-gray-900 mb-4 mt-8 scroll-mt-28">Eligible Bajaj Finserv Products for Settlement</h3>
              <p className="text-gray-700 mb-4">
                It is important to understand that not all financial products are eligible for settlement. Settlement is generally reserved for <strong>unsecured debts</strong> where the lender does not hold any collateral (like your house or gold) that they can seize to recover dues. The most commonly settled Bajaj Finserv products include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li><strong>Personal Loans:</strong> Unsecured loans taken for personal use such as weddings, travel, or medical needs.</li>
                <li><strong>Bajaj Finserv EMI Network Card:</strong> Dues arising from consumer durable purchases like electronics, furniture, or appliances bought on "No Cost EMI".</li>
                <li><strong>Bajaj Finserv RBL Bank SuperCard:</strong> Co-branded credit card dues, including retail spends and cash advances.</li>
                <li><strong>Business Loans:</strong> Unsecured business loans for MSMEs and professionals.</li>
                <li><strong>Flexi Loans:</strong> Certain variants of Flexi Personal or Business loans that are unsecured.</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8">
                <p className="text-yellow-800 text-sm font-medium">
                  <strong>Note:</strong> Secured loans such as Loan Against Property (LAP) or Gold Loans are typically not eligible for settlement as the lender retains the right to auction the collateral to recover their funds.
                </p>
              </div>

              <h2 id="emi-card-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Settling Bajaj Finserv EMI Network Card Dues</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The Bajaj Finserv EMI Network Card is a popular product, but it can lead to multiple concurrent loans if not managed carefully. Each purchase you make using the card effectively creates a separate loan account. When you default on these EMIs, the charges can pile up quickly due to bounce charges and late payment fees.
                </p>
                <p className="mb-4">
                  <strong>Key Considerations for EMI Card Settlement:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Multiple Accounts:</strong> You might have to settle multiple active loan accounts linked to a single EMI card. It is crucial to ensure that the settlement covers <em>all</em> linked active loans to fully close your liability.</li>
                  <li><strong>Status Update:</strong> Once settled, the specific loans will be marked as settled. However, your EMI Network Card will be permanently blocked and cannot be reactivated.</li>
                  <li><strong>Small Ticket Size:</strong> Often, individual consumer durable loans are small (e.g., ₹15,000 for a phone). Lenders might be less willing to offer huge waivers on small amounts compared to large personal loans, but negotiation is still possible, especially on the accumulated penalty charges.</li>
                </ul>
              </div>

              <h2 id="rbl-supercard" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Settlement of Bajaj Finserv RBL Bank SuperCard</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The Bajaj Finserv RBL Bank SuperCard is a co-branded credit card. Settlement for this product follows the standard credit card settlement protocols but involves coordination between Bajaj Finserv and RBL Bank.
                </p>
                <p className="mb-4">
                  <strong>The Challenge of High Interest:</strong> Credit cards carry some of the highest interest rates (finance charges), often ranging from 3.5% to 4% per month (up to 48% annually), plus GST. If you miss payments, the debt balloons rapidly.
                </p>
                <p className="mb-4">
                  <strong>Settlement Specifics:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Minimum Amount Due (MAD):</strong> Paying only the MAD will not help you settle. It only covers interest. You need to stop payments to trigger the NPA status required for settlement, though this should be done under legal guidance to handle the collections pressure.</li>
                  <li><strong>Cash Advances:</strong> If you have withdrawn cash using the SuperCard, these attract interest from day one. These components are harder to negotiate but can still be included in the total settlement corpus.</li>
                  <li><strong>One Shot vs. Term Settlement:</strong> You can negotiate to pay the settlement amount in one go (which usually gets a better discount) or in 3-6 monthly installments.</li>
                </ul>
              </div>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Settlement Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Navigating the settlement bureaucracy can be intimidating. At CredSettle, we simplify this into a transparent, step-by-step workflow:
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Financial Analysis & Enrollment</h4>
                    <p className="text-gray-600 mt-1">We assess your total liability across all Bajaj Finserv products. We verify if your accounts are eligible for settlement based on their NPA status and your hardship evidence.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Legal Representation</h4>
                    <p className="text-gray-600 mt-1">We formally notify Bajaj Finserv that CredSettle is representing you. This is a crucial step to channel all recovery calls and legal notices to us, providing you with immediate mental relief.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Negotiation Strategy</h4>
                    <p className="text-gray-600 mt-1">Our team negotiates with the settlement officers. We use your hardship proof to demand a waiver on all penal interest and a significant reduction in the principal amount.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Issuance of Settlement Letter</h4>
                    <p className="text-gray-600 mt-1">Once terms are agreed, we ensure Bajaj Finserv generates an official Settlement Letter. We verify the authenticity of this letter to ensure it includes all necessary clauses protecting you from future claims.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Payment & Closure</h4>
                    <p className="text-gray-600 mt-1">You make the payment directly to Bajaj Finserv (never to us). We then follow up to ensure your loan account status is updated to 'Settled' and obtain the No Dues Certificate.</p>
                  </div>
                </div>
              </div>

              <h2 id="settlement-letter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding the Settlement Letter</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The Settlement Letter is the most critical document in this process. Bajaj Finance generates this letter (often system-generated) outlining the terms. Before making any payment, you must ensure the letter contains:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Loan Account Number:</strong> Correct details of the specific loan(s) being settled.</li>
                  <li><strong>Settlement Amount:</strong> The exact reduced amount to be paid.</li>
                  <li><strong>Payment Schedule:</strong> The date(s) by which the payment must be made.</li>
                  <li><strong>Waiver Details:</strong> Clear mention of the amount being waived off.</li>
                  <li><strong>Closure Clause:</strong> A statement that upon realization of this amount, the loan will be treated as settled with no further outstanding dues.</li>
                </ul>
                <p>
                  <strong>Warning:</strong> Never make a payment based on a verbal commitment from a recovery agent. Always insist on an official email or letter from official Bajaj Finserv domains.
                </p>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To build a strong case for settlement, you must document your inability to pay. The following evidentiary documents are typically required:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Hardship Proof</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    <li>Termination/Layoff Letter</li>
                    <li>Medical Reports/Hospital Bills</li>
                    <li>Business Balance Sheets showing loss</li>
                    <li>Divorce/Separation decree (if relevant)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">KYC & Financials</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    <li>PAN Card & Aadhar Card</li>
                    <li>Last 3-6 months Bank Statements</li>
                    <li>Latest ITR (if available)</li>
                  </ul>
                </div>
              </div>

              <h2 id="credit-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on CIBIL Score</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Transparency is one of our core values at CredSettle. You must be aware that a loan settlement will have a negative impact on your CIBIL score.
                </p>
                <p className="mb-4">
                  When you settle, Bajaj Finserv reports the account to credit bureaus (CIBIL, Experian, Equifax, CRIF) with the status <strong>"Settled"</strong>. This flag indicates that the lender accepted a loss to close the account.
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
                  <p className="text-red-900 text-sm">
                    <strong>Consequence:</strong> Your credit score may drop by 50-100 points depending on your history. The "Settled" remark stays on your report for 7 years, making it difficult to access new unsecured credit (credit cards/personal loans) in the near future.
                  </p>
                </div>
                <p>
                  <strong>Why Settle Then?</strong> If you are already in default, your score is already plummeting every month. A "Written Off" or "Suit Filed" status is far more damaging than "Settled". Settlement stops the bleeding. It allows you to become debt-free, after which you can immediately start rebuilding your score through secured instruments like Fixed Deposit based credit cards. CredSettle also assists clients with post-settlement credit repair strategies.
                </p>
              </div>

              <h2 id="legal-implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Legal Implications and Protection</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Defaulting on a Bajaj Finserv loan can expose you to several legal actions:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Arbitration:</strong> Bajaj Finance agreements often include arbitration clauses. They can appoint an arbitrator to pass an award against you for the dues.</li>
                  <li><strong>Section 138 (Cheque Bounce):</strong> If you issued security cheques that bounced, criminal proceedings under Section 138 of the Negotiable Instruments Act can be initiated.</li>
                  <li><strong>Section 25 (ECS Failure):</strong> Similar proceedings can be initiated for failed ECS/NACH mandates under the Payment and Settlement Systems Act.</li>
                </ul>
                <p>
                  <strong>How Settlement Helps:</strong> Initiating a formal settlement dialogue is the most effective way to pause or withdraw these legal actions. As part of our settlement agreement, we ensure that Bajaj Finserv agrees to withdraw any pending legal cases upon receipt of the settlement amount. Having a legal team from CredSettle handle this ensures that you don’t just pay the money, but also clear your legal liabilities.
                </p>
              </div>

              <h2 id="why-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Choose CredSettle for Bajaj Finserv Settlement?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bajaj Finserv is a tech-savvy and process-driven lender. Negotiating with their algorithms and recovery agents requires specific expertise. Here is why CredSettle is your best ally:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-gray-900 mb-1">Domain Expertise</h5>
                  <p className="text-sm text-gray-600">We understand the specific settlement cycles of Bajaj Finance, EMI Cards, and RBL SuperCards.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-gray-900 mb-1">Legal Shield</h5>
                  <p className="text-sm text-gray-600">We handle the legal notices (Section 138, Arbitration) so you don’t have to face the courts alone.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-gray-900 mb-1">Max Savings</h5>
                  <p className="text-sm text-gray-600">Our bulk settlement volume gives us leverage to negotiate deeper discounts (up to 50%) for our clients.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-gray-900 mb-1">Success Fee Model</h5>
                  <p className="text-sm text-gray-600">We are performance-driven. You pay our fee only when we successfully generate a settlement letter for you.</p>
                </div>
              </div>

              {/* Review Snippets */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Client Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Vikram Singh, Pune</div>
                    </div>
                    <p className="italic text-gray-200 text-sm leading-relaxed">"I had outstanding dues on my Bajaj EMI card for multiple appliances. The penalty charges were more than the principal! CredSettle stepped in, waived off 100% of the penalties, and settled the principal amount. I could finally close those loan accounts."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Meera K., Bangalore</div>
                    </div>
                    <p className="italic text-gray-200 text-sm leading-relaxed">"My husband lost his job, and we defaulted on a large Bajaj personal loan. The legal notices were scary. The CredSettle team handled the arbitration notices professionally and settled the loan for 40% of the demanded value. We are forever grateful."</p>
                  </div>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-4 rounded-lg">
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
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center transform hover:-translate-y-1 transition-transform duration-300">
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
                    <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Credit Card Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Personal Loan Settle
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/anti-harassment" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Stop Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      HDFC Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/axis-bank" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Axis Bank Settlement
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
