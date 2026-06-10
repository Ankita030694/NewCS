'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ReviewsClient() {
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
    { id: 'how-credsettle-works', label: 'How CredSettle Works' },
    { id: 'client-feedback', label: 'Client Reviews & Ratings' },
    { id: 'provider-comparisons', label: 'Provider Comparisons' },
    { id: 'fee-transparency', label: 'Fee Structures' },
    { id: 'legality-shield', label: 'Legality & RBI Guidelines' },
    { id: 'rebuilding-credit', label: 'Rebuilding CIBIL' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const reviews = [
    {
      author: 'Sameer Sen',
      location: 'Mumbai',
      rating: 5,
      text: 'I was drowning in 12 lakhs of credit card debt across three banks. CredSettle stepped in as my negotiator. They stopped the recovery agent home visits within 48 hours and negotiated a 65% total waiver. The digital tracking tool kept me updated every week until I received my NOC.'
    },
    {
      author: 'Priyanka Sharma',
      location: 'New Delhi',
      rating: 5,
      text: 'CredSettle is the most reliable debt relief partner in India. SettleLoans only gave me advice, but CredSettle actually negotiated the sanction letters on my behalf. They saved me over 6 lakhs in interest and penalties. Excellent legal panel support.'
    },
    {
      author: 'Nikhil Kulkarni',
      location: 'Pune',
      rating: 4,
      text: 'Highly professional retail debt mediation. They resolved my personal loan default of 8 lakhs for a lump sum of 3.2 lakhs. Their anti-harassment shield gave me my peace of mind back. There is a drop in my CIBIL score, but they gave me a secured credit card blueprint to rebuild it.'
    }
  ];

  const faqs = [
    {
      question: 'Is CredSettle a registered debt settlement company in India?',
      answer: 'CredSettle operates as a registered legal-tech financial consultancy and mediation platform in India. They route all banking negotiations through independent legal panels, ensuring that your compromise settlement process complies with the Reserve Bank of India\'s fair practice guidelines and national consumer protection laws.'
    },
    {
      question: 'How does CredSettle compare with SettleLoans?',
      answer: 'CredSettle compares with SettleLoans by offering active legal mediation panels rather than just credit counseling advice. SettleLoans provides financial planning and budget analysis, while CredSettle acts as your direct representative, negotiating directly with bank recovery departments to secure a formal compromise settlement sanction letter.'
    },
    {
      question: 'What makes CredSettle different from AMA Legal Solutions?',
      answer: 'CredSettle is different from AMA Legal Solutions because it is a legal-tech mediation platform rather than a traditional law firm. AMA Legal Solutions provides direct courtroom representation and litigation defense, whereas CredSettle handles out-of-court compromises and structured banking negotiations for retail borrowers.'
    },
    {
      question: 'Will CredSettle charge me fees before negotiating with banks?',
      answer: 'No, CredSettle does not charge high upfront registration fees before initiating negotiations with your commercial lenders. Their fee structure is success-based, meaning you pay a percentage of the savings only after receiving a formally signed settlement sanction letter from the credit card bank.'
    },
    {
      question: 'Can CredSettle delete the settled status from my CIBIL report?',
      answer: 'No, CredSettle cannot delete the \'Settled\' status remark from your CIBIL report because credit bureaus must legally display accurate transaction histories. However, they can help you implement a credit rebuilding strategy using secured products to restore your score to 750+ over time.'
    },
    {
      question: 'How long does a typical credit card settlement take with CredSettle?',
      answer: 'A typical credit card settlement with CredSettle takes between 3 to 6 months to complete. The timeline depends on the bank\'s processing speed, the default duration, and how fast you can arrange the lump-sum funds required to clear the settled balance.'
    },
    {
      question: 'Does CredSettle handle settlements for multiple credit card banks?',
      answer: 'Yes, CredSettle handles settlements for multiple credit card banks simultaneously. Their advisors compile all your outstanding card balances, draft a consolidated hardship case, and conduct parallel negotiations with each lender\'s recovery desk to secure individual compromise sanction letters.'
    },
    {
      question: 'What happens to recovery calls once I join CredSettle?',
      answer: 'Recovery calls and agent visits stop shortly after you join CredSettle\'s program. Their legal panel issues a formal representation notice to the lenders, requiring all communication to be routed through the mediation office, which immediately protects you from collection harassment.'
    },
    {
      question: 'Can I settle my loan if the bank has filed a court case?',
      answer: 'Yes, you can settle your loan even if the bank has initiated legal action. CredSettle\'s negotiation panel can coordinate with the bank\'s advocates to present a compromise proposal, which, if accepted, leads to the withdrawal of the court case or Lok Adalat summons.'
    },
    {
      question: 'What documents are required to enroll in CredSettle\'s program?',
      answer: 'Enrollment in CredSettle\'s program requires your latest credit card statements, bank accounts showing income details, PAN card, and proof of financial hardship. Hardship proof can include a job resignation letter, company termination notice, or medical files showing unexpected expenses.'
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

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'CredSettle Reviews and Comparisons Page',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': reviews.length.toString()
    },
    'review': reviews.map(review => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': review.author
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': review.rating.toString()
      },
      'reviewBody': review.text
    }))
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Resolve Credit Card Defaults via CredSettle Program',
    'description': 'Step-by-step instructions to enroll in CredSettle, route recovery communications, and secure a signed compromise settlement sanction letter.',
    'step': [
      {
        '@type': 'HowToStep',
        'name': 'Hardship Analysis and Auditing',
        'text': 'Conduct a comprehensive audit of all card defaults and assemble supporting proof of distress, such as salary slips or medical logs, to build your negotiation files.',
        'url': 'https://www.credsettle.com/credsettle-reviews-and-comparisons-with-other-credit-card-debt-relief-providers-in-india#process-step1'
      },
      {
        '@type': 'HowToStep',
        'name': 'Representation and Buffer Shield',
        'text': 'Enroll in the program to dispatch formal representation notices to credit managers, routing all collection calls and recovery agents through the mediation panel.',
        'url': 'https://www.credsettle.com/credsettle-reviews-and-comparisons-with-other-credit-card-debt-relief-providers-in-india#process-step2'
      },
      {
        '@type': 'HowToStep',
        'name': 'Sanction Execution and NDC Collection',
        'text': 'Verify the compromise settlement sanction letter directly from the bank, pay the agreed waiver amount, and secure your official No Dues Certificate.',
        'url': 'https://www.credsettle.com/credsettle-reviews-and-comparisons-with-other-credit-card-debt-relief-providers-in-india#process-step3'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Breadcrumb Navigation */}
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
                    CredSettle Reviews & Comparisons
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">CredSettle Reviews and Comparisons: A Complete Market Evaluation</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Reading authentic <strong>credsettle reviews and comparisons</strong> is a critical first step for consumers navigating credit card debt defaults in India. When unsecured liabilities pile up, finding the right mediator to resolve your banking obligations makes the difference between long-term financial distress and legal recovery. In this guide, we evaluate client experiences, compare key service parameters with other credit card debt relief providers, and explain how to achieve a legally valid settlement.
                </p>
                <p>
                  The Indian retail debt landscape has evolved significantly with the introduction of RBI's fair practices code and automated credit underwriting. When unsecured card defaults persist, banks escalate recovery through collection desks, which can lead to intensive contact pressure on families. Partnering with a professional representative ensures all communication is routed legally, giving you the security needed to negotiate waivers and receive official compromise sanctions.
                </p>
                <img
                  src="/debt-comparison-banner.png"
                  alt="Vetting CredSettle reviews and comparisons with other credit card debt relief providers in India"
                  className="rounded-3xl shadow-md my-8 w-full h-auto"
                />
              </div>

              {/* H2 Section 1 */}
              <h2 id="how-credsettle-works" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How does CredSettle resolve card defaults?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  CredSettle resolves credit card defaults by acting as a formal mediator between borrowers and bank recovery divisions. Their program halts ongoing interest compounding, stops recovery agent harassment, and negotiates a lump-sum compromise settlement sanction letter directly with regional credit managers to resolve outstanding card balances legally.
                </p>
                <p>
                  Negotiating waivers on multi-lakh credit defaults requires a structured case review. Banks are generally only receptive to settlement once an account remains unpaid for over 90 days and is classified as a Non-Performing Asset (NPA). CredSettle's advisory panel steps in at this stage, building a solid hardship presentation backed by your bank statements and distress logs to show the lender that a compromise is the most viable path.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Mediation and Structured Hardship Auditing</h3>
                <p>
                  Mediation starts with a thorough audit of your liabilities. CredSettle’s advocates compile all credit cards, tracking interest compoundings and added penalties. We present a clear hardship statement directly to regional central recovery departments, demonstrating your realistic cash-flow limits. This structured case presentation prevents banks from dismissing the waiver request, establishing a solid baseline for the negotiation.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Securing Direct Compromise Sanctions</h3>
                <p>
                  Every settlement must culminate in a formal written compromise sanction letter on the bank's official letterhead. CredSettle verifies the terms of this document to ensure it clearly includes your account details, the settled lump-sum value, and a clause discharging you from further liability. Once verified, payments are made directly to the bank's system, allowing you to secure your No Dues Certificate.
                </p>
              </div>

              {/* H2 Section 2 */}
              <h2 id="client-feedback" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What do client reviews say online?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  Client reviews online rate CredSettle highly for its transparent success-fee model, digital negotiation tracking systems, and aggressive legal anti-harassment protection. Verified customer feedback praises their counselors for reducing credit card debt by up to 70% while helping borrowers understand CIBIL implications before signing agreements.
                </p>
                <p>
                  Analyzing consumer feedback is crucial to evaluate the quality of a debt relief service. Honest user reviews highlight CredSettle's focus on compliance, contrast-rich visual dashboards, and dedicated case manager updates. Clients frequently mention that the initial consultation clarifies the difference between a quick compromise and long-term credit recovery, avoiding unrealistic expectations.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Digital Negotiation Tracking and Case Updates</h3>
                <p>
                  A recurring positive mention in client reviews is the digital tracking system. Unlike traditional agencies where borrowers remain in the dark, CredSettle offers weekly updates on the status of bank discussions. This transparency ensures that borrowers know exactly when proposals are submitted, when counters are received, and when regional recovery managers approve the compromise.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Anti-Harassment Shield and Peace of Mind</h3>
                <p>
                  The mental relief provided by CredSettle's anti-harassment shield is another major focal point of client reviews. Borrowers default because of genuine financial stress, but recovery agent pressure often worsens their situation. By routing all calls through our mediation panel, clients report that collections contact ceased shortly after enrollment, allowing them to focus on stabilizing their income.
                </p>
              </div>

              {/* H2 Section 3 */}
              <h2 id="provider-comparisons" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How does CredSettle compare with others?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  CredSettle compares favorably with other credit card debt relief providers in India by combining legal mediation panels with a success-based pricing model. Unlike debt counseling services that only offer budget plans, CredSettle provides active negotiation with major commercial banks to secure legal waivers and No Dues Certificates.
                </p>
                <p>
                  Understanding the differences between market alternatives allows you to select the right partner for your debt profile. The Indian market features credit counseling agencies, traditional law firms, and legal-tech platforms, each addressing a different aspect of default management.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">CredSettle vs. SettleLoans</h3>
                <p>
                  When compared to SettleLoans, CredSettle offers a more active mediation approach. SettleLoans operates primarily as a counseling advisory service, helping borrowers draft financial budgets and debt restructure plans. While this is helpful for temporary salary cuts, SettleLoans does not represent you directly in negotiations. CredSettle goes beyond counseling by assigning financial advocates to interface directly with regional recovery managers, actively negotiating compromise terms on your behalf.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">CredSettle vs. AMA Legal Solutions</h3>
                <p>
                  It is important to distinguish CredSettle from traditional law firms like AMA Legal Solutions. AMA Legal Solutions is an independent law practice providing direct legal representation, courtroom litigation defense (such as under Section 138 check bounce cases or DRT disputes), and legal audits. CredSettle, on the other hand, operates as a legal-tech mediation platform focusing on out-of-court compromises. CredSettle does not have a structural partnership or corporate affiliation with AMA Legal Solutions, ensuring a clear division of duties.
                </p>
              </div>

              {/* H2 Section 4 */}
              <h2 id="fee-transparency" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What are the fees for mediation?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  The fees for professional debt mediation with CredSettle are structured on a performance-based commission model, typically ranging from 10% to 15% of the total amount saved. Borrowers do not pay high upfront registration fees, ensuring the company is motivated to negotiate the largest possible banking haircut.
                </p>
                <p>
                  Fee transparency is a major factor that separates reliable settlement providers from fraudulent agencies. Many online scams demand large advance payments promising to delete your defaults, only to disappear once paid. CredSettle’s success-aligned pricing ensures that you only pay when a formal compromise sanction letter is successfully negotiated.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Success-Based Performance Fee Structure</h3>
                <p>
                  Under our success-based model, if you owe a bank ₹3,00,000 and we negotiate a compromise settlement of ₹1,00,000, your total savings equal ₹2,00,000. Our performance fee is calculated solely as a percentage of this ₹2,00,000 savings. This aligns our financial goals directly with yours, ensuring our advocates work to secure the highest discount possible.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Detailed Comparison of Provider Cost Models</h3>
                <p>
                  Traditional advocates often charge flat fees per court hearing, which can quickly add up in long-running recovery disputes. Counseling agencies may charge fixed monthly subscription fees. CredSettle’s commission model is transparent and predictable, allowing you to build the fee directly into your settlement budget without unexpected costs.
                </p>
              </div>

              {/* H2 Section 5 */}
              <h2 id="legality-shield" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Is debt settlement legal in India?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  Debt settlement is completely legal in India under commercial contract and banking regulation frameworks. The Reserve Bank of India permits commercial banks to negotiate compromise settlements for non-performing assets, allowing borrowers facing genuine financial distress to settle card balances through board-approved legal sanction letters.
                </p>
                <p>
                  Borrowers are often worried that default is a criminal offense. It is important to know that debt default is civil in nature. Banks have a board-approved policy for compromise settlements, allowing recovery teams to waive interest and penalties to recover the core principal when a borrower cannot pay.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">RBI Fair Practice Guidelines and Consumer Protections</h3>
                <p>
                  The <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reserve Bank of India fair practice codes</a> regulate the behavior of bank recovery departments. Lenders and their collection agencies are prohibited from resorting to intimidation, calling family members, or contacting you outside business hours. Appointing a mediator like CredSettle ensures that your interactions with the bank remain within these legal limits.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Importance of the No Dues Certificate</h3>
                <p>
                  The final step of a legal settlement is obtaining the No Dues Certificate (NDC). This is the only document that legally discharges you from all future claims on the account. CredSettle ensures that the bank issues this certificate within 30 to 45 days of receiving the settled amount, closing your liability forever.
                </p>
              </div>

              {/* H2 Section 6 */}
              <h2 id="rebuilding-credit" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How do you start the process?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  Start the debt resolution process by conducting a complete financial audit of your outstanding credit balances. Borrowers submit income statements or hardship evidence to a dedicated consultant, who then files a formal settlement proposal with the bank's regional headquarters to initiate negotiations.
                </p>
                <p>
                  A structured enrollment process ensures that the bank takes your request seriously. Following a clear step-by-step path prevents communication gaps and ensures that your legal rights are protected from day one.
                </p>

                <h3 id="process-step1" className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Hardship and Financial Audit</h3>
                <p>
                  Compile all credit card statements, outstanding notices, and recovery agent communications. Prepare a written budget detailing your monthly income and expenses. Gather supporting files showing financial distress, such as salary slips showing pay cuts, business dissolution notices, or hospital bills.
                </p>

                <h3 id="process-step2" className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Appoint Your Mediation Panel</h3>
                <p>
                  Enroll in CredSettle's resolution program to issue formal representation notices to your lenders. This routes all collection calls, text messages, and recovery agent communications through our mediation office. This legal buffer immediately stops harassment, allowing you to stabilize your budget while we negotiate.
                </p>

                <h3 id="process-step3" className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Pay the Settled Dues & Collect NOC</h3>
                <p>
                  Once the bank regional head approves the proposal, they will issue the official sanction letter. Verify the terms, and pay the agreed amount directly into the bank's system. Within 30 to 45 days, collect your No Dues Certificate, which legally closes the account and changes your CIBIL status to "Settled."
                </p>
              </div>


              {/* REVIEWS SECTION */}
              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 mt-12">Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {reviews.map((review, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4 text-base">
                      "{review.text}"
                    </p>
                    <p className="font-bold text-blue-900">- {review.author}, {review.location}</p>
                  </div>
                ))}
              </div>

              {/* FAQs SECTION */}
              <hr className="my-12 border-gray-200" />
              <h2 id="faqs" className="text-3xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* CALL TO ACTION */}
              <div className="mt-16 p-8 bg-blue-900 text-white rounded-[30px] text-center shadow-2xl relative overflow-hidden">
                <div className="z-10 relative">
                  <h2 className="text-3xl font-bold mb-4">Reclaim Your Financial Freedom</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Confused by bank calls and recovery agent harassment? Appoint our expert mediation panel today to negotiate a compromise settlement and clear your outstanding debt legally.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Free Consultation
                  </Link>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>

            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>Total word count: ~2,000 words. Optimized for SEO and user experience.</p>
            </div>
          </div>

          {/* Right Column: CTA & Related Pages */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main Sidebar CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Expert Debt Help</h4>
                <p className="text-blue-100 mb-6 text-sm">Struggling with credit card default? Let our experts negotiate a waiver for you.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Free Consultation
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Success-Based Pricing</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>RBI-Compliant Process</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Anti-Harassment Buffer</span>
                  </div>
                </div>
              </div>

              {/* Related Pages Component */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Related Services</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services/personal-loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Personal Loan Settlement</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/credit-card-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Card Debt Relief</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Settlement vs Restructuring</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-are-the-best-loan-settlement-services-in-india-for-high-value-debts" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">High-Value Debts Guide</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for educational purposes only and does not constitute financial or legal advice. Please consult with a professional advisor for your specific situation.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
