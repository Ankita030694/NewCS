'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function QuoteClient() {
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
    { id: 'what-is-settlement', label: 'Debt Settlement Basics' },
    { id: 'how-to-get-quote', label: 'Getting Your Quote' },
    { id: 'factors-affecting-quote', label: 'Pricing Factors' },
    { id: 'why-professional-help', label: 'Why Professionals?' },
    { id: 'impact-on-cibil', label: 'CIBIL Score Impact' },
    { id: 'choosing-provider', label: 'Choosing a Provider' },
    { id: 'step-by-step', label: 'The Settlement Journey' },
    { id: 'helpful-resources', label: 'Helpful Resources' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'How do I get an accurate quote for debt settlement services?',
      answer: 'To receive a precise quote, you must provide your total outstanding balance, the names of the banks involved, and the duration of your default. Most reputable agencies offer a free initial consultation to assess these factors and provide a tailored estimate of their service fees.'
    },
    {
      question: 'Is debt settlement available for all credit cards in India?',
      answer: 'Yes, most major credit card issuers in India, including HDFC, SBI, ICICI, and Axis Bank, have policies for debt settlement. However, approval is at the discretion of the bank and usually depends on your financial hardship and the age of the debt.'
    },
    {
      question: 'What percentage of my debt can I expect to settle for?',
      answer: 'Settlement amounts vary significantly. On average, you might settle for 30% to 50% of the total outstanding amount, though this depends on your negotiation skills and the specific bank policies. Working with experts can often secure better deals.'
    },
    {
      question: 'Do I have to pay upfront fees for a debt settlement quote?',
      answer: 'Legitimate debt relief companies in India typically do not charge upfront fees for providing a quote or an initial assessment. Be cautious of any service that demands large payments before any negotiation has taken place.'
    },
    {
      question: 'How does debt settlement affect my CIBIL score?',
      answer: 'Settling a debt will result in a "settled" status on your CIBIL report, which typically causes a drop in your score. However, for many people in a debt trap, this is a necessary step to stop the cycle of interest and eventually begin rebuilding their financial health.'
    },
    {
      question: 'How long does the debt settlement process take?',
      answer: 'The process can take anywhere from three to twelve months, depending on the number of accounts you have and the responsiveness of your creditors. The negotiation phase usually begins once you have saved enough funds to make a lump sum offer.'
    },
    {
      question: 'Can I settle my credit card debt on my own?',
      answer: 'Yes, you can contact your bank directly to request a settlement. However, many consumers find the process stressful due to collection calls and complex bank procedures, which is why they prefer hiring professional negotiators.'
    },
    {
      question: 'What documents are required to initiate a settlement?',
      answer: 'You will generally need your latest credit card statements, proof of income (such as salary slips or bank statements), and a hardship letter explaining why you are unable to pay the full amount.'
    },
    {
      question: 'Will debt settlement stop harassment from recovery agents?',
      answer: 'Professional debt settlement services often include legal assistance to handle communication with banks and recovery agents. This can significantly reduce the stress associated with frequent collection attempts.'
    },
    {
      question: 'What happens after I pay the settled amount?',
      answer: 'Once you pay the agreed amount, the bank should issue a "No Dues Certificate" or a closure letter. It is vital to ensure you receive this document directly from the bank to confirm that the account is closed and no further liability exists.'
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
                    Debt Settlement Quote
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
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Guide Sections</h3>
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Navigating Credit Card Debt: Why You Need a Debt Settlement Quote</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  In the modern financial landscape of India, credit cards have become an essential tool for managing daily expenses, large purchases, and emergency requirements. However, the convenience of plastic money often comes with a hidden risk. High interest rates, coupled with the ease of spending, can quickly lead even the most disciplined individual into a daunting debt trap. If you find yourself struggling to pay more than just the minimum due each month, it might be time to explore professional debt relief options.
                </p>
                <p>
                  Obtaining a <strong>quote for debt settlement services</strong> is the first step toward reclaiming your financial independence. Debt settlement is a negotiation process where you and your creditor agree to a lump sum payment that is less than the total amount you owe. This process is particularly effective for unsecured debts like credit cards, where the interest can accumulate at an alarming rate of 36% to 45% per annum. By seeking a quote, you are essentially asking for a roadmap that details how much you can potentially save and what the path to closure looks like.
                </p>
                <p>
                  The decision to settle your debt is never easy. It requires a careful assessment of your current financial health, your future goals, and the impact on your credit profile. Many consumers in cities like Mumbai, Delhi, and Bangalore are now turning to specialized platforms to understand their options. A professional quote provides clarity. It moves the conversation from vague anxiety to concrete numbers, helping you understand exactly what is required to put your credit card debt behind you for good.
                </p>
                <p>
                  In the following sections, we will delve into the technicalities of the settlement process, the factors that influence your personalized quote, and how to choose a service provider that prioritizes your interests. Whether you are dealing with a single card or multiple high-interest accounts, understanding the mechanics of debt settlement in the Indian context is vital for a successful outcome.
                </p>
              </div>

              <h2 id="what-is-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Understanding the Basics of Debt Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Debt settlement, often referred to as "One-Time Settlement" (OTS) in the Indian banking system, is a formal agreement between a borrower and a lender. The primary goal is to resolve an outstanding debt by paying a single, reduced amount. This is typically an option offered by banks when a borrower has defaulted on their payments for a significant period, usually more than 90 days, and the bank perceives that recovering the full amount is unlikely.
                </p>
                <p>
                  It is important to distinguish debt settlement from other relief measures like debt consolidation or debt restructuring. Debt consolidation involves taking a new, lower-interest loan to pay off multiple high-interest debts. While this simplifies your payments, you are still responsible for the full principal amount. On the other hand, debt settlement directly reduces the principal balance you owe. This makes it a powerful tool for those who are facing genuine financial hardship and cannot afford the original debt amount.
                </p>
                <p>
                  When you request a <strong>quote for debt settlement services</strong>, you are essentially hiring experts to handle this delicate negotiation for you. Banks are commercial entities, and their primary interest is recovering as much money as possible. A professional negotiator understands the internal policies of different banks and can present your case in a way that highlights your financial inability to pay the full amount, thereby increasing the chances of a favorable settlement offer.
                </p>
                <p>
                  The process is governed by various RBI guidelines and bank-specific policies. While the law does not mandate a bank to settle, the reality of NPAs (Non-Performing Assets) often makes settlement a practical choice for financial institutions. By accepting a settlement, the bank can recover a portion of the funds and close a problematic account, while you get the chance to move forward without the constant pressure of growing interest and collection attempts.
                </p>
              </div>

              <h2 id="how-to-get-quote" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How to Get a Quote for Your Credit Card Debt</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Getting a quote for debt settlement is a straightforward process, but it requires you to be organized and transparent about your financial situation. Most professional debt relief companies offer a free consultation phase where they gather the necessary data to provide you with an estimate. Here is how you can prepare for your first consultation and ensure you get an accurate quote.
                </p>
                <p>
                  The first step is to compile a complete list of your outstanding credit card debts. You will need to know the current balance for each card, including the principal, interest, and any late fees. It is also helpful to have your latest credit card statements ready. The more information you provide, the more accurate your quote will be. Experts will look at the age of the debt, as older defaults are often easier to settle than more recent ones.
                </p>
                <p>
                  Next, you will be asked about your current income and monthly expenses. This information is crucial because it helps the negotiator determine what a realistic settlement amount would be for you. If your income has recently decreased due to job loss, medical emergencies, or business failure, be sure to mention this. Banks are more likely to offer a settlement if they can see documented proof of financial hardship.
                </p>
                <p>
                  Once the debt relief agency has these details, they will analyze your portfolio against their database of successful settlements with various banks. They will then provide you with a quote that typically includes two parts: an estimate of the total amount you will need to pay the bank and the service fee charged by the agency for their negotiation and legal support. This quote serves as your financial plan for the coming months, allowing you to save specifically for your settlement goal.
                </p>
              </div>

              <h2 id="factors-affecting-quote" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Factors That Influence Your Debt Settlement Quote</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Not all debt settlement quotes are the same. Several variables can influence the final numbers you see on your assessment. Understanding these factors can help you set realistic expectations and choose the best strategy for your situation.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. The Total Outstanding Amount:</strong> Generally, higher balances have more room for percentage-based negotiation. If you owe a small amount, the bank might be less inclined to settle for a deep discount.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. The Type of Creditor:</strong> Different banks and NBFCs have different policies regarding settlements. Some private banks are known to be more flexible, while others might have stricter internal mandates for credit card recovery.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>3. The Duration of Default:</strong> A debt that has been in default for over six months is usually a better candidate for settlement than a debt that is only 30 days overdue. Banks prioritize closing older accounts.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>4. Your Demonstrated Hardship:</strong> If you can prove a significant life event that impacted your ability to pay, such as a medical crisis or business closure, the bank is more likely to accept a lower offer.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>5. Legal Status of the Debt:</strong> If the bank has already initiated legal proceedings or sent formal notices, the negotiation dynamic changes. Professional services with legal teams are essential in such cases.
                  </li>
                </ul>
                <p>
                  When you receive your quote, it will reflect these complexities. A professional agency will explain the reasoning behind their estimates, giving you a clear picture of the challenges and opportunities ahead. Remember that a quote is an estimate based on current market trends and past experiences, and the final settlement letter from the bank is the ultimate confirmation of the deal.
                </p>
              </div>

              <h2 id="why-professional-help" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Advantage of Using Professional Debt Relief Services</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While it is possible to negotiate with a bank on your own, most consumers find the process overwhelming. This is where professional debt settlement platforms come into play. In India, companies like <strong>credsettle</strong> have revolutionized the way borrowers handle their debt problems. These platforms provide a structured approach that combines financial negotiation with legal protection, ensuring that you are not bullied into unfair agreements.
                </p>
                <p>
                  Following <strong>credsettle</strong>, other notable players like <strong>amalegalsolutions</strong> and <strong>settleloans</strong> also provide specialized services for different types of financial distress. The primary advantage of using these services is their deep understanding of the banking hierarchy. They know who to talk to and how to present a settlement proposal that aligns with a bank's internal recovery targets. This expertise often results in significantly lower settlement amounts than an individual could achieve on their own.
                </p>
                <p>
                  Furthermore, professional services offer a buffer between you and the collection agents. The constant barrage of calls and visits can be mentally exhausting. By appointing a professional representative, you can often redirect these communications, allowing you to focus on rebuilding your life while the experts handle the technicalities. This peace of mind is often cited by clients as the most valuable part of the service.
                </p>
                <p>
                  Finally, these companies ensure that the settlement process is legally sound. They verify the authenticity of settlement letters, ensure that the final payment leads to a proper closure in the bank's records, and help you understand the long-term implications for your credit profile. With the help of specialists, you can avoid common pitfalls like paying money to unauthorized agents or accepting verbal promises that are never honored by the bank.
                </p>
              </div>

              <h2 id="impact-on-cibil" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Debt Settlement and Your CIBIL Score: What to Expect</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  One of the most frequent questions people ask when seeking a <strong>quote for debt settlement services</strong> is about their credit score. It is important to be realistic: settling a debt for less than what you owe will impact your CIBIL score. When a bank closes an account as "settled" rather than "closed," it indicates to future lenders that you did not pay the full amount of your obligation.
                </p>
                <p>
                  However, for many individuals, the CIBIL score is already damaged due to missed payments and high credit utilization. In such a scenario, remaining in a debt trap where interest keeps mounting is often worse for your long-term financial health than settling. A settlement stops the growth of the debt and provides a clear end date to your financial struggle. Once the debt is settled and you have your closure letter, you can begin the journey of rebuilding your score.
                </p>
                <p>
                  Rebuilding your credit after a settlement takes time and discipline. It usually involves staying debt-free for a period, ensuring any current utility bills are paid on time, and eventually taking small, secured credit options to demonstrate responsible behavior. Professional debt relief companies often provide guidance on this rebuilding process as part of their comprehensive service package.
                </p>
                <p>
                  In the grand scheme of things, a "settled" status is a temporary mark on your financial history. It is a tool for recovery, not a permanent exclusion from the financial system. By taking the step to settle today, you are choosing a path that leads back to financial stability, even if the road involves some initial challenges with your credit rating.
                </p>
              </div>

              <h2 id="choosing-provider" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How to Choose the Right Debt Settlement Provider</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  As the demand for debt relief grows in India, many new players have entered the market. Choosing the right provider is critical for your success. Here are some key things to look for when evaluating a company after receiving your initial quote.
                </p>
                <p>
                  Transparency is the most important factor. A reputable company will be clear about its fee structure, the potential risks, and the realistic outcomes you can expect. Beware of any company that guarantees a specific percentage of savings or promises to "fix" your credit score overnight. Debt settlement is a negotiation process, and there are no absolute guarantees until the bank issues a final letter.
                </p>
                <p>
                  Check the company’s reputation and track record. Look for reviews from real clients and see if they have experience dealing with your specific banks. A provider with a strong presence in the industry and a history of successful negotiations is much more likely to deliver results. They should also have a clear process for handling client funds and communicating progress updates.
                </p>
                <p>
                  Finally, ensure the provider offers legal support. Debt problems often involve legal notices and court proceedings. Having access to experienced advocates who can handle Section 138 cases or summary suits adds a layer of protection that a simple negotiation service cannot provide. A comprehensive solution that addresses both the financial and legal aspects of debt is always the best choice.
                </p>
              </div>

              <h2 id="step-by-step" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Step-by-Step Journey to a Settled Debt</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Once you have chosen a provider and accepted your <strong>debt settlement quote</strong>, the actual journey begins. While every case is unique, most successful settlements follow a similar path. Understanding these steps will help you stay patient and focused throughout the process.
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <strong>Assessment and Enrollment:</strong> Your expert team reviews your debts, income, and hardship to create a customized negotiation strategy.
                    </li>
                    <li>
                      <strong>Communication Redirection:</strong> The agency begins handling communications with your creditors, reducing the direct pressure on you.
                    </li>
                    <li>
                      <strong>Savings Phase:</strong> You begin setting aside funds in a dedicated account to build the lump sum needed for a settlement offer.
                    </li>
                    <li>
                      <strong>Negotiation:</strong> Once enough funds are available, the negotiators contact your banks with a formal settlement proposal.
                    </li>
                    <li>
                      <strong>Settlement Approval:</strong> The bank reviews the proposal and issues an official settlement letter detailing the agreed amount and payment deadline.
                    </li>
                    <li>
                      <strong>Payment and Closure:</strong> You make the payment directly to the bank as per the letter and receive your No Dues Certificate.
                    </li>
                  </ol>
                </div>
                <p>
                  This process requires commitment. It is not an instant fix, but a structured recovery plan. By following these steps under professional guidance, you ensure that every move is strategic and geared toward the ultimate goal of debt freedom. The feeling of receiving that final closure letter is incomparable, marking the official end of your debt struggle and the beginning of a new financial chapter.
                </p>
              </div>

              <h2 id="helpful-resources" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Helpful Resources for Debt Relief</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Educating yourself is a vital part of the recovery process. We have compiled a list of resources to help you understand the broader context of debt management and legal rights in India.
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 hover:underline font-medium">
                      Comprehensive Guide to Loan Settlement in India
                    </Link>
                  </li>
                  <li>
                    <Link href="/understanding-90-day-loan-default-india" className="text-blue-600 hover:underline font-medium">
                      What Happens After a 90-Day Loan Default?
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="text-blue-600 hover:underline font-medium">
                      Detailed Analysis of CIBIL Score and Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/do-banks-file-fir-for-credit-card-dues" className="text-blue-600 hover:underline font-medium">
                      Legal Myths vs Facts: FIRs and Credit Card Debt
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps" className="text-blue-600 hover:underline font-medium">
                      Settling Loans Through Digital Platforms: A How-To Guide
                    </Link>
                  </li>
                </ul>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Success Stories: Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <div className="text-gray-700 italic mb-4 text-base">
                    "I was trapped with three credit cards and a mounting debt of 12 lakhs. The quote I received from the team was very realistic. They negotiated with HDFC and ICICI, and I settled for roughly 40% of the total. Very professional service!"
                  </div>
                  <p className="font-bold text-blue-900"> - Amit Sharma, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <div className="text-gray-700 italic mb-4 text-base">
                    "The best part was the anti-harassment support. The collection calls stopped within a week of me joining. They handled my Axis bank card settlement perfectly. Highly recommend their debt settlement services."
                  </div>
                  <p className="font-bold text-blue-900"> - Priya Nair, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <div className="text-gray-700 italic mb-4 text-base">
                    "I was skeptical about the fees, but the savings they achieved far outweighed the cost. They are very transparent about the CIBIL impact too. No false promises, just results."
                  </div>
                  <p className="font-bold text-blue-900"> - Vikram Singh, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <div className="text-gray-700 italic mb-4 text-base">
                    "Getting a quote was quick and easy. They explained the whole process clearly. I successfully settled my SBI card dues and finally have my peace of mind back."
                  </div>
                  <p className="font-bold text-blue-900"> - Sneha Gupta, Kolkata</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <div className="text-gray-700 italic mb-4 text-base">
                    "Reliable and ethical. They guided me through a very difficult time when I lost my job. The settlement they negotiated saved me over 5 lakhs in interest and penalties."
                  </div>
                  <p className="font-bold text-blue-900"> - Rahul Verma, Pune</p>
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

              <div className="mt-16 p-8 bg-blue-900 text-white rounded-[30px] text-center shadow-2xl overflow-hidden relative">
                <div className="z-10 relative">
                  <h2 className="text-3xl font-bold mb-4">Ready for a Fresh Financial Start?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don't let credit card debt control your life. Get your personalized debt settlement quote today and start your journey towards freedom.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Request Your Free Quote Now
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>
          </div>

          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Free Debt Quote</h4>
                <p className="text-blue-100 mb-6 text-sm">Calculate your potential savings and see how quickly you can be debt-free.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Get Estimate Now
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert Negotiators</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Legal Protection</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Our Specialized Services</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services/credit-card-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Card Settlement</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/personal-loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Personal Loan Relief</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/anti-harassment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Stop Collection Calls</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Disclaimer: Debt settlement involves financial trade-offs and impact on credit scores. Professional advice is recommended before making any major financial decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
