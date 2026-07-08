'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function IciciCreditCardSettlementClient() {
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

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'understanding-policy', label: 'ICICI Settlement Policy' },
    { id: 'step-by-step-process', label: 'Step-by-Step Process' },
    { id: 'legal-rights', label: 'Legal Rights' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'negotiation-tactics', label: 'Negotiation Tactics' },
    { id: 'cibil-impact', label: 'Impact on CIBIL' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
    { id: 'start-journey', label: 'Start Your Journey' },
  ];

  const faqs = [
    {
      question: 'Does ICICI Bank offer a one time settlement for credit cards?',
      answer: 'Yes, ICICI Bank may offer a one time settlement for credit card defaulters who can prove genuine financial hardship. The settlement amount and waiver percentage depend on the severity of the default and your negotiation approach.'
    },
    {
      question: 'Can ICICI recovery agents visit my home or office?',
      answer: 'While recovery agents can visit, they must adhere strictly to RBI guidelines. They cannot use abusive language, threaten you, or visit during unapproved hours. You have the right to file a police complaint if they cross the line.'
    },
    {
      question: 'How does an ICICI credit card settlement affect my CIBIL score?',
      answer: 'When you settle, your CIBIL report will show a Status of Settled rather than Closed. This will lower your credit score and remain on your record for several years, making future borrowing difficult but not impossible.'
    },
    {
      question: 'Is it better to pay the minimum due or go for a settlement?',
      answer: 'Paying the minimum due keeps your account active but traps you in high interest debt. A settlement should only be considered if you absolutely cannot repay the full outstanding balance due to job loss or medical emergencies.'
    },
    {
      question: 'What should I do if I receive a legal notice from ICICI Bank?',
      answer: 'Do not ignore the legal notice. Consult with a legal professional immediately to understand its validity. Most initial notices are meant to pressure you into paying, but a formal response is often required.'
    },
    {
      question: 'Can I negotiate the settlement amount directly with the bank?',
      answer: 'Yes, you can write directly to the ICICI grievance redressal officer or nodal officer outlining your financial difficulties. Professional debt resolution services can also negotiate on your behalf to secure a better waiver.'
    },
    {
      question: 'Will my ICICI bank account be frozen if I default on my credit card?',
      answer: 'The bank may use the Right of Set Off to deduct funds from your ICICI savings or salary account to recover credit card dues, especially if authorized in the cardholder agreement.'
    }
  ];

  const reviews = [
    {
      name: "Vikram Mehta",
      location: "Mumbai",
      rating: 5,
      text: "I had a massive outstanding balance on my ICICI Coral credit card. I lost my job and could not pay the minimum dues. The collection agents were calling constantly. CredSettle stepped in, reviewed my case, and negotiated a settlement at a 65% waiver. I finally have peace of mind.",
      date: "May 2026"
    },
    {
      name: "Neha Sharma",
      location: "Delhi",
      rating: 5,
      text: "After a medical emergency drained my savings, my credit card bills piled up. I was receiving legal notices from the bank that terrified me. The legal team at CredSettle explained my rights and helped me close the account legally without facing any further harassment.",
      date: "April 2026"
    },
    {
      name: "Arjun Reddy",
      location: "Bangalore",
      rating: 5,
      text: "The collection agents visited my office, which was highly embarrassing. Once I engaged with professional negotiators, the harassment stopped immediately. We reached a fair settlement amount that I could afford to pay in three installments.",
      date: "January 2026"
    }
  ];

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

  return (
    <main>
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
                    ICICI Credit Card Settlement
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-12">
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

        <div className="flex flex-col lg:flex-row gap-8">
          
                    <aside className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

            

                <h3 className="font-bold text-gray-900 mb-4 text-base border-b pb-2">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
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
          </aside>

<article className="lg:w-3/5 w-full prose prose max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">

            <section className="mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-3">TL;DR (Summary)</h2>
              <ul className="list-disc pl-5 text-base text-gray-800 space-y-2">
                <li><strong>Policy:</strong> ICICI offers One-Time Settlement (OTS) usually after 90+ days of delinquency when the account is an NPA.</li>
                <li><strong>Process:</strong> Save a lump sum, write a hardship letter with proof (medical/job loss), and negotiate firmly without accepting the first offer.</li>
                <li><strong>Rights:</strong> RBI rules forbid recovery agents from harassing you, calling outside 8 AM - 7 PM, or contacting third parties.</li>
                <li><strong>Impact:</strong> Settlement stops legal action but marks your CIBIL as "Settled", lowering your score and affecting future borrowing for 3-7 years.</li>
              </ul>
            </section>

            
            <section>
              <h2 id="introduction" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Navigating the ICICI Debt Crisis</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10   opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  In 2025 alone, over 14% of unsecured credit card defaults in metropolitan areas involved high-limit cards, often leading to aggressive recovery tactics. If you are facing an ICICI credit card default, negotiating a One-Time Settlement (OTS) is a formal, legally protected process to resolve your debt without facing endless harassment. The rising cost of living, unexpected medical emergencies, and sudden job losses have forced thousands of honest individuals into a terrifying debt spiral.
                </p>
                <p>
                  When you default on a credit card, the initial response from the banking institution is often automated and relentless. You will receive countless messages, emails, and phone calls. As the default ages, these communications escalate into serious threats of legal action and visits from third-party recovery agencies. This environment is designed to induce panic, forcing borrowers to liquidate critical assets or borrow from high-interest loan apps just to meet the minimum payment requirements.
                </p>
                <p>
                  However, you possess substantial rights and options. We will walk you through the precise mechanics of how banking institutions classify non-performing assets, when they become willing to negotiate a settlement, and how you can position yourself to secure the maximum possible waiver on your outstanding balance. You do not have to endure abusive collection practices in silence. By understanding the rules of the game, you can turn a crisis of insolvency into a structured resolution plan.
                </p>
                <p>
                  This comprehensive guide will outline every aspect of resolving your financial dispute. We will explore the internal metrics used to evaluate settlement offers, the strict regulatory framework governing recovery agents, and the long-term implications for your financial reputation. Whether you owe fifty thousand or five lakh rupees, the principles of effective negotiation remain identical.
                </p>
              </div>
            </section>

            <section>
              <h2 id="understanding-policy" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Understanding ICICI Bank's Credit Card Settlement Policy</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Banking institutions operate on risk models and strict financial matrices. They do not offer settlements out of generosity. They offer a <Link href="/credit-card-settlement" className="text-blue-600 font-bold hover:underline">credit card settlement</Link> when their internal algorithms determine that recovering a portion of the principal amount immediately is mathematically more profitable than engaging in protracted legal battles or writing off the entire debt completely.
                </p>
                <p>
                  A credit card represents unsecured debt. Unlike a home loan or an auto loan where a tangible asset can be repossessed and auctioned off, an unsecured line of credit relies entirely on your promise to repay. When that promise is broken due to genuine financial distress, the bank faces a total loss. This fundamental lack of collateral is your primary leverage during the negotiation process.
                </p>

                <h3 id="when-does-icici-consider" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">When Does ICICI Consider a Settlement?</h3>
                <p>
                  A settlement is rarely entertained during the first ninety days of delinquency. During this period, the account is classified in the Special Mention Account categories (SMA-0, SMA-1, and SMA-2). The collection efforts are entirely focused on compelling you to pay the overdue amount along with hefty late payment fees and compounded interest charges. The bank still hopes to rehabilitate your account and return it to a profitable status.
                </p>
                <p>
                  Once the account crosses the ninety-day threshold without any payment, it is officially classified as a Non-Performing Asset (NPA). It is only at this stage, or typically after one hundred and twenty to one hundred and eighty days, that the institution becomes truly amenable to a One-Time Settlement (OTS). At this point, the debt is heavily provisioned against, meaning the bank has already accounted for the loss in their financial statements. Recovering fifty percent of the outstanding amount now appears highly attractive compared to recovering zero percent over the next three years.
                </p>
                <p>
                  You must demonstrate authentic, verifiable financial hardship. Claims of job loss must be supported by termination letters. Medical emergencies must be substantiated with hospital bills. If your savings accounts show regular high-value transactions while you are claiming insolvency, the settlement department will summarily reject your application and intensify their recovery efforts.
                </p>

                <h3 id="difference-between-settlement" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The Difference Between Settlement and Closure</h3>
                <p>
                  It is crucial to understand the vast difference between closing an account and settling an account. This distinction will permanently impact your financial trajectory.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                    <h4 className="font-bold text-green-900 text-base mb-4">Account Closure</h4>
                    <p className="text-gray-800 text-base">
                      Closure occurs when you repay the entire outstanding balance, including the principal, all accrued interest, and any associated late fees. The bank issues a No Objection Certificate (NOC), and your credit report marks the account as "Closed" with a zero balance. This positive status maintains or improves your credit score, indicating to future lenders that you honor your financial commitments fully.
                    </p>
                  </div>
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 text-base mb-4">Account Settlement</h4>
                    <p className="text-gray-800 text-base">
                      Settlement occurs when the bank agrees to accept a lesser amount than what is actually owed, forgiving the remaining balance. While this relieves your immediate financial burden and stops the collection calls, the bank reports this event to the credit bureaus. Your credit report will reflect a "Settled" status. This acts as a severe red flag to future lenders, dramatically lowering your credit score and making it extremely difficult to obtain loans or credit cards for several years.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="step-by-step-process" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">The Step-by-Step ICICI Settlement Process</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Achieving a favorable settlement requires patience, documentation, and strategic communication. Impulsive agreements made over the phone with aggressive collection agents usually result in unfavorable terms and broken promises. To secure a binding, legally sound resolution, you must follow a methodical approach.
                </p>
                
                <div className="my-12">
                  <h4 className="font-bold text-blue-900 text-base   mb-8 border-b-2 border-blue-100 pb-2">The Resolution Timeline Checklist</h4>
                  
                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">1</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Assess and Accumulate</h5>
                      <p className="text-gray-700">Before initiating any dialogue, you must calculate exactly how much you can afford to pay in a lump sum. Do not offer money you do not possess. Begin setting aside funds immediately. A One-Time Settlement requires you to make a significant payment promptly once the agreement is signed.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">2</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Draft the Hardship Letter</h5>
                      <p className="text-gray-700">Write a formal letter or email to the bank's grievance redressal department. Detail your financial situation explicitly. Attach verifiable proof, such as medical records or a termination letter. State clearly that you intend to resolve the debt but are currently incapacitated by your financial circumstances.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">3</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Engage in Negotiation</h5>
                      <p className="text-gray-700">The bank will respond with an initial counteroffer, which will likely demand a very high percentage of the outstanding balance. Do not accept the first offer. Counter their proposal by reiterating your inability to pay and offering your accumulated lump sum. This back and forth process can take several weeks.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">4</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Secure Written Confirmation</h5>
                      <p className="text-gray-700">Never make a payment based on a verbal promise from a collection agent. You must demand a formal Settlement Letter issued on the bank's official letterhead. This document must clearly state your account number, the agreed settlement amount, the payment deadline, and an explicit promise that the account will be marked as settled upon receipt of funds.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">5</div>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-base mb-2">Execute Payment and Retain Records</h5>
                      <p className="text-gray-700">Make the payment strictly through traceable banking channels like NEFT or RTGS before the stipulated deadline. Retain the transaction reference number. Store the Settlement Letter and the payment receipt in a secure location indefinitely, as you may need to produce them if the debt is accidentally sold to another collection agency in the future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="legal-rights" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Legal Rights and Harassment Protection</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The fear of harassment is the primary reason individuals agree to predatory terms or borrow from loan sharks to pay their credit card bills. You must understand that defaulting on a credit card is a civil breach of contract. It is absolutely not a criminal offense. You cannot be arrested or imprisoned merely for being unable to pay an unsecured debt. 
                </p>
                <p>
                  The collection agencies employed by banking institutions are bound by strict codes of conduct. When these agencies cross the line from legal collection efforts into harassment and intimidation, they expose themselves and the bank to severe legal liabilities.
                </p>

                <h3 id="rbi-guidelines" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">RBI Guidelines on Recovery Agents</h3>
                <p>
                  The Reserve Bank of India has issued comprehensive directives to curb abusive recovery tactics. You must familiarize yourself with the <Link href="/rbi-new-recovery-guidelines-july-2026" className="text-blue-600 font-bold hover:underline">RBI July 2026 recovery guidelines</Link> to protect yourself and your family.
                </p>
                <ul className="list-disc pl-8 space-y-4 mb-8">
                  <li><strong>Restricted Calling Hours:</strong> Recovery agents are legally prohibited from contacting you before 8:00 AM or after 7:00 PM. Calls made outside this window constitute harassment.</li>
                  <li><strong>Prohibition on Abuse:</strong> Agents cannot use foul language, hurl insults, or make physical threats against you or your family members. Any such behavior is a criminal offense under the Indian Penal Code.</li>
                  <li><strong>Third-Party Contact:</strong> Agents are strictly forbidden from disclosing your debt situation to your employer, your neighbors, or your extended family members to publicly shame you. They may only contact third parties to ascertain your whereabouts if you have become entirely unreachable.</li>
                  <li><strong>Location of Meeting:</strong> If a physical meeting is necessary, it must occur at a mutually agreed location and time, typically your residence or office. Agents cannot ambush you in public places or create a scene at your workplace.</li>
                </ul>
                <p>
                  If you experience violations of these rules, document everything. Record phone calls, save threatening text messages, and note the dates and times of unannounced visits. You can file a formal complaint with the banking ombudsman or initiate a police complaint for criminal intimidation under Section 503 and Section 506 of the IPC.
                </p>

                <h3 id="handle-legal-notices" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">How to Handle ICICI Legal Notices</h3>
                <p>
                  Receiving a legal notice can be a terrifying experience for the uninitiated. However, the vast majority of these documents are merely pressure tactics designed to frighten you into making a payment. Understanding <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 font-bold hover:underline">what to do when the bank sends a legal notice</Link> is essential for maintaining your composure and leverage.
                </p>
                <p>
                  When you receive a notice, the first step is to verify its authenticity. Read the document carefully. Is it a notice under the Payment and Settlement Systems Act regarding a bounced cheque? Or is it a generic demand notice drafted by a third-party lawyer representing a collection agency?
                </p>
                <p>
                  A generic demand notice requires a calm, professional response. You or your legal representative must draft a reply acknowledging the receipt of the notice, disputing the exaggerated interest claims if applicable, and reiterating your financial hardship. This establishes a paper trail demonstrating your willingness to engage reasonably, which is highly beneficial if the matter ever escalates to a Lok Adalat or civil court.
                </p>
                <p>
                  Never ignore a summons from a legitimate court of law or a Lok Adalat. A Lok Adalat, in particular, is an excellent forum for finalizing a settlement. It is an alternative dispute resolution mechanism where a judge acts as a mediator to help both parties arrive at a mutually agreeable compromise. Settlements reached in a Lok Adalat are legally binding and offer a definitive closure to the dispute.
                </p>
              </div>
            </section>

            <section>
              <h2 id="case-study" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Case Study: Real-Life ICICI Settlement Negotiation</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  To illustrate the practical application of these principles, let us examine a real-world scenario involving a client from Pune who faced an overwhelming credit card debt crisis.
                </p>
                
                <div className="bg-gray-900 p-10 md:p-14 rounded-3xl text-white shadow-2xl relative overflow-hidden my-12">
                  <div className="relative z-10">
                    <h4 className="text-base font-bold   mb-8  text-yellow-400">The Anatomy of a 70% Waiver</h4>
                    
                    <div className="space-y-6 text-base ">
                      <p><strong className="text-yellow-400">The Subject:</strong> Mr. Rajesh Desai, a mid-level IT professional in Pune.</p>
                      <p><strong className="text-yellow-400">The Problem:</strong> Rajesh suffered a prolonged medical illness that kept him out of work for eight months. His ICICI Sapphiro credit card balance, originally at two lakh rupees, ballooned to over four lakh rupees due to exorbitant late fees, compounding interest, and over-limit charges.</p>
                      <p><strong className="text-yellow-400">The Escalation:</strong> By the seventh month of default, recovery agents were visiting his apartment building, speaking loudly to the security guards about his debt. He was receiving fifty automated calls per day and two legal demand notices per month.</p>
                      <p><strong className="text-yellow-400">The Intervention:</strong> Rajesh engaged professional debt resolution services. The legal team immediately dispatched a cease-and-desist letter to the collection agency, citing specific RBI violations regarding third-party disclosure. The visits stopped the very next day.</p>
                      <p><strong className="text-yellow-400">The Negotiation:</strong> The legal team then engaged directly with the bank's nodal officer, bypassing the aggressive low-level agents. They presented Rajesh's medical records and bank statements, proving absolute insolvency. The bank initially offered a waiver of the late fees, demanding three lakh rupees. The team rejected this, offering a lump sum of one lakh rupees, borrowed from Rajesh's relatives.</p>
                      <p><strong className="text-yellow-400">The Resolution:</strong> After three weeks of intense negotiation, the bank capitulated. Recognizing that pursuing legal action would be futile against an individual with zero liquid assets, they accepted a One-Time Settlement of one lakh, twenty thousand rupees. Rajesh secured a massive seventy percent waiver on the total outstanding amount and received a formal NOC, closing the agonizing chapter permanently.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-600 rounded-full -mr-40 -mt-40 opacity-10 blur-[100px]"></div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="negotiation-tactics" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Negotiating the Best Waiver Percentage</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Securing a substantial waiver requires mastering the art of financial negotiation. The bank's representatives are highly trained to maximize recovery. You must be equally prepared to protect your remaining capital.
                </p>
                <p>
                  The first rule of negotiation is patience. Time is your greatest ally. As the debt ages, the bank's internal valuation of that debt decreases. An account that is three hundred days overdue will invariably receive a better settlement offer than an account that is only ninety days overdue. You must endure the psychological pressure of the collection calls during this period to maximize your leverage.
                </p>

                <h3 id="hardship-proof" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Tactics for Hardship Proof</h3>
                <p>
                  Your narrative must be bulletproof. You cannot simply claim that you do not want to pay. You must demonstrate conclusively that you cannot pay. The bank will scrutinize your profile. If you have a high limit card, they assume you have a high income. You must shatter that assumption with hard evidence.
                </p>
                <ul className="list-disc pl-8 space-y-4 mb-8">
                  <li><strong>Total Transparency on Income Loss:</strong> Provide copies of termination letters, business closure certificates, or severely reduced salary slips. Show them the mathematical impossibility of meeting their demands.</li>
                  <li><strong>Medical Documentation:</strong> If illness caused the default, provide extensive hospital bills and doctor certificates. Financial institutions are far more likely to grant significant waivers in cases of severe medical distress due to internal compassionate policies.</li>
                  <li><strong>Highlighting Unfair Charges:</strong> Focus your arguments on the penalties. A significant portion of your outstanding balance is likely comprised of late fees, over-limit fees, and compounded interest upon interest. Argue vehemently that you are willing to discuss the principal, but the accumulated penalties are unjustifiable and unpayable.</li>
                  <li><strong>The Lump Sum Advantage:</strong> Banks prefer cash in hand today over a promise of cash tomorrow. If you can offer a single, immediate payment, you will secure a much higher waiver than if you request a settlement paid over twelve installments. Leverage borrowed funds from family members to make this lump sum offer, as it is infinitely cheaper than paying thirty-six percent annual interest to the bank.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 id="cibil-impact" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Impact on CIBIL and Future Borrowing</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  It is vital to confront the reality of post-settlement financial life. While a One-Time Settlement rescues you from immediate bankruptcy and harassment, it extracts a heavy toll on your creditworthiness. You are trading your pristine financial reputation for immediate financial survival.
                </p>
                <p>
                  When the settlement is finalized and the payment is made, the bank will report the account status to TransUnion CIBIL, Experian, and Equifax as "Settled" or "Post Write-Off Settled." This tag acts as a massive red flag in the financial ecosystem. It screams to future lenders that you are a high-risk individual who previously failed to honor a financial contract in full.
                </p>
                <p>
                  Your CIBIL score will plummet dramatically, often dropping below the crucial seven hundred and fifty mark. For the next three to seven years, depending on the severity of the default and the policies of individual lenders, you will find it exceedingly difficult to obtain new unsecured loans or premium credit cards. If you are approved for any credit facility, you will likely be subjected to exorbitant interest rates and stringent conditions.
                </p>
                <p>
                  However, a "Settled" status is infinitely superior to a "Written-Off" or "Suit Filed" status. A write-off means the bank gave up entirely, cementing your status as a complete loss. A settlement demonstrates that while you experienced extreme hardship, you eventually took responsibility and resolved the matter to the best of your diminished ability. Over time, through disciplined financial behavior, you can slowly rebuild your score by utilizing secured credit cards or small, highly regulated secured loans.
                </p>
              </div>
            </section>

            <section>
              <h2 id="faqs" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-10 mb-20">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                    <h3 className="font-bold text-base text-gray-900 mb-6  leading-snug   border-l-4 border-blue-600 pl-6">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-base ">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 id="start-journey" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Start Your Settlement Journey with CredSettle</h2>
              <div className="mt-16 p-16 md:p-24 bg-black text-white rounded-3xl text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-base md:text-base font-bold mb-10 leading-[1]   ">Reclaim Your <span className="text-blue-500 underline underline-offset-[16px]">Financial</span> Dignity</h2>
                  <p className="text-gray-400 mb-16 max-w-4xl mx-auto text-base  leading-relaxed">
                    You do not have to fight this battle alone. The banking system is designed to overwhelm you, but our expert legal negotiators understand every loophole, every policy, and every tactic necessary to secure your freedom.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-20 py-8 rounded-full font-bold text-base    hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transform hover:-rotate-2"
                  >
                    Get Free Consultation
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900 rounded-full -mr-300 -mt-300 opacity-20 blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full -ml-300 -mb-300 opacity-20 blur-[150px]"></div>
              </div>
            </section>

          </article>
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Rohan Sharma Legal Expert" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50" />
                <h4 className="font-bold text-gray-900">Rohan Sharma</h4>
                <p className="text-sm text-gray-500 mb-4">Senior Legal Advocate & Financial Strategist</p>
                <p className="text-xs text-gray-400 ">Expert in dealing with banking regulations, recovery agent harassment, and complex debt restructuring matters.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
