'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CibilImprovementClient() {
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
    { id: 'understanding-settlement', label: 'Understanding Settlement' },
    { id: 'impact-on-score', label: 'Impact on Score' },
    { id: 'settled-vs-closed', label: 'Settled vs Closed' },
    { id: 'step-by-step-recovery', label: 'Recovery Steps' },
    { id: 'converting-status', label: 'Converting Status' },
    { id: 'secured-credit-cards', label: 'Secured Credit Cards' },
    { id: 'financial-habits', label: 'Financial Habits' },
    { id: 'monitoring-cibil', label: 'Monitoring CIBIL' },
    { id: 'timeline-recovery', label: 'Timeline' },
    { id: 'helpful-resources', label: 'Resources' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'How much does a loan settlement drop my CIBIL score?',
      answer: 'A loan settlement can cause a significant drop in your CIBIL score, often ranging from 50 to 100 points or more. The exact drop depends on your initial score and the rest of your credit history. The main issue is the negative status reported to the bureau.'
    },
    {
      question: 'Can I get a new loan immediately after a settlement?',
      answer: 'It is very difficult to get an unsecured loan right after a settlement. Most banks will reject applications for at least 1 to 2 years until they see a consistent improvement in your credit behavior and score.'
    },
    {
      question: 'How long does the "Settled" status stay on my CIBIL report?',
      answer: 'The "Settled" status remains on your credit report for a period of 7 years. However, its negative impact on your score reduces as you build new, positive credit history over time.'
    },
    {
      question: 'Is it better to settle a loan or let it go into default?',
      answer: 'Settling a loan is better than a total default because it shows you made an effort to pay back at least a part of the debt. However, neither is ideal. Always try to pay in full if possible.'
    },
    {
      question: 'How can I remove the "Settled" remark from my CIBIL report?',
      answer: 'The only way to remove the "Settled" remark is to pay the outstanding balance (the waiver amount) to the bank. Once paid, the bank will issue a No Objection Certificate (NOC) and update the status to "Closed" or "Post-Settlement Paid in Full".'
    },
    {
      question: 'Does a secured credit card really help improve CIBIL score?',
      answer: 'Yes, a secured credit card is one of the most effective tools. Since it is backed by a fixed deposit, banks issue it easily. Using it for small amounts and paying the bill on time creates positive data points on your report.'
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
                    How to Improve CIBIL Score After Loan Settlement
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
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Guide Content</h3>
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
              
              <h2 id="understanding-settlement" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">The Reality of Loan Settlement and Your Credit Journey</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Going through a financial crisis is never easy. When bills pile up and income falls short, many people choose loan settlement as a last resort. While this offers immediate relief from the pressure of debt recovery agents and legal notices, it leaves a lasting mark on your credit history. If you have recently settled a loan, you might have noticed a sharp decline in your credit score. This guide is designed to help you navigate the road back to financial respectability.
                </p>
                <p>
                  A loan settlement happens when a bank or lender agrees to accept a payment that is less than the total outstanding amount. This usually occurs when the borrower is in a genuine financial bind and hasn't made payments for several months. While the bank stops chasing you for the money, they report this transaction to credit bureaus like CIBIL. The account status is then changed to "Settled." This status signals to future lenders that you did not fulfill your original promise of repayment.
                </p>
                <p>
                  However, a "Settled" mark is not a life sentence. Many people believe their credit history is ruined forever, but that is simply not true. With patience and a disciplined approach, you can rebuild your score from the ground up. In fact, many individuals who were once in deep debt have managed to reach a CIBIL score of 750 or higher within two to three years of their settlement. The key is to understand how the system works and to take proactive steps to fix the damage.
                </p>
                <p>
                  In the current Indian financial landscape, your CIBIL score is your passport to credit. Whether you want a car loan, a home loan, or even a credit card for daily expenses, your credit score will determine your eligibility and the interest rates you pay. If you have a low score due to a past settlement, you will likely face rejections or be offered very high interest rates. This makes the process of credit rebuilding essential for your future financial security.
                </p>
              </div>

              <h2 id="impact-on-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Impact of Settlement on Your CIBIL Score</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When a loan is settled, it affects your credit report in two primary ways. First, there is the immediate drop in the numerical score. This happens because the algorithm sees a history of missed payments followed by a partial payment. Second, there is the qualitative impact of the "Settled" status itself. Even if your score starts to climb back up after a few months, lenders who pull your full credit report will still see that "Settled" remark.
                </p>
                <p>
                  The drop in score can be quite severe. For someone with a high score of 800, a settlement can bring them down to the 600s. For someone already struggling in the 600s, it can push them into the "Poor" or "Very Poor" category. This happens because the payment history accounts for about 35% of your total credit score calculation. When you settle, you are essentially admitting that you could not pay back the full amount, which is a major red flag for the credit bureau's scoring model.
                </p>
                <p>
                  Lenders view "Settled" accounts differently than "Closed" accounts. A "Closed" status means the loan was paid back in full, including all interest and penalties. A "Settled" status means the bank had to take a loss on your account. When you apply for a new loan in the future, automated systems might reject you immediately based on this status. Humans who review your file will see you as a high-risk borrower. This is why the first step in your recovery must be to change your financial behavior and, if possible, the status of that account.
                </p>
              </div>

              <h2 id="settled-vs-closed" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Settled vs. Closed: Why the Difference Matters</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  It is crucial to understand the terminology used by banks and credit bureaus. Many borrowers think that once they pay the settlement amount, their debt is gone and everything is fine. While the legal obligation to pay ends, the reporting obligation continues.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>Settled Status:</strong> This means the bank waived off a portion of your debt. You paid a lump sum, and the bank agreed not to pursue you for the rest. This remains on your report for 7 years and is viewed negatively.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>Closed Status:</strong> This means you paid every single rupee you owed. There was no waiver. This is viewed positively and shows you are a responsible borrower.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>Written Off Status:</strong> This is even worse than settled. It means the bank gave up on collecting from you entirely and has marked the loan as a total loss. This makes getting any future credit almost impossible for a long time.
                  </li>
                </ul>
                <p>
                  If you have the financial means later on, you can actually convert a "Settled" status to a "Closed" status. This involves contacting your original lender and offering to pay the amount that was waived during the settlement. Once you pay this "difference amount," the bank will issue a fresh No Objection Certificate (NOC) stating the account is now closed in full. This is one of the most powerful things you can do to repair your credit report quickly.
                </p>
              </div>

              <h2 id="step-by-step-recovery" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">A Step-by-Step Roadmap to Credit Recovery</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Now that we understand the problem, let's look at the solution. Rebuilding your credit requires a multi-pronged approach. You cannot just wait for time to heal the wounds. You need to actively feed positive data into the credit bureau's system. Here is the roadmap we recommend for our clients:
                </p>
                <p>
                  <strong>Phase 1: Stabilization (Months 1 to 6)</strong><br />
                  In this phase, your goal is to stop the bleeding. Ensure that every single current obligation is paid exactly on time. This includes utility bills, mobile bills, and any remaining EMIs. Even a one-day delay can set you back by months. You should also pull your CIBIL report to ensure the settlement was reported correctly and there are no other errors.
                </p>
                <p>
                  <strong>Phase 2: Rebuilding (Months 6 to 12)</strong><br />
                  Once your score has stabilized, you need to start adding positive credit history. Since you likely won't get a regular credit card, this is the time to look at secured credit options. A secured credit card or a small gold loan can work wonders. These are easy to get because they are backed by collateral, yet they report to CIBIL just like any other loan.
                </p>
                <p>
                  <strong>Phase 3: Optimization (Months 12 to 24)</strong><br />
                  By now, your score should be moving upwards. Continue your good habits and start looking at ways to diversify your credit mix. A healthy mix of secured and unsecured credit is better than having only one type. You might now be eligible for a basic unsecured credit card or a small consumer durable loan (like for a phone or fridge).
                </p>
              </div>

              <h2 id="converting-status" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Power of Converting "Settled" to "Closed"</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  As mentioned earlier, the "Settled" mark is the biggest hurdle. If your financial situation improves, we strongly suggest you clear the remaining dues. Here is the process:
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Contact the Lender:</strong> Write a formal letter or email to the nodal officer of the bank that settled your loan. State that you wish to pay the waived-off amount to clear your record.
                  </li>
                  <li>
                    <strong>Get a Quote:</strong> The bank will calculate the outstanding amount plus some interest. Negotiate this if possible, but the goal is to pay the principal waiver at least.
                  </li>
                  <li>
                    <strong>Make the Payment:</strong> Once you agree on the amount, make the payment through official channels only. Ensure you get a receipt immediately.
                  </li>
                  <li>
                    <strong>Obtain the NOC:</strong> This is the most important step. Get a letter from the bank stating that the account is now "Paid in Full" and they have no further claims.
                  </li>
                  <li>
                    <strong>Follow up with CIBIL:</strong> Sometimes banks take months to update the bureau. Take your NOC and file a dispute on the CIBIL website to speed up the update.
                  </li>
                </ol>
                <p>
                  While this requires extra money, it is an investment in your future. A "Closed" status will open doors that were previously shut, and you will save far more in lower interest rates on future loans than you spent on clearing the old debt.
                </p>
              </div>

              <h2 id="secured-credit-cards" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Secured Credit Cards: Your Best Friend in Recovery</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you can't get a traditional credit card, a secured credit card is the answer. These cards are issued against a Fixed Deposit (FD) that you maintain with the bank. Usually, the credit limit is 80% to 90% of the FD amount.
                </p>
                <p>
                  Why is this so effective? Because it removes the "risk" for the bank. If you don't pay, they can take the money from your FD. However, they still report your monthly payments to CIBIL. By using a secured card for small monthly purchases (like fuel or groceries) and paying the bill in full every month, you are proving that you are now a reliable borrower.
                </p>
                <p>
                  Follow the 30% rule: Never use more than 30% of your credit limit. If your limit is 50,000 rupees, try to keep your monthly spending below 15,000 rupees. High utilization, even if you pay on time, can negatively impact your score as it suggests you are credit-hungry. After 12 to 18 months of disciplined use, most banks will be willing to offer you a regular, unsecured card or even upgrade your existing one.
                </p>
              </div>

              <h2 id="financial-habits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Developing Strong Financial Habits for the Long Term</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Credit repair is not just about tricks and tools; it is about a fundamental shift in how you handle money. The habits that led to the need for a settlement must be replaced with better ones.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Automate Your Payments:</strong> Set up standing instructions or NACH mandates for all your bills. Don't rely on your memory.</li>
                  <li><strong>Emergency Fund:</strong> Start building a small emergency fund, even if it's just 500 rupees a month. This will prevent you from needing a high-interest loan the next time a crisis hits.</li>
                  <li><strong>Budgeting:</strong> Use a simple app or a notebook to track every rupee. Knowing where your money goes is the first step to controlling it.</li>
                  <li><strong>Avoid New Inquiries:</strong> Every time you apply for a loan, it triggers a "hard inquiry" which drops your score. Only apply when you are 90% sure of approval.</li>
                </ul>
              </div>

              <h2 id="monitoring-cibil" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Monitoring and Disputing Errors on Your Report</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Credit bureaus are not perfect. Sometimes they make mistakes, and sometimes banks report incorrect data. After a settlement, it is very common to find errors in the reported amounts or dates.
                </p>
                <p>
                  Check your report for "ghost" accounts that you never opened, or accounts that you have already closed but are still showing as active. If you find an error, use the CIBIL Dispute Resolution portal. You will need to provide documentary evidence, like your settlement letter or NOC. Correcting even a small error can sometimes give your score a quick boost of 20 to 30 points.
                </p>
                <p>
                  We recommend checking your score at least once every quarter. Many apps and banks now offer free monthly score checks. While these "soft inquiries" don't hurt your score, they allow you to keep a close eye on your progress and catch any issues early.
                </p>
              </div>

              <h2 id="timeline-recovery" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How Long Does it Really Take?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  This is the most common question we get. The honest answer is that there is no overnight fix. If someone tells you they can "delete" your negative history in 30 days for a fee, they are lying.
                </p>
                <p>
                  Typically, you will see the first signs of improvement within 6 months of starting your rebuilding efforts. Reaching a "Good" score (above 700) usually takes 12 to 18 months. Reaching an "Excellent" score (750+) can take 24 to 36 months. However, the time will pass anyway. The sooner you start, the sooner you will be back in the good books of the banks.
                </p>
              </div>

              <h2 id="helpful-resources" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Helpful Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <Link href="/loan-settlement" className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors flex items-center">
                   <span className="text-blue-600 font-medium">Main Loan Settlement Guide</span>
                </Link>
                <Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors flex items-center">
                   <span className="text-blue-600 font-medium">Detailed Impact Analysis</span>
                </Link>
                <Link href="/is-cibil-ruined-forever-after-settlement" className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors flex items-center">
                   <span className="text-blue-600 font-medium">Myth vs Reality of CIBIL</span>
                </Link>
                <Link href="/which-bank-provide-personal-loan-for-cibil-defaulters" className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors flex items-center">
                   <span className="text-blue-600 font-medium">Loans for Defaulters</span>
                </Link>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "After my credit card settlement, my score was 540. Following the steps in this guide, especially the secured card tip, I reached 710 in just 14 months!"
                  </p>
                  <p className="font-bold text-blue-900">- Amit Sharma, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I didn't know I could convert settled to closed. CredSettle helped me with the process and now my report looks much cleaner. Highly recommended."
                  </p>
                  <p className="font-bold text-blue-900">- Priya Menon, Bangalore</p>
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
                  <h2 className="text-3xl font-bold mb-4">Need Personalized Credit Repair Help?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Every credit history is unique. Let our experts analyze your report and create a custom rebuilding plan for you.</p>
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
                <h4 className="font-bold text-2xl mb-4">Start Rebuilding Today</h4>
                <p className="text-blue-100 mb-6 text-sm">Don't let a past mistake define your financial future. Take the first step now.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Book a Consultation
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert Credit Analysis</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Custom Recovery Roadmap</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>No Hidden Charges</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Key Tips</h4>
                <ul className="space-y-4">
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 shrink-0"></div>
                    <span>Never miss a current payment.</span>
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 shrink-0"></div>
                    <span>Keep credit use below 30%.</span>
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 shrink-0"></div>
                    <span>Monitor your report quarterly.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Disclaimer: CredSettle provides educational resources and consulting services. We do not guarantee a specific credit score increase. Credit repair takes time and consistent financial discipline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
