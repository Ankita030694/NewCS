'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SBILoanSettlementClient() {
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
    { id: 'rinn-samadhan', label: 'Rinn Samadhan Scheme' },
    { id: 'lok-adalat', label: 'Lok Adalat Settlement' },
    { id: 'arbitration', label: 'SBI Arbitration Process' },
    { id: 'credit-score', label: 'Credit Score Impact' },
    { id: 'process', label: 'Step-by-Step Process' },
    { id: 'benefits', label: 'Benefits of Settlement' },
    { id: 'why-credsettle', label: 'Why Choose Us' },
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
      question: "What is the SBI Rinn Samadhan Scheme 2024-25?",
      answer: "The SBI Rinn Samadhan Scheme 2024-25 is a special One Time Settlement (OTS) initiative launched to help borrowers settle their Non-Performing Assets (NPAs). It offers significant waivers on interest and penalties, allowing you to close your loan by paying a reduced principal amount. It is specifically targeted at agricultural, personal, and SME loans that have been classified as NPA."
    },
    {
      question: "Can I settle my SBI credit card dues through Lok Adalat?",
      answer: "Yes, SBI actively participates in national and state-level Lok Adalats to resolving pending disputes. Credit card dues and personal loan defaults are frequently settled in Lok Adalats. The award passed by the Lok Adalat is final and binding, providing you with a legal closure to the debt."
    },
    {
      question: "What should I do if I receive an arbitration notice from SBI?",
      answer: "Do not ignore an arbitration notice. It means SBI has initiated formal legal proceedings to recover the dues. You should immediately consult with a legal expert or a settlement firm like CredSettle. We can represent you in the arbitration proceedings and negotiate a settlement before a final award is passed against you."
    },
    {
      question: "How does SBI calculate the settlement amount?",
      answer: "The settlement amount is not fixed and varies case by case. Factors influencing the amount include the total outstanding per the date of NPA, the borrower’s current realizable assets, the age of the default, and the specific terms of the active OTS scheme. Typically, settlements range from 30% to 60% of the total outstanding."
    },
    {
      question: "Will settling my SBI loan remove my name from the defaulter list?",
      answer: "Settling the loan will remove your name from the active defaulter list of the bank, and legal actions will stop. However, your CIBIL report will reflect the status as 'Settled' for about 7 years, indicating that the loan was not paid in full. You can rebuild your score over time."
    },
    {
      question: "Is it possible to settle an SBI Home Loan?",
      answer: "Settling a secured loan like a Home Loan is difficult because the bank has the collateral (your property). However, under specific schemes like Rinn Samadhan, if the asset value has eroded or there are legal complications, SBI may consider an OTS for the shortfall amount or under exceptional hardship categories."
    },
    {
      question: "What is the role of a No Dues Certificate (NDC)?",
      answer: "A No Dues Certificate (NDC) is the most critical document you receive after paying the settlement amount. It serves as legal proof that your liability towards the bank is fully extinguished. You must ensure you receive this document from SBI to avoid any future claims."
    },
    {
      question: "Can I pay the settlement amount in installments?",
      answer: "Most OTS schemes, including Rinn Samadhan, prefer different payment structures. You typically pay 10-20% upfront. The remaining balance usually needs to be cleared within 30 to 90 days. Extended installment plans for settlement amounts are rare and subject to bank approval."
    },
    {
      question: "Why should I use CredSettle instead of going to the bank directly?",
      answer: "Going directly can often lead to rejection or higher settlement demands if you don’t know the policies. CredSettle understands the intricacies of SBI’s internal circulars, OTS schemes, and legal framework. We handle the harassment, negotiations, and documentation, ensuring you get the best possible deal with legal protection."
    },
    {
      question: "Does SBI offer settlement for Education Loans?",
      answer: "Yes, Education Loans are eligible for settlement, especially if the student is unemployed or facing severe financial distress. Special concessions are often available in Lok Adalats for education loan settlements."
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
                    SBI
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Introduction to SBI Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The burden of unmanageable debt can be overwhelming, affecting not just your finances but your mental peace and family life. If you have taken a loan from the State Bank of India (SBI) - be it a personal loan, credit card debt, or an education loan - and are finding it impossible to repay due to genuine financial hardships, you are not alone. Thousands of borrowers face situations like job loss, medical emergencies, or business downturns that push them into default.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, default is not the end of the road. SBI, being the largest public sector bank in India, has structured mechanisms to help distressed borrowers exit the debt trap. <strong>SBI Loan Settlement</strong>, primarily through <strong>One Time Settlement (OTS)</strong> schemes like <em>Rinn Samadhan</em> and platforms like <em>Lok Adalat</em>, offers a legal and dignified way to close your loan account by paying a reduced amount.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                CredSettle is India’s leading debt settlement company. We bridge the gap between you and the bank. Our team of legal and financial experts navigates the complex bureaucratic corridors of SBI to negotiate the best possible settlement terms for you, stopping harassment and legal action in its tracks. This guide provides an in-depth look at how you can settle your SBI loan in 2024-25.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Notice: SBI Rinn Samadhan 2024-25</h4>
                <p className="text-blue-800 m-0">
                  SBI has launched the "Rinn Samadhan" scheme for 2024-25, offering waivers on interest and penalties for eligible NPA accounts. This is a limited-time opportunity to settle your debts at a discount.
                </p>
              </div>

              <h2 id="rinn-samadhan" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">SBI Rinn Samadhan Scheme: The Golden Opportunity</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Rinn Samadhan Scheme</strong> is SBI’s flagship One Time Settlement (OTS) initiative designed to reduce the stock of Non-Performing Assets (NPAs). It is a non-discretionary and non-discriminatory scheme, meaning the terms are standardized and applied fairly to all eligible borrowers.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features of the Scheme</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li><strong>Eligibility:</strong> Accounts classified as NPA (Non-Performing Asset) for a specific duration, typically covering Doubtful and Loss assets. It applies to Personal Loans, Agricultural Loans, SME Loans, and Education Loans.</li>
                <li><strong>Waiver:</strong> The scheme offers a substantial waiver on the unapplied interest and penal interest. In many cases, the settlement is done at a percentage of the principal outstanding.</li>
                <li><strong>Payment Terms:</strong> Usually, 10-20% of the settlement amount must be paid upfront as a token of commitment. The remaining balance has to be cleared within a short window, often 30 to 90 days.</li>
                <li><strong>Incentive:</strong> Borrowers who pay the entire settlement amount in one go often receive an additional "Early Bird" incentive discount.</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>Why You Need CredSettle:</strong> While the scheme is standard, the application and approval process can be tricky. Branch officials might not always offer you the best terms upfront. We ensure your application is correctly categorized to maximize the waivers available under the scheme guidelines.
              </p>

              <h2 id="lok-adalat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Settlement Through Lok Adalat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                An increasingly popular and effective method for settling SBI loans is through the <strong>National Lok Adalat</strong>. Organized by NALSA (National Legal Services Authority), Lok Adalats are "People’s Courts" held periodically to resolve disputes amicably.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">How Lok Adalat Settlement Works</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SBI actively refers pending NPA cases to Lok Adalats. If your case is referred, you will receive a notice. Here is why this path is beneficial:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li><strong>Final & Binding:</strong> The award (judgment) passed by the Lok Adalat has the same legal status as a Civil Court decree. It is final and binding on both parties, meaning the bank cannot file a future case for the same debt.</li>
                <li><strong>No Appeal:</strong> There is no provision for appeal against a Lok Adalat award, giving you absolute certainty of closure.</li>
                <li><strong>Speed:</strong> The process is incredibly fast, often concluding in a single day of negotiation.</li>
                <li><strong>Amicable Resolution:</strong> The atmosphere is conciliatory, not adversarial. The focus is on finding a mutual agreement.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                If you receive a Lok Adalat notice, <strong>do not ignore it</strong>. It is a prime opportunity. Bring CredSettle’s experts with you to negotiate the best possible deal in front of the judicial panel.
              </p>

              <h2 id="arbitration" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding SBI Arbitration Proceedings</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike many private banks, SBI frequently utilizes the <strong>Arbitration and Conciliation Act, 1996</strong> to recover dues. Most SBI loan agreements include an arbitration clause, which empowers them to refer disputes to a private arbitrator.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Arbitration Trap</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you default, SBI may send you a legal notice invoking arbitration. If you ignore this, the process continues <em>ex-parte</em> (without you), and the arbitrator will pass an award in favor of the bank for the full amount plus high interest and legal costs. This award can then be executed through a court like a decree, leading to attachment of bank accounts or assets.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Handle Arbitration</h3>
              <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-200">
                <p className="text-gray-800 mb-4"><strong>Step 1: Do Not Panic.</strong> Receiving an arbitration notice is intimidating, but it is a legal process that can be managed.</p>
                <p className="text-gray-800 mb-4"><strong>Step 2: Respond Legally.</strong> You must file a defense statement highlighting your financial hardship and challenging any unfair interest calculations.</p>
                <p className="text-gray-800 mb-0"><strong>Step 3: Seek Settlement.</strong> Use the arbitration platform to propose a settlement. Banks are often willing to settle to avoid the long process of execution. CredSettle specializes in turning arbitration battles into settlement victories.</p>
              </div>

              <h2 id="credit-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on Your Credit Score (CIBIL)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transparency is key. Opting for a loan settlement will impact your credit health. When you pay a reduced amount to close the loan, SBI reports the account status as <strong>"Settled"</strong> to credit bureaus (CIBIL, Experian, etc.).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                  <h4 className="font-bold text-red-700 mb-2">The Impact</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    <li>Score drops by 50-100 points.</li>
                    <li>Remark "Settled" stays for ~7 years.</li>
                    <li>Hard to get new unsecured loans immediately.</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
                  <h4 className="font-bold text-green-700 mb-2">The Silver Lining</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    <li>Stops account from becoming "Written Off".</li>
                    <li>Stops "Suit Filed" status.</li>
                    <li>Debt becomes Zero.</li>
                    <li>Rebuilding can start immediately.</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>The Verdict:</strong> A "Settled" status is better than an open default. An open default means your score drops every month, and you face legal risks. A settlement stops the damage. Once settled, you can use secured credit cards (like FD-backed cards) to rebuild your score within 12-24 months.
              </p>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step SBI Settlement Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling with a PSU bank requires a formal adherence to protocol. Here is the CredSettle roadmap to a successful release:
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Portfolio Analysis</h4>
                    <p className="text-gray-600 mt-2">We analyze your loan statements to catch illegal charges or miscalculations. We assess your eligibility for current schemes like Rinn Samadhan.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Stop the Noise</h4>
                    <p className="text-gray-600 mt-2">We redirect recovery calls to our legal team. We file responses to any arbitration notices or demand letters you have received.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Proposal Submission</h4>
                    <p className="text-gray-600 mt-2">We draft a formal settlement proposal highlighting your hardship (medical, job loss) and submit it to the Regional Manager or Recovery Officer.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Hard Negotiation</h4>
                    <p className="text-gray-600 mt-2">Our experts negotiate with bank officials. We push for maximum waivers on interest and penalties, aiming for a principal-only settlement where possible.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Settlement Letter (OTS)</h4>
                    <p className="text-gray-600 mt-2">We scrutinize the OTS letter issued by the bank to ensure there are no hidden clauses. You pay the amount directly to your loan account.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">6</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Freedom & NOC</h4>
                    <p className="text-gray-600 mt-2">Within 2-3 weeks of payment, we follow up to obtain your No Dues Certificate. We also advise you on checking your CIBIL report after 45 days to ensure the status is updated.</p>
                  </div>
                </div>
              </div>

              <h2 id="benefits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Benefits of Choosing Settlement</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">😌</div>
                  <h4 className="font-bold text-gray-900 mb-2">Peace of Mind</h4>
                  <p className="text-sm text-gray-600">Stop the daily harassment from recovery agents. Sleep peacefully knowing legal experts are handling your case.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">[Money]</div>
                  <h4 className="font-bold text-gray-900 mb-2">Huge Savings</h4>
                  <p className="text-sm text-gray-600">Save up to 50% or more on your total outstanding. Write off accumulated interest and penalties.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">[Scale]</div>
                  <h4 className="font-bold text-gray-900 mb-2">Legal Immunity</h4>
                  <p className="text-sm text-gray-600">Close the door on potential civil suits, arbitration awards, and Section 138 (Cheque Bounce) cases.</p>
                </div>
              </div>

              <h2 id="why-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why CredSettle is Your Best Ally</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling with SBI is different from settling with private banks. The officials are bound by strict vigilance and audit norms. They need a solid file and justification to approve a deep haircut.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>CredSettle brings to the table:</strong>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">PSU Expertise</h5>
                  <p className="text-sm text-gray-600">We know the hierarchy-from Branch Manager to Regional Manager-and who holds the power to approve your OTS.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Arbitration Defense</h5>
                  <p className="text-sm text-gray-600">Our lawyers regularly appear in arbitration proceedings to defend borrowers and force settlements.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Lok Adalat specialists</h5>
                  <p className="text-sm text-gray-600">We guide you through the Lok Adalat process to ensure you walk out with a binding settlement decree.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Transparent Fees</h5>
                  <p className="text-sm text-gray-600">Our fee structure is transparent. We win when you save.</p>
                </div>
              </div>

              {/* Review Snippets */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Client Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Rakesh Gupta, Lucknow</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I had a 5-year old SBI education loan I couldn’t pay due to unemployment. The bank sent an arbitration notice. CredSettle attended the hearing and got me an OTS under Rinn Samadhan. I paid only 40% of the claim."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Sneha Patil, Mumbai</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"My father’s medical bills forced me to max out my SBI Crderit Card. I was trapped in debt. CredSettle negotiated a settlement through Lok Adalat. The process was fast and dignified."</p>
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
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Got a Notice?</h4>
                <p className="text-sm text-gray-600 mb-6">Arbitration notice or recovery calls? We can help.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Get Legal Help
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v Stop Harassment</p>
                  <p className="mt-1">v Rinn Samadhan Expert</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      HDFC Settlement
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
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
