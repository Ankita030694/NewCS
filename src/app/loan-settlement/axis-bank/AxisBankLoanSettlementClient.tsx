'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AxisBankLoanSettlementClient() {
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
    { id: 'default-timeline', label: 'Default Timeline 2025' },
    { id: 'ots-policy', label: 'OTS Policy Guidelines' },
    { id: 'credit-card-specifics', label: 'Credit Card Settlement' },
    { id: 'arbitration', label: 'Arbitration & Legal' },
    { id: 'negotiation-strategy', label: 'Negotiation Strategy' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'cibil-impact', label: 'CIBIL Score Impact' },
    { id: 'faqs', label: 'Comprehensive FAQs' },
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
      question: "What is the new late payment finance charge for Axis Bank Credit Cards in 2025?",
      answer: "Effective from late December 2024, Axis Bank has revised its finance charges (interest on unpaid dues) to 3.75% per month (approx. 52-53% per annum) for most retail cards. This revision makes it even more dangerous to carry forward limits, as the debt compounds faster than before."
    },
    {
      question: "Does Axis Bank agree to settle for 30% of the outstanding amount?",
      answer: "A 30% settlement is possible but rare. It typically happens in cases where the debt is extremely old (classified as a 'Loss Asset'), or the borrower has absolutely zero recoverable assets and income (e.g., severe medical disability). For recent defaults (NPA < 1 year), settlements usually close between 45% to 60% of the principal + interest."
    },
    {
      question: "I received a notice for 'Arbitration Proceedings' from Axis Bank. What should I do?",
      answer: "Do not ignore it. Axis Bank often invokes the arbitration clause in their loan agreement. An arbitrator is appointed to pass an award (judgment). If you ignore it, an 'ex-parte' award may be passed against you, which acts like a court decree. You must attend the proceedings (or hire CredSettle to represent you) to contest the claim and push for a settlement during the arbitration itself."
    },
    {
      question: "Can I settle my Axis Bank Jumbo Loan or Insta Personal Loan?",
      answer: "Yes. Jumbo Loans (loans against credit card limit) and Insta Personal Loans are unsecured products. They follow the same settlement protocol as standard personal loans. Since they are often pre-approved without collateral, the bank has limited recovery options other than negotiation or civil suit."
    },
    {
      question: "Will Axis Bank seize my salary account if I default on my personal loan?",
      answer: "If your salary account is with Axis Bank, they have a 'General Lien' and 'Right to Set Off'. This empowers them to debit your salary to pay off your loan dues without asking you each time. We strongly advise clients to move their salary credit to a different bank immediately upon anticipating default."
    },
    {
      question: "Does Axis Bank offer an EMI option for the settlement amount?",
      answer: "Typically, the 'One Time Settlement' (OTS) implies a single bullet payment. However, if the settlement amount is large (e.g., above ₹2 Lakhs), we can negotiate a split payment structure, usually 2-3 installments over a period of 60-90 days. The settlement letter remains conditional until the last installment is paid."
    },
    {
      question: "What is the difference between writing off a loan and settling it?",
      answer: "'Write-off' is an accounting term used by the bank when they remove the loan from their assets because they don't expect to recover it. 'Settlement' is the legal agreement between you and the bank to pay a reduced amount. A loan is usually written off technically before or during the settlement process."
    },
    {
      question: "Can settlement affect my employment opportunities?",
      answer: "Generally, no. Most private employers do not check CIBIL reports. However, if you are applying for jobs in the BFSI sector (Banking, Financial Services, Insurance) or regulatory bodies (RBI, SEBI), a poor credit score or 'Settled' remarks can be a ground for rejection."
    },
    {
      question: "How long will the 'Settled' status remain on my CIBIL/Experian report?",
      answer: "The 'Settled' status remains on your credit report for minimum 7 years in the 'Account Status' section. It serves as a historical record. However, its negative impact on your score diminishes over time as you build new, positive credit history."
    },
    {
      question: "Can I get a secured loan (Home/Car Loan) after settling an Axis Bank loan?",
      answer: "Yes, but it's difficult immediately. Secured loans are easier to get than unsecured ones because there is collateral. If you have a stable income and a large down payment (margin money), some NBFCs or Housing Finance Companies (HFCs) may fund you even with a settled history, usually at a higher interest rate."
    },
    {
      question: "Is it better to take a gold loan to pay off the Axis Bank debt?",
      answer: "Mathematically, yes. A gold loan typically carries 9-12% interest, whereas your defaulted credit card debt grows at 52%+ annually. Paying off the full debt with a gold loan preserves your credit score. However, if you cannot afford even the gold loan interest, settlement is the only path to debt freedom."
    },
    {
      question: "What is a 'No Dues Certificate' (NDC) and why is it critical?",
      answer: "The NDC or 'No Objection Certificate' (NOC) is the final proof that your relationship with the bank regarding that specific loan is terminated. Without an NDC, the bank could technically claim the remaining amount years later. Always insist on receiving the physical or digital NDC after settlement."
    },
    {
      question: "Can I use the Banking Ombudsman to settle my loan?",
      answer: "The Banking Ombudsman handles complaints regarding service deficiency (e.g., wrong billing, harassment). They do not dictate commercial decisions like settlement amounts. However, if the bank is harassing you or refusing to follow RBI fair practice codes during recovery, filing a complaint with the Ombudsman puts pressure on the bank to resolve the matter amicably."
    },
    {
      question: "How does the 'Lok Adalat' settlement work for Axis Bank loans?",
      answer: "Axis Bank frequently participates in National Lok Adalats to clear pending recovery cases. A settlement reached here is fast, free of court fees, and final (no appeal allowed). CredSettle can represent you at the Lok Adalat to negotiate the best possible closure."
    },
    {
      question: "Why should I choose CredSettle over doing it myself?",
      answer: "Emotional detachment and legal leverage. When you negotiate, you are stressed and emotional. When we negotiate, it's strictly business based on data and consumer laws. We know the bank's bottom line (the minimum they can accept), ensuring you don't overpay."
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
                    loan settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Axis Bank
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-12">
        
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Axis Bank Loan Settlement: The Definitive 2026 Guide</h2>
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  Axis Bank, currently India’s third-largest private sector bank, has become a dominant player in the retail lending space. Known for its aggressive issuance of credit cards (such as the Flipkart Axis Bank Credit Card, Magnus, and Neo) and instant personal loans, the bank serves millions of customers. However, with massive lending comes the inevitable cycle of defaults. As of fiscal year 2025, the retail Non-Performing Asset (NPA) levels across the Indian banking sector have seen stress, and Axis Bank is no exception.
                </p>
                <p className="mb-4">
                  For a borrower, falling into the "default trap" with a large institution like Axis Bank can be intimidating. The automated collection ecosystem—comprising SMS alerts, AI-driven calls, and third-party recovery agencies—is designed to apply maximum psychological pressure.
                </p>
                <p className="mb-4">
                  However, what most borrowers do not realize is that <strong>loan settlement is a standard, codified procedure within the banking system</strong>. Axis Bank, like all major lenders, adheres to specific policies for "One Time Settlement" (OTS) to clean up its balance sheet. This guide delves deep into the mechanisms of settling your dues with Axis Bank, backed by legal insights, policy realities, and strategic advice for 2026.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="text-sm text-blue-900 font-medium">
                    <strong>Critical Update (Dec 2024):</strong> Axis Bank has revised its credit card finance charges to 3.75% per month (approx 52% annually) for unpaid dues. This makes the "minimum due" trap even deadlier. Settlement is often the only mathematical escape route if you cannot clear the total outstanding immediately.
                  </p>
                </div>
              </div>

              <h2 id="default-timeline" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding the Default Timeline (SMA Classification)</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  To negotiate effectively, you must know where your account stands in the bank's books. Axis Bank follows the RBI's "Prudential Norms on Income Recognition, Asset Classification and Provisioning."
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-500 mb-6">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th className="px-6 py-3">Category</th>
                        <th className="px-6 py-3">Days Past Due (DPD)</th>
                        <th className="px-6 py-3">Bank's Action</th>
                        <th className="px-6 py-3">Settlement Probability</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium text-gray-900">Standard</td>
                        <td className="px-6 py-4">0 Days</td>
                        <td className="px-6 py-4">Normal billing</td>
                        <td className="px-6 py-4 text-red-600">0% (Unless pre-closure)</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="px-6 py-4 font-medium text-gray-900">SMA-0</td>
                        <td className="px-6 py-4">1 - 30 Days</td>
                        <td className="px-6 py-4">Reminder calls & SMS</td>
                        <td className="px-6 py-4 text-red-600">Very Low</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium text-gray-900">SMA-1</td>
                        <td className="px-6 py-4">31 - 60 Days</td>
                        <td className="px-6 py-4">Aggressive calls, home visits</td>
                        <td className="px-6 py-4 text-yellow-600">Low (&lt; 10%)</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="px-6 py-4 font-medium text-gray-900">SMA-2</td>
                        <td className="px-6 py-4">61 - 90 Days</td>
                        <td className="px-6 py-4">Legal notices, 3rd party agents</td>
                        <td className="px-6 py-4 text-orange-600">Medium (20-30%)</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-bold text-red-700">NPA</td>
                        <td className="px-6 py-4">91+ Days</td>
                        <td className="px-6 py-4">SARFAESI (Secured), Arbitration, Civil Suit</td>
                        <td className="px-6 py-4 text-green-600 font-bold">High (80%+)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>The Sweet Spot:</strong> The best time to initiate settlement is usually just after the account requires NPA classification (90-120 days). At this stage, the bank has to set aside capital (provisioning) for your bad loan, hurting their profitability. They are motivated to "clean the books" by accepting an OTS.
                </p>
              </div>

              <h2 id="ots-policy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Axis Bank OTS Policy Guidelines (2025)</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The One Time Settlement (OTS) scheme is not a right; it is a negotiated agreement. For 2025, Axis Bank's approach generally aligns with the following parameters:
                </p>
                <ul className="list-disc pl-6 space-y-4 mb-6">
                  <li>
                    <strong>Minimum Benchmark:</strong> For unsecured loans, the bank typically sets an internal benchmark of recovering the <strong>Principal Outstanding</strong>. Waiving the principal is mandated only in extreme "hardship" cases (e.g., terminal illness, death of borrower, natural disaster affecting business).
                  </li>
                  <li>
                    <strong>Waiver Hierarchy:</strong> 
                    <br />1. First, they waive the Penal Interest and Late Fees (100% waiver possible).
                    <br />2. Next, they negotiate on the Accumulated Interest.
                    <br />3. Finally, they may take a "haircut" on the Principal Amount (rare, but possible for old NPAs).
                  </li>
                  <li>
                    <strong>MSME Non-Discretionary Policy:</strong> If you are a small business owner (MSME) with a loan up to ₹10 Crores, Axis Bank follows a simpler, non-discretionary OTS policy as per RBI circulars. The terms here are more standardized and less dependent on the whim of the recovery officer.
                  </li>
                  <li>
                    <strong>Settlement Validity:</strong> An OTS offer is typically valid for 30 days. If payment is not made, the agreement is void, and the previous dues structure (with full interest) is reinstated.
                  </li>
                </ul>
              </div>

              <h2 id="credit-card-specifics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Settling Axis Bank Credit Cards</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Settling a credit card is distinct from settling a personal loan because of the "Revolving Credit" nature and the exorbitant interest rates.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-blue-800 mb-2">The Limit Challenge</h4>
                    <p className="text-sm">Premium cards like <em>Magnus</em>, <em>Select</em>, or <em>Vistara Infinite</em> often come with limits of ₹5 Lakhs+. When you default, the "Total Due" can quickly balloon to ₹8-9 Lakhs due to the 52% annual interest. Negotiating a 50% settlement on ₹9 Lakhs still means paying ₹4.5 Lakhs.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-blue-800 mb-2">The "Jumbo Loan" Trap</h4>
                    <p className="text-sm">Many users convert card limits to "Jumbo Loans". These are treated as separate loan accounts. You might settle the card, but the Jumbo Loan remains active. <strong>Ensure your settlement letter explicitly mentions all linked loan account numbers (LAA/LAN).</strong></p>
                  </div>
                </div>
                <p className="mb-4">
                  <strong>Strategy for Card Settlement:</strong> Focus on the "Principal Utilized" not the "Total Outstanding". If you spent ₹2 Lakhs, but the bill is now ₹3.5 Lakhs, your negotiation anchor should be ₹2 Lakhs, not ₹3.5 Lakhs.
                </p>
              </div>

              <h2 id="arbitration" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Arbitration and Legal Action</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  This is the most misunderstood part of debt collection. Axis Bank loan agreements invariably contain an <strong>Arbitration Clause</strong>.
                </p>
                <h4 className="font-bold text-lg mb-2">The Process:</h4>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li><strong>Notice:</strong> You receive a legal notice stating that an Arbitrator has been appointed.</li>
                  <li><strong>Hearing:</strong> An online or physical hearing is scheduled.</li>
                  <li><strong>Award:</strong> The arbitrator passes an "Award" (judgment), usually directing you to pay the full amount with interest.</li>
                  <li><strong>Execution:</strong> The bank can then take this award to a Civil Court for "Execution," which can theoretically lead to salary attachment or asset seizure.</li>
                </ol>
                <p className="mb-4">
                  <strong>The Reality Check:</strong> While this sounds scary, Arbitration is often a bulk-process tool used to formalize the debt. It does not mean police will come to your house tomorrow.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-yellow-800 font-medium">
                    <strong>CredSettle Strategy:</strong> We challenge the arbitration proceedings if due process (like proper venue/notice) is not followed. More importantly, we use the arbitration stage as a platform to force a settlement. Arbitrators often encourage amicable settlement (Section 89 of CPC) to close the case.
                  </p>
                </div>
              </div>

              <h2 id="negotiation-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Strategic Negotiation: The CredSettle Edge</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Banks are financial institutions, not moral judges. They care about IRR (Internal Rate of Return). Our negotiation is based on proving that <em>Settlement &gt; Legal Cost + Recovery Uncertainty</em>.
                </p>
                <h4 className="font-bold text-lg mb-4 text-blue-900">Our 4-Phase Protocol:</h4>
                <div className="space-y-4">
                  <div className="border border-blue-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-blue-700">Phase 1: The "Hold" (Days 1-30 of Engagement)</h5>
                    <p className="text-sm text-gray-600">We send a legal representation letter to the bank. We demand account statements, loan agreements, and proof of claim. This signals to the bank that this is not a naive borrower; it's a legally represented case. Harassment typically drops by 80% here.</p>
                  </div>
                  <div className="border border-blue-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-blue-700">Phase 2: The "Anchor" (First Offer)</h5>
                    <p className="text-sm text-gray-600">The bank will offer a "waiver" that is still too high (e.g., 80% of total). We reject it. We present your "Hardship Dossier"—medical reports, termination letters, bank statements showing low balance—to anchor the negotiation at your affordability (e.g., 25-30% of total).</p>
                  </div>
                  <div className="border border-blue-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-blue-700">Phase 3: The "Squeeze" (Deep Negotiation)</h5>
                    <p className="text-sm text-gray-600">This is the waiting game. As month-end or quarter-end approaches, pressure mounts on the bank officer to close cases. We leverage this timing. We might increase our offer slightly (e.g., to 35-40%) to close the deal.</p>
                  </div>
                  <div className="border border-blue-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-blue-700">Phase 4: The "Close" (Settlement Letter)</h5>
                    <p className="text-sm text-gray-600">We audit the draft settlement letter. It MUST include: Exact amount, Waiver amount, Date of payment, Account Number, and the clause "Full and Final Settlement". Only then do you pay.</p>
                  </div>
                </div>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Documents Required for Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  To get the best deal, you need to prove you <em>cannot</em> pay, not just that you <em>don't want</em> to pay.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-gray-900 border-b pb-2 mb-3">Salaried Individuals</h5>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                      <li>Termination Letter / Resignation Acceptance.</li>
                      <li>Salary Slips (showing reduced pay).</li>
                      <li>Bank Statement (last 3-6 months showing lack of funds).</li>
                      <li>Medical Reports (if health is the cause).</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 border-b pb-2 mb-3">Self-Employed / Business</h5>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                      <li>GST Returns (showing drop in turnover).</li>
                      <li>Shut Down notice (if business closed).</li>
                      <li>Balance Sheet (with losses).</li>
                      <li>ITR of previous 2 years.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">CIBIL Score & Life After Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  This is the biggest worry for most clients. Let's be transparent: <strong>Settlement damages your credit score.</strong>
                </p>
                <div className="bg-gray-100 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">The Impact Matrix</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">📉</span> <strong>Score Drop:</strong> Expect a drop of 50-100 points immediately post-settlement.</li>
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">🚩</span> <strong>The Tag:</strong> Your CIBIL report Status will change from 'Active' to 'Settled' or 'Post-Writeoff Settled'.</li>
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">⏳</span> <strong>Duration:</strong> This remark stays visible for 7 years according to Credit Information Companies (CIC) Act.</li>
                  </ul>
                </div>
                <h4 className="font-bold text-lg mb-2">Can I rebuild my score?</h4>
                <p className="mb-4">
                  <strong>Yes.</strong> The 'Settled' tag is not a life sentence.
                </p>
                <ol className="list-decimal pl-6 space-y-2 mb-6 text-sm md:text-base">
                  <li><strong>The Secured Card Route:</strong> Get a secured credit card (FD backed) from a different bank (e.g., IDFC First WOW or Kotak 811). Use it for small amounts and pay 100% on time. This creates fresh "Standard" payment history.</li>
                  <li><strong>Gold Loans:</strong> Taking and repaying a small gold loan also boosts your score.</li>
                  <li><strong>Time Heals:</strong> The impact of the settlement remark reduces every year. In 24-36 months, with good behavior on new credit lines, you can reach a score of 750+ again.</li>
                </ol>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions (Detailed)</h2>
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
                <h4 className="font-bold text-xl text-gray-900 mb-2">Axis Bank Issues?</h4>
                <p className="text-sm text-gray-600 mb-6">Stop the calls. Start the solution. Get legal help now.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Consult Now
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ 100% Confidential</p>
                  <p className="mt-1">✓ RBI Complaint</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Other Banks</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      HDFC Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/icici" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      ICICI Bank
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/yes-bank" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Yes Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/kotak" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      Kotak Bank
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
