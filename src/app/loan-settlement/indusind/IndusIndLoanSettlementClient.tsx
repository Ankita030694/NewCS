'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function IndusIndLoanSettlementClient() {
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
    { id: 'understanding-ots', label: 'Understanding OTS' },
    { id: 'eligibility-criteria', label: 'Eligibility' },
    { id: 'minimum-due-trap', label: 'Credit Card Trap' },
    { id: 'settlement-process', label: 'Process Guide' },
    { id: 'legal-action', label: 'Legal & Arbitration' },
    { id: 'lok-adalat', label: 'Lok Adalat' },
    { id: 'documentation', label: 'Documents' },
    { id: 'cibil-impact', label: 'CIBIL Score' },
    { id: 'benefits-risks', label: 'Benefits & Risks' },
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
      question: "How does IndusInd Bank loan settlement work?",
      answer: "IndusInd Bank settlement is a legal process where the bank agrees to close your loan account for a reduced amount. This typically happens when a borrower has defaulted for over 90 days and proves they genuinely cannot repay the full amount. You pay a lump sum settlement value, and the bank waives the remaining principal, interest, and penalties."
    },
    {
      question: "Can I settle my IndusInd Bank credit card dues?",
      answer: "Yes, IndusInd Bank credit card settlement is very common. If you have huge outstanding bills that you cannot pay due to financial crisis, you can approach the bank for a One Time Settlement (OTS). This allows you to clear the debt at a significantly lower amount than the total bill."
    },
    {
      question: "What is the minimum settlement amount IndusInd accepts?",
      answer: "There is no fixed percentage as every case is different. However, banks usually try to recover at least the principal amount. In severe hardship cases, settlements can range from 30% to 50% of the total outstanding amount, depending on negotiation."
    },
    {
      question: "Will settlement remove the loan from my CIBIL report?",
      answer: "No, the loan will not be removed. Instead, its status will change from 'Active' or 'Overdue' to 'Settled'. This indicates that the loan was closed by paying less than the due amount. It will remain on your credit report for about 7 years."
    },
    {
      question: "Is it better to settle or pay in full?",
      answer: "Paying in full is always better for your credit score. Limits your ability to get future loans involves getting a 'Closed' status which is positive. Settlement gets you a 'Settled' status which is negative. Only choose settlement if you absolutely cannot pay the full amount and are facing harassment or legal action."
    },
    {
      question: "Can IndusInd Bank file a case after settlement?",
      answer: "Once the settlement amount is paid in full and you receive the official Settlement Letter and No Dues Certificate (NDC), the bank cannot file a case for the same loan. The account is legally closed. Ensure you keep these documents safe."
    },
    {
      question: "How long does the IndusInd settlement process take?",
      answer: "The timeline varies but typically takes 2 to 4 weeks. It involves submitting a request, the bank evaluating your financial status, negotiations on the amount, and finally generating the settlement letter."
    },
    {
      question: "Do I need a lawyer for IndusInd loan settlement?",
      answer: "It is not mandatory by law, but it is highly recommended. Banks have professional recovery teams. Having a legal expert or a company like CredSettle on your side levels the playing field, stops harassment, and ensures you get the best possible discount without legal loopholes."
    },
    {
      question: "What happens if I miss the settlement payment date?",
      answer: "The settlement agreement is valid only until the due date mentioned in the letter. If you miss the payment, the settlement offer stands cancelled. The bank may then demand the full original amount with added interest. Always pay on time once agreed."
    },
    {
      question: "Are there any hidden charges in settlement?",
      answer: "When dealing directly with the bank, there are usually no hidden charges, but the negotiated amount is final. If you hire a settlement firm like CredSettle, there will be a service fee which is a percentage of the savings we get you."
    },
    {
      question: "Can I settle a secured loan like a car loan?",
      answer: "Settling secured loans is very difficult because the bank has the right to seize the asset (car or property) to recover dues. Settlement is mostly for unsecured loans like personal loans and credit cards."
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
                    IndusInd Bank
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Introduction to IndusInd Bank Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Financial instability is a storm that can hit anyone without warning. One moment, your finances are in order, and the next, a job loss, a medical emergency, or a sudden business failure throws everything into chaos. If you are currently staring at a mountain of unpaid dues from <strong>IndusInd Bank</strong>—be it a personal loan that has gone bad or a credit card limit that has been maxed out—you are likely feeling the crushing weight of stress.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The constant barrage of calls from recovery agents, the fear of legal notices, and the anxiety about your financial future can be paralyzing. However, it is crucial to understand that <strong>you are not a criminal</strong>; you are simply a borrower going through a tough time. The Indian banking system, including IndusInd Bank, recognizes that genuine defaults happen. To address this, there is a legal, structured, and regulated exit route known as <strong>Loan Settlement</strong> or <strong>One Time Settlement (OTS)</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                IndusInd Bank is one of the leading private sector banks in India, known for its aggressive lending in both consumer and vehicle finance segments. While they are strict about collections, they are also pragmatic. They understand that recovering a partial amount is better than strictly pursuing a "bad debt" that might never be recovered. This opens a window of opportunity for you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                This comprehensive guide by <strong>CredSettle</strong> is designed to be your playbook. We will walk you through the nitty-gritty of the IndusInd Bank settlement process, demystify the legal jargon, explain your rights against harassment, and show you how to save up to <strong>50% or more</strong> on your outstanding dues.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">The CredSettle Assurance</h4>
                <p className="text-blue-800 m-0">
                  Debt is not the end of the road. With the right legal strategy and negotiation, you can close your IndusInd loan account, stop the harassment immediately, and start rebuilding your financial life. We have handled thousands of such cases successfully.
                </p>
              </div>

              <h2 id="understanding-ots" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding the OTS (One Time Settlement) Scheme</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>One Time Settlement (OTS)</strong> scheme is a mechanism used by banks to recover non-performing assets (NPAs). In simple terms, it is a deal where the bank agrees to accept a lump sum payment that is significantly lower than the total amount you owe, and in return, they agree to close your loan account permanently.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                But why would a bank agree to take a loss? To understand this, you need to look at it from the bank's perspective. When you stop paying your EMIs, your loan account goes through different stages of classification as per RBI guidelines:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li><strong>SMA-0 (Special Mention Account 0):</strong> Payment overdue for 1-30 days.</li>
                <li><strong>SMA-1:</strong> Payment overdue for 31-60 days. Calls from the bank start increasing.</li>
                <li><strong>SMA-2:</strong> Payment overdue for 61-90 days. The pressure intensifies.</li>
                <li><strong>NPA (Non-Performing Asset):</strong> Payment overdue for <strong>90+ days</strong>. This is the critical turning point.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Once your account becomes an NPA, IndusInd Bank has to set aside its own money (provisioning) to cover the potential loss, which hurts their profitability. Furthermore, maintaining a bad loan on their books involves administrative costs, legal fees, and the expense of hiring recovery agencies.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Economics of 'Sacrifice'</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When a settlement is negotiated, the bank calculates a "sacrifice amount"—the difference between what you owe and what you pay. They are willing to make this sacrifice because:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li><strong>Time Value of Money:</strong> Receiving ₹2 Lakhs today is often better for the bank than fighting a court case for 5 years to potentially recover ₹4 Lakhs.</li>
                <li><strong>Clean Balance Sheet:</strong> Banks are under pressure to reduce their Gross NPA ratios. diverse settlements help them clean up their books.</li>
                <li><strong>Cost of Recovery:</strong> Legal action is expensive and uncertain. Settlement is guaranteed recovery.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                For you, this means that once your account is an NPA, you are in a position to negotiate. The bank is no longer expecting the full profit; they are looking to minimize their loss. This is where an expert negotiator can drive a hard bargain.
              </p>

              <h2 id="eligibility-criteria" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility Criteria for Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                IndusInd Bank does not offer settlement to everyone. If they believe you have the money but are simply refusing to pay (Willful Defaulter), they will pursue legal action aggressively. To qualify for settlement, you must fit the profile of a "genuine defaulter."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">1. The NPA status</h4>
                  <p className="text-gray-600 text-sm">Usually, settlement discussions become viable only after the account has been classified as NPA (90 days overdue). Pre-NPA settlements are rare and offer lower discounts.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">2. Unsecured Loans Only</h4>
                  <p className="text-gray-600 text-sm">Personal Loans, Credit Cards, and unsecured Business Loans are eligible. Car Loans or Home Loans are usually not eligible as the bank can repossess the asset.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Common Scenarios Accepted for Settlement</h3>
              <div className="space-y-6 mb-10">
                <div className="bg-white border-l-4 border-green-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900">Scenario 1: Job Loss or Pay Cut</h4>
                  <p className="text-gray-700 mt-1">If you have lost your job and have been unemployed for months, or if you were forced to take a significant salary cut, you can use your termination letter or bank statements as proof. IndusInd Bank is generally receptive to these cases.</p>
                </div>
                <div className="bg-white border-l-4 border-green-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900">Scenario 2: Medical Emergency</h4>
                  <p className="text-gray-700 mt-1">A severe illness in the family that drained your savings is a valid ground. Medical reports and hospital bills serve as strong evidence to justify your inability to pay.</p>
                </div>
                <div className="bg-white border-l-4 border-green-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900">Scenario 3: Business Failure</h4>
                  <p className="text-gray-700 mt-1">For self-employed individuals, a GST return showing a drop in turnover or closure of a shop/business is accepted as proof of hardship.</p>
                </div>
              </div>

              <h2 id="minimum-due-trap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The "Minimum Amount Due" Trap</h2>
              <div className="bg-red-50 p-6 rounded-2xl mb-8 border border-red-100">
                <h3 className="text-red-800 font-bold text-xl mb-3">⚠️ Critical Warning for Credit Card Users</h3>
                <p className="text-red-700 mb-4">
                  If you hold an IndusInd Bank Credit Card, you might be tempted to pay only the "Minimum Amount Due" (MAD) shown on your statement, thinking you are safe. <strong>This is a financial trap.</strong>
                </p>
                <ul className="list-disc pl-5 text-red-700 space-y-2">
                  <li><strong>Interest Compounding:</strong> Paying the minimum due does NOT clear your principal. It only keeps your card active. The remaining balance attracts interest at 3.5% to 4% per month (approx 42-48% per annum).</li>
                  <li><strong>GST on Interest:</strong> You also pay 18% GST on this interest component.</li>
                  <li><strong>The Debt Spiral:</strong> Within a year, your outstanding can double even if you keep paying the minimum due.</li>
                </ul>
                <p className="text-red-700 mt-4 font-semibold">
                  If you are stuck in this loop, stop paying the minimums immediately. It is better to stop payments, face the temporary collections pressure, and settle the card for a fraction of the total outstanding. Do not burn your hard-earned money on interest that never reduces your debt.
                </p>
              </div>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The IndusInd Bank Settlement Process: A Step-by-Step Guide</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling a loan is a strategic process. It is akin to a chess game where you need to make the right moves at the right time. Here is how CredSettle handles the process for you:
              </p>

              <div className="space-y-8 mb-12">
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Stop the Bleeding & Handle Harassment</h4>
                  <p className="text-gray-700">
                    The moment you default, recovery agents will start calling. They may use intimidation tactics.
                    <br/><strong>Your Right:</strong> As per RBI guidelines, agents cannot call before 8 AM or after 7 PM. They cannot use abusive language.
                    <br/><strong>Our Action:</strong> We activate our <strong>anti-harassment protocol</strong>. We route calls to our legal team and file complaints against aggressive agents. This gives you immediate mental peace.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Analyzing the "True" Liability</h4>
                  <p className="text-gray-700">
                    The bank's statement will show a highly inflated figure including penal interest, late fees, and cheque bounce charges.
                    <br/><strong>Our Action:</strong> We strip away these illegal or excessive charges to arrive at the real principal outstanding. This is our baseline for negotiation.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Submitting the Settlement Proposal</h4>
                  <p className="text-gray-700">
                    We draft a formal proposal to IndusInd Bank's regional collection manager. This letter clearly outlines your financial hardship with evidence and proposes a realistic settlement amount.
                    <br/><strong>Insider Tip:</strong> Never quote your best offer first. Negotiation is expected.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Negotiation Rounds</h4>
                  <p className="text-gray-700">
                    The bank will reject the first offer and demand 80-90% of the dues. This is standard. We engage in multiple rounds of negotiation, leveraging the age of the NPA and your inability to pay.
                    <br/><strong>Target:</strong> We aim for a waiver of 100% of the interest/penalties and a discount on the principal, typically saving you 40-50% of the total claim.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">The Settlement Letter (Crucial Step)</h4>
                  <p className="text-gray-700">
                    Once the amount is agreed, IndusInd Bank will issue an official <strong>Settlement Letter</strong>.
                    <br/><strong>Warning:</strong> Never pay a single rupee without this letter. We verify the letter to ensure it clearly states that upon payment of ₹X amount, the entire loan is "fully and finally settled" with no future liability.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Closure and No Dues Certificate</h4>
                  <p className="text-gray-700">
                    You make the payment directly to your loan account (never to an agent's personal account). Within 15-20 days, the bank issues a <strong>No Dues Certificate (NDC)</strong>. We ensure you get this document as it is your proof of freedom.
                  </p>
                </div>
              </div>

              <h2 id="legal-action" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Legal Action & Arbitration: What You Need to Know</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Recovery agents often threaten borrowers with "Police Case," "Jail," or "Court Warrants." It is essential to separate fact from fiction. Here is the legal reality of defaulting on an IndusInd Bank loan:
              </p>

              <div className="grid gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">1. Section 138 (Cheque Bounce)</h4>
                  <p className="text-gray-700">
                    If you gave post-dated cheques or had an ECS setup that bounced, the bank can file a case under Section 138 of the Negotiable Instruments Act. This is a criminal offense but is <strong>bailable</strong>.
                    <br/><span className="text-blue-600 font-semibold">Our Strategy:</span> If a 138 notice is received, our lawyers can appear in court and request time or mediation. The court usually encourages settlement in these matters.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">2. Payment and Settlement Systems Act (Section 25)</h4>
                  <p className="text-gray-700">
                    Similar to cheque bounce, this applies when electronic fund transfers (NACH/ECS) fail due to insufficient funds. It carries similar legal weight to Section 138 and is also compoundable (can be settled).
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">3. Arbitration Proceedings</h4>
                  <p className="text-gray-700">
                    Most loan agreements have an arbitration clause. IndusInd Bank may appoint an arbitrator to pass an award against you. These proceedings often happen in major cities like Mumbai or Delhi, making it hard for out-of-station borrowers to attend.
                    <br/><span className="text-blue-600 font-semibold">Our Strategy:</span> We represent you in these arbitration proceedings or challenge ex-parte awards, ensuring that the bank cannot get a one-sided order to attach your assets.
                  </p>
                </div>
              </div>

              <h2 id="lok-adalat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Settlement via Lok Adalat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Lok Adalat</strong> (People's Court) is one of the most effective forums for settling bank disputes. It is organized by the legal services authority to resolve cases amicably.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If your case is pending in court or even at the pre-litigation stage, you can request for it to be referred to the Lok Adalat. The biggest advantage here is that the decree passed by the Lok Adalat is final and binding, and there is no appeal.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                CredSettle often utilizes the National Lok Adalats to speed up settlements with IndusInd Bank. The environment in a Lok Adalat is conciliatory, not adversarial, and bank officials often come with pre-approved mandates to offer good discounts to close cases on the spot.
              </p>

              <h2 id="documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Documents Required for Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To process your settlement request effectively, you will need to provide certain documentation. Having these ready can speed up the process:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
                <li><strong>Loan Account Statement:</strong> To verify the exact dues and last payment date.</li>
                <li><strong>KYC Documents:</strong> Pan Card and Aadhar Card (Self-attested).</li>
                <li><strong>Hardship Proof (The "Sob Story" Evidence):</strong>
                  <ul className="list-disc pl-6 mt-2 text-gray-600">
                    <li>Termination letter or resignation acceptance.</li>
                    <li>Medical records or discharge summaries.</li>
                    <li>Bank statements of the last 6 months showing low balance.</li>
                    <li>Death certificate (in case of primary earner's demise).</li>
                  </ul>
                </li>
                <li><strong>Notices Received:</strong> Copies of any legal notices or demand letters sent by the bank.</li>
              </ul>

              <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on Credit Score: The Reality Check</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe in total transparency. Choosing settlement <strong>will</strong> impact your CIBIL score.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you pay off a loan fully, your report shows <strong>"Closed"</strong>. When you settle, it shows <strong>"Settled"</strong>. This flag tells future lenders that you did not repay the full amount. Your score may drop by 50-100 points depending on your history.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Silver Lining</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                A "Settled" status is infinitely better than "Written Off" or "Wilful Default".
                <br/>
                Once settled, the "Days Past Due" counter stops. Your score stops bleeding. You can then immediately start rebuilding your score. CredSettle offers a specific <strong>Credit Rebuilding Program</strong> where we guide you on how to get a secured credit card or a small gold loan to start overwriting your negative history with positive payment tracks. Within 12-18 months, you can be back in the green zone (750+).
              </p>

              <h2 id="benefits-risks" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Benefits and Risks of Settlement</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
                    Why You Should Settle
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li><strong>Debt Freedom:</strong> Nothing beats the feeling of being debt-free. Sleep better at night.</li>
                    <li><strong>End Harassment:</strong> The calls stop. The visits stop. The stress ends.</li>
                    <li><strong>Avoid Court:</strong> Settlement puts an end to Section 138 and arbitration cases.</li>
                    <li><strong>Huge Savings:</strong> Save lakhs of rupees on interest and penalties.</li>
                    <li><strong>Fresh Start:</strong> It allows you to focus on your career and family instead of worrying about EMIs.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <span className="bg-red-100 p-1 rounded-full mr-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></span>
                    Points to Consider
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li><strong>Credit Score Hit:</strong> It will be harder to get an unsecured loan for 1-2 years.</li>
                    <li><strong>Blacklist:</strong> IndusInd Bank will likely blacklist you. You won't be able to get a loan from them again.</li>
                    <li><strong>One Shot Payment:</strong> You need to arrange the settlement amount (Lump Sum). Banks rarely allow EMIs on OTS.</li>
                    <li><strong>Tax Implications:</strong> In rare corporate cases, the waived amount can be treated as income, though this rarely applies to personal individual loans.</li>
                  </ul>
                </div>
              </div>

              {/* Review Snippets */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Client Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                      <div className="text-sm opacity-80">Vikram Singh</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"My IndusInd credit card bill was huge. These guys helped me settle it for just 40% of the total amount. Very professional."</p>
                    <div className="text-xs text-gray-400 mt-2 text-right">October 2025</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                      <div className="text-sm opacity-80">Meera K.</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I was getting threatening calls daily. CredSettle took over and the calls stopped. I am finally debt free now."</p>
                    <div className="text-xs text-gray-400 mt-2 text-right">November 2025</div>
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
                
                {/* Additional FAQs for more content depth */}
                <div className="border-b border-gray-100 pb-4 last:border-0">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Can IndusInd Bank recovery agents come to my office?</h3>
                  <p className="text-gray-600">While agents can visit you, they must respect your privacy. They cannot enter your workspace without permission, create a scene, or talk to your colleagues about your debt. If they do, it is a violation of RBI guidelines and you can file a complaint.</p>
                </div>
                 <div className="border-b border-gray-100 pb-4 last:border-0">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Can police arrest me for credit card default?</h3>
                  <p className="text-gray-600">No. Defaulting on a loan or credit card is a civil dispute, not a criminal offense. Police cannot arrest you for non-payment of debt. However, if a cheque bounce case (Section 138) is filed and you ignore court summons, a warrant can be issued for non-appearance.</p>
                </div>
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Struggling with IndusInd Loan?</h4>
                <p className="text-sm text-gray-600 mb-6">Get expert legal advice and save up to 50% on dues.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Talk to Expert
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ No Upfront Fees</p>
                  <p className="mt-1">✓ Privacy Guaranteed</p>
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
                    <Link href="/loan-settlement/sbi" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      SBI Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/kotak" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Kotak Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/icici" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      ICICI Settlement
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
