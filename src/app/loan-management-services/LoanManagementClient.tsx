'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LoanManagementClient() {
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
    { id: 'definition', label: 'Defining Loan Management' },
    { id: 'strategic-importance', label: 'Strategic Importance' },
    { id: 'loan-types', label: 'Types of Loans' },
    { id: 'rbi-compliance', label: 'Regulatory Framework' },
    { id: 'debt-consolidation', label: 'Debt Consolidation' },
    { id: 'refinancing', label: 'Refinancing & Transfers' },
    { id: 'npa-management', label: 'Managing Distress' },
    { id: 'technology', label: 'Technological Integration' },
    { id: 'choosing-partner', label: 'Choosing a Partner' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'What exactly are loan management services?',
      answer: 'Loan management services involve professional oversight of your entire debt portfolio. This includes tracking repayments, optimizing interest rates through balance transfers or consolidation, ensuring regulatory compliance, and providing legal advocacy in case of disputes or financial distress.'
    },
    {
      question: 'Is loan management the same as debt settlement?',
      answer: 'No. Loan management is a broad, proactive service aimed at keeping your debt healthy and optimized. Debt settlement is a specific reactive strategy used when a borrower cannot pay the full amount and seeks to close the account for a lower, one-time payment.'
    },
    {
      question: 'How can a management service help me save money?',
      answer: 'They save you money by identifying lower interest rate opportunities (refinancing), consolidating high-interest debts into cheaper ones, and helping you avoid late fees and penalties through automated tracking and reminders.'
    },
    {
      question: 'Do these services help with CIBIL score improvement?',
      answer: 'Yes. By ensuring timely repayments and optimizing your credit utilization, loan management services naturally help in building and maintaining a high credit score over time.'
    },
    {
      question: 'Can a business benefit from loan management?',
      answer: 'Absolutely. For businesses, these services are crucial for managing cash flow, handling renewals of credit limits, and ensuring that business debt is structured in a way that supports growth rather than hindering it.'
    },
    {
      question: 'Are loan management services legal in India?',
      answer: 'Yes, they are legal and operate within the framework of the Indian financial and legal systems. Reputable services adhere strictly to RBI guidelines and the Fair Practices Code.'
    },
    {
      question: 'What happens if I miss an EMI while using a management service?',
      answer: 'A professional service acts as an early warning system. They will alert you to the missed payment and help you communicate with the bank immediately to resolve the issue before it escalates into a default or an NPA.'
    },
    {
      question: 'How much do these services cost?',
      answer: 'The cost varies depending on the complexity of your debt portfolio and the specific services required. Most reputable firms offer a transparent fee structure based on the value they provide.'
    },
    {
      question: 'Can I manage my loans myself?',
      answer: 'While possible, it is time-consuming and requires deep financial expertise. Professional services provide specialized knowledge, automated tools, and legal advocacy that are difficult for an individual to replicate.'
    },
    {
      question: 'How do I get started with CredSettle?',
      answer: 'Getting started is easy. Simply visit our website, request a free consultation, and our team of experts will analyze your debt situation and provide a customized management plan tailored to your goals.'
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
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
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Loan Management Services
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Navigating the Complexities of Modern Debt in India</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  In the current economic climate of India, borrowing has become an integral part of life for both individuals and businesses. From purchasing a dream home in a bustling metropolitan area like Mumbai or Bangalore to scaling a small enterprise in the heart of Kolkata, loans act as the fuel for growth and aspiration. However, with the proliferation of various lending products, ranging from personal loans and credit cards to complex corporate credit lines, the challenge of managing these obligations has grown exponentially. <strong>Loan management services</strong> have emerged as a critical necessity for anyone looking to maintain financial health while leveraging credit effectively.
                </p>
                <p>
                  Managing debt is not merely about ensuring that an EMI is paid on time. It is a holistic process that involves strategic planning, constant monitoring of interest rates, understanding the legal implications of loan agreements, and maintaining a robust credit profile. For many, the sheer volume of paperwork and the technical jargon used by financial institutions can be overwhelming. This is where professional <strong>loan management services</strong> step in, providing the expertise and tools needed to navigate the labyrinth of the Indian financial system.
                </p>
                <p>
                  The rise of digital lending has further complicated the landscape. With "instant loans" available at the click of a button, it has become easier than ever to fall into a cycle of high-interest debt. Professional management ensures that every borrowing decision is backed by data and aligned with long-term financial goals. Whether you are dealing with a single home loan or a portfolio of diverse business credits, understanding the nuances of how these loans interact with your overall financial standing is the first step toward true fiscal discipline.
                </p>
              </div>

              <h2 id="definition" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Defining Loan Management: A Holistic Approach to Debt</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Loan management is often misunderstood as a simple bookkeeping exercise. In reality, it is a comprehensive discipline that covers the entire lifecycle of a loan, from the initial research and application stage to the final closure and obtaining a No Objection Certificate. At its core, professional <strong>loan management service</strong> is about optimizing every aspect of your debt to ensure it serves your interests rather than the lender&apos;s. This includes tracking repayment schedules, managing documentation, and identifying opportunities for cost savings through refinancing or restructuring.
                </p>
                <p>
                  A professional management service provides a bird&apos;s-eye view of your entire debt portfolio. For a small business owner, this might mean balancing a working capital loan, a term loan for machinery, and several personal credit lines used for business expenses. For an individual, it could involve managing an education loan, a car loan, and multiple credit cards. Each of these products has different interest rates, tenors, and penalty structures. A unified management approach ensures that you are always aware of your total liability and can prioritize repayments in a way that minimizes interest outgo and maximizes credit score growth.
                </p>
                <p>
                  Furthermore, loan management involves a deep understanding of the technicalities of lending. This includes knowing how interest is calculated, whether it is on a reducing balance basis or a flat rate, and understanding the impact of pre-payment charges or processing fees. Professional managers act as intermediaries, helping borrowers interpret the fine print of loan documents that are often designed to favor the institution. By demystifying these terms, management services empower borrowers to make informed decisions and avoid the common pitfalls that lead to financial distress.
                </p>
              </div>

              <h2 id="strategic-importance" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Strategic Importance of Professional Oversight</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Why should one opt for professional loan management? The answer lies in the increasing complexity of the financial market and the severe consequences of mismanagement. In India, a single missed payment can significantly damage your CIBIL score, making it harder and more expensive to borrow in the future. Beyond just credit scores, poor debt management can lead to legal complications, harassment from recovery agents, and even the loss of assets in the case of secured loans. Professional oversight provides a layer of protection against these risks.
                </p>
                <p>
                  Strategically, professional management allows for &quot;debt optimization.&quot; This is the practice of constantly reviewing your debt to see if it can be made cheaper or more manageable. For instance, interest rates in India are subject to change based on RBI policies. A professional service monitors these shifts and advises borrowers when it is time to switch from a high-interest loan to a lower one. This proactive stance can save a borrower lakhs of rupees over the tenor of a long-term loan like a mortgage.
                </p>
                <p>
                  Moreover, professional management provides emotional and psychological relief. Debt is one of the leading causes of stress in modern society. Knowing that a team of experts is monitoring your repayments, handling the communication with banks, and ensuring that you are always on the right side of the law provides immense peace of mind. This allows individuals to focus on their careers and business owners to focus on growth, rather than being bogged down by the minutiae of debt tracking.
                </p>
              </div>

              <h2 id="loan-types" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Common Types of Loans Under Professional Management</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <h3 className="font-bold text-xl mb-2 text-blue-900">1. Personal and Unsecured Loans</h3>
                  <p>Personal loans are among the most common forms of debt in India, often used for weddings, travel, or medical emergencies. Because they are unsecured, they carry higher interest rates. Professional management focuses on aggressive repayment strategies and consolidation to avoid defaults.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <h3 className="font-bold text-xl mb-2 text-blue-900">2. Home Loans and Mortgages</h3>
                  <p>A home loan is usually the largest financial commitment an individual makes. Management services involve regular health checks, checking for opportunities to transfer the balance to lenders offering better rates, and advising on part-prepayments.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <h3 className="font-bold text-xl mb-2 text-blue-900">3. Business and MSME Loans</h3>
                  <p>For businesses, managing debt requires an understanding of cash flow cycles. Professional managers help align repayment schedules with revenue generation, ensuring the business remains liquid and assisting in annual renewals of credit limits.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <h3 className="font-bold text-xl mb-2 text-blue-900">4. Vehicle and Asset-Based Loans</h3>
                  <p>Management services ensure that insurance is always up to date and handle the process of removing hypothecation once the loan is paid off. They also advise on the best time to close these loans based on asset depreciation.</p>
                </div>
              </div>

              <h2 id="rbi-compliance" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Regulatory Compliance and RBI Guidelines: Your Safety Net</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  In India, the lending sector is governed by the Reserve Bank of India (RBI), which has established a robust framework to protect borrowers. Professional <strong>loan management services</strong> are deeply rooted in these regulations, ensuring that the lenders adhere to the &quot;Fair Practices Code.&quot; Understanding these guidelines is crucial for any borrower, as it defines your rights and the lender&apos;s obligations.
                </p>
                <p>
                  Recent RBI guidelines on digital lending have introduced significant changes. For instance, all loan disbursements and repayments must now happen directly between the borrower&apos;s bank account and the Regulated Entity&apos;s account, bypassing any third-party pool accounts. This transparency is a major win for borrowers, and a professional management service ensures that your lending partners are in full compliance with these rules.
                </p>
                <p>
                  Furthermore, the RBI has strict rules against the harassment of borrowers. Recovery agents must follow a specific code of conduct, which includes not calling at odd hours and maintaining a professional demeanor. If a lender violates these rules, a professional management service can help you file a formal complaint through the Integrated Ombudsman Scheme. This regulatory oversight acts as a safety net, ensuring that while you are responsible for your debt, you are treated with dignity and fairness.
                </p>
              </div>

              <h2 id="debt-consolidation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Debt Consolidation: A Core Strategy for Simplification</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  One of the most effective tools in the arsenal of a <strong>loan management service</strong> is debt consolidation. Many borrowers find themselves juggling multiple loans with different due dates and interest rates. This complexity often leads to missed payments and a spiraling debt trap. Debt consolidation involves taking a single, large loan at a lower interest rate to pay off all existing smaller, high-interest debts.
                </p>
                <p>
                  The benefits of consolidation are two-fold. First, it simplifies your financial life. Instead of managing five different payments, you only have one. This significantly reduces the risk of accidental defaults. Second, it often leads to a lower monthly EMI. By moving from high-interest debt like credit card balances to a structured personal loan or a loan against property, a borrower can save thousands of rupees every month.
                </p>
                <p>
                  However, debt consolidation is not a one-size-fits-all solution. It requires a careful analysis of the costs involved, including processing fees for the new loan and foreclosure charges for the old ones. A professional management service performs this cost-benefit analysis to ensure that consolidation actually saves you money in the long run. They also guide you on how to avoid the temptation of taking new debt once the old ones are consolidated.
                </p>
              </div>

              <h2 id="refinancing" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Refinancing and Balance Transfers: Optimizing Your Interest</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  In a dynamic interest rate environment, staying with the same lender for the entire duration of a long-term loan can be a costly mistake. Refinancing, or a &quot;Balance Transfer,&quot; is the process of moving an existing loan from one lender to another to take advantage of lower interest rates or better service terms. This is particularly common in the home loan segment in India.
                </p>
                <p>
                  When market interest rates drop, banks are often slow to pass on the benefits to existing customers while offering lower rates to new ones. Professional <strong>loan management services</strong> monitor these market trends. When a significant gap emerges between your current rate and the market rate, they facilitate a balance transfer. For a 50-lakh rupee loan, even a 0.5% reduction in the interest rate can save a borrower several lakhs over 20 years.
                </p>
                <p>
                  A balance transfer is also an opportunity to renegotiate the terms of your loan. You might want to reduce your tenor to pay off the debt faster or increase it to lower your monthly burden. You might also look for a lender with better digital banking facilities or a more responsive customer service team. A professional manager handles the end-to-end process, making the transition seamless and stress-free for the borrower.
                </p>
              </div>

              <h2 id="npa-management" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Managing Financial Distress and NPA Prevention</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Financial journeys are rarely a straight line. Unexpected events like job loss or medical emergencies can make it difficult to keep up with loan repayments. In the Indian banking system, a loan is classified as a &quot;Non-Performing Asset&quot; (NPA) if the interest or installment remains overdue for more than 90 days. Falling into the NPA category has severe legal and financial consequences.
                </p>
                <p>
                  Professional <strong>loan management services</strong> play a vital role in NPA prevention. They act as an early warning system, identifying signs of financial stress before a default occurs. If you anticipate a struggle with upcoming payments, a professional manager can help you approach the bank for &quot;Restructuring.&quot; This might involve a temporary moratorium on payments or an extension of the loan tenor to reduce the EMI.
                </p>
                <p>
                  In cases where a default has already happened, management services provide guidance on how to handle the situation legally. They ensure that you are aware of your rights and help in exploring &quot;Settlement&quot; options, where the bank agrees to accept a one-time payment that is less than the total outstanding amount to close the account. While a settlement affects your credit score, it can be a necessary step to resolve an unmanageable debt situation and start fresh.
                </p>
              </div>

              <h2 id="technology" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Technological Integration in Modern Loan Management</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The future of loan management is digital. In India, the &quot;India Stack,&quot; including Aadhaar, e-KYC, and the Account Aggregator (AA) framework, has revolutionized how financial data is shared and managed. Professional management services leverage these technologies to provide real-time insights into your debt. With the consent-based AA framework, a management platform can securely fetch your latest loan statements and bank transactions.
                </p>
                <p>
                  Technology also enables automated monitoring and alerts. No longer do you need to remember due dates or manually check if a payment was successful. Automated systems send reminders and provide instant confirmation of transactions. Furthermore, advanced analytics can predict your future cash flow needs, helping you plan your repayments and pre-payments more effectively.
                </p>
                <p>
                  At CredSettle, we embrace this technological shift. Our platform uses sophisticated algorithms to analyze your debt portfolio and identify saving opportunities. Whether it is an AI-driven suggestion for a balance transfer or a machine-learning model that predicts the best time for a debt consolidation, technology allows us to provide personalized advice at scale. This marriage of human expertise and digital precision is what defines modern loan management.
                </p>
              </div>

              <h2 id="choosing-partner" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Choosing the Right Loan Management Partner</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  With the growing demand for these services, several players have entered the market. However, not all services are created equal. When choosing a <strong>loan management partner in India</strong>, you should look for several key attributes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Transparency and Ethics:</strong> Clear fee structures and adherence to RBI guidelines.</li>
                  <li><strong>Expertise and Experience:</strong> A team with backgrounds in banking, law, or finance.</li>
                  <li><strong>Technological Capability:</strong> A digital interface for tracking progress and accessing documents.</li>
                  <li><strong>Customized Approach:</strong> Solutions tailored to your specific goals and constraints.</li>
                </ul>
                <p>
                  A professional partner acts as your advocate in the financial world. They represent your interests in front of powerful institutions, ensuring that you are not just another number in a database but a valued borrower with rights and aspirations.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    &quot;I was struggling with multiple credit cards and personal loans. CredSettle helped me consolidate everything into one manageable loan at half the interest rate. I can finally breathe again!&quot;
                  </p>
                  <p className="font-bold text-blue-900">- Anish Sharma, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    &quot;As a small business owner, I didn&apos;t have the time to track my CC limits and term loans. CredSettle handled everything, including a balance transfer that saved me 4 lakhs a year in interest. Highly recommended!&quot;
                  </p>
                  <p className="font-bold text-blue-900">- Megha Gupta, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    &quot;When I faced a medical emergency and couldn&apos;t pay my EMIs, CredSettle stepped in. They negotiated a restructuring plan with my bank, preventing my account from becoming an NPA. They truly care about their clients.&quot;
                  </p>
                  <p className="font-bold text-blue-900">- Rajesh Iyer, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    &quot;The best decision for my home loan. I didn&apos;t realize how much I was overpaying on my home loan until CredSettle did a health check. They facilitated a balance transfer seamlessly!&quot;
                  </p>
                  <p className="font-bold text-blue-900">- Vikram Singh, Hyderabad</p>
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
                  <h2 className="text-3xl font-bold mb-4">Ready to Master Your Debt?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Take the first step toward financial freedom. Our experts are ready to analyze your debt and create a personalized management plan.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Free Analysis Now
                  </Link>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>

          </div>

          {/* Right Column: CTA & Related Pages */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main Sidebar CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Urgent Debt Help</h4>
                <p className="text-blue-100 mb-6 text-sm">Facing aggressive recovery or high interest? Our experts can help you today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Get Help Now
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>100% Confidential Analysis</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert Legal Advocacy</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>RBI Compliance Guranteed</span>
                  </div>
                </div>
              </div>

              {/* Related Pages Component */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Related Services</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Loan Settlement Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/debt-management-services" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Debt Management Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-npa" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">NPA Resolution Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Legal Debt Recovery Suit</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for general awareness only and does not constitute legal or financial advice. Please consult a qualified consultant for your specific case.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
