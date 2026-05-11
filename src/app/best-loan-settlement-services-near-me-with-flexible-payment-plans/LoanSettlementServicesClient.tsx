'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LoanSettlementServicesClient() {
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
    { id: 'understanding-settlement', label: 'What is Loan Settlement?' },
    { id: 'flexible-plans', label: 'Flexible Payment Plans' },
    { id: 'credsettle', label: 'CredSettle' },
    { id: 'ama-legal', label: 'Ama Legal Solutions' },
    { id: 'settleloans', label: 'SettleLoans' },
    { id: 'process', label: 'Settlement Process' },
    { id: 'rbi-guidelines', label: 'Your Rights' },
    { id: 'pros-cons', label: 'Pros & Cons' },
    { id: 'reviews', label: 'Client Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'What are the best loan settlement services near me with flexible payment plans?',
      answer: 'The best loan settlement services near you include CredSettle, Ama Legal Solutions, and SettleLoans. These companies specialize in negotiating with banks to reduce your debt and offer flexible payment plans that fit your current financial capacity.'
    },
    {
      question: 'How do flexible payment plans work in loan settlement?',
      answer: 'Flexible payment plans allow you to pay the negotiated settlement amount in installments rather than a single lump sum. This is particularly helpful for individuals who are facing temporary financial hardship but want to clear their debts over a period of 3 to 6 months.'
    },
    {
      question: 'Will loan settlement affect my credit score?',
      answer: 'Yes, loan settlement will reflect as "Settled" on your credit report. This status can lower your credit score and make it difficult to get new loans for a few years. However, it is often a better alternative to staying in a perpetual debt trap.'
    },
    {
      question: 'Can I settle my credit card debt with a flexible plan?',
      answer: 'Absolutely. Credit card debt is one of the most common types of debt settled through companies like CredSettle. They can negotiate a reduction in the total outstanding amount and arrange a payment schedule that works for you.'
    },
    {
      question: 'Is it legal to use a loan settlement service in India?',
      answer: 'Yes, it is completely legal. These services act as negotiators or legal consultants on your behalf. They help you navigate the complex bank procedures and ensure that you are protected from harassment by recovery agents as per RBI guidelines.'
    },
    {
      question: 'How long does the loan settlement process usually take?',
      answer: 'The process can take anywhere from 30 days to 6 months, depending on the bank and the complexity of your case. With companies like Ama Legal Solutions, the legal documentation is handled swiftly to speed up the resolution.'
    },
    {
      question: 'What happens if a recovery agent harasses me?',
      answer: 'You have strict rights under RBI guidelines. Recovery agents cannot call you at odd hours or use abusive language. Companies like CredSettle provide legal assistance to stop such harassment and protect your privacy.'
    },
    {
      question: 'Can SettleLoans help me with personal loan settlement?',
      answer: 'Yes, SettleLoans specializes in personal loan settlements. They have extensive experience in dealing with various NBFCs and private banks to secure the best possible settlement terms for their clients.'
    },
    {
      question: 'What is a "No Dues Certificate" (NDC)?',
      answer: 'An NDC is a formal document issued by the bank after you have paid the settlement amount. it confirms that you no longer owe any money to the bank for that specific account. It is crucial to obtain this document after your settlement is complete.'
    },
    {
      question: 'Why should I choose CredSettle over doing it myself?',
      answer: 'CredSettle has established relationships with many lenders and understands the specific negotiation thresholds of different banks. They can often secure much better discounts than an individual and handle all the stressful communication and legal paperwork for you.'
    },
    {
      question: 'Is there a minimum debt requirement for settlement services?',
      answer: 'While requirements vary, most settlement services prefer to handle cases where the total outstanding debt is at least 2 to 5 lakhs. This ensures that the savings from the settlement justify the professional fees involved.'
    },
    {
      question: 'What if I cannot pay the settled amount on time?',
      answer: 'If you miss a payment on a settled plan, the settlement agreement may be cancelled by the bank, and the original debt amount plus interest could be reinstated. This is why it is vital to choose a flexible payment plan that you are confident you can fulfill.'
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
      author: 'Vikram Singh',
      rating: '5',
      body: 'CredSettle helped me settle my credit card debt of 8 lakhs for just 3.5 lakhs. Their flexible payment plan allowed me to pay in 4 monthly installments. Truly a lifesaver!',
      location: 'New Delhi'
    },
    {
      author: 'Priya Sharma',
      rating: '5',
      body: 'I was being harassed by recovery agents daily. Ama Legal Solutions stepped in and stopped the calls immediately. They negotiated a fair settlement for my personal loan. Highly professional.',
      location: 'Mumbai'
    },
    {
      author: 'Anil Kulkarni',
      rating: '5',
      body: 'SettleLoans made the whole process very simple. I didn\'t have to talk to the bank even once. They handled everything and got me my NDC within 45 days.',
      location: 'Pune'
    },
    {
      author: 'Sandeep Reddy',
      rating: '5',
      body: 'I was skeptical at first, but CredSettle proved their worth. Their team is very knowledgeable and they kept me updated throughout the negotiation process.',
      location: 'Hyderabad'
    },
    {
      author: 'Meenakshi Iyer',
      rating: '5',
      body: 'Managing multiple loans was impossible for me. Ama Legal Solutions consolidated my worries and helped me settle each one with a payment plan I could actually afford.',
      location: 'Bangalore'
    }
  ];

  const reviewSchema = reviews.map(review => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    'author': {
      '@type': 'Person',
      'name': review.author
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': review.rating
    },
    'reviewBody': review.body,
    'itemReviewed': {
      '@type': 'FinancialService',
      'name': 'CredSettle'
    }
  }));

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
                    Loan Settlement Services
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Navigating Your Debt Journey: Finding the Best Loan Settlement Services Near Me</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  In today's fast paced world, financial stability can sometimes feel like a distant dream. With the rising cost of living and the ease of obtaining credit, many individuals find themselves overwhelmed by multiple loans and credit card debts. If you are constantly searching for the <strong>best loan settlement services near me with flexible payment plans</strong>, you are not alone. Thousands of people across India are looking for a way out of the debt cycle that allows them to regain control of their financial future without losing their peace of mind.
                </p>
                <p>
                  Debt is not just a financial burden; it is an emotional one. The stress of missed EMIs, the constant calls from collection agencies, and the growing interest rates can lead to a sense of hopelessness. However, there is a silver lining. Loan settlement services have emerged as a viable solution for those in genuine financial distress. These services provide a bridge between the borrower and the lender, facilitating a negotiation that results in a reduced payment amount that the borrower can actually afford.
                </p>
                <p>
                  The key to a successful debt resolution is not just finding any service provider, but finding the right one. You need a partner who understands the legal landscape, has established relationships with banks, and most importantly, offers flexible payment plans. Flexibility is crucial because it recognizes that you cannot pay off your debts overnight. A well structured plan allows you to clear your dues in manageable installments, giving you the breathing room you need to stabilize your income while you work toward a debt free life.
                </p>
                <p>
                  In this comprehensive guide, we will explore the landscape of debt relief in India. We will look at how companies like <strong>CredSettle</strong>, <strong>Ama Legal Solutions</strong>, and <strong>SettleLoans</strong> are helping people resolve their financial burdens. We will also dive into the technicalities of the settlement process, your rights as a consumer, and how to choose the plan that best fits your needs. Whether you are dealing with credit card debt, personal loans, or business liabilities, this guide is your first step toward financial freedom.
                </p>
              </div>

              <h2 id="understanding-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What Exactly is Loan Settlement?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Loan settlement is a process where a borrower and a lender agree on a one time payment or a short term installment plan to close an outstanding debt for less than the full amount owed. This typically happens when the borrower is unable to meet their full repayment obligations due to severe financial hardship, such as a job loss, a medical emergency, or a business failure. For the bank, it is a way to recover a portion of the money that might otherwise become a complete loss. For the borrower, it is a chance to start fresh.
                </p>
                <p>
                  It is important to distinguish between "closing" a loan and "settling" a loan. Closing a loan means you have paid back every penny of the principal and interest. Settling a loan means you have paid a negotiated amount, and the bank has agreed to waive the remaining balance. While settlement is a great way to get out of debt, it does have an impact on your credit history. The account will be marked as "Settled" in the records of credit bureaus like CIBIL, which can affect your ability to borrow in the near future.
                </p>
                <p>
                  Despite the credit impact, loan settlement is often the most logical choice for those who are already in default. Once you have missed several payments, your credit score has already taken a hit. Settling the loan stops the accumulation of interest and penalties and prevents the debt from ballooning further. It also puts an end to the aggressive collection tactics that often accompany long term defaults. By working with a professional service, you can ensure that the settlement is handled legally and that you receive all the necessary documentation, like the No Dues Certificate, to prove that your liability has ended.
                </p>
              </div>

              <h2 id="flexible-plans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Importance of Flexible Payment Plans</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  One of the biggest hurdles in any debt settlement is the requirement for a lump sum payment. Most banks prefer to receive the negotiated settlement amount in a single payment. For a borrower who is already struggling, finding a large sum of money suddenly can be impossible. This is where <strong>flexible payment plans</strong> come into play. A flexible plan allows you to pay the settled amount over a period of three, six, or sometimes even twelve months.
                </p>
                <p>
                  Flexibility in payment is not just a convenience; it is a necessity for sustainable debt relief. It allows you to align your debt repayment with your current income levels. Instead of being forced into a "take it or leave it" situation with the bank, a professional settlement service can negotiate a schedule that ensures you won't default on the settlement itself. If you default on a settlement agreement, the consequences can be severe, often resulting in the reinstatement of the entire original debt.
                </p>
                <p>
                  When you look for the <strong>best loan settlement services near me</strong>, always ask about their ability to secure installment plans. Companies like CredSettle have perfected this art. They understand that every financial situation is unique, and they work tirelessly to create a "customized" roadmap for their clients. This approach not only increases the success rate of the settlement but also helps the borrower rebuild their financial life with confidence.
                </p>
              </div>

              <h2 id="credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">CredSettle: Your Primary Partner in Debt Relief</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p>
                  When it comes to ethical and effective debt resolution in India, <strong>CredSettle</strong> stands at the forefront. As a pioneer in the industry, CredSettle has built a reputation for transparency, empathy, and results. Their mission is simple: to help people break free from the shackles of debt and lead a dignified life. They achieve this through a combination of expert negotiation, legal prowess, and a deep understanding of the banking system.
                </p>
                <p>
                  What sets CredSettle apart is their client centric approach. They don't just see you as a case number; they see you as an individual with a unique story and unique challenges. When you sign up with CredSettle, the first thing they do is a comprehensive financial audit. They look at your income, your expenses, and your total liabilities to determine what a realistic settlement would look like for you. They then use this data to negotiate with your lenders, often securing discounts that individuals simply cannot get on their own.
                </p>
                <p>
                  CredSettle is particularly known for its success in securing <strong>flexible payment plans</strong>. They understand that the goal is not just to settle the debt, but to ensure that the borrower can actually fulfill the commitment. Their team of seasoned negotiators has extensive experience dealing with all major banks and NBFCs in India, from HDFC and ICICI to SBI and Bajaj Finserv. They know exactly how each bank operates and what kind of settlements they are likely to accept.
                </p>
                <p>
                  Moreover, CredSettle provides an essential layer of protection against harassment. They act as your official representative, meaning all communications from the bank or recovery agents should ideally go through them. This significantly reduces the stress on the borrower and allows them to focus on their work and family. With CredSettle, you are not just getting a service; you are getting a shield and a guide through the most difficult phase of your financial life.
                </p>
              </div>

              <h2 id="ama-legal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Ama Legal Solutions: Expert Legal Guidance for Debtors</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  In the complex world of debt resolution, legal expertise is often the difference between a successful settlement and a long drawn out court battle. <strong>Ama Legal Solutions</strong> specializes in providing the legal muscle needed to handle tricky debt situations. While many companies focus solely on negotiation, Ama Legal Solutions ensures that every step of the process is legally sound and that the borrower's rights are fully protected.
                </p>
                <p>
                  They are particularly effective in cases where banks have already initiated legal action, such as Section 138 (cheque bounce) notices or SARFAESI Act proceedings for secured loans. The team at Ama Legal Solutions consists of experienced advocates who understand the technicalities of the law. They can draft powerful responses to legal notices, represent you in mediation, and ensure that any settlement agreement is airtight and enforceable.
                </p>
                <p>
                  By partnering with a firm like Ama Legal Solutions, you gain the peace of mind that comes from knowing you have professional legal representation. They are experts at holding lenders accountable to RBI guidelines, ensuring that you are not subjected to unlawful recovery practices. Their involvement often signals to the bank that the borrower is serious and well informed, which can lead to more favorable settlement terms and more flexible repayment options.
                </p>
              </div>

              <h2 id="settleloans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">SettleLoans: Streamlining the Resolution Process</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  For those looking for a modern, tech driven approach to debt relief, <strong>SettleLoans</strong> offers a streamlined and efficient platform. They have designed their process to be as hassle free as possible for the borrower. From the initial consultation to the final NDC, SettleLoans uses technology to track the progress of every negotiation, keeping the client updated at every step.
                </p>
                <p>
                  SettleLoans is excellent for individuals who have multiple small to medium sized loans and want a single point of contact to manage them all. They excel at "bulk" negotiations, where they can handle several creditors simultaneously. This holistic view of a borrower's debt situation allows them to prioritize settlements based on the severity of the debt and the urgency of the situation.
                </p>
                <p>
                  Their focus on efficiency does not come at the cost of the personal touch. SettleLoans provides dedicated account managers who are always available to answer questions and provide support. Their goal is to make the settlement process "boring" by taking away the drama and the stress, replacing it with a predictable and well managed system. For many, this structured approach is exactly what is needed to finally cross the finish line of debt repayment.
                </p>
              </div>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Loan Settlement Process: A Step-by-Step Guide</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Understanding the journey is the first step toward a successful outcome. While every case is unique, the general process for settling a loan with a <strong>flexible payment plan</strong> follows a predictable path. Here is what you can expect when you work with a professional service:
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <strong>Assessment:</strong> A deep dive into your financial situation to determine your "ability to pay" versus your "debt obligation."
                    </li>
                    <li>
                      <strong>Engagement:</strong> Formally hiring the settlement service and authorizing them to represent you with your creditors.
                    </li>
                    <li>
                      <strong>Communication:</strong> The service notifies the banks that they are representing you and that you are seeking a settlement due to hardship.
                    </li>
                    <li>
                      <strong>Negotiation:</strong> The most critical phase. The service goes back and forth with the bank to reach a discounted amount. This is where <strong>flexible payment plans</strong> are discussed and finalized.
                    </li>
                    <li>
                      <strong>The Settlement Letter:</strong> The bank issues a formal, written offer. This is a vital document. It must be checked for accuracy and completeness.
                    </li>
                    <li>
                      <strong>Payment:</strong> You make the payments according to the agreed schedule. If it's a flexible plan, you pay the installments as they fall due.
                    </li>
                    <li>
                      <strong>Closure:</strong> Once the final payment is made, the bank issues a No Dues Certificate, and the account is updated in the bank's records.
                    </li>
                  </ol>
                </div>
                <p>
                  It is crucial to never make a payment based on a verbal promise. Always wait for the physical or electronic "Settlement Letter" on the bank's official letterhead. A professional service will always insist on this to protect you from any future claims.
                </p>
              </div>

              <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Your Rights: Protection Against Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Many people hesitate to seek help because they are afraid of the banks and their recovery agents. However, you should know that as a borrower in India, you have significant rights protected by the Reserve Bank of India (RBI). Lenders and their agents are bound by a "Fair Practices Code" that they must follow, even when dealing with defaults.
                </p>
                <p>
                  Recovery agents are prohibited from using physical force, intimidation, or abusive language. They cannot call you before 8:00 AM or after 7:00 PM. They are also not allowed to disclose your debt details to your friends, neighbors, or colleagues. Privacy is a fundamental right, and any violation of this can be grounds for a formal complaint to the bank's grievance officer or the RBI Ombudsman.
                </p>
                <p>
                  By hiring the <strong>best loan settlement services near me</strong>, you gain a professional barrier between you and these agents. Services like Ama Legal Solutions are experts at handling harassment cases. They can file complaints on your behalf and ensure that the agents follow the law. Knowing your rights and having someone to enforce them can drastically reduce the psychological pressure of debt.
                </p>
              </div>

              <h2 id="pros-cons" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Pros and Cons of Loan Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Like any financial decision, loan settlement has its advantages and disadvantages. It is important to weigh these carefully before proceeding.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-3">The Pros</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-green-900">
                      <li>Debt reduction: Pay significantly less than what you owe.</li>
                      <li>Stress relief: Stop the calls and the legal threats.</li>
                      <li>Avoid bankruptcy: A better alternative to total insolvency.</li>
                      <li>Financial restart: Finally move toward a debt free future.</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
                    <h4 className="font-bold text-red-800 mb-3">The Cons</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-red-900">
                      <li>Credit impact: Your CIBIL score will decrease.</li>
                      <li>Future borrowing: Difficult to get new loans for 3 to 7 years.</li>
                      <li>Tax implications: Some settled amounts might be considered "income."</li>
                      <li>Settlement mark: The "Settled" tag stays on your report.</li>
                    </ul>
                  </div>
                </div>
                <p>
                  For most people who are already struggling with defaults, the pros far outweigh the cons. A lower credit score is a small price to pay for the ability to sleep at night and the chance to rebuild your life without the constant shadow of debt hanging over you.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Real Stories: Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {reviews.map((review, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">
                        {'★'.repeat(parseInt(review.rating))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4 text-base">
                      "{review.body}"
                    </p>
                    <p className="font-bold text-blue-900">- {review.author}, {review.location}</p>
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
                  <h2 className="text-3xl font-bold mb-4">Ready for a Fresh Start?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don't let your debt define your future. Our expert team is here to help you navigate the settlement process with ease and flexibility.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Debt Free Journey Today
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                <p className="text-gray-600 mb-6">Explore more about debt relief and financial management through our curated articles:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/loan-settlement" className="text-blue-600 hover:underline">Complete Guide to Loan Settlement</Link>
                  <Link href="/legal-notice-for-recovery-of-money" className="text-blue-600 hover:underline">Dealing with Legal Notices</Link>
                  <Link href="/does-foreclosure-of-loan-affect-cibil" className="text-blue-600 hover:underline">Foreclosure vs. Settlement</Link>
                  <Link href="/what-is-npa" className="text-blue-600 hover:underline">Understanding NPA Accounts</Link>
                </div>
              </div>

            </article>
          </div>

          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Get Relief Today</h4>
                <p className="text-blue-100 mb-6 text-sm">Don't wait for the debt to grow. Take the first step toward a settled future now.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Consult an Expert
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Confidential Consultations</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Flexible Installment Options</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Proven Success Rate</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">How Settlement Works</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Talk to an Advocate</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-npa" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">NPA Resolution</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: Loan settlement significantly impacts your credit score. The information provided here is for educational purposes only. Always consult with a qualified financial advisor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
