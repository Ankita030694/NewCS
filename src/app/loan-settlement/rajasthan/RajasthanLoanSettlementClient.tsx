'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RajasthanLoanSettlementClient() {
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
    { id: 'rajasthan-debt-landscape', label: 'RJ Debt Landscape' },
    { id: 'money-lenders-act-rj', label: 'Money Lenders Act' },
    { id: 'settlement-process-jaipur', label: 'Settlement Process' },
    { id: 'lok-adalat-rajasthan', label: 'Lok Adalat System' },
    { id: 'police-help-jaipur', label: 'Police Protection' },
    { id: 'drt-jaipur', label: 'DRT Jaipur Info' },
    { id: 'tourism-loans', label: 'Tourism & Biz Loans' },
    { id: 'scams-rajasthan', label: 'Avoid Scams' },
    { id: 'cities-covered-rj', label: 'Districts We Serve' },
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
      question: "Is loan settlement legal in Rajasthan?",
      answer: "Yes, loan settlement is a fully legal financial process in Rajasthan, recognized by the RBI and the Indian legal system. Banks in Jaipur, Jodhpur, and across the state authorize settlements (OTS) to recover bad debts when a borrower is genuinely unable to pay the full amount."
    },
    {
      question: "How does the Rajasthan Money Lenders Act help me?",
      answer: "The Rajasthan Money Lenders Act, 1963, regulates private lending in the state. It mandates licensing for lenders and caps interest rates. This act is a strong legal defense against harassment by unregistered private financiers or 'loan sharks' in cities like Kota or Udaipur."
    },
    {
      question: "Can I settle my business loan in Jaipur?",
      answer: "Absolutely. Jaipur has a thriving SME sector (jewelry, textiles, tourism). If your business has suffered losses, banks are willing to negotiate a settlement on unsecured business loans to close the NPA account."
    },
    {
      question: "Will the Rajasthan Police help if recovery agents harass me?",
      answer: "Yes. The Rajasthan Police are strict about maintaining law and order. You can file a complaint at your local police station or through the 'RajCop' citizen app if agents use abusive language or threaten you. The police often intervene to ensure agents follow legal recovery norms."
    },
    {
      question: "What is the role of Lok Adalat in Rajasthan?",
      answer: "The Rajasthan State Legal Services Authority (RSLSA) organizes Lok Adalats regularly. These act as 'People's Courts' where disputes are settled amicably. An award passed here is final and binding, meaning the bank cannot file a future case against you for the same loan."
    },
    {
      question: "Does settlement affect my CIBIL score?",
      answer: "Yes, the account status changes to 'Settled', which temporarily lowers your credit score. However, this is better than a 'Default' status. You can rebuild your score over 18-24 months by using secured credit cards and maintaining financial discipline."
    },
    {
      question: "Where is the Debt Recovery Tribunal (DRT) for Rajasthan?",
      answer: "The Debt Recovery Tribunal (DRT) for the entire state is located in Jaipur. It handles cases for loan defaults exceeding ₹20 Lakhs. If you receive a notice from DRT Jaipur, we provide expert legal representation to defend your case."
    },
    {
      question: "Can I settle credit card dues in Udaipur or Kota?",
      answer: "Yes. Credit card debt is common in these cities. We negotiate with banks to waive off the high revolving interest and late fees, allowing you to close the card by paying a reduced principal amount."
    },
    {
      question: "Do I need to visit the bank branch personally?",
      answer: "No. CredSettle handles the entire negotiation process with the bank's Regional or Zonal offices (usually in Jaipur or Delhi). You do not need to face the branch manager or recovery agents personally."
    },
    {
      question: "How long does the settlement process take in Rajasthan?",
      answer: "The process generally takes between 45 to 90 days. It depends on the bank's internal approval speed and the complexity of the case."
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
                    Rajasthan
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
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-justify">
              
              <h2 id="rajasthan-debt-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Settlement in Rajasthan: A Legal Path to Financial Freedom</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Rajasthan, the land of heritage and enterprise, is a dynamic economic hub. From the gemstone and jewelry businesses of Jaipur to the coaching centers of Kota, the textile units of Bhilwara, and the tourism industry spanning Udaipur and Jodhpur, the state's economy is vibrant but credit-dependent. Business loans fuel entrepreneurship, while personal loans and credit cards support modern lifestyles.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, economic volatility—like a dip in tourism, fluctuations in export demand, or personal emergencies—can disrupt cash flows. In Rajasthan, where "Izzat" (honor) is paramount, the burden of debt often carries a heavy social stigma. Borrowers often endure silent suffering rather than admitting they need help, fearing damage to their reputation in tight-knit communities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                It is vital to understand that <strong>Loan Settlement</strong> is a legal and strategic financial option, not a personal failure. Major banks operating in Rajasthan, including local leaders like Au Small Finance Bank (headquartered in Jaipur), SBI, HDFC, and ICICI, have clear policies for settling Non-Performing Assets (NPAs). They prefer a pragmatic settlement over prolonged legal battles. CredSettle acts as your confidential partner, helping you navigate the legal landscape to exit debt with dignity.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Legal Shield for Rajasthan</h4>
                <p className="text-blue-800 m-0">
                  Rajasthan has specific laws to protect borrowers. The <strong>Rajasthan Money Lenders Act, 1963</strong> is a key statute that regulates interest rates and mandates licensing for private financiers, offering a strong defense against harassment by unregulated lenders.
                </p>
              </div>

              <h2 id="money-lenders-act-rj" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Rajasthan Money Lenders Act, 1963</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While banks are governed by RBI norms, many in Rajasthan deal with private financiers. The <strong>Rajasthan Money Lenders Act, 1963</strong> was enacted to curb predatory lending practices.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Key Protections for Borrowers:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li>
                  <strong>Mandatory Licensing:</strong> The Act requires every money lender to hold a valid license. Debts owed to unlicensed lenders are often legally unenforceable, giving you leverage against "loan sharks."
                </li>
                <li>
                  <strong>Interest Rate Regulation:</strong> The state government has the power to fix maximum interest rates. Charging excessive interest is a violation of the Act.
                </li>
                <li>
                  <strong>Protection Against Harassment:</strong> The Act, along with general criminal laws, prohibits intimidation or harassment for debt recovery. If a recovery agent creates a nuisance at your home or workplace, they can be prosecuted.
                </li>
              </ul>

              <h2 id="settlement-process-jaipur" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Loan Settlement Process in Jaipur & Rajasthan</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling a loan in Rajasthan involves strategic negotiation with bank officials, typically at regional levels. We have a streamlined process to handle this effectively.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Portfolio Assessment</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We begin by analyzing your total debt. In cities like Jaipur, we see a mix of business loans (MSME) and personal credit. We identify which loans are unsecured and eligible for settlement based on your current financial hardship.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Legal Shield (Stop Harassment)</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Once you hire us, we direct you to divert all recovery calls to our legal team. We inform the bank of our representation, which significantly reduces the daily harassment and protects your family from intrusive calls.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">NPA Management & Notices</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Settlement discussions usually start after the account becomes NPA (90 days overdue). We guide you through this period, drafting professional responses to legal notices (Section 138, Arbitration) to keep your legal defense strong.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Negotiation with Zonal Offices</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We negotiate directly with the bank's Zonal or Regional offices (often in Jaipur C-Scheme or Tonk Road). Our goal is to waive 100% of penal interest and legal charges, and secure a substantial reduction on the principal amount.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Formal Settlement & Closure</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We secure a formal Settlement Letter on the bank's official letterhead. You make the payment directly to your loan account. We then ensure the bank issues a "No Dues Certificate" (NDC), formally closing the loan.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="lok-adalat-rajasthan" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Lok Adalat: The Best Route in Rajasthan</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Lok Adalat</strong> (People's Court) is a highly effective forum for resolving banking disputes in Rajasthan. Organized by the <strong>Rajasthan State Legal Services Authority (RSLSA)</strong>, it offers a secure path to settlement.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Lok Adalat?</h3>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                 <li><strong>Final & Binding:</strong> An award passed by the Lok Adalat is deemed to be a decree of a Civil Court. It is final and binding on all parties. No appeal lies against it. This guarantees that the bank cannot reopen the case later.</li>
                 <li><strong>No Court Fees:</strong> There is no fee to take your matter to the Lok Adalat. If a pending court case is settled here, the court fee paid is refunded.</li>
                 <li><strong>Speedy Justice:</strong> Matters are resolved quickly. National Lok Adalats are held quarterly in district courts across Rajasthan, including Jaipur, Jodhpur, Udaipur, and Kota.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                CredSettle can assist in referring your case to the Lok Adalat and representing you to ensure the settlement terms are recorded accurately.
              </p>

              <h2 id="police-help-jaipur" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Rajasthan Police: Protection Against Harassment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Rajasthan Police are active in curbing illegal activities, including harassment by recovery agents. If agents cross the line, you have recourse.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">How to Report Harassment</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Local Police Station</h4>
                  <p className="text-sm text-gray-600">Filing a written complaint (Parivad) at your local Thana is the first step. Mention the details of harassment, abusive language, and threats. This creates an official record.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">RajCop Citizen App</h4>
                  <p className="text-sm text-gray-600">You can use the official "RajCop" app to report incidents or seek assistance. It is a convenient digital tool provided by the Rajasthan Police.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Cyber Crime Portal</h4>
                  <p className="text-sm text-gray-600">For harassment via WhatsApp, email, or fake loan apps, file a complaint on the National Cyber Crime Reporting Portal. Jaipur has a dedicated Cyber Crime Police Station.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Dial 100 / 112</h4>
                  <p className="text-sm text-gray-600">In case of immediate physical threat or public nuisance by agents at your home, dial the emergency number for immediate police intervention.</p>
                </div>
              </div>

              <h2 id="drt-jaipur" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Recovery Tribunal (DRT) Jaipur</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For loans exceeding ₹20 Lakhs, banks approach the <strong>Debt Recovery Tribunal (DRT)</strong>. The DRT for the entire state of Rajasthan is located in Jaipur.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>DRT Infrastructure:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                <li><strong>DRT Jaipur:</strong> Situated in the 22 Godam area, this tribunal handles recovery cases for the entire state. It deals with high-value cases involving banks and financial institutions.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Receiving a DRT summons is serious. It can lead to asset attachment if ignored. However, the DRT is also a forum for settlement. We provide legal representation in DRT Jaipur to defend your case and negotiate a compromise proposal directly with the bank's legal team.
              </p>

              <h2 id="tourism-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Special Focus: Tourism & Business Loans</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Rajasthan's economy relies heavily on tourism and SMEs. We specialize in settling unsecured business loans for sectors like:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                <li><strong>Tourism & Hospitality:</strong> Hotels, travel agencies, and handicraft businesses in Jaipur, Udaipur, and Jaisalmer.</li>
                <li><strong>Textiles:</strong> Manufacturing units in Bhilwara and Pali.</li>
                <li><strong>Education:</strong> Coaching institutes and related businesses in Kota.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand the seasonal nature of these businesses and help prove genuine hardship due to market downturns to secure favorable settlements.
              </p>

              <h2 id="scams-rajasthan" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Beware of Settlement Scams in Rajasthan</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fraudsters target distressed borrowers. Be vigilant against:
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li>
                  <strong>Fake "High Court" Notices:</strong> Scammers send WhatsApp notices claiming to be from the "Rajasthan High Court," demanding payment via UPI. Courts never work this way.
                </li>
                <li>
                  <strong>"Loan Wiping" Agents:</strong> Individuals claiming they can "wipe" your loan for a cash fee. This is impossible. Never pay cash to individuals.
                </li>
                <li>
                  <strong>Fake Settlement Letters:</strong> Always verify the settlement letter at the bank branch. Scammers forge logos to steal your money.
                </li>
              </ul>

              <h2 id="cities-covered-rj" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">We Serve Every District in Rajasthan</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CredSettle provides expert legal and financial settlement services across the entire state of Rajasthan.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Jaipur', 'Jodhpur', 'Kota', 'Udaipur', 'Bikaner', 'Ajmer', 'Bhilwara', 'Alwar', 'Sikar', 'Pali', 'Bharatpur', 'Ganganagar', 'Hanumangarh', 'Barmer', 'Jaisalmer', 'Jhunjhunu', 'Chittorgarh', 'Nagaur'].map((city, index) => (
                  <span key={index} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-100 transition-colors hover:bg-blue-100">
                    {city}
                  </span>
                ))}
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Reclaim Your Financial Freedom in Rajasthan</h3>
                  <p className="mb-10 opacity-90 max-w-2xl mx-auto text-lg">
                    Don't let debt stress overwhelm you. With legal expertise and local knowledge, CredSettle helps you close your loans with dignity.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-700 font-bold py-4 px-12 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1 text-lg"
                  >
                    Start Your Free Consultation
                  </Link>
                  <p className="mt-6 text-sm opacity-75 font-medium">Serving Jaipur, Jodhpur, Kota & All RJ Districts</p>
                </div>
              </div>

            </article>
          </div>

          {/* Right Column: Sidebar (Desktop) */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Rajasthan Support</h4>
                <p className="text-sm text-gray-600 mb-6">Expert legal aid for Jaipur & RJ residents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500 space-y-2 text-left px-2">
                  <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Jaipur & Jodhpur Team</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Lok Adalat Support</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> DRT Jaipur Defense</p>
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
                    <Link href="/loan-settlement/gujarat" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Gujarat Guide
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/madhya-pradesh" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      MP Guide
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