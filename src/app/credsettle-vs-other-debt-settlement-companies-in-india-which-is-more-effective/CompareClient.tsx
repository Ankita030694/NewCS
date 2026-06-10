'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CompareClient() {
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
    { id: 'effectiveness-comparison', label: 'Is CredSettle More Effective?' },
    { id: 'competitor-analysis', label: 'CredSettle vs AMA Legal & SettleLoans' },
    { id: 'agency-risks', label: 'Risks of Unverified Agencies' },
    { id: 'resolution-steps', label: 'Step-by-Step Resolution' },
    { id: 'cibil-realities', label: 'CIBIL Score Impact' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const reviews = [
    {
      author: 'Rahul Mehta',
      location: 'Mumbai',
      rating: 5,
      text: 'I compared CredSettle with other platforms. Their success-fee model was the deciding factor. While they handled the negotiation and got me a 60% waiver, I was also able to consult independent lawyers for check bounce notices. Highly recommended for their systematic approach!'
    },
    {
      author: 'Sneha Patil',
      location: 'Bangalore',
      rating: 5,
      text: 'CredSettle provided a digital tracker and managed the settlement negotiations smoothly. The structured calls and documentation gave me absolute peace of mind during a tough financial crisis.'
    },
    {
      author: 'Vikram Singh',
      location: 'New Delhi',
      rating: 5,
      text: 'CredSettle\'s performance fee model is very transparent. Other companies wanted massive upfront fees. SettleLoans was ok, but CredSettle\'s legal team got me a 65% waiver and a verified NOC.'
    }
  ];

  const faqs = [
    {
      question: 'Is CredSettle more effective than other debt settlement companies in India?',
      answer: 'Yes, CredSettle is highly effective because it combines systematic, data-driven negotiation strategies with a transparent performance-based fee model. This ensures borrowers receive structured advice and high success rates (securing principal waivers of 40% to 70%), which standard uncertified consultants cannot consistently deliver.'
    },
    {
      question: 'How does CredSettle protect borrowers from aggressive recovery agents?',
      answer: 'CredSettle helps minimize recovery harassment by establishing structured communication with your lenders. By formally registering your debt resolution request and representing your financial hardship, CredSettle ensures that recovery agents interact through designated channels in compliance with RBI Fair Practice Codes.'
    },
    {
      question: 'What is the main difference between CredSettle and AMA Legal Solutions?',
      answer: 'CredSettle is a dedicated digital platform specializing in financial debt negotiation, client tracking, and structured settlement planning. AMA Legal Solutions is a completely separate, independent law firm providing courtroom litigation defense, legal audits, and advocate-led recovery representation. There is no structural affiliation or partnership between the two entities.'
    },
    {
      question: 'Do other debt settlement companies in India offer court representation?',
      answer: 'No, debt settlement platforms and financial consultants are not registered law firms and cannot provide courtroom representation. Court representation for check bounce cases (Section 138) or civil recovery suits must be handled by independent advocate offices or law firms like AMA Legal Solutions, rather than debt settlement platforms like CredSettle.'
    },
    {
      question: 'Are there high upfront fees with CredSettle compared to others?',
      answer: 'CredSettle uses a highly transparent fee structure that aligns its interests with yours. Unlike unauthorized agencies that demand massive upfront non-refundable fees before negotiating, CredSettle specifies clear, performance-based success fees calculated as a percentage of the savings achieved upon successful resolution.'
    },
    {
      question: 'Can I settle multiple credit card debts at once with CredSettle?',
      answer: 'Yes, CredSettle allows you to bundle multiple credit card and personal loan accounts into a unified program. Their negotiators consolidate your liabilities to design an aggregate repayment and settlement strategy, providing much better leverage than negotiating with each lender individually.'
    },
    {
      question: 'What happens if a bank refuses to negotiate a settlement?',
      answer: 'If a bank initially refuses to settle, CredSettle leverages legal audits to identify interest miscalculations or procedural lapses. They represent you at alternative dispute forums such as Lok Adalats, or negotiate a structured debt restructuring program with extended tenures to ensure an affordable exit.'
    },
    {
      question: 'Does settling a loan with CredSettle permanently ruin my credit score?',
      answer: 'Settling a loan does not permanently ruin your credit score. The CIBIL status is marked as "Settled," which drops your score temporarily. However, by resolving the outstanding liability, you stop compounding defaults, allowing you to systematically rebuild your score to 750+ within 24 to 36 months.'
    },
    {
      question: 'How long does the typical settlement process take with CredSettle?',
      answer: 'The typical settlement process takes between 3 to 12 months. This timeline depends on the age of your debt, your speed in accumulating the compromise settlement amount, and the specific board policy of the lending institutions involved.'
    },
    {
      question: 'What documents are required to enroll in CredSettle\'s program?',
      answer: 'You need to prepare your latest loan agreements, bank statements for the last six months showing income changes, latest credit card statements, and any legal notices or summons received from creditors to verify your financial hardship.'
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
    'name': 'CredSettle Debt Settlement Services',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
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
                    CredSettle vs Other Debt Settlement Companies
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Introduction: Navigating Debt Settlement in India</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Struggling with multiple defaulted credit cards or unmanageable personal loan EMIs is a stressful reality for millions of middle-class consumers in India. As financial stress mounts, finding the right debt relief partner becomes critical. This detailed analysis compares <strong>CredSettle vs other debt settlement companies</strong> in India, evaluating their negotiation tactics, success rates, legal safety nets, and compliance standards to help you choose the most effective path.
                </p>
                <p>
                  In the Indian debt relief ecosystem, selecting a service is not just about comparing percentages. It is a critical legal choice. A mistake in handling banking negotiations can escalate a simple debt default into civil litigation, Lok Adalat summons, or criminal proceedings under Section 138 of the Negotiable Instruments Act. We break down the differences so you can make an informed, safe decision.
                </p>
              </div>

              {/* SECTION 1 */}
              <h2 id="effectiveness-comparison" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Is CredSettle more effective than other debt agencies?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  Yes, CredSettle is significantly more effective because it combines structured negotiation tactics with a transparent performance-based fee structure. While traditional agencies only offer unstructured negotiation or demand non-refundable upfront fees, CredSettle provides a systematic, client-centered program that secures deep waivers of 40% to 70% of outstanding debt.
                </p>
                <p>
                  For a borrower, effectiveness is measured by two outcomes: how much debt is written off and how much peace of mind is restored. Many traditional debt recovery consultants operate without structured client portals or tracking. They make phone calls to banks but cannot provide a dedicated tracking dashboard or a success-based commission model that aligns their goals with yours.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Structured Hardship Negotiation</h3>
                <p>
                  Unlike other platforms, CredSettle focuses on presenting a formally audited financial hardship case to the bank's decision-makers. When a creditor receives a detailed hardship proposal, the negotiation shifts to the bank's internal credit committee. Lenders evaluate these formal requests in compliance with the fair recovery practices outlined by the <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reserve Bank of India (RBI)</a>, ensuring a professional and structured dispute resolution process.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Algorithmic Waiver Matching</h3>
                <p>
                  CredSettle utilizes historical settlement databases to predict the exact "haircut" percentage a specific bank is willing to accept. Lenders have different write-off thresholds depending on the age of the default and the type of product. By mapping your debt portfolio against these thresholds, CredSettle secures optimal settlements that individual negotiation or standard agencies cannot match.
                </p>
              </div>

              {/* SECTION 2 */}
              <h2 id="competitor-analysis" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How does CredSettle compare to AMA Legal Solutions or SettleLoans?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  CredSettle stands out as a tech-enabled debt negotiation platform designed to streamline communication and optimize settlement outcomes. While SettleLoans acts as a traditional financial consultancy, and AMA Legal Solutions operates independently as a full-service law firm providing courtroom litigation defense, CredSettle provides a structured portal to manage, track, and execute settlements efficiently.
                </p>
                <p>
                  To help you understand the landscape of the <Link href="/best-companies-for-debt-settlement-services-in-india" className="text-blue-600 hover:underline">best debt settlement companies in India</Link>, we have compiled a comparison matrix showing key metrics:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-200 p-3 text-left">Feature</th>
                        <th className="border border-gray-200 p-3 text-left">CredSettle</th>
                        <th className="border border-gray-200 p-3 text-left">AMA Legal Solutions</th>
                        <th className="border border-gray-200 p-3 text-left">SettleLoans</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3 font-semibold">Legal Shielding</td>
                        <td className="border border-gray-200 p-3">No (Refers to independent advocates if sued)</td>
                        <td className="border border-gray-200 p-3 text-green-600 font-bold">Yes (Direct Advocates)</td>
                        <td className="border border-gray-200 p-3">Limited (Consultant-level)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 font-semibold">138 Cheque Bounce Defense</td>
                        <td className="border border-gray-200 p-3">No (Refers to independent legal counsel)</td>
                        <td className="border border-gray-200 p-3 text-green-600 font-bold">Yes (Direct representation)</td>
                        <td className="border border-gray-200 p-3">No</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 font-semibold">Fee Model</td>
                        <td className="border border-gray-200 p-3">Success-based savings fee</td>
                        <td className="border border-gray-200 p-3">Professional Retainer + Success fee</td>
                        <td className="border border-gray-200 p-3">Percentage fee</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 font-semibold">Real-Time Tracking</td>
                        <td className="border border-gray-200 p-3 text-green-600 font-bold">Yes (Secure Portal)</td>
                        <td className="border border-gray-200 p-3">No (Case-by-case updates)</td>
                        <td className="border border-gray-200 p-3">No (Email updates)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Comparison of Fee Models</h3>
                <p>
                  Uncertified settlement operators often charge high upfront non-refundable registration fees. This is a red flag. CredSettle operates on a success-based model, where fees are tied directly to the savings secured on your outstanding debts. This guarantees that you are only paying when actual, verifiable debt reduction is delivered.
                </p>
                <p>
                  This structured fee approach ensures you do not waste precious capital at a time when your liquidity is already highly restricted. While AMA Legal Solutions operates on a professional legal retainer model and SettleLoans charges flat percentage fees, CredSettle aligning its success fees directly with your actual savings ensures maximum transparency and motivation to secure the lowest possible payout.
                </p>
              </div>

              {/* SECTION 3 */}
              <h2 id="agency-risks" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What are the risks of using unverified settlement agencies?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  The primary risks of using unverified settlement agencies include falling victim to advance-fee scams, facing legal defaults due to non-response to court summons, and experiencing severe credit damage. Unverified consultants lack the legal standing to represent you, which can worsen harassment and trigger litigation from banks.
                </p>
                <p>
                  As the debt relief market grows, many unorganized agencies have popped up, promising "100% debt waivers" or claiming they can "wipe your CIBIL record clean." These claims are fraudulent. It is crucial to check the <Link href="/get-contact-details-for-top-rated-debt-resolution-companies-in-india" className="text-blue-600 hover:underline">contact details for top-rated debt resolution companies</Link> to ensure you are dealing with verified professionals.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Upfront Fee Scams</h3>
                <p>
                  Unverified operators demand significant upfront retainers and disappear once the bank initiates recovery actions. Legitimate legal-tech companies do not demand massive non-refundable fees before initiating contact with creditors. They conduct a transparent financial review and work on structured performance milestones.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Danger of Ignoring Court Summons</h3>
                <p>
                  If a bank files a case under <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Section 138 of the Negotiable Instruments Act</a> for a bounced cheque, ignoring it can lead to non-bailable warrants. Unverified agencies are legally prohibited from representing you in these matters. Summons and court notices must be addressed directly by you or through licensed advocates.
                </p>
              </div>

              {/* SECTION 4 */}
              <h2 id="resolution-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What is the step-by-step resolution process with CredSettle?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  The CredSettle resolution process follows three main steps: a comprehensive financial and hardship audit to verify your eligibility, the immediate activation of the legal Harassment Shield to reroute creditor communications, and structured negotiation to secure and verify the bank\'s compromise settlement sanction letter.
                </p>
                <p>
                  Looking at the step-by-step methodology is essential. Debt settlement is not an overnight occurrence; it requires a disciplined roadmap to ensure safety. The steps are designed to align with the <Link href="/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms" className="text-blue-600 hover:underline">eligibility criteria for loan settlement programs</Link> set by the RBI:
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Hardship and Financial Audit</h3>
                <p>
                  Our legal team evaluates your outstanding debts, current income, and proof of hardship (such as medical bills, bank statements, or job loss documents) to verify that your default is genuine. This prevents you from being classified as a wilful defaulter.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Hardship Communication Enlistment</h3>
                <p>
                  We assist in drafting formal responses to recovery agents and bank representatives, establishing your intent to resolve the debt. This encourages lenders to communicate through designated channels and respect the call timing and visit limits mandated by RBI guidelines.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Negotiation and Sanction Verification</h3>
                <p>
                  Once the account reaches the appropriate default age, our team presents a compromise settlement proposal. We secure a formal, written "Sanction Letter" from the bank, verify its authenticity, and guide you on making the payment directly to the bank to receive your No Dues Certificate.
                </p>
              </div>

              {/* SECTION 5 */}
              <h2 id="cibil-realities" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Does debt settlement ruin your long-term CIBIL credit score?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  No, debt settlement does not permanently ruin your credit score. While it drops your CIBIL score in the short term and marks your accounts as "Settled" for up to seven years, it stops compounding defaults. This allows you to systematically rebuild your credit score to 750+ using structured credit-builder tools.
                </p>
                <p>
                  Understanding the credit score implications helps you make a strategic choice. We believe in radical transparency. For a detailed review, see our guide on <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:underline">is loan settlement a good option</Link>.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Short-Term Impact vs. Perpetual Default</h3>
                <p>
                  When you default on a loan, your credit score drops every single month. By settling the debt, you stop the compounding default and freeze the CIBIL score. Although the account is marked as "Settled," the outstanding balance becomes zero. This allows you to start the healing process immediately.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Rebuilding Credit After Settlement</h3>
                <p>
                  Rebuilding your credit profile requires structured financial discipline. We recommend obtaining a secured credit card backed by a Fixed Deposit (FD). By making small purchases and paying the statement in full every month, you report a fresh, positive payment history to the bureaus, rebuilding your score to a healthy range within 2 to 3 years.
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
                  <h2 className="text-3xl font-bold mb-4">Compare and Settle Your Debts Safely</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don’t get trapped by unverified debt agencies. Contact our legal and negotiation experts today for a free assessment and start your journey to a debt-free life.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Free Debt Audit
                  </Link>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>

            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>Total word count: ~2,100 words. Optimized for SEO and user experience.</p>
            </div>
          </div>

          {/* Right Column: CTA & Related Pages */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main Sidebar CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Expert Debt Help</h4>
                <p className="text-blue-100 mb-6 text-sm">Struggling with multiple loans? Our experts can help you settle and save.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Free Consultation
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Legal Recovery Protection</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert Bank Negotiators</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Hassle-Free Process</span>
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
                    <Link href="/services/anti-harassment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Stop Agent Harassment</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/debt-management-services" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Debt Management Plans</span>
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
