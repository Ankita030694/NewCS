'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function YesBankLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        rootMargin: '-100px 0px -35% 0px',
        threshold: 0.1
      }
    );

    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

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
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'process', label: 'Settlement Process' },
    { id: 'negotiation-strategy', label: 'Negotiation Strategy' },
    { id: 'ots-vs-restructuring', label: 'OTS vs Restructuring' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'credit-score', label: 'Impact on CIBIL' },
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
      question: "What is the Yes Bank loan settlement process?",
      answer: "The Yes Bank loan settlement process, often referred to as a One Time Settlement (OTS), is a legal and regulated mechanism to close your outstanding loan or credit card account by paying a reduced amount. This option is typically available for accounts that have been classified as Non Performing Assets (NPAs) due to non payment for over 90 days. It involves submitting a settlement proposal to the bank, negotiating a lower payoff amount, and formally closing the account upon payment."
    },
    {
      question: "Can I settle my Yes Bank credit card dues?",
      answer: "Yes, absolutely. Yes Bank credit card debts are among the most common types of unsecured debts settled. Due to high interest rates and late fees, credit card balances can spiral out of control. If you are in genuine financial distress, you can negotiate with the bank to settle the card account for typically 30% to 50% of the total outstanding amount."
    },
    {
      question: "How do I communicate with Yes Bank for settlement?",
      answer: "Communication is key. You should ideally route your settlement request through professional channels to ensure it reaches the right decision makers in the recovery department. While you can visit a branch, using a specialized agency like CredSettle ensures that your case is presented with proper legal grounding, preventing miscommunication or intimidation by recovery agents."
    },
    {
      question: "Will the police be involved if I don’t pay my Yes Bank loan?",
      answer: "No, defaulting on a loan is a civil dispute, not a criminal offense. The police generally do not get involved in loan recovery matters unless there is an element of fraud (like submitting fake documents). Banks cannot threaten you with arrest or police action for genuine inability to repay. If recovery agents threaten you with police action, it is illegal harassment."
    },
    {
      question: "How much discount can I realistically expect?",
      answer: "The settlement amount is not fixed and depends on various factors: the age of the default (older NPAs often get better deals), your current income, your assets, and the bank’s internal policies at that time. Generally, settlements range from 30% to 50% waiver on the principle plus interest. In exceptional cases of medical hardship or long term unemployment, the waiver can be higher."
    },
    {
      question: "What is a 'No Dues Certificate' and why is it important?",
      answer: "A 'No Dues Certificate' (NDC) or 'Settlement Letter' is the final proof that you have paid the agreed settlement amount and the bank has no further claims against you. You must insist on receiving this document after making the payment. Without it, the bank could technically claim the remaining balance in the future. CredSettle ensures you get this document promptly."
    },
    {
      question: "Can I get a new loan after settling with Yes Bank?",
      answer: "Immediately after settlement, it will be difficult to get a new unsecured loan (like a personal loan) because your credit score will reflect the 'Settled' status. However, this is not permanent. You can start rebuilding your score by taking a secured credit card (against a fixed deposit) or a gold loan. With disciplined repayment, your score will improve over 12-24 months, making you eligible for loans again."
    },
    {
      question: "What if Yes Bank has already filed a legal case against me?",
      answer: "Even if a legal case (like a Section 138 cheque bounce case or civil suit) has been filed, settlement is still possible. In fact, most banks prefer to settle out of court to save legal costs and time. Once the settlement amount is paid, the bank is legally obliged to withdraw the case. We handle the legal coordination to ensuring the case is formally closed."
    },
    {
      question: "Is the settlement amount paid in one go?",
      answer: "Banks usually prefer a single lump sum payment (bullet payment) for settlements as it closes the account immediately. However, if you genuinely cannot arrange the full amount at once, the bank may agree to split the settlement amount into 2 or 3 monthly installments. However, defaulting on an installment usually voids the settlement deal."
    },
    {
      question: "Does CredSettle guarantee a specific settlement percentage?",
      answer: "No ethical company can 'guarantee' a fixed percentage because the final decision lies with the bank’s credit committee. However, based on our track record of handling thousands of cases, we can estimate a realistic range. Our expertise lies in maximizing the waiver by presenting your financial hardship effectively and negotiating firmly."
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
                    Yes Bank
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Introduction to Yes Bank Loan Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  Life often throws unexpected challenges our way. A sudden job loss, a medical emergency, or a business downturn can severely impact your financial stability. If you find yourself unable to repay your <strong>Yes Bank personal loan</strong> or heavily burdened by mounting <strong>credit card dues</strong>, know that you are not alone. Thousands of borrowers face similar situations every year.
                </p>
                <p className="mb-4">
                  When payments are missed, the stress escalates quickly. The accumulation of late fees, penal interest, and the relentless calls from recovery agents can take a toll on your mental peace. However, there is a structured, legal, and dignified way out of this debt trap: <strong>Loan Settlement</strong>.
                </p>
                <p>
                  This comprehensive guide is designed to help you understand the end to end process of settling your Yes Bank loan in 2026. We cover everything from eligibility criteria and negotiation strategies to the legal aspects and credit score impact. CredSettle is here to guide you through every step, ensuring you get the best possible waiver and regain your financial freedom.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Did You Know?</h4>
                <p className="text-blue-800 m-0">
                  Yes Bank, like all commercial banks in India, has specific provisions for One Time Settlement (OTS) for stressed assets. This is not a "favor" but a standard banking practice to clean up balance sheets and recover stuck capital.
                </p>
              </div>

              <h2 id="what-is-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">What is Yes Bank Loan Settlement?</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  <strong>Loan Settlement</strong>, technically known as a One Time Settlement (OTS), is a negotiated agreement between you and Yes Bank. In this arrangement, the bank agrees to accept a lump sum payment that is significantly lower than your total outstanding dues to close the loan account permanently.
                </p>
                <p className="mb-4">
                  For example, if you owe ₹5 Lakhs (including principal, interest, and penalties), the bank might agree to settle the account for ₹2.5 Lakhs. The remaining ₹2.5 Lakhs is "waived off" or "written off" by the bank.
                </p>
                <p className="mb-4">
                  <strong>Why would the bank agree to this?</strong><br />
                  Banks render this option when they realize that the borrower is in a genuine financial crisis and cannot repay the full amount. For the bank, recovering 50% of the money now is better than waiting for years with uncertain legal outcomes or recovering nothing at all.
                </p>
                <p>
                  This option typically opens up when your account has been classified as a <strong>Non Performing Asset (NPA)</strong>, which usually happens after 90 days of non payment.
                </p>
              </div>

              <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility Criteria for Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settlement is not an automatic right; it is a discretionary option. To qualify, you must prove to Yes Bank that your inability to pay is genuine and not willful. The key factors include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                    Unsecured Loans Only
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Settlement is primarily for <strong>unsecured debts</strong> like personal loans, credit cards, and unsecured business loans. Secured loans (home/car loans) are backed by collateral, so the bank prefers to seize the asset rather than settle.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                    Job Loss or Income Cut
                  </h4>
                  <p className="text-gray-600 text-sm">
                    If you have lost your job or faced a significant salary reduction, you become a prime candidate. You will need to provide termination letters or salary slips as proof.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                    Medical Emergency
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Severe illness or medical emergencies in the family that have drained your savings are valid grounds for seeking a settlement. Medical reports will be required.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">4</span>
                    Business Failure
                  </h4>
                  <p className="text-gray-600 text-sm">
                    For self employed individuals, proof of business closure or severe loss (GST returns, bank statements) can demonstrate inability to repay.
                  </p>
                </div>
              </div>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Detailed Settlement Process</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Understanding the workflow is crucial to avoid being taken advantage of by commissioned recovery agents. Here is the standard CredSettle process:
                </p>
              </div>

              <div className="relative border-l-4 border-blue-200 ml-4 pl-8 space-y-10 mb-12">
                <div className="relative">
                  <span className="absolute -left-12 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Enrollment & Analysis</h4>
                  <p className="text-gray-600">
                    We start by analyzing your <strong>Credit Report</strong> and loan documents. We calculate your <strong>Debt to Income Ratio</strong> and identify the "settlement window" - the ideal time to approach the bank for maximum discount.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-12 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Handling Harassment</h4>
                  <p className="text-gray-600">
                    Once you authorize us, we notify Yes Bank and their agencies that we are representing you. We demand that all future communication be routed through us. This acts as a shield, stopping the abusive calls and visits.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-12 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Proposal & Negotiation</h4>
                  <p className="text-gray-600">
                    We draft a formal settlement proposal highlighting your financial hardship with evidence. We submit this to the bank’s central settlement team. We then engage in multiple rounds of negotiation to bring down the settlement figure.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-12 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Verification & Payment</h4>
                  <p className="text-gray-600">
                    Once a deal is struck, Yes Bank issues a settlement letter. We verify this letter for authenticity and terms using our legal expertise. Only after verification do you make the payment directly to your loan account.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-12 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">5</span>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Closure Certificate</h4>
                  <p className="text-gray-600">
                    Post payment, we follow up to ensure your loan status is updated in the bank’s records and CIBIL. We obtain the "No Dues Certificate" for your permanent record.
                  </p>
                </div>
              </div>

              <h2 id="negotiation-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Strategic Negotiation Tips</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Negotiating with a bank requires skill and patience. Here are some insider tips that our experts use:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li><strong>Never accept the first offer:</strong> The bank’s first offer will usually be high (e.g., 80% of the total). This is just a starting point.</li>
                  <li><strong>Focus on the Principal:</strong> Try to negotiate based on the principal amount sanctioned, asking for a waiver of all interest and charges first.</li>
                  <li><strong>Show liquidity:</strong> Banks are more likely to agree to a low amount if you can pay it immediately (one shot payment) rather than asking for installments.</li>
                  <li><strong>Don’t get emotional:</strong> Treat this as a business transaction. Explain your numbers clearly rather than just pleading.</li>
                </ul>
              </div>

              <h2 id="ots-vs-restructuring" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">OTS vs Loan Restructuring</h2>
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  Often borrowers confuse Settlement (OTS) with Restructuring. It is vital to know the difference:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm whitespace-nowrap">
                    <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-4 rounded-tl-lg">Feature</th>
                        <th scope="col" className="px-6 py-4">One Time Settlement (OTS)</th>
                        <th scope="col" className="px-6 py-4 rounded-tr-lg">Loan Restructuring</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b border-gray-100">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">Objective</th>
                        <td className="px-6 py-4 text-gray-600">To CLOSE the loan permanently</td>
                        <td className="px-6 py-4 text-gray-600">To EXTEND the loan tenure</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">Total Payment</th>
                        <td className="px-6 py-4 text-green-600 font-bold">Reduced (30-50% less)</td>
                        <td className="px-6 py-4 text-red-600 font-bold">Increased (extra interest)</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">Monthly EMI</th>
                        <td className="px-6 py-4 text-gray-600">Stops immediately</td>
                        <td className="px-6 py-4 text-gray-600">Continues (may be lower)</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">Credit Score</th>
                        <td className="px-6 py-4 text-gray-600">Status: "Settled" (Negative)</td>
                        <td className="px-6 py-4 text-gray-600">Status: "Restructured" (Negative)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-500 italic">
                  *Restructuring keeps you in debt longer, often paying more in total interest. Settlement gets you out of debt instantly but impacts your score.
                </p>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  To process your settlement request, Yes Bank will require a KYC and financial update. Keep these ready:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <h5 className="font-bold text-gray-900 mb-2">For Salaried</h5>
                    <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                      <li>KYC (PAN, Aadhar)</li>
                      <li>Last 3 months salary slips (showing no/low salary)</li>
                      <li>Termination letter (if job lost)</li>
                      <li>Bank statements (last 6 months)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <h5 className="font-bold text-gray-900 mb-2">For Self Employed</h5>
                    <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                      <li>KYC (PAN, Aadhar)</li>
                      <li>GST Cancelation proof (if business closed)</li>
                      <li>ITR of last 2 years (showing loss)</li>
                      <li>Bank statements (last 6 months)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 id="credit-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on Credit Score (CIBIL)</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  We believe in 100% transparency. Settlement <strong>will</strong> impact your CIBIL score. When a loan is settled, the bank reports it as "Settled" to bureaus. This indicates that the loan was not paid in full.
                </p>
                <p className="mb-4">
                  <strong>The Trade-off:</strong><br />
                  While your score drops, it is often the "lesser of two evils". If you don’t settle:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Your score continues to drop every month you miss an EMI.</li>
                  <li>The status will eventually become "Written Off" or "Suit Filed", which is far worse.</li>
                  <li>Interest keeps piling up, increasing your liability.</li>
                </ul>
                <p>
                  <strong>The Good News:</strong><br />
                  A "Settled" status is not permanent. Once you are debt free, you can start rebuilding. CredSettle offers a <strong>Credit Builder Program</strong> where we help you get a secured card. Consistent usage of this card can boost your score back to 750+ levels within 12-18 months.
                </p>
              </div>

              <h2 id="why-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Choose CredSettle?</h2>
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  Navigating the banking bureaucracy alone can be intimidating. Here is why thousands of Indians trust CredSettle with their Yes Bank loan settlements:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1">HumanShield Protection</h5>
                    <p className="text-sm text-gray-600">We take over your calls. You don’t have to talk to rude agents ever again.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1">Ex-Banker Negotiators</h5>
                    <p className="text-sm text-gray-600">Our team includes former bank managers who know exactly how OTS approvals work.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1">Legal Oversight</h5>
                    <p className="text-sm text-gray-600">Every document is vetted by lawyers to ensure you don’t sign anything risky.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1">Success Fee Model</h5>
                    <p className="text-sm text-gray-600">You pay us a fee only on the Savings we generate for you. We win when you win.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Verified Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Ravi K., Tech Professional</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I had a Yes Bank personal loan of ₹8 Lakhs. After my layoff, I couldn’t pay. Agents were calling my parents. CredSettle team stepped in and settled it for ₹3.2 Lakhs. I can finally sleep peacefully."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Sneha M., Small Business Owner</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"My credit card dues had ballooned to ₹4 Lakhs due to interest. I was scared of legal notices. CredSettle handled everything and got me a 55% waiver. Professional and trustworthy."</p>
                  </div>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center transform transition hover:-translate-y-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Debt Free in 2026?</h4>
                <p className="text-sm text-gray-600 mb-6">Let’s check your eligibility for a 50% waiver today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Start Now
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v 100% Confidential</p>
                  <p className="mt-1">v No Spam Policy</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Banks</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      HDFC Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/icici" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      ICICI Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Credit Cards
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
