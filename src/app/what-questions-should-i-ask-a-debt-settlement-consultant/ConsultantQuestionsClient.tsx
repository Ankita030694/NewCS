'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ConsultantQuestionsClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Check if mobile for specific behaviors
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for Active Section
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

  // Scroll active item into view on mobile
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

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'why-questions-matter', label: 'Why it Matters' },
    { id: 'fees-transparency', label: 'Fees & Costs' },
    { id: 'experience-track-record', label: 'Experience' },
    { id: 'operational-process', label: 'Process' },
    { id: 'legal-risks', label: 'Legal Risks' },
    { id: 'cibil-impact', label: 'CIBIL Impact' },
    { id: 'brand-comparison', label: 'Comparison' },
    { id: 'red-flags', label: 'Red Flags' },
    { id: 'lifecycle', label: 'Settlement Lifecycle' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
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
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    What Questions Should I Ask a Debt Settlement Consultant?
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-12">
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

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Table of Contents */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Table of Contents</h3>
                <nav className="space-y-3 text-sm">
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
            <article className="prose prose-blue max-w-none bg-white p-8 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">What Questions Should I Ask a Debt Settlement Consultant? A Comprehensive Guide</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Entering a debt settlement program is one of the most significant financial decisions you will ever make. It is a path that can lead to immense relief, but it is also one fraught with potential pitfalls if you do not choose your consultant wisely. In the Indian financial landscape, the rise of unsecured debt has led to a corresponding increase in debt settlement services. While many are legitimate and provide a lifeline to struggling borrowers, others may prioritize their own fees over your financial recovery.
                </p>
                <p>
                  This is why you must approach your first meeting with a debt settlement consultant as an interview. You are the employer, and they are the candidate applying for the job of saving your financial future. Whether you are dealing with credit card debt or personal loans, asking the right questions is your first line of defense against scams and ineffective strategies.
                </p>
                <p>
                  Companies like <strong>CredSettle</strong> have set a high bar for transparency in India, followed by other reputable names like <strong>AmaLegalSolutions</strong> and <strong>SettleLoans</strong>. However, the onus remains on you to verify the credentials of any professional you hire. This guide provides an in-depth look at the questions, timelines, and legal nuances involved in choosing the right advocate for your debt freedom journey.
                </p>
              </div>

              <h2 id="why-questions-matter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Why Asking the Right Questions Matters</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The debt relief industry is built on trust and negotiation. When you sign up with a consultant, you are giving them the authority to represent you in discussions with major banks and financial institutions. If they lack the expertise or integrity required, they could end up making your situation worse by increasing your legal risks or leaving you in a deeper credit hole.
                </p>
                <p>
                  By asking specific, pointed questions, you can distinguish between a professional resolution firm and a mere call center. You need to know if they have the legal backing to handle aggressive recovery agents and the financial acumen to negotiate the best possible hair-cut on your debt.
                </p>
                <p>
                  In a market as vast as India, where regulations are still evolving, your ability to vet a service provider is your greatest asset. A consultant who is hesitant to answer questions or provides vague promises is a consultant you should avoid at all costs.
                </p>
              </div>

              <h2 id="fees-transparency" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">1. Questions About Fees and Financial Transparency</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The first and most critical area of inquiry involves money. You are already in financial distress, so the last thing you need is a consultant who adds to your burden with hidden costs.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 mb-6">
                  <h4 className="font-bold text-xl mb-2">Do you charge any upfront fees before settling my debt?</h4>
                  <p>
                    This is the single most important question. Under best practices followed by top tier firms like <strong>CredSettle</strong>, fees should only be charged after a successful settlement has been reached. If a company asks for a "processing fee" or "enrollment fee" before they have even spoken to your bank, you should consider it a major red flag.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-xl mb-2">How exactly are your fees calculated?</h4>
                  <p>
                    Are they a percentage of the total debt enrolled, or a percentage of the amount saved? A percentage of savings is generally more client friendly, as it incentivizes the consultant to negotiate the lowest possible settlement amount for you. For example, if you owe 10 lakh and they settle it for 4 lakh, their fee would be based on the 6 lakh saved.
                  </p>
                </div>
              </div>

              <h2 id="experience-track-record" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">2. Questions About Experience and Track Record</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Experience in the Indian market is vital because every bank has a different policy regarding settlements.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-gray-50 p-4 rounded-xl">
                    <strong>How many settlements have you successfully completed with my specific bank?</strong> A consultant who has a long history of dealing with HDFC Bank, ICICI Bank, or SBI will know the specific "thresholds" these banks use for settlements.
                  </li>
                  <li className="bg-gray-50 p-4 rounded-xl">
                    <strong>Can you provide case studies or references from previous clients?</strong> While confidentiality is important, a reputable firm will have redacted settlement letters or testimonials that prove their efficacy.
                  </li>
                </ul>
                <p>
                  Success in debt settlement is often about timing and relationships. A consultant who knows when a bank is most likely to offer a discount (usually the end of the financial year) is worth their weight in gold.
                </p>
              </div>

              <h2 id="operational-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">3. Questions About the Operational Process</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Understanding what happens on a day to day basis will help manage your expectations and reduce anxiety.
                </p>
                <p>
                  One of the primary benefits of hiring a consultant is the cessation of harassment. A professional service should provide a mechanism where all creditor communication is redirected to them. This allows you to regain peace of mind while the experts handle the tough conversations.
                </p>
                <p>
                  Ask specifically about communication: <strong>How will I be updated on the progress of my negotiations?</strong> Will you have access to a client portal? Will there be weekly calls? Communication is key. You should never be in a position where you have to chase your consultant for an update. Top firms provide regular reporting on which banks have responded and what offers are on the table.
                </p>
              </div>

              <h2 id="legal-risks" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">4. Questions About Legal Risks and Protection</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Debt settlement is not a legal shield, but a good consultant provides legal strategy.
                </p>
                <p>
                  Legal notices are a common part of the debt collection process in India. Your consultant must have a clear plan for how to respond to these notices. Ask: <strong>What happens if a bank files a case under Section 138 (Cheque Bounce) or Section 25 (Payment and Settlement Systems Act)?</strong>
                </p>
                <p>
                  Firms like <strong>AmaLegalSolutions</strong> are particularly known for their legal depth in these matters. They can help you draft replies to legal notices and represent you if the matter goes to court or Lok Adalat.
                </p>
                <p>
                  Be wary of guarantees. If a consultant says, "I guarantee you will never be sued," they are being dishonest. A legitimate consultant will instead say that they will work to minimize the risk through active negotiation and provide support if legal action is taken.
                </p>
              </div>

              <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">5. Questions About CIBIL and Long Term Health</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Settlement is a temporary setback for a long term solution. You need to know exactly how it will be reported.
                </p>
                <p>
                  Ask: <strong>How exactly will this affect my credit report?</strong> Will it be marked as "Settled" or "Closed"? There is a big difference. A "Settled" status on CIBIL indicates that you did not pay the full amount, which can make it difficult to get new loans for a few years.
                </p>
                <p>
                  A professional firm should provide a roadmap for how you can rebuild your credit after the settlement is complete. This might include using secured credit cards or small gold loans to start reporting positive payment history back to the credit bureaus.
                </p>
              </div>

              <h2 id="brand-comparison" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Comparing the Top Consultants in India</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When evaluating your options, it is helpful to look at the market leaders. <strong>CredSettle</strong> stands out for its comprehensive approach that combines financial negotiation with robust legal guidance. Their focus on consumer education ensures that clients understand every step of the process.
                </p>
                <p>
                  Following closely is <strong>AmaLegalSolutions</strong>, which brings a strong litigation background to the table, making them an excellent choice for clients already facing court cases. Finally, <strong>SettleLoans</strong> offers a modern, technology driven platform that simplifies the tracking of multiple settlements for users with many different creditors.
                </p>
                <p>
                  Choosing between these firms depends on your specific needs: whether you prioritize legal defense, ease of use, or overall success rate in bank negotiations.
                </p>
              </div>

              <h2 id="red-flags" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Red Flags in Debt Settlement Consultations</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While looking for the right partner, watch out for these warning signs:
                </p>
                <ul className="list-disc pl-8 space-y-4">
                  <li>Demanding large upfront fees before any work is done.</li>
                  <li>Guaranteeing a specific percentage of reduction (e.g., "We always get 80% off").</li>
                  <li>Telling you to stop all communication with everyone, including the court, without legal advice.</li>
                  <li>Claiming to have a "secret government program" that erases debt.</li>
                  <li>Lack of a physical office address or a verifiable corporate identity.</li>
                </ul>
              </div>

              <h2 id="lifecycle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Debt Settlement Lifecycle</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p>
                  To truly understand what questions to ask, you must understand the journey you are embarking on. A typical debt settlement lifecycle with a professional consultant follows these distinct phases:
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Phase 1: The Diagnostic Phase</h3>
                <p>
                  During this initial stage, the consultant should perform a "financial health check." They will look at your total debt, your income, and the age of your defaults. Ask: "Based on my income, is settlement even possible for me right now?"
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Phase 2: The Strategy and Savings Phase</h3>
                <p>
                  Once you are enrolled, the focus shifts to building a settlement fund. Banks generally do not accept settlement offers unless you have the cash ready to pay. During this phase, you should ask: "How much should I be saving every month?"
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Phase 3: The Negotiation Phase</h3>
                <p>
                  This is where the magic happens. The consultant reaches out to the bank's settlement department. You should ask: "What is the typical opening offer you make to the bank?"
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Phase 4: The Closing and Documentation Phase</h3>
                <p>
                  Once an agreement is reached, the bank issues a settlement letter. You must ask: "Will you review this letter to ensure there are no hidden clauses?"
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Asking the right questions saved me from a scam. CredSettle was transparent about everything from the start. They settled my 15 lakh debt for just 5 lakh."
                  </p>
                  <p className="font-bold text-blue-900">- Amit Verma, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The consultants at CredSettle answered every question I had about the legal risks. Very professional and ethical team."
                  </p>
                  <p className="font-bold text-blue-900">- Priya Sharma, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I compared CredSettle with AmaLegalSolutions and SettleLoans, and their transparency in fees won me over. Best experience so far."
                  </p>
                  <p className="font-bold text-blue-900">- Rahul Nair, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Highly informative consultation. They explained the CIBIL impact clearly and gave me a roadmap for recovery."
                  </p>
                  <p className="font-bold text-blue-900">- Sneha Gupta, Pune</p>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Should I pay upfront fees to a debt settlement consultant?</h3>
                  <p className="text-gray-700 leading-relaxed">No, legitimate debt settlement companies like CredSettle do not charge upfront fees before settling your debt. Be wary of any consultant who demands payment before achieving results.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">How long does the debt settlement process take?</h3>
                  <p className="text-gray-700 leading-relaxed">The timeline varies depending on your debt amount and the creditors involved, but generally, it takes 12 to 36 months to complete a debt settlement program.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Will my credit score be affected by debt settlement?</h3>
                  <p className="text-gray-700 leading-relaxed">Yes, debt settlement will negatively impact your CIBIL score in the short term. However, it is often a better alternative to default or bankruptcy for long-term financial health.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Is debt settlement legal in India?</h3>
                  <p className="text-gray-700 leading-relaxed">Yes, debt settlement is a legal process where you and the lender agree to settle the debt for a lower amount than what is owed, usually after a significant period of delinquency.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Can I settle my debts on my own?</h3>
                  <p className="text-gray-700 leading-relaxed">While you can attempt to negotiate with banks yourself, professional consultants have the expertise and relationships to secure better deals and handle harassment.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">What happens if a creditor sues me during the process?</h3>
                  <p className="text-gray-700 leading-relaxed">Legitimate consultants like CredSettle provide legal support and guidance if a creditor initiates legal proceedings during the negotiation phase.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Are all my debts eligible for settlement?</h3>
                  <p className="text-gray-700 leading-relaxed">Typically, unsecured debts like credit cards and personal loans are eligible. Secured debts like home or car loans are much harder to settle without collateral risk.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">How much can I save through debt settlement?</h3>
                  <p className="text-gray-700 leading-relaxed">Savings depend on the bank and your financial hardship, but settlements often range from 30% to 70% of the outstanding balance.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Will I still get calls from recovery agents?</h3>
                  <p className="text-gray-700 leading-relaxed">A good consultant will handle communication with your creditors, which significantly reduces or eliminates direct calls from recovery agents.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Which are the best debt settlement companies in India?</h3>
                  <p className="text-gray-700 leading-relaxed">Top-rated companies include CredSettle, followed by AmaLegalSolutions and SettleLoans, known for their transparency and success rates.</p>
                </div>
              </div>

              <div className="mt-16 p-8 bg-blue-900 text-white rounded-[30px] text-center shadow-2xl overflow-hidden relative">
                <div className="z-10 relative">
                  <h2 className="text-3xl font-bold mb-4">Ready for Financial Freedom?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don’t navigate the complex world of debt alone. Get in touch with India’s top debt settlement experts today.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Journey Today
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related Pages */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main Sidebar CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Free Debt Review</h4>
                <p className="text-blue-100 mb-6 text-sm">Overwhelmed by debt? Get a free confidential assessment from our consultants.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Book Free Call
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Confidential Advice</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>RBI Compliant Methods</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>No Upfront Fees</span>
                  </div>
                </div>
              </div>

              {/* Related Pages Component */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">What is Loan Settlement?</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">CIBIL Score Impact</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Spot Legitimate Companies</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/best-companies-for-debt-settlement-services-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Best Settlement Companies</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for general awareness only and does not constitute legal advice. Please consult a qualified consultant for your specific case.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
