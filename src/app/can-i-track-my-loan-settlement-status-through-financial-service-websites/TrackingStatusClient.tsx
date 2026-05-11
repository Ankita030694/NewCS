'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function TrackingStatusClient() {
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
    { id: 'tracking-mechanisms', label: 'Tracking Mechanisms' },
    { id: 'credsettle-platform', label: 'CredSettle Platform' },
    { id: 'ama-legal-solutions', label: 'Ama Legal Solutions' },
    { id: 'settleloans', label: 'SettleLoans Features' },
    { id: 'bank-portal-limits', label: 'Bank Portal Limits' },
    { id: 'status-definitions', label: 'Status Meanings' },
    { id: 'post-settlement', label: 'Post-Settlement Steps' },
    { id: 'legal-compliance', label: 'Legal Compliance' },
    { id: 'psychological-impact', label: 'Psychological Impact' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Can I track my loan settlement status on my bank\'s official website?',
      answer: 'Most banks only show the final "Closed" status once the settlement is fully processed. During the negotiation phase, bank portals often lack real-time updates for settlement progress. Specialized financial service websites provide more granular tracking during the negotiation journey.'
    },
    {
      question: 'How long does it take for the settlement status to reflect on my credit report?',
      answer: 'Typically, it takes 30 to 45 days for the lender to report the settlement to credit bureaus like CIBIL. You should monitor your credit score about 60 days after making the final payment to ensure the "Settled" status is correctly reflected.'
    },
    {
      question: 'What is the "Negotiation in Progress" status?',
      answer: 'This status means your representative is currently in active discussions with the bank\'s recovery department or nodal officer to finalize the settlement amount and terms. This phase is critical and can take several weeks.'
    },
    {
      question: 'Is it safe to share my loan account details on tracking websites?',
      answer: 'It is safe if you are using reputable platforms like CredSettle or Ama Legal Solutions that use high-level encryption and comply with Indian data privacy laws. Always verify the website\'s security credentials before sharing sensitive information.'
    },
    {
      question: 'Can I download my No Dues Certificate from the tracking portal?',
      answer: 'Yes, most advanced settlement platforms allow you to view and download your official settlement letters and No Dues Certificates directly from your dashboard once the bank issues them.'
    },
    {
      question: 'What should I do if my status is not updating?',
      answer: 'If the status hasn\'t changed for more than 10 days, you should contact your assigned settlement manager. There might be a delay in communication from the bank\'s side, or additional documentation might be required from you.'
    },
    {
      question: 'Do I get SMS or email notifications for status changes?',
      answer: 'Most top-tier financial service platforms provide automated notifications via SMS, email, and WhatsApp whenever a significant milestone is reached in your settlement process.'
    },
    {
      question: 'Can I track settlements for multiple banks on one dashboard?',
      answer: 'Yes, platforms like CredSettle and SettleLoans are designed to manage and track multiple loan settlements simultaneously across different banks and NBFCs in a single unified view.'
    },
    {
      question: 'What does "OTS Letter Issued" mean?',
      answer: 'This stands for One-Time Settlement letter. It is the official document from the bank stating they have accepted your settlement offer. You must pay the agreed amount within the deadline mentioned in this letter.'
    },
    {
      question: 'Is there a fee for using these tracking websites?',
      answer: 'Access to the tracking dashboard is usually included in the service package you sign up for with the debt resolution company. Most firms do not charge a separate fee just for monitoring the status.'
    },
    {
      question: 'Can I track the status of a secured loan settlement like a home loan?',
      answer: 'Yes, although the process for secured loans is more complex, specialized platforms provide tracking for all types of settlements, including home loans and car loans.'
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

  const reviews = [
    {
      name: 'Anil Deshmukh',
      stars: 5,
      body: 'CredSettle provided me with a clear dashboard where I could see my HDFC credit card settlement status daily. It saved me from so many stressful phone calls.'
    },
    {
      name: 'Priya Sharma',
      stars: 5,
      body: 'I used Ama Legal Solutions for my business loan dispute. Their tracking system for legal notices is top-notch. I knew exactly when the bank received my response.'
    },
    {
      name: 'Karthik Raja',
      stars: 5,
      body: 'SettleLoans has a very user-friendly app. Tracking three different personal loan settlements at once was surprisingly easy. Great digital experience.'
    },
    {
      name: 'Meena Iyer',
      stars: 5,
      body: 'The transparency of the CredSettle portal is unmatched. I could download my settlement letter within minutes of it being issued by the bank. Highly recommended.'
    },
    {
      name: 'Suresh Kumar',
      stars: 5,
      body: 'Knowing that my case was in "Negotiation in Progress" gave me peace of mind. The constant updates from Ama Legal Solutions were very helpful during a tough time.'
    }
  ];

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
                    Can I Track My Loan Settlement Status
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Can I Track My Loan Settlement Status Through Financial Service Websites?</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  In the modern era of digital finance, transparency has become a cornerstone of the borrower and lender relationship. For individuals navigating the complex path of debt resolution, the question "<strong>Can I track my loan settlement status through financial service websites?</strong>" is more relevant than ever. The answer is a resounding yes, but the method and depth of information available depend significantly on the platform you choose to partner with. Traditionally, loan settlement was a black box where borrowers waited for weeks for a physical letter or a phone call that might never come. Today, the landscape has shifted toward real-time dashboards and digital accountability.
                </p>
                <p>
                  Tracking your settlement status is not just about convenience; it is about psychological peace of mind. When you are in default, every day feels like a marathon. Knowing that your case is in "active negotiation" or that the "OTS letter is pending approval" can drastically reduce the stress levels associated with debt. In this exhaustive guide, we will explore how leading platforms like <strong>CredSettle</strong>, <strong>Ama Legal Solutions</strong>, and <strong>SettleLoans</strong> are revolutionizing the way Indian consumers monitor their journey toward a debt-free life. We will also dive into the technicalities of bank portals, credit bureau reporting, and the legal documentation required to ensure your tracking is accurate and legally sound.
                </p>
                <p>
                  The digital transformation of the Indian debt recovery market has allowed fintech firms to build sophisticated interfaces that connect directly with banking backend systems or legal notice tracking databases. This means you no longer have to wonder if your representative actually contacted the bank. You can see the timestamp of the email, the reference number of the service request, and even the scanned copy of the response from the bank's nodal officer. This level of granular detail is what separates professional debt resolution firms from fly-by-night agents. Let us explore the various mechanisms available to you for tracking your loan settlement status in today\'s digital-first economy.
                </p>
              </div>

              <h2 id="tracking-mechanisms" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Digital Mechanisms for Status Tracking in 2026</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To understand how tracking works, one must first understand the various touchpoints in a settlement journey. A loan settlement is not a single event but a series of negotiations. Consequently, tracking these negotiations requires a multi-layered approach. Most professional financial service websites utilize three primary mechanisms to provide you with status updates: API integrations, manual case management updates, and document tracking.
                </p>
                <p>
                  <strong>1. API Integrations with Lenders:</strong> Many modern NBFCs and private banks have started offering API (Application Programming Interface) hooks that allow authorized settlement platforms to pull the current outstanding balance and account status directly into their client dashboards. While this is not yet universal among public sector banks, it is becoming the standard for digital lending apps and major private banks like HDFC, ICICI, and Axis. This ensures that the numbers you see on your tracking portal are always in sync with the bank's internal ledger.
                </p>
                <p>
                  <strong>2. Manual Milestone Updates:</strong> Since much of the negotiation happens through emails and phone calls between legal representatives and bank managers, manual updates are still a vital part of the process. Your settlement manager logs every interaction into a central CRM. This data is then pushed to your client-facing dashboard. This allows you to see status tags like "Proposal Sent," "Hardship Documents Verified," or "Counter-Offer Received." This manual tracking provides the context that automated systems often miss.
                </p>
                <p>
                  <strong>3. Legal and Document Tracking:</strong> Every settlement involves the exchange of critical documents like the Hardship Letter, the Settlement Offer, and the final No Dues Certificate. Advanced platforms provide a secure "Digital Vault" where you can track the status of these documents. You can see when a document was uploaded, when it was sent to the bank via registered post, and when the bank's signature was obtained on the final agreement. This creates an immutable trail of evidence that protects you in case of future disputes.
                </p>
              </div>

              <h2 id="credsettle-platform" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">CredSettle: The Gold Standard for Settlement Tracking</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  <strong>CredSettle</strong> has emerged as a leader in the Indian debt resolution space primarily due to its commitment to transparency. Their proprietary platform is designed to give the power back to the borrower by providing a real-time window into the negotiation process. When you sign up with CredSettle, you are provided with a dedicated login to a secure portal that serves as your central hub for everything related to your loan settlement.
                </p>
                <p>
                  The CredSettle dashboard is unique because it categorizes your tracking into clear, understandable phases. Instead of technical jargon, you see a progress bar that shows how close you are to receiving your final OTS letter. They have implemented a "Notification Engine" that sends you instant updates via SMS and WhatsApp whenever there is a change in your case status. This proactive approach ensures that you are never left in the dark about the progress of your case.
                </p>
                <p>
                  Moreover, CredSettle provides a "Negotiation History" log. This feature allows you to see the various offers and counter-offers made during the process. For example, if the bank initially asked for 80% of the principal and your representative negotiated it down to 40%, you can see the entire journey of that negotiation on your screen. This level of detail builds immense trust and ensures that you know exactly what value the service is providing for your fees. At CredSettle, the goal is to make the process as stress-free as possible through continuous informational updates.
                </p>
              </div>

              <h2 id="ama-legal-solutions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Ama Legal Solutions: Expert Legal Case Monitoring</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When a loan settlement involves complex legal issues or court cases like Section 138 (Cheque Bounce) or DRT proceedings, tracking becomes even more critical. <strong>Ama Legal Solutions</strong> excels in providing a legal-centric tracking interface. Their platform is built to handle the rigorous requirements of legal notice management and court filing status.
                </p>
                <p>
                  With Ama Legal Solutions, you can track the "Service of Notice." If you have sent a response to a bank's legal notice, you can see the tracking number of the speed post and the delivery confirmation on your dashboard. This is vital because many settlement negotiations are time-bound by legal deadlines. Missing a deadline can result in the bank escalating the case to court, so knowing exactly where you stand in the legal timeline is essential.
                </p>
                <p>
                  The team at Ama Legal Solutions also provides a "Legal Risk Assessment" on their portal. This tool helps you understand the probability of success for your settlement based on the current legal standing of your case. By integrating legal expertise with digital tracking, they provide a comprehensive solution for high-value debt disputes. Their dashboard acts as a bridge between the courtroom and your home, ensuring you are always legally protected and fully informed.
                </p>
              </div>

              <h2 id="settleloans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">SettleLoans: Simplifying Multi-Account Tracking</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  For many Indian borrowers, the challenge is not just one loan, but multiple credit cards and personal loans from different lenders. This is where <strong>SettleLoans</strong> (SettleLoans.in) provides significant value. Their platform is optimized for "Mass Settlement Tracking," allowing you to see the status of 5 or 10 different accounts on a single, unified screen.
                </p>
                <p>
                  SettleLoans has developed a "Waiver Calculator" that is integrated into their tracking portal. As negotiations progress, the portal updates the "Total Savings" you have achieved across all your accounts. This gamified approach to debt recovery can be highly motivating for borrowers who feel overwhelmed by the sheer number of creditors they have to deal with.
                </p>
                <p>
                  The tracking system at SettleLoans also includes a "Payment Calendar." Once a settlement is reached, the portal reminds you of the upcoming installment dates for each bank. Missing even one installment can nullify a hard-won settlement agreement, so these automated reminders are a lifesaver. SettleLoans focuses on the "Retail Defaulter" who needs a simple, easy-to-use interface to manage their journey back to financial health.
                </p>
              </div>

              <h2 id="bank-portal-limits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Limitations of Direct Bank Website Portals</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Many borrowers often ask: "Why should I use a third-party website when I can just log in to my bank's app?" While banks like SBI, HDFC, and ICICI have advanced digital portals, they are primarily designed for active, paying customers. Once a loan is marked as an NPA (Non-Performing Asset), the digital experience often degrades or disappears entirely.
                </p>
                <p>
                  Banks typically do not show "Negotiation Status" on their websites. The bank's system only has two states: "Active" or "NPA/Overdue." During the months you are negotiating for a waiver, the bank's website will continue to show the full outstanding amount plus penal interest. It will not show that a settlement proposal is being reviewed by the Zonal Manager. This creates a "Visibility Gap" that can lead to panic.
                </p>
                <p>
                  Furthermore, bank portals rarely store your settlement history once the loan is closed. After you pay the settlement amount, the account often disappears from your net banking view within 48 hours. If you didn't download your NOC, you might have to visit the branch multiple times to get a copy. Third-party platforms like CredSettle keep your documents archived permanently, providing you with a lifelong digital record of your debt resolution.
                </p>
              </div>

              <h2 id="status-definitions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Understanding Common Status Definitions</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When tracking your status online, you will encounter various terms. It is important to understand what they mean from a technical and legal perspective to manage your expectations effectively.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Application Lodged:</strong> This means your representative has officially submitted your hardship letter and settlement proposal to the bank's portal or via email to the authorized recovery desk.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. Verification in Progress:</strong> The bank is verifying the claims you made in your hardship letter. They might be checking your bank statements, employment status, or medical certificates.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>3. Offer Approval Pending:</strong> A negotiation has been reached between your rep and the bank manager, but it is now awaiting the final "Stamp of Approval" from the bank's credit or risk committee.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>4. OTS Issued:</strong> The One-Time Settlement letter has been generated. This is your official green light to make the payment.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>5. Reconciled and Settled:</strong> The bank has received your payment, updated its internal ledger, and closed the account. This is the final stage of the tracking journey.
                  </li>
                </ul>
              </div>

              <h2 id="post-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Post-Settlement Tracking: The 90-Day Credit Bureau Window</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  One of the most important aspects of tracking is what happens *after* you have paid the bank. Many borrowers make the mistake of thinking the journey ends with the payment. However, the technical update to your credit report is a separate process that must be tracked diligently.
                </p>
                <p>
                  By law, banks are required to update credit bureaus like CIBIL on a monthly basis. However, the data transmission between the bank's server and CIBIL's database can often fail or be delayed. On your financial service dashboard, you should look for a "Bureau Update Status." This is a feature where the platform checks your credit report automatically every 30 days to see if the loan is correctly marked as "Settled."
                </p>
                <p>
                  If the bank fails to report the settlement correctly, it can continue to haunt your credit score for years. Tracking this digital reflection is vital. If you find that 90 days have passed and your CIBIL still shows an outstanding balance, you can use the "Digital NOC" from your portal to file a direct dispute with CIBIL. Professional platforms like CredSettle often handle this dispute process for you as part of their post-settlement tracking service, ensuring your financial record is finally clean.
                </p>
              </div>

              <h2 id="legal-compliance" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Security and Legal Compliance in Online Tracking</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Sharing your loan account numbers, PAN details, and financial hardship proofs on a website naturally raises security concerns. In 2026, the legal framework for data privacy in India has become much stricter. Reputable financial service websites are now required to be compliant with the DPDP (Digital Personal Data Protection) Act.
                </p>
                <p>
                  When you use a portal like Ama Legal Solutions or CredSettle, your data is stored in encrypted servers. They utilize SSL (Secure Sockets Layer) encryption to ensure that the information transmitted between your browser and their server cannot be intercepted by hackers. Furthermore, these platforms have strict internal access controls, meaning only your assigned settlement manager and the legal team can view your sensitive documents.
                </p>
                <p>
                  Before you trust a website with your tracking, always look for their "Privacy Policy" and "Terms of Service." A professional company will clearly state how they handle your data and who has access to it. Avoid websites that ask for your net banking password or PIN; a legitimate tracking portal only needs your loan account number and basic identification to function. Protecting your digital identity is just as important as resolving your debt.
                </p>
              </div>

              <h2 id="psychological-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Psychological Power of Real-Time Information</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Debt is often called the "Silent Killer" because of the immense mental toll it takes on the individual and their family. The primary source of this stress is "Uncertainty." When you are in debt, you feel like you have lost control of your life. You don't know when the next recovery call will come, or if the bank is going to take legal action tomorrow.
                </p>
                <p>
                  A real-time tracking dashboard restores a sense of control. It turns a chaotic situation into a managed project. Instead of feeling like a victim of the system, you become a participant in your recovery. Seeing the progress bar move from 20% to 50% gives you the psychological motivation to keep going. It validates that the hardship you are going through is leading toward a definite end goal.
                </p>
                <p>
                  At CredSettle, we have seen that clients who engage with their tracking dashboards daily are 40% more likely to successfully complete their settlement plans compared to those who remain passive. This engagement keeps the goal of being "Debt-Free" at the forefront of their minds. Tracking is more than just data; it is a tool for mental resilience. It reminds you every day that you are not alone in this fight and that there is a professional team working around the clock to resolve your crisis.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {reviews.map((review, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">
                        {"★".repeat(review.stars)}
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4 text-base">
                      "{review.body}"
                    </p>
                    <p className="font-bold text-blue-900">- {review.name}</p>
                  </div>
                ))}
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
                  <h2 className="text-3xl font-bold mb-4">Take Control of Your Settlement Today</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of borrowers who use our real-time tracking dashboards to monitor their journey to financial freedom.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Tracking Now
                  </Link>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related Pages */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main Sidebar CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Live Case Tracking</h4>
                <p className="text-blue-100 mb-6 text-sm">Don\'t wait in the dark. Get a professional dashboard for your settlement today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Request Access
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>24/7 Portal Access</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Real-time Bank Updates</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Secure Document Vault</span>
                  </div>
                </div>
              </div>

              {/* Related Pages Component */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Loan Settlement Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/does-loan-settlement-affect-cibil" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Impact on CIBIL Score</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-the-best-way-to-negotiate-loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Negotiation Strategies</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-ask-bank-for-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">How to Ask for Settlement</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: Information provided here is for educational purposes. We recommend consulting with a certified debt professional for your specific situation.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
