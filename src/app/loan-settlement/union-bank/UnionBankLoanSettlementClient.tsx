'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function UnionBankLoanSettlementClient() {
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
    { id: 'introduction', label: 'Introduction' },
    { id: 'rinn-samadhan', label: 'Rinn Samadhan Scheme' },
    { id: 'lok-adalat', label: 'Lok Adalat Process' },
    { id: 'npa-classification', label: 'NPA & Legal Action' },
    { id: 'agri-vs-personal', label: 'Personal vs Agri Loans' },
    { id: 'settlement-process', label: 'Step-by-Step Process' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
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
      question: "What is the 'Rinn Samadhan' scheme by Union Bank of India?",
      answer: "Rinn Samadhan is a special One Time Settlement (OTS) scheme periodically launched by Union Bank of India. It is designed to resolve stressed assets (NPAs) by offering waivers on interest and penal charges. It is particularly beneficial for MSME and agricultural borrowers, though personal loan cases may also be considered under its broad guidelines depending on the specific circular in force for the financial year."
    },
    {
      question: "Can I settle my Union Bank Education Loan?",
      answer: "Education loans up to ₹4 Lakhs are often unsecured and can be settled if they turn NPA due to unemployment. For loans above ₹4 Lakhs (often secured or with a co-borrower/guarantor), settlement is tougher. The bank will first try to recover dues from the co-borrower (parents). Settlement is usually a last resort after proving genuine inability to pay."
    },
    {
      question: "Will Union Bank publish my name if I default?",
      answer: "For 'Willful Defaulters' (those who have money but refuse to pay), banks are mandated to publish names and photos in newspapers. However, for a genuine borrower facing financial hardship who approaches the bank for settlement, public shaming is not the protocol. Engaging legally for settlement protects your privacy."
    },
    {
      question: "How much waiver can I expect from Union Bank?",
      answer: "Waivers depend on the asset classification. For 'Doubtful Assets' (NPA > 1-2 years), waivers can be substantial (40-60%). For newer NPAs, the bank typically insists on principal recovery plus some interest cost. In Lok Adalats, Union Bank is known to be pragmatic, sometimes closing small ticket loans at near-principal amounts."
    },
    {
      question: "What is the role of the 'Recovery Officer' in settlement?",
      answer: "The Recovery Officer is your primary point of contact at the branch or regional office. They have the power to recommend your settlement proposal to the higher committee. Maintaining a professional, non-confrontational dialogue with the Recovery Officer, or having CredSettle represent you, is crucial for a favorable recommendation."
    },
    {
      question: "Does Union Bank accept settlement in installments?",
      answer: "Standard OTS policy usually demands upfront payment (within 30-90 days). However, in exceptional cases involving larger amounts, the bank may approve a structured repayment plan over 3-6 months, often with a slight reduction in the waiver benefit."
    }
  ];

  return (
    <>
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
                    Union Bank of India
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

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

          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Union Bank Loan Settlement: The 2026 Strategic Guide</h2>
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  As one of India’s leading Public Sector Banks (PSBs), Union Bank of India operates under strict CVC (Central Vigilance Commission) guidelines. Unlike private banks that can offer discretionary waivers based on a 15-minute call, Union Bank follows a rigid, documented process. This is both a challenge and an opportunity.
                </p>
                <p className="mb-4">
                  In 2025-26, Union Bank has aggressively pushed for the reduction of its NPA (Non-Performing Asset) portfolio, especially in the <strong>MSME and Retail Agricultural</strong> sectors. With the recent integration of "online OTS" portals and the updated <strong>MSME Policy 2025</strong>, the bank is striving to close old bad debts efficiently.
                </p>
                <p className="mb-4">
                  This guide is not a generic overview. It delves into the specific <strong>three-tier approval hierarchy (Branch &rarr; Region &rarr; Zone)</strong> that makes Union Bank settlements unique. We explore why the "Rinn Samadhan" logic applies here and how recent corporate settlements (like the Jalan Transolutions case) set a precedent for retail borrowers.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="text-sm text-blue-900 font-medium">
                    <strong>Online vs. Offline OTS:</strong> Union Bank offers an "Online OTS" module. <em>Warning:</em> Offers generated there are algorithmic and often higher (e.g., asking for 80% of dues). Manual negotiation via the Regional Office often yields far better results (30-50% range).
                  </p>
                </div>
              </div>

              <h2 id="rinn-samadhan" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding 'Mission Rinn Samadhan' Dynamics</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  While "Rinn Samadhan" is a term often used across PSUs (including SBI), Union Bank’s version has distinct characteristics when active. It is technically a "Non-Discretionary / Non-Discriminatory" scheme.
                </p>
                <h4 className="font-bold text-lg mb-2">The "Algorithm" of Union Bank Settlements:</h4>
                <ul className="list-disc pl-6 space-y-4 mb-6">
                  <li>
                    <strong>Focus on 'Doubtful' Assets:</strong> The sweet spot for Union Bank settlements is the <strong>'Drought Period'</strong> (12-24 months post-NPA). If your account is in this bucket, the Regional Office has pre-approved mandates to waive 100% of the Penal Interest.
                  </li>
                  <li>
                    <strong>The 'Upfront' Requirement:</strong> Unlike private banks that might accept a token amount to start, Union Bank policies typically require a deposit of <strong>5-10% of the proposed settlement amount</strong> just to process the application file. This is non-refundable if you default on the settlement but adjustable if the settlement is approved.
                  </li>
                  <li>
                    <strong>MSME Special Dispensation:</strong> Under the MSME Policy 2025, small business loans under ₹2 Crores often have a simplified settlement track. If the unit is non-viable, the bank prefers a quick OTS over a long DRT (Debt Recovery Tribunal) battle.
                  </li>
                </ul>
              </div>

              <h2 id="lok-adalat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Lok Adalat: The PSU "Fast Track"</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Union Bank is a massive participant in National Lok Adalats. In fact, for loans below ₹20 Lakhs, the bank’s Zonal Managers are often given targets to close `X` number of cases in each quarterly Adalat.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                    <h4 className="font-bold text-green-800 mb-2">The "Target Pressure" Advantage</h4>
                    <p className="text-sm text-green-900">
                      As the Lok Adalat date approaches (usually quarterly), Branch Managers are under immense pressure to show "files closed". This is the <strong>best time to negotiate</strong>. A proposal rejected in March might be accepted in June just to meet the Adalat target.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">Permanent Lok Adalat (PLA)</h4>
                    <p className="text-sm text-gray-600">
                      Since July 2025, banking disputes are Public Utility Services. This means you can proactively approach a PLA for settlement even before the bank files a case against you. This is a powerful preemptive strike strategy.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="npa-classification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">NPA Management: Private vs PSU Reality</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Settling with Union Bank is fundamentally different from settling with Axis or HDFC.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th className="px-6 py-3">Parameter</th>
                        <th className="px-6 py-3">Private Bank (e.g., HDFC)</th>
                        <th className="px-6 py-3">Union Bank (PSU)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">Decision Maker</td>
                        <td className="px-6 py-4">Centralized Ops Team</td>
                        <td className="px-6 py-4">Committee (Branch + Region)</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="px-6 py-4 font-medium">Speed</td>
                        <td className="px-6 py-4">Fast (Days)</td>
                        <td className="px-6 py-4">Slow (Weeks/Months)</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">Flexibility</td>
                        <td className="px-6 py-4">High (Commercial decision)</td>
                        <td className="px-6 py-4">Low (Policy bound audits)</td>
                      </tr>
                       <tr className="bg-gray-50 border-b">
                        <td className="px-6 py-4 font-medium">Harassment</td>
                        <td className="px-6 py-4">High (Third-party agents)</td>
                        <td className="px-6 py-4">Moderate (Notices & Calls)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-yellow-800 font-medium">
                    <strong>CredSettle Pro Tip:</strong> Never argue with the Branch Manager about the waiver amount. They usually don’t have the power. The proposal must be structured to pass the scrutiny of the <strong>Regional Office Credit Committee</strong>. We write proposals that "tick the boxes" of their internal audit checklists.
                  </p>
                </div>
              </div>

              <h2 id="agri-vs-personal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Agriculture Loan Nuance (KCC)</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Union Bank has a massive Kisan Credit Card (KCC) book. Settlement here is politically sensitive.
                </p>
                <ul className="list-disc pl-6 space-y-4 mb-6">
                  <li>
                    <strong>Land seizure is rare:</strong> While legally possible under SARFAESI (for land not strictly 'agricultural' in records), banks rarely auction farm land due to local resistance. They prefer OTS.
                  </li>
                  <li>
                    <strong>Interest Subvention:</strong> Often, the "settlement" in Agri loans is actually just a waiver of the massive penal interest that accumulates over years. The Principal is usually recovered.
                  </li>
                  <li>
                    <strong>Debt Relief Schemes:</strong> Always check if your state government has announced a farm loan waiver. Union Bank branches pause recovery during such announcements.
                  </li>
                </ul>
              </div>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">How We Navigate the Bureaucracy</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Since Union Bank relies on "Committees" rather than individuals, documentation is everything. A verbal promise from a manager means nothing.
                </p>
                <div className="space-y-4">
                  <div className="border border-blue-100 rounded-lg p-4">
                    <h5 className="font-bold text-blue-700">Detailed asset declaration (Statement of Means)</h5>
                    <p className="text-sm text-gray-600">We help you prepare a truthful yet strategic Statement of Means. This document proves to the Release Committee that you genuinely <em>cannot</em> pay more. One mistake here (like showing a luxury asset) can kill the deal.</p>
                  </div>
                  <div className="border border-blue-100 rounded-lg p-4">
                    <h5 className="font-bold text-blue-700">The "Source of Funds" Letter</h5>
                    <p className="text-sm text-gray-600">PSU banks are terrified of "Willful Defaulters". We must prove the settlement money is coming from a legitimate, external source (like a relative loan or asset sale), not from hidden income you were hoarding.</p>
                  </div>
                  <div className="border border-blue-100 rounded-lg p-4">
                    <h5 className="font-bold text-blue-700">Auditing the Sanction Letter</h5>
                    <p className="text-sm text-gray-600">Union Bank sanction letters often have clauses like "Right to Recompense" (booking the loss to you later). We fight to ensure the "No Dues" clause is absolute and unconditional.</p>
                  </div>
                </div>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Prepare these before we approach the Regional Office:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  <li><strong>Standard OTS Application Format:</strong> (We provide this).</li>
                  <li><strong>KYC Documents:</strong> Pan Card / Aadhar.</li>
                  <li><strong>Income Proof (or lack thereof):</strong> Last 6 months bank statements of all accounts.</li>
                  <li><strong>Hardship Evidence:</strong> Medical bills, termination letter, closure notice of business.</li>
                  <li><strong>Affidavit:</strong> In some cases, a notarized affidavit stating no other assets exist.</li>
                </ul>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>

            </article>
          </div>

          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center transform transition hover:-translate-y-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Union Bank OTS Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Get expert guidance on Rinn Samadhan & Lok Adalat settlements.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v Legally Verified</p>
                  <p className="mt-1">v End Harassment</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Banks</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/sbi" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      SBI Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/bank-of-baroda" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Bank of Baroda
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/axis-bank" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Axis Bank
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
