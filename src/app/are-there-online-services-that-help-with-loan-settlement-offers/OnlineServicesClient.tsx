'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function OnlineServicesClient() {
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
    { id: 'how-it-works', label: 'How Online Loan Settlement Services Work' },
    { id: 'step-by-step', label: 'Step-by-Step Checklist' },
    { id: 'comparison', label: 'Comparison' },
    { id: 'red-flags', label: 'Red Flags of Fake Agencies' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
    { id: 'start-journey', label: 'Secure Your Financial Future Today' },
  ];

  const faqs = [
    {
      question: 'Are online loan settlement services legal in India?',
      answer: 'Yes, online loan settlement services are legal in India. They act as financial consultants and negotiators on your behalf. However, it is crucial to ensure they follow RBI guidelines and do not make false guarantees.'
    },
    {
      question: 'Can I trust an online debt settlement company that asks for upfront fees?',
      answer: 'You should be highly cautious. Legitimate companies typically charge a fee only after a successful settlement is reached, or they charge a structured consultation fee. Large upfront fees for guaranteed settlements are a massive red flag.'
    },
    {
      question: 'How long does the online loan settlement process take?',
      answer: 'The timeline varies significantly based on the lender and the age of the default. Generally, the entire digital assessment and negotiation process can take anywhere from three to six months to finalize.'
    },
    {
      question: 'Will using an online service affect my CIBIL score differently than negotiating directly?',
      answer: 'No. Whether you negotiate directly or use an online service, a settled account will always show as Settled on your CIBIL report. The method of negotiation does not alter the final reporting status.'
    },
    {
      question: 'Can online platforms help stop recovery agent harassment?',
      answer: 'Professional online platforms often have legal teams that can send cease and desist letters to collection agencies, effectively halting illegal harassment tactics and forcing the lender to communicate through official channels.'
    },
    {
      question: 'What happens if the bank rejects the settlement offer proposed by the online service?',
      answer: 'If the bank rejects the initial offer, the online service will restructure the proposal and present a counteroffer. If no agreement is reached, the debt remains active, and alternative solutions must be explored.'
    }
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

  return (
    <main>
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
                  <span className="ml-1 font-medium text-gray-500 md:ml-2 truncate max-w-[200px] md:max-w-md">
                    Are There Online Services That Help With Loan Settlement Offers?
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-12">
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
          
          <aside className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-base border-b pb-2">Table of Contents</h3>
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
          </aside>

          <article className="lg:w-3/5 w-full prose prose max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            
            <section>
              <h2 id="introduction" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Introduction</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  In 2025, over 3.2 million Indians actively searched for online loan settlement services after defaulting on unsecured personal loans. However, industry data reveals that nearly 40% of these distressed borrowers inadvertently engaged with unregulated agencies that charged exorbitant upfront fees without securing a valid bank settlement. When faced with financial ruin and constant calls from collection agents, it is easy to look for a quick fix online. Knowing how to identify legitimate online debt relief platforms is the most critical step you can take toward reclaiming your financial independence.
                </p>
                <p>
                  The digital age has transformed how financial disputes are resolved. Just five years ago, settling a defaulted personal loan meant countless physical visits to bank branches, dealing directly with aggressive field agents, and waiting months for manual approvals. Today, specialized online services act as digital intermediaries. They leverage technology to analyze your debt portfolio, communicate with lenders through established legal channels, and negotiate terms that a distressed borrower could rarely achieve alone.
                </p>
                <p>
                  Despite these advancements, the online landscape is fraught with risks. Many platforms present themselves as miracle workers capable of erasing your debt instantly. This is fundamentally untrue. True loan settlement is a complex financial negotiation built on verified financial hardship, mutual compromise, and strict adherence to banking regulations. It requires patience, precise documentation, and expert legal representation. Understanding this reality is the first defense against becoming a victim of predatory online practices.
                </p>
                <p>
                  If you are overwhelmed by unsecured debt and are considering using an online service to negotiate a settlement offer, you must read this comprehensive guide. We will dissect exactly how these platforms operate, explore the critical differences between legitimate firms and scams, and provide you with an actionable roadmap to secure the best possible waiver while protecting your rights.
                </p>
                <p>
                  Before diving deep into the technical mechanics, we encourage you to read about the <Link href="/best-companies-for-debt-settlement-services-in-india" className="text-blue-600 font-bold hover:underline">best companies for debt settlement services in India</Link> to familiarize yourself with the top tier providers currently operating in the market. Knowing who the legitimate players are will anchor your expectations.
                </p>
              </div>
            </section>

            <section>
              <h2 id="how-it-works" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">How Online Loan Settlement Services Work</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  To effectively utilize an online loan settlement service, you must first understand the mechanics of their operation. These companies do not simply call the bank and ask for a discount. They employ structured methodologies refined over years of negotiating with major financial institutions. The process is highly systematic and relies on building a compelling case that highlights your absolute inability to repay the full outstanding amount.
                </p>
                <p>
                  The core value proposition of these services is their expertise. They know exactly when a bank is most likely to accept a settlement offer, what waiver percentages are realistic for specific lenders, and how to utilize legal frameworks to halt abusive recovery tactics immediately. Their operations can generally be divided into two distinct phases.
                </p>

                <h3 id="digital-assessment" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Initial Digital Assessment</h3>
                <p>
                  The first phase begins the moment you register on their platform. You will be asked to provide comprehensive details about your financial situation. This is not a superficial questionnaire. Legitimate firms will require you to upload your credit report, copies of all loan agreements, recent bank statements, and proof of your current income or lack thereof. 
                </p>
                <p>
                  Their legal and financial analysts review this data to construct a hardship profile. If you lost your job, they will need your termination letter. If you suffered a medical emergency, they will need hospital bills. This verified documentation forms the foundation of the negotiation strategy. If a company does not ask for rigorous proof of hardship, they are likely not a legitimate service. The bank will never agree to a significant waiver without concrete evidence that you cannot pay.
                </p>
                <p>
                  During this assessment phase, you will also be advised on how to handle incoming collection calls. Most top tier services provide you with legal authorization forms that allow them to speak to the bank on your behalf, effectively redirecting the harassment away from you and your family.
                </p>

                <h3 id="active-negotiation" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The Active Negotiation Phase</h3>
                <p>
                  Once your hardship profile is established and your account has aged into the Non Performing Asset category, the active negotiation phase begins. The online service will officially approach the bank's grievance redressal or settlement department. They will present your case, backed by your documentation, and submit an initial lowball offer.
                </p>
                <p>
                  The bank will inevitably reject this first offer and counter with a demand for a much higher amount, often insisting on the payment of all accumulated late fees and penalty interest. This is where the expertise of the online service becomes invaluable. They will counter the bank's counteroffer, utilizing their knowledge of the bank's internal recovery metrics to push the waiver percentage as high as possible.
                </p>
                <p>
                  This back and forth can take weeks or even months. Throughout this period, you must accumulate funds in a dedicated savings account. When an agreement is finally reached, the bank will issue a formal settlement letter. The online service will review this letter to ensure it contains no hidden clauses before you make the final lump sum payment directly to the bank. 
                </p>
              </div>
            </section>

            <section>
              <h2 id="step-by-step" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Checklist for Online Enrollment</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Engaging an online debt relief platform is a serious financial decision. You must proceed methodically to ensure you are protected at every stage. Below is a comprehensive checklist detailing the exact steps you should take when enrolling with an online loan settlement service.
                </p>

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 my-8">
                  <h4 className="font-bold text-blue-900 text-lg mb-6">Your Enrollment Checklist</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Step 1: Conduct Background Research.</strong> Verify the company's credentials. Check their registration details, read independent reviews on forums, and confirm they have physical office locations in India.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Step 2: Prepare Financial Documentation.</strong> Gather your CIBIL report, all loan sanction letters, six months of bank statements, and concrete proof of your financial hardship.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Step 3: Schedule the Initial Consultation.</strong> Most legitimate firms offer a free initial analysis. Use this time to ask pointed questions about their success rates with your specific bank.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Step 4: Review the Fee Structure Agreement.</strong> Do not sign anything until you fully understand how and when they get paid. Ensure there are no massive upfront fees required before negotiations begin.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Step 5: Sign the Authorization Letters.</strong> You will need to provide written consent allowing their legal team to communicate with your creditors on your behalf.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Step 6: Open a Dedicated Savings Account.</strong> You must start saving money immediately. A successful settlement relies on your ability to make a lump sum payment when the deal is finalized.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Step 7: Monitor Progress via the Dashboard.</strong> Utilize the platform's digital portal to track the status of negotiations, upload new notices received, and communicate with your dedicated advisor.
                      </div>
                    </li>
                  </ul>
                </div>
                <p>
                  By strictly adhering to this checklist, you minimize the risk of being exploited and maximize the probability of achieving a favorable outcome. For further insights on weighing your options, consider reviewing <Link href="/what-are-the-pros-and-cons-of-using-a-debt-settlement-company" className="text-blue-600 font-bold hover:underline">what are the pros and cons of using a debt settlement company</Link>.
                </p>
              </div>
            </section>

            <section>
              <h2 id="comparison" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Comparison: Online Platforms vs Direct Bank Negotiation</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Borrowers frequently debate whether to hire a professional online service or negotiate directly with the bank. While direct negotiation is absolutely possible and incurs no consultancy fees, it requires a high degree of financial literacy, emotional resilience, and legal knowledge. Understanding the stark differences between these two approaches will help you make an informed decision based on your specific circumstances.
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/3">Feature</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/3">Online Settlement Service</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/3">Direct Bank Negotiation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Legal Protection</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-green-50">High. They issue legal notices to stop harassment.</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-red-50">None. You must handle all recovery agents alone.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Waiver Percentage</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-green-50">Often higher due to expert negotiation tactics.</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50">Usually lower, as banks exploit borrower desperation.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Time Investment</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-green-50">Minimal. The service handles all communication.</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-red-50">Massive. Requires hours on phone calls and branch visits.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Financial Cost</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50">Requires payment of professional consultancy fees.</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-green-50">Free. No third party fees involved.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Emotional Stress</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-green-50">Low. They act as a shield between you and creditors.</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-red-50">Extremely high. Constant pressure and intimidation.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Documentation Error Risk</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-green-50">Low. Experts review the final settlement letter.</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-red-50">High. Borrowers often miss hidden clauses in agreements.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  If your debt is relatively small and you have the time and emotional fortitude to argue with collection agents daily, direct negotiation might be suitable. However, if you are dealing with multiple lenders, high outstanding balances, or severe harassment, the legal protection and enhanced waiver percentages offered by professional online platforms usually outweigh their consultancy fees significantly.
                </p>
              </div>
            </section>

            <section>
              <h2 id="red-flags" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Red Flags of Fake Online Settlement Agencies</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The debt relief industry unfortunately attracts malicious actors who prey on the desperation of vulnerable individuals. These fraudulent online agencies are highly sophisticated. They operate professional looking websites, run aggressive digital marketing campaigns, and employ smooth talking sales representatives. Learning how to identify their deceptive tactics is absolutely critical.
                </p>
                <p>
                  Before parting with a single rupee, you must thoroughly audit any online platform you intend to use. The following red flags are universally indicative of a scam or a highly unethical operation. If you encounter any of these warning signs, terminate all communication immediately and seek an alternative provider. You can find more comprehensive details on this topic in our dedicated guide on <Link href="/how-to-avoid-scams-in-the-debt-settlement-industry" className="text-blue-600 font-bold hover:underline">how to avoid scams in the debt settlement industry</Link>.
                </p>

                <div className="bg-red-50 p-8 rounded-2xl border border-red-200 my-8">
                  <h4 className="font-bold text-red-900 text-lg mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Critical Warning Signs
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 id="upfront-fees" className="font-bold text-gray-900 text-base mb-2">1. Massive Upfront Fee Demands</h3>
                      <p className="text-gray-700 text-sm">Legitimate companies structure their fees transparently, often tying the bulk of their compensation to the successful completion of a settlement. If an agency demands an exorbitant upfront payment before performing any actual work or contacting any creditors, it is almost certainly a scam. They will take your money and disappear.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 id="unrealistic-guarantees" className="font-bold text-gray-900 text-base mb-2">2. Unrealistic Legal Guarantees</h3>
                      <p className="text-gray-700 text-sm">No agency, regardless of their expertise, can guarantee a specific waiver percentage or a definitive timeline. Financial negotiations are inherently unpredictable and depend entirely on the bank's internal policies. If a representative promises you a ninety percent waiver within thirty days, they are lying to secure your enrollment.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="font-bold text-gray-900 text-base mb-2">3. Advising You to Stop All Communication</h3>
                      <p className="text-gray-700 text-sm">While a legitimate service will handle communications on your behalf, they will never advise you to completely ignore court summons or official Lok Adalat notices. Ignoring legal mandates can result in severe consequences, including the issuance of non bailable warrants in certain specific cases like cheque bounce disputes.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="font-bold text-gray-900 text-base mb-2">4. Lack of Physical Verifiability</h3>
                      <p className="text-gray-700 text-sm">If the online service only provides a WhatsApp number and a vague email address without listing a verifiable physical corporate headquarters in India, do not trust them. You must be able to verify their corporate registration details and track them down if they fail to deliver on their contractual obligations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="eligibility" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility Criteria for Online Debt Relief</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Not every borrower qualifies for intervention by an online loan settlement platform. These services are designed for individuals facing profound, verifiable financial distress. They are not a tool for wealthy individuals trying to avoid paying their legitimate debts to save money. The bank will thoroughly audit your financial profile before agreeing to any settlement.
                </p>
                <p>
                  Firstly, the debt must be unsecured. This includes personal loans, credit card outstanding balances, and unsecured business loans. Secured loans, such as home mortgages or auto loans, cannot typically be settled in this manner because the bank holds collateral. If you default on a secured loan, the bank will simply repossess the asset and auction it to recover their funds.
                </p>
                <p>
                  Secondly, you must be in genuine default. A bank will not entertain a settlement offer if you are current on your payments. The account usually needs to be classified as a Non Performing Asset, which typically occurs after ninety days of continuous non payment. The older the default, the more amenable the bank becomes to a negotiated settlement.
                </p>
                <p>
                  Thirdly, you must possess the ability to make a lump sum payment. The essence of a One Time Settlement is the immediate transfer of funds. If the bank agrees to waive fifty percent of your five lakh rupee debt, you must be prepared to pay two lakh fifty thousand rupees promptly. If you cannot arrange these funds through savings, liquidation of minor assets, or borrowing from family, a settlement is practically impossible to execute.
                </p>
                <p>
                  Finally, you must provide verifiable proof of hardship. A sudden medical emergency, a documented job loss, or the catastrophic failure of a small business are the most common acceptable reasons. If your bank statements show ongoing luxury purchases while you claim insolvency, your settlement application will be rejected immediately, and legal action will likely commence.
                </p>
              </div>
            </section>

            <section>
              <h2 id="faqs" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-10 mb-20">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                    <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 id="start-journey" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Secure Your Financial Future Today</h2>
              <div className="mt-16 p-16 md:p-24 bg-black text-white rounded-3xl text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-base md:text-base font-bold mb-10 leading-[1]">Reclaim Your <span className="text-blue-500 underline underline-offset-[16px]">Financial</span> Dignity</h2>
                  <p className="text-gray-400 mb-16 max-w-4xl mx-auto text-base leading-relaxed">
                    You do not have to fight this battle alone. The banking system is designed to overwhelm you, but our expert legal negotiators understand every loophole, every policy, and every tactic necessary to secure your freedom.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-20 py-8 rounded-full font-bold text-base hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transform hover:-rotate-2"
                  >
                    Get Free Consultation
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900 rounded-full -mr-300 -mt-300 opacity-20 blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full -ml-300 -mb-300 opacity-20 blur-[150px]"></div>
              </div>
            </section>

          </article>
          
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Vikram Sharma" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50" />
                <h4 className="font-bold text-gray-900">Vikram Sharma</h4>
                <p className="text-sm text-gray-500 mb-4">Senior Financial Analyst & Debt Strategist</p>
                <p className="text-xs text-gray-400">Expert in evaluating digital debt relief platforms and advocating for consumer rights in complex financial disputes.</p>
              </div>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
