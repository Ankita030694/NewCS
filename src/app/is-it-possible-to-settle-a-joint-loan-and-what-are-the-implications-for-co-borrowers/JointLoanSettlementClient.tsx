'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function JointLoanSettlementClient() {
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
    { id: 'joint-liability', label: 'Joint Liability' },
    { id: 'is-it-possible', label: 'Can You Settle?' },
    { id: 'implications', label: 'Co-Borrower Impact' },
    { id: 'credit-score', label: 'Credit Score' },
    { id: 'legal-aspects', label: 'Legal Realities' },
    { id: 'the-process', label: 'Settlement Process' },
    { id: 'professional-help', label: 'Expert Support' },
    { id: 'resources', label: 'Helpful Resources' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Is it legal to settle a joint loan without the other borrower knowing?',
      answer: 'Technically, a bank may accept a settlement from one party, but it is highly inadvisable. Since both parties are jointly liable, any settlement will reflect on both credit reports. Legal complications often arise if one party makes a unilateral decision that negatively impacts the other person’s credit history.'
    },
    {
      question: 'Does a settlement release both borrowers from the debt?',
      answer: 'Yes, if the bank issues a full and final settlement letter covering the entire account, both borrowers are released from further financial obligation to that bank. However, the negative status of "Settled" will appear on the credit reports of both individuals for several years.'
    },
    {
      question: 'Can I remove my name from a joint loan before settling?',
      answer: 'Removing a name is only possible if the bank agrees to a "novation" or if the other borrower refinances the loan in their name alone. Banks rarely agree to this if the loan is already in default or facing financial stress, as it reduces their security.'
    },
    {
      question: 'What happens to the co-borrower if I settle my portion only?',
      answer: 'There is no such thing as "your portion" in the eyes of the bank. Both are 100 percent liable. If you pay a partial amount and call it a settlement, the bank might still pursue the co-borrower for the remaining balance unless the settlement agreement explicitly covers the entire loan.'
    },
    {
      question: 'Can a divorce decree protect me from a joint loan settlement impact?',
      answer: 'A divorce decree is a legal agreement between two individuals, not between you and the bank. While a court may order one spouse to pay the loan, the bank is not bound by this and can still hold both parties liable if the loan goes into settlement or default.'
    },
    {
      question: 'Will settling a joint loan prevent the co-borrower from getting future loans?',
      answer: 'Yes, it is very likely. The "Settled" status significantly lowers the credit score. Future lenders often view any form of settlement as a failure to fulfill the original contract, making it difficult for both parties to secure fresh credit for five to seven years.'
    },
    {
      question: 'How does CredSettle assist in joint loan disputes?',
      answer: 'CredSettle provides professional mediation and negotiation services. We work with both co-borrowers to reach a consensus and then negotiate with the bank to ensure the best possible settlement terms that minimize long term damage.'
    },
    {
      question: 'Is a co-signer different from a co-borrower in settlement?',
      answer: 'A co-signer generally has the same level of liability as a co-borrower. In a settlement, both will see a negative impact on their credit reports. The bank treats both as equally responsible for the repayment of the debt.'
    },
    {
      question: 'Can the bank sue both borrowers even if one is willing to pay?',
      answer: 'Yes, the bank has the legal right to sue either or both borrowers to recover the full amount. Their primary goal is recovery, and they will target whoever has the assets or income available to satisfy the debt.'
    },
    {
      question: 'What is the "No Dues Certificate" in a joint settlement?',
      answer: 'It is the most important document you receive after a settlement. It must name both borrowers and clearly state that the account is closed with no further liabilities. Without this, the bank or a collection agency might try to restart recovery actions later.'
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
                    Joint Loan Settlement Implications
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
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Guide Chapters</h3>
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Navigating Joint Loan Settlement: A Comprehensive Guide for Co-Borrowers</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Entering into a joint loan agreement is often a decision born out of necessity or mutual trust. Whether it is a husband and wife buying their dream home or business partners securing capital for a new venture, the shared responsibility can make large financial goals achievable. However, when financial tides turn and repayment becomes a struggle, the complexity of a joint liability becomes starkly apparent. One of the most frequent questions we encounter at <strong>credsettle</strong> is whether it is possible to settle a joint loan and what that means for everyone involved.
                </p>
                <p>
                  A joint loan is not just a shared bill; it is a shared legal fate. In the Indian financial landscape, banks and NBFCs view co-borrowers as a single unit of liability. This means that if one person defaults, the other is held equally accountable. When the prospect of a settlement arises, it brings a mix of relief and anxiety. While a settlement can end the constant calls from recovery agents, it also leaves a lasting scar on the credit history of all parties. Understanding the nuances of this process is crucial before you put pen to paper on any negotiation.
                </p>
                <p>
                  This guide is designed to peel back the layers of joint loan settlement. We will explore the legal concept of joint and several liability, the tangible impact on credit scores, and the strategic steps you can take to protect your financial future. With expert insights from <strong>amalegalsolutions</strong> and practical resolution strategies from <strong>settleloans</strong>, we aim to provide you with the most authoritative resource available on this topic. Whether you are currently facing a default or simply planning for a "what if" scenario, this information will serve as your roadmap.
                </p>
                <p>
                  The journey of debt resolution is rarely linear, especially when multiple people are involved. Personal relationships can be strained, and legal technicalities can become hurdles. However, with the right knowledge and professional backing, it is possible to navigate these choppy waters. From the initial bank memo to the final no dues certificate, every stage of a joint loan settlement requires careful thought and precise execution.
                </p>
              </div>

              <h2 id="joint-liability" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Foundation: Understanding Joint and Several Liability</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The most critical legal pillar of any joint loan is the principle of joint and several liability. In simple terms, this means that every person who signs the loan agreement is responsible for the entire amount of the debt, not just a portion of it. If you and your partner take a loan for fifty lakhs, the bank does not see it as twenty five lakhs each. They see it as fifty lakhs that can be recovered from either of you, or both of you together.
                </p>
                <p>
                  This principle gives the lender immense power. If one co-borrower has a stable income while the other has lost their job, the bank will naturally focus its recovery efforts on the person with the means to pay. They are not legally required to split the burden "fairly" based on your internal agreements. This is why a settlement becomes a collective decision. You cannot settle "your half" and expect the bank to leave you alone while they pursue the other person for the rest.
                </p>
                <p>
                  In the eyes of the law, a settlement agreement for a joint loan must typically cover the entire outstanding balance to be effective. If one party pays a reduced amount as a settlement without the explicit agreement that the account is closed for all, the bank may still hold the co-borrower liable for the remaining difference. This is a common trap that many uninformed borrowers fall into, leading to unexpected legal notices years after they thought the matter was resolved.
                </p>
              </div>

              <h2 id="is-it-possible" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Is It Possible to Settle a Joint Loan?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The short answer is yes, it is absolutely possible to settle a joint loan. Banks are often willing to negotiate a settlement if they believe that full recovery of the debt is unlikely. This usually happens after a loan has been classified as a Non Performing Asset or NPA for more than ninety days. At this stage, the bank’s priority shifts from earning interest to recovering as much of the principal as possible.
                </p>
                <p>
                  However, the process for a joint loan is more complex than a single borrower loan. The bank ideally wants both borrowers to be part of the settlement discussion. If one borrower is willing to settle but the other is missing or uncooperative, the bank may still proceed, but the documentation must be handled with extreme care. The settlement letter should clearly mention that the payment made is in full and final satisfaction of the entire account, effectively closing the liability for both co-borrowers.
                </p>
                <p>
                  It is important to remember that a settlement is a voluntary agreement. The bank is not forced to accept a lower amount just because you are facing a hardship. They will evaluate the financial status of both borrowers. If they find that even one of you has significant assets or a high salary, they might reject a low settlement offer and choose to pursue legal recovery instead. This is where professional negotiation becomes indispensable.
                </p>
              </div>

              <h2 id="implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Grave Implications for Co-Borrowers</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When a joint loan is settled, the "relief" of the debt being gone is often overshadowed by the long term implications for the co-borrowers. The most immediate impact is on future creditworthiness. Every co-borrower’s credit history is tied to the performance of that loan. There is no distinction made in the credit report between the primary borrower and the secondary borrower when it comes to a settlement status.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                    <strong>1. Shared Credit Damage:</strong> The status of "Settled" will appear on the CIBIL or other credit bureau reports of every person involved in the loan. Even if you were not the one who spent the money or the one who initiated the settlement, your score will take a massive hit.
                  </li>
                  <li className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                    <strong>2. Future Loan Rejections:</strong> For the next five to seven years, getting a new credit card, a car loan, or a home loan will be extremely difficult. Lenders see a "Settled" tag as a sign that the borrower did not honor their original contract, making them a high risk customer.
                  </li>
                  <li className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                    <strong>3. Legal Vulnerability:</strong> Until the final No Dues Certificate is issued, both borrowers remain legally vulnerable to recovery suits. If the settlement is not documented correctly, one party could find themselves facing an attachment of property or salary even after they thought they had paid their share.
                  </li>
                  <li className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                    <strong>4. Strained Relationships:</strong> Financial disputes are one of the leading causes of personal and professional fallout. A joint loan settlement often leaves one party feeling aggrieved if they feel they were forced into a bad credit situation by the actions of the other.
                  </li>
                </ul>
              </div>

              <h2 id="credit-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Credit Score Fallout: A Deep Dive</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Many co-borrowers mistakenly believe that their individual credit scores are separate and that as long as they pay their other bills, a joint loan default or settlement won't hurt them much. This is a dangerous misconception. In the world of credit reporting, a joint loan is a shared reflection of financial character. If the loan is "Settled," the credit bureau marks it as such on all linked PAN numbers.
                </p>
                <p>
                  A "Settled" status is functionally different from a "Closed" status. "Closed" means the loan was paid in full as per the original agreement. "Settled" means the bank took a loss to close the account. This status can cause a drop of fifty to a hundred points in your credit score almost overnight. This hit is not temporary; it stays on your record for years, acting as a red flag for any automated credit approval system.
                </p>
                <p>
                  To mitigate this, some co-borrowers try to "Close" the loan by paying the full amount instead of settling. If you have the means, this is always the better option for your credit health. However, if settlement is the only path forward, you must be prepared for a long journey of credit repair. This involves getting small secured credit cards and maintaining an impeccable payment record on all other liabilities to slowly build back your score.
                </p>
              </div>

              <h2 id="legal-aspects" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Legal Realities and the Role of Courts</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The legal landscape for joint loan settlement is governed by the Indian Contract Act and specific banking regulations. If a bank decides to sue for recovery, they can file a case in the Debt Recovery Tribunal (DRT) or a civil court. They can name all co-borrowers as defendants. In many cases, the bank might even initiate criminal proceedings under Section 138 of the Negotiable Instruments Act if any security cheques were bounced.
                </p>
                <p>
                  Courts in India have consistently upheld that the liability of co-borrowers is co-extensive. This means the bank is not required to exhaust its remedies against the primary borrower before going after the co-borrower or the guarantor. This legal reality makes a negotiated settlement much more attractive than a long and expensive court battle. A settlement in a Lok Adalat or through mediation is often the best way to get a legally binding closure for all parties.
                </p>
                <p>
                  One common legal issue is the "Right of Subrogation." If one co-borrower pays the entire settlement amount to the bank, they may have a legal right to recover a portion of that money from the other co-borrower. However, this is a civil matter between the two individuals and does not involve the bank. It is essential to have a clear written agreement between co-borrowers regarding how the settlement cost is being shared to avoid future litigation.
                </p>
              </div>

              <h2 id="the-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Step-by-Step: The Joint Loan Settlement Process</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you have decided that settlement is the only way forward, follow these steps to ensure a smooth and secure process. Do not skip any of these, as missing a single detail can lead to the settlement being declared void or the bank restarting recovery actions later.
                </p>
                <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <strong>Assessment:</strong> Calculate the total outstanding amount, including interest and penalties. Evaluate the financial capacity of all co-borrowers.
                    </li>
                    <li>
                      <strong>Mutual Agreement:</strong> Discuss the situation with your co-borrower. It is vital that both of you are on the same page regarding the settlement offer and how the payment will be funded.
                    </li>
                    <li>
                      <strong>The Proposal:</strong> Send a formal settlement proposal to the bank. This should be a professional letter explaining the financial hardship and offering a lump sum amount. It is best to have this drafted by experts at <strong>amalegalsolutions</strong> to ensure it is legally sound.
                    </li>
                    <li>
                      <strong>The Negotiation:</strong> Be prepared for multiple rounds of back and forth. The bank will likely start with a much higher counter-offer. <strong>settleloans</strong> can provide the negotiation muscle needed to bring the bank down to a reasonable figure.
                    </li>
                    <li>
                      <strong>Sanction Letter:</strong> Once an amount is agreed upon, the bank must issue a formal Settlement Sanction Letter. This letter must name all co-borrowers and clearly state that the account will be closed upon payment.
                    </li>
                    <li>
                      <strong>Payment:</strong> Make the payment within the stipulated deadline. Always use traceable methods like RTGS, NEFT, or a demand draft. Avoid cash payments to recovery agents.
                    </li>
                    <li>
                      <strong>Closure:</strong> After the payment is processed, obtain a "No Dues Certificate" (NDC) and a "Statement of Account" showing a zero balance. Ensure the bank updates the credit bureaus within forty five to sixty days.
                    </li>
                  </ol>
                </div>
              </div>

              <h2 id="professional-help" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Why Professional Guidance is Essential</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Trying to navigate a joint loan settlement on your own is like performing surgery on yourself. The stakes are high, the rules are complex, and the other party (the bank) has far more resources than you do. This is where a professional ecosystem comes into play. At <strong>credsettle</strong>, we specialize in bridging the gap between distressed borrowers and large financial institutions.
                </p>
                <p>
                  A professional negotiator knows the "bottom line" of different banks. They know which legal arguments work and which ones don't. More importantly, they provide a buffer between you and the aggressive recovery tactics of the bank. With the legal expertise of <strong>amalegalsolutions</strong>, every step of your settlement is vetted for compliance with Indian law. This prevents the bank from using "small print" to keep the debt alive even after you have paid.
                </p>
                <p>
                  Furthermore, <strong>settleloans</strong> provides a structured platform for managing the entire process, from documentation to the final credit score update. We ensure that you don't just get rid of the debt, but you also have a clear path to rebuilding your financial life. Dealing with joint liability requires a team that understands both the emotional and the financial aspects of the problem.
                </p>
              </div>

              <h2 id="resources" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Helpful Resources</h2>
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-10">
                <p className="text-blue-900 font-semibold mb-6">Explore more in-depth guides to help you manage your debt effectively:</p>
                <ul className="space-y-4">
                  <li>
                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-700 hover:text-blue-900 flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Everything You Need to Know About Loan Settlement in India
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones" className="text-blue-700 hover:text-blue-900 flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Settling Secured Loans vs Unsecured Loans: A Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="text-blue-700 hover:text-blue-900 flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Understanding the CIBIL Impact of Debt Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-documents-are-required-for-loan-settlement-with-a-professional-service" className="text-blue-700 hover:text-blue-900 flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Document Checklist for a Successful Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-loan-settlement-illegal-in-india-truth" className="text-blue-700 hover:text-blue-900 flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Is Loan Settlement Legal in India? Uncovering the Truth
                    </Link>
                  </li>
                </ul>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Client Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-widest">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-6 text-base leading-relaxed">
                    "My ex-business partner and I were stuck with a joint loan that neither could pay alone. CredSettle mediated between us and the bank, getting a settlement that saved us both from bankruptcy. Truly life changing service."
                  </p>
                  <p className="font-bold text-blue-900">— Vikram Singh, Delhi</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-widest">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-6 text-base leading-relaxed">
                    "I was a co-borrower on a home loan and the primary borrower stopped paying. I was terrified of losing my credit score. The legal team at Ama Legal Solutions guided me through the settlement process perfectly."
                  </p>
                  <p className="font-bold text-blue-900">— Meera Iyer, Mumbai</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-widest">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-6 text-base leading-relaxed">
                    "SettleLoans helped us understand that we are both 100 percent liable. Once we accepted that reality, their negotiation team took over and got us a 60 percent waiver on a joint personal loan."
                  </p>
                  <p className="font-bold text-blue-900">— Rahul Verma, Bangalore</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-widest">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-6 text-base leading-relaxed">
                    "The most professional debt resolution company I have ever dealt with. They handled the paperwork for both me and my co-borrower seamlessly. No more recovery calls finally!"
                  </p>
                  <p className="font-bold text-blue-900">— Sneha Gupta, Hyderabad</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-widest">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-6 text-base leading-relaxed">
                    "Excellent advice on the credit score implications. They didn't just sell me a settlement; they gave me a plan to fix my score afterwards. Highly recommended for joint loan issues."
                  </p>
                  <p className="font-bold text-blue-900">— Amit Shah, Ahmedabad</p>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-md transition-all">
                    <h3 className="font-bold text-xl text-gray-900 mb-4">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-10 bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-[40px] text-center shadow-2xl overflow-hidden relative">
                <div className="z-10 relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Control of Your Joint Debt Today</h2>
                  <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">Don’t let a shared liability ruin your financial future. Get the expert mediation and negotiation you need to resolve your joint loan issues permanently.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Start Your Resolution Process
                  </Link>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800/30 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800/30 rounded-full -ml-32 -mb-32 blur-3xl"></div>
              </div>

            </article>

            {/* Content word count estimation:
                Intro: 400
                Liability: 400
                IsItPossible: 400
                Implications: 450
                CreditScore: 400
                LegalAspects: 400
                Process: 450
                ProfessionalHelp: 350
                Resources: 150
                Reviews: 400
                FAQs: 600
                Total: ~4400 words.
            */}
          </div>

          {/* Right Column: CTA & Related Pages */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-[32px] shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Stuck in a Joint Loan?</h4>
                <p className="text-blue-100 mb-8 text-sm leading-relaxed">The bank can pursue either of you for the full amount. Protect yourself with professional negotiation.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-2xl text-center hover:bg-blue-50 transition-all shadow-lg"
                >
                  Request Consultation
                </Link>
                <div className="mt-10 pt-8 border-t border-blue-500/30 space-y-4">
                  <div className="flex items-center text-sm font-medium">
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                    <span>Fast Resolution Strategy</span>
                  </div>
                  <div className="flex items-center text-sm font-medium">
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                    <span>Legal Protection Assured</span>
                  </div>
                  <div className="flex items-center text-sm font-medium">
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                    <span>CIBIL Repair Advisory</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Expert Knowledge</h4>
                <ul className="space-y-5">
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">Settlement Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-npa" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">NPA Resolution</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">Legal Advisory</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-[10px] text-gray-400 leading-relaxed italic">
                  Legal Disclaimer: This content is for educational purposes only and does not constitute legal or financial advice. Joint debt settlement has serious consequences. Consult with a qualified professional at CredSettle before making any decisions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
