'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AndhraPradeshLoanSettlementClient() {
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
    { id: 'ap-debt-landscape', label: 'Andhra Pradesh Debt Landscape' },
    { id: 'legal-rights-ap', label: 'Your Legal Rights' },
    { id: 'settlement-process-vizag', label: 'Settlement Process' },
    { id: 'lok-adalat-ap', label: 'AP Lok Adalat' },
    { id: 'police-protection-ap', label: 'Police Protection' },
    { id: 'credit-score-impact', label: 'Credit Score Facts' },
    { id: 'drt-visakhapatnam', label: 'DRT & Legal Info' },
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
      question: "Is loan settlement legal in Andhra Pradesh?",
      answer: "Yes, loan settlement is a fully legal and recognized financial process in Andhra Pradesh. It operates under the guidelines of the Reserve Bank of India (RBI) and is governed by the Indian Contract Act. Banks and financial institutions are authorized to enter into compromise settlements with borrowers to recover Non-Performing Assets (NPAs)."
    },
    {
      question: "Can I settle my personal loan in Visakhapatnam or Vijayawada?",
      answer: "Absolutely. Whether you reside in Visakhapatnam, Vijayawada, Guntur, or any other part of Andhra Pradesh, you can settle unsecured personal loans. If you are experiencing genuine financial distress due to reasons like job loss, medical emergencies, or business failure, lenders are often open to negotiating a one-time settlement."
    },
    {
      question: "How does the Andhra Pradesh Money Lenders Act protect me?",
      answer: "The Andhra Pradesh Money Lenders Act is a crucial piece of legislation that regulates money lending in the state. It mandates that money lenders be licensed and prohibits them from charging exorbitant interest rates. This Act provides a legal shield for borrowers against predatory practices and harassment by unlicensed lenders."
    },
    {
      question: "What should I do if recovery agents are harassing me in Andhra Pradesh?",
      answer: "Harassment by recovery agents is illegal. If you are being threatened, verbally abused, or harassed at odd hours, you have the right to file a police complaint. The Andhra Pradesh Police take such matters seriously. We can assist you in drafting a formal complaint and ensuring it reaches the appropriate authorities."
    },
    {
      question: "What is the role of Lok Adalat in Andhra Pradesh loan settlement?",
      answer: "The Andhra Pradesh State Legal Services Authority (APSLSA) organizes Lok Adalats, which are highly effective forums for amicably resolving loan disputes. A settlement reached in a Lok Adalat has the force of a civil court decree and is final and binding, meaning no further appeal is possible. It offers a swift, cost-effective, and legally secure way to close your loan."
    },
    {
      question: "Does settling a loan affect my CIBIL score?",
      answer: "Yes, when you settle a loan, it is reported to credit bureaus like CIBIL as 'Settled' or 'Written Off'. This will initially lower your credit score. However, this is a strategic decision; carrying a 'Settled' status is far better than a 'Default' status, which causes long-term damage. You can rebuild your score over time with disciplined financial habits."
    },
    {
      question: "Can I settle credit card dues in Andhra Pradesh?",
      answer: "Yes, credit card debts are frequently settled in Andhra Pradesh. Since credit card debt is unsecured and often carries high-interest rates, banks are often willing to accept a one-time settlement (OTS) rather than pursuing a lengthy legal recovery process."
    },
    {
      question: "Do I need a lawyer for loan settlement in Andhra Pradesh?",
      answer: "While you can attempt to settle on your own, having a specialized legal team like CredSettle is highly advantageous. We understand the specific laws of Andhra Pradesh, can effectively communicate with bank officials, stop harassment, and negotiate the most favorable settlement terms, ensuring you don’t pay more than necessary."
    },
    {
      question: "How long does the settlement process take?",
      answer: "The duration of the settlement process can vary, typically taking anywhere from a few weeks to a few months. Factors include the specific bank involved, the outstanding amount, and the complexity of the negotiations. Our goal is to expedite the process while securing the best possible outcome for you."
    },
    {
      question: "What involves the Debt Recovery Tribunal (DRT) in Visakhapatnam?",
      answer: "For larger debts (typically above ₹20 Lakhs), banks may approach the Debt Recovery Tribunal (DRT). In Andhra Pradesh, the DRT in Visakhapatnam handles these cases. If you receive a notice from the DRT, it is a serious legal matter. We can provide expert legal representation to defend your case and explore settlement options within the DRT framework."
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
                    Andhra Pradesh
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
              
              <h2 id="ap-debt-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Navigating Loan Settlement in Andhra Pradesh: A Comprehensive Guide</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Andhra Pradesh, known for its rapid development, agricultural richness, and growing industrial hubs like Visakhapatnam and Vijayawada, is a state where economic aspirations run high. From the textile businesses in Guntur to the tech parks of Vizag, the need for credit to fuel growth and personal ambitions is significant. However, the unpredictability of life-unforeseen medical expenses, agricultural downturns, or business setbacks-can sometimes turn manageable loans into a source of severe financial stress.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you find yourself struggling to repay loans in Andhra Pradesh, it is vital to understand that you have options. <strong>Loan Settlement</strong> is a legitimate, legal, and strategic financial solution available to you. It allows you to negotiate with your bank or financial institution to pay a one-time lump sum-often considerably less than the total amount owed-to close your loan account permanently and move forward.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Lenders in Andhra Pradesh, including major public sector banks like State Bank of India (SBI), Andhra Bank (now Union Bank of India), and private players like HDFC and ICICI, are aware of the challenges borrowers face. They recognize that recovering a portion of a Non-Performing Asset (NPA) is preferable to a total loss. CredSettle acts as your bridge, leveraging this understanding and the legal framework to help you resolve your debts with dignity and regain your peace of mind.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Key Insight for Borrowers in Andhra Pradesh</h4>
                <p className="text-blue-800 m-0">
                  The state has a strong legal aid network. The Andhra Pradesh State Legal Services Authority (APSLSA) actively promotes amicable settlements through Lok Adalats. Utilizing these forums is a highly effective way to resolve banking disputes swiftly and legally.
                </p>
              </div>

              <h2 id="legal-rights-ap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Your Legal Rights as a Borrower in Andhra Pradesh</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many borrowers in Andhra Pradesh endure silence and stress because they represent unaware of their rights. You are protected by robust laws and RBI mandates designed to prevent exploitation and ensure fair treatment.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Protection Against Harassment</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has strict guidelines: <strong>Harassment is illegal.</strong> Recovery agents are prohibited from using intimidation, abusive language, or contacting you at unreasonable hours (before 8 AM or after 7 PM). In Andhra Pradesh, the police are increasingly responsive to complaints regarding harassment by recovery agencies. If you feel threatened, you have the absolute right to file a police complaint.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Andhra Pradesh Money Lenders Act</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                This state legislation plays a critical role in regulating the money-lending ecosystem. It mandates that lenders must obtaining a valid license and prohibits them from charging usurious interest rates. If you are dealing with aggressive private lenders or unregulated loan apps that violate these norms, this Act provides you with a strong legal defense.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">3. The Right to Notice and Due Process</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Under the SARFAESI Act (for secured loans) and general banking codes, financial institutions cannot simply seize your assets or freeze your accounts without following due process. You are entitled to receive proper legal notices, which provide you with a window of opportunity to respond or negotiate. This "notice period" is often the most strategic time to initiate settlement discussions.
              </p>

              <h2 id="settlement-process-vizag" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The CredSettle Loan Settlement Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have designed a transparent and efficient settlement process tailored for our clients in Andhra Pradesh. Here is how we help you reclaim your financial independence:
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
                    <p className="text-gray-700">Our skilled negotiators engage directly with the bank’s regional or zonal offices in Visakhapatnam, Vijayawada, or Hyderabad. We aim to secure a settlement amount that is realistic for you, potentially saving significantly on the outstanding dues.</p>
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

              <h2 id="lok-adalat-ap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Leveraging the State Lok Adalat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Lok Adalat</strong> (People’s Court) is a powerful tool for dispute resolution, widely used in Andhra Pradesh. It serves as an Alternative Dispute Resolution (ADR) mechanism where pending cases or pre-litigation disputes are settled amicably.
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
                In Andhra Pradesh, National Lok Adalats are conducted regularly. CredSettle can represent you in these proceedings, ensuring that your interests are defended and the settlement terms are fair.
              </p>

              <h2 id="police-protection-ap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Addressing Harassment: Police Support</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dealing with aggressive recovery agents can be overwhelming. It is important to know that the law enforcement agencies in Andhra Pradesh are there to protect citizens from illegal harassment.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">How to Report Harassment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have several avenues to register complaints:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li><strong>Local Police Station:</strong> Filing a written complaint with the Station House Officer (SHO) of your nearest police station is a primary step. Be sure to include details of the harassment, call records, and the nature of any threats.</li>
                 <li><strong>Cyber Crime Wing:</strong> For digital harassment-via WhatsApp, email, or loan apps-you can reach out to the Andhra Pradesh Police Cyber Crime Division. The national portal [cybercrime.gov.in](https://cybercrime.gov.in) is also a robust platform for such complaints.</li>
                 <li><strong>Emergency Response (112):</strong> If you face an immediate threat to your safety or if agents create a disturbance at your residence, dialing 112 will connect you to emergency police assistance.</li>
              </ul>

              <h2 id="credit-score-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding the Impact on Your Credit Score</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At CredSettle, we value transparency. Opting for a loan settlement <em>will</em> impact your CIBIL score. When a loan is settled, it is reported as "Settled" instead of "Closed," indicating that the full repayment was not made.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>However, context matters:</strong> If you are already missing payments, your credit score is likely deteriorating rapidly. A "Default" or "Written Off" status is significantly more damaging than a "Settled" status. Settlement stops the bleeding. It clears the outstanding balance from your record.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Rebuilding is Possible:</strong> Once your settlement is finalized, you can begin the journey of rebuilding your credit. Through the use of secured credit cards or small, responsibly managed loans, you can gradually demonstrate financial discipline. With consistent effort, it is entirely possible to restore your credit health within 18-24 months.
              </p>

              <h2 id="drt-visakhapatnam" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Recovery Tribunal (DRT) Visakhapatnam</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For substantial debts, typically exceeding ₹20 Lakhs, banks may file a case with the Debt Recovery Tribunal (DRT). In Andhra Pradesh, the DRT located in Visakhapatnam has jurisdiction over such matters.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>DRT Visakhapatnam:</strong> This tribunal handles debt recovery cases for the region. Receiving a summons from the DRT is a serious legal event. Ignoring it can lead to ex-parte judgments, potentially putting your assets at risk.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The DRT is a judicial forum where you have the right to defend yourself. With expert legal counsel, you can challenge the bank’s claims, interest calculations, and procedures. Moreover, the DRT often encourages settlement. We can negotiate a compromise directly during these proceedings, aiming for a legal and conclusive resolution.
              </p>

              <h2 id="districts-covered" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Serving All Districts in Andhra Pradesh</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Financial challenges are not limited to major cities. CredSettle is committed to assisting clients across the entire state of Andhra Pradesh, from the coastal regions to Rayalaseema.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-sm">
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Visakhapatnam
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Vijayawada (NTR)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Guntur
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Nellore (SPSR Nellore)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Kurnool
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Rajahmundry (East Godavari)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Tirupati
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Kadapa (YSR)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Kakinada
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Anantapur
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Ongole (Prakasam)
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Eluru (West Godavari)
                </div>
              </div>

              <h2 id="settlement-scams" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Beware of Loan Settlement Scams</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As demand for debt relief services increases, so do fraudulent activities targeting vulnerable borrowers. Here is how you can safeguard yourself against common scams:
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">1. The "Impate Payment" Trap</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Scammers impersonating bank officials may call offering an "instant settlement" if you transfer a small amount immediately via UPI to a personal number.
                <br/>
                <strong>Red Flag:</strong> Legitimate bank settlements never involve transfers to personal accounts. All payments must be made directly to your loan account.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">2. The "CIBIL Wipe" Myth</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                 Some fraudulent agencies claim they can "delete" your loan history from CIBIL records for a fee.
                 <br/>
                 <strong>Fact:</strong> This is impossible and illegal. Credit history cannot be erased without the lender’s authorization. Only legitimate settlements and time can improve your score.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">3. Forged Settlement Documents</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fraudsters may send you fake settlement letters via WhatsApp that look authentic.
                <br/>
                <strong>Solution:</strong> Always verify any settlement letter at your bank branch or through official channels before making a payment. At CredSettle, we authenticate every document for you.
              </p>

              <h2 id="why-choose-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Choose CredSettle?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CredSettle provides expert guidance to navigate the complexities of debt settlement. We are your advocates, not just service providers.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li><strong>Data-Backed Negotiation:</strong> We rely on data from thousands of successful cases to determine the optimal settlement amount for your specific situation.</li>
                 <li><strong>Dual Expertise:</strong> Our team combines legal acumen with banking experience. We understand the law and the internal workings of financial institutions giving us a distinct edge.</li>
                 <li><strong>Local Insight:</strong> We are well-versed in the legal landscape of Andhra Pradesh, including the DRT Visakhapatnam procedures and Lok Adalat schedules.</li>
                 <li><strong>Empathetic Support:</strong> We recognize the stress debt causes. We treat every client with respect and dignity, offering a supportive path to financial recovery.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Start your journey towards a debt-free life in Andhra Pradesh today. CredSettle is here to help you regain control of your financial future.
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
                <h3 className="text-2xl font-bold mb-4">Begin Your Debt-Free Journey in Andhra Pradesh</h3>
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
                <h4 className="font-bold text-xl text-gray-900 mb-2">Andhra Support</h4>
                <p className="text-sm text-gray-600 mb-6">Specialized legal aid for Andhra Pradesh residents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v Vizag/Vijayawada Focus</p>
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
                    <Link href="/loan-settlement/telangana" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Telangana Guide
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
