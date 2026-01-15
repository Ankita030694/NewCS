'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const navLinks = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'understanding-ots', label: 'Understanding OTS' },
  { id: 'eligibility-criteria', label: 'Eligibility' },
  { id: 'settlement-process', label: 'Process Guide' },
  { id: 'collection-tactics', label: 'Collection & Harassment' },
  { id: 'legal-implications', label: 'Legal Implications' },
  { id: 'documentation', label: 'Documents Needed' },
  { id: 'credit-impact', label: 'CIBIL Impact' },
  { id: 'faqs', label: 'FAQs' },
];

const faqList = [
  {
    question: "What is SMFG India Credit (Fullerton India) Settlement?",
    answer: "SMFG India Credit loan settlement, or One Time Settlement (OTS), is a legal provision where the lender agrees to accept a reduced lump sum payment to close a defaulted loan account. This is typically an option for borrowers who are genuinely unable to repay the full amount due to financial hardship."
  },
  {
    question: "Can I settle my Instaloan App personal loan?",
    answer: "Yes, personal loans taken via the SMFG India Credit Instaloan app or managed through mConnect are unsecured loans and are eligible for settlement if they have regular defaults or have been classified as NPAs."
  },
  {
    question: "Will settling my loan affect my CIBIL score?",
    answer: "Yes, opting for a settlement will negatively impact your credit score. Your account will be marked as 'Settled' rather than 'Closed', which indicates that the full amount was not repaid. However, this is often a better alternative to a 'Written-off' status or ongoing legal action."
  },
  {
    question: "How do I stop harassment from SMFG recovery agents?",
    answer: "You have rights under RBI guidelines. Agents cannot call at odd hours (before 8 AM or after 7 PM), use abusive language, or visit you without notice. If harassment continues, you can complain to the Grievance Officer at namaste@smfgindia.com or hire a legal firm like CredSettle to handle all communication."
  },
  {
    question: "What is the contact email for SMFG India Credit grievance?",
    answer: "You can contact their customer care at namaste@smfgindia.com. For unresolved issues or complaints against recovery agents, you can escalate to the Customer Complaint Redressal Cell at ccrc@smfgindia.com."
  },
  {
    question: "How much discount can I get in an OTS?",
    answer: "The discount depends on the age of the default and your financial condition. Settlements can typically range from a waiver of 30% to 50% on the total outstanding dues, especially if the account is a long-standing NPA."
  },
  {
    question: "How do I download the No Dues Certificate (NOC)?",
    answer: "After paying the settlement amount, SMFG India Credit will issue a No Dues Certificate (NOC) within 15-21 working days. This is usually sent to your registered email or physical address. You can also track this request via the mConnect app or by emailing their support."
  },
  {
    question: "Is arbitration common with SMFG India Credit?",
    answer: "Yes, like many NBFCs, SMFG India Credit uses arbitration clauses to recover dues. If you receive an arbitration notice, it is critical not to ignore it. Legal representation is highly recommended to ensure the proceedings are fair."
  }
];

export default function SMFGLoanSettlementClient() {
  const [activeId, setActiveId] = useState('introduction');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

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

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Mobile Sticky Tape Navigation */}
      <div className="lg:hidden sticky top-16 z-30 bg-white shadow-sm border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="flex space-x-6 px-4 py-3 text-sm">
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
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Navigating SMFG India Credit (Fullerton India) Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dealing with mounting debt from <strong>SMFG India Credit</strong> (formerly known as <strong>Fullerton India</strong>) can be an immensely stressful experience. Whether it is a personal loan from their <strong>Instaloan app</strong>, a business loan, or dues managed through the <strong>mConnect app</strong>, the pressure of constant calls and legal notices can disrupt your peace of mind.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                It is important to understand that financial setbacks—be it due to job loss, medical emergencies, or business failure—can happen to anyone. Being unable to pay is not a crime. If you are genuinely struggling, <strong>Loan Settlement</strong> or <strong>One Time Settlement (OTS)</strong> offers a legal, structured exit route.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                SMFG India Credit is a major Non-Banking Financial Company (NBFC). While they have rigorous collection processes, they are also pragmatic. They understand that a partial recovery via settlement is often better than a total loss (Non-Performing Asset).
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                In this guide, <strong>CredSettle</strong> outlines the complete process for settling your SMFG India Credit loan. We cover everything from the <strong>OTS mechanism</strong> and <strong>NOC download</strong> to handling <strong>recovery agents</strong> and contacting their <strong>grievance redressal cell</strong> (namaste@smfgindia.com). Our goal is to help you reduce your debt burden by up to <strong>50%</strong> and regain your financial freedom.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Why CredSettle?</h4>
                <p className="text-blue-800 m-0">
                  We bridge the gap between you and the lender. By handling all communication legally and professionally, we stop the harassment and negotiate the best possible settlement terms for you, allowing you to focus on rebuilding your life.
                </p>
              </div>

              <h2 id="understanding-ots" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding SMFG India's OTS Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>One Time Settlement (OTS)</strong> is a formal agreement. It is not a favor, but a financial decision made by the lender to clean up their balance sheet. When a loan remains unpaid for over 90 days, it becomes a Non-Performing Asset (NPA). For SMFG India Credit, maintaining an NPA is costly due to RBI's provisioning norms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>How it works:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>You offer to pay a lump sum amount (significantly lower than the total outstanding).</li>
                <li>In return, SMFG India Credit waives the remaining principal, interest, and penalty charges.</li>
                <li>The loan account is closed, and the recovery process stops immediately.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                The "sacrifice" amount (the waiver) depends on negotiation. A skilled negotiator can often secure a waiver of 30-50% or more, depending on the case's strength.
              </p>

              <h2 id="eligibility-criteria" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility for Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                SMFG India Credit will not offer a settlement to everyone. You must prove that your default is unintentional and due to genuine hardship.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">Loan Type</h4>
                  <p className="text-gray-600 text-sm">Settlement is applicable primarily to unsecured loans like <strong>Personal Loans</strong> (Instaloan) and unsecured Business Loans. Secured loans (Against Property/Gold) are harder to settle as they have collateral.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">Default Duration</h4>
                  <p className="text-gray-600 text-sm">Accounts that are in default for more than 90 days (NPA) are prime candidates. It is very difficult to settle a "Standard" account that is up to date.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Acceptable Hardship Reasons</h3>
              <div className="space-y-6 mb-10">
                <div className="bg-white border-l-4 border-yellow-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900">Job Loss / Pay Cuts</h4>
                  <p className="text-gray-700 mt-1">Termination letters or bank statements showing a drop in salary are strong evidence.</p>
                </div>
                <div className="bg-white border-l-4 border-yellow-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900">Medical Emergencies</h4>
                  <p className="text-gray-700 mt-1">Hospital bills or medical reports for yourself or immediate family members.</p>
                </div>
                <div className="bg-white border-l-4 border-yellow-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900">Business Loss</h4>
                  <p className="text-gray-700 mt-1">GST returns or balance sheets showing a significant dip in revenue/profitability.</p>
                </div>
              </div>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Settlement Process Guide</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A successful settlement requires a strategic approach. Here is the CredSettle roadmap for SMFG India Credit cases:
              </p>

              <div className="space-y-8 mb-12">
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Stop the Panic</h4>
                  <p className="text-gray-700">
                    First, we advise clients to stop engaging in verbal arguments with recovery agents. Direct all communication through legal channels. We help you draft a representation letter to the lender.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Submit Settlement Proposal</h4>
                  <p className="text-gray-700">
                    We formally submit a proposal to SMFG India Credit's authorized officers. This can be done physically at the branch or via their official channels (e.g., emailing <strong>namaste@smfgindia.com</strong> with legal cc). The proposal highlights your hardship and offers a realistic settlement amount.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Negotiation</h4>
                  <p className="text-gray-700">
                   This is the toughest phase. The bank will demand near-full payment. Our experts negotiate back and forth, citing RBI guidelines and your proven inability to pay, to bring the amount down to 30-50% of the outstanding.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">The Settlement Letter</h4>
                  <p className="text-gray-700">
                    Once terms are agreed, SMFG India Credit will issue a formal <strong>Settlement Letter</strong>. This document is crucial. It must clearly state the settlement amount, date of payment, and that the loan will be fully extinguished upon payment. *Never pay without this letter.*
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Payment & NOC</h4>
                  <p className="text-gray-700">
                    You pay the agreed amount directly to your loan account (via NEFT/RTGS or the mConnect app). Do not pay cash to agents. After payment, the <strong>No Dues Certificate (NOC)</strong> is issued within 2-3 weeks.
                  </p>
                </div>
              </div>

              <h2 id="collection-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Collection Harassment & Grievances</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While SMFG India Credit is a regulated NBFC, on-ground recovery agents can sometimes be aggressive. It is vital to know the lines they cannot cross.
              </p>
              <div className="bg-red-50 p-6 rounded-2xl mb-8 border border-red-100">
                <h3 className="text-red-800 font-bold text-xl mb-3">RBI Fair Practice Code Violations</h3>
                <ul className="list-disc pl-5 text-red-700 space-y-2">
                  <li><strong>Calling Times:</strong> Calls are only permitted between 8:00 AM and 7:00 PM.</li>
                  <li><strong>Language:</strong> Abusive, threatening, or humiliating language is illegal.</li>
                  <li><strong>Privacy:</strong> Agents cannot harass your family, friends, or employer.</li>
                  <li><strong>Visits:</strong> Agents must carry an authorization letter and ID card. They must respect your privacy.</li>
                </ul>
                <p className="text-red-700 mt-4 font-semibold">
                  <strong>Reporting Harassment:</strong> Record calls and save messages. You should first complain to <strong>namaste@smfgindia.com</strong>. If unresolved, escalate to the <strong>Customer Complaint Redressal Cell (CCRC)</strong> at <strong>ccrc@smfgindia.com</strong>. CredSettle can also help you file a complaint with the <strong>RBI Ombudsman</strong> effectively.
                </p>
              </div>

              <h2 id="legal-implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Legal Implications: Arbitration & Section 25</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As an NBFC, SMFG India Credit frequently uses the <strong>Payment and Settlement Systems Act, 2007 (Section 25)</strong> for bounced NACH mandates. This is a criminal offense similar to cheque bounce (Section 138).
              </p>
              
              <div className="grid gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Arbitration Proceedings</h4>
                  <p className="text-gray-700">
                    Your agreement likely has an arbitration clause. The lender may appoint an arbitrator to get a swift decree for recovery. If you receive an arbitration notice, <strong>do not ignore it</strong>. An <em>ex-parte</em> order (passed in your absence) can lead to attachment of bank accounts.
                    <br/><span className="text-blue-600 font-semibold">Our Role:</span> We provide legal representation to attend these hearings (physically or virtually) to contest the claims and push for a mutual settlement.
                  </p>
                </div>
              </div>

              <h2 id="documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Documents Required for OTC</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To process your settlement request swiftly, organize the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
                <li><strong>Loan Details:</strong> Account number, branch details, or mConnect/Instaloan app screenshots.</li>
                <li><strong>Correspondence:</strong> Any legal notices or demand letters received.</li>
                <li><strong>Financial Proofs:</strong> Bank statements for the last 6 months.</li>
                <li><strong>Hardship Proofs:</strong> Termination letter, medical records, or business closure documents.</li>
                <li><strong>KYC:</strong> Pan Card and Aadhar Card.</li>
              </ul>

              <h2 id="credit-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on CIBIL Score</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transparency is key. A settlement will be reported to CIBIL as <strong>"Settled"</strong>. This tag will remain on your report for about 7 years and indicates that the loan was closed for a lesser amount.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Long-Term View</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                While your score drops initially, it is better than a "Write-off" or a "Suit Filed" status. Once the loan is settled, you stop the accumulation of negative history. With good financial behavior and our credit rebuilding guidance, you can restore your score to 750+ within 24-36 months.
              </p>

              {/* Review Snippets */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                      <div className="text-sm opacity-80">Vikram S.</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I had a huge personal loan with Fullerton/SMFG. After my business took a hit, I couldn't pay. CredSettle handled the arbitration notice and settled the loan for 40% of the value."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                      <div className="text-sm opacity-80">Anjali K.</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"Recovery agents were calling my office. CredSettle legal team stepped in and stopped it immediately. The peace of mind was worth every penny."</p>
                  </div>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
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
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Settle SMFG Loan</h4>
                <p className="text-sm text-gray-600 mb-6">Expert legal help to save up to 50% on dues.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Get Help Now
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ Stop Harassment</p>
                  <p className="mt-1">✓ Legal Protection</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Lenders</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/bajaj-finserv" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Bajaj Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/aditya-birla" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Aditya Birla Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/tata-capital" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Tata Capital Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/lt-finance" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      L&T Finance Settlement
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
