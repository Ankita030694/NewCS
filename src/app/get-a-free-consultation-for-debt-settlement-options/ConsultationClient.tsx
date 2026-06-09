'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ConsultationClient() {
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
    { id: 'understanding-settlement', label: 'Understanding Settlement' },
    { id: 'consultation-importance', label: 'Why Consult?' },
    { id: 'expert-providers', label: 'Expert Providers' },
    { id: 'process-steps', label: 'The Process' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'credit-impact', label: 'Credit Score Impact' },
    { id: 'misconceptions', label: 'Misconceptions' },
    { id: 'legal-aspects', label: 'Legal Safeguards' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'How do I get a free consultation for debt settlement options?',
      answer: 'You can easily book a free session by visiting the CredSettle website and filling out the contact form. Our experts will then schedule a time to discuss your financial situation and explain the available settlement routes.'
    },
    {
      question: 'Is a debt settlement consultation really free?',
      answer: 'Yes, at CredSettle, we believe everyone should have access to professional advice without upfront costs. The initial consultation is completely free and carries no obligation to enroll in any program.'
    },
    {
      question: 'What information do I need for my debt consultation?',
      answer: 'To get the most out of your session, you should have details about your total outstanding debt, the names of your creditors, your current monthly income, and a list of your basic living expenses.'
    },
    {
      question: 'Can I settle my debts on my own without a consultant?',
      answer: 'While it is possible to negotiate directly with banks, professional consultants like CredSettle have established relationships and experience that often lead to much better settlement terms and significantly less stress for the borrower.'
    },
    {
      question: 'How long does a debt settlement consultation take?',
      answer: 'Typically, a comprehensive initial consultation lasts between 20 to 45 minutes, depending on the complexity of your debts and the number of questions you have for our experts.'
    },
    {
      question: 'Will speaking with a debt consultant affect my credit score?',
      answer: 'No, simply having a consultation with CredSettle does not impact your credit score. We do not perform any hard inquiries during the initial advice session.'
    },
    {
      question: 'Can I settle secured loans like home or car loans?',
      answer: 'Debt settlement is primarily focused on unsecured debts such as credit cards and personal loans. Secured loans are generally not eligible for settlement as the bank can repossess the underlying asset.'
    },
    {
      question: 'What is the minimum debt required for a consultation?',
      answer: 'There is no strict minimum, but debt settlement is most effective for individuals who are facing genuine financial hardship and have significant outstanding balances across multiple unsecured accounts.'
    },
    {
      question: 'How does CredSettle help with creditor harassment?',
      answer: 'During the consultation, we explain the legal protections available to you. Once you enroll, our team handles communications with creditors, which can lead to a significant reduction in unwanted calls and pressure.'
    },
    {
      question: 'What are the alternatives to debt settlement?',
      answer: 'During your consultation, we also discuss other options like debt consolidation, restructuring, or simply creating a stricter budget to pay off the debt in full if that is feasible for you.'
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
                    Free Debt Consultation
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Navigating Your Path to Financial Freedom: A Complete Guide to Debt Settlement Consultations</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Living with overwhelming debt is a burden that affects every aspect of your life, from your mental health to your physical well-being. When the monthly bills exceed your income and the phone never stops ringing with collection calls, it is easy to feel like there is no way out. However, financial recovery is possible through the right strategy. The first and most critical step in this journey is to <strong>get a free consultation for debt settlement options</strong>. This initial session is designed to provide you with clarity, hope, and a practical roadmap to resolve your liabilities without losing your peace of mind.
                </p>
                <p>
                  In the complex financial landscape of India, many borrowers are unaware of the legal and professional avenues available for debt relief. Whether you are struggling with multiple credit cards or a personal loan that has spiraled out of control, understanding your rights is essential. A debt settlement consultation serves as a bridge between your current financial crisis and a future where you are debt free. It is a safe space to discuss your challenges with experts who understand the nuances of banking regulations, RBI guidelines, and creditor behavior.
                </p>
                <p>
                  The goal of this comprehensive guide is to explain exactly what happens when you seek professional help. We will explore how a consultation works, why it is vital to choose reputable providers like CredSettle, and how this process can save you from the long term consequences of default. By the end of this article, you will understand why thousands of Indians are choosing to take control of their finances through expert led negotiation. The path to recovery starts with a single conversation, and that conversation is more accessible than you might think.
                </p>
                <p>
                  Debt stress is not just about the numbers on a bank statement; it is about the constant anxiety of not knowing if you can provide for your family or protect your reputation. When you decide to <strong>get a free consultation for debt settlement options</strong>, you are not just asking for a financial calculation. You are asking for a partner who can stand between you and the aggressive tactics of recovery agents. You are seeking a professional perspective that looks beyond the immediate crisis to see the possibility of a clean slate. Let us dive deep into the world of debt settlement and discover how you can reclaim your financial future today.
                </p>
              </div>

              <h2 id="understanding-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What Exactly is Debt Settlement?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Before you sit down for a consultation, it is helpful to understand the core concept of debt settlement. In simple terms, debt settlement is a process where a borrower and a creditor agree to a one time payment that is less than the total amount owed. This agreement effectively "settles" the debt, and the creditor agrees to stop all collection efforts and mark the account as resolved. It is typically an option reserved for those who are in deep financial hardship and have reached a point where they can no longer make even the minimum payments.
                </p>
                <p>
                  Why would a bank or a credit card company agree to accept less than what is owed? The answer is simple risk management. From the creditor's perspective, receiving a portion of the debt through a settlement is often better than receiving nothing at all through a total default or bankruptcy. When you work with experts like CredSettle, you are leveraging this economic reality. Professional negotiators know how to present your case in a way that proves your inability to pay the full amount while demonstrating your sincere desire to resolve the obligation.
                </p>
                <p>
                  It is important to distinguish debt settlement from other forms of debt relief. Unlike debt consolidation, which involves taking out a new loan to pay off old ones, settlement reduces the actual principal amount you owe. Unlike debt restructuring, which might just lower your interest rate or extend your loan term, settlement offers a definitive end date to your debt. This makes it a powerful tool for those who need a clean break from their financial past. During your free session, you will learn if this specific route is the most efficient choice for your unique situation.
                </p>
                <p>
                  The process involves careful timing and strategic communication. Banks are more likely to settle when they realize that the borrower is truly incapable of full repayment. However, doing this on your own can be intimidating. This is where a consultation becomes invaluable. You will learn the "how" and "when" of the negotiation process, ensuring that you don't make mistakes that could lead to legal complications. Understanding the mechanics of settlement is the first step in moving from a state of victimhood to a state of proactive resolution.
                </p>
              </div>

              <h2 id="consultation-importance" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Critical Importance of a Free Consultation</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Many people hesitate to seek help because they feel embarrassed or believe they can't afford professional advice. This is why the opportunity to <strong>get a free consultation for debt settlement options</strong> is so significant. It removes the barrier to entry and allows you to get expert insights without any financial risk. A consultation is not a sales pitch; it is an educational experience where your financial health is the primary focus. It provides a mirror to your current situation, helping you see the reality of your debt without the fog of stress and fear.
                </p>
                <p>
                  One of the biggest benefits of a consultation is the objective assessment of your debt. When you are in the middle of a crisis, every bill feels equally urgent. An expert from CredSettle can help you prioritize your debts, identifying which ones are the most damaging to your credit and which ones require immediate attention. They can explain the difference between secured and unsecured debt and why your strategy should differ for each. This level of clarity is often enough to significantly reduce the feeling of being overwhelmed.
                </p>
                <p>
                  Furthermore, a consultation provides you with a realistic expectation of what can be achieved. You might have heard stories of people settling for 30 percent of their debt, but every case is different. A professional will look at your creditors, the age of your debt, and your current income to give you a projected settlement range. This prevents you from having false hope while also showing you that a substantial reduction is indeed possible. Knowledge is power, and in the world of debt, that power comes from understanding your specific leverage and limitations.
                </p>
                <p>
                  Lastly, the emotional relief of talking to someone who understands cannot be overstated. Debt is a lonely struggle, but during a consultation, you realize that you are not alone. There are thousands of others in similar situations, and there are established systems to help you. By the time the session ends, you will have a sense of direction that you didn't have before. You will move from asking "What am I going to do?" to saying "Here is the plan we are going to follow." This shift in mindset is the foundation of a successful recovery.
                </p>
              </div>

              <h2 id="expert-providers" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Why Choose CredSettle, Amalegalsolutions, or Settleloans?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  In the growing industry of debt relief in India, not all providers are created equal. When you are looking to <strong>get a free consultation for debt settlement options</strong>, it is vital to choose organizations that have a track record of integrity and success. This is where <strong>CredSettle</strong> stands out as a leader. We prioritize the borrower's well being, ensuring that every piece of advice is grounded in both financial logic and ethical practice. Our team consists of experts who have navigated thousands of settlements, giving us a deep reservoir of experience to draw from for your benefit.
                </p>
                <p>
                  Similarly, <strong>Amalegalsolutions</strong> provides a robust legal framework for those facing complex debt issues. Often, debt settlement isn't just about the numbers; it's about understanding the legal notices and the rights of the consumer under Indian law. Having a legal perspective ensures that you are protected from illegal recovery tactics and that any settlement you reach is legally binding and final. Combining financial strategy with legal expertise is the hallmark of a high quality debt relief plan.
                </p>
                <p>
                  For those looking for a wide range of options, <strong>settleloans</strong> offers another specialized approach to handling various types of credit products. Whether it is a revolving credit card balance or a high interest personal loan, having access to multiple expert viewpoints allows you to find the most compatible fit for your personality and financial goals. The key is to work with established names that have a physical presence and a reputation for transparency. Avoid "fly by night" operators who make grand promises without explaining the process or the risks involved.
                </p>
                <p>
                  The collaboration between these types of professional services creates a safety net for the Indian consumer. When you consult with <strong>CredSettle</strong>, you are gaining access to a network of professionals who understand the specific policies of major Indian banks like HDFC, ICICI, SBI, and Axis Bank. This local knowledge is crucial because the settlement process in India has its own unique cultural and regulatory requirements. Choosing a reputable partner means you are not just getting a service; you are getting a shield and a guide through the toughest financial challenge of your life.
                </p>
              </div>

              <h2 id="process-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What Happens During Your Consultation?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you have never spoken to a debt expert before, you might be curious about what the actual session looks like. When you book your session with CredSettle, the process is streamlined and professional. It begins with a detailed intake where we gather the facts. We will ask about the total amount you owe, how long you have been in default, and what caused your financial hardship. Was it a job loss, a medical emergency, or a business failure? These details are important because they form the basis of the narrative we will eventually present to your creditors.
                </p>
                <p>
                  Next, we conduct a "Budget Analysis." This is where we look at your monthly income and your essential expenses like rent, food, and education. The goal is to determine how much you can realistically save toward a settlement fund each month. We don't want you to agree to a plan that you cannot sustain. A successful settlement requires a dedicated savings approach, and your consultant will help you calculate a timeline based on your capacity to save. This is a practical, numbers based discussion that removes the guesswork from your recovery.
                </p>
                <p>
                  The third phase is the "Strategy Session." Based on your list of creditors, your consultant will explain which banks are currently open to settlement and what kind of discounts we have seen from them recently. We will discuss the potential hurdles, such as aggressive recovery agencies or pending legal notices. This is the time for you to ask every question you have. No question is too small or too silly. We want you to leave the consultation with a full understanding of the journey ahead, including the potential impact on your credit score and the timeline for resolution.
                </p>
                <p>
                  Finally, we discuss the "Next Steps." If we believe you are a good candidate for our program, we will outline the enrollment process, our fee structure, and how we will begin the work of protecting you from harassment. If we feel that debt settlement is not the right choice for you—for example, if your debt is too small or if you have enough assets to pay it off in full—we will be honest about that too. Our goal at CredSettle is to provide the best outcome for you, even if that means pointing you toward a different solution.
                </p>
              </div>

              <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Qualifying for Debt Settlement Relief</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  It is important to note that debt settlement is not a "magic wand" that makes debt disappear for everyone. It is a specific solution for a specific set of problems. During your consultation, we will determine if you qualify based on several key factors. The most important criterion is "Genuine Hardship." You must be able to demonstrate that your financial situation has changed significantly and that you truly cannot afford the original terms of your loan. Banks are willing to settle when they see that the default is due to necessity, not choice.
                </p>
                <p>
                  Another factor is the "Type of Debt." As mentioned earlier, debt settlement is almost exclusively for unsecured debt. This includes credit card balances, personal loans, and some business loans without collateral. If your debt is secured by your home or your car, the bank has the right to repossess those assets, which makes settlement much more difficult. We will look at your total debt portfolio and identify which portions are eligible for the settlement process and which ones you need to continue paying to protect your property.
                </p>
                <p>
                  "Delinquency Status" also plays a role. Generally, banks are not interested in settling a debt that is current. You usually need to be several months behind on payments for the bank to consider a settlement offer. This is because, from the bank's perspective, as long as you are paying, there is no reason for them to accept less. However, we do not recommend that you intentionally stop paying just to get a settlement. This decision has serious consequences for your credit score and should only be made if you literally cannot afford the payments.
                </p>
                <p>
                  Finally, we look at your "Ability to Settle." Even if the bank agrees to a 50 percent discount, you still need to be able to pay that remaining 50 percent. This can be done as a lump sum or sometimes through a short term payment plan. If you have no income and no way to raise any funds, settlement may not be feasible yet. Your consultant will help you determine if you have the financial foundation to start the process or if you need to focus on increasing your income first.
                </p>
              </div>

              <h2 id="credit-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Reality of Credit Score Impact</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  One of the most common questions we receive when people <strong>get a free consultation for debt settlement options</strong> is about the CIBIL score. It is essential to be honest: debt settlement will have a negative impact on your credit score in the short term. When an account is settled, it is reported to the credit bureaus as "Settled" rather than "Paid in Full." This tells future lenders that you did not fulfill the original contract, which can make it difficult to get new loans for several years.
                </p>
                <p>
                  However, we must put this in context. If you are already missing payments or if your debt to income ratio is dangerously high, your credit score is already suffering. The damage from continuous late payments and mounting interest can be even worse than the damage from a settlement. A settlement allows you to "stop the bleeding." It brings the account to a close, stops the accrual of interest and penalties, and eventually allows you to begin the process of credit rebuilding.
                </p>
                <p>
                  During your consultation, your expert will explain the long term view. Think of your credit score like your health. If you have a serious infection (debt), you might need a strong medication (settlement) that has some side effects (credit drop). But once the infection is gone, you can start exercising and eating well (rebuilding credit) to become healthy again. We provide our clients with guidance on how to improve their scores after the settlement process is complete, ensuring that the setback is only temporary.
                </p>
                <p>
                  Many of our clients find that the peace of mind of being debt free is worth the temporary drop in their credit score. When you are no longer worried about how you will pay for groceries or when the next recovery agent will show up at your door, you have the mental space to focus on your career and your future earnings. A credit score can be rebuilt, but your health and your time cannot be replaced. We help you make an informed decision based on these trade offs.
                </p>
              </div>

              <h2 id="misconceptions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Common Misconceptions About Debt Relief</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  There is a lot of misinformation online regarding debt relief. Some people believe that debt settlement is "illegal" or that it is a "scam." In reality, debt settlement is a perfectly legal negotiation between two private parties. Banks have entire departments dedicated to "Special Assets" or "Recoveries" whose job is to negotiate these very settlements. It is a standard part of the banking industry worldwide. The key is to ensure that the process is handled professionally and that all agreements are documented in writing on the bank's official letterhead.
                </p>
                <p>
                  Another misconception is that the bank will "forgive" the debt if you just wait long enough. While it is true that some very old debts might be written off, the bank never truly forgets. They can sell the debt to a third party collection agency, or they can pursue legal action even years later. Waiting for debt to "go away" on its own is a dangerous strategy that often leads to more interest and higher legal risks. Proactive negotiation is always the better route.
                </p>
                <p>
                  Some believe that they will go to jail for not paying their credit card bills. In India, defaulting on a loan is a civil matter, not a criminal one. However, if you issue a cheque that bounces, that becomes a criminal offense under Section 138 of the Negotiable Instruments Act. This is a crucial distinction that we explain during every consultation. By settling your debt before it reaches the stage of legal litigation, you can avoid the stress of court appearances and potential criminal charges.
                </p>
                <p>
                  Finally, many people think they need to be "poor" to settle. Debt settlement is used by people across all income levels—from salaried employees to high net worth business owners. Financial crises don't discriminate. Whether your debt is 5 lakhs or 50 lakhs, the principles of negotiation remain the same. If your debt has become unsustainable relative to your current income and assets, you are a candidate for a consultation. Don't let your social status or your past success prevent you from getting the help you need today.
                </p>
              </div>

              <h2 id="legal-aspects" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Legal Safeguards and Consumer Rights</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When you <strong>get a free consultation for debt settlement options</strong>, we spend significant time discussing your rights. The Reserve Bank of India (RBI) has strict guidelines regarding how banks and their recovery agents should behave. You have the right to be treated with dignity. Harassment, verbal abuse, or calling you at unreasonable hours is a violation of these guidelines. Understanding this gives you the confidence to stand up for yourself during the negotiation period.
                </p>
                <p>
                  We also discuss the importance of the "Settlement Letter." You should never pay a single rupee toward a settlement until you have a formal letter from the bank that clearly states the agreed amount, the payment schedule, and a confirmation that this payment will settle the account in full. Our team at CredSettle reviews these letters for our clients to ensure there are no hidden clauses or "technical traps" that could allow the bank to come back for more money later.
                </p>
                <p>
                  In cases where a bank has already filed a legal case, we work alongside legal experts like Amalegalsolutions to handle the court proceedings. Settlement can often happen even after a case is filed, through Lok Adalats or out of court mediation. Knowing that you have a professional team handling the legal technicalities allows you to focus on your work and your family. We ensure that every step we take is within the bounds of the law, protecting your reputation and your future.
                </p>
                <p>
                  Consumer protection is at the heart of what we do. We believe that every borrower deserves a fair chance to resolve their debts without being exploited. By providing you with the right information during your consultation, we empower you to make decisions that are in your best interest. Whether you choose to work with us or not, we want you to leave the session knowing that you have rights and that there is a light at the end of the tunnel.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The free consultation was the turning point for me. I was drowning in 12 lakhs of credit card debt. The team at CredSettle explained the process so clearly that I felt a huge weight lift off my shoulders immediately."
                  </p>
                  <p className="font-bold text-blue-900">- Anjali Deshmukh, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was skeptical about debt settlement, but the transparency shown during the initial session convinced me. They didn't make false promises and were honest about the credit score impact. Professionalism at its best."
                  </p>
                  <p className="font-bold text-blue-900">- Vikram Singh, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "After my consultation with Amalegalsolutions and CredSettle, the harassment from recovery agents stopped within two weeks. Having experts handle the bank calls made all the difference in my recovery."
                  </p>
                  <p className="font-bold text-blue-900">- Karthik Raja, Chennai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Highly recommend the free consultation for anyone struggling with personal loans. They helped me settle for 45 percent of my balance, saving me lakhs of rupees in interest and penalties."
                  </p>
                  <p className="font-bold text-blue-900">- Sameer Khan, Hyderabad</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I spoke with settleloans and CredSettle before deciding. Both were incredibly helpful. The knowledge I gained in just 30 minutes saved me from making several costly mistakes on my own."
                  </p>
                  <p className="font-bold text-blue-900">- Meenakshi Iyer, Pune</p>
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
                  <h2 className="text-3xl font-bold mb-4">Take Control of Your Financial Future</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don't wait for the situation to get worse. Get a free consultation for debt settlement options today and start your journey back to solvency.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Book Your Free Session Now
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
                <h4 className="font-bold text-2xl mb-4">Free Expert Advice</h4>
                <p className="text-blue-100 mb-6 text-sm">Struggling with EMI payments? Get a professional roadmap to settle your debts today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Start Your Consultation
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>100% Confidential Session</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert RBI Guidelines Advice</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Stop Harassment Immediately</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Loan Settlement Guide</span>
                    </Link>
                  </li>
                  
                  
                  
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Financial Disclaimer: The information provided on this page is for educational purposes only. Debt settlement has an impact on credit scores. Please consult with our experts for advice tailored to your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
