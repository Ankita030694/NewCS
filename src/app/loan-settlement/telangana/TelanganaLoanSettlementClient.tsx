'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TelanganaLoanSettlementClient() {
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
    { id: 'telangana-debt-landscape', label: 'Telangana Debt Landscape' },
    { id: 'legal-rights-telangana', label: 'Your Legal Rights' },
    { id: 'high-court-rulings', label: 'High Court Rulings 2024-25' },
    { id: 'rythu-rina-mafi', label: 'Rythu Rina Mafi vs Settlement' },
    { id: 'settlement-process-hyd', label: 'Settlement Process' },
    { id: 'lok-adalat-telangana', label: 'Telangana Lok Adalat' },
    { id: 'police-protection-ts', label: 'Police & Cyber Crime' },
    { id: 'drt-hyderabad', label: 'DRT Hyderabad Updates' },
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
      question: "Is loan settlement legal in Telangana?",
      answer: "Yes, loan settlement is a fully legal and recognized financial process in Telangana. It operates under the guidelines of the Reserve Bank of India (RBI) and is governed by the Indian Contract Act. Banks and financial institutions are authorized to enter into compromise settlements with borrowers to recover Non-Performing Assets (NPAs)."
    },
    {
      question: "Can I settle my personal loan in Hyderabad or Warangal?",
      answer: "Absolutely. Whether you reside in Hyderabad, Warangal, Nizamabad, or any other part of Telangana, you can settle unsecured personal loans. If you are experiencing genuine financial distress due to reasons like job loss, medical emergencies, or business failure, lenders are often open to negotiating a one-time settlement."
    },
    {
      question: "How does the Telangana Money Lenders Act protect me?",
      answer: "The Telangana Money Lenders Act is a crucial piece of legislation that regulates money lending in the state. It mandates that money lenders be licensed and prohibits them from charging exorbitant interest rates. This Act provides a legal shield for borrowers against predatory practices and harassment by unlicensed lenders."
    },
    {
      question: "What should I do if recovery agents are harassing me in Telangana?",
      answer: "Harassment by recovery agents is illegal. If you are being threatened, verbally abused, or harassed at odd hours, you have the right to file a police complaint. The Telangana Police take such matters seriously. We can assist you in drafting a formal complaint and ensuring it reaches the appropriate authorities."
    },
    {
      question: "What is the role of Lok Adalat in Telangana loan settlement?",
      answer: "The Telangana State Legal Services Authority (TSLSA) organizes Lok Adalats, which are highly effective forums for amicably resolving loan disputes. A settlement reached in a Lok Adalat has the force of a civil court decree and is final and binding, meaning no further appeal is possible. It offers a swift, cost-effective, and legally secure way to close your loan."
    },
    {
      question: "Does settling a loan affect my CIBIL score?",
      answer: "Yes, when you settle a loan, it is reported to credit bureaus like CIBIL as 'Settled' or 'Written Off'. This will initially lower your credit score. However, this is a strategic decision; carrying a 'Settled' status is far better than a 'Default' status, which causes long-term damage. You can rebuild your score over time with disciplined financial habits."
    },
    {
      question: "Can I settle credit card dues in Telangana?",
      answer: "Yes, credit card debts are frequently settled in Telangana. Since credit card debt is unsecured and often carries high-interest rates, banks are often willing to accept a one-time settlement (OTS) rather than pursuing a lengthy legal recovery process."
    },
    {
      question: "Do I need a lawyer for loan settlement in Telangana?",
      answer: "While you can attempt to settle on your own, having a specialized legal team like CredSettle is highly advantageous. We understand the specific laws of Telangana, can effectively communicate with bank officials, stop harassment, and negotiate the most favorable settlement terms, ensuring you don’t pay more than necessary."
    },
    {
      question: "How long does the settlement process take?",
      answer: "The duration of the settlement process can vary, typically taking anywhere from a few weeks to a few months. Factors include the specific bank involved, the outstanding amount, and the complexity of the negotiations. Our goal is to expedite the process while securing the best possible outcome for you."
    },
    {
      question: "What involves the Debt Recovery Tribunal (DRT) in Hyderabad?",
      answer: "For larger debts (typically above ₹20 Lakhs), banks may approach the Debt Recovery Tribunal (DRT). In Telangana, the DRT in Hyderabad handles these cases. If you receive a notice from the DRT, it is a serious legal matter. We can provide expert legal representation to defend your case and explore settlement options within the DRT framework."
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
                    Telangana
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
              
              <h2 id="telangana-debt-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Navigating Loan Settlement in Telangana: A Comprehensive Guide</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Telangana, with its dynamic capital of Hyderabad and burgeoning hubs like Warangal and Karimnagar, is a state of immense opportunity. From the IT corridors of Hitech City to the agricultural heartlands, ambition drives the economy. However, with ambition often comes financial risk. Unforeseen circumstances - be it a medical emergency, a business downturn, or job loss - can sometimes transform manageable loans into a source of overwhelming stress.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you find yourself struggling to repay loans in Telangana, it is vital to understand that you have options. <strong>Loan Settlement</strong> is a legitimate, legal, and strategic financial solution available to you. It allows you to negotiate with your bank or financial institution to pay a one-time lump sum - often considerably less than the total amount owed - to close your loan account permanently and move forward.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Lenders in Telangana, including major public sector banks like State Bank of India (SBI) and private players like HDFC, ICICI, and Axis Bank, are aware of the challenges borrowers face. They recognize that recovering a portion of a Non-Performing Asset (NPA) is preferable to a total loss. CredSettle acts as your bridge, leveraging this understanding and the legal framework to help you resolve your debts with dignity and regain your peace of mind.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Key Insight for Borrowers in Telangana</h4>
                <p className="text-blue-800 m-0">
                  The state has a strong legal aid network. The Telangana State Legal Services Authority (TSLSA) actively promotes amicable settlements through Lok Adalats. Utilizing these forums is a highly effective way to resolve banking disputes swiftly and legally, ensuring a clear path to financial recovery.
                </p>
              </div>

              <h2 id="legal-rights-telangana" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Your Legal Rights as a Borrower in Telangana</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many borrowers in Telangana endure silence and stress because they remain unaware of their rights. You are protected by robust laws and RBI mandates designed to prevent exploitation and ensure fair treatment.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Protection Against Harassment</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has strict guidelines: <strong>Harassment is illegal.</strong> Recovery agents are prohibited from using intimidation, abusive language, or contacting you at unreasonable hours (before 8 AM or after 7 PM). In Telangana, the police are increasingly responsive to complaints regarding harassment by recovery agencies. If you feel threatened, you have the absolute right to file a police complaint.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Telangana Money Lenders Act</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                This state legislation plays a critical role in regulating the money-lending ecosystem. It mandates that lenders must possess a valid license and prohibits them from charging usurious interest rates. If you are dealing with aggressive private lenders or unregulated loan apps that violate these norms, this Act provides you with a strong legal defense.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">3. The Right to Notice and Due Process</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Under the SARFAESI Act (for secured loans) and general banking codes, financial institutions cannot simply seize your assets or freeze your accounts without following due process. You are entitled to receive proper legal notices, which provide you with a window of opportunity to respond or negotiate. This "notice period" is often the most strategic time to initiate settlement discussions.
              </p>

              <h2 id="high-court-rulings" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Recent Legal Developments: Telangana High Court (2024-2025)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Telangana High Court has taken a stern stance against illegal recovery practices, delivering landmark judgments that empower borrowers.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Justice Nagesh Bheemapaka’s Directive (Sep 2025)</h4>
                <p className="text-gray-700 leading-relaxed">
                  In a significant ruling, the High Court directed banks to "scrupulously adhere" to RBI guidelines. The court explicitly stated that financial institutions cannot use "musclemen" or coercive tactics for recovery. This came after a petition highlighting privacy violations and harassment by agents.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                     [Scale]
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900">Police Cannot Be Recovery Agents (July 2025)</h4>
                     <p className="text-gray-600">
                       Justice T. Vinod Kumar ruled that police forces must not intervene in civil financial disputes. If a lender attempts to use police connections to threaten you for repayment, they are violating this direct court order. Police are for law and order, not debt collection.
                     </p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                     🚫
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900">Zero Tolerance for "Naming and Shaming"</h4>
                     <p className="text-gray-600">
                       The court has reiterated that public humiliation-such as contacting relatives or posting on social media-is strictly prohibited. Any such action by loan apps or agents is grounds for immediate legal action against them.
                     </p>
                   </div>
                </div>
              </div>

              <h2 id="rythu-rina-mafi" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Difference Between "Rythu Rina Mafi" and Personal Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                With the Telangana Government’s 2024 <strong>Rythu Rina Mafi (Crop Loan Waiver)</strong> scheme, there is often confusion among borrowers about which debts can be waived. It is crucial to distinguish between government waivers for farmers and private settlements for personal loans.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="p-4 border-b border-blue-700">Feature</th>
                      <th className="p-4 border-b border-blue-700">Rythu Rina Mafi (Crop Loan Waiver)</th>
                      <th className="p-4 border-b border-blue-700">Personal Loan Settlement (Our Service)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-900">Eligibility</td>
                      <td className="p-4 text-gray-700">Strictly for Farmers with Crop Loans (up to ₹2 Lakhs).</td>
                      <td className="p-4 text-gray-700">Anyone with Unsecured Loans (Credit Cards, Personal Loans).</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-900">Source of Relief</td>
                      <td className="p-4 text-gray-700">Government pays the bank on your behalf.</td>
                      <td className="p-4 text-gray-700">You negotiate to pay a reduced amount yourself.</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-900">Credit Score</td>
                      <td className="p-4 text-gray-700">Generally neutral or positive (debt is fully cleared).</td>
                      <td className="p-4 text-gray-700">Temporary dip (marked as "Settled"), but prevents default.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-900">Process</td>
                      <td className="p-4 text-gray-700">Automatic via implementation phases (e.g., Phase IV in Dec 2024).</td>
                      <td className="p-4 text-gray-700">Requires active legal negotiation with the bank.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 italic mb-8">
                *Note: If you are a salaried employee in Hyderabad with a personal loan or credit card debt, the Crop Loan Waiver does not apply to you. Loan Settlement is your primary legal option for relief.*
              </p>

              <h2 id="settlement-process-hyd" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The CredSettle Loan Settlement Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have designed a transparent and efficient settlement process tailored for our clients in Telangana. Here is how we help you reclaim your financial independence:
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Comprehensive Case Analysis</h4>
                    <p className="text-gray-700">We start by analyzing your financial documents and loan agreements. Once we represent you, we handle all communication with the bank, effectively shielding you from the daily stress of recovery calls.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Strategic Advisory</h4>
                    <p className="text-gray-700">Loans generally need to be classified as NPAs for settlement discussions to begin. We guide you through this phase, advising you on handling legal notices and ensuring you remain compliant while we prepare for negotiations.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">3</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Expert Negotiation</h4>
                    <p className="text-gray-700">Our skilled negotiators engage directly with the bank’s regional or zonal offices in Hyderabad or other major districts. We aim to secure a settlement amount that is realistic for you, potentially saving significantly on the outstanding dues.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">4</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Formal Settlement Agreement</h4>
                    <p className="text-gray-700">We ensure that the settlement offer is officially documented on the bank’s letterhead. This is non-negotiable. We verify every term and condition to ensure your rights are protected before you make any payment.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">5</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Closure & No Dues Certificate</h4>
                    <p className="text-gray-700">Upon payment, we ensure you receive the "No Dues Certificate" (NDC) or closure letter. Your loan account is formally closed, marking the end of your debt burden.</p>
                  </div>
                </div>
              </div>

              <h2 id="lok-adalat-telangana" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Leveraging the Telangana Lok Adalat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Lok Adalat</strong> (People’s Court) is a powerful tool for dispute resolution, widely used in Telangana. It serves as an Alternative Dispute Resolution (ADR) mechanism where pending cases or pre-litigation disputes are settled amicably.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Why is it advantageous for you?</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li><strong>Expedited Resolution:</strong> Unlike traditional courts, Lok Adalat cases are often resolved in a single day, saving you months or even years of legal battles.</li>
                 <li><strong>Final & Binding:</strong> A settlement award passed by the Lok Adalat has the same legal status as a decree from a civil court and is final. No appeal lies against it, giving you absolute legal certainty.</li>
                 <li><strong>Cost-Efficient:</strong> There are no court fees for filing a matter in the Lok Adalat. If a pending court case is settled here, the court fee originally paid is typically refunded.</li>
                 <li><strong>Conciliatory Approach:</strong> The environment is designed to be informal and collaborative, focusing on reaching a mutual agreement rather than winning an argument.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                In Telangana, National Lok Adalats are conducted regularly. CredSettle can represent you in these proceedings, ensuring that your interests are defended and the settlement terms are fair.
              </p>

              <h2 id="police-protection-ts" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Addressing Harassment: Cyber Crime Helpline 1930</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Telangana is at the forefront of battling digital lending harassment. The state recorded a staggering <strong>14,684 complaints</strong> related to loan app harassment in early 2025 alone. You are not alone, and the machinery to help you is stronger than ever.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Instant Action via 1930 (Golden Hour)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most effective tool available to you is the National Cyber Crime Helpline number <strong>1930</strong>. The Telangana Cyber Security Bureau (TGCSB) emphasizes reporting during the "Golden Hour" (immediately after the incident).
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li><strong>Loan App Harassment:</strong> If an app morphs your photos or threatens to access your contacts, dial 1930 immediately. Police have successfully frozen bank accounts of fraudulent apps in many cases.</li>
                 <li><strong>Local Police Station:</strong> For physical harassment by recovery agents, file a nuisance complaint with the Station House Officer (SHO). In Hyderabad, Rachakonda, and Cyberabad commissionarates, police are instructed to act swiftly on such complaints.</li>
              </ul>

              <h2 id="drt-hyderabad" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Recovery Tribunal (DRT) Hyderabad: Jurisdiction & Updates</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For debts exceeding ₹20 Lakhs, banks typically approach the Debt Recovery Tribunal. Hyderabad hosts two benches (DRT-I and DRT-II), which handle cases for the entire state.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Key Jurisdiction Changes (2025 Context)</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                 Recent notifications have attempted to shift cases involving debts of <strong>₹100 Crore and above</strong> to central DRTs in Delhi and Mumbai to fast-track large corporate defaults. However, for most individual and MSME borrowers in Telangana (with debts between ₹20 Lakhs and ₹100 Crores), the venue remains <strong>Hyderabad</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Why This Matters:</strong> The Hyderabad DRT benches often face high pendency due to vacancies. This delay can actually be strategically used to negotiate a settlement. While the legal case drags on, banks are often more willing to accept a One Time Settlement (OTS) to close the file and improve their recovery stats.
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
                <h3 className="text-2xl font-bold mb-4">Begin Your Debt-Free Journey in Telangana</h3>
                <p className="mb-8 opacity-90 max-w-2xl mx-auto">Get professional assistance to settle your loans legally and restore your peace of mind.</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
                >
                  Free Consultation
                </Link>
                <p className="mt-4 text-sm opacity-70">100% Confidential * Expert Legal Team * State-Wide Service</p>
              </div>

            </article>
          </div>

          {/* Right Column: Sidebar (Desktop) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Telangana Support</h4>
                <p className="text-sm text-gray-600 mb-6">Specialized legal aid for Telangana residents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v Hyderabad Focus</p>
                  <p className="mt-1">v DRT Protection</p>
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
                    <Link href="/loan-settlement/karnataka" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Karnataka Guide
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
