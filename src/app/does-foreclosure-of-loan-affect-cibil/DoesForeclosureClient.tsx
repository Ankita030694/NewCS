'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function DoesForeclosureClient() {
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
    { id: 'preclosure-vs-foreclosure', label: 'Foreclosure vs Pre-closure' },
    { id: 'impact-preclosure', label: 'Impact of Pre-closure' },
    { id: 'impact-default', label: 'Impact of Default' },
    { id: 'loan-settlement', label: 'Loan Settlement Reality' },
    { id: 'improving-score', label: 'Improving CIBIL Score' },
    { id: 'financial-discipline', label: 'Financial Discipline' },
    { id: 'importance-noc', label: 'Role of NOC' },
    { id: 'new-credit', label: 'Managing New Credit' },
    { id: 'resources', label: 'Helpful Resources' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Does paying off a loan early affect my CIBIL score negatively?',
      answer: 'Initially, you might see a small dip in your score because a long-running credit account is closed, which reduces your average credit age. However, this is temporary. In the long run, having one less debt on your profile and a record of successful full repayment is viewed positively by lenders.'
    },
    {
      question: 'How long does a "settled" status stay on my CIBIL report?',
      answer: 'A "settled" status usually remains on your credit report for seven years. This indicates to future lenders that you did not pay the full amount you owed, which can make getting new loans or credit cards more difficult and expensive.'
    },
    {
      question: 'Can I change my CIBIL status from "settled" to "closed"?',
      answer: 'Yes, you can do this by paying the remaining balance (the "haircut" or discount you received during settlement) to the bank. Once you pay the full amount, the bank will issue a No Dues Certificate and update the bureau to change the status to "closed," which is much better for your score.'
    },
    {
      question: 'What is the fastest way to improve CIBIL score after a default?',
      answer: 'The fastest way is to clear any outstanding dues and ensure all current bills are paid exactly on time. Using a secured credit card (against a fixed deposit) and maintaining low utilization (below 30%) is one of the most effective ways to build a new positive history quickly.'
    },
    {
      question: 'Does a foreclosure by the bank ruin my credit score forever?',
      answer: 'No, nothing is forever in credit scoring. While a foreclosure due to default is a major negative event that can drop your score by over 100 points, its impact reduces over time as you build new, positive credit habits. After 7 years, most negative records fall off the report entirely.'
    },
    {
      question: 'Is it better to settle a loan or let it go into foreclosure?',
      answer: 'Both are negative, but settlement is generally slightly better because it shows you made an effort to resolve the debt partially. A full foreclosure usually implies a complete breakdown of the repayment process. However, the best option is always to repay in full if possible.'
    },
    {
      question: 'How much does a credit utilization ratio affect my score?',
      answer: 'It is a major factor. Experts recommend keeping your credit card usage below 30% of your total limit. If you use 90% of your limit every month, it signals to lenders that you are "credit hungry" and high-risk, which lowers your score.'
    },
    {
      question: 'Will checking my own CIBIL score reduce it?',
      answer: 'No, checking your own score is a "soft inquiry" and does not affect your score at all. In fact, you should check it regularly to ensure there are no errors. Only "hard inquiries" made by banks when you apply for a loan can slightly lower your score.'
    },
    {
      question: 'What documents should I keep after closing a loan?',
      answer: 'You must always keep the No Objection Certificate (NOC) or No Dues Certificate issued by the bank. Also, keep the final statement of account. These are vital if you ever need to dispute an incorrect status on your credit report.'
    },
    {
      question: 'Can I get a home loan if my CIBIL score is low due to a past settlement?',
      answer: 'It is difficult but not impossible. You might need to wait 2 to 3 years after the settlement while rebuilding your score. Some NBFCs might offer loans at higher interest rates, or you might need a co-applicant with a strong credit profile.'
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

  const reviews = [
    {
      name: 'Amit Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'I was worried about my CIBIL score after settling my credit card debt. The advice here helped me understand the steps to rebuild it. Using a secured card worked wonders!'
    },
    {
      name: 'Priya Verma',
      location: 'Delhi',
      rating: 5,
      text: 'Clear and concise information. I didn’t know the difference between pre-closure and foreclosure. Now I feel more confident about managing my loans.'
    },
    {
      name: 'Karan Mehra',
      location: 'Bangalore',
      rating: 4,
      text: 'Very helpful guide. I followed the steps for improving my score after a loan settlement and saw a 50 point jump in just six months.'
    },
    {
      name: 'Sneha Rao',
      location: 'Hyderabad',
      rating: 5,
      text: 'The section on NOC was eye-opening. I realized I hadn’t collected mine from my previous bank. Fixed it just in time for my new home loan application.'
    },
    {
      name: 'Rahul Gupta',
      location: 'Pune',
      rating: 5,
      text: 'Best resource for understanding credit scores in India. The human-centric advice is much better than the robotic stuff on other sites.'
    }
  ];

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    'itemReviewed': {
      '@type': 'Service',
      'name': 'CredSettle Credit Consultation'
    },
    'ratingValue': '4.8',
    'reviewCount': '1250'
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
                    Does Foreclosure Affect CIBIL
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Does Foreclosure of Loan Affect CIBIL? Understanding the Impact and Path to Recovery</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  When you take a loan in India, whether it is for a car, a home, or a personal need, your primary goal is to pay it back on time. However, life often takes unexpected turns. Financial difficulties might lead you to consider closing your loan early or, in worse cases, result in the bank taking over your property. Many borrowers frequently ask, <strong>does foreclosure of loan affect CIBIL</strong> scores? The answer is not a simple yes or no, as it depends entirely on the nature of the foreclosure and your overall repayment behavior.
                </p>
                <p>
                  In the Indian financial ecosystem, the Credit Information Bureau (India) Limited, or CIBIL, plays a vital role. It maintains records of all your credit-related activities, and any deviation from the original repayment schedule can trigger a change in your score. Understanding how foreclosure and settlement work is the first step toward maintaining a healthy financial profile. This guide will walk you through the nuances of these terms and provide a roadmap for those wondering <strong>how to improve CIBIL score after loan settlement</strong>.
                </p>
                <p>
                  Credit scores are dynamic. They are not permanent labels but rather a reflection of your current financial responsibility. Even if you have faced a setback like a loan default or a settlement in the past, there are proven ways to rebuild your reputation. We will explore the technical details that lenders look for and the small, consistent actions you can take to move your score back into the 750 plus range.
                </p>
              </div>

              <h2 id="preclosure-vs-foreclosure" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Defining the Terms: Pre-closure versus Foreclosure</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Before we dive into the credit score impact, it is essential to clear up a common confusion between "pre-closure" and "foreclosure." While they sound similar, their implications for your CIBIL report are vastly different.
                </p>
                <p>
                  <strong>Pre-closure</strong> occurs when a borrower voluntarily decides to pay off the entire outstanding loan amount before the scheduled tenure ends. For example, if you have a five year car loan but decide to pay it off in three years because you have extra savings, that is a pre-closure. Banks usually view this positively as it shows financial strength, although they might charge a small fee for the lost interest income.
                </p>
                <p>
                  <strong>Foreclosure</strong>, in its legal and most severe sense, refers to a situation where the lender initiates a process to take possession of the collateral (like a house or car) because the borrower has defaulted on their payments. This is an involuntary action from the borrower’s perspective. When people ask "does foreclosure of loan affect CIBIL," they are often referring to this negative event. However, in common banking parlance in India, the term "foreclosure" is also sometimes used interchangeably with voluntary "pre-closure." It is crucial to identify which one you are dealing with.
                </p>
              </div>

              <h2 id="impact-preclosure" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Impact of Voluntary Pre-closure on Your CIBIL Score</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you are paying off your loan early and in full, you might expect your score to skyrocket immediately. Surprisingly, you might notice a small, temporary dip in your CIBIL score. Why does this happen?
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Credit Age:</strong> Closing an old loan account reduces the average age of your credit history. A longer history is generally better for your score.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. Credit Mix:</strong> If the loan you closed was your only "secured" loan, your credit mix might now be skewed toward "unsecured" credit (like credit cards), which can slightly lower your score.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>3. Total Credit Limit:</strong> While not as relevant for installment loans as it is for credit cards, closing an account reduces your total available credit lines.
                  </li>
                </ul>
                <p>
                  Despite this initial dip, voluntary pre-closure is excellent for your long-term credit health. It reduces your Debt-to-Income (DTI) ratio, making you a much more attractive borrower for future high-value loans like a mortgage. Lenders see that you have the capacity to clear debts ahead of schedule, which is a hallmark of a low-risk individual.
                </p>
              </div>

              <h2 id="impact-default" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Severe Impact of Default and Legal Foreclosure</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Now, let us look at the other side. When a loan goes into foreclosure because of non-payment, the impact on CIBIL is severe. This is not just a minor dip; it is a major red flag that can drop your score by 100 to 150 points in a single reporting cycle.
                </p>
                <p>
                  A foreclosure due to default tells every future bank that you failed to meet your legal obligation. This record stays on your credit report for seven years. During this time, getting any traditional bank loan becomes nearly impossible. If you do find a lender, the interest rates will be significantly higher to compensate for the perceived risk.
                </p>
                <p>
                  Furthermore, if the foreclosure involves an asset like a home, the emotional and social impact can be devastating. From a credit perspective, it is one of the most damaging events possible, second only to bankruptcy. This is why it is always better to negotiate with the bank or consider a settlement before the situation reaches the stage of legal foreclosure.
                </p>
              </div>

              <h2 id="loan-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Loan Settlement: A Middle Ground with Consequences</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Many people facing financial hardship opt for a "Loan Settlement." This is an agreement where the bank allows you to pay a single, reduced amount (less than the total outstanding) to close the loan account. While this stops the harassment and legal threats, it has a specific impact on your credit report.
                </p>
                <p>
                  When you settle a loan, the status in your CIBIL report is marked as <strong>"Settled."</strong> This is better than a "Default" status, but it is much worse than a "Closed" status. A settled status indicates that you were unable to pay the full amount, and the bank had to take a loss. For future lenders, this is a warning sign. They might think that if you settled once, you might do it again.
                </p>
                <p>
                  Many borrowers are surprised when they are rejected for a new loan even though they "cleared" their old one through settlement. This is because the settled status stays on the report for seven years. If you find yourself in this situation, do not lose hope. The next section will guide you on <strong>how to improve CIBIL score after loan settlement</strong>.
                </p>
              </div>

              <h2 id="improving-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How to Improve CIBIL Score After Loan Settlement: A Step-by-Step Guide</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Improving your score after a settlement is a marathon, not a sprint. You need to demonstrate a new, consistent pattern of financial responsibility. Here are the most effective steps to take:
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <strong>Ensure the Correct Status:</strong> First, check your CIBIL report. Ensure the loan is marked as "Settled" and not "Default." If there is an error, file a dispute immediately.
                    </li>
                    <li>
                      <strong>Get a Secured Credit Card:</strong> This is the most powerful tool for rebuilding. Since banks won’t give you a regular card, get one against a Fixed Deposit (FD). Use it for small purchases and pay the full bill every month.
                    </li>
                    <li>
                      <strong>Maintain Low Utilization:</strong> Never use more than 30% of your credit card limit. If your limit is 50,000 rupees, try to keep your balance below 15,000 rupees.
                    </li>
                    <li>
                      <strong>Timely Payments:</strong> This is non-negotiable. Even a single day’s delay in a mobile bill or a small EMI can reset your progress. Set up auto-debits for everything.
                    </li>
                    <li>
                      <strong>Avoid Multiple Applications:</strong> Every time you apply for a loan and get rejected, your score takes a small hit. Wait until your score improves before applying again.
                    </li>
                  </ol>
                </div>
                <p>
                  By following these steps, you are essentially "diluting" the negative impact of the settlement with a fresh stream of positive data. Over 12 to 24 months, your score will begin to climb. Many of our clients at CredSettle have moved from the 500s back into the 700s by staying disciplined with these habits.
                </p>
              </div>

              <h2 id="financial-discipline" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Foundation of Long-term Financial Discipline</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Rebuilding your credit is as much about mindset as it is about numbers. Financial discipline means living within your means and treating credit as a tool, not as extra income.
                </p>
                <p>
                  One common mistake people make after a settlement is avoiding all forms of credit entirely. While this prevents further debt, it also prevents you from rebuilding your score. You need credit to show you can handle credit. The key is to start small. A small gold loan or a consumer durable loan for a household item (like a fridge or phone) can be excellent ways to show a record of consistent monthly payments.
                </p>
                <p>
                  Monitor your expenses carefully. Use apps or spreadsheets to track where every rupee goes. By creating a surplus each month, you build an emergency fund. This fund is your best defense against future financial shocks, ensuring you never have to face a default or settlement situation ever again.
                </p>
              </div>

              <h2 id="importance-noc" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Role of the No Objection Certificate (NOC)</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Whether you pre-close, settle, or finish a loan tenure normally, the <strong>No Objection Certificate (NOC)</strong> is the most important document you will receive. It is a formal statement from the bank confirming that you have no further dues.
                </p>
                <p>
                  Many borrowers forget to collect their NOC, only to find years later that the loan is still showing as "Active" or "Overdue" on their CIBIL report due to some technical glitch or unpaid penny. Without the physical NOC, it is very hard to prove to CIBIL that the record needs to be updated.
                </p>
                <p>
                  Always insist on a physical copy of the NOC and a "No Dues Certificate." Store these in a safe place, both physically and digitally. If you are settling a loan, ensure the settlement letter specifically mentions the agreed amount and that the bank will update the credit bureaus. This paperwork is your legal shield and your ticket to a cleaner credit report.
                </p>
              </div>

              <h2 id="new-credit" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Managing New Credit Responsibly</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  As your score starts to improve, you will likely start receiving offers for new credit cards and loans. This is a critical moment. It is easy to fall back into old patterns.
                </p>
                <p>
                  Before accepting any new credit, ask yourself if you truly need it. Diversifying your credit mix is good; for instance, having one credit card and one small personal loan is better than having five credit cards. However, every new account should be managed with extreme care.
                </p>
                <p>
                  Remember, the goal of <strong>how to improve CIBIL score after loan settlement</strong> is to reach a level where you can access credit at the best possible interest rates. Once you hit a score of 750, you are in the "prime" category. At this stage, you have the power to negotiate with banks for lower rates, saving you lakhs of rupees over your lifetime in interest payments.
                </p>
              </div>

              <h2 id="resources" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Helpful Resources for Credit Health</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Maintaining a high credit score is an ongoing education. Here are some helpful internal resources to deepen your understanding:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 hover:underline">Comprehensive Guide to Loan Settlement in India</Link></li>
                  <li><Link href="/is-cibil-ruined-forever-after-settlement" className="text-blue-600 hover:underline">Is My CIBIL Ruined Forever After a Settlement?</Link></li>
                  <li><Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="text-blue-600 hover:underline">Direct Impact of Settlement on Your Credit Report</Link></li>
                  <li><Link href="/can-you-get-a-loan-again-after-settling-a-previous-loan" className="text-blue-600 hover:underline">Getting New Loans After a Past Settlement</Link></li>
                  <li><Link href="/will-banks-blacklist-you-after-loan-settlement" className="text-blue-600 hover:underline">The Truth About Banking Blacklists</Link></li>
                </ul>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Success Stories: What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {reviews.map((review, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4 text-base">"{review.text}"</p>
                    <p className="font-bold text-blue-900">- {review.name}, {review.location}</p>
                  </div>
                ))}
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
                  <h2 className="text-3xl font-bold mb-4">Take Control of Your Credit Today</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don’t let a past settlement define your financial future. Get expert guidance on rebuilding your CIBIL score and achieving financial freedom.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Get Your Free Consultation Now
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
                <h4 className="font-bold text-2xl mb-4">Free Score Review</h4>
                <p className="text-blue-100 mb-6 text-sm">Confused about your CIBIL report? Let our experts analyze it for you for free.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Start Analysis
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Confidential Assessment</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert Rebuilding Plan</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>No Obligation Advice</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services/credit-score-builder" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Builder Service</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Professional Loan Settlement</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/anti-harassment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Stop Collection Calls</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: Credit scoring depends on many factors. The strategies mentioned here are general recommendations and may vary based on individual credit profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
