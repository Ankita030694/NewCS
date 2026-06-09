'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SettleSelfClient() {
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
    { id: 'what-is-diy', label: 'What is DIY Settlement?' },
    { id: 'advantages', label: 'Advantages' },
    { id: 'financial-assessment', label: 'Financial Assessment' },
    { id: 'negotiation-timing', label: 'Negotiation Timing' },
    { id: 'initiating-contact', label: 'Initiating Contact' },
    { id: 'negotiation-mastery', label: 'Negotiation Mastery' },
    { id: 'written-confirmation', label: 'Written Confirmation' },
    { id: 'payment-closure', label: 'Payment & Closure' },
    { id: 'legal-rights', label: 'Legal Rights' },
    { id: 'cibil-impact', label: 'CIBIL Impact' },
    { id: 'professional-help', label: 'Professional Help' },
    { id: 'resources', label: 'Helpful Resources' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Is it legal to settle my own debts in India?',
      answer: 'Yes, it is entirely legal to settle your own debts in India. You have the right to negotiate directly with your creditors or their authorized collection agencies to reach an agreement that satisfies the debt for less than the full amount owed.'
    },
    {
      question: 'Will the bank always agree to a settlement offer?',
      answer: 'Banks are not legally obligated to accept a settlement offer. However, they often agree to it if they believe it is the most efficient way to recover at least a portion of the debt, especially if the borrower is facing genuine financial hardship.'
    },
    {
      question: 'How much can I realistically save through DIY debt settlement?',
      answer: 'Savings can vary significantly, often ranging from 30% to 70% of the total outstanding amount. By doing it yourself, you also save on the service fees typically charged by third party companies, which can be 15% to 25% of the settled amount.'
    },
    {
      question: 'Does debt settlement ruin my CIBIL score forever?',
      answer: 'A settlement will negatively impact your CIBIL score in the short term and will be marked as "Settled" on your report for several years. However, this is not permanent. With responsible financial behavior after the settlement, you can gradually rebuild your credit score.'
    },
    {
      question: 'What is the most important document in a debt settlement?',
      answer: 'The most critical document is the formal settlement letter or "Sanction Letter" issued by the creditor. You should never make a payment until you have this letter in writing, clearly stating the agreed amount and confirming that the debt will be fully resolved.'
    },
    {
      question: 'Can I settle a debt that has already gone to court?',
      answer: 'Yes, you can still settle a debt even if legal proceedings have started. In fact, many banks prefer settling during the court process, often through Lok Adalats, to avoid long drawn out litigation.'
    },
    {
      question: 'Should I stop making payments while negotiating a settlement?',
      answer: 'Stopping payments is a risky strategy that can lead to increased interest, late fees, and aggressive collection efforts. While many settlements occur after a period of non payment, you should understand the risks of default before choosing this path.'
    },
    {
      question: 'What happens to the remaining balance after a settlement?',
      answer: 'Once a settlement is completed and you have a closure letter, the remaining balance is "forgiven" or written off by the creditor. You are no longer legally liable for that portion of the debt.'
    },
    {
      question: 'Are there tax implications for debt settlement in India?',
      answer: 'Under current Indian tax laws, the forgiven portion of a personal debt is generally not considered taxable income for individuals, unlike in some other countries. However, it is always wise to consult with a tax professional for your specific situation.'
    },
    {
      question: 'How long does the DIY debt settlement process take?',
      answer: 'The process can take anywhere from a few weeks to several months, depending on the responsiveness of the creditor and the complexity of your financial situation. Patience and persistence are key.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
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
                    DIY Debt Settlement Guide
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-12">
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

          <div className="lg:w-3/5 w-full">
            <article className="prose prose-blue max-w-none bg-white p-8 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Navigating Debt Settlement on Your Own: A Comprehensive Guide</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  The burden of overwhelming debt can feel like an anchor holding you back from your financial future. Whether it is credit card balances, personal loans, or medical bills, the stress of constant collection calls and growing interest can be paralyzing. However, a common question many individuals face is: <strong>"Can I settle my debts without using a third-party company?"</strong> The short answer is a resounding yes. Negotiating directly with your creditors is not only possible but can also be an empowering way to take control of your financial destiny while saving significant money on agency fees.
                </p>
                <p>
                  At <strong>CredSettle</strong>, we believe in transparency and empowering consumers with the knowledge they need to make informed decisions. While professional services can offer specialized expertise, understanding the fundamentals of direct negotiation is the first step toward financial freedom. By learning the strategies used by the pros, you can approach your creditors with confidence and reach an agreement that works for your unique situation. This guide will walk you through the entire process of DIY debt settlement, from initial assessment to final closure.
                </p>
                <p>
                  Collaborating with legal experts like <strong>Amalegalsolutions</strong> can provide you with the legal backing necessary to ensure your rights are protected throughout the negotiation. Legal counsel can help you understand the nuances of the Negotiable Instruments Act and ensure that any agreement you sign is legally sound and binding. Furthermore, resources like <strong>SettleLoans</strong> offer valuable tools for managing your debt portfolio and preparing for the settlement process. Together, these elements form a robust support system for anyone looking to navigate the path of debt resolution independently.
                </p>
                <p>
                  Direct negotiation requires patience, persistence, and a clear understanding of your financial limits. It is about building a bridge between what you owe and what you can realistically pay, all while maintaining a professional and firm stance with your creditors. In the following sections, we will explore the detailed steps, strategies, and considerations involved in successfully settling your debts without the need for a middleman.
                </p>
              </div>

              <h2 id="what-is-diy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Understanding DIY Debt Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  DIY debt settlement is the process where a borrower negotiates directly with their creditors to pay a lump sum amount that is less than the total outstanding balance. Once this amount is paid, the creditor agrees to consider the debt fully satisfied and releases the borrower from any further obligation. This approach is often used when a borrower is in deep financial distress and can no longer afford the regular monthly payments.
                </p>
                <p>
                  In the Indian context, banks and financial institutions are often open to settlements because it allows them to recover a portion of a non performing asset without the costs and time associated with lengthy legal battles. For the borrower, it provides a way to exit a cycle of debt that has become unmanageable. However, it is important to distinguish between debt settlement and debt management. While settlement involves reducing the total amount owed, management typically involves restructuring payments or reducing interest rates to make the full balance easier to pay off over time.
                </p>
                <p>
                  Successful DIY settlement hinges on your ability to prove genuine financial hardship. Creditors need to see that your inability to pay is not due to a lack of intent, but rather a significant change in your circumstances, such as job loss, a medical emergency, or business failure. When you can demonstrate this clearly, many creditors become more amenable to reaching a compromise.
                </p>
              </div>

              <h2 id="advantages" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Advantages of Direct Negotiation</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Why should you consider settling your own debts rather than hiring a company? There are several compelling reasons that make the DIY route attractive for many.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Cost Savings:</strong> This is the most obvious benefit. Third party debt settlement companies typically charge fees ranging from 15% to 25% of the total debt or the amount saved. By doing it yourself, every rupee you save stays in your pocket.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. Full Control:</strong> You are the one making the decisions. You decide which offers to accept and which to reject. There is no middleman interpreting your situation or potentially miscommunicating your needs to the creditor.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>3. Direct Communication:</strong> Speaking directly with your bank can sometimes build more rapport than a sterile corporate interaction. When you tell your story personally, it can occasionally lead to more sympathetic ears in the hardship department.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>4. Faster Process:</strong> Sometimes, third party companies have backlogs or specific cycles for negotiation. When you are doing it yourself, you can move as fast as your finances and the creditor allow.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>5. Empowerment:</strong> Successfully navigating a debt settlement provides a tremendous sense of accomplishment and financial literacy that will serve you well for the rest of your life.
                  </li>
                </ul>
              </div>

              <h2 id="financial-assessment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Step 1: Financial Assessment and Goal Setting</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Before you even pick up the phone to call a creditor, you must have a crystal clear picture of your financial situation. This is the foundation upon which your entire negotiation will be built. You cannot negotiate effectively if you do not know exactly what you can afford.
                </p>
                <p>
                  Start by listing every single debt you owe. Include the name of the creditor, the total balance, the interest rate, and the current status (current, 30 days late, in collections, etc.). Next, create a realistic budget of your monthly income and essential expenses like rent, groceries, and utilities. The difference between your income and these essentials is what you have available for debt resolution.
                </p>
                <p>
                  Most debt settlements require a lump sum payment. Do you have savings you can use? Can you sell an asset or borrow from a family member? Identifying your "settlement pot" is crucial. Once you know how much you have in total, you can allocate it across your different debts. A common goal is to aim for a settlement of 30% to 50% of the total balance, though this varies by creditor and the age of the debt.
                </p>
              </div>

              <h2 id="negotiation-timing" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Step 2: Identifying the Right Time to Negotiate</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Timing is everything in debt settlement. Banks are generally not interested in settling if you are still making your minimum payments on time. They only consider settlement as an option when it appears that they might not get paid at all.
                </p>
                <p>
                  Typically, the best time to start serious negotiations is when your debt is between 90 and 180 days past due. At this stage, the debt is likely approaching "charge off" status, which is a significant milestone for the bank’s accounting. They are often highly motivated to settle just before or just after this point to clean up their books.
                </p>
                <p>
                  Additionally, keep an eye out for "quarter end" or "financial year end" (March 31st in India). Bank employees and collection managers often have targets to meet during these times, making them more flexible and willing to accept lower offers to hit their recovery goals.
                </p>
              </div>

              <h2 id="initiating-contact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Step 3: Initiating Contact with Creditors</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When you are ready to reach out, do not just call the general customer service number. Ask to speak with the "hardship department," "settlement department," or "recovery manager." These are the individuals who actually have the authority to waive interest and negotiate the principal balance.
                </p>
                <p>
                  When you get through to the right person, be prepared with a concise "hardship statement." Briefly explain your situation: "I have been a loyal customer for five years, but due to a recent medical crisis, I can no longer afford the full payments. I want to resolve this debt and have a small amount of money available for a one time settlement."
                </p>
                <p>
                  Always remain calm, polite, and professional. Getting angry or defensive will only close doors. Remember, you are asking for a favor that also happens to benefit them. Keep a log of every call, including the date, time, the name of the person you spoke with, and exactly what was discussed. This trail of communication is vital if there are any future disputes.
                </p>
              </div>

              <h2 id="negotiation-mastery" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Step 4: Master the Art of Direct Negotiation</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Negotiation is a dance of offers and counter offers. Never accept the first offer the bank gives you. They will almost always start high. If you want to settle for 40%, start your offer at 20% or 25%. This gives you "room to move" during the conversation.
                </p>
                <p>
                  Use phrases like "This is the absolute maximum I can possibly borrow from my family to resolve this" or "I am speaking with all my creditors today, and I only have a limited amount of funds to go around. The first one to agree to a reasonable settlement gets paid." This creates a sense of urgency and competition among your creditors.
                </p>
                <p>
                  Be prepared for them to say no. That is part of the process. If they reject your offer, ask what they would be willing to accept. If their counter is still too high, politely end the call and say you will need to reconsider your options. Often, calling back a few days later and speaking to a different manager can yield a different result.
                </p>
              </div>

              <h2 id="written-confirmation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Step 5: The Critical Need for Written Confirmation</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  This is perhaps the most important rule of DIY debt settlement: <strong>NEVER SEND MONEY UNTIL YOU HAVE THE AGREEMENT IN WRITING.</strong> Oral promises over the phone are not legally binding and can be easily forgotten or denied by the bank later.
                </p>
                <p>
                  The settlement letter (often called a Sanction Letter or Settlement Agreement) must be on the bank's official letterhead and should include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your full name and account number.</li>
                  <li>The exact settlement amount agreed upon.</li>
                  <li>The deadline for the payment.</li>
                  <li>A clear statement that upon receipt of this payment, the debt will be considered settled and you will have no further liability.</li>
                  <li>A commitment to update the credit bureaus (like CIBIL) to reflect the settled status.</li>
                </ul>
                <p>
                  If a bank refuses to provide a written letter, do not proceed with the payment. This is a major red flag. Once you receive the letter, read it carefully to ensure it matches exactly what was discussed on the phone. If there are any discrepancies, ask for a revised letter before making the payment.
                </p>
              </div>

              <h2 id="payment-closure" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Step 6: Executing the Payment and Obtaining a Closure Letter</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Once you have the letter in hand, make the payment promptly and exactly as specified. It is best to use a traceable method like a Demand Draft, a cheque, or an online transfer. Keep the receipt or transaction confirmation as permanent proof of payment.
                </p>
                <p>
                  After the payment is processed, the bank should issue a "No Dues Certificate" or a "Closure Letter." This is your final proof that the account is closed. Do not assume the account is closed just because you paid the settlement amount. Follow up until you have this physical or digital document in your possession.
                </p>
                <p>
                  Finally, wait about 45 to 60 days and then check your credit report. Ensure that the account status has been updated to "Settled" or "Closed." If it still shows as "Active" or "Past Due," you will need to use your settlement letter and closure certificate to file a dispute with the credit bureau to get it corrected.
                </p>
              </div>

              <h2 id="legal-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Legal Rights and RBI Guidelines in India</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  As a borrower in India, you have specific rights protected by the Reserve Bank of India (RBI). Creditors and their collection agents are not allowed to harass you, use physical threats, or call you at unreasonable hours (typically between 7 PM and 8 AM). Understanding these rights is essential when you are negotiating on your own.
                </p>
                <p>
                  The RBI’s "Fair Practices Code" for lenders mandates that they must treat borrowers with dignity and respect. If you feel that a bank or its agents are violating these guidelines, you have the right to file a complaint with the bank's internal grievance cell and, if not resolved, escalate it to the Banking Ombudsman.
                </p>
                <p>
                  Having a basic understanding of the law can be a powerful shield during negotiations. When you mention that you are aware of your rights under the RBI guidelines, it often prompts more professional behavior from the collection team. For complex legal issues, consulting with <strong>Amalegalsolutions</strong> can ensure that you are fully protected from any predatory practices.
                </p>
              </div>

              <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Impact on CIBIL Score and Long-term Recovery</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  It is vital to be realistic about the impact of debt settlement on your credit score. When you settle a debt for less than the full amount, it will be marked as "Settled" on your CIBIL report. This is viewed less favorably by future lenders than a status of "Closed" (which means the debt was paid in full).
                </p>
                <p>
                  A settled status can make it difficult to get new loans or credit cards for a period of 2 to 3 years. However, having a settled account is still much better than having an "Active Default" or "Written Off" account. It shows that you took responsibility for your debt and reached a resolution.
                </p>
                <p>
                  The good news is that you can rebuild your credit. After your debts are settled, focus on building new, positive credit history. You might consider a "Secured Credit Card" (backed by a fixed deposit) as a tool to demonstrate responsible credit usage. Over time, as you make on time payments on new credit, the negative impact of the old settlement will fade.
                </p>
              </div>

              <h2 id="professional-help" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">When to Seek Professional Assistance</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While DIY debt settlement is possible, there are certain situations where seeking professional help is highly recommended. If you are facing multiple lawsuits, if your total debt is extremely high, or if you simply do not have the time and emotional energy to handle aggressive collectors, a professional service can be a lifesaver.
                </p>
                <p>
                  Professional firms like <strong>CredSettle</strong> have established relationships with banks and understand the "internal benchmarks" that banks use for settlements. They can often secure better deals than an individual might be able to on their own. Furthermore, they handle all the stressful communication, allowing you to focus on your personal and professional life.
                </p>
                <p>
                  Using a service like <strong>SettleLoans</strong> can help you organize your debts and provide a structured path toward resolution. If you decide that the DIY route is becoming too overwhelming, transitioning to a professional advisory service is a smart move to ensure you reach the finish line safely and efficiently.
                </p>
              </div>

              <h2 id="resources" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Helpful Resources for Debt Resolution</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To further your understanding and assist in your journey toward a debt free life, we recommend exploring the following resources:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                  <li className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                    <Link href="/loan-settlement" className="text-blue-600 font-semibold hover:underline">
                      Comprehensive Loan Settlement Services
                    </Link>
                  </li>
                  <li className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                    <span className="text-gray-500 font-semibold">
                      Step by Step Debt Settlement Process
                    </span>
                  </li>
                  <li className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                    <Link href="/what-is-npa" className="text-blue-600 font-semibold hover:underline">
                      Understanding Non Performing Assets (NPA)
                    </Link>
                  </li>
                  <li className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                    <span className="text-gray-500 font-semibold">
                      Credit Card Specific Settlement Guide
                    </span>
                  </li>
                  <li className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                    <span className="text-gray-500 font-semibold">
                      Know Your Rights Against Debt Harassment
                    </span>
                  </li>
                  <li className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                    <span className="text-gray-500 font-semibold">
                      Managing Your CIBIL Score Post Settlement
                    </span>
                  </li>
                </ul>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">User Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I managed to settle my 5 lakh credit card debt for just 1.5 lakhs by following the negotiation tips from CredSettle. It took three months of persistence, but it was worth every bit of effort."
                  </p>
                  <p className="font-bold text-blue-900">- Amit Verma, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The importance of the written settlement letter cannot be overstated. Amalegalsolutions helped me review my sanction letter and found a loophole that saved me from future trouble. Direct negotiation is the way to go!"
                  </p>
                  <p className="font-bold text-blue-900">- Priya Sharma, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "SettleLoans tools for financial assessment were amazing. I knew exactly what I could offer the bank before I even called them. Settled my personal loan at a 60% discount."
                  </p>
                  <p className="font-bold text-blue-900">- Rahul Gupta, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Doing it myself saved me nearly 40,000 in agency fees. If you have the patience and can stay professional, DIY settlement is definitely the best option for budget conscious people."
                  </p>
                  <p className="font-bold text-blue-900">- Sanjay Mehra, Pune</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was scared of collection calls, but learning my rights changed everything. I successfully negotiated a settlement for my medical bills and now I am finally debt free."
                  </p>
                  <p className="font-bold text-blue-900">- Meena Iyer, Chennai</p>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-slate-900 text-white rounded-[30px] text-center shadow-2xl overflow-hidden relative">
                <div className="z-10 relative">
                  <h2 className="text-3xl font-bold mb-4">Take the First Step Toward Financial Freedom</h2>
                  <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Whether you choose to settle on your own or with professional help, the most important thing is to start today. Your debt free future is waiting.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    Get a Free Debt Consultation
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>
          </div>

          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Direct Settle Support</h4>
                <p className="text-slate-300 mb-6 text-sm">Need help drafting your hardship letter or reviewing a bank offer? We are here to help.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-4 rounded-xl text-center hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Assistance
                </Link>
                <div className="mt-8 pt-6 border-t border-slate-700 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span>Expert Guidance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span>Legal Protection</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span>Zero Hidden Fees</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Related Guides</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Complete Settlement Guide</span>
                    </Link>
                  </li>


                  <li>
                    <Link href="/what-is-npa" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Understanding NPAs</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: Direct debt settlement has serious financial and credit implications. Always consult with a financial advisor or legal professional before making significant financial decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
