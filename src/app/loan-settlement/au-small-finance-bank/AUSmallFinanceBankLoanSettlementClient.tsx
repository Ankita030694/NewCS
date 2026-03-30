'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AUSmallFinanceBankLoanSettlementClient() {
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
    { id: 'arbitration-checker', label: 'Real vs Fake Notice' },
    { id: 'settlement-policy', label: 'OTS Policy & eligibility' },
    { id: 'settlement-process', label: 'Settlement Process' },
    { id: 'settlement-letter', label: 'Letter Format' },
    { id: 'written-off-vs-settled', label: 'Written Off vs Settled' },
    { id: 'grievance-redressal', label: 'Grievance Officers' },
    { id: 'collection-agencies', label: 'Collection Agencies' },
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
      question: "Can I settle my AU Small Finance Bank Personal Loan?",
      answer: "Yes, AU Bank allows One Time Settlement (OTS) for personal loans if the borrower can demonstrate genuine financial hardship, such as job loss or medical emergencies. The loan usually needs to be classified as NPA (90+ days overdue) to be eligible."
    },
    {
      question: "Will settling my AU Bank loan affect my CIBIL score?",
      answer: "Yes, settling a loan results in a 'Settled' status on your CIBIL report, which drops your score by 50-100 points. However, this is better than a 'Written Off' status, which damages your score much more severely and remains for years."
    },
    {
      question: "How do I identify a fake AU Bank arbitration notice on WhatsApp?",
      answer: "A fake notice often comes from a personal number (not an official business account), contains spelling errors, threatens immediate arrest (police cannot arrest for civil defaults), and asks for payment to a personal UPI ID. Real notices are sent via post or official email."
    },
    {
      question: "Who is the Principal Nodal Officer for AU Small Finance Bank?",
      answer: "The Principal Nodal Officer is Mr. Deepak Babber. He can be reached at pno@aubank.in or 0141-6660654. His office is located at AU Small Finance Bank Limited, Bank House, Jaipur."
    },
    {
      question: "Can I get a loan after settlement?",
      answer: "Immediately after settlement, it is difficult to get unsecured loans. However, you can rebuild your credit score over 12-24 months by using secured credit cards or gold loans responsibly. Once your score improves, you can qualify for loans again."
    },
    {
      question: "Does AU Bank harass borrowers for payment?",
      answer: "While banks are entitled to recover dues, harassment (calling relatives, abusive language, late-night calls) is strictly prohibited by RBI guidelines. If you face this, you can file a complaint with the bank’s Nodal Officer or the RBI Ombudsman."
    },
    {
      question: "What is the typical discount I can get in an AU Bank settlement?",
      answer: "Settlement amounts vary based on the case, but typically, borrowers can achieve waivers ranging from 30% to 50% of the total outstanding amount, especially if they make a lump-sum payment."
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
                    Loan Settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    AU Small Finance Bank
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">AU Small Finance Bank Loan Settlement Guide 2026</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                AU Small Finance Bank is one of India’s fastest-growing banks, serving millions of customers. While they are generally customer-centric, financial hardships can happen to anyone. If you find yourself unable to repay your Personal Loan, Credit Card, or MSME loan dues, **you are not alone**.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Defaulting on an AU Bank loan can lead to intense collection efforts and legal notices. However, the bank has a structured **One Time Settlement (OTS)** policy for borrowers in genuine distress. This guide will walk you through the process of settling your debt legally, handling arbitration notices, and stopping harassment.
              </p>

              {/* NEW SEO SECTION: Real vs Fake Notice */}
              <h2 id="arbitration-checker" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Is Your AU Bank Arbitration Notice Fake?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                 Many borrowers receive threatening messages on WhatsApp claiming to be "Court Summons" or "Arbitration Notices". 90% of these are fake tactics used by third-party agencies. Use this checklist to verify:
              </p>

              <div className="overflow-x-auto mb-10">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Feature</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-red-600 uppercase tracking-wider">FAKE NOTICE (Scam)</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-green-600 uppercase tracking-wider">REAL NOTICE (Legal)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Delivered Via</td>
                      <td className="py-4 px-6 text-sm text-gray-700">WhatsApp, Personal Gmail</td>
                      <td className="py-4 px-6 text-sm text-gray-700"><strong>Registered Post</strong> or Official Email (@aubank.in)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Legal Reference</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Vague threats (" IPC 420 case")</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Specific: <strong>Arbitration & Conciliation Act, 1996</strong></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Sender ID</td>
                      <td className="py-4 px-6 text-sm text-gray-700">"Advocate Rahul" (No Reg No.)</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Bank’s Legal Dept or Registered Law Firm</td>
                    </tr>
                     <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Action Demanded</td>
                      <td className="py-4 px-6 text-sm text-gray-700">"Pay immediately to avoid arrest"</td>
                      <td className="py-4 px-6 text-sm text-gray-700">"Attend hearing on [Date] or file reply"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg italic border-l-4 border-yellow-400">
                <strong>Note:</strong> If you receive a real notice (Registered Post), do not ignore it. It can lead to an *Ex-Parte* award (a judgment passed against you in your absence), which is legally binding. Contact CredSettle immediately to represent you.
              </p>


              <h2 id="settlement-policy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding AU Bank’s OTS Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The One Time Settlement (OTS) scheme is a special provision where the bank agrees to close your loan account for a reduced amount. This is typically available when:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li><strong>Unsecured Loans:</strong> Personal Loans and Credit Card debts are the most common candidates.</li>
                <li><strong>NPA Status:</strong> Your account is usually classified as a Non-Performing Asset (unpaid for &gt;90 days).</li>
                <li><strong>Genuine Hardship:</strong> You can prove inability to pay due to job loss, medical crisis, or business failure.</li>
                <li><strong>Secured Loans:</strong> For Vehicle or Gold loans, settlement is harder but possible if the asset value has depreciated significantly below the loan amount.</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                 <h4 className="font-bold text-blue-900 mb-2">MSME Loan Settlement</h4>
                 <p className="text-blue-800 m-0">
                   AU Bank has a specific Board-approved policy for MSME settlements. They may require an upfront payment of **25%** of the settlement amount to process the proposal. The remaining balance typically needs to be paid within 3 months.
                 </p>
              </div>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Settlement Process</h2>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Case Evaluation</h4>
                    <p className="text-gray-600 mt-1">Review your total outstanding, including penalties. Gather proofs of your financial hardship (termination letter, medical reports).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Legal Shielding</h4>
                    <p className="text-gray-600 mt-1">If recovery agents are harassing you, engage a legal firm like CredSettle. We inform the bank that we represent you, which stops direct harassment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Proposal Submission</h4>
                    <p className="text-gray-600 mt-1">Submit a formal written proposal. Do not rely on verbal negotiations with field agents. The proposal must go to the Credit Manager.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Negotiation & Approval</h4>
                    <p className="text-gray-600 mt-1">The bank will counter-offer. Skilled negotiation is key here to maximize waivers. Once agreed, get the <strong>Settlement Letter</strong>.</p>
                  </div>
                </div>
              </div>

              <h2 id="settlement-letter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Drafting Your Settlement Proposal</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Use this format when emailing your settlement request to **customercare@aubank.in** or the **Regional Nodal Officer**.
              </p>

              <div className="bg-gray-800 text-gray-200 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
                <p className="mb-2"><span className="text-blue-400">Subject:</span> Hardship & Settlement Request - Loan A/C [YOUR_LOAN_NUMBER]</p>
                <p className="mb-2">Dear Branch Manager / Nodal Officer,</p>
                <p className="mb-2">I hold a personal loan (A/C No: [NUMBER]) with your bank. I have been regular with my payments until [DATE].</p>
                <p className="mb-2">Since then, I have faced severe financial distress due to [REASON: Job Loss/Medical Issue]. Documents attached for proof.</p>
                <p className="mb-2">My current outstanding is shown as Rs. [AMOUNT] which includes heavy penalties. I am unable to pay this. I am offering a ONE TIME SETTLEMENT of Rs. [OFFER_AMOUNT] to close this account immediately.</p>
                <p className="mb-2">Kindly consider this request on humanitarian grounds. I am willing to pay the amount in [1 or 2] installments.</p>
                <p>Sincerely,<br/>[YOUR_NAME]<br/>[PHONE_NUMBER]</p>
              </div>

              {/* NEW SEO SECTION: Written Off vs Settled */}
              <h2 id="written-off-vs-settled" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Written Off vs Settled: The Real Cost</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Is it better to settle or just stop paying? Here is the truth about how AU Bank reports these statuses to CIBIL:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-xl overflow-hidden mb-10">
                <div className="bg-gray-50 p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <h4 className="font-bold text-red-600 mb-2 text-xl">Written Off</h4>
                  <p className="text-gray-900 font-medium mb-4">(Dangerous)</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Bank considers money "unrecoverable" but <strong>keeps legal rights</strong>.</li>
                    <li>CIBIL Score crashes by 150-200 points.</li>
                    <li>Status remains for 7 years.</li>
                    <li>Legal cases (Arbitration/Civil Suit) usually continue.</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6">
                  <h4 className="font-bold text-blue-600 mb-2 text-xl">Settled</h4>
                  <p className="text-gray-900 font-medium mb-4">(Safe Exit)</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Loan is officially <strong>CLOSED</strong>.</li>
                    <li>CIBIL Score drops but stabilizes.</li>
                    <li>All legal cases are withdrawn.</li>
                    <li>No harassment. You can rebuild credit in 18-24 months.</li>
                  </ul>
                </div>
              </div>

              <h2 id="grievance-redressal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Grievance Redressal & Escalation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If the branch staff is unhelpful or rude, you must escalate. AU Bank has a transparent escalation matrix.
              </p>

               <div className="overflow-x-auto mb-10">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Level</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Officer</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Level 1</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Regional Nodal Officers</td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        <strong>Delhi:</strong> rno.delhi@aubank.in<br/>
                        <strong>Mumbai:</strong> rno.mumbai@aubank.in<br/>
                        <strong>Jaipur:</strong> rno.jaipur@aubank.in
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Level 2</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Principal Nodal Officer</td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        <strong>Mr. Deepak Babber</strong><br/>
                        pno@aubank.in<br/>
                        0141-6660654
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Level 3</td>
                      <td className="py-4 px-6 text-sm text-gray-700">RBI Ombudsman</td>
                      <td className="py-4 px-6 text-sm text-gray-700">cms.rbi.org.in</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* NEW SEO SECTION: Collection Agencies */}
              <h2 id="collection-agencies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Authorized Collection Agencies</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                AU Bank outsources recovery to agencies. If you are contacted by agencies like **"Hallmark Financial Services"**, **"Shree Hari Collection Agency"**, or **"Siddhi Vinayak Enterprises"**, they are likely authorized. However, authorization does **not** give them the right to harass you. Report any abusive behavior immediately to the Nodal Officer.
              </p>

              <h2 id="why-choose-us" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Choose CredSettle?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Bank-Level Negotiation</h5>
                  <p className="text-sm text-gray-600">We deal directly with the credit and legal teams, not just the call center.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Arbitration Defense</h5>
                  <p className="text-sm text-gray-600">Our lawyers handle the online arbitration hearings for you.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">No Harassment</h5>
                  <p className="text-sm text-gray-600">We legally mandate all communication to be routed through us.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Pay Only If You save</h5>
                  <p className="text-sm text-gray-600">Our success fee matches your savings. No risk to you.</p>
                </div>
              </div>

              {/* Client Reviews */}
              <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Vikram S., Jaipur</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I had a huge business loan with AU Bank and lost my shop. CredSettle helped me get an MSME settlement with 45% waiver. Life saver."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Anjali M., Delhi</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"Received an arbitration notice. I was clueless. The CredSettle team attended the hearing and closed the matter within 20 days."</p>
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
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Stop AU Bank Action?</h4>
                <p className="text-sm text-gray-600 mb-6">Expert legal support to settle your loan.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Start Settlement
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v Stop Harassment</p>
                  <p className="mt-1">v Save 40-50%</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/business-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Business Loan Settle
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      HDFC Settlement
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/kotak" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Kotak Mahindra Bank
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
