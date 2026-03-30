'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function BankOfBarodaLoanSettlementClient() {
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
    { id: 'psu-advantage', label: 'The PSU Bank Advantage' },
    { id: 'lok-adalat', label: 'Lok Adalat Settlements' },
    { id: 'agri-loans', label: 'Agriculture & BKCC' },
    { id: 'msme-ots', label: 'MSME OTS Schemes' },
    { id: 'retail-loans', label: 'Retail Loan Settlement' },
    { id: 'process', label: 'Settlement Process' },
    { id: 'documents', label: 'Documents Required' },
    { id: 'mistakes', label: 'Mistakes to Avoid' },
    { id: 'success-stories', label: 'Success Stories' },
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
      question: "What is the 'Lakshya' OTS scheme?",
      answer: "Lakshya is a periodic One Time Settlement scheme launched by Bank of Baroda. It targets NPA accounts in Agriculture, MSME, and Retail sectors, offering standardized waiver percentages based on the age of the default."
    },
    {
      question: "Is the Lok Adalat award binding?",
      answer: "Yes, an award passed by the Lok Adalat is equivalent to a Civil Court decree. It is final and binding on both you and the bank. No appeal lies against it, which provides complete finality to the dispute."
    },
    {
      question: "Can I settle my Baroda Kisan Credit Card (BKCC) loan?",
      answer: "Absolutely. BKCC loans are a priority for settlement as banks want to clean up agricultural NPAs. You can often get a complete waiver of the penal interest and a reduction in the accrued normal interest."
    },
    {
      question: "Does Bank of Baroda accept settlement for education loans?",
      answer: "Yes, especially if the student is unemployed or underemployed. Education loans up to ₹4 Lakhs are unsecured, and the bank is often willing to settle to recover the principal amount."
    },
    {
      question: "How long does the Bank of Baroda settlement process take?",
      answer: "It is generally slower than private banks due to bureaucratic approvals. Expect it to take 4-8 weeks. Approvals for large waivers often need to go to the Regional or Zonal office."
    },
    {
      question: "Will my land be auctioned if I default on an agri loan?",
      answer: "Auctioning agricultural land is a legally complex and sensitive political issue. While the bank has the legal right (under SARFAESI for certain cases or via court), they almost always prefer settlement over the lengthy and controversial process of land auction."
    },
    {
      question: "Can I get a fresh loan from BoB after settlement?",
      answer: "Not immediately. Your CIBIL will show 'Settled'. However, for government-sponsored schemes or secured loans, you might be eligible after a cooling-off period of a few years."
    },
    {
      question: "What documents do I need for MSME restructuring?",
      answer: "You will need UDYAM registration, GST returns showing turnover drop, last 2 years' balance sheets, and a projected cash flow statement showing how the restructured EMI will be serviced."
    },
    {
      question: "Do I need a lawyer for Lok Adalat?",
      answer: "Strictly speaking, no. You can represent yourself. However, having a settlement expert helps in negotiating the amount beforehand so that the Lok Adalat session is just a formality to seal the deal."
    },
    {
      question: "Why choose CredSettle for PSU bank settlement?",
      answer: "We understand the hierarchy of PSU banks. We know whether to pitch your proposal to the Branch Manager, the Regional Manager, or the Zonal Manager to get the approval moving."
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
                    PSU Bank Settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Bank of Baroda
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Bank of Baroda Settlement: A Public Sector Approach</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Bank of Baroda (BoB) is one of India’s largest Public Sector Undertaking (PSU) banks. Dealing with a PSU bank requires a different strategy compared to private lenders like HDFC or Bajaj Finserv. While private banks are aggressive and quick, PSU banks operate within strict bureaucratic frameworks, following guidelines from the Ministry of Finance and the RBI meticulously.
                </p>
                <p className="mb-4">
                   This "bureaucracy" is actually your advantage. Bank of Baroda has mandated policies for loan settlement-specifically the <strong>One Time Settlement (OTS)</strong> schemes and the <strong>Lok Adalat</strong> mechanism-which are designed to be transparent and fair. They cannot arbitrarily reject a valid settlement proposal if it fits their policy grid.
                </p>
                <p>
                   Whether you are a farmer struggling with a Kisan Credit Card loan, an MSME owner facing a cash crunch, or a salaried individual with a personal loan, this guide will decode the specific channels you can use to settle your debt with Bank of Baroda in 2026.
                </p>
              </div>

              <h2 id="psu-advantage" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The PSU Bank Settlement Advantage</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                 <p className="mb-4">
                    Key differences when settling with Bank of Baroda versus private lenders:
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                       <h5 className="font-bold text-blue-900 mb-2">Standardized Policies</h5>
                       <p className="text-sm text-blue-800">
                          Settlement offers are often driven by circulars (like the 'Lakshya' scheme). If you meet the criteria (e.g., loan is &gt;2 years NPA), the discount percentage is often pre-decided, leaving less room for arbitrary rejection.
                       </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                       <h5 className="font-bold text-green-900 mb-2">Lok Adalat Focus</h5>
                       <p className="text-sm text-green-800">
                          PSU banks are mandated to reduce their NPA lists. They actively participate in Lok Adalats to close huge volumes of small-ticket loans quickly. This is the easiest settlement route.
                       </p>
                    </div>
                 </div>
              </div>

              <h2 id="lok-adalat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Lok Adalat: The Fast Track to Freedom</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The National Lok Adalat is a highly effective forum for settling Bank of Baroda loans, especially for amounts up to ₹20 Lakhs. It is a "People’s Court" organized by the legal services authority to settle disputes amicably.
                </p>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Why it works for BoB Loans:</h4>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                   <li><strong>Official Mandate:</strong> BoB branch managers are given targets to close cases in Lok Adalats. They are more willing to offer deep discounts (waiver of all interest + part principal) to meet these targets.</li>
                   <li><strong>Legal Immunity:</strong> Once a settlement award is signed in the Lok Adalat, it has the force of a court decree. The bank cannot reopen the case, and you cannot be harassed further.</li>
                   <li><strong>Cost-Effective:</strong> There are no court fees. It is a single-day process.</li>
                </ul>
                <h4 className="font-bold text-gray-800 text-lg mb-2">How to participate:</h4>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                   <li>Wait for a Lok Adalat notice (usually holds quarterly).</li>
                   <li>Or, proactively approach the bank branch and ask to refer your case to the upcoming Lok Adalat.</li>
                   <li>CredSettle can represent you, negotiate the amount with the bank manager beforehand, and ensure the Lok Adalat session is just for signing the agreed deal.</li>
                </ol>
              </div>

              <h2 id="agri-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Agriculture Loans & Baroda Kisan Credit Card (BKCC)</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                 <p className="mb-4">
                    Agricultural loans form a huge chunk of Bank of Baroda’s portfolio. If you are a farmer facing crop turnover failure, you have specific protections.
                 </p>
                 <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-6">
                    <h5 className="font-bold text-yellow-900 mb-2">Settlement Policies for Farmers</h5>
                    <ul className="list-disc pl-6 text-yellow-800 text-sm space-y-2">
                       <li><strong>Penal Interest Waiver:</strong> In almost all agri-settlements, 100% of the penal interest is waived off.</li>
                       <li><strong>Natural Calamity Clause:</strong> If your area was declared drought/flood-hit, you are eligible for restructuring (converting short-term loan to term loan) rather than just settlement.</li>
                       <li><strong>Land Auction Rarity:</strong> While legally possible, auctioning agricultural land is socially and politically difficult. Banks avoid it. They prefer an One Time Settlement (OTS) where you pay a lump sum to close the account.</li>
                    </ul>
                 </div>
                 <p className="mb-4">
                    <strong>Strategy:</strong> Do not hide. Approach the branch with your "Girdawari" (crop report) proving crop loss. Propose an OTS based on the principal amount directly.
                 </p>
              </div>

              <h2 id="msme-ots" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">MSME Restructuring & OTS Schemes</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  For small businesses (MSMEs), Bank of Baroda follows specific RBI guidelines for stress resolution.
                </p>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                     <h4 className="font-bold text-gray-900">1. Restructuring (The First Choice)</h4>
                     <p className="text-sm text-gray-600 mt-1">Before settlement, check if you qualify for the "Asset Restructuring Module". This allows you to extend the loan tenure or get a moratorium (interest holiday) without classifying the loan as NPA. This saves your CIBIL.</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                     <h4 className="font-bold text-gray-900">2. Nondiscretionary OTS</h4>
                     <p className="text-sm text-gray-600 mt-1">If the loan is NPA for &gt;2 years and classified as "Doubtful", BoB often has a non-discretionary OTS policy. This means if you offer X% of the outstanding, the system <em>automatically</em> approves it, removing manager bias.</p>
                  </div>
                </div>
              </div>

              <h2 id="retail-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Retail Loans: Personal & Education</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  For unsecured loans like Personal Loans and Education Loans:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                   <li><strong>Education Loans:</strong> If the student is unemployed, the bank is very open to settlement. They often waive the entire interest component and settle for the principal amount, as chasing an unemployed youth yields low recovery.</li>
                   <li><strong>Personal Loans:</strong> Since these are unsecured, the leverage is on your side. If you have genuine hardship (job loss), prove it. The bank would rather recover 40-50% than sell the loan to an Asset Reconstruction Company (ARC) for pennies.</li>
                </ul>
              </div>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The CredSettle Process for Bank of Baroda</h2>
              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Scheme Identification</h4>
                    <p className="text-gray-600 mt-2">We check if there is an active general OTS scheme (like Lakshya) applicable to your account. Applying under a scheme guarantees better terms than an ad-hoc proposal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Proposal Drafting</h4>
                    <p className="text-gray-600 mt-2">We draft a formal settlement proposal addressing the Branch Manager and the Regional Office. We cite valid reasons (Crop loss, Business closure) compliant with their internal circulars.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Escalation & Liaison</h4>
                    <p className="text-gray-600 mt-2">PSU decisions move slow. Our team physically follows up or escalates to the Regional/Zonal manager if the local branch sits on the file. We push for the "Sanction Letter".</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Lok Adalat Closing</h4>
                    <p className="text-gray-600 mt-2">Whenever possible, we route the final closure through the Lok Adalat to give you a court-stamped immunity against future claims.</p>
                  </div>
                </div>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Documents Required</h2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">For Individuals</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start"><span className="text-orange-500 mr-2">*</span> PAN & Aadhar Card</li>
                      <li className="flex items-start"><span className="text-orange-500 mr-2">*</span> Salary Slips / Termination Letter</li>
                      <li className="flex items-start"><span className="text-orange-500 mr-2">*</span> Bank Statements (6 months)</li>
                      <li className="flex items-start"><span className="text-orange-500 mr-2">*</span> Medical records (if applicable)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">For Agri & MSME</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start"><span className="text-orange-500 mr-2">*</span> UDYAM Registration (for MSME)</li>
                      <li className="flex items-start"><span className="text-orange-500 mr-2">*</span> GST Returns showing turnover drop</li>
                      <li className="flex items-start"><span className="text-orange-500 mr-2">*</span> Girdawari / Crop Loss Report (for Agri)</li>
                      <li className="flex items-start"><span className="text-orange-500 mr-2">*</span> Balance Sheets (last 2 years)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 id="mistakes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Mistakes to Avoid</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                 <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                    <h5 className="font-bold text-red-900 mb-2">1. Bribing Officials</h5>
                    <p className="text-sm text-red-800">Never attempt to bribe a PSU bank official for settlement. This can lead to a CBI case. Stick to formal, written OTS proposals.</p>
                 </div>
                 <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                    <h5 className="font-bold text-red-900 mb-2">2. Missing Lok Adalat Dates</h5>
                    <p className="text-sm text-red-800">If you get a Lok Adalat notice, DO NOT ignore it. It is your best chance for a cheap, clean settlement.</p>
                 </div>
                 <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                    <h5 className="font-bold text-red-900 mb-2">3. Ignoring 'Wilful Defaulter' Notices</h5>
                    <p className="text-sm text-red-800">If BoB tags you as specific "Wilful Defaulter", you lose access to all future banking services. Contest this tag immediately.</p>
                 </div>
                 <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                    <h5 className="font-bold text-red-900 mb-2">4. Diverting Stock (MSME)</h5>
                    <p className="text-sm text-red-800">For Cash Credit (CC) limits, if you sell stock and don’t route money to the CC account, it’s a criminal diversion of funds. Avoid this.</p>
                 </div>
              </div>

              <h2 id="success-stories" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Recent Success Stories</h2>
              <div className="space-y-6 mb-10">
                 <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <h5 className="font-bold text-gray-900">Education Loan Settlement</h5>
                          <p className="text-xs text-gray-500">Client: Rahul T. (Indore)</p>
                       </div>
                       <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Active Lok Adalat</span>
                    </div>
                    <p className="text-sm text-gray-700 italic">"I had a ₹4L education loan but no job for 3 years. The interest made it ₹7L. In the Lok Adalat, BoB agreed to take just ₹3.5L and closed the account. CredSettle guided me to the specific bench."</p>
                 </div>

                 <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <h5 className="font-bold text-gray-900">MSME Cash Credit Closure</h5>
                          <p className="text-xs text-gray-500">Client: Textile Unit (Surat)</p>
                       </div>
                       <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">OTS Scheme</span>
                    </div>
                    <p className="text-sm text-gray-700 italic">"My factory shut down during COVID. The CC limit overdue was ₹15L. We used the 'Lakshya' scheme guidelines to propose an OTS of ₹9L. The regional office approved it in 45 days."</p>
                 </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-4 rounded-lg">
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
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 text-center transform hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Got a Notice?</h4>
                <p className="text-sm text-gray-600 mb-6">Lok Adalat or SARFAESI notice from Bank of Baroda? Act now.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-orange-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-orange-700 transition-colors shadow-md"
                >
                  Get OTS Help
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v Check OTS Eligibility</p>
                  <p className="mt-1">v Lok Adalat Support</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Guides</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/sbi" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      SBI Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/union-bank" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Union Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      HDFC Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hero-fincorp" className="text-gray-600 hover:text-blue-600 flex items-center transition-colors">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Hero Fincorp
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
