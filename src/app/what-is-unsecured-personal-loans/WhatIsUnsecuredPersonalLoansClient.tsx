'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function WhatIsUnsecuredPersonalLoansClient() {
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
    { id: 'anatomy-unsecured-loan', label: 'The Anatomy of an Unsecured Personal Loan in India' },
    { id: 'secured-vs-unsecured', label: 'Secured vs. Unsecured Loans: The Legal Difference' },
    { id: 'why-no-immediate-confiscation', label: 'Why Lenders Cannot Confiscate Your Assets Immediately' },
    { id: 'when-debt-becomes-threat', label: 'When Unsecured Debt Becomes a Legal Threat' },
    { id: 'exact-timeline-default', label: 'The Exact Timeline of an Unsecured Loan Default' },
    { id: 'major-red-flags', label: 'Major Red Flags During the Recovery Process' },
    { id: 'case-study-survival', label: 'Case Study: Surviving an Unsecured Loan Default Without Asset Loss' },
    { id: 'borrowers-misstep', label: 'The Borrowers Misstep and Correction' },
    { id: 'faqs', label: 'Frequently Asked Questions About Unsecured Loans' }
  ];

  const faqs = [
    {
      question: 'What is an unsecured personal loan?',
      answer: 'An unsecured personal loan is a form of debt that is not backed by any collateral. In the event of a default, the lender cannot automatically seize your house, car, or other physical assets to recover the outstanding balance.'
    },
    {
      question: 'Can I go to jail for defaulting on an unsecured loan in India?',
      answer: 'No. Defaulting on a personal loan is considered a civil breach of contract, not a criminal offense. You cannot be imprisoned solely for the inability to repay an unsecured debt.'
    },
    {
      question: 'What happens if I miss my first EMI on a personal loan?',
      answer: 'Missing a single EMI will trigger late payment fees and automated reminder calls. Your account enters the SMA-0 (Special Mention Account) category, but it is not immediately classified as a Non-Performing Asset (NPA).'
    },
    {
      question: 'When does an unsecured loan become a Non-Performing Asset (NPA)?',
      answer: 'An account is typically classified as a Non-Performing Asset (NPA) after 90 consecutive days of non-payment. At this stage, the bank accelerates recovery efforts and may consider settlement options.'
    },
    {
      question: 'Can recovery agents visit my office for an unsecured loan default?',
      answer: 'While recovery agents can visit you, RBI guidelines strictly prohibit them from humiliating you at your workplace or disclosing your debt to your employer. Any such action constitutes harassment and can be legally challenged.'
    },
    {
      question: 'Can a bank freeze my salary account if I default on an unsecured loan?',
      answer: 'Yes, if your salary account is with the same bank that issued the loan, they can use the Bankers Right of General Lien or Right to Set-Off to deduct outstanding dues from your incoming salary.'
    },
    {
      question: 'Is loan settlement possible for unsecured personal loans?',
      answer: 'Yes. Since unsecured loans lack collateral, banks are often willing to negotiate a One-Time Settlement (OTS) when the account is highly delinquent and recovering the full amount seems unlikely.'
    }
  ];

  const reviews = [
    {
      name: "Suresh Pillai",
      location: "Chennai",
      rating: 5,
      text: "I was drowning in an unsecured personal loan and the collection calls were destroying my mental health. I thought they would take my family home. Understanding the real difference between secured and unsecured debt changed everything. The experts helped me stop the harassment and settle my loan for a fraction of what I owed.",
      date: "June 2026"
    },
    {
      name: "Pooja Verma",
      location: "New Delhi",
      rating: 5,
      text: "When my business failed, my personal loan default seemed like the end of the world. The recovery agents used terrible red flag tactics, threatening a police case. Once I learned about the 90 day NPA timeline and engaged legal professionals, we brought the bank to the negotiating table and secured a proper legal settlement.",
      date: "May 2026"
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
                    What is Unsecured Personal Loans
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

            <section className="mb-10">
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  In India, nearly 78% of all personal loans disbursed are entirely unsecured, meaning the lender has zero direct collateral to seize if you default. However, this absence of collateral often triggers extremely aggressive psychological recovery tactics within just 30 days of a missed EMI. When you search for what is unsecured personal loans, you are likely looking for the legal reality of what happens when you cannot pay them back.
                </p>
                <p>
                  Countless borrowers lose sleep, suffer immense stress, and make terrible financial decisions simply because they do not understand the fundamental nature of their debt. An unsecured loan relies entirely on your promise to pay, evaluated at the time of disbursement based on your credit score and salary slips. It does not give the lending institution a direct, immediate legal right to your tangible property.
                </p>
                <p>
                  The confusion between different types of debt allows recovery agencies to operate in a gray area of fear. By deliberately blurring the lines, collection agents convince vulnerable borrowers that their assets are at immediate risk, pushing them to liquidate savings or borrow from predatory sources. The reality is that the legal system in India provides distinct pathways for different types of debt recovery, and understanding these pathways is your first line of defense.
                </p>
                <p>
                  This comprehensive legal breakdown will explain exactly what constitutes an unsecured loan, contrast it with secured debt, detail the specific timeline of a default, expose the red flags of illegal recovery tactics, and provide a roadmap for resolving the debt through strategic negotiation rather than capitulation.
                </p>
              </div>
            </section>

            <section>
              <h2 id="anatomy-unsecured-loan" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">The Anatomy of an Unsecured Personal Loan in India</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  At its core, an unsecured personal loan is a financial product extended purely on the basis of your perceived creditworthiness. When a bank or Non Banking Financial Company (NBFC) approves this loan, they are taking a calculated risk. They have analyzed your CIBIL score, your employment history, and your debt to income ratio, determining that you are statistically likely to repay the principal amount along with the designated interest.
                </p>
                <p>
                  The critical defining feature is the total lack of underlying collateral. You have not pledged your apartment, your gold jewelry, or your vehicle as security. Because the risk is entirely borne by the lender, unsecured loans command significantly higher interest rates than secured loans. This high interest rate is essentially the premium the bank charges for operating without a safety net.
                </p>
                <p>
                  When you sign the loan agreement, you are entering into a civil contract. A breach of this contract, which occurs when you fail to make your Equated Monthly Installment (EMI) payments, initiates a civil dispute. The entire framework of recovery must operate within the boundaries of civil law. Borrowers often face severe anxiety regarding the <Link href="/punishment-for-non-payment-of-personal-loan-in-india" className="text-blue-600 font-bold hover:underline">punishment for non payment of personal loan in India</Link>, fearing criminal consequences for a purely civil matter.
                </p>
              </div>
            </section>

            <section>
              <h2 id="secured-vs-unsecured" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Secured vs. Unsecured Loans: The Legal Difference</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  To fully grasp your leverage during a financial crisis, you must differentiate between secured and unsecured debt. The legal mechanisms available to the lender change drastically depending on this classification.
                </p>

                <h3 id="why-no-immediate-confiscation" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Why Lenders Cannot Confiscate Your Assets Immediately</h3>
                <p>
                  In a secured loan scenario, such as a home loan or an auto loan, the asset itself acts as the guarantee. If you default on your car loan, the lender holds a hypothecation over the vehicle. After following due process, they can physically repossess the car, auction it, and recover their dues. Similarly, under the SARFAESI Act, banks can take possession of a mortgaged residential property to recover a home loan default without requiring extensive court intervention.
                </p>
                <p>
                  Unsecured personal loans enjoy no such privilege. Because there is no pledged asset, the SARFAESI Act does not apply. The bank cannot unilaterally decide to attach your property, seize your vehicle, or lock your home. Any recovery agent threatening immediate asset confiscation for an unsecured personal loan is bluffing and employing illegal intimidation tactics.
                </p>

                <h3 id="when-debt-becomes-threat" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">When Unsecured Debt Becomes a Legal Threat</h3>
                <p>
                  This does not mean you are immune to legal action. While they cannot seize assets directly, lenders have alternative legal avenues. The most common tool utilized is the Negotiable Instruments Act, specifically regarding bounced security cheques or failed Electronic Clearing Service (ECS) mandates. If you provided post dated cheques that bounce due to insufficient funds, the lender can initiate a criminal proceeding under Section 138 of the NI Act.
                </p>
                <p>
                  Additionally, the lender can file a civil recovery suit in a competent court. If they win a decree from the civil court, that court order can eventually be used to attach your assets or freeze your bank accounts. However, this is a protracted, expensive, and time consuming legal process. Lenders vastly prefer negotiated settlements over a multi year civil litigation battle, which forms the basis for effective <Link href="/loan-settlement-for-salaried-people" className="text-blue-600 font-bold hover:underline">loan settlement for salaried people</Link>.
                </p>
              </div>
            </section>

            <section>
              <h2 id="exact-timeline-default" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">The Exact Timeline of an Unsecured Loan Default</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Knowing the precise timeline of a loan default removes the element of surprise and allows you to plan your defense strategically. Lenders operate on strict internal schedules dictated by Reserve Bank of India (RBI) provisioning norms.
                </p>

                <div className="my-12">
                  <h4 className="font-bold text-blue-900 text-base mb-8 border-b-2 border-blue-100 pb-2">The 90 Day Default Trajectory</h4>
                  
                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">1</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Days 1 to 30: The Reminder Phase</h5>
                      <p className="text-gray-700">The moment your EMI bounces, your account is flagged as Special Mention Account 0 (SMA-0). You will receive automated SMS alerts and emails regarding the missed payment. Late payment penalty fees and bounce charges are added to your outstanding principal. The bank's internal telecalling team will begin making polite but firm reminder calls, urging immediate payment to avoid further penalties.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">2</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Days 31 to 60: The Escalation Phase</h5>
                      <p className="text-gray-700">If the debt remains unpaid, the account moves to SMA-1 status. The frequency and intensity of the calls increase significantly. The bank may outsource the initial calling process to third party collection agencies. You may receive the first formal legal warning letter via email or post. The tone shifts from a reminder to a demand, often highlighting potential damage to your credit score.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">3</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Days 61 to 90: The Pre NPA Phase</h5>
                      <p className="text-gray-700">At SMA-2, the situation becomes critical. Field recovery agents may be dispatched to your registered residential or official address. The psychological pressure reaches its peak. The bank will issue a formal loan recall notice, demanding the entire outstanding loan amount rather than just the missed EMIs. The threat of legal action becomes imminent.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">4</div>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-base mb-2">Day 90 and Beyond: Non Performing Asset (NPA)</h5>
                      <p className="text-gray-700">Once 90 days have elapsed without a payment covering the overdue amount, the account is officially classified as a Non Performing Asset. For a detailed breakdown of this critical phase, it is vital to read about <Link href="/understanding-90-day-loan-default-india" className="text-blue-600 font-bold hover:underline">understanding 90 day loan default India</Link>. The bank must now provision for this bad debt on their balance sheet. It is at this stage that the bank becomes genuinely open to discussing a One Time Settlement (OTS) to recover whatever fraction of the debt they can salvage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="major-red-flags" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Major Red Flags During the Recovery Process</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Because they lack physical collateral, recovery agencies often rely on fear and intimidation to force payments. It is crucial to identify when collection efforts cross the boundary from legal demands into illegal harassment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 text-base mb-4">Fake Police Threats</h4>
                    <p className="text-gray-800 text-base">
                      A common red flag is receiving calls from individuals claiming to be police officers or court officials, stating that an arrest warrant has been issued against you for failing to pay the personal loan. The police do not call to mediate civil loan disputes or warn you of impending arrests over the phone.
                    </p>
                  </div>
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 text-base mb-4">Workplace Defamation</h4>
                    <p className="text-gray-800 text-base">
                      Recovery agents may threaten to visit your office to publicly shame you in front of your colleagues and superiors, or they may send emails to your HR department detailing your debt. This is a severe violation of privacy laws and RBI guidelines regarding third party disclosure.
                    </p>
                  </div>
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 text-base mb-4">Abusive Language and Timings</h4>
                    <p className="text-gray-800 text-base">
                      Receiving calls before 8:00 AM or after 7:00 PM is strictly prohibited. Furthermore, the use of foul language, insults, or physical threats by any agent is a criminal offense. You have the absolute right to record these interactions and file a police complaint for criminal intimidation.
                    </p>
                  </div>
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 text-base mb-4">Fabricated Legal Notices</h4>
                    <p className="text-gray-800 text-base">
                      Agencies often send documents formatted to look like official court summons, complete with fake stamps and seals. A genuine court summons will have a valid case number, the signature of a judge or court registrar, and proper jurisdictional details. Always verify legal documents with a qualified advocate.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="case-study-survival" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Case Study: Surviving an Unsecured Loan Default Without Asset Loss</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Consider the case of Mr. Sharma, a marketing executive who secured a personal loan of eight lakh rupees to fund a family wedding. Six months later, a sudden company restructuring led to his termination. Without a steady income, he quickly defaulted on his monthly EMIs.
                </p>
                
                <div className="bg-gray-900 p-10 md:p-14 rounded-3xl text-white shadow-2xl relative overflow-hidden my-12">
                  <div className="relative z-10">
                    <h4 className="text-base font-bold mb-8 text-yellow-400">The Anatomy of Strategic Resolution</h4>
                    
                    <div className="space-y-6 text-base">
                      <p><strong className="text-yellow-400">The Onset of Harassment:</strong> By the second month of default, Mr. Sharma was receiving over forty calls a day. A recovery agent visited his apartment complex and loudly informed the security guard that Mr. Sharma was a fraudster attempting to abscond.</p>
                      
                      <p><strong className="text-yellow-400">The Escalation:</strong> The agency sent a fabricated legal notice via WhatsApp, threatening to bring a police team to seize his household appliances and his wifes jewelry to auction them off. Terrified of the social stigma and asset loss, Mr. Sharma considered borrowing from an illegal loan app at extortionate interest rates.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-600 rounded-full -mr-40 -mt-40 opacity-10 blur-[100px]"></div>
                </div>

                <h3 id="borrowers-misstep" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The Borrowers Misstep and Correction</h3>
                <p>
                  Mr. Sharmas initial instinct to capitulate to fear was his biggest misstep. Fortunately, before taking another predatory loan, he consulted with legal professionals specializing in debt resolution. The legal team immediately recognized the red flags. They drafted a strong cease and desist notice citing RBI circulars on harassment and dispatched it to the banks nodal officer and the collection agency.
                </p>
                <p>
                  The legal experts educated Mr. Sharma that his unsecured loan gave the bank zero authority to touch his household goods or his wifes assets. Once the fear of illegal confiscation was removed, Mr. Sharma regained his composure. He waited until the account was officially declared an NPA at the 90 day mark.
                </p>
                <p>
                  Armed with proof of his termination and prolonged unemployment, the legal team initiated formal negotiations for a One Time Settlement. Because the bank realized they had exhausted their legal leverage against an unemployed individual with no attachable assets, they agreed to settle the eight lakh rupee debt for a single payment of three lakh rupees. Mr. Sharma arranged the funds through family support, received a formal NOC, and permanently closed the chapter without losing his dignity or his assets.
                </p>
              </div>
            </section>

            <section>
              <h2 id="faqs" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions About Unsecured Loans</h2>
              <div className="space-y-10 mb-20">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                    <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-base font-bold text-gray-900 mb-8">Client Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500 font-medium">{review.date}</span>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed italic mb-6 flex-grow">"{review.text}"</p>
                    <div className="mt-auto">
                      <p className="font-bold text-gray-900 text-base">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </article>
          
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="/default-user.svg" alt="Rajesh Kumar" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 object-cover" />
                <h4 className="font-bold text-gray-900">Rajesh Kumar</h4>
                <p className="text-sm text-gray-500 mb-4">Senior Legal Consultant</p>
                <p className="text-xs text-gray-400">Expert in debt management and providing strategic legal resolution for retail borrowers in India.</p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
