'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LoanSettlementPageClient() {
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

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'what-is-settlement', label: 'What is Settlement?' },
    { id: 'consolidation-vs-settlement', label: 'Consolidation vs Settlement' },
    { id: 'debt-collectors', label: 'Debt Collectors' },
    { id: 'types-of-debt', label: 'Types of Debt' },
    { id: 'debt-management', label: 'Debt Management' },
    { id: 'financial-freedom', label: 'Path to Freedom' },
    { id: 'global-debt', label: 'Global Context' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'What is the difference between debt consolidation and debt settlement?',
      answer: 'Debt consolidation involves taking out a new loan (often a debt consolidation loan) to pay off multiple existing debts, ideally with a lower interest rate. You still pay the full principal. Debt settlement, on the other hand, involves negotiating with creditors to pay a lump sum that is less than the full amount you owe to consider the debt settled. Settlement reduces your total debt load, while consolidation simplifies payments.'
    },
    {
      question: 'Can I settle federal student loan forgiveness or AES student loans?',
      answer: 'Federal student loan forgiveness is a specific government program with its own strict criteria. Private student loans (like some AES student loans) can sometimes be settled if they are in default. However, federal loans typically require consolidation or specific forgiveness applications rather than traditional settlement. We specialize in settling unsecured personal loans and credit card debt.'
    },
    {
      question: 'How do I stop a debt collector or collection agency from calling?',
      answer: 'Under laws like the FDCPA (in the US) and RBI guidelines (in India), you have rights against harassment. You can request a debt collector to stop contacting you by sending a cease and desist letter or by hiring a legal representative like CredSettle. Once we represent you, we handle all communications with the credit collection services or agencies.'
    },
    {
      question: 'What is a Debt Relief Order or IVA?',
      answer: 'A Debt Relief Order (DRO) and Individual Voluntary Arrangement (IVA) are UK-specific insolvency solutions. In India, we have similar concepts like insolvency and bankruptcy, but loan settlement is often a faster, non-judicial alternative. If you are looking for "debt relief" in the general sense, our settlement services provide a structured way to exit debt without declaring bankruptcy.'
    },
    {
      question: 'Does debt settlement affect my credit score?',
      answer: 'Yes, settling a debt means you are paying less than the full amount agreed upon. The account will likely be marked as "settled" or "paid in full for less than the full balance" on your credit report. This can temporarily lower your score, but it is often better than the alternative of "bad debts", charge-offs, or bankruptcy. You can rebuild your score over time after becoming debt free.'
    },
    {
      question: 'What is the cost of debt settlement?',
      answer: 'We operate on a success-fee model. You do not pay us upfront fees for the negotiation. We only charge a percentage of the amount we save you after the settlement is successfully reached. This ensures our interests are aligned with yours—to get the maximum debt relief possible.'
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
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Loan Settlement
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
              
              {/* Introduction */}
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Comprehensive Guide to Loan Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  In today&apos;s volatile economic climate, managing finances can be a daunting task. Many individuals find themselves trapped in a cycle of <strong>debt</strong>, struggling to make minimum payments on <strong>credit card debt</strong>, personal loans, and other financial obligations. The stress of dealing with a <strong>debt collector</strong> or receiving notices from a <strong>collection agency</strong> can be overwhelming. However, there are viable solutions available. <strong>Loan settlement</strong>, also known as <strong>debt settlement</strong> or <strong>debt relief</strong>, is a powerful strategy for those who are unable to repay their debts in full.
                </p>
                <p>
                  This comprehensive guide will explore the intricacies of loan settlement, compare it with <strong>debt consolidation</strong> and <strong>bankruptcy</strong>, and provide actionable advice on how to navigate the process. We will also touch upon related concepts such as <strong>debt management plans</strong>, <strong>credit counseling</strong>, and the role of regulations like the <strong>FDCPA</strong> (Fair Debt Collection Practices Act) in protecting consumers. Whether you are dealing with <strong>bad debts</strong>, looking for <strong>national debt relief</strong>, or simply want to understand the <strong>cost of debt</strong>, this page is your ultimate resource.
                </p>
              </div>

              {/* What is Loan Settlement */}
              <h2 id="what-is-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">What is Loan Settlement?</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  <strong>Loan settlement</strong> is a financial negotiation process where a debtor negotiates with a creditor (such as a bank, credit card company, or <strong>debt collection agency</strong>) to pay a lump sum amount that is less than the total outstanding balance. Once this agreed-upon amount is paid, the creditor considers the debt fully satisfied and closes the account. This is often the best option for individuals who are facing severe financial hardship and are at risk of <strong>bankruptcy</strong>.
                </p>
                <p className="mb-4">
                  For example, if you have a <strong>credit card debt</strong> of ₹5,00,000 that you cannot repay due to job loss or medical emergency, a settlement company like CredSettle might negotiate with the bank to accept ₹2,50,000 as a full and final settlement. This provides immediate <strong>debt relief</strong> and allows you to become <strong>debt free</strong> much faster than making minimum payments for years.
                </p>
                <p>
                  It is important to distinguish settlement from other forms of debt management. Unlike a <strong>debt management plan</strong> where you pay the full amount over time (often with reduced interest), settlement actually reduces the principal amount you owe. This reduction is what makes it such an attractive option for those drowning in <strong>bad debts</strong>.
                </p>
              </div>

              {/* Consolidation vs Settlement */}
              <h2 id="consolidation-vs-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Consolidation vs. Debt Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Two of the most common terms you will hear when looking for financial help are <strong>debt consolidation</strong> and <strong>debt settlement</strong>. While they sound similar, they work very differently.
                </p>
                <p className="mb-4">
                  <strong>Debt Consolidation:</strong> This involves taking out a new loan, often called a <strong>debt consolidation loan</strong>, to pay off multiple smaller debts. The goal is to <strong>consolidate debt</strong> into a single monthly payment, ideally with a lower interest rate. <strong>Consolidated credit</strong> can simplify your finances, but it does not reduce the total amount you owe. You are simply moving the debt from one place to another. If you have good credit and a steady income, <strong>consolidation loans</strong> can be a great tool.
                </p>
                <p className="mb-4">
                  <strong>Debt Settlement:</strong> As explained earlier, this involves negotiating to pay <em>less</em> than what you owe. This is typically for people who cannot afford a <strong>debt consolidation loan</strong> or whose credit score has already been impacted by missed payments. While consolidation is about restructuring, settlement is about <strong>debt relief</strong> and reduction.
                </p>
                <p>
                  When searching for &quot;<strong>how to get out of debt</strong>,&quot; it is crucial to assess your financial situation honestly. If you can afford the payments but are just disorganized, <strong>consolidate</strong>. If you are insolvent and cannot pay, settle.
                </p>
              </div>

              {/* Dealing with Debt Collectors */}
              <h2 id="debt-collectors" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Dealing with Debt Collectors and Agencies</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  One of the most stressful aspects of having <strong>bad debts</strong> is dealing with a <strong>debt collector</strong>. Whether it is a bank&apos;s internal team or a third-party <strong>collection agency</strong> (like <strong>Moorcroft Group</strong> in the UK or various agencies in India), the harassment can be relentless.
                </p>
                <p className="mb-4">
                  It is important to know your rights. In the United States, the <strong>FDCPA</strong> (Fair Debt Collection Practices Act) strictly regulates what <strong>the debt collector</strong> can and cannot do. They cannot call you at odd hours, threaten you, or lie to you. In India, the RBI has similar Fair Practices Codes for <strong>credit collection services</strong>.
                </p>
                <p className="mb-4">
                  When you engage a professional settlement service like CredSettle, we take over the communication with the <strong>debt collection agency</strong>. We inform them that you are represented by us, which typically stops the direct calls to you. We then negotiate directly with them to reach a settlement. This layer of protection is invaluable for your peace of mind.
                </p>
                <p>
                  Remember, a <strong>debt collector</strong> is often paid a commission on what they collect. They are motivated to get as much as possible from you. Our job is to counter that and protect your interests.
                </p>
              </div>

              {/* Types of Debt */}
              <h2 id="types-of-debt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Types of Debt We Resolve</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">We specialize in settling unsecured debts. The most common types include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Credit Card Debt:</strong> This is often the most expensive debt due to high interest rates. It is also the easiest to settle.</li>
                  <li><strong>Personal Loans:</strong> Unsecured loans from banks and NBFCs.</li>
                  <li><strong>Medical Bills:</strong> Often a cause of sudden financial distress.</li>
                  <li><strong>Business Loans:</strong> Unsecured business lines of credit.</li>
                </ul>
                <p>
                  <strong>A Note on Student Loans:</strong> Many people search for &quot;<strong>federal student loan forgiveness</strong>&quot; or help with &quot;<strong>AES student loans</strong>&quot;. It is important to understand that federal student loans (especially in the US) have specific government programs for forgiveness and income-driven repayment. They are generally not eligible for private debt settlement in the traditional sense. However, private student loans can sometimes be settled if they are in default. If you are struggling with student debt, we recommend exploring <strong>consolidation loans</strong> or specific government relief programs first.
                </p>
              </div>

              {/* Debt Management */}
              <h2 id="debt-management" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Management Plans and Relief Options</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">Apart from settlement and consolidation, there are other avenues for <strong>debt relief</strong>.</p>
                <ul className="space-y-4">
                  <li>
                    <strong>Debt Management Plan (DMP):</strong> This is usually arranged by a <strong>credit counseling</strong> agency. You make one monthly payment to the agency, and they distribute it to your creditors. They may negotiate lower interest rates but usually do not reduce the principal.
                  </li>
                  <li>
                    <strong>IVA (Individual Voluntary Arrangement):</strong> This is a formal agreement in the UK where you pay back a portion of your debts over a set period. It is an alternative to bankruptcy.
                  </li>
                  <li>
                    <strong>Debt Relief Order:</strong> Another UK-specific option for those with low income and few assets.
                  </li>
                  <li>
                    <strong>Bankruptcy:</strong> This is the legal process of declaring that you cannot pay your debts. It has severe long-term consequences on your credit. Settlement is often seen as the last alternative before bankruptcy.
                  </li>
                </ul>
                <p className="mt-4">
                  At CredSettle, we help you evaluate all these options. While we specialize in settlement, we believe in holistic <strong>debt management</strong>. We want to ensure you choose the path that leads you to become <strong>debt free</strong> with the least amount of long-term damage.
                </p>
              </div>

              {/* Financial Freedom */}
              <h2 id="financial-freedom" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Path to Becoming Debt Free</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Becoming <strong>debt free</strong> is not just about money; it is about reclaiming your life. The mental burden of debt can affect your health, relationships, and career. By taking proactive steps—whether through <strong>debt consolidation</strong>, settlement, or a <strong>debt management plan</strong>—you are taking control of your future.
                </p>
                <p className="mb-4">Our process is simple:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Consultation:</strong> We analyze your <strong>net debt</strong> and <strong>debt to income ratio</strong>.</li>
                  <li><strong>Strategy:</strong> We decide if settlement, consolidation, or counseling is best.</li>
                  <li><strong>Action:</strong> We stop the harassment from the <strong>collection agency</strong> and start negotiations.</li>
                  <li><strong>Freedom:</strong> You pay the reduced amount and walk away free.</li>
                </ol>
              </div>

              {/* Global Debt Context */}
              <h2 id="global-debt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding National and Global Debt Context</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Debt is not just a personal issue; it is a global one. Terms like <strong>national debt</strong>, <strong>US debt</strong>, and <strong>US national debt</strong> frequently make headlines. The <strong>US debt clock</strong> and <strong>national debt clock</strong> are constantly ticking upwards, showing the trillions of dollars owed by governments. This macroeconomic environment affects interest rates, inflation, and ultimately, the <strong>cost of debt</strong> for individuals.
                </p>
                <p className="mb-4">
                  While <strong>national debt relief</strong> is a complex macroeconomic topic involving <strong>freedom debt relief</strong> programs and international policy, personal debt operates on a smaller but equally critical scale. Just as nations must manage their <strong>cost of debt</strong> to avoid default, individuals must manage their <strong>net debt</strong> to maintain financial health. When the <strong>debt to income ratio</strong> becomes unsustainable, whether for a country or a person, drastic measures like restructuring or settlement become necessary.
                </p>
                <p>
                  Understanding the <strong>debt meaning</strong> in a broader context helps realize that borrowing is a tool, but one that must be managed carefully. Whether it is the <strong>the debt</strong> of a nation or a household, the principles of responsible management and timely repayment (or settlement) remain the same. The concept of a <strong>debt clock</strong> serves as a stark reminder of how quickly interest can accumulate if left unchecked.
                </p>
              </div>

              {/* Client Reviews */}
              <section id="reviews" className="scroll-mt-28 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      &quot;I was drowning in credit card debt and harassment from collection agencies. CredSettle stopped the calls immediately. They negotiated a 50% reduction on my outstanding balance. I am finally debt free!&quot;
                    </p>
                    <p className="font-semibold text-blue-900">- Rahul S., Mumbai</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      &quot;I tried a debt consolidation loan but got rejected. Settlement was my only option. The team explained everything about the process and legal protection. Highly recommend their services.&quot;
                    </p>
                    <p className="font-semibold text-blue-900">- Priya M., Pune</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      &quot;Dealing with recovery agents was a nightmare. CredSettle handled the debt collectors professionally. I saved lakhs on my personal loan settlement.&quot;
                    </p>
                    <p className="font-semibold text-blue-900">- Amit K., Nagpur</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      &quot;Professional, transparent, and effective. They helped me understand my rights under RBI guidelines and FDCPA concepts. Best decision I made for my financial future.&quot;
                    </p>
                    <p className="font-semibold text-blue-900">- Vikram R., Thane</p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
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
                <p className="text-sm text-gray-600 mb-6">Don&apos;t face the bank alone. Get expert legal support today.</p>
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
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      HDFC Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/icici" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      ICICI Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/idfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      IDFC Loan Settlement
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
                    <Link href="/loan-settlement/yes-bank" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Yes Bank Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/axis-bank" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Axis Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/rbl-bank" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      RBL Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/bajaj-finserv" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Bajaj Finserv
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hero-fincorp" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Hero Fincorp
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/bank-of-baroda" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Bank of Baroda
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/union-bank" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Union Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/federal-bank" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Federal Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/aditya-birla" className="text-gray-600 hover:text-red-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Aditya Birla Capital
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/dmi-finance" className="text-gray-600 hover:text-teal-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      DMI Finance
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
