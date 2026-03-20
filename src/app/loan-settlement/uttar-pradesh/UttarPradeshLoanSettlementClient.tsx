'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function UttarPradeshLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        rootMargin: '-100px 0px -35% 0px',
        threshold: 0.1
      }
    );

    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

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
    { id: 'up-debt-landscape', label: 'UP Debt Landscape' },
    { id: 'up-moneylending-act', label: 'UP Money Lending Act' },
    { id: 'settlement-process-noida', label: 'Settlement Process' },
    { id: 'lok-adalat-up', label: 'Lok Adalat in UP' },
    { id: 'police-help-up', label: 'UP Police Protection' },
    { id: 'drt-lucknow-allahabad', label: 'DRT Lucknow & Allahabad' },
    { id: 'cities-covered-up', label: 'Cities We Serve' },
    { id: 'fake-notices-scam', label: 'Beware of Scams' },
    { id: 'why-credsettle-up', label: 'Why CredSettle?' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive 
          ? 'border-blue-600 text-blue-600 font-semibold' 
          : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  const faqList = [
    {
      question: "Is loan settlement legal in Uttar Pradesh?",
      answer: "Yes, loan settlement is a completely legal financial solution in Uttar Pradesh. It operates under the guidelines of the Reserve Bank of India (RBI) and the Indian Contract Act. Banks in Lucknow, Noida, and across UP legally authorize settlements to resolve bad debts."
    },
    {
      question: "Can I settle my personal loan in Noida or Ghaziabad?",
      answer: "Absolutely. The NCR region, including Noida and Ghaziabad, has a high volume of personal loan settlements due to job volatility in the private sector. Banks are very open to negotiating settlements here if you have a genuine reason for non payment."
    },
    {
      question: "How does the UP Regulation of Money Lending Act protect me?",
      answer: "This state specific Act was designed to curb predatory lending. It mandates that lenders must be registered and cannot charge interest rates higher than what is prescribed by the state government. It provides a legal basis to file complaints against harassment by unregistered lenders."
    },
    {
      question: "Will the UP Police help if recovery agents harass me?",
      answer: "Yes. The Uttar Pradesh Police, through their 'Dial 112' service, are very responsive. Harassment, abusive language, or physical threats by recovery agents are criminal offenses. You can file a complaint at your local Thana or via the UPCOP app."
    },
    {
      question: "What is the role of Lok Adalat in UP loan settlement?",
      answer: "The UP State Legal Services Authority (UPSLSA) organizes Lok Adalats regularly. These are effective forums where bank disputes are settled amicably. An award passed here is final and binding, meaning the bank cannot harass you for the same loan again."
    },
    {
      question: "Does settlement damage my CIBIL score?",
      answer: "Settlement reports the account as 'Settled' rather than 'Closed', which does impact your score initially. However, it is far better than a 'Default' status. You can rebuild your score in 18 to 24 months through disciplined financial behavior."
    },
    {
      question: "Where are the Debt Recovery Tribunals (DRT) in UP?",
      answer: "Uttar Pradesh has DRT benches in Lucknow and Allahabad (Prayagraj). If your loan amount is above ₹20 Lakhs, the bank may approach these tribunals. We provide legal representation to handle these cases effectively."
    },
    {
      question: "Can I settle credit card dues in Kanpur or Varanasi?",
      answer: "Yes, credit card settlement is available in all cities including Kanpur, Varanasi, Agra, and Meerut. Banks often agree to waive off the heavy interest and late fees, allowing you to pay just a portion of the principal."
    },
    {
      question: "Do I need to visit the bank branch for settlement?",
      answer: "No. We handle the entire negotiation process with the bank's regional or central offices. You do not need to face the branch manager or local recovery agents personally."
    },
    {
      question: "How long does the settlement process take in UP?",
      answer: "The timeline typically varies from 45 days to 90 days. It depends on the specific bank (e.g., SBI, HDFC, ICICI) and the complexity of your case. We strive to get the settlement letter issued as quickly as possible."
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
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
                  <Link href="/loan-settlement" className="ml-1 font-medium text-gray-700 hover:text-blue-600 md:ml-2 transition-colors">
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
                    Uttar Pradesh
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-12">
        {/* Mobile Sticky Nav */}
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
          {/* Left Column: Table of Contents (Desktop) */}
          <div className="lg:w-1/5 hidden lg:block">
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
          <div className="lg:w-3/5 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <h2 id="up-debt-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Relief in Uttar Pradesh: Your Guide to Financial Freedom</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Uttar Pradesh is a state of immense contrast and economic activity. On one side, we have the high tech corporate hubs of Noida and Ghaziabad, which are part of the National Capital Region (NCR). On the other, we have traditional industrial powerhouses like Kanpur, the spiritual tourism centers of Varanasi and Ayodhya, and the administrative heart in Lucknow. This diverse economy is fueled by credit. From home loans in Greater Noida's real estate market to personal loans for business expansion in Meerut, debt is an integral part of life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, financial stability is never guaranteed. The volatility in the job market, especially in the private sector in Noida, or disruptions in the supply chains affecting traders in Kanpur, can lead to sudden financial distress. When EMIs bounce and penalties pile up, the stress can be overwhelming. In Uttar Pradesh, the fear of "Log Kya Kahenge" (What will people say?) often prevents borrowers from seeking help, but silence only worsens the problem.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                It is crucial to understand that <strong>Loan Settlement</strong> is a legal, viable option. Major banks like SBI, PNB, Bank of Baroda, and private lenders like HDFC and Axis Bank have specific policies for settling Non Performing Assets (NPAs). They understand that recovering 50% of the loan is better than recovering nothing. At CredSettle, we use this business logic to your advantage, helping you negotiate a dignified exit from debt.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Did You Know?</h4>
                <p className="text-blue-800 m-0">
                  The Uttar Pradesh Police have become increasingly strict about harassment by recovery agents. Using services like "Dial 112" or the "UPCOP" app gives you immediate access to police assistance if you are being threatened.
                </p>
              </div>

              <h2 id="up-moneylending-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Uttar Pradesh Regulation of Money Lending Act, 1976</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Borrowers in Uttar Pradesh are protected by specific state laws designed to prevent exploitation. The <strong>Uttar Pradesh Regulation of Money Lending Act, 1976</strong> is a key piece of legislation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Key Protections for You:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                <li><strong>Registration Requirement:</strong> The Act mandates that no person can carry on the business of money lending without a valid registration. This makes many informal "loan sharks" illegal entities in the eyes of the law.</li>
                <li><strong>Interest Rate Caps:</strong> The state government has the power to fix the maximum rate of interest. Charging interest beyond these limits is a violation of the Act.</li>
                <li><strong>Protection from Molestation:</strong> The Act, along with the Indian Penal Code, strictly prohibits the use of force, intimidation, or harassment for the recovery of loans. If a recovery agent creates a nuisance at your home in Lucknow or your office in Noida, they are breaking the law.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Additionally, the RBI's Fair Practices Code applies universally. It strictly forbids banks and NBFCs from using musclemen or abusive language. We at CredSettle ensure that these rights are enforced during your settlement process.
              </p>

              <h2 id="settlement-process-noida" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">How Loan Settlement Works in UP</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The settlement process is a strategic negotiation. We have handled hundreds of cases across UP, from Noida to Gorakhpur, and have a refined process that delivers results.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Case Assessment & Shielding</h4>
                    <p className="text-gray-700">We analyze your debt profile. Once you authorize us, we take over the burden of communication. We direct all recovery calls to our legal team. In aggressive markets like Ghaziabad or Meerut, this shield is vital for your mental peace.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">NPA Management</h4>
                    <p className="text-gray-700">Settlement is usually entertained only after the loan becomes a Non Performing Asset (90 days overdue). We guide you through this period, helping you reply to legal notices and avoiding mistakes that could weaken your position.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Negotiation with Regional Offices</h4>
                    <p className="text-gray-700">We negotiate directly with the bank's Zonal or Regional offices in Lucknow or Noida. Our goal is to get a waiver on all interest and penalties, and a substantial reduction on the principal amount.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Written Settlement Letter</h4>
                    <p className="text-gray-700">We secure a formal settlement offer on the bank's letterhead. We verify the authenticity of this document to ensure you are not falling for a scam.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Closure</h4>
                    <p className="text-gray-700">You pay the agreed amount directly to your loan account. We then ensure the bank issues a "No Dues Certificate" or closure letter, formally ending the debt.</p>
                  </div>
                </div>
              </div>

              <h2 id="lok-adalat-up" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Lok Adalat: The Best Path for Settlement in UP</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Lok Adalat</strong> is a highly effective forum for resolving banking disputes in Uttar Pradesh. Organized by the UP State Legal Services Authority (UPSLSA), it provides a safe and legal platform for settlement.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Why Choose Lok Adalat?</h3>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                 <li><strong>Legal Validity:</strong> An award (decision) made by the Lok Adalat has the same legal status as a decree from a Civil Court. It is final and binding on both parties. No appeal lies against it.</li>
                 <li><strong>No Court Fee:</strong> There is no fee to take your matter to the Lok Adalat. It is a cost effective method of dispute resolution.</li>
                 <li><strong>Speedy Justice:</strong> Matters are resolved on the spot. Large National Lok Adalats are held quarterly across all district courts in UP, including Lucknow, Kanpur, and Allahabad.</li>
                 <li><strong>Amicable Resolution:</strong> The focus is on compromise and settlement, not on prolonged arguments. It is a win win for both the borrower and the bank.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                CredSettle can assist you in moving your case to the Lok Adalat and representing your interests there to ensure a favorable settlement decree.
              </p>

              <h2 id="police-help-up" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">UP Police: Protection Against Harassment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Uttar Pradesh Police have a zero tolerance policy towards criminal intimidation. If recovery agents are harassing you, you have multiple avenues for recourse.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">How to Report Harassment</h3>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                 <li><strong>Dial 112:</strong> This is the unified emergency number in UP. If agents are at your home creating a scene, dialing 112 ensures immediate police intervention.</li>
                 <li><strong>UPCOP App:</strong> You can lodge complaints digitally using the official UP Police app, "UPCOP". This creates a digital trail that forces the local station to take cognizance of the issue.</li>
                 <li><strong>Cyber Crime Reporting:</strong> If you are being harassed via WhatsApp, email, or through illegal loan apps, you can file a complaint at the nearest Cyber Crime Police Station. Noida and Lucknow have specialized Cyber Crime cells that are very active.</li>
                 <li><strong>Igrs Portal (Jansunwai):</strong> You can also register a grievance on the UP Government's Jansunwai portal (IGRS), which is monitored directly by the Chief Minister's office, ensuring strict action.</li>
              </ul>

              <h2 id="drt-lucknow-allahabad" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Recovery Tribunals (DRT) in Uttar Pradesh</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For loans exceeding ₹20 Lakhs, banks typically file cases in the Debt Recovery Tribunals. Uttar Pradesh is served by key DRT benches.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">DRT Lucknow</h4>
                  <p className="text-gray-600 text-sm">Located in the state capital, this tribunal handles cases from Lucknow and central UP districts. It is a busy tribunal, and having expert representation here is crucial.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">DRT Allahabad (Prayagraj)</h4>
                  <p className="text-gray-600 text-sm">Situated in the judicial heart of the state, this tribunal covers eastern UP and surrounding areas. It handles a significant volume of cases from cities like Varanasi and Gorakhpur.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you receive a summons from the DRT, it is a formal legal proceeding. Ignoring it can lead to asset attachment orders. However, the DRT is also a place where settlements can be finalized. We provide legal defense in the DRT to protect your rights and steer the case towards a settlement.
              </p>

              <h2 id="cities-covered-up" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">We Serve All of Uttar Pradesh</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CredSettle's services are not limited to just one city. We have a network that covers the entire length and breadth of Uttar Pradesh.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Noida', 'Greater Noida', 'Ghaziabad', 'Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Prayagraj (Allahabad)', 'Meerut', 'Aligarh', 'Bareilly', 'Moradabad', 'Gorakhpur', 'Saharanpur', 'Jhansi', 'Muzaffarnagar'].map((city, index) => (
                  <span key={index} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                    {city}
                  </span>
                ))}
              </div>

              <h2 id="fake-notices-scam" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Beware of "Fake Notice" Scams in UP</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                There is a rising trend of scams in UP where fraudsters target distressed borrowers. Be vigilant against these common tricks:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                <li><strong>Fake High Court Notices:</strong> You might receive a WhatsApp message that looks like a legal notice from the "Allahabad High Court" or "Supreme Court", threatening arrest within 24 hours unless you pay. Courts never send arrest threats via WhatsApp.</li>
                <li><strong>Police Impersonation:</strong> Scammers may call claiming to be from the "Crime Branch" in Lucknow or Noida, demanding money to stop an FIR. Real police officers will never ask you to transfer money to a personal account to stop a case.</li>
                <li><strong>Fake Settlement Letters:</strong> Always verify any settlement letter you receive. Scammers often forge bank logos and ask for payment into a fake account.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you receive such threats, do not panic and do not pay. Contact us immediately so we can verify the authenticity of the claim.
              </p>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-700 opacity-20 transform -skew-x-12"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Start Your Debt Free Life in Uttar Pradesh</h3>
                  <p className="mb-8 opacity-90 max-w-2xl mx-auto text-lg">
                    Expert legal help is just a click away. Stop the harassment and settle your loans legally in Lucknow, Noida, and beyond.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
                  >
                    Get Free Advice
                  </Link>
                  <p className="mt-6 text-sm opacity-70">Serving Noida, Lucknow, Kanpur & All UP Districts</p>
                </div>
              </div>

            </article>
          </div>

          {/* Right Column: Sidebar (Desktop) */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Uttar Pradesh Support</h4>
                <p className="text-sm text-gray-600 mb-6">Legal aid for Noida, Lucknow & Kanpur residents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  <p>✓ NCR & UP Coverage</p>
                  <p>✓ DRT Lucknow Experts</p>
                  <p>✓ Anti-Harassment Help</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Regions</h4>
                <ul className="space-y-3 text-sm">
                   <li>
                    <Link href="/loan-settlement/delhi" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Delhi Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/haryana" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Haryana Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/maharashtra" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Maharashtra Guide
                    </Link>
                  </li>
                </ul>
              </div>

               <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Our Services</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Personal Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Credit Card Settlement
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
