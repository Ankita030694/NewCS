'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AdityaBirlaLoanSettlementClient() {
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
      { rootMargin: '-100px 0px -35% 0px', threshold: 0.1 }
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
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeId, isMobile]);

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  const navLinks = [
    { id: 'introduction', label: 'Aditya Birla Overview' },
    { id: 'arbitration-trap', label: 'The Arbitration Trap' },
    { id: 'harassment-protection', label: 'Stopping Collections' },
    { id: 'ots-process', label: 'OTS Process & Fees' },
    { id: 'nbfc-vs-bank', label: 'NBFC vs Bank Rules' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqList = [
    {
      question: "Why did Aditya Birla Finance send me an Arbitration Notice?",
      answer: "As an NBFC, ABFL prefers Arbitration over Civil Courts because it's faster. They often appoint a 'Sole Arbitrator' (usually biased) to get a quick 'Award' (decree) against you to enforce payment. You MUST legally reply to this notice immediately."
    },
    {
      question: "Can I settle my Personal Loan with Aditya Birla Finance?",
      answer: "Yes, unsecured personal loans are the easiest to settle. We typically target a settlement of 35-50% of the principal outstanding, especially if the loan is over 180 days past due (NPA)."
    },
    {
      question: "They are calling my relatives. Is this legal?",
      answer: "Absolutely not. RBI guidelines strictly prohibit calling friends, family, or employers. If ABFL agents are doing this, we can file a formal complaint with the RBI Ombudsman for 'Unfair Debt Collection Practices'."
    },
    {
      question: "What is the 'Foreclosure Charge' trap?",
      answer: "Even in settlements, they often try to add 'Foreclosure Charges' (often 4% + GST). However, effective Jan 1, 2026, RBI has banned these for individual floating-rate loans. For fixed-rate personal loans, we negotiate this waiver as part of the OTS."
    },
    {
      question: "Does a settlement remove the loan from my CIBIL?",
      answer: "No, it marks it as 'Settled' or 'Post Write-Off Settled'. The account status closes, but the negative remark stays for ~3 years. It's the price of becoming debt-free instantly."
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
                <Link href="/" className="inline-flex items-center hover:text-blue-600">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link href="/loan-settlement" className="hover:text-blue-600">Loan Settlement</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="font-medium text-gray-700">Aditya Birla Finance</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-12">
        
        {/* Mobile TOC */}
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
          
          {/* Desktop TOC */}
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Aditya Birla Finance Loan Settlement: The NBFC Reality</h2>
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  Settling with <strong>Aditya Birla Finance Ltd (ABFL)</strong> is fundamentally different from settling with a bank like HDFC or SBI. As a massive Non-Banking Financial Company (NBFC), their regulatory agility allows them to be more aggressive in recovery.
                </p>
                <p className="mb-4">
                  While banks are burdened by NPA protocols, Aditya Birla Finance often moves straight to <strong>Arbitration</strong>. If you have received a legal notice citing the <em>Arbitration and Conciliation Act, 1996</em>, do not ignore it. This is their primary weapon to convert an unsecured personal loan into a court-enforceable "Award" (decree).
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="text-sm text-blue-900 font-medium">
                    <strong>Critical Warning:</strong> ABFL collection agents are notoriously persistent. They are known to visit home addresses and contact workplace HR departments. Our primary goal is to <strong>Stop the Harassment</strong> legally so you can negotiate indiscriminately.
                  </p>
                </div>
              </div>

              <h2 id="arbitration-trap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The "Sole Arbitrator" Trap: Delhi & Mumbai Venues</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Most borrowers ignore arbitration notices, thinking they are just "threats". This is a fatal mistake with NBFCs like Aditya Birla. Their loan agreements explicitly designate <strong>Delhi or Mumbai</strong> as the seat of arbitration, regardless of where you live.
                </p>
                <h4 className="font-bold text-lg mb-2">How It Works:</h4>
                <ol className="list-decimal pl-6 space-y-4 mb-6">
                  <li>
                    <strong>Unilateral Appointment:</strong> They often invoke a clause appointing a "Sole Arbitrator" (e.g., formerly appointed by ABFL unilaterally). While recent Supreme Court rulings challenge this, they still use it to get ex-parte awards.
                  </li>
                  <li>
                    <strong>Remote Proceedings:</strong> If you are in Bangalore and the venue is Delhi, you might miss the proceedings. We handle this representation or transfer requests.
                  </li>
                  <li>
                    <strong>Execution Petition (EP):</strong> An Ex-Parte Award is as powerful as a court decree. They will use it to freeze bank accounts.
                  </li>
                </ol>
                <p className="mb-4 font-semibold text-gray-800">
                  We counter this by challenging the arbitrator's neutrality immediately under Section 12 of the Act, forcing them to pause or withdraw the proceedings. This creates the leverage needed for a One-Time Settlement (OTS).
                </p>
              </div>

              <h2 id="harassment-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Stopping Collection Agents</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Aditya Birla Finance outsources collections to third-party agencies. If you are facing harassment, you have a direct escalation line.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
                  <h5 className="font-bold text-blue-900 text-lg mb-2">Escalate Immediately</h5>
                  <p className="text-blue-800 text-sm mb-2">
                    If agents are abusive, email the <strong>Principal Nodal Officer</strong> directly (Level 3 Escalation):
                  </p>
                  <p className="text-blue-900 font-mono font-bold">
                    Mr. Arijit Sen <br/>
                    Email: grievance.finance@adityabirlacapital.com
                  </p>
                  <p className="text-blue-800 text-xs mt-2">
                    *Quote your Loan Account Number and attach call recordings.
                  </p>
                </div>

                <h4 className="font-bold text-lg mb-2 text-gray-800">Your Legal Rights (RBI Circular 2024/25):</h4>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <h5 className="font-bold text-red-700 mb-1">Forbidden Actions</h5>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Calling before 8 AM or after 7 PM.</li>
                      <li>Contacting non-guarantor family members.</li>
                      <li>Visiting your workplace without appointment.</li>
                      <li>Using abusive or threatening language.</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <h5 className="font-bold text-green-700 mb-1">Our Counter-Action</h5>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Legal Notice to Compliance Head.</li>
                      <li>Complaint to RBI Ombudsman (CMS).</li>
                      <li>Call Recording & Evidence Gathering.</li>
                      <li>Forcing agent ID verification.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 id="ots-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Aditya Birla OTS Process & Nuances</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Settling with them requires a formal approach. Verbal promises from agents mean nothing.
                </p>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</span>
                      <div>
                        <strong>NPA Marking:</strong> Usually, the file moves to the settlement bucket only after 90 days (NPA status). Before this, they push for payment.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</span>
                      <div>
                        <strong>The Offer:</strong> We typically start negotiations at 25-30% of the principal due. The final close usually happens around <strong>40-50%</strong> for unsecured loans.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</span>
                      <div>
                        <strong>The NOC Trap:</strong> Unlike some banks that auto-send the NOC, ABFL often requires a specific "NOC Request" post-payment. Without this, the loan status might linger as "Active" in their internal systems even if CIBIL says settled.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 id="nbfc-vs-bank" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">NBFC vs. Bank: Why It Matters</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Understanding that Aditya Birla is an NBFC is key to the strategy.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-600 border border-gray-200 rounded-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 border-b">Feature</th>
                        <th className="px-6 py-3 border-b">Banks (HDFC/ICICI)</th>
                        <th className="px-6 py-3 border-b">NBFC (Aditya Birla)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Primary Legal Tool</td>
                        <td className="px-6 py-4">DRT / Civil Suit</td>
                        <td className="px-6 py-4"><strong>Arbitration</strong></td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Settlement Speed</td>
                        <td className="px-6 py-4">Slow (Bureaucratic)</td>
                        <td className="px-6 py-4">Fast (Decision Driven)</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Foreclosure Charges</td>
                        <td className="px-6 py-4">Strict RBI Rules</td>
                        <td className="px-6 py-4">Often try to bypass rules</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  To initiate a formal proposal:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>KYC Documents:</strong> PAN and Aadhaar.</li>
                  <li><strong>Hardship Letter:</strong> Detailed reason for default (Job loss, medical emergency, business loss).</li>
                  <li><strong>Proof of Hardship:</strong> Termination letter, medical reports, or bank statements showing cash crunch.</li>
                  <li><strong>Arbitration Notice Copy:</strong> If you have received one, we need it immediately to file a reply.</li>
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

          {/* Right Sticky Sidebar */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center transform transition hover:-translate-y-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Notice from Arbitrator?</h4>
                <p className="text-sm text-gray-600 mb-6">Do not ignore it. They can freeze your accounts. Get a legal reply drafted now.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Stop Arbitration
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ Reply Drafting</p>
                  <p className="mt-1">✓ Agent Handling</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related lenders</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/bajaj-finserv" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Bajaj Finserv
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/tata-capital" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Tata Capital
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/kotak" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Kotak Mahindra
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
