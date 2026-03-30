'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function DmiFinanceLoanSettlementClient() {
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
    { id: 'introduction', label: 'DMI Finance Overview' },
    { id: 'samsung-finance', label: 'Samsung Finance+ & Knox' },
    { id: 'google-pay-loans', label: 'Google Pay Loans' },
    { id: 'digital-arbitration', label: 'Digital Arbitration' },
    { id: 'harassment-protection', label: 'Stopping Harassment' },
    { id: 'ots-process', label: 'OTS Process Steps' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqList = [
    {
      question: "My Samsung phone is locked by 'Knox Guard'. Will settlement unlock it?",
      answer: "Yes. Once you pay the One-Time Settlement (OTS) amount, DMI Finance sends a clearance signal to the Knox server. Your phone should auto-unlock within 24 hours. We ensure this clause is explicitly mentioned in the settlement letter."
    },
    {
      question: "I took a loan via Google Pay/GPay. Can I settle it directly?",
      answer: "Yes. Google Pay is just the interface/facilitator. The lender is DMI Finance. You must negotiate directly with DMI, not Google. We handle these negotiations to ensure your GPay profile is also updated eventually."
    },
    {
      question: "I received a 'Digital Arbitration' notice from Delhi. I live in Mumbai.",
      answer: "DMI primarily uses Delhi as its arbitration seat. They use 'Fast Track Arbitration' (Section 29B). You must respond legally even if you are in another city, or they will get an ex-parte award. We can file a remote representation."
    },
    {
      question: "Agents are visiting my home for a small ₹20,000 loan. Is this legal?",
      answer: "RBI rules apply regardless of loan size. Abuse, threats, or visiting at odd hours is illegal. You can report this to their Principal Nodal Officer, Mr. Ashish Sarin."
    },
    {
      question: "How much discount can I get on a DMI Finance loan?",
      answer: "For unsecured digital loans (Personal Loans/Consumer Durable), settlements often range between 40-60% of the principal outstanding, depending on your delinquency status (NPA)."
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
                  <span className="font-medium text-gray-700">DMI Finance</span>
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">DMI Finance Loan Settlement: Digital Lending Challenges</h2>
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  <strong>DMI Finance</strong> is a tech-driven NBFC that powers many popular digital lending platforms like <strong>Samsung Finance+, Google Pay, and Paytm</strong>. Unlike traditional banks, their loan process-and their recovery process-is heavily digitized.
                </p>
                <p className="mb-4">
                  Settling with DMI Finance comes with unique challenges, such as <strong>remote device locking (Knox Guard)</strong> for Samsung phones and <strong>Digital Arbitration</strong> notices sent via email/WhatsApp. The good news is that they are generally open to One-Time Settlements (OTS) for genuine hardship cases, especially for small-ticket unsecured loans.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="text-sm text-blue-900 font-medium">
                    <strong>Key Strategy:</strong> Since most DMI loans are unsecured (Personal/Consumer Durable), your negotiation leverage is your "Inability to Pay". We help document this formally to secure a favorable settlement.
                  </p>
                </div>
              </div>

              <h2 id="samsung-finance" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Samsung Finance+ & Knox Guard Locking</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  For loans taken to purchase Samsung devices, DMI Finance uses <strong>Knox Guard</strong> technology. If you miss an EMI, your phone is locked remotely. This is often the biggest stressor for borrowers.
                </p>
                <h4 className="font-bold text-lg mb-2">The Settlement & Unlock Process:</h4>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</span>
                      <div>
                        <strong>Settlement Agreement:</strong> We negotiate an OTS amount. The settlement letter MUST explicitly state that the device lock will be removed.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</span>
                      <div>
                        <strong>Payment & Signal:</strong> Once you pay the OTS amount, DMI updates their server.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</span>
                      <div>
                        <strong>Auto-Unlock:</strong> The clearance signal is sent to the Knox server. Your phone typically auto-unlocks within <strong>24 hours</strong> of the payment update.
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="mt-4 text-sm text-gray-500 italic">
                  *Note: Never pay cash to a collection agent promising to unlock your phone. Only pay to DMI Finance official accounts.
                </p>
              </div>

              <h2 id="google-pay-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Google Pay (GPay) & Digital Loans</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Many users take "Pre-approved Loans" on Google Pay, not realizing DMI Finance is the actual lender.
                </p>
                <h4 className="font-bold text-lg mb-2 text-gray-800">Common Issues:</h4>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>"Ghost" EMIs:</strong> You pay via GPay, but DMI’s system doesn’t update, showing it as overdue.</li>
                  <li><strong>Settlement Confusion:</strong> Users try to contact Google support, but Google has no authority to settle. You MUST deal with DMI.</li>
                </ul>
                <p className="mb-4">
                  <strong>Our Approach:</strong> We bypass the app interface and deal directly with DMI’s credit department. We ensure that once the settlement is done, DMI sends the closure data to CIBIL so it reflects correctly across all your financial apps.
                </p>
              </div>

              <h2 id="digital-arbitration" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The "Digital Arbitration" Notice</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  DMI Finance uses <strong>Section 29B (Fast Track Procedure)</strong> of the Arbitration Act. They often designate <strong>Delhi</strong> as the seat of arbitration.
                </p>
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <p className="text-sm text-red-800 mb-2 font-bold">Why This Is Dangerous:</p>
                  <ul className="list-disc pl-5 text-sm text-red-800 space-y-1">
                    <li>Notices are often sent via Email/WhatsApp (legally valid for digital loans).</li>
                    <li>If you ignore it, an "Award" is passed quickly.</li>
                    <li>They can execute this award to freeze bank accounts.</li>
                  </ul>
                </div>
                <p className="mt-4">
                  <strong>Defense:</strong> We file a legal reply challenging the venue or the "unilateral appointment" of the arbitrator, forcing them to come to the negotiating table.
                </p>
              </div>

              <h2 id="harassment-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Stopping Harassment & Escalation</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Despite being digital-first, DMI uses physical collection agents. Strategies to stop harassment include:
                </p>
                
                <h4 className="font-bold text-lg mb-4 text-gray-800">Direct Escalation Matrix (Research Verified):</h4>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-blue-800 mb-1">Level 1: Grievance Officer</h5>
                      <p className="text-sm text-gray-600 mb-1">Mr. Ashish Sarin</p>
                      <p className="text-xs font-mono text-gray-500">grievance@dmifinance.in</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-800 mb-1">Level 2: Principal Nodal Officer</h5>
                      <p className="text-sm text-gray-600 mb-1">Mr. Ashish Sarin (Head Services)</p>
                      <p className="text-xs font-mono text-gray-500">head.services@dmifinance.in</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 border-t pt-2">
                    *We use these contacts to file official complaints if agents violate RBI norms (calling post 7 PM, abusing, etc.).
                  </p>
                </div>
              </div>

              <h2 id="ots-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">DMI Finance OTS Process Steps</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>NPA Classification:</strong> Usually after 90 days. Before this, settlements are harder as they push for EMIs.
                  </li>
                  <li>
                    <strong>Proposal Submission:</strong> We submit a formal proposal explaining the "cause of default" (Job loss, medical, etc.).
                  </li>
                  <li>
                    <strong>Negotiation:</strong> DMI is data-driven. If your documented income profile supports your inability to pay, they approve faster. Target: <strong>40-60% waiver</strong>.
                  </li>
                  <li>
                    <strong>Closure:</strong> Post-payment, you receive a "No Dues Certificate" (NDC). For Samsung phones, the unlock happens first, followed by the hard copy letter.
                  </li>
                </ol>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Loan Account No:</strong> (Found in GPay app or DMI portal).</li>
                  <li><strong>KYC:</strong> PAN Card & Aadhaar.</li>
                  <li><strong>Proof of Income Loss:</strong> Bank statement (last 3 months), termination letter, or medical bills.</li>
                  <li><strong>Arbitration Notice:</strong> (If received via email).</li>
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
                <h4 className="font-bold text-xl text-gray-900 mb-2">Phone Locked?</h4>
                <p className="text-sm text-gray-600 mb-6">Get it unlocked legally through settlement. Don’t pay illegal agents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Unlock & Settle
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v Values Samsung/GPay Loans</p>
                  <p className="mt-1">v Knox Guard Release</p>
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
                    <Link href="/loan-settlement/idfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      IDFC First Bank
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
