'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CreditScoreClient() {
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
    { id: 'importance', label: 'Why 800 Matters' },
    { id: 'pillars', label: 'The Four Pillars' },
    { id: 'repayment', label: 'Repayment Discipline' },
    { id: 'utilization', label: 'Credit Utilization' },
    { id: 'credit-mix', label: 'Credit Mix' },
    { id: 'history-length', label: 'History Length' },
    { id: 'inquiries', label: 'Managing Inquiries' },
    { id: 'monitoring', label: 'Monitoring Errors' },
    { id: 'advanced-strategies', label: 'Advanced Tips' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'How long does it take to reach an 800 credit score in India?',
      answer: 'The timeline varies based on your current financial standing. If you have no credit history, it typically takes 18 to 24 months of disciplined behavior. For those with a lower score due to past defaults, recovery can take 2 to 4 years of consistent, flawless repayment and error correction.'
    },
    {
      question: 'Will paying off my full credit card balance immediately boost my score?',
      answer: 'Yes, reducing your credit utilization ratio is one of the fastest ways to improve your score. When you pay off a high balance, the updated lower utilization is reported to bureaus, often resulting in a score jump within the next 30 to 45 days.'
    },
    {
      question: 'Does closing an old credit card account hurt my 800-score goal?',
      answer: 'Frequently, yes. Closing an old account reduces the average age of your credit history and shrinks your total available credit limit. Both factors can lead to a drop in your score. It is generally better to keep old cards active with occasional small purchases.'
    },
    {
      question: 'Can checking my own credit score lower it?',
      answer: 'No. When you check your own score through platforms like CIBIL or Experian, it is classified as a "soft inquiry." Soft inquiries do not impact your credit score. Only "hard inquiries" made by lenders during loan applications affect your rating.'
    },
    {
      question: 'Is it possible to get a home loan with a score of 750 instead of 800?',
      answer: 'A score of 750 is considered very good and will qualify you for most home loans. However, an 800+ score often unlocks the absolute lowest interest rates and higher loan-to-value ratios, saving you lakhs of rupees over the tenure of a long-term loan.'
    },
    {
      question: 'What is the ideal credit utilization ratio for an 800+ score?',
      answer: 'While banks often suggest staying under 30%, individuals with scores above 800 typically maintain a utilization ratio of less than 10%. This indicates to lenders that you have plenty of credit available but are not reliant on it.'
    },
    {
      question: 'Do debit card transactions affect my credit score?',
      answer: 'No. Debit cards use your own money from a savings or current account. Credit scores only track borrowed money and your ability to repay it. To build a score, you must use credit products like credit cards or loans.'
    },
    {
      question: 'How do I fix errors on my CIBIL report that are dragging my score down?',
      answer: 'You must raise a formal dispute through the CIBIL website. Provide evidence of the error, such as a No Objection Certificate (NOC) or bank statements. The bureau is legally required to investigate and respond within 30 days.'
    },
    {
      question: 'Can a single missed payment ruin my chance of reaching 800?',
      answer: 'A single missed payment can cause a significant drop, sometimes by 50 to 100 points, especially if your score is already high. While it doesn’t ruin your chances forever, it will require several months of perfect behavior to recover that lost ground.'
    },
    {
      question: 'Does my salary influence my credit score calculation?',
      answer: 'No. Your salary, bank balance, and job title are not part of the credit score calculation. However, lenders look at your income separately during the loan approval process to determine your repayment capacity.'
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
                    How to Get 800 Credit Score in India
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">How to Get an 800 Credit Score in India: The Ultimate Masterclass</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Achieving an 800+ credit score in India is often viewed as a financial superpower. It is a status symbol that signals extreme fiscal responsibility to every bank and financial institution in the country. Whether you are looking to secure a multi-crore home loan in Mumbai or a business expansion loan in Bangalore, having a score that touches the 800 mark opens doors that remain firmly shut for others. In this comprehensive guide, we will explore the exact mechanics of how you can elevate your CIBIL rating from average to extraordinary.
                </p>
                <p>
                  The Indian credit landscape has evolved significantly over the last decade. With the integration of advanced data analytics by bureaus like CIBIL, Equifax, and Experian, your financial life is now more transparent than ever. A credit score is not just a number; it is a living reflection of your habits, your stability, and your trustworthiness. For many, the journey to 800 feels like an uphill battle, but with the right knowledge and a disciplined approach, it is a target that is well within reach for anyone willing to put in the effort.
                </p>
                <p>
                  This guide is designed to be your roadmap. We will deconstruct the complex algorithms used by credit bureaus and provide you with actionable steps that go beyond the basic "pay your bills on time" advice. We will look into the nuances of credit utilization, the importance of a diverse credit mix, and the strategic way to handle inquiries. By the end of this masterclass, you will have a clear, step-by-step plan to join the elite club of Indian borrowers with an 800+ credit score.
                </p>
                <p>
                  Building a great credit score is a marathon, not a sprint. It requires patience and a long-term perspective. However, the rewards are immense. From significantly lower interest rates on personal loans to premium credit cards with exclusive perks, the financial benefits of a high score can save you millions over your lifetime. Let us begin this journey by understanding why that specific number, 800, is the ultimate gold standard in the Indian banking sector.
                </p>
              </div>

              <h2 id="importance" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Strategic Importance of the 800-Point Frontier</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Why is 800 the magic number? In the Indian context, most lenders categorize scores between 750 and 900 as "Excellent." However, the internal risk models of major banks like SBI, HDFC, and ICICI often have a special tier for those above 800. At this level, you are no longer just a "safe" borrower; you are a "preferred" client. This distinction translates into tangible financial advantages that can change your economic trajectory.
                </p>
                <p>
                  First and foremost is the interest rate. Many modern loan products in India are "risk-priced." This means the interest rate you pay is directly linked to your credit score. A borrower with a score of 800 might get a home loan at 8.4%, while someone with a score of 700 might be charged 9.5%. On a 50-lakh loan over 20 years, that 1.1% difference results in a saving of over 15 lakh rupees in interest payments alone. This makes your credit score one of the most profitable financial assets you can own.
                </p>
                <p>
                  Beyond interest rates, an 800+ score grants you superior negotiating power. Banks are in the business of lending, and they are desperate for high-quality borrowers. When you walk into a branch with an 800 score, you are the one in the driver's seat. You can demand waivers on processing fees, faster documentation processing, and even higher loan-to-value ratios. It gives you the leverage to shop around and force banks to compete for your business.
                </p>
                <p>
                  Finally, a high score provides a safety net. Life is unpredictable, and there may be times when you need urgent access to capital for a medical emergency or a sudden business opportunity. With an 800+ score, pre-approved loan offers and instant credit line increases become the norm. You are never more than a few clicks away from the funds you need, providing a level of financial security that is invaluable in today's volatile economy.
                </p>
              </div>

              <h2 id="pillars" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Four Pillars of an Elite Credit Rating</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To build a structure that stands the test of time, you need a solid foundation. Similarly, an 800 credit score is supported by four critical pillars. Understanding how much weight each pillar carries is essential for prioritizing your actions. The CIBIL algorithm, while proprietary, is widely understood to focus on these four areas: Repayment History, Credit Utilization, Credit Mix, and History Length.
                </p>
                <p>
                  The first pillar, Repayment History, is the most influential, accounting for approximately 35% of your score. This is where most people succeed or fail. A single 30-day delay in a credit card payment can haunt your report for months. Lenders want to see a pattern of behavior that is predictable and consistent. They are looking for "boring" financial habits where every bill is paid on time, every single time, without exception.
                </p>
                <p>
                  The second pillar is Credit Utilization, contributing about 30% to your rating. This measures how much of your available credit limit you are using. Even if you pay your bills in full, using 90% of your limit every month suggests to the algorithm that you are "credit hungry," or living beyond your means. To reach 800, you must master the art of keeping this ratio low, regardless of your actual spending power.
                </p>
                <p>
                  The third and fourth pillars, Credit Mix and History Length, make up the remaining 35%. Credit Mix looks at whether you can handle different types of debt, such as secured home loans and unsecured credit cards. History Length measures how long you have been an active participant in the credit market. These factors require time and strategic planning. You cannot rush a ten-year credit history, but you can certainly take steps today to ensure your future profile is robust.
                </p>
              </div>

              <h2 id="repayment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The First Pillar: Impeccable Repayment Discipline</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you want to join the 800-club, you must treat your payment due dates as sacred. In the eyes of a credit bureau, there is no such thing as a "small" delay. Whether it is a 500-rupee utility bill on a credit card or a 50,000-rupee EMI, a missed payment is a missed payment. The algorithm does not care about your excuses, whether you were traveling, forgot the password, or had a technical glitch with the bank's app.
                </p>
                <p>
                  The most effective way to ensure 100% on-time payments is automation. Every major Indian bank offers an "Auto-Debit" facility for credit cards and loans. Set this to pay the "Total Amount Due," not just the "Minimum Amount Due." Paying only the minimum is a trap that keeps you in debt and signals financial distress to the bureaus. If you are worried about having enough balance on a specific date, set up multiple calendar alerts and SMS reminders.
                </p>
                <p>
                  What happens if you have already missed a payment? The damage is done, but it is not permanent. The impact of a late payment fades over time as you build a fresh layer of positive history. However, you must act immediately to bring the account current. The longer a payment remains "overdue," the more severe the penalty. A "30 days past due" (DPD) status is bad, but a "90 days DPD" is catastrophic, as it often leads to the account being marked as an NPA (Non-Performing Asset).
                </p>
                <p>
                  Consistency is the key here. The 800-score borrowers are not those who have never made a mistake; they are those who have shown a sustained period of perfect behavior following any past issues. Lenders look for a "clean" window of at least 24 to 36 months. If your report shows no late payments for the last three years, you are in a prime position to cross the 800 threshold, even if your earlier history was less than perfect.
                </p>
              </div>

              <h2 id="utilization" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Second Pillar: Mastering Credit Utilization</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Credit Utilization Ratio (CUR) is the silent killer of credit scores. Many people believe that as long as they pay their full statement balance every month, their score will stay high. This is a misconception. The "balance" reported to the credit bureau is typically your statement balance on the date the statement is generated. If you have a credit limit of 1 lakh and you spend 90,000, your CUR is 90% at the time of reporting, even if you pay it all off two days later.
                </p>
                <p>
                  To reach an 800 score, you should aim for a CUR of less than 10%. This might seem restrictive, but there are several ways to achieve this without actually spending less. The most straightforward method is to increase your total available credit limit. Contact your bank and request a limit increase. If your income has grown, they are usually happy to oblige. A higher limit instantly lowers your utilization ratio for the same amount of spending.
                </p>
                <p>
                  Another advanced strategy is "pre-payment." If you know you are going to have a high-spending month, pay off a portion of your current balance *before* the statement is even generated. This ensures that the balance reported to CIBIL is low. For example, if you spend 50,000 but pay 40,000 mid-month, only 10,000 will show up on your statement and your credit report. This simple hack can boost your score by 20 to 30 points in a single billing cycle.
                </p>
                <p>
                  Be careful with multiple credit cards. Your total utilization is calculated across all your cards combined, but the utilization on individual cards also matters. If you have three cards with 50,000 limits each, and you max out one while leaving the others at zero, your overall utilization is 33%, but that one maxed-out card will still negatively impact your score. Spreading your expenses across multiple cards to keep each individual CUR below 10% is a hallmark of an 800-score strategist.
                </p>
              </div>

              <h2 id="credit-mix" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Third Pillar: Strategic Credit Mix and Longevity</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Lenders in India value diversity. They want to see that you can handle different types of financial obligations. A person who only has credit cards is viewed as slightly more risky than someone who has a credit card, a car loan, and a home loan. This is known as the "Credit Mix." While you should never take a loan just for the sake of your credit score, having a healthy balance of secured (backed by collateral) and unsecured (not backed by collateral) credit is beneficial.
                </p>
                <p>
                  Secured loans, such as home loans or gold loans, are viewed very positively because they demonstrate a long-term commitment and the possession of assets. Unsecured credit, like personal loans or credit cards, shows your ability to manage liquidity. If your current profile is heavily skewed toward credit cards, adding a small consumer durable loan (like a 0% EMI offer for a phone or appliance) can actually help diversify your mix and nudge your score closer to 800.
                </p>
                <p>
                  Longevity, or the length of your credit history, is the one factor you cannot buy or hack. It simply takes time. The age of your oldest active account and the average age of all your accounts combined are important metrics. This is why you should almost never close your oldest credit card. Even if you don't use it much and it has no rewards, keeping it open maintains the "anchor" of your credit history. Closing it could instantly reduce the age of your profile from, say, 10 years to 5 years, causing a sudden dip in your score.
                </p>
                <p>
                  For young professionals just starting out, the best way to build longevity is to get a basic credit card as early as possible. Even a secured card against a fixed deposit (FD) is a great starting point. By the time you are ready for a major life purchase like a home, you will already have several years of history behind you. Remember, the 800-score club is largely composed of veterans who have managed credit responsibly for a decade or more.
                </p>
              </div>

              <h2 id="inquiries" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Fourth Pillar: Managing Hard Inquiries and New Credit</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Every time you apply for a new loan or credit card, the lender pulls your credit report from a bureau. This is known as a "Hard Inquiry." Each hard inquiry typically knocks a few points off your score and stays on your report for up to two years. More importantly, multiple hard inquiries in a short period of time send a red alert to lenders. It makes you appear "credit hungry," suggesting that you might be in financial trouble and are desperately looking for funds.
                </p>
                <p>
                  To protect your 800-score goal, you must be extremely selective about new credit applications. Avoid the temptation of "applying for every card" just because of a free airport lounge or a discount on an e-commerce site. Every application has a cost. If you are planning to take a major loan like a home loan in the next six months, you should stop all other credit applications entirely. This ensures your score is at its peak when the bank does its final check.
                </p>
                <p>
                  It is also important to distinguish between hard and soft inquiries. Checking your own score is a "Soft Inquiry" and has zero impact. Many financial apps now offer free monthly score updates. Use these to monitor your progress without fear. Only the inquiries initiated by a lender for the purpose of granting credit are the ones that hurt. If a bank calls you and offers a "pre-approved" card, ask them specifically if accepting it will involve a hard pull of your credit report.
                </p>
                <p>
                  When you do need to shop for a loan, try to do all your inquiries within a short window of 14 to 30 days. Most modern scoring algorithms recognize this as "rate shopping" for a single loan and may treat multiple inquiries for the same purpose as a single event. However, this is not a guarantee in the Indian system, so the best policy remains to do your research first, narrow down your choice to one or two lenders, and only then submit formal applications.
                </p>
              </div>

              <h2 id="monitoring" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Role of Systematic Monitoring and Dispute Resolution</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  You can follow every rule perfectly and still have a low score if your credit report contains errors. In India, reporting mistakes are more common than you might think. A loan that you have fully paid off might still show as "Active," or a payment that you made on time might be marked as "Delayed" due to a clerical error at the bank. These inaccuracies are invisible enemies that can keep you away from the 800-point mark for years.
                </p>
                <p>
                  Systematic monitoring is the only way to catch these errors. You should download your full credit report from all four major bureaus (CIBIL, Equifax, Experian, and CRIF Highmark) at least once every six months. Look at every single account listed. Check the "Date of Last Payment," the "Current Balance," and the "Account Status." If you find something that doesn't look right, you must take action immediately.
                </p>
                <p>
                  The dispute resolution process in India has improved significantly. You can raise a dispute online through the bureau's website. Once a dispute is raised, the bureau contacts the respective bank to verify the information. The bank is required to respond within 30 days. If the bank admits the error, the bureau updates your report, and you will often see an immediate jump in your score. Always keep your No Objection Certificates (NOC) and final closure letters safe, as these are your primary evidence in any dispute.
                </p>
                <p>
                  Another thing to watch out for is identity theft. If you see a loan or a credit card on your report that you never applied for, you may be a victim of fraud. This is becoming increasingly common with the rise of digital lending apps. Reporting such instances to the cyber cell and the credit bureaus is crucial not just for your score, but for your overall financial security. An 800-score borrower is an informed and vigilant borrower.
                </p>
              </div>

              <h2 id="advanced-strategies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Advanced Strategies: Settlement, Reconstruction, and Beyond</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  For those who have faced serious financial setbacks in the past, reaching 800 requires a different set of strategies. If you have an account marked as "Settled" or "Written Off," your score is likely stuck in the 500s or 600s. A settlement means the bank accepted less than the full amount you owed. While this stops the recovery calls, it leaves a permanent scar on your credit report that lenders view as a red flag.
                </p>
                <p>
                  The only way to truly recover from a "Settled" status is to turn it into a "Closed" status. This involves contacting the bank, paying the remaining balance (the "haircut" amount) plus any negotiated interest, and obtaining a fresh NOC. This process, often called credit reconstruction, is the most powerful way to restart your journey to 800. Once the status changes from "Settled" to "Closed," the negative impact starts to diminish much faster.
                </p>
                <p>
                  Another advanced tip is the use of "Credit Builder" products. Some fintech companies in India now offer specialized loans or cards designed specifically to report positive data to bureaus. These are often small, secured loans where the money is kept in a fixed deposit. By paying the EMIs on time, you create a fresh stream of positive data that eventually outweighs your past mistakes. It is like "diluting" the negative history with a large volume of new, positive history.
                </p>
                <p>
                  Finally, consider the timing of your credit activities. The bureaus usually receive data from banks once a month. If you make a large payment, it won't reflect on your score the next day. It usually takes 30 to 45 days for the information to flow through the system. If you are applying for a loan, plan your credit score "polishing" at least two months in advance. This ensures that every positive action you've taken is fully reflected in the number the lender sees.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Success Stories from Our Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was stuck at 680 for years due to a settled credit card from my college days. Following the reconstruction advice here, I paid off the balance and got my NOC. Six months later, my score hit 812! I just got my home loan approved at the lowest possible rate."
                  </p>
                  <p className="font-bold text-blue-900">- Vikram Singh, Gurgaon</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The pre-payment hack for credit utilization changed everything for me. My score jumped from 745 to 790 in just two months. I never knew that paying before the statement date could have such a massive impact. Highly recommend this guide!"
                  </p>
                  <p className="font-bold text-blue-900">- Priya Sharma, Pune</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Excellent depth of information. The section on credit mix helped me realize I was relying too much on unsecured credit. I added a small consumer loan and saw my score cross 800 within a year. Thank you for the clear roadmap."
                  </p>
                  <p className="font-bold text-blue-900">- Amit Verma, Hyderabad</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I used the dispute resolution steps to fix an error where an old loan was showing as unpaid. CIBIL corrected it in 20 days, and my score went up by 65 points. Now I'm finally in the 800 club!"
                  </p>
                  <p className="font-bold text-blue-900">- Meera Iyer, Chennai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "As a business owner, my credit score is my most important asset. This guide provided the advanced strategies I needed to manage high-value transactions without hurting my personal rating. Truly a masterclass in credit management."
                  </p>
                  <p className="font-bold text-blue-900">- Rajesh G., Mumbai</p>
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
                  <h2 className="text-3xl font-bold mb-4">Ready to Master Your Financial Future?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don't let a low credit score hold you back. Start your journey to an 800+ rating with the expert guidance of CredSettle today.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Get a Free Credit Assessment
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
                <h4 className="font-bold text-2xl mb-4">Unlock Your 800 Score</h4>
                <p className="text-blue-100 mb-6 text-sm">Need professional help to rebuild your credit? Our experts specialize in reconstruction and dispute resolution.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Book a Consultation
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Direct Bureau Disputes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Settlement to Closure Help</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Interest Rate Negotiation</span>
                  </div>
                </div>
              </div>

              {/* Related Pages Component */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Improve CIBIL After Settlement</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/does-foreclosure-of-loan-affect-cibil" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Foreclosure and CIBIL Impact</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">How Loan Settlement Works</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-cibil-ruined-forever-after-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Is CIBIL Ruined Forever?</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for educational purposes only. Credit scoring is a complex process and results may vary based on individual financial circumstances.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
