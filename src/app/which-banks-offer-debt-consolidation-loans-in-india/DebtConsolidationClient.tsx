'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function DebtConsolidationClient() {
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

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive 
          ? 'border-blue-600 text-blue-600 font-semibold' 
          : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'what-is-it', label: 'What is Debt Consolidation?' },
    { id: 'top-banks', label: 'Top Banks in India' },
    { id: 'benefits', label: 'Key Benefits' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'documentation', label: 'Required Documents' },
    { id: 'process', label: 'How to Apply' },
    { id: 'pitfalls', label: 'Common Pitfalls' },
    { id: 'settlement-vs-consolidation', label: 'Settlement vs Consolidation' },
    { id: 'reviews', label: 'Client Success Stories' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Which bank is best for a debt consolidation loan in India?',
      answer: 'The "best" bank depends on your specific credit profile and income. However, HDFC Bank, ICICI Bank, and SBI are frequently cited for their competitive interest rates and structured personal loan products that can be used for consolidation. It is essential to compare the processing fees and foreclosure charges before making a final decision.'
    },
    {
      question: 'Can I consolidate my credit card debt with a bank loan in India?',
      answer: 'Yes, most banks allow you to take a personal loan to pay off your outstanding credit card dues. This is often a smart move because personal loan interest rates (typically 11% to 18%) are much lower than credit card interest rates, which can exceed 40% per year.'
    },
    {
      question: 'Does debt consolidation affect my CIBIL score?',
      answer: 'Initially, applying for a new loan may cause a small dip in your score due to the hard inquiry. However, in the long term, consolidating high-interest debt into a single, manageable EMI and paying it off on time will significantly improve your credit score by reducing your credit utilization and establishing a positive payment history.'
    },
    {
      question: 'What is the minimum salary required for a debt consolidation loan?',
      answer: 'Most major banks in India require a minimum monthly net salary of ₹25,000 for salaried individuals. Some NBFCs and fintech lenders may offer loans to individuals with a lower income, but the interest rates might be higher.'
    },
    {
      question: 'Is it better to settle a loan or consolidate it?',
      answer: 'Consolidation is generally better for your credit score because it involves paying off your debt in full using a new loan. Debt settlement involves negotiating to pay less than what you owe, which can leave a negative remark on your credit report. However, if you are in a severe financial crisis and cannot afford any EMIs, settlement might be your only viable option.'
    },
    {
      question: 'Can I get a debt consolidation loan if I am a CIBIL defaulter?',
      answer: 'It is very difficult to get a traditional bank loan if you have a "defaulter" status on your CIBIL report. Banks prefer candidates with a score of 750 or above. In such cases, you might need to look at secured loans (like a loan against property) or seek professional help from services like CredSettle to resolve your existing defaults first.'
    },
    {
      question: 'How long does the approval process take for these loans?',
      answer: 'Digital-first banks and fintech lenders can provide "instant" approval within minutes and disburse funds within 24 to 48 hours. Traditional public sector banks may take 5 to 7 working days to complete the physical verification and documentation process.'
    },
    {
      question: 'Are there any hidden charges in debt consolidation loans?',
      answer: 'You should look out for processing fees (usually 1% to 3% of the loan amount), documentation charges, stamp duty, and foreclosure or prepayment penalties. Always read the fine print of the loan agreement to understand the total cost of borrowing.'
    },
    {
      question: 'Can I consolidate loans from different banks?',
      answer: 'Yes, a debt consolidation loan is essentially a new personal loan that you use to pay off your existing debts, regardless of which bank or NBFC they are with. You can combine credit cards from HDFC, a personal loan from ICICI, and an app loan into one single loan from a new lender.'
    },
    {
      question: 'What happens if I miss an EMI on my consolidated loan?',
      answer: 'Missing an EMI will lead to late payment fees and a negative impact on your credit score. It may also trigger recovery actions from the bank. Since the goal of consolidation is to make your debt more manageable, it is crucial to ensure that the new EMI fits comfortably within your monthly budget.'
    },
    {
      question: 'Can I use a Gold Loan for debt consolidation?',
      answer: 'Yes, a Gold Loan is one of the fastest ways to consolidate debt in India. Since it is a secured loan, the interest rates are often lower than unsecured personal loans, and the eligibility criteria are much more relaxed regarding your credit score.'
    },
    {
      question: 'What is a Balance Transfer facility?',
      answer: 'Many banks offer a "Personal Loan Balance Transfer" where they take over your existing loan from another bank at a lower interest rate. This is a form of debt consolidation specifically for moving one large loan to a more affordable lender.'
    }
  ];

  return (
    <>
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
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Debt Consolidation Loans in India
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-12">
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

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Guide Sections</h3>
                <nav className="space-y-3 text-sm">
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

          <div className="lg:w-3/5 w-full">
            <article className="prose prose-blue max-w-none bg-white p-8 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Navigating the World of Debt Consolidation Loans in India: Your Path to Financial Freedom</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  In the rapidly evolving financial landscape of India, managing multiple credit cards, personal loans, and short term debts can quickly become a logistical and financial nightmare. As the cost of living rises and the ease of obtaining credit through digital apps increases, many hard working Indians find themselves juggling various EMIs with different interest rates and due dates. This constant cycle of payments can lead to immense stress, late fees, and a deteriorating credit score. This is where the concept of <strong>debt consolidation loans in India</strong> becomes a vital lifeline for those looking to regain control of their economic life.
                </p>
                <p>
                  Debt consolidation is more than just a financial strategy; it is a way to simplify your life. Imagine replacing five different monthly payments with a single, lower interest EMI that fits comfortably within your budget. By understanding <strong>which banks offer debt consolidation loans in India</strong>, you can make an informed choice that saves you thousands of rupees in interest charges over the long run. Whether you are dealing with high interest credit card debt or multiple personal loans from various lenders, consolidation provides a structured and efficient path toward becoming debt free.
                </p>
                <p>
                  The Indian banking sector, led by giants like HDFC, ICICI, and the State Bank of India, has recognized the need for specialized consolidation products. While you might not always find a product explicitly labeled as a "Debt Consolidation Loan," many banks offer personal loans or balance transfer facilities designed specifically for this purpose. In this comprehensive guide, we will explore the various options available, the eligibility criteria you need to meet, and how to navigate the application process to ensure you get the best possible deal. Our goal is to provide you with the knowledge needed to rank your financial health as your number one priority.
                </p>
                <p>
                  At CredSettle, we believe that every individual deserves a second chance at financial stability. Debt can feel like an insurmountable wall, but with the right tools and information, that wall can be dismantled brick by brick. This guide is designed to be your roadmap, helping you understand the nuances of the Indian credit market and empowering you to make decisions that will lead to a brighter, debt free future. Let us dive deep into the world of debt consolidation and discover how you can transform your financial burdens into a manageable and successful repayment plan.
                </p>
              </div>

              <h2 id="what-is-it" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Fundamentals: What Exactly is a Debt Consolidation Loan?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  At its core, debt consolidation is the process of taking out one large loan to pay off several smaller ones. In the context of the Indian market, this typically means taking a personal loan with a lower interest rate to clear your outstanding credit card balances, small app based loans, and other high cost obligations. Instead of dealing with multiple creditors, you now owe money to only one lender, usually a bank or a reputable Non Banking Financial Company (NBFC).
                </p>
                <p>
                  The primary driver for debt consolidation is the difference in interest rates. Credit cards in India often charge upwards of 36% to 48% per annum on unpaid balances. In contrast, a well structured personal loan for debt consolidation might carry an interest rate ranging from 10.5% to 18%. By moving your debt from a high interest environment to a lower one, you significantly reduce the "cost of debt," allowing more of your monthly payment to go toward the principal amount rather than just the interest.
                </p>
                <p>
                  There are two main types of debt consolidation options in India:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Unsecured Personal Loans:</strong> These are the most common. You do not need to provide any collateral. The bank evaluates your income and CIBIL score to determine the loan amount and interest rate.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. Secured Loans (Loan Against Property/Gold):</strong> If your debt is very high or your credit score is low, you might opt for a secured loan. By providing an asset like your home or gold as collateral, you can access much lower interest rates and higher loan amounts.
                  </li>
                </ul>
                <p>
                  It is important to remember that debt consolidation does not erase your debt; it simply reorganizes it. The success of this strategy depends entirely on your discipline. Once your high interest credit cards are paid off, you must resist the urge to use them again and accumulate new debt. The goal is to use the consolidated loan as a bridge to a debt free life, not as an excuse to continue living beyond your means.
                </p>
              </div>

              <h2 id="top-banks" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Which Banks Offer Debt Consolidation Loans in India? A Comparative Look</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p>
                  Most major financial institutions in India provide products that can be used for consolidation. While public sector banks often offer the lowest interest rates, private sector banks are known for their speed and digital convenience. Let us take a detailed look at the top contenders.
                </p>
                
                <h3 className="text-2xl font-bold text-blue-900">1. HDFC Bank: The Market Leader in Personal Credit</h3>
                <p>
                  HDFC Bank is often the first choice for many Indians looking for personal credit. Their personal loan product is highly flexible and can be used to consolidate everything from credit card dues to existing personal loans. HDFC offers competitive interest rates, especially for their existing "preferred" customers. Their "Diva" and "Jumbo" loan variants often provide higher limits that are ideal for consolidating large amounts of debt. The digital application process is incredibly smooth, with pre-approved customers receiving funds almost instantly.
                </p>

                <h3 className="text-2xl font-bold text-blue-900">2. ICICI Bank: Speed and Digital Excellence</h3>
                <p>
                  ICICI Bank stands out for its technological integration. Their "iMobile" app allows users to check their eligibility and apply for a consolidation loan in minutes. ICICI often provides a "Personal Loan Balance Transfer" facility, which is specifically designed to help you move high interest loans from other banks to ICICI at a lower rate. This is a direct and effective form of debt consolidation that many customers in urban India utilize to reduce their monthly EMI burden.
                </p>

                <h3 className="text-2xl font-bold text-blue-900">3. State Bank of India (SBI): The Trust of the Nation</h3>
                <p>
                  For those who prioritize low interest rates over everything else, SBI is the gold standard. Their "Xpress Credit" personal loan is one of the most affordable in the market. SBI is particularly beneficial for government employees and those working in reputed corporate entities. While the documentation process might be slightly more rigorous than private banks, the long term savings on interest make it a highly attractive option for consolidating multiple debts.
                </p>

                <h3 className="text-2xl font-bold text-blue-900">4. Axis Bank: Tailored Solutions for Urban Professionals</h3>
                <p>
                  Axis Bank offers specialized personal loans that cater to the needs of modern professionals. Their focus on digital banking and quick approvals makes them a strong competitor in the consolidation space. Axis Bank often provides flexible repayment tenures, ranging from 12 to 60 months, allowing you to choose an EMI that fits your specific financial situation. Their transparency regarding fees and charges is also appreciated by many customers.
                </p>

                <h3 className="text-2xl font-bold text-blue-900">5. Kotak Mahindra Bank: Competitive and Customer Centric</h3>
                <p>
                  Kotak Mahindra Bank has gained a significant market share by offering highly competitive personal loan products. They often run special campaigns for debt consolidation, providing lower processing fees and attractive interest rates. Their customer service is generally rated well, and they offer a variety of tools on their website to help you calculate your potential savings through consolidation.
                </p>
              </div>

              <h2 id="benefits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Strategic Advantages of Consolidating Your Debt</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Why should you consider a debt consolidation loan? The benefits go far beyond just saving a few hundred rupees. It is about a fundamental shift in how you manage your finances.
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>Substantial Interest Savings:</strong> This is the most immediate benefit. Moving debt from 40% interest credit cards to a 14% personal loan can save you lakhs of rupees over a 3 to 5 year period. This extra money can then be used to pay down the principal faster or build an emergency fund.
                  </li>
                  <li>
                    <strong>Streamlined Financial Management:</strong> Managing one due date is infinitely easier than managing five. You no longer have to worry about missing a payment because you forgot the specific due date of one particular credit card. This reduces the risk of late fees and penalty interest.
                  </li>
                  <li>
                    <strong>Fixed Repayment Schedule:</strong> Credit cards often encourage "minimum amount due" payments, which can keep you in debt for decades. A consolidation loan has a fixed tenure. You know exactly when you will be debt free if you make your EMIs on time.
                  </li>
                  <li>
                    <strong>CIBIL Score Improvement:</strong> By paying off multiple creditors, you reduce your "credit utilization ratio" on your credit cards. Over time, as you consistently pay your single new EMI, your credit score will reflect your improved financial discipline, making it easier to get larger loans in the future.
                  </li>
                  <li>
                    <strong>Reduced Mental Stress:</strong> The psychological burden of being hounded by multiple collection departments can be debilitating. Consolidating your debt provides a sense of clarity and a clear finish line, significantly improving your mental well being.
                  </li>
                </ul>
              </div>

              <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Am I Eligible? Understanding Bank Requirements in India</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Banks in India are cautious lenders. To qualify for a <strong>debt consolidation loan</strong> at a good interest rate, you typically need to meet several criteria. While each bank has its own internal policies, the following are the industry standards:
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <ul className="list-none space-y-4">
                    <li>
                      <strong>1. Credit Score (CIBIL):</strong> A score of 750 or higher is ideal. If your score is below 700, you might still get a loan, but the interest rate will be significantly higher.
                    </li>
                    <li>
                      <strong>2. Age:</strong> Most lenders require you to be between 21 and 60 years of age. Some banks may extend this to 65 for certain profiles.
                    </li>
                    <li>
                      <strong>3. Employment Status:</strong> You should ideally be a salaried employee with a reputed private or government organization. Self employed individuals can also apply, but the documentation for income proof is more extensive.
                    </li>
                    <li>
                      <strong>4. Minimum Income:</strong> For residents of metro cities like Delhi or Mumbai, the minimum monthly income is usually ₹25,000. In non-metro cities, it might be slightly lower.
                    </li>
                    <li>
                      <strong>5. Debt to Income Ratio:</strong> Banks look at how much of your current income is going toward existing EMIs. Ideally, your total EMIs (including the new one) should not exceed 40% to 50% of your take home pay.
                    </li>
                  </ul>
                </div>
                <p>
                  If you do not meet these criteria, do not lose hope. You can explore options like adding a co-applicant with a good credit score (like a spouse or parent) or opting for a secured loan. Additionally, working with a debt management service like CredSettle can help you clean up your credit report and improve your eligibility over a few months.
                </p>
              </div>

              <h2 id="documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Paperwork: Essential Documents for a Smooth Application</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To speed up your application for a <strong>debt consolidation loan in India</strong>, you should have a digital folder ready with the following documents. Modern banks often use "Account Aggregator" services to verify your banking details, but physical or PDF copies are still often required.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>KYC Documents:</strong> Aadhaar Card, PAN Card, and a recent passport size photograph.</li>
                  <li><strong>Address Proof:</strong> Passport, Voter ID, or recent utility bills if the address is different from your Aadhaar.</li>
                  <li><strong>Income Proof (Salaried):</strong> Salary slips for the last 3 to 6 months and Form 16 for the latest financial year.</li>
                  <li><strong>Income Proof (Self Employed):</strong> ITR filings for the last 2 years and audited financial statements of the business.</li>
                  <li><strong>Bank Statements:</strong> Bank account statements for the last 6 months showing your salary credits and existing EMI deductions.</li>
                  <li><strong>Existing Debt Details:</strong> Credit card statements and loan sanction letters for all the debts you plan to consolidate. This is crucial for the bank to understand the total loan requirement.</li>
                </ul>
              </div>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Step-by-Step Guide: How to Apply for a Consolidation Loan</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Applying for a loan can be overwhelming, but breaking it down into small steps makes it manageable. Follow this proven path to increase your chances of approval:
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <strong>Audit Your Debt:</strong> List every single debt you have, including the total amount owed, the current interest rate, and the monthly EMI. Calculate the total "consolidated" amount you need.
                    </li>
                    <li>
                      <strong>Check Your Credit Score:</strong> Use free tools to check your CIBIL score. If there are any errors, get them corrected before applying.
                    </li>
                    <li>
                      <strong>Research and Compare:</strong> Don't just apply to the first bank that sends you a marketing SMS. Use comparison websites to check interest rates, processing fees, and foreclosure terms across different banks.
                    </li>
                    <li>
                      <strong>Check with Your Current Bank:</strong> Often, your own "salary account" bank will offer you the best rates and fastest processing because they already have your KYC and income data.
                    </li>
                    <li>
                      <strong>Submit Your Application:</strong> Once you've chosen a lender, submit your documents. Be honest about all your existing debts. Hiding a loan will lead to an immediate rejection because the bank will see it on your credit report anyway.
                    </li>
                    <li>
                      <strong>Verification and Approval:</strong> The bank will conduct a physical or digital verification of your home and office. Once satisfied, they will issue a sanction letter.
                    </li>
                    <li>
                      <strong>Disbursement and Closure:</strong> Once the funds are in your account, immediately pay off all your high interest creditors. It is best to close these accounts and obtain "No Objection Certificates" (NOCs) from each lender to ensure your credit report is updated correctly.
                    </li>
                  </ol>
                </div>
              </div>

              <h2 id="pitfalls" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Avoiding the Trap: Common Pitfalls in Debt Consolidation</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While debt consolidation is a powerful tool, it can backfire if not handled correctly. In the Indian market, we often see borrowers falling into these common traps:
                </p>
                <ul className="list-none space-y-4">
                  <li className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                    <strong>1. Consolidating without a Budget:</strong> If you don't address the underlying spending habits that led to your debt, you will simply end up with a large loan and new credit card balances. Consolidation must be paired with a strict monthly budget.
                  </li>
                  <li className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                    <strong>2. Ignoring the Total Cost:</strong> Sometimes, a lower EMI comes from a much longer loan tenure. This might mean you end up paying more in total interest over the life of the loan. Always look at the "total interest payable" and not just the monthly EMI.
                  </li>
                  <li className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                    <strong>3. Falling for "Easy Credit" Apps:</strong> Avoid consolidating your debt using high interest "instant loan" apps. These often have predatory interest rates and aggressive recovery practices. Stick to regulated banks and reputable NBFCs.
                  </li>
                  <li className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                    <strong>4. Not Closing Old Accounts:</strong> Once you pay off a credit card with your consolidation loan, close the account. Keeping it open with a zero balance is a temptation that many find hard to resist.
                  </li>
                </ul>
              </div>

              <h2 id="settlement-vs-consolidation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Debt Settlement vs. Consolidation: Which Path Should You Take?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  At CredSettle, we often get asked whether one should consolidate their debt or settle it. The answer depends entirely on your financial "breaking point."
                </p>
                <p>
                  <strong>Debt Consolidation</strong> is for those who still have a good credit score and enough income to manage a single, reduced EMI. It is a way to preserve your credit reputation while making repayment easier.
                </p>
                <p>
                  <strong>Debt Settlement</strong>, on the other hand, is for individuals who are in a genuine financial crisis. If you have lost your job, suffered a major medical emergency, or are facing aggressive harassment from recovery agents, consolidation might not be enough. Settlement involves negotiating with your creditors to pay a lump sum that is less than the total amount owed. This provides immediate relief and a way out of the debt cycle, although it does impact your credit score for a period.
                </p>
                <p>
                  CredSettle specializes in both pathways. We help you evaluate your situation and decide whether you should apply to <strong>banks that offer debt consolidation loans in India</strong> or if you need our expert negotiation skills to settle your debts and stop the harassment. Our team of legal and financial experts ensures that whatever path you choose, your rights are protected and you move closer to financial freedom.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Success Stories: How Consolidation Changed Their Lives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was stuck in a credit card debt trap with four different cards. CredSettle guided me on which bank would accept my application. I got a loan from HDFC and consolidated 6 lakhs of debt. My monthly payment dropped from 45k to 18k!"
                  </p>
                  <p className="font-bold text-blue-900">- Ankit Verma, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "After my business faced a slowdown, I had multiple small loans. The advice on this page helped me choose Axis Bank for consolidation. The single EMI is so much easier to track. Highly recommended for anyone feeling overwhelmed."
                  </p>
                  <p className="font-bold text-blue-900">- Meenakshi Iyer, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I didn't know that my SBI salary account could offer such a low rate for debt consolidation. CredSettle's guide opened my eyes to the options. I'm now on my way to being debt free in two years."
                  </p>
                  <p className="font-bold text-blue-900">- Rahul Chatterjee, Kolkata</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The transparency regarding hidden charges was a lifesaver. I avoided a lender with high foreclosure fees thanks to this guide. My CIBIL score has already improved by 40 points!"
                  </p>
                  <p className="font-bold text-blue-900">- Sunita Deshmukh, Pune</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "CredSettle is the only service that truly understands the struggle of the Indian middle class. Their guidance on debt consolidation was professional, empathetic, and effective."
                  </p>
                  <p className="font-bold text-blue-900">- Vikrant Singh, Delhi</p>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-blue-900 text-white rounded-[30px] text-center shadow-2xl overflow-hidden relative">
                <div className="z-10 relative">
                  <h2 className="text-3xl font-bold mb-4">Take Your First Step Toward Debt Freedom</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don't let multiple EMIs control your life. Get expert advice on debt consolidation and settlement today.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Debt Free Journey Now
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>
          </div>

          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Consolidate Today</h4>
                <p className="text-blue-100 mb-6 text-sm">Reduce your interest burden and simplify your life with a single EMI. Our experts can help you choose the right path.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Book a Consultation
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Confidential Advice</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert Financial Planners</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Personalized Strategy</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">What is Loan Settlement?</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Is Settlement a Good Option?</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Impact on CIBIL Score</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Improve Score Post Settlement</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-you-get-a-loan-again-after-settling-a-previous-loan" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Future Loan Eligibility</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Financial Disclaimer: Debt consolidation involves taking on new credit. Please ensure you can afford the repayments before committing to a new loan. CredSettle provides advisory services and does not directly issue loans.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
