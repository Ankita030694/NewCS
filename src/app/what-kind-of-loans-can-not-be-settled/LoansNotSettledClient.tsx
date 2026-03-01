'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoansNotSettledClient() {
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
    { id: 'understanding-loan-settlement', label: 'Understanding Loan Settlement' },
    { id: 'secured-vs-unsecured', label: 'Secured vs Unsecured: The Core Difference' },
    { id: 'npa-stages', label: 'NPA Stages & Timeline' },
    { id: 'secured-loans', label: 'Why Secured Loans Are Hard to Settle' },
    { id: 'home-loans', label: 'Home Loans & SARFAESI' },
    { id: 'car-loans', label: 'Car & Auto Loans' },
    { id: 'gold-loans', label: 'Gold Loans' },
    { id: 'student-loans', label: 'Student & Education Loans' },
    { id: 'guarantors-rights', label: 'Rights of Guarantors' },
    { id: 'fraud-wilful-default', label: 'Fraud & Wilful Default' },
    { id: 'unsecured-loans-settlement', label: 'Settlement for Unsecured Loans' },
    { id: 'settlement-process', label: 'Step-by-Step Settlement Process' },
    { id: 'lok-adalat', label: 'Role of Lok Adalat' },
    { id: 'tax-implications', label: 'Tax Implications' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'consolidation-vs-settlement', label: 'Consolidation vs Settlement' },
    { id: 'dos-and-donts', label: 'Dos and Donts' },
    { id: 'glossary', label: 'Banking Glossary' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: "What kind of loans can NOT be settled in India?",
      answer: "Generally, secured loans such as home loans, car loans, gold loans, and loans against property are very difficult to settle because the lender has collateral they can seize. Additionally, loans involving fraud or wilful default are often restricted from settlement under strict RBI guidelines, although recent amendments allow some exceptions with rigorous checks."
    },
    {
      question: "Can I settle my home loan if I cannot pay?",
      answer: "Settling a home loan is rare. Lenders prefer to auction the property under the SARFAESI Act to recover their dues. Settlement is usually only considered if the property value has significantly depreciated below the loan amount or if there are legal disputes preventing the sale. Even then, the bank will try to recover as much as possible."
    },
    {
      question: "Are student loans eligible for settlement?",
      answer: "Education loans in India, especially up to ₹4 lakhs which are often unsecured, can theoretically be settled. However, government-backed schemes and subsidies might have specific rules. If the loan is secured by property or a guarantee, settlement becomes harder. Lenders may offer restructuring first."
    },
    {
      question: "What happens if I default on a secured loan?",
      answer: "If you default on a secured loan like a car or gold loan, the lender has the legal right to seize the asset without court intervention in many cases. For home loans, they can initiate proceedings under the SARFAESI Act to take possession and auction the house. Your credit score will also be severely impacted."
    },
    {
      question: "Can wilful defaulters settle their loans?",
      answer: "Historically, wilful defaulters were barred from settlement. However, recent RBI circulars (June 2023) have allowed banks to undertake compromise settlements with wilful defaulters, subject to board approval and a cooling-off period before any new credit can be sanctioned. This is a controversial but available provision."
    },
    {
      question: "Does settling a loan ruin my CIBIL score?",
      answer: "Yes, settling a loan will negatively impact your CIBIL score. The account status will be reported as 'Settled' rather than 'Closed', which indicates to future lenders that you did not repay the full amount. This can drop your score by 75-100 points or more and stays on your report for up to 7 years."
    },
    {
      question: "What is the difference between loan restructuring and settlement?",
      answer: "Restructuring involves changing the terms of your loan (like increasing tenure or lowering EMI) to make it easier to pay, but you still pay the full principal. Settlement involves negotiating to pay a lower lump sum to close the account, forgiving a portion of the debt. Restructuring is better for your credit score than settlement."
    },
    {
      question: "Can I use Lok Adalat for settlement?",
      answer: "Yes, Lok Adalats are highly effective for settling disputes related to loan recovery, especially for amounts up to ₹20 lakhs or pending Section 138 cases. A settlement reached in a Lok Adalat is deemed a decree of a civil court and is final and binding on all parties. No appeal lies against such an award."
    },
    {
      question: "Is the waived loan amount taxable?",
      answer: "Technically, under Section 41(1) of the Income Tax Act, remission of a trading liability can be treated as income. However, for individual personal loans which were not used for business or profession, the waiver is generally not treated as taxable income, though tax laws are subject to interpretation by the assessing officer."
    },
    {
      question: "Can the bank sue my guarantor?",
      answer: "Yes. Under Section 128 of the Indian Contract Act, the liability of the surety (guarantor) is co-extensive with that of the principal debtor. This means the bank can choose to sue the guarantor directly to recover the dues without even exhausting remedies against the borrower first."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                    Resources
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    What Kind of Loans Can Not Be Settled
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout - 3 Column */}
      <div className="max-w-8xl mx-auto px-4 py-12">
        
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
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-justify">
              
              {/* Introduction */}
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Introduction: Navigating Loan Settlement in India</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Financial distress can strike anyone. A sudden job loss, a medical emergency, or a business failure can turn manageable EMIs into an overwhelming burden. When you find yourself unable to repay your loans, the concept of <strong>loan settlement</strong> usually comes up as a potential lifeline. It offers a way to close your loan account by paying a lump sum amount that is less than what you actually owe, thereby becoming debt-free.
                </p>
                <p className="mb-4">
                  However, a common misconception is that <em>any</em> loan can be settled. This is not true. While banks and NBFCs (Non-Banking Financial Companies) are generally open to negotiating, the type of loan you have dictates their willingness to settle. Understanding <strong>what kind of loans can not be settled</strong> is crucial before you stop payments or approach your lender for a compromise.
                </p>
                <p>
                  This comprehensive guide will walk you through the nuances of loan settlement in India. We will explore why <strong>secured loans</strong> are incredibly difficult to settle, the legal powers banks have under the <strong>SARFAESI Act</strong>, and which loans are actually eligible for relief. Our goal is to empower you with knowledge so you can make informed decisions about your financial future.
                </p>
              </div>

              {/* Understanding Loan Settlement */}
              <h2 id="understanding-loan-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding the Concept of Loan Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Before we dive into the exclusions, let us clarify what settlement is. It is a formal agreement between a borrower and a lender. The lender agrees to accept a smaller amount (the settlement amount) instead of the full outstanding principal and interest. In return, they forgive the remaining balance. The loan account is then closed, but it is marked as "Settled" in your credit report.
                </p>
                <p className="mb-4">
                  Banks agreed to this only when:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>The cost of pursuing legal action to recover the money is higher than the amount they would lose by settling.</li>
                  <li>The borrower has no assets that can be easily seized and sold to recover the dues.</li>
                  <li>There is a genuine inability to pay (financial hardship).</li>
                </ul>
                <p>
                  This logic naturally divides loans into two categories: those backed by assets (secured) and those that are not (unsecured). The former is where settlement becomes a challenge.
                </p>
              </div>

              {/* Secured vs Unsecured - Comparison Table */}
              <h2 id="secured-vs-unsecured" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Secured vs Unsecured: The Core Difference</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The primary factor determining settlability is whether the loan is secured or unsecured.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full text-left bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 border-b border-gray-200 font-semibold text-gray-700">Feature</th>
                        <th className="px-6 py-3 border-b border-gray-200 font-semibold text-gray-700">Secured Loans</th>
                        <th className="px-6 py-3 border-b border-gray-200 font-semibold text-gray-700">Unsecured Loans</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4">Collateral</td>
                        <td className="px-6 py-4">Yes (House, Car, Gold)</td>
                        <td className="px-6 py-4">No</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Lender's Recourse</td>
                        <td className="px-6 py-4">Seize and sell asset (SARFAESI)</td>
                        <td className="px-6 py-4">Civil Suit / Cheque Bounce Case</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Settlement Probability</td>
                        <td className="px-6 py-4 text-red-600 font-bold">Very Low</td>
                        <td className="px-6 py-4 text-green-600 font-bold">High</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Examples</td>
                        <td className="px-6 py-4">Home Loan, Loan Against Property</td>
                        <td className="px-6 py-4">Credit Card, Personal Loan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

               {/* NPA Stages Summary */}
              <h2 id="npa-stages" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">NPA Stages & Timeline</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Settlement does not happen overnight. It typically occurs after the loan has turned into a Non-Performing Asset (NPA). Understanding the NPA timeline helps you know when to negotiate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-bold text-green-800">SMA-0 (0-30 Days)</h4>
                    <p className="text-sm text-green-700">Payment is overdue by up to 30 days. The bank will send gentle reminders.</p>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-bold text-yellow-800">SMA-1 (31-60 Days)</h4>
                    <p className="text-sm text-yellow-700">Overdue by 31-60 days. Collection calls become more frequent.</p>
                  </div>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-bold text-orange-800">SMA-2 (61-90 Days)</h4>
                    <p className="text-sm text-orange-700">The danger zone. If you cross 90 days, your account becomes NPA.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-bold text-red-800">NPA ({'>'}90 Days)</h4>
                    <p className="text-sm text-red-700">The loan is officially a "Non-Performing Asset". Legal recovery proceedings can begin. Settlement discussions usually start here.</p>
                  </div>
                </div>
              </div>

              {/* Secured Loans */}
              <h2 id="secured-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Secured Loans Are Hard to Settle</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  <strong>Secured loans</strong> are loans where you pledge an asset as collateral. This could be your house, your car, gold jewelry, or a fixed deposit. From a lender's perspective, these are low-risk loans. If you default, they do not need to beg you for payment; they can simply take your asset.
                </p>
                <p className="mb-4">
                  Because they have this security blanket, banks have very little incentive to settle a secured loan for a lower amount. Why would they accept ₹5 lakhs on a ₹10 lakh loan if they can sell your pledged car for ₹8 lakhs?
                </p>
                <p>
                  Therefore, generally speaking, <strong>secured loans can not be settled</strong> easily. While there are exceptions, they are rare and come with significant complications. Let us look at specific types of secured loans.
                </p>
              </div>

              {/* Home Loans */}
              <h2 id="home-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Home Loans and the SARFAESI Act</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  A home loan is the most common high-value secured loan. If you stop paying your home loan EMIs, the bank categorizes your account as an NPA (Non-Performing Asset) after 90 days. Once it is an NPA, they initiate recovery proceedings.
                </p>
                <p className="mb-4">
                  In India, the <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002</strong>, gives banks immense power. It allows them to seize your property and auction it to recover their dues <em>without intervention from the courts</em>.
                </p>
                <p className="mb-4">
                  <strong>Can you settle a home loan?</strong> Most likely, no. The bank will prefer to auction the house. Settlement usually only happens if:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>The property value has crashed significantly and is less than the loan amount (negative equity).</li>
                  <li>There are legal disputes over the property title that make it hard for the bank to sell it.</li>
                  <li>The borrower can prove extreme hardship, and the bank wants to avoid the bad publicity of an eviction.</li>
                </ul>
                <p>
                  Even in these cases, the "settlement" usually involves selling the house yourself to pay off the bank, rather than the bank forgiving a large chunk of money.
                </p>
              </div>

              {/* Car Loans */}
              <h2 id="car-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Car Loans and Vehicle Repossession</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Car loans or auto loans are secured by the vehicle itself. If you default, the lender's recovery agents will seize the vehicle. This is often a swift process. Once repossessed, the car is auctioned.
                </p>
                <p className="mb-4">
                  <strong>Why settlement is difficult:</strong> Cars are liquid assets. There is a robust used car market. The lender knows they can quickly recover a significant portion of the loan by selling the car.
                </p>
                <p>
                  A settlement might be possible only if the car has been involved in a major accident (total loss) and the insurance claim is insufficient, or if the car is very old and its resale value is negligible compared to the outstanding debt. Otherwise, expect the lender to take the car rather than a reduced payment.
                </p>
              </div>

              {/* Gold Loans */}
              <h2 id="gold-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Gold Loans: The Impossibility of Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Gold loans are perhaps the safest loans for lenders and the hardest to settle for borrowers. Gold is a highly liquid asset with a universally recognized value that often appreciates over time.
                </p>
                <p className="mb-4">
                  If you default on a gold loan, the lender will simply auction the gold jewelry. They are legally required to give you notice, but if you do not pay, the gold is sold. Any amount recovered over the dues is returned to you, but usually, the lender recovers their full principal and interest.
                </p>
                <p>
                  There is almost zero incentive for a lender to settle a gold loan. You either pay to release your pledglor or you lose the gold.
                </p>
              </div>

              {/* Loan Against Property */}
              <h2 id="loan-against-property" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Loan Against Property (LAP)</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Similar to a home loan, a Loan Against Property (LAP) is secured by real estate (residential or commercial). The dynamics are identical to home loans. The SARFAESI Act applies here as well.
                </p>
                <p className="mb-4">
                  Since LAP is often used for business purposes, the loan amounts can be high. Banks will aggressively pursue the sale of the property. Settlement is a distant last resort for them. If you are struggling with a LAP, your best option is usually to sell the property yourself at market rate to clear the debt, rather than waiting for a bank auction which often fetches a lower price.
                </p>
              </div>

              {/* Student Loans */}
              <h2 id="student-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Student Loans: A Complex Category</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Education loans in India fall into a grey area. Loans up to ₹4 lakhs are typically unsecured (no collateral or third-party guarantee required). Loans between ₹4 lakhs and ₹7.5 lakhs usually require a third-party guarantee. Loans above ₹7.5 lakhs require tangible collateral.
                </p>
                <p className="mb-4">
                  <strong>Can they be settled?</strong>
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Unsecured (below ₹4L):</strong> Yes, these can be settled like personal loans if there is genuine hardship (e.g., student remains unemployed).</li>
                  <li><strong>Secured (above ₹7.5L):</strong> Difficult, because of the collateral.</li>
                </ul>
                <p>
                  However, there is a moral and social pressure on banks regarding student loans. The government often has interest subsidy schemes. Banks may offer <strong>restructuring</strong> (extending the moratorium period) rather than settlement. Also, for loans with a guarantor, the bank will harass the guarantor (often parents) for payment before agreeing to settle.
                </p>
              </div>

              {/* Guarantors */}
              <h2 id="guarantors-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Rights and Risks of Guarantors</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Often, loans (especially education or business loans) have a co-signer or a guarantor. If you are a guarantor, you need to understand your position.
                </p>
                <div className="bg-red-50 p-4 border-l-4 border-red-500 mb-4">
                  <p className="font-bold text-red-900">Critical Legal Fact:</p>
                  <p className="text-red-800">Under Section 128 of the Indian Contract Act, the liability of the surety (guarantor) is co-extensive with that of the principal debtor.</p>
                </div>
                <p className="mb-4">
                  This means if the borrower defaults, the bank can directly sue <strong>you</strong> (the guarantor) without even trying to recover money from the borrower first. Your assets can be attached, and your credit score will suffer just as much as the borrower's.
                </p>
                <p>
                  <strong>Can a guarantor settle the loan?</strong> Yes. In fact, many settlements happen because the guarantor steps in to pay a lump sum to save their own reputation and credit score. The bank is usually happy to accept a settlement from a guarantor if the primary borrower has disappeared or is insolvent.
                </p>
              </div>

              {/* Fraud & Wilful Default */}
              <h2 id="fraud-wilful-default" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Loans Involving Fraud or Wilful Default</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  This is a critical regulatory category. A "Wilful Defaulter" is someone who has the capacity to pay but chooses not to, or who has diverted the loan funds for other purposes.
                </p>
                <p className="mb-4">
                  Historically, the RBI strictly prohibited banks from entertaining settlement offers from wilful defaulters or those classified as fraud. The logic was to avoid rewarding bad behavior.
                </p>
                <p className="mb-4">
                  However, in a controversial move in <strong>June 2023</strong>, the RBI issued circulars allowing banks to undertake <strong>compromise settlements</strong> even with wilful defaulters. This was done to help banks clean up their balance sheets.
                </p>
                <p>
                  <strong>The Catch:</strong> While theoretically possible now, such settlements are subject to strict scrutiny.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>They require approval from the bank's Board of Directors.</li>
                  <li>There is a mandatory "cooling-off" period (min 12 months) before the borrower can get any new loan.</li>
                  <li>Criminal proceedings against the defaulter can continue despite the settlement.</li>
                </ul>
                <p>
                  So, if you are tagged as a wilful defaulter, do not expect an easy settlement. It will be a rigorous, bureaucratic process.
                </p>
              </div>

              {/* Unsecured Loans Settlement */}
              <h2 id="unsecured-loans-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Silver Lining: Loans That CAN Be Settled</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  If you are drowning in debt, do not lose hope. The vast majority of financial stress comes from <strong>unsecured loans</strong>, and these are the prime candidates for settlement.
                </p>
                <p className="mb-4">
                  <strong>Eligible for Settlement:</strong>
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Credit Card Debt:</strong> The most common type of settled debt. High interest rates make balances balloon quickly. Banks are often willing to settle to recover at least the principal.</li>
                  <li><strong>Personal Loans:</strong> Unsecured loans for travel, weddings, or medical needs.</li>
                  <li><strong>Consumer Durable Loans:</strong> Loans for electronics or appliances.</li>
                  <li><strong>Business Loans (Unsecured):</strong> Small business loans that did not require collateral.</li>
                </ul>
                <p>
                  In these cases, the lender has no asset to seize. Their only legal recourse is filing a civil suit or a cheque bounce case (Section 138 of NI Act). These legal battles are long and expensive in India. Therefore, if you can prove you genuinely have no money, they will often agree to a <strong>One-Time Settlement (OTS)</strong> to close the file.
                </p>
              </div>

               {/* Step-by-Step Settlement Process */}
              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Process for Settling an Unsecured Loan</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  If you have an unsecured loan that you cannot pay, here is the roadmap to a successful settlement:
                </p>
                <ol className="list-decimal pl-6space-y-4">
                  <li className="mb-2">
                    <strong>Stop Payments & Accumulate Funds:</strong> You cannot settle if you are still paying EMIs. You need to demonstrate inability to pay. Meanwhile, save whatever cash you can (20-40% of the principal) to offer as a settlement amount.
                  </li>
                  <li className="mb-2">
                    <strong>Representation:</strong> Hire a professional service like CredSettle. Handling recovery agents yourself can be traumatic. We take over the communication.
                  </li>
                  <li className="mb-2">
                    <strong>Hardship Letter:</strong> We submit a formal letter to the bank explaining your financial crisis (job loss, medical reports, etc.) and your intent to settle.
                  </li>
                  <li className="mb-2">
                    <strong>Negotiation:</strong> The bank will start high (maybe 80% of total dues). We negotiate it down. This happens in layers—first with the collection agency, then the branch manager, and finally the regional or nodal officer who has the authority to approve deep waivers.
                  </li>
                  <li className="mb-2">
                    <strong>Settlement Letter:</strong> <span className="text-red-600 font-bold">CRITICAL STEP.</span> Never pay a single rupee without an official settlement letter from the bank. This letter must state the exact amount, the due date, and that this payment will be "Full and Final Settlement".
                  </li>
                  <li className="mb-2">
                    <strong>Payment & NDC:</strong> You transfer the funds. Within 15-45 days, the bank issues a No Dues Certificate or a Settlement Letter confirm closure.
                  </li>
                </ol>
              </div>

              {/* Lok Adalat */}
              <h2 id="lok-adalat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Role of Lok Adalat in Loan Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  For many borrowers, the "Lok Adalat" (People's Court) is an excellent venue for settlement. Organized by the National Legal Services Authority (NALSA), these courts are held regularly across India.
                </p>
                <p className="mb-4">
                  <strong>Why it works:</strong> Banks bring thousands of NPA cases to the Lok Adalat to clear their backlog. They are often willing to offer generous discounts (waivers) on the spot to close the file.
                </p>
                <p className="mb-4">
                  If your case is referred to a Lok Adalat, you can appear (or your lawyer can), negotiate with the bank officer present, and reach an agreement. The award passed by a Lok Adalat is final and binding. No appeal lies against it in any court, which gives you absolute legal finality.
                </p>
              </div>

              {/* Tax Implications */}
              <h2 id="tax-implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Tax Implications of Loan Waivers</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  A question we often get is: <em>"If the bank waives ₹5 lakhs of my debt, do I have to pay tax on that ₹5 lakhs?"</em>
                </p>
                <div className="bg-blue-50 p-4 border-l-4 border-blue-500 mb-4">
                  <p className="text-blue-900">
                    <strong>Short Answer:</strong> Generally, no for personal loans. Yes, possibly for business loans.
                  </p>
                </div>
                <p className="mb-4">
                   Under <strong>Section 41(1) of the Income Tax Act</strong>, remission of a trading liability is treated as income. So, if a business took a loan, claimed interest as an expense, and then got the principal waived, that waiver might be taxed as business income.
                </p>
                <p>
                  However, for individual borrowers settling personal loans or credit card debt, the courts have generally held that the waiver of a loan (capital receipt) is not income. However, tax laws are complex and subject to interpretation. We always recommend consulting a CA post-settlement.
                </p>
              </div>

              {/* Case Studies */}
              <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Real-Life Case Scenarios</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                
                <h3 className="font-bold text-xl text-gray-800 mb-2">Scenario A: The Home Loan Crisis</h3>
                <p className="italic text-gray-600 mb-2">Background: Mr. Sharma defaulted on his home loan of ₹50 Lakhs due to business loss. Property value was ₹65 Lakhs.</p>
                <p className="mb-4">
                  <strong>Outcome:</strong> Mr. Sharma tried to settle for ₹30 Lakhs. The bank refused. They invoked the SARFAESI Act, took possession of the house, and auctioned it for ₹60 Lakhs. They took their ₹50 Lakhs + interest + legal costs, and returned the small balance to Mr. Sharma.
                  <br/>
                  <strong>Lesson:</strong> Secured loans rarely settle unless the asset value is zero.
                </p>

                <h3 className="font-bold text-xl text-gray-800 mb-2">Scenario B: The Credit Card Trap</h3>
                <p className="italic text-gray-600 mb-2">Background: Ms. Priya had a credit card debt of ₹8 Lakhs. She lost her job and stopped paying. Recovery agents started harassing her.</p>
                <p className="mb-4">
                  <strong>Outcome:</strong> She hired CredSettle. We directed all calls to us. After 4 months of negotiation, we proved she only had ₹3 Lakhs from her PF savings. The bank agreed to a One-Time Settlement (OTS) of ₹3 Lakhs. She saved ₹5 Lakhs.
                  <br/>
                  <strong>Lesson:</strong> Unsecured loans can be settled with significant savings if handled professionally.
                </p>

                <h3 className="font-bold text-xl text-gray-800 mb-2">Scenario C: The Guarantor's Nightmare</h3>
                <p className="italic text-gray-600 mb-2">Background: Mr. Singh stood as guarantor for his friend's ₹10 Lakh business loan. The friend fled the country.</p>
                <p className="mb-4">
                  <strong>Outcome:</strong> The bank sent a notice to Mr. Singh to attach his salary. To save his job and reputation, Mr. Singh had to negotiate with the bank. He eventually settled the loan for ₹6 Lakhs from his own pocket.
                  <br/>
                  <strong>Lesson:</strong> Never become a guarantor unless you are ready to pay the loan yourself.
                </p>
              </div>

              {/* RBI Guidelines */}
              <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Crucial RBI Guidelines You Must Know</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The Reserve Bank of India has laid down fair practices codes that protect you during the settlement process.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Right to Fair Treatment:</strong> Recovery agents cannot harass you, call at odd hours, or use abusive language.</li>
                  <li><strong>Settlement Policies:</strong> Every bank must have a board-approved policy for compromise settlements. It cannot be arbitrary.</li>
                  <li><strong>Regulatory Oversight:</strong> The RBI recently mandated that banks must have a mechanism to review settlement offers from borrowers.</li>
                </ul>
                <p>
                  Knowing these guidelines helps you negotiate better. If a bank refuses to settle an unsecured loan despite your genuine hardship, you can cite these regulations or approach the Banking Ombudsman.
                </p>
              </div>

              {/* Legal Consequences */}
              <h2 id="legal-consequences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Legal Consequences of Defaulting</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  While settlement is an option, defaulting on loans to reach that stage has consequences.
                </p>
                <p className="mb-4">
                  <strong>Cheque Bounce Cases:</strong> The most common legal tool used by lenders is filing a case under Section 138 of the Negotiable Instruments Act if your EMI cheque or ACH instruction bounces. This is a criminal offense. However, it is bailable and compoundable - meaning if you agree to pay (or settle), the case is dropped.
                </p>
                <p className="mb-4">
                  <strong>Arbitration:</strong> Many loan agreements have arbitration clauses. The lender may appoint an arbitrator to pass an award against you.
                </p>
                <p className="mb-4">
                  <strong>Debt Recovery Tribunals (DRT):</strong> For debts above ₹20 lakhs, banks can approach the DRT for faster recovery.
                </p>
                <p>
                  Professional settlement services like CredSettle help you navigate these legal threats. By engaging with the lender proactively, we can often prevent these legal actions or get them withdrawn as part of the settlement agreement.
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
                      &quot;I thought I was trapped with my car loan. CredSettle explained why it couldn't be settled but helped me restructure it. Their advice on my credit card debt was spot on - we settled that and freed up cash flow.&quot;
                    </p>
                    <p className="font-semibold text-blue-900">- Rajesh V., Delhi</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      &quot;The bank was threatening to auction my house under SARFAESI. The legal team at CredSettle stepped in, bought us time, and helped us sell the property at a market rate instead of a distress sale value.&quot;
                    </p>
                    <p className="font-semibold text-blue-900">- Anjali P., Bangalore</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      &quot;I was worried about legal action for my personal loans. They handled the harassment calls and negotiated a 45% waiver. Professional and trustworthy.&quot;
                    </p>
                    <p className="font-semibold text-blue-900">- Karun S., Chennai</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      &quot;Clear guidance on which loans to prioritize. They stopped me from defaulting on my gold loan, which would have been a disaster. Highly knowledgeable team.&quot;
                    </p>
                    <p className="font-semibold text-blue-900">- Meera K., Hyderabad</p>
                  </div>
                </div>
              </section>

              {/* Debt Consolidation vs Settlement */}
              <h2 id="consolidation-vs-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Consolidation vs. Loan Settlement: What's the Difference?</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Many borrowers confuse these two strategies. It is vital to understand which one is right for you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2">Debt Consolidation</h4>
                    <p className="text-sm text-blue-800 mb-2"><strong>What is it?</strong> Taking a single new loan (usually low-interest) to pay off multiple high-interest loans.</p>
                    <p className="text-sm text-blue-800 mb-2"><strong>Credit Score:</strong> Requires a GOOD credit score (700+). It helps improve your score over time.</p>
                    <p className="text-sm text-blue-800"><strong>Outcome:</strong> You pay the full amount but with lower EMIs.</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-orange-900 mb-2">Loan Settlement</h4>
                    <p className="text-sm text-orange-800 mb-2"><strong>What is it?</strong> Negotiating with the lender to pay less than what you owe to close the account.</p>
                    <p className="text-sm text-orange-800 mb-2"><strong>Credit Score:</strong> Done when credit score is already damaged or you are in default. It lowers your score further.</p>
                    <p className="text-sm text-orange-800"><strong>Outcome:</strong> You become debt-free by paying 50-60% of the value.</p>
                  </div>
                </div>
              </div>

              {/* Dos and Don'ts */}
              <h2 id="dos-and-donts" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Dos and Don'ts of Loan Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="flex items-center font-bold text-green-700 mb-4 text-xl">
                      <span className="bg-green-100 p-2 rounded-full mr-2">✓</span> Dos
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">✓</span>
                        <span><strong>Communicate in Writing:</strong> Always have an email trail of your negotiations.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">✓</span>
                        <span><strong>Ask for the Settlement Letter:</strong> Ensure it mentions specific loan account numbers.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">✓</span>
                        <span><strong>Record Calls:</strong> If agents are abusive, record the calls as evidence for the Banking Ombudsman.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">✓</span>
                        <span><strong>Keep the NOC:</strong> Store the No Objection Certificate safely forever.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center font-bold text-red-700 mb-4 text-xl">
                      <span className="bg-red-100 p-2 rounded-full mr-2">✗</span> Don'ts
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-bold">✗</span>
                        <span><strong>Don't Share Banking Passwords:</strong> Never give recovery agents access to your accounts.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-bold">✗</span>
                        <span><strong>Don't Issue Post-Dated Cheques:</strong> They can be used to file false 138 cases against you during negotiation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-bold">✗</span>
                        <span><strong>Don't Agree to "Verbal" Promises:</strong> If it's not on paper, it doesn't exist.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-bold">✗</span>
                        <span><strong>Don't Ignore Legal Notices:</strong> Always reply to a legal notice through a lawyer.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

               {/* Glossary */}
              <h2 id="glossary" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Glossary of Key Banking Terms</h2>
              <div className="text-gray-700 leading-relaxed mb-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <dl className="space-y-4">
                  <div>
                    <dt className="font-bold text-gray-900">NPA (Non-Performing Asset)</dt>
                    <dd className="text-sm text-gray-600">A loan account where the borrower has stopped paying interest or principal for 90 days.</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-900">OTS (One-Time Settlement)</dt>
                    <dd className="text-sm text-gray-600">A scheme offered by banks to settle debts by accepting a lump sum payment lower than the total dues.</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-900">SARFAESI Act</dt>
                    <dd className="text-sm text-gray-600">A law that allows banks to auction residential or commercial properties to recover loans without going to court.</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-900">Written Off</dt>
                    <dd className="text-sm text-gray-600">When a bank removes a bad loan from its assets list to clean its balance sheet. However, the borrower is still liable to pay.</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-900">Lien</dt>
                    <dd className="text-sm text-gray-600">A right to keep possession of property belonging to another person until a debt owed by that person is discharged.</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-900">Principal Outstanding</dt>
                    <dd className="text-sm text-gray-600">The actual loan amount you took and have not repaid, excluding interest and penalties.</dd>
                  </div>
                </dl>
              </div>

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
                <h4 className="font-bold text-xl text-gray-900 mb-2">Struggling with Debt?</h4>
                <p className="text-sm text-gray-600 mb-6">Know which loans can be settled and save up to 50%.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Expert Advice
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ Free Initial Analysis</p>
                  <p className="mt-1">✓ Stop Harassment</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Related Guides</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/services/loan-settlement" className="hover:text-blue-600 transition-colors">
                      Loan Settlement Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/credit-card-settlement" className="hover:text-blue-600 transition-colors">
                      Credit Card Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/personal-loan-settlement" className="hover:text-blue-600 transition-colors">
                      Personal Loan Settlement
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
