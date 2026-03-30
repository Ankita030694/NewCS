'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function GujaratLoanSettlementClient() {
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
    { id: 'gujarat-debt-landscape', label: 'Gujarat Debt Landscape' },
    { id: 'money-lenders-act', label: 'Gujarat Money Lenders Act' },
    { id: 'settlement-process-ahmedabad', label: 'Settlement Process' },
    { id: 'lok-adalat-gujarat', label: 'Lok Adalat System' },
    { id: 'police-help-surat', label: 'Police Protection' },
    { id: 'drt-ahmedabad', label: 'DRT Ahmedabad Info' },
    { id: 'business-loan-settlement', label: 'Business Loans' },
    { id: 'scams-gujarat', label: 'Avoid Scams' },
    { id: 'cities-covered-gj', label: 'Cities We Serve' },
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
      question: "Is loan settlement legal in Gujarat?",
      answer: "Yes, loan settlement is a completely legal financial process in Gujarat. It is governed by the Indian Contract Act and RBI guidelines. Banks in Ahmedabad, Surat, and Rajkot utilize this mechanism (often called One Time Settlement or OTS) to recover Non-Performing Assets (NPAs) when full repayment is not possible."
    },
    {
      question: "How does the Gujarat Money Lenders Act, 2011 protect me?",
      answer: "This Act is a strong shield for borrowers. It mandates that no person can carry on the business of money lending without a valid license. It empowers the government to fix interest rates and makes harassment of borrowers a punishable offense. If you are dealing with unregistered financiers in Surat or Rajkot, this Act provides you with significant legal leverage."
    },
    {
      question: "Can I settle my business loan in Surat or Rajkot?",
      answer: "Yes, Gujarat has a high volume of business loan settlements due to market fluctuations in textiles and diamonds. Unsecured business loans (like MSME loans) can be settled. However, secured loans (against property) are harder to settle unless you can prove the asset value has depreciated significantly or legal issues exist."
    },
    {
      question: "Will the Gujarat Police help if recovery agents harass me?",
      answer: "Absolutely. The Gujarat Police are proactive. You can file a complaint at your local police station or via the 'Citizen Portal' if agents use abusive language, threaten you, or create a scene at your workplace. The police often warn agents to follow RBI’s fair practice codes."
    },
    {
      question: "What is the role of Lok Adalat in Gujarat?",
      answer: "The Gujarat State Legal Services Authority (GSLSA) organizes Lok Adalats regularly. These are people’s courts where disputes are settled amicably. An award passed here is final and binding, meaning the bank cannot file a future case against you for the same loan. It is the safest route for closure."
    },
    {
      question: "Does settlement affect my CIBIL score?",
      answer: "Yes, the account will be reported as 'Settled', which lowers your score temporarily. However, this stops the 'Default' status which is far worse. In a business-centric state like Gujarat, clearing the liability is often prioritized over the temporary score dip, which can be rebuilt later."
    },
    {
      question: "Where is the Debt Recovery Tribunal (DRT) in Gujarat?",
      answer: "The Debt Recovery Tribunals (DRT-1 and DRT-2) for the entire state are located in Ahmedabad. They handle cases for loan defaults exceeding ₹20 Lakhs. If you receive a notice from DRT Ahmedabad, immediate legal representation is required."
    },
    {
      question: "Can I settle credit card dues in Vadodara?",
      answer: "Yes, credit card settlement is very common in Vadodara and Gandhinagar. Banks often waive off the high revolving interest and late fees, allowing you to close the card by paying a reduced principal amount."
    },
    {
      question: "Do I need to visit the bank branch in person?",
      answer: "No. CredSettle handles the negotiations with the bank’s Circle Office or Zonal Office (usually in Ahmedabad or Mumbai). You do not need to face the branch manager or recovery teams personally."
    },
    {
      question: "How long does the settlement process take in Gujarat?",
      answer: "The process typically takes 45 to 90 days. Private banks in Gujarat generally process approvals faster than public sector banks (PSBs), but the exact timeline depends on the complexity of your case."
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
                    Gujarat
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
              
              <h2 id="gujarat-debt-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Settlement in Gujarat: Legal Relief for the Entrepreneurial State</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Gujarat is the land of enterprise. From the diamond polishing units of Surat to the textile mills of Ahmedabad, and the engineering hubs of Rajkot to the chemical industries of Vadodara, the spirit of "Dhandho" (business) runs deep. Credit is the lifeblood of this ecosystem. Business loans, personal loans for working capital, and credit cards are frequently used tools to fuel growth and manage cash flows.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, business is cyclical. Global market fluctuations, GST policy shifts, or supply chain disruptions can suddenly turn a profitable venture into a financial struggle. In Gujarat, where reputation or "Shaakh" is everything, the stigma of debt is intense. Many business owners and salaried professionals in the state suffer in silence, fearing that seeking help might tarnish their market standing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                It is crucial to understand that <strong>Loan Settlement</strong> is a legitimate financial tool, not a failure. Banks like Bank of Baroda (born in Gujarat), SBI, Kotak Mahindra, and HDFC understand the volatility of markets. They have specific policies to settle Non-Performing Assets (NPAs) to clean their books. At CredSettle, we provide a confidential, legal bridge between you and the bank, allowing you to resolve your debt and protect your reputation.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Legal Fact for Gujarat</h4>
                <p className="text-blue-800 m-0">
                  Gujarat has stringent laws against predatory lending. The <strong>Gujarat Money Lenders Act, 2011</strong> is a powerful tool that protects borrowers from harassment by unregistered financiers, a common issue in cities like Surat and Rajkot.
                </p>
              </div>

              <h2 id="money-lenders-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Gujarat Money Lenders Act, 2011</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While banks are regulated by the RBI, many people in Gujarat also deal with private financiers. The state government enacted the <strong>Gujarat Money Lenders Act, 2011</strong> to curb the menace of illegal money lending and harassment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>How this protects you:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li>
                  <strong>Mandatory Registration:</strong> The Act makes it illegal for anyone to carry on the business of money lending without a valid license from the Registrar. Debts owed to unlicensed lenders are often legally unenforceable in court.
                </li>
                <li>
                  <strong>Interest Rate Caps:</strong> The government fixes the maximum rate of interest. Charging interest beyond this limit is a violation. This helps in challenging inflated claims where lenders add arbitrary penalties.
                </li>
                <li>
                  <strong>Protection Against Harassment:</strong> Section 36 of the Act specifically penalizes the molestation or harassment of debtors. If a recovery agent or a private lender intimidates you, blocks your path, or creates a nuisance at your shop or home, they can be prosecuted.
                </li>
              </ul>

              <h2 id="settlement-process-ahmedabad" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Loan Settlement Process in Gujarat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling a loan requires a strategic approach, especially in a state where banks have strong recovery teams. Our process is designed to neutralize harassment and secure the best financial terms.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Financial Health Check</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We analyze your debt portfolio. In Gujarat, it is common to have a mix of personal loans, business loans, and OD/CC limits. We identify which unsecured debts can be settled and calculate a viable offer based on your current cash flow.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Anti-Harassment Shield</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Recovery agents in cities like Ahmedabad and Surat can be aggressive. Once you hire us, we direct you to divert all calls to our legal team. We inform the bank of our representation, which usually stops the daily harassment calls to your family and workplace.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">NPA Management & Legal Reply</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Settlement discussions typically open after the account turns NPA (90 days). During this time, you may receive legal notices (Section 138 or Arbitration). Our legal team drafts professional responses to these notices, keeping your legal defense strong while we prepare for negotiation.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Negotiation with Circle Offices</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We negotiate directly with the bank’s Circle Offices or Recovery Departments in Ahmedabad, Vadodara, or Mumbai. We aim to waive off 100% of the penal interest and legal charges, and significantly reduce the principal amount, often saving clients 40-50% of the total outstanding.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Closure & NDC</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We ensure the settlement offer is documented on the bank’s official letterhead. You pay the agreed amount directly to your loan account. We then follow up to ensure you receive the "No Dues Certificate" (NDC), formally closing the loan.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="lok-adalat-gujarat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Lok Adalat: The Safe Route in Gujarat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Lok Adalat</strong> is a preferred forum for dispute resolution in Gujarat, known for its efficiency. Organized by the <strong>Gujarat State Legal Services Authority (GSLSA)</strong>, it offers a secure and final path to settlement.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Lok Adalat?</h3>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                 <li><strong>Final & Binding:</strong> An award passed by the Lok Adalat is equivalent to a Civil Court decree. It is final and cannot be appealed in any court. This gives you permanent peace of mind; the bank cannot reopen the case later.</li>
                 <li><strong>No Court Fees:</strong> There is no fee to settle a matter in the Lok Adalat. If a court case is pending and gets settled here, the court fee already paid is refunded.</li>
                 <li><strong>Speedy Justice:</strong> Matters are resolved on the spot. National Lok Adalats are held quarterly in district courts across Gujarat, including the Ahmedabad City Civil Court and district courts in Surat, Vadodara, and Rajkot.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                CredSettle can assist in referring your matter to the Lok Adalat and representing you to ensure the settlement terms are recorded accurately.
              </p>

              <h2 id="police-help-surat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Gujarat Police: Protection Against Harassment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Gujarat Police are known for being approachable and proactive. If recovery agents are crossing the line, you have strong recourse.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">How to Report Harassment</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Local Police Station</h4>
                  <p className="text-sm text-gray-600">Filing a written complaint (Arzi) at your local police station is the first step. Detail the harassment, abusive language, and any threats made. The police often summon the agents for a warning.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Cyber Crime Cell</h4>
                  <p className="text-sm text-gray-600">For harassment via WhatsApp, fake legal notices, or loan apps, approach the Cyber Crime Cell. Gujarat has dedicated cyber stations in major cities like Ahmedabad and Surat.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">SHE Teams</h4>
                  <p className="text-sm text-gray-600">If female borrowers or family members are being harassed, Gujarat Police’s "SHE Teams" provide immediate assistance and are very strict against harassment of women.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Dial 100 / 112</h4>
                  <p className="text-sm text-gray-600">In case of immediate threat or if agents are creating a public nuisance at your home or office, dialing the emergency number ensures police intervention.</p>
                </div>
              </div>

              <h2 id="drt-ahmedabad" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Recovery Tribunals (DRT) in Gujarat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For loan amounts exceeding ₹20 Lakhs, banks approach the <strong>Debt Recovery Tribunals (DRT)</strong>. The entire state of Gujarat is served by DRTs located in Ahmedabad.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>DRT Infrastructure:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                <li><strong>DRT-1 Ahmedabad:</strong> Has jurisdiction over specific districts in Gujarat. Located in the Bhadra area.</li>
                <li><strong>DRT-2 Ahmedabad:</strong> Covers the remaining districts of Gujarat and the Union Territory of Dadra and Nagar Haveli and Daman & Diu.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you receive a summons from DRT Ahmedabad, do not ignore it. It can lead to asset attachment. However, the DRT is also a forum for settlement. We provide legal representation in DRT Ahmedabad to defend your case and negotiate a compromise proposal directly with the bank’s legal team.
              </p>

              <h2 id="business-loan-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Special Focus: Business Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Gujarat has a high density of MSMEs. We specialize in settling unsecured business loans (Working Capital Term Loans, Business Instalment Loans).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Key Strategy for Business Owners:</strong>
                <br />
                Unlike personal loans, business loans often involve higher amounts and sometimes collateral (CGTMSE coverage). We analyze whether the loan is truly unsecured or backed by government guarantees. For unsecured business loans, we negotiate based on the closure of the business or loss of revenue, aiming to close the loan account to prevent legal action against the proprietor or directors.
              </p>

              <h2 id="scams-gujarat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Beware of Settlement Scams in Gujarat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fraudsters often target desperate borrowers in business hubs. Be vigilant against:
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li>
                  <strong>Fake "Court Notices":</strong> Scammers send WhatsApp notices claiming to be from the "Ahmedabad City Civil Court" or "Gujarat High Court," demanding payment via UPI. Courts never work this way.
                </li>
                <li>
                  <strong>"Loan Wiping" Agents:</strong> In markets like Surat’s textile ring road or diamond bourse, agents may claim to "wipe" loans for a cash fee. This is impossible. Never pay cash to individuals.
                </li>
                <li>
                  <strong>Fake Settlement Letters:</strong> Always verify the settlement letter at the bank branch or via official customer care. Scammers forge bank logos to steal your settlement money.
                </li>
              </ul>

              <h2 id="cities-covered-gj" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">We Serve Every District in Gujarat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CredSettle provides expert legal and financial settlement services across the entire state of Gujarat.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Anand', 'Nadiad', 'Morbi', 'Mehsana', 'Vapi', 'Valsad', 'Bharuch', 'Navsari', 'Surendranagar', 'Bhuj', 'Palanpur', 'Godhra'].map((city, index) => (
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
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Reclaim Your Financial Freedom in Gujarat</h3>
                  <p className="mb-10 opacity-90 max-w-2xl mx-auto text-lg">
                    Don’t let debt hurt your business or reputation. With legal expertise and local knowledge, CredSettle helps you close your loans with dignity.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-700 font-bold py-4 px-12 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1 text-lg"
                  >
                    Start Your Free Consultation
                  </Link>
                  <p className="mt-6 text-sm opacity-75 font-medium">Serving Ahmedabad, Surat, Rajkot & All GJ Districts</p>
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
                <h4 className="font-bold text-xl text-gray-900 mb-2">Gujarat Support</h4>
                <p className="text-sm text-gray-600 mb-6">Expert legal aid for Ahmedabad & GJ residents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500 space-y-2 text-left px-2">
                  <p className="flex items-center"><span className="text-green-500 mr-2">v</span> Ahmedabad & Surat Team</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">v</span> Money Lenders Act Help</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">v</span> DRT Ahmedabad Defense</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Regions</h4>
                <ul className="space-y-3 text-sm">
                   <li>
                    <Link href="/loan-settlement/maharashtra" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Maharashtra Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/rajasthan" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Rajasthan Guide
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
