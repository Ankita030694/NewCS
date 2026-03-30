'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function StashfinLoanSettlementClient() {
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
    { id: 'fake-notice-check', label: 'Fake WhatsApp Notice' },
    { id: 'ots-policy', label: 'OTS Policy (Akara)' },
    { id: 'settlement-process', label: 'Settlement Process' },
    { id: 'legal-action', label: 'Legal Action & Police' },
    { id: 'settlement-letter', label: 'Letter Format' },
    { id: 'grievance-redressal', label: 'Nodal Officer' },
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
      question: "Can I settle my Stashfin loan?",
      answer: "Yes, Stashfin (Akara Capital) allows settlement for defaulted loans. You typically need to be in default for over 90 days to get the best waiver offers."
    },
    {
      question: "Will Stashfin send police to my house?",
      answer: "No. Loan default is a civil matter, not a criminal one. Police cannot arrest you for unpaid EMIs. Agents who threaten this are violating RBI guidelines."
    },
    {
      question: "How much discount can I get on a Stashfin loan?",
      answer: "Discounts usually range from 30% to 60% of the total outstanding amount. The waiver depends on how long the loan has been unpaid and your negotiation."
    },
    {
      question: "Does Stashfin harass contact list numbers?",
      answer: "RBI strictly prohibits accessing or calling your contact list. If Stashfin agents harass your relatives, you can file a cyber crime complaint and complain to the RBI Ombudsman."
    },
    {
      question: "Who is the Nodal Officer for Stashfin?",
      answer: "Mr. Amarjeet Singh is the Nodal Officer. You can contact him at cofficer@akaracap.com or 0124-6981223."
    },
    {
      question: "Is the 'Court Summons' on WhatsApp real?",
      answer: "Most 'Court Summons' sent via WhatsApp with urgent threats of arrest are FAKE. Real notices are sent via registered post or official email."
    },
    {
      question: "What is an NDC letter?",
      answer: "NDC stands for No Dues Certificate. It is the final proof that your loan is closed. Never make the final settlement payment without seeing a draft of the Settlement Letter first."
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
                    Stashfin (Akara Capital)
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Stashfin Loan Settlement Guide 2026</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Stashfin is one of India’s popular loan apps, operated primarily by **Akara Capital Advisors Pvt Ltd**. While they offer quick credit, they are also known for aggressive recovery tactics. If you are stuck in a debt trap with Stashfin, you have legal rights.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many borrowers face harassment, fake legal notices, and threats of police action. This guide will help you understand how to safeguard yourself, stop the harassment, and negotiate a **One Time Settlement (OTS)** to close your loan for a reduced amount.
              </p>

              {/* Fake Notice Checker */}
              <h2 id="fake-notice-check" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Is Your Stashfin "Legal Notice" Fake?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                 Recovery agents often send scary messages on WhatsApp claiming to be "Cyber Crime Police" or "Delhi Court". 95% of these are fake. Here is how tospot them:
              </p>

              <div className="overflow-x-auto mb-10">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Indicator</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-red-600 uppercase tracking-wider">FAKE (Scam)</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-green-600 uppercase tracking-wider">REAL (Legal)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Sent From</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Random 10-digit Mobile No.</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Official Handle / Registered Post</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Language</td>
                      <td className="py-4 px-6 text-sm text-gray-700">"Arrest Warrant Issued", "Police coming"</td>
                      <td className="py-4 px-6 text-sm text-gray-700">"Demand Notice u/s 25", "Arbitration Ref"</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Letterhead</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Blurred logo / "Cyber Crime" logo</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Clear <strong>Akara Capital</strong> or Law Firm letterhead</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Time Limit</td>
                      <td className="py-4 px-6 text-sm text-gray-700">"Pay in 30 mins or jail"</td>
                      <td className="py-4 px-6 text-sm text-gray-700">"Reply within 7-15 days"</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="ots-policy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Stashfin (Akara Capital) OTS Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Stashfin allows settlement for loans that are overdue (typically 90+ days). The settlement is officially done with **Akara Capital Advisors Pvt Ltd**, the NBFC behind the app.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li><strong>Waiver Potential:</strong> High. App loans often have high interest/penalties, which can be waived. Expect to pay **40-60%** of the principal in worst cases, or principal + some interest.</li>
                <li><strong>Documents:</strong> You must insist on a formal **Settlement Letter** from Akara Capital before paying.</li>
                <li><strong>Payment Mode:</strong> Pay only within the Stashfin App or to the official bank account mentioned in the letter. NEVER pay to a personal UPI ID sent on WhatsApp.</li>
              </ul>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Settlement Process</h2>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Stop "Micro-Payments"</h4>
                    <p className="text-gray-600 mt-1">Agents will ask for ₹500 or ₹2000 to "hold" your file. Do not pay this. It is wasted money and does not reduce your principal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ignore Harassment</h4>
                    <p className="text-gray-600 mt-1">If they call your relatives, tell your relatives it is a scam/fraud call. Do not engage with abusers. Record the calls.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Proposal</h4>
                    <p className="text-gray-600 mt-1">Send a formal settlement offer to **cofficer@akaracap.com**. State your financial inability clearly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Close & Get NDC</h4>
                    <p className="text-gray-600 mt-1">Upon payment, ensure the loan is marked closed on the app within 48 hours and get the No Dues Certificate.</p>
                  </div>
                </div>
              </div>

              <h2 id="legal-action" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Legal Action vs Empty Threats</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Can Stashfin really take you to court?
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-red-50 p-6 rounded-xl">
                   <h4 className="font-bold text-red-700 mb-2">What They THREATEN (Fake)</h4>
                   <ul className="list-disc pl-5 space-y-2 text-sm text-red-800">
                     <li>Immediate Police Arrest.</li>
                     <li>Freezing all your bank accounts today.</li>
                     <li>Sending recovery team to your office to shout.</li>
                     <li>Calling every person in your contact list.</li>
                   </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                   <h4 className="font-bold text-blue-700 mb-2">What They Can ACTUALLY Do</h4>
                   <ul className="list-disc pl-5 space-y-2 text-sm text-blue-800">
                     <li>Send a legal demand notice.</li>
                     <li>Start **Arbitration** proceedings (rare for small amounts, used for larger loans).</li>
                     <li>Report "Written Off" to CIBIL, ruining your score.</li>
                   </ul>
                </div>
              </div>

              <h2 id="settlement-letter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Settlement Email Format</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Use this template to email **cofficer@akaracap.com**.
              </p>

              <div className="bg-gray-800 text-gray-200 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
                <p className="mb-2"><span className="text-blue-400">Subject:</span> Settlement Offer for Loan ID [YOUR_LOAN_ID] - Financial Hardship</p>
                <p className="mb-2">To the Nodal Officer (Akara Capital),</p>
                <p className="mb-2">I am writing regarding my loan (ID: [NUMBER]). I have lost my job/income source and am unable to pay the EMI.</p>
                <p className="mb-2">Your recovery agents have been harassing me and my family, which is against RBI guidelines. I am ready to file a formal complaint if this continues.</p>
                <p className="mb-2">However, I want to close this matter amicably. I can arrange Rs. [OFFER_AMOUNT] from a friend to settle this loan as a One Time Settlement. This is the maximum I can pay.</p>
                <p className="mb-2">Please issue a formal settlement letter for this amount so I can make the payment and close the loan.</p>
                <p>Regards,<br/>[YOUR_NAME]<br/>[PHONE_NUMBER]</p>
              </div>

              <h2 id="grievance-redressal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Grievance Redressal (Nodal Officer)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you face abuse, contact list hacking, or fake legal notices, escalate immediately to the Nodal Officer of Akara Capital.
              </p>

               <div className="overflow-x-auto mb-10">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Role</th>
                      <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Name</td>
                      <td className="py-4 px-6 text-sm text-gray-700"><strong>Mr. Amarjeet Singh</strong></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Email</td>
                      <td className="py-4 px-6 text-sm text-gray-700">cofficer@akaracap.com</td>
                    </tr>
                     <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Phone</td>
                      <td className="py-4 px-6 text-sm text-gray-700">0124-6981223</td>
                    </tr>
                     <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Address</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Unit Nos. 1801-1805, 18th Floor, Magnum Global Park 2, Sector 58, Gurgaon - 122011</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="why-choose-us" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Choose CredSettle?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Stop Calls</h5>
                  <p className="text-sm text-gray-600">We redirect all agent calls to our legal team.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Contact List Protection</h5>
                  <p className="text-sm text-gray-600">We take legal action if they harass your references.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Authentic Settlement</h5>
                  <p className="text-sm text-gray-600">We ensure you get a valid Akara Capital letter, not a fake one.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-1">Zero Risk</h5>
                  <p className="text-sm text-gray-600">Pay our fee only after you receive the settlement letter.</p>
                </div>
              </div>

               {/* Client Reviews */}
              <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">User Experiences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Sneha P., Pune</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"Stashfin agents were calling my office colleagues. I was suicidal. CredSettle legal team sent a notice to them, the calls stopped, and I settled for 50%."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Arjun R., Hyderabad</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"Received a fake police warrant on WhatsApp. CredSettle verified it was fake and helped me negotiate a proper closure."</p>
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
                <h4 className="font-bold text-xl text-gray-900 mb-2">Stop Stashfin Harassment</h4>
                <p className="text-sm text-gray-600 mb-6">Legal protection against App Loan agents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Start Settlement
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v Stop Abuse</p>
                  <p className="mt-1">v Save 50%</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                   <li>
                    <Link href="/loan-settlement/krazybee" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      KreditBee Settlement
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
