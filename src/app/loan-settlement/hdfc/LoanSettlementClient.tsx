'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LoanSettlementClient() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    const sections = document.querySelectorAll('article h2[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for sticky header if any
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const tocItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'what-is-settlement', label: 'What is Settlement?' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'process', label: 'Step-by-Step Process' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'credit-score', label: 'Impact on Credit Score' },
    { id: 'why-credsettle', label: 'Why Choose Us' },
    { id: 'faqs', label: 'Freq. Asked Questions' },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative text-white px-4 md:px-8 pt-32 pb-20 mt-[-80px]" // Negative margin to pull behind transparent navbar if needed
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            HDFC Loan Settlement Process<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your HDFC Personal Loan & Credit Card debt. Stop harassment and save up to 50% with our RBI compliant settlement process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Settlement
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/loan-settlement" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2 transition-colors">
                    Loan Settlement
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-blue-600 md:ml-2">HDFC</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Table of Contents (Sticky) */}
            <div className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Table of Contents</h3>
                  <nav className="space-y-1">
                    {tocItems.map((item) => (
                      <a 
                        key={item.id}
                        href={`#${item.id}`} 
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`block py-1.5 px-3 rounded-md text-sm transition-all duration-200 border-l-2 ${
                          activeSection === item.id 
                            ? 'bg-blue-50 text-blue-700 border-blue-600 font-medium' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 border-transparent'
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Middle Column: Main Content */}
            <div className="lg:w-1/2 w-full">
              <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                
                <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Introduction to HDFC Loan Settlement</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dealing with mounting debt can be one of the most stressful experiences in life. If you have an outstanding personal loan or credit card debt with HDFC Bank and find yourself unable to keep up with the monthly payments, you are not alone. Financial hardships such as job loss, medical emergencies, or unexpected business losses can derail even the best planned finances. In such challenging times, HDFC loan settlement can be a viable lifeline to regain your financial freedom.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  CredSettle specializes in helping borrowers navigate the complex landscape of debt settlement. We provide expert legal and financial guidance to negotiate with HDFC Bank on your behalf, aiming to significantly reduce your burden. This comprehensive guide will walk you through everything you need to know about the HDFC loan settlement process in 2026, helping you make informed decisions to secure your financial future.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                  <h4 className="font-bold text-blue-900 mb-2 mt-0">Key Takeaway</h4>
                  <p className="text-blue-800 m-0">
                    Loan settlement is a legal and regulated process. It allows you to close your loan account by paying a reduced lump sum amount when you are genuinely unable to pay the full dues.
                  </p>
                </div>

                <h2 id="what-is-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">What is HDFC Loan Settlement?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  HDFC Loan Settlement, often referred to as a One Time Settlement (OTS), is a formal agreement between you (the borrower) and HDFC Bank. In this arrangement, the bank agrees to accept a sum smaller than the total outstanding dues (principal plus interest and penalties) to settle the loan account permanently. This option is typically exercised when the loan has turned into a Non Performing Asset (NPA), usually after 90 days of non payment.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The primary objective for the bank is to recover at least the principal component of the loan rather than spending years on legal recovery processes which might yield nothing. For you, the borrower, it offers a chance to wipe the slate clean and stop the accumulation of interest and late fees.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Types of Loans Eligible</h3>
                <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                  <li><strong>HDFC Personal Loans:</strong> Unsecured loans taken for personal use are the most common candidates for settlement.</li>
                  <li><strong>HDFC Credit Cards:</strong> High interest credit card debt can spiral out of control quickly; settlement is often the best exit route.</li>
                  <li><strong>Consumer Durable Loans:</strong> Loans taken for electronics or appliances.</li>
                  <li><strong>Business Loans:</strong> Unsecured business loans can also be settled under specific conditions.</li>
                </ul>

                <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility for Settlement</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Not everyone qualifies for a settlement. HDFC Bank, like all major financial institutions, has strict criteria to ensure the facility is given only to those in genuine distress. Here is what you generally need to qualify:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2 mt-0">1. Default Status</h4>
                    <p className="text-gray-600 text-sm m-0">Your loan account must be in default, typically for more than 90 days, and classified as an NPA.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2 mt-0">2. Financial Hardship</h4>
                    <p className="text-gray-600 text-sm m-0">You must prove genuine financial inability to pay, such as job loss, critical illness, or bankruptcy.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2 mt-0">3. Unsecured Nature</h4>
                    <p className="text-gray-600 text-sm m-0">Settlements are primarily for unsecured loans. Secured loans (like Home/Car loans) are rarely settled as the bank can seize the asset.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2 mt-0">4. No Wilful Default</h4>
                    <p className="text-gray-600 text-sm m-0">You must not be a 'wilful defaulter' (someone who has the means to pay but chooses not to).</p>
                  </div>
                </div>

                <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Settlement Process</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Understanding the workflow is crucial to ensure you are not taken advantage of during the negotiation. Here is the standard CredSettle approach to HDFC loan settlement:
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mt-0 mb-1">Case Analysis & Enrollment</h4>
                      <p className="text-gray-600 m-0">We analyze your debt portfolio, current financial status, and harassment levels. Once enrolled, we take over all communication with the bank.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mt-0 mb-1">Legal Notice Management</h4>
                      <p className="text-gray-600 m-0">Our legal team responds to any notices from the bank or arbitration courts, ensuring your rights are protected throughout the default period.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mt-0 mb-1">Negotiation</h4>
                      <p className="text-gray-600 m-0">We initiate discussions with HDFC’s settlement officers. We leverage our industry relationships to negotiate for the maximum possible waiver.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mt-0 mb-1">Settlement Letter</h4>
                      <p className="text-gray-600 m-0">Once a deal is reached, we ensure you receive an official settlement letter from HDFC Bank on their letterhead, stating the terms clearly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mt-0 mb-1">Closure & NOC</h4>
                      <p className="text-gray-600 m-0">After you make the payment, we follow up to obtain the No Dues Certificate (NOC), formally closing the chapter.</p>
                    </div>
                  </div>
                </div>

                <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To process your settlement request effectively, you will need to provide certain documentation. Having these ready can speed up the process:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
                  <li>Loan Account Statement or Credit Card Statement.</li>
                  <li>KYC Documents (Aadhar Card, PAN Card).</li>
                  <li>Proof of Financial Hardship (Termination letter, medical reports, bank statements showing loss of income).</li>
                  <li>Correspondence with the bank (Notices, emails).</li>
                </ul>

                <h2 id="credit-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on Credit Score (CIBIL)</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  It is important to be transparent about the impact of settlement on your credit health. When you settle a loan, HDFC Bank will report the account status to credit bureaus like CIBIL, Experian, and Equifax as <strong>"Settled"</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A "Settled" status implies that the bank accepted less than the original obligation. This will lower your credit score and will remain on your report for about 7 years. It may make it difficult to get new unsecured loans or credit cards in the immediate future.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  <strong>However, consider the alternative:</strong> If you do not settle and remain in default, your status will show as "Written Off" or continuous "Overdue", which is far worse. A settlement stops the bleeding, allows you to become debt free, and you can start rebuilding your score immediately afterwards. CredSettle also offers a Credit Builder program to help you bounce back.
                </p>

                <h2 id="why-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Choose CredSettle?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Navigating the banking bureaucracy alone can be intimidating. Here is why thousands of Indians trust CredSettle with their HDFC loan settlements:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1 mt-0">Stop Harassment</h5>
                    <p className="text-sm text-gray-600 m-0">We take over calls and deal with recovery agents legally.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1 mt-0">Max Savings</h5>
                    <p className="text-sm text-gray-600 m-0">Our skilled negotiators often secure 40-50% waivers.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1 mt-0">Legal Armour</h5>
                    <p className="text-sm text-gray-600 m-0">Verified lawyers to handle legal notices and arbitration.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1 mt-0">Transparent</h5>
                    <p className="text-sm text-gray-600 m-0">No hidden fees. You pay our success fee only when the job is done.</p>
                  </div>
                </div>

                {/* Review Snippets */}
                <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12 not-prose">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Client Success Stories</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                      <div className="flex items-center mb-4">
                        <div className="text-yellow-400 text-xl mr-2">*****</div>
                        <div className="text-sm opacity-90 font-medium">Rahul Sharma, Delhi</div>
                      </div>
                      <p className="italic text-gray-100 text-sm leading-relaxed">"I had a pending HDFC credit card bill of 4 Lakhs. Agents were calling my office. CredSettle stepped in, stopped the calls, and closed the loan for 1.8 Lakhs. Lifesavers!"</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                      <div className="flex items-center mb-4">
                        <div className="text-yellow-400 text-xl mr-2">*****</div>
                        <div className="text-sm opacity-90 font-medium">Priya M., Mumbai</div>
                      </div>
                      <p className="italic text-gray-100 text-sm leading-relaxed">"Professional team. They handled all the legal notices from the bank. I didn’t have to visit the branch even once. Highly recommended for peace of mind."</p>
                    </div>
                  </div>
                </div>

                <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
                <div className="space-y-4 not-prose">
                  {[
                    {
                      question: "What is the HDFC loan settlement process?",
                      answer: "The HDFC loan settlement process involves negotiating with the bank to pay a one time reduced amount to close your loan account. This is usually an option when you are unable to pay the full EMI due to financial hardship. The process includes submitting a settlement request, financial evaluation by the bank, and issuance of a settlement letter upon agreement."
                    },
                    {
                      question: "Can I settle my HDFC credit card dues?",
                      answer: "Yes, you can settle HDFC credit card dues. If you have been unable to pay your minimum dues for over 90 days and your account is classified as NPA, you can approach the bank for a One Time Settlement (OTS) to clear the debt at a reduced value."
                    },
                    {
                      question: "How much discount can I get in HDFC loan settlement?",
                      answer: "The discount in HDFC loan settlement varies based on your financial condition and the age of the default. Typically, borrowers can save anywhere between 30% to 50% on the total outstanding principal and interest, though exceptional cases may see higher waivers."
                    },
                    {
                      question: "Will settling my HDFC loan affect my CIBIL score?",
                      answer: "Yes, settling a loan will impact your CIBIL score. The account status will be reported as 'Settled' rather than 'Closed', which indicates to future lenders that the full amount was not repaid. However, this is often better than a 'Written Off' status."
                    },
                    {
                      question: "How do I get a foreclosure letter after settlement?",
                      answer: "Once you pay the agreed settlement amount, HDFC Bank will issue a 'No Dues Certificate' or a settlement closure letter. This document serves as proof that your liability towards the loan is extinguished."
                    },
                    {
                      question: "Can HDFC Bank file a case against me for non payment?",
                      answer: "Banks have the right to initiate legal proceedings like arbitration or filing a civil suit for recovery of dues. However, initiating a settlement dialogue often puts these legal actions on hold as both parties work towards a mutual resolution."
                    },
                    {
                      question: "Do I need a lawyer for HDFC loan settlement?",
                      answer: "While not mandatory, having a legal expert or a settlement company like CredSettle represents you ensures that you are not bullied by recovery agents. We handle the negotiations to get you the best possible deal and ensure all documentation is legally sound."
                    },
                    {
                      question: "What is the minimum amount HDFC will accept for settlement?",
                      answer: "There is no fixed minimum rule, as it is case specific. However, banks generally try to recover at least the principal amount. In cases of severe hardship, they may accept a lower percentage of the principal."
                    },
                    {
                      question: "How long does the HDFC settlement process take?",
                      answer: "The process can take anywhere from a few weeks to a couple of months, depending on the complexity of the case, the amount due, and the speed of negotiations between you (or your representative) and the bank officials."
                    },
                    {
                      question: "Does HDFC offer settlement for personal loans?",
                      answer: "Yes, HDFC personal loan settlement is possible if you can demonstrate genuine financial inability to repay the full loan amount due to job loss, medical emergencies, or business failure."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>

              </article>
            </div>

            {/* Right Column: CTA & Related (Sticky) */}
            <div className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-24 space-y-6">
                
                {/* Main CTA Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Need Urgent Help?</h4>
                  <p className="text-sm text-gray-600 mb-6">Don’t face the bank alone. Get expert legal support today.</p>
                  <Link 
                    href="/contact"
                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Request Call Back
                  </Link>
                  <div className="mt-4 text-xs text-gray-500">
                    <p>v 100% Confidential</p>
                    <p className="mt-1">v RBI Compliant Process</p>
                  </div>
                </div>

                {/* Related Pages Info */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        Credit Card Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        Personal Loan Settle
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/anti-harassment" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        Stop Harassment
                      </Link>
                    </li>
                    <li>
                       <Link href="/services/business-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        Business Loan Settle
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
