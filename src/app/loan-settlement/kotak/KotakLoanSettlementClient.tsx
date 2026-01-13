'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function KotakLoanSettlementClient() {
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
    { id: 'what-is-settlement', label: 'What is Settlement?' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'process', label: 'Process' },
    { id: 'documents', label: 'Documents' },
    { id: 'credit-score', label: 'Credit Score' },
    { id: 'why-credsettle', label: 'Why Us' },
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
      question: "What is the Kotak loan settlement process?",
      answer: "The Kotak loan settlement process, often called One-Time Settlement (OTS), allows borrowers to pay a reduced lump sum amount to close their loan account. This is typically available for unsecured loans like personal loans and credit cards when the borrower is unable to repay the full amount due to financial hardship."
    },
    {
      question: "Can I settle my Kotak credit card dues?",
      answer: "Yes, Kotak credit card dues can be settled. If you have defaulted on payments for over 90 days and your account is classified as NPA, you can approach the bank for a settlement to clear the debt at a reduced value."
    },
    {
      question: "How much discount can I get in Kotak loan settlement?",
      answer: "Settlement discounts vary based on individual cases, but borrowers can typically save between 30% to 50% on the total outstanding principal and interest. In some severe hardship cases, waivers can be even higher."
    },
    {
      question: "Will settling my Kotak loan affect my CIBIL score?",
      answer: "Yes, a settlement is reported to credit bureaus as 'Settled', which negatively impacts your CIBIL score compared to a 'Closed' status. However, it is better than a 'Written Off' status or continuing to be in default."
    },
    {
      question: "How do I get a foreclosure letter from Kotak after settlement?",
      answer: "After paying the agreed settlement amount, Kotak Mahindra Bank will issue a 'No Dues Certificate' or settlement closure letter. This documents that your liability is extinguished. Ensure you receive this to avoid future claims."
    },
    {
      question: "Is it possible to settle a Kotak personal loan?",
      answer: "Yes, unsecured personal loans from Kotak Mahindra Bank are eligible for settlement if you can prove genuine financial distress, such as job loss or medical emergency."
    },
    {
      question: "How long does the Kotak settlement process take?",
      answer: "The process usually takes 2-4 weeks, depending on the speed of negotiations and internal approvals at the bank. Having a professional negotiator can expedite this."
    },
    {
      question: "Can Kotak Bank take legal action for non-payment?",
      answer: "Banks have the right to initiate legal proceedings for recovery. However, engaging in a settlement discussion shows intent to resolve the debt, often putting legal actions on hold."
    },
    {
      question: "Do I need a lawyer for Kotak loan settlement?",
      answer: "It is highly recommended to have legal representation or a professional settlement firm like CredSettle. We handle harassment from agents and ensure the settlement terms are legally sound and in your best interest."
    },
    {
      question: "What documents are required for Kotak loan settlement?",
      answer: "You typically need your loan statements, KYC documents, and proof of financial hardship (like a termination letter or medical records) to support your settlement request."
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
                    Kotak
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
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-justify">
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Introduction to Kotak Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Are you feeling the overwhelming pressure of unpaid Kotak Mahindra Bank loans or mounting credit card bills? You are not alone. Financial instability can strike anyone unexpectedly—be it due to a sudden job layoff, a health crisis, or business setbacks. When these challenges arise, keeping up with Equated Monthly Installments (EMIs) often becomes impossible, leading to a cycle of debt, stress, and relentless calls from recovery agents.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                However, there is a legitimate, legal, and dignified way out. Kotak Loan Settlement, technically known as a One-Time Settlement (OTS), is a process designed for borrowers who genuinely cannot repay their full dues. It allows you to close your loan account by paying a mutually agreed negotiated amount, often significantly lower than what you owe. CredSettle is here to guide you through this complex process, ensuring you get the best possible deal while protecting your rights and mental peace.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Did You Know?</h4>
                <p className="text-blue-800 m-0">
                  A loan settlement is not a favor from the bank; it is a standard banking procedure for recovering Non-Performing Assets (NPAs). You have the right to propose a settlement if you can prove financial hardship.
                </p>
              </div>

              <h2 id="what-is-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding Kotak Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kotak Mahindra Bank's loan settlement process is a strategic financial resolution mechanism. When a borrower defaults on payments for more than 90 days, the loan account is classified as a Non-Performing Asset (NPA). At this stage, the bank realizes that recovering the full amount (Principal + Interest + Penalties) is unlikely and expensive due to potential legal costs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                To mitigate their losses, the bank may agree to a settlement. In this arrangement, you pay a lump sum amount—negotiated down from the total outstanding—to close the account forever. For the borrower, this means an end to the debt trap, cessation of interest accumulation, and a halt to recovery harassment.
              </p>

              <h3 id="eligible-loans" className="text-2xl font-bold text-gray-900 mb-4 mt-8 scroll-mt-28">Which Kotak Loans Can Be Settled?</h3>
              <p className="text-gray-700 mb-4">Generally, unsecured loans are the primary candidates for settlement. Since these loans are not backed by collateral (like a house or car), the bank has higher risk and is more willing to settle to recover funds.</p>
              <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li><strong>Kotak Personal Loans:</strong> High-interest unsecured loans taken for personal needs.</li>
                <li><strong>Kotak Credit Cards:</strong> Credit card debt often carries the highest interest rates and penalties, making it a prime candidate for settlement.</li>
                <li><strong>Consumer Durable Loans:</strong> Loans for electronics or appliances.</li>
                <li><strong>Unsecured Business Loans:</strong> Loans taken for business purposes without collateral.</li>
              </ul>

              <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility Criteria for Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While settlement is an option, it is not automatically available to every defaulter. Kotak Mahindra Bank exercises due diligence to ensure that the facility is extended only to those with genuine constraints. Here are the key factors that determine your eligibility:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">1. Proven Financial Hardship</h4>
                  <p className="text-gray-600">This is the most critical factor. You must demonstrate that your inability to pay is due to valid reasons like loss of employment, severe illness, accident, or significant business failure.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">2. NPA Status</h4>
                  <p className="text-gray-600">Typically, banks entertain settlement offers only after the loan has been in default for a specific period (usually 90 days) and has been tagged as an NPA.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">3. Non-Wilful Defaulter</h4>
                  <p className="text-gray-600">You should not be a 'wilful defaulter'—someone who has the capacity to repay but deliberately chooses not to. The bank will assess your current income and assets.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">4. Repayment History</h4>
                  <p className="text-gray-600">While you are currently defaulting, your past relationship with the bank and intent to pay can influence the negotiation process positively.</p>
                </div>
              </div>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Kotak Loan Settlement Process: Step-by-Step</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling a loan involves legal and financial intricacies. Having CredSettle by your side ensures a smooth, transparent, and effective process. Here is how we navigate it:
              </p>

              <div className="space-y-8 mb-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                
                {/* Step 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 group-[.is-active]:bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold transform transition-transform group-hover:scale-110">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-1">Consultation & Analysis</h4>
                    <p className="text-gray-600 text-sm">We assess your total debt liability and financial capability. We listen to your story to frame the hardship application effectively.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold border-blue-600">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-1">Legal Protection</h4>
                    <p className="text-gray-600 text-sm">Once onboarded, we redirect all harassment calls to our legal team. We handle notices and ensure you are not intimidated by recovery agents.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold border-blue-600">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-1">Negotiation Strategy</h4>
                    <p className="text-gray-600 text-sm">We initiate the One-Time Settlement (OTS) proposal with Kotak's settlement officers, aiming for maximum waiver on interest and principal.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold border-blue-600">
                    4
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-1">Settlement Letter</h4>
                    <p className="text-gray-600 text-sm">We scrutinize the final Settlement Letter issued by the bank to ensure there are no hidden clauses. Payment is made only after this verification.</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold">
                    5
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-1">Financial Freedom</h4>
                    <p className="text-gray-600 text-sm">Upon payment, we ensure you receive the 'No Dues Certificate'. You are now legally debt-free from this loan!</p>
                  </div>
                </div>

              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Documentation Requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Documentation is your evidence. To build a strong case for a high-waiver settlement, we need to present clear proof of your situation.
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Checklist of Documents</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span>Recent Loan/Credit Card Statements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span>KYC (Aadhar Card, PAN Card)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span>Termination Letter (if unemployed)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span>Medical Records (for health crisis)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span>Salary Slips / Bank Statements (showing income drop)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span>All Legal Notices Received</span>
                  </li>
                </ul>
              </div>

              <h2 id="credit-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on CIBIL Score</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Honesty is our policy. You must understand the implications of a settlement. When a loan is settled, Kotak Mahindra Bank will report it to CIBIL and other bureaus as <strong>"Settled"</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                This status implies that full repayment was not made. It will lower your credit score and stay on your report for about 7 years, making new credit harder to access initially.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-10">
                <h5 className="font-bold text-yellow-800 mb-2">The Better Evil?</h5>
                <p className="text-yellow-700 m-0">
                  While "Settled" affects your score, it is significantly better than a "Written Off" status, which indicates a complete loss for the bank and severe default. A settlement stops the negative reporting cycle, allowing you to eventually rebuild your score through secured cards and good financial habits.
                </p>
              </div>

              <h2 id="why-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Trust CredSettle?</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                We are not just a service provider; we are your advocates. In a system where banks have all the power, we even the playing field.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
                  <div className="text-blue-600 text-3xl mb-3">🛡️</div>
                  <h5 className="font-bold text-gray-900 mb-2">Anti-Harassment Shield</h5>
                  <p className="text-sm text-gray-600">We take over agent calls so you can focus on your life and work.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
                  <div className="text-blue-600 text-3xl mb-3">💰</div>
                  <h5 className="font-bold text-gray-900 mb-2">Proven Savings</h5>
                  <p className="text-sm text-gray-600">Our expertise allows us to secure up to 50% waivers regularly.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
                  <div className="text-blue-600 text-3xl mb-3">⚖️</div>
                  <h5 className="font-bold text-gray-900 mb-2">Legal Expertise</h5>
                  <p className="text-sm text-gray-600">Our lawyers handle arbitration and legal notices professionally.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
                  <div className="text-blue-600 text-3xl mb-3">🤝</div>
                  <h5 className="font-bold text-gray-900 mb-2">Client First</h5>
                  <p className="text-sm text-gray-600">Transparent fees, no false promises, and genuine support.</p>
                </div>
              </div>

              {/* Review Snippets */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Real Stories, Real Relief</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                      <div className="font-bold text-white">Suresh Reddy</div>
                    </div>
                    <p className="italic text-gray-200 text-sm leading-relaxed">"I was drowning in Kotak personal loan EMIs after my salary cut. CredSettle negotiated a 40% waiver. The peace of mind I have now is priceless."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                      <div className="font-bold text-white">Meera Patel</div>
                    </div>
                    <p className="italic text-gray-200 text-sm leading-relaxed">"The harassment from agents was affecting my health. CredSettle stopped it immediately. They are very professional and handled everything legally."</p>
                  </div>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white transition-colors border border-transparent hover:border-gray-200">
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center transform transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">
                  📞
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Distressed?</h4>
                <p className="text-sm text-gray-600 mb-6">Don't fight the bank alone. Get expert legal support.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-sm"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  <p className="flex items-center justify-center gap-1"><span className="text-green-500">✓</span> 100% Confidential</p>
                  <p className="flex items-center justify-center gap-1"><span className="text-green-500">✓</span> RBI Compliant</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2 text-sm uppercase tracking-wide">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Credit Card Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Personal Loan Settle
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/anti-harassment" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Stop Harassment
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      HDFC Settlement
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
