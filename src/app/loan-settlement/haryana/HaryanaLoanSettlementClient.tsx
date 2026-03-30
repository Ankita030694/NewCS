'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HaryanaLoanSettlementClient() {
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
    { id: 'haryana-debt-landscape', label: 'Haryana Debt Reality' },
    { id: 'money-lenders-act-haryana', label: 'Money Lenders Act' },
    { id: 'settlement-process-gurugram', label: 'Settlement Process' },
    { id: 'lok-adalat-haryana', label: 'Lok Adalat System' },
    { id: 'police-help-ncr', label: 'Police Protection' },
    { id: 'drt-chandigarh', label: 'DRT Chandigarh Info' },
    { id: 'industrial-loans', label: 'Industrial Loans' },
    { id: 'scams-haryana', label: 'Avoid Scams' },
    { id: 'cities-covered-hr', label: 'Districts We Serve' },
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
      question: "Is loan settlement legal in Haryana?",
      answer: "Yes, loan settlement is fully legal in Haryana. It is a financial mechanism recognized by the RBI and governed by the Indian Contract Act. Banks in Gurugram, Faridabad, and across the state use settlement to resolve bad debts (NPAs) and recover a portion of the outstanding amount."
    },
    {
      question: "How does the Punjab Regulation of Money Lenders Act apply to Haryana?",
      answer: "Haryana, having been part of Punjab, adopted several of its laws. This Act (as applicable to Haryana) regulates money lending, requiring licenses and capping interest rates. It serves as a legal defense against harassment by unregistered private financiers in the state."
    },
    {
      question: "Can I settle my personal loan in Gurugram?",
      answer: "Absolutely. Gurugram, being a corporate hub, sees a high volume of personal loan settlements due to job market volatility. If you have lost your job or faced a medical emergency, banks are often willing to negotiate a one-time settlement."
    },
    {
      question: "Will the Haryana Police help if recovery agents harass me?",
      answer: "Yes. The Haryana Police, particularly in NCR regions like Gurugram and Faridabad, are very strict about harassment. You can file a complaint at your local station or via the 'Dial 112' service if agents threaten you or create a nuisance at your workplace."
    },
    {
      question: "What is the role of Lok Adalat in Haryana?",
      answer: "The Haryana State Legal Services Authority (HALSA) organizes Lok Adalats regularly. These are effective forums for settling banking disputes amicably. An award passed here is final and binding, ensuring that the bank cannot harass you for the same loan in the future."
    },
    {
      question: "Does settlement affect my CIBIL score?",
      answer: "Yes, the loan account status changes to 'Settled', which temporarily lowers your credit score. However, this is better than a 'Default' status. You can rebuild your score over 18-24 months by using secured credit cards and maintaining financial discipline."
    },
    {
      question: "Where is the Debt Recovery Tribunal (DRT) for Haryana?",
      answer: "Cases for loan defaults above ₹20 Lakhs in Haryana are typically handled by the Debt Recovery Tribunals (DRT) located in Chandigarh (DRT-1, DRT-2, DRT-3). We provide legal representation in Chandigarh to defend your case."
    },
    {
      question: "Can I settle industrial or business loans in Faridabad?",
      answer: "Yes. Faridabad and Panipat are industrial hubs, and we specialize in settling MSME and business loans there. If your business has suffered losses, we can negotiate a settlement based on your current cash flow realities."
    },
    {
      question: "Do I need to visit the bank branch personally?",
      answer: "No. CredSettle handles the entire negotiation process with the bank’s Regional or Zonal offices (often in Delhi or Chandigarh). You do not need to face the branch manager or recovery agents."
    },
    {
      question: "How long does the settlement process take in Haryana?",
      answer: "The process generally takes between 45 to 90 days. It depends on the bank’s internal approval speed and the complexity of the case."
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
                    Haryana
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
              
              <h2 id="haryana-debt-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Settlement in Haryana: A Legal Guide for Borrowers</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Haryana is a powerhouse of industry and agriculture. The state presents a dual economic face: the glistening corporate towers of Gurugram (Gurgaon) and the industrial factories of Faridabad and Panipat. This rapid economic growth is fueled by credit. Young professionals in Cyber City rely on personal loans and credit cards to maintain an urban lifestyle, while MSME owners in industrial belts rely on business loans to keep their factories running.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, volatility is inherent to this growth. Layoffs in the tech sector, slowdowns in export demand for textiles, or agricultural uncertainties can quickly turn manageable debt into a crisis. In Haryana, where social standing is highly valued, debt is often hidden until it becomes unmanageable. The fear of "samaj" (society) knowing about financial trouble often stops people from seeking help.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                It is important to know that <strong>Loan Settlement</strong> is a legal right. It is a pragmatic financial solution used globally and recognized by the RBI. Major banks operating in Haryana, including SBI, HDFC, ICICI, and Axis Bank, have established policies to settle Non-Performing Assets (NPAs). They prefer a one-time settlement over long-drawn court cases. CredSettle acts as your professional shield, handling the legalities and negotiations so you can exit the debt trap with your dignity intact.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Did You Know?</h4>
                <p className="text-blue-800 m-0">
                  Haryana has specialized police initiatives, especially in Gurugram and Faridabad, to tackle harassment by recovery agents. The "Dial 112" emergency response system is highly effective in curbing illegal recovery tactics at your doorstep.
                </p>
              </div>

              <h2 id="money-lenders-act-haryana" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Legal Protection: The Money Lenders Act</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While central banking laws apply, Haryana also follows the <strong>Punjab Regulation of Money Lenders Act, 1938</strong> (as applicable to the state of Haryana). This act is a crucial line of defense against unregulated private financiers who often operate in the grey market.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>How it protects you:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li>
                  <strong>Licensing is Mandatory:</strong> The Act mandates that anyone in the business of money lending must be registered. Debts owed to unlicensed lenders are often difficult to enforce legally in court, giving borrowers leverage against "loan sharks."
                </li>
                <li>
                  <strong>Fair Interest Rates:</strong> The Act empowers the state to regulate interest rates, preventing the charging of usurious rates that trap borrowers in a never-ending cycle of debt.
                </li>
                <li>
                  <strong>Anti-Harassment:</strong> Combined with the RBI’s Fair Practices Code, this legal framework ensures that harassment, intimidation, and public shaming are criminal offenses. If a recovery agent crosses the line, they are breaking the law.
                </li>
              </ul>

              <h2 id="settlement-process-gurugram" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Settlement Process in Gurugram & Haryana</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling a loan in Haryana involves navigating both the corporate banking structures of Gurugram and the regional offices in Delhi/Chandigarh. We have a streamlined process to handle this effectively.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Debt Assessment</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We start by reviewing your loan portfolio. In Gurugram, we often see high-value personal loans and credit card debts. In industrial zones like Panipat, business loans are common. We identify which loans are unsecured and eligible for settlement.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Legal Shield & Communication Takeover</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Recovery agents in NCR can be aggressive. We immediately direct you to divert all calls to our legal team. We notify the bank of our representation, which helps stop the harassment of your family and colleagues.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Handling NPA & Notices</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Settlement discussions typically begin after the account is classified as NPA (90 days). We guide you through this period, handling any legal notices (Section 138, Arbitration, or Lok Adalat summons) to ensure your legal standing remains strong.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Negotiation with Regional Offices</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We negotiate directly with the bank’s Regional Collection Managers (often based in Delhi, Gurugram, or Chandigarh). Our objective is to waive 100% of the penal interest and significantly reduce the principal, often achieving savings of 40-50%.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Closure & NDC</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We secure a formal Settlement Letter on the bank’s letterhead. You pay the settlement amount directly to your loan account. We then ensure the bank issues a "No Dues Certificate" (NDC), formally closing the chapter.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="lok-adalat-haryana" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Lok Adalat: The Best Route in Haryana</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Lok Adalat</strong> (People’s Court) is a highly effective forum for resolving banking disputes in Haryana. Organized by the <strong>Haryana State Legal Services Authority (HALSA)</strong>, it offers a secure path to settlement.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Lok Adalat?</h3>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                 <li><strong>Final & Binding:</strong> An award passed by the Lok Adalat is deemed to be a decree of a Civil Court. It is final and binding on all parties. No appeal lies against it. This guarantees that the bank cannot reopen the case later.</li>
                 <li><strong>Cost-Effective:</strong> There is no court fee. If a pending court case is settled here, any court fee paid is refunded.</li>
                 <li><strong>Speedy Justice:</strong> Matters are resolved on the spot. National Lok Adalats are held quarterly in district courts across Haryana, including Gurugram, Faridabad, Rohtak, and Hisar.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                CredSettle can help refer your case to the Lok Adalat and represent you there to ensure the settlement terms are recorded accurately.
              </p>

              <h2 id="police-help-ncr" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Haryana Police: Protection Against Harassment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Haryana Police, especially in the NCR districts, are very strict about law and order. Harassment by recovery agents is taken seriously.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">How to Report Harassment</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Dial 112 (ERSS)</h4>
                  <p className="text-sm text-gray-600">This is the unified emergency number. If recovery agents are at your home or office creating a nuisance, dial 112. Police Response Vehicles (Durga Shakti in some areas) arrive quickly to handle the situation.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Local Police Station</h4>
                  <p className="text-sm text-gray-600">You can file a written complaint at your local police station. Mention the details of the harassment, abusive language, and threats. This creates an official record.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Cyber Crime Portal</h4>
                  <p className="text-sm text-gray-600">For harassment via WhatsApp, email, or fake loan apps, file a complaint on the National Cyber Crime Reporting Portal. Gurugram has a dedicated Cyber City police station for such matters.</p>
                </div>
              </div>

              <h2 id="drt-chandigarh" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Recovery Tribunals (DRT) for Haryana</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For loans exceeding ₹20 Lakhs, banks approach the <strong>Debt Recovery Tribunals (DRT)</strong>. For Haryana, these tribunals are located in Chandigarh.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>DRT Infrastructure:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                <li><strong>DRT-1, DRT-2 & DRT-3 Chandigarh:</strong> These benches have jurisdiction over cases from Haryana, Punjab, and Himachal Pradesh. They handle high-value recovery suits.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Receiving a DRT summons is a serious legal matter. It can lead to asset attachment if ignored. However, the DRT is also a forum for settlement. We provide legal representation in Chandigarh to defend your case and negotiate a compromise proposal directly with the bank’s legal team.
              </p>

              <h2 id="industrial-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Special Focus: Industrial & MSME Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Haryana is an industrial hub. We specialize in settling unsecured business loans and MSME loans in industrial belts like:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                <li><strong>Faridabad:</strong> Manufacturing and engineering units.</li>
                <li><strong>Panipat:</strong> Textile and handloom industries.</li>
                <li><strong>Manesar/Gurugram:</strong> Auto components and IT services.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                For business loans, we analyze the "Willful Default" vs "Genuine Business Failure" aspect. We help prove genuine hardship due to market conditions to secure a favorable settlement, often protecting the directors from personal liability.
              </p>

              <h2 id="scams-haryana" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Beware of Settlement Scams in Haryana</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fraudsters often target distressed borrowers in NCR. Be vigilant against:
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li>
                  <strong>Fake "High Court" Notices:</strong> Scammers send WhatsApp notices claiming to be from the "Punjab & Haryana High Court," demanding payment via UPI. Courts never work this way.
                </li>
                <li>
                  <strong>"Crime Branch" Calls:</strong> You may receive calls pretending to be from the Cyber Cell or Crime Branch, threatening arrest. This is a common intimidation tactic.
                </li>
                <li>
                  <strong>Fake Settlement Letters:</strong> Always verify the settlement letter at the bank branch. Scammers often forge logos of major banks to steal your settlement money.
                </li>
              </ul>

              <h2 id="cities-covered-hr" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">We Serve Every District in Haryana</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CredSettle provides expert legal and financial settlement services across the entire state of Haryana.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat', 'Panchkula', 'Bhiwani', 'Sirsa', 'Bahadurgarh', 'Jind', 'Thanesar', 'Kaithal', 'Rewari', 'Palwal'].map((city, index) => (
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
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Reclaim Your Financial Freedom in Haryana</h3>
                  <p className="mb-10 opacity-90 max-w-2xl mx-auto text-lg">
                    Don’t let debt stress overwhelm you. With legal expertise and local knowledge of NCR & Haryana, CredSettle helps you close your loans with dignity.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-700 font-bold py-4 px-12 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1 text-lg"
                  >
                    Start Your Free Consultation
                  </Link>
                  <p className="mt-6 text-sm opacity-75 font-medium">Serving Gurugram, Faridabad, Panipat & All HR Districts</p>
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
                <h4 className="font-bold text-xl text-gray-900 mb-2">Haryana Support</h4>
                <p className="text-sm text-gray-600 mb-6">Expert legal aid for Gurugram & HR residents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500 space-y-2 text-left px-2">
                  <p className="flex items-center"><span className="text-green-500 mr-2">v</span> Gurugram & Faridabad Team</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">v</span> Lok Adalat Support</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">v</span> DRT Chandigarh Defense</p>
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
                    <Link href="/loan-settlement/uttar-pradesh" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      UP Guide
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
