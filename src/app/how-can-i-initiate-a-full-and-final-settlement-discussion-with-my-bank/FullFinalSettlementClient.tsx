'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FullFinalSettlementClient() {
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
    { id: 'understanding-ffs', label: 'What is F&FS?' },
    { id: 'preparation', label: 'Preparation' },
    { id: 'initiation', label: 'How to Initiate' },
    { id: 'negotiation', label: 'Negotiation Strategy' },
    { id: 'settlement-letter', label: 'Written Agreement' },
    { id: 'payment-process', label: 'Payment Steps' },
    { id: 'post-settlement', label: 'Closing Formalities' },
    { id: 'credit-impact', label: 'Credit Score Impact' },
    { id: 'professional-help', label: 'Expert Support' },
    { id: 'resources', label: 'Resources' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Can I initiate a settlement discussion if my loan is not yet in NPA?',
      answer: 'Yes, you can initiate a settlement discussion even before a loan becomes a Non-Performing Asset (NPA). However, banks are generally more receptive to settlement offers once you have missed a few payments and can demonstrate significant financial hardship. It is often better to reach out early and explain your situation rather than waiting for legal notices to arrive.'
    },
    {
      question: 'What is the ideal percentage for a bank loan settlement offer?',
      answer: 'There is no fixed percentage, but most successful settlements range between 40% and 60% of the total outstanding principal amount. The bank will likely counter your initial offer. Factors like the age of the debt, the type of loan (unsecured vs. secured), and your documented financial distress will influence the final percentage.'
    },
    {
      question: 'Will the bank stop recovery calls once I start the settlement talk?',
      answer: 'Not necessarily. Recovery agents may continue to call until a formal written agreement is signed and the first payment is made. However, once you are in active discussion with the bank’s nodal officer or settlement department, you can inform the recovery team about the ongoing process to reduce the frequency of calls.'
    },
    {
      question: 'Is a verbal agreement from a bank manager enough for settlement?',
      answer: 'No, a verbal agreement is never enough. Always insist on a formal "Settlement Letter" on the bank’s official letterhead. This letter must clearly state the agreed amount, the payment deadline, and the commitment to close the loan account upon payment. Without this document, your payment might just be adjusted against interest and penalties without closing the debt.'
    },
    {
      question: 'How does a settled loan affect my future loan eligibility?',
      answer: 'A settled loan remains on your credit report for seven years with a "Settled" status. This indicates that you did not pay the full amount owed, which can make most banks hesitant to offer you new credit in the short term. However, you can rebuild your score over time by maintaining other active accounts and using secured credit cards.'
    },
    {
      question: 'Can I settle a secured loan like a home loan?',
      answer: 'Settling a secured loan is much more difficult because the bank has collateral (like your house) that they can sell to recover the money. Settlement for secured loans usually happens only if the property value has significantly depreciated or if there are legal hurdles in the auction process. For most home loans, restructuring or an EMI holiday is more common than a full settlement.'
    },
    {
      question: 'What documents should I prepare for the settlement discussion?',
      answer: 'You should prepare a formal hardship letter, bank statements from the last six months, proof of income loss (like a termination letter), and any medical records if health issues caused the financial strain. Having a clear record of all your other liabilities also helps in proving that you cannot pay the full amount.'
    },
    {
      question: 'Does the bank waive off 100% of the interest during settlement?',
      answer: 'In many cases, yes. The primary goal of a settlement is to recover at least a portion of the principal. Banks are often willing to waive off accumulated interest, late payment fees, and penalties to secure a lump-sum payment of the principal amount.'
    },
    {
      question: 'What happens if I miss the payment deadline mentioned in the settlement letter?',
      answer: 'If you miss the deadline, the settlement agreement usually becomes void. The bank will revert to the original outstanding amount, including all interests and penalties. You may then have to start the negotiation process all over again, and the bank might be less willing to offer the same terms.'
    },
    {
      question: 'Can I use a professional service to handle the settlement for me?',
      answer: 'Yes, professional services like CredSettle specialize in negotiating with banks on behalf of borrowers. They understand the bank’s internal policies and can often secure better terms than an individual. They also help in ensuring that all legal documentation is correctly handled to prevent future disputes.'
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
                    Initiate Settlement Discussion
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">How to Initiate a Full and Final Settlement Discussion with Your Bank</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Financial instability can happen to anyone. Whether it is due to a sudden medical emergency, an unexpected job loss, or a business downturn, the burden of mounting debt can feel overwhelming. When you find yourself unable to meet your monthly loan obligations, the prospect of a <strong>full and final settlement</strong> with your bank often emerges as a viable solution. This process allows you to pay a single lump-sum amount that is lower than your total outstanding debt to close the account permanently.
                </p>
                <p>
                  However, initiating this discussion is not as simple as making a phone call. It requires careful planning, a clear understanding of your legal rights, and a strategic approach to negotiation. Banks are commercial entities, and their primary goal is to recover as much of the lent amount as possible. To get a favorable deal, you must present your case in a professional and convincing manner.
                </p>
                <p>
                  At <strong>CredSettle</strong>, we have helped thousands of individuals navigate these complex waters. In collaboration with partners like <strong>Ama Legal Solutions</strong> and <strong>SettleLoans</strong>, we provide the expertise needed to turn a stressful debt situation into a manageable resolution. This guide will walk you through every step of the process, from preparing your financial documents to receiving your final closure letter.
                </p>
              </div>

              <h2 id="understanding-ffs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Understanding the Concept of Full and Final Settlement (F&FS)</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  A full and final settlement is essentially a compromise between the borrower and the lender. When a bank realizes that a borrower is in genuine financial distress and may not be able to pay the full amount ever, they may agree to accept a smaller amount to close the case. This is usually better for the bank than a total default, as they recover a portion of the principal without the costs of prolonged legal battles.
                </p>
                <p>
                  It is important to note that a settlement is different from a regular loan closure. In a standard closure, you pay the entire principal plus interest. In a settlement, you negotiate a waiver on the interest and a portion of the principal. While this provides immediate relief, it does come with a catch: your credit report will show the status as "Settled" rather than "Closed," which can impact your credit score for several years.
                </p>
                <p>
                  Despite the credit impact, for many, a settlement is the only way to stop the aggressive cycle of recovery calls and legal notices. It provides a clean slate and allows you to rebuild your financial life without the constant shadow of unpaid debt. Understanding that this is a professional negotiation is the first step toward success.
                </p>
              </div>

              <h2 id="preparation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Preparation: Building Your Case for Hardship</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Before you even pick up the phone to call your bank, you must prepare your documentation. Banks do not offer settlements to everyone who asks; they offer them to those who can prove they have no other choice. This is where "Hardship Documentation" becomes critical.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Financial Assessment:</strong> Calculate exactly how much money you can afford to pay in a single lump sum. This is your "walk-away" number.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. Proof of Income Loss:</strong> If you lost your job, have the termination letter ready. If your business failed, keep the closure notices or loss statements handy.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>3. Medical Evidence:</strong> If health issues led to your financial strain, gather all relevant hospital bills and medical certificates.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>4. Bank Statements:</strong> Be prepared to show your bank statements from the last six months to demonstrate that your account balance has been consistently low or negative.
                  </li>
                </ul>
                <p>
                  Having these documents organized shows the bank that you are serious and that your request is based on real facts, not just an attempt to avoid paying. A professional approach starts with professional preparation.
                </p>
              </div>

              <h2 id="initiation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How to Initiate the Discussion: The First Contact</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Once you are prepared, the next step is to reach out to the bank. You should avoid speaking with regular customer service representatives or third-party recovery agents for this purpose. Instead, you should aim to speak with the "Settlement Department" or the "Nodal Officer" of the bank.
                </p>
                <p>
                  The best way to initiate the discussion is through a formal email or a registered letter. This creates a paper trail that can be useful if the bank later disputes your claim. In your communication, you should:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>State your loan account number clearly.</li>
                  <li>Briefly explain the reasons for your financial hardship.</li>
                  <li>Explicitly mention your desire to reach a "Full and Final Settlement."</li>
                  <li>Request a meeting or a call with a senior official to discuss the terms.</li>
                </ul>
                <p>
                  Do not make an actual offer in the first email. Simply express your intent to settle. This allows the bank to open a file on your case and assigns it to a recovery officer who has the authority to negotiate. If you are working with <strong>CredSettle</strong>, our experts can handle this initial outreach for you, ensuring that it is directed to the right person.
                </p>
              </div>

              <h2 id="negotiation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Negotiation Strategies for a Favorable Deal</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Negotiation is an art, especially when it comes to debt. The bank will likely start by asking for the full principal plus a portion of the interest. Your goal is to pay only a percentage of the principal.
                </p>
                <p>
                  A common starting point for many borrowers is around 30% of the principal, with the expectation of settling at around 50%. However, you must be realistic. If you offer an amount that is too low without sufficient proof of hardship, the bank may simply reject your offer and continue with legal action.
                </p>
                <p>
                  During the negotiation, stay calm and stick to the facts. If the bank representative becomes aggressive, remind them that you are proactively seeking a solution and that a settlement is in their best interest as well. If you feel the negotiation is stalling, mentioning that you are seeking legal advice from firms like <strong>Ama Legal Solutions</strong> can often bring the bank back to the table with a more reasonable offer.
                </p>
                <p>
                  Remember, the bank wants to close the file as much as you do. Every open default account is a liability for them. Use this to your advantage by showing that you have a limited lump sum available right now, and if they don't accept it, they might get nothing at all.
                </p>
              </div>

              <h2 id="settlement-letter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Importance of a Written Settlement Letter</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  This is the most critical part of the entire process. **Never, under any circumstances, make a settlement payment without a formal, written Settlement Letter from the bank.**
                </p>
                <p>
                  A valid settlement letter must be on the bank’s official letterhead and should contain:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your full name and loan account number.</li>
                  <li>The exact settlement amount agreed upon.</li>
                  <li>The specific deadline for the payment.</li>
                  <li>A clause stating that this payment will settle all claims for this account.</li>
                  <li>The name and designation of the officer who authorized the settlement.</li>
                </ul>
                <p>
                  Many borrowers make the mistake of paying based on a WhatsApp message or a verbal promise from a collection agent. These payments are often treated as "part payments," and the bank continues to demand the remaining balance. A written letter is your only legal protection. If you are unsure about the wording of the letter, our team at <strong>CredSettle</strong> can review it for you to ensure it is legally binding and covers all necessary points.
                </p>
              </div>

              <h2 id="payment-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Payment Process: Completing the Transaction</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Once you have the letter, you must make the payment by the specified deadline. Most banks prefer payments via Demand Draft (DD) or through their official online portals. Avoid giving cash to any individual or agent.
                </p>
                <p>
                  When you make the payment, ensure you get an official receipt immediately. If you are paying via an online portal, take a screenshot of the success page and save the transaction ID. If you are submitting a DD at a branch, get a "received" stamp on a photocopy of the DD.
                </p>
                <p>
                  Timing is everything. If the letter says the payment must reach by the 15th of the month, do not wait until the 14th. Technical delays in banking can happen, and if the deadline is missed, the bank has the right to cancel the settlement. Services like <strong>SettleLoans</strong> can often assist in facilitating these payments securely.
                </p>
              </div>

              <h2 id="post-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Post-Settlement: Closing Formalities and the NDC</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Making the payment is not the final step. After the payment has been processed, you must follow up with the bank for two important documents:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>No Dues Certificate (NDC):</strong> This is an official document from the bank stating that you no longer owe them any money for that specific loan account.</li>
                  <li><strong>Loan Closure Letter:</strong> A formal notification that the loan account has been closed in their records.</li>
                </ol>
                <p>
                  These documents are your proof that you have fulfilled your part of the settlement agreement. Keep them safely in both physical and digital formats. If you ever face issues with recovery agents in the future for the same loan, these documents are your primary defense. Banks usually take 30 to 45 days to issue these certificates after the payment is cleared.
                </p>
              </div>

              <h2 id="credit-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Long-Term Impact on Your Credit Score</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  It is important to be honest about the consequences. A loan settlement will negatively affect your CIBIL score. The bank is required to report the account status to all credit bureaus as "Settled."
                </p>
                <p>
                  A "Settled" status tells future lenders that you did not pay the full amount you borrowed. This makes you a "high-risk" borrower. Your score might drop significantly, and you might find it difficult to get new loans for the next 2 to 3 years.
                </p>
                <p>
                  However, "Settled" is still better than "Default" or "Written-Off." Over time, as you manage other financial responsibilities well, the impact of the settlement will diminish. You can start rebuilding your credit by using a secured credit card (a card against a Fixed Deposit) and ensuring that every single payment on that card is made on time. At <strong>CredSettle</strong>, we also provide advice on how to improve your credit health post-settlement.
                </p>
              </div>

              <h2 id="professional-help" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Why Professional Support is Invaluable</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While you can technically initiate a settlement yourself, it is often a daunting task. Banks can be bureaucratic, and recovery agents can be aggressive. This is where professional debt resolution companies come in.
                </p>
                <p>
                  <strong>CredSettle</strong> act as a buffer between you and the bank. We understand the internal "Settlement Grids" that banks use and know how to present your case to get the lowest possible amount. Along with the legal expertise of <strong>Ama Legal Solutions</strong> and the financial structuring from <strong>SettleLoans</strong>, we offer a comprehensive shield against debt-related stress.
                </p>
                <p>
                  Our goal is not just to settle a single loan but to provide you with a path toward complete financial freedom. We handle the paperwork, the negotiations, and the follow-ups, allowing you to focus on your work and family.
                </p>
              </div>

              <h2 id="resources" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Helpful Resources</h2>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                <p className="mb-4 font-semibold text-gray-900">Explore more guides to manage your debt effectively:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li>
                    <Link href="/loan-settlement" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Comprehensive Loan Settlement Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-npa" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Understanding NPA and Its Consequences
                    </Link>
                  </li>
                  <li>
                    <Link href="/does-loan-settlement-affect-cibil" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Detailed Analysis of CIBIL Impact
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Steps to Rebuild Your Credit Score
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-avoid-debt-settlement-scams-in-india" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> How to Spot and Avoid Debt Scams
                    </Link>
                  </li>
                </ul>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was struggling with my credit card debt for two years. CredSettle took over my case and managed to settle it at 45% of the principal. The team at Ama Legal Solutions ensured the letter was perfect."
                  </p>
                  <p className="font-bold text-blue-900">- Amit Sharma, New Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The harassment from agents stopped the moment I signed up with CredSettle. They initiated the talk with my bank professionally. SettleLoans helped me manage the lump sum payment."
                  </p>
                  <p className="font-bold text-blue-900">- Priya Verma, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Very transparent process. They explained the CIBIL impact clearly before we started. I appreciated the honesty and the successful outcome."
                  </p>
                  <p className="font-bold text-blue-900">- Vikram Singh, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Best decision I made for my financial health. CredSettle handled everything from start to finish. I finally have my No Dues Certificate!"
                  </p>
                  <p className="font-bold text-blue-900">- Sneha Reddy, Hyderabad</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Professional, empathetic, and effective. The combination of legal and financial advice from CredSettle and Ama Legal is unbeatable."
                  </p>
                  <p className="font-bold text-blue-900">- Rahul Gupta, Pune</p>
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
                  <h2 className="text-3xl font-bold mb-4">Ready to Resolve Your Debt?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don’t wait for things to get worse. Speak with a debt resolution expert today and find the best way forward.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Get Your Free Consultation Now
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
                <h4 className="font-bold text-2xl mb-4">Debt Relief Help</h4>
                <p className="text-blue-100 mb-6 text-sm">Facing aggressive recovery agents? We can help you negotiate a fair settlement.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Start Now
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Legal Expert Support</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Proven Success Rate</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Settlement Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Free Consultation</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: Information provided is for educational purposes. Loan settlement has credit implications. Consult our experts for specific advice.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
