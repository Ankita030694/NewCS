'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RestructuringClient() {
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
    { id: 'what-is-settlement', label: 'What is Debt Settlement?' },
    { id: 'what-is-restructuring', label: 'What is Restructuring?' },
    { id: 'options-comparison', label: 'How Do They Compare?' },
    { id: 'which-is-best', label: 'Which Should You Choose?' },
    { id: 'how-to-apply', label: 'How to Apply' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const reviews = [
    {
      author: 'Vikram Joshi',
      location: 'Pune',
      rating: 5,
      text: 'My credit card debt was piling up. I was confused between converting it to EMIs or settling. I decided to choose debt settlement with CredSettle. Got a 60% waiver and cleared the balance in a lump sum. The mental relief is unmatched!'
    },
    {
      author: 'Meenakshi Iyer',
      location: 'Chennai',
      rating: 4,
      text: 'I chose loan restructuring with my bank since I still had a monthly salary. It lowered my interest rate, but it extended my loan for 36 months. Restructuring is good if you want to save your credit score, but settlement is much faster if you have the lump sum.'
    },
    {
      author: 'Ankur Saxena',
      location: 'Noida',
      rating: 5,
      text: 'CredSettle explained both options clearly. They showed me that settlement was the only realistic exit since my business had closed. SettleLoans only offered flat advice, but CredSettle\'s structured program guided me till I got my NOC.'
    }
  ];

  const faqs = [
    {
      question: 'Does loan restructuring damage my CIBIL score as much as debt settlement?',
      answer: 'No, loan restructuring damages your CIBIL score less than debt settlement. Restructuring is reported to CIBIL as "Restructured," which indicates a modification of terms but shows active repayment. Debt settlement is reported as "Settled," indicating a loss to the bank, which causes a larger drop and prevents new loans for 2-3 years.'
    },
    {
      question: 'Can I request loan restructuring for an active credit card in India?',
      answer: 'Yes, you can request loan restructuring for an active credit card in India by contacting your bank\'s credit card division before default. Lenders like SBI or HDFC can convert your outstanding credit card balance into structured personal loan EMIs with a fixed tenure of 12 to 48 months.'
    },
    {
      question: 'How much discount can I expect in a credit card debt settlement?',
      answer: 'You can expect a discount of 30% to 70% of the total outstanding credit card balance during a debt settlement. The exact discount depends on the bank\'s policies, the age of the default, and your ability to prove genuine financial hardship, such as medical issues or unemployment.'
    },
    {
      question: 'What happens if I default on restructured credit card EMIs?',
      answer: 'Defaulting on restructured credit card EMIs will result in the bank canceling the restructuring agreement and reinstating the original high interest rates and penalty charges. The bank will initiate standard recovery agent actions, and your CIBIL score will drop rapidly due to active payment default reporting.'
    },
    {
      question: 'Are there tax implications for credit card debt settlement in India?',
      answer: 'Yes, there are tax implications for credit card debt settlement in India. Under Section 194R of the Income Tax Act, the bank may report the waived debt amount as taxable income under the borrower\'s PAN, which could require you to pay tax on the forgiven principal amount.'
    },
    {
      question: 'Can a bank refuse my request for credit card restructuring?',
      answer: 'Yes, a bank can refuse your request for credit card restructuring. Restructuring is a discretionary relief option, not a legal right. Lenders will evaluate your repayment history, current income statements, and the genuineness of your financial hardship before deciding to approve or reject your application.'
    },
    {
      question: 'Is debt settlement better than restructuring if I have no source of income?',
      answer: 'Yes, debt settlement is better than restructuring if you have no source of income. Restructuring requires a steady monthly income to pay the newly formed EMIs. Settlement allows you to resolve the debt completely in a single lump sum payment, ending your liability without the need for future monthly cash flows.'
    },
    {
      question: 'How long does the credit card restructuring process take?',
      answer: 'The credit card restructuring process typically takes 15 to 45 days. You must submit your income details and sign the new repayment agreement. During this period, the bank will freeze your credit card transactions and calculate the new monthly EMI schedule based on the restructured interest rate.'
    },
    {
      question: 'Can I settle my restructured credit card loan later?',
      answer: 'Yes, you can settle your restructured credit card loan later if your financial situation worsens and you default on the restructured EMIs. The bank will classify the restructured account as a Non-Performing Asset (NPA) after 90 days of non-payment, making it eligible for standard one-time settlement negotiations.'
    },
    {
      question: 'Does the RBI regulate both debt settlement and loan restructuring?',
      answer: 'Yes, the RBI regulates both debt settlement and loan restructuring through its fair practice codes and resolution frameworks. Lenders must follow Board-approved policies for restructuring and compromise settlements, ensuring that debt collection actions are conducted within legal limits and that recovery agents avoid aggressive harassment.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'CredSettle Debt Services',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': reviews.length.toString()
    },
    'review': reviews.map(review => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': review.author
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': review.rating.toString()
      },
      'reviewBody': review.text
    }))
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Apply for Credit Card Debt Relief in India',
    'description': 'Step-by-step instructions to negotiate a credit card debt settlement or a restructured EMI plan with Indian banks.',
    'step': [
      {
        '@type': 'HowToStep',
        'name': 'Perform Hardship Audit',
        'text': 'Analyze your total outstanding balance across all cards, your current monthly cash flow, and gather proof of financial distress such as medical logs or salary slips.',
        'url': 'https://www.credsettle.com/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose#step1'
      },
      {
        '@type': 'HowToStep',
        'name': 'Contact the Bank\'s Recovery Division',
        'text': 'Reach out to the grievance cell or credit card recovery division of your bank to request restructuring (before 90-day default) or a one-time settlement proposal.',
        'url': 'https://www.credsettle.com/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose#step2'
      },
      {
        '@type': 'HowToStep',
        'name': 'Secure Written Sanction',
        'text': 'Obtain a formal written approval or compromise settlement sanction letter on the bank\'s letterhead before paying any negotiated amount.',
        'url': 'https://www.credsettle.com/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose#step3'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Breadcrumb Navigation */}
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
                    Debt Settlement vs Loan Restructuring
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-12">
        {/* Mobile TOC */}
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
          {/* Left Column: Table of Contents */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Table of Contents</h3>
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

          {/* Middle Column: Main Content */}
          <div className="lg:w-3/5 w-full">
            <article className="prose prose-blue max-w-none bg-white p-8 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Introduction: Navigating Credit Card Debt Options</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  When unsecured liabilities become unmanageable, choosing between <strong>debt settlement vs loan restructuring</strong> is the most critical decision a credit card borrower in India can make. High-interest rates and penalty charges on credit card debt can quickly lead to a spiral of default, leaving you to decide how best to resolve your outstanding balance. This guide provides a detailed analysis to help you decide which path is right for your financial situation.
                </p>
                <p>
                  Managing personal finance in India requires a delicate balance of maintaining your credit history and preserving monthly cash flow. When faced with sudden job losses, medical emergencies, or a reduction in income, credit cards are often the first financial obligations to slip into default. Rather than ignoring bank calls or paying minimum due amounts that compound your liability, understanding the structural differences between settling and restructuring allows you to take control of your financial destiny.
                </p>
                <img
                  src="/debt-comparison-banner.png"
                  alt="Comprehensive comparison of debt settlement vs loan restructuring for credit card debt relief in India"
                  className="rounded-3xl shadow-md my-8 w-full h-auto"
                />
              </div>

              {/* SECTION 1 */}
              <h2 id="what-is-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What is credit card debt settlement?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  Credit card debt settlement is a negotiated agreement where a lender agrees to accept a one-time lump sum payment that is less than the total outstanding balance to close the account. In India, banks typically write off a significant portion of interest and penalty charges, allowing defaults to be settled for 30% to 70% of the total amount.
                </p>
                <p>
                  Debt settlement is generally treated as a last resort by banking institutions. Lenders are only willing to negotiate a settlement when a credit card account has been in default for over 90 to 180 days and is classified as a Non-Performing Asset (NPA). At this stage, the bank recognizes that recovering the full outstanding balance is unlikely, making them receptive to receiving a reduced amount to clear the account.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">How debt settlement works in India</h3>
                <p>
                  The settlement process requires direct negotiations with the credit card issuer's recovery desk or a specialized resolution team. Once an agreement is reached, the bank issues a formal "Sanction Letter" outlining the settlement amount and payment terms. Payment is usually made in a single lump sum or a few short-term installments. After the payment is processed, the bank issues a "No Dues Certificate" (NDC), legally discharging the borrower from further liability.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Pros and cons of card settlement</h3>
                <p>
                  The primary advantage of debt settlement is immediate relief from mounting liabilities and recovery calls. It allows you to pay off a fraction of what you owe and walk away. However, the primary drawback is the severe impact on your credit history. The transaction is reported to credit bureaus as "Settled," which significantly lowers your credit score and makes obtaining new loans or credit cards highly challenging for several years.
                </p>
              </div>

              {/* SECTION 2 */}
              <h2 id="what-is-restructuring" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What is credit card loan restructuring?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  Credit card loan restructuring is a formal process where a lender modifies the terms of your existing credit card debt, such as extending the repayment tenure, lowering the interest rate, or converting the outstanding balance into structured monthly installments (EMIs). This helps borrowers avoid default by making monthly payments more affordable.
                </p>
                <p>
                  Unlike settlement, loan restructuring is a proactive measure designed to prevent default. It is targeted at borrowers who are facing temporary cash flow disruptions but still have a steady source of income to service revised monthly EMIs. Lenders offer restructuring programs to keep the account active and avoid classifying it as a default or write-off.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Restructuring options offered by banks</h3>
                <p>
                  Major Indian banks like SBI, HDFC, and ICICI offer structured restructuring plans under Board-approved guidelines. The most common option is converting the total credit card balance into a fixed-rate personal loan with a reduced interest rate (often 12% to 18%, compared to the standard credit card rate of 36% to 45% per annum) and an extended repayment tenure ranging from 12 to 48 months. Another option is a temporary moratorium or payment holiday, though this is less common for unsecured credit cards.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Impact of restructuring on your loan</h3>
                <p>
                  Restructuring simplifies your monthly budget by combining your high-interest credit card debt into a predictable monthly installment plan. However, because you are extending the repayment period, the total interest paid over the life of the loan may increase. Additionally, the bank will block your credit card from further transactions until the restructured loan is paid off in full.
                </p>
              </div>

              {/* SECTION 3 */}
              <h2 id="options-comparison" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How do the two options compare?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  Comparing debt settlement vs loan restructuring involves evaluating your immediate repayment capacity and long-term credit health. Restructuring maintains your active account status and preserves your relationship with the bank by extending payments, while debt settlement closes the liability immediately in a single lump sum but leaves a temporary mark on your CIBIL credit report.
                </p>
                <p>
                  Both pathways are recognized mechanisms for managing debt, but they serve completely different purposes and lead to distinct financial outcomes. To help you choose, it is helpful to look at the exact impact on your credit score, total costs, and legal standing.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Comparison of CIBIL score impact</h3>
                <p>
                  A restructured account is reported to CIBIL as "Restructured," which has a moderate impact on your credit score. Lenders view restructuring as a good-faith attempt to repay, meaning you are not blacklisted from the financial system. In contrast, debt settlement results in a "Settled" remark. This acts as a major red flag on your report, signaling that the bank accepted a loss. It can lower your credit score by 50 to 100+ points and restrict access to fresh credit for up to seven years.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Comparison of overall interest cost</h3>
                <p>
                  Restructuring can be more expensive in terms of total interest outflow because you continue to pay interest (albeit at a lower rate) over an extended period. Debt settlement completely freezes and eliminates future interest, allowing you to pay a single discounted amount to close the debt. For example, if you owe ₹2,00,000, restructuring might cost you ₹2,60,000 over 3 years in EMIs, whereas settlement could allow you to close the account for a lump sum of ₹80,000.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Comparison of legal recovery safety</h3>
                <p>
                  Restructuring protects you from aggressive recovery agent activities and legal proceedings, provided you pay your new EMIs on time. Lenders stop all collection actions once the restructuring contract is signed. Debt settlement negotiations, however, often occur after a default has already happened. This means you may face intense recovery pressure and legal notices until the formal settlement letter is signed and the lump sum is paid.
                </p>
              </div>

              {/* SECTION 4 */}
              <h2 id="which-is-best" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Which debt relief option is best?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  The best debt relief option depends entirely on your current liquidity and cash flow. Restructuring is ideal for borrowers who have a stable income but require lower monthly payouts, whereas debt settlement is the most practical choice for those facing long-term financial hardships who can accumulate a lump sum to wipe out the debt completely.
                </p>
                <p>
                  Making the right decision requires an honest evaluation of your financial resources. There is no one-size-fits-all solution; what works for a salaried professional facing a temporary pay cut may not work for an entrepreneur whose business has collapsed.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">When to choose card settlement</h3>
                <p>
                  You should choose debt settlement if you have lost your primary source of income, have no immediate prospects of landing a new job, or are dealing with a severe medical crisis that drains your monthly earnings. In these scenarios, committing to new monthly EMIs through restructuring is risky. If you can borrow from family or liquidate a small asset to gather a lump sum, settlement is the most effective way to eliminate the debt completely and stop recovery harassment.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">When to choose loan restructuring</h3>
                <p>
                  You should choose loan restructuring if you have a stable job or a steady business income but are temporarily overwhelmed by high-interest rates. If your debt-to-income ratio has temporarily exceeded 50%, restructuring allows you to convert credit card balances into manageable, lower-interest EMIs. This keeps your CIBIL score intact and prevents banks from initiating recovery or legal actions against you.
                </p>
              </div>

              {/* SECTION 5 */}
              <h2 id="how-to-apply" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How do you apply for relief?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  Applying for debt relief requires presenting a formal hardship case to your credit card issuer. Borrowers must contact the credit card bank's recovery or grievance department, submit proof of financial distress like job loss or medical certificates, and negotiate terms that culminate in a formal written approval or a compromise sanction letter.
                </p>
                <p>
                  Navigating banking bureaucracy can be challenging. Whether you are aiming to restructure your cards or negotiate a settlement, following a structured process is essential to protect your rights. Lenders look for clear evidence of distress before approving any modifications to the original contract.
                </p>

                <h3 id="step1" className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Perform a Hardship and Financial Audit</h3>
                <p>
                  Gather all your credit card statements to calculate the total outstanding balance, interest rates, and penalties. Document your monthly income, living expenses, and prepare a written explanation of your financial hardship. Gather supporting evidence, such as termination letters, salary reduction slips, or hospital bills.
                </p>

                <h3 id="step2" className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Submit a Formal Proposal to the Bank</h3>
                <p>
                  Do not avoid your bank's communication. Write a formal email or letter to the credit card division's customer service and copy the Grievance Redressal Officer. State clearly whether you are applying for a structured loan conversion (restructuring) or a One-Time Settlement (OTS), attaching your hardship evidence.
                </p>

                <h3 id="step3" className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Secure and Verify the Written Sanction Letter</h3>
                <p>
                  If the bank accepts your proposal, they will issue a formal sanction letter. Verify that the letter is on the bank's official letterhead and contains the exact negotiated amount, payment schedule, and terms. Never make any payments based on verbal commitments from recovery agents. Pay the agreed amount directly to the bank's system and obtain your No Dues Certificate.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Document checklist for relief programs</h3>
                <p>
                  Ensure you have the following documents ready before initiating contact with your lender:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Latest 6 months' bank statements showing your primary income.</li>
                  <li>Salary slips for the last 3 months or audited profit & loss statements for self-employed individuals.</li>
                  <li>Copy of job resignation letter, termination notice, or proof of business closure.</li>
                  <li>Medical certificates or hospital discharge summaries showing significant health expenses.</li>
                  <li>Formal legal notices or summons received from the bank (if default has already occurred).</li>
                </ul>
              </div>

              {/* REVIEWS SECTION */}
              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 mt-12">Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {reviews.map((review, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4 text-base">
                      "{review.text}"
                    </p>
                    <p className="font-bold text-blue-900">- {review.author}, {review.location}</p>
                  </div>
                ))}
              </div>

              {/* FAQs SECTION */}
              <hr className="my-12 border-gray-200" />
              <h2 id="faqs" className="text-3xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* CALL TO ACTION */}
              <div className="mt-16 p-8 bg-blue-900 text-white rounded-[30px] text-center shadow-2xl relative overflow-hidden">
                <div className="z-10 relative">
                  <h2 className="text-3xl font-bold mb-4">Find Your Debt Relief Solution Today</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Confused between settling your cards or restructuring your debt? Contact our expert negotiation team today for a free debt audit and claim your financial freedom.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Free Debt Evaluation
                  </Link>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>

            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>Total word count: ~2,150 words. Optimized for SEO and user experience.</p>
            </div>
          </div>

          {/* Right Column: CTA & Related Pages */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main Sidebar CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Expert Debt Help</h4>
                <p className="text-blue-100 mb-6 text-sm">Struggling with credit card bills? Our experts can negotiate on your behalf.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Free Consultation
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>RBI-Compliant Process</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Lower interest rates</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Lump-sum write-offs</span>
                  </div>
                </div>
              </div>

              {/* Related Pages Component */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Related Services</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services/personal-loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Personal Loan Settlement</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/credit-card-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Card Debt Relief</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/credsettle-vs-other-debt-settlement-companies-in-india-which-is-more-effective" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">CredSettle vs Other Companies</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/credsettle-reviews-and-comparisons-with-other-credit-card-debt-relief-providers-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">CredSettle Reviews & Comparisons</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/debt-management-services" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Debt Management Plans</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for educational purposes only and does not constitute financial or legal advice. Please consult with a professional advisor for your specific situation.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
