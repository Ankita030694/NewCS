'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function PiramalFinanceLoanSettlementClient() {
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
    { id: 'fake-notice-check', label: 'Fake Notice Check' },
    { id: 'ots-policy', label: 'OTS Policy & eligibility' },
    { id: 'settlement-process', label: 'Settlement Process' },
    { id: 'sarfaesi-action', label: 'SARFAESI & Legal' },
    { id: 'settlement-letter', label: 'Letter Format' },
    { id: 'grievance-redressal', label: 'Grievance Officer' },
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
      question: "Can I settle my Piramal Finance Personal Loan?",
      answer: "Yes, Piramal Finance offers One Time Settlement (OTS) for personal loans that are classified as NPA (Non-Performing Asset). You must prove genuine financial hardship like job loss or medical crisis."
    },
    {
      question: "What is the standard waiver percentage for Piramal Finance settlement?",
      answer: "Waivers typically range from 30% to 50% of the total outstanding amount. The exact percentage depends on the age of the default and your ability to pay a lump sum."
    },
    {
      question: "Will Piramal Finance take legal action if I stop paying?",
      answer: "Yes. For unsecured loans, they may initiate Arbitration proceedings. For secured loans (Home/LAP), they can invoke the SARFAESI Act to seize and sell the property without court intervention."
    },
    {
      question: "How do I identify a fake Piramal Finance legal notice?",
      answer: "Fake notices often come via WhatsApp from personal numbers, threaten immediate police arrest (which is illegal for civil dues), and ask for payment to personal UPI IDs. Real notices come via Registered Post."
    },
    {
      question: "Who is the Principal Nodal Officer for Piramal Finance?",
      answer: "Ms. Hetal Parihar is the Principal Nodal Officer. You can contact her at nodal.officer@piramal.com or 022-69181439."
    },
    {
      question: "Does settlement remove the loan from CIBIL?",
      answer: "No. The loan status will change to 'Settled' instead of 'Closed'. This will lower your CIBIL score by 70-100 points, but it is better than a 'Written Off' status."
    },
    {
      question: "Can I get an NOC after settlement?",
      answer: "Yes, once the settlement amount is paid in full, Piramal Finance will issue a No Objection Certificate (NOC) and close the loan account within 30 days."
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
                    Piramal Finance
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Piramal Finance Loan Settlement Guide 2026</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Piramal Finance is a leading NBFC offering Housing Loans, Business Loans, and Personal Loans. While they support customers during good times, default can lead to strict recovery actions, including **SARFAESI** proceedings for secured loans and **Arbitration** for unsecured ones.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are facing financial distress, Piramal Finance offers a **One Time Settlement (OTS)** mechanism to help you close your loan legally and start fresh. This guide covers the official settlement process, how to spot fake notices, and how to escalate grievances.
              </p>

              {/* Fake Notice Checker */}
              <h2 id="fake-notice-check" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Fake vs Real Legal Notices</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                 We have seen a surge in fake "Court Summons" being sent via WhatsApp by fraudulent agencies claiming to represent Piramal Finance. Use this checklist to verify authenticity:
              </p>

              <div className="overflow-x-auto mb-10">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Feature</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-red-600 uppercase tracking-wider">FAKE (Scam)</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-green-600 uppercase tracking-wider">REAL (Legal)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Delivery Mode</td>
                      <td className="py-4 px-6 text-sm text-gray-700">WhatsApp / Email (Gmail/Yahoo)</td>
                      <td className="py-4 px-6 text-sm text-gray-700"><strong>Registered Post</strong> / Email (@piramal.com)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Threats</td>
                      <td className="py-4 px-6 text-sm text-gray-700">"Arrest in 2 hours", "Police visit"</td>
                      <td className="py-4 px-6 text-sm text-gray-700">"Arbitration Hearing", "SARFAESI Action"</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Payment To</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Personal UPI ID / GooglePay</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Official Piramal Loan Account only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="ots-policy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Piramal Finance OTS Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                One Time Settlement (OTS) is available primarily for loans classified as **NPA (Non-Performing Asset)**, meaning unpaid for over 90 days.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li><strong>Eligibility:</strong> Proven financial hardship (Job loss, Health crisis, Business failure).</li>
                <li><strong>Waiver Amount:</strong> Typically **30-50%** of principal + interest, depending on the case. Penalties are often fully waived.</li>
                <li><strong>Timeline:</strong> Processing takes **2-4 weeks**. Settlement letter is issued 7-10 days after approval.</li>
                <li><strong>Documents Required:</strong> Income proof (or lack thereof), termination letter, medical records, bank statements.</li>
              </ul>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">How to Settle Your Loan</h2>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Stop Paying "On Account"</h4>
                    <p className="text-gray-600 mt-1">Do not pay small random amounts to agents. Save money for a lump-sum settlement offer.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Submit Proposal</h4>
                    <p className="text-gray-600 mt-1">Send a settlement proposal email to **customercare@piramal.com**. Clearly state your hardship and offer amount.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Negotiation</h4>
                    <p className="text-gray-600 mt-1">The collection team will reject your first offer. Negotiate hard. If you have legal representation (like CredSettle), this becomes easier.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Get Settlement Letter</h4>
                    <p className="text-gray-600 mt-1">Once agreed, pay ONLY after receiving the official settlement letter on Piramal letterhead. Verify it before paying.</p>
                  </div>
                </div>
              </div>

              <h2 id="sarfaesi-action" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Legal Actions: SARFAESI & Arbitration</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Piramal Finance takes legal action seriously. Know your rights.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white border-l-4 border-purple-600 shadow-sm p-6 ml-0">
                  <h4 className="font-bold text-gray-900">Secured Loans (Home/LAP)</h4>
                  <p className="text-gray-600 mt-2 text-sm">
                    Piramal uses the **SARFAESI Act, 2002**. This allows them to seize your property **without going to court** if loan is NPA.
                    <br/><br/>
                    <strong>Defense:</strong> You can file an appeal in the DRT (Debt Recovery Tribunal) within 45 days of receiving the possession notice.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-orange-500 shadow-sm p-6 ml-0">
                  <h4 className="font-bold text-gray-900">Unsecured Loans (Personal)</h4>
                  <p className="text-gray-600 mt-2 text-sm">
                    They use **Arbitration** proceedings. An arbitrator is appointed to pass an award against you for the full amount.
                     <br/><br/>
                    <strong>Defense:</strong> Attend the arbitration (online/offline). Submit hardship proofs. An arbitrator cannot jail you, only order repayment.
                  </p>
                </div>
              </div>

              <h2 id="settlement-letter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Settlement Email Format</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Copy this email draft to send to **nodal.officer@piramal.com** or **customercare@piramal.com**.
              </p>

              <div className="bg-gray-800 text-gray-200 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
                <p className="mb-2"><span className="text-blue-400">Subject:</span> Request for OTS (One Time Settlement) - Loan A/C [YOUR_LOAN_NUMBER]</p>
                <p className="mb-2">Dear Nodal Officer,</p>
                <p className="mb-2">I am writing regarding my personal loan (A/C No: [NUMBER]). Due to [REASON: Job Loss/Severe Medical Issue], my financial situation has deteriorated, and I have defaulted on payments.</p>
                <p className="mb-2">I want to clear this debt but cannot pay the full outstanding of Rs. [TOTAL_AMOUNT] due to added penalties and interest.</p>
                <p className="mb-2">I am arranging funds from relatives to offer a <strong>One Time Settlement of Rs. [OFFER_AMOUNT]</strong>. Please consider this request and waive the penal charges so I can close this loan immediately.</p>
                <p className="mb-2">Looking forward to a positive response.</p>
                <p>Sincerely,<br/>[YOUR_NAME]<br/>[PHONE_NUMBER]</p>
              </div>

              <h2 id="grievance-redressal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Grievance Redressal (Escalation)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If the collection agents are abusive or the branch manager refuses settlement, escalate to the Principal Nodal Officer immediately.
              </p>

               <div className="overflow-x-auto mb-10">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Level</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contact Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Principal Nodal Officer</td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        <strong>Ms. Hetal Parihar</strong><br/>
                        Email: nodal.officer@piramal.com<br/>
                        Phone: 022-69181439
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Address</td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        1st Floor, Amiti Building, Agastya Corporate Park, Kamani Junction, Kurla (W), Mumbai - 400070
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="why-choose-us" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Choose CredSettle?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Stop Harassment</h5>
                  <p className="text-sm text-gray-600">We take over all communication. No more abusive calls.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Legal Defense</h5>
                  <p className="text-sm text-gray-600">Our lawyers handle SARFAESI responses and Arbitration hearings.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Max Savings</h5>
                  <p className="text-sm text-gray-600">We negotiate professionally to get up to 50% waiver.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Success Fee</h5>
                  <p className="text-sm text-gray-600">You pay us only when you save money.</p>
                </div>
              </div>

               {/* Client Reviews */}
              <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Recent Successes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Rakesh K., Mumbai</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I defautled on a 5 Lakh loan. Piramal agents were visiting my office. CredSettle stepped in, stopped the visits, and settled it for 2.8 Lakhs."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Suman D., Bangalore</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"Received a SARFAESI notice for my shop. I was terrified. CredSettle’s lawyer filed a reply and bought us time to arrange a settlement."</p>
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
                <h4 className="font-bold text-xl text-gray-900 mb-2">Stop Piramal Legal Action</h4>
                <p className="text-sm text-gray-600 mb-6">Expert legal support to settle your loan.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Start Settlement
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v Stop SARFAESI</p>
                  <p className="mt-1">v Save 40-50%</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                   <li>
                    <Link href="/loan-settlement/bajaj-finserv" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Bajaj Finance
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/au-small-finance-bank" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      AU Small Finance Bank
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/aditya-birla" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Aditya Birla Capital
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
