'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';

export default function LoanSettlementPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'introduction', text: 'Comprehensive Guide to Loan Settlement', level: 2 },
    { id: 'what-is-settlement', text: 'What is Loan Settlement?', level: 2 },
    { id: 'consolidation-vs-settlement', text: 'Debt Consolidation vs. Debt Settlement', level: 2 },
    { id: 'debt-collectors', text: 'Dealing with Debt Collectors and Agencies', level: 2 },
    { id: 'types-of-debt', text: 'Types of Debt We Resolve', level: 2 },
    { id: 'debt-management', text: 'Debt Management Plans and Relief Options', level: 2 },
    { id: 'financial-freedom', text: 'The Path to Becoming Debt Free', level: 2 },
    { id: 'global-debt', text: 'Understanding National and Global Debt Context', level: 2 },
    { id: 'reviews', text: 'Client Reviews', level: 2 },
    { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
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
    <div className="relative min-h-screen bg-white mt-6">
      {/* Background Circle Effect */}
      {!isFirefox && (
        <div
          className="absolute top-0 left-0"
          style={{
            width: '757px',
            height: '757px',
            borderRadius: '757px',
            background: '#007AFF',
            filter: 'blur(400px)',
            WebkitFilter: 'blur(400px)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.6,
            willChange: 'filter',
            backfaceVisibility: 'hidden'
          }}
        />
      )}

      {isFirefox && (
        <div
          className="absolute top-0 left-0"
          style={{
            width: '757px',
            height: '757px',
            borderRadius: '757px',
            background:
              'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.9
          }}
        />
      )}

      <Navbar />

      <div className="relative z-10" style={{ paddingTop: '84px' }}>
        {/* Hero Section */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px', marginBottom: '48px' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              <img
                src="/personalhero.png"
                alt="Loan Settlement Services"
                className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]"
                style={{
                  height: 'auto',
                  transform: 'rotate(335deg)',
                  transformOrigin: 'center'
                }}
              />
            </div>
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1
                className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  marginBottom: '12px'
                }}
              >
                Loan Settlement Services – Your Path to Being Debt Free
              </h1>
              <p
                className="text-xs md:text-sm lg:text-[14px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px',
                  marginBottom: '20px'
                }}
              >
                Are you overwhelmed by credit card debt, personal loans, or calls from a debt collector? CredSettle offers professional debt relief and loan settlement services. We negotiate with collection agencies to reduce your debt by up to 50%, helping you avoid bankruptcy and regain financial control. Whether you are looking for debt consolidation or a way to manage bad debts, we are here to help.
              </p>
              <button
                className="text-white text-sm md:text-base lg:text-[18.58px] px-6 md:px-8 lg:px-[39.44px] py-2 md:py-3 lg:py-[13.48px]"
                style={{
                  borderRadius: '32.4px',
                  background: '#007AFF',
                  boxShadow:
                    '0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset'
                }}
              >
                Get Free Consultation Now
              </button>
            </div>
          </div>
        </section>

        {/* Main Content Section with TOC */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-5"
          style={{
            maxWidth: '1280px',
            marginBottom: '48px',
            position: 'relative'
          }}
        >
          <div 
            className="flex flex-col gap-4 lg:gap-8" 
            style={{ 
              alignItems: 'flex-start',
              position: 'relative'
            }}
          >
            {/* Table of Contents */}
            <div className="w-full">
              <TableOfContents headings={headings} />
            </div>

            {/* Main Content */}
            <div className="w-full" style={{ minWidth: '0', minHeight: '100vh' }}>
              
              {/* Introduction */}
              <section id="introduction" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Comprehensive Guide to Loan Settlement
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    In today's volatile economic climate, managing finances can be a daunting task. Many individuals find themselves trapped in a cycle of <strong>debt</strong>, struggling to make minimum payments on <strong>credit card debt</strong>, personal loans, and other financial obligations. The stress of dealing with a <strong>debt collector</strong> or receiving notices from a <strong>collection agency</strong> can be overwhelming. However, there are viable solutions available. <strong>Loan settlement</strong>, also known as <strong>debt settlement</strong> or <strong>debt relief</strong>, is a powerful strategy for those who are unable to repay their debts in full.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    This comprehensive guide will explore the intricacies of loan settlement, compare it with <strong>debt consolidation</strong> and <strong>bankruptcy</strong>, and provide actionable advice on how to navigate the process. We will also touch upon related concepts such as <strong>debt management plans</strong>, <strong>credit counseling</strong>, and the role of regulations like the <strong>FDCPA</strong> (Fair Debt Collection Practices Act) in protecting consumers. Whether you are dealing with <strong>bad debts</strong>, looking for <strong>national debt relief</strong>, or simply want to understand the <strong>cost of debt</strong>, this page is your ultimate resource.
                  </p>
                </div>
              </section>

              {/* What is Loan Settlement */}
              <section id="what-is-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  What is Loan Settlement?
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Loan settlement</strong> is a financial negotiation process where a debtor negotiates with a creditor (such as a bank, credit card company, or <strong>debt collection agency</strong>) to pay a lump sum amount that is less than the total outstanding balance. Once this agreed-upon amount is paid, the creditor considers the debt fully satisfied and closes the account. This is often the best option for individuals who are facing severe financial hardship and are at risk of <strong>bankruptcy</strong>.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    For example, if you have a <strong>credit card debt</strong> of ₹5,00,000 that you cannot repay due to job loss or medical emergency, a settlement company like CredSettle might negotiate with the bank to accept ₹2,50,000 as a full and final settlement. This provides immediate <strong>debt relief</strong> and allows you to become <strong>debt free</strong> much faster than making minimum payments for years.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    It is important to distinguish settlement from other forms of debt management. Unlike a <strong>debt management plan</strong> where you pay the full amount over time (often with reduced interest), settlement actually reduces the principal amount you owe. This reduction is what makes it such an attractive option for those drowning in <strong>bad debts</strong>.
                  </p>
                </div>
              </section>

              {/* Consolidation vs Settlement */}
              <section id="consolidation-vs-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Debt Consolidation vs. Debt Settlement
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Two of the most common terms you will hear when looking for financial help are <strong>debt consolidation</strong> and <strong>debt settlement</strong>. While they sound similar, they work very differently.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Debt Consolidation:</strong> This involves taking out a new loan, often called a <strong>debt consolidation loan</strong>, to pay off multiple smaller debts. The goal is to <strong>consolidate debt</strong> into a single monthly payment, ideally with a lower interest rate. <strong>Consolidated credit</strong> can simplify your finances, but it does not reduce the total amount you owe. You are simply moving the debt from one place to another. If you have good credit and a steady income, <strong>consolidation loans</strong> can be a great tool.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Debt Settlement:</strong> As explained earlier, this involves negotiating to pay <em>less</em> than what you owe. This is typically for people who cannot afford a <strong>debt consolidation loan</strong> or whose credit score has already been impacted by missed payments. While consolidation is about restructuring, settlement is about <strong>debt relief</strong> and reduction.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    When searching for "<strong>how to get out of debt</strong>," it is crucial to assess your financial situation honestly. If you can afford the payments but are just disorganized, <strong>consolidate</strong>. If you are insolvent and cannot pay, settle.
                  </p>
                </div>
              </section>

              {/* Dealing with Debt Collectors */}
              <section id="debt-collectors" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Dealing with Debt Collectors and Agencies
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    One of the most stressful aspects of having <strong>bad debts</strong> is dealing with a <strong>debt collector</strong>. Whether it is a bank\'s internal team or a third-party <strong>collection agency</strong> (like <strong>Moorcroft Group</strong> in the UK or various agencies in India), the harassment can be relentless.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    It is important to know your rights. In the United States, the <strong>FDCPA</strong> (Fair Debt Collection Practices Act) strictly regulates what <strong>the debt collector</strong> can and cannot do. They cannot call you at odd hours, threaten you, or lie to you. In India, the RBI has similar Fair Practices Codes for <strong>credit collection services</strong>.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    When you engage a professional settlement service like CredSettle, we take over the communication with the <strong>debt collection agency</strong>. We inform them that you are represented by us, which typically stops the direct calls to you. We then negotiate directly with them to reach a settlement. This layer of protection is invaluable for your peace of mind.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Remember, a <strong>debt collector</strong> is often paid a commission on what they collect. They are motivated to get as much as possible from you. Our job is to counter that and protect your interests.
                  </p>
                </div>
              </section>

              {/* Types of Debt */}
              <section id="types-of-debt" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Types of Debt We Resolve
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    We specialize in settling unsecured debts. The most common types include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Credit Card Debt:</strong> This is often the most expensive debt due to high interest rates. It is also the easiest to settle.</li>
                    <li><strong>Personal Loans:</strong> Unsecured loans from banks and NBFCs.</li>
                    <li><strong>Medical Bills:</strong> Often a cause of sudden financial distress.</li>
                    <li><strong>Business Loans:</strong> Unsecured business lines of credit.</li>
                  </ul>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>A Note on Student Loans:</strong> Many people search for "<strong>federal student loan forgiveness</strong>" or help with "<strong>AES student loans</strong>". It is important to understand that federal student loans (especially in the US) have specific government programs for forgiveness and income-driven repayment. They are generally not eligible for private debt settlement in the traditional sense. However, private student loans can sometimes be settled if they are in default. If you are struggling with student debt, we recommend exploring <strong>consolidation loans</strong> or specific government relief programs first.
                  </p>
                </div>
              </section>

              {/* Debt Management */}
              <section id="debt-management" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Debt Management Plans and Relief Options
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Apart from settlement and consolidation, there are other avenues for <strong>debt relief</strong>.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Debt Management Plan (DMP):</strong> This is usually arranged by a <strong>credit counseling</strong> agency. You make one monthly payment to the agency, and they distribute it to your creditors. They may negotiate lower interest rates but usually do not reduce the principal.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>IVA (Individual Voluntary Arrangement):</strong> This is a formal agreement in the UK where you pay back a portion of your debts over a set period. It is an alternative to bankruptcy.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Debt Relief Order:</strong> Another UK-specific option for those with low income and few assets.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Bankruptcy:</strong> This is the legal process of declaring that you cannot pay your debts. It has severe long-term consequences on your credit. Settlement is often seen as the last alternative before bankruptcy.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    At CredSettle, we help you evaluate all these options. While we specialize in settlement, we believe in holistic <strong>debt management</strong>. We want to ensure you choose the path that leads you to become <strong>debt free</strong> with the least amount of long-term damage.
                  </p>
                </div>
              </section>

              {/* Financial Freedom */}
              <section id="financial-freedom" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  The Path to Becoming Debt Free
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Becoming <strong>debt free</strong> is not just about money; it is about reclaiming your life. The mental burden of debt can affect your health, relationships, and career. By taking proactive steps—whether through <strong>debt consolidation</strong>, settlement, or a <strong>debt management plan</strong>—you are taking control of your future.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Our process is simple:
                    1. <strong>Consultation:</strong> We analyze your <strong>net debt</strong> and <strong>debt to income ratio</strong>.
                    2. <strong>Strategy:</strong> We decide if settlement, consolidation, or counseling is best.
                    3. <strong>Action:</strong> We stop the harassment from the <strong>collection agency</strong> and start negotiations.
                    4. <strong>Freedom:</strong> You pay the reduced amount and walk away free.
                  </p>
                </div>
              </section>

              {/* Global Debt Context */}
              <section id="global-debt" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Understanding National and Global Debt Context
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Debt is not just a personal issue; it is a global one. Terms like <strong>national debt</strong>, <strong>US debt</strong>, and <strong>US national debt</strong> frequently make headlines. The <strong>US debt clock</strong> and <strong>national debt clock</strong> are constantly ticking upwards, showing the trillions of dollars owed by governments. This macroeconomic environment affects interest rates, inflation, and ultimately, the <strong>cost of debt</strong> for individuals.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    While <strong>national debt relief</strong> is a complex macroeconomic topic involving <strong>freedom debt relief</strong> programs and international policy, personal debt operates on a smaller but equally critical scale. Just as nations must manage their <strong>cost of debt</strong> to avoid default, individuals must manage their <strong>net debt</strong> to maintain financial health. When the <strong>debt to income ratio</strong> becomes unsustainable, whether for a country or a person, drastic measures like restructuring or settlement become necessary.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Understanding the <strong>debt meaning</strong> in a broader context helps realize that borrowing is a tool, but one that must be managed carefully. Whether it is the <strong>the debt</strong> of a nation or a household, the principles of responsible management and timely repayment (or settlement) remain the same. The concept of a <strong>debt clock</strong> serves as a stark reminder of how quickly interest can accumulate if left unchecked.
                  </p>
                </div>
              </section>

              {/* Client Reviews */}
              <section id="reviews" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {'★'.repeat(5)}
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      "I was drowning in credit card debt and harassment from collection agencies. CredSettle stopped the calls immediately. They negotiated a 50% reduction on my outstanding balance. I am finally debt free!"
                    </p>
                    <p className="font-semibold text-[#0C2756]">- Rahul S., Mumbai</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {'★'.repeat(5)}
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      "I tried a debt consolidation loan but got rejected. Settlement was my only option. The team explained everything about the process and legal protection. Highly recommend their services."
                    </p>
                    <p className="font-semibold text-[#0C2756]">- Priya M., Pune</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {'★'.repeat(5)}
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      "Dealing with recovery agents was a nightmare. CredSettle handled the debt collectors professionally. I saved lakhs on my personal loan settlement."
                    </p>
                    <p className="font-semibold text-[#0C2756]">- Amit K., Nagpur</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {'★'.repeat(5)}
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      "Professional, transparent, and effective. They helped me understand my rights under RBI guidelines and FDCPA concepts. Best decision I made for my financial future."
                    </p>
                    <p className="font-semibold text-[#0C2756]">- Vikram R., Thane</p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </section>

        {/* FAQ + CTA Section */}
        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              {/* FAQ */}
              <FAQWithSchema
                faqs={faqs}
                title="Frequently Asked Questions About Loan Settlement"
              />

              {/* CTA Section */}
              <div
                className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
                  boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
                }}
              >
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2
                      className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full"
                      style={{ color: '#0C2756' }}
                    >
                      Ready to Settle Your Debt?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Contact CredSettle today for a free analysis. Stop the calls, reduce your debt, and start your journey to financial freedom.
                    </p>
                  </div>

                  <CTAButton>
                    Get Your Free Consultation Now
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  );
}
