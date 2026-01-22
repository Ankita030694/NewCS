'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function KarnatakaLoanSettlementClient() {
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
    { id: 'karnataka-debt-landscape', label: 'Karnataka Debt Landscape' },
    { id: 'legal-rights-karnataka', label: 'Your Legal Rights' },
    { id: 'settlement-process-bengaluru', label: 'Settlement Process' },
    { id: 'lok-adalat-karnataka', label: 'Karnataka Lok Adalat' },
    { id: 'police-protection-bengaluru', label: 'Police Protection' },
    { id: 'credit-score-impact', label: 'Credit Score Facts' },
    { id: 'drt-karnataka', label: 'DRT & Legal Info' },
    { id: 'districts-covered', label: 'Districts We Serve' },
    { id: 'settlement-scams', label: 'Beware of Scams' },
    { id: 'why-choose-credsettle', label: 'Why CredSettle?' },
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
      question: "Is loan settlement legal in Karnataka?",
      answer: "Yes, loan settlement is a completely legal and regulated financial process in Karnataka, just as it is across the rest of India. It operates under the framework of the Indian Contract Act and RBI guidelines. Banks and NBFCs are authorized to settle non-performing assets (NPAs) to recover a portion of the debt."
    },
    {
      question: "Can I settle my personal loan in Bengaluru?",
      answer: "Absolutely. Whether you are in Bengaluru, Mysore, Hubli, or Mangalore, you can settle unsecured personal loans. If you are facing genuine financial hardship like job loss or medical emergencies, banks are often willing to negotiate specific settlement terms."
    },
    {
      question: "How does the Karnataka Prohibition of Charging Exorbitant Interest Act help me?",
      answer: "This state-specific Act specifically safeguards borrowers from illegal moneylenders who charge extremely high interest rates. While it primarily targets private moneylenders, it sets a legal precedent against usurious practices, offering a layer of protection against harassment."
    },
    {
      question: "Will the police in Karnataka help if recovery agents harass me?",
      answer: "Yes. The Karnataka Police are usually supportive if you are being threatened or harassed. You can file a complaint against aggressive recovery agents who violate RBI guidelines. We can assist you in drafting and submitting these complaints to the appropriate station."
    },
    {
      question: "What is the role of Lok Adalat in Karnataka loan settlement?",
      answer: "The Karnataka State Legal Services Authority (KSLSA) organizes Lok Adalats which are effective forums for settling loan disputes amicably. Settlements reached here have the status of a civil court decree and are final, offering a quick and cost-effective resolution."
    },
    {
      question: "Does settling a loan affect my CIBIL score?",
      answer: "Yes, settlement will be reported to credit bureaus as 'Settled' or 'Written Off', which can initially lower your score. However, this is often a better long-term strategy than remaining in a 'Default' status, which damages your score more severely over time. You can rebuild your score post-settlement."
    },
    {
      question: "Can I settle credit card dues in Karnataka?",
      answer: "Yes, credit card debts are among the most common types of unsecured debts settled in Karnataka. Banks often prefer a one-time settlement over prolonged non-payment, allowing you to close the card account for a reduced amount."
    },
    {
      question: "Do I need a lawyer for loan settlement?",
      answer: "While not mandatory, having a specialized lawyer or settlement company like CredSettle significantly empowers you. We understand the legal nuances, can stop harassment, and have the negotiation skills to get you the best possible settlement deal, which is difficult to achieve individually."
    },
    {
      question: "How long does the process take in Karnataka?",
      answer: "The timeline typically ranges from a few weeks to a few months. It depends on your specific bank, the loan amount, and the complexity of negotiations. Our team works efficiently to expedite this process for you."
    },
    {
      question: "What if I have received a legal notice from the court?",
      answer: "Do not ignore it. A legal notice indicates the bank is escalating the matter. Contact us immediately. We can review the notice, represent you, and often still steer the matter towards an out-of-court settlement or resolve it at the Lok Adalat."
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
                    Karnataka
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
          <div className="lg:w-1/6 hidden lg:block">
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
              
              <h2 id="karnataka-debt-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Navigating Loan Settlement in Karnataka: A Complete Guide</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Karnataka, particularly its capital Bengaluru (Bangalore), is a powerhouse of technology, startups, and innovation. With this rapid economic activity comes a massive flow of credit. Residents across the state—from the tech hubs of Whitefield to the commercial centers of Mysore and Hubli—rely heavily on personal loans and credit cards to fuel their lifestyles and businesses. However, the volatility of the modern economy, layoffs in the tech sector, or unexpected medical crises can suddenly turn manageable debt into an overwhelming burden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you find yourself unable to repay your loans in Karnataka, it is crucial to understand that you are not alone, and more importantly, you are not without rights. <strong>Loan Settlement</strong> is a viable, legal, and strategic option available to you. It is a process where you negotiate with your lender to pay a one-time lump sum amount—often significantly lower than your total outstanding—to close your loan account permanently.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Lenders in Karnataka, including major banks like State Bank of India (SBI), HDFC, ICICI, and Karnataka Bank, understand the reality of Non-Performing Assets (NPAs). They are pragmatic business entities. Recovering a portion of the loan is far better for their balance sheets than a total write-off. With CredSettle, we leverage this business logic along with strong legal frameworks to help you exit the debt trap with dignity.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Key Insight for Karnataka Borrowers</h4>
                <p className="text-blue-800 m-0">
                  Karnataka has a robust legal aid system. The Karnataka State Legal Services Authority (KSLSA) is very active in mediating financial disputes. Utilizing forums like the Lok Adalat can expedite your settlement process effectively.
                </p>
              </div>

              <h2 id="legal-rights-karnataka" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Your Legal Rights as a Borrower in Karnataka</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many borrowers suffer in silence because they are unaware of their legal protections. In Karnataka, you are shielded by both central RBI mandates and specific state laws designed to prevent exploitation.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Protection Against Harassment</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The RBI has made it crystal clear: <strong>Harassment is illegal.</strong> Recovery agents cannot intimidate you, use foul language, or call you at odd hours (before 8 AM or after 7 PM). In Bengaluru, the police have been increasingly vigilant against recovery agencies that cross the line. If an agent threatens you physically or verbally, you have the right to file a police complaint immediately.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Karnataka Prohibition of Charging Exorbitant Interest Act, 2004</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                While this Act primarily targets private moneylenders, its spirit influences the broader lending ecosystem in the state. It prohibits the charging of interest rates that are excessively high compared to established norms. If you are dealing with unregulated lenders or aggressive loan apps charging predatory rates, this Act provides a strong legal basis for your defense and protection.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">3. The Right to Notice</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Under the SARFAESI Act (for secured loans) and general banking codes, a bank cannot simply seize your assets or freeze your accounts without due process. You must be served proper legal notices, giving you adequate time to respond or represent your case. This "notice period" is often the golden window where settlement negotiations can be most effective.
              </p>

              <h2 id="settlement-process-bengaluru" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The CredSettle Loan Settlement Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have streamlined the settlement process to be as stress-free as possible for our clients in Karnataka. Here is a step-by-step breakdown of how we help you reclaim your financial freedom:
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Case Assessment & Shielding</h4>
                    <p className="text-gray-700">We begin by thoroughly analyzing your financial situation and loan documents. Once you engage us, we take over all communication with the bank. This immediately reduces the stress of dealing with daily recovery calls.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Strategic Default Management</h4>
                    <p className="text-gray-700">For a settlement to be possible, the loan typically needs to be classified as an NPA. We guide you through this sensitive period, advising you on how to handle legal notices and ensuring you remain legally compliant while we prepare for negotiation.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">3</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Expert Negotiation</h4>
                    <p className="text-gray-700">Our team negotiates directly with the bank's regional offices in Bengaluru and other Karnataka hubs. Our goal is to secure a settlement amount that is affordable for you, potentially saving you 40-50% or more on the outstanding dues.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">4</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Settlement Agreement</h4>
                    <p className="text-gray-700">We ensure that the settlement offer is documented in writing on the bank's official letterhead. This is critical. We verify every clause to ensure there are no hidden terms before advising you to make the payment.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">5</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Closure & Freedom</h4>
                    <p className="text-gray-700">After payment, we ensure you receive the "No Dues Certificate" (NDC). Your loan account is officially closed, and you are free to begin your journey of financial rebuilding.</p>
                  </div>
                </div>
              </div>

              <h2 id="lok-adalat-karnataka" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Leveraging the Karnataka Lok Adalat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Lok Adalat</strong> (People's Court) is a highly effective mechanism for dispute resolution in India, and it is particularly active in Karnataka. It is an Alternative Dispute Resolution (ADR) forum where pending cases or disputes at the pre-litigation stage are settled amicably.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Why is it beneficial for you?</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li><strong>Speedy Justice:</strong> Unlike regular courts where cases drag on for years, Lok Adalat matters are often resolved in a single sitting.</li>
                 <li><strong>Final and Binding:</strong> An award passed by the Lok Adalat is deemed to be a decree of a civil court and is final. No appeal lies against such an award, meaning the bank cannot come back later to claim more money.</li>
                 <li><strong>Cost-Effective:</strong> There is no court fee payable when a matter is filed in a Lok Adalat. If a case pending in a court of law is referred to the Lok Adalat and is settled, the court fee originally paid is refunded.</li>
                 <li><strong>Amicable Atmosphere:</strong> The setting is informal and conciliatory, focusing on compromise rather than confrontation.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                In Karnataka, National Lok Adalats are held quarterly. Our team at CredSettle can represent you in these proceedings, ensuring that the settlement terms recorded before the judge are favorable to you.
              </p>

              <h2 id="police-protection-bengaluru" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Addressing Harassment: Police Support in Bengaluru</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Facing aggressive recovery agents can be terrifying. It is vital to know that the law enforcement machinery in Bengaluru and Karnataka is accessible for your protection.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reporting Mechanisms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can file complaints against harassment through several channels:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li><strong>Local Police Station:</strong> A written complaint to the Station House Officer (SHO) of your local police station is the most direct action. Ensure you detail the specific incidents, times of calls, and nature of threats.</li>
                 <li><strong>Cyber Crime Wing:</strong> For harassment that occurs via digital means—such as abusive WhatsApp messages, emails, or through instant loan apps—you can file a complaint with the Karnataka State Police Cyber Crime Division. The portal [cybercrime.gov.in](https://cybercrime.gov.in) is also an effective national avenue.</li>
                 <li><strong>Emergency Response (112):</strong> In case of immediate physical threat or if agents are creating a scene at your home, dialing 112 (Emergency Response Support System) can bring immediate police assistance.</li>
              </ul>

              <h2 id="credit-score-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Truth About Your Credit Score</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe in complete transparency. Choosing to settle your loan <em>will</em> have an impact on your CIBIL score. When a loan is settled, it is reported as "Settled" rather than "Closed". This indicates that the loan was not repaid in full according to the original terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>But consider the context:</strong> If you are already defaulting, your score is likely plummeting every month. A "Default" or "Written Off" status is far more damaging and long-lasting than a "Settled" status. Settlement puts a stop to the damage. It zeroes out the outstanding balance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>The Path to Recovery:</strong> Once the settlement is complete, you can begin the process of rebuilding your credit. By using secured credit cards (backed by fixed deposits) or small secured loans and paying them on time, you can steadily improve your score. Within 18-24 months of disciplined financial behavior, it is entirely possible to restore your creditworthiness to a healthy level.
              </p>

              <h2 id="drt-karnataka" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Recovery Tribunals (DRT) in Karnataka</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For larger debts, typically exceeding ₹20 Lakhs, banks may approach the Debt Recovery Tribunal (DRT). Karnataka has dedicated DRT benches located in Bengaluru.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>DRT Bengaluru:</strong> The Debts Recovery Tribunals in Bengaluru handle cases for the entire state. If you receive a summons from the DRT, it is a formal legal proceeding. Ignoring it can lead to ex-parte orders against you, potentially resulting in asset attachment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, the DRT is not just a recovery engine; it is a judicial forum where you can defend your rights. With expert legal representation, you can challenge incorrect interest calculations and procedural lapses by the bank. Furthermore, the DRT encourages settlement. We can often negotiate a compromise directly during the DRT proceedings, resolving the matter legally and conclusively.
              </p>

              <h2 id="districts-covered" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">We Serve All Districts in Karnataka</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Debt problems are not limited to Bengaluru. Whether you are a planter in Coorg, a business owner in Mangalore, or a techie in Mysore, CredSettle is here for you. We handle cases across the entire state of Karnataka.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-sm">
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Bengaluru (Urban & Rural)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Mysuru (Mysore)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Mangaluru (Dakshina Kannada)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Hubballi-Dharwad
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Belagavi (Belgaum)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Kalaburagi (Gulbarga)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Davanagere
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Ballari (Bellary)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Vijayapura (Bijapur)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Shivamogga (Shimoga)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Tumakuru (Tumkur)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Udupi
                </div>
              </div>

              <h2 id="settlement-scams" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Beware of Loan Settlement Scams in Karnataka</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As the demand for debt relief grows, unfortunately, so do scams. In Bengaluru alone, cyber police register hundreds of cases where desperate borrowers are cheated. Here is how you can protect yourself:
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">1. The "Fake Agent" Call</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Scammers posing as bank officials call and offer an "instant settlement" if you pay a small amount immediately via UPI or Google Pay to a personal number.
                <br/>
                <strong>Red Flag:</strong> Banks never ask you to transfer money to a personal account. All settlement payments must be made to your own loan account number.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">2. The "Debt Erasure" Promise</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                 Some agencies claim they can "delete" your loan from the CIBIL servers for a fee.
                 <br/>
                 <strong>Fact:</strong> This is technically impossible and illegal. No one can simply erase a valid debt record from the Credit Information Companies without the bank's authorization.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">3. Fake Settlement Letters</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Scammers modify old settlement letters using Photoshop and send them to you via WhatsApp. They ask you to pay the settlement amount, which they pocket.
                <br/>
                <strong>Solution:</strong> Always verify the settlement letter at the nearest bank branch or through the official customer care email before making any payment. At CredSettle, we verify the authenticity of every document for you.
              </p>

              <h2 id="why-choose-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Choose CredSettle?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Navigating the complex waters of debt settlement requires a pilot who knows the currents. CredSettle is not just a service; we are your advocates.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li><strong>Data-Driven Negotiation:</strong> We don't just guess; we use data from thousands of successful settlements to know exactly how much a bank is likely to accept for your specific loan type.</li>
                 <li><strong>Legal & Financial Expertise:</strong> Our team comprises legal experts and ex-bankers. We understand the law, but we also understand banking operations. This dual expertise is our edge.</li>
                 <li><strong>Karnataka-Specific Knowledge:</strong> We understand the local legal landscape, from the workings of the Bengaluru DRT to the schedules of the Karnataka Lok Adalats.</li>
                 <li><strong>Empathy & Respect:</strong> We know that debt is a stressful chapter, not a character flaw. We treat every client with the dignity and respect they deserve, providing a supportive environment throughout the process.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your financial freedom is waiting. Don't let debt define your future. Take the first step towards a debt-free life in Karnataka today.
              </p>

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
                <h3 className="text-2xl font-bold mb-4">Start Your Debt-Free Journey in Karnataka</h3>
                <p className="mb-8 opacity-90 max-w-2xl mx-auto">Get professional help to settle your loans legally and regain your peace of mind.</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
                >
                  Free Consultation
                </Link>
                <p className="mt-4 text-sm opacity-70">100% Confidential • Expert Legal Team • Karnataka Wide Service</p>
              </div>

            </article>
          </div>

          {/* Right Column: Sidebar (Desktop) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Karnataka Support</h4>
                <p className="text-sm text-gray-600 mb-6">Specialized legal aid for Karnataka residents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ Bengaluru Based</p>
                  <p className="mt-1">✓ DRT Protection</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Pages</h4>
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
                      Personal Loans
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/delhi" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Delhi Guide
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/maharashtra" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Maharashtra Guide
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
