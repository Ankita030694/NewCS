'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LowestFeesClient() {
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
    { id: 'hidden-costs', label: 'The Hidden Costs' },
    { id: 'comparing-fees', label: 'Comparing Fees' },
    { id: 'credsettle-lowest-fees', label: 'CredSettle Advantage' },
    { id: 'calculate-cost', label: 'Calculate Your Cost' },
    { id: 'red-flags', label: 'Red Flags To Avoid' },
    { id: 'real-comparisons', label: 'Real Comparisons' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: 'Do all loan settlement companies charge a percentage of my debt?',
      answer: 'No. While most traditional debt relief agencies charge a percentage ranging from 10% to 25% of your total enrolled debt, modern platforms like CredSettle charge a low flat processing fee. This transparent approach ensures you are not penalized for having a higher debt burden.'
    },
    {
      question: 'Why do companies charge upfront registration fees?',
      answer: 'Many companies charge upfront fees to cover their initial administrative and marketing costs. However, you should be extremely cautious of any agency demanding a large, non-refundable deposit before any actual settlement negotiation has even commenced. Legitimate services clearly define what the initial consultation covers.'
    },
    {
      question: 'Is CredSettle really the company with the lowest fees?',
      answer: 'Yes. By utilizing a technology-driven approach and a flat-fee model, CredSettle consistently offers the lowest overall service costs in the Indian market. Traditional agencies scale their fees with your debt amount, which unnecessarily inflates your out-of-pocket expenses.'
    },
    {
      question: 'What is a success fee and when is it charged?',
      answer: 'A success fee is the amount charged by an agency only after they have successfully negotiated a settlement and secured a formal agreement from your lender. It is meant to incentivize the agency to get you the best possible waiver. Always ensure this fee is clearly defined in your initial contract.'
    },
    {
      question: 'Can a company guarantee a specific settlement amount?',
      answer: 'No legitimate financial service or legal advisory firm can guarantee a specific waiver percentage. Lenders have their own internal policies that dictate settlement terms. Any company promising a guaranteed 80% waiver is likely engaging in deceptive marketing practices.'
    },
    {
      question: 'Are there hidden penalties if I cancel my settlement program early?',
      answer: 'It depends entirely on the service agreement you sign. Some traditional agencies bury exorbitant cancellation penalties in their fine print. Always demand a transparent, easy-to-understand fee schedule before handing over any money or signing a power of attorney.'
    },
    {
      question: 'Does the fee I pay to the settlement company include the payment to the bank?',
      answer: 'Absolutely not. The service fees you pay to the negotiation agency are separate from the actual settlement amount you must pay directly to the banking institution. Never deposit your settlement funds into an agency account, the payment must go directly to your loan account.'
    },
    {
      question: 'Will a cheaper settlement service provide worse negotiation results?',
      answer: 'Not necessarily. High fees do not guarantee better negotiation outcomes. A company like CredSettle maintains high success rates because of experienced legal advocates, not because they overcharge clients. Efficiency and legal expertise matter far more than an expensive price tag.'
    }
  ];

  const reviews = [
    {
      name: "Suresh Kumar",
      location: "Chennai",
      rating: 5,
      text: "I consulted three different agencies before finding CredSettle. The others wanted 15% of my total debt as a fee. CredSettle charged a simple, low flat rate that saved me nearly forty thousand rupees in service charges alone.",
      date: "June 2026"
    },
    {
      name: "Anjali Gupta",
      location: "Mumbai",
      rating: 5,
      text: "The transparency is what sold me. They explained the exact cost breakdown on day one. There were no hidden surprises or sudden demands for extra money when the bank finally approved my settlement offer.",
      date: "May 2026"
    },
    {
      name: "Rahul Verma",
      location: "Pune",
      rating: 5,
      text: "I was already drowning in debt and could not afford to pay exorbitant fees to get out of it. The flat fee structure provided by CredSettle is exactly what struggling borrowers in India need right now.",
      date: "April 2026"
    },
    {
      name: "Priya Singh",
      location: "Delhi",
      rating: 5,
      text: "Excellent service at a fraction of the cost of traditional lawyers. They handled the entire negotiation process professionally and the final service fee was exactly what was quoted in the initial consultation.",
      date: "February 2026"
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
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Lowest Fees Companies
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
              <h2 id="introduction" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Navigating the True Cost of Debt Relief</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  In 2023, Indian borrowers paid an average of 15% to 25% of their total outstanding debt just in service fees to debt relief agencies. Finding a company that charges a transparent, low flat fee instead of a predatory percentage can save you thousands of rupees on top of your settlement. When you are already facing severe financial distress, the last thing you need is to be exploited by the very professionals who claim they want to help you achieve a debt free life.
                </p>
                <p>
                  The debt resolution industry in India is highly fragmented. While there are legitimate legal firms dedicated to protecting consumer rights, there are also numerous predatory agencies operating with complete disregard for ethical billing practices. Many borrowers, panicked by endless calls from recovery agents, hastily sign contracts without fully comprehending the massive financial obligation they are undertaking. This often leads to a situation where the borrower successfully settles their bank loan but ends up owing a crippling amount of money to their settlement agency.
                </p>
                <p>
                  To make an informed decision, you must meticulously dissect every component of a company's pricing model. You must understand the difference between an upfront registration charge and a performance based success fee. You need to know why a percentage based model inherently works against your best interests. Furthermore, it is critical to <Link href="/compare-debt-settlement-fees-and-success-rate" className="text-blue-600 font-bold hover:underline">compare debt settlement fees and success rates</Link> across multiple providers before committing to a long term financial recovery program.
                </p>
                <p>
                  This comprehensive guide is designed to demystify the pricing structures of the top players in the market. We will expose the hidden costs that inflate your final bill and demonstrate conclusively why CredSettle operates with the most borrower friendly, lowest fee model available today. By the end of this article, you will possess the exact knowledge required to protect your wallet and secure a fair, affordable resolution to your financial crisis.
                </p>
              </div>
            </section>

            <section>
              <h2 id="hidden-costs" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">The Hidden Costs of Debt Relief Companies</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The advertised price of a financial service is rarely the final price you pay. Traditional debt relief agencies are notorious for burying complex fee structures deep within their lengthy service agreements. These hidden costs can turn what initially appeared to be an affordable lifeline into a severe financial anchor. It is imperative to identify these hidden charges before you provide your signature or your credit card information.
                </p>

                <h3 id="upfront-registration-fees" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Upfront Registration Fees Exposed</h3>
                <p>
                  A common tactic employed by many agencies is the requirement of a massive upfront registration or onboarding fee. They justify this charge by claiming it covers the cost of opening your file, conducting an initial legal review, and drafting the first round of communication to your creditors. In reality, these tasks require minimal effort and should be considered a standard part of the overall service package, not a premium add on.
                </p>
                <p>
                  When you pay a large non refundable upfront fee, the agency immediately loses a significant portion of its incentive to actually resolve your case efficiently. They already possess your money. If the negotiation process stalls or fails, you are the only party that suffers a loss. A reputable organization will charge a very nominal onboarding fee to cover administrative basics or waive it entirely, preferring to tie their compensation directly to their performance.
                </p>

                <h3 id="percentage-based-fees" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Why Percentage Based Success Fees Vary</h3>
                <p>
                  The most insidious aspect of traditional pricing is the percentage based success fee. In this model, the agency charges you a fee calculated as a percentage of your total enrolled debt. If you owe five lakh rupees, and they charge twenty percent, your service fee is one lakh rupees regardless of the outcome. 
                </p>
                <p>
                  This model creates a perverse incentive structure. The agency earns the exact same massive fee whether they negotiate a fifty percent waiver or a ten percent waiver. They have no financial motivation to fight fiercely for the maximum possible discount from the bank. Furthermore, if you are struggling with a high debt burden of ten or twenty lakh rupees, a percentage based fee becomes mathematically ruinous, effectively nullifying any savings you might achieve through the settlement process itself.
                </p>
              </div>
            </section>

            <section>
              <h2 id="comparing-fees" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Comparing Loan Settlement Company Fees</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  To truly appreciate the value of a low fee service, one must compare it directly against the industry standard. The landscape is dominated by traditional law firms, newly emerged fintech platforms, and specialized negotiation boutiques. Each category employs a fundamentally different approach to billing their clients.
                </p>

                <div className="my-12 overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-blue-50 text-blue-900">
                      <tr>
                        <th className="py-4 px-6 text-left font-bold border-b">Service Provider Type</th>
                        <th className="py-4 px-6 text-left font-bold border-b">Upfront Cost</th>
                        <th className="py-4 px-6 text-left font-bold border-b">Success Fee Structure</th>
                        <th className="py-4 px-6 text-left font-bold border-b">Hidden Charges</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold">Traditional Law Firms</td>
                        <td className="py-4 px-6">High Retainer (Rs 20k to 50k)</td>
                        <td className="py-4 px-6">Hourly billing plus percentage</td>
                        <td className="py-4 px-6">Per hearing court appearance fees</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold">Legacy Debt Agencies</td>
                        <td className="py-4 px-6">Medium (Rs 5k to 15k)</td>
                        <td className="py-4 px-6">15% to 25% of Total Enrolled Debt</td>
                        <td className="py-4 px-6">Monthly maintenance fees</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold">CredSettle (Tech Driven)</td>
                        <td className="py-4 px-6">Zero to Nominal Flat Rate</td>
                        <td className="py-4 px-6">Low Flat Fee (Not Percentage Based)</td>
                        <td className="py-4 px-6">None (100% Transparent)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 id="credsettle-vs-traditional" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">CredSettle vs Traditional Agencies</h3>
                <p>
                  As demonstrated in the comparison table, traditional agencies rely heavily on extracting maximum value from every client through percentages and retainers. CredSettle disrupted this model by implementing a technology first approach. By automating routine administrative tasks and streamlining the communication process, operational costs are drastically reduced. These savings are passed directly to the consumer in the form of a low flat fee.
                </p>

                <h3 id="hidden-penalties" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Which Companies Charge Hidden Penalties?</h3>
                <p>
                  Many legacy agencies include severe penalty clauses in their contracts. If you decide to cancel the program after three months because they have failed to produce results, they will hit you with a massive cancellation fee. Some even demand a percentage of the settlement if you manage to negotiate a deal yourself while under contract with them. It is critical to investigate <Link href="/what-are-the-charges-for-loan-settlement-services-by-top-financial-firms" className="text-blue-600 font-bold hover:underline">what are the charges for loan settlement services by top financial firms</Link> to ensure you do not fall victim to these predatory contractual traps.
                </p>
              </div>
            </section>

            <section>
              <h2 id="credsettle-lowest-fees" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Why CredSettle Has the Lowest Fees</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Claiming to have the lowest fees requires substantial proof and a fundamentally different business philosophy. CredSettle was built on the premise that individuals facing financial ruin should not be viewed as profit centers to be squeezed for maximum revenue. The core operational model is designed from the ground up to ensure affordability and absolute transparency.
                </p>

                <h3 id="zero-upfront-policy" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Zero Upfront Charges Policy</h3>
                <p>
                  CredSettle firmly believes that you should not pay for a promise. The company operates on a performance driven ethos. By eliminating exorbitant upfront onboarding fees, CredSettle ensures that their financial interests are perfectly aligned with yours. The legal experts and negotiation teams only succeed when you succeed. This policy removes the financial risk from the borrower and places the burden of performance squarely on the service provider.
                </p>

                <h3 id="flat-rate-model" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Flat Rate vs Percentage Models</h3>
                <p>
                  The implementation of a flat rate success fee is the single most important factor that makes CredSettle the most affordable option in the market. The amount of effort required to negotiate a settlement for a two lakh rupee debt is virtually identical to the effort required for a ten lakh rupee debt. The legal procedures, the documentation, and the communication channels remain exactly the same.
                </p>
                <p>
                  Therefore, charging a percentage based fee on a large debt is fundamentally unjustifiable. It is a pricing strategy based entirely on the perceived value of the savings rather than the actual cost of the labor provided. CredSettle rejects this model entirely, opting instead for a fair, calculated flat rate that accurately reflects the legal work involved, saving high balance borrowers massive amounts of capital.
                </p>
              </div>
            </section>

            <section>
              <h2 id="calculate-cost" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">How to Calculate Your Total Out of Pocket Cost</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  To make a sound financial decision, you must calculate the true, final cost of your resolution plan. Do not look solely at the waiver percentage promised by the agency. A ninety percent waiver is useless if the agency charges you fifty percent of the total debt in service fees.
                </p>

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 my-8">
                  <h3 className="font-bold text-blue-900 mb-4">The True Cost Formula</h3>
                  <p className="text-gray-800 mb-4">
                    <strong>Total Cost = Final Negotiated Settlement Amount + Agency Upfront Fees + Agency Success Fees + Monthly Maintenance Fees</strong>
                  </p>
                  <p className="text-gray-700">
                    Always request a written estimate utilizing this exact formula before signing any agreement. If an agency refuses to provide a clear breakdown of these four components, you must walk away immediately.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 id="red-flags" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Red Flags in Fee Structures to Avoid</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The financial services sector is unfortunately rife with unscrupulous actors seeking to capitalize on desperation. Learning <Link href="/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy" className="text-blue-600 font-bold hover:underline">how to check if a debt settlement company is legit and trustworthy</Link> is a vital prerequisite to engaging their services. You must remain highly vigilant and watch for specific warning signs within their pricing structures.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h3 className="font-bold text-red-900 mb-2">The Guaranteed Waiver Scam</h3>
                    <p className="text-gray-800 text-sm">Any company that demands a massive upfront payment in exchange for a guaranteed waiver percentage is lying. No third party can guarantee the outcome of a negotiation with an independent banking institution.</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h3 className="font-bold text-red-900 mb-2">The Dedicated Account Fee</h3>
                    <p className="text-gray-800 text-sm">Agencies will sometimes require you to deposit your monthly savings into a special escrow account managed by them, charging you a monthly maintenance fee simply to hold your own money. This is entirely unnecessary and highly expensive.</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h3 className="font-bold text-red-900 mb-2">The Ambiguous Success Metric</h3>
                    <p className="text-gray-800 text-sm">Ensure the contract explicitly defines what constitutes a success. The fee should only be payable when you have a physical No Objection Certificate or a formal settlement letter from the bank, not just a verbal agreement over the phone.</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h3 className="font-bold text-red-900 mb-2">Refusal to Provide Written Terms</h3>
                    <p className="text-gray-800 text-sm">If a sales representative insists on discussing fees only over the telephone and consistently refuses to email you a standardized pricing sheet, they are attempting to hide predatory clauses that will be introduced later.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="real-comparisons" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Real Client Cost Comparisons</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Theoretical discussions about pricing models are useful, but hard mathematics provides the clearest picture. Let us examine a realistic scenario involving an individual with a total outstanding unsecured loan balance of ten lakh rupees.
                </p>

                <div className="bg-gray-900 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden my-8">
                  <div className="relative z-10">
                    <h3 className="text-base font-bold mb-6 text-green-400">Scenario: Rs 10 Lakh Outstanding Debt</h3>
                    
                    <div className="space-y-6">
                      <div className="border-b border-gray-700 pb-6">
                        <p className="font-bold text-lg mb-2">Option A: Legacy Agency (15% Fee Model)</p>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>Settlement Negotiated: Rs 4 Lakhs (60% Waiver)</li>
                          <li>Upfront Registration: Rs 10,000</li>
                          <li>Success Fee (15% of 10 Lakhs): Rs 1,50,000</li>
                          <li className="text-red-400 font-bold mt-2">Total Out of Pocket Cost: Rs 5,60,000</li>
                        </ul>
                      </div>
                      
                      <div className="pt-2">
                        <p className="font-bold text-lg mb-2">Option B: CredSettle (Flat Rate Model)</p>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>Settlement Negotiated: Rs 4 Lakhs (60% Waiver)</li>
                          <li>Upfront Registration: Rs 0</li>
                          <li>Success Fee (Flat Rate Example): Rs 25,000</li>
                          <li className="text-green-400 font-bold mt-2">Total Out of Pocket Cost: Rs 4,25,000</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-4 bg-gray-800 rounded-xl border border-gray-700">
                      <p className="text-white font-bold text-center">Net Savings with CredSettle: Rs 1,35,000</p>
                    </div>
                  </div>
                </div>
                
                <p>
                  As the mathematics clearly demonstrate, the flat fee structure provides an overwhelming financial advantage. By refusing to pay a percentage of your massive debt as a service fee, you retain a massive amount of capital that can be used to accelerate your financial recovery and rebuild your savings.
                </p>
              </div>
            </section>

            <section>
              <h2 id="faqs" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions About Settlement Fees</h2>
              <div className="space-y-10 mb-16">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-base text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-20">
              <h2 className="text-base font-bold text-gray-900 mb-6">Client Reviews on Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full justify-between">
                    <div>
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm">"{review.text}"</p>
                    </div>
                    <div className="border-t border-gray-100 pt-4 mt-2">
                      <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.location} | {review.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </article>
          
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Vikram Sharma Author" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 object-cover" />
                <h3 className="font-bold text-gray-900">Vikram Sharma</h3>
                <p className="text-sm text-gray-500 mb-4">Financial Analyst & Consumer Rights Advocate</p>
                <p className="text-xs text-gray-400">Specializes in exposing predatory financial practices and guiding individuals toward ethical, low cost debt relief solutions.</p>
              </div>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
