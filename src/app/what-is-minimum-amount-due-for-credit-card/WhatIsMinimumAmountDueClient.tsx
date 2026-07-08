'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function WhatIsMinimumAmountDueClient() {
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
    { id: 'calculation-trap', label: 'The Trap: Calculation' },
    { id: 'red-flags', label: '3 Red Flags' },
    { id: 'consequences', label: 'Consequences of Not Paying' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'legal-options', label: 'Legal Settlement Options' },
    { id: 'fast-facts', label: '7 Fast Facts' },
    { id: 'faqs', label: 'Frequently Asked Questions' }
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
                    What is Minimum Amount Due
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
              <h2 id="introduction" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Navigating the Credit Card Minimum Payment Trap</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  In India, paying only the 5 percent minimum amount due on a credit card balance of ₹1,00,000 can take over 7 years to clear, costing you upwards of ₹80,000 in interest alone. This financial mechanism is designed by banks to maximize their profits while keeping you trapped in a perpetual cycle of compounding debt. Many cardholders incorrectly assume that by paying the minimum required amount on time every month, they are managing their finances responsibly and staying out of trouble. The truth is far more sinister. The minimum amount due is a carefully calculated figure that ensures the banking institution earns the maximum possible revenue from interest charges over the longest possible duration.
                </p>
                <p>
                  When you receive your monthly credit card statement, the "Minimum Amount Due" is prominently displayed, often in bold letters, while the "Total Amount Due" might be less emphasized. This psychological design nudges consumers toward paying only the minimum, creating an illusion of affordability. For a borrower facing temporary cash flow problems, this option seems like a lifeline. However, this lifeline is actually an anchor pulling you deeper into a vast ocean of unmanageable financial obligations. Every time you roll over a balance by paying only the minimum, you forfeit your interest free grace period. From that moment forward, every single new purchase you make on that card attracts interest from the very day the transaction occurs, compounding daily and added to your bill monthly.
                </p>
                <p>
                  Over time, the principal amount barely decreases. Most of your minimum payment is entirely consumed by the interest charges, late payment fees, and GST levied by the government on those financial charges. This situation is the primary catalyst for individuals seeking professional debt resolution services. Recognizing this trap is the crucial first step toward financial liberation. To effectively eliminate credit card debt and protect your assets, you must understand exactly how these numbers are manipulated against you, recognize the warning signs of financial insolvency, and learn how to employ legally sound strategies to negotiate a full and final settlement with your creditors.
                </p>
              </div>
            </section>

            <section>
              <h2 id="calculation-trap" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">The Trap: How Credit Card Minimum Amount Due is Calculated</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The calculation of the minimum amount due is not a random figure generated to assist the consumer. It is a highly optimized algorithmic formula designed by financial engineers to ensure that the bank recovers the interest generated in the current cycle, any applicable fees, and a microscopic fraction of the principal amount. This ensures the account remains active and profitable for the institution for decades if left unchecked. To break free from this system, you must first demystify the mathematics behind it. The <Link href="/stress-free-debt-free" className="text-blue-600 font-bold hover:underline">stress free debt free</Link> lifestyle is only achievable when you stop paying exorbitant interest to banking conglomerates.
                </p>

                <h3 id="five-percent-rule" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The 5 Percent Rule Explained</h3>
                <p>
                  In the Indian banking sector, the standard formula used by almost all major financial institutions dictates that the minimum amount due is approximately five percent of your total outstanding principal balance. However, this is just the baseline. The actual amount printed on your statement is a composite figure. The bank calculates five percent of your outstanding principal balance, and then adds one hundred percent of the interest charges accumulated during that billing cycle. Furthermore, they add one hundred percent of any late payment fees, over limit penalties, and applicable GST charges. If you have converted past purchases into Equated Monthly Installments, the entire EMI amount for that month is also added to the minimum due.
                </p>
                <p>
                  For example, if you have an outstanding principal balance of fifty thousand rupees, the baseline calculation is two thousand five hundred rupees. But if your interest rate is three point five percent per month, you incur an interest charge of one thousand seven hundred and fifty rupees. Add GST at eighteen percent on the interest, which is three hundred and fifteen rupees. Your minimum amount due suddenly jumps to four thousand five hundred and sixty five rupees. When you pay this amount, the vast majority is immediately absorbed by the interest and taxes. Your actual principal balance is reduced by barely a fraction, leaving you with almost the exact same debt burden for the next billing cycle.
                </p>

                <h3 id="compounding-interest" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">How Interest Keeps Compounding</h3>
                <p>
                  The most destructive element of the minimum payment cycle is the phenomenon of compounding interest. Credit card debt is not simple interest. It is revolving debt, meaning the interest is calculated on the daily average balance. When you carry a balance forward, the interest from the previous month is added to your principal balance. The next month, you are charged interest on the original principal plus the previously accrued interest. You are literally paying interest on your interest. This exponential growth model is the exact reason why credit card debt is considered the most toxic form of liability in personal finance.
                </p>
                <p>
                  Moreover, the moment you decide to carry a balance by paying only the minimum due, a critical shift occurs in your card agreement. You instantly lose your interest free credit period. Typically, cardholders enjoy a period of up to fifty days where no interest is charged on new retail purchases. However, when you revolve a balance, this grace period is revoked. Any new transaction you make, whether it is buying groceries or paying a utility bill, begins accruing interest from the very second the transaction is swiped at the terminal. This creates a hyper accelerated debt spiral, as your daily living expenses become significantly more expensive due to the hidden interest tax applied by the credit card issuer.
                </p>
              </div>
            </section>

            <section>
              <h2 id="red-flags" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">3 Red Flags You Are in a Debt Trap</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Denial is the most common psychological response to overwhelming financial liability. Many individuals convince themselves that they are managing their credit cards perfectly fine simply because they haven't missed a payment date yet. However, maintaining the minimum payment illusion is exhausting and unsustainable. You must objectively evaluate your financial behavior to determine if you have crossed the threshold from responsible borrowing into a high risk debt spiral.
                </p>

                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-600 mb-8 shadow-sm">
                  <h4 className="font-bold text-red-900 text-lg mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    Red Flag 1: The Balance Transfer Shuffle
                  </h4>
                  <p className="text-gray-800 text-base">
                    If you are systematically opening new credit cards solely for the purpose of transferring the balance from an existing card, or if you are withdrawing cash from one credit card to pay the minimum amount due on another, you are in a severe debt trap. This behavior is called credit kiting. It does not solve the underlying insolvency problem. It merely delays the inevitable collapse while incurring additional processing fees and balance transfer charges, making the final debt significantly larger.
                  </p>
                </div>

                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-600 mb-8 shadow-sm">
                  <h4 className="font-bold text-red-900 text-lg mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    Red Flag 2: Maxed Out Credit Utilization
                  </h4>
                  <p className="text-gray-800 text-base">
                    Your credit utilization ratio is the percentage of your total available credit that you are currently using. If your credit cards are consistently hovering at ninety to one hundred percent of their maximum limit, you have zero financial buffer. Any unexpected expense, such as a medical bill or a vehicle repair, will immediately push you over the limit. This triggers exorbitant over limit fees, which are added to your minimum due, often causing your next payment to bounce and initiating the default sequence.
                  </p>
                </div>

                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-600 shadow-sm">
                  <h4 className="font-bold text-red-900 text-lg mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    Red Flag 3: Declining Principal Balance Illusion
                  </h4>
                  <p className="text-gray-800 text-base">
                    Take out your credit card statements from six months ago and compare them to your current statement. Look strictly at the total outstanding principal balance. If you have been making regular payments every month, yet the total outstanding principal balance has barely decreased by a few thousand rupees, you are trapped in the interest cycle. You are essentially renting the bank's money at a staggering premium without ever actually purchasing your freedom from the debt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 id="consequences" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">What Happens if You Do Not Pay the Minimum Amount Due?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  When financial hardship strikes, such as a job loss or a medical emergency, even scraping together five percent of your balance becomes impossible. The decision to stop paying the minimum amount due is significant and triggers an immediate, aggressive sequence of actions from the banking institution. Understanding this timeline is absolutely vital for maintaining your composure and preparing your defense. The moment you miss the payment deadline, a cascade of financial penalties and automated collection processes initiates.
                </p>

                <h3 id="late-payment-fees" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Late Payment Fees</h3>
                <p>
                  The immediate consequence of missing the minimum payment is the imposition of a late payment fee. In India, this fee is tiered based on your outstanding balance. If your balance is substantial, the bank can apply a penalty of up to one thousand three hundred rupees, plus eighteen percent GST. This fee is instantly added to your total outstanding balance. Furthermore, because you missed the payment, the bank will often automatically increase your interest rate to a penalty rate, sometimes pushing the annualized percentage rate above forty five percent. Your debt will now multiply at an unprecedented speed, turning a manageable problem into a financial catastrophe within ninety days.
                </p>

                <h3 id="cibil-score" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Impact on CIBIL Score</h3>
                <p>
                  Credit bureaus like TransUnion CIBIL, Equifax, and Experian are notified of your default within thirty days. A single missed payment will instantly slash your credit score by anywhere from fifty to one hundred points. As the delinquency continues into the sixty and ninety day marks, the account will be classified as a Special Mention Account and eventually a Non Performing Asset. Your credit profile will be flagged with severe derogatory remarks. This obliteration of your CIBIL score ensures that you will not be able to secure any new credit cards, personal loans, home loans, or auto loans from any regulated financial institution in the country. The damage is profound and requires years of disciplined financial rehabilitation to repair.
                </p>

                <h3 id="harassment" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Harassment by Recovery Agents</h3>
                <p>
                  By day forty five of the delinquency, the bank typically assigns your account to a third party collection agency. This is where the psychological warfare begins. These agents operate on commission and are highly incentivized to extract money from you by any means necessary. You will experience an unrelenting barrage of phone calls, automated text messages, and emails. If the debt remains unpaid, agents may resort to field visits, arriving unannounced at your residential address or your place of employment. While the Reserve Bank of India has strict guidelines against harassment, rogue agents often employ intimidation tactics, threatening legal action, police complaints, and public humiliation to force a payment. Knowing your legal rights during this phase is your only shield against abuse.
                </p>
              </div>
            </section>

            <section>
              <h2 id="case-study" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Case Study: Breaking the Minimum Payment Cycle</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Theoretical knowledge is valuable, but seeing these principles applied in a real world scenario provides actionable clarity. Let us examine a documented case where a borrower successfully navigated the transition from being trapped in the minimum payment cycle to achieving total financial liberation through strategic negotiation.
                </p>

                <div className="bg-gray-900 p-10 md:p-14 rounded-3xl text-white shadow-2xl relative overflow-hidden my-12">
                  <div className="relative z-10">
                    <h4 className="text-base font-bold mb-8 text-blue-400">The Anatomy of a Strategic Default</h4>
                    
                    <div className="space-y-6 text-base">
                      <p><strong className="text-blue-400">The Subject:</strong> Mr. Anil Kapoor, a logistics manager based in Chennai.</p>
                      <p><strong className="text-blue-400">The Problem:</strong> Anil possessed three premium credit cards with a combined outstanding balance of eight lakh rupees. He had diligently paid the minimum amount due of forty thousand rupees every single month for three years without missing a single deadline. However, due to compounding interest at forty percent annualized, his principal balance had only decreased by fifty thousand rupees over thirty six months. He had paid nearly fourteen lakh rupees in interest and fees, yet remained heavily indebted.</p>
                      <p><strong className="text-blue-400">The Catalyst:</strong> A severe downturn in the logistics sector led to a forty percent reduction in Anil's monthly salary. He could no longer afford the forty thousand rupee minimum payment across his three cards. He faced imminent default.</p>
                      <p><strong className="text-blue-400">The Strategy:</strong> Rather than liquidating his provident fund or borrowing from high interest loan sharks, Anil consulted with professional debt resolution experts. He was advised to immediately halt all minimum payments. He utilized the cash he would have paid toward the minimums to build a dedicated settlement fund in a separate, secure bank account.</p>
                      <p><strong className="text-blue-400">The Execution:</strong> For five months, Anil endured the collection calls and the predictable drop in his CIBIL score. His accounts transitioned into Non Performing Asset status. When the collection agencies realized that threats of legal action were ineffective against an insolvent borrower with no liquid assets, their tone shifted from aggressive demand to negotiation.</p>
                      <p><strong className="text-blue-400">The Resolution:</strong> Utilizing the funds he had accumulated over the five months, his legal representatives negotiated a One Time Settlement across all three cards. The banks, facing the prospect of a total loss, accepted a combined settlement of three lakh rupees. Anil secured a massive waiver, closed the accounts permanently, and broke the cycle of compounding debt that had enslaved him for years. This is a classic example of how <Link href="/settling-debt-in-india-guide" className="text-blue-400 font-bold hover:underline">settling debt in India</Link> operates in reality.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full -mr-40 -mt-40 opacity-20 blur-[100px]"></div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="legal-options" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Legal Options to Settle Credit Card Debt in India</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  When you are genuinely unable to pay your credit card balance, you are not devoid of options. The banking system is inherently pragmatic. It is a business, and businesses abhor total losses. The legal framework in India provides mechanisms for borrowers to resolve unsecured debts without facing criminal prosecution. Credit card debt is an unsecured civil liability. You cannot be jailed merely for being unable to repay a bank. The most potent tool at your disposal is the formal settlement process.
                </p>

                <h3 id="one-time-settlement" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">One Time Settlement (OTS)</h3>
                <p>
                  A One Time Settlement is a legally binding agreement between you and the financial institution where the bank agrees to accept a lump sum payment that is significantly less than the total outstanding balance. In exchange for this immediate payment, the bank permanently forgives the remainder of the debt, waiving the accumulated interest, late fees, and a portion of the principal amount. Depending on the age of the default and your demonstrable financial hardship, waivers can range anywhere from forty percent to as high as eighty percent of the inflated balance.
                </p>
                <p>
                  The bank agrees to this compromise because they calculate that recovering a guaranteed fraction of the money today is economically superior to spending years in civil courts attempting to squeeze money from an insolvent individual. It is crucial to understand that an OTS will result in a settled status on your CIBIL report, which negatively impacts your creditworthiness for several years. However, if you are already unable to pay the minimum due, your score is already ruined. The settlement stops the harassment, caps the financial hemorrhage, and provides immediate peace of mind, exactly as outlined in our guide on <Link href="/smfg-loan-settlement" className="text-blue-600 font-bold hover:underline">smfg loan settlement</Link> procedures which apply similar principles.
                </p>

                <h3 id="negotiating-with-the-bank" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Negotiating with the Bank</h3>
                <p>
                  Negotiating a settlement is a highly strategic endeavor. You must approach the bank logically, not emotionally. Never accept the first offer presented by a telecalling agent. Their mandate is to extract the highest possible amount. You must draft a formal hardship letter detailing your financial catastrophe, whether it is medical expenses, job termination, or severe business losses. Attach concrete proof to back your claims. Submit this documentation to the grievance redressal officer or nodal officer of the bank.
                </p>
                <p>
                  During negotiations, anchor your offers low. Offer an amount you can absolutely afford to pay in a single transaction. Banks are far more likely to accept a lower settlement if the funds are available for immediate transfer. Never make a payment based on verbal promises. Insist on a formal Settlement Letter issued on official bank letterhead. This document must state your credit card number, the exact agreed settlement amount, the deadline for payment, and an unequivocal statement that the account will be marked as settled upon receipt of the funds. This letter is your legal shield against any future claims.
                </p>
              </div>
            </section>

            <section>
              <h2 id="fast-facts" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">7 Fast Facts: Minimum Amount Due Data</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  To truly grasp the magnitude of the minimum amount due trap, we must look at the empirical data. The numbers clearly illustrate how this financial product is engineered to extract maximum wealth from the consumer class over an extended timeline. Review these critical data points carefully to understand the reality of revolving credit card debt in the Indian economy.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                    <span className="text-4xl font-black text-blue-600 mb-4">42%</span>
                    <p className="font-bold text-gray-900 text-sm">Annualized Interest Rate</p>
                    <p className="text-xs text-gray-500 mt-2">The average compounded rate applied when revolving a balance on premium Indian credit cards.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                    <span className="text-4xl font-black text-blue-600 mb-4">5%</span>
                    <p className="font-bold text-gray-900 text-sm">Standard Baseline Payment</p>
                    <p className="text-xs text-gray-500 mt-2">The typical percentage of the principal balance used by banks to calculate the absolute minimum due.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                    <span className="text-4xl font-black text-blue-600 mb-4">7+ Years</span>
                    <p className="font-bold text-gray-900 text-sm">Average Clearance Time</p>
                    <p className="text-xs text-gray-500 mt-2">The time required to pay off a ₹1,00,000 balance making only the minimum monthly payments.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                    <span className="text-4xl font-black text-blue-600 mb-4">18%</span>
                    <p className="font-bold text-gray-900 text-sm">GST Application</p>
                    <p className="text-xs text-gray-500 mt-2">The government tax applied directly to the interest charges and late fees, increasing the debt burden.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                    <span className="text-4xl font-black text-blue-600 mb-4">0 Days</span>
                    <p className="font-bold text-gray-900 text-sm">Interest Free Period</p>
                    <p className="text-xs text-gray-500 mt-2">The grace period you receive on new purchases once you begin revolving an old balance.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                    <span className="text-4xl font-black text-blue-600 mb-4">₹1,300</span>
                    <p className="font-bold text-gray-900 text-sm">Maximum Late Fee</p>
                    <p className="text-xs text-gray-500 mt-2">The highest standard late payment penalty applied per billing cycle for large outstanding balances.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center md:col-span-2">
                    <span className="text-4xl font-black text-blue-600 mb-4">80%</span>
                    <p className="font-bold text-gray-900 text-sm">Total Interest Cost</p>
                    <p className="text-xs text-gray-500 mt-2">The amount of interest you will pay relative to your original principal if you strictly adhere to the minimum payment schedule for a prolonged period.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="faqs" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">FAQ About Minimum Amount Due</h2>
              <div className="space-y-10 mb-20">
                <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                  <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">What happens if I only pay the minimum amount due?</h3>
                  <p className="text-gray-700 leading-relaxed text-base">If you only pay the minimum amount due, the remaining balance is carried forward to the next billing cycle. The bank will charge high compounding interest, often around three to four percent per month, on the unpaid balance and any new purchases.</p>
                </div>
                <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                  <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">How is the minimum amount due calculated on a credit card?</h3>
                  <p className="text-gray-700 leading-relaxed text-base">The minimum amount due is typically calculated as five percent of your total outstanding balance, plus any applicable EMIs, past due amounts, and over limit fees. Banks in India use this standard formula to keep accounts active while maximizing interest revenue.</p>
                </div>
                <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                  <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">Does paying the minimum amount due negatively impact my CIBIL score?</h3>
                  <p className="text-gray-700 leading-relaxed text-base">Paying the minimum amount due on time prevents a late payment remark on your CIBIL report. However, carrying a high balance increases your credit utilization ratio, which can slowly degrade your credit score over time.</p>
                </div>
                <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                  <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">Can I negotiate a settlement if I have only been paying the minimum due?</h3>
                  <p className="text-gray-700 leading-relaxed text-base">Yes, if you face genuine financial hardship and can no longer afford even the minimum payments, you can stop paying to trigger a default phase. Once the account becomes a non performing asset, you can negotiate a one time settlement.</p>
                </div>
                <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                  <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">Is it legal for recovery agents to harass me if I stop paying the minimum amount?</h3>
                  <p className="text-gray-700 leading-relaxed text-base">No, it is entirely illegal. The Reserve Bank of India mandates strict guidelines for recovery agents. They cannot use abusive language, call outside permitted hours, or threaten you under any circumstances.</p>
                </div>
                <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                  <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">Will my credit card be blocked if I only pay the minimum amount due?</h3>
                  <p className="text-gray-700 leading-relaxed text-base">No, your credit card will remain active as long as you pay the minimum amount due by the designated deadline. However, your available credit limit will decrease as the unpaid balance and interest charges consume it.</p>
                </div>
                <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                  <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">How long will it take to clear my debt by paying only the minimum amount?</h3>
                  <p className="text-gray-700 leading-relaxed text-base">Depending on the interest rate and the size of your balance, it can take anywhere from seven to fifteen years to clear a credit card debt by paying only the minimum amount due, costing you double or triple the original principal.</p>
                </div>
              </div>
            </section>
          </article>
          
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Anuj Bhiya Author" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50" />
                <h4 className="font-bold text-gray-900">Anuj Bhiya</h4>
                <p className="text-sm text-gray-500 mb-4">Financial Strategist & Debt Resolution Expert</p>
                <p className="text-xs text-gray-400">Specializing in credit card law, banking policies, and protecting consumers from predatory financial practices in India.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
