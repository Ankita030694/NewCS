'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MaharashtraLoanSettlementClient() {
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
    { id: 'legal-protections', label: 'Legal Protections' },
    { id: 'debt-relief-act', label: 'Debt Relief Act' },
    { id: 'lok-adalat-2026', label: 'Lok Adalat 2026' },
    { id: 'file-complaint', label: 'File Complaint' },
    { id: 'rbi-ombudsman', label: 'RBI Ombudsman' },
    { id: 'bank-ots-schemes', label: 'OTS Schemes' },
    { id: 'drt-process', label: 'DRT Process' },
    { id: 'eligibility', label: 'Eligibility' },
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
      question: "Is loan settlement legal in Maharashtra?",
      answer: "Yes, loan settlement is a 100% legal financial process covered under the Indian Contract Act and RBI guidelines. It allows you to close a loan account by paying a mutually agreed reduced amount."
    },
    {
      question: "When is the next National Lok Adalat in Maharashtra for 2026?",
      answer: "The National Lok Adalats for 2026 are scheduled for March 14, May 9, September 12, and December 12. These are the best dates to get instant settlement decrees for your pending bank loans in Mumbai, Pune, and other districts."
    },
    {
      question: "Does the Maharashtra Money-Lending Regulation Act apply to banks?",
      answer: "No, this Act primarily regulates private money lenders. However, it is a powerful tool if you are being harassed by unlicensed private lenders. For banks and NBFCs, the RBI Fair Practices Code and Banking Ombudsman Scheme are the primary protective frameworks."
    },
    {
      question: "Can I file an online police complaint against recovery agents?",
      answer: "Yes, you can file a complaint via the Maharashtra Police online portal or email the Cyber Cell if the harassment is digital (WhatsApp/Email). However, for physical harassment or threats, visiting the nearest police station to file a written complaint (NC/FIR) is recommended."
    },
    {
      question: "What is the contact for the RBI Banking Ombudsman in Mumbai?",
      answer: "You can reach the RBI Ombudsman in Mumbai at C/o Reserve Bank of India, Dr. Annie Besant Road, Worli, Mumbai 400 018. The complaint can also be filed online on the RBI CMS portal."
    },
    {
      question: "Does Bank of Maharashtra have an OTS scheme for 2026?",
      answer: "Yes, Bank of Maharashtra has active OTS schemes, particularly for micro and small enterprises and general NPA accounts. They often offer online OTS application facilities where you can get a settlement offer generated based on your outstanding dues."
    },
    {
      question: "How does settlement affect my credit score?",
      answer: "Settlement will mark your account as 'Settled' in your credit report, dropping your score by 50-100 points. This is temporary. With good financial behavior and secured credit builder products, you can rebuild your score within 12-24 months."
    },
    {
      question: "Do I need a lawyer for DRT cases in Mumbai?",
      answer: "While you can represent yourself, DRT procedures are legally complex. It is highly advisable to have legal representation to file valid counter-claims and negotiate effectively against the bank's legal team."
    },
    {
      question: "What is the minimum percentage for full and final settlement?",
      answer: "Banks typically aim to recover the principal. In genuine hardship cases (medical crisis, job loss), settlements can range from 30% to 50% of the total outstanding amount, depending on the bank's policy and your negotiation."
    },
    {
      question: "How long does it take to get a No Dues Certificate?",
      answer: "After you pay the settlement amount, the bank usually issues the Settlement Letter immediately. The final No Dues Certificate (NDC) is typically mailed to you within 21 to 45 working days after the payment is reflected in their system."
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
                    Maharashtra
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Comprehensive Guide to Loan Settlement in Maharashtra</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Maharashtra is the economic powerhouse of India, and with high economic activity comes a high volume of credit and loans. From Mumbai's bustle to Pune's IT hubs and Nagpur's industrial belts, thousands of residents find themselves trapped in debt due to unexpected life events like job losses, medical emergencies, or business downturns. If you are struggling with debt repayment in Maharashtra, it is vital to know that you are not alone and, more importantly, you have legal rights.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Loan settlement is a practical, legal, and RBI approved solution to exit debt when you simply cannot pay. It is not a crime to be in debt. The financial system provides mechanisms like the Lok Adalat and One Time Settlement (OTS) schemes to help you close your loan accounts permanently and restart your financial life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                This guide is your authoritative resource on loan settlement specifically for Maharashtra. It covers the latest 2026 Lok Adalat schedules, how to use the Maharashtra Police complaint systems against harassment, and the specific OTS schemes of major banks in the region.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Key Update for 2026</h4>
                <p className="text-blue-800 m-0">
                  The Maharashtra State Legal Services Authority has announced the dates for remaining National Lok Adalats in 2026. This is the fastest, cheapest, and most secure way to settle your bank disputes in a single day.
                </p>
              </div>

              <h2 id="legal-protections" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Your Legal Protections in Maharashtra</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before you start the settlement process, you must know the laws that protect you. The banking system in Maharashtra operates under a mix of central RBI regulations and state specific acts.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">1. RBI Fair Practices Code</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Reserve Bank of India has clear guidelines for recovery. Banks and their agents cannot harass you. They cannot call before 8 AM or after 7 PM. They cannot reveal your debt details to your neighbors or colleagues. Violation of these norms can be reported directly to the RBI Banking Ombudsman in Mumbai.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Maharashtra Money Lending (Regulation) Act, 2014</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                This powerful state law is designed to crush illegal private moneylending. If you have taken a loan from a private lender (not a bank or NBFC) who is not licensed, their loan is effectively void. The Act explicitly prohibits harassment and coercion. If you are being threatened by local moneylenders, this Act provides for their arrest and imprisonment.
              </p>

              <h2 id="debt-relief-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Maharashtra Debt Relief Act 1975</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While an older piece of legislation, the Maharashtra Debt Relief Act of 1975 still holds relevance in understanding the state's stance on protecting vulnerable debtors. Initially created to liquidate debts of rural artisans, laborers, and marginal farmers, it set the precedent that the state will intervene when debt becomes a tool of oppression.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Today, while this specific Act applies to very specific categories of rural borrowers, the spirit of "debt relief" continues in the form of modern OTS schemes and the agricultural debt waiver schemes periodically announced by the Maharashtra government. For urban borrowers, the protections have evolved into the Consumer Protection Act and specific RBI circulars on limiting liability.
              </p>

              <h2 id="lok-adalat-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">National Lok Adalat Schedule 2026 (Maharashtra)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Lok Adalat (People's Court) is arguably the best venue for settling bank loans in Maharashtra. The award passed here is final, binding, and acts as a civil court decree. It saves you from years of litigation fees.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mark these dates for 2026 if you are planning a settlement:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <span className="block text-green-800 font-bold mb-1">1st Lok Adalat</span>
                  <span className="block text-xl font-bold text-gray-800">March 14, 2026</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <span className="block text-green-800 font-bold mb-1">2nd Lok Adalat</span>
                  <span className="block text-xl font-bold text-gray-800">May 9, 2026</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <span className="block text-green-800 font-bold mb-1">3rd Lok Adalat</span>
                  <span className="block text-xl font-bold text-gray-800">September 12, 2026</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <span className="block text-green-800 font-bold mb-1">4th Lok Adalat</span>
                  <span className="block text-xl font-bold text-gray-800">December 12, 2026</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>How to participate:</strong> You don't have to wait for the bank to invite you. You can proactively request your bank branch or the CredSettle legal team to place your matter in the upcoming Lok Adalat. Usually, banks offer maximum waivers on these dates to clear their books.
              </p>

              <h2 id="file-complaint" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">How to File a Police Complaint Against Harassment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If recovery agents cross the line into abuse or threats, you have the right to file a complaint with the Maharashtra Police. Here is the step by step process and the format you should use.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">Step 1: Document Evidence</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before going to the police station, ensure you have:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li>Screenshots of abusive messages or high frequency call logs.</li>
                 <li>Call recordings where threats are made.</li>
                 <li>Names of the agents or the agency they claim to represent.</li>
                 <li>A copy of your previous email complaint to the bank's grievance officer (shows you tried to resolve it internally).</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3">Step 2: Draft the Complaint</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6 text-sm font-mono text-gray-800 overflow-x-auto">
                <p>To,</p>
                <p>The Station House Officer,</p>
                <p>[Your Local Police Station Name],</p>
                <p>[City/District, Maharashtra].</p>
                <br/>
                <p><strong>Subject: Complaint against mental harassment and criminal intimidation by recovery agents of [Bank Name].</strong></p>
                <br/>
                <p>Respected Sir/Madam,</p>
                <p>I, [Your Name], residing at [Your Address], am submitting this formal complaint regarding severe harassment I am facing from recovery agents representing [Bank Name] for my loan account [Account Number].</p>
                <br/>
                <p>Despite informing the bank of my financial difficulty, their agents have been:</p>
                <p>1. Calling me from different numbers at odd hours (late night/early morning).</p>
                <p>2. Using abusive and threatening language (Evidence attached).</p>
                <p>3. Threatening to visit my workplace and defame me.</p>
                <br/>
                <p>This conduct violates the RBI guidelines and constitutes offences under IPC Section 504 (Intentional insult) and Section 506 (Criminal intimidation). I request you to take immediate cognizance of this matter and register an FIR/NC to protect me and my family.</p>
                <br/>
                <p>Sincerely,</p>
                <p>[Your Name] | [Your Phone Number]</p>
              </div>

              <h2 id="rbi-ombudsman" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">RBI Banking Ombudsman Mumbai</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If the bank fails to resolve your grievance within 30 days, or if you are not satisfied with their reply, you must escalate it to the RBI Ombudsman.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                <h4 className="font-bold text-gray-900 mb-2">Contact Details for Maharashtra:</h4>
                <p className="text-gray-700 mb-1"><strong>Address:</strong> C/o Reserve Bank of India, Garment House, Ground Floor, Dr. Annie Besant Road, Worli, Mumbai 400 018.</p>
                <p className="text-gray-700 mb-1"><strong>Phone:</strong> 022-24924607 / 24960893</p>
                <p className="text-gray-700 mb-1"><strong>Online Portal:</strong> <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">cms.rbi.org.in</a></p>
                <p className="text-gray-700 mt-2 text-sm"><em>Note: Filing online via the CMS portal is the fastest method.</em></p>
              </div>

              <h2 id="bank-ots-schemes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Bank OTS Schemes for 2026</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many banks have their own "Rinn Samadhan" or One Time Settlement schemes running.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bank of Maharashtra OTS</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Bank of Maharashtra is particularly active with its settlement schemes for MSME and retail loans. They have launched an "Online OTS System" where you can log in with your account details and check if a pre-approved settlement offer is available for you. This transparency removes the need for middleman negotiation in many straight forward cases.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">SBI & Private Banks</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                SBI often runs the "Rin Samadhan" scheme towards the end of the financial year (January to March). Private banks like HDFC, ICICI, and Axis are open to settlement discussions year round but aim to close files before quarterly audits.
              </p>

              <h2 id="drt-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The DRT Process in Maharashtra</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For loans above ₹20 Lakhs, the Debt Recovery Tribunal (DRT) handles the cases. Maharashtra has a dense network of DRTs.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50 border-b">
                     <tr>
                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Tribunal</th>
                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Jurisdiction</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-gray-600">DRT-1 Mumbai</td>
                      <td className="py-3 px-4 text-gray-600">Colaba</td>
                      <td className="py-3 px-4 text-gray-600">South Mumbai & parts of suburbs</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-gray-600">DRT-2 Mumbai</td>
                      <td className="py-3 px-4 text-gray-600">Colaba</td>
                      <td className="py-3 px-4 text-gray-600">Other parts of Mumbai & Thane</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-gray-600">DRT-3 Mumbai</td>
                      <td className="py-3 px-4 text-gray-600">Vashi / Ballard Estate</td>
                      <td className="py-3 px-4 text-gray-600">Navi Mumbai, Raigad</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-gray-600">DRT Pune</td>
                      <td className="py-3 px-4 text-gray-600">Shivaji Nagar</td>
                      <td className="py-3 px-4 text-gray-600">Pune, Satara, Solapur, Kolhapur</td>
                    </tr>
                   <tr>
                      <td className="py-3 px-4 text-gray-600">DRT Nagpur</td>
                      <td className="py-3 px-4 text-gray-600">Civil Lines</td>
                      <td className="py-3 px-4 text-gray-600">Vidarbha Region</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility for Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                You can apply for settlement if:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Your loan is unsecured (Personal, Credit Card).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">You have defaulted on payments for 90+ days.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">You have genuine financial hardship proof.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">You are willing to pay a reduced lump sum.</span>
                </li>
              </ul>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Settle Your Debt?</h3>
                <p className="mb-8 opacity-90 max-w-2xl mx-auto">Don't let debt control your life in Maharashtra. Our expert team is ready to fight for your rights and get you the best settlement deal.</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
                >
                  Start Your Journey to Freedom
                </Link>
                <p className="mt-4 text-sm opacity-70">100% Confidential • Legal Process • 5000+ Happy Clients</p>
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Live in Maharashtra?</h4>
                <p className="text-sm text-gray-600 mb-6">Get local legal support for your loan settlement.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Get Free Advice
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ Local Expertise</p>
                  <p className="mt-1">✓ Stop Harassment</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Services</h4>
                <ul className="space-y-3 text-sm">
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
                    <Link href="/services/anti-harassment" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Stop Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/sbi" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      SBI Loan Settlement
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
