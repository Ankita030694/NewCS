'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FederalBankLoanSettlementClient() {
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
        isActive ? 'border-amber-600 text-amber-600 font-semibold' : 'border-transparent text-gray-600 hover:text-amber-600'
      }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-amber-600 text-amber-600 font-bold bg-amber-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-amber-600 hover:pl-4'
      }`;
    }
  };

  const navLinks = [
    { id: 'introduction', label: 'Federal Bank Overview' },
    { id: 'ots-schemes', label: 'OTS Schemes 2026' },
    { id: 'msme-agriculture', label: 'MSME & Agri Loans' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'process', label: 'Settlement Process' },
    { id: 'lok-adalat', label: 'Lok Adalat option' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqList = [
    {
      question: "What is the '5% Deposit Rule' for Federal Bank OTS?",
      answer: "Unlike many other banks, Federal Bank typically requires you to deposit 5% of the proposal amount upfront to even process your OTS application. This amount is refundable if the proposal is rejected but shows your serious intent."
    },
    {
      question: "Does Federal Bank offer settlement for Agricultural Loans?",
      answer: "Yes, under schemes like 'Federal Green Plus' and Kisan Credit Card (KCC), settlements are possible, especially if there is crop failure or natural calamity. The focus is usually on waiving penal interest."
    },
    {
      question: "How much waiver can I expect on a Personal Loan?",
      answer: "For unsecured personal loans classified as 'Doubtful' (NPA > 12 months), waivers can range from 35% to 60% of the principal + interest, depending on your proven inability to pay."
    },
    {
      question: "Can I settle my Federal Bank Gold Loan?",
      answer: "Settling Gold Loans is extremely difficult because the bank holds your collateral. They will almost always auction the gold to recover dues. Settlement is only an option if the gold value has crashed below the loan amount (rare)."
    },
    {
      question: "Will a settlement remove the 'Written Off' status from CIBIL?",
      answer: "No. A settlement will mark the account as 'Settled' or 'Post Write-Off Settled'. While better than 'Willful Default', it still negatively impacts your score for 2-3 years."
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
                <Link href="/" className="inline-flex items-center hover:text-amber-600">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link href="/loan-settlement" className="hover:text-amber-600">Loan Settlement</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="font-medium text-gray-700">Federal Bank</span>
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Federal Bank Loan Settlement: A 2026 Strategic Roadmap</h2>
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  Federal Bank occupies a unique position in the Indian banking sector. As a private bank with deep roots in Kerala and a strong traditional ethos, its approach to <strong>Non-Performing Assets (NPAs)</strong> blends the rigidity of PSUs with the speed of private lenders.
                </p>
                <p className="mb-4">
                  If you are struggling with a Federal Bank Personal Loan, Credit Card deficiency, or an MSME overdraft, understanding their specific <strong>"Deposit First, Discuss Later"</strong> policy is critical. Unlike HDFC or ICICI, where negotiations often start verbally, Federal Bank demands a formal, financial commitment (usually 5%) just to open the file for settlement review.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="text-sm text-yellow-900 font-medium">
                    <strong>The Federal Bank Difference:</strong> They are one of the few banks that actively refund the initial 5% token deposit if your OTS proposal is rejected within 3 months. This transparency makes them a credible entity to negotiate with, provided you have the right strategy.
                  </p>
                </div>
              </div>

              <h2 id="ots-schemes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Federal Bank 'Compromise Policy 2025-26'</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Unlike public sector banks that rely on national schemes like Lok Adalat "Rin Mukti" drives, Federal Bank operates under its internal <strong>"Compromise Policy 2025-26"</strong>. This policy empowers the Managing Director & CEO to authorize settlement windows for specific sectors.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
                  <h4 className="flex items-center text-blue-900 font-bold text-lg mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    New Regulation Alert: Jan 1, 2026
                  </h4>
                  <p className="text-blue-800 text-sm">
                   <strong>Effective Jan 1, 2026:</strong> Under new RBI directives, Federal Bank <strong>cannot levy foreclosure/prepayment charges</strong> on floating-rate term loans sanctioned to individuals for non-business purposes. If your settlement officer adds "foreclosure penalties" to your dues for a home or education loan, we can legally dispute it immediately.
                  </p>
                </div>

                <h4 className="font-bold text-lg mb-2">The Standard OTS Framework:</h4>
                <ul className="list-disc pl-6 space-y-4 mb-6">
                  <li>
                    <strong>Eligibility:</strong> Accounts classified as NPA for at least <strong>6 months</strong>. Pre-NPA (SMA-1/2) accounts are generally steered towards restructuring, not settlement.
                  </li>
                  <li>
                    <strong>Legal Status:</strong> You ARE eligible for OTS even if the bank has initiated SARFAESI (Section 13(2) Notice) or filed a case in DRT, <em>provided</em> no court decree has been passed yet. Once a court orders you to pay, the bank's flexibility drops to zero.
                  </li>
                  <li>
                    <strong>Payment Structure:</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-2 text-gray-600">
                      <li><strong>5%</strong> with Proposal (Refundable).</li>
                      <li><strong>20-25%</strong> Upfront upon sanction (Non-refundable).</li>
                      <li><strong>70-75%</strong> Balance within 3-6 months (Interest-free).</li>
                    </ul>
                  </li>
                </ul>

                <h4 className="font-bold text-lg mb-4 mt-8">Hidden Charges: What to Watch For</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-600 border border-gray-200 rounded-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 border-b">Loan Type</th>
                        <th className="px-6 py-3 border-b">Foreclosure Charge (2025 Policy)</th>
                        <th className="px-6 py-3 border-b">Settlement Strategy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Personal Loans</td>
                        <td className="px-6 py-4">3% of Outstanding + 18% GST</td>
                        <td className="px-6 py-4">Request 100% waiver in OTS proposal.</td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Floating Rate Home Loans</td>
                        <td className="px-6 py-4"><strong>NIL</strong> (For Individuals)</td>
                        <td className="px-6 py-4">Zero charges legally applicable.</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Business / Fixed Rate Loans</td>
                        <td className="px-6 py-4">Up to 3% - 5%</td>
                        <td className="px-6 py-4">Negotiable based on "Cash Flow Crunch" proof.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 id="msme-agriculture" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">MSME & Agricultural Loan Settlements</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Federal Bank has a massive portfolio lending to small businesses and farmers. Their policies here are softer.
                </p>

                <h4 className="font-bold text-lg mb-2 text-gray-800">1. MSME (Micro & Small Enterprises)</h4>
                <p className="mb-4">
                  Under the MSMED Act 2006, the bank has a mandate to rehabilitate sick units. If your business has failed, we can apply for a "Non-Discretionary" OTS based on a formula (usually Outstanding Principal + Minimal Simple Interest).
                  <br/>
                  <em>Pro Tip:</em> While they are aiming for 18-19% growth in MSME books in 2025, they are equally keen to clean up "legacy" bad loans to keep their NPA ratios healthy for investors.
                </p>

                <h4 className="font-bold text-lg mb-2 text-gray-800">2. Agricultural Loans (KCC / Green Plus)</h4>
                <p className="mb-4">
                  For 'Federal Kisan Suvidha' or 'Green Plus' loans:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Natural Calamity Clause:</strong> If your region was hit by floods (common in their home state Kerala) or drought, we can cite local SLBC (State Level Bankers Committee) directives to demand interest waivers.</li>
                  <li><strong>Land Auction:</strong> Federal Bank is historically hesitant to auction agricultural land due to social backlash. They prefer OTS over physical possession.</li>
                </ul>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents for Proposal</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  To trigger the "5% Deposit Rule" and start your file, you need:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span><strong>Formal OTS Application:</strong> On your letterhead (for business) or plain paper (individual), clearly stating the cause of default.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span><strong>Statement of Means:</strong> A legally binding declaration of your current assets (liquid and immovable).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span><strong>Cheque for 5%:</strong> A cheque/DD for 5% of your <em>proposed</em> offer amount (not the total due).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span><strong>Closure of Business Proof:</strong> GST cancellation certificate or shop establishment surrender (for business loans).</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The CredSettle Navigation Process</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  We don't just "talk" to the manager. We engineer the file to fit their approval matrix.
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Sanity Check of Dues:</strong> We first audit your statement. Federal Bank systems sometimes auto-debit "inspection charges" or "legal charges" that are excessive. We dispute these to bring down the baseline figure.
                  </li>
                  <li>
                    <strong>The 5% Strategy:</strong> We help you calculate the optimal proposal amount so that your 5% deposit is substantial enough to be taken seriously, but not so high that you lose leverage.
                  </li>
                  <li>
                    <strong>Escalation to Zonal Office:</strong> Branch managers at Federal Bank have very limited powers. We ensure your proposal moves quickly to the Zonal Credit Committee, where the real decisions happen.
                  </li>
                  <li>
                    <strong>The 'No Dues' wording:</strong> We scrutinize the final settlement letter to ensure it does not contain "Right to Recompense" clauses that allow them to claim the waived amount if you become wealthy later.
                  </li>
                </ol>
              </div>

              <h2 id="lok-adalat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Lok Adalat: The Fast Track Option</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  For loans under ₹20 Lakhs, Federal Bank is a major participant in <strong>National Lok Adalats</strong>.
                </p>
                <p className="mb-4">
                  <strong>Why choose this?</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Refund of Court Fees:</strong> If they have already filed a case against you, settling in Lok Adalat forces the court to refund their hefty court fees. We use this as a bargaining chip—"Settle with us now, and you get your court fees back."</li>
                  <li><strong>Finality:</strong> A Lok Adalat award is final. They cannot reopen the case.</li>
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
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 text-center transform transition hover:-translate-y-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Federal Bank Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Don't lose your 5% deposit. Get expert advice first.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-amber-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-amber-700 transition-colors shadow-md"
                >
                  Book Consultation
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ 30-min Strategy Call</p>
                  <p className="mt-1">✓ OTS Math Check</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Banks</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-amber-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      HDFC Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/icici" className="text-gray-600 hover:text-amber-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      ICICI Bank
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
