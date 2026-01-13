'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ICICILoanSettlementClient() {
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
    { id: 'overview', label: 'Overview' },
    { id: 'why-settle-icici', label: 'Why Settle?' },
    { id: 'amazon-pay-card', label: 'Amazon Pay Card' },
    { id: 'settlement-process', label: 'Settlement Process' },
    { id: 'documents-required', label: 'Documents' },
    { id: 'credit-score-reality', label: 'Credit Score' },
    { id: 'recovery-tactics', label: 'Recovery Tactics' },
    { id: 'rbi-guidelines', label: 'RBI Guidelines' },
    { id: 'faqs', label: 'FAQs' },
  ];

  /* 
    Helper class for links (Matches HDFC Design)
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
      question: "Is there a specific ICICI One Time Settlement Scheme for 2026?",
      answer: "ICICI Bank does not typically publish a public 'scheme' for settlements. Instead, they evaluate cases individually based on the 'hardship' criteria. However, for 2026, we have observed a trend where the bank is more willing to close long-standing NPA accounts (older than 180 days) to clean up their balance sheet, often offering better waivers than in previous years."
    },
    {
      question: "How do I settle my Amazon Pay ICICI Credit Card?",
      answer: "The Amazon Pay ICICI card follows the same settlement lifecycle as other credit cards. Since it is a co-branded card, the recovery is handled by ICICI Bank's teams, not Amazon. You can settle this card by proving financial inability to pay. Be aware that settling this card will likely block you from using Amazon Pay Later services as well."
    },
    {
      question: "Can I get a foreclosure letter online from ICICI Bank?",
      answer: "For a settled account, the 'No Dues Certificate' or foreclosure letter is usually physically mailed to your registered address or handed over at the branch. While you can view the loan closure status on the iMobile app after a few weeks, we always recommend securing the physical signed and stamped letter for your legal records."
    },
    {
      question: "What is the minimum settlement percentage ICICI accepts?",
      answer: "There is no fixed percentage. We have seen settlements go as low as 35-40% of the principal in cases of severe medical emergencies or job loss, while for other cases it might hover around 60%. It heavily depends on your negotiation skills and the documentation of your financial crisis."
    },
    {
      question: "Does ICICI Bank offer a Credit Builder Program after settlement?",
      answer: "Yes, ICICI is one of the few banks to offer specific products like 'FD-backed Credit Cards' which can help you rebuild your score. After settling, you can open a Fixed Deposit with them and take a secured credit card to start repairing your CIBIL score immediately."
    },
    {
      question: "Will the recovery agents stop calling if I start settlement talks?",
      answer: "Official negotiation usually halts the aggressive calling. However, third-party agencies might not get the memo immediately. CredSettle ensures that a legal communication is sent to the bank's central team, which legally obligates them to pause harassment while the settlement terms are being finalized."
    },
    {
      question: "Can I settle an 'Insta Loan' on my ICICI Credit Card?",
      answer: "Yes. Insta Loans, Jumbo Loans, or Personal Loans on Credit Cards are all unsecured facilities. If you settle the parent credit card, the linked loans must also be included in the settlement. Do not settle just the card and leave the loan open; ensure the settlement letter covers the 'Total Outcome' of all linked accounts."
    },
    {
      question: "Is it mandatory to visit the branch to settle?",
      answer: "Not necessarily. Most of the process, including the negotiation and checking of the settlement letter draft, can be done remotely. You may only need to visit the branch to deposit the final settlement cheque if online transfer options are restricted on the account."
    },
    {
      question: "What happens if I miss the settlement payment date?",
      answer: "The settlement offers are time-bound, usually valid for 7-10 days. If you miss the deadline, the offer becomes null and void, and you might have to renegotiate from scratch, often for a higher amount. Always bear the deadline in mind."
    },
    {
      question: "Can ICICI Bank deduct money from my savings account for the loan?",
      answer: "If you have a savings account with ICICI Bank and a defaulted loan with them, they have the 'Right to Set Off'. They can legally debit your savings balance to recover dues. It is advisable to maintain your operational funds in a different bank while the settlement is in progress."
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
                    ICICI Bank
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
              
              <h1 className="text-4xl font-bold text-gray-900 mb-2">ICICI Loan Settlement Services</h1>
              <p className="text-xl text-gray-500 mb-8 font-light">
                Resolve your ICICI Bank Personal Loan and Credit Card defaults legally. Save up to 50% on outstanding dues with our RBI-compliant settlement process.
              </p>

              <h2 id="overview" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Overview of ICICI Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                ICICI Bank is one of India's leading financial institutions, widely known for its quick disbursement of personal loans and credit cards. However, unforeseen life events such as job loss, salary cuts, or medical emergencies can disrupt your repayment schedule, leading to debt accumulation. When traditional repayment becomes impossible, <strong>ICICI Loan Settlement</strong> (or One Time Settlement - OTS) emerges as a practical legal solution.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settlement is not merely about non-payment; it is a structured financial exit route recognized by the banking system. It allows you to close your loan account by paying a negotiated reduced amount, thereby stopping the cycle of compounding interest and late fees. At CredSettle, we specialize in navigating ICICI Bank's specific settlement protocols to secure the most favorable terms for you.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Important Update for 2026</h4>
                <p className="text-blue-800 m-0">
                  Under the new RBI guidelines for 2025-26, banks are mandated to have a clear, board-approved policy for compromise settlements. This means more transparency for you and a standardized process for closing "Technical Write-Off" accounts.
                </p>
              </div>

              <h2 id="why-settle-icici" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Settle with ICICI Bank?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Choosing to settle your debt is a significant financial decision. Here is why it might be the right path if you are defaulting on your ICICI obligations:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">1. Stop the Interest Spiral</h4>
                  <p className="text-gray-600 text-sm">ICICI Credit Cards can charge upward of 3.5% interest per month. Settlement freezes this growth instantly.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">2. Halt Legal Action</h4>
                  <p className="text-gray-600 text-sm">Banks may initiate arbitration or civil recovery suits for large dues. A settlement agreement legally pauses and eventually closes these proceedings.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">3. Protection from Harassment</h4>
                  <p className="text-gray-600 text-sm">Professional representation puts a barrier between you and the recovery agents, ensuring communication remains civil and legal.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">4. Financial Reset</h4>
                  <p className="text-gray-600 text-sm">Become debt-free in a matter of weeks rather than struggling for years with minimum due payments.</p>
                </div>
              </div>

              <h2 id="amazon-pay-card" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Amazon Pay ICICI Card Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Amazon Pay ICICI Credit Card is one of the most popular cards in the country, but it also sees a high volume of defaults due to its easy accessibility. Many users assume that because it is co-branded with Amazon, the rules might be different. 
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>The Reality:</strong> The credit risk is entirely owned by ICICI Bank. When you default on this card:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>Your Amazon account might not be blocked immediately, but your <strong>Amazon Pay Later</strong> limit will likely be frozen.</li>
                <li>The recovery follow-ups will come from ICICI Bank's authorized agencies, not Amazon customer service.</li>
                <li>The settlement process is identical to any other ICICI Platinum or Coral credit card.</li>
                <li>You can successfully settle this card for <strong>50% or less</strong> of the outstanding value depending on the delinquency period.</li>
              </ul>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The CredSettle Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We follow a rigorous, four-step approach to ensure your settlement is approved without legal complications:
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Financial Assessment</h4>
                    <p className="text-gray-600 mt-1">We evaluate your current 'Disposable Income'. This helps us calculate a realistic repayment offer that you can actually afford, ensuring the negotiation doesn't fail later.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Communication Takeover</h4>
                    <p className="text-gray-600 mt-1">We formally notify ICICI Bank that we represent you. This redirects the bulk of the collection calls to our legal team, giving you efficient mental relief.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Hard Negotiation</h4>
                    <p className="text-gray-600 mt-1">Our experts negotiate with the Regional Collection Managers. We leverage provisions for 'Technical Write-offs' to get waivers on Interest, Late Fees, and even a portion of the Principal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Closure & Documentation</h4>
                    <p className="text-gray-600 mt-1">We verify the settlement letter for accuracy, ensure the payment goes to the correct loan account, and follow up until the 'No Dues Certificate' is issued.</p>
                  </div>
                </div>
              </div>

              <h2 id="documents-required" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Documents Required</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                ICICI Bank's credit committee requires proof that your default is not 'wilful'. You will need to provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
                <li><strong>Identity Proof:</strong> PAN Card & Aadhar Card.</li>
                <li><strong>Loan Details:</strong> The latest Loan Account Statement or Credit Card Statement showing full dues.</li>
                <li><strong>Evidence of Hardship:</strong> This is crucial. It can be a termination letter, salary slips showing pay cuts, closure analysis of a business, or medical reports justifying high expenses.</li>
                <li><strong>Banking Records:</strong> Bank statements for the last 6 months to prove lack of liquidity.</li>
              </ul>

              <h2 id="credit-score-reality" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on Credit Score</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transparency is our policy. A settlement will result in your CIBIL status being marked as <strong>'Settled'</strong>. This lowers your score and stays on the report for 7 years.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Is it bad?</strong> Yes, but it is better than the alternative. A 'Written Off' status or 'Suit Filed' status is far more damaging. A settlement puts a 'full stop' to the bad history. Once settled, you can start rebuilding. ICICI Bank itself offers secured credit cards against fixed deposits which can effectively help you increase your score by 50-60 points within a year of disciplined usage.
              </p>

              <h2 id="recovery-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding Recovery Tactics</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                ICICI Bank employs both internal teams and external agencies. You might experience forceful tactics like continuous calling or vague threats about legal consequences.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                It is vital to know that under <strong>RBI guidelines</strong>, agents cannot call you before 8 AM or after 7 PM, cannot use abusive language, and cannot threaten physical harm. If any agent crosses these lines, CredSettle can file a formal grievance with the Banking Ombudsman on your behalf, which often speeds up the settlement process as the bank wants to close the complaint.
              </p>

              <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">RBI Guidelines 2025</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The latest framework from the RBI regarding 'Compromise Settlements' has empowered borrowers. It mandates that banks cannot simply refuse settlement without a valid reason if the borrower is genuinely distressed. It also opens avenues for settling accounts classified as 'Wilful Defaults' under very specific, stringent conditions, provided there is no malfeasance involved. This regulatory shift makes 2025-26 a favorable time to approach the bank for a clean slate.
              </p>

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
              
              {/* CTA Widget */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Urgent Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Don't face the bank alone. Get expert legal support today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ 100% Confidential</p>
                  <p className="mt-1">✓ RBI Compliant Process</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      HDFC Loan Settlement
                    </Link>
                  </li>
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
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
