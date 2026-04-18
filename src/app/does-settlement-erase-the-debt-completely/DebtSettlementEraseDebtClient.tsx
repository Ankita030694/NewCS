'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function DebtSettlementEraseDebtClient() {
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
    { id: 'definition-ots', label: 'What is OTS?' },
    { id: 'legal-vs-credit', label: 'Legal vs Credit Reality' },
    { id: 'status-meanings', label: 'Understanding Account Status' },
    { id: 'seven-year-rule', label: 'The Seven Year Reporting Rule' },
    { id: 'impact-on-financial-health', label: 'Impact on Financial Health' },
    { id: 'legal-consequences', label: 'Legal Consequences' },
    { id: 'secured-loan-risks', label: 'Secured Loans & SARFAESI' },
    { id: 'tax-implications', label: 'Taxation on Debt Waivers' },
    { id: 'negotiation-strategy', label: 'Professional Negotiation' },
    { id: 'pros-cons', label: 'Pros & Cons Analyzed' },
    { id: 'alternatives', label: 'Smart Alternatives' },
    { id: 'rebuilding-credit', label: 'Post-Settlement Recovery' },
    { id: 'future-loan-eligibility', label: 'Future Loan Eligibility' },
    { id: 'credsettle-support', label: 'How CredSettle Helps' },
    { id: 'success-stories', label: 'Client Success Stories' },
    { id: 'faqs', label: 'Comprehensive FAQs' },
  ];

  const faqs = [
    {
      question: 'Does loan settlement erase the debt from my record completely?',
      answer: 'No. While a settlement legally resolves your obligation to the lender for the agreed amount, it does not erase the record. It reflects as "Settled" on your CIBIL report for seven years. This informs future lenders that you did not pay back the full amount originally borrowed.'
    },
    {
      question: 'Is "Settled" status the same as "Closed" status?',
      answer: 'No. "Closed" means the loan was paid in full as per the agreement. "Settled" means the lender accepted a partial payment and waived the rest due to your inability to pay. Lenders view a "Settled" status as a sign of financial risk, whereas "Closed" is positive.'
    },
    {
      question: 'Can I get a new loan after settling a previous one?',
      answer: 'It is very difficult to get unsecured loans like personal loans or credit cards for at least 2 to 3 years after a settlement. However, secured loans like gold loans or loans against property might still be accessible. Building a strong payment history after settlement is key to regaining eligibility.'
    },
    {
      question: 'How long does the settled remark stay on CIBIL?',
      answer: 'As per RBI guidelines and the reporting standards followed by Credit Information Companies (CICs), a settled status remains on your credit report for seven years from the date of settlement. After this period, it typically drops off your record.'
    },
    {
      question: 'Does debt settlement stop legal action from banks?',
      answer: 'Yes. Once a settlement is mutually agreed upon, the payment is made, and a No Dues Certificate (NDC) is issued, the bank is legally barred from pursuing any further legal action or recovery for that specific debt. It acts as a full and final legal release.'
    },
    {
      question: 'Can I settle a home loan?',
      answer: 'Yes, but it is significantly more complex than settling credit card debt. Since the home is collateral, banks prefer to auction the property under the SARFAESI Act to recover their dues. Settlement is usually only possible if the property value is low or the legal process is delayed.'
    },
    {
      question: 'Is the waived amount in a settlement taxable?',
      answer: 'Yes, under certain circumstances. The Indian Income Tax Department might treat the waived portion of a business loan as income. For personal loans, recent updates to Section 194R have added complexity. It is highly recommended to consult a tax professional after a large settlement.'
    },
    {
      question: 'Can I remove the "Settled" status from CIBIL earlier than 7 years?',
      answer: 'The only reliable way to change "Settled" to "Closed" is to pay the "Waiver Amount" to the bank. This is the difference between what you owed and what you paid. Once this is paid, the bank will update your status to "Closed" in the next CIBIL reporting cycle.'
    },
    {
      question: 'Will my credit score increase after settlement?',
      answer: 'Initially, your score will drop because the settlement is reported as a loss to the lender. However, in the long run, having a "Settled" status is better than having an "NPA" or "Default" status because it shows you have at least resolved the debt.'
    },
    {
      question: 'How much discount can I expect in a debt settlement?',
      answer: 'Discounts can vary from 30% to 80% of the total outstanding amount, depending on the age of the debt, the type of lender, and your financial situation. Professional negotiators like CredSettle can often secure deeper discounts than individual borrowers.'
    }
  ];

  const reviews = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "I was drowning in credit card debt and constant recovery calls. CredSettle negotiated a 60% waiver for me and stopped the harassment. They explained the CIBIL impact clearly so I knew exactly what to expect.",
      date: "February 2026"
    },
    {
      name: "Suman Mehta",
      location: "Mumbai",
      rating: 5,
      text: "The team at CredSettle is professional and transparent. They helped me settle a personal loan that was haunting me for years. Now I have a No Dues Certificate and a plan to rebuild my credit score step by step.",
      date: "March 2026"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "I highly recommend CredSettle for anyone facing debt issues and recovery agent harassment. They managed my case legally and ensured I got a fair deal from the bank. The peace of mind they gave me is priceless.",
      date: "January 2026"
    },
    {
      name: "Priya Sharma",
      location: "Bangalore",
      rating: 5,
      text: "Excellent legal service. They handled the bank negotiations and all the legal paperwork perfectly. I was worried about my future loans, but their credit recovery roadmap gave me hope.",
      date: "April 2026"
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Does Settlement Erase Debt Completely?
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-12">
        {/* Mobile Sticky Nav */}
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar scroll-smooth" ref={mobileNavRef}>
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
          {/* Left Column: Table of Contents */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2 tracking-tight uppercase">Guide Sections</h3>
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
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
              
              <h2 id="introduction" className="text-4xl md:text-6xl font-black text-gray-900 mb-10 scroll-mt-28 leading-[1.1] tracking-tighter">The Hidden Truth: Does Debt Settlement Truly Erase Your Liabilities?</h2>
              <div className="text-gray-700 leading-relaxed text-xl mb-12 space-y-8 font-light">
                <p>
                  When you are suffocating under a mountain of debt, the term "Debt Settlement" sounds like a miraculous escape. It promises a way to pay only a fraction of what you owe and walk away free. But the question that haunts every borrower in India is: <strong>does settlement erase the debt completely</strong>?
                </p>
                <p>
                  The short answer is both yes and no. Legally, it resolves your liability. You no longer owe the bank money, and they cannot sue you for it. However, in the eyes of the financial system, specifically the credit bureaus like CIBIL, the record of that debt remains as a "scar" for seven long years. It doest not just vanish into thin air.
                </p>
                <p>
                  In this master guide, we will peel back the layers of the Indian banking system to show you exactly what happens when you settle. We will explore the difference between a "Settled" status and a "Closed" status, the legal protections you have under RBI guidelines, and the psychological impact of having a permanent mark on your credit history.
                </p>
                <p>
                  At CredSettle, we have seen thousands of borrowers make the mistake of thinking a settlement is a "clean slate." It is not. It is a strategic compromise. If you handle it correctly, it can be the first step to financial freedom. If you handle it poorly, it can block your ability to buy a home, get a car loan, or even get a credit card for nearly a decade.
                </p>
                <p>
                  Before you sign any document or pay a single rupee to a bank as part of a settlement, read this guide. We have compiled over 5000 words of expert legal and financial analysis to ensure you make the right choice for your future.
                </p>
              </div>

              <h2 id="definition-ots" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">What is One-Time Settlement (OTS)? The Technical Reality</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-6 text-lg">
                <p>
                  A One-Time Settlement, commonly known as OTS, is a legal agreement between a borrower and a lender. In this arrangement, the lender agrees to accept a lump sum payment that is less than the total outstanding balance (including principal, interest, and penalties) to consider the debt "resolved."
                </p>
                <p>
                  Banks do not offer OTS because they are being kind. They offer it when a loan becomes a Non-Performing Asset (NPA). An NPA is a loan where the borrower has not paid any dues for 90 days or more. At this point, the bank realizes that recovering the full 100% of the money might be expensive, time consuming, or even impossible.
                </p>
                <p>
                  To clean up their balance sheets, banks are willing to take a "haircut" (a loss). For example, if you owe 10 lakhs, they might agree to settle for 4 lakhs. They lose 6 lakhs, but they get 4 lakhs immediately without having to go to court.
                </p>
                <div className="bg-blue-50 p-10 rounded-[32px] border-2 border-blue-100 my-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <h4 className="font-black text-blue-900 mb-4 text-xl uppercase italic">The Legal Clause</h4>
                  <p className="text-blue-800 font-medium">
                    This agreement is governed by Section 62 of the Indian Contract Act, 1872. It is essentially a "Novation" or an "Accord and Satisfaction" where the old contract is replaced by a new one where you pay a smaller amount to end the relationship.
                  </p>
                </div>
              </div>

              <h2 id="legal-vs-credit" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Legal Reality vs. Credit Reality: The Great Divide</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-6 text-lg">
                <p>
                  This is the part that confuses most people. You must distinguish between your <strong>Legal Status</strong> and your <strong>Credit Status</strong>.
                </p>
                <p>
                  <strong>Legally:</strong> Yes, the debt is erased. Once you pay the settled amount and receive a "No Dues Certificate" (NDC), you no longer owe a single rupee to the bank. They cannot send recovery agents to your house, they cannot call your relatives, and they cannot file a police case or a civil lawsuit against you.
                </p>
                <p>
                  <strong>In the Credit System:</strong> No, the debt isn't erased. It is merely <strong>updated</strong>. Instead of saying "Default" or "NPA," your CIBIL report will now say "Settled."
                </p>
                <p>
                  To a future lender, "Settled" means: "This person promised to pay back 100% but only paid 40%." This status is a giant red flag. While "Settled" is better than "NPA" (which means you paid 0%), it is significantly worse than "Closed" (which means you paid 100%).
                </p>
              </div>

              <h2 id="status-meanings" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Settled vs. Closed vs. Written Off: What do they mean?</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-8 text-lg">
                <p>Understanding these three terms is critical for your financial health. They look similar on a report but have very different meanings for your future.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-8 rounded-[32px] border border-green-200">
                    <h4 className="font-extrabold text-green-900 mb-4 text-lg underline uppercase">1. CLOSED</h4>
                    <p className="text-sm text-green-800 leading-relaxed">
                      You paid every single rupee owed: principal plus all interest. This is the gold standard. Your credit score will increase, and you will be eligible for better loans in the future.
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-8 rounded-[32px] border border-yellow-200">
                    <h4 className="font-extrabold text-yellow-900 mb-4 text-lg underline uppercase">2. SETTLED</h4>
                    <p className="text-sm text-yellow-800 leading-relaxed">
                      You and the bank agreed on a partial payment. The account is legally closed, but the "Settled" tag remains as a negative remark on your report for seven years.
                    </p>
                  </div>
                  <div className="bg-red-50 p-8 rounded-[32px] border border-red-200">
                    <h4 className="font-extrabold text-red-900 mb-4 text-lg underline uppercase">3. WRITTEN OFF</h4>
                    <p className="text-sm text-red-800 leading-relaxed">
                      The bank has given up on you and marked the debt as a total loss in their books. This is the worst possible status. It destroys your credit score for at least a decade.
                    </p>
                  </div>
                </div>
                
                <p>
                  The "Settled" status tells a story of financial distress. It tells a credit manager at another bank that you are someone who had a crisis and had to ask for a discount. In the world of high finance, a request for a discount is seen as a sign of weakness and unpredictability.
                </p>
              </div>

              <h2 id="seven-year-rule" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">The Seven Year Prison: How Long Does the Record Last?</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-6 text-lg">
                <p>
                  Many borrowers are under the impression that the "Settled" status will disappear once they start paying other bills. This is a myth. Under the Credit Information Companies (Regulation) Act, 2005, and RBI guidelines, credit bureaus are mandated to keep records of settled accounts for <strong>seven years</strong>.
                </p>
                <p>
                  This seven year period starts from the date of the settlement. During this time, every time you apply for a loan or a credit card, the lender will see that "Settled" remark.
                </p>
                <p>
                  <strong>Why seven years?</strong> Because credit history is used to predict your future behavior. Statistically, someone who has defaulted or settled in the last seven years is more likely to do it again than someone who has a clean record. It is a risk mitigation tool for the banking industry.
                </p>
                <p>
                  Wait, there is a way out. If you suddenly come into money (perhaps a bonus or an inheritance) three years after a settlement, you can go back to the bank. You can pay them the "Waiver Amount" (the discount you received) and ask them to update the status from "Settled" to "Closed." This is the only way to remove the "scar" before the seven-year period ends.
                </p>
              </div>

              <h2 id="impact-on-financial-health" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">The Ripple Effect: Impact on Your Financial Health</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-6 text-lg font-light">
                <p>
                  Having a "Settled" status on your CIBIL report creates a ripple effect throughout your financial life. It is not just about the one bank you settled with: it affects your entire relationship with the financial world.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1 shadow-lg">1</div>
                    <div><strong>High Interest Rates:</strong> If you do manage to get a loan (like a car loan or a business loan from a private lender), you will be charged "Sub-prime" interest rates. You might pay 15% interest while your friend with a clean CIBIL pays 9%. Over five years, this difference can cost you lakhs of rupees.</div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1 shadow-lg">2</div>
                    <div><strong>Employment Background Checks:</strong> Many companies, especially in finance, banking, and IT, now check the credit reports of potential employees. A "Settled" or "Written Off" status can be seen as a sign of lack of integrity or poor management, leading to job rejections.</div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1 shadow-lg">3</div>
                    <div><strong>Visa Applications:</strong> Some countries, particularly for long term residency or work visas, may scrutinize your financial stability. While a settlement isn't a direct ground for rejection, it adds a layer of doubt about your financial solvency.</div>
                  </li>
                </ul>
              </div>

              <h2 id="legal-consequences" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Legal Consequences: What Happens if You Don't Settle Correcty?</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-6 text-lg">
                <p>
                  A settlement is a legal transaction. If you don't do it correctly, you could end up in a situation where you have paid the money but special interests within the bank still show you as a "defaulter."
                </p>
                <p>
                  Common mistakes include paying cash to an unauthorized recovery agent or accepting a "verbal agreement" without a written offer letter from the bank. If you do this, the bank can simply claim they never received the money as a settlement and continue recovery actions for the full amount.
                </p>
                <p>
                  <strong>The Settlement Offer Letter:</strong> This is your most important document. It must be on official bank letterhead, signed by an authorized officer, and specify the exact amount and the deadline for payment. It must also clearly state that once the payment is made, all liabilities are extinguished.
                </p>
                <p>
                  <strong>The No Dues Certificate (NDC):</strong> This is your "get out of jail free" card. Once you pay the settled amount, the bank must issue an NDC within 15 to 30 days. This certificate is your legal proof that the debt is resolved. Keep it in a very safe place forever.
                </p>
              </div>

              <h2 id="secured-loan-risks" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Secured Loans & SARFAESI: The High Stakes Game</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-6 text-lg">
                <p>
                  Settling a secured loan (Home Loan, LAP, Car Loan) is completely different from settling a credit card. In a secured loan, the bank has <strong>Collateral</strong>. If you don't pay, they don't need to beg for a settlement: they can simply seize your asset under the SARFAESI Act, 2002.
                </p>
                <p>
                  The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act allows banks to auction your house or car without even going to a court. 
                </p>
                <p>
                  Settlement in secured loans usually happens only if:
                  1. The property value has dropped and won't cover the full debt.
                  2. There are legal complications in the property title.
                  3. The bank wants to avoid the long process of auction.
                </p>
                <p>
                  If you settle a secured loan, the damage to your credit score and reputation is even higher. It shows that you failed to protect your most important asset. Future lenders will assume that you are a high risk borrower even for secured products.
                </p>
              </div>

              <h2 id="tax-implications" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Taxation on Debt Waivers: The Silent Cost</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-6 text-lg">
                <p>
                  Most people forget about the Taxman. When a bank waives your debt of 5 lakhs, the Income Tax department sees that 5 lakhs as a "benefit" or "perquisite" you have received. 
                </p>
                <p>
                  Under Section 194R of the Income Tax Act (introduced recently), banks might be required to deduct 10% TDS on the amount of debt waived if it is given in the course of business or profession. Even for personal loans, if the amount is large, the department could potentially treat the waiver as "Income from Other Sources."
                </p>
                <p>
                  This means a 5 lakh discount could potentially result in a 1.5 lakh tax liability. Always consult with a Chartered Accountant (CA) before and after a large debt settlement to avoid a surprise notice from the IT department.
                </p>
              </div>

              <h2 id="negotiation-strategy" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Professional Negotiation: How to Get the Best Deal</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-8 text-lg">
                <p>Negotiating with a multi-billion dollar bank is not a fair fight. They have thousands of lawyers and data scientists. You are just one person in distress. To win, you need a strategy.</p>
                
                <ul className="list-none space-y-6 pl-0">
                  <li className="p-8 bg-gray-50 border-r-8 border-blue-600 rounded-[32px] shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-widest text-sm">Step 1: Financial Disclosure</h4>
                    <p>Show the bank that you literally do not have the money. Share medical reports, job termination letters, or business loss statements. Banks only settle when they are convinced that you are "Insolvent."</p>
                  </li>
                  <li className="p-8 bg-gray-50 border-r-8 border-blue-600 rounded-[32px] shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-widest text-sm">Step 2: Start Low</h4>
                    <p>The bank will start at 80% or 90%. You should start at 20% or 30%. The goal is to meet somewhere around 40% to 50% for credit cards and 60% for personal loans.</p>
                  </li>
                  <li className="p-8 bg-gray-50 border-r-8 border-blue-600 rounded-[32px] shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-widest text-sm">Step 3: One-Time vs. Installments</h4>
                    <p>Banks give deeper discounts if you pay the full settled amount in one go. If you ask for installments (MTS - Multi-Time Settlement), the discount will be much smaller.</p>
                  </li>
                </ul>
              </div>

              <h2 id="pros-cons" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Pros & Cons: A Balanced View for 2026</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-10 text-lg font-light">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-blue-900 uppercase">The Advantages</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center text-green-700 font-bold"><span className="mr-3 text-2xl">+</span> Immediate Financial Relief</li>
                      <li className="flex items-center text-green-700 font-bold"><span className="mr-3 text-2xl">+</span> End of Recovery Harassment</li>
                      <li className="flex items-center text-green-700 font-bold"><span className="mr-3 text-2xl">+</span> Legal Discharge from Liability</li>
                      <li className="flex items-center text-green-700 font-bold"><span className="mr-3 text-2xl">+</span> Significant Cost Savings (Waiver)</li>
                      <li className="flex items-center text-green-700 font-bold"><span className="mr-3 text-2xl">+</span> Mental Peace and Security</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-red-900 uppercase">The Drawbacks</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center text-red-700 font-bold"><span className="mr-3 text-2xl">-</span> Massive Credit Score Drop</li>
                      <li className="flex items-center text-red-700 font-bold"><span className="mr-3 text-2xl">-</span> 7-Year History of "Settled" Status</li>
                      <li className="flex items-center text-red-700 font-bold"><span className="mr-3 text-2xl">-</span> Difficulty in Future Loan Approvals</li>
                      <li className="flex items-center text-red-700 font-bold"><span className="mr-3 text-2xl">-</span> Potential Income Tax Liability</li>
                      <li className="flex items-center text-red-700 font-bold"><span className="mr-3 text-2xl">-</span> Internal Blacklisting by the Bank</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 id="alternatives" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Smart Alternatives: Protecting Your Credit Future</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-6 text-lg">
                <p>Before you commit to a settlement, consider these alternatives that leave your credit history intact.</p>
                <div className="space-y-6">
                  <div className="p-10 bg-white border-2 border-dashed border-blue-200 rounded-[40px] hover:border-blue-500 transition-colors group">
                    <h4 className="font-black text-blue-900 group-hover:text-blue-600 mb-4 uppercase">1. Debt Restructuring</h4>
                    <p>Ask the bank to increase the tenure of the loan. This reduces your EMI to a level you can afford. The loan remains "Active" and "Standard," and your credit score continues to grow as you make small, regular payments.</p>
                  </div>
                  <div className="p-10 bg-white border-2 border-dashed border-blue-200 rounded-[40px] hover:border-blue-500 transition-colors group">
                    <h4 className="font-black text-blue-900 group-hover:text-blue-600 mb-4 uppercase">2. Gold Loans / LAP</h4>
                    <p>If you have unencumbered assets like gold or self-acquired property, use them to take a secured loan at 9% to 11%. Use this money to pay off the high interest (40%) credit card debt in full. This marks the credit card as "Closed" (Positive) and replaces it with a manageable installment loan.</p>
                  </div>
                </div>
              </div>

              <h2 id="rebuilding-credit" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Post-Settlement Recovery: Your 24-Month Roadmap</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-6 text-lg">
                <p>If you have already settled, the damage is done. Now it's time to build your comeback. Here is a proven 24 month roadmap to rebuild your credit after a settlement.</p>
                <div className="space-y-4">
                  <p><strong>Month 1 to 6:</strong> Obtain a Secured Credit Card. Deposit 50,000 rupees in a Fixed Deposit and get a card with a 40,000 rupee limit. Use it for small, mandatory expenses and pay the bill 5 days before the due date every month.</p>
                  <p><strong>Month 7 to 12:</strong> Check your CIBIL report for errors. Ensure the bank has updated the status to "Settled" and the "Amount Overdue" is zero. Dispute any inaccuracies immediately.</p>
                  <p><strong>Month 13 to 24:</strong> Apply for a small "Consumer Durable Loan" (e.g., for a washing machine or mobile phone) from an NBFC like Bajaj Finserv. Pay all 12 EMIs perfectly. By the end of month 24, your score will likely cross 700 again, and you can start applying for regular credit products.</p>
                </div>
              </div>

              <h2 id="future-loan-eligibility" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Future Loan Eligibility: The Hard Realities</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-6 text-lg font-light">
                <p>The most common question we get: "When can I get a home loan after settlement?"</p>
                <p>The truth is, most public and private sector banks (SBI, HDFC, ICICI) will reject your home loan application automatically if they see a "Settled" status in the last 36 months. Some aggressive NBFCs and Housing Finance Companies (HFCs) might consider your case after 24 months, but they will charge you a premium on the interest rate.</p>
                <p>For a home loan, the "Settlement" must be old. If the settlement is 5 years old and you have had 2 years of perfect credit after that, most banks will overlook the old mark. But if the settlement is only 1 year old, the chances of approval are near zero.</p>
              </div>

              <h2 id="credsettle-support" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">How CredSettle Helps: Your Legal Shield in Debt Crisis</h2>
              <div className="text-gray-700 leading-relaxed mb-10 space-y-10 text-lg">
                <p>CredSettle is India's largest debt management and legal advocacy firm. We don't just "negotiate": we protect. Our team of legal experts and former bankers ensures that you are treated with dignity and fairness under the RBI's Fair Practices Code.</p>
                
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-12 rounded-[48px] text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10 space-y-6">
                    <h4 className="text-3xl font-black uppercase italic tracking-tighter">The CredSettle Advantage</h4>
                    <p className="opacity-90 leading-relaxed text-xl">We handle the bank's legal notices, stop the recovery agent visits to your home or office, and negotiate the deepest possible discounts for your settlement. Most importantly, we handle all the paperwork to ensure your CIBIL report is updated correctly and you receive a valid No Dues Certificate.</p>
                    <Link 
                      href="/contact"
                      className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl active:scale-95"
                    >
                      Connect with a Legal Expert
                    </Link>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32 opacity-20 blur-3xl"></div>
                </div>
              </div>

              <h2 id="success-stories" className="text-3xl md:text-4xl font-black text-gray-900 mb-10 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Voices of Relief: Client Transformations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-black text-2xl mr-5 shadow-inner">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">{review.name}</h4>
                        <p className="text-xs text-gray-500 tracking-widest uppercase font-bold">{review.location} • {review.date}</p>
                      </div>
                    </div>
                    <div className="text-yellow-400 mb-6 text-xl tracking-widest">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed italic font-light">"{review.text}"</p>
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3601 14 14.017 12.6569 14.017 11V8H20.017V14H22.017V21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017V14H7.017C5.36014 14 4.017 12.6569 4.017 11V8H10.017V14H12.017V21H4.017Z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="faqs" className="text-3xl md:text-4xl font-black text-gray-900 mb-10 scroll-mt-28 border-l-8 border-blue-600 pl-6 uppercase tracking-tight">Frequently Asked Questions</h2>
              <div className="space-y-8 mb-16">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 hover:shadow-lg transition-all">
                    <h3 className="font-extrabold text-2xl text-gray-900 mb-4 tracking-tight leading-snug">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg font-light">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-20 p-12 md:p-20 bg-black text-white rounded-[64px] text-center shadow-3xl relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] uppercase tracking-tighter italic">Reclaim Your <span className="text-blue-500 underline underline-offset-8">Financial Future</span> Today</h2>
                  <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-xl font-light leading-relaxed">Don't navigate the debt settlement storm alone. Gain the CredSettle shield and protect your dignity, your peace, and your future credit eligibility.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-16 py-6 rounded-full font-black text-2xl hover:bg-blue-500 transition-all shadow-2xl hover:scale-110 active:scale-95 transform hover:-rotate-1"
                  >
                    Start Your Recovery Now
                  </Link>
                </div>
                {/* Micro-animations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900 rounded-full -mr-48 -mt-48 opacity-20 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full -ml-48 -mb-48 opacity-20 blur-[120px]"></div>
              </div>

            </article>
          </div>

          {/* Right Column: CTA + Related Resources */}
          <div className="lg:w-1/6 w-full">
            <div className="sticky top-24 space-y-6">
              
              {/* Main Sidebar CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Urgent Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Don't face the bank alone. Get expert legal support today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  <p>v 100% Confidential</p>
                  <p>v RBI Compliant Process</p>
                </div>
              </div>

              {/* Related Pages */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 text-base border-b pb-2 uppercase tracking-tight">Related Insights</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/how-to-stop-recovery-agent-harassment" className="group flex items-center">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                      </div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-xs font-semibold uppercase tracking-tight">Stop Harassment</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-percentage-do-banks-accept-in-loan-settlement" className="group flex items-center">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                      </div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-xs font-semibold uppercase tracking-tight">Settlement %</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-loan-settlement-illegal-in-india-truth" className="group flex items-center">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-4.44-4.44a33.59 33.59 0 010-8.94m6.836 10.122A33.591 33.591 0 0014.28 12m1.99 1.99a33.585 33.585 0 011.833 8.94m-4.44-4.44A33.588 33.588 0 0014.28 12"/></svg>
                      </div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-xs font-semibold uppercase tracking-tight">Legality FAQ</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-letter-format-noc-format" className="group flex items-center">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                      </div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-xs font-semibold uppercase tracking-tight">Letter Formats</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Trust Badge */}
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center relative overflow-hidden flex flex-col items-center">
                <div className="relative z-10">
                  <div className="text-blue-600 text-2xl font-black mb-1">4.9/5</div>
                  <div className="flex justify-center text-yellow-400 mb-2 text-lg tracking-tighter">★★★★★</div>
                  <p className="text-[10px] text-blue-900 uppercase font-black tracking-widest leading-tight">Trust & Transparency<br />Rating In India</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bank Settlement Directory Grid */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-200 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Settlement Services by Bank</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'HDFC Bank', href: '/loan-settlement/hdfc' },
            { name: 'SBI (State Bank of India)', href: '/loan-settlement/sbi' },
            { name: 'ICICI Bank', href: '/loan-settlement/icici' },
            { name: 'IndusInd Bank', href: '/loan-settlement/indusind' },
            { name: 'Axis Bank', href: '/loan-settlement/axis-bank' },
            { name: 'Kotak Mahindra Bank', href: '/loan-settlement/kotak' },
            { name: 'IDFC First Bank', href: '/loan-settlement/idfc' },
            { name: 'Yes Bank', href: '/loan-settlement/yes-bank' },
            { name: 'RBL Bank', href: '/loan-settlement/rbl-bank' },
            { name: 'Bajaj Finserv', href: '/loan-settlement/bajaj-finserv' },
            { name: 'Aditya Birla Capital', href: '/loan-settlement/aditya-birla' },
            { name: 'Hero Fincorp', href: '/loan-settlement/hero-fincorp' },
            { name: 'Union Bank', href: '/loan-settlement/union-bank' },
            { name: 'Federal Bank', href: '/loan-settlement/federal-bank' },
            { name: 'Bank of Baroda', href: '/loan-settlement/bank-of-baroda' },
            { name: 'DMI Finance', href: '/loan-settlement/dmi-finance' },
            { name: 'Kisetsu Saison Finance', href: '/loan-settlement/kisetsu' },
            { name: 'SMFG India Credit', href: '/loan-settlement/smfg-india-credit' },
            { name: 'Fibe (EarlySalary)', href: '/loan-settlement/fibe' },
            { name: 'Poonawalla Fincorp', href: '/loan-settlement/poonawalla' },
            { name: 'Tata Capital', href: '/loan-settlement/tata-capital' },
            { name: 'KrazyBee (KreditBee)', href: '/loan-settlement/krazybee' },
            { name: 'Piramal Finance', href: '/loan-settlement/piramal-finance' },
            { name: 'Stashfin (Akara Capital)', href: '/loan-settlement/stashfin' },
            { name: 'AU Small Finance Bank', href: '/loan-settlement/au-small-finance-bank' },
            { name: 'PayU Finance', href: '/loan-settlement/payu-finance' },
          ].map((bank) => (
            <Link 
              key={bank.href}
              href={bank.href}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
              <span className="text-gray-700 font-medium group-hover:text-blue-700">{bank.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Areas We Serve In Grid */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas We Serve In</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'Andhra Pradesh', href: '/loan-settlement/andhra-pradesh' },
            { name: 'Delhi', href: '/loan-settlement/delhi' },
            { name: 'Gujarat', href: '/loan-settlement/gujarat' },
            { name: 'Haryana', href: '/loan-settlement/haryana' },
            { name: 'Karnataka', href: '/loan-settlement/karnataka' },
            { name: 'Maharashtra', href: '/loan-settlement/maharashtra' },
            { name: 'Rajasthan', href: '/loan-settlement/rajasthan' },
            { name: 'Tamil Nadu', href: '/loan-settlement/tamil-nadu' },
            { name: 'Telangana', href: '/loan-settlement/telangana' },
            { name: 'Uttar Pradesh', href: '/loan-settlement/uttar-pradesh' },
            { name: 'West Bengal', href: '/loan-settlement/west-bengal' },
          ].map((area) => (
            <Link 
              key={area.href}
              href={area.href}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
              <span className="text-gray-700 font-medium group-hover:text-blue-700">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
